var ejs = require('ejs');
var excel2js=require('./excel2json.js');

var template=`
<%
	var titles=Object.keys(arr[0]);
	titles.forEach(function (item,index,arr) {
		%>|<%=item%><%
	});
%>|
<%
	titles.forEach(function (item,index,arr) {
		%>|:--<%
	});
%>|
<%
	arr.forEach(function (item,index,arr) {
		if(index>=0){
			titles.forEach(function (it,index,arr) {
				%>|<%=item[it]%><%
			});%>|
<%
			
		}
		
	});
%>`
function js2mdTable(arr) {
	// console.log(arr[0]);
	return ejs.render(template,{arr:arr});
}

function excel2mdTable(tableStr) {
	var arr=excel2js(tableStr);
	return ejs.render(template,{arr:arr});
}

exports.excel2mdTable=excel2mdTable;
exports.js2mdTable=js2mdTable;