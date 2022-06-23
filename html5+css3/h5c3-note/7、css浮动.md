# css浮动

## 一、浮动

### 1、传统网页布局的三种方式

网页布局的本质——用css来摆放盒子。

css提供了三种传统布局方式：普通流（标准流）、浮动、定位

### 2、标准流（普通流/文档流）

所谓标准流，就是标签按照规定好默认方式排列；

![image-20220204140921366](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204140921366.png)

### 3、浮动

1）为什么需要浮动流？？

![image-20220204141234199](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204141234199.png)

![image-20220204141241444](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204141241444.png)

![image-20220204141258117](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204141258117.png)

### 4、什么是浮动

float属性用于创建浮动框，将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的边缘。

基本语法：

![image-20220204141759569](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204141759569.png)

### 5、浮动特性（重难点）

**1）浮动元素会脱离标准流（脱标）；**

![image-20220204142118109](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204142118109.png)

例：

![image-20220204142432220](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204142432220.png)

![image-20220204142424827](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204142424827.png)

![image-20220204142451974](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204142451974.png)

**2）浮动的元素会一行内显示并且元素顶部对齐**；

![image-20220204142727444](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204142727444.png)

**3）浮动的元素会具有行内块元素的特性；**

![image-20220204142932379](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204142932379.png)

**4）浮动元素经常搭配标准流的父元素**

![image-20220204143121767](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204143121767.png)

## 二、常见网页布局

### 1、常见布局：

![image-20220204143429297](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204143429297.png)

![image-20220204143444407](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204143444407.png)

### 2、浮动两个注意：

![image-20220204143626033](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204143626033.png)



## 三、清除浮动

### 1、为什么清除浮动

![image-20220204144243445](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204144243445.png)

由于浮动元素不占用原文档的位置，所以它会对后面的元素排版产生影响；

### 2、清除浮动的本质

![image-20220204144514213](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204144514213.png)

### 3、清除浮动

语法：

![image-20220204144612550](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204144612550.png)

### 4、额外标签法

#### ![image-20220204145006086](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204145006086.png)

![image-20220204145220528](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204145220528.png)

![image-20220204145252107](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204145252107.png)

### 5、父级添加overflow属性

![image-20220204145431079](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204145431079.png)

### 6、父级添加:after伪元素

![image-20220204145459474](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204145459474.png)

![image-20220204145725237](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204145725237.png)

### 7、父级添加双伪元素

![image-20220204145758165](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204145758165.png)

![image-20220204145925315](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204145925315.png)

### 8、总结

![image-20220204150024846](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204150024846.png)

## 四、ps切图



## 五、学成在线案例

![image-20220204150636104](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220204150636104.png)