sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createHelloModel: function() {
			var data = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(data);
			//oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		},

		createEmployeesModel: function(){
			var oModel = new JSONModel();
			oModel.loadData("./model/data/EmployeesListData.json")
			return oModel;
		}
	};
});