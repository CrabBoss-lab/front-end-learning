# 引入css、css基础选择器
html结构，css样式，js行为三者相分离
css相当于装修材料，cascading style sheet(层叠样式表）
html 的注释是 <!—块注释 --> //行注释 快捷键 ctrl+?
css 注释方式仅有 /* 被注释的内容 */ 快捷键 ctrl+?
注释可以用来调bug。
1、引入css
1）行间样式

```css
<div style="width: 100px;height: 100px;background-color: #f80;">
	</div>
```

2)页面级css
就是在head标签中用style标签
```html
<head>
<style type = “text/css”>


</style>
```
3\外部css文件
打开一个文件以 leason.css 命名保存，一定要写.css
并且在头标签里面写

```html
<head>
<link rel = “stylesheet” type = “text/css” href = “地址”>
</head>
```
二、简单选择器
1）id选择器
特点：一个元素只有一个id值，一个id只对应一个元素
举例：`<div id="only">123</div>`
在css中：

```css
#only {
 background-color: red;
}
```
2）class选择器
特点：一个 class 可以对应多个元素
举例：

```html
`<div class="demo">123</div>`
 <div class = “demo”> 234</div>
```

css中：

```css
.demo{
 background-color: green;
}
```
如上，123和234都变绿色

例：若想让第一个多一个值，多写一个class名
代码如下：

```html
<div class = “demo demo1”> 123</div>
<div class = “demo”> 234</div>
```


```css
demo{
 background-color: green;
}
.demo1{
	color: #f40;
}
```
3）标签选择器
语法格式：标签名{}
例：

```html
<span>123</span>
<div>
<span>234</span>
</div
```

```css
#only{
	background-color: red;

}
span{
	color: #F40;
	font-weight: bold;
}
```
4）通配符选择器
语法格式：*{}
| css权重 |        |
| ------- | ------ |
| 标签名  | 权重值 |
|！important|infinity正无穷
|行间样式|1000
|id选择器|100
|class选择器、属性选择器、伪类选择器|10
|标签选择器、伪元素选择器|1
|通配符选择器|0
|在计算机中，正无穷+1>正无穷
|如果权重值一样（优先级一样），会显示后面的
|就是先来后到，谁在后面，谁（后面的）覆盖前面的——后面的会覆盖前面的
|在权重中，是 256 进制，是从 0 到 255 后变成 1所以这里的 1000 不是一千，100 不是一百