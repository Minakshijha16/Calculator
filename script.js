function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").value;

    // Replace display-friendly function names with JavaScript functions
    expression = expression.replace(/sin\(/g, "Math.sin(");
    expression = expression.replace(/cos\(/g, "Math.cos(");
    expression = expression.replace(/tan\(/g, "Math.tan(");
    expression = expression.replace(/log\(/g, "Math.log10(");

    try {
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (err) {
        document.getElementById("display").value = "Error";
    }
}
