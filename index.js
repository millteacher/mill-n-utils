var mfs=require("./script/fs_factory")();
var dep=require("./script/write_dep");
var eve=require("./script/event_util");
var doName=require("./script/do_name");
var yaml=require("./script/yaml");

exports.fs=mfs.fs;
exports.ejs=mfs.ejs;
exports.wdep=dep.writeDep;
exports.eventBind=eve.bind;
exports.doName=doName;
exports.yaml=yaml
