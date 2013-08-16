	<!-- { start kxApplication top -->
	<div class="kxApplicationTop">
		<div class="kxApplicationNav">
			<a href="" class="borderRadiusLfBt3 ahover">应用首页</a>
			<a href="">我的应用</a>
			<a href="" class="borderRadiusRtBt3">好友的应用</a>
		</div>
	</div>
	<script type="text/javascript">
	$j(function(){
		$j('.kxApplicationNav a').click(function(){
			$j(this).addClass('ahover').siblings().removeClass('ahover');
			return false;
		})
	})
	</script>
	<!-- end } -->