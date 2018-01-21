<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8">
<script type="text/javascript">
$(document).ready(function(){
	
});
function page(pageNo){
	var url2 = window.location.href;
	if(url2.indexOf("?") != -1){
	}else{
		url2 = url2 + "?";
	}
	var pattern = new RegExp("&pageNo=[0-9]*\?&");
	url2 = url2.replace(pattern,'');
	var url3 = url2 + "&pageNo=";
	window.location.href = url3 + pageNo+"&";
}
</script>
</head>
 <body>
    <div class="page">
        <div class="page-wrap clearfix" id="pageWrap">
		<#assign limit=10/>
		<#assign balance=(total%limit)/>
		<#assign pageNo=RequestParameters.pageNo?number/>
		<#if pageNo == null || pageNo lte 0>
			<#assign pageNo=1/>
		<#else>
		</#if>
		
		<#if balance gt 0>
			<#assign totalPage=((total*10-balance*10)/10/limit+1)/>
		<#else>	
			<#assign totalPage=(total/limit)/>
		</#if>
		
		<#if pageNo gte totalPage>
			<#assign pageNo=totalPage/>
		<#else>
		</#if>
			<#if RequestParameters.pageNo == 1 || RequestParameters.pageNo == null>
				<a href="javascript:" class="up-page curr"><i class="prev-i"><</i><em>上一页</em></a>
			<#else>
				<a href="javascript:page(${pageNo - 1})" class="up-page"><i class="prev-i"><</i><em>上一页</em></a>
			</#if>
			
			<#if RequestParameters.pageNo gt 3>
				<a href="javascript:page(1)">1</a>
			<#else>
			</#if>
			
			<#if RequestParameters.pageNo gt 4>
				<span class="apostrophe">···</span>
			<#else>
			</#if>
			
			<#if RequestParameters.pageNo gt 2>
				<a href="javascript:page(${pageNo - 2})">#{pageNo-2}</a>
			<#else>
			</#if>
			
			<#if  (pageNo - 1) gt 0>
				<a href="javascript:page(${pageNo - 1})">${pageNo - 1}</a>
			<#else>
			</#if>
			
			<a href="javascript:" class="curr">${pageNo!''}</a>
			
			<#if  (pageNo + 1) lt totalPage>
				<a href="javascript:page(${pageNo + 1})">${pageNo + 1}</a>
			<#else>
			</#if>
			
			<#if  (pageNo + 2) lt totalPage>
				<a href="javascript:page(${pageNo + 2})">${pageNo + 2}</a>
			<#else>
			</#if>
			
			<#if  (pageNo + 3) lt totalPage>
				<span class="apostrophe">···</span>
			<#else>
			</#if>
			
			
			<#if totalPage lte pageNo >
				<a href="javascript:" class="down-page curr"><em>下一页</em><i class="next-i">></i></a>
			<#else>
				<a href="javascript:page(${totalPage})">${totalPage}</a>
				<a href="javascript:page(${pageNo + 1})" class="down-page"><em>下一页</em><i class="next-i">></i></a>
			</#if>
        </div>
    </div>
</body>
</html>