function dateFormat(date,fmt) { 
	if(!date instanceof Date){
		throw "必须是日期格式"
	}
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

exports.dateFormat=dateFormat;
exports.parseStr=parseStr;


function parseStr(str) {
    var i=1;
    var subStr=str.split(" ");
    var dtArr = (subStr[0]).split("-");
    var mdtArr=subStr[1]?(subStr[1]).split(":"):[];
    if(!mdtArr||mdtArr.length==0){
        mdtArr=[0,0,0];
    }
    var stateDate=new Date(dtArr[0], dtArr[1], dtArr[2],mdtArr[0],mdtArr[1],mdtArr[2]);
    var month=stateDate.getMonth()+i-2; //得到月份
    stateDate.setMonth(month);
    return stateDate;
}
// console.warn(dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss"));