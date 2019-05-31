function screen(obj,direction,fn){
	var x = null;
	var y = null;

	obj.addEventListener('touchstart', function(ev){
		ev = ev.changedTouches[0];
		x = ev.pageX;
		y = ev.pageY;
	})
	obj.addEventListener('touchend', function(ev){
		ev = ev.changedTouches[0];
		var disx = ev.pageX - x;
		var disy = ev.pageY - y;
		if(Math.abs(disx) >= Math.abs(disy)){//左右滑动
			if(disx>=0){//右滑
				if(direction == 'right'){
					fn();
				}
			}else{//左滑
				if(direction == 'left'){
					fn();
				}
			}
		}else{//上下滑动
			if(disy>=0){//下滑
				if(direction == 'down'){
					fn();
				}
			}else{//上滑
				if(direction == 'up'){
					fn();
				}
			}
		}
	})
}