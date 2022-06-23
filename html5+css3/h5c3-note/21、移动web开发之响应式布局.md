# 移动web开发之响应式布局

目标：

![image-20220207161159951](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207161159951.png)

## 一、响应式开发

### 1、响应式开发原理

就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。

![image-20220207164201411](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207164201411.png)

### 2、响应式布局容器

响应式需要一个父级为布局容器，来配合子级元素来实现变化效果。

原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。

**平时我们的响应式尺寸划分：**

1）超小屏幕（手机，小于768px）：设置宽度为100%；

2）小屏幕（平板，大于768px）：设置宽度为750px；

3）中等屏幕（桌面显示器，大于等于992px）：设置宽度为970px；

4）大屏幕（大桌面显示器，大于等于1200px）：置宽度为1170px；

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .container {
            height: 150px;
            background-color: pink;
            margin: 0 auto;
        }
        /* 1. 超小屏幕下  小于 768  布局容器的宽度为 100% */
        
        @media screen and (max-width: 767px) {
            .container {
                width: 100%;
            }
        }
        /* 2. 小屏幕下  大于等于768  布局容器改为 750px */
        
        @media screen and (min-width: 768px) {
            .container {
                width: 750px;
            }
        }
        /* 3. 中等屏幕下 大于等于 992px   布局容器修改为 970px */
        
        @media screen and (min-width: 992px) {
            .container {
                width: 970px;
            }
        }
        /* 4. 大屏幕下 大于等于1200 布局容器修改为 1170 */
        
        @media screen and (min-width: 1200px) {
            .container {
                width: 1170px;
            }
        }
    </style>
</head>

<body>
    <!-- 响应式开发里面，首先需要一个布局容器 -->
    <div class="container"></div>
</body>

</html>
```



### 3、响应式导航案例

![image-20220207171923912](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207171923912.png)

代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        ul {
            list-style: none;
        }
        
        .container {
            width: 750px;
            margin: 0 auto;
        }
        
        .container ul li {
            float: left;
            width: 93.75px;
            height: 30px;
            background-color: green;
        }
        
        @media screen and (max-width: 767px) {
            .container {
                width: 100%;
            }
            .container ul li {
                width: 33.33%;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <ul>
            <li>导航栏</li>
            <li>导航栏</li>
            <li>导航栏</li>
            <li>导航栏</li>
            <li>导航栏</li>
            <li>导航栏</li>
            <li>导航栏</li>
            <li>导航栏</li>
        </ul>
    </div>
</body>

</html>
```



## 二、Bootstrap前端开发框架

### 1、Bootstrap简介

Bootstrap来自Twitter(推特)，是目前最受欢迎的前端框架。Bootstrap是基于HTML、css和JavaScript，它简介灵活，**使得web开发更加快捷**；

中文官网：http://www.bootcss.com/

官网：http://getbootstrap.com/

推荐使用：http://bootstrap.css88.com/

**框架**：顾名思义就是一套架构，它有一套比较完整的网页功能解决方案，而且控制权在框架本身，有预制样式库、组件和插件。使用者要求按照框架多规定的某种规范进行开发。框架就是装修公司。

**优点**：

![image-20220207190230331](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207190230331.png)

**版本：**

![image-20220207190317204](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207190317204.png)

### 2、Bootstrap使用

在现阶段我们还没有接触JS相关课程，所以我们只考虑使用它的样式。

控制权在框架本身，使用者要按照框架所规定的某种规范进行开发。

Bootstrap使用四部曲：

1）创建文件夹结构

![image-20220207191628478](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207191628478.png)

2）创建HTML骨架结构

```html
<!--要求当前网页使用IE浏览器最高版本的内核来渲染-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--视口的设置：视口的宽度和设备一致，默认的缩放比例和pc端一致，用户不能自行缩放-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  	<!--[if lt IE 9]>
		<!--解决ie9以下浏览器对html5新增标签不识别，并导致css不起作用的问题-->
        <script src="https://fastly.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
		<!--解决ie9以下浏览器对css3Media Query的不识别-->
      	<scriptsrc="https://fastly.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->

```

3）引入相关样式文件

![image-20220207192535775](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207192535775.png)

4）书写内容

![image-20220207193718333](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207193718333.png)

### 3、布局容器

Bootstrap需要为页面内容和栅格系统包裹一个.container容器，Bootstrap预先定义好了这个类，叫.container

![image-20220207194224299](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207194224299.png)

![image-20220207194340277](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207194340277.png)

## 三、Bootstrap栅格系统

### 1、栅格系统简介

**栅格系统**英文为”gird system“，也有人翻译为”网格系统“，它是指将页面布局划分为等宽的列，然后通过列数的定义来模块化页面布局。

Bootstrap提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多**12列**；

<img src="C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207195149390.png" alt="image-20220207195149390" style="zoom:150%;" />

### 2、栅格系统使用

#### **栅格参数**

![image-20220207200502047](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207200502047.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- 一定不要忘记引入bootstrap 的样式文件 -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <title>Document</title>
    <style>
        [class^="col"] {
            border: 1px solid #ccc;
        }
        
        .row:nth-child(1) {
            background-color: pink;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">1</div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">2</div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">3</div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">4</div>
        </div>
        <!-- 如果孩子的份数相加等于12 则孩子能占满整个 的container 的宽度 -->
        <div class="row">
            <div class="col-lg-6">1</div>
            <div class="col-lg-2">2</div>
            <div class="col-lg-2">3</div>
            <div class="col-lg-2">4</div>
        </div>
        <!-- 如果孩子的份数相加 小于 12 则会？ 则占不满整个container 的宽度 会有空白 -->
        <div class="row">
            <div class="col-lg-6">1</div>
            <div class="col-lg-2">2</div>
            <div class="col-lg-2">3</div>
            <div class="col-lg-1">4</div>
        </div>
        <!-- 如果孩子的份数相加 大于 12 则会？多于的那一列会 另起一行显示  -->

        <div class="row">
            <div class="col-lg-6">1</div>
            <div class="col-lg-2">2</div>
            <div class="col-lg-2">3</div>
            <div class="col-lg-3">4</div>
        </div>


    </div>
</body>

</html>
```

#### **实例一：从堆叠到水平排列**

使用单一的一组 `.col-md-*` 栅格类，就可以创建一个基本的栅格系统，在手机和平板设备上一开始是堆叠在一起的（超小屏幕到小屏幕这一范围），在桌面（中等）屏幕设备上变为水平排列。所有“列（column）必须放在 ” `.row` 内。

![image-20220207203637311](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207203637311.png)

```html
<div class="row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
```

#### **实例二：流式布局容器**

将最外面的布局元素 `.container` 修改为 `.container-fluid`，就可以将固定宽度的栅格布局转换为 100% 宽度的布局。

```html
<div class="container-fluid">
  <div class="row">
    ...
  </div>
</div>
```

#### **实例三：移动设备和桌面屏幕**

是否不希望在小屏幕设备上所有列都堆叠在一起？那就使用针对超小屏幕和中等屏幕设备所定义的类吧，即 `.col-xs-*` 和 `.col-md-*`。请看下面的实例，研究一下这些是如何工作的。

![image-20220207205059327](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207205059327.png)

```html
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row">
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row">
  <div class="col-xs-6">.col-xs-6</div>
  <div class="col-xs-6">.col-xs-6</div>
</div>
```

#### **实例四：手机、平板、桌面**

在上面案例的基础上，通过使用针对平板设备的 `.col-sm-*` 类，我们来创建更加动态和强大的布局吧。

![image-20220207205108863](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207205108863.png)

```html
<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>
<div class="row">
  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
  <!-- Optional: clear the XS cols if their content doesn't match in height -->
  <div class="clearfix visible-xs-block"></div>
  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
</div>
```

#### **实例五：多余的列（column）将另起一行排列**

如果在一个 `.row` 内包含的列（column）大于12个，包含多余列（column）的元素将作为一个整体单元被另起一行排列。

![image-20220207205200397](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207205200397.png)

```html
<div class="row">
  <div class="col-xs-9">.col-xs-9</div>
  <div class="col-xs-4">.col-xs-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
  <div class="col-xs-6">.col-xs-6<br>Subsequent columns continue along the new line.</div>
</div>
```

### 3、列嵌套



![image-20220207205659264](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207205659264.png)

为了使用内置的栅格系统将内容再次嵌套，可以通过添加一个新的 `.row` 元素和一系列 `.col-sm-*` 元素到已经存在的 `.col-sm-*` 元素内。被嵌套的行（row）所包含的列（column）的个数不能超过12（其实，没有要求你必须占满12列）。

![image-20220207205826019](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207205826019.png)



```html
<div class="row">
  <div class="col-sm-9">
    Level 1: .col-sm-9
    <div class="row">
      <div class="col-xs-8 col-sm-6">
        Level 2: .col-xs-8 .col-sm-6
      </div>
      <div class="col-xs-4 col-sm-6">
        Level 2: .col-xs-4 .col-sm-6
      </div>
    </div>
  </div>
</div>
```



### 4、列偏移

使用 `.col-md-offset-*` 类可以将列向右侧偏移。这些类实际是通过使用 `*` 选择器为当前元素增加了左侧的边距（margin）。例如，`.col-md-offset-4` 类将 `.col-md-4` 元素向右侧偏移了4个列（column）的宽度。

![image-20220207214746001](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207214746001.png)

```html
<！--偏移的份数就是12-两个盒子的份数=6-->
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
</div>


<div class="row">
  <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
  <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
</div>

<!--如果只有一个盒子，那么偏移=（12-8）/2-->
<div class="row">
  <div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
</div>
```



### 5、列排序

通过使用 `.col-md-push-*` 和 `.col-md-pull-*` 类就可以很容易的改变列（column）的顺序。

![image-20220207215018654](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207215018654.png)

```html
<div class="row">
  <!--将原本在右侧的盒子推到左侧-->
  <div class="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3</div>
    <!--将原本在左侧的盒子拉到右侧-->
  <div class="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9</div>
</div>
```

### 6、响应式工具

![image-20220208134211410](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220208134211410.png)

## 四、案例：阿里百秀首页

