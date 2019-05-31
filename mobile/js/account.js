account()
function account(){
	//获取金额
	var num = parseInt(window.location.hash.split('=')[1]);
	$('.money em').html(num);
	//单号，随机数
	$('.number em').html(Math.floor(Math.random()*10000000000))
	//console.log( Math.floor(Math.random()*10000000000))
	
	
	
	$(".union").on('tap',function(ev){
		checkFn('.union i');
	})
	$(".wechat").on('tap',function(ev){
		checkFn('.wechat i');
	})
	$(".alipay").on('tap',function(ev){
			checkFn('.alipay i');
	})
	function checkFn(item){//是否勾选上
		$('.icon-select').show();
		$(".icon-xuanzhong").hide();
		$(item).eq(0).hide();
		$(item).eq(1).show();
	}
	//点击立即支付
	$('.btn').on('tap',function(){
		var show = $(".icon-xuanzhong");
		for(var i=0;i<show.length;i++){
			//console.log($(".icon-xuanzhong").eq(i).css('display'))
			if($(".icon-xuanzhong").eq(i).css('display') == 'inline'){//判断是否是选中状态
				$('.popout').show();
			}else if($(".icon-xuanzhong").eq(0).css('display') == 'none' && $(".icon-xuanzhong").eq(1).css('display') == 'none' &&$(".icon-xuanzhong").eq(2).css('display') == 'none'){
				$('.tips').html('请选择支付方式！').show();
			}
		}
		setTimeout(function(){$('.tips').hide();},1000)//提示隐藏
	})
	//点击确定
	$('.popout button').eq(0).on('tap',function(){
		if($('.popout input').val() !==''){
			var product = storage.get('indent');//获取付款成功的商品存起来在我的订单中渲染
			//console.log(product)
			for(var i=0;i<product.length;i++){
				storage.set('success',product[i]);
			}
			window.localStorage.removeItem('indent');//把付款过的商品清除
			window.location.href = 'success.html';
		}else{
			$('.tips').html('请输入密码！').show();
		}
		setTimeout(function(){$('.tips').hide();},1000)//提示隐藏	
	})
	//点击取消
	$('.popout button').eq(1).on('tap',function(){
		var product = storage.get('indent');
		for(var i=0;i<product.length;i++){
			storage.set('defeated',product[i]);
		}
		window.localStorage.removeItem('indent');//把付款过的商品清除
		window.location.href = 'defeated.html';
		window.location.href = 'defeated.html';
	})
	
}