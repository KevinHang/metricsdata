// file that fills summary page with information

const summary = JSON.parse(shortSummary);

function lines(info) {
    return info.totalLines;
}

function keywords(info) {
    return info.totalKeywords;
}

function tests(info) {
    return info.totalTests;
}

document.getElementById('shortSummary').innerHTML = '<p id="summary">' + 'Lines of Code: ' + summary.map(lines) + '</p>' + '<p id="summary">' + 'Keywords: ' + summary.map(keywords) + '</p>' + '<p id="summary">' + 'Test cases: ' + summary.map(tests) + '</p>'