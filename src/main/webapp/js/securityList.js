
String.prototype.endWith=function(oString){
	var reg=new RegExp(oString+"$");  
	return reg.test(this);     
}  

function toChecked(box,paramName){
	var urlNew = window.location.href;
	
	if(urlNew.indexOf("?") != -1){
	}else{
		urlNew = urlNew + "?";
	}
	if(urlNew.indexOf(paramName) != -1){
	}else{
		urlNew = urlNew + "&" + paramName;
	}
	
	if(urlNew.endWith("&")){
	}else{
		urlNew = urlNew + "&";
	}
	
	if($(box).hasClass("gou-box")){
		$(box).removeClass("gou-box");
	}else{
		$(box).addClass("gou-box");
	}
	
	var pattern = new RegExp("&" + paramName + ".*\?&");
	
	var b = $("#id_"+paramName).find("span").filter(".gou-box");
	if(b != undefined && b != null){
		var pl = "&" + paramName + "="
		$(b).each(function(){
			//pl = pl + $(this).next().html()+",";
			pl = pl + $(this).attr("value")+",";
			//alert(pl);
		});
		urlNew = urlNew.replace(pattern, pl +"&");
	}
	
	if(urlNew.indexOf("&pageNo=") == -1){
		window.location.href = urlNew +"pageNo=1&";
	}else{
		var pattern2 = new RegExp("&pageNo=[0-9]*\?&");
		window.location.href = urlNew.replace(pattern2, "&pageNo=1&");;
	}
}

function toUnCheck(box,paramName){
	var urlNew = window.location.href;
	var val = $(box).attr("value");
	urlNew = urlNew.replace(val+",",'');
	
	if(urlNew.indexOf("&pageNo=") == -1){
		window.location.href = urlNew +"pageNo=1&";
	}else{
		var pattern2 = new RegExp("&pageNo=[0-9]*\?&");
		window.location.href = urlNew.replace(pattern2, "&pageNo=1&");;
	}
	window.location.href = urlNew;
	return;
}

function refresh (){
	var url = window.location.href;
	var pattern2 = new RegExp(".*.html");
	var search=url.match(pattern2);
	window.location.href = search;
}

