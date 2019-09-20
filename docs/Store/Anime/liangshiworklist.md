## 工作备忘录
### 常用资源

- [Layui-框架](https://www.layui.com "Layui-框架")
- [ElementUi-框架](https://element.eleme.cn/2.0/#/zh-CN "ElementUi-框架")
- [Jquery接口文档](http://jquery.cuishifeng.cn/index.html "Jquery接口文档")
- [Vue接口文档](https://cn.vuejs.org/ "Vue接口文档")

### 项目梳理
- [OMC系统](http://omc.liangshipower.com/yhcms/user/login.do "OMC系统") --- jsp项目 
- [ERP系统](beta.liangshipower.com "ERP系统")--- vue脚手架搭建项目
- [官网项目](https://www.liangshipower.com/index "亮狮网") --- vue脚手架搭建项目
- 微信项目  --- 未接触
- ISO和Android项目 --- 未接触
### 测试环境和正式环境的差异
`sysConfigure.properties`文件

```javascript
    SystemEnvironment=0  // 0 测试环境 // 1 正式环境
```    
    
### 亮狮网官网项目注意事项 
- 注意node环境 版本8.9.0 否则下载依赖会报错
- 项目采用了`prerender-spa-plugin`插件 预编译优化seo 打包时候需要注意 
- 正式环境和测试环境需要修改main.js中的全局变量
```javascript
//测试
Vue.prototype.$api_ysapi = "http://116.62.68.26:8080" //yhcms
Vue.prototype.$api_ysapi_zs = "http://116.62.68.26:8080" //api地址
Vue.prototype.$api_img_url = 'http://116.62.68.26/'; //图片的地址
// Mr.long
// Vue.prototype.$api_ysapi = "http://zhangxlorgcom.picp.io:42995";
//正式
// Vue.prototype.$api_ysapi = "https://omc.liangshipower.com"; //yhcms
// Vue.prototype.$api_ysapi_zs = "https://app.ursoffice.com";//app后台正式服域名(Mr.long /yskjApp/)
// // Vue.prototype.$api_img_url = 'http://omc.liangshipower.com:81/';//图片的地址
// Vue.prototype.$api_img_url = 'https://img.liangshipower.com/';//图片的地址
```