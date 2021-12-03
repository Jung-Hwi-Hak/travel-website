let navbar = document.querySelector('header nav');
document.querySelector('#menu-btn').onclick = ()=>{
  navbar.classList.add('active')
}
document.querySelector('#nav-close').onclick = ()=>{
  navbar.classList.remove('active')
}

let searchBtn = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{
  searchBtn.classList.add('active')
}
document.querySelector('#search-close').onclick = ()=>{
  searchBtn.classList.remove('active')
}

const slides = document.querySelector('.slides'); 
//전체 슬라이드 컨테이너 
const slideImg = document.querySelectorAll('.slides li'); 
//모든 슬라이드들 
let currentIdx = 0; 
//현재 슬라이드 index 
const slideCount = slideImg.length; 
// 슬라이드 개수 
const prev = document.querySelector('.prev'); 
//이전 버튼 
const next = document.querySelector('.next'); 
//다음 버튼 
const slideWidth = window.innerWidth; 
//한개의 슬라이드 넓이 
//전체 슬라이드 컨테이너 넓이 설정 
slides.style.width = slideWidth * slideCount + 'px'; 
// 과부하 해결 근데 오류뜸 왜지?
var delay = 300;
var timer = null;
window.onresize = () => {
  clearTimeout(timer);
  timer = setTimeout(() =>{
    slideWidth = window.innerWidth;
    slides.style.width = slideWidth * slideCount + 'px'; 
    console.log('hi');
  },delay)
}
function moveSlide(num) { 
  slides.style.left = -num * slideWidth + 'px'; 
  currentIdx = num; 
} 

prev.addEventListener('click', function () 
{ 
  /*첫 번째 슬라이드로 표시 됐을때는 이전 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==0일때만 moveSlide 함수 불러옴 */ 
  if (currentIdx !== 0) {
    moveSlide(currentIdx - 1); 
  }
}); 

next.addEventListener('click', function () { 
    /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */ 
  if (currentIdx !== slideCount - 1) { 
    moveSlide(currentIdx + 1); 
  } 
});
