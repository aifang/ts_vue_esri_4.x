<template>
    <div class="info-search" v-bind:class="{'animation' : !isOpen}">
        <div class="info-bar">
            <span @click="searchTab">查询信息<i v-bind:class="{'el-icon-caret-left' : isOpen, 'el-icon-caret-right': !isOpen}"></i></span>
        </div>
        <transition name="el-zoom-in-center">
            <div class="info-body" v-show="!isOpen">
                <div class="tab_pane">
                    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                        <el-tab-pane label="宗地" name="first"></el-tab-pane>
                        <el-tab-pane label="经济社" name="second"></el-tab-pane>
                    </el-tabs>
                </div>
                <div class="search-tool">
                    <el-row>
                        <el-col :span="4"><div style="line-height: 32px;font-size: 12px;">关键字：</div></el-col>
                        <el-col :span="14">
                            <el-input v-model="input" placeholder=""></el-input>
                        </el-col>
                        <el-col :span="6"><div style="text-align:right"><el-button type="primary" icon="search" @click="searchClick">搜索</el-button></div></el-col>
                    </el-row>
                    <div class="paginations">
                        <el-table :data="gridData" height="300">
                            <el-table-column property="date" label="日期" width="150"></el-table-column>
                            <el-table-column property="name" label="姓名" width="100"></el-table-column>
                            <el-table-column property="name" label="人缘" width="100"></el-table-column>
                            <el-table-column property="address" label="地址" width="240"></el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="100">
                                <template scope="scope">
                                    <el-button @click="watchClick" type="text" size="small">查看</el-button>
                                    <el-button @click="editClick" type="text" size="small">编辑</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="paginations">
                        <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage"
                                :page-size="20"
                                layout="prev, pager, next, jumper"
                                :total="100">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<style>
    .info-search{position: fixed;right:-372px;bottom: 0;width:400px;z-index: 3;}
    .paginations{margin-top: 3px;}
    .info-search .info-bar{position: absolute;left:0;bottom: 0;}
    .info-bar span{
        cursor: pointer;
        display: block;
        width:16px;
        background:#4db3ff;
        padding:6px;
        font-size: 13px;
        font-weight:700;
        color:#fff;
        border-bottom-left-radius: 2px;
        border-top-left-radius: 2px;
        box-shadow: -1px -1px 8px 1px #d4e0f7;
    }
    .info-search .info-body{background: #fff;margin-left: 28px;box-shadow: -1px -1px 2px 1px #ddd;padding:2px;}
    .animation{
        right:0;
    }
    @keyframes myfirst
    {
        from {background:red;}
        to {background:yellow;}
    }
</style>
<script>
    export default {
        data() {
            return {
                input:'',
                isOpen:true,
                currentPage:1,
                activeName:'first',
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        }, methods: {
            searchClick() {
                let _this=this;
                console.log(_this.input);
            },
            watchClick(){

            },
            editClick(){

            },
            searchTab(){
                if(this.isOpen){
                    this.isOpen=false;
                }else{
                    this.isOpen=true;
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>