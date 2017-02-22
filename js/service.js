$(function () {
	var preLi = $(".tab-nav>.active");
	var divs = $("#product>div");
	var preDiv = $("#product>div.active");
	var footer = $(".footer");
	var allPro = $(".all-products"), oil = $(".lube-oil"), maintain = $(".maintain"), consumables = $(".consumables");

	$(".tab-nav>li").click(function () {
		var i = $(this).index();
		$(preDiv).removeClass("active");
		preLi.removeClass("active");
		$(this).addClass("active");
		$(divs[i]).addClass("active");
		preLi = $(this);
		preDiv = $(divs[i]);

		var oilImg = new CreateImg(oil,oilImgs);
		var maintainImg = new CreateImg(maintain,maintainImgs);
		var consumablesImg = new CreateImg(consumables,consumablesImgs);

		if(oil.hasClass("active") && oil[0].children.length == 1){
			oilImg.createFn();
			$(window).scroll(function () {
				if(oil.hasClass("active"))oilImg.scrollListener();
			})
		}
		if(maintain.hasClass("active") && maintain[0].children.length == 1){
			maintainImg.createFn();
			$(window).scroll(function () {
				if(maintain.hasClass("active"))maintainImg.scrollListener();
			})
		}
		if(consumables.hasClass("active") && consumables[0].children.length == 1){
			consumablesImg.createFn();
			$(window).scroll(function () {
				if(consumables.hasClass("active"))consumablesImg.scrollListener();
			})
		}

	})

	/**
	 * 加载图片对象
	 * @param $ele
	 */
	function CreateImg($ele,imgArr) {
		this.ele = $ele;
		this.imgs = imgArr;
		this.index = 0;
	}
	CreateImg.prototype = {
		// index : 0,
		createFn : function () {
			var self = this;
			var img = new Image();
			img.src = self.imgs[self.index];
			if(self.ele.hasClass("active")){
				self.ele.append(img);
				self.ele.addClass("loading");
			}
			if(img.complete){
				self.ele.removeClass("loading");
				self.ele.removeClass("loading");
				self.index++;
			}else {
				img.onload = function () {
					self.ele.removeClass("loading");
					self.ele.removeClass("loading");
					self.index++;
				}
			}
		},
		scrollListener : function () {
			if((footer.offset().top - $(window).scrollTop()) < 770 && this.index < this.imgs.length && !this.ele.hasClass("loading")){
				this.createFn();
			};
		}
	}
	var allProImg = new CreateImg(allPro,imgs);
	allProImg.createFn();
	$(window).scroll(function () {
		if(allPro.hasClass("active"))allProImg.scrollListener();
	})
})