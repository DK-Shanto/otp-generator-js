
function generateFixed() {
    const generatedNumber = Math.round(Math.random() * 10000);
    if ((generatedNumber + '').length == 4) {
        return generatedNumber;
    }
    else {
        return generateFixed();
    }
}

function generatePin() {
    const generatePinValue = generateFixed();
    document.getElementById('generate-output').value = generatePinValue;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const numberPressed = event.target.innerText;
    //console.log(numberPressed);
    const previousValue = document.getElementById('number-show');
    if (isNaN(numberPressed)) {
        if (numberPressed == 'C') {
            previousValue.value = '';
        }
    }
    else {
        const newValue = previousValue.value + numberPressed;
        previousValue.value = newValue;
    }
})

function submitButton() {
    const generateValue = document.getElementById('generate-output').value;
    const getValue = document.getElementById('number-show').value;
    if (generateValue == getValue) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('fail').style.display = 'none';
    }
    else {
        document.getElementById('fail').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
}
