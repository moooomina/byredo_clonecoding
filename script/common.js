//검은색 창 닫기
const free = document.querySelector('.free')
const freeClose = free.querySelector('.close img')

freeClose.addEventListener('click',()=>{
    free.style.display = 'none'
})

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
const cartClose = cartBg.querySelector('.close')
console.log(searchFrm,cartBg,cartClose)

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
const langBtn = document.querySelectorAll('.lang .langBtn')
const langSelect = document.querySelectorAll('.langSelect')
const enlangBtn = document.querySelectorAll('.enlang .langBtn')
const enSelect = document.querySelectorAll('.enlang .enSelect')
console.log(langBtn,langSelect,enlangBtn,enSelect)

// lang.addEventListener('click',()=>{
//     langSelect.classList.toggle('hide')
//     // langSelect.classList.toggle('showFlex')
// })
const lang_hide = ()=>{for(let h of langSelect){h.style.display='none'}}
const enlang_hide = ()=>{for(let e of enSelect){e.style.display='none'}}
// 숨기기는게 중복이므로 함수(변수)로 만들어서 사용한다.
// 1. 아래 탭들을 가린다.
lang_hide()
enlang_hide()
// 2. 누르면 탭이 보이게 한다.
langBtn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        lang_hide() //모두 숨기고
        langSelect[i].style.display = 'block' //내가 누른 인덱스와 동일한 tab만 보이게 설정
    })
})
enlangBtn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        enlang_hide() //모두 숨기고
        enSelect[i].style.display = 'flex' //내가 누른 인덱스와 동일한 tab만 보이게 설정
    })
})

//다시 누르면 닫히게 설정하는 법