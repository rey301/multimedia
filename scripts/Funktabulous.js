window.onload = function start() {
	var paper = new Raphael(document.getElementById('svg'), 800, 600);
	var background = paper.rect(0, 0, 800, 600).attr({ fill: 'black' });
	var audio = new Audio('../assets/Funk-tabulous.mp3');
	audio.currentTime = 0;
	var randColour;
	var randHeight;
	var star = paper
		.path(
			'M375,300 L400,250 L425,300 L480,300 L440,340 L455,400 L400,375 L345,400 L360,340 L320,300 L375,300'
		)
		.attr({ stroke: 'white', fill: 'blue' });
	var stars = new Array(5);
	for (var i = 0; i < 5; i++) {
		stars[i] = star;
	}
	var discoball = paper.image(
		(src = '../assets/images/discoball.png'),
		300,
		-251,
		190,
		251
	);
	var colourSet = ['red', 'yellow', 'lime', 'fuchsia', 'blue'];
	var circle = paper.circle(400, 300, 20).attr({ fill: '45-blue-red' });
	var rect1 = paper.rect(0, 590, 80, 10);
	var rect2 = paper.rect(80, 590, 80, 10);
	var rect3 = paper.rect(160, 590, 80, 10);
	var rect4 = paper.rect(240, 590, 80, 10);
	var rect5 = paper.rect(320, 590, 80, 10);
	var rect6 = paper.rect(400, 590, 80, 10);
	var rect7 = paper.rect(480, 590, 80, 10);
	var rect8 = paper.rect(560, 590, 80, 10);
	var rect9 = paper.rect(640, 590, 80, 10);
	var rect10 = paper.rect(720, 590, 80, 10);
	circle.hide();
	star.hide();

	document.getElementsByClassName('toggleButton')[0].onclick = function () {
		runAnimation();
	};

	function runAnimation() {
		audio.play();
		oneBeat();
		setTimeout(generateFloorColours, 1818);
		setTimeout(generateFloorColours, 2272);
		setTimeout(generateFloorColours, 2726);
		setTimeout(generateFloorColours, 3180);
		setTimeout(intervalColours, 3634);
		setTimeout(twoBeat, 454);
		setTimeout(threeBeat, 909);
		setTimeout(fourOneHalfBeat, 1136);
		setTimeout(fourTwoHalfBeat, 1363);
		setTimeout(reduce, 1818);
		setTimeout(enlarge, 2272);
		setTimeout(reduce, 2727);
		setTimeout(drop, 3181);
		setTimeout(moveDiscoBall, 3181);
		setTimeout(hideCircle, 3636);
		setTimeout(wavePairOne, 3636);
		setTimeout(wavePairTwo, 3693);
		setTimeout(wavePairThree, 3750);
		setTimeout(wavePairFour, 3807);
		setTimeout(intervalBars, 3807);
	}

	function moveDiscoBall() {
		discoball.animate({ x: 300, y: 0 }, 1818, 'ease-in');
	}

	function intervalBars() {
		setInterval(randomBars, 227);
		setInterval(changeBackground, 227);
	}

	function intervalColours() {
		setInterval(generateFloorColours, 1818);
	}

	function hideCircle() {
		circle.hide();
	}

	function changeBackground() {
		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		background.animate({ fill: randColour }, 454, 'ease-in');
	}

	function randomBars() {
		randHeight = Math.floor(Math.random() * 80 + 510);
		rect1.animate({ y: randHeight, height: 300 }, 227, 'elastic');

		randHeight = Math.floor(Math.random() * 80 + 510);
		rect2.animate({ y: randHeight, height: 300 }, 227, 'elastic');

		randHeight = Math.floor(Math.random() * 80 + 510);
		rect3.animate({ y: randHeight, height: 300 }, 227, 'elastic');

		randHeight = Math.floor(Math.random() * 80 + 510);
		rect4.animate({ y: randHeight, height: 300 }, 227, 'elastic');

		randHeight = Math.floor(Math.random() * 80 + 510);
		rect5.animate({ y: randHeight, height: 300 }, 227, 'elastic');

		randHeight = Math.floor(Math.random() * 80 + 510);
		rect6.animate({ y: randHeight, height: 300 }, 227, 'elastic');

		randHeight = Math.floor(Math.random() * 80 + 510);
		rect7.animate({ y: randHeight, height: 300 }, 227, 'elastic');

		randHeight = Math.floor(Math.random() * 80 + 510);
		rect8.animate({ y: randHeight, height: 300 }, 227, 'elastic');

		randHeight = Math.floor(Math.random() * 80 + 510);
		rect9.animate({ y: randHeight, height: 300 }, 227, 'elastic');

		randHeight = Math.floor(Math.random() * 80 + 510);
		rect10.animate({ y: randHeight, height: 300 }, 227, 'elastic');
	}

	function oneBeat() {
		rect1.attr({ fill: 'red' });
		rect2.attr({ fill: 'red' });
	}

	function twoBeat() {
		rect3.attr({ fill: 'yellow' });
		rect4.attr({ fill: 'yellow' });
	}

	function threeBeat() {
		rect5.attr({ fill: 'lime' });
		rect6.attr({ fill: 'lime' });
	}

	function fourOneHalfBeat() {
		rect7.attr({ fill: 'fuchsia' });
		rect8.attr({ fill: 'fuchsia' });
	}

	function fourTwoHalfBeat() {
		rect9.attr({ fill: 'blue' });
		rect10.attr({ fill: 'blue' });
	}

	function wavePairOne() {
		rect4.animate({ y: 580, height: 200 }, 57, 'elastic');
		rect7.animate({ y: 580, height: 200 }, 57, 'elastic');
	}

	function wavePairTwo() {
		rect3.animate({ y: 570, height: 200 }, 57, 'elastic');
		rect8.animate({ y: 570, height: 200 }, 57, 'elastic');
	}

	function wavePairThree() {
		rect2.animate({ y: 560, height: 200 }, 57, 'elastic');
		rect9.animate({ y: 560, height: 200 }, 57, 'elastic');
	}

	function wavePairFour() {
		rect1.animate({ y: 550, height: 200 }, 227, 'elastic');
		rect10.animate({ y: 550, height: 200 }, 227, 'elastic');
	}

	function enlarge() {
		circle.animate({ transform: 's2', fill: 'blue' }, 454.54, 'elastic');
	}

	function reduce() {
		circle.show();
		circle.animate({ transform: 's0.5', fill: 'red' }, 454.54, 'elastic');
	}

	function drop() {
		circle.animate({ cx: 400, cy: 950 }, 454.54, 'ease-in');
	}

	function generateFloorColours() {
		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect1.attr({ fill: randColour });

		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect2.attr({ fill: randColour });

		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect3.attr({ fill: randColour });

		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect4.attr({ fill: randColour });

		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect5.attr({ fill: randColour });

		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect6.attr({ fill: randColour });

		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect7.attr({ fill: randColour });

		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect8.attr({ fill: randColour });

		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect9.attr({ fill: randColour });

		randColour = colourSet[Math.floor(Math.random() * 5 + 0)];
		rect10.attr({ fill: randColour });
	}
};
