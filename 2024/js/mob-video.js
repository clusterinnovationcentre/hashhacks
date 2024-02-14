////////////////////
// VIDEO THINGS
////////////////////


var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var video_tag = document.getElementById("intro-video");
    var video_container = document.getElementById("fs-video");

	// first visit and not mobile
	if (width >= 768) {
        video_tag.setAttribute("src","assets/videos/splash-intro-compressed.mp4");
	
} else {
    video_tag.setAttribute("src", "assets/videos/video-2.mp4"); 
}

