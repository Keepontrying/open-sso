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
</head>
<body class="gray-bg">

<#include "plugins/head.ftl">

<div class="fa-now">
    <div class="hot-fa">
        <span class="wu-xin"></span>
         <span class="chan-biao">${product.securityFullName}</span>
        <div class="hot-biao" style="display:none;">
            HOT
            <em></em>
        </div>
          <div class="fa-more-zi">
            <span>发行时间：</span>
            <span>${product.carryDate?string("yyyy-MM-dd")!''}</span>
            <span>发行金额：</span>
            <span>${product.contractValue?number/100000000}亿</span>
            <span>发行期限：</span>
            <span>${product.termLength}个月</span>
        </div>
    </div>
    <div class="hot-zhu clearfix">
        <div class="hot-left">
            <div class="list-li on">
                <p class="nei-bao clearfix">
                    <span class="wen-jian-icon"></span>
                    <span class="xian-kuan">产品详情介绍</span>
                    <span class="you-arr"> > </span>
                </p>
                <ul class="xi-fen-list">
                    <li><a href="#id_p1"><b> · </b>产品信息</a></li>
                    <li><a href="#id_p2"><b> · </b>参与机构</a></li>
                    <li><a href="#id_p3"><b> · </b>产品周期</a></li>
                    <li><a href="#id_p4"><b> · </b>证券信息</a></li>
                    <li><a href="#id_p5"><b> · </b>产品文件</a></li>
                    <li><a href="#id_p6"><b> · </b>联系人</a></li>
                </ul>
            </div>
             <#if securitys??>
                	<#list securitys as temp>
                            <div class="list-li">
				                <a href="/security/detail/${temp.securityId}.html" class="nei-bao clearfix">
				                    <span class="chan-pin-icon"></span>
				                    <span class="xian-kuan">${temp.securityName}</span>
				                    <span class="you-arr"> > </span>
				                </a>
				            </div>
                	</#list>
              </#if>
        </div>
        <div class="hot-right">
            <p id="id_p1" class="ton-biao">产品信息</p>
            <div class="he-yi clearfix">
                <table>
                    <colgroup>
                        <col style="width:150px;"/>
                        <col style="width:190px;"/>
                        <col style="width:150px;"/>
                        <col style="width:190px;"/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>产品简称</th>
                        <td>${product.securityName}</td>
                        <th>产品状态</th>
                        <td>${product.assetPoolStatus.desc}</td>
                    </tr>
                    <tr>
                        <th>产品类型</th>
                        <td><#if product.securityType=="ABS_PRODUCT">资产支持证券</#if></td>
                        <th>发行金额(万元)</th>
                        <td>${(product.contractValue/10000)?string('###,###,###.##')}</td>
                    </tr>
                    <tr>
                        <th>基础资产类型</th>
                        <td>${product.underlyingAssetType.desc}</td>
                        <th>发行方式</th>
                        <td>${product.issueType.desc}</td>
                    </tr>	
                    <tr>
                        <th>交易流通场所</th>
                        <td>${product.exchange}</td>
                        <th>循环购买</th>
                        <td><#if product.assetRecycle=="0">否<#else>是</#if></td>
                    </tr>
                    <tr>
                        <th>产品设立日</th>
                        <td>${product.listDate?string("yyyy-MM-dd")}</td>
                        <th>起息日</th>
                        <td>${product.carryDate?string("yyyy-MM-dd")}</td>
                    </tr>
                    <tr>
                        <th>法定到期日</th>
                        <td>${product.legalMaturityDate?string("yyyy-MM-dd")}</td>
                     	<th>还本方式</th>
                        <td>${product.amortizationType.desc}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="ban-fen">
                         <div class="fen-ti">
                         <#list tranche as item>
                             <div class="a-box" style="min-height: 9%;height:<#if tranche?size==1>100<#else>${item.height*100}</#if>%">
                                 <#if item.colList??>
                                     <#list item.colList as row>
                                         <div class="b-box <#if row.securityId == securityInfoDTO.securityId>yell-bg</#if>" style="min-width: 10%;width:${(row.width*100/item.width)?string("#.#")}%;
                                                 ">
                                         ${row.type}
                                         </div>
                                     </#list>
                                 </#if>
                             </div>

                         </#list>
	                    </div>
	                    <!--
	                    <p class="tu-shi">
	                        <span class="hui-kuai"></span>
	                        <span>剩余</span>
	                    </p>
	                    <p class="tu-shi-l">
	                        <span class="h-kuai"></span>
	                        <span>当前</span>
	                    </p>
	                    -->
                </div>
            </div>
            <p id="id_p2" class="ton-biao">参与机构</p>
            <div class="ji-table">
                <table>
                    <colgroup>
                        <col style="width:170px;"/>
                        <col style="width:270px;"/>
                        <col style="width:170px;"/>
                        <col style="width:270px;"/>
                    </colgroup>
                    <tbody>
                    <#if partys?has_content>
                    	<#list partys as party>
                    		<#if party.externalPartyRole == "ORIGINATOR">
                    			<#assign ORIGINATOR = party.externalPartyName>
                    		</#if>
                			<#if party.externalPartyRole == "ASSETMANAGER">
                    			<#assign ASSETMANAGER = party.externalPartyName>
                    		</#if>
                			<#if party.externalPartyRole == "CUSTODIAN">
                    			<#assign CUSTODIAN = party.externalPartyName>
                    		</#if>
                    		<#if party.externalPartyRole == "ASSETSERVICER">
                    			<#assign ASSETSERVICER = party.externalPartyName>
                    		</#if>
                    		<#if party.externalPartyRole == "PRINCIPLEUNDERWRITER">
                    			<#assign PRINCIPLEUNDERWRITER = party.externalPartyName>
                    		</#if>
                    		<#if party.externalPartyRole == "LAWFIRM">
                    			<#assign LAWFIRM = party.externalPartyName>
                    		</#if>
                    		<#if party.externalPartyRole == "ASSETACCREDITATION">
                    			<#assign ASSETACCREDITATION = party.externalPartyName>
                    		</#if>
                    	</#list>
                    </#if>
                    <tr>
                        <th>原始权益人</th>
                        <td>${ORIGINATOR}</td>
                        <th>计划管理人</th>
                        <td>${ASSETMANAGER}</td>
                    </tr>
                    <tr>
                        <th>托管机构</th>
                        <td>${CUSTODIAN}</td>
                        <th>资产服务机构</th>
                        <td>${ASSETSERVICER}</td>
                    </tr>
                    <tr>
                        <th>主承销商</th>
                        <td>${PRINCIPLEUNDERWRITER}</td>
                        <th>验资机构</th>
                        <td>${ASSETACCREDITATION}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <p id="id_p3" class="ton-biao">产品周期</p>
            <div class="zhou-qi clearfix">
                <div class="hui-quan-box <#if product.approveDate?date lt .now?date>yellow-quan-box</#if>">
                    <div class="hui-quan">
                        1
                        <span></span>
                    </div>
                    <p>通过</p>
                    <p class="quan-di-zi">${product.approveDate?string("yyyy-MM-dd")}</p>
                    <div class="gray-r-arr"></div>
                </div>
                <div class="hui-quan-box <#if product.bookBuildingDate?date lt .now?date>yellow-quan-box</#if>">
                    <div class="hui-quan">
                        2
                        <span></span>
                    </div>
                    <p>薄记</p>
                    <p class="quan-di-zi">${product.bookBuildingDate?string("yyyy-MM-dd")}</p>
                    <div class="gray-r-arr"></div>
                </div>
                <div class="hui-quan-box <#if product.carryDate?date lt .now?date>yellow-quan-box</#if>">
                    <div class="hui-quan">
                        3
                        <span></span>
                    </div>
                    <p>起息</p>
                    <p class="quan-di-zi">${product.carryDate?string("yyyy-MM-dd")}</p>
                    <div class="gray-r-arr"></div>
                </div>
                <div class="hui-quan-box <#if product.amortizingStartDate?date lt .now?date>yellow-quan-box</#if>">
                    <div class="hui-quan">
                        4
                        <span></span>
                    </div>
                    <p>摊还</p>
                    <p class="quan-di-zi">${product.amortizingStartDate?string("yyyy-MM-dd")}</p>
                    <div class="gray-r-arr"></div>
                </div>
                <div class="hui-quan-box <#if product.maturityDate?date lt .now?date>yellow-quan-box</#if>">
                    <div class="hui-quan">
                        5
                        <span></span>
                    </div>
                    <p>到期</p>
                    <p class="quan-di-zi">${product.maturityDate?string("yyyy-MM-dd")}</p>
                </div>
            </div>

            <p id="id_p4" class="ton-biao">证券信息</p>
            <div class="about-zs">
                <table>
                    <colgroup>
                        <col style="width:165px;"/>
                        <col style="width:95px;"/>
                        <col style="width:125px;"/>
                        <col style="width:90px;"/>
                        <col style="width:105px;"/>
                        <col style="width:105px;"/>
                        <col style="width:105px;"/>
                        <col style="width:90px;"/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>证券简称</th>
                        <th>证券代码</th>
                        <th>发行金额(万元)</th>
                        <th>类型</th>
                        <th>票面利率</th>
                        <th>分层比例</th>
                        <th>评级</th>
                    </tr>
                    </thead>
                    <tbody>
                    <#if securitys??>
                    	<#list securitys as temp>
                    		<tr>
		                        <td>${temp.securityName}</td>
		                        <td>${temp.securityCode}</td>
		                        <td>${(temp.issueAmount/10000)?string('###,###,###.##')}</td>
		                        <td>${temp.couponType.desc}</td>
		                        <td>${temp.coupon?string("0.00#%")}</td>
		                        <td>${temp.tranchePct?string("0.00#%")}</td>
		                        <td>${temp.rating}</td>
		                    </tr>
                    	</#list>
                    </#if>
                    </tbody>
                </table>
            </div>

            <p id="id_p5" class="ton-biao">项目文件</p>
            <#if documents??>
	            <div class="file-zone clearfix">
	            	<#list documents as temp>
	            		<a href="<#if userLevel="1">${temp.documentPath}<#else>javascript:void(0);</#if>" class="file-box<#if !userLevel || userLevel=="0"> cant-down</#if>"
                            title="${temp.fileName}">
	                    	<span class="file-icon"></span>
	                    	<span class="f-xian-zi">${temp.documentName}</span>
	                    	<span class="cant-lock"></span>
	               		</a>
	            	</#list>
	                
	            </div>
			</#if>
            <p id="id_p6" class="ton-biao">联系人</p>
            <div class="contact-box clearfix">
                <div class="contact-ge">
                    <div class="c-mo-zi">
                        <div class="shang-ban"></div>
                        <img  src="/img/sby_head.png" style="width:90px;height:90px;" alt=""/>
                    </div>
                    <div class="c-bot-zi">
                        <a id="img1"><p>司雨博 总监</p></a>
                        <p>以科技服务金融，点我有料</p>
                    </div>
                </div>
        </div>
    </div>
</div>

<!--弹层区-->
<div class="panelbox" id="newWindow">
    <div class="panelwrap">
        <div class="paneltitle">
            <span class="text">加我微信，上传名片获取更多产品信息</span>
            <span class="panelclose"></span>
        </div>
        <div class="panelcon">
            <div class="up-zone clearfix">
                <!--专家头像-->
                <div class="mo-zi">
                    <div class="shang-ban"></div>
                    <img src="/img/sby_head.png" style="width:90px;height:90px;" alt=""/>
                </div>
                <div class="chan-xinxi">
                    <p>司雨博 总监</p>
                    <p>以科技服务金融，点我有料</p>
                </div>
                <div class="qr-zone">
                    <img src="/img/sby_wx.png" style="width:90px;height:90px;" alt=""/>
                </div>
            </div>
            <a href="javascript:" class="i-konw-btn panelclose">我知道了</a>
        </div>
    </div>
</div>

<#include "plugins/foot.ftl">

<script src="//static.360buyimg.com/finance/??common/lib/jquery/1.8.3/jquery.js,base/1.2.0/js/base.js"></script>
<script src="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/js/My97DatePicker/WdatePicker.js"></script>
<script src="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/js/inputSearch.js"></script>

<script>
    //弹层控件
	$(function(){
		    var popUp = null;
		    seajs.use('financial/common/module/popup/1.0.0/js/popup', function(pop){
		        popUp = pop;
		    });
		    $('.cant-down').click(function(){
		        popUp.showLayer ($('#newWindow'));
		    });
		    $('#img1').click(function(){
		        popUp.showLayer ($('#newWindow'));
		    });
	});
</script>
</body>
</html>
