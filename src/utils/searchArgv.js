const argv = process.argv.slice(2);

module.exports = async (message) => {
	const st = `-${ message }`;
	if (argv.includes(st)) {
		var index = argv.findIndex(function (argv) {
			return argv.includes(st);
		});
		const res = argv[index + 1]; // .slice(lookingFor.length);
		console.log(res);
		return res;
	}
};