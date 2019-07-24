## Vue项目中应用Typescript

Vue CLI内置了TypeScript的支持，并且@vue/cli3提供了TypeScript插件，因此搭建支持TypeScript的vue工程非常方便

---

### 1 创建工程

```bash
npm install -g @vue/cli
```

node环境要求在8及以上 window系统不支持通过命令行 需要下载安装包进行升级

```bash
vue create project-name
```

### 2 添加Typescript 插件
为工程添加TypeScript插件，进入工程目录

```bash
vue add typescript
// 执行该指令后 会在项目目录中修改、或添加ts文件
```
添加成功后，我们来看下工程结构,插件已将.js文件修改成了.ts

vue-cli-plugin-typescript插件除了添加了typescript相关依赖之外，我们需要关注下vue-class-component和vue-property-decorator，这两者是VUE的装饰器，vue-property-decorator依赖vue-class-component，class-style模式下开发时可使代码更加简明、可读，接下来我们会举例介绍怎样更高效、优雅的书写Vue代码



### 3 使用Ts开发Vue

```vue
<template>
  <div class="content-wrapper" >

  </div>
</template>

<script lang = "ts" >
	import { Component, Vue } from "vue-property-decorator";
	@Component({})
	export default class Foo extends Vue {

	}
</script>

<style scoped >
</style>

```

#### 声明响应式属性 data

```typescript
export default class App extends Vue {
  private name: string = 'kaelyn';   // 声明响应式属性
}
```

这样的写法等同于之前的

```typescript
export default {
  name: 'App',
  data() {
    return {
      name: 'kaelyn'
    }
  }
}
```

计算属性

```typescript
	import { Component, Vue } from 'vue-property-decorator';
	@Component({})
	export default class App extends Vue {
	  private number: number = 0;
	
	  get age(): string {   // 计算属性的get
	    return `I am ${this.number} years old`;
	  }
	  set age(value) {      // 计算属性的set
	    this.number = Number(value);
  	  }
	}

```

这样的写法等于之前的：

```javascript
computed: {
  age: {
    get: function () {
      return `I am ${this.number} years old`;
    },
    set: function (value) {
      this.number = Number(value);
    }
  }
}
```

