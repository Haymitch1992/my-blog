# Vite+Vue3+TypeScript

## 1、学习背景

vue3.0 不仅全面支持 TypeScript 语法，还对生命周期钩子进行了优化和剔除，加上工具 setup 的语法糖，vue 单页面多个根元素的扩展，代码精简不说，还很有条理，vue3.0 的出现再次提升了开发者的编码体验和幸福感。另外 vue3 整合 typescript 语言是前端未来发展的必然趋势，而生为 vue 家族的新成员 vite 也是前端技术爱好者的学习目标，赢在起点，从学习新技术开始。活到老，学到老，是一个合格前端开发者的毕生信仰。

## 2、vite 简介

vite 诞生是为了提升 web 项目运行性能，以更快的速度将应用页面展示给用户。Vite 以 [原生 ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。

提供的驱动力：

2.1、优化缓慢的服务器启动（冷启动开发服务器和正式环境响应速度）；

2.2、优化缓慢的项目更新（vite 服务器）；

## 3、vite 创建项目

兼容性注意:

**Vite 需要 [Node.js](https://nodejs.org/en/) 版本 >= 12.0.0。**

**必须安装 Volar 插件，用 vscode 编辑器**

```js
// 安装vite
1、npm init vite@latest

// 安装vite同时创建vite项目
2、npm init vite@latest my-vue-app --template vue
```

```json
{
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "vite build", // 为生产环境构建产物
    "serve": "vite preview" // 本地预览生产构建产物
  }
}
```

## 4、版本依赖兼容和项目目录介绍

package.json 版本依赖说明, 这里是整个项目依赖版本配置，相关安装指令后面视频中会逐个教大家如何安装。

注意：**vuex 和 router 都是 4.0 及以上版本的，否则用 vue3 时，找不到暴露的 api**

```json
{
  "name": "vite-ts-vue3-plus-demo",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "@element-plus/icons": "0.0.11",
    "dotenv": "^10.0.0",
    "element-plus": "^1.1.0-beta.7",
    "vue": "^3.0.5",
    "vue-router": "^4.0.11",
    "vuex": "^4.0.2"
  },
  "devDependencies": {
    "@types/node": "^16.7.1",
    "@vitejs/plugin-vue": "^1.3.0",
    "@vue/compiler-sfc": "^3.0.5",
    "node-sass": "^6.0.1",
    "sass": "^1.38.1",
    "sass-loader": "^12.1.0",
    "typescript": "^4.3.2",
    "vite": "^2.4.4",
    "vue-tsc": "^0.2.2"
  }
}
```

## 5、setup 语法糖使用

**5.1 setup 前身组合式 API（基础用法）**

注意：在 setup()中不能用 this

```javascript
在 `setup` 中你应该避免使用 `this`，因为它不会找到组件实例。`setup` 的调用发生在 `data` property、`computed` property 或 `methods` 被解析之前，所以它们无法在 `setup` 中被获取，这也是为了避免setup()和其他选项式API混淆。
```

```vue
/* 参数说明 * props 是响应式的，当传入新的 prop 时，它将被更新 * context
是一个普通的上下文JavaScript对象，它暴露组件的三个
property（包括属性，插槽，方法）, * 如下示例1所示 */ // 示例1
<script>
export default {
  setup(props, context) {
    // Attribute (非响应式对象)
    console.log(context.attrs);
    // 插槽 (非响应式对象)
    console.log(context.slots);
    // 触发事件 (方法)
    console.log(context.emit);
  },
};
</script>
```

**5.2 setup 后世（高级用法），推荐用法**

注意：defineProps 不需要引入，vue 单文件内部自动暴露的 API

```js
<script setup lang="ts"><script>是在单文件组件（SFC）中使用组合式API的编译时的语法糖。相比普通的语法，它具有更多优势：
- 更少的样板内容，更简洁的代码，比如：省略了组件的注册声明，对象暴露return，methods,。
- 能够使用纯 Typescript 声明 props 和发出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。
```

**注意点：**

**1、在 setup 语法糖中导入组件不需要注册声明，直接在视图中使用即可；**

**2、vue 文件结构发生改变，js 默认放到页面顶部，而视图 template 放到 js 下面，style 放到页面底部；**

**3、导入 vue 文件必须写上文件后缀名.vue, 否则 ts 无法识别 vue 文件。**

示例对比：

```vue
// 基础用法
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: () => {
        return '测试信息';
      },
    },
  },
  setup(props: any) {
    console.log(props.title);
  },
};
</script>
// 高级用法
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: () => {
      return '测试信息';
    },
  },
});
console.log(props.title);
</script>
```

## 6、defineProps 和 defineEmits

**`注意：defineProps` 和 `defineEmits` 都是只在 `<script setup>` 中才能使用的编译器宏**

```js
为了声明 `props` 和 `emits` 选项且具备完整的类型推断，可以使用 `defineProps` 和 `defineEmits` API，它们在 `<script setup>` 中都是自动可用的：

- **`defineProps` 和 `defineEmits` 都是只在 `<script setup>` 中才能使用的****编译器宏**。他们不需要导入，且会在处理 `<script setup>` 的时候被编译处理掉。
- `defineProps` 接收与 `props` 选项相同的值，`defineEmits` 也接收 `emits` 选项相同的值。
- `defineProps` 和 `defineEmits` 在选项传入后，会提供恰当的类型推断。
- 传入到 `defineProps` 和 `defineEmits` 的选项会从 setup 中提升到模块的范围。因此，传入的选项不能引用在 setup 范围中声明的局部变量。这样做会引起编译错误。但是，它*可以*引用导入的绑定，因为它们也在模块范围内。
```

**6.1、子组件 vue**

```vue
<template>
  <p>{{ props.msg }}</p>
  <button @click="handleClick">点击我调用父组件方法</button>
</template>
<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: () => '默认值',
  },
});
const emit = defineEmits(['on-change', 'update']);
const handleClick = () => {
  emit('on-change', '父组件方法被调用了');
};
</script>
```

**6.2 、父组件 vue**

```vue
<script setup lang="ts">
import TestPropsPmit from './components/test-props-emit/index.vue';
import { ref } from 'vue';

// 定义字符串变量
const msg = ref('欢迎使用vite！');
// 调用事件
const handleChange = (params: string) => {
  console.log(params);
};
</script>
<template>
  <TestPropsPmit :msg="msg" @on-change="handleChange"></TestPropsPmit>
</template>
```

**温馨提示：这里介绍一哈 volar 插件小图标在 vue 文件里的作用：**

点击这个三角形图标，会将文件归类显示，方便编写代码；

![](E:\vue_project\demos\vite-vue3-ts-volar\vite+vue3最新技术栈文档\volar.png)

## 7、正确使用 defineExpose

使用 `<script setup>` 的组件是**默认关闭**的，也即通过模板 ref 或者 `$parent` 链获取到的组件的公开实例，不会暴露任何在 `<script setup>` 中声明的绑定。

为了在 `<script setup>` 组件中明确要暴露出去的属性，使用 `defineExpose` 编译器宏：

**7.1、子组件暴露属性和方法，给父组件引用**

```vue
<script setup lang="ts">
function testChild(): void {
  console.log('子组件方法testChild被调用了');
}
const b = ref(2);
// 统一暴露属性
defineExpose({
  obj: { name: '张三', age: 2300 },
  b,
  testChild,
});
</script>
```

**7.2、父组件调用子组件方法和属性**

```vue
<template>
  <TestPropsEmit ref="propsEmitRef" :msg="msg" @on-change="handleChange">
  </TestPropsEmit>
</template>
<script setup lang="ts">
import TestPropsEmit from './components/test-props-emit/index.vue';
import { ref, onMounted } from 'vue';

const msg = ref('欢迎学习vite');

const handleChange = (params: string) => {
  console.log(params);
};

const propsEmitRef = ref();
onMounted(() => {
  console.log(propsEmitRef.value.child);
});
</script>
```

**7.3 在 setup 如何定义变量(字符串,对象,数组)**

```vue
<template>
  <h2>{{ count }} {{ user.name }}</h2>
  <span v-for="(item, index) in arr" :key="index">{{ item }}</span>
  <button @click="setName">点击我增加</button>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
// 字符串变量
const count = ref(0);
// 对象
let user = reactive({
  name: '张三',
});
// 数组
let arr = reactive(['1', '2', '3']);

// 综合定义方案
const originData = reactive({
  count: 0,
  user: {
    name: '张三',
  },
  arr: ['1', '2', '3'],
});

// 方法
const setName = () => {
  count.value++;
  user.name = '李四';
};
</script>
```

## 8、Watch 和 WatchEffect

**1、基本使用方法：**

```vue
<template>
  <p>{{ originData.count }} {{ originData.user.name }}</p>
  <p v-for="(item, index) in originData.arr" :key="index">{{ item }}</p>
  <button @click="incriment">点击我count增加</button>
</template>
<script setup lang="ts">
import { ref, reactive, watchEffect, watch } from 'vue';

const count = ref(0);
const user = reactive({ name: '张三' });
const arr = reactive([1, 2, 3, 4]);

// 综合定义方案
const originData = reactive({
  count: 0,
  user: {
    name: '张三',
  },
  arr: [1, 2, 3, 4],
});
const incriment = () => {
  originData.count++;
  count.value++;
  originData.user.name = '李四';
};
// 默认页面更新之前立即执行监听，懒执行开始
watchEffect(() => console.log(count.value));
// 默认监听数据变化后的值，页面更新后不会立即执行
watch(count, (n, o) => {
  console.log('watch', n, o);
});

// 监听多个值
watch([count, originData.user], (newValues, prevValues) => {
  console.log(newValues[0], newValues[1].name);
});

// 监听一个getter
watch(()=> originData.user，(o,n)=>{
  console.log(o,n)
})
// 立即监听
watch(
  [count, originData.user],
  (newValues, prevValues) => {
    console.log(newValues[0], newValues[1].name);
  },
  { deep: true, immediate: true }
);
</script>
```

**2、watch 与 watchEffect 比较，推荐 watch 监听**

watch: 页面更新后不会立即执行，而 watchEffect 它会执行；

如果要实现：watch 在页面更新之后就执行，需要增加立即执行的属性；

```vue
watch([count,originData.user], (n, o)=> {console.log(n[0],n[1].name)}, {deep:
true, immediate: true})
```

```
1、watch和watchEffect都懒执行副作用，不过watchEffect比较频繁，在vue组件更新之前执行；
2、watch更具体地说明什么状态应该触发侦听器重新运行，watchEffect就没有这么友好；
3、watch访问侦听状态变化前后的值。
```

## 9、在setup中的生命周期钩子

因为 `setup` 是围绕 `beforeCreate` 和 `created` 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 `setup` 函数中编写。

下表包含如何在 [setup ()](https://v3.cn.vuejs.org/guide/composition-api-setup.html) 内部调用生命周期钩子：

| 选项式 API        | Hook inside `setup`               |
| ----------------- | :-------------------------------- |
| `beforeCreate`    | Not needed*    不需要             |
| `created`         | Not needed*    不需要             |
| `beforeMount`     | `onBeforeMount` 挂载之前          |
| `mounted`         | `onMounted`    页面加载完成时执行 |
| `beforeUpdate`    | `onBeforeUpdate`                  |
| `updated`         | `onUpdated`                       |
| `beforeUnmount`   | `onBeforeUnmount`                 |
| `unmounted`       | `onUnmounted`  页面销毁时执行     |
| `errorCaptured`   | `onErrorCaptured`                 |
| `renderTracked`   | `onRenderTracked`                 |
| `renderTriggered` | `onRenderTriggered`               |
| `activated`       | `onActivated`                     |
| `deactivated`     | `onDeactivated`                   |

```typescript
<script setup lang="ts">
import { onMounted, onActivated, onUnmounted, onUpdated, onDeactivated } from 'vue';
// 读取环境变量
const mode = import.meta.env;
//   import HeadMenu from '@/components/head-menu/index.vue';
 onMounted(() => {
 console.log("组件挂载")
 })

 onUnmounted(() => {
 console.log("组件卸载")
 })

 onUpdated(() => {
 console.log("组件更新")
 })
 onActivated(() => {
 console.log("keepAlive 组件 激活")
 })

 onDeactivated(() => {
 console.log("keepAlive 组件 非激活")
 })
</script>
```
