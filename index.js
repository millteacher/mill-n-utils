var mfs=require("./script/fs_factory")();
var dep=require("./script/write_dep");
var eve=require("./script/event_util");
var doName=require("./script/do_name");
var mist=require("./script/minimist_util");

exports.fs=mfs.fs;
exports.ejs=mfs.ejs;
exports.mfs=mfs.mfs;
exports.wdep=dep.writeDep;
exports.eventBind=eve.bind;
exports.doName=doName;
exports.mist=mist;
