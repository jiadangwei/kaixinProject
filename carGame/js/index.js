$(function(){



	// 切换路况信息
	$('.navRoadInfo li a').bind('click',function(){
		var thisIndex = $(this).parent().index();
		$(this).parent().addClass('ahover').siblings().removeClass();
		$('.RoadInfoCon .roadInfoItem').eq(thisIndex).show().siblings().hide();
		return false;
	});

	// 好友列表切换开关
	$('.toggleButtonWrap a').click(function(){
		var thisIndex = $(this).index();
		if (thisIndex==0) {
			$(this).parent().addClass('toggleStartButton');
		}else{
			$(this).parent().removeClass('toggleStartButton');
		};
		return false;
	});

	// 道具与场景卡导航切换
	$('.propsNav a').bind('click',function(){
		var thisIndex = $(this).parent().index();
		$(this).parent().addClass('ahover').siblings().removeClass('ahover');
		$('.propsNavConWrap .propsNavCon').eq(thisIndex).show().siblings().hide();
		return false;
	});

	// 现金排行与车价排行切换
	$('.propsNav a').bind('click',function(){
		var thisIndex = $(this).parent().index();
		$(this).parent().addClass('ahover').siblings().removeClass('ahover');
		$('.cashAndPriceRank .rankCon').eq(thisIndex).show().siblings().hide();
	})

})