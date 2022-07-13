# 全新一代状态管理工具Pinia

## pinia的优势和安装环境 

### 优势

- 一个全新vue状态管理库，很好的支持vue2、vue3
- 摒弃了Mutations的操作，只有state、getters、actions 极大简化了状态库的使用
- 不需要状态嵌套 是代码扁平化
- 很好的支持TS语法

### 安装

pinia是vue的状态管理库因此推荐是使用vite来初始化vue项目

``` sh
yarn create vite
```

在这里我们选择 vue3 -ts 版本 拥抱最新的编程思想 

### pinia的安装

``` sh
npm install pinia 
# or with yarn 
yarn add pinia
```

## 使用pinia的使用

### 在main.ts 里面引入Pinia 

``` js
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia' 

// 创建pinia 实例
const pinia = createPinia()
const app =createApp(App)
// 挂载到 Vue 根实例上
app.use(pinia)
app.mount('#app')
```

先引入`mainStore`,然后通过`mainStore`得到`store`实例，就可以在组件里调用`store`里的`state`定义的状态数据了。

```js
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();
</script>

<style lang="scss" scoped></style>
```

### 创建store状态管理库

```js
import { defineStore} from 'pinia'

export const mainStore = defineStore('main',{
  state:()=>{
    return {}
  },
  getters:{},
  actions:{}
})

```

### 在组件里读取 store的属性

```js
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();
</script>

<style lang="scss" scoped></style>
```

### 修改store的属性

```vue
<template>
  <div><button @click="handleClick">点击增加</button></div>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();

const handleClick = () => {
  store.count++;
};
</script>

<style lang="scss" scoped></style>
```

### 注意解构问题

```vue
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
  <h2 class="">{{ store.count }}</h2>
  <hr />
  <h2 class="">{{ helloWorld }}</h2>
  <h2 class="">{{ count }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();
const { helloWorld, count } = store; //不是响应式数据
</script>

<style lang="scss" scoped></style>
```

```js
const { helloWorld, count } = storeToRefs(store);
```

### 推荐使用`$patch`修改多条数据

因为Pinia 的官方网站，已经明确表示$patch的方式是经过优化的，会加快修改速度，对程序的性能有很大的好处。所以如果你是多条数据同时更新状态数据，推荐使用$patch方式更新。

``` js
const handleClickPatch = () => {
  store.$patch({
    count: store.count + 2,
    helloworld:'wangzhiwei'
  });
};
```

## pinia状态改变数据的四种方式包括Acitons的使用

## Store相互调用的方法

## pinia在vue-devtools中调用的方法