<script src="search.ts"></script>
<template>
    <div class="search">
        <el-autocomplete
                popper-class="my-autocomplete"
                v-model="state3"
                :fetch-suggestions="querySearch"
                custom-item="my-item-zh"
                placeholder="请输入内容"
                @select="handleSelect"
                icon="search"
                :on-icon-click="handleIconClick"
        ></el-autocomplete>
    </div>
</template>
<style>
    .search{position: absolute;width:30%;height:30px;left:10px;top:5px;z-index: 2;}
    .my-autocomplete li{line-height: normal;padding: 7px;}
    .my-autocomplete li .name { text-overflow: ellipsis;  overflow: hidden;}
    .my-autocomplete li .addr { font-size: 12px; color: #b4b4b4;}
    .my-autocomplete li .highlighted .addr {color: #ddd;}
</style>
<script lang="ts">
import search from "./search";
export default search;
</script>