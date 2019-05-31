registerFn()
function registerFn(){//点击注册把账号信息存储到本地存储
	//先获取所有用户的对象，变成数组
	if(window.localStorage.userArr){//判断是否存在
		var array = JSON.parse(window.localStorage.userArr);
	}else{
		array = [];//创建一个新数组
	}
	$('.btn').on('tap',function(){
		var username = $('.register input').eq(0).val();//获取输入的账号密码
		var password = $('.register input').eq(1).val();
		var code = $('.register input').eq(2).val();
		if(username.trim() == ''){//判断用户名是否为空
			$('.text').html("用户名不能为空").css({
				opacity : 1
			})
		}else if(password.trim() == ''){//判断密码是否为空
			$('.text').html("密码不能为空").css({
				opacity : 1
			})
		}else if(code != 5864){//判断验证码是否正确
			$('.text').html("验证码错误").css({
				opacity : 1
			})
		}else if($('.register input').eq(3).prop("checked")!=true){//判断是否勾选
			$('.text').html("未勾选").css({
				opacity : 1
			})
		}else{//存储信息
			for(var i =0;i<array.length;i++){
					//判断是否有相同账号
					if(username==array[i].username){
						alert("该账号已存在");
					return;
				}
			}
			//创建对象
			var obj = {username:username,password:password}
			array.push(obj);
			window.localStorage.userArr=JSON.stringify(array);
			//alert("用户创建成功");
			window.history.back()
		}
		setTimeout(function(){
			$('.text').css({
				opacity : 0
			})
		},1000)
	}) 
	//点击头部的返回
	$('.header span').on('tap',function(){
		window.history.back();
	})
}