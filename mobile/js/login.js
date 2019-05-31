loginFn()
function loginFn(){
	$(document).keyup(function(event){//按enter登录
		if(event.keyCode ==13){
			login();
		}
	});
	$('.login .btn').on('tap',function(){//点击登录，判断账号是否存在
		login();
	})
	//点击注册,跳转到注册页面
	$('.register').on('tap',function(){
		window.location.href = "register.html"
	})
}
function login(){
	var username = $('.login input').eq(0).val();//获取输入的账号密码
	var password = $('.login input').eq(1).val();
	if(window.localStorage.userArr){//判断在本地存储有没有存储账号的信息
		var array = JSON.parse(window.localStorage.userArr);//获取数据，并转为对象
		var onoff = false;//定义一个开关
		var index = 0;//定义一个下标确定用户
		for(var i=0;i<array.length;i++){
			//console.log(username,array[i].username)
			if(username == array[i].username){//这个账户存在
				onoff = true;
				index = i;
			}
		}
		
		if(onoff){//账户存在
			if(password == array[index].password){//判断密码是否正确
				window.localStorage.setItem('userInfo','true');//登录成功，存一个数据在其他页面方可判断是否登录
				window.history.back();
			}else{
				alert("密码错误！");
			}
		}else{
			alert("账户不存在!");
		}
	}else{
		alert("账户不存在!");
	}
}