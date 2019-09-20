## 日常积累
### 打印样式
```css
h1 {
   color: #fff;
   background: #ffffff;
}
 
@media print {
   h1 {
      color: #000;
      background: none;
   }
 
   nav, aside {
      display: none;
   }
}
```
该样式在打印预览中生效 不在页面中生效