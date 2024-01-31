sap.ui.define(
  ["./BaseController", "sap/ui/model/json/JSONModel"],

  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "qualificafornitori.qualificafornitori.controller.RicercaForn",
      {
        onInit: async function () {
          this.setMockData();
          debugger;
        },
        navToAnagrafica: function () {
          this.getRouter().navTo("Anagrafica");
        },
        setMockData: async function () {
          let objJSon = await fetch("/model/modMock.json");
          let data = await objJSon.json();
          let oModelAn = new JSONModel(data.azienda);
          this.setModel(oModelAn, "anagraficaModel");
          let oModelDoc = new JSONModel(data.documenti);
          this.setModel(oModelDoc, "docModel");
        },
      }
    );
  }
);
