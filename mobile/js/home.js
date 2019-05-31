var mySwiper = new Swiper('#banner', {
  autoplay:true,
	loop : true,
  pagination: {
    el: '.swiper-pagination',
  }
});
/* 数据渲染 */
var data = recommendData;
//console.log(data);
for(var i=0;i<data.length;i++){
	var div = document.createElement('div');
	div.dataId = data[i].id;
	var html = '<img src="'+data[i].img+'" >'+
				'<h3>'+data[i].title+'</h3>'+
				'<p>'+data[i].info+'</p>'+
				'<span>'+
					'<b>'+data[i].price+'</b>'+
					'<a href="javascript:;">看相似</a>'+
				'</span>'
	div.innerHTML = html;
	$(".recommend").append($(div));
}

//点击商品跳转到详情页面
$('.recommend').on('touchstart',function(ev){
	if(ev.target.nodeName == 'IMG'){
		var id = $(ev.target.parentNode).attr("dataId");
		console.log(ev.target.parentNode,id)
		window.location.href = "details.html#shopId="+id;
	}
})









//倒计时
//时间补0函数
function toTime(n){
	return n>9?n:'0'+n;
}
//封装一个倒计时函数
function countDown(){
	/* 
		future:未来的时间
		obj:计算出来的时间差在哪里写入
		fn：时间到了接下来需要做的事情
	 */
	var timer = null;//存储定时器的编号，方便关闭定时器
	clearInterval(timer);
	timer = setInterval(function(){
		execute();
	},1000)
	//页面加载完先执行
	execute();
	function execute(){
		var date = new Date(2019,06,01,20,00);//获取未来的时间的字符串，并转为时间
	
		var futureTime = date.getTime();//将获取到的未来时间转为时间戳
		//console.log(date,futureTime)
		var nowDate = new Date();//获取本机现在的时间
		var nowTime = nowDate.getTime();//转为时间戳
		//计算未来时间到现在的时间的时间差,并转为秒数
		var leftTime = parseInt((futureTime-nowTime)/1000);
		var day = parseInt(leftTime/(60*60*24));//计算天数
		var h = parseInt((leftTime - day*60*60*24)/(60*60));//计算小时
		var min = parseInt((leftTime - day*60*60*24 - h*3600)/60);//计算分钟
		var s = leftTime - day*60*60*24 - h*3600 - min*60;//计算秒
		var rush_time = document.getElementsByClassName('rush_time')[0];
		var spans = rush_time.getElementsByTagName("span");
		//console.log(spans);
		spans[0].innerHTML = (toTime(h));
		spans[1].innerHTML = (toTime(min));
		spans[2].innerHTML = (toTime(s));
		/* var rush_time = $('.rush_time span').eq(0).html(toTime(h));
		var rush_time = $('.rush_time span').eq(1).html(toTime(min));
		var rush_time = $('.rush_time span').eq(2).html(toTime(s)); */
		//在页面显示剩余时间
		//obj.innerHTML = '还剩：'+toTime(day)+'天'+toTime(h)+'时'+toTime(min)+'分'+toTime(s)+'秒';
		//判断时间是否到了，到了则关闭定时器
		if(leftTime == 0){
			//关闭定时器
			clearInterval(timer);
			//倒计时结束之后，是否要执行其他操作。判断传进来的是不是一个函数，是则执行，不是则不执行
			(typeof fn == 'function') && fn();
		}
	}
}
countDown()

//回到顶部
fnTop()
function fnTop(){	
		$(window).on('scroll',function(){//滚动条位置发生改变触发事件
				var iH = window.pageYOffset;
				if(iH>94){//设置搜索的位置
					$('.header').css({
						position: 'fixed',
						left : 0,
						top : 0
					})
				}else{
					$('.header').css({
						position: 'relative',
						left : 0,
						top : 0
					})
				}
				if(iH >=300){
						$('.return').show();
					}else if(iH <300){
						$('.return').hide();
					}
		})
		var timer = null;
		$('.return').on('tap',function(){
			timer = setInterval(function(){
					var h = window.pageYOffset;//获取滚动条的高度
					if(h<=0){//判断滚动条的高度有没有达到顶端
						clearInterval(timer);//true,关闭定时器
						return;
					}else{
						h -= 20;//false,每次都往上挪动一点
						window.scrollTo(0,h);//重新设置滚动条的位置
						}
			},1)
		})
}
//搜索
fnSearch()
function fnSearch(){
	$('.seach input').on('focus',function(){
		window.location.href = 'hot.html';
	})	
}
