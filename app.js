let toggleSwitch = document.getElementsByClassName('redButton')[0]
    $(".num-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(30, 25%, 100%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(30, 25%, 89%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(30, 25%, 100%)");
        }
    });
    $(".type-one-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(225, 21%, 65%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(225, 21%, 49%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(225, 21%, 65%)");
        }
    });
    $(".type-two-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(6, 63%, 60%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(6, 63%, 50%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(6, 63%, 60%)");
        }
    });
    $(".redButton").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(6, 63%, 60%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(6, 63%, 50%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(6, 63%, 60%)");
        }
    }); 
/* page one theme*/
function go_to_1() {
    toggleSwitch.classList.add('horizTranslate1');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    document.getElementById("outerContainer").style.backgroundColor = "hsl(222, 26%, 31%)"
    document.getElementById("buttonContainer").style.backgroundColor = 'hsl(223, 31%, 20%)';
    document.getElementById("redButton").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.getElementById("legendTextContainer").style.color = "#ffffff"
    document.querySelector("html").style.backgroundColor = "hsl(222, 26%, 31%)"
    document.getElementById("middle").style.backgroundColor = "hsl(224, 36%, 15%)"
    var elements = document.getElementsByClassName('color-one'); /* iterates through each class and adds styling */
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'white';
    }
    var elements = document.getElementsByClassName('num-button');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'hsl(221, 14%, 31%)';
        elements[i].style.backgroundColor = 'hsl(30, 25%, 89%)';
        elements[i].style['boxShadow'] = '0px 4px 0px hsl(28, 16%, 65%)';
    }
    var elements = document.getElementsByClassName('type-one-button');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'white';
        elements[i].style.backgroundColor = 'hsl(225, 21%, 49%)';
        elements[i].style['boxShadow'] = '0px 4px 0px hsl(224, 28%, 35%)';
    }
    var elements = document.getElementsByClassName('type-two-button');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'white';
        elements[i].style.backgroundColor = 'hsl(6, 63%, 50%)';
        elements[i].style['boxShadow'] = '0px 4px 0px hsl(6, 70%, 34%)';
    } 
    document.getElementById("grid").style.backgroundColor = "hsl(223, 31%, 20%)";
    $(".num-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(30, 25%, 100%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(30, 25%, 89%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(30, 25%, 100%)");
        }
    });
    $(".type-one-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(225, 21%, 65%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(225, 21%, 49%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(225, 21%, 65%)");
        }
    });
    $(".type-two-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(6, 63%, 60%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(6, 63%, 50%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(6, 63%, 60%)");
        }
    });
    $(".redButton").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(6, 63%, 60%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(6, 63%, 50%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(6, 63%, 60%)");
        }
    }); 
}
/* page two theme */
function go_to_2() {
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#E5E5E5"
    document.getElementById("buttonContainer").style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById("redButton").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.getElementById("legendTextContainer").style.color = "#222222"
    document.querySelector("html").style.backgroundColor = "hsl(0, 0%, 90%)"
    document.getElementById("middle").style.backgroundColor = "hsl(0, 0%, 93%)"
    var elements = document.getElementsByClassName('color-one');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'hsl(60, 10%, 19%)';
    }
    var elements = document.getElementsByClassName('num-button');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'hsl(60, 10%, 19%)';
        elements[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
        elements[i].style['boxShadow'] = '0px 4px 0px hsl(35, 11%, 61%)';
    }
    var elements = document.getElementsByClassName('type-one-button');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'white';
        elements[i].style.backgroundColor = 'hsl(185, 42%, 37%)';
        elements[i].style['boxShadow'] = '0px 4px 0px hsl(185, 58%, 25%)';
    }
    var elements = document.getElementsByClassName('type-two-button');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'white';
        elements[i].style.backgroundColor = 'hsl(25, 98%, 40%)';
        elements[i].style['boxShadow'] = '0px 4px 0px hsl(25, 99%, 27%)';
    } 
    document.getElementById("grid").style.backgroundColor = "hsl(0, 5%, 81%)";
        $(".num-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(45, 7%, 100%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(45, 7%, 89%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(45, 7%, 100%)");
        }
    });
    $(".type-one-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(185, 42%, 45%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(185, 42%, 37%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(185, 42%, 45%)");
        }
    });
    $(".type-two-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(25, 98%, 50%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(25, 98%, 40%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(25, 98%, 50%)");
        }
    });
    $(".redButton").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(25, 98%, 50%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(25, 98%, 40%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(25, 98%, 50%)");
        }
    }); 
}
/* page three theme */
function go_to_3() {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#000000";
    document.getElementById("buttonContainer").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementById("redButton").style.backgroundColor = "hsl(176, 100%, 44%)"; 
    document.getElementById("legendTextContainer").style.color = "#E2D241"
    document.querySelector("html").style.backgroundColor = "#000000";
    document.getElementById("middle").style.backgroundColor = "hsl(268, 71%, 12%)";
    var elements = document.getElementsByClassName('color-one');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'hsl(52, 100%, 62%)';
    }
    var elements = document.getElementsByClassName('num-button');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'hsl(52, 100%, 62%)';
        elements[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
        elements[i].style['boxShadow'] = '0px 4px 0px hsl(290, 70%, 36%)';
    }
    var elements = document.getElementsByClassName('type-one-button');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'white';
        elements[i].style.backgroundColor = 'hsl(281, 89%, 26%)';
        elements[i].style['boxShadow'] = '0px 4px 0px hsl(285, 91%, 52%)';
    }
    var elements = document.getElementsByClassName('type-two-button');
    for (i =0; i < elements.length; i++)    {
        elements[i].style.color = 'hsl(268, 47%, 21%)';
        elements[i].style.backgroundColor = 'hsl(176, 100%, 44%)';
        elements[i].style['boxShadow'] = '0px 4px 0px hsl(177, 92%, 70%)';
    } 
    document.getElementById("grid").style.backgroundColor = "hsl(268, 71%, 12%)";
    $(".num-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(268, 47%, 30%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(268, 47%, 21%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(268, 47%, 30%)");
        }
    });
    $(".type-one-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(281, 89%, 35%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(281, 89%, 26%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(281, 89%, 35%)");
        }
    });
    $(".type-two-button").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(176, 100%, 54%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(176, 100%, 44%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(176, 100%, 54%)");
        }
    });
    $(".redButton").on({ /* highlights specified buttons on hover/click */
        mouseenter: function () {
            $(this).css("background-color", "hsl(176, 100%, 54%)");
        },
        mouseleave: function () {
            $(this).css("background-color", "hsl(176, 100%, 44%)");
        },
        click: function () {
            $(this).css("background-color", "hsl(176, 100%, 54%)");
        }
    }); 
}
/* math calculations below */
//get all the buttons from the HTML page
const buttons = document.querySelectorAll("button");

//set up the display where we will show the calculator output
const display = document.getElementById("display-text");
const middle = document.getElementById("middle"); //the box where #'s are displayed, make sure this works
//set up variables to keep track of the current calculation
let currentOperand = "";
let previousOperand = "";
let currentOperation = null;

//loop through each button and add an event listener to it
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const buttonValue = button.textContent;

    if (buttonValue === "RESET") { //if user presses clear button
      currentOperand = "";
      previousOperand = "";
      currentOperation = null;
      display.textContent = "0";
    } else if (buttonValue === "=") { //if user presses equals button
      compute();
    } else if (buttonValue === "DEL") { //if user presses delete button
      currentOperand = currentOperand.slice(0, -1);
      display.textContent = currentOperand || "0";
    } else if (isNumber(buttonValue)) { //if user presses a number button
      currentOperand += buttonValue;
      display.textContent = currentOperand;
    } else if (isOperator(buttonValue)) { //if user presses an operator button
      if (currentOperation != null) {
        compute();
      }
      currentOperation = buttonValue;
      previousOperand = currentOperand;
      currentOperand = "";
    }
  });
});

function isNumber(value) {
    return /^\d+$/.test(value);
  }

function isOperator(value) {
  return value === "x" || value === "/" || value === "+" || value === "-";
}

function compute() {
  let result;
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(previous) || isNaN(current)) {
    return;
  }
  switch (currentOperation) { //sets up cases for each operation
    case "x":
      result = previous * current;
      break;
    case "/":
      result = previous / current;
      break;
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    default:
      return;
  }
  currentOperand = result.toString();
  previousOperand = "";
  currentOperation = null;
  display.textContent = formatNumber(currentOperand); // can you display.textContent for error/shrink code?
}

function formatNumber(number) { //add commas where appropriate
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let formattedNumber;
    if (isNaN(integerDigits)) {
      formattedNumber = '';
    } else {
      formattedNumber = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
    }
    if (decimalDigits != null) {
      return `${formattedNumber}.${decimalDigits}`;
    } else {
      return formattedNumber;
    }
} 