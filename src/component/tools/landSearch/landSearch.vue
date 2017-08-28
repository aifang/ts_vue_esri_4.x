<template>
    <div class="search-tool">
        <el-row>
            <el-col :span="4"><div style="line-height: 32px;">关键字：</div></el-col>
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
</template>
<style>
    .search-tool{margin-bottom: 5px;}
    .paginations{margin-top: 3px;}
</style>
<script>
    export default {
        data() {
            return {
                input:'',
                currentPage:1,
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
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>