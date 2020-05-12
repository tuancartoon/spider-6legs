module.exports = function(io) {
	var express = require('express');
	var router = express.Router();
	var five = require('johnny-five');
	const { EtherPortClient } = require('etherport-client');
	var board = new five.Board({
    	port: new EtherPortClient({
    		host: '192.168.4.1',
    		port: 3000
    	}),
    	repl: false
    });
	router.get('/', function(req, res, next) {
		res.render('index');
	});

	board.on("ready", function() {
		console.log("All ready");

		///////////////Khai bao cac bien///////////////////////
		var servo = new five.Servos([
			//////////////////////A////////////////////
			//0//
			{
				pin: 2,
				type: "continuous",
				address: 0x40,
				controller: "PCA9685"
			},
			//1//
			{
				pin: 6,
				type: "continuous",
				address: 0x41,
				controller: "PCA9685"
			},
			//2//
			{
				pin: 10,
				type: "continuous",
				address: 0x40,
				controller: "PCA9685"
			},
			//3//
			{
				pin: 2,
				type: "continuous",
				address: 0x41,
				controller: "PCA9685"
			},
			//4//
			{
				pin: 6,
				type: "continuous",
				address: 0x40,
				controller: "PCA9685"
			},
			//5//
			{
				pin: 10,
				type: "continuous",
				address: 0x41,
				controller: "PCA9685"
			},
			/////////////////B////////////////////
			//6//
			{
				pin: 1,
				type: "continuous",
				address: 0x40,
				controller: "PCA9685"
			},
			//7//
			{
				pin: 5,
				type: "continuous",
				address: 0x41,
				controller: "PCA9685"
			},
			//8//
			{
				pin: 9,
				type: "continuous",
				address: 0x40,
				controller: "PCA9685"
			},
			//9//
			{
				pin: 1,
				type: "continuous",
				address: 0x41,
				controller: "PCA9685"
			},
			//10//
			{
				pin: 5,
				type: "continuous",
				address: 0x40,
				controller: "PCA9685"
			},
			//11//
			{
				pin: 9,
				type: "continuous",
				address: 0x41,
				controller: "PCA9685"
			},
		
			//////////////////////////C////////////////////
			//12//
			{
				pin: 0,
				type: "continuous",
				address: 0x40,
				controller: "PCA9685"
			},
			//13//
			{
				pin: 4,
				type: "continuous",
				address: 0x41,
				controller: "PCA9685"
			},
			//14//
			{
				pin: 8,
				type: "continuous",
				address: 0x40,
				controller: "PCA9685"
			},
			//15//
			{
				pin: 0,
				type: "continuous",
				address: 0x41,
				controller: "PCA9685"
			},
			//16//
			{
				pin: 4,
				type: "continuous",
				address: 0x40,
				controller: "PCA9685"
			},
			//17//
			{
				pin: 8,
				type: "continuous",
				address: 0x41,
				controller: "PCA9685"
			}
		]);
			////////////////////0x41/////////////////
			var a, b, c, x, y, z, g, m, n, l, p, j, t, e;
			t = 90;
			//A//
			//Up
			a = 50;
			//donw
			b = 120;
			//B//
			c = 80;//up
			x = 180;//down
			//C//
			//up: 0
			y = 0;
			//down: 40
			z = 40; 
			/////////////////////0x40///////////////
			//A//
			e = 120;
			//nguoc lai, 
			//up: 140;
			g = 120;
			// down: 50///
			m = 60;
			//B//
			//up = 140;
			n = 100;
			//down = 0;
			l = 0;
			//C//
			//up: 180
			p = 150;
			//donw: 160
			j = 160;
			/////////////////////////
			var k,h;
			k = 40;
			h = 130;
			/////////////////Khai bao chan ra HR-SC04//////////////
			//var ping_ele_hc_sr_04 = new five.Ping(7);
		////////////////////////Ket thuc khai bao bien///////////////////////
			io.on("connection", function(socket) {
				console.log(socket.id + " is connection");
			////////////Check use disconnection//////////////
			socket.on("disconnect", function(){
				console.log(socket.id + " is disconnect!");
			});
			/////////////////Fun thuc hien chay////////////////
			//Test//
			/*socket.on('Client-send-forward', function() {
				console.log('User call robot is forward');
			});*/
			//End Test//
			////////////////////HR-SC04////////////////////
			
			///////////////////END HR-SC04/////////////////
			/////////////////////Step forward/////////////////
			socket.on('Client-send-forward', function move_Up() {
				setTimeout(function(){
					servo[6].to(110);
					servo[7].to(70);
					servo[8].to(110);

					servo[0].to(120);
					servo[1].to(70);
					servo[2].to(120); 
				}, 1000);

				setTimeout(function(){ 
					servo[6].to(t);
					servo[7].to(t);
					servo[8].to(t); 
				}, 2000);

				setTimeout(function(){
					servo[11].to(70);
					servo[10].to(110);
					servo[9].to(70); 
				}, 3000);

				setTimeout(function(){ 
					servo[0].to(t);
					servo[1].to(t);
					servo[2].to(t);

					servo[5].to(70);
					servo[4].to(120);
					servo[3].to(70); 
				}, 4000);

				setTimeout(function(){
					servo[11].to(t);
					servo[10].to(t);
					servo[9].to(t); 
				}, 5000);

				setTimeout(function(){
					servo[6].to(110);
					servo[7].to(70);
					servo[8].to(110); 
				}, 6000);

				setTimeout(function(){
					servo[5].to(t);
					servo[4].to(t);
					servo[3].to(t); 
				}, 7000);
				//Loop//
				forLoopLegs = setTimeout(function(){
					move_Up();
				}, 8000);
				console.log("End step Forward");
			});	
			///End step forward/////
			///////Step left///////
			socket.on('Client-send-left', function move_Left() {
				//Step1//
					servo[0].to(k);
					servo[2].to(h);
					servo[5].to(h);
					servo[3].to(k);

				//Step2//	
				setTimeout(function(){
					servo[6].to(110);
					servo[7].to(80);
					servo[8].to(110); 
				}, 1000);

				setTimeout(function(){
					servo[12].to(60);
					servo[13].to(70);
					servo[14].to(60); 
				}, 2000);

				setTimeout(function(){
					servo[6].to(t);
					servo[7].to(t);
					servo[8].to(t); 
				}, 3000);

				setTimeout(function(){
					servo[11].to(80);
					servo[10].to(110);
					servo[9].to(80); 
				}, 4000);

				setTimeout(function(){
					servo[12].to(t);
					servo[13].to(t);
					servo[14].to(t); 
				}, 5000);

				setTimeout(function(){
					servo[11].to(t);
					servo[10].to(t);
					servo[9].to(t);
				}, 6000);
				//Loop//
				forLoopLegs = setTimeout(function(){
					move_Left();
					console.log("Step Loop");
				},7000);
				console.log('End Step Left');
			});
			////////////////End Step LEFT//////////////////

			/////////////////////Step right//////////////////
			socket.on('Client-send-right', function move_Right() {
				//Step1//
					servo[0].to(k);
					servo[2].to(h);
					servo[5].to(h);
					servo[3].to(k);

				//Step2//	
				setTimeout(function(){
					servo[11].to(80);
					servo[10].to(110);
					servo[9].to(80); 
				}, 1000);

				setTimeout(function(){
					servo[17].to(110);
					servo[16].to(100);
					servo[15].to(110); 
				}, 2000);

				setTimeout(function(){
					servo[11].to(t);
					servo[10].to(t);
					servo[9].to(t); 
				}, 3000);

				setTimeout(function(){
					servo[6].to(110);
					servo[7].to(70);
					servo[8].to(110); 
				}, 4000);

				setTimeout(function(){
					servo[17].to(t);
					servo[16].to(t);
					servo[15].to(t); 
				}, 5000);

				setTimeout(function(){
					servo[6].to(t);
					servo[7].to(t);
					servo[8].to(t);
				}, 6000);
				//Loop//
				forLoopLegs = setTimeout(function(){
					move_Right();
					console.log("Step Loop");
				},7000);
				console.log('End step right');
			});

			/////////////////////End step right/////////////

			/////////////////////Step backward//////////////////
			socket.on('Client-send-backward', function move_Down() {
				setTimeout(function(){
					servo[6].to(110);
					servo[7].to(70);
					servo[8].to(110);

					servo[0].to(70);
					servo[1].to(120);
					servo[2].to(70);
				}, 1000);

				setTimeout(function(){ 
					servo[6].to(t);
					servo[7].to(t);
					servo[8].to(t); 
				}, 2000);

				setTimeout(function(){
					servo[11].to(70);
					servo[10].to(110);
					servo[9].to(70); 
				}, 3000);

				setTimeout(function(){ 
					servo[0].to(t);
					servo[1].to(t);
					servo[2].to(t);

					servo[5].to(120);
					servo[4].to(70);
					servo[3].to(120); 
				}, 4000);

				setTimeout(function(){
					servo[11].to(t);
					servo[10].to(t);
					servo[9].to(t); 
				}, 5000);

				setTimeout(function(){
					servo[6].to(110);
					servo[7].to(70);
					servo[8].to(110); 
				}, 6000);

				setTimeout(function(){
					servo[5].to(t);
					servo[4].to(t);
					servo[3].to(t); 
				}, 7000);

				forLoopLegs = setTimeout(function(){
					move_Down();
				}, 8000);
				console.log('End step down');
			});
			/////////////////////End step backward////////////
			
			/////////////////////Stop//////////////////////
			socket.on('Client-send-stop', function() {
				clearTimeout(forLoopLegs);				
				servo.stop();//defaul 90
				console.log('Servo stop');
			});
			/////////////////////End stop//////////////////

			///////////////Turn left///////////////////////
			socket.on('Client-send-turnLeft', function turn_Left() {
				setTimeout(function(){
					servo[6].to(110);
					servo[7].to(70);
					servo[8].to(110);

					servo[0].to(70);
					servo[1].to(70);
					servo[2].to(80);
				}, 1000);

				setTimeout(function(){ 
					servo[6].to(t);
					servo[7].to(t);
					servo[8].to(t);
					console.log("Step 2");
				}, 2000);

				setTimeout(function(){
					servo[11].to(70);
					servo[10].to(110);
					servo[9].to(70);
					console.log("Step 3");
				}, 3000);

				setTimeout(function(){ 
					servo[0].to(t);
					servo[1].to(t);
					servo[2].to(t);

					servo[5].to(70);
					servo[4].to(70);
					servo[3].to(80);
					console.log("Step 4");
				}, 4000);

				setTimeout(function(){
					servo[11].to(t);
					servo[10].to(t);
					servo[9].to(t);
					console.log("Step 5");
				}, 5000);

				setTimeout(function(){
					servo[6].to(110);
					servo[7].to(70);
					servo[8].to(110);
					console.log("Step 6");
				}, 6000);

				setTimeout(function(){
					servo[5].to(t);
					servo[4].to(t);
					servo[3].to(t);
					console.log("Step 7");
				}, 7000);
				//Loop//
				forLoopLegs = setTimeout(function(){
					turn_Left();
					console.log("End step turn left!");
				}, 8000);
				console.log("Turn Left");
			});
			///////////////End step turn left/////////////

			///////////////Step turn right///////////////
			socket.on('Client-send-turnRight', function turn_Right() {
				setTimeout(function(){
					servo[11].to(70);
					servo[10].to(110);
					servo[9].to(70);

					servo[5].to(120);
					servo[4].to(120);
					servo[3].to(100);
				}, 1000);

				setTimeout(function(){
					servo[11].to(t);
					servo[10].to(t);
					servo[9].to(t);
				}, 2000);

				setTimeout(function(){
					servo[6].to(110);
					servo[7].to(70);
					servo[8].to(110);
					console.log("Step 3");
				}, 3000);

				setTimeout(function(){
					servo[5].to(t);
					servo[4].to(t);
					servo[3].to(t);

					servo[0].to(120);
					servo[1].to(120);
					servo[2].to(100);
				}, 4000);

				setTimeout(function(){
					servo[6].to(t);
					servo[7].to(t);
					servo[8].to(t);
					console.log("Step 5");
				}, 5000);

				setTimeout(function(){
					servo[11].to(70);
					servo[10].to(110);
					servo[9].to(70);
					console.log("Step 6");
				}, 6000);

				setTimeout(function(){
					servo[0].to(t);
					servo[1].to(t);
					servo[2].to(t);
					console.log("Step 7");
				}, 7000);
				//Loop//
				forLoopLegs = setTimeout(function(){
					turn_Right();
				}, 7500);
			});
			///////////////End step turn right///////////

			////////////////Step dance//////////////////
			socket.on('Client-send-dance', function(){
				setTimeout(function(){
					servo[11].to(50);
				},1000);
				setTimeout(function(){
					servo[17].sweep();
				},2000);
			});
			/////////////// End dance//////////////////

			///////////////////Ket thuc fun chay//////////////
		});
	});
	return router;
};