<?php /* Smarty version Smarty-3.1.12, created on 2013-01-08 07:59:34
         compiled from ".\templates\index1.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2421350ebcde2e2f793-76639971%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7ea66373018a44375fc848cce7ace7904f7584c4' => 
    array (
      0 => '.\\templates\\index1.tpl',
      1 => 1357631972,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2421350ebcde2e2f793-76639971',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_50ebcde31ae524_20158088',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50ebcde31ae524_20158088')) {function content_50ebcde31ae524_20158088($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate ("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


<link href="http://s.kaixin001.com.cn/css/app-35.css" rel="stylesheet" type="text/css" />
<link href="templates/applicationcss.css" rel="stylesheet" type="text/css" />

<div id="main" style="width:1003px; border:1px solid #dbdee3;border-top:0 none; background:#fff;">
	<?php echo $_smarty_tpl->getSubTemplate ("kxApplicationTop.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

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

			<?php echo $_smarty_tpl->getSubTemplate ("otherApp.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


		</div>
	</div>
</div>

<?php echo $_smarty_tpl->getSubTemplate ("kxAppItemLayer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


<?php echo $_smarty_tpl->getSubTemplate ("footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>