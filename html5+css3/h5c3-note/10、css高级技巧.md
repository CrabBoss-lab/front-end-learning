# css高级技巧

## 一、精灵图

### 1、为什么需要精灵图

![image-20220204173519232](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204173519232.png)

核心原理：将网页中的一些小背景图像整合到一张大图中，主要服务器只需要一次

### 2、精灵图的使用

![image-20220204174138247](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204174138247.png)

## 二、字体图标

### 1、字体图标的产生

![image-20220204174649315](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204174649315.png)

### 2、字体图标的优点

![image-20220204174813864](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204174813864.png)

### 3、字体图标的下载

推荐下载字库:
**icomoon字库**   https://icomoon.io/

**阿里iconfont字库** www.iconfont.cn

### 4、字体图标的使用

![image-20220204175414360](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204175414360.png)

![image-20220204175546019](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204175546019.png)

## 三、css三角

### 1、基本原理

![image-20220204180048756](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180048756.png)

![image-20220204180118190](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180118190.png)

![image-20220204180134290](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180134290.png)

![image-20220204180239951](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180239951.png)



![image-20220204180228322](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180228322.png)

### 2、css三角应用

![image-20220204180627262](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180627262.png)

代码实现效果：



![image-20220204180451471](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180451471.png)

![image-20220204180427083](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180427083.png)

![image-20220204180519140](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180519140.png)

## 四、css用户界面样式

什么是界面样式？？？

所谓的界面样式，就是更改一些用户操作样式，以便提高更好的用户体验。

### 1、鼠标样式cursor

![image-20220204180914104](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204180914104.png)

### 2、轮廓线outline

![image-20220204181141939](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204181141939.png)

### 3、拖拽文本域resize

![image-20220204181227625](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204181227625.png)

## 五、vertical-align属性应用

### 1、vertical-align

css的vertical-align属性使用场景：经常用于设置五篇或者表单（行内块元素）和文字垂直对齐‘

官方解释：用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或行内块元素有效；

语法：

![image-20220204181606814](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204181606814.png)

![image-20220204181634250](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204181634250.png)

### 2、实现图片、表单和文字对齐

![image-20220204181839663](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204181839663.png)

### 3、解决图片底部有默认空白缝隙的bug

![image-20220204182009141](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204182009141.png)



## 六、溢出文字省略号显示

### 1、单行文本溢出省略

![image-20220204182153581](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204182153581.png)

### 2、多行文本溢出省略

![image-20220204182218239](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204182218239.png)

## 七、常见布局技巧

### 1、margin负值的运用

![image-20220204182935475](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204182935475.png)

### 2、文字围绕浮动元素

场景：

![image-20220204182959855](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204182959855.png)

![image-20220204183526573](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204183526573.png)

代码实现：

![image-20220204183330978](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204183330978.png)

![image-20220204183439146](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204183439146.png)

### 3、行内块的巧妙运用

场景：

![image-20220204183655870](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204183655870.png)

代码实现：

![image-20220204183957686](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204183957686.png)

```css
* {
            margin: 0;
            padding: 0;
        }
        .box {
            text-align: center;
        }
        .box a {
            display: inline-block;
            width: 36px;
            height: 36px;
            background-color: #f7f7f7;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 36px;
            text-decoration: none;
            color: #333;
            font-size: 14px;
        }
       .box .prev,
        .box .next {
            width: 85px;
        }
        .box .current,
        .box .elp {
            background-color: #fff;
            border: none;
        }
        .box input {
            height: 36px;
            width: 45px;
            border: 1px solid #ccc;
            outline: none;
        }
        .box button {
           width: 60px;
           height: 36px;
           background-color: #f7f7f7;
            border: 1px solid #ccc;
        }
```



![image-20220204184058585](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204184058585.png)

### 4、css三角强化

场景：

![image-20220204184138457](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204184138457.png)

原理：

![image-20220204184231295](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204184231295.png)

![image-20220204184336934](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204184336934.png)

![image-20220204184346714](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204184346714.png)

![image-20220204184353173](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204184353173.png)

代码实现：

```html
 <div class="box1"></div>
      <div class="price">
            <span class="miaosha">
                ¥1650
                <i></i>
            </span>
      <span class="origin">¥5650</span>
 </div>
```

```css

   		.price {
            width: 160px;
            height: 24px;
            line-height: 24px;
            border: 1px solid red;
            margin: 0 auto;
        }
        .miaosha {
            position: relative;
            float: left;
            width: 90px;
            height: 100%;
            background-color:red;
            text-align: center;
            color: #fff;
            font-weight: 700;
            margin-right: 8px;

        }
        .miaosha i {
            position: absolute;
            right: 0;
            top: 0;
            width: 0;
            height: 0;
            border-color: transparent #fff transparent transparent;
            border-style: solid;
            border-width: 24px 10px 0 0;
        }
        .origin {
            font-size: 12px;
            color: gray;
            text-decoration: line-through;
        }
```

## 八、css初始化

![image-20220204185004786](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204185004786.png)

例如京东网页css初始化：

```css
/* 把我们所有标签的内外边距清零 */
* {
    margin: 0;
    padding: 0
}
/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}
/* 去掉li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}
/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
```

