/* detail */

const container = document.querySelector('.container');
const small = container.querySelectorAll('.small button');
const big = container.querySelector('.big img');
console.log(container, small, big);

small[0].classList.add('active')

small[0].addEventListener('click',function(){
    big.src= "./images/detail/big_01.jpg";
    small[0].classList.add('active')
    small[1].classList.remove('active')
    small[2].classList.remove('active')
})
small[1].addEventListener('click',function(){
    big.src= "./images/detail/big_02.jpg";
    small[1].classList.add('active')
    small[0].classList.remove('active')
    small[2].classList.remove('active')
})
small[2].addEventListener('click',function(){
    big.src= "./images/detail/big_03.jpg";
    small[2].classList.add('active')
    small[0].classList.remove('active')
    small[1].classList.remove('active')
})

const subName = document.querySelectorAll('.subName')
const subContents = document.querySelectorAll('.subContents')
const moreBtn = document.querySelectorAll('.moreBtn')
console.log(subName, subContents, moreBtn)

