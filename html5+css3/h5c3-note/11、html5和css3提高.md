# html5和css3提高

目标:

1、能够说出3-5个HTML5新增布局和表单标签

2、能够说出css3的新特性有哪些？

## 一、html5的新特性

### 前言

html5的新增特性主要是针对于以前的不足，增加了一些**新的标签**、**新的表单**和**新的表单属性**等

### 1、html5新增的语义化标签

![image-20220204185713483](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204185713483.png)

### 2、html新增的多媒体标签

主要包含两个：

1）音频：

```
<audio>
```

2）视频：

```
<video>
```

#### **1）视频标签**

![image-20220204190106415](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204190106415.png)

![image-20220204190234712](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204190234712.png)

语法：
![image-20220204190141821](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204190141821.png)

#### **2）音频标签**

![image-20220204190405230](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204190405230.png)

![image-20220204190531297](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204190531297.png)

语法：![image-20220204190422984](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204190422984.png)

![image-20220204190442471](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204190442471.png)

#### 3）总结

![image-20220204190659575](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204190659575.png)

### 3、html5新增的表单（input）类型

![image-20220204190812869](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204190812869.png)

**重点记住：number、tel、search三个**

### 4、html新增的表单属性

![image-20220204191126297](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204191126297.png)

![image-20220204191211715](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204191211715.png)

## 二、css3的新特性

### 前言

新增的css3特性有兼容性问题，ie9+才支持；

移动端支持优于pc端；

不断改进中；

应用相对广泛；

现阶段主要学习：**新增选择器**和**盒子模型**以及**其他特性**

### 1、css新增选择器

#### 1）属性选择器

属性选择器可以根据元素特定属性来选择元素。这样就可以不用借助类或id选择器。

![image-20220204191732193](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204191732193.png)

例1：

```html
<!-- 1. 利用属性选择器就可以不用借助于类或者id选择器 -->
<input type="text" value="请输入用户名">
<input type="text"> 
```

```css
必须是input 但是同时具有 value这个属性 选择这个元素 
input[value] {
    color:pink;
} 
```

例二：

```html
<!-- 2. 属性选择器还可以选择属性=值的某些元素 重点务必掌握的 -->
<input type="text" name="" id="">
<input type="password" name="" id="">
```

```css
 /* 只选择 type =text 文本框的input 选取出来 */
input[type=text] {
    color: pink;
}
```

例三：

![image-20220204193037598](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204193037598.png)

![image-20220204192622182](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204192622182.png)



例四：

![image-20220204193054913](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204193054913.png)

![image-20220204192732194](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204192732194.png)

#### 2）结构伪类选择器

![image-20220204193720599](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204193720599.png)

**例1：——选择ul中的第一个孩子**

![image-20220204193919578](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204193919578.png)

![image-20220204194108755](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204194108755.png)

**例2：——选择ul中的最后一个孩子**

![image-20220204193919578](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204193919578.png)

![image-20220204194153783](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204194153783.png)

**例3：——选择ul中的第n个孩子**

![image-20220204195518484](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204195518484.png)

**情况一：**

![image-20220204195459198](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204195459198.png)

![image-20220204193919578](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204193919578.png)

![image-20220204194344506](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204194344506.png)

**情况二：**

![image-20220204194617503](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204194617503.png)

![image-20220204193919578](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204193919578.png)

![image-20220204195134626](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204195134626.png)

**情况三：**

![image-20220204195357168](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204195357168.png)

![image-20220204195535580](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204195535580.png)

![image-20220204195559221](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204195559221.png)

**其他情况：**

![image-20220204195656928](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204195656928.png)

**例4：——选择第一个或最后一个孩子**

![image-20220204193919578](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204193919578.png)

![image-20220204203333748](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204203333748.png)

**区别：**

![image-20220204203424739](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204203424739.png)

#### 3）伪元素选择器

![image-20220204203701061](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204203701061.png)

**使用场景1：伪元素字体图标**

![image-20220204203934622](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204203934622.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>伪元素选择器使用场景-字体图标</title>
    <style>
        @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot?1lv3na');
            src: url('fonts/icomoon.eot?1lv3na#iefix') format('embedded-opentype'),
                url('fonts/icomoon.ttf?1lv3na') format('truetype'),
                url('fonts/icomoon.woff?1lv3na') format('woff'),
                url('fonts/icomoon.svg?1lv3na#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }

        div {
            position: relative;
            width: 200px;
            height: 35px;
            border: 1px solid red;
        }

        div::after {
            position: absolute;
            top: 10px;
            right: 10px;
            font-family: 'icomoon';
            /* content: ''; */
            content: '\e91e';
            color: red;
            font-size: 18px;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

**使用场景2：当鼠标经过发生变化（仿土豆网显示隐藏遮罩案例**）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .tudou{
    position: relative;
    width: 450px;
    height: 320px;
    background-color: pink;
    margin: 30px auto;
}
.tudou img{
    width: 100%;
    height: 100%;
}
.tudou::before{
    content: "";
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4) url(../asset/土豆images/arr.png) no-repeat center;

}
.tudou:hover::before{
    display:block;
}
    </style>
</head>
<body>
    <div class="tudou">
        <div class="mask"></div>
        <img src="../asset/土豆images/tudou.jpg">
    </div>
</body>
</html>
```

**使用场景3：伪元素清除浮动**

![image-20220204204433253](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204204433253.png)

### 2、css3盒子模型

css3可以通过**box-sizing**来指定盒模型，有两个值：即可指定为**content-box**、**border-box**，这样我们盒子大小的方式就改变了；



可以分为两种情况：

1、**box-sizing：content-box**     盒子大小为width+padding+border（以前默认的）

2、**box-sizing：border-box**   盒子大小为width



如果盒子模型我们改为了box-sizing：border，那padding和border就不会撑大盒子了（前提是padding和border不会超过width宽度）



在清除样式时加入**box-sizing：border-box**

![image-20220204205708959](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204205708959.png)3

### 3、css3其他特性（了解）

#### 1）滤镜filter

**图片变模糊：**

![image-20220204210149980](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204210149980.png)





#### 2）calc函数

**计算盒子宽度width：cal函数**

![image-20220204210321864](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204210321864.png)

例：

![image-20220204210644601](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204210644601.png)

### 4、css3过渡

#### 1）概念：

![image-20220204210848751](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204210848751.png)

#### 2）语法：

![image-20220204210921783](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204210921783.png)

属性值：

![image-20220204210935605](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204210935605.png)

例：

![image-20220204211050239](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204211050239.png)

记住过渡口诀：谁做过渡，给谁加

#### 3）进度条案例

目的：

![image-20220204211243652](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204211243652.png)

代码如下：

![image-20220204211345251](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204211345251.png)

![image-20220204211400765](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204211400765.png)

效果:当鼠标移到进度条上，逐渐向右过渡



