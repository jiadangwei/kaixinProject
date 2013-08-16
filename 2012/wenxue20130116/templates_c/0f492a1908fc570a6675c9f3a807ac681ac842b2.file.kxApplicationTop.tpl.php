<?php /* Smarty version Smarty-3.1.12, created on 2013-01-06 07:44:53
         compiled from ".\templates\kxApplicationTop.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2439750e92b2d330005-02721867%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0f492a1908fc570a6675c9f3a807ac681ac842b2' => 
    array (
      0 => '.\\templates\\kxApplicationTop.tpl',
      1 => 1357458291,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2439750e92b2d330005-02721867',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_50e92b2d334351_51545502',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_50e92b2d334351_51545502')) {function content_50e92b2d334351_51545502($_smarty_tpl) {?>	<!-- { start kxApplication top -->
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
	<!-- end } --><?php }} ?>