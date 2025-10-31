# aws-bedrock
AWS Bedrock development with Claud Code
npm install -g @anthropic-ai/claude-code
export CLAUDE_CODE_USE_BEDROCK=1
export ANTHROPIC_MODEL='us.anthropic.claude-sonnet-4-5-20250929-v1:0'

claude

### Start Summary here

## Flask Dashboard

A Python Flask web dashboard with Bootstrap 5 for real-time analytics and monitoring.

### What Was Done

Created a complete Flask web application in the `dashboard/` folder with the following structure:
- Flask backend with API endpoints
- Bootstrap 5 responsive frontend
- Real-time data display with auto-refresh
- Custom styling and JavaScript functionality

### Features

- **Responsive Design**: Bootstrap 5 grid system for mobile and desktop
- **Real-time Statistics**: Displays Total Users, Active Sessions, Revenue, and Last Updated timestamp
- **Auto-refresh**: Dashboard data automatically refreshes every 30 seconds
- **Manual Refresh**: Button to manually refresh data on demand
- **API Endpoints**:
  - `/` - Main dashboard page
  - `/api/stats` - JSON endpoint for dashboard statistics
  - `/api/health` - Health check endpoint
- **Modern UI**: Clean card-based layout with hover effects

### Installation & Setup

1. Navigate to the dashboard folder:
```bash
cd dashboard
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Run the Flask application:
```bash
python app.py
```

4. Open your browser and visit:
```
http://localhost:5000
```

### Project Structure

```
dashboard/
├── app.py                  # Flask application with routes and API endpoints
├── requirements.txt        # Python dependencies (Flask, python-dotenv)
├── templates/
│   └── index.html         # Main dashboard page with Bootstrap 5
└── static/
    ├── css/
    │   └── style.css      # Custom styles
    └── js/
        └── dashboard.js   # Dashboard JavaScript functionality
```

### Customization

The dashboard currently displays sample data. To customize:
- Edit `app.py` to modify the `/api/stats` endpoint with your own data sources
- Update `templates/index.html` to add or modify dashboard cards
- Customize styling in `static/css/style.css`
- Modify refresh interval in `static/js/dashboard.js` (default: 30 seconds)