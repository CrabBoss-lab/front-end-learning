# css第二天导读

## 一、Emmet语法

### （一）快速数生成html结构语法

![image-20220203194528682](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203194528682.png)

### （二）快速生成css样式语法

![image-20220203194823532](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203194823532.png)

### （三）快速格式化代码

![image-20220203194915906](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203194915906.png)

## 二、复合选择器

### （一）什么是复合选择器

![image-20220203195737084](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203195737084.png)

### （二）后代选择器（重点）

后代选择器又称为包含选择器，可以选择父元素里面的子元素。其写法呼吁事故把外层标签写在前面，内层标签写在后面，中间用空格分隔。当标签发生嵌套时，内层标签就是外层标签的后代。

语法：

![image-20220203200250564](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203200250564.png)

例如：

![image-20220203200305847](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203200305847.png)

注意：

元素1和元素2中间空格隔开；

元素1是父级，元素2是子级，最终选择元素2；

元素2可以是儿子，也可以是孙子，只要是元素1的后代即可；

元素1和元素2可以是任意基础选择器；

### （三）子选择器（重要）

![image-20220203200633521](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203200633521.png)

### （四）并集选择器（重要）

![image-20220203200832281](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203200832281.png)

### （五）伪类选择器

![image-20220203201039120](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203201039120.png)

1、注意事项：

1）为了确保生效，请按照LVHA的声明：link，visited，hover，active

2）记忆法：love hate 或lv包包hao

3）链接在浏览器有自带的样式，需要给a单独设置样式

2、伪类选择器在开发中的写法：

![image-20220203201637057](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203201637057.png)

### （六）:focus伪类选择器

：focus用于选取获得焦点的表单元素；

焦点就是光标，一般情况下input类表单元素才能获取，因此这个选择器也主要针对于表单元素；

基本语法：

![image-20220203202000158](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203202000158.png)

![image-20220203202058246](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203202058246.png)

### （七）总结

![image-20220203202143714](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203202143714.png)

## 三、css元素显示模式

html分为行内元素、块级元素和行内块元素；

### （一）块级元素

![image-20220203202737343](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203202737343.png)

### （二）行内元素

![image-20220203202832477](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203202832477.png)

### （三）行内块元素

![image-20220203202926765](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203202926765.png)

### （四）总结

![image-20220203202949332](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203202949332.png)

### （五）元素显示模式的转换

三种转换方式：

![image-20220203203127099](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203203127099.png)

### （六）侧边栏案例

![image-20220203203407186](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203203407186.png)

![image-20220203203417699](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203203417699.png)

![image-20220203203508062](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203203508062.png)

![image-20220203203522920](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203203522920.png)

### （七）单行文字垂直居中

行高（line-height）=高度（height）

## 四、css背景颜色

通过css背景属性，可以给页面元素添加背景样式；

背景（backgroud）属性可以设置背景颜色、图片、平铺、图片位置、图像固定等；

### （一）背景颜色

![image-20220203204010506](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203204010506.png)

一般默认为transport（透明）；

### （二）背景图片

![image-20220203204222879](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203204222879.png)

### （三）背景平铺

![image-20220203204258500](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203204258500.png)

### （四）背景图片位置

![image-20220203204345361](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203204345361.png)

![image-20220203204441637](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203204441637.png)

![image-20220203204636616](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203204636616.png)

![image-20220203204718725](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203204718725.png)

### （五）背景图像固定（背景附着）

![image-20220203204836109](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203204836109.png)

### （六）背景复合写法

![image-20220203205032209](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203205032209.png)

### （七）背景色半透明

![image-20220203205239386](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203205239386.png)

### （八）总结

![image-20220203205307804](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203205307804.png)

### （九）五彩导航栏案例

![image-20220203205409015](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203205409015.png)

![image-20220203205401079](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203205401079.png)

代码如下：

![image-20220203205645669](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203205645669.png)

![image-20220203205717412](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203205717412.png)

![image-20220203205748545](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203205748545.png)

## 五、css的三大特性

三大特性：层叠性、继承性、优先级

### （一）层叠性

![image-20220203205958671](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203205958671.png)

### （二）继承性

![image-20220203210047956](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203210047956.png)

行高的继承

![image-20220203210325256](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203210325256.png)



举例：

![image-20220203210359318](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203210359318.png)

![image-20220203210437401](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203210437401.png)

### （三）优先级

1、

![image-20220203210558183](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203210558183.png)

2、优先级注意事项：

![image-20220203210648594](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203210648594.png)

3、权重叠加

![image-20220203210921111](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203210921111.png)





