
//tab栏切换
function changeState(num){
  $('.tab0').hide();
  $('.tab0').eq(num).show();
}
//显示对话框
function showDiv(obj,num){
	      if(num==1){
              $('.diogle').show();
              $("#letterSimpleBtn").addClass("closingClass");
              $('.'+obj).show();
              if(obj=="tree" || obj=="trees"){
                  $("#showSelectedOrg").show();
			  }
		  }
		  else if(num==0){
              $('.diogle').show();
              $('.'+obj).show();
              $("#letterSimpleBtn").addClass("closingClass");
              $("#showOrNotbtn").hide();
		  }
    	}
function showDiv_letter(obj,num){
	
	if(num==0){
		$('#options').hide();
        $('#opxz').hide();
        $("#letterSimpleBtn").show();
	}else if(num==1){
        $('#options').show();
        $('#opxz').hide();
        $("#letterSimpleBtn").hide();
	}
	else{
		$('#options').show();
        $('#opxz').show();
        $("#letterSimpleBtn").hide();
	}
	$('#form_letter0').show();
	$('#form_letter1').hide();
	$('.diogle').show();
    $('.'+obj).show();
	
}
function hideThisDiv(obj){
	if($("#letterSimpleBtn").hasClass("closingClass")){

	}
	else {
        $('.diogle').hide();
	}
	$("."+obj).hide();
}
function edit_letter(){
	$('#form_letter0').hide();
	$('#form_letter1').show();
}
//隐藏对话框
function hideDiv(obj){
          $('.diogle').hide();
          $('.'+obj).hide();
          $("#letterSimpleBtn").removeClass("closingClass");
    	}
function hideDiv_o(obj){
          $('.'+obj).hide();
    	}
//显示模块
function showDetail(obj){
	$(obj).show();
}
//获取链接里的参数
 function getParameter(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#\\?]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
 function getCookie (name) {
        reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
            val = document.cookie.match(reg);
        return val ? (val[2] ? unescape(val[2]) : "") : null;
    }
function setCookie (name, value, expires, path, domain, secure) {
        console.log(name,value);
        var exp = new Date(), expires = arguments[2] || null, path = arguments[3] || "/", domain = arguments[4] || null, secure = arguments[5] || false;
        expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
        document.cookie = name + '=' + escape(value) + ( expires ? ';expires=' + exp.toGMTString() : '') + ( path ? ';path=' + path : '') + ( domain ? ';domain=' + domain : '') + ( secure ? ';secure' : '');
       console.log('--'+document.cookie+'--');
    }
var htmls='<div class="header" >'+
					'<a class="logo" href="/paymanage/notice#" ><img src="./webapp/logo_n.jpg" ></a>'+
					'<div class="headSel" >'+
						'<div class="headNm" >'+
							'<span >党委</span>'+
						'</div>'+
						'<div class="downContent" style="display:none;">'+
							'<ul>'+
								'<li class="li1"><a href="relations_out.html?tabId=0">党委</a></li>'+
								'<li><a href="relations_out.html?tabId=1">党总支</a></li>'+
								'<li><a href="relations_out.html?tabId=2">党支部</a></li>'+
								'<li><a href="party_number.html?tabId=3">党员</a></li>'+
							'</ul>'+
						'</div>'+
					'</div>'+
				'</div>';
$('#headerContent').html(htmls);

$(function(){
     if(getParameter('tabId')){
         var status=getParameter('tabId');
         if(status==0){
			$('.headNm').find('span').text('党委');
			}else if(status==1){
    		   $('.headNm').find('span').text('党总支');
			}else if(status==2){
			   $('.headNm').find('span').text('党支部');
			}else{
    		   $('.headNm').find('span').text('党员');
			}
     }else{
         $('.headNm').find('span').text('党委');
     }
	//状态 
	$('.diogle').click(function(event) {
    		$(this).hide();
    		$('.modify,.trees,.shenp,.produ,.edits').hide();
    	});

	$('.defined-tree .easyui-panel').css({'width':'auto','padding':0});

	$('.headSel').click(function(event) {
		/* Act on the event */
		$('.downContent').slideToggle();

	});
	$('.downContent li a').click(function(event) {
		/* Act on the event */
		$('.headNm').html($(this).text());
		
	});
})