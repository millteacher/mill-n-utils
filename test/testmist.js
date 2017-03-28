var min=require('../index');
var option=min.mist();
console.log(option.mill);
var a;
$.post(url,data,function(data){
	a=data.age;
	abs.emit('loaddnoe');
});
abs.addListenner($("#div"));

var abs={};
abs.owner=[];

abs.emit=function(event_){
	this.owner.forEach(function(item,index,arr){
		item.doAction(event_);
	});
}

abs.addListenner=function(listenner){
	if(!doAction in listenner)return ;
	this.owner.push(listenner);
};

