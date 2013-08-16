{{include file="header.tpl"}}

<link href="http://s.kaixin001.com.cn/css/app-35.css" rel="stylesheet" type="text/css" />
<link href="templates/applicationcss.css" rel="stylesheet" type="text/css" />

<div id="main" style="width:1003px; border:1px solid #dbdee3;border-top:0 none; background:#fff;">
	{{include file="kxApplicationTop.tpl"}}
	<div class="kxAppP25 kxAppPt20 clfix">
		<div class="kxAppLf">
			<div class="kxAppLfCon">
				<div class="appInfoHead">
					<!--app info begin-->
					<div class="appHero">
						<img src="img/hero.jpg" width="703"/>						
						<dl class="fl appTit  clearfix">
							<dt class="fl iconInfo"><img src="img/game_icon.jpg" alt="" height="60" width="60" class="imgInfo"  /></dt>
							<dd class="fl txtInfo">
								<h2 class="fl appTitInfo">割绳子割绳子割</h2>
								<p class="fl"><span class="star_orange"><b style="width:70%"></b></span></p>
							</dd>
							<dd class="fr txtInfo"><a href="#" class="cmd">推荐</a></dd>
						</dl>						
					</div>
					<!--app info end-->
					<!--play user list begin-->
					<div class="playUserList clearfix">
						<span class="f12 c6 fl tit">他们正在玩：</span>
						<ul class="userListInfo"><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li></ul>
						<div class="moreUser">
							<a href="javascript:void(0)" class="moreUserLink"><span class="input">更多</span>(258)<i class="sub_arrow icon"> </i></a>
							<ul class="userListInfo2"><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li><li><a href="#"><img src="img/user_avatar.jpg" alt="" /></a></li></ul>
							
						
						</div>
					</div>
					<script type="text/javascript">
					$j(function(){
						
						$j('.moreUser').hover(function(){	
							$j('.moreUser').addClass("select");
							$j('.userListInfo2').css("display","block")
						},function(){	
							$j('.moreUser').removeClass("select");
							$j('.userListInfo2').css("display","none")
						})
						$j('.userListInfo2').mouseover(function(){$j(this).css("display","block")})
						
						$j('.otherAppItem').last().css("background","none")
						
					})
					</script>
					<!--play user list end-->
				</div>

				
			</div>
		</div>
		<div class="kxAppRt">
			<div class="appDownBox">
				<a class="iphone_downLink" title="" href="">APP Store下载</a>
				<ul class="c3 f12 appDownInfo">
					<li>类别：社交</li>
					<li>更新：2012年09月24日</li>
					<li>版本：2.2.0</li>
					<li>大小：14.9 MB</li>
					<li>语言: 中文</li>
					<li>开发商: 北京豆角无线网络科技有限公司</li>
					<li class="pt25">系统要求：与 iPhone、iPod、 touch、iPad 兼容。需要 iOS 4.0 或更高版本</li>
				</ul>
			</div>

			{{include file="otherApp.tpl"}}

		</div>
	</div>
</div>

{{include file="kxAppItemLayer.tpl"}}

{{include file="footer.tpl"}}