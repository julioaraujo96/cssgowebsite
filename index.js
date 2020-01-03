const textContainer = document.querySelector('.description');
const iframe = document.querySelector('aside');
window.onscroll = () => {
  slideIn();
};

function slideIn() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    textContainer.classList.add('slideIn');
    iframe.classList.add('slideIn');
  }
}

const text = document.querySelector('.text');

const str = text.textContent;
//split the words of the text
let strArray = str.split('');
text.textContent = '';
console.log(strArray);
//cicle each word
for (let i = 0; i < strArray.length; i++) {
  text.innerHTML += `<span> ${strArray[i]}</span> `; // add spans to each letter
}

let char = 0;
let timer = setInterval(onTick, 50); // execute function from 50 to 50

function onTick() {
  const span = text.querySelectorAll('span')[char]; //find span and first char, timer ticks, next char gets selected
  span.classList.add('fade'); // add class fade to span
  char++;

  if (char === strArray.length) {
    //when it reaches the end, calls function to clear interval and stop timer
    complete();
    return;
  }
}

const complete = () => {
  clearInterval(timer); //clear
  timer = null; // timer to null so it doesn't tick
};
