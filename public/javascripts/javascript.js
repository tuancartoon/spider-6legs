var socket = io.connect('http://192.168.4.2:3000');

function moverForward() {
	socket.emit('Client-send-forward');
};

function moveLeft() {
	socket.emit('Client-send-left');
};

function moveRight() {
	socket.emit('Client-send-right');
};

function moveBackward() {
	socket.emit('Client-send-backward');
};

function stopMotor() {
	socket.emit('Client-send-stop');
};

function moverTurnLeft() {
	socket.emit('Client-send-turnLeft');
};

function moverTurnRight(){
	socket.emit('Client-send-turnRight');
};

function moveDance(){
	socket.emit('Client-send-dance');
};