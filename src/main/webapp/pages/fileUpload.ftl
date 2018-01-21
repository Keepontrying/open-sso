<!DOCTYPE html>
<html>
<head>
    <script src="/js/jquery-2.2.3.min.js"></script>
    <script>
	    $(function(){
    	   	$("#level").click(function(){
	    		$.ajax({
					url:"/init/changeLevel?loginPhoneNo=" + $("#loginPhoneNo").val() + "&userLevel=" + $("#userLevel").val(),
					type:'GET',
					dataType:'text',
					success:function(){
						alert("更新成功");
					}
				});//ajax end
	    	});
	    });
	</script>
</head>
<body>
	<form name="serForm" action="/init/upload" method="post"  enctype="multipart/form-data">
		<h1>采用流的方式上传文件</h1>
		securityId:<input type="text" name="securityId"/><br/>
		documentType:
		<select name="documentType">
			<option value="PROMOTION_MATERIAL">推介材料</option>
			<option value="CONTRACT">合同文件</option>
			<option value="DURATION_MANAGEMENT">存续期管理文件</option>
		</select><br/>
        documentName: <input name="documentName"><br/>
		<input type="file" name="file">
		<input type="submit" value="upload"/>
	</form>
	==============================================<br/>
	<input id="loginPhoneNo" name="loginPhoneNo" type="text" />
	<select name="userLevel" id="userLevel">
		<option value="1">可以查看</option>
		<option value="0">不可查看</option>
	</select><br/>
	<input type="button" id="level" value="提交"/>
</body>
</html>