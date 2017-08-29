<template>
    <div>
        <search :layer="layer"></search>
        <!-- <tools></tools>
        <info-search v-if="infoSearch"></info-search>
        <coordinate-value :mapPoint="mapPoint"></coordinate-value> -->
        <div id="viewDiv" class="big-map"></div>
    </div>
</template>
<style>
    .big-map{width:100%;height:100%;position: absolute;top:0;left:0;z-index:0;background: #fff;}
</style>
<script lang="ts">
   import Map from "./map";
   export default Map
</script>

        