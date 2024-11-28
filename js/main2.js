//자주 수정이 일어날 정보 값들을 상단에 전역 변수로 설정
const frame = 'section';
const box = 'article';
const speed = '0.5s';
const activeClass = 'on';
const btn = document.querySelectorAll('main ul li');
let grid; //플러그인의 정보값이 담길 변수를 이곳에 전역으로 설정

window.addEventListener('load',()=>{
  init();
  filter(btn);
});

//화면 초기화 함수 정의
function init(){
  grid = new Isotope(frame,{
    itemSelector: box,//배치할 요소 명
    culumnWidth: box, //너비값을 구할 요소 명
    trasitionDuration: speed, //화면 재배치시 요소가 움직이는 속도
  })
}

function filter(arr){//매개변수 arr을 통해 반복하는 버튼 그룹을 인수로 전달
  for(let el of arr){
    el.addEventListener('click',(e) => {
      e.preventDefault();
      const sort =  e.currentTarget.querySelector('a').getAttribute('href');
      grid.arrange({
        filter : sort,
      });
      for(let el of arr){
        el.classList.remove(activeClass);
      }
      e.currentTarget.classList.add(activeClass);
    });
  }
}