<template>
  <div class="common-header">
    <div class="top-nav">
      <div class="common-wid">
        <div class="left-txt">现在是北京时间：2019-11-15 22:23:33</div>
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
  export default {
    name: "common-header"
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
          &:hover {
            color: @theme-color;
          }
        }
      }
    }
  }
</style>
