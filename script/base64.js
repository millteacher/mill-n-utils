function encode(txt) {

	var b = new Buffer(txt);
	return b.toString('base64');
}

function decode(txt) {
	var b = new Buffer(txt, 'base64')
	return b.toString('utf8');
}

function encodeHex(text) {
	var b = new Buffer(encode(text), 'base64')
	var s = b.toString('hex');
	return s;
}
function decodeHex(text) {
	var b = new Buffer(text, 'hex')
	var s = b.toString('utf8');
	return s;
}
module.exports={
	encode:encode,
	decode:decode,
	encodeHex:encodeHex,
	decodeHex:decodeHex
}


