module.exports = [
  {
    "method": "notify",
    "params": {
      "html": "Starting Metascan...<br><small>Opening desktop application</small>"
    }
  },
  {
    "method": "shell.run",
    "params": {
      "message": "python main.py",
      "path": "app",
      "venv": "env"
    }
  }
]
