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
    <script src="../js/jquery-2.2.3.min.js"></script>
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
                <span value ="B3_M" onclick="javascript:toChecked(this,'rlist');" class="kon-box <#if RequestParameters.rlist?contains('B3_M,')>gou-box</#if>"></span>
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
        <div class="tool-line"></div>
        <div id="id_ylist" class="tool-every">
            <div class="tool-kuai">
                <span class="h-cril"></span>
                <span class="b-xian-zi">发行时间</span>
            </div>
            <div class="tool-kuai">
				<span value="2017" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2017,')>gou-box</#if>"></span>
				<span>2017</span>
            </div>
            <div class="tool-kuai">
				<span value="2016" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2016')>gou-box</#if>"></span>
                <span>2016</span>
            </div>
            <div class="tool-kuai">
				<span value="2015" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2015')>gou-box</#if>"></span>
                <span>2015</span>
            </div>
            <div class="tool-kuai">
				<span value="2014" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2014')>gou-box</#if>"></span>
                <span>2014</span>
            </div>
            <div class="tool-kuai">
                <span value="2013" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2013')>gou-box</#if>"></span>
                <span>2013</span>
            </div>
            <div class="tool-kuai">
                <span value="2012" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2012')>gou-box</#if>"></span>
                <span>2012</span>
            </div>
            <div class="tool-kuai">
                <span value="2011" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2011')>gou-box</#if>"></span>
                <span>2011</span>
            </div>
            <div class="tool-kuai">
                <span value="2010" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2010')>gou-box</#if>"></span>
                <span>2010</span>
            </div>
            <div class="tool-kuai">
                <span value="2009" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2009')>gou-box</#if>"></span>
                <span>2009</span>
            </div>
            <div class="tool-kuai">
                <span value="2008" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2008')>gou-box</#if>"></span>
                <span>2008</span>
            </div>
            <div class="tool-kuai">
                <span value="2007" onclick="javascript:toChecked(this,'ylist');" class="kon-box <#if RequestParameters.ylist?contains('2007')>gou-box</#if>"></span>
                <span>2007</span>
            </div>
        </div>
        <div class="tool-line"></div>
        <div id="id_olist" class="tool-every">
            <div class="tool-kuai">
                <span class="h-cril"></span>
                <span class="b-xian-zi">监管机构</span>
            </div>
            <div class="tool-kuai">
                <span value="CSRC" onclick="javascript:toChecked(this,'olist');" class="kon-box <#if RequestParameters.olist?contains('CSRC')>gou-box</#if>"></span>
                <span>证监会</span>
            </div>
            <div class="tool-kuai">
                <span value="CBRC" onclick="javascript:toChecked(this,'olist');" class="kon-box <#if RequestParameters.olist?contains('CBRC')>gou-box</#if>"></span>
                <span>银监会</span>
            </div>
            <div class="tool-kuai">
                <span value="CIRC" onclick="javascript:toChecked(this,'olist');" class="kon-box <#if RequestParameters.olist?contains('CIRC')>gou-box</#if>"></span>
                <span>保监会</span>
            </div>
            <div class="tool-kuai">
                <span value="NAFMII" onclick="javascript:toChecked(this,'olist');" class="kon-box <#if RequestParameters.olist?contains('NAFMII')>gou-box</#if>"></span>
                <span>交易协商会</span>
            </div>
            <div class="tool-kuai">
                <span value="OTHERS" onclick="javascript:toChecked(this,'olist');" class="kon-box <#if RequestParameters.olist?contains('OTHERS')>gou-box</#if>"></span>
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
                <col style="width:11%;"/>
                <col style="width:11%;"/>
                <col style="width:8%;"/>
                <col style="width:10%;"/>
                <col style="width:10%;"/>
                <col style="width:10%;"/>
                <col style="width:11%;"/>
                <col style="width:8%;"/>
                <col style="width:12%;"/>
            </colgroup>
            <thead>
            <tr>
                <th>证券代码</th>
                <th>证券简称</th>
                <th>评级</th>
                <th>票面利率</th>
                <th>发行金额（万元）</th>
                <th>到期日</th>
                <th>发行日</th>
                <th>监管机构</th>
                <th>原始权益人</th>
            </tr>
            </thead>
            <tbody>
				<#list list as item>
				<tr>
					<td>${item.securityCode}</td>
					<td>
						<a href="/security/detail/${item.securityId}.html">${item.securityName}</a>
					</td>
					<td>${item.rating!''}</td>
					<td>${item.couponStr!''}</td>
					<td>${(item.issueAmount/10000)?string("###,###,###,###.##")}</td>
					<td>${item.maturityDate?string("yyyy-MM-dd")}</td>
					<td>${item.issueDate?string("yyyy-MM-dd")}</td>
					<td>${item.regulator.desc!''}</td>
					<td>${item.sponsor!''}</td>
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
