//Calculator dom manipulation
let display = document.getElementById('display');
let buttons = document.getElementById('buttons');

//Declaring variables
let input1 = '', result1 = '', result3 = '';
let num = [];
let result2, result4, result6;

//Creating response to mouse clicks and keyup events
buttons.addEventListener('click', number);
display.addEventListener('keyup', result5);
document.getElementById('body').addEventListener('mousemove', color);

//This function is called for using number keypad on the screen to give input
function number(e) {
    let input = e.target.value;

    //To clear the entire display on clicking c button
    if (input == 'c') {
        num = [];
        input1 = '';
        display.value = '';
        textbox.value = '';
    }

    //To clear previous input value entered
    else if (input == 'b') {
        num.pop();
        num.forEach(function (x) { result3 += x; });
        display.value = result3;
        input1 = result3;
        result3 = '';
    }

    //To make sure that input is provided in correct format
    else {
        if (((input == '+') || (input == '-') || (input == '*') || (input == '/') || (input == '%') || (input == '=')) && (isNaN(Number(num[num.length - 1])))) {
            alert('Oops! Enter the numbers in correct format');
            display.value = ''; textbox.value = '';
            num = []; input1 = ''; result1 = '';
        }
        //To display the input entered onto the display and store it in the array
        else {
            input1 += input;
            num.push(String(input));
            display.value = input1;
            //result() is called to evaluate the expression once user has entered input  
            if (input == '=') {
                result();
            }
        }
    }
}
//function to evaluate the result
function result() {
    //Converting num array to a string and assigning it to result2
    for (let i = 0; i < num.length - 1; i++) {
        result1 += num[i];
    }
    result2 = eval(result1);  //eval function evaluates the expression
    display.value = result2; //display the result onto the screen
    num = [];
    result1 = '';
    document.getElementById("textbox").value = input1;
    input1 = result2;
    result4 = [...result2 + '']; //converting a string to an array 
    for (let i = 0; i < result4.length; i++) {
        num.push(result4[i]);
    }
}

//Function called by a keyup event
function result5(e) {
    //To verify pressed 'Enter' key
    if (e.keyCode == '13') {
        result6 = [...display.value + ''] //convert string in display.value to an array
        //To check input is entered in correct format using keyboard 
        for (let i = 0; i < result6.length - 2; i++) {
            if ((isNaN(Number(result6[i]))) && (isNaN(Number(result6[i + 1])))) {
                alert('Oops! Enter the numbers in correct format');
                display.value = '0'; textbox.value = ' ';
            }
        }
        //To verify last input value to be a number before enter key is pressed
        if (isNaN(Number(result6[result6.length - 2])) == true) {
            alert('Oops! Enter the numbers in correct format');
            display.value = '0'; textbox.value = ' ';
        }
        textbox.value = display.value;
        display.value = eval(display.value); //Evaluating the expression and displaying it on the screen
    }
}
//Function is called for a mouse-move event on the screen which changes the background color
function color(e) {
    body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 50)";
}  
    
// Get the modal
var modal = document.getElementById('myModal');
let section = document.getElementById('section2')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
window.onload = function() {
  modal.style.display = "block";
  section.style.display = "filter: blur(2px); -webkit-filter: blur(2px);";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// // Get the modal
// var modal = document.getElementById('myModal');
// // Get the main container and the body
// var body = document.getElementsByTagName('body');
// var container = document.getElementById('myContainer');
// // Get the open button
// var btnOpen = document.getElementById("myBtn");
// // Get the close button
// var btnClose = document.getElementById("closeModal");
// // Open the modal
// btnOpen.onclick = function() {
//     modal.className = "Modal is-visuallyHidden";
//     setTimeout(function() {
//       container.className = "MainContainer is-blurred";
//       modal.className = "Modal";
//     }, 100);
//     container.parentElement.className = "ModalOpen";
// }

// // Close the modal
// btnClose.onclick = function() {
//     modal.className = "Modal is-hidden is-visuallyHidden";
//     body.className = "";
//     container.className = "MainContainer";
//     container.parentElement.className = "";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.className = "Modal is-hidden";
//         body.className = "";
//         container.className = "MainContainer";
//         container.parentElement.className = "";
//     }
// }

