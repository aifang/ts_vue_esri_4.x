<template>
    <div class="coordinate-value">
        <div class="coordinate-point">x：{{mapPoint.x}}&nbsp;<br>y：{{mapPoint.y}}</div>
    </div>
</template>
<style>
.coordinate-value {
    position: absolute;
    z-index: 4;
    bottom: 5px;
    left: 0;
    background: rgba(0,0,0,0.3);
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}
.coordinate-value .coordinate-point{
    color:#0a36e9;
    padding: 5px;
    text-shadow: 0 0 1px #fff;
}
</style>
<script>
export default {
    data() {
        return {

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
    watch:{
        mapPoint:function(data){
            data.x=data.x.toFixed(3);
            data.y=data.y.toFixed(3);
            return data;
        }
    },
    mounted() {
        console.info(this.mapPoint);
    }
}
</script>