/**
 * Created by Jeremy on 2015/4/11.
 */
function 绘制速度表盘() {
	var c = document.getElementById("速度信息区");
	var cxt = c.getContext("2d");


	var radius = 120;
	var tempHigh = 20;
	var tempWidth = 30;
	var angle = 0;
	var radiusShort = 100;
	var pointAX = 0; //外部点的X
	var pointAY = 0;
	var pointBX = 0; //内部点的X
	var pointBY = 0;
	var pointCX = 100; //表盘中的速度值的X
	var pointCY = 100;
	var zeroX = tempHigh + radius; //坐标零点的X
	var zeroY = tempWidth + radius;
	var speedDisplay = 0; //表盘中的速度值


	var stringPos = [
		[
			0, 0, 0, 15, 15, 25, 30, 30, 30, 20
		],
		[
			0, -5, -5, -15, -15, -15, -5, -5, 0, 5
		]
	]; //用于调整每个数字的位置

	cxt.beginPath();
	cxt.strokeStyle = 'rgba(255,255,255,1)';
	cxt.fillStyle = 'rgba(255,255,255,1)';
	cxt.font = "18px Times New Roman";

	for (var i = 0; i <= 45; i++) {
		if ((i % 5) == 0) {
			radiusShort = radius - 25;
			speedDisplay = i * 10;
		} else {
			radiusShort = radius - 15;
		};
		if (angle < 135) {
			pointAX = zeroX - radius * Math.sin(Math.PI * (40 + angle) / 180.0);
			pointAY = zeroY + radius * Math.cos(Math.PI * (40 + angle) / 180.0);
			pointBX = zeroX - radiusShort * Math.sin(Math.PI * (40 + angle) / 180.0);
			pointBY = zeroY + radiusShort * Math.cos(Math.PI * (40 + angle) / 180.0);
			if (i % 5 == 0) {
				pointCX = zeroX - radiusShort * Math.sin(Math.PI * (40 + angle) / 180.0) - stringPos[0][i / 5];
				pointCY = zeroY + radiusShort * Math.cos(Math.PI * (40 + angle) / 180.0) - stringPos[1][i / 5];
			}
			angle += 9;
		} else if (angle <= 290) {
			pointAX = zeroX - radius * Math.sin(Math.PI * (40 + angle) / 180.0);
			pointAY = zeroY + radius * Math.cos(Math.PI * (40 + angle) / 180.0);
			pointBX = zeroX - radiusShort * Math.sin(Math.PI * (40 + angle) / 180.0);
			pointBY = zeroY + radiusShort * Math.cos(Math.PI * (40 + angle) / 180.0);
			if (i % 5 == 0) {
				pointCX = zeroX - radiusShort * Math.sin(Math.PI * (40 + angle) / 180.0) - stringPos[0][i / 5];
				pointCY = zeroY + radiusShort * Math.cos(Math.PI * (40 + angle) / 180.0) - stringPos[1][i / 5];
			}
			angle += 4.8333;
		}
		if ((i % 5) == 0) {
			cxt.fillText(speedDisplay, pointCX, pointCY);
		}

		cxt.lineWidth = 2;
		cxt.moveTo(pointAX, pointAY);
		cxt.lineTo(pointBX, pointBY);
	};
	cxt.stroke();

	//var getRequest=new XMLHttpRequest();
	//getRequest.open("GET","http://localhost:8080/b.do",true);
	//getRequest.send(null);
}