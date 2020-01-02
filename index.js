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
