<html>
<body>
<script type="text/javascript">
$(document).ready(function(){
    var url = window.location.href;
    if(url.indexOf("/front.html") != -1){
        $("#id_home").addClass("botm-line");
    }else if(url.indexOf("/front.html") != -1){
        
    }else if(url.indexOf("/pd/product.html") != -1){
        $("#id_history").addClass("botm-line");
    }else if(url.indexOf("/security/market.html") != -1){
        $("#id_marketList").addClass("botm-line");
    }else if(url.indexOf("/security/list.html") != -1){
        $("#id_securityList").addClass("botm-line");
    }else if(url.indexOf("/pd/productDetail.html") != -1){
        $("#id_current").addClass("botm-line");
    }
    $(".out-back").click(function(){
        location.href = "/logout.do";
    });
	
	$("#id_sipt").keyup(function(){
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
				    var k=0,j=0;
					for(var i = 0; i < data.length; i++){
						var item = data[i];
						if(item.dataType === 'PRODUCT' && j<2){
                            $("#id_product").append("<li class='j-right-one'><a href='/pd/productDetail.html?productId=" + item.id + "'>"+item.securityName+"</a><p>"+item.securityFullName+"</p></li>")
                            j++;
                        }else if(item.dataType === 'SECURITY' && k<4){
                            $("#id_security").append("<li class='j-right-one'><a href='/security/detail/" + item.id + ".html'><span>"+item.securityName+"</span>&nbsp;&nbsp;<span>"+item.securityCode+"</span></a><p></p></li>")
                            k++;
						}
					}
				}
			}
		});
	});
});
</script>
<noscript><div style="background-color:red;font-size:30px;"><span >警告：浏览器不支持或您已经禁用了javascript脚本，请先启用javascript或者换一浏览器重试，否则将无法正常访问本网站！</span></div></noscript>
<div class="pro-box-bg">
    <div class="pro-box-nei">
        <div class="head-tou clearfix">
            <a href="/front.html" class="logo-zone">
                <img src="//img30.360buyimg.com/jr_image/jfs/t13093/248/1951892528/4343/12a5d0a7/5a2f4c47Nb42684f7.png"
                     alt=""/>
            </a>
            <ul class="nav-ul">
                <li id="id_home">
                    <a href="/front.html" class="">首页</a>
                </li>
                <li id="id_current">
                    <a href="/pd/productDetail.html?productId=${hotProductId}">当前发行</a>
                </li>
                <li id="id_history">
                    <a href="/pd/product.html">历史发行</a>
                </li>
                <li id="id_marketList">
                    <a href="/security/market.html">二级市场</a>
                </li>
                <li id="id_securityList">
                    <a href="/security/list.html">证券信息</a>
                </li>
            </ul>
            <a href="javascript:" class="out-back">退出</a>
            <div class="ban-zone">
                <img src="/img/default_buddha.png" alt=""/>
                <span class="mo-ban ban-s"></span>
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
                        </ul>
                    </div>
                    <div class="jie-xian"></div>
                    <div class="tui-j-box clearfix">
                        <div class="tui-j-left">
                            证券
                        </div>
                        <ul id="id_security" class="tui-j-right">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
