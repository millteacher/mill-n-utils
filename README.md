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

#### 写出文件
```
var min=require('../index');
var path=require('path');

describe("写出JSON文件成功",function  () {
	var file=path.resolve(__dirname,"./test.json");
	beforeAll(function  () {
	
		min.fs.writeJSON(file,{
			"name":"mill",
			"age" :30
		});
		min.fs.copy(
			file,"./test1.json"
		);
	
	}) ;
	afterAll(function  () {
		min.fs.delete(file);
		min.fs.commit(function  () {
			
		});
	}) ;
	it("文件存在",function  () {
		expect(min.fs.exists(file)).toBe(true);
		expect(min.fs.exists("./test1.json")).toBe(true);
	});
});

```

#### excel转成markdown的表格
```
var min=require('../index');

var excelStr=`

编码	父级	说明		响应格式
data		数据集合		List<BusSupplierInfo> json格式
supplierId	data	供应商id		Long
storeId	data	店铺id		Long
supplierCode	data	供应商简码		Long
supplierName	data	供应商名称		String




`;
var name=min.excel2table(excelStr);
console.log(name);
```

#### excel转成json
```
var min=require('../index');

var excelStr=`

编码	父级	说明		响应格式
data		数据集合		List<BusSupplierInfo> json格式
supplierId	data	供应商id		Long
storeId	data	店铺id		Long
supplierCode	data	供应商简码		Long
supplierName	data	供应商名称		String

`;
var name=min.excel2json(excelStr);
console.log(name);
```

#### base64的编码和解码
```
var min=require('../index');

let temp=min.base64.encode('mill');
console.log('encode',temp);

temp=min.base64.decode(temp);
console.log('decode',temp);

temp=min.base64.encodeHex(temp);
console.log('encodeHex',temp);

temp=min.base64.decodeHex(temp);
console.log('decodeHex',temp);
```

#### 日期格式化
```
var min=require('../index');

let temp=min.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss");

console.log(temp);


```
#### 日期解析
> 将格式化的字符串解析成为一个时间对象
2017-12-22 00:00:00或者2017-12-22这样的格式都可以
```
let index=require('../index.js');
	let date=	index.dateParse('2017-12-22 00:00:00');
	console.log(index.dateFormat(date,"yyyy-MM-dd hh:mm:ss"));
```