# **html+css大厂面试题**

**1、请写出 HTML 基本的结构**

```html
<html>
    <head>
    </head>
    <body>    
    </body>
</html>


```

**2、请写出常见的行级元素和块级元素（每样不少于 4 个）**

**行级元素：span strong em a del** 

**块级元素：div p ul li ol form adress**

**3、请设计一个以用户名密码提交表单**

**![image-20220131105516869](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220131105516869.png)**

**代码如下：**

```html
<form method="get" action="">
    

<p>
    username:<input type="text" name="username">
</p>
<p>
password:<input type="password" name="password"
</p>
<p>
    sex:
    male<input type="radio" name="sex" checked="checked">
    female<input type="radio" name="sex" >
</p>
<p>
    <input type="submit">
</p>
</form>
```

**4、请详细说明 position 定位的值有什么区别**

**5、font-size:20px;设置的是字体的宽还是高**

**高。**

**6、2015 阿里笔试：编写一个 css 让一个已知宽高的 div，在 pc/手机端水平垂直居中**

**7、2015 阿里笔试：内核为 webkit 的浏览器包括： CD**

**A.IE B.Firefox C.Chrome D.Safari E.opera7（较老版本）**

**//新版本的 opera 也用的 webkit**

**8、2015 阿里笔试：通常 html 标签都是需要特别的书写来闭合，例如 标签的闭合就是，name 下列哪些标签不需要类似的闭合？**

**ABCD**



****

**A.**

```
<br>
```

**B.**

```
<hr>
```

**C.**

```
<command>
```



**D**

```
<meta>
```

**9、**

**![image-20220131111509391](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220131111509391.png)**

**答案：**

```html
<div class="wrqpper">
    <img src=""class="img">
    <p class="content1">
    {最多两行20px #333，顶部对齐图片，底部间距8px}
    </p>
    <p class="content2">
    {12px #666 行高1.2}使用语义化的html标签完成以下布局，考虑模块化和扩展性。容器默认宽度320px，右侧。
     </p>
    
</div>
```

```css
*{
	margin: 0;
	padding: 0;
}
.wrapper{
	width: 320px;

}
.wrapper:hover{
	width: 400px;
}
.wrapper.img{
	width: 100px;
	height: 100px;
	float: left;
}
.content1{
	font-size: 20px;
	line-height: 40px;
	height: 40px;
	overflow: hidden;
	color: #333;
	margin-bottom: 8px;
}
.content2{
	font-size: 12px;
	color: #666;
	line-height: 1.2em;
}
```



**10、2015 阿里笔试:请使用至少两种方案，实现左中右三栏布局，左栏定宽 100px；右 栏定宽 100px，中栏宽度不固定，三栏宽度加起来正好是 100%** 

**答案：解决 ul 包住 li 的问题，用三件套。父级的 after 和 content“”，display：block， clear：both； 然后再父级里面加一个新的 zan mu 一**

**11、**

**![image-20220131112444758](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220131112444758.png)**