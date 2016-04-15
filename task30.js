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
};

function checkName(){
    var oSpanname=document.getElementById("spanName");
    var str=this.value.trim();
    var length = str.replace(/[^\x00-\xff]/g, "ym").length;//统计用户输入的字数,接下来进行一系列判断
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