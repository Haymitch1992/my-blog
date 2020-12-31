## Generator 函数

控制函数的执行过程，手工暂停和恢复代码执行

```javascript
function* test() {
    console.log('start')
    yield
    console.log('end') 
}
let Test = test()
Test.next() // start
Test.next() // end
```

内层不是无限循环 每次调用 通过next() 方法调用 

```javascript
function* getNumber(){
    while(true){
        yield Math.random()*100
    }
}
let myMoney = 15
let currentMoney =100

let GetNumber = getNumber()

while (currentMoney>myMoney){
    currentMoney = GetNumber.next().value
    console.log(currentMoney)
}
console.log(`当前数值是${currentMoney}`)

```
