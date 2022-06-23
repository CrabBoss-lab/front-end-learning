# 移动web开发之rem适配布局

目标：

![image-20220206210324794](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206210324794.png)

![image-20220206210548349](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206210548349.png)

基于以上问题，rem适配布局可以实现；

## 一、rem基础

![image-20220206211124183](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206211124183.png)

```css
/* 1. em相对于父元素 的字体大小来说的 */
    /* width: 10em;
    height: 10em; */
/* 2. rem 相对于 html元素 字体大小来说的 */
     width: 10rem;
     height: 10rem;
     background-color: pink;
/* 3.rem的优点就是可以通过修改html里面的文字大小来改变页面中元素的大小可以整体控制 */
```



## 二、媒体查询

### 1、什么是媒体查询

![image-20220206211513305](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206211513305.png)

### 2、语法规范

![image-20220206212726546](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206212726546.png)

属性值：

![image-20220206211819417](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206211819417.png)

![image-20220206211840285](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206211840285.png)

![image-20220206211912766](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206211912766.png)

```css
/* 这句话的意思就是： 在我们屏幕上 并且 最大的宽度是 800像素 设置我们想要的样式 */
/* max-width 小于等于800 */
/* 媒体查询可以根据不同的屏幕尺寸在改变不同的样式 */
/*小于等于800px，不变*/        
@media screen and (max-width: 800px) {
	body {
         	background-color: pink;
	}
}

```

### 3、案例：根据页面宽度改变颜色

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 1. 媒体查询一般按照从大到小或者 从小到大的顺序来 */
        /* 2. 小于540px 页面的背景颜色变为蓝色 */
        
        @media screen and (max-width: 539px) 		{
            body {
                background-color: blue;
            }
        }
        /* 3. 540 ~ 970 我们的页面颜色改为 绿色 */
        /* @media screen and (min-width: 540px) and (max-width: 969px) {
            body {
                background-color: green;
            }
        } */
        
        @media screen and (min-width: 540px) 		{
            body {
                background-color: green;
            }
        }
        /* 4. 大于等于970 我们页面的颜色改为 红色 */
        
        @media screen and (min-width: 970px) 		{
            body {
                background-color: red;
            }
        }
        /* 5. screen 还有 and 必须带上不能省略的 */
        /* 6. 我们的数字后面必须跟单位  970px   这个 px 不能省略的 */
    </style>
</head>

<body>

</body>

</html>
```



### 4、媒体查询+rem实现元素动态大小变化

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
        /* html {
            font-size: 100px;
        } */
        /* 从小到大的顺序 */
        
        @media screen and (min-width: 320px) 		{
            html {
                font-size: 50px;
            }
        }
        
        @media screen and (min-width: 640px) 		{
            html {
                font-size: 100px;
            }
        }
        
        .top {
            height: 1rem;
            font-size: .5rem;
            background-color: green;
            color: #fff;
            text-align: center;
            line-height: 1rem;
        }
    </style>
</head>

<body>
    <div class="top">购物车</div>
</body>

</html>
```

### 5、媒体查询引入资源（理解）

![image-20220207134330850](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207134330850.png)

html代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 当我们屏幕大于等于 640px以上的，我们让div 一行显示2个 */
        /* 当我们屏幕小于640 我们让div一行显示一个 */
        /* 一个建议： 我们媒体查询最好的方法是从小到大 */
        /* 引入资源就是 针对于不同的屏幕尺寸 调用不同的css文件 */
    </style>
    <link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
    <link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
</head>

<body>
    <div>1</div>
    <div>2</div>
</body>

</html>
```

style640px：

```css
div {
    float: left;
    width: 50%;
    height: 100px;
}

div:nth-child(1) {
    background-color: pink;
}

div:nth-child(2) {
    background-color: purple;
}
```

style320px:

```css
div {
    width: 100%;
    height: 100px;
}

div:nth-child(1) {
    background-color: pink;
}

div:nth-child(2) {
    background-color: purple;
}
```



## 三、less基础

### 1、为什么需要less

![image-20220207135127595](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207135127595.png)

### 2、Less介绍

Less(Leaner Style Sheets的缩写)是一门css扩展语言，也成为css预处理器。

做为css的一种形式的扩展，它并没有减少css的功能，而是在现有的css语法基础上，为css加入程序式语言的特性；

它在css的语法基础上，引入变量，Mixin（混入），运算以及函数等功能，大大简化简化了css的编写，并降低了css的维护成本，就像它的名称那样，less可以使用更少的代码做更多的事；

Less中文官网：http://lesscss.cn/

常见的css预处理器：Sass、Less、Stylus

**less是一门css预处理器，它扩展了css的动态特性**

### 3、Less使用

首先新建一个文件，后缀名为less，在这个less文件里书写less语句；

less语句：**lees变量**、**less编译**、l**ess嵌套**、**less运算**



### 4、Less变量

变量式没有固定的值，可以改变的。因为css中的一些颜色和数值等经常使用。

![image-20220207140407214](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207140407214.png)

**1）变量名规范**

必须有@为前缀；

不能包含特殊字符；

不能以数字开头；

大小写敏感；

![image-20220207140656483](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207140656483.png)

### 5、Less编译

本质上，less包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的css文件。

所以，我们需要把我们的less文件，编译生成css文件，这样我们的html页面才能使用。

![image-20220207141905370](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207141905370.png)

### 6、Less嵌套

情况1：

![image-20220207142344637](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207142344637.png)

情况2：

![image-20220207142736053](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207142736053.png)

### 7、Less运算（重点）

任何数字、颜色、或变量都可以参与运算，就是less提供了加（+）、减（-）、乘（*）、除（/）算术运算。

![image-20220207143304211](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207143304211.png)

**注意点：**

1）乘号（*）和除号（/）的写法

2）运算符中间左右有个空格隔开1px + 5

3）对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位；

4）如果两个值之间只有一个值有单位，则运算结果就取该单位；

## 四、rem适配方案

![image-20220207144902023](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207144902023.png)

![image-20220207144925162](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207144925162.png)

### 1、rem实际开发适配方案

1）按照设计稿与设备宽度的比例，动态计算并设置html根标签的font-size大小；（媒体查询）

2）css中，设计稿元素的宽、高、相对位置等取值，按照同等比例换算为rem单位的值；

### 2、rem适配方案技术使用

![image-20220207145554173](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207145554173.png)

### 3、rem适配方案一

![image-20220207145800099](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207145800099.png)

## ![image-20220207150026939](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207150026939.png)

![image-20220207150540024](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207150540024.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        @media screen and (min-width: 320px) 		{
            html {
                font-size: 21.33px;
            }
        }
        
        @media screen and (min-width: 750px) 		{
            html {
                font-size: 50px;
            }
        }
        
        div {
            width: 2rem;
            height: 2rem;
            background-color: pink;
        }
        /* 1. 首先我们选一套标准尺寸 750为准 
        2. 我们用屏幕尺寸 除以 我们划分的份数 得到了 html 里面的文字大小 但是我们知道不同屏幕下得到的文字大小是不一样的 */
        /* 3. 页面元素的rem值 =  页面元素在 750像素的下px值 / html 里面的文字大小 */
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

### 4、rem适配方案二

![image-20220207160929518](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220207160929518.png)

## 五、案例：苏宁易购首页