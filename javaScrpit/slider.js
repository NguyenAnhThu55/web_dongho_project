const rightBtn = document.querySelector('.fa-chevron-right')
const lefttBtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')

let index = 0

rightBtn.addEventListener("click", function(){
    index = index+1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
})
lefttBtn.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index = imgNumber.length-1
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
})

function imgAuto () {
    index = index + 1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
    console.log(index)
}
setInterval(imgAuto,4000)

