sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "./BaseController",
    "sap/ui/model/json/JSONModel",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, BaseController, JSONModel) {
    "use strict";

    return BaseController.extend(
      "qualificafornitori.qualificafornitori.controller.Home",
      {
        onInit: async function () {
          debugger;
          let objJSon = await fetch("/model/modMock.json");
          let data = await objJSon.json();

          let oModelAn = new JSONModel(data.azienda);
          let oModelDoc = new JSONModel(data.documenti)
          this.setModel(oModelAn, "anagraficaModel");
          this.setModel(oModelDoc, "docModel");
        },
        onListItemPress: function (oEvent) {
          debugger;
          var sToPageId = oEvent
            .getParameter("item")
            .getCustomData()[0]
            .getValue();
          this.getSplitAppObj().toDetail(this.createId(sToPageId));
        },
        getSplitAppObj: function () {
          debugger;
          var result = this.byId("SplitApp");
          if (!result) {
            Log.info("SplitApp object can't be found");
          }
          return result;
        },
        onNavToDetail: function (oEvent) {
          this.getSplitAppObj().to(this.createId("formAnagrafica"));
        },
        onPressDetailBack: function () {
          this.getSplitAppObj().backDetail();
        },
      }
    );
  }
);
