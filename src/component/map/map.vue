<template>
    <div class="mainMap">
        <search :layer="layer"></search>
        <tools></tools>
        <info-search></info-search>
        <coordinate-value :mapPoint="mapPoint"></coordinate-value>
        <div id="viewDiv" class="big-map"></div>
    </div>
</template>
<style>
    .mainMap{width:100%;height:100%;}
    .big-map{width:100%;height:100%;position: absolute;top:0;left:0;z-index:0;background: #fff;}
</style>
<script lang="ts">
    import * as Vue from 'vue'
    import Component from 'vue-class-component'
    import esriLoader from 'esri-loader'
    import search from "../search/search.vue";
    import esri from "esri";
    import tools from "../tools/tools.vue";
    import infoSearch from "../tools/infoSearch/infoSearch.vue";
    import coordinateValue from "../coordinateValue/coordinateValue.vue";
    // import MapView from  "esri/views/MapView";

    // @Component 修饰符注明了此类为一个 Vue 组件
    @Component({
        components: {//子组件声明
            "search": search,
            "tools": tools,
            "infoSearch": infoSearch,
            "coordinateValue": coordinateValue
        }
    })
    export default class MyComponent extends Vue {
        mapView: any
        layer: Object = {}
        mapPoint: Object={}
        infoSearch:false
        mounted() {
            this.$nextTick(() => {
                esriLoader.dojoRequire(["esri/Map", "esri/views/MapView", "esri/layers/MapImageLayer", "esri/views/SceneView",
                    "esri/widgets/Search"], (Map, MapView, MapImageLayer, SceneView, Search) => {
                    this.layer = new MapImageLayer({ url: "http://192.168.12.25:6080/arcgis/rest/services/bigData/Img2014/MapServer" });
                    let mapView = new MapView({
                        container: "viewDiv",
                        map: new Map({ layers: [this.layer] }),
                    });
                    mapView.ui.remove(["attribution", "zoom"]);
                    this.mapView = mapView;
                    mapView.on('pointer-move', (evt) => {
                        this.mapPoint = mapView.toMap({ x: evt.x, y: evt.y });
                    })
                });
            })
        }
    }
</script>

        