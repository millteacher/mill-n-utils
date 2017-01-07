var events = require('events'); //导入事件模块
// 实例化事件发射器
var emitter = new events.EventEmitter();



exports.bind=function (obj) {
	if(obj instanceof Object){
		obj.on = emitter.on;
		obj.emit = emitter.emit;
	}else{
		throw "event sub is not a object";
	}
	
}

