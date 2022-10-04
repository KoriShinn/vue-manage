<template>
  <div class="table">
    <el-table
      :data="renderList"
      height="529px"
      stripe
      style="width: 100%"
      :highlight-current-row="true"
    >
      <el-table-column type="index">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="160"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="160"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="160"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="birth"
        label="出生日期"
        width="240"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="address"
        label="地址"
        width="320"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
      >
        <slot>
          <el-button size="medium">编辑</el-button>
          <el-button
            type="danger"
            size="medium"
            @click="removeDate()"
          >删除</el-button>
        </slot>
      </el-table-column>

    </el-table>
    <!-- 分页 -->
    <div class="footer">
      <el-pagination
        layout="prev, pager, next"
        :total="page.total"
        :page-size.sync="pageInfo.pageSize"
        :pager-count="page.pageCount"
        :current-page.sync="pageInfo.currentPage"
        @current-change="getTotalPages()"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getPages, geteTotalpage } from '@/api/data'
export default {
  name: 'CommonTable',
  props: {},
  data () {
    return {
      page: {
        // 总条数 -动态
        total: 50,
        // 多少页开始折叠 -已写死
        pageCount: 5
      },
      pageInfo: {
        // 当前页数
        currentPage: 1,
        // 每页显示最大数量
        pageSize: 10
      },
      renderList: []
    }
  },
  created () {
    this.getTotalPages()
    this.getePageValue()
  },

  methods: {
    // 当前页数据
    getTotalPages () {
      getPages(this.pageInfo).then(res => {
        this.renderList = res.data
        console.log(this.renderList)
      })
    },
    // 总条数
    getePageValue () {
      geteTotalpage().then(res => {
        const pageVlue = res.data
        this.page.total = pageVlue
      })
    },
    removeDate (e) {
      console.log(e)
    }

  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  .el-pagination {
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 20px;
    padding: 0;
    margin: 0;
    /deep/.el-pager li {
      font-weight: 600;
    }
  }
}
</style>
