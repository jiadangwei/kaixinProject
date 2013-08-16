<?php /* Smarty version Smarty-3.1.12, created on 2013-01-08 06:09:34
         compiled from ".\templates\index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:878050e8f1649a5b02-78901444%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '749422d4cfc3eb5677cf499730392b6accd4d1c7' => 
    array (
      0 => '.\\templates\\index.tpl',
      1 => 1357625371,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '878050e8f1649a5b02-78901444',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_50e8f1649f7f72_26452334',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50e8f1649f7f72_26452334')) {function content_50e8f1649f7f72_26452334($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate ("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


<link href="http://s.kaixin001.com.cn/css/app-35.css" rel="stylesheet" type="text/css" />
<link href="templates/applicationcss.css" rel="stylesheet" type="text/css" />

<div id="main" style="width:1003px; border:1px solid #dbdee3;border-top:0 none; background:#fff;">
	<?php echo $_smarty_tpl->getSubTemplate ("kxApplicationTop.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

	<div class="kxAppP25 kxAppPt20 clfix">
		<div class="kxAppLf">
			<div class="kxAppLfCon">
				<!-- { start kxAppBannertop -->
				<div class="kxAppBannertop">
					<span class="kxAppAndroidBtn mr10"><a href="" class="kxAppBtn ahover"></a></span>
					<span class="kxAppIphone"><a href="" class="kxAppBtn"></a></span>
					<script type="text/javascript">
						$j(function(){
							$j('.kxAppBtn').click(function(){
								$j(this).addClass('ahover').parent().siblings().find('a').removeClass('ahover');
								return false;
							})
						})
					</script>
				</div>
				<!-- end } -->
				<?php echo $_smarty_tpl->getSubTemplate ("kxAppBanner.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

				<!-- {start hot application -->
				<div class="mb10">
					<div class="clfix kxAppH2Wrap">
						<div class="kxAppH2tit">热门应用</div>
						<span class="kxArrowIconLf kxArrowbgCl"><a href="" class="kxArrowIcon kxArrowIconl"></a></span>
						<span class="kxArrowIconRt"><a href="" class="kxArrowIcon kxArrowIconR"></a></span>
					</div>
					<?php echo $_smarty_tpl->getSubTemplate ("kxAppItem.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

				</div>
				<!-- end } -->
				<!-- {start recommend -->
				<div>
					<div class="clfix kxAppH2Wrap">
						<div class="kxAppH2tit">小编推荐</div>
						<span class="kxArrowIconLf kxArrowbgCl"><a href="" class="kxArrowIcon kxArrowIconl"></a></span>
						<span class="kxArrowIconRt"><a href="" class="kxArrowIcon kxArrowIconR"></a></span>
					</div>
					<?php echo $_smarty_tpl->getSubTemplate ("kxAppItem.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

				</div>
				<!-- end } -->
			</div>
		</div>
		<div class="kxAppRt">
			<div class="kxAppMt50">
				<a href="" class="kxAppClientDown"></a>
			</div>
			<!-- { start aside1 -->
			<div>
				<div class="kxAppH3Wrap">合作专区-安卓网</div>
				<?php echo $_smarty_tpl->getSubTemplate ("kxAppItemSn.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

			</div>
			<!-- end } -->
			<!-- { start aside2 -->
			<div>
				<div class="kxAppH3Wrap">合作专区-优艺市场</div>
				<?php echo $_smarty_tpl->getSubTemplate ("kxAppItemSn.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

			</div>
			<!-- end } -->
		</div>
	</div>
</div>

<?php echo $_smarty_tpl->getSubTemplate ("kxAppItemLayer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


<?php echo $_smarty_tpl->getSubTemplate ("footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>