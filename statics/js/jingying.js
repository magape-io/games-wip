function register(e){var t=$("#username").val();if(t==""||t=="请输入姓名")return alert("请输入姓名！"),$("#username").focus(),!1;var n=$("#mobile").val();if(n==""||n=="请输入你手机号码")return alert("请输入你手机号码！"),$("#mobile").focus(),!1;var r=/^1[3|4|5|8][0-9][0-9]{8}$/;if(!r.test(n))return alert("手机号码格式错误"),$("#mobile").focus(),!1;var i=price=select3="",s=$("#year").val(),o=$("#month").val(),u=$("#sex").val(),a=$("#district").val();i=$("input[name=car]:checked").val(),price=$("input[name=price]:checked").val(),select3=$("input[name=source]:checked").val();var f={json:JSON.stringify({data:{username:t,mobile:n,year:s,month:o,sex:u,district:a,car:i,price:price,select3:select3}})};$.ajax({type:"POST",url:"registerok.php?returnurl="+e,data:f,timeout:9e4,cache:!1,dataType:"json",success:function(e){if(e.isok!="true")return alert(e.msg),!1;alert("注册成功"),location.href="./middleware.php?returnurl="+e.url}})}function sendPromise(){var e=$.trim($("#address").val());if(e==""||e=="例：上海")return alert("地点不能为空！"),$("#address").focus(),!1;if(e.length>50)return alert("地点不能超过50个字符！"),$("#address").focus(),!1;var t=$.trim($("#people").val());if(t==""||t=="例：亲爱的父母")return alert("人物不能为空！"),$("#people").focus(),!1;if(t.length>20)return alert("人物不能超过20个字符！"),$("#people").focus(),!1;var n=$.trim($("#myproise").val());if(n==""||n=="例：一次美妙的旅行")return alert("心愿不能为空！"),$("#myproise").focus(),!1;if(n.length>50)return alert("完成的心愿不能超过50个字符！"),$("#myproise").focus(),!1;var r=$("#remark").val(),i=$("#value4").val();r=="心情日志："&&(r="");var s={json:JSON.stringify({data:{address:e,people:t,myproise:n,remark:r,value4:i}})};$.ajax({type:"POST",url:"myPromise.php",data:s,timeout:9e4,cache:!1,dataType:"json",success:function(e){if(e.isok!="true")return alert(e.msg),!1;location.href="./share.php"}})}function customerVisiting(){$.ajax({type:"POST",url:"customerVisiting.php",data:"",timeout:9e4,cache:!1,dataType:"json",success:function(e){}})}function applyDrive(){var e=$.trim($("input[name=username]").val());if(e=="")return alert("请输入姓名！"),$("input[name=username]").focus(),!1;var t=$.trim($("input[name=mobil]").val());if(t=="")return alert("请输入你手机号码！"),$("input[name=mobil]").focus(),!1;var n=/^1[3|4|5|8][0-9][0-9]{8}$/;if(!n.test(t))return alert("手机号码格式错误"),$("input[name=mobil]").focus(),!1;time=$("input[name=time]:checked").val();var r=getParam("from");if(isNull(r)||r!="web")r="wechat";var i={json:JSON.stringify({data:{username:e,mobile:t,time:time,_channel:r}})};$.ajax({type:"POST",url:"ajax_exper.php",data:i,timeout:9e4,cache:!1,dataType:"json",success:function(e){if(e.isok!="true")return alert(e.msg),!1;$(".experBoxUp").hide(),alert(e.msg),$("html,body").animate({scrollTop:$("#experPhotos").offset().top},1e3)}})}var Cookie={SetCookie:function(e,t,n,r){var i=new Date;i.setTime(i.getTime()+n*1e3),document.cookie=e+"="+escape(t)+"; expires="+i.toGMTString()+(r?";path="+r:"")},GetCookie:function(e){var t=e+"=",n=t.length,r=document.cookie.length,i=0;while(i<r){var s=i+n;if(document.cookie.substring(i,s)==t)return this.GetCookieVal(s);i=document.cookie.indexOf(" ",i)+1;if(i==0)break}return""},GetCookieVal:function(e){var t=document.cookie.indexOf(";",e);return t==-1&&(t=document.cookie.length),unescape(document.cookie.substring(e,t))},IsEmail:function(e){var t=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;return t.exec(e)?!0:!1}}