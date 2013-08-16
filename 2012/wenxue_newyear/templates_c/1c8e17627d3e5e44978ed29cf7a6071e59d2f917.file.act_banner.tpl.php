<?php /* Smarty version Smarty-3.1.12, created on 2013-01-25 08:21:49
         compiled from ".\templates\act_banner.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2897651023fcaee3293-22770967%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '1c8e17627d3e5e44978ed29cf7a6071e59d2f917' => 
    array (
      0 => '.\\templates\\act_banner.tpl',
      1 => 1359102107,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2897651023fcaee3293-22770967',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_51023fcaee76a4_68361040',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_51023fcaee76a4_68361040')) {function content_51023fcaee76a4_68361040($_smarty_tpl) {?>
        <div class="actBannerArea">
            <div class="actShareBox">
                <span>分享到：</span>
                <a href="" class="shareIcon1"></a>
                <a href="" class="shareIcon2"></a>
                <a href="" class="shareIcon3"></a>
                <a href="" class="shareIcon4"></a>
            </div>
            <a href="" class="btnViewRules"></a>
            <div class="swfArea">
                <object id="FlashID" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="200" height="140">
                  <param name="movie" value="templates/img/indexswf123.swf" />
                  <param name="quality" value="high" />
                  <param name="wmode" value="opaque" />
                  <param name="swfversion" value="6.0.65.0" />
                  <!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 -->
                  <param name="expressinstall" value="Scripts/expressInstall.swf" />
                  <!-- 下一个对象标签用于非 IE 浏览器。所以使用 IECC 将其从 IE 隐藏。 -->
                  <!--[if !IE]>-->
                  <object type="application/x-shockwave-flash" data="templates/img/indexswf123.swf" width="200" height="140">
                    <!--<![endif]-->
                    <param name="quality" value="high" />
                    <param name="wmode" value="opaque" />
                    <param name="swfversion" value="6.0.65.0" />
                    <param name="expressinstall" value="Scripts/expressInstall.swf" />
                    <!-- 浏览器将以下替代内容显示给使用 Flash Player 6.0 和更低版本的用户。 -->
                    <div>
                      <h4>此页面上的内容需要较新版本的 Adobe Flash Player。</h4>
                      <p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获取 Adobe Flash Player" width="112" height="33" /></a></p>
                    </div>
                    <!--[if !IE]>-->
                  </object>
                  <!--<![endif]-->
                </object>
                <script type="text/javascript">
                swfobject.registerObject("FlashID");
                </script>
            </div>
        </div>
    <?php }} ?>