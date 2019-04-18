<template>
  <!--组件中的模板能直接访问组件对象的属性-->
  <li :style="{background:bgcolor}" @mouseenter="ismouseenter" @mouseleave="ismouseleave">
    <label>
      <input type="checkbox" v-model="itemShow">
      <span>{{user.title}}</span>
    </label>
    <button v-show="isshow" @click="deletitem">删除</button>
  </li>
</template>
<script>
export default {
  // 声明接收什么属性: 属性名
  // 所有接收的属性都会成为组件对象属性
  // 组件对象相当于一个小的vm
  props: {
    user: {
      type: Object
    },
    deletuser: {
      type: Function
    },
    Setuser: {
      type: Function
    }
  },
  data() {
    return {
      isshow: false,
      bgcolor: "white",
// itemShow:false

    };
  },

  //为第一次渲染显示做一个同步的准备工作 效率高
  beforeMount() {
    //根据接收的数据来指定completed的值
    // this.itemShow = this.user.isshow;
  },
  // 在第一次显示后, 立即做一个异步工作(发ajax请求, 启动定时器)
  mounted() {
    this.itemShow=this.user.isshow
  },
  watch: {
    itemShow(val) {
      console.log(111)
      this.Setuser(this.user, val);
    }
  },

  methods: {
    ismouseenter() {
      this.bgcolor = "#cccccc";
      this.isshow = true;
    },
    ismouseleave() {
      this.bgcolor = "#ffffff";
      this.isshow = false;
    },
    deletitem() {
      if (window.confirm(`确认删除${this.user.title}么`)) {
        return this.deletuser(this.key);
      }
    }
  },
  computed: {
    itemShow: {
        get() {
         console.log('get()')

          return this.user.isshow;
        },


        set(val) {
         console.log('set()')

          this.Setuser(this.user, val);
          
        }
    }
  },

  mounted() {
    // console.log(this.index);
    // console.log(this.deletuser);
  }
};
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
  background: skyblue;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
