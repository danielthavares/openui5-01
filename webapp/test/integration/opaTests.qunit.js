/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"sap/ui/app/exemplo01/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});
