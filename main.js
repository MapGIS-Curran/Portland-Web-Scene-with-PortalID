require(["esri/views/SceneView", "esri/WebScene"], 
function(
  SceneView,
  WebScene) 
{
  var titleDiv = document.getElementById("titleDiv");

  var scene = new WebScene({
    portalItem: {
      // autocasts as new PortalItem()
      id: "48338ec129474e90bfa674976a00445b"
    }
  });

  var view = new SceneView({
    map: scene,
    container: "viewDiv",
    padding: {
      top: 40
    }
  });

  view.when(function() {
    // when the scene and view resolve, display the scene's title in the DOM
    var title = scene.portalItem.title;
    titleDiv.innerHTML = title;
  });
});
