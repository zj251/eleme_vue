<template>
  <div>
    <div class="topNav">
      <div class="subNav">
        <img src="../../static/img/e.PNG" class="elemeLog">
        <ul>
          <li v-for="(firstNav,index) in homePage" :class="{defaultBg: index == 0}"  v-focus>{{firstNav.text}}</li>
        </ul>
        <div class="rule pullLeft">
          <a  class="navWord pullLeft" href="">规则中心</a>
          <div class="phone pullLeft" v-phone>
            <img src="../../static/img/phone.PNG" alt="">
            <a class="navWord" href="">手机应用</a>
            <div class="newPhone"  >
              <span class="richScan">扫一扫，手机订餐更方便</span>
              <img  src="../../static/img/wexinqc100@2x.393ade.png" alt="">
            </div>
          </div>
        </div>
        <div class="pullRight">
          <img src="../../static/img/people.png" class="peopleLog">
          <a  class="register"  href="">登录/注册</a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="location">
        <em  class="nowLocation">
          <span class="pullLeft">当前位置：</span>
          &nbsp;高新医院东北口</em>
        <a  class="address">[切换地址]</a>
        <input type="search" placeholder="搜索商家，美食......" v-search>
      </div>
      <div class="classification">
        <img src="../../static/img/takeout.408a87.png">
        <div class="merchantsClass">商家分类:</div>
        <ul class="classDetails pullLeft">
          <li v-for="( eleBusinesses ,index) in allBusinesses" :class="{allMerchants: index == 0}" v-merchanrs>{{eleBusinesses.text}}</li>
        </ul>
      </div>
      <div class="main">
        <ul class="mainCon">
          <li class="mainEle" v-for="data in businessMessage">
            <div class="mainEleLeft">
              <img :src="data.src" >
              <span class="takeoutTime">{{data.minute + "分钟"}}</span>
            </div>
            <div class="mainEleRight">
              <p class="cookName">{{data.name}}</p>
              <img :src="data.img_src" class="mainEleBg">
              <p class="tip">{{data.piecewise_agent_fee.tips}}</p>
              <div style="display: flex;">
                <span  :class="{ticket:data.supports[0].icon_name }">{{data.supports[0].icon_name}}</span>
                <div :class="{book:data.book}">{{data.book}}</div>
              </div>
            </div>
            <div  class="detail" >
              <p class="cookNameNew">{{data.name}}</p>
              <p class="tip">{{data.support_tags[0].text}}</p>
              <hr width="100%">
              <div>
                <span  :class="{ticket:data.supports[0].icon_name }">{{data.supports[0].icon_name}}</span>
                <div class="description">{{data.supports[0].description}}</div>
              </div>
              <div class="noteArrive">
                <div class="arriveMoney">{{data.support_tags[0].text}}</div>
                <div class="arrive">平均<span style="color:red;">{{data.minute}}</span>分钟送达</div>
              </div>
              <p class="note">{{data.promotion_info}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div  class="footer" >
      <div>
        <div class="footerLeft" >
          <dl>
            <dt>用户帮助</dt>
            <dd>我的客服</dd>
          </dl>
          <dl>
            <dt>商务合作</dt>
            <dd v-for="list in cooperation">{{list.text}}</dd>
          </dl>
          <dl>
            <dt>关于我们</dt>
            <dd v-for="join in aboutUs">{{join.text}}</dd>
          </dl>
        </div>
        <div class="footerRight pullLeft" >
          <div class="tel pullLeft">
            <span>24小时热线服务：10105757</span>
            <div class="followUs">关注我们：
              <div>
                <div class="wechat pullLeft" v-weChat>
                  <div class="wechatCon">
                    <img  src="../../static/img/wexinqc100@2x.393ade.png">
                    <p class="wechatNum">微信号: elemeorder</p>
                    <p  class="wechatOrder">饿了么网上订餐</p>
                  </div>
                </div>
                <div class="weibo pullLeft" v-weiBo></div>
              </div>
            </div>
          </div>
          <div class="wechatScan pullRight">
            <img src="../../static/img/wexinqc100@2x.393ade.png" alt="">
            <div>
              <span class="downlown">下载手机版</span><br>
              <span class="convinent">扫一扫，手机订餐更方便</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagenow',
  data(){
    return{
      homePage:"",
      allBusinesses:"",
      cooperation:"",
      aboutUs:"",
      businessMessage:""
    }
  },
  created() {
    this.$http.get("/api/homePage").then(function (response){
      this.homePage=response.body.data;
    });

    this.$http.get("/api/allBusinesses").then(function (response){
      this.allBusinesses=response.body.data;
    });

    this.$http.get("/api/cooperation").then(function (response){
      this.cooperation=response.body.data;
    });

    this.$http.get("/api/aboutUs").then(function (response){
      this.aboutUs=response.body.data;
    });
    this.$http.get("/api/businessMessage").then(function (response){
      this.businessMessage=response.body.data;
    });
  },

  directives: {
    focus: {
      update: function (el) {
        if (el.className != "defaultBg") {
          el.onmouseenter = function () {
            el.style.background = "#0c77d1";
          };
          el.onmouseleave = function () {
            el.style.background = "";
          };
        }
      }
    },
    merchanrs: {
      update: function (el) {
        if (el.className != "allMmerchanrs") {
          el.onmouseenter = function () {
            el.style.background = "#f6f6f6";
          };
          el.onmouseleave = function () {
            el.style.background = "";
          };
        }
      }
    },
    phone: {
      update: function (el) {
        var newphone = document.getElementsByClassName("newphone")[0];
        el.onmouseenter = function () {
          newphone.style.display = "block";
        };
        el.onmouseleave = function () {
          newphone.style.display = "none";
        };
      }
    },
    weChat: {
      update: function (el) {
        var wechatCon = document.getElementsByClassName("wechatCon")[0];
        el.onmouseenter = function () {
          wechatCon.style.display = "block";
          el.style.background = "url(\"../../static/img/icon.png\") no-repeat  0 -74px";
        };
        el.onmouseleave = function () {
          wechatCon.style.display = "none";
          el.style.background = "url(\"../../static/img/icon.png\") no-repeat  0  -44px";
        };
      }
    },
    weiBo: {
      update: function (el) {
        el.onmouseenter = function () {
          el.style.background = "url(\"../../static/img/icon.png\") no-repeat  0 -135px";
        };
        el.onmouseleave = function () {
          el.style.background = "url(\"../../static/img/icon.png\") no-repeat  0  -105px";
        };
      }
    },
    search: {
      update: function (el) {
        el.onclick = function () {
         el.style.width = 353 + "px";
        };
        el.onmouseleave = function () {
         el.style.width = 285 + "px";
        };
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

