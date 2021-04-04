window.onload = init;
let displayEle, drumeles;

function init() {
  displayEle = document.getElementById('display');
  drumEles = document.getElementsByClassName('drum-pad');
  
  // Thank you to Abhishek Hingorani for the StackOverflow info regarding vanilla JS
  // https://stackoverflow.com/questions/6542413/bind-enter-key-to-specific-button-on-page
  document.onkeydown = function (e) {
    // List all keys that we want Doc to respond to
    let boundKeys = "qweasdzxc".toUpperCase().split('');
    let simpleKeystroke = e.key.toUpperCase();
    if (boundKeys.indexOf(simpleKeystroke) >= 0) {
      manageClick(document.getElementById(simpleKeystroke).parentElement);
    }
  }
}

// This fuction manages the click based on what element is selected 
function manageClick(ele) {
  displayEle.innerHTML = ele.parentElement.firstElementChild.innerHTML;
  ele.firstElementChild.play();  
}
