var mySwiper = new Swiper('#banner', {
  autoplay:true,
	loop : true,
  pagination: {
    el: '.swiper-pagination',
  }
});

//获取商品跳转通过地址栏传过来的id，通过id获取对应商品数据渲染
var id = window.location.hash.split('=')[1];
var str =  window.location.hash.split('=')[0].substring(1);

if(str == 'shopId'){//判断是哪个页面的数据
	var arr = recommendData
	for(var i=0;i<arr.length;i++){//循环数据判断里面的id对应的数据是哪条数据
		if(id == arr[i].id){
			var item = arr[i];//当前页面渲染的这个商品的数据
		}
	}
	//渲染模板
	var html = '<h3>'+item.title+'</h3>'+
				'<p>'+item.info+'</p>'+
				'<b>'+item.price+'</b>';
	$(".info").prepend(html);//往元素前面添加
	//console.log(item);
	
}else if(str == 'productId'){
		var arr = productData;
		for(var i=0;i<arr.length;i++){//循环数据判断里面的id对应的数据是哪条数据
			if(id == arr[i].id){
				var item = arr[i];
			}
		}
		//渲染模板
		var html = '<h3>'+item.title+'</h3>'+
					'<p>'+item.info+'</p>'+
					'<b>'+item.price+'</b>';
		$(".info").prepend(html);//往元素前面添加
		//console.log(item);
}
//storage.set('productInfo',item)

//点击添加购物车,判断是否登录过

$('.car').on('touchstart',function(){
	var userInfo = window.localStorage.getItem('userInfo');//获取用户信息，判断是否登录
	
	
	if(userInfo){
		if(str == 'shopId'){
			var json = recommendData.filter(function(item,i){
				return item.id == id
			})[0];
			//console.log(json)
			storage.set('productInfo',json)
		}else if(str == 'productId'){
			var json = productData.filter(function(item,i){
				return item.id == id
			})[0];
			//console.log(json)
			storage.set('productInfo',json)
		}
		$('.tips').show();
		setTimeout(function(){
			$('.tips').hide();
		},1000)
		
		
	}else{
		window.location.href = 'login.html';
	}
})
//点击立即购买
$('.now').on('touchstart',function(){
	var userInfo = window.localStorage.getItem('userInfo');//获取用户信息，判断是否登录
	if(userInfo){//登录了
		if(str == 'shopId'){//判断是哪个页面的商品
			var json = recommendData.filter(function(item,i){//筛选出选择的商品
				return item.id == id
			})[0];
			storage.set('productInfo',json);
			window.location.href = 'shoppingCar.html';
		}else if(str == 'productId'){
			var json = productData.filter(function(item,i){
				return item.id == id
			})[0];
			storage.set('productInfo',json);
			window.location.href = 'shoppingCar.html';
		}
	}else{
		window.location.href = 'login.html';
	}
	
})