### 中科软面试题汇总

#### 如何在vue中声明全局变量 每个页面都可以用的那种？

```
const token = '123456'
const userSite = '林花落了春红，太匆匆'

export default {
  token,
  userSite
}
```

局部引用 
```
// 在模块中局部引用 
import global_ from '../../components/Global'
export default {
    data () {
        return {
            token: global.token
        }
    }
}
```
全局引用 将global_variable.js文件引入main.js文件，并使用Vue.prototype挂在至vue实例上，示例如下

```
import global_ from '../../components/Global'
Vue.potoType.GlOBAL = global_

this.GlOBAL.token

```

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

除了核心指令 `v-show` `v-model` Vue 允许注册自定义指令。
```html
<input type="text" v-focus="">
```

```javascript
// 注册一个全局自定义指令
Vue.directive('focus',{
    // 当绑定元素插入到DOM中。
    inserted: function (el) {
        el.focus()
    }
})
```

钩子函数

- bind 只调用一次，指令第一次办绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
- insert 当绑定元素插入到父节点时调用。
- update 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
- componentUpdated 被绑定元素所在模板完成一次更新周期时调用。
- unbind 只调用一次， 指令与元素解绑时调用。

钩子函数的参数

- el 指令所绑定的元素，可以用来直接操作 DOM 。
- binding 一个对象，包含以下属性
  - name 指令名，不包括 v- 前缀。
  - value 指令的绑定值， 例如： v-my-directive=”1 + 1”, value 的值是 2。
  - oldValue 绑定指令前的一个值 仅在 `update` 和 `componentUpdated` 钩子中调用
  - expression 绑定值的字符串形式。 例如 v-my-directive=”1 + 1” ，expression 的值是 “1 + 1”。     
  - arg 传给指令的参数。例如 v-my-directive:foo， arg 的值是 “foo”。
  - modifiers 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
- vnode Vue编译生成的虚拟节点
- oldVnode 上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中调用

::: warning 
除了 el 之外，其它参数都应该是只读的，尽量不要修改他们。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行
:::
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
if(0<max<35){ //语法错误 max<35&&max>0 
    return 35
}else{
    return 0
}

```

#### 作用域问题
```javascript
var a = 10
function test(){
    console.log(a) // 访问的函数体局部作用域 声明提前
    var a =20 
}
test()
// 
```