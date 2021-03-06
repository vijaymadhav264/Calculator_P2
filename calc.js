let result = document.querySelector("#inputlabel");

let calculate = (number) => {
  result.value += number;
};


let Result = () => {
  // log
  if (result.value.includes("log")) {
    let n = result.value.substring(3);
    result.value = Math.log(n);
  }

  //ln => (log10) Natural log to base 10
  else if (result.value.includes("ln")) {
    let n = result.value.substring(2);
    result.value = Math.log10(n);
  }

  // power of a function
  else if (result.value.includes("^")) {
    let temp = result.value;
    let param1 = temp.split("^")[0];
    let param2 = temp.substring(temp.indexOf("^") + 1);
    result.value = Math.pow(param1, param2);
  }

  // absolute value
  else if (result.value.includes("|")) {
    let temp = result.value;
    let param = temp.replaceAll("|", "");
    result.value = Math.abs(param);
  }

  // fahrenheit to celsius
  else if (result.value.includes("F")) {
    let temp = result.value;
    let fahrenheit = temp.replaceAll("F", "");
    result.value = ((fahrenheit - 32) * 5) / 9;
  }

  // degree to radian
  else if (result.value.includes("deg")) {
    let temp = result.value;
    let deg = temp.replaceAll("deg", "");
    result.value = (deg * Math.PI) / 180.0;
  }

  // asinh function
  else if (result.value.includes("asinh")) {
    let temp = result.value;
    let n = temp.replaceAll("asinh", "");
    result.value = Math.asinh(n);
  }
  
  // acosh function
  else if (result.value.includes("acosh")) {
    let temp = result.value;
    let n = temp.replaceAll("acosh", "");
    result.value = Math.acosh(n);
  }
  
  // atanh function
  else if (result.value.includes("atanh")) {
    let temp = result.value;
    let n = temp.replaceAll("atanh", "");
    result.value = Math.atanh(n);
  }

  // square root function
  else if (result.value.includes("√")) {
    let n = result.value.substring(1);
    result.value = Math.sqrt(n);
  }

   // cube root function
   else if (result.value.includes("∛")) {
    let n = result.value.substring(1);
    result.value = Math.cbrt(n);
  }

  // factorial
  else if (result.value.includes("!")) {
    size = result.value.length;
    n = Number(result.value.substring(0, size - 1));
    let f = 1;

    for (i = 2; i <= n; i++) f = f * i;
    result.value = f;
  }

  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid Input");
  }
};

//Memory Functions
const ms = [];
var index = 0;
function memory(x) {
  // M+ => memory plus
  if (x == "mplus") {
    ms.push(parseInt(result.value));
    result.value = "";
  }

  // M- => Memory subtract
  else if (x == "msub") {
    let temp = "-" + result.value;
    ms.push(parseInt(temp));
    result.value = "";
  }

  // MC => Memory Clear
  else if (x == "mclear") {
    ms.splice(0, ms.length);
    result.value = "";
  }

  //MR => Memory Recall
  else if (x == "mrecall") {
    if (ms.length == 0) {
      alert("Memory was Empty");
    } else {
      var sum = ms.reduce(function (a, b) {
        return a + b;
      }, 0);
      result.value = sum;
    }
  }

  // MS => Memory Store
  else if (x == "mstore") {
    if (ms.length == 0) {
      alert("Memory was Empty");
    } else {
      index %= ms.length;
      result.value = ms[index];
      index++;
    }
  }
}
//Function Floor()
function floor() {
  result.value = Math.floor(result.value)
}
//Function Ceil()
function ceil() {
  result.value = Math.ceil(result.value)
}
//Function Round()
function round() {
  result.value = Math.round(result.value)
}
//Function sign()
function sign () {
  result.value = Math.sign(result.value)
}
//Function Sin()
function sin() {
    result.value = Math.sin(result.value);
}
//Function cos()
function cos() {
  result.value = Math.cos(result.value);
}
//Function tan()
function tan() {
  result.value = Math.tan(result.value);
}
//Function Cosec()
function cosec() {
  result.value = 1 / Math.sin(result.value);
}
//Function Sec()
function sec() {
  result.value = 1 / Math.cos(result.value);
}
//Function Cot()
function cot() {
  result.value = 1 / Math.tan(result.value);
}

//reciprocal
function reciprocal() {
  let answer = 1 / result.value;
  result.value = answer.toFixed(3);
}

//Clear Value
function clr() {
  result.value = "";
}

//delete single value
function del() {
  result.value = result.value.slice(0, -1);
}
