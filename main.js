      require(["esri/views/SceneView", "esri/WebScene"], function(SceneView, WebScene) {
        var titleDiv = document.getElementById("titleDiv");

        /************************************************************
         * Creates a new WebScene instance. A WebScene must reference
         * a PortalItem ID that represents a WebScene saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebScene from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
        var scene = new WebScene({
          portalItem: {
            // autocasts as new PortalItem()
            id: "48338ec129474e90bfa674976a00445b"
          }
        });

        /************************************************************
         * Set the WebScene instance to the map property in a SceneView.
         ************************************************************/
        var view = new SceneView({
          map: scene,
          container: "viewDiv",
          padding: {
            top: 40
          }
        });
		
        view.when(function() {
          // when the scene and view resolve, display the scene's
          // title in the DOM
          var title = scene.portalItem.title;
          titleDiv.innerHTML = title;
        });
      });