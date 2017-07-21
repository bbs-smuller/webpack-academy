class ExamplePlugin {
	apply(compiler) {
		compiler.plugin('run', (compiler, callback) => {
			console.log('WEBPACK is running...');
			callback();
		});
	}
}

module.exports = ExamplePlugin;
