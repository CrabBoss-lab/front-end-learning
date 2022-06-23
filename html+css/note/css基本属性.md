# css代码块
介绍：以`<div></div>`为例，css 引入部分写成，用花括号包裹起来的是 css 代码区，在括号
里面写 属性名：属性值； 每一个属性与属性之间用分号;隔开

```css
div{
 font-size:12px; //属性名：属性值；
 font-weight:bold;
}
```
一、基本属性
1、字体
![在这里插入图片描述](https://img-blog.csdnimg.cn/c61b623c67834c22875d2477c0bbb2ac.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6J-56ICB5p2_ODgy,size_20,color_FFFFFF,t_70,g_se,x_16)
字体颜色的三种写法：
1）纯英文单词
2）颜色代码，
如#ff4400; 其中每两位都是从 00 到 ff，分别对应红 r（从 00 到 ff），
绿 g（从 00 到 ff），蓝 b（从 00 到 ff），这是一个十六进制的数，代表的是饱和度，
如果没两位都可以重复，那么简写成#f40 淘宝红，#ffffff 白色，#000000 黑色。

3）颜色函数
如 color:rgb(255,255,255); //这是白色
rgb（0-255，0-255，0-255）里面的 0-255 是十进制数

2、边框
外边框有三个属性值，分别代表粗细、展示形式、颜色
![在这里插入图片描述](https://img-blog.csdnimg.cn/429f3275e8ff4c67bd6addfe5f15bc6a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6J-56ICB5p2_ODgy,size_18,color_FFFFFF,t_70,g_se,x_16)
//transparent 代表透明色

3、文本
![在这里插入图片描述](https://img-blog.csdnimg.cn/c10b46944f9c49f5a666067c5b24e556.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6J-56ICB5p2_ODgy,size_20,color_FFFFFF,t_70,g_se,x_16)
单位的衡量标准：绝对单位（m，cm 等），相对单位（px，em 等）。
px 是像素的意思，一个像素只能显示一个颜色；
屏幕的分辨率，就是说的像素，国际标准是每英寸所能容纳的垂直像素点数。
em 是文本单位，1em = 1* font-size =16px该文本的字体大。


![在这里插入图片描述](https://img-blog.csdnimg.cn/d3f77196a2424ca993cc53c64a985029.png)


待补充。