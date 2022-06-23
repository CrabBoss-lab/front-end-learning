# html标签（下）

## 一、表格标签

### 1、表格作用

作用：表格不是用来布局页面的，而是用来展示数据的

### 2、基本语法

![image-20220202205942895](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202205942895.png)

```html
<table>
		<tr> <td>性别</<td>姓名</td><td>年龄</td> </tr>
		<tr> <td>男</<td>户型帅</td><td>18</td> </tr>
		<tr> <td>男</<td>中克龙</td><td>18</td> </tr>
		<tr> <td>男</<td>需这栋</td><td>18</td> </tr>
	</table>
```

### 3、表头单元格标签

![image-20220202210024522](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202210024522.png)

```html
<table>
		<tr> <th>性别</<th>姓名</th><th>年龄</th> </tr>
		<tr> <td>男</<td>户型帅</td><td>18</td> </tr>
		<tr> <td>男</<td>中克龙</td><td>18</td> </tr>
		<tr> <td>男</<td>需这栋</td><td>18</td> </tr>
	</table>
```

### 4、表格属性

1、表格属性

![image-20220202210653027](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202210653027.png)

这些属性要写到table中！！！

cellpadding单元格内部文字到边框的距离

cellspacing单元格与单元格之间的距离，习惯改为0；

### 5、表格结构标签

![image-20220202212940186](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202212940186.png)

![image-20220202213020520](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202213020520.png)

![image-20220202213045364](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202213045364.png)

### 6、合并单元格

1、合并单元格方式

跨行合并：rowspan=“合并单元格的个数”

跨列合并：colspan=“合并单元格的个数”

注意区分行列！！！

![image-20220202213420463](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202213420463.png)

2、目标单元格

跨行：最上侧单元格为目标单元格，写合并代码

跨列：最左侧单元格为目标单元格，写合并代码

![image-20220202213714239](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202213714239.png)

3、合并单元格的步骤

1）先确定跨行、列。

2）找到目标单元格，写上：合并方式=合并的单元格数量。例

```html
<td colspan="2"></td>
```

3)删除多余的单元格。

举例：

代码如下：

![image-20220202214751836](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202214751836.png)

效果如下：

![image-20220202214822351](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202214822351.png)

### 7、表格总结

1、表格的相关标签

2、表格的相关属性

3、合并单元格

## 二、列表标签

### 前言

表格是用来显示数据的，那么列表就是用来布局的。

可分为：无序列表、有序列表和自定义列表

### 1、无序列表

基本语法：

![image-20220202220645798](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202220645798.png)

1、无序列表的各个列表项之间没有顺序级别之分，是并列的。

2、ul中只能嵌套li，直接在ul中输入其他标签或者文字是不可以的。

3、li相当与容器，可以容纳所有元素。

4、无序列表会带有自己的样式属性，但在实际使用时，我们会使用css来设置。

### 2、有序列表（理解）

![image-20220202222008402](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202222008402.png)

1、ol中只能嵌套li，直接在ol中输入其他标签或者文字是不可以的。

3、li相当与容器，可以容纳所有元素。

4、有序列表会带有自己的样式属性，但在实际使用时，我们会使用css来设置。



### 3、自定义列表（重点）

场景应用：

![image-20220202222326905](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202222326905.png)

基本语法：

![image-20220202222934991](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202222934991.png)

1、dl中只能包含dt、dd

2、dt和dd个数是没有限制，经常是一个dt和dd

### 4、列表总结

![image-20220202224047233](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202224047233.png)



## 三、表单标签

### 1、表单作用

为了收集信息

在网页中，实现交互功能，可以使用表单

### 2、表单的组成

由表单域、表单控件（表单元素）、提示信息

![image-20220203142322179](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203142322179.png)

### 3、表单域（form标签） 

表单域是一个包含表单元素的区域

作用：把范围内的表单元素信息提交给服务器。

基本语法：

![image-20220203142849568](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203142849568.png)

### 4、表单控件（表单元素）

1、input输入表单元素

基本语法：

![image-20220203143525055](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203143525055.png)

type属性的属性值：

![image-20220203143927376](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203143927376.png)

除type外，还有其他属性：

![image-20220203144427233](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203144427233.png)

注意：

1）name和value是每个表单元素都有的属性值，主要给后台人员使用；

2）name表单元素的名字，要求单选按钮和复选框要有相同的name值；

3）checked属性主要针对单选按钮和复选框，主要作用一打开页面，就可以默认选中某个表单元素；

4）maxlength是用户最大输入字符数，使用较少；

2、select下拉表单元素

![image-20220203151105312](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203151105312.png)

3、textarea文本域元素

使用场景：文本较长的的文本，

基本语法：![image-20220203151406836](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203151406836.png)



## 四、label标签

![image-20220203150828721](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203150828721.png)

## 五、综合案例

制作注册页面:
![image-20220203151513209](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220203151513209.png)



## 六、查阅文档

百度:	www.baidu.com

w3c：www.w3shcool.com

MDN:https://developer.mozilla.org/zh-CN/