<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="description" content="京东金融综合互联网理财服务，基金理财,金融服务，敬请享受! "/>
    <meta name="Keywords" content="京东理财,网上理财,基金理财,金融服务,马上有钱,理财规划,个人理财,家庭理财,第三方理财,投资理财/"/>
    <title>abs mall</title>
    <link rel="icon" href="//www.jd.com/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="//static.360buyimg.com/finance/base/1.2.0/css/base.css"/>
    <link rel="stylesheet" href="//static.360buyimg.com/finance/common/blueCube/theme/tooltips/1.0.0/cube.tooltips.css">
    <link rel="stylesheet" href="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/css/ABSIndex.css">
    <script src="/js/jquery-2.2.3.min.js"></script>
    <script>
	    $(function(){
	    	$(".kon-box").click(function(){
	    		//var pageNo = ${RequestParameters.pageNo};
	    		var url = location.href;
	    		url = url.substring(0,url.indexOf("?"));
	    		url = url + getUrl();
	    		//alert(url);
	    		location.href = url;
	    	});
	    	var issueTypes = getSelectedName("issueType");
	    	var years = getSelectedName("year");
	    	var regulators = getSelectedName("regulator");
	    	var a = issueTypes.concat(years);
	    	var b = a.concat(regulators);
	    	var html = "";
	    	for(var i=0;i<b.length;i++){
	    		html += '<div class="chosed-it"><span class="closeSpan" chcode="' + b[i].value + '">' + b[i].name + '</span><em></em></div>';
	    	}
	    	$("#selectcondition").html(html);
	    	$("em").click(function(){
	    		var value = $(this).prev().attr("chcode");
	    		$("span[value='" + value + "']").click();
	    	});
	    });
	    function getUrl(){
	    	var url = "?issueTypeStrs=";
    		var issueType = getSelectedVal("issueType");
    		url += issueType;
    		var year = getSelectedVal("year");
    		url += "&year=" + year;
    		var regulator = getSelectedVal("regulator");
    		url += "&regulator=" + regulator;
    		return url;
	    }
	    function getSelectedVal(clazzName){
	    	var objs = $("." + clazzName + ".gou-box");
    		var params = "";
    		if(objs != null && objs != undefined){
    			for(var i=0;i<objs.length;i++){
					params += $(objs[i]).attr("value") + ",";	    			
    			}
    		}
    		return params;
	    }
	    function getSelectedName(clazzName){
	    	var objs = $("." + clazzName + ".gou-box");
    		var names = [];
    		if(objs != null && objs != undefined){
    			for(var i=0;i<objs.length;i++){
    				var obj = {};
    				obj.name = $(objs[i]).next().html();
    				obj.value = $(objs[i]).attr("value");
					names.push(obj);	    			
    			}
    		}
    		return names;
	    }
    </script>
</head>
<body>

<#include "plugins/head.ftl">
<div class="tiao-baner"></div>

<div class="filter-box">
    <!--已筛选好条件-->
    <div class="on-condition clearfix" style="display:block">
        <span class="s-biao">筛选条件</span>
        <div class="qian-box" id="selectcondition">
        </div>
        <a href="javascript:refresh();" class="clear-btn">清空筛选</a>
    </div>
    <div class="filer-tool">
        <div class="tool-every">
            <div class="tool-kuai">
                <span class="h-cril"></span>
                <span>发行方式</span>
            </div>
            <div class="tool-kuai">
                <span value="PUBLIC" class="kon-box issueType <#if RequestParameters.issueTypeStrs?contains('PUBLIC')>gou-box</#if>"></span>
                <span>公募</span>
            </div>
            <div class="tool-kuai">
                <span value="PRIVATE" class="kon-box issueType <#if RequestParameters.issueTypeStrs?contains('PRIVATE')>gou-box</#if>"></span>
                <span>私募</span>
            </div>
        </div>
        <div class="tool-line"></div>
        <div class="tool-every">
            <div class="tool-kuai">
                <span class="h-cril"></span>
                <span>发行时间</span>
            </div>
            <div class="tool-kuai">
                <span value="2017" class="kon-box year <#if RequestParameters.year?contains('2017')>gou-box</#if>"></span>
                <span>2017</span>
            </div>
            <div class="tool-kuai">
                <span value="2016" class="kon-box year <#if RequestParameters.year?contains('2016')>gou-box</#if>"></span>
                <span>2016</span>
            </div>
            <div class="tool-kuai">
                <span value="2015" class="kon-box year <#if RequestParameters.year?contains('2015')>gou-box</#if>"></span>
                <span>2015</span>
            </div>
            <div class="tool-kuai">
                <span value="2014" class="kon-box year <#if RequestParameters.year?contains('2014')>gou-box</#if>"></span>
                <span>2014</span>
            </div>
            <div class="tool-kuai">
                <span value="2013" class="kon-box year <#if RequestParameters.year?contains('2013')>gou-box</#if>"></span>
                <span>2013</span>
            </div>
            <div class="tool-kuai">
                <span value="2012" class="kon-box year <#if RequestParameters.year?contains('2012')>gou-box</#if>"></span>
                <span>2012</span>
            </div>
            <div class="tool-kuai">
                <span value="2011" class="kon-box year <#if RequestParameters.year?contains('2011')>gou-box</#if>"></span>
                <span>2011</span>
            </div>
            <div class="tool-kuai">
                <span value="2010" class="kon-box year <#if RequestParameters.year?contains('2010')>gou-box</#if>"></span>
                <span>2010</span>
            </div>
            <div class="tool-kuai">
                <span value="2009" class="kon-box year <#if RequestParameters.year?contains('2009')>gou-box</#if>"></span>
                <span>2009</span>
            </div>
            <div class="tool-kuai">
                <span value="2008" class="kon-box year <#if RequestParameters.year?contains('2008')>gou-box</#if>"></span>
                <span>2008</span>
            </div>
            <div class="tool-kuai">
                <span value="2007" class="kon-box year <#if RequestParameters.year?contains('2007')>gou-box</#if>"></span>
                <span>2007</span>
            </div>
        </div>
        <div class="tool-line"></div>
        <div class="tool-every">
            <div class="tool-kuai">
                <span class="h-cril"></span>
                <span>监管机构</span>
            </div>
            <div class="tool-kuai">
                <span value="CSRC" class="kon-box regulator <#if RequestParameters.regulator?contains('CSRC')>gou-box</#if>"></span>
                <span>证监会</span>
            </div>
            <div class="tool-kuai">
                <span value="CBRC" class="kon-box regulator <#if RequestParameters.regulator?contains('CBRC')>gou-box</#if>"></span>
                <span>银监会</span>
            </div>
            <div class="tool-kuai">
                <span value="CIRC" class="kon-box regulator <#if RequestParameters.regulator?contains('CIRC')>gou-box</#if>"></span>
                <span>保监会</span>
            </div>
            <div class="tool-kuai">
                <span value="NAFMII" class="kon-box regulator <#if RequestParameters.regulator?contains('NAFMII')>gou-box</#if>"></span>
                <span>交易协商会</span>
            </div>
            <div class="tool-kuai">
                <span value="OTHERS" class="kon-box regulator <#if RequestParameters.regulator?contains('OTHERS')>gou-box</#if>"></span>
                <span>其他</span>
            </div>
        </div>
    </div>
    <p class="result-tip"><span>筛选结果共</span><span>${total}</span><span>个</span></p>
    <!--二级市场-->
    <div class="shai-list">
		        <table>
            <colgroup>
                <col style="width:235px;"/>
                <col style="width:100px;"/>
                <col style="width:125px;"/>
                <col style="width:95px;"/>
                <col style="width:120px;"/>
                <col style="width:115px;"/>
                <col style="width:120px;"/>
                <col style="width:120px;"/>
                <col style="width:160px;"/>
            </colgroup>
            <thead>
            <tr>
                <th>产品简称</th>
                <th>发行金额(万元)</th>
                <th>期限(月)</th>
                <th>品种</th>
                <th>发行方式</th>
                <th>发行日期</th>
                <th>监管机构</th>
                <th>项目状态</th>
                <th>承销商</th>
            </tr>
            </thead>
            <tbody>
            	<#if rows??>
            		<#list rows as row>
            			 <tr>
                   		 	<td><a href='javascript:location.href="/pd/productDetail.html?productId=${row.productId}"'>${row.securityName}</a></td>
		                    <td>${(row.contractValue/10000)?string('###,###,###.##')}</td>
		                    <td>${row.termAll}</td>
		                    <td><#if row.securityType=="ABS_PRODUCT">资产支持证券</#if></td>
		                    <td>${row.issueType.desc}</td>
		                    <td>${row.listDate?string("yyyy-MM-dd")}</td>
		                    <td>${row.regulatorCode.desc}</td>
		                    <td>${row.assetPoolStatus.desc}</td>
		                    <td>${row.principleUnderwriter}</td>
		                </tr>
            		</#list>
            	</#if>
            </tbody>
        </table>
    </div>
    <!--分页器-->
    <#include "plugins/paging.ftl"/>
    <!--历史发行-->
    <div class="shai-list">
    </div>
</div>

<!--foot-->
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
	function refresh (){
		var url = window.location.href;
		var pattern2 = new RegExp(".*.html");
		var search=url.match(pattern2);
		window.location.href = search;
	}
</script>
</body>
</html>
