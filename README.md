## 保证你的node版本和npm版本符合要求
> node V8.0+ 支持es7语法
npm update npm -g

## scss import 注意事项
>在`style`标签中`@import`scss文件时，如果地址是别名需要在地址前加~

## 技术栈
> 1. fastclisk 取消点击300ms延时
2. vue-lazyload 图片懒加载
3. better-scroll 滑动库
4. axios 前端ajax、后端代理

## 经验
> 给遍历的元素ref值对应的ref就是一个数据，比如下面代码`this.refs.demo`是一个数组

  ```javascript
  <li v-for="iten in data" ref="demo"></li>
  ```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
