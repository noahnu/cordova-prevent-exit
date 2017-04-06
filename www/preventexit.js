var exec = require('cordova/exec');

function PreventExit() {
	this.enable = function () {
		exec(null, null, "PreventExit", "enable", []);
	};
	
	this.disable = function () {
		exec(null, null, "PreventExit", "disable", []);
	}
}

PreventExit.install = function () {
	window.plugins = window.plugins || {};
	window.plugins.preventExit = new PreventExit();
	return window.plugins.preventExit;
};

cordova.addConstructor(PreventExit.install);
