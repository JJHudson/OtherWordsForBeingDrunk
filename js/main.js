
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

	var drunk = new Drunk(22);
