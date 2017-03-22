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