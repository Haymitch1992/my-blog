# Vue培训
## 一万小时定律

一万小时定律是作家格拉德威尔在《异类》一书中指出的定律。`人们眼中的天才之所以卓越非凡，并非天资超人一等，而是付出了持续不断的努力。1万小时的锤炼是任何人从平凡变成世界级大师的必要条件`。他将此称为“一万小时定律”。
要成为某个领域的专家，需要10000小时，按比例计算就是：`如果每天工作八个小时，一周工作五天，那么成为一个领域的专家至少需要五年`。这就是一万小时定律。

## 二八定律

二八定律被广泛应用于社会学及企业管理学等。在任何一组事物中，最重要的只占其中一小部分，约20%，其余80%尽管是多数，却是次要的，因此又称二八定律。
- 二八法则 ：20% —— 80%
- 二八法则二次方：4% —— 64%
- 二八法则三次方：0.8% —— 51.2%
::: tip
20%投入有80%的收益，再进一步想想，找到20%的20%的20%，收获80%的80%的80%。你的效率就是别人的64倍。

当然，最难的是在变化的世界中持续找到那核心的20%！
:::

## vue 介绍
### MVVM 设计模式
![MVVM 设计模式](/img/mvvm.jpg) 
- Model：业务逻辑相关的数据对象，通常从数据库映射而来，我们可以说是与数据库对应的model
- View：展现出来的用户界面
- View-Model: 这个部分是由框架实现的，不需要程序员再进行开发了，就可以自动实现数据到视图，以及视图到数据的流程！
- 使用 MVVM 设计模式 代码量整体下降至少一半！
### vue 使用经验分享
- 通过script方式引入 适用于维护原有项目 无需改动项目结构（适用于 omc后台）
- 通过cli方式引入 整体使用cli脚手架搭建项目 （适用于 官网|erp）
::: tip
在用 Vue 构建大型应用时推荐使用 NPM 安装。NPM 能很好地和 webpack 模块打包器配合使用。同时 Vue 也提供配套工具来开发单文件组件。
:::
## vue 基础语法
### 模板语法
数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
```html
<span>Message: {{ msg }}</span>
```
Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。

通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```
双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：
```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```
### Class 与 Style 绑定
#### 对象语法
我们可以传给 v-bind:class 一个对象，以动态地切换 class：
```html
<div v-bind:class="{ active: isActive }"></div>
```
上面的语法表示 active 这个 class 存在与否将取决于数据属性 isActive 的 truthiness。

你可以在对象中传入更多属性来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class 属性共存。当有如下模板:

```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```
和如下 data：
```javascript
data: {
  isActive: true,
  hasError: false
}
```
结果渲染为：
```html
<div class="static active"></div>
```
当 isActive 或者 hasError 变化时，class 列表将相应地更新。例如，如果 hasError 的值为 true，class 列表将变为 "static active text-danger"。

绑定的数据对象不必内联定义在模板里：
```html
<div v-bind:class="classObject"></div>
```
```javascript
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```
#### 数组语法
我们可以把一个数组传给 v-bind:class，以应用一个 class 列表：
```html
<div v-bind:class="[activeClass, errorClass]"></div>
```
```javascript
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```
渲染为：
```html
<div class="active text-danger"></div>
```
如果你也想根据条件切换列表中的 class，可以用三元表达式：
```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```
不过，当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：
```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```
### 条件渲染
v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。
```html
<h1 v-if="awesome">Vue is awesome!</h1>
```
也可以用 v-else 添加一个“else 块”：
```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no </h1>
```
#### v-else-if
v-else-if，顾名思义，充当 v-if 的“else-if 块”，可以连续使用：
```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
类似于 `v-else`，`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后。
#### v-show
`v-show`不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。
```html
<h1 v-show="ok">Hello!</h1>
```
#### 不推荐同时使用 v-if 和 v-for
::: warning
当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。请查阅列表渲染指南 以获取详细信息
:::
### 列表渲染
我们可以用 v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。
```html
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```
```javascript
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```
在 v-for 块中，我们可以访问所有父作用域的属性。v-for 还支持一个可选的第二个参数，即当前项的索引。
```html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```
```javascript
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```
你也可以用 v-for 来遍历一个对象的属性。
```html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```
```javascript
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
```
### 事件处理
可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。
```html
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```
```javascript
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```
然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 还可以接收一个需要调用的方法名称。
```html
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
```
```javascript
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
```
有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法：
```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```
```javascript
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) event.preventDefault()
    alert(message)
  }
}
```
在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。
- .stop
- .prevent
- .capture
- .self
- .once
- .passive

```html
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```
在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
```html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">
<input v-on:keyup.page-down="onPageDown">
```
### 表单输入绑定
#### v-model

v-model本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

#### 文本
```html
<input v-model="message" placeholder="edit me">
```
#### 多行文本
```html

<textarea v-model="message" placeholder="add multiple lines"></textarea>

```
#### 复选框
```html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```
#### 单选按钮
```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
```
#### 选择框
```html
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```
#### `.lazy`
```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```
#### `.number`
```html
<!--如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：-->
<input v-model.number="age" type="number">
```
#### `.trim`
```html
<!--如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：-->
<input v-model.trim="msg">
```
## vue 进阶语法 
### 生命周期
下图展示了实例的生命周期。你不需要立马弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高
![vue声明周期](/img/lifecycle.png)
### 基础组件
### 计算属性和侦听器
### 组建注册
### prop 
### 状态过渡

