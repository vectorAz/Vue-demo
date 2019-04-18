<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkALL">
    </label>
    <span>
      <span>已完成{{istrue}}</span>
      / 全部{{user.length}}
    </span>
    <button class="btn btn-danger" @click=" ALLclear()">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Array,
      requird: true
    },
    setAllCheck: {
      type: Function
    },
    ALLclear :{
      type:Function
    }
  },
  computed: {
    istrue() {
      return this.user.reduce((previous, current) => {
        return previous + (current.isshow ? 1 : 0);
      }, 0);
    },
    checkALL: {
      get() {
        return this.istrue === this.user.length&&this.user.length!==0;
      },
      set(val) {
        // console.log(val);
        this.setAllCheck(val);
      }
    },
   
  }
};
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
