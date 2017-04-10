$(function(){

		Show($(".search button"),$(".fix"))
		Hide($(".head_r "),$(".head"))
		Hide($(".fix span"),$(".fix "))
		function Show(ele,obj)
		{
			ele.click(function() {
				obj.show();
			});
		};
		function Hide(ele,obj)
		{
			ele.click(function() {
				obj.hide();
			});
		};
		
	 //轮播图
	(function()
	{
		var timer=null;
		var arrUrl = [ "img2/banner1.jpg","img2/banner2.jpg", "img2/banner3.jpg", ];
		var num = 0;
		var lOgoa=$(".logo li");
		var lOgos=$(".logo_img img")
		lOgos.attr("src",arrUrl[num]);
		function autoPlay()
		{
			clearInterval(timer)
			timer=setInterval(function()
			{ 
				lOgos.attr("src",arrUrl[num]);
				lOgoa.removeClass("active");
				lOgoa.eq(num).addClass("active");
				num++;
				if (num==arrUrl.length) {
					num=0
				}
			},2000);
		}
		autoPlay();
		lOgos.hover(function (){
			clearInterval( timer );
			
		}, autoPlay);
	
	for( var i=0;i<lOgoa.length;i++)
		{
			lOgoa[i].index=i;
			lOgoa.on("click", function(){
				lOgoa.removeClass("active")
				$(this).addClass("active");
				num=this.index;
				lOgos.attr("src",arrUrl[num]);
			})
		};
	})();
			
//无缝滚动
	function scroll()
	{
		 $(".work ul").animate({"margin-left":"-320px"},function(){
		   $(".work li:eq(0)").appendTo($(".work ul"))
		 })
	 }
	 	var timer=null	
	     clearInterval(timer)
		 timer=setInterval(scroll,2000);
		 $(".work").hover(function (){
		clearInterval( timer );
			
		}, scroll);
	//选项卡
		var oLi=$(".nav_title li")
		for( var i=0;i<oLi.length;i++)
		{
			oLi[i].index=i;
			oLi.on("click", function(){
				oLi.removeClass("active");
				$(this).addClass("active");
				num=this.index;
				if (num==1) 
				{
				 	$(".nav_warp").hide();
					$(".lg").show();
				}
				else{
					$(".lg").hide();
					$(".nav_warp").show()
				}
			})

		};

	//鼠标移动显示信息
	(function(){
		var nAv=$(".nav_t");
		var nAvh=$(".nav_box_hover");
		var num=0;
		for( var i=0;i<nAv.length;i++)
		{
			nAv[i].index=i;
		  
		    	nAv.on("mouseover", function()
			 {
			 	$(this).hide();
			 	num=this.index;
			 	nAvh.eq(num).show();
			 	return false 
			 })
		    
			nAv.on("mouseout", function()
			 {
			 	num=this.index;
			 	nAvh.eq(num).hide();
			 	$(this).show();
			 	
			 });
			
		}
       
	})();
	function scro()
	{
		 $(".ranking_warp").animate({"margin-top":"20px"},function(){
		   $(".ranking_box:eq(0)").appendTo($(".ranking_warp"))
		 })
	 }
	 	var timer=null	
	     clearInterval(timer)
		 timer=setInterval(scro,3000);
		 $(".ranking").hover(function (){
		clearInterval( timer );
			
		}, scro);
	
});	
			
		

 