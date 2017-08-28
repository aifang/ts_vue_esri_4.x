<template>
    <div>
        <div class="search-tool">
            <el-row>
                <el-col :span="3">日期范围：</el-col>
                <el-col :span="9">
                    <el-date-picker
                            size="small"
                            v-model="dayData"
                            align="right"
                            type="daterange"
                            placeholder="日期范围">
                    </el-date-picker>
                </el-col>
                <el-col :span="2">内容：</el-col>
                <el-col :span="10">
                    <el-input
                            size="small"
                            placeholder=""
                            icon="search"
                            v-model="searchData"
                            :on-icon-click="handleIconClick">
                    </el-input>
                </el-col>
            </el-row>
        </div>
        <div class="tab_pane">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
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
                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="Paginations">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
    </div>
</template>
<style>
    .search-tool{margin-bottom: 5px;}
    .tab_pane{margin-top: 3px;}
    .search-tool .el-input{width:100%;}
</style>
<script>
    export default {
        data() {
            return {
                dayData:'',
                searchData:'',
                currentPage4:1,
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
        },
        methods: {
            handleIconClick(ev) {
                console.log(ev);
            },
            handleClick(tab, event) {
                console.log(tab, event);
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