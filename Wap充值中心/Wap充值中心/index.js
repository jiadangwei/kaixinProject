$(function(){
	if($('.topUpa').length !== 0) {
		$('.topUpMethod').show();
	};
	$('.topUpMethodLink').click(function(e){
		e.preventDefault();
		$(this).toggleClass('topUpa');
		var flag = $(this).hasClass('topUpa');
		if(flag){
			$('.topUpMethod').show();
		}else{
			$('.topUpMethod').hide();
		}
	});
	$('.topUpMoney a').click(function(e){
		e.preventDefault();
		$(this).addClass('topUpSelect').siblings().removeClass('topUpSelect');
	});
	$('.selecticon').click(function(e){
		e.preventDefault();
		$('.topUpList').show();
		$('.topUpList a').click(function(e){
			e.preventDefault();
			var innerCon = $(this).text();
			$('#topUpMoneyVal').val(innerCon);
			$(this).parents('.topUpList').hide();
		})
	})
})