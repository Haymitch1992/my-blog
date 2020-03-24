## 如何在项目中是用 vue-awesome-swiper
### 简介

Swiper常用于移动端网站的内容触摸滑动

Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端，以及PC端网站。Swiper能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果。

### 引入
```bash
npm install swiper vue-awesome-swiper --save
# or
yarn add swiper vue-awesome-swiper
```

### 挂在

```
// 全局挂在 把全局代码复制到src/main.js中
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
```

```
// 局部组件挂在

// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  }
}
```
### 调用的差异
- component find Swiper instance by ref attribute.
- directive find Swiper instance by directive arg.

Other configurations, events are the same.

The effect of the two ways and the difference in the applicable environment is here.


Component
```vue
<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
```

Directive
```vue
<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          // ...
        }
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(3, 1000, false)
    }
  }
</script>
```


