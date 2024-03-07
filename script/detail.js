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
const listContainer = document.querySelector('.listContainer')
const listWrap = document.querySelector('.listWrap')
const subContents = document.querySelectorAll('.subContents')
const moreBtn = document.querySelectorAll('.moreBtn')
console.log(subName, subContents, moreBtn)

const sub_c_hide = ()=>{for(let h of subContents){h.style.display='none'}}
const rotate = ()=>{for(let c of moreBtn){c.style.transform='none'}}
// 숨기기는게 중복이므로 함수(변수)로 만들어서 사용한다.
// 1. 아래 탭들을 가린다.
sub_c_hide()
rotate()
// 2. 첫번째 보여지는것을 다시 보이게 한다.
subContents[0].style.display = 'block'
moreBtn[0].style.transform = 'rotate(-45deg)'
// 3. 누르면 탭이 보이게 한다.
subName.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        sub_c_hide() //모두 숨기고
        rotate()
        subContents[i].style.display = 'block' //내가 누른 인덱스와 동일한 tab만 보이게 설정
        moreBtn[i].style.transform = 'rotate(-45deg)'
    })
})
subName[1].addEventListener('click',()=>{
    subContents[1].style.display = 'grid'
})

const plus = document.querySelectorAll('#plus')
const numCount = document.querySelector('#numCount')
const minus = document.querySelectorAll('#minus')
let num = 1

numCount.value = num
plus.forEach(function(t,i){
    t.addEventListener('click',function(){
        num++
        numCount.value = num
        // minus.style.display = 'block'
    })
})

minus.forEach(function(t,i){
    t.addEventListener('click',function(){
        if(num > 1){
            num--
            numCount.value = num
        }
    })
})