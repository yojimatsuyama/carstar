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

$(function() {
    countDown();
});
function countDown() {
    // 終了時刻　※カウントダウンの終わりの設定
    // 指定は下記のような形で
    // "Jan 1 2015 00:00:00" "2010 Jan 1 00:00:00" "Jan 01,2015 00:00:00" "06/11/2014 00:00:00"
    var endDate = new Date("09/30/2016 00:00:00");
    // 現在時刻
    var nowDate = new Date();
    // 残り時間（ミリ秒）
    var sands = endDate - nowDate;
    
    // Math.floor で小数点以下切り捨て
    // 残り時間「日」
    var d = Math.floor(sands / (1000 * 60 * 60 * 24));
    
    // 残り時間「時」
    sands -= (d * (1000 * 60 * 60 * 24));
    var h = Math.floor(sands / (1000 * 60 * 60));
    
    // 残り時間「分」
    sands -= (h * (1000 * 60 * 60));
    var m = Math.floor(sands / (1000 * 60));
    
    // 残り時間「秒」
    sands -= (m * (1000 * 60));
    var s = Math.floor(sands / 1000);
		var sDisplay = "";
	if (s < 10) {
		sDisplay = "0"+s;
	}else {
		sDisplay = s;
	}
    
    // 残り時間「ミリ秒」
    sands -= (s * 1000);
    var ms = Math.floor(sands / 10);
		var msDisplay = "";
		if (ms < 10){
			msDisplay = "0"+ms;
		} else {
			msDisplay = ms;
		}
    
    // 表示させる
    if (endDate > nowDate) {
       $("#title-timer").text('終了まで');
			$("#day").text(d);
			$("#hour").text(h);
			$("#minute").text(m);
			$("#second").text(sDisplay);
			$("#msecond").text(msDisplay);
    } else {
      $("#title-timer").text('たくさんのご参加ありがとうございました!! キャンペーンは終了しました!!');
			$(".remove-span").css('display', 'none');
			$("#day").css('display', 'none');
			$("#hour").css('display', 'none');
			$("#minute").css('display', 'none');
			$("#second").css('display', 'none');
			$("#msecond").css('display', 'none');
			$("#title-timer").css({'margin-top':'3px','color':'white','font-weight':'500' });
    }
    // 指定ミリ秒ごとにループ
    setTimeout(countDown, 10);
}

/*
//Countdown plugin

(function($) {
    $.fn.countdown = function(options, callback) {

      //custom 'this' selector
      var thisEl = $(this);

      //array of custom settings
      var settings = { 
        'date': null,
        'format': null
      };

      //append the settings array to options
      if(options) {
        $.extend(settings, options);
      }

      //main countdown function
      var countdown_proc = function () {

        var eventDate = Date.parse(settings['date']) / 1000;
        var currentDate = Math.floor($.now() / 1000);

        if(eventDate <= currentDate) {
          callback.call(this);
          clearInterval(interval);
        };

        var seconds = eventDate - currentDate;

        var days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
        seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed

        var hours = Math.floor(seconds / (60 * 60));
        seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed

        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60; //update the seconds variable with no. of minutes removed

        //conditional Ss
        if (days == 1) { thisEl.find(".timeRefDays").text("Day"); } else { thisEl.find(".timeRefDays").text("Days"); }
        if (hours == 1) { thisEl.find(".timeRefHours").text("Hour"); } else { thisEl.find(".timeRefHours").text("Hours"); }
        if (minutes == 1) { thisEl.find(".timeRefMinutes").text("Minute"); } else { thisEl.find(".timeRefMinutes").text("Minutes"); }
        if (seconds == 1) { thisEl.find(".timeRefSeconds").text("Second"); } else { thisEl.find(".timeRefSeconds").text("Seconds"); }

        //logic for the two_digits ON setting
        if(settings['format'] == "on") {
          days = (String(days).length >= 2) ? days : "0" + days;
          hours = (String(hours).length >= 2) ? hours : "0" + hours;
          minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
          seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
        }

        //update the countdown's html values.
        if(!isNaN(eventDate)) {
          thisEl.find(".days").text(days);
          thisEl.find(".hours").text(hours);
          thisEl.find(".minutes").text(minutes);
          thisEl.find(".seconds").text(seconds);
        } else { 
          alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
          clearInterval(interval); 
        }
      }

      //run the function
      countdown_proc();

      //loop the function
      interval = setInterval(countdown_proc, 1000);

    }
}) (jQuery);


//Call countdown plugin
$(".countdown").countdown({
  date: "2 february 2017 6:19:00", // add the countdown's end date (i.e. 3 november 2012 12:00:00)
  format: "on" // on (03:07:52) | off (3:7:52) - two_digits set to ON maintains layout consistency
},

function() {

  // the code here will run when the countdown ends
  alert("done!")

});*/

/*Language Switcher*/
$('#lang-switcher').find('.ui-dropdown-list-trigger').each(function () {
	$(this).click(function () {
		$(this).parent().toggleClass('active');
	});
});

/*Carousel plugin (Responsive*/
$('.owl-carousel').owlCarousel({
		loop: true
		, margin: 10
		, responsiveClass: true
		, autoplay: true
		, autoplayTimeout: 3000
		, autoplayHoverPause: true
		, responsive: {
			0: {
				items: 1
				, nav: true
			}
			, 600: {
				items: 2
				, nav: true
			}
			, 1000: {
				items: 3
				, nav: true
				, loop: true
			}
		}
	})
	/*parallax effect*/
$('.parallax-window').parallax({
	imageSrc: '/image/bg.png'
});
/*animation*/
window.sr = ScrollReveal();
// Add class to <html> if ScrollReveal is supported
if (sr.isSupported()) {
	document.documentElement.classList.add('sr');
}
sr.reveal('.fooTitle-text', {
	container: '.fooContainer-head'
	, origin: 'left'
	, distance: '50px'
	, scale: '1'
	, duration: '1500'
	, easing: 'ease-in-out'
});
sr.reveal('.fooTitle-photo', {
	container: '.fooContainer-head'
	, origin: 'bottom'
	, distance: '30px'
	, scale: '1'
	, duration: '500'
	, delay: '1000'
	, easing: 'ease-in-out'
});
sr.reveal('.fooTitle-blurb', {
	container: '.fooContainer-blurb'
	, origin: 'bottom'
	, distance: '30px'
	, scale: '1'
	, duration: '1500'
	, easing: 'ease-in-out'
	, useDelay: 'onload'
});
sr.reveal('.fooBlurb', {
	container: '.fooContainer-blurb'
	, origin: 'bottom'
	, distance: '30px'
	, scale: '1'
	, duration: '500'
	, delay: '1000'
	, easing: 'ease-in-out'
}, 500);
sr.reveal('.fooBlurb-photo', {
	container: '.fooContainer-blurb'
	, origin: 'bottom'
	, distance: '30px'
	, delay: '2500'
	, scale: '1'
	, duration: '500'
	, easing: 'ease-in-out'
, });