var min=require('../index');

var aaa={};
min.eventBind(aaa);
aaa.on('done',function (name,age) {
	console.log("name:%s;age:%d;",name,age);
});

aaa.emit('done',"mill",29)