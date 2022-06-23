# 移动web开发之流式布局

目标：

能够知道移动web的开发现状

能够写出标准的viewport

能够使用移动web的调试方法

能够说出移动端常见的布局方案

能够描述流式布局

能够独立完成京东移动端首页

## 一、移动端基础

### 1、浏览器现状

总结：兼容移动端主流浏览器，处理webkit内核浏览器即可

### 2、手机屏幕现状

![image-20220206142757771](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206142757771.png)

### 3、常见移动端屏幕尺寸

![image-20220206142825805](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206142825805.png)

注：作为前端开发，不建议大家去纠结dp、dpi、pt、ppi等单位

### 4、移动端调试方法

**1）chrome DevTools（谷歌浏览器）的模拟手机调试；**

2）搭建本地web服务器，手机和服务器一个局域网内，通过手机访问服务器；

3）使用外网服务器，直接IP或域名访问；

![image-20220206143400242](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206143400242.png)

## 二、视口

**视口（viewport）**就是浏览器显示页面内容的屏幕区域。视口可以分为**布局视口**、**视觉视口**和**理想视口**

### 1、布局视口layout-viewport

![image-20220206144041402](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206144041402.png)

### 2、视觉视口visual-viewport

![image-20220206144130766](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206144130766.png)

### **3、理想视口ideal-viewport**

![image-20220206144233137](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206144233137.png)

### 4、meta视口标签

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,min-scale=1.0,user-scalable=no">
```

### ![image-20220206144341895](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206144341895.png)

## 三、二倍图

### 1、物理像素和物理像素比

1）物理像素指的是屏幕显示的最小颗粒，是物理真实存在的。这是厂商在出厂是就设置好的，比如手机的分辨率；

2）1px不是一定等于1个物理像素；

3）pc端1px等于一个物理像素，但移动端就不同；

4）1px能显示的物理像素点的个数，称为物理像素比或屏幕像素比；

### 2、多倍图

![image-20220206145727730](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206145727730.png)

![image-20220206150118149](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206150118149.png)

### 3、背景缩放background-size

![image-20220206150433271](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206150433271.png)

### 4、多倍图切图

**切图神器cutterman**

![image-20220206152102662](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206152102662.png)

## 四、移动端开发选择

1、移动端主流方案

可分为：单独制作移动端页面（主流）、响应式页面兼容移动端（其次）

### 1、单独制作移动端页面（主流）

![image-20220206152340488](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206152340488.png)

### 2、响应式页面兼容移动端（其次）

比如三星电子官网：www.samsung.com/.cn/   通过判断屏幕宽度来改变样式，以适应不同终端；

**缺点**：制作麻烦，需要花费很大精力去调兼容性问题；

## 五、移动端技术解决方案

### 1、移动端浏览器

![image-20220206152855029](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206152855029.png)

### 2、css初始化normalize.css

移动端css初始化推荐使用normalize.css

![image-20220206153029863](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206153029863.png)

官方网址：http://necolas.github.io/normalize.css/

### 3、css3盒子模型box-sizing

![image-20220206153546090](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206153546090.png)

![image-20220206153557478](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206153557478.png)

### 4、特殊样式

```css
/*css3盒子模型*/
box-sizing:border-box;
-webkit-box-xizing:border-box;
```

```css
/*点击高亮我们需要清除，设置为transparent（完全透明）*/
-webkit-tap-highlight-color:transparent;
```

```css
/*在移动端浏览默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式*/
-webkit-appearance:none;
```

```css
/*禁用长按页面时的弹出菜单*/
img,a{
    -webkit-touch-callout:none;
}
```

![image-20220206154057612](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206154057612.png)

## 六、移动端技术选型

![image-20220206154958375](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206154958375.png)

## 七、流式布局

### 1、概念

流式布局，就是**百分比布局**，也称非固定像素布局；

通过盒子的宽度设置成百分比来根据屏幕的**宽度**来进行伸缩，不受固定向像素的限制，内容向两侧填充；

流式布局方式是web开发使用的比较常见的布局方式；

### 2、应用

实现以下布局：

![image-20220206191550992](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220206191550992.png)

```html
<div class="container">
		<div class="box1"></div>
		<div class="box2"></div>
</div>
```

```css
*{
	margin: 0;
	padding: 0;
}
.container{
	width: 100%;
	/* 最大宽度和最小宽度 */
	max-width: 1000px;
	min-width: 600px;
	/* 水平居中 */
	margin: 0 auto;
}
.box1,
.box2{
	float: left;
	width:50%;
	height: 300px;
}
.box1{
	background-color: pink;
		}
.box2{
	background-color: purple;
}
```



### 3、注意

**1）max-width 最大宽度（max-height 最大高度）**

**2）min-width  最小宽度（min-height 最小高度）**

## 八、案例：京东移动端首页

效果见：https://m.jd.com/