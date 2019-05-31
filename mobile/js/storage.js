// 封装一个本地存储
var storage={
	newSet(key,arr){
		window.localStorage.setItem(key,JSON.stringify(arr));
	},
	set:function(name,data){//存储数据
		var arr = window.localStorage.getItem(name);//先往本地存储里面获取信息
		if(arr){//判断里面是否存在这些数据
			arr = JSON.parse(arr);
		}else{
			arr = [];
		}
		var onoff = arr.some(function(item,index){
			return data.id == item.id
		})
			
			
		if(onoff){
			var num = null;
			arr.map(function(item,index){
				if(item.id == data.id){
					num = index
				}				
			})
			arr[num].num = arr[num].num+1;
			
		}else{
			arr.push(data);	
		}
		window.localStorage.setItem(name,JSON.stringify(arr));
		
	},
	get:function(name){//获取数据
		var arr = window.localStorage.getItem(name);
		if(arr){
			arr = JSON.parse(arr)
		}else{
			arr = [];
		}
		return arr;
	},
	reomve:function(name,id){//删除数据
		var arr = window.localStorage.setItem(name);
		arr = JSON.parse(arr);
		
		var list = arr.filter(function(item,index){
			
			return item.id != id
		})
		
		window.localStorage.setItem(name,JSON.parse(list))
		
	}
}

