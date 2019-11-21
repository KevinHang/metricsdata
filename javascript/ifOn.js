// This function only present in the summary page to make the design better
function ifOn(status) {
    if (!status) {
        return "Server offline. Unable to fetch data."
    } else {
        return ""
    }
}

document.getElementById('isOn').innerHTML = ifOn(status)