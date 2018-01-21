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
    <script type="text/javascript" src="/js/jquery.form.js"></script>
	<script type="text/javascript">
$(document).ready(function(){
});
	function doCal(){
		var form = $("#id_form_cal");
		var options  = {
				url:'/security/doCalculator.html',
				method : 'post' ,
				dataType: 'json',
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				success: function(data) {
					if(data.success){
						item = data.data;
						$("input[name='cleanPrice']").val(item.cleanPrice);
						$("input[name='dirtyPrice']").val(item.dirtyPrice);
						$("input[name='yieldStr']").val(item.yieldStr);
						$("#id_interestAmount").html(item.interestAmount);
						$("#id_interestDayCount").html(item.interestDayCount);
						$("#id_settlementAmount").html(item.settlementAmount);
						$("#id_cashDateStr").html(item.cashDateStr);
					   $("#id_error").html('');
					}else{
					   $("input[name='cleanPrice']").val('');
                        $("input[name='dirtyPrice']").val('');
                        $("input[name='yieldStr']").val('');
                        $("#id_interestAmount").html('自动计算');
                        $("#id_interestDayCount").html('自动计算');
                        $("#id_settlementAmount").html('自动计算');
                        $("#id_cashDateStr").html('自动计算');
					   $("#id_error").html(data.message);
					}
				}
			};
			form.ajaxSubmit(options);
	}
	
	function doReset(){
		$("input[name='cleanPrice']").val('');
		$("input[name='dirtyPrice']").val('');
		$("input[name='yieldStr']").val('');
		$("#id_interestAmount").html('自动计算');
		$("#id_interestDayCount").html('自动计算');
		$("#id_settlementAmount").html('自动计算');
		$("#id_cashDateStr").html('自动计算');
		$("#id_error").html('');
		
	}
</script>
</head>
<body class="gray-bg">
<#include "plugins/head.ftl">
<div class="fa-now">
    <div class="hot-fa">
        <span class="wu-xin"></span><!--/pd/productDetail.html?productId=${product.productId}-->
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
            <div class="list-li">
                <a href="/pd/productDetail.html?productId=${securityInfoDTO.productId}" class="nei-bao clearfix">
                    <span class="wen-jian-icon"></span>
                    <span class="xian-kuan">产品详情介绍</span>
                    <span class="you-arr"> > </span>
                </a>
                <ul class="xi-fen-list">
                    <li><b> · </b>产品信息</li>
                    <li><b> · </b>参与机构</li>
                    <li><b> · </b>产品周期</li>
                    <li><b> · </b>证券信息</li>
                    <li><b> · </b>产品文件</li>
                    <li><b> · </b>联系人</li>
                </ul>
            </div>
			<#list rs as item>
				<div class="list-li <#if item.securityId == securityInfoDTO.securityId> on</#if>">
					<a href="/security/detail/${item.securityId}.html" class="nei-bao clearfix">
						<span class="chan-pin-icon"></span>
					    <span class="xian-kuan">${item.securityName}</span>
						<span class="you-arr"> > </span>
					</a>
					<ul class="xi-fen-list">
						<li><a href="#id_p1"><b> · </b>证券信息</a></li>
						<li><a href="#id_p2"><b> · </b>债券日历</a></li>
						<li><a href="#id_p3"><b> · </b>价格计算器</a></li>
						<li><a href="#id_p4"><b> · </b>二级市场</a></li>
						<li><a href="#id_p5"><b> · </b>相关证券</a></li>
					</ul>
				</div>
			</#list>
        </div>
        <div class="hot-right">
            <p id="id_p1" class="ton-biao">证券信息</p>
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
                            <th>全称</th>
                            <td>${securityInfoDTO.securityFullName!''}</td>
                            <th>简称</th>
                            <td>${securityInfoDTO.securityName!''}</td>
                        </tr>
                        <tr>
                            <th>代码</th>
                            <td>${securityInfoDTO.securityCode!''}</td>
                            <th>发行市场</th>
                            <td>${securityInfoDTO.exchange!''}</td>
                        </tr>
                        <tr>
                            <th>评级机构</th>
                            <td>${securityInfoDTO.externalPartyName!''}</td>
                            <th>当前评级</th>
                            <td>${securityInfoDTO.rating!''}</td>
                        </tr>
                        <tr>
                            <th>基础资产类型</th>
                            <td>${securityInfoDTO.underlyingAssetType.desc!''}</td>
                            <th>类型</th>
                            <td>${securityInfoDTO.securityType.desc!''}</td>
                        </tr>
                        <tr>
                            <th>规模（万）</th>
                            <td>${(securityInfoDTO.issueAmount/10000)?string("###,###,###.##")}</td>
                            <th>期限</th>
                            <td>${(securityInfoDTO.termLength/12)?string("#.##Y")}</td>
                        </tr>
                        <tr>
                            <th>付息频率</th>
                            <td>${securityInfoDTO.couponFrequency!''}</td>
                            <th>票面利率</th>
                            <td><#if securityInfoDTO.coupon != null>${securityInfoDTO.coupon*100!''}%</#if></td>
                        </tr>
						<tr>
                            <th>计息基准</th>
                            <td>${securityInfoDTO.dayCount!''}</td>
                            <th>利率类型</th>
                            <td>${securityInfoDTO.couponType.desc!''}</td>
                        </tr>
						<tr>
                            <th>还本方式</th>
                            <td>${securityInfoDTO.amortizationType.desc!''}</td>
							<th></th>
                            <td></td>
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
                    <p class="tu-shi">
                        <span class="hui-kuai"></span>
                        <span>剩余</span>
                    </p>
                    <p class="tu-shi-l">
                        <span class="h-kuai"></span>
                        <span>当前</span>
                    </p>
                </div>
            </div>
            <p id="id_p2" class="ton-biao">债券日历</p>
            <div class="ji-table">
                <table>
                    <colgroup>
                        <col style="width:170px;"/>
                        <col style="width:270px;"/>
                        <col style="width:170px;"/>
                        <col style="width:270px;"/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>发行开始日</th>
                            <td>${securityInfoDTO.issueDate?string("yyyy-MM-dd")!''}</td>
                            <th>薄记建档日</th>
                            <td>${securityInfoDTO.bookBuildingDate?string("yyyy-MM-dd")!''}</td>
                        </tr>
                        <tr>
                            <th>起息日</th>
                            <td>${securityInfoDTO.carryDate?string("yyyy-MM-dd")!''}</td>
                            <th>摊还期起始日</th>
                            <td>${securityInfoDTO.amortizingStartDate?string("yyyy-MM-dd")!''}</td>
                        </tr>
                        <tr>
                            <th>到期日</th>
                            <td>${securityInfoDTO.maturityDate?string("yyyy-MM-dd")!''}</td>
                            <th>下一付息日</th>
                            <td>${securityInfoDTO.nextPaymentDate?string("yyyy-MM-dd")!''}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p id="id_p3" class="ton-biao">价格计算器</p>
            <div class="count-qi">
				<form id="id_form_cal" action="" method="post">
				<input type="hidden" name="securityId" value="${securityInfoDTO.securityId!''}"/>
                <ul>
                    <li class="clearfix">
                        <label class="info-item">
                            结算日：
                        </label>
                        <div class="info-val">
                            <input type="text"
								   name ="settlementDate"
                                   placeholder="请选择结算日"
                                   onClick="WdatePicker({maxDate:'%y-%M-%d'})"
                                   onFocus="WdatePicker({opposite:true})"
                                   class="input-box"
								   value="${securityInfoDTO.settleDate?string('yyyy-MM-dd')!''}"/>
                            <b class="date-icon"></b>
                        </div>
                        <div class="you-zidon">
                            <span>兑付日：</span>
                            <span id="id_cashDateStr" class="qian-zi">自动计算</span>
                        </div>
                    </li>
                    <li class="clearfix">
                        <label class="info-item">
                            预计到期日：
                        </label>
                        <div class="info-val">
                            <input type="text"
                                   name = 'projectedMaturityDate'
                                   placeholder="请选择预计到期日"
                                   onClick="WdatePicker({maxDate:'%y-%M-%d'})"
                                   onFocus="WdatePicker({opposite:true})"
                                   class="input-box"
								   value="${securityInfoDTO.maturityDate?string('yyyy-MM-dd')!''}"/>
                            <b class="date-icon"></b>
                        </div>
                    </li>
                    <li class="clearfix">
                        <label class="info-item">
                            券面总额：
                        </label>
                        <div class="info-val">
                            <input type="text"
								   name = 'quantity'
                                   placeholder="请输入券面总额"
                                   class="input-box" value="1"/>
                        </div>
                        <div class="you-zidon">
                            <span>结算金额：</span>
                            <span id="id_settlementAmount" class="qian-zi">自动计算</span>
                        </div>
                    </li>
                    <li class="xu-xian"></li>
                    <li class="clearfix">
                        <label class="info-item">
                            净价：
                        </label>
                        <div class="info-val">
                            <input type="text"
								   name = "cleanPrice"
                                   placeholder="请输入净价"
                                   class="input-box"/>
                        </div>
                        <div class="you-zidon">
                            <span>计息天数：</span>
                            <span id="id_interestDayCount" class="qian-zi">自动计算</span>
                        </div>
                    </li>
                    <li class="clearfix">
                        <label class="info-item">
                            全价：
                        </label>
                        <div class="info-val">
                            <input type="text"
								   name = "dirtyPrice"
                                   placeholder="请输入全价"
                                   class="input-box"/>
                        </div>
                        <div class="you-zidon">
                            <span>应计利息：</span>
                            <span id="id_interestAmount" class="qian-zi">自动计算</span>
                        </div>
                    </li>
                    <li class="clearfix">
                        <label class="info-item">
                            收益率%：
                        </label>
                        <div class="info-val">
                            <input type="text" name="yieldStr"
                                   placeholder="请输入收益率"
                                   class="input-box"/>
                        </div>
                        <div class="you-zidon">
                            <span id="id_error" style="color:red;"></span>
                        </div>
                    </li>
                    <li class="jia-mar clearfix">
                        <label class="info-item">
                            &nbsp;
                        </label>
                        <div class="info-val">
                            <a id="id_cal" href="javascript:doCal();" class="ji-s-btn">计算</a>
                            <a href="javascript:doReset();" class="chon-zhi-btn">重置</a>
                        </div>
                    </li>
                    <li class="xu-xian"></li>
                </ul>
			</form>
            </div>
            <p id="id_p4" class="ton-biao">二级市场</p>
            <div class="ji-table">
                <table>
                    <colgroup>
                        <col style="width:170px;"/>
                        <col style="width:270px;"/>
                        <col style="width:170px;"/>
                        <col style="width:270px;"/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>买价</th>
                        <#if userLevel="1">
                            <td>${bidAskInfo.bidPrice?string("0.00#%")}</td>
                        <#else>
                            <td class="lock-stat"><em></em></td>
                        </#if>
                        <th>卖价</th>
                        <#if userLevel="1">
                            <td>${bidAskInfo.askPrice?string("0.00#%")}</td>
                        <#else>
                            <td class="lock-stat"><em></em></td>
                        </#if>
                    </tr>
                    <tr>
                        <th>买量</th>
                        <td>${bidAskInfo.bidQuantity}</td>
                        <th>卖量</th>
                        <td>${bidAskInfo.askQuantity}</td>
                    </tr>
                    <tr>
                        <th>报价方</th>
                        <td>${bidAskInfo.askExternalPartyId?default("匿名")}</td>
                        <th>更新日期</th>
                        <td>${bidAskInfo.modifiedDate?string("yyyy-MM-dd")}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <p id="id_p5" class="ton-biao">相关证券</p>
            <div class="about-zs">
                <table>
                    <colgroup>
                        <col style="width:165px;"/>
                        <col style="width:95px;"/>
                        <col style="width:125px;"/>
                        <col style="width:120px;"/>
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
                            <th>还本方式</th>
                            <th>分层比例</th>
                            <th>评级</th>
                        </tr>
                    </thead>
                    <tbody>
					<#list rs as item>
						<#if item.securityCode != securityInfoDTO.securityCode>
						<tr>
							<td>
								<a href="/security/detail/${item.securityId}.html">${item.securityName}</a>
							</td>
							<td>${item.securityCode}</td>
							<td>${(item.issueAmount/10000)?string('###,###,###.##')}</td>
							<td>${item.couponType.desc!''}</td>
							<td><#if item.coupon != null>${(item.coupon*100)?string('##.####')}%</#if></td>
							<td>${item.amortizationType.desc!''}</td>
							<td>${(item.tranchePct*100)?string('##.####')}%</td>
							<td>${item.rating}</td>
						</tr>
						</#if>
					</#list>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!--foot-->
	<#include "plugins/foot.ftl"/>
<!--foot end-->

<script src="//static.360buyimg.com/finance/??base/1.2.0/js/base.js"></script>
<script src="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/js/My97DatePicker/WdatePicker.js"></script>
<script src="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/js/inputSearch.js"></script>
</body>
</html>
