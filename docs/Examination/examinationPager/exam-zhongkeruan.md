### 中科软面试题汇总

#### 如何在vue中声明全局变量 每个页面都可以用的那种？
方法一 定义全局一个vue 文件 用来装全局表变量 子页面中 如果要使用全局变量 

`import global_ from '../../components/Global'` // 引用模块进来 通过 `global.变量名`访问

方法二 在main.js 里面将global 挂在到vue.prototype上 

通过 `this.global.变量名 访问`

#### 如何在vue中声明全局函数？

方法一 直接在 mian.js
```javascript
Vue.prototype.changeData = function (){//changeData是函数名
  alert('执行成功');
}
```

组件调用 `this.changeData();//直接通过this运行函数`

方法二 写一个模块文件，挂载到main.js上面。

base.js文件，文件位置可以放在跟main.js同一级，方便引用

```javascript
exports.install = function (Vue, options) {
   Vue.prototype.text1 = function (){//全局函数1
    alert('执行成功1');
    };
    Vue.prototype.text2 = function (){//全局函数2
    alert('执行成功2');
    };
};
```

main.js入口文件：

```javascript
import base from './base'//引用
Vue.use(base);//将全局函数当做插件来进行注册
```

组件调用 `this.text1();//直接通过this运行函数`


#### vue配置路由管理

#### 如何封装接口 

#### 自定义指令

#### vux状态管理

#### 数组去重 

```javascript
// es6 set类型 set对象是值的集合,元素只会出现一次,即Set中的元素是唯一的.
var arr = new Set([1,2,3,3,2,1,]) // arr ={1,2,3}
// set对象与数组之间的转换
Array.from(set) //[1,2,3,4] // Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
[...set] //[1,2,3,4] 解构

// 问题 没有办法处理对象 [{},{},{}] 

// 利用for嵌套for，然后splice去重（ES5中最常用）



```

####jquery 对象转 dom对象？
```javascript

[0] //jquery 对象转dom对象

$() // dom对象转jquery对象
```

#### 谈谈你的管理经验

#### 判断一个对象是数组
```javascript
instanceof // arr instanceof Array 用于判断是否是某个对象的实例

[].constructor == Array // 属性返回对创建此对象的数组函数的引用，就是返回对象相对应的构造函数。

Array.isArray([]) //true es5
```

#### 数据类型 分为哪些？

7种 数据类型 
原始类型 和 引用类型(对象)

- 字符串类型
- 数字类型
- 布尔类型
- null 
- undefined
- 数组类型

- 对象类型 

ES6 新增的数据类型有？

#### null 和 undefined 的区别

null 和 undefined 都是空值 

undefined 是代表声明未赋值
null 代表的是一个空对象指针 

```javascript
typeof null // object

```

#### 语法问题
```javascript
const max
if(0<max<35){
    return 35
}else{
    return 0
}

```

#### 作用域问题
```javascript
var a = 10
function test(){
    console.log(a)
    var a =20 
}
test()
// 
```