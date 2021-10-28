const argv = process.argv.slice(2);

module.exports = (message, getValue) => {
	const bool = getValue ? true : false;
	const st = message.startsWith("-") ? message : `-${ message }`;

	if (argv.includes(st)) {
		//console.log(bool);
		if (bool) {
			var index = argv.findIndex(function (argv) {
				return argv.includes(st);
			});
			
			const res = argv[index + 1];
			//console.log(res);
			return res;
		} else {
			return true;
		}
	}
};