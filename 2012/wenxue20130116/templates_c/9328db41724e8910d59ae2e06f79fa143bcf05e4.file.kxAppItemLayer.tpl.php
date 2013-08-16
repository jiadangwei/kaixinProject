<?php /* Smarty version Smarty-3.1.12, created on 2013-01-08 06:11:11
         compiled from ".\templates\kxAppItemLayer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:309850ea9de32125c8-34271500%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9328db41724e8910d59ae2e06f79fa143bcf05e4' => 
    array (
      0 => '.\\templates\\kxAppItemLayer.tpl',
      1 => 1357625468,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '309850ea9de32125c8-34271500',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_50ea9de3217837_65637151',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50ea9de3217837_65637151')) {function content_50ea9de3217837_65637151($_smarty_tpl) {?>					<!-- popup layer -->
					<div class="kxAppItemLayer">
						<i class="kxAppItemLayerArrow kxAppItemLayerArrow1"></i>
						<i class="kxAppItemLayerArrow kxAppItemLayerArrow2"></i>
						<div class="kxAppItemLayerBd">
							<div class="overfix pb5">
								<a href=""><img src="http://dummyimage.com/60x60/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="kxAppL overFixLfImg mr10"></a>
								<div class="overfix">
									<a href="" class="sl ellipsisBox kxAppItemLayerTitle">开心音乐</a>
									<span class="kxAppc8 kxAppItemLayerCategory">工具</span>
									<p>
										<span class="star_orange"><b style="width:80%"></b></span>
									</p>
									<p class="kxAppItemLayerCon">豆角优惠券,优质,便利生活必备!在这里吃货可以随时随地查找美食信息...</p>
								</div>
							</div>
							<p class="c3 pb5"><span>22</span>个好友在玩</p>
							<div>
								<span class="kxAppFace26Area">
									<a href=""><img src="http://dummyimage.com/26x26/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="kxAppFace26"></a>
									<a href=""><img src="http://dummyimage.com/26x26/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="kxAppFace26"></a>
									<a href=""><img src="http://dummyimage.com/26x26/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="kxAppFace26"></a>
									<a href=""><img src="http://dummyimage.com/26x26/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="kxAppFace26"></a>
									<a href=""><img src="http://dummyimage.com/26x26/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="kxAppFace26"></a>
									<a href=""><img src="http://dummyimage.com/26x26/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" class="kxAppFace26"></a>
								</span>
								<a href="" class="kxAppFace26More"></a>
							</div>
						</div>
						<div class="kxAppItemLayerFt">
							<span class="kxbtn kxbtn_s">
								<button class="normal" type="button">
									<em><span><b><i>立即下载</i></b></span></em>
								</button>
							</span>
						</div>
					</div>
					<script type="text/javascript">
					$j(function(){
						$j('.kxAppItem').delegate(".markimg","mouseenter",function(){
							var thisObj = $j(this);
							var offsetThis = thisObj.find('img').offset();
							$j('.kxAppItemLayer').css({'top':offsetThis.top+67,'left':offsetThis.left}).show();
						})
						$j('.kxAppItemLayer').mouseleave(function(){
							$j(this).hide();
						})
					})
					</script><?php }} ?>