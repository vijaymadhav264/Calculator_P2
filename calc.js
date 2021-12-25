var mvalue = 0; //Setting Memory Value to Zero
var opera = 0; //Setting operation flag to zero
const screen = document.getElementById("result");

//Return the screen value
function getvalue() {
  return screen.value;
}

//will set the screen value
function setvalue(y) {
  let x = getvalue();

  //screen will start from new if value is zero Error or operation is done
  if (x == '0' || x == "Error" || opera != 0) {
    screen.value = y;
    opera = 0;
  } else {
    screen.value = x + y;
  }
}

//for button number 1
document.getElementById("one").addEventListener("click", function() {
  setvalue('1')
});

//for button number 2
document.getElementById("two").addEventListener("click", function() {
  setvalue('2')
});

//for button number 3
document.getElementById("three").addEventListener("click", function() {
  setvalue('3')
});

//for button number 4
document.getElementById("four").addEventListener("click", function() {
  setvalue('4')
});

//for button number 5
document.getElementById("five").addEventListener("click", function() {
  setvalue('5')
});

//for button number 6
document.getElementById("six").addEventListener("click", function() {
  setvalue('6')
});

//for button number 7
document.getElementById("seven").addEventListener("click", function() {
  setvalue('7')
});

//for button number 8
document.getElementById("eight").addEventListener("click", function() {
  setvalue('8')
});

//for button number 9
document.getElementById("nine").addEventListener("click", function() {
  setvalue('9')
});

//for button number 0
document.getElementById("zero").addEventListener("click", function() {
  setvalue('0')
});

//Screen will reset to zero again
document.getElementById("c").addEventListener("click", function() {
  screen.value = '0';
});


//delete last number from the screen
document.getElementById("delete").addEventListener("click", function() {
  let x = getvalue();
  if (x == 0) {
    screen.value = '0';
  } else {
    if (x.length > 1)
      screen.value = x.slice(0, x.length - 1);
    else
      screen.value = '0';
  }
});
//Function sin()
document.getElementById("sin").addEventListener("click",function() {
  let x = getvalue();
  try{
    screen.value = Math.sin(x);
    
  } catch(err) {
    screen.value = "Error";
  }
});
//Function cos()
document.getElementById("cos").addEventListener("click",function() {
  let x = getvalue();
  try{
    screen.value = Math.cos(x);
    
  } catch(err) {
    screen.value = "Error";
  }
});
//Function tan()
document.getElementById("tan").addEventListener("click",function() {
  let x = getvalue();
  try{
    screen.value = Math.tan(x);
    
  } catch(err) {
    screen.value = "Error";
  }
});

//Function cosec()
document.getElementById("csc").addEventListener("click",function() {
  let x = getvalue();
  try{
    screen.value =1 / Math.sin(screen.value);
    
  } catch(err) {
    screen.value = "Error";
  }
});

//Function sec()
document.getElementById("sec").addEventListener("click",function() {
  let x = getvalue();
  try{
    screen.value =1 / Math.cos(screen.value);
    
  } catch(err) {
    screen.value = "Error";
  }
});

//Function asinh()
document.getElementById("asinh").addEventListener("click",function() {
  let x = getvalue();
  try{
    screen.value = Math.asinh(x);
    
  } catch(err) {
    screen.value = "Error";
  }
});

//Function acosh()
document.getElementById("acosh").addEventListener("click",function() {
  let x = getvalue();
  try{
    screen.value = Math.acosh(x);
    
  } catch(err) {
    screen.value = "Error";
  }
});

//Function atanh()
document.getElementById("atanh").addEventListener("click",function() {
  let x = getvalue();
  try{
    screen.value = Math.atanh(x);
    
  } catch(err) {
    screen.value = "Error";
  }
});

//get pi value
document.getElementById("pi").addEventListener("click", function() {
  setvalue(Math.PI);
  opera = 1;
});

//memory store to variable mvalue
document.getElementById("ms").addEventListener("click", function() {
  mvalue = screen.value;
});

//gat value from mvalue
document.getElementById("mr").addEventListener("click", function() {
  setvalue(mvalue);
});

//add value to mvalue
document.getElementById("mplus").addEventListener("click", function() {
  mvalue += screen.value;
});

//subtract value from mvalue
document.getElementById("mminus").addEventListener("click", function() {
  mvalue -= screen.value;
});

//reset mvalue to zero
document.getElementById("mc").addEventListener("click", function() {
  mvalue = 0;
});

//will evaluate expression on screen and print it also set operation flag to 1
document.getElementById("equal").addEventListener("click", function() {
  try {
    let z = eval(screen.value);
    screen.value = z;
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//adding + sign to screen can also be done afyter performing operation
document.getElementById("addition").addEventListener("click", function() {
  opera = 0;
  setvalue('+');
});

//adding - sign to screen can also be done afyter performing operation
document.getElementById("subtract").addEventListener("click", function() {
  opera = 0;
  setvalue('-');
});

//adding / sign to screen can also be done afyter performing operation
document.getElementById("divide").addEventListener("click", function() {
  opera = 0;
  setvalue('/');
});

//adding * sign to screen can also be done afyter performing operation
document.getElementById("multiply").addEventListener("click", function() {
  opera = 0;
  setvalue('*');
});

//adding % sign to screen can also be done afyter performing operation
document.getElementById("mod").addEventListener("click", function() {
  opera = 0;
  setvalue('%');
});

//adding ** sign to screen can also be done afyter performing operation
document.getElementById("powery").addEventListener("click", function() {
  opera = 0;
  setvalue('**');
});

//adding an open bracket
document.getElementById("openbracket").addEventListener("click", function() {
  setvalue('(');
});

//adding an close bracket
document.getElementById("closebracket").addEventListener("click", function() {
  setvalue(')');
});

//adding dot only one dot can be added in the expression
document.getElementById("dot").addEventListener("click", function() {
  let x = getvalue();
  if (x.indexOf('.') == -1) {
    setvalue('.');
  }
});

//find degree
document.getElementById("deg").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = (x * Math.PI) / 180.0;
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//find fe
document.getElementById("fe").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = (x - 32)*1.8;
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//will give Euler's number
document.getElementById("e").addEventListener("click", function() {
  setvalue(Math.E);
  opera = 1;
});

//find 1/x of the given number
document.getElementById("root").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = 1 / eval(x);
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//find square root of the given number
document.getElementById("sqrt").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = Math.sqrt(eval(x));
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//find mode of the given  number
document.getElementById("mode").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = Math.abs(eval(x));
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//find square of given number
document.getElementById("square").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = Math.pow(eval(x), 2);
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//will give cube number
document.getElementById("cube").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = Math.cbrt(x);
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//Function X Cube
document.getElementById("xcube").addEventListener("click",function() {
  let x = getvalue();
  try{
    screen.value = Math.pow(eval(x), 3);
    opera = 1;
  } catch(err) {
    screen.value = "Error";
  }
});

//Function Y root Of X
document.getElementById("yrootx").addEventListener("click",function() {
  let x = getvalue();
  try{
    y = Math.pow(eval(x));
    screen.value = Math.pow(eval(x), 1/y);
    opera = 1;
  } catch(err) {
    screen.value = "Error";
  }
});

//will give e raise to x
document.getElementById("exp").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = Math.pow(Math.E, eval(x));
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//will give ten raise to x
document.getElementById("base10").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = Math.pow(10, eval(x));
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//will give natural log
document.getElementById("log").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = Math.log10(eval(x));
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//will give log base 10
document.getElementById("ln").addEventListener("click", function() {
  let x = getvalue();
  try {
    screen.value = Math.log(eval(x));
    opera = 1;
  } catch (err) {
    screen.value = "Error";
  }
});

//Will change the sign of screen value
document.getElementById("sign").addEventListener("click", function() {
  let x = getvalue();
  try {
  	if(screen.value <= 0)
    	screen.value = Math.abs(eval(x));
    else if(screen.value > 0)
    	screen.value = -screen.value;
  } catch (err) {
    screen.value = "Error";
  }
});

//Factorial of the number given in the screen
document.getElementById("factorial").addEventListener("click", function() {
  let x = getvalue();
  fact = 1;
  try {
  	if(screen.value == 0)
    	screen.value = 1;
    else{
    	for(let i = 1; i <= screen.value; i++){
      	fact *= i;
			}
      screen.value = fact;
    }
  } catch (err) {
    screen.value = "Error";
  }
});
