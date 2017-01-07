// 下划线命名
function xhx (name) {
	name=name.trim().toLowerCase();
	return name.replace(/\s/g,"_");
}
//驼峰命名法
function tf (name) {
	name=xhx(name);
	return name.replace(/_(\w)/g,function  (word) {
		return word.substring(1).toUpperCase();
	});
}
function upper(name) {
	var name=xhx(name);
	return name.toUpperCase();
}
exports.pascal=function pascal (name) {
	var name=tf(name);
	return name.substr(0,1).toUpperCase()+name.substring(1);
}
exports.xhx=xhx;
exports.tf=tf;
exports.up=upper;