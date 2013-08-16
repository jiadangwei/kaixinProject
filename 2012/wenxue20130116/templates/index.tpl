{{include file="header.tpl"}}

<link href="http://s.kaixin001.com.cn/css/app-35.css" rel="stylesheet" type="text/css" />
<link href="templates/applicationcss.css" rel="stylesheet" type="text/css" />

<div id="main" style="width:1003px; border:1px solid #dbdee3;border-top:0 none; background:#fff;">
	{{include file="kxApplicationTop.tpl"}}
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
				{{include file="kxAppBanner.tpl"}}
				<!-- {start hot application -->
				<div class="mb10">
					<div class="clfix kxAppH2Wrap">
						<div class="kxAppH2tit">热门应用</div>
						<span class="kxArrowIconLf kxArrowbgCl"><a href="" class="kxArrowIcon kxArrowIconl"></a></span>
						<span class="kxArrowIconRt"><a href="" class="kxArrowIcon kxArrowIconR"></a></span>
					</div>
					{{include file="kxAppItem.tpl"}}
				</div>
				<!-- end } -->
				<!-- {start recommend -->
				<div>
					<div class="clfix kxAppH2Wrap">
						<div class="kxAppH2tit">小编推荐</div>
						<span class="kxArrowIconLf kxArrowbgCl"><a href="" class="kxArrowIcon kxArrowIconl"></a></span>
						<span class="kxArrowIconRt"><a href="" class="kxArrowIcon kxArrowIconR"></a></span>
					</div>
					{{include file="kxAppItem.tpl"}}
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
				{{include file="kxAppItemSn.tpl"}}
			</div>
			<!-- end } -->
			<!-- { start aside2 -->
			<div>
				<div class="kxAppH3Wrap">合作专区-优艺市场</div>
				{{include file="kxAppItemSn.tpl"}}
			</div>
			<!-- end } -->
		</div>
	</div>
</div>

{{include file="kxAppItemLayer.tpl"}}

{{include file="footer.tpl"}}