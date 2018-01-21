<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="
    Content-Type" content="text/html; charset=utf-8"/>
    <meta name="description" content="京东金融综合互联网理财服务，基金理财,金融服务，敬请享受! "/>
    <meta name="Keywords" content="京东理财,网上理财,基金理财,金融服务,马上有钱,理财规划,个人理财,家庭理财,第三方理财,投资理财/"/>
    <title>abs mall</title>
    <link rel="icon" href="//www.jd.com/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="//static.360buyimg.com/finance/base/1.2.0/css/base.css"/>
    <link rel="stylesheet" href="//static.360buyimg.com/finance/common/blueCube/theme/tooltips/1.0.0/cube.tooltips.css">
    <link rel="stylesheet" href="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/css/ABSIndex.css">
    <script src="/js/jquery-2.2.3.min.js"></script>
	<script type="text/javascript" src="../js/securityList.js"></script>
    <script type="text/javascript">
        var total = "${pageDTO.total!''}";
        //alert(total);
    </script>
</head>
<body>
<!--head start-->
<#include "plugins/head.ftl">
<!--head end-->
<div class="tiao-baner"></div>

<div class="filter-box">
    <!--已筛选好条件-->
    <#include "plugins/condition.ftl"/>
    <div class="filer-tool">
		<div id="id_ylist" class="tool-every">
            <div class="tool-kuai">
                <span class="h-cril"></span>
                <span class="b-xian-zi">有效报价</span>
            </div>
            <div class="tool-kuai">
				<span class="kon-box"></span>
				<span>有效报价</span>
            </div>
        </div>
		<div class="tool-line"></div>
        <div id="id_tlist"  class="tool-every">
            <div class="tool-kuai">
                <span class="h-cril"></span>
                <span class="b-xian-zi">期限</span>
            </div>
            <div class="tool-kuai">
                <span value="M3" onclick="javascript:toChecked(this,'tlist');" class="kon-box <#if RequestParameters.tlist?contains('M3,')>gou-box</#if>"></span>
                <span>3M</span>
            </div>
            <div class="tool-kuai">
                <span value="M3_M6" onclick="javascript:toChecked(this,'tlist');" class="kon-box <#if RequestParameters.tlist?contains('M3_M6,')>gou-box</#if>"></span>
                <span>3-6M</span>
            </div>
            <div class="tool-kuai">
                <span value="M9_M12" onclick="javascript:toChecked(this,'tlist');" class="kon-box <#if RequestParameters.tlist?contains('M9_M12,')>gou-box</#if>"></span>
                <span>9-12M</span>
            </div>
            <div class="tool-kuai">
                <span value="Y1_Y3" onclick="javascript:toChecked(this,'tlist');" class="kon-box <#if RequestParameters.tlist?contains('Y1_Y3,')>gou-box</#if>"></span>
                <span>1-3Y</span>
            </div>
            <div class="tool-kuai">
                <span value="Y3_Y5" onclick="javascript:toChecked(this,'tlist');" class="kon-box <#if RequestParameters.tlist?contains('Y3_Y5,')>gou-box</#if>"></span>
                <span>3-5Y</span>
            </div>
        </div>
        <div class="tool-line"></div>
        <div id="id_rlist" class="tool-every">
            <div class="tool-kuai">
                <span class="h-cril"></span>
                <span class="b-xian-zi">评级</span>
            </div>
            <div class="tool-kuai">
                <span value="A3" onclick="javascript:toChecked(this,'rlist');" class="kon-box <#if RequestParameters.rlist?contains('A3,')>gou-box</#if>"></span>
                <span>AAA</span>
            </div>
            <div class="tool-kuai">
                <span value="A2_P" onclick="javascript:toChecked(this,'rlist');" class="kon-box <#if RequestParameters.rlist?contains('A2_P,')>gou-box</#if>"></span>
                <span>AA+</span>
            </div>
            <div class="tool-kuai">
                <span value="A2" onclick="javascript:toChecked(this,'rlist');" class="kon-box <#if RequestParameters.rlist?contains('A2,')>gou-box</#if>"></span>
                <span>AA</span>
            </div>
            <div class="tool-kuai">
				<span value="A2_M" onclick="javascript:toChecked(this,'rlist');" class="kon-box <#if RequestParameters.rlist?contains('A2_M,')>gou-box</#if>"></span>
                <span>AA-</span>
            </div>
            <div class="tool-kuai">
                <span value="B3_M" onclick="javascript:toChecked(this,'rlist');" class="kon-box <#if RequestParameters.rlist?contains('B3_M,')>gou-box</#if>"></span>
                <span>BBB-</span>
            </div>
			<div class="tool-kuai">
				<span value ="NR" onclick="javascript:toChecked(this,'rlist');" class="kon-box <#if RequestParameters.rlist?contains('NR,')>gou-box</#if>"></span>
                <span>NR</span>
            </div>
            <div class="tool-kuai">
                <span value ="OTHERS" onclick="javascript:toChecked(this,'rlist');" class="kon-box <#if RequestParameters.rlist?contains('OTHERS,')>gou-box</#if>"></span>
                <span>其他</span>
            </div>
        </div>

    </div>
    <p class="result-tip"><span>筛选结果共</span><span>${total!'0'}</span><span>个</span></p>

    <!--证券信息-->
     <div class="table-area">
		<table id="table1">
			<colgroup>
				<col style="width:130px;"/>
                <col style="width:115px;"/>
                <col style="width:190px;"/>
                <col style="width:120px;"/>
                <col style="width:100px;"/>
                <col style="width:100px;"/>
                <col style="width:120px;"/>
                <col style="width:90px;"/>
                <col style="width:90px;"/>
			</colgroup>
			<thead></thead>
			<tbody></tbody>
		</table>
		<div id="page1" class="page2 clearfix"></div>
	</div>

    <!--证券信息-->
    <div class="shai-list">
        <table>
            <colgroup>
                <col style="width:130px;"/>
                <col style="width:115px;"/>
                <col style="width:190px;"/>
                <col style="width:120px;"/>
                <col style="width:100px;"/>
                <col style="width:100px;"/>
                <col style="width:120px;"/>
                <col style="width:90px;"/>
                <col style="width:90px;"/>
                <col style="width:90px;"/>
            </colgroup>
            <thead>
            <tr>
                <th>剩余期限</th>
                <th>证券代码</th>
                <th>证券简称</th>
                <th>买量</th>
                <th>买入</th>
                <th>卖出</th>
                <th>卖量</th>
                <th>报价方</th>
                <th>时间</th>
                <th>评级</th>
            </tr>
            </thead>
            <tbody>
				<#list marketList as item>
				<tr>
					<td>${item.termBalance}</td>
					<td>${item.securityCode}</td>
					<td>
						<a href="/security/detail/${item.securityId}.html">${item.securityName}</a>
					</td>
					<td>${item.bidQuantity}</td>
					<#if userLevel="1">
                        <td>${item.bidPrice?string("#.##%")}</td>
                    <#else>
                        <td class="lock-stat"><em></em></td>
                    </#if>
                    <#if userLevel="1">
                        <td>${item.askPrice?string("#.##%")}</td>
                    <#else>
                        <td class="lock-stat"><em></em></td>
                    </#if>
                    <td>${item.askQuantity}</td>
					<td>${item.askExternalPartyId?default("匿名")}</td>
					<td>${item.modifiedDate?string("yyyy-MM-dd")}</td>
					<td>${item.rating}</td>
                </tr>
				</#list>
            </tbody>
        </table>
    </div>
    <!--分页器1-->
    <#include "plugins/paging.ftl"/>
</div>
<!--foot start-->
<#include "plugins/foot.ftl">
<!--foot end-->

<script src="//static.360buyimg.com/finance/??common/lib/jquery/1.8.3/jquery.js,base/1.2.0/js/base.js,common/blueCube/widget/base/1.0.0/cube.core.js"></script>
<script src="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/js/inputSearch.js"></script>
<script>
    //tip方法
    seajs.use("widget/tooltips/1.0.0/cube.tooltips", function(){
        $("[cube-tips]").tooltipdataTips();
    });

    //复选框
    function checkBox(){
        $(".kon-box").click(function(){
            $(this).toggleClass("gou-box");
        });
    }
    checkBox();
</script>

</body>
</html>
