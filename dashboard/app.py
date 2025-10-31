from flask import Flask, render_template, jsonify
import datetime

app = Flask(__name__)

@app.route('/')
def index():
    """Main dashboard page"""
    return render_template('index.html')

@app.route('/api/stats')
def get_stats():
    """API endpoint to get dashboard statistics"""
    stats = {
        'total_users': 1250,
        'active_sessions': 45,
        'revenue': 12500.50,
        'last_updated': datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }
    return jsonify(stats)

@app.route('/api/health')
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'timestamp': datetime.datetime.now().isoformat()})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
