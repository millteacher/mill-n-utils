var min=require('../index');

var excelStr=`

属性名	说明	参数位置	数据类型	默认值	必输项	请求格式
storeId	店铺id		Long		TRUE	
supplierId	供应商id	供应商信息表主键ID	Long		TRUE	
inventoryInfoId	原材料id	原材料信息表主键ID	Long		TRUE	
purchasingNum	采购数量		int		TRUE	
unitMeasure	计量单位1 表示kg， 2 表示个 		int		TRUE	
purchasingPrice	采购单价		decimal(10,2)		TRUE	
purchaserId	采购人id	店铺员工信息表主键ID	Long			
receiveId	收货人id	店铺员工信息表主键ID	Long			







`;
var name=min.excel2table(excelStr);
console.log(name);