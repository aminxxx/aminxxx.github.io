	function City(div){
			this.box =document.getElementsByClassName(div)[0];
			this.select = this.box.getElementsByTagName("select");
			this.option = this.box.getElementsByTagName("option");
			this.proviceValue = null;//用来存放省的value值
			this.cityValue = null;//存放市的value值
			this.countyValue = null;//存放县的value值
			this.areaProvice();
		}
		//选择省份
		City.prototype.areaProvice = function(){
			// console.log(provice);
			for(var i=0;i<provice.length;i++){
				var Option = document.createElement("option");
				Option.value = provice[i].name;
				Option.innerHTML = provice[i].name;
				this.select[0].appendChild(Option);
			}
			this.changeProvice();
		}
		//省份value值发生变化
		City.prototype.changeProvice = function(){
			var that = this;
			this.select[0].oninput = function(){
				that.proviceValue = this.value;
				that.select[2].innerHTML ="<option value='县'>请选择县</option> ";
				that.select[1].innerHTML ="<option value='市'>请选择市</option> ";
				that.areaCity();
				
			}
			
		}
		City.prototype.areaCity = function(){
			var data =null;
			for(var i=0;i<provice.length;i++){
				if(provice[i].name == this.proviceValue){//判断是不是选中的省份
					data = provice[i];
				}
			}
			//判断是不是直辖市
			if((this.proviceValue.indexOf("市") != -1)||(this.proviceValue == "香港")||(this.proviceValue == "澳门")){
				this.select[1].style.display = "none";
				
				var data = null;
				for(var i=0;i<provice.length;i++){
					if(provice[i].name == this.proviceValue){//先判断是不是选中的那个市
						// console.log(provice[i])
						data = provice[i].city[0].districtAndCounty;//是,则把市的信息存储起来存
					}
				}
				for(var i=0;i<data.length;i++){
					var Option = document.createElement("option");
					Option.value = data[i];
					Option.innerHTML = data[i];
					this.select[2].appendChild(Option);
				}
			}else{
				var name = null;
				for(var i=0;i<provice.length;i++){
					if(provice[i].name == this.proviceValue){//先判断是不是选中的那个市
						// console.log(provice[i])
						name = provice[i].city;//是,则把市的信息存储起来存
					}
				}
				console.log(name);
				for(var i=0;i<name.length;i++){
					var Option = document.createElement("option");
					Option.value = name[i].name;
					Option.innerHTML = name[i].name;
					this.select[1].appendChild(Option);
				}
				this.select[1].style.display = "inline-block";
			}
			this.changeCity();
		}
		//市的值发生改变
		City.prototype.changeCity = function(){
			var that = this;
			this.select[1].oninput = function(){
				that.cityValue = this.value;
				that.areaCounty();
				console.log(1)
			}
		}
		//选择县
		City.prototype.areaCounty = function(){
			var data = null;
			for(var i=0;i<provice.length;i++){
				if(provice[i].name == this.proviceValue){
					// console.log(provice[i].city[0].districtAndCounty)
					for(var j=0;j<provice[i].city.length;j++){
						if(provice[i].city[j].name == this.cityValue){
							data = provice[i].city[j].districtAndCounty
							// console.log(data);
						}
					}
				}
			}
			this.select[2].innerHTML = '<option value="县">请选择县</option>';
			for(var i=0;i<data.length;i++){
				var Option = document.createElement("option");
				Option.value = data[i];
				Option.innerHTML = data[i];
				this.select[2].appendChild(Option);
			}
		}
		
		var box = new City("area");