import MapImageLayer = require("esri/layers/MapImageLayer")
import FindParameters = require("esri/tasks/support/FindParameters")
import FindTask = require("esri/tasks/FindTask")
import FindResult = require("esri/tasks/support/FindResult")
import Extent = require("esri/geometry/Extent")
import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol")
import SimpleFillSymbol = require("esri/symbols/SimpleFillSymbol")
import Color = require("esri/Color")
import Graphic = require("esri/Graphic")
import on = require("dojo/on")
import Sublayer=require("esri/layers/support/Sublayer");

function seacrchFeature(a, b, lyrServer: MapImageLayer) {
    let lyrIds:number[] = lyrServer.allSublayers.map((item:Sublayer) => { return item.id }).toArray();
    var params = new FindParameters();
    params.returnGeometry = true;
    params.layerIds = lyrIds;
    params.searchFields = [a];
    params.searchText = b;
    var findTask = new FindTask({url:lyrServer.url});
    var promise = findTask.execute(params).then(showFindResult)
}
function showFindResult(queryResult:FindResult[]) {
    if (queryResult.length == 0) {
        alert("没有该元素.");
        return;
    }
    return queryResult;
}

export { seacrchFeature }

