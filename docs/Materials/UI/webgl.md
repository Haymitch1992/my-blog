# Three.js

## 了解 three.js

- 计算机性能提升
- 国内用的最多最广泛的三维引擎
- webgl 岗位是薪资比较高的
- 在 webgl 的基础上进行了大量的封装

[物联网粮仓案例](http://www.yanhuangxueyuan.com/3D/liangcang/index.html)

比传统的 2D 有更良好的交互体验，比如控制开关启动按钮

## 相关资料

- [官网](https://threejs.org/)
- 相关的物理引擎库

Physijs 物理引擎
start.js 监测性能
dat.gui 轻量级的 icon 形用户界面框架,可以用来控制 javascript 变量，比如 WebGl 中一个物体的尺寸、颜色
tween.js 快速创建补间动画
ThreeBSP 完成几何模型的布尔 各类三维模型都有布尔的概念

## 目录结构

```bash
  // build 打包之后的js引擎
  // editor 可视化编辑
  // doc 离线文档
  // src 各个引擎的模块和源码
  // utils 辅助工具
  // 案例

```

## 安装和使用

通过 NPM 安装

```javascript
// 方式 1: 导入整个 three.js核心库
import * as THREE from 'three';

const scene = new THREE.Scene();

// 方式 2: 仅导入你所需要的部分
import { Scene } from 'three';

const scene = new Scene();
```

three.js 的核心专注于 3D 引擎最重要的组件。其它很多有用的组件 —— 如控制器（control）、加载器（loader）以及后期处理效果（post-processing effect） —— 是 examples/jsm 目录的一部分。它们被称为“示例”，虽然你可以直接将它们拿来使用，但它们也需要重新混合以及定制。这些组件和 three.js 的核心保持同步，而 npm 上类似的第三方包则由不同的作者进行维护，可能不是最新的。

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls();
```

也可以通过直接 script 方式引人

## 基础应用

- 材质 Material
- 光源 Light
- 相机 Camera
- 渲染器 renderer

## 尝试将 github 代码热力图三维化

## 三维模型的绘制（美术建模）

作为 webGL 工程师要明白 简单的网格模型 Mesh，比如长方体、圆柱体是通过 three.js 去绘制的，复杂模型比如粮仓、车辆通过代码很难实现，一般是通过专业的三维建模工具绘制的。

web3D 项目 由美术提供三维模型 前端加载解析模型，编写三维场景的交互代码。

美术相关软件

3D 建模软件：3dmax、blender、maya

[blender](https://www.blender.org/download/)

角色模型雕刻：zbrush

## webGl 工程师 具备的能力

游戏开发 程序员跟美术有比较好的协作

学会 three.js 模型或纹理贴图

three.js 编辑器 editor 地址 https://threejs.org/editor/

程序员不用这个软件建模 但是要导入导出一些模型 稍微学一下

## gltf 格式介绍（web3d 领域的 JPG）

目前版本 2.0
bin 顶点数据
贴图文件
gltf
也可能是合并在一起的

.gltf .obj

建议选择 GLTF

因为 three.js 对 gltf 有良好的性能

几乎可以包含所有的三维模型相关信息的数据，比如网络模型、PBR 材质、纹理贴图、骨骼、变形、动画、光源、相机...

.glb 是二进制的 比 gltf 更小

## 导出的问题

- 比如最新版的 blender,不用任何插件 支持直接导出 gltf 模型文件 如果是老版本 㤇按插件
- 比如 3dmax 2021 及之前 如果想导出 gltf 需要安装插件
- obj 转 gltf

[3dmax 插件](http://github.com/BabylonJS/Exporters/releases)

## 加载 gltf 格式的模型

加载器 GLTFloader.js 引入 loader

贴图的颜色有偏差 颜色空间的问题
改成 SRGB

```js
renderer.outputEncoding = THREE.sRGBEncoding;
```

## gltf 是否包含光源

美术导出的时候 可以选择是否导出光源

## 模型命名

三维建模软件的目录树 ，three.js 加载外部模型，外部模型的名称会解析为 three.js 对象的 name 属性

`getObjectByName` 找到第一个匹配 name 的对象 类似 `getElementById`

## 交互部分

交互部分模型需要单独分组，不能混合在一起，通过射线拾取 

## 序列帧动画

关键技术 贴图纹理加载器 

```js
let textureLoader = new THREE.TextureLoader() // 创建一个贴图加载器对象 
let texture = textureLoader.load('../xx.png') // 调用load 方法

```

- 美术提供火焰的关键帧图形
- 前端

