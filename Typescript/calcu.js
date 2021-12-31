"use strict";
exports.__esModule = true;

var result = document.getElementById("inputlabel");

var calculate = function (operator) {
    result.value += operator;
};
//Convert string input into number
var strtonum = function () {
    return parseInt(result.value);
};

//farenhite to celcius
var fah = function () {
    var f = strtonum();
    var celcius = ((f - 32) * 5) / 9;
    result.value = celcius.toFixed(3);
};
//degree to radian
var deg = function () {
    var deg = strtonum();
    var radian = (deg * 3.14) / 180.0;
    result.value = radian.toFixed(3);
};
//sin function
var sin = function () {
    result.value = String(Math.sin(strtonum()));
};
//asinh function
var asinh = function () {
    result.value = String(Math.asinh(strtonum()));
};
//cosec function
var csc = function () {
    result.value = 1 / String(Math.sin(strtonum()));
}
//cos function
var cos = function () {
    result.value = String(Math.cos(strtonum()));
};
//acosh function
var acosh = function () {
    result.value = String(Math.acosh(strtonum()));
};
//sec function
var sec = function () {
    result.value = 1 / String(Math.cos(strtonum()));
}
//tan function
var tan = function () {
    result.value = String(Math.tan(strtonum()));
};
//atanh function
var atanh = function () {
    result.value = String(Math.atanh(strtonum()));
};
//Cot function
var cot = function () {
    result.value = 1 / String(Math.tan(strtonum()));
};
//log function
var log = function () {
    result.value = String(Math.log(strtonum()));
};
// log10 function
let ln = function () {
    result.value = String(Math.log10(strtonum()));
}
//floor function
var floor = function () {
    result.value = String(Math.floor(strtonum()));
};
//ceiling function
var ceil = function () {
    result.value = String(Math.ceil(strtonum()));
};
//round function
var round = function () {
    result.value = String(Math.round(strtonum()));
};
//sign function
var sign = function () {
    result.value = String(Math.sign(strtonum()));
}
//square root function
var sqrt = function () {
    result.value = String(Math.sqrt(strtonum()));
};
//Cube root function
var cbrt = function () {
    result.value = String(Math.cbrt(strtonum()));
}
// absolute value
var abs = function () {
    result.value = String(Math.abs(strtonum()));
};
//factorial
var factorial = function () {
    var n = strtonum();
    var answer = 1;
    if (n == 0 || n == 1) {
        result.value = String(n);
    }
    else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        result.value = String(answer);
    }
};
//find exponent of a number
var exp = function () {
    result.value = String(Math.pow(2.718281828, strtonum()));
};
//final answer
var Result = function () {
    // power of a function
    if (result.value.indexOf("^") !== -1) {
        var temp = result.value;
        var param1 = parseInt(temp.split("^")[0]);
        var param2 = parseInt(temp.substring(temp.indexOf("^") + 1));
        result.value = String(Math.pow(param1, param2));
    }
    try {
        result.value = eval(result.value);
    }
    catch (err) {
        alert("Enter the valid Input");
    }
};
//reciprocal
var reciprocal = function () {
    var answer = 1 / strtonum();
    result.value = answer.toFixed(3);
};
//Clear Value
var clr = function () {
    result.value = "";
};
//delete single value
var del = function () {
    result.value = result.value.slice(0, -1);
};
//Memory Functions
var ms = [];
var index = 0;
var memory = function (operation) {
    // M+ => memory plus
    if (operation == "mplus") {
        ms.push(strtonum());
        result.value = "";
        console.log(ms);
    }
    // M- => Memory subtract
    else if (operation == "msub") {
        var temp = "-" + result.value;
        ms.push(parseInt(temp));
        result.value = "";
        console.log(ms);
    }
    // MC => Memory Clear
    else if (operation == "mclear") {
        ms.splice(0, ms.length);
        result.value = "";
        console.log(ms);
    }
    //MR => Memory Recall
    else if (operation == "mrecall") {
        if (ms.length == 0) {
            alert("Memory was empty");
        }
        else {
            var sum = ms.reduce(function (num1, num2) {
                return num1 + num2;
            }, 0);
            console.log("total" + sum);
            result.value = String(sum);
        }
    }
    // MS => Memory Store
    else if (operation == "mstore") {
        if (ms.length == 0) {
            alert("Memory was empty");
        }
        else {
            index %= ms.length;
            result.value = String(ms[index]);
            index++;
        }
    }
};