# async的理解

## async await的作用

用同步的的方式 执行异步操作

案例 比如我现在有一个需求：先请求完接口1，再去请求接口2，我们通常会这么做

``` js
function request(num){ // 模拟请求接口
  return new Promise(resolve=>{
    setTimeout (()=>{
      resolve(num * 2)
    },1000)
  })
}

requset(1).then(res1=>{
    console.log(res1) // 1秒后 输出2
    request(2).then(res2=>{
    console.log(res2) // 2秒后 输出4
  })
})
```

改造


``` js
function request(num){ // 执行位置移动的操作 水平、垂直
  return new Promise(resolve=>{
    setTimeout (()=>{
      resolve(num * 2)
    },1000)
  })
}

async function fn(){
  for(var i =0;i<3;i++){ // 循环执行 
    const res2 = await request(i)
    console.log(res2)
  }
}

fn()
```