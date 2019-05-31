screenPage()
function screenPage(){
	
	$('.active_page button').on('tap',function(){
		$('.active_page').hide();
		$('.content').show();
	})
	
	
 	var body = document.querySelector("body");
	var content = document.querySelector(".content");
	var divs = content.querySelectorAll("div");
	var len = divs.length;
	var iW = window.innerWidth;
	var onoff = true;
	
	
	var num = 0;
	screen(body,"left",function(){
		
		if(onoff){
			onoff = false;
			num--;
			content.style.transition = '1s';
			content.style.transform = 'translateX('+iW*num+'px)';
			if(num <= (-len)){
				content.style.transform = 'translateX('+iW*(-(len-1))+'px)';
			}
			//当是最后一页时候划屏让它还是最后一页
			if(num == (-(len-1))){
				setTimeout(function(){
					window.location.href = './home.html';
					
				},2000)	
			}
			
			setTimeout(function(){
				onoff = true;
			},1000)
		}
	})
	 
	//点击跳过
	$('.screen_page span').on('tap',function(){
		window.open('./home.html','_self');
	})
	
}