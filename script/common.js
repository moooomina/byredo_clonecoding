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
        subWrap_func()
        subWrap[i].style.display='flex'
    })
})
gnb.forEach((t,i)=>{
    t.addEventListener('mouseout',()=>{
        subWrap[i].style.display='none'
    })
})