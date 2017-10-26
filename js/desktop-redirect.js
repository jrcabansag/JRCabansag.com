var md = new MobileDetect(window.navigator.userAgent);
if(md.mobile() == null){
	window.location.replace("http://jrcabansag.com");
}