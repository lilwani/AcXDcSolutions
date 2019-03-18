var apps=angular.module("appliances",[])
		.service("prodList", function() {
			var items=[{product:"Television Set/Monitor",company:["Samsung","Onida","Videocon","Philips","Sansui","Acer","Intel","LG","Hitachi","Others"]},
				{product:"Air Conditioner",company:["Haier","Daikin","Voltas","LG","Mitsubshi Electric","Blue Star","Hitachi","Intel","Samsung","Mitashi","Whirlpool","Sharp","Videocon","Godrej","Panasonic","Others"]},
				{product:"Refrigerator",company:["Whirlpool","LG","Samsung","Electolux","Godrej","GE Refrigerator","Hitachi","Haier","Kelvinator","Siemens","Sharp","Videocon","Toshiba","Bosch","Voltas","Others"]},
				{product:"Washing Machine",company:["LG","Samsung","IFB","Whirlpool","Bosch","Godrej","Haier","Onida","Intex","Lloyd","Siemens","Videocon","Mitashi","Panasonic","Sharp","BPL","Sansui","Hitachi","Others"]},
				{product:"Microwave",company:["Samsung","LG","Videocon","Philips","Hitachi","Panasonic","Sharp","IFB","Kenstar","Whirlpool","Onida","Electrolux","Others"]},
				{product:"Other Appliances",company:{}}];
			
			var acTypes=["Portable AC","Window AC","Split AC","Inverter AC","Ducted AC","Reverse Cycle AC"];
			
			this.retTypes=function(){
				return acTypes;
			}
			
			this.pList=function(){
				return items;
			}
			
			this.comp=function(prodValue){
				var compArray=[];
				switch (prodValue) {
				case "Television Set/Monitor":	compArray=["Samsung","Onida","Videocon","Philips","Sansui","Acer","Intel","LG","Hitachi","Others"];
												break;
												
				case "Air Conditioner":			compArray=["Haier","Daikin","Voltas","LG","Mitsubshi Electric","Blue Star","Hitachi","Intel","Samsung","Mitashi","Whirlpool","Sharp","Videocon","Godrej","Panasonic","Others"];
												break;
				
				case "Refrigerator":			compArray=["Whirlpool","LG","Samsung","Electolux","Godrej","GE Refrigerator","Hitachi","Haier","Kelvinator","Siemens","Videocon","Toshiba","Panasonic","Bosch","Voltas","Others"];
												break;
												
				case "Washing Machine":			compArray=["LG","Samsung","IFB","Whirlpool","Bosch","Godrej","Haier","Onida","Intex","Lloyd","Siemens","Videocon","Mitashi","Panasonic","Sharp","BPL","Sansui","Hitachi","Others"];
												break;
												
				case "Microwave":				compArray=["Samsung","LG","Videocon","Philips","Hitachi","Panasonic","Sharp","IFB","Kenstar","Whirlpool","Onida","Electrolux","Others"];								
												break;
									
				case "Other Appliances":		true
												break;
									
			}
				return compArray;
			}
			
		})
		.controller("myAppls", function($scope,prodList,$filter){
							$scope.appls=prodList.pList();
							$scope.com=[];
							$scope.pDesc="";
							$scope.vCharge=300;
							$scope.pSelected="";
							$scope.otherApp="";
							
							$scope.compList=function(){
								console.log($scope.pSelected);
								console.log(prodList.comp($scope.pSelected));
								$scope.selCompValue=prodList.comp($scope.pSelected);
							
							};
							$scope.acTypes=prodList.retTypes();
							$scope.acType="Portable AC";
							$scope.typeList=function(){
								console.log($scope.acType);
								console.log("inside change");							
								};
					
							$scope.subm=function(){
								console.log($scope.cSel);
							}
		});
				
	