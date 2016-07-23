
	$(function(){

		var adCount = 0;
		var noOfBgs = 22;
		var randomBg = (Math.floor(Math.random() * noOfBgs))+1;

		setInterval(ad, 3000);

		function ad() {

			$('.frame'+adCount).animate({'opacity':0},500);

			if(adCount < 2) {
				adCount++;
			}else{
				adCount = 0;
			}

			$('.frame'+adCount).animate({'opacity':1},500);

		}
		
		$('#term, #line').click(function() {
			location.reload();
		});

		$('html').css({
			  'background': 'url(img/bg/'+randomBg+'.jpg) no-repeat center center fixed',
			  '-webkit-background-size':'cover',
			  '-moz-background-size':'cover',
			  '-o-background-size':'cover',
			  'background-size':'cover',
			  'filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'img/bg/'+randomBg+'.jpg\', sizingMethod=\'scale\')',
			  '-ms-filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'img/bg/'+randomBg+'.jpg\', sizingMethod=\'scale\')'
		});

		function getSize(){
			var windowSize = $(window).width();
			if(windowSize>980){
				$('#container #copy').css('font-size','60px');
				$('#container #copy span').css('font-size','150px');
				$('#tweet').css('top','-5px');
				$('#dwp').css({'text-align':'center','right':'0', 'bottom':'20px;'});
			}else if(windowSize>750){
				$('#container #copy').css('font-size','50px');
				$('#container #copy span').css('font-size','100px');
				$('#tweet').css('top','-7px');
				$('#dwp').css({'text-align':'center','right':'0', 'bottom':'20px;'});
			}else{
				$('#container #copy').css('font-size','40px');
				$('#container #copy span').css('font-size','50px');
				$('#tweet').css('top','-12px');
				$('#dwp').css({'text-align':'right','right':'10px', 'bottom':'10px;'});
			}
		}

		$(window).resize(getSize);

		var drunkLength = terms.length;
		var adjectiveLength = adjectives.length;
		var randomDrunk = Math.floor(Math.random() * drunkLength);
		var randomAdjective = Math.floor(Math.random() * adjectiveLength);
		var drunkTerm = terms[randomDrunk]['term'];
		var adjectiveTerm = adjectives[randomAdjective]['term'];
		
		$('#copy #term').html(adjectiveTerm+"<span>"+drunkTerm+"</span>");

		$('#twitter_button').attr('data-text','#OtherWordsForBeingDrunk : '+adjectiveTerm.toUpperCase()+' '+drunkTerm.toUpperCase()+' @DWPCollective ');
	
		getSize();

	});