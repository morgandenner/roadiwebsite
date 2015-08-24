/*script to get the height of the window size, then resize the video and text after the video accordingly*/
var bgvidheight= $('#bgvid').height();
var styles = {'margin-top':bgvidheight};
$('.wrap').css(styles);

$(window).resize(function(){
	var bgvidheight= $('#bgvid').height();
	var styles = {'margin-top':bgvidheight};
	$('.wrap').css(styles);
});
