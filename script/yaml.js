var yaml = require('js-yaml');
var fs   = require('fs');



function write(path) {
	try {
	  fs.writeFileSync(
	    path,
	    yaml.dump(obj),
	    'utf8'
	  );
	} catch (e) {
	  console.log(e);
	}
}



function read(path) {
	try {
	  var doc = yaml.load(
	    fs.readFileSync(path, 'utf8')
	  );
	  return doc;
	} catch (e) {
	  console.log(e);
	}
}

module.exports={
	write:write,
	read:read
}