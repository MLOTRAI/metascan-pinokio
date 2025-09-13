module.exports = [
  {
    "method": "notify",
    "params": {
      "html": "Updating Metascan to latest version..."
    }
  },
  {
    "method": "shell.run",
    "params": {
      "message": "git pull origin main",
      "path": "app"
    }
  },
  {
    "method": "shell.run",
    "params": {
      "message": "pip install -r requirements.txt --upgrade",
      "path": "app",
      "venv": "env"
    }
  },
  {
    "method": "shell.run",
    "params": {
      "message": "python setup_models.py",
      "path": "app",
      "venv": "env"
    }
  },
  {
    "method": "notify",
    "params": {
      "html": "✅ <b>Metascan updated successfully!</b><br>Click 'Start' to launch the updated version."
    }
  }
]
