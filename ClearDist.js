const Path = require('path');
const RimRaf = require('rimraf');

class ClearDist {
	apply(compiler) {
		compiler.plugin('run', (compiler, callback) => {
			const distPath = Path.join(__dirname, 'dist');
			RimRaf(distPath, () => {
				console.log('Clean path: ' + distPath);
			});

			callback();
		});
	}
}

module.exports = ClearDist;
