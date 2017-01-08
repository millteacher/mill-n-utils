# mill-n-utils

关于nodejs的一些工具模块封装
只为了简化操作

```
npm install mill-n-utils --save-dev
```
#### 继承事件处理对象

```
var min=require('../index');

var temp={};
min.eventBind(temp);
temp.on('done',function (name,age) {
	console.log("name:%s;age:%d;",name,age);
});

temp.emit('done',"mill",29)
```

#### 变量的命名
支持大写命名up、驼峰命名tf、pascal命名和下划线xhx命名
```
var name=min.doName.up('get an apple');
console.log(name);//GET_AN_APPLE
```

#### 接收控制台参数
```
var option=min.mist();
console.log(option.mill);
```
控制台输入
```
$node testmist.js --mill aaa
> aaa
```