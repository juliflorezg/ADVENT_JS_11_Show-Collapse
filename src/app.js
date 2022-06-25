const $wrapper = document.querySelector('.wrapper')

$wrapper.addEventListener('click', e => {
  if (
    e.target.matches('.wrapper .question') ||
    e.target.matches('.wrapper .content')
  ) {
    e.preventDefault();
    //gets the answer div and check if it has the show class, in order to change the icon
    e.target.closest('a').nextElementSibling.className.includes('show')
      ? e.target
          .closest('.question')
          .style.setProperty('--background-url', "url('./assets/chevron.svg')")
      : e.target
          .closest('.question')
          .style.setProperty('--background-url', "url('./assets/close.svg')")

    e.target.closest('a').nextElementSibling.classList.toggle('show')
  }
})
