# css定位

## 一、定位

### 1、为什么需要定位

![image-20220204151809813](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204151809813.png)

![image-20220204151826773](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204151826773.png)

![image-20220204151854044](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204151854044.png)

### 2、定位组成

定位：将盒子定在某一个位置，所以定位也是在摆放盒子，按照定位的方式移动盒子；

定位=定位模式+边偏移；

定位模式用于指定一个元素在文档中的定位方式；

边偏移则决定了该元素的最终位置；

1）定位模式

![image-20220204152226449](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204152226449.png)



2）边偏移

![image-20220204152315535](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204152315535.png)

### 3、静态定位（了解）

![image-20220204152434413](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204152434413.png)

### 4、相对定位（重点）

**相对定位**是元素在移动位置的时候，是相对它原来的位置来说的（自恋型）；

语法：

![image-20220204152820568](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204152820568.png)

特点：

![image-20220204152947977](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204152947977.png)

### 5、绝对定位（重点）

**绝对定位**是元素在移动位置的时候，是相对于它祖先元素来说的（拼爹型);

语法：

![](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204153149473.png)

特点：

![image-20220204153740886](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204153740886.png)

### 6、子绝父相

1）子绝父相的由来：

![image-20220204154134555](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204154134555.png)

2）子绝父相案例-hot模块

### 7、固定定位(重点)

1）概念：

**固定定位**是元素固定于浏览器可视区的位置。使用场景：可以在浏览器页面滚动时元素的位置不会改变；

2）语法：

![image-20220204160354656](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204160354656.png)

3）特点：
![image-20220204160404671](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204160404671.png)

4）固定定位小技巧：固定在版心右侧位置；

![image-20220204160638027](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204160638027.png)

![image-20220204160656975](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204160656975.png)

![image-20220204160749431](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204160749431.png)

![image-20220204160922280](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204160922280.png)

![image-20220204160932580](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204160932580.png)

### 8、粘性定位（了解）

概念：

粘性定位可以理解为是相对定位和固定定位的混合；

语法：

![image-20220204161132078](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204161132078.png)



特点：

![image-20220204161206343](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204161206343.png)

### 9、总结

![image-20220204161316302](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204161316302.png)

### 10、定位的叠放顺序z-index

可以使用z-index来控制盒子的前后次序（z轴）

语法：
![image-20220204161608837](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204161608837.png)

属性值：

![image-20220204161634799](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204161634799.png)

### 11、定位的拓展

**1）绝对定位的盒子居中**

![image-20220204162147852](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162147852.png)

![image-20220204162258699](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162258699.png)

![image-20220204162217785](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162217785.png)

![image-20220204162226274](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162226274.png)

**2）定位特殊特性**

特性一：

![image-20220204162429652](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162429652.png)

![image-20220204162554891](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162554891.png)

![image-20220204162505156](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162505156.png)

![image-20220204162520005](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162520005.png)

特性二：

![image-20220204162537626](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162537626.png)

![image-20220204162605128](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162605128.png)

![image-20220204162703335](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162703335.png)

<img src="C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162714556.png" alt="image-20220204162714556" style="zoom:200%;" />

**3）脱标的盒子不会触发外边距塌陷**

![image-20220204162842383](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204162842383.png)

**4）绝对定位（固定定位）会完全压住盒子**

浮动的元素不会压住下面标准流的文字：

![image-20220204163118164](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204163118164.png)

![image-20220204163201572](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204163201572.png)

![image-20220204163134594](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204163134594.png)

![image-20220204163211087](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204163211087.png)

但是绝对定位会完全压住：

![image-20220204163409846](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204163409846.png)

![image-20220204163421065](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204163421065.png)

![image-20220204163429579](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204163429579.png)

浮动之所以不会压住文字，因为浮动产生的最初目的是为了做文字环绕效果的。文字问绕浮动元素。

![image-20220204163724547](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204163724547.png)

实现文字环绕图片，只需给img加浮动；



## 二、综合案例

![image-20220209144342378](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220209144342378.png)

代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css3/case13.css">
</head>
<body>
    <div class="tb-promo">
        <img src="../asset/淘宝焦点图images/tb.jpg">
        <!-- 左侧箭头按钮 -->
        <a href="#" class="prev">&lt;</a>
        <!-- 右侧箭头按钮 -->
        <a href="#" class="next">&gt;</a>
        <!-- 底部小圆点 -->
        <ul class="promo-nav">
            <li class="selected"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    
```

```css
*{
    margin: 0;
    padding: 0;
}
.tb-promo{
    position: relative;
    width: 520px;
    height: 280px;
    background-color:pink;
    margin: 100px auto;
}
.tb-promo img{
    width:520px;
    height: 280px;
}
.prev,
.next {
    position: absolute;
    
    top: 50%;
    margin-top: -15px;
    width: 20px;
    height: 30px;
    background: rgb(0,0,0,0.3);
    text-align: center;
    line-height: 30px;
    color: white;
    text-decoration: none;
}
.prev{
    left: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
.next{
    right: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}

li{
    list-style: none;
}
.promo-nav{
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -35px;
    width: 70px;
    height: 13px;
    background: rgb(255,255, 255,0.3);
    border-radius: 7px;
}
.promo-nav li{
    float: left;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    margin: 3px;
}
.promo-nav .selected{
    background-color: #ff5000;
}

```



## 三、网页布局总结

![image-20220204164121271](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204164121271.png)



## 四、元素的显示与隐藏

![image-20220204164212504](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204164212504.png)

### 1、display显示隐藏

display属性用于设置一个元素何如显示；

![image-20220204164701898](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204164701898.png)

### 2、visibility显示隐藏

![image-20220204164853822](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204164853822.png)

### 3、overflow溢出显示隐藏

![image-20220204164942485](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204164942485.png)

### 4、土豆网鼠标经过显示遮罩案例

![image-20220209144455402](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220209144455402.png)

代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css3/case14.css">
</head>
<body>
    <div class="tudou">
        <div class="mask"></div>
        <img src="../asset/土豆images/tudou.jpg">
    </div>
</body>
</html>
```

```css
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
.mask{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background:rgba(0,0,0,0.4);
    background:url(../asset/土豆images/arr.png);
    background: no-repeat;
    background: center; */
    background: rgba(0, 0, 0, .4) url(../asset/土豆images/arr.png) no-repeat center;

}
.tudou:hover .mask{
    display:block;
}
```

