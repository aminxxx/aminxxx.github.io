
fnSearch()
function fnSearch(){
	$('.seach input').on('focus',function(){//搜索
		window.location.href = 'hot.html';
	})
	
	//Tap切换
	var spans = $('.classify span');
	var item = $('.product');
	for(var i=0;i<spans.length;i++){
		spans[i].index = i;//给每个标签添加自定义属性
		$(spans).eq(i).on('tap',function(){//添加点击事件
			for(var i=0;i<spans.length;i++){
				spans[i].className = '';
				item[i].style.display = "none";
			}
			this.className = "active";
			item[this.index].style.display = "block";
		})
	}
	
}
