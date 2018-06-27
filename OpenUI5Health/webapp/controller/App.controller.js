sap.ui.define([
	'jquery.sap.global',
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (jQuery,Controller, MessageToast, JSONModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
onInit : function (evt) {
			// set mock model
			var sPath = jQuery.sap.getModulePath("sap.ui.demo.walkthrough.controller", "/data.json");
			var oModel = new JSONModel(sPath);
			this.getView().setModel(oModel);
		},

		handleEditPress : function (evt) {
			var oTileContainer = this.byId("container");
			var newValue = !oTileContainer.getEditable();
			oTileContainer.setEditable(newValue);
			evt.getSource().setText(newValue ? "Done" : "Edit");
		},

		handleBusyPress : function (evt) {
			var oTileContainer = this.byId("container");
			var newValue = !oTileContainer.getBusy();
			oTileContainer.setBusy(newValue);
			evt.getSource().setText(newValue ? "Done" : "Busy state");
		},

		handleTileDelete : function (evt) {
			var tile = evt.getParameter("tile");
			evt.getSource().removeTile(tile);
		}
   });
});
