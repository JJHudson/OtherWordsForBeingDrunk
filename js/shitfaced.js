
	$(function(){

		var noOfBgs = 22;
		var randomBg = (Math.floor(Math.random() * noOfBgs))+1;
		
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

		


		var drunkLength = words.length;
		var absoluteleyLength = terms.length;
		var randomDrunk = Math.floor(Math.random() * drunkLength);
		var randomAbsoluteley = Math.floor(Math.random() * absoluteleyLength);
		var drunkTerm = words[122]['term'];
		var absoluteleyTerm = terms[randomAbsoluteley]['term'];
		

		$('#copy #term').html(absoluteleyTerm+"<span>"+drunkTerm+"</span>");

		$('#twitter_button').attr('data-text','#OtherWordsForBeingDrunk : '+absoluteleyTerm.toUpperCase()+' '+drunkTerm.toUpperCase());
		

		

		// var url = 'https://spreadsheets.google.com/feeds/list/0AvOnDqhLqMaTdGJtR3BGWTR1WUFxc3hmdG8tSFNpSGc/od6/public/values?alt=json';
		// $.getJSON(url, function(data) {
		// 	console.log(data);
		// 	var drunkLength = data.feed.entry.length;
		// 	var absoluteleyLength = 10;
		// 	var drunkTermID = Math.floor(Math.random() * drunkLength);
		// 	var absoluteleyTermID = Math.floor(Math.random() * absoluteleyLength);
		// 	var drunkTerm = data.feed.entry[drunkTermID].gsx$drunkterms.$t;
		// 	var absolutelyTerm = data.feed.entry[absoluteleyTermID].gsx$absoluteleyterms.$t;

		// 	$('#copy').html("<span>I got "+absolutelyTerm+"</span>"+drunkTerm);
		// 	$("#copy").fitText();

		// });
	
		getSize();


	});