sap.ui.define(
  ["./BaseController"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend(
      "qualificafornitori.qualificafornitori.controller.Master",
      {
        onInit: function () {},

        navToMaster: function () {
          this.getRouter().navTo("Master");
        },

        navToRicerca: function () {
          this.getRouter().navTo("RicercaForn");
        },

        navToDocumenti: function () {
          this.getRouter().navTo("Documenti");
        },

        navToTemplate: function () {
          this.getRouter().navTo("Template");
        }
      }
    );
  }
);
