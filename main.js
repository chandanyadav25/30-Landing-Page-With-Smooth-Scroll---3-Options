//option 2 - jquery Smooth Scrooll

//$('.navbar a').on('click', function(e) {
//	if(this.hash !== '') {
//		e.preventDefault();
//
//		const hash = this.hash;
//		$('html, body').animate(
//			{
//				scrolltop: $(hash).offset().top
//			},
//            800
//			);
//	}
//});



// option 2 kam nhi kar rha hai



//option 3 - SmoothScroll Script

const scroll = new SmoothScroll('.navbar a[href*="#"]',{
	speed: 800

});




















