// App controller script for interacting with Databricks Apps REST API

async function startApp() {
  const url = document.getElementById('workspaceUrl').value;
  const token = document.getElementById('token').value;
  const appName = document.getElementById('appName').value;
  if (!url || !token || !appName) {
    alert('Please enter all fields');
    return;
  }
  try {
    const response = await fetch(`${url}/api/2.0/apps/start`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ app_id: appName })
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('status').innerText = `App started successfully: ${JSON.stringify(data)}`;
    } else {
      document.getElementById('status').innerText = `Error starting app: ${data.message || data.error}`;
    }
  } catch (error) {
    document.getElementById('status').innerText = `Network error: ${error.message}`;
  }
}

async function stopApp() {
  const url = document.getElementById('workspaceUrl').value;
  const token = document.getElementById('token').value;
  const appName = document.getElementById('appName').value;
  if (!url || !token || !appName) {
    alert('Please enter all fields');
    return;
  }
  try {
    const response = await fetch(`${url}/api/2.0/apps/stop`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ app_id: appName })
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('status').innerText = `App stopped successfully: ${JSON.stringify(data)}`;
    } else {
      document.getElementById('status').innerText = `Error stopping app: ${data.message || data.error}`;
    }
  } catch (error) {
    document.getElementById('status').innerText = `Network error: ${error.message}`;
  }
}

async function getAppStatus() {
  const url = document.getElementById('workspaceUrl').value;
  const token = document.getElementById('token').value;
  const appName = document.getElementById('appName').value;
  if (!url || !token || !appName) {
    alert('Please enter all fields');
    return;
  }
  try {
    const response = await fetch(`${url}/api/2.0/apps/get?app_id=${appName}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('status').innerText = `App status: ${JSON.stringify(data)}`;
    } else {
      document.getElementById('status').innerText = `Error getting status: ${data.message || data.error}`;
    }
  } catch (error) {
    document.getElementById('status').innerText = `Network error: ${error.message}`;
  }
}
