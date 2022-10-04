<template>
  <div class="user">
    <!-- 头部 -->
    <div class="header">
      <el-button
        type="primary"
        @click="dialogVisible = !dialogVisible"
      >+ 新增
      </el-button>
      <div class="right">
        <el-input
          placeholder="请输入"
          v-model="searchInp"
          clearable
        >
        </el-input>
        <el-button
          type="primary"
          @click="searchClick"
        >搜索</el-button>
      </div>
    </div>

    <!-- Dialog区域 -->
    <el-dialog
      title="新增用户"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <CommonForm
        :propDate="propDate"
        ref="formRef"
      ></CommonForm>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="submitForm"
        >确 定</el-button>
      </span>
    </el-dialog>

    <!-- 表格区域 -->
    <CommonTable ref="tableRef"></CommonTable>
  </div>

</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
import CommonTable from '@/components/CommonTable.vue'
import { addUserDate } from '@/api/data'
export default {
  name: 'User',
  components: {
    CommonForm,
    CommonTable
  },
  data () {
    return {
      searchInp: '',
      dialogVisible: false,
      propDate: [
        {
          type: 'input',
          label: '姓名',
          placeholder: '姓名',
          model: 'name'
        },
        {
          type: 'input',
          label: '年龄',
          placeholder: '年龄',
          model: 'age'
        },
        {
          type: 'select',
          label: '性别',
          placeholder: '请选择',
          model: 'gender',
          options: [
            {
              value: '男',
              label: '男'
            },
            {
              value: '女',
              label: '女'
            },
            {
              value: '保密',
              label: '保密'
            }
          ]
        },
        {
          type: 'date',
          label: '出生日期',
          placeholder: '选择日期',
          model: 'birth'
        },
        {
          type: 'input',
          label: '地址',
          placeholder: '地址',
          model: 'address'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    // 搜索按钮
    searchClick () {
      console.log(this.searchInp)
    },
    submitForm () {
      const userForm = this.$refs.formRef.userForm
      const userFormRef = this.$refs.formRef.$refs.userForm
      userFormRef.validate(valid => {
        if (valid) {
          addUserDate(userForm).then(res => {
            console.log(res.data)
          })
          this.$refs.tableRef.renderList.push(userForm)
          this.$refs.tableRef.getePageValue()
          this.dialogVisible = false

          this.$nextTick(() => {
            // this.$refs.formRef.userForm = { gender: '保密' }
          })
        } else {
          return console.log('校验失败')
        }
      })
    }

  },
  computed: {}

}
</script>

<style lang="less" scoped>
.header {
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-button {
      margin-left: 10px;
    }
  }
}
</style>
