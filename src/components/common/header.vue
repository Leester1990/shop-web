<template>
  <div class="common-header">
    <div class="top-nav">
      <div class="common-wid">
        <div class="left-txt">现在是北京时间：<span>{{nowTimeTxt}}</span></div>
        <div class="top-nav-list">
          <ul>
            <li><a href="">登录</a></li>
            <li><a href="">注册</a></li>
            <li><a href="">联系我们</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ajaxGet } from '../../reqConfig/ajax'
  export default {
    name: "common-header",
    data () {
      return {
        nowTime: "",
        nowTimeTxt: ""
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        ajaxGet("/api/common/getNowTime")
          .then(res => {
            if(res.code === 200) {
              this.nowTime = res.data.timestamp;
              this.addLocalTime();
            }
          }).catch(() => {
          console.log("获取当前日期错误");
        })
      },
      addLocalTime() {
        this.addTime();
        setInterval(() => {
          this.nowTime = this.nowTime + 1000;
          this.addTime()
        }, 1000)
      },
      addTime() {
        this.nowTimeTxt = this.$tools.formatDate.formatDate(new Date(this.nowTime), "yyyy-MM-dd hh:mm:ss")
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/var";
  .common-header {
    .top-nav {
      height: 30px;
      line-height: 30px;
      background-color: #f9f9f9;
      border-bottom: 1px solid #eaeaea;
      font-size: 12px;
      color: #999;
      font-family: simsun;
    }
    .left-txt {
      display: inline-block;
    }
    .top-nav-list {
      float: right;
      li {
        float: left;
        a {
          margin: 0 10px;
          font-family: simsun;
          &:hover {
            color: @theme-color;
          }
        }
      }
    }
  }
</style>
