(function(){

    document.onscroll = function() {
        var q = document.body.scrollTop

        if(q > 150){
            document.getElementById('menu').style.backgroundColor = '#000000c0'
            document.getElementById('menu').style.transition = '0.2s'
        }
        if(q < 150){
            document.getElementById('menu').style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            document.getElementById('menu').style.transition = '0.2s'
        }
    }
})()


const sliderMain = new Swiper('.slider_main',{
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})

const sliderBg = new Swiper('.slider_bg',{
	centeredSlides: true,
	parallax: true,
	spaceBetween: 60,
	slidesPerView: 3.5
})

sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opened')
	})
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})

$('button').click(function(){
    $('button').toggleClass('active');
    $('.title').toggleClass('active');
    $('nav').toggleClass('active');
  });
