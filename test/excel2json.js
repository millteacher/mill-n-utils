var min=require('../index');

var excelStr=`
常量值	常量名	含义
1	REST	休息
2	THE_EARLY	早班
3	THE_MIDDLE	中班

`;
var name=min.excel2table(excelStr);
console.log(name);