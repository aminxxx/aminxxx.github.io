/* 数据渲染 */
var data = productData;
for(var i=0;i<data.length;i++){
	var li = document.createElement('li');
	var html = '<div class="product_left" dataId="'+data[i].id+'">'+
						'<img src="'+data[i].img+'" >'+
					'</div>'+
					'<div class="product_right" dataId="'+data[i].id+'">'+
						'<h3>'+data[i].title+'</h3>'+
						'<p>'+data[i].info+'</p>'+
						'<p>包邮</p>'+
						'<span>'+
							'<b>'+data[i].price+'</b>'+
							'<em>5.9万+条好评</em>'+
							'<em>好评98%</em>'+
							'<i class="iconfont icon-jiagou-icon-" dataId="'+data[i].id+'"></i>'+
						'</span>'+
					'</div>';
	li.innerHTML =html;
	$('.product ul').append($(li));
}

//点击跳转到商品详情页面
fndetails()
function fndetails(){

	$('.product ul').on('touchstart',function(ev){//手机按下时记录手指的位置信息
		if(ev.target.nodeName == 'DIV'){
			var id = $(ev.target).attr("dataId");
		//	window.location.href = 'details.html#productId='+id;//带参数的跳转
		}else if(ev.target.nodeName == 'I'){
			var index = $(ev.target.parentNode.parentNode.parentNode).index();//获取当前数据所有在的下标
			var data1 = storage.get('productInfo');//获取本地存储的信息
			data1.push(data[index])//把当前获取到的数据往本地存储里面添加
			window.localStorage.removeItem('productInfo');
			for(var i=0;i<data1.length;i++){
				storage.set('productInfo',data1[i]);
			}
			//var id = $(ev.target).attr("dataId");
			//点击添加购物车,判断是否登录过
			var userInfo = window.localStorage.getItem('userInfo');
			if(userInfo){
				window.location.href = 'shoppingCar.html';//带参数的跳转	
				
			}else{
				window.location.href = 'login.html';
			}
			
		}
	})
}

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
