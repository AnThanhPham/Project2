prevBtn = document.querySelector('.feedback__prevBtn');
nextBtn = document.querySelector('.feedback__nextBtn');

var feedbackList = document.querySelectorAll('.feedback-list');
var fbList = Array.from(feedbackList);
var feedbackDots = Array.from(document.querySelectorAll('.feedback-dots'));

prevBtn.onclick = function(){
    var check;
    for(var i=0; i<fbList.length; i++){
        var fbDots = Array.from(feedbackDots[i].querySelectorAll('.feedback-dot-item'));
        for(var j=0; j<fbDots.length; j++){
            var findActive = fbDots[j].matches('.active')
            if(findActive){
                check=j;
                fbDots[j].classList.remove('active');
                break;
            }
        }
        if(check > 0 ){
            fbList.forEach(function(fbListItem){
                fbListItem.style.transform = 'translateX(' + Number(-100 * (check-1)) + '%)';
            })
            var specials = Array.from(feedbackDots[check-1].querySelectorAll('.feedback-dot-item'));
            specials[check-1].classList.add('active');
            break;
        }
        if(check === 0){
            fbList.forEach(function(fbListItem){
                fbListItem.style.transform = 'translateX(' + Number(-100 * (fbList.length-1-check)) + '%)';
            })
            var specials = Array.from(feedbackDots[fbList.length-1-check].querySelectorAll('.feedback-dot-item'));
            specials[fbList.length-1-check].classList.add('active');
            break;
        }
    }
}

nextBtn.onclick = function(){
    var check;
    for(var i=0; i<fbList.length; i++){
        var fbDots = Array.from(feedbackDots[i].querySelectorAll('.feedback-dot-item'));
        for(var j=0; j<fbDots.length; j++){
            var findActive = fbDots[j].matches('.active')
            if(findActive){
                check=j;
                fbDots[j].classList.remove('active');
                break;
            }
        }
        if(check === fbList.length - 1 ){
            fbList.forEach(function(fbListItem){
                fbListItem.style.transform = 'translateX(' + Number(-100 * 0) + '%)';
            })
            var specials = Array.from(feedbackDots[0].querySelectorAll('.feedback-dot-item'));
            specials[0].classList.add('active');
            break;
        }
        if(i === check){
            fbList.forEach(function(fbListItem){
                fbListItem.style.transform = 'translateX(' + Number(-100 * (check+1)) + '%)';
            })
            var specials = Array.from(feedbackDots[check+1].querySelectorAll('.feedback-dot-item'));
            specials[check+1].classList.add('active');
            break;
        }
    }
}

var BlogDots = document.querySelectorAll('.blog-dot-item');
BlogDots=Array.from(BlogDots);
const blogParent =  document.querySelector('.blog-list')
if(blogParent) {
    BlogDots.forEach(function(BlogDot,index){
        BlogDot.onclick = function(){
            document.querySelector('.blog-dot-item.active').classList.remove('active');
            blogParent.style.overflow = 'unset';
            this.classList.add('active');
            blogParent.style.transform = 'translateX(calc(' + Number(-100 * Number(index)) + '% - ' + Number(30 * Number(index)) + 'px))';
        }
    })
}


const prevBtn2 = document.querySelector('.btn-navigation-page-js-prev');
const nextBtn2 = document.querySelector('.btn-navigation-page-js-next');
const infoBottom =  document.querySelector('.popular-info-bottom');
var popularItems = document.querySelectorAll('.popular-dot-item');
popularItems = Array.from(popularItems);
popularList = document.querySelectorAll('.popular-list');
popularList = Array.from(popularList);


nextBtn2.onclick = function(){
    var active = document.querySelector('.popular-dot-item.active');
    active.classList.remove('active');
    var index = Number(active.dataset.index);
    for(var i=0;i<popularItems.length;i++){
        if(index === 2){
            popularItems[0].classList.add('active')
            for(var j=0;j<=popularList.length - 1;j++){
                popularList[j].style.transform = 'translateX(calc(' + Number(-300 * Number(0)) + '% - ' + Number(90 * Number(0)) + 'px))'
            }
        }
        else if(index === i){
            popularItems[index+1].classList.add('active')
            for(var j=0;j<=popularList.length - 1;j++){
                popularList[j].style.transform = 'translateX(calc(' + Number(-300 * Number(index+1)) + '% - ' + Number(90 * Number(index+1)) + 'px))'
            }
        }
    }
}

prevBtn2.onclick = function(){
    var active = document.querySelector('.popular-dot-item.active');
    active.classList.remove('active');
    var index = Number(active.dataset.index);
    for(var i=0;i<popularItems.length;i++){
        if(index === 0){
            popularItems[popularItems.length-1].classList.add('active')
            for(var j=0;j<=popularList.length - 1;j++){
                popularList[j].style.transform = 'translateX(calc(' + Number(-300 * Number(popularItems.length-1)) + '% - ' + Number(90 * Number(popularItems.length-1)) + 'px))'
            }
        }
        else if(index > 0){
            popularItems[index-1].classList.add('active')
            for(var j=0;j<=popularList.length - 1;j++){
                popularList[j].style.transform = 'translateX(calc(' + Number(-300 * Number(index-1)) + '% - ' + Number(90 * Number(index-1)) + 'px))'
            }
        }
    }
}











