// Dashboard JavaScript

// Load data when page loads
document.addEventListener('DOMContentLoaded', function() {
    refreshData();
    // Auto-refresh every 30 seconds
    setInterval(refreshData, 30000);
});

// Fetch and update dashboard statistics
function refreshData() {
    fetch('/api/stats')
        .then(response => response.json())
        .then(data => {
            document.getElementById('total-users').textContent = data.total_users.toLocaleString();
            document.getElementById('active-sessions').textContent = data.active_sessions.toLocaleString();
            document.getElementById('revenue').textContent = '$' + data.revenue.toLocaleString('en-US', {minimumFractionDigits: 2});
            document.getElementById('last-updated').textContent = data.last_updated;
        })
        .catch(error => {
            console.error('Error fetching stats:', error);
            alert('Failed to fetch dashboard data');
        });
}
