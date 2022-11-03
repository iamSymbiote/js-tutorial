console.log("javascript tutorial");

var calcSlidesWidth = function (wrapper, windowWidth) {
    if (windowWidth) {
        for (var child of wrapper.children) {
            child.style.width = "100%"
        }
    } else {
        for (var child of wrapper.children) {
            child.style.width = ((wrapper.clientWidth / 2) - 10) + 'px'
        }
    }
    
}

var wrapper = document.querySelector('.slider-wrapper')

calcSlidesWidth(wrapper)

window.addEventListener('resize', function() { 
    var wrapper = document.querySelector('.slider-wrapper')
    if (window.innerWidth < 600) {
        calcSlidesWidth(wrapper, window.innerWidth)
    } else {
        calcSlidesWidth(wrapper)
    }
 }, false)

 var count = 1
 setInterval(function () {
    var slides = wrapper.querySelectorAll('.slider-slide')
    if (count < slides.length - 1) {
        var slideWidth = slides[count].clientWidth
        console.log(slideWidth);
        wrapper.style.transform = "translate3d("+ -((slideWidth + 10) * count) +"px, 0 , 0)"
        console.log(wrapper.style.transform);
    } else {
        wrapper.style.transform = "translate3d(0, 0 , 0)"
        count = 1  
    }
    ++count
 }, 2000)