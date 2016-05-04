$(document).ready(function(){

// --- PRE-LOADER ---
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1);


// --- ANIM ---

	function startFinalAnimation(){
    	var fa = new TimelineLite();
			fa.to('#animated', 0.5, {visibility:'visible'});
			fa.from('#welcome', 1, {opacity:0, scale:0, top:0, ease: Back.easeInOut.config(2), y: 0});
			fa.staggerFrom('.tagline', 0.3, {rotation:90, scale:0, y:-60, ease:Back.easeOut}, 0.05)
	};

	startFinalAnimation();

});