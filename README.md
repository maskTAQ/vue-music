## 保证你的node版本和npm版本符合要求
> node V8.0+ 支持es7语法
npm update npm -g

## scss import 注意事项
>在`style`标签中`@import`scss文件时，如果地址是别名需要在地址前加~

## 技术栈
1. fastclisk 取消点击300ms延时
2. vue-lazyload 图片懒加载
3. better-scroll 滑动库
4. axios 前端ajax、后端代理

## 经验
1. 给遍历的元素ref值对应的ref就是一个数据，比如下面代码`this.refs.demo`是一个数组

  ```javascript
  <li v-for="iten in data" ref="demo"></li>
  ```
2. Number | 0  === Math.floor(Number)

  `| 0`的用处跟`Math.floor`一样

3. 歌手列表联动效果及title吸附效果的实现

  1. 首先滑动右侧的导航列表会根据`touch.y`和每一项的高度获取当前激活的项的索引。
  2. 根据索引可以获取左侧歌手列表对应的激活项的`dom`，然后调用`better-scroll`的`scrollToElement`方法传入`dom`实现导航列表联动左侧列表。
  3. 获取到左侧列表激活的项可以的得到项在容器中y轴的位置，通过左侧列表滑动可以通过`better-scroll`内的监听滚动回调的方法获取`pos.y`，来获取项在容器中y轴的位置。
  4. 通过在y轴的位置以及每项的高度可以获取当前项的索引。
  5. 根据索引可以做导航列表的激活样式，也能固定左侧项的标题在顶部。

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
