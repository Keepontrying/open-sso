
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
    <script src="/js/jquery-2.2.3.min.js"></script>
    <script src="//jrsecstatic.jdpay.com/jr-sec-dev-static/cryptico.min.js"></script>
    <script>
	    $(function(){
    		$("#loginPassword").blur(function(){
				var len = $("#loginPassword").val().length;
				$("#pwdErrMsg").hide();
				if(len < 6 || len > 20){
					$("#pwdErrMsg").html("密码必须是6-20位");
					$("#pwdErrMsg").show();
				}
			});	
			$("#loginPhoneNo").blur(function(){
				$(".login-btn").click();
			});
	    	$.ajax({
				url:"/init/getPublickKey",
				type:'POST',
				dataType:'JSON',
				success:function(data){
					cryptico.setPublicKeyString(data);
					$("#shaKey").val(data.shaKey);
				}
			});//ajax end
			$(".login-btn").click(function(){
				var len = $("#loginPassword").val().length;
				$("#pwdErrMsg").hide();
				if(len < 6 || len > 20){
					$("#pwdErrMsg").html("密码必须是6-20位");
					$("#pwdErrMsg").show();
					return;
				}
				var obj = {};
				obj.loginPhoneNo = $.trim($("#loginPhoneNo").val());
				var loginPassword = $.trim($("#loginPassword").val());
				obj.loginPassword = cryptico.encrypt(loginPassword).cipher;
				obj.authCode = $("#authCode").val().trim();
				obj.shaKey = $("#shaKey").val();
	    		$.ajax({
					url:"/changePwd.do",
					type:'POST',
					data:obj,
					dataType:'JSON',
					success:function(data){
						if(data.success){
							location.href = "/front.html";
						}else{
							if(data.msg == "phoneNumNull"){
								$("#pErrMsg").html("手机号输入有误");
								$("#pErrMsg").show();
							}
							if(data.msg == "phoneFormatError"){
								$("#pErrMsg").html("手机号输入有误");
								$("#pErrMsg").show();
							}
							if(data.msg == "phoneNotExist"){
								$("#pErrMsg").html("手机号码未注册，不能修改");
								$("#pErrMsg").show();
							}
							if(data.msg == "authCodeNull"){
								$('.yzm-error').text("短信验证码有误");
							}
							if(data.msg == "authCodeError"){
								$('.yzm-error').text("短信验证码有误");
								$('.had-send').text("");
							}
							if(data.msg == "pwdNull"){
								$("#pwdErrMsg").html("密码不能为空");
								$("#pwdErrMsg").show();
							}
							if(data.msg == "pwdFormatError"){
								$("#pwdErrMsg").html("密码必须由6-20位的字母和数组组成");
								$("#pwdErrMsg").show();
							}
						}
					}
				});//ajax end
			});
	    	$("#reg").click(function(){
	    		location.href="/register.html";
	    	});
	    	$(".han-jian-den").click(function(){
	    		location.href="/login.html";
	    	});
	    });
	</script>
</head>
<body>

<div class="login-box" id="takeHeight">
	<input type="hidden" id="shaKey" name="shaKey" />
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
                <!--注册-->
                <div class="pc-boss">
                    <p class="pc-title">密码修改</p>
                    <div class="zhuce-input">
                        <span class="input-din">手机号码</span>
                        <input type="text" name="loginPhoneNo" id="loginPhoneNo" placeholder="请输入您的手机号码"/>
                        <span id="pErrMsg" class="shu-error">您的输入有误，请重新输入</span>
                    </div>
                    <div class="zhuce-input-xin">
                        <span class="input-din">短信验证</span>
                        <input type="text" name="authCode" id="authCode"  placeholder="请输入验证码"/>
                        <a href="javascript:" class="huo-ma">获取短信验证码</a>
                        <span class="had-send"></span>
                        <span class="yzm-error"></span>
                    </div>
                    <div class="zhuce-input">
                        <span class="input-din">登录密码</span>
                        <input type="password" name="loginPassword" id="loginPassword" placeholder="请输入登录密码"/>
                        <span id="pwdErrMsg"></span>
                    </div>
                    <a href="javascript:" class="login-btn">完成修改</a>
                    <div class="zhu-forget">
                        <span class="have-hao">已有账号</span>
                        <a href="javascript:" class="han-jian-den">立即登录</a>
                    </div>
                </div>
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
    //短信验证码
    seajs.use('financial/common/module/sendYZM/1.0.0/js/sendYZM', function(sendYZM){
        var YZM = new sendYZM({
            //重新发送等待时间默认60s
            time: 60,
            //必选参数
            btn: $('.huo-ma'),
            //点击发送验证码按钮时执行回调
            clickCallBack:function(){
            	$("#pErrMsg").hide();
            	if($("#loginPhoneNo").val().length != 11){
            		$("#pErrMsg").val("手机号输入有误");
            		$("#pErrMsg").show();
            		return;
            	}
                $.ajax({
                    //验证码接口地址
                    url: '/getAuthCode.do?loginPhoneNo=' + $("#loginPhoneNo").val(),
                    type: 'get',
                    success: function(data){
                        if(data.result == 0){
                            //失败
                            $('.yzm-error').text('验证码发送失败');
                            //停止倒计时方法*可接参数*
                            YZM.stopCountDown(function(){
                                alert('网络异常')
                            });
                        }else if(data.result == 1){
                            //成功
                            $('.had-send').text('短信验证码已发送至 ****'+data.phoneNum);
                            YZM.startCountDown();
                        }
                    },
                    error: function(){
                        $('.yzm-error').text('验证码发送失败');
                        //停止倒计时方法*可接参数*
                        YZM.stopCountDown();
                    },
                    same: function(){
                        $('.shen-su').removeClass('hide');
                    }
                })
            },
            //倒计时结束时执行回调
            timeOverCallBack: function(){
            }
        });
    });
</script>
</body>
</html>