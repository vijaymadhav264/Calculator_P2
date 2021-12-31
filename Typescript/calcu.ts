export {};
let result = <HTMLInputElement>document.getElementById("inputtext");

const calculate = (operator: string) => {
  result.value += operator;
};

//Convert string input into number
const strtonum = () => {
  return parseInt(result.value);
};

//farenhite to celcius
const fah = () => {
  const f: number = strtonum();
  const celcius: number = ((f - 32) * 5) / 9;
  result.value = celcius.toFixed(3);
};

//degree to radian
const deg = () => {
  const deg: number = strtonum();
  const radian: number = (deg * 3.14) / 180.0;
  result.value = radian.toFixed(3);
};

//sin function
const sin = () => {
  result.value = String(Math.sin(strtonum()));
};

//asinh function
const asinh = function () {
  result.value = String(Math.asinh(strtonum()));
};

//cos function
const cos = () => {
  result.value = String(Math.cos(strtonum()));
};

//acosh function
const acosh = function () {
  result.value = String(Math.acosh(strtonum()));
};

//tan function
const tan = () => {
  result.value = String(Math.tan(strtonum()));
};

//atanh function
const atanh = function () {
  result.value = String(Math.atanh(strtonum()));
};

//log function
const log = () => {
  result.value = String(Math.log(strtonum()));
};

// log10 function
let ln = function () {
  result.value = String(Math.log10(strtonum()));
}

//floor function
const floor = () => {
  result.value = String(Math.floor(strtonum()));
};

//ceil function
const ceil = () => {
  result.value = String(Math.ceil(strtonum()));
};

//round function
const round = () => {
  result.value = String(Math.round(strtonum()));
};

//sign function
const sign = function () {
  result.value = String(Math.sign(strtonum()));
}

//square root function
const sqrt = () => {
  result.value = String(Math.sqrt(strtonum()));
}

//Cube root function
const cbrt = function () {
  result.value = String(Math.cbrt(strtonum()));
}

// absolute value
const abs = function () {
  result.value = String(Math.abs(strtonum()));
};

//factorial
const factorial = () => {
  let f: number = strtonum();
  let answer: number = 1;
  if (f == 0 || f == 1) {
    result.value = String(f);
  } else {
    for (let i = f; i >= 1; i--) {
      answer = answer * i;
    }
    result.value = String(answer);
  }
};

//find exponent of a number
const exponential = () => {
  result.value = String(Math.pow(2.718281828, strtonum()));
};

//final answer
const Result = () => {
  // power of a function
  if (result.value.indexOf("^") !== -1) {
    let temp = result.value;
    let param1 = parseInt(temp.split("^")[0]);
    let param2 = parseInt(temp.substring(temp.indexOf("^") + 1));
    result.value = String(Math.pow(param1, param2));
  }

  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid Input");
  }
};

//reciprocal
const reciprocal = () => {
  let answer = 1 / strtonum();
  result.value = answer.toFixed(3);
};

//Clear Value
const clr = () => {
  result.value = "";
};

//delete single value
const del = () => {
  result.value = result.value.slice(0, -1);
};

//Memory Functions
const ms: Array<number> = [];
let index: number = 0;
const memory = (operation: String) => {
  // M+ => memory plus
  if (operation == "mplus") {
    ms.push(strtonum());
    result.value = "";
    console.log(ms);
  }

  // M- => Memory subtract
  else if (operation == "msub") {
    let temp = "-" + result.value;
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
      alert("Nothing is stored in memory");
    } else {
      let sum: number = ms.reduce(function (num1: number, num2: number) {
        return num1 + num2;
      }, 0);
      console.log("total" + sum);
      result.value = String(sum);
    }
  }

  // MS => Memory Store
  else if (operation == "mstore") {
    if (ms.length == 0) {
      alert("Nothing is stored in memory");
    } else {
      index %= ms.length;
      result.value = String(ms[index]);
      index++;
    }
  }
};