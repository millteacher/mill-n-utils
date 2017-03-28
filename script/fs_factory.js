var memFs = require('mem-fs');
var editor = require('mem-fs-editor');

var ejs = require('ejs');
var evu=require('./event_util');
var store = memFs.create();
var sfs = editor.create(store);

var msf={};
 msf.fs={};
 msf.ejs={};
 msf.mfs={};
 evu.bind(msf.fs);


//封装util也就是工具类，之后我们的逻辑就直接依赖自己的模块
module.exports=function  () {
	msf.mfs.write=function  (filepath, contents,callback) {
		var result= sfs.write(filepath, contents);
		sfs.commit(callback||function  () {
			msf.fs.emit('write-done');
		});
	};

	msf.mfs.writeJSON=function(filepath, contents) {
		var result= sfs.writeJSON(filepath, contents);
		sfs.commit(function  () {
			msf.fs.emit('write-json-done');
		});
	};
	msf.mfs.copy=function(filepath, newPath) {
		var result= sfs.copy(filepath, newPath);
		sfs.commit(function  () {
			msf.fs.emit('copy-done');
		});
	};
	msf.mfs.delete=function(filepath) {
		var result= sfs.delete(filepath);
		sfs.commit(function  () {
			msf.fs.emit('delete-done');
		});
	};
	msf.mfs.copyTpl=function(filepath, newPath,options) {
		var result= sfs.copyTpl(filepath, newPath,options);
		sfs.commit(function  () {
			msf.fs.emit('copy-done');
		});
	};
	//实现对sfs模块有选择性的克隆
	for (var i in sfs) {
		msf.fs[i]=sfs[i];
	};

	//加入ejs的渲染功能
	msf.ejs=ejs;

	return msf;
}