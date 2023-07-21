const thoinen=document.querySelector('.thoinen')
setInterval(()=>{
    thoinen.classList.toggle('active')
},500)
const chucmung=document.querySelector('.chucmung')
setInterval(()=>{
    chucmung.classList.toggle('active1')
},500)

let index=1
function changeimg(){
    let imgs=['./images/img_1.png','./images/img_2.jpg','./images/img_3.png','./images/img_4.png','./images/img_5.jpg','./images/img_6.png']
    document.querySelector('.img').src=imgs[index]
    index++
    if(index===6){
        index=0
    }
}
setInterval(changeimg,2000)
const audio=document.getElementById('audio')
const main=document.querySelector('.main')
thoinen.onclick=function(){
   audio.play()
   main.classList.add('return')
}
const close=document.querySelector('.close')
close.onclick=function(){
    main.classList.remove('return')
}
const close2=document.querySelector('.close2')
const vanchuc=document.querySelector('.vanchuc')
const slide=document.querySelector('.slide')
close2.onclick=function(){
    vanchuc.classList.add('dong')
}
function time(){
    let date=new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    let ngay=date.getDay()
    minute=dinhdang(minute)
    second=dinhdang(second)

    let m=60-minute
    m=dinhdang(m)
    let s=60-second
    s=dinhdang(s)
    let h=23-hour
    let h1=Number.parseInt(h)
    if(h1===0){
        h=dinhdang(h)
        document.querySelector('.thoigian').innerHTML=`${h}:${m}:${s}`
    }
     else {
        slide.classList.add('dong')
     }
    setInterval(time,1000)
}
function dinhdang(x){
    if(x<10){
        x='0'+x
    }
    return x
}