<div class="on-condition clearfix" style="display:block">
        <span class="s-biao">筛选条件</span>
        <div class="qian-box">
            <#if RequestParameters.rlist?contains('A3,')>
			<div class="chosed-it">
				<span>AAA</span>
				<em value="A3" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('A3_M,')>
			<div class="chosed-it">
				<span>AAA-</span>
				<em value="A3_M" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('A2_P,')>
			<div class="chosed-it">
				<span>AA+</span>
				<em value="A2_P" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('A2,')>
			<div class="chosed-it">
				<span>AA</span>
				<em value="A2" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('A2_M,')>
			<div class="chosed-it">
				<span>AA-</span>
				<em value="A2_M" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('A1_P,')>
			<div class="chosed-it">
				<span>A+</span>
				<em value="A1_P" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('A1,')>
			<div class="chosed-it">
				<span>A</span>
				<em value="A1" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('A1_M,')>
			<div class="chosed-it">
				<span>A-</span>
				<em value="A1_M" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('B3_P,')>
			<div class="chosed-it">
				<span>BBB+</span>
				<em value="B3_P" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('B3,')>
			<div class="chosed-it">
				<span>BBB</span>
				<em value="B3" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('B3_M,')>
			<div class="chosed-it">
				<span>BBB-</span>
				<em value="B3_M" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('B2_P,')>
			<div class="chosed-it">
				<span>BB+</span>
				<em value="B2_P" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('B2,')>
			<div class="chosed-it">
				<span>BB</span>
				<em value="B2" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('B2_M,')>
			<div class="chosed-it">
				<span>BB-</span>
				<em value="B2_M" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('B1_P,')>
			<div class="chosed-it">
				<span>B+</span>
				<em value="B1_P" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('B1,')>
			<div class="chosed-it">
				<span>B</span>
				<em value="B1" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('B1_M,')>
			<div class="chosed-it">
				<span>B-</span>
				<em value="B1_M" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('C3,')>
			<div class="chosed-it">
				<span>CCC</span>
				<em value="C3" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('C2,')>
			<div class="chosed-it">
				<span>CC</span>
				<em value="C2" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('C1,')>
			<div class="chosed-it">
				<span>C</span>
				<em value="C1" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.rlist?contains('NR,')>
			<div class="chosed-it">
				<span>NR</span>
				<em value="NR" onclick="toUnCheck(this,'rlist')"></em>
			</div>
		</#if>		
		<#if RequestParameters.ylist?contains('2017,')>
			<div class="chosed-it">
				<span>2017</span>
				<em value="2017" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2016,')>
			<div class="chosed-it">
				<span>2016</span>
				<em value="2016" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2015,')>
			<div class="chosed-it">
				<span>2015</span>
				<em value="2015" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2014,')>
			<div class="chosed-it">
				<span>2014</span>
				<em value="2014" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2013,')>
			<div class="chosed-it">
				<span>2013</span>
				<em value="2013" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2012,')>
			<div class="chosed-it">
				<span>2012</span>
				<em value="2012" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2011,')>
			<div class="chosed-it">
				<span>2011</span>
				<em value="2011" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2010,')>
			<div class="chosed-it">
				<span>2010</span>
				<em value="2010" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2009,')>
			<div class="chosed-it">
				<span>2009</span>
				<em value="2009" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2008,')>
			<div class="chosed-it">
				<span>2008</span>
				<em value="2008" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.ylist?contains('2007,')>
			<div class="chosed-it">
				<span>2007</span>
				<em value="2007" onclick="toUnCheck(this,'ylist')"></em>
			</div>
		</#if>
		<#if RequestParameters.olist?contains('CSRC,')>
			<div class="chosed-it">
				<span>证监会</span>
				<em value="CSRC" onclick="toUnCheck(this,'olist')"></em>
			</div>
		</#if>
		<#if RequestParameters.olist?contains('CBRC,')>
			<div class="chosed-it">
				<span>银监会</span>
				<em value="CBRC" onclick="toUnCheck(this,'olist')"></em>
			</div>
		</#if>
		<#if RequestParameters.olist?contains('CIRC,')>
			<div class="chosed-it">
				<span>保监会</span>
				<em value="CIRC" onclick="toUnCheck(this,'olist')"></em>
			</div>
		</#if>
		<#if RequestParameters.olist?contains('NAFMII,')>
			<div class="chosed-it">
				<span>交易商协会</span>
				<em value="NAFMII" onclick="toUnCheck(this,'olist')"></em>
			</div>
		</#if>
		<#if RequestParameters.olist?contains('OTHERS,')>
			<div class="chosed-it">
				<span>其他</span>
				<em value="OTHERS" onclick="toUnCheck(this,'olist')"></em>
			</div>
		</#if>
		<#if RequestParameters.tlist?contains('M3,')>
			<div class="chosed-it">
				<span>3M</span>
				<em value="M3" onclick="toUnCheck(this,'tlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.tlist?contains('M3_M6,')>
			<div class="chosed-it">
				<span>3-6M</span>
				<em value="M3_M6" onclick="toUnCheck(this,'tlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.tlist?contains('M9_M12,')>
			<div class="chosed-it">
				<span>9-12M</span>
				<em value="M9_M12" onclick="toUnCheck(this,'tlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.tlist?contains('Y1_Y3,')>
			<div class="chosed-it">
				<span>1-3Y</span>
				<em value="Y1_Y3" onclick="toUnCheck(this,'tlist')"></em>
			</div>
		</#if>
		<#if RequestParameters.tlist?contains('Y3_Y5,')>
			<div class="chosed-it">
				<span>3-5Y</span>
				<em value="Y3_Y5" onclick="toUnCheck(this,'tlist')"></em>
			</div>
		</#if>
			<#if RequestParameters.rlist?contains('OTHERS,')>
                <div class="chosed-it">
                    <span>其他</span>
                    <em value="OTHERS" onclick="toUnCheck(this,'rlist')"></em>
                </div>
			</#if>
        </div>
        <a href="javascript:refresh();" class="clear-btn">清空筛选</a>
    </div>