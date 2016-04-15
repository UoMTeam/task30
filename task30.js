/**
 * Created by jiangyiming on 4/15/16.
 */

window.onload = function () {
    var oName = document.getElementById("name");
    var oPsw = document.getElementById("psw");
    var oPsw2 = document.getElementById("psw2");
    var oEmail = document.getElementById("email");
    var oPhone = document.getElementById("phone");
    addEventHandler(oName, "focus", function () {//添加事件们~~~
        document.getElementById("spanName").style.visibility = "visible";
    });
    addEventHandler(oName,"keyup",show);
    addEventHandler(oName, "blur", checkName);
    addEventHandler(oPsw, "focus", function () {
        document.getElementById("spanPsw").style.visibility = "visible";
    });
    addEventHandler(oPsw, "blur", checkPsw);
    addEventHandler(oPsw2, "focus", function () {
        document.getElementById("spanPsw2").style.visibility = "visible";
    });
    addEventHandler(oPsw2, "blur", checkSame);
    addEventHandler(oEmail, "focus", function () {
        document.getElementById("spanEmail").style.visibility = "visible";
    });
    addEventHandler(oEmail, "blur", checkEmail);
    addEventHandler(oPhone, "focus", function () {
        document.getElementById("spanPhone").style.visibility = "visible";
    });
    addEventHandler(oPhone, "blur", checkPhone);
};
function submit() {
    var oName = document.getElementById("name");
    var oPsw = document.getElementById("psw");
    var oPsw2 = document.getElementById("psw2");
    var oEmail = document.getElementById("email");
    var oPhone = document.getElementById("phone");
    if (totalCheck(oName) && totalCheck(oPsw) && totalCheck(oPsw2) && totalCheck(oEmail) && totalCheck(oPhone)) {
        alert("提交成功");
    } else {
        alert("输入有误,请按要求填写每项信息");
    }
}
function show(){
    var oSpanname = document.getElementById("spanName");
    oSpanname.style.color="#cbcbcb";
    oSpanname.innerHTML="已输入"+getLength(this.value)+"个字符";
}
function totalCheck(v) {
    if (v.style.borderColor == "green") {
        return true;
    }
    return false;
}
function checkPhone() {//验证手机号码
    var oSpanphone = document.getElementById("spanPhone");
    var str = this.value.trim();
    var length = getLength(str);
    if (length == 0) {
        oSpanphone.innerHTML = "手机不能为空";
        oSpanphone.style.color = "red";
        this.style.borderColor = "red";
    } else {
        var reg = /^1\d{10}$/;
        if (!reg.test(str)) {
            oSpanphone.innerHTML = '请输入正确的手机号码';
            oSpanphone.style.color = "red";
            this.style.borderColor = "red";
        } else {
            oSpanphone.innerHTML = '手机输入正确！';
            oSpanphone.style.color = "green";
            this.style.borderColor = "green";
        }
    }
}
function checkEmail() {//验证邮箱
    var oSpanemail = document.getElementById("spanEmail");
    var str = this.value.trim();
    var length = getLength(str);
    if (length == 0) {
        oSpanemail.innerHTML = "邮箱不能为空";
        oSpanemail.style.color = "red";
        this.style.borderColor = "red";
    } else {
        var reg = /^([a-zA-Z0-9_-])+@([A-Za-z0-9]+[-.])+[A-Za-z]{2,4}$/;
        if (!reg.test(str)) {
            oSpanemail.innerHTML = '请输入正确的邮箱';
            oSpanemail.style.color = "red";
            this.style.borderColor = "red";

        } else {
            oSpanemail.innerHTML = '邮箱输入正确！';
            oSpanemail.style.color = "green";
            this.style.borderColor = "green";
        }
    }
}

function checkSame() {//验证两次输入的密码是否相同
    var oPsw = document.getElementById("psw");
    var oSpanpsw2 = document.getElementById("spanPsw2");
    var str = this.value.trim();
    var length = getLength(str);
    if (length == 0) {
        oSpanpsw2.innerHTML = "密码不能为空";
        oSpanpsw2.style.color = "red";
        this.style.borderColor = "red";
    } else if (this.value != oPsw.value) {
        oSpanpsw2.innerHTML = "两次输入不一致";
        oSpanpsw2.style.color = "red";
        this.style.borderColor = "red";
    } else if (oPsw.style.borderColor == "green") {
        oSpanpsw2.innerHTML = '两次密码相同！';
        oSpanpsw2.style.color = "green";
        this.style.borderColor = "green";
    } else {
        oSpanpsw2.innerHTML = "首次密码输入不正确";
        oSpanpsw2.style.color = "red";
        this.style.borderColor = "red";
    }
}
function checkPsw() { //验证密码
    var oSpanpsw = document.getElementById("spanPsw");
    var str = this.value.trim();
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
    } else {
        var reg = /[^A-Za-z0-9]/g;//判断用户是否输入了大小写字母和数字以外的字符
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
function getLength(str) {//统计用户输入的字数,接下来进行一系列判断
    return str.replace(/[^\x00-\xff]/g, "ym").length;
}
function checkName() {
    var oSpanname = document.getElementById("spanName");
    var str = this.value.trim();
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

function addEventHandler(ele, event, hanlder) {//浏览器兼容
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, hanlder);
    } else {
        ele["on" + event] = hanlder;
    }
}