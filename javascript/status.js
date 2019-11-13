function statusOf(status) {
    if (!status) {
        return "Server: <p id='serverOff'>Offline</p>"
    } else {
        return "Server: <p id='serverOn'>Online</p>"
    }
}

document.getElementById('status').innerHTML = statusOf(status);