/**
 * Created by jiangyiming on 4/15/16.
 */

window.onload = function () {
    var oName = document.getElementById("name");
    var oPsw = document.getElementById("psw");
    var oPsw2 = document.getElementById("psw2");
    var oEmail = document.getElementById("email");
    var oPhone = document.getElementById("phone");
    addEventHandler(oName,"focus",function(){
        document.getElementById("spanName").style.visibility="visible";
    });
    addEventHandler(oName,"blur",checkName);
    addEventHandler(oPsw,"focus",function(){
        document.getElementById("spanPsw").style.visibility="visible";
    });
    addEventHandler(oPsw,"blur",checkPsw);
    addEventHandler(oPsw2,"focus",function(){
        document.getElementById("spanPsw2").style.visibility="visible";
    });
    addEventHandler(oPsw2,"blur",checkSame);
    addEventHandler(oEmail,"focus",function(){
        document.getElementById("spanEmail").style.visibility="visible";
    });
    addEventHandler(oEmail,"blur",checkEmail);
};

function checkEmail(){
    
}

function checkSame(){
    var oPsw = document.getElementById("psw");
    var oSpanpsw2=document.getElementById("spanPsw2");
    var str = this.value.trim();
    var length = getLength(str);
    if (length == 0) {
        oSpanpsw2.innerHTML = "密码不能为空";
        oSpanpsw2.style.color = "red";
        this.style.borderColor = "red";
    }else if (this.value != oPsw.value){
        oSpanpsw2.innerHTML = "两次输入不一致";
        oSpanpsw2.style.color = "red";
        this.style.borderColor = "red";
    } else if(oPsw.style.borderColor=="green"){
        oSpanpsw2.innerHTML = '两次密码相同！';
        oSpanpsw2.style.color = "green";
        this.style.borderColor = "green";
    } else{
        oSpanpsw2.innerHTML = "首次密码输入不正确";
        oSpanpsw2.style.color = "red";
        this.style.borderColor = "red";
    }
}
function checkPsw(){
    var oSpanpsw=document.getElementById("spanPsw");
    var str=this.value.trim();
    var length = getLength(str);
    if (length == 0) {
        oSpanpsw.innerHTML = "密码不能为空";
        oSpanpsw.style.color = "red";
        this.style.borderColor = "red";
    } else if (length < 6) {
        oSpanpsw.innerHTML = "输入的字数少于6位";
        oSpanpsw.style.color = "red";
        this.style.borderColor = "red";
    } else if (length > 16) {
        oSpanpsw.innerHTML = "输入的字数多于16位";
        oSpanpsw.style.color = "red";
        this.style.borderColor = "red";
    }else {
        var reg = /[^A-Za-z0-9]/g;
        if (reg.test(str)) {
            oSpanpsw.innerHTML = '含有非法字符！';
            oSpanpsw.style.color = "red";
            this.style.borderColor = "red";

        } else {
            oSpanpsw.innerHTML = '密码输入格式正确！';
            oSpanpsw.style.color = "green";
            this.style.borderColor = "green";
        }
    }
}
function getLength(str){
    return str.replace(/[^\x00-\xff]/g, "ym").length;//统计用户输入的字数,接下来进行一系列判断
}
function checkName(){
    var oSpanname=document.getElementById("spanName");
    var str=this.value.trim();
    var length = getLength(str);
    if (length == 0) {
        oSpanname.innerHTML = "名称不能为空";
        oSpanname.style.color = "red";
        this.style.borderColor = "red";
    } else if (length < 4) {
        oSpanname.innerHTML = "输入的字符少于4位";
        oSpanname.style.color = "red";
        this.style.borderColor = "red";
    } else if (length > 16) {
        oSpanname.innerHTML = "输入的字符多于16位";
        oSpanname.style.color = "red";
        this.style.borderColor = "red";
    } else {
        var reg = /[^\w\u4e00-\u9fa5]/g;//判断用户是否有输入中英文数字下划线之外的内容

        if (reg.test(str)) {
            oSpanname.innerHTML = '含有非法字符！';
            oSpanname.style.color = "red";
            this.style.borderColor = "red";

        } else {
            oSpanname.innerHTML = '名称输入格式正确！';
            oSpanname.style.color = "green";
            this.style.borderColor = "green";
        }

    }
}

function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, hanlder);
    } else {
        ele["on" + event] = hanlder;
    }
}