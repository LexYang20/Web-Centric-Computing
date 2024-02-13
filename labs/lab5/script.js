document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('numberForm').addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();
    var userInput = document.getElementById('numberInput').value;
    var numbers = userInput.split(',').map(function(num) {
        return parseInt(num, 10);
    });

    var results = forLoop(numbers);
    displayResults('result', results);
}

function forLoop(numbers) {
    var primeCount = 0, compositeCount = 0, neitherCount = 0;
    for (var i = 0; i < numbers.length; i++) {
        var type = numberType(numbers[i]);
        if (type === 'prime') primeCount++;
        else if (type === 'composite') compositeCount++;
        else neitherCount++;
    }
    return { primeCount, compositeCount, neitherCount };
}

function numberType(num) {
    if (num < 2) return 'neither';
    if (num === 2) return 'prime';
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return 'composite';
    }
    return 'prime';
}

function displayResults(elementId, results) {
    var resultText = 'Prime Numbers: ' + results.primeCount + '<br>' +
                     'Composite Numbers: ' + results.compositeCount + '<br>' +
                     'Neither: ' + results.neitherCount;
    document.getElementById(elementId).innerHTML = resultText;
}
