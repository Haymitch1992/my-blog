## Class 类

typescript核心，使用typescript大部分代码都是写在类里面。

### 类的定义
### 类的构造函数
```typescript
export class Person {
    constructor(public name:string) {
        console.log(this.name)  
    }
}
let p1 = new Person('wangzhiwei')
```
### 类的继承 extends 
子类的构造函数 必须调用父类的构造函数
super() 

```typescript
export class Person {
    constructor(public name:string) {
        console.log(this.name)  
    }
}

class Employee extends Person{
    
}
new Employee('zhiwei')
```
### 泛型

### 接口
用来建立某种代码约定，似的其它开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
