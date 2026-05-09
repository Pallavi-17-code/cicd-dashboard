async function loadDashboard() {

    const response = await fetch('/api/status');

    const data = await response.json();

    document.getElementById('github').innerText = data.github;

    document.getElementById('codebuild').innerText = data.codebuild;

    document.getElementById('docker').innerText = data.docker;

    document.getElementById('deployment').innerText = data.deployment;

    document.getElementById('containers').innerText = data.containers;

    document.getElementById('cpu').innerText = data.cpu;
}

// Load first time
loadDashboard();

// Refresh every 3 seconds
setInterval(loadDashboard, 3000);