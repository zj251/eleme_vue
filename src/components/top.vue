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
                <div class="wechat pullLeft">
                  <div class="wechatCon">
                    <img  src="../../static/img/wexinqc100@2x.393ade.png">
                    <p class="wechatNum">微信号: elemeorder</p>
                    <p  class="wechatOrder">饿了么网上订餐</p>
                  </div>
                </div>
                <div class="weibo pullLeft" ></div>
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
  name: 'top',
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
  /*  weChat: {
      update: function (el) {
        var wechatCon = document.getElementsByClassName("wechatCon")[0];
        el.onmouseenter = function () {
          wechatCon.style.display = "block";
          // el.style.background = " url(\"../../static/img/icon.png\") no-repeat  0 -74px ;";
        };
        el.onmouseleave = function () {
          wechatCon.style.display = "none";
          // el.style.background = " url(\"../../static/img/icon.png\") no-repeat  0  -44px ;"
        };
      }
    },*/

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
<style scoped>
  /*topNav*/
  .elemeLog {
    float: left;
    height: 60px;
    margin-left: -15px;
  }
  .topNav {
    background: #1e89e0;
    height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .subNav {
    width: 1180px;
    margin: 0 auto;
  }
  .defaultBg {
    background: #006bc7;
  }
  .subNav > ul > li {
    font-size:18px;
    width:114px;
    line-height: 60px;
    color:white;
    float:left;
    text-align: center;
    list-style: none;
  }
  .pullLeft {
    float: left;
  }
  .phone > a {
    margin-left: 30px;
  }
  .navWord {
    font-size: 14px;
    color: #b7daff;
    line-height: 60px;
  }
  .newPhone{
    display: none;
    z-index: 5;
    position: absolute;
    right: -127px;
    top: 55px;
    width: 200px;
    height: 240px;
    background: white;
    padding: 3px 10px;
    box-shadow: 0 1px 2px;
  }
  .newPhone:after, .newPhone:before {
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
  }
  .newPhone:before {
    border-width: 12px;
    border-bottom-color: #d6d0ce;
    left:8px;
    position: absolute;
    top:-22px;
  }
  .newPhone:after {
    border-width: 11px;
    border-bottom-color: #fff;
    position: absolute;
    top: -20px;
    left:9px;
  }
  .nowLocation {
    color: black;
  }
  .nowLocation > span {
    color: #999;
  }
  .richScan {
    text-align: center;
    display: block;
    color: #333;
    line-height: 40px;
  }
  .phone {
    margin-left: 25px;
    position: relative;
  }
  .phone:hover .newPhone {
    display: block;
  }
  .phone > img {
    height: 22px;
    position: absolute;
    top: 20px;
    left:0;
  }
  .peopleLog{
    height: 32px;
    margin-top: 12px;
  }
  .pullRight{
    float:right;
  }
  .register{
    float: right;
    font-size: 14px;
    color: white;
    line-height: 60px;
  }
  .rule{
    margin-left: 220px;
  }
  .navWord:hover{
    color: white;
  }
  /*content*/
  .content {
    width:1180px;
    margin:0 auto;
    position: relative;
  }
  .location {
    font-size: 12px;
    margin-top:12px;
    height:32px;
    line-height: 32px;
  }
  .address {
    position: absolute;
    left: 130px;
    color: #0089dc;
  }
  .nowLocation {
    font-style: normal;
    position: absolute;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 130px;
  }
  .newLocation > span {
    color: #999;
  }
  input[type=search]{
    background: url("../../static/img/search.png") no-repeat  right;
    background-size:30px;
    float: right;
    outline: none;
    height: 33px;
    width: 285px;
    font-size: 14px;
    padding-left: 10px;
    border: 1px solid #e6e6e6;
    transition: all .5s;
  }
  .classification {
    height: 96px;
    margin-top: 60px;
    border: 1px solid #e6e6e6;
  }
  .classification > img {
    width: 190px;
    position: absolute;
    right: 0;
    top: 43px;
  }
  .classDetails {
    width: 90%;
    padding-top:8px;
  }
  .classDetails > li {
    font-size:14px;
    color:#666;
    padding: 3px 10px;
    margin: 6px;
    display: inline-block;
  }
  .merchantsClass {
    color:#999;
    padding:0 20px;
    font-size: 14px;
    float:left;
    line-height: 56px;
  }
  .allMerchants {
    background: #f6f6f6;
    line-height: 25px;
  }
  .footer {
    border-top: 1px solid #eeeeee ;
    width: 100%;
  }
  .footer > div {
    width: 1180px;
    margin: 0 auto;
    padding-top: 40px;
  }
  .footerLeft {
    width: 45%;
  }
  .footerRight {
    width: 54%;
    padding-top: 10px;
  }
  dl {
    width: 33.3%;
    height: 200px;
    float: left;
  }
  dt {
    font-size: 14px;
    color: #333;
    line-height: 30px;
  }
  dd {
    font-size: 12px;
    color: #999;
    line-height: 25px;
    margin-left: 0;
  }
  .tel {
    padding: 10px 0  10px 37px;
    border-left: 1px solid #e6e6e6;
  }
  .tel > span {
    color: #666;
  }
  .followUs {
    color: #666;
    margin-top: 12px;
    position: relative;
  }
  .followUs > div {
    margin-right: 250px;
    float: right;
  }
  .wechat {
    background: url("../../static/img/icon.png") no-repeat  0  -44px;
    width: 28px;
    height: 24px;
  }
  .wechatCon {
    display: none;
    width: 130px;
    height: 160px;
    background: white;
    padding: 4px 6px;
    box-shadow: 0 1px 2px rgba(0,0,0,.5);
    position: absolute;
    top: -180px;
    left: 22px;
  }
  .wechatCon > img {
    width: 130px;
  }
  .wechatNum {
    font-size: 14px;
    text-align: center;
    margin-top: -5px;
  }
  .wechatOrder {
    font-size: 14px;
    text-align: center;
    margin-top: -17px;
  }
  .weibo{
    background: url("../../static/img/icon.png") no-repeat 0 -105px;
    width: 28px;
    height: 24px;
  }
  .wechat:hover {
    background: url("../../static/img/icon.png") no-repeat 0 -74px;
  }
  .wechat:hover .wechatCon {
    display: block;
  }
  .weibo:hover {
    background: url("../../static/img/icon.png") no-repeat 0 -135px;
  }
  .wechatScan > img {
    width: 90px;
    position: absolute;
    top: -80px;
    right: 170px;
  }
  .wechatScan {
    width: 225px;
    position: relative;
  }
  .wechatScan > div {
    position: absolute;
    top: -60px;
    right: 20px;
  }
  .wechatCon:after,   .wechatCon:before {
    border: solid transparent;
    content: ' ';
    height: 0;
    top: 100%;
    position: absolute;
    width: 0;
  }
  .wechatCon:after {
    border-width: 10px;
    border-top-color: #fff;
    left: 56px;
  }
  .wechatCon:before {
    border-width: 12px;
    border-top-color: rgb(219, 219, 219);
    left: 54px;
  }
  .downlown{
    width: 115px;
    font-size: 16px;
    color: #333333;
    font-weight: 600
  }
  .convinent{
    width: 115px;
    font-size: 12px;
    color: #666666;
  }
  .main {
    margin: 20px auto 50px;
    border: 1px solid #e6e6e6;
  }
  .mainCon {
    list-style: none;
    height: 283px;
  }
  .arriveMoney{
    float:left;
    width:49%;
    text-align: center;
    border-right:1px solid  grey;
  }
  .arrive{
    color:black;
    float: left;
    width:50%;
    text-align: center;
  }
  .tip{
    color:#999;
    margin-top: 3px;
  }
  .detail{
    display:none;
    width:250px;
    padding:0 20px  10px 20px;
    background:white;
    border:2px solid #ddd;
    position:absolute;
    left:294px;
    top:0;
    z-index:5;
  }
  .detail > div {
    width: 100%;
    margin: 10px 0;
    display: flex;
  }
  .mainEle{
    width: 25%;
    border-bottom: 1px solid #e6e6e6;
    float: left;
    font-size: 12px;
    position: relative;
    display: flex;
  }
  .mainEle:hover .cookName {
    color: #0089dc;
  }
  .mainEle:hover {
    background: #f5f5f5;
  }
  .ticket {
    width: 18px;
    border: 1px solid #999;
    color: #999;
    height: 18px;
    text-align: center;
    line-height: 18px;
  }
  .mainEleLeft {
    width: 90px;
    padding: 20px 0 20px 20px;
  }
  .takeoutTime {
    display: block;
    color: #999;
    text-align: center;
    margin-top: 13px;
  }
  .mainEleRight {
    width: 144px;
    position: relative;
  }
  .cookName, .cookNameNew {
    font-size: 16px;
    color: #333;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .detail:after, .detail:before {
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    left: -20px;
  }
  .detail:before {
    border-width: 12px;
    border-right-color: #d0d0d0;
    top:16px;
    position: absolute;
    left:-24px;
  }
  .detail:after {
    border-width: 10px;
    border-right-color: #fff;
    top: 18px;
  }
  .mainEle:hover > .detail {
  display: block;
  }
  .note {
    color: #666;
    height: auto;
    line-height: 20px;
  }
  .mainEleBg {
    height: 14px;
    margin-top: -13px;
  }
  .noteArrive {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 10px 0;
    background: #f2f2f2;
  }
  .book {
    margin-left: 5px;
    border-radius: 3px;
    border: 1px solid #14ae18;
    width: auto;
    color: #14ae18;
  }
  .description {
    color: #666;
    padding: 0 5px;
  }

</style>

