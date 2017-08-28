<template>
    <div class="coordinate-value">
        <div>{{'x:'+mapPoint.x}}&nbsp;{{'y:'+mapPoint.y}}</div>
    </div>
</template>
<style>
.coordinate-value {
    position: absolute;
    z-index: 4;
    bottom: 5px;
    left: 5px;
}
</style>
<script>
export default {
    data() {
        return {
            xValue: 'dd',
            yValue: 'ss',
        }
    },
    props: {
        mapPoint: {
            type: Object,
            default: {
                x: 334442.143534,
                y: 223355.124556
            }
        }
    },
    mounted() {

        console.info(this.mapPoint);
    },
    // watch()
}
</script>