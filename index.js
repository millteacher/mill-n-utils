var mfs=require("./script/fs_factory")();
var dep=require("./script/write_dep");
var eve=require("./script/event_util");
var doName=require("./script/do_name");

var yaml=require("./script/yaml");

var mist=require("./script/minimist_util");
var js2mdTable=require("./script/js2mdTable");
var excel2json=require("./script/excel2json");
var base64=require("./script/base64");
var dateutil=require("./script/date");


exports.fs=mfs.fs;
exports.ejs=mfs.ejs;
exports.mfs=mfs.mfs;
exports.wdep=dep.writeDep;
exports.eventBind=eve.bind;
exports.doName=doName;

exports.yaml=yaml

exports.mist=mist;
exports.excel2json=excel2json;
exports.js2table=js2mdTable.js2mdTable;
exports.excel2table=js2mdTable.excel2mdTable;
exports.base64=base64;
exports.dateFormat=dateutil.dateFormat;
exports.dateParse=dateutil.parseStr;


