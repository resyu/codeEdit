	function chah(){
		document.getElementById("do").innerHTML=document.getElementById("eh").value;
	}
   function chac(){
		var strs=document.getElementById("ec").value;
		document.getElementsByTagName("style")[0].innerHTML=strs;	
	}
	function chaj(){
		var strj=document.getElementById("ej").value;
		document.getElementsByTagName("script")[0].innerHTML=strj;
	}
	function ecfo(){
		document.getElementById("ec").focus();
	}
	function ejfo(){
		document.getElementById("ej").focus();
	}
	function editR(){
	  var texaH=document.documentElement.clientHeight;
		var texaW=document.documentElement.clientWidth;
		var weh=document.getElementById("eh");
		var wec=document.getElementById("ec");
		var wej=document.getElementById("ej");
		weh.rows=texaH*0.02266289;
		weh.cols=texaW*0.02734375;
		wec.rows=texaH*0.02266289;
		wec.cols=texaW*0.02734375;
		wej.rows=texaH*0.02266289;
		wej.cols=texaW*0.02734375;
	  // document.styleSheets[0].rules[0].style.display = "inline"; [---IE---] 
	    var ddh=texaH*0.02847;
		with(document.styleSheets[0].cssRules[10].style){
		height=ddh+"em";
		}
	}	
	function doRe(){
	
		location.reload();
	}
