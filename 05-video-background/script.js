// play, pause버튼 
const btnEl = document.querySelector('.switch-btn')
const videoEl = document.querySelector('.video-container')

btnEl.addEventListener('click', () => {
  if(!btnEl.classList.contains('slide')) {
    btnEl.classList.add('slide');
    videoEl.pause();
  } else {
    btnEl.classList.remove('slide');
    videoEl.play();
  }
})

// page load가 끝나면 preloader 사라지면서 메인 컨텐츠나오기
const preloaderEl = document.querySelector('.preloader');

window.addEventListener('load', () => {
  // load = 페이지의 모든 요소들(stylesheets, scripts, iframes, img등)이 로드 될때 이벤트 발생
  // DOMContentLoaded = 페이지의 DOM만 load되면 이벤트 발생
  preloaderEl.classList.add('hide-preloader');
})