resize();
	function resize(){
		var htmls = document.documentElement;
		var iw = window.innerWidth;
	//根据设计图自定义的rem换算单位,这里自定义为11.17,因为设计图为1170px,
	//1rem=100px,这样像素换算成rem只要除以100即可,任何有单位的都要换算,太小可不用
		htmls.style.fontSize = iw/7.50+'px';
		console.log(iw/7.5+'px')
	}
	window.onresize = function(){//浏览器宽高发生变化,触发事件
		resize();
	}