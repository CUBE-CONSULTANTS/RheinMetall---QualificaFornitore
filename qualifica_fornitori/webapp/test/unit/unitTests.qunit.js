/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"qualifica_fornitori/qualifica_fornitori/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
