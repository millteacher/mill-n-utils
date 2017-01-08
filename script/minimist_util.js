var minimist = require('minimist');

module.exports=function  (knownOptions) {
	if (knownOptions) {
		return minimist(process.argv.slice(2), knownOptions);
	};
	return minimist(process.argv.slice(2));
}