var mfs=require("./script/fs_factory")();
var dep=require("./script/write_dep");
var eve=require("./script/event_util");

exports.fs=mfs.fs;
exports.ejs=mfs.ejs;
exports.wdep=dep.writeDep;
exports.eventBind=eve.bind;
