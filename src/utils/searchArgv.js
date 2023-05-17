const argv = process.argv.slice(2);

module.exports = (message, getValue) => {
    const bool = Boolean(getValue);
    const st = message.startsWith("-") ? message : `-${ message }`;

    if (argv.includes(st)) {
        // Console.log(bool);
        if (bool) {
            var index = argv.findIndex(function (argv) {
                return argv.includes(st);
            });
			
            const res = argv[index + 1];
            // Console.log(res);
            return res;
        } else {
            return true;
        }
    }
};