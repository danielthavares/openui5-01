sap.ui.define([
	"sap/ui/app/exemplo01/controller/BaseController",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"../model/formatter"
], function (BaseController, MessageBox, MessageToast, formatter) {
	"use strict";

	return BaseController.extend("sap.ui.app.exemplo01.controller.Home", {

		formatter: formatter,

		onInit: function () {
			console.log('init home');
		},
		onOpenDialog: function () {
			this.getOwnerComponent().openHelloDialog();
		},
		onDisplayNotFound: function () {
			//display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget: "home"
			});
		},
		onNavToEmployees : function () {
			this.getRouter().navTo("employeeList");
		},
		onConfirmationMessageBoxPress: function () {
			MessageBox.confirm("Approve purchase order 12345?", {
				actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
				emphasizedAction: MessageBox.Action.OK,
				onClose: function (sAction) {
					MessageToast.show("Action selected: " + sAction);
				}
			});
		},
	});
});