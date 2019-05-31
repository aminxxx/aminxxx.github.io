hotFn()
function hotFn(){
	$('.list').on('tap',function(ev){
		$('.seach input').val(ev.target.innerHTML);//点击热点搜索获取内容，并把内容赋给input值
	})
	$('.header span').eq(1).on('tap',function(){//点击搜索，跳转到商品列表
		var html = $('.seach input').val();
		if(!html.trim() == ''){
			$('.seach input').val('');
			window.location.href = 'productList.html'
		}else{
			$('.tips').show();
			setTimeout(function(){
				$('.tips').hide();
			},1000)
		}
	})
	
}