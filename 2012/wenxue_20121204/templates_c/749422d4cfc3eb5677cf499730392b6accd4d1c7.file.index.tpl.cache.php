<?php /* Smarty version Smarty-3.1.12, created on 2012-12-04 10:04:39
         compiled from ".\templates\index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:234650bdc0fde2fe53-19005859%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '749422d4cfc3eb5677cf499730392b6accd4d1c7' => 
    array (
      0 => '.\\templates\\index.tpl',
      1 => 1354615476,
      2 => 'file',
    ),
    '10e0737838b4a574ef135d0c601e7b602cfaf37a' => 
    array (
      0 => '.\\templates\\header.tpl',
      1 => 1354614450,
      2 => 'file',
    ),
    'e28c2e543d2d3f018a00502f26b030bcf148053e' => 
    array (
      0 => '.\\templates\\block_left1.tpl',
      1 => 1354614648,
      2 => 'file',
    ),
    '1be7ff7fdee636597edd726ee98dfef4bfd55d1f' => 
    array (
      0 => '.\\templates\\footer.tpl',
      1 => 1354614234,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '234650bdc0fde2fe53-19005859',
  'function' => 
  array (
  ),
  'cache_lifetime' => 120,
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_50bdc0fe3fdf77_14977330',
  'variables' => 
  array (
    'type' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50bdc0fe3fdf77_14977330')) {function content_50bdc0fe3fdf77_14977330($_smarty_tpl) {?><?php ob_start();?><?php ob_start();?><?php $_tmp1=ob_get_clean();?><?php echo $_tmp1;?>

    <?php ob_start();?><?php /*  Call merged included template "header.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate('header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, null, array(), 0, '234650bdc0fde2fe53-19005859');
content_50bdcab7da80e1_40043844($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "header.tpl" */?><?php $_tmp2=ob_get_clean();?><?php echo $_tmp2;?>

<?php $_tmp3=ob_get_clean();?><?php echo $_tmp3;?>

<!-- { start kxmaincontent -->
<div class="kx_wd960 clfix">
    <div class="kx_cnmain">
        <div class="kx_content">
        <?php ob_start();?><?php if ($_smarty_tpl->tpl_vars['type']->value==1){?><?php $_tmp4=ob_get_clean();?><?php echo $_tmp4;?>

            <?php ob_start();?><?php ob_start();?><?php $_tmp5=ob_get_clean();?><?php echo $_tmp5;?>

                <?php ob_start();?><?php /*  Call merged included template "block_left1.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate('block_left1.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, null, array(), 0, '234650bdc0fde2fe53-19005859');
content_50bdcab7de2a15_94911083($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "block_left1.tpl" */?><?php $_tmp6=ob_get_clean();?><?php echo $_tmp6;?>

            <?php $_tmp7=ob_get_clean();?><?php echo $_tmp7;?>

        <?php ob_start();?><?php }?><?php $_tmp8=ob_get_clean();?><?php echo $_tmp8;?>

        </div>
    </div>
    <div class="kx_sideright">asfd</div>
</div>
<!-- end } -->
<?php ob_start();?><?php ob_start();?><?php $_tmp9=ob_get_clean();?><?php echo $_tmp9;?>

    <?php ob_start();?><?php /*  Call merged included template "footer.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate('footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, null, array(), 0, '234650bdc0fde2fe53-19005859');
content_50bdcab7e03849_95266999($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); /*  End of included template "footer.tpl" */?><?php $_tmp10=ob_get_clean();?><?php echo $_tmp10;?>

<?php $_tmp11=ob_get_clean();?><?php echo $_tmp11;?>

<?php }} ?><?php /* Smarty version Smarty-3.1.12, created on 2012-12-04 10:04:39
         compiled from ".\templates\header.tpl" */ ?>
<?php if ($_valid && !is_callable('content_50bdcab7da80e1_40043844')) {function content_50bdcab7da80e1_40043844($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title> 主页 </title>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
    <meta name="generator" content="editplus" />
    <meta name="author" content="" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />

<link href="http://s.kaixin001.com.cn/css/kxcommon-0640ec4bf.css" rel="stylesheet" type="text/css" />
<link href="http://s.kaixin001.com.cn/css/kxcomment-00335d350.css" rel="stylesheet" type="text/css" />
<script src="http://s.kaixin001.com.cn/js/forks/home/kxbase-0036323f7.js" type="text/javascript"></script>
<script src="http://s.kaixin001.com.cn/js/forks/home/kxcommon-039841ed5.js" type="text/javascript"></script>
<link href="templates/index.css" rel="stylesheet" type="text/css" />
</head>

<body>
 <script>
     $j(function() {
         $j('#kxsearch').focus(function() {
             $j('#kxsearch_container').show();
         });
         $j('#kxsearch_container').delegate('li a','click',function(evt) {
             evt.preventDefault();
             var thisVal = $j(this).text();
            $j('#kxsearch').val(thisVal);
             $j('#kxsearch_container').hide();
         });
         $j('#kx_tpnav a').click(function(evt) {
             evt.preventDefault();
             $j(this).addClass('ahover').siblings().removeClass('ahover');
         });
        $j('#kx_h2title').delegate('a','click',function(evt) {
            evt.preventDefault();
            $j(this).addClass('ahover').siblings().removeClass('ahover');
        });
     })
 </script>
 <!-- { start kxheader top nav -->      
<div class="kx_hd_wrap">
    <div class="kx_wd960">
        <div class="kx_hdcon clfix">
            <a href="" class="kxl kxlogo"></a>
            <div class="kxl kxsearch">
                <a href="" title="" class="kxr btn_kxsearch"></a>
                <div class="input_kxsearch_wrap">
                    <input type="text" value="搜索" id="kxsearch" class="input_kxsearch" />
                </div>
                <div class="kxsearch_con_wrap" id="kxsearch_container">
                    <ul class="kxsearch_con">
                        <li class="ahover"><a href="" title="">我爱的旅游宝典</a><span>23</span></li>
                        <li><a href="" title="">我的美丽家居</a><span>36</span></li>
                        <li><a href="" title="">我爱的风味美食</a><span>60</span></li>
                        <li><a href="" title="">我家可爱的小猫咪</a><span>103</span></li>
                        <li><a href="" title="">我爱的旅游宝典</a><span>23</span></li>
                    </ul>
                </div>
            </div>
            <div class="kxr kx_hd_tpnav" id="kx_tpnav">
                <a href="" class="ahover">提问</a><span>|</span><a href="">发现</a><span>|</span><a href="">首页</a><span>|</span><a href="">消息</a><span>|</span><a href="">个人</a>
            </div>
        </div>
    </div>
</div>
 <!-- end } -->
<?php }} ?><?php /* Smarty version Smarty-3.1.12, created on 2012-12-04 10:04:39
         compiled from ".\templates\block_left1.tpl" */ ?>
<?php if ($_valid && !is_callable('content_50bdcab7de2a15_94911083')) {function content_50bdcab7de2a15_94911083($_smarty_tpl) {?><div class="kx_h2tit kx_h2tit_f14" id="kx_h2title">
    <a href="" title="" class="ahover">最新</a>
    <a href="" title="">最热</a>
    <a href="" title="">关注</a>
</div>
<ul class="itemborderbt">
    <li>
        <div class="clfix">
            <div class="kxl mr10 kxwd60px">
                <div class="iconareawrap mb10">
                    <a href="" class=""><span class="iconcoment">3</span></a>
                    <a href="" class=""><span class="icongreat1">1</span></a>
                </div>
            </div>
            <div class="kxr ml10 kxwd60px">
                <div class="kxface50icon">
                    <a href="" title=""><img src="http://img.kaixin001.com.cn/i/50_1_0.gif" alt=""/></a>
                    <span>小白</span>
                </div>
            </div>
            <div class="overfix">
                <div class="areacoment">
                    <div class="areatitle">如何使用中间层与缩略图服务？</div>
                    <p>入门级选手，求DEMO<br />如何使用中间层的图片的图片服务<br />中间层</p>
                </div>
            </div>
        </div> 
    </li>
    <li>
        <div class="clfix">
            <div class="kxl mr10 kxwd60px">
                <div class="iconareawrap mb10">
                    <a href="" class=""><span class="iconcoment">3</span></a>
                    <a href="" class=""><span class="icongreat1">1</span></a>
                </div>
            </div>
            <div class="kxr ml10 kxwd60px">
                <div class="kxface50icon">
                    <a href="" title=""><img src="http://img.kaixin001.com.cn/i/50_1_0.gif" alt=""/></a>
                    <span>小白</span>
                </div>
            </div>
            <div class="overfix">
                <div class="areacoment">
                    <div class="areatitle">如何使用中间层与缩略图服务？</div>
                    <p>入门级选手，求DEMO<br />如何使用中间层的图片的图片服务<br />中间层</p>
                </div>
            </div>
        </div> 
    </li>
    <li>
        <div class="clfix">
            <div class="kxl mr10 kxwd60px">
                <div class="iconareawrap mb10">
                    <a href="" class="icongreat3"><span class="iconcoment">3</span></a>
                    <a href="" class=""><span class="icongreat1">1</span></a>
                </div>
            </div>
            <div class="kxr ml10 kxwd60px">
                <div class="kxface50icon">
                    <a href="" title=""><img src="http://img.kaixin001.com.cn/i/50_1_0.gif" alt=""/></a>
                    <span>小白</span>
                </div>
            </div>
            <div class="overfix">
                <div class="areacoment">
                    <div class="areatitle">如何使用中间层与缩略图服务？</div>
                    <p>入门级选手，求DEMO<br />如何使用中间层的图片的图片服务<br />中间层</p>
                </div>
            </div>
        </div> 
    </li>
    <li>
        <div class="clfix">
            <div class="kxl mr10 kxwd60px">
                <div class="iconareawrap mb10">
                    <a href="" class="icongreat3"><span class="iconcoment">3</span></a>
                    <a href="" class=""><span class="icongreat1">1</span></a>
                </div>
            </div>
            <div class="kxr ml10 kxwd60px">
                <div class="kxface50icon">
                    <a href="" title=""><img src="http://img.kaixin001.com.cn/i/50_1_0.gif" alt=""/></a>
                    <span>小白</span>
                </div>
            </div>
            <div class="overfix">
                <div class="areacoment">
                    <div class="areatitle">如何使用中间层与缩略图服务？</div>
                    <p>入门级选手，求DEMO<br />如何使用中间层的图片的图片服务<br />中间层</p>
                </div>
            </div>
        </div> 
    </li>
    <li>
        <div class="clfix">
            <div class="kxl mr10 kxwd60px">
                <div class="iconareawrap mb10">
                    <a href="" class=""><span class="iconcoment">3</span></a>
                    <a href="" class=""><span class="icongreat1">1</span></a>
                </div>
            </div>
            <div class="kxr ml10 kxwd60px">
                <div class="kxface50icon">
                    <a href="" title=""><img src="http://img.kaixin001.com.cn/i/50_1_0.gif" alt=""/></a>
                    <span>小白</span>
                </div>
            </div>
            <div class="overfix">
                <div class="areacoment">
                    <div class="areatitle">如何使用中间层与缩略图服务？</div>
                    <p>入门级选手，求DEMO<br />如何使用中间层的图片的图片服务<br />中间层</p>
                </div>
            </div>
        </div> 
    </li>
    <li>
        <div class="clfix">
            <div class="kxl mr10 kxwd60px">
                <div class="iconareawrap mb10">
                    <a href="" class=""><span class="iconcoment">3</span></a>
                    <a href="" class=""><span class="icongreat1">1</span></a>
                </div>
            </div>
            <div class="kxr ml10 kxwd60px">
                <div class="kxface50icon">
                    <a href="" title=""><img src="http://img.kaixin001.com.cn/i/50_1_0.gif" alt=""/></a>
                    <span>小白</span>
                </div>
            </div>
            <div class="overfix">
                <div class="areacoment">
                    <div class="areatitle">如何使用中间层与缩略图服务？</div>
                    <p>入门级选手，求DEMO<br />如何使用中间层的图片的图片服务<br />中间层</p>
                </div>
            </div>
        </div> 
    </li>
    <li>
        <div class="clfix">
            <div class="kxl mr10 kxwd60px">
                <div class="iconareawrap mb10">
                    <a href="" class=""><span class="iconcoment">3</span></a>
                    <a href="" class=""><span class="icongreat1">1</span></a>
                </div>
            </div>
            <div class="kxr ml10 kxwd60px">
                <div class="kxface50icon">
                    <a href="" title=""><img src="http://img.kaixin001.com.cn/i/50_1_0.gif" alt=""/></a>
                    <span>小白</span>
                </div>
            </div>
            <div class="overfix">
                <div class="areacoment">
                    <div class="areatitle">如何使用中间层与缩略图服务？</div>
                    <p>入门级选手，求DEMO<br />如何使用中间层的图片的图片服务<br />中间层</p>
                </div>
            </div>
        </div> 
    </li>
    <li>
        <div class="clfix">
            <div class="kxl mr10 kxwd60px">
                <div class="iconareawrap mb10">
                    <a href="" class=""><span class="iconcoment">3</span></a>
                    <a href="" class=""><span class="icongreat1">1</span></a>
                </div>
            </div>
            <div class="kxr ml10 kxwd60px">
                <div class="kxface50icon">
                    <a href="" title=""><img src="http://img.kaixin001.com.cn/i/50_1_0.gif" alt=""/></a>
                    <span>小白</span>
                </div>
            </div>
            <div class="overfix">
                <div class="areacoment">
                    <div class="areatitle">如何使用中间层与缩略图服务？</div>
                    <p>入门级选手，求DEMO<br />如何使用中间层的图片的图片服务<br />中间层</p>
                </div>
            </div>
        </div> 
    </li>
</ul>
<?php }} ?><?php /* Smarty version Smarty-3.1.12, created on 2012-12-04 10:04:39
         compiled from ".\templates\footer.tpl" */ ?>
<?php if ($_valid && !is_callable('content_50bdcab7e03849_95266999')) {function content_50bdcab7e03849_95266999($_smarty_tpl) {?></body>
</html>
<?php }} ?>