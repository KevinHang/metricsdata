// this function checks whether the server is online and what to display
function statusOf(status) {
    if (!status) {
        return "Server: <span id='serverOff'>Offline</span>"
    } else {
        return "Server: <span id='serverOn'>Online</span>"
    }
}

function ifOn(status) {
    if (!status) {
        return "Server offline. Unable to fetch data."
    } else {
        return ""
    }
}

document.getElementById('status').innerHTML = statusOf(status);
document.getElementById('isOn').innerHTML = ifOn(status)