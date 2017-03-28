
function excel2js(tableStr) {
	var rows=tableStr.trim().split("\n");
	var titleRow=rows[0].split("\t");
	var result=[];
	rows.forEach(function (item,index,arr) {
		if (index>0) {
			result.push(createRowObj(item,titleRow));
		}
	});
	return result;
}


function createRowObj(rowStr,titleRow) {
	var rowArr=rowStr.split("\t");
	var obj={};
	titleRow.forEach(function (item,index,arr) {
		obj[item]=rowArr[index];
	});
	return obj;
}


module.exports=excel2js;