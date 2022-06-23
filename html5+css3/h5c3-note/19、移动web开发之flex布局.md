# 移动web开发之flex布局

目标：

能够说出flex盒子的布局原理；

能够使用flex布局的常用属性；

能够独立完成携程移动端首页案例;

## 一、flex布局体验

### 1、传统布局和flex布局



![image-20220206200821279](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206200821279.png)

![image-20220206200837612](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206200837612.png)





## 二、flex布局原理

flex是flexible Box的缩写，意为”弹性布局“，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为flex布局；

当我们为父盒子设为flex布局以后，子元素的float、clear和vertical-aligin属性将失效；

伸缩盒子=弹性布局=伸缩盒布局=弹性盒布局=flex布局；

### 1、原理

采用flex布局的元素，称为flex容器（flex container），简称”容器“。它的所有子元素自动成为容器成员，称为flex项目（flex item），简称”项目“。

![image-20220206201654801](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206201654801.png)

### 2、总结

**就是通过给父盒子添加flex属性，来控制盒子的位置和排列方式。**



## 三、flex布局父项常见属性

以下6个属性是对父元素设置的：

1）flex-direction：设置主轴方向；

2）justify-content：设置主轴上的子元素排列方式；

3）flex-wrap：设置子元素是否换行；

4）align-content：设置侧轴上的子元素排列方式（多行）

5）align-items：设置侧轴上的子元素排列方式（单行）

6）flex-flow：复合属性，相当于同设置了flex-direction和flex-wrap；

### 1、flex-direction：主轴方向

1）主轴和侧轴：

![image-20220206202538445](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206202538445.png)

2）语法：

```css
flex-direction:属性值；
```

![image-20220206202615449](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206202615449.png)

### 2、justify-content：主轴上的子元素排列方式

语法：

```css
justify-content:属性值；
```

![image-20220206202746864](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206202746864.png)

### 3、flex-wrap：子元素是否换行

语法：

```css
flex-wrap:属性值;
```

![image-20220206202955599](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206202955599.png)

### 4、align-content：侧轴上的子元素排列（多行）

语法：

```css
align-content:属性值；
```

![image-20220206203516092](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206203516092.png)

### 5、align-items：侧轴上的子元素排列（单行）

语法：

```css
align-item：属性值；
```

![image-20220206203050527](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206203050527.png)

### 6、flex-flow：复合属性

![image-20220206203856798](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206203856798.png)

### 7、总结

![image-20220206203930196](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206203930196.png)

## 四、flex布局子项常见属性

1）flex子项目占的份数；

2）align-self控制子项目自己在侧轴的排列方式；

3）order属性定义子项的排列顺序（前后顺序）；

### 1、flex属性

flex属性定义子项目分配剩余空间，用flex表示占用多少个数；

![image-20220206204335255](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206204335255.png)

### 2、align-self属性（了解）

![image-20220206205239925](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206205239925.png)

### 3、order属性（了解）

![image-20220206205317298](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206205317298.png)

## 五、案例：携程移动端首页

效果见：https://m.ctrip.com/html5/