<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="description" content="京东金融综合互联网理财服务，基金理财,金融服务，敬请享受! "/>
    <meta name="Keywords" content="京东理财,网上理财,基金理财,金融服务,马上有钱,理财规划,个人理财,家庭理财,第三方理财,投资理财/"/>
    <title>abs mall</title>
    <link rel="icon" href="//www.jd.com/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="//static.360buyimg.com/finance/base/1.2.0/css/base.css"/>
    <link rel="stylesheet" href="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/css/ABSIndex.css">
    <script src="/js/jquery-2.2.3.min.js"></script>
    <script>
	    $(function(){
	    	$(".out-back").click(function(){
	    		location.href = "/logout.do";
	    	});
	    	$("#watchMore").click(function(){
	    		location.href = "/pd/product.html";
	    	});

            /*$("#id_sipt").keyup(function(){
                $("#id_product").html('');
                $("#id_security").html('');
                var iptStr = $("#id_sipt").val();
                $.ajax({
                    type : 'post',
                    url : '/security/search.html?keyWord=' + iptStr,
                    data : '',
                    dataType : 'json',
                    async : false,
                    success : function(data) {
                        $("#id_product").html('');
                        $("#id_security").html('');
                        if(undefined == data || false == data.success) {
                            alert("error");
                            return;
                        }else if(data.length > 0) {
                            for(var i = 0; i < data.length; i++){
                                var item = data[i];
                                if(item.dataType === 'PRODUCT'){

                                    $("#id_product").append("<li class='j-right-one'><a href='/pd/productDetail.html?productId=" + item.id + "'>"+item.securityName+"</a><p>"+item.securityFullName+"</p></li>")
                                }else if(item.dataType === 'SECURITY'){
                                    $("#id_security").append("<div class='j-right-one'><a href='/security/detail/" + item.id + ".html'><span>"+item.securityName+"</span><span>"+item.securityCode+"</span></a><p></p></div>")
                                }
                            }
                        }
                    }
                });
            });*/
	    });
	    
	</script>
	<noscript><div style="background-color:red;font-size:30px;"><span >警告：浏览器不支持或您已经禁用了javascript脚本，请先启用javascript或者换一浏览器重试，否则将无法正常访问本网站！</span></div></noscript>
</head>
<body>

<div class="head-bg">
    <#include "plugins/head.ftl">
    <div class="head-zone" style="min-height: 230px;">
        <#--<div class="head-tou clearfix">
            <a href="/front.html" class="logo-zone">
                <img src="//img30.360buyimg.com/jr_image/jfs/t13093/248/1951892528/4343/12a5d0a7/5a2f4c47Nb42684f7.png"
                     alt=""/>
            </a>
            <ul class="nav-ul">
                <li class="botm-line index-b-line">
                    <a href="/front.html" class="">首页</a>
                </li>
                <li>
                    <a href="javascript:location.href='/pd/productDetail.html?productId=${product.productId}'">当前发行</a>
                </li>
                <li>
                    <a href="/pd/product.html">历史发行</a>
                </li>
                <li>
                    <a href="/security/market.html">二级市场</a>
                </li>
                <li>
                    <a href="/security/list.html">证券信息</a>
                </li>
            </ul>
            <a href="javascript:" class="out-back">退出</a>
            <div class="ban-zone">
                <img src="/img/default_buddha.png" alt=""/>
                <span class="mo-ban"></span>
            </div>
            <div class="id-name">
                <span>hello,</span>
                <span>${Request.username}  </span>
            </div>
            <div class="search-box">
                <div class="search-wrap">
                    <input id="id_sipt" type="text" placeholder="搜索内容"/>
                    <a href="javascript:" class="fang-icon"></a>
                </div>
                <div class="tui-jian">
                    <div class="tui-j-box clearfix">
                        <div class="tui-j-left">
                            产品
                        </div>
                        <ul id="id_product" class="tui-j-right">
                            &lt;#&ndash;<li class="j-right-one">
                                <a href="javascript:">京东白条17号2017-17</a>
                                <p>
                                    融元-京东金融-华泰资管(17号)京东白条应收张狂债
                                    权资产支持专项计划
                                </p>
                            </li>
                            <li class="j-right-one">
                                <a href="javascript:">京东白条17号2017-17</a>
                                <p>
                                    融元-京东金融-华泰资管(17号)京东白条应收张狂债
                                    权资产支持专项计划
                                </p>
                            </li>&ndash;&gt;
                        </ul>

                        &lt;#&ndash;<div id="id_product" class="tui-j-right">
                        </div>&ndash;&gt;
                    </div>
                    <div class="jie-xian"></div>
                    <div class="tui-j-box clearfix">
                        <div class="tui-j-left">
                            证券
                        </div>
                        <div id="id_security" class="tui-j-right">
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        <div class="shen-nei clearfix">
            <div class="shen-left">
                <p class="hot-prod">
                    <span>${product.securityName}</span><span></span>
                    <span>HOT<em></em></span>
                </p>
                <p class="prod-zi"> 期限${product.termLength}个月 | 发行金额${product.contractValue?number/100000000}亿</p>
                <a href="javascript:location.href='/pd/productDetail.html?productId=${product.productId}'" class="show-more-btn">
                    查看详情
                    <em></em>
                </a>
            </div>
            <div class="shen-right">
                <p class="yu-ji-lv">年化收益率</p>
                <#if secuList??>
                	<#assign count = 0>
                	<#list secuList as temp>
                		<#assign count = count+1>
                		 <p class="biao-per">
		                    <span>${temp.rating}</span>
		                    <span>${temp.coupon?string("0.00#%")}</span>
		                </p>
		                <#if count == 2>
                			<#break>
                		</#if>
                	</#list>
                </#if>
            </div>
        </div>
        <div class="san-bord">
            <ul class="clearfix">
                <li>
                    <img src="//img30.360buyimg.com/jr_image/jfs/t14911/271/509622446/10372/24a7745f/5a2faaf3Ncbba005f.png"
                         alt=""/>
                    <div class="img-zi">
                        <p>
                            <span class="te-zi">${year}</span>
                            <span>年</span>
                            <span class="te-zi">${mounth}</span>
                            <span>个月</span>
                        </p>
                        <p>
                            项目总运行时间
                        </p>
                    </div>
                </li>
                <li class="mar-lr">
                    <img src="//img30.360buyimg.com/jr_image/jfs/t14206/221/515327539/9320/ee01b2f4/5a2faaf3N3e5e2b0d.png"
                         alt=""/>
                    <div class="img-zi">
                        <p>
                            <span class="te-zi">${issueAmounts?number/100000000}</span>
                            <span>亿</span>
                        </p>
                        <p>
                            发行总量
                        </p>
                    </div>
                </li>
                <li>
                    <img src="//img30.360buyimg.com/jr_image/jfs/t14653/132/501207338/10137/c6603c8c/5a2faaf3Nceda7341.png"
                         alt=""/>
                    <div class="img-zi">
                        <p>
                            <span class="te-zi">${couponAvg}</span>
                        </p>
                        <p>
                            AAA评级 平均票息
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="history-bord">
    <div class="his-zi"></div>
    <div class="li-di-bg">
        <p>历史发行</p>
        <a id="watchMore" href="javascript:">查看更多<em></em></a>
    </div>
    <div class="his-chan">
        <p class="his-tit">
            <span>${historyProduct.securityName}</span>
            <span class="red-kuang">最近</span>
        </p>
        <p class="his-more-zi">
            <span>起息日：</span>
            <span class="m-r-20">${historyProduct.carryDate?string("yyyy-MM-dd")}</span>
            <span>发行金额：</span>
            <span class="m-r-20">${historyProduct.contractValue/100000000}亿</span>
            <span>期限：</span>
            <span>${historyProduct.termLength}个月</span>
        </p>
    </div>
    <div class="zhu-ban">
        <table>
            <colgroup>
                <col style="width:240px;"/>
                <col style="width:130px;"/>
                <col style="width:135px;"/>
                <col style="width:135px;"/>
                <col style="width:180px;"/>
                <col style="width:80px;"/>
            </colgroup>
            <thead>
                <tr>
                    <th>证券简称</th>
                    <th>证券代码</th>
                    <th>原始评级</th>
                    <th>票面利率</th>
                    <th>发行金额(万元)</th>
                    <th>分层比例</th>
                </tr>
            </thead>
            <tbody id="pdSecu">
            	<#if historyList??>
            		<#list historyList as secu>
            	 		<tr>
		                	<td>${secu.securityName}</td>
		                   	<td>${secu.securityCode}</td>
		                   	<td>${secu.rating}</td>
		                   	<td>${secu.coupon?string("0.00#%")}</td>
		                   	<td class="red-td">${(secu.issueAmount/10000)?string('###,###,###.##')}</td>
		                   	<td>${secu.tranchePct?string("0.00#%")}</td>
		                </tr>
					</#list>
            	</#if>
            </tbody>
        </table>
        <div class="qie-arrow" style="display:none;">
            <a href="javascript:" class=""><</a>
            <a href="javascript:" class="">></a>
        </div>
    </div>
</div>

<div class="secon-market">
    <div class="secon-head">
        <div class="secon-di-bg"></div>
        <div class="secon-tit">
            <img src="//img30.360buyimg.com/jr_image/jfs/t15325/334/519456847/483/85bdf381/5a309765N45b80f19.png" alt=""/>
            <span>二级市场</span>
        </div>
        <a href="/security/market.html" class="check-more-btn">
            查看更多
            <em>></em>
        </a>
    </div>
    <div class="secon-body">
        <table>
            <colgroup>
                <col style="width:120px;"/>
                <col style="width:120px;"/>
                <col style="width:220px;"/>
                <col style="width:140px;"/>
                <col style="width:110px;"/>
                <col style="width:110px;"/>
                <col style="width:140px;"/>
                <col style="width:125px;"/>
            <#--<col style="width:85px;"/>-->
        </colgroup>
        <thead>
            <tr>
                <th>剩余期限</th>
                <th>证券代码</th>
                <th>证券简称</th>
                <th>买量</th>
                <th>买价</th>
                <th>卖价</th>
                <th>卖量</th>
                <th>原始评级</th>
                <#--<th>产品久期</th>-->
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
                        <td>${item.bidPrice?string("0.00#%")}</td>
                    <#else>
                        <td class="lock-stat"><em></em></td>
                    </#if>
                    <#if userLevel="1">
                        <td>${item.askPrice?string("0.00#%")}</td>
                    <#else>
                        <td class="lock-stat"><em></em></td>
                    </#if>
					<td>${item.askQuantity}</td>
					<td>${item.rating}</td>
                <#--<td>${item.rating}待补充</td>-->
            </tr>
            </#list>
        </tbody>
    </table>
</div>
</div>

<!--foot-->
<#include "plugins/foot.ftl">
<!--foot end-->

<script src="//static.360buyimg.com/finance/??common/lib/jquery/1.8.3/jquery.js,base/1.2.0/js/base.js"></script>
<script src="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/js/inputSearch.js"></script>
</body>
</html>
