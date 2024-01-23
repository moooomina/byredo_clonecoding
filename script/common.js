//nav 동적기능
//메뉴 변수
const gnb = document.querySelectorAll('#gnb li > a')
console.log(gnb)
//서브메뉴 변수
const subWrap = document.querySelectorAll('.headerBottom > .subWrap')

//모든 서브메뉴 숨기기
const subWrap_func = ()=> {for(let s of subWrap){s.style.display='none'}}
subWrap_func()

//메뉴에 마우스 올렸을 때 서브메뉴 보이게하기
gnb.forEach((t,i)=>{
    console.log(t,i)
    t.addEventListener('mouseover',()=>{
        subWrap[i].style.display='flex'
    })
    t.addEventListener('mouseout',()=>{
        subWrap[i].style.display='none'
    })
})

subWrap.forEach((obj)=>{
    obj.addEventListener('mouseover',()=>{
        obj.style.display='flex'
    })
    obj.addEventListener('mouseout',()=>{
        obj.style.display='none'
    })
})

//----------------------------------------------------
//버튼 동적기능
//아이콘 변수
const icon = document.querySelectorAll('.icon')
const search = document.querySelector('.search')
const cart = document.querySelector('.cart')
const close = document.querySelectorAll('.close')

//보여지는 변수
const searchFrm = document.querySelector('.searchFrm')
const cartBg = document.querySelector('.cartBg')
console.log(searchFrm,cartBg)

searchFrm.classList.add('hide') /* 자바스크립트에서 추가한 클래스를 CSS에 꼭 적어줘야함 */
search.addEventListener('click',()=>{
    searchFrm.classList.toggle('hide')
    searchFrm.classList.toggle('showFlex')
})

cartBg.classList.add('hide')
cart.addEventListener('click',()=>{
    cartBg.classList.toggle('hide')
    cartBg.classList.toggle('showBlock')
})

//--------------------------------------------------
//언어선택
const langImg = document.querySelectorAll('.lang > a > img')
const langSelect = document.querySelectorAll('.langSelect')
console.log(langImg,langSelect)

langSelect.classList.add('hide')
langImg.addEventListener('click',()=>{
    langSelect.classList.toggle('hide')
    langSelect.classList.toggle('showFlex')
})