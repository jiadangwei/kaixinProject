<?php /* Smarty version Smarty-3.1.12, created on 2013-01-07 03:19:03
         compiled from ".\templates\kxAppBanner.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2400350ea3ea7ca61e0-19759579%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a296c532a96484d48e92cba5484b16a578f2d586' => 
    array (
      0 => '.\\templates\\kxAppBanner.tpl',
      1 => 1357528726,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2400350ea3ea7ca61e0-19759579',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_50ea3ea7caa613_51940674',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50ea3ea7caa613_51940674')) {function content_50ea3ea7caa613_51940674($_smarty_tpl) {?>				<!-- {start kxAppBanner -->
				<div class="kxAppBanner">
					<div class="kxAppBannerCon" style="margin-left: 0;">
						<a href="https://itunes.apple.com/cn/app/id574349155" target="_blank"><img src="templates/img/b2.jpg" alt=""></a>
						<a href="http://baby.kaixin001.com" target="_blank"><img src="templates/img/b5.png" alt=""></a>
						<a href="http://www.kuaiyong.com/" target="_blank"><img src="templates/img/img001.png" alt=""></a>
						<a href="https://itunes.apple.com/cn/app/id517849296" target="_blank"><img src="templates/img/b4.png" alt=""></a>
						<a href="http://itunes.apple.com/cn/app/id550099242" target="_blank"><img src="templates/img/b3.png" alt=""></a>
					</div>
				</div>
				<div class="app-banner" style="height:35px; position:static; margin:0">
					<ol class="game-dots" id="banner_point">
						<li class="active"><a href="javascript:void(0);"></a></li>
						<li><a href="javascript:void(0);"></a></li>
						<li><a href="javascript:void(0);"></a></li>
						<li><a href="javascript:void(0);"></a></li>
						<li><a href="javascript:void(0);"></a></li>
					</ol>
				</div>
				<script type="text/javascript">
				$j(function() {
				    //	banner toggle
				    function moverBanner(sn) {
				        $j('.kxAppBannerCon').animate({'margin-left': -703 * sn + 'px'}, 'slow')
				        $j('#banner_point>li').eq(sn).addClass('active').siblings().removeClass('active');
				    }
				    var sn = 0;
				    var bannerToggleTimer = function() {
				        if (sn < 5) {
				            moverBanner(sn);
				            sn++;
				        }
				        if (sn == 5) {
				            sn = 0;
				        }
				    };
				    var startTimer = setInterval(bannerToggleTimer, 5000);
				    $j('#banner_point>li').click(function() {
				        var thisId = $j(this).index();
				        moverBanner(thisId);
				        $j(this).addClass('active').removeClass('active');
				        sn = thisId;
				    });
				})
				</script>
				<!-- end } --><?php }} ?>