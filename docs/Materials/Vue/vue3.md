## Vue3.0新特性 
### setup 
按照官方给出的说法，setup函数是一个新的Vue组件选项，是用于在组件中使用Composition API的入口

```typescript
export default {
    setup(props, context){
        context.attrs
        context.slots
        context.parent
        context.root
        context.emit
        ...
    // 方法 
    //定义的变量
    .. return()
    }
}
```

### Reactive (声明单一对象使用)
### ref 声明基础数据
内部值并返回一个响应性骑可变的ref对象，ref对象具有.value指向内部值得单个属性
```typescript
const number = ref(0)
const obh =reactive(()=>{

})
// 获取值方式 number.value
```
