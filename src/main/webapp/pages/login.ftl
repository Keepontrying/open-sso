<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="description" content="京东金融综合互联网理财服务，基金理财,金融服务，敬请享受! "/>
    <meta name="Keywords" content="京东理财,网上理财,基金理财,金融服务,马上有钱,理财规划,个人理财,家庭理财,第三方理财,投资理财/"/>
    <title>abs mall</title>
    <link rel="icon" href="//www.jd.com/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="//static.360buyimg.com/finance/base/1.2.0/css/base.css"/>
    <link rel="stylesheet" href="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/css/login.css">
    <script src="//jrsecstatic.jdpay.com/jr-sec-dev-static/cryptico.min.js"></script>
    <script src="/js/jquery-2.2.3.min.js"></script>
    <script>
    /**
	  	var obj = new WxLogin({
	      id:"wechartImg", 
	      appid: "wxbdc5610cc59c1631", 
	      scope: "snsapi_login", 
	      redirect_uri: "https%3A%2F%2Fpassport.yhd.com%2Fwechat%2Fcallback.do",
	    //redirect_uri: "http%3A%2F%2Flocalhost%2FgetCode.do",
	      state: "",
	      style: "",
	      href: ""
	    });
	   */
	    $(function(){
	    	$.ajax({
				url:"/init/getPublickKey",
				type:'POST',
				dataType:'JSON',
				success:function(data){
					$("#shaKey").val(data.shaKey);
					cryptico.setPublicKeyString(data);
				}
			});//ajax end
	    	$("#loginPhoneNo").blur(function(){
	    		$.ajax({
					url:"/isShowVerifyCode.do?loginPhoneNo=" + $("#loginPhoneNo").val(),
					type:'POST',
					dataType:'JSON',
					success:function(data){
						if(data.show){
							$("#isValidVerifyCode").val("yes");
							$("#verifyCodeDiv").show();
						}else{
							$("#verifyCodeDiv").hide();
						}
					}
				});//ajax end
	    	});
	    	$("#login-btn").click(function(){
	    		var loginPassword = $("#loginPassword").val();
	    		$("#pErrMsg").hide();
	    		$("#pwdErrMsg").hide();
	    		$("#verifyErrMsg").hide();
	    		var obj = {};
	    		obj.shaKey = $("#shaKey").val();
	    		obj.isValidVerifyCode = $("#isValidVerifyCode").val();
	    		obj.loginPhoneNo = $("#loginPhoneNo").val();
	    		obj.loginPassword = cryptico.encrypt($("#loginPassword").val()).cipher;
	    		obj.verifyCode = $("#verifyCode").val();
	    		$.ajax({
					url:"/validLogin.do",
					type:'POST',
					dataType:'JSON',
					data:obj,
					success:function(data){
						if(data.success){
							if($("#returnUrl").val() == ""){
								location.href = "/front.html";							
							}else{
								location.href = decodeURI($("#returnUrl").val());
							}
						}else{
							if(data.msg == "phoneNull"){
								$("#pErrMsg").html("用户名或密码不正确");
								$("#pErrMsg").show();
							}
							if(data.msg == "phoneFormatError"){
								$("#pErrMsg").html("用户名或密码不正确");
								$("#pErrMsg").show();
							}
							if(data.msg == "phoneOrPwdError"){
								$("#pErrMsg").html("用户名或密码不正确");
								$("#pErrMsg").show();
							}
							if(data.msg == "passwdNull"){
								$("#pwdErrMsg").html("密码不能为空");
								$("#pwdErrMsg").show();
							}
							if(data.msg == "pwdErrorNum"){
								var pwdErrorNum = data.pwdErrorNum;
								if(pwdErrorNum == "5"){
									$("#pwdErrMsg").html("密码输入错误累计5次，账号锁定1小时。");
								}else{
									$("#pwdErrMsg").html("用户名或密码不正确！您还有" + (5-pwdErrorNum) +"次机会。");								
								}
								if(pwdErrorNum == "3"){
									$("#loginPhoneNo").blur();
								}
								$("#pwdErrMsg").show();
							}
							if(data.msg == "verifyCodeNull" || data.msg == "verifyCodeError"){
								$("#verifyErrMsg").html("验证码错误");
								$("#verifyCodeImg").click();
								$("#verifyErrMsg").show();
								$("#verifyCode").val("");
								$("#verifyCode").focus();
							}
							
						}
					}
				});//ajax end
	    	});
	    	if('${RequestParameters["s"]}' == "false"){
	    		alert("用户名或密码错误");
	    	}
	    	$("#reg").click(function(){
	    		location.href="/register.html";
	    	});
	    	$(".zhu-ce-ru").click(function(){
	    		location.href="/register.html";
	    	});
	    	$(".forget-mi").click(function(){
	    		location.href="/changePwd.html";
	    	});
	    	var verifyNum = 0;
	    	$("#verifyCodeImg").click(function(){
	    		verifyNum ++;
	    		$("#verifyCodeImg").attr("src","/getVerifyCode.do?v=" + verifyNum);
	    	});
	    });
    	document.onkeydown=function(event) {
    		//alert(event.keyCode);
        	if(event.keyCode == 13) {//keyCode=13是回车键
            	$('#login-btn').click();
        	}
        }
	</script>
</head>
<body>

<div class="login-box" id="takeHeight">
    <div class="login-zhu">
        <div class="logo-zone">
            <img src="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/images/gray-logo.png" alt=""/>
        </div>
        <div class="cont-box clearfix">
            <div class="cont-txt">
                <p>
                    <span>京东</span>
                    <span>ABS MALL</span>
                </p>
                <p></p>
                <p>最专业的ABS信息平台</p>
                <p>京东 ABS MALL 集成众多平台信息，发布最新行业信息让用户了解最新动态，推动行业有序发展，良性循环轻松赚钱</p>
            </div>
            <div class="login-status">
                <!--machine-chang为PC登录样式  qr-ma为扫码登录样式-->
                <div class="machine-chang qr-ma" style="display:none"></div>
                <!--扫码登录-->
                <div class="qr-boss" style="display: none">
                    <p class="den-title">请使用微信扫码登录</p>
                    <div class="nei-cent-box">
                        <img src="//img30.360buyimg.com/jr_image/jfs/t12586/296/1867463954/21722/834d7277/5a2a4f03Nadb29c51.png"
                             alt=""/>
                        <div class="status-box">
                            <!--成功状态-->
                            <span class="sao-secs"></span>
                            <!--异常状态-->
                            <span class="sao-err" style="display: none"></span>
                            <p class="sao-secc-zi">扫描成功！</p>
                            <p class="s-sure-zi">请在手机上确认登录</p>
                            <a href="javascript:" class="now-refrash">立即刷新</a>
                        </div>
                    </div>
                </div>
                <!--PC 登录-->
                <form id="loginForm">
                <input type="hidden" id="returnUrl" name="returnUrl" value="${returnUrl}"/>
                <input type="hidden" id="shaKey" name="shaKey" />
                <input id="isValidVerifyCode" name="isValidVerifyCode" type="hidden" value="no"/>
                <div class="pc-boss" style="">
                    <p class="pc-title">账户登录</p>
                    <p class="pc-tip-zi">请输入您的账户信息进行登录</p>
                    <!--error-sta 为错误状态-->
                    <div class="input-box">
                        <input id="loginPhoneNo" name="loginPhoneNo" type="text" placeholder="请输入账号名称"/>
                        <span class="ren-icon"></span>
                        <span id="pErrMsg" class="shu-error">您的输入有误，请重新输入</span>
                    </div>
                    <!--error-sta 为错误状态-->
                    <div class="input-box">
                        <input id="loginPassword" name="loginPassword" type="password" placeholder="请输入密码"/>
                        <span class="lock-icon"></span>
                        <span id="pwdErrMsg" class="shu-error">您的输入有误，请重新输入</span>
                    </div>
                  <div id="verifyCodeDiv" style="display:none;" class="input-box clearfix">
                        <input type="text" id="verifyCode" name="verifyCode" placeholder="请输入验证码" class="yzm-input"/>
                        <!--验证码区域-->
                        <div class="yam-img">
                            <img id="verifyCodeImg" src="/getVerifyCode.do" alt=""/>
                        </div>
                        <!--验证码区域 end-->
                        <span class="yzm-icon"></span>
                        <span id="verifyErrMsg" class="shu-error">您的输入有误，请重新输入</span>
                    </div>
                    <a href="javascript:" id="login-btn" class="login-btn">登&nbsp;录</a>
                    <div class="zhu-forget">
                        <a style="display:none;" href="javascript:" class="now-den-lu">使用微信登录</a>
                        <a href="javascript:" class="zhu-ce-ru">立即注册</a>
                        <span class="shu-line"></span>
                        <a href="javascript:" class="forget-mi">忘记密码</a>
                    </div>
                </div>
               	</form>
            </div>
        </div>
       <#include "plugins/foot.ftl">
    </div>
</div>

<script src="//static.360buyimg.com/finance/??common/lib/jquery/1.8.3/jquery.js,base/1.2.0/js/base.js"></script>
<script src="//static.360buyimg.com/finance/platform/ABSmall/1.0.0/js/addHeight.js"></script>
<!--<script>
    function lottery(){
        this.init();
    }
    lottery.prototype = {
        init: function(){
            this.rotateCard();
        },
        rotateCard: function(){
            var oLi = $(".bao-fan");
            var rear = $(".positive-face");
            var face = $(".negative-face");
            var iNow = 0;
            var _this = this;
            $('.machine-chang').click(function() {
                var oLi = $(".bao-fan");
                var rear = $(".positive-face");
                var face = $(".negative-face");
                var currObj = oLi.eq((iNow++) % 50);
                currObj.addClass('hover-it');
            });

            $('.machine-chang').click(function(){
                oLi.toggleClass('hover-it');
            });
        }
    };
    new lottery();
</script>-->
<script>
</script>
</body>
</html>