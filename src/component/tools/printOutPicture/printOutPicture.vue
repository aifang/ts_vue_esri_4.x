<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-menu default-active="1" class="el-menu-vertical-demo">
                    <el-menu-item index="1">出图模式</el-menu-item>
                    <el-menu-item index="2">宗地查询</el-menu-item>
                    <el-menu-item index="3">宗地骏储</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="18">

            </el-col>
        </el-row>
    </div>
</template>
<script>
import { Row, Col, Menu, MenuItem } from 'element-ui'
Vue.use(Row), Vue.use(Col), Vue.use(Menu), Vue.use(MenuItem)

export default {

}
</script>
