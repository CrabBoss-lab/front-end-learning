# css简介

## 一、css简介

### （一）HTML的局限性

![image-20220203154444531](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203154444531.png)

### （二）css-美化

![image-20220203154628165](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203154628165.png)

总结：

1、HTML主要是做结构，显示元素内容；

2、css美化HTML，布局网页；

3、css最大价值：由html专注去做结构呈现，样式交给css，即结构（html）和样式（css）相分离；

### （三）css语法规范

![image-20220203155038933](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203155038933.png)

### （四）css代码风格

1、样式格式：1）紧凑格式 ；2）展开格式；

2、样式大小写：采取小写；

3、空格规范：1）属性值前面、冒号后面保留一个空；2）选择器和大括号中间保留空个；

## 二、css基础选择器

### （一）css选择器作用

选择器就是根据不同需求把不同的标签选出来这就是选择器的作用，简单来说就是选择标签的；

![image-20220203155929718](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203155929718.png)

以上css做了两件事：

1、找到所有h1标签。选择器（选对人）；

2、设置样式（做对事）；

### （二）选择器的分类

分为基础选择器和复合选择器

基础：标签选择器、类选择器、id选择器、通配符选择器

### （三）标签选择器

基本语法：

![image-20220203160548067](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203160548067.png)

作用：标签选择器可以把某一类标签全部选择出来，比如所有的div；

优点：可以快速为同类型标签统一样式；

缺点：不能设计差异化样式，只能选择全部的当前标签；

### （四）类选择器

如果想要差异化选择不同标签，单独选一个或某几个标签，可以使用类选择器；

语法：

![image-20220203161838805](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203161838805.png)

注意：

1）类选择器在html中以class属性表示，在css中国，类选择器以一个点“."号显示；

2）可以理解为给这个标签起了一个名字，来表示；

3）长名称或词组可以使用中横线“-”命名；

4）不能使用纯数字、中文等；

5）命名要有意义；

6）命名规范（web前端开发规范手册.doc)



类选择器口诀：样式点定义，结构class，一个或多个 ，开发最常用；

### （五）类选择器-多类名

我们可以给一个标签指定多个类名，简单理解一个标签有多个名字；

1、多类名使用方式

![image-20220203162215146](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203162215146.png)

1）在标签class属性中写多个类名；

2）多个类名中间必须用空格分开；

3）分别具有这些类名的样式；

![image-20220203162702988](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203162702988.png)

2、多类名在开发中使用场景：

![image-20220203162619789](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203162619789.png)

### （六）id选择器

html元素以id属性来设置id选择器，css中id选择器以“#”来定义；

![image-20220203162833379](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203162833379.png)

注意：id属性只能在每个html中出现一次；

口诀：样式#定义，结构id调用，只能掉一次，别人勿使用



id选择器和类选择器区别：

![image-20220203163209477](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203163209477.png)



### （七）通配符选择器

在css中，通配符选择器使用“*”定义，他表示选取页面所有元素；

![image-20220203163332386](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203163332386.png)

注意：

1）通配符选择器不需要调用；

2）特殊情况下使用（以下是清除所有元素标签的内外边距）

![image-20220203163502558](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203163502558.png)

### （八）基础选择器总结

![image-20220203163629798](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203163629798.png)

## 三、css字体属性

### （一）字体系列

css使用font-family属性定义字体系列；

![image-20220203163937329](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203163937329.png)

### （二）字体大小

css使用font-size属性定义字体大小；

![image-20220203164100039](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203164100039.png)

### （三）字体粗细

css使用font-weight属性定义字体属性；

属性值：

![image-20220203164429432](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203164429432.png)

![image-20220203184710943](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203184710943.png)

### （四）文字样式

css使用font-style属性设置文本的风格；

![image-20220203185006846](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203185006846.png)

### （五）字体符合属性

![l](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203185647213.png)

![image-20220203185737237](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203185737237.png)

个人感觉多此一举！！！

### （六）字体属性总结

![image-20220203190021388](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203190021388.png)

## 四、css文本属性

### （一）文本颜色

color属性用于定义文本的颜色

![image-20220203190317021](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203190317021.png)

**开发中常用16进制！！！**

### （二）对齐文本

text-align属性用于文本水平对齐；

![image-20220203190508148](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203190508148.png)

### （三）装饰文本

text-decoration属性规定添加到文本的修饰，可以给文本添加下划线、删除线、上划线等；

![image-20220203191231964](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203191231964.png)

### （四）文本缩进

![image-20220203191552405](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203191552405.png)

### （五）行间距

line-height属性用于设置行间的距离（行高）可以控制文字行与行之间得到距离；

![image-20220203191742467](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203191742467.png)

### （六）总结

![image-20220203192215868](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203192215868.png)

## 五、css的引入方式

可分为三种：1、行内样式表（行内式）2、内部样式表（嵌入式）3、外部样式表（链接式）

### （一）内部样式表

内部样式表是写到html页面内部，是将所有的css代码抽取出来单独放到style标签中；

![image-20220203192748387](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203192748387.png)

### （二）行内样式表

![image-20220203192955751](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203192955751.png)

### （三）外部样式表（常用）

![image-20220203193142358](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203193142358.png)

### （四）总结

![image-20220203193204702](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203193204702.png)

