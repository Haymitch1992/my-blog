## v-for key的作用

### 项目中遇到的问题 
在这个循环中如果添加了一个新的对象 那么原来checkbox选择的对应关系就会改变

```html
 <div id="app">
    <div>
      <input type="text" v-model="name">
      <button @click="add">添加</button>
    </div>
    <ul>
      <li v-for="(item, i) in list">
        <input type="checkbox"> {{item.name}}
      </li>
    </ul>
<script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        name: '',
        newId: 3,
        list: [
          { id: 1, name: '李斯' },
          { id: 2, name: '吕不韦' },
          { id: 3, name: '嬴政' }
        ]
      },
      methods: {
        add() {
         //注意这里是unshift
          this.list.unshift({ id: ++this.newId, name: this.name })
          this.name = ''
        }
      }
    });
  </script>
  </div>
```

::: tip
可以简单的这样理解：加了key(一定要具有唯一性) id的checkbox跟内容进行了一个关联。是我们想达到的效果
:::

::: tip
不建议使用 index 作为key值的原因是 如果先中间插入一个数据 那么 后续所有数据的都需要重新渲染 浪费效率
:::


