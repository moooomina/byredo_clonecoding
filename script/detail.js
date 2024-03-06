// 왼쪽 썸네일 이미지 JS
//1. small-imgBtn 클릭하면 (ex)small01 클릭하면
//2. big-img(src) 값이 변경된다. (ex) big1이 big2 이미지 변경

const container = document.querySelector('.container');
const small = container.querySelectorAll('.small button');
const big = container.querySelector('.big img');
console.log(container, small, big);

small[0].addEventListener('click',function(){
    big.src= "./images/detail/big_01.jpg";
    small[0].classList.add('.active')
})
small[1].addEventListener('click',function(){
    big.src= "./images/detail/big_02.jpg";
    small[1].classList.add('.active')
})
small[2].addEventListener('click',function(){
    big.src= "./images/detail/big_03.jpg";
    small[2].classList.add('.active')
})

big.addEventListener('click',()=>{
    big.style.width = '120%'
})