function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    	$(".shares").show();
        return true;
    }else{
		window.location.href='http://ttk.tuituiyouxi.com:8080/ttgame/package/tuitui/download?channel=mobile';
        return false;
    }
}

function page(){ 
		$(".shares").hide();    
}