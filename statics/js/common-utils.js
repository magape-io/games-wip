function keyConversion(returnDataObj,returnDataKey,ApiDataArrKey){var returnDataString=JSON.stringify(returnDataObj);if(returnDataKey.length>0)for(var i=0;i<returnDataKey.length;i++)returnDataString=returnDataString.replace(eval('/"'+returnDataKey[i]+'"/gi'),'"'+ApiDataArrKey[i]+'"');return JSON.parse(returnDataString)}function datagridheight(e,t){t||(t=30);var n=$(window).height()-$("#header").height()-t;$(e).css("height",n)}function percentWidth(e,t){if(t){var n=$("#"+t).width();return n*e}var n=$("#PerCentDiv").width();return n*e}function getParam(e){querystr=window.location.href.split("?");var t="",n=[];if(querystr[1]){var r=querystr[1].split("&");for(i=0;i<r.length;i++)n=r[i].split("="),e==n[0]&&(t=n[1])}return t}function isNull(e){if(e==undefined)return!0;if(e==null)return!0;e=$.trim(e);if(e=="")return!0;var t="^[ ]+$",n=new RegExp(t);return n.test(e)}function isInteger(e){var t=/^[-]{0,1}[0-9]{1,}$/;return t.test(e)}function isNumber(e){var t="^[0-9]+$",n=new RegExp(t);return e.search(n)!=-1?!0:!1}function checkNum(e){if(isNull(e))return!1;var t=e;for(var n=0;n<t.length;n++)if(t.charAt(n)<"0"||t.charAt(n)>"9")return!1;return t.charAt(0)=="0"?!1:!0}function isDecimal(e){if(isInteger(e))return!0;var t=/^[-]{0,1}(\d+)[\.]+(\d+)$/;return t.test(e)?RegExp.$1==0&&RegExp.$2==0?!1:!0:!1}function isEmail(e){var t=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;return t.test(e)?!0:!1}function isMoney(e){var t="^[0-9]+$",n="^[0-9]+[.][0-9]{0,3}$",r=new RegExp(t),i=new RegExp(n);return i.test(e)||r.test(e)?!0:!1}function isNumberOr_Letter(e){var t="^[0-9a-zA-Z_]+$",n=new RegExp(t);return n.test(e)?!0:!1}function isPhone(e){var t=/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{0,4}))?$/;return t.test(e)?!0:!1}function isNumberOr_MidLetter(e){var t="^[0-9a-zA-Z-]+$",n=new RegExp(t);return n.test(e)?!0:!1}function isNumberOrLetter(e){var t="^[0-9a-zA-Z]+$",n=new RegExp(t);return n.test(e)?!0:!1}function isChinaOrNumbOrLett(e){var t="^[0-9a-zA-Z一-龥]+$",n=new RegExp(t);return n.test(e)?!0:!1}function checkMobile(e){if(e>""){var t=/^1[3,5,8]{1}[0-9]{1}[0-9]{8}$/;return e.match(t)==null?!1:!0}return!1}function chkGreatByteLgth(e,t){return e.replace(/[^\x00-\xff]/g,"**").length>t?!0:!1}function toChnDigit(e){var t=parseInt(e);return t==0?"零":t==1?"一":t==2?"二":t==3?"三":t==4?"四":t==5?"五":t==6?"六":t==7?"七":t==8?"八":t==9?"九":""}function isIP(e){if(isNull(e))return!1;var t=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g;return t.test(e)&&RegExp.$1<256&&RegExp.$2<256&&RegExp.$3<256&&RegExp.$4<256?!0:!1}function stringReplaceAll(e,t){return raRegExp=new RegExp(e,"g"),this.replace(raRegExp,t)}function isValidStartEndDate(str1,str2){if(isNull(str1)||isNull(str2))return!0;var nStd=eval(str1.replaceAll("/","")),nEnd=eval(str2.replaceAll("/",""));return nEnd>=nStd}function trimSpace(e,t){if(isNull(e))return e;var n=e;while(n.substring(0,1)==t)n=n.substring(1).trim();while(n.substring(n.length-1,n.length)==t)n=n.substring(0,n.length-1).trim();return n}function pagePrint(){window.print()}function stringTrim(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function formatNum(e){var t=e;if(!/^(\+|-)?\d+(\.\d+)?$/.test(t))return t;var n=(new RegExp).compile("(\\d)(\\d{3})(,|\\.|$)");t+="";while(n.test(t))t=t.replace(n,"$1,$2$3");return t}function checkPhoneOrMobile(e,t,n,r,i,s){document.getElementById(s)&&(document.getElementById(s).style.display="none");var o=document.getElementById(e).value.trim(),u=document.getElementById(t).value.trim(),a=document.getElementById(n).value.trim(),f=document.getElementById(r).value.trim(),l=o+"-"+u;return isNull(a)||(l=l+"-"+a),l=="-"&&isNull(f)?(document.getElementById(i).innerHTML=getErrorMsgHid("W0052"),!1):l!="-"&&!isPhone(l)?(document.getElementById(i).innerHTML=getErrorMsgHid("W0137"),!1):(document.getElementById(i).innerHTML="",!isNull(f)&&!checkMobile(f)?(document.getElementById(i).innerHTML=getErrorMsgHid("W0136"),!1):(document.getElementById(i).innerHTML="",!0))}function checkPhoneOrMobileForTelArea(e,t,n,r,i,s){var o=document.getElementById(e).value.trim(),u=document.getElementById(t).value.trim(),a=document.getElementById(n).value.trim(),f=document.getElementById(r).value.trim();if(isNull(u)&&isNull(f))return!1;document.getElementById(s)&&(document.getElementById(s).style.display="none");var l=o+"-"+u;return isNull(a)||(l=l+"-"+a),l=="-"&&isNull(f)?(document.getElementById(i).innerHTML=getErrorMsgHid("W0052"),!1):l!="-"&&!isPhone(l)?(document.getElementById(i).innerHTML=getErrorMsgHid("W0137"),!1):(document.getElementById(i).innerHTML="",!isNull(f)&&!checkMobile(f)?(document.getElementById(i).innerHTML=getErrorMsgHid("W0136"),!1):(document.getElementById(i).innerHTML="",!0))}function checkFax(e,t,n,r,i){var s=document.getElementById(e).value.trim(),o=document.getElementById(t).value.trim(),u=document.getElementById(n).value.trim(),a=s+"-"+o;return isNull(u)||(a=a+"-"+u),a!="-"&&!isPhone(a)?(i&&document.getElementById(e).focus(),document.getElementById(r).innerHTML=getErrorMsgHid("W0113"),!1):(document.getElementById(r).innerHTML="",!0)}function checkPhoneOrMobileForFocus(e,t,n,r,i,s,o){document.getElementById(o)&&(document.getElementById(o).style.display="none");var u=document.getElementById(e).value.trim(),a=document.getElementById(t).value.trim(),f=document.getElementById(n).value.trim(),l=document.getElementById(r).value.trim(),c=u+"-"+a;return isNull(f)||(c=c+"-"+f),c=="-"&&isNull(l)?(s&&document.getElementById(e).focus(),document.getElementById(i).innerHTML=getErrorMsgHid("W0052"),!1):c!="-"&&!isPhone(c)?(s&&document.getElementById(e).focus(),document.getElementById(i).innerHTML=getErrorMsgHid("W0137"),!1):(document.getElementById(i).innerHTML="",!isNull(l)&&!checkMobile(l)?(s&&document.getElementById(r).focus(),document.getElementById(i).innerHTML=getErrorMsgHid("W0136"),!1):(document.getElementById(i).innerHTML="",!0))}function checkPhoneOrMobileMsg(e,t,n,r){var i=document.getElementById(e).value.trim(),s=document.getElementById(t).value.trim(),o=document.getElementById(n).value.trim(),u=document.getElementById(r).value.trim(),a=i+"-"+s;return isNull(o)||(a=a+"-"+o),a=="-"&&isNull(u)?(document.getElementById(e).focus(),putErrorMessage(getErrorMsgHid("W0052")),!1):a!="-"&&!isPhone(a)?(document.getElementById(e).focus(),putErrorMessage(getErrorMsgHid("W0137")),!1):(clearErrorMessage(),!isNull(u)&&!checkMobile(u)?(document.getElementById(r).focus(),putErrorMessage(getErrorMsgHid("W0136")),!1):(clearErrorMessage(),!0))}function checkFax(e,t,n,r){var i=document.getElementById(e).value.trim(),s=document.getElementById(t).value.trim(),o=document.getElementById(n).value.trim(),u=i+"-"+s;return isNull(o)||(u=u+"-"+o),u!="-"&&!isPhone(u)?(document.getElementById(e).focus(),document.getElementById(r).innerHTML=getErrorMsgHid("W0113"),!1):(document.getElementById(r).innerHTML="",!0)}function checkFaxMsg(e,t,n){var r=document.getElementById(e).value.trim(),i=document.getElementById(t).value.trim(),s=document.getElementById(n).value.trim(),o=r+"-"+i;return isNull(s)||(o=o+"-"+s),o!="-"&&!isPhone(o)?(document.getElementById(e).focus(),putErrorMessage(getErrorMsgHid("W0113")),!1):(clearErrorMessage(),!0)}function cancleSubmit(){return!1}function isValidMonth(monthStr){return monthStr.trim()==""?!0:isNumber(monthStr)?eval(monthStr)<1||eval(monthStr)>12?!1:!0:!1}function isValidYear(e){return e.trim()==""?!0:isNumber(e)?e.length!=4?!1:!0:!1}function clearForm(e){var t=document.forms[e],n=t.elements;for(var r=0;r<n.length;r++){var i=n[r];if(i.type=="submit")continue;if(i.type=="reset")continue;if(i.type=="button")continue;if(i.type=="hidden")continue;i.type=="text"&&(i.value=""),i.type=="textarea"&&(i.value=""),i.type=="password"&&(i.value=""),i.type=="checkbox"&&(i.checked=!1),i.type=="radio"&&(i.checked=!1),i.type=="select-multiple"&&(i.selectedIndex=0),i.type=="select-one"&&(i.selectedIndex=0)}}function linkTo(e){window.location.href=encodeURI(encodeURI(e))}function printStart(e){document.getElementById("WebBrowser").ExecWB(e,1)}function subStringToLength(e,t){return!isNull(e)&&e.length>t&&(e=e.substring(0,t)+"..."),e}function newCode(){var e=document.getElementById("validateCode");if(e!=null){var t="url('validatecode.jpg?t="+Math.random()+"')";e.style.backgroundImage=t}}function IsURL(e){var t="(^(https?|ftp|gopher|telnet|file|notes|ms-help):((//)|(\\\\))+[wd:#@%/;$()~_?+-=\\.&]*)",n=new RegExp(t);return n.test(e)?!0:!1}String.prototype.replaceAll=function(e,t,n){return RegExp.prototype.isPrototypeOf(e)?this.replace(e,t):this.replace(new RegExp(e,n?"gi":"g"),t)},String.prototype.replaceAll=stringReplaceAll,String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"").replace(/(^[\s\u3000]*)|([\s\u3000]*$)/g,"")},String.prototype.trimDoubleSpace=function(){return this.replace(/(^[\s\u3000]*)|([\s\u3000]*$)/g,"")};var Map=function(){this.entryArray=new Array};Map.prototype.put=function(e,t){if(!e||!t)return;var n=new Entry(e,t);if(this.hasContainKey(e))for(var r=0;r<this.entryArray.length;r++)if(this.entryArray[r].key==e){this.entryArray[r].value=t;return}this.entryArray.push(n)},Map.prototype.get=function(e){if(this.entryArray.length==0)return null;for(var t=0;t<this.entryArray.length;t++)if(this.entryArray[t].key==e)return this.entryArray[t].value;return null},Map.prototype.hasContainKey=function(e){if(this.entryArray.length==0)return!1;for(var t=0;t<this.entryArray.length;t++)if(this.entryArray[t].key==e)return!0;return!1},Map.prototype.hasContainValue=function(e){if(this.entryArray.length==0)return!1;for(var t=0;t<this.entryArray.length;t++)if(this.entryArray[t].value==e)return!0;return!1},Map.prototype.remove=function(e){if(!e)return null;for(var t=0;t<this.entryArray.length;t++)if(this.entryArray[t].key==e){var n=this.entryArray[t].value,r=this.entryArray.slice(0,t),i=this.entryArray.slice(t+1);return this.entryArray=r.concat(i),n}return null},Map.prototype.size=function(){return this.entryArray.length},Map.prototype.isEmpty=function(){return this.entryArray.length==0},Map.prototype.getEntryArray=function(){return this.entryArray},Map.prototype.keySet=function(){var e=new Array;for(var t=0;t<this.entryArray.length;t++)e.push(this.entryArray[t].key);return e};var Entry=function(e,t){this.key=e,this.value=t};Array.prototype.hasContainValue=function(e){for(var t=0;t<this.length;t++)if(this[t]==e)return!0;return!1}