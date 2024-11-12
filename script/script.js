function addValue(){
    // get the operands value
    let num1 = document.getElementById("input_a").value;
    let num2 = document.getElementById("input_b").value;
    console.log(num1,num2);

    // parse to integer. You can use: parseInt(input, 10);
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    // perform operation
    let result = num1 + num2;

    // creating the text output
    text = `${num1} + ${num2} = ${result}`;

    // (if you want to check) print out in console
    console.log(`${num1} + ${num2} = ${result}`);

    // change the text area
    document.mycalculator.output.value = text;
}


function mulValue(){
     // get the operands value
    let num1 = document.getElementById("input_a").value;
    let num2 = document.getElementById("input_b").value;
    console.log(num1,num2);

    // parse to integer. You can use: parseInt(input, 10);
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    // perform operation
    let result = num1 * num2;

    // creating the text output
    text = `${num1} * ${num2} = ${result}`;

    // (if you want to check) print out in console
    console.log(`${num1} * ${num2} = ${result}`);

    document.mycalculator.output.value = text;
}

function divValue(){
     // get the operands value
    let num1 = document.getElementById("input_a").value;
    let num2 = document.getElementById("input_b").value;
    console.log(num1,num2);

    // parse to integer. You can use: parseInt(input, 10);
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1 === 0 || num2 === 0) {
        document.mycalculator.output.value  = "Cannot zero.";
    } else {
        // perform operation
        let result = num1 / num2;

        // creating the text output
        text = `${num1} / ${num2} = ${result}`;

        // (if you want to check) print out in console
        console.log(`${num1} / ${num2} = ${result}`);

        document.mycalculator.output.value = text;
    }
    
}
