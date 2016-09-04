
	var Drunk = function(backgrounds) {

		var _this = this;	

		function getVariables() {

			_this.noOfBgs = backgrounds;
			_this.randomBg = (Math.floor(Math.random() * _this.noOfBgs))+1;
			_this.adjectiveNumber = Math.floor(Math.random() * adjectives.length);
			_this.termNumber = Math.floor(Math.random() * terms.length);
			_this.adjective = adjectives[_this.adjectiveNumber]['term'];
			_this.term = terms[_this.termNumber]['term'];

			setBackground();

		}

		function setBackground() {

			$('.container').attr('data-bg', _this.randomBg);

			setTerms();	

		}

		function setTerms() {

			$('.copy__term').html(_this.adjective+"<span>"+_this.term+"</span>");

		}

		function init() {

			getVariables();
			
			$('body').on('click', getVariables);

		}

		init();

	};

	var terms = [{'term':'badgered'},{'term':'bashed'},{'term':'battered'},{'term':'befuddled'},{'term':'bent'},{'term':'bladdered'},{'term':'blasted'},{'term':'blathered'},{'term':'blitzed'},{'term':'blottoed'},{'term':'bombed'},{'term':'bosky'},{'term':'buckled'},{'term':'buttered'},{'term':'buttoned'},{'term':'buzzed'},{'term':'cabbaged'},{'term':'canned'},{'term':'charged up'},{'term':'Chevy Chased'},{'term':'clobbered'},{'term':'cockeyed'},{'term':'corned'},{'term':'crapulous'},{'term':'crunk'},{'term':'crunkered'},{'term':'crocked'},{'term':'cunted'},{'term':'decimated'},{'term':'destroyed'},{'term':'disorderly'},{'term':'elevated'},{'term':'etched'},{'term':'euphoric'},{'term':'flushed'},{'term':'fried'},{'term':'fuddled'},{'term':'fucked'},{'term':'ganted'},{'term':'gassed'},{'term':'gatted'},{'term':'gazeboed'},{'term':'glorious'},{'term':'goosed'},{'term':'gubbed'},{'term':'guttered'},{'term':'half cut'},{'term':'hammered'},{'term':'hooched'},{'term':'hosed'},{'term':'housed'},{'term':'hurt'},{'term':'inebriated'},{'term':'inebrious'},{'term':'intemperate'},{'term':'intoxicated'},{'term':'juiced'},{'term':'kippered'},{'term':'lagged up'},{'term':'lamped'},{'term':'langered'},{'term':'larrupt'},{'term':'lashed'},{'term':'leathered'},{'term':'liquorished'},{'term':'loaded'},{'term':'locked'},{'term':'looped'},{'term':'lubricated'},{'term':'mangled'},{'term':'manky'},{'term':'mashed'},{'term':'meffed'},{'term':'mellow'},{'term':'Merle Haggard'},{'term':'minced'},{'term':'monged'},{'term':'monkey full'},{'term':'mottled'},{'term':'Moulin Rouged'},{'term':'muckibus'},{'term':'muddled'},{'term':'mullered'},{'term':'Newcastled'},{'term':'obliterated'},{'term':'obliviated'},{'term':'paggered'},{'term':'palintoshed'},{'term':'paralytic'},{'term':'paralyzed'},{'term':'pickled'},{'term':'pie eyed'},{'term':'pished'},{'term':'pissed'},{'term':'piss eyed'},{'term':'pixilated'},{'term':'plastered'},{'term':'plotzed'},{'term':'plowed'},{'term':'poleaxed'},{'term':'pollatic'},{'term':'polluted'},{'term':'potted'},{'term':'primed'},{'term':'rat arsed'},{'term':'rat legged'},{'term':'ratted'},{'term':'ravaged'},{'term':'razzled'},{'term':'rendered'},{'term':'ripped'},{'term':'rip roaring'},{'term':'roaring'},{'term':'rubbered'},{'term':'ruined'},{'term':'salmoned'},{'term':'sauced'},{'term':'screwed'},{'term':'scuppered'},{'term':'scuttered'},{'term':'sewed up'},{'term':'shickered'},{'term':'shitfaced'},{'term':'shithoused'},{'term':'skew whiff'},{'term':'slagged'},{'term':'slaughtered'},{'term':'slizzard'},{'term':'sloppy'},{'term':'sloshed'},{'term':'slozzled'},{'term':'smashed'},{'term':'snatered'},{'term':'snobbled'},{'term':'snockered'},{'term':'sodden'},{'term':'sottish'},{'term':'soused'},{'term':'sozzled'},{'term':'spangled'},{'term':'spannered'},{'term':'spiffed'},{'term':'spifflicated'},{'term':'splashed'},{'term':'splattered'},{'term':'spongelled'},{'term':'squiffy'},{'term':'squished'},{'term':'steaming'},{'term':'steampigged'},{'term':'stewed'},{'term':'stiff'},{'term':'stinking'},{'term':'stinko'},{'term':'stonkin'},{'term':'stotious'},{'term':'swacked'},{'term':'tanked'},{'term':'tashered'},{'term':'temulent'},{'term':'tiddley'},{'term':'toasted'},{'term':'totalled'},{'term':'trashed'},{'term':'trollied'},{'term':'troubled'},{'term':'trousered'},{'term':'tweaked'},{'term':'twisted'},{'term':'twizzled'},{'term':'vulcanized'},{'term':'wankered'},{'term':'warped'},{'term':'wasted'},{'term':'wellied'},{'term':'whaled'},{'term':'williamed'},{'term':'winehoused'},{'term':'wiped out'},{'term':'wired'},{'term':'woofled'},{'term':'woozy'},{'term':'wrecked'},{'term':'zombied'},{'term':'zoned'},{'term':'zonked'}]
	var adjectives = [{'term':'absolutely'},{'term':'acutely'},{'term':'altogether'},{'term':'assuredly'},{'term':'awfully'},{'term':'categorically'},{'term':'completely'},{'term':'comprehensively'},{'term':'conclusively'},{'term':'decidedly'},{'term':'determinately'},{'term':'drastically'},{'term':'embarrassingly'},{'term':'entirely'},{'term':'exceedingly'},{'term':'exceptionally'},{'term':'excessively'},{'term':'exhaustively'},{'term':'exorbitantly'},{'term':'extensively'},{'term':'extraordinarily'},{'term':'fantastically'},{'term':'flat out'},{'term':'fucking'},{'term':'full on'},{'term':'fully'},{'term':'highly'},{'term':'hugely'},{'term':'immensely'},{'term':'intensely'},{'term':'irrevocably'},{'term':'masterfully'},{'term':'mesmerisingly'},{'term':'more than a little bit'},{'term':'mortally'},{'term':'notably'},{'term':'overly'},{'term':'painstakingly'},{'term':'pathetically'},{'term':'perfectly'},{'term':'plenty'},{'term':'powerful'},{'term':'properly'},{'term':'positively'},{'term':'quite'},{'term':'radically'},{'term':'remarkably'},{'term':'severely'},{'term':'sloppily'},{'term':'solidly'},{'term':'straight up'},{'term':'strikingly'},{'term':'successfully'},{'term':'terribly'},{'term':'terrifically'},{'term':'thoroughly'},{'term':'top to bottom'},{'term':'truly'},{'term':'ultra'},{'term':'unconditionally'},{'term':'unduly'},{'term':'unequivocally'},{'term':'unmistakably'},{'term':'unobtrusively'},{'term':'unreservedly'},{'term':'unquestionably'},{'term':'utterly'},{'term':'violently'},{'term':'well and truely'},{'term':'wicked'},{'term':'wholly'}]
	var drunk = new Drunk(22);
