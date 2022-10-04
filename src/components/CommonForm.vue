<template>
  <div class="form">
    <el-form
      :inline="true"
      :rules="rules"
      :model="userForm"
      ref="userForm"
    >
      <div>
        <el-form-item
          v-for="item in propDate"
          :key="item.label"
          :label="item.label"
          :prop="item.model"
        >
          <el-input
            :placeholder="item.placeholder"
            v-model="userForm[item.model]"
            v-if="item.type === 'input'"
          ></el-input>
          <el-select
            v-if="item.type === 'select'"
            v-model="userForm[item.model]"
            :placeholder="item.placeholder"
          >
            <el-option
              v-for="option in item.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            >
            </el-option>
          </el-select>

          <el-date-picker
            v-if="item.type === 'date'"
            value-format="yyyy-MM-dd"
            v-model="userForm[item.model]"
            type="date"
            :placeholder="item.placeholder"
          >
          </el-date-picker>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CommonForm',
  props: {
    propDate: {
      type: Array
    }
  },
  data () {
    return {
      userForm: {
        // 默认
        gender: '保密'
      },
      rules: {
        name: [
          { required: true, message: '必须要输入', trigger: 'blur' }
        ],
        birth: [
          { required: true, message: '必须要输入', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '必须要输入', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '必须要输入', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '必须要输入', trigger: 'blur' }
        ]

      }
    }
  },
  created () {
  },
  methods: {
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
/deep/.el-form-item__label {
  width: 100px;
}
/deep/.el-form el-form--inline {
  display: inline-block;
  width: 300px;
}
</style>
