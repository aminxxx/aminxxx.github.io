//去掉浏览器默认行为，设置rem字体
document.addEventListener('touchend touchmove',function(ev){
	ev.preventDefault();
})

window.onresize = function(){
	fnResize();
}
//设计rem字体
fnResize();
function fnResize(){
	var iW = window.innerWidth;
	var html = document.getElementsByTagName('html')[0];
	html.style.fontSize = iW/7.5 + 'px';
}
//点击返回上一个页面
returnFn()
function returnFn(){
	$(".header .header_return").eq(0).on('tap',function(){
		window.history.back()
	})
}
//点击底部导航，跳转页面
tapFn()
function tapFn(){
	var x = null;
	var y = null;
	$('.footer ').on('tap',function(ev){//使用事件委托给底部导航添加点击事件，
		if(ev.target.nodeName == 'SPAN'){//判断点击的事件源是不是要触发的事件源
			var str = $(ev.target).attr('className');//获取事件源的类名
			if(str.indexOf('icon-yemian') != -1){//根据类名判断要跳转到那个页面
				window.location.href = 'home.html';
			}else if(str.indexOf('icon-huo') != -1){
				window.location.href = 'hot.html';
			}else if(str.indexOf('icon-shangcheng1') != -1){
				window.location.href = 'classify.html';
			}else if(str.indexOf('icon-gouwuche1') != -1){
				window.location.href = 'shoppingCar.html';
			}else if(str.indexOf('icon-jingjirenjinglikehumianxingcopy') != -1){
				window.location.href = 'my.html';
			}
		}
	})
	
}
//搜索
fnSearch()
function fnSearch(){
	$('.seach input').on('focus',function(){
		window.location.href = 'hot.html';
	})	
}