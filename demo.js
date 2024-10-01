function calculate_Sum(){
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);

    const sum = num1 + num2;
    document.getElementById('result').innerText = `The sum of ${num1} and ${num2} is ${sum}`;
}

document.getElementById('btn').addEventListener('click', calculate_Sum);