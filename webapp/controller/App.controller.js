sap.ui.define([
	"sap/ui/app/exemplo01/controller/BaseController",
	"sap/ui/app/exemplo01/model/formatter"
], function(BaseController, formatter) {
	"use strict";

	return BaseController.extend("sap.ui.app.exemplo01.controller.App", {

		formatter: formatter,

		onInit: function () {

		}
	});
});