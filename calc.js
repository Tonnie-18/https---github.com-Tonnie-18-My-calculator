let display = document.getElementById('Display');

let buttons =document.getElementsByClassName('button'); //use getElementsByClassName not Element //was missing the s
for(var i=0; i < buttons.length; i++) {  //getElementsByClassName returns an array of all buttons, you can loop through each item to get it's value
    console.log(buttons[i].value);
  }
