var mfs=require("./script/fs_factory")();
var dep=require("./script/write_dep");

exports.fs=mfs.fs;
exports.ejs=mfs.ejs;
exports.wdep=dep.writeDep;
