$(function(){
//年季度月切换
 $('.qhfx ul li').each(function(i) {
	   $(this).click(function(){
		   $(this).addClass('on').siblings().removeClass('on');
			 
	   }); 		                   
  });
  
  //单位数据入库列表
  $('.zsbtn a').click(function(){
	   if($('.hgbox').css("overflow") == "hidden"){
	      $('.hgbox').css('overflow','initial'); 
		  $('.hgbox').css('height','auto');
		  $('.zsbtn a').text('收起');
	   }else{
	      $('.hgbox').css('overflow','hidden');
		  $('.hgbox').css('height','445px');
		  $('.zsbtn a').text('点击展开全部');
	   }
  });
  
  
 //数据入库tabe切换
 
   $('.taberuku ul li').each(function(i) {
	   $(this).click(function(){
		    $('.taberuku ul li').removeClass('on');
			$(this).addClass('on');
			$('.boxrkcount').css('display','none')
			$('.boxrkcount').eq(i).css('display','block')
	   }); 		                   
  });
 
  $('.taberuku  ul li').eq(0).click(function(){
  	 tabeone()
  });
  $('.taberuku  ul li').eq(1).click(function(){
  	 tabetwo()
  })
  $('.taberuku  ul li').eq(2).click(function(){
  	 tabethire()
  });
  


  //数据入库tabe切换	
  
   $('.clickqh ul li').each(function(i) {
	   $(this).click(function(){
		    $('.clickqh ul li').removeClass('on');
			$(this).addClass('on');
			$('.shujtji').css('display','none')
			$('.shujtji').eq(i).css('display','block')
	   }); 		                   
  });
 
   $('.clickqh  ul li').eq(0).click(function(){
  	 sjone()
  });
  $('.clickqh  ul li').eq(1).click(function(){
  	 sjtwo()
  })
  $('.clickqh  ul li').eq(2).click(function(){
  	 sjthire()
  }) 
	
})
