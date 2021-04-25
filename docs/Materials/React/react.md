# React 前言

## 优点总结

- 生态强大：现在没有哪个框架比 React 的生态体系好的，几乎所有开发需求都有成熟的解决方案。
- 上手简单: 你甚至可以在几个小时内就可以上手 React 技术，但是他的知识很广，你可能需要更多的时间来完全驾驭它。
- 社区强大：你可以很容易的找到志同道合的人一起学习，因为使用它的人真的是太多了。

## 前置知识

- JavaScript 基础：如果能回 ES6 就更好了，因为我们尽量在课程中使用 ES6 的语法编写案例。
- npm 基础：你需要会使用 npm 的包管理，其实这个不会也没事，反正课程中都会讲解。

## React 和 Vue 对比

- React 更适合多人开发
- Vue 快速易用

## 使用 React

```bash
npm install -g create-react-app
mkdir ReactDemo  //创建ReactDemo文件夹
create-react-app demo01   //用脚手架创建React项目
cd demo01   //等创建完成后，进入项目目录
npm start   //预览项目，如果能正常打开，说明项目创建成功
```

### 单线数据流

子组件不能直接修改父组件传递过来的数据

### React 能否与 其他框架结合使用

### 函数式编程

- 函数式编程让我们的代码更清晰，每个功能都是一个函数。
- 函数式编程为我们的代码测试代理了极大的方便，更容易实现前端自动化测试。

### React developer tools React 调试工具

- 灰色： 这种就是不可以使用，说明页面不是又 React 编写的
- 黑色: 说明页面是用 React 编写的，并且处于生成环境当中。
- 红色： 说明页面是用 React 编写的，并且处于调试环境当中。

可以直接看到组件之间传递的参数和值

## React 声明周期

### Mounting 阶段

三个小的声明周期函数 分别是

- `componentWillMount` 组件激将呗关在到页面的时候执行
- `render` 页面 state 或 props 发生变化时执行
- `componentDidMount` 组件挂在完成

```jsx
componentWillMount(){
    console.log('componentWillMount----组件将要挂载到页面的时刻')
}
componentDidMount(){
    console.log('componentDidMount----组件挂载完成的时刻执行')
}
render(){
    console.log('render---组件挂载中.......')
}
```

### 注意的问题 

`componentWillMount` 和 `componentDidMount`这个两个生命周期函数，只在页面刷新时候执行一次，而`render`函数是只要state 和 props变化就会执行

### shouldComponentUpdate 函数

必须有返回值返回 true 和false 

