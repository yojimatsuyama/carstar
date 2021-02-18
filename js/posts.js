/*
 * OS detecter
 */
$(document).ready(function () {
	console.log("ready!");
	/*
	 * Keep return result from function getMobileOperatingSystem() into valuable 'result'
	 * Then print value.
	 */
	var result = getMobileOperatingSystem();
	console.log(result);
	/*
	 * Check if result is 'Android' or not
	 * If is 'Android' then print 'Yes' else print 'No'
	 */
	if (result == 'Android') {
		$('.apple-btn').css('display', 'none');
	}
	else if (result == 'iOS') {
		$('.android-btn').css('display', 'none');
	}
	else {
		console.log("No");
	}
});

function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
		return 'iOS';
	}
	else if (userAgent.match(/Android/i)) {
		return 'Android';
	}
	else {
		return 'unknown';
	}
}