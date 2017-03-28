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