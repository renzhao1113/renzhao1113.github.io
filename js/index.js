window.onload = function () {


	var banner = $(".lun-bo"),leftA = $(".lun-bo>.left"), rightA = $(".lun-bo>.right"), allA = $(".lun-bo>a"),
		offsetLeft = parseInt(ul1.css("width")) / 5;
	/**
	 * 窗口大小改变时,重置轮播图的大小和应该偏移的距离,并且始终让左右箭头保持居中
	 */
	window.onresize = function () {
		offsetLeft = parseInt(ul1.css("width")) / 5;
		dirCenter();
	}
	/**
	 * 轮播图启动
	 */
	var index = 1, timerId = null;
	dirCenter();
	timerId = setInterval(function () {
		index++;
		console.log("自动 " + index);
		start();
	},3000);
	//轮播图具体切换方法
	function start() {
		console.log("start " + index);
		allA.addClass("isMoving");
		if(index == 4){
			ul1.stop().animate({left:-offsetLeft*index},"slow",function () {
				allA.removeClass("isMoving");
				index = 1;
				ul1.css("left",-offsetLeft*index+"px");
			});
		}else if(index == 0){
			ul1.stop().animate({left:-offsetLeft*index},"slow",function () {
				allA.removeClass("isMoving");
				index = 3;
				ul1.css("left",-offsetLeft*index+"px");
			});
		}else {
			ul1.stop().animate({left:-offsetLeft*index},"slow",function () {
				allA.removeClass("isMoving");
			});
		}
	}
	/**
	 * 左右方向键控制
	 */
	leftA.click(function () {
		if(leftA.hasClass("isMoving")){
			return false;
		}
		clearInterval(timerId);
		index++;
		start();
	})
	rightA.click(function () {
		if(rightA.hasClass("isMoving")){
			return false;
		}
		clearInterval(timerId);
		index--;
		start();
	})
	/**
	 * 左右箭头居中
	 * */
	function dirCenter () {
		var bannerHieght = parseInt(banner.css("height"));
		leftA.css("top",bannerHieght/2-parseInt(leftA.css("height"))/2 + "px");
		rightA.css("top",bannerHieght/2-parseInt(rightA.css("height"))/2 + "px");
	};
}