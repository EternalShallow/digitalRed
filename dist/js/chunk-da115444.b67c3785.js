(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da115444"],{"1be1":function(t,i,s){"use strict";s("30cb")},"1f0d":function(t,i,s){t.exports=s.p+"img/bg_new.ec222abf.png"},"30cb":function(t,i,s){},3999:function(t,i,s){t.exports=s.p+"img/home-text.06651562.png"},4507:function(t,i,s){t.exports=s.p+"img/amt.522b6dbb.png"},"52bc":function(t,i,s){t.exports=s.p+"img/red-package.730688f6.png"},"7abe":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"home-box display-flex box-column"},[i("img",{staticClass:"home-img",attrs:{src:t.bgImg,alt:""}}),i("img",{staticClass:"home-logo",attrs:{src:t.logo,alt:""}}),i("img",{staticClass:"home-text",attrs:{src:t.homeText,alt:""}}),i("img",{staticClass:"home-pack",attrs:{src:t.redPackImg,alt:""}}),i("img",{staticClass:"home-amt",attrs:{src:t.amtImg,alt:""}}),t.loading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{type:"spinner",color:"#ccc"}})],1):i("div",{staticClass:"box-flex1 content"},[i("div",{staticClass:"vouchers"},[i("div",{staticClass:"vouchers-left"},[i("div",[t._v("待领取")]),i("div",{staticClass:"sale"},[i("span",[t._v("￥")]),t._v(t._s((t.activityInfo.amt/100).toFixed(2))+"\n        ")])]),i("div",{staticClass:"vouchers-right"},[i("div",[t._v(t._s(t.activityInfo.activity))]),i("div",[t._v("*领取无需中行银行卡")])])]),t.supportFlag?t._e():i("div",{staticClass:"explain location permission"},[i("div",[t._v("很抱歉，您所在的地区暂未开启数字⼈⺠币试点⼯作，⽆法领取红包")]),i("div",{staticClass:"btn"},[t._v("请联系赠奖商户")])]),t.supportFlag?t._e():i("div",{staticClass:"outer"},[i("div",{staticClass:"description"},[i("div",{staticClass:"title"},[t._v("试点地区")]),i("ul",{staticClass:"explain-box"},[i("li",{staticClass:"explain-item"},[t._v("\n            •\n            数字人民币面向试点地区开展试点工作，需根据您所在位置判断是否符合领取条件。\n          ")]),i("li",{staticClass:"explain-item"},[t._v("\n            • 活动时间："+t._s(t.activityInfo.startDate)+"-"+t._s(t.activityInfo.endDate)+"\n          ")]),i("li",{staticClass:"explain-item"},[t._v("\n            • 试点地区包括："),i("strong",[t._v(t._s(t.activityInfo.pilotArea))])])])])]),t.noLocation?i("div",{staticClass:"explain location"},[i("div",[t._v("很抱歉，您所在的地区暂未开启数字⼈⺠币试点⼯作，⽆法领取红包")]),i("div",{staticClass:"btn"},[t._v("请联系赠奖商户")])]):t._e(),!t.noLocation&&t.supportFlag?i("div",{staticClass:"submit"},[i("div",{staticClass:"title"},[t._v("验证手机号")]),i("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号","label-align":"top"},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}}),i("van-field",{attrs:{center:"",label:"验证码",placeholder:"请输入验证码"},scopedSlots:t._u([{key:"button",fn:function(){return[i("van-button",{attrs:{size:"small",type:"primary",disabled:Boolean(t.timer)},on:{click:t.getCode}},[t._v(t._s(t.timer?t.count:"发送验证码"))])]},proxy:!0}],null,!1,4106652352),model:{value:t.sms,callback:function(i){t.sms=i},expression:"sms"}}),i("van-button",{staticClass:"btn",attrs:{"loading-type":"spinner","loading-text":"领取中...",text:"领取红包",block:"",loading:t.submitLoading,disabled:t.submitLoading},on:{click:t.submitReciveMoney}})],1):t._e(),i("div",{staticClass:"outer"},[i("div",{staticClass:"description"},[i("div",{staticClass:"title"},[t._v("活动概述")]),i("ul",{staticClass:"explain-box"},[t._m(0),i("li",{staticClass:"explain-item"},[i("strong",[t._v("• 活动时间：")]),t._v(" "+t._s(t.activityInfo.startDate)+" -\n            "+t._s(t.activityInfo.endDate)+"\n          ")]),i("li",{staticClass:"explain-item"},[i("strong",[t._v("• 活动地区：")]),t._v(t._s(t.activityInfo.pilotArea)+"\n          ")]),t._m(1),t._m(2)])])]),t._m(3)])])},a=[function(){var t=this,i=t._self._c;return i("li",{staticClass:"explain-item"},[i("strong",[t._v("• 活动对象：")]),t._v("特约白名单用户。\n          ")])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"explain-item"},[i("strong",[t._v("• 红包查看路径：")]),t._v("数字人民币APP-服务-消费红包\n          ")])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"explain-item"},[i("strong",[t._v("• 适用范围：")]),t._v("可在任何支持数字人民币的场景下使用\n          ")])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"bottom"},[t._v("\n      Copyright © 2023北京华弘集成电路设计有限责任公司\n      "),i("div",[t._v("All rights reserved.")])])}],n=(s("14d9"),s("eb7d")),o=s("2241"),c=s("d399"),l=s("1f0d"),r=s.n(l),v=s("3999"),d=s.n(v),p=s("9d64"),u=s.n(p),m=s("4507"),h=s.n(m),g=s("52bc"),f=s.n(g),b={name:"index",data(){return{sms:"",phone:"",timer:null,count:"",token:"",loading:!1,activityInfo:{amt:"",activity:"数字人民币红包",endDate:"",startDate:"",activityPeriod:""},supportFlag:!0,noLocation:!1,cityCode:"",bgImg:r.a,homeText:d.a,logo:u.a,amtImg:h.a,redPackImg:f.a,submitLoading:!1}},mounted(){const{token:t}=this.$route.params;this.token=t,this.queryMoneyInfo(),window.AMap&&AMap.plugin("AMap.Geolocation",()=>{var t=new AMap.Geolocation({enableHighAccuracy:!1,timeout:1e4});t.getCityInfo((t,i)=>{if("complete"==t){const{province:t,city:s,cityCode:e}=i;this.queryActivityCity({province:t,city:s}),this.cityCode=e}else this.noLocation=!0})})},methods:{queryActivityCity(t){return n["a"].postJson("/api/h5/pilotarea/check",t).then(t=>{const{flag:i}=(null===t||void 0===t?void 0:t.body)||{},s="Y"===i;this.supportFlag=s,s||Object(o["a"])({title:"温馨提示",message:"很抱歉，您所在的地区暂未开启数字人民币试点工作，无法领取红包"})})},getCode(){if(!this.isMobile(this.phone))return void Object(c["a"])("手机号有误！");let t=60;this.timer||this.submitMsgCode().then(i=>{const{code:s,msg:e}=i;"200"===s?(this.count=t,this.timer=setInterval(()=>{this.count>0&&this.count<=t?this.count--:(clearInterval(this.timer),this.timer=null)},1e3)):Object(o["a"])({title:"温馨提示",message:e})}).catch(t=>{})},isMobile(t){let i=t.replace(/\s/g,"");return!!i&&(11===i.toString().length&&1==i.toString()[0])},submitMsgCode(){return n["a"].postJson("/api/h5/send/verifycode",{phone:this.phone,token:this.token})},submitReciveMoney(){if(!this.supportFlag)return void Object(o["a"])({title:"温馨提示",message:"很抱歉，您所在的地区暂未开启数字人民币试点工作，无法领取红包"});if(!this.isMobile(this.phone))return void c["a"].fail("手机号有误");if(!this.sms)return void c["a"].fail("请填写短信验证码！");const t=this;this.submitLoading=!0,n["a"].postJson("/api/h5/redpacket/receive",{phone:this.phone,verifyCode:this.sms,token:this.token,custProvinceCode:this.cityCode}).then(i=>{const{tradeState:s,orderNo:e}=i.body;if("00"===s)t.queryReciveState(e);else{if("03"===s||"02"===s)return this.submitLoading=!1,void t.$router.push({path:"/result",query:{sale:this.activityInfo.amt,activity:this.activityInfo.activity}});this.submitLoading=!1,Object(o["a"])({title:"温馨提示",message:i.msg})}})},queryMoneyInfo(){n["a"].getJson("/api/h5/redpacket/info/"+this.token).then(t=>{const{body:i}=t,{activityPeriod:s=""}=i,e=s.split(",");let a="",n="";e.length>1&&(a=this.$dayjs(e[0]).format("YYYY年MM月DD日"),n=this.$dayjs(e[1]).format("YYYY年MM月DD日")),this.activityInfo={...i,startDate:a,endDate:n}})}},queryReciveState(t){const i=this;n["a"].getJson("/api/h5/redpacket/status/"+t).then(s=>{const{body:e}=s,{tradeState:a}=e;if("00"===a)setTimeout(()=>{i.queryReciveState(t)},1e3);else{if("03"===a||"02"===a)return i.submitLoading=!1,void i.$router.push({path:"/result",query:{sale:i.activityInfo.amt,activity:i.activityInfo.activity}});i.submitLoading=!1,Object(o["a"])({title:"温馨提示",message:s.msg})}})}},y=b,_=(s("1be1"),s("2877")),C=Object(_["a"])(y,e,a,!1,null,"3fc8a849",null);i["default"]=C.exports},"9d64":function(t,i,s){t.exports=s.p+"img/logo.9a381d24.png"}}]);
//# sourceMappingURL=chunk-da115444.b67c3785.js.map