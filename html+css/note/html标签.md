# HTML1.0学习笔记
## **一.基础标签**

1.存文件一定要加**html**
2.html（Hypertext Markup Language）超文本标记语言
3.```<html></html>```根标签
   ```<head></head>```设置浏览器的，用户看不到
   ```<body></body>```给用户看的东西
   右键open in browser 可在浏览器中显示
4.*属性名= “ 属性值”* 这就是一个属性
属性值必须加双引号
5.编码字符集：I.GB2312 国家编码字符集（简称亚裔字符集）
						II.gbk（GB2312加繁体）
						III.Unicode是万国码，包括所有国家的语言 uft-8是unicode
6.```<title> 淘宝网</title>```网页的标题
7.```<html lang = “en”>```告诉搜索引擎爬虫，我们的网站是关于什么内容的
en 代表是英文，zh 是中文，德语是 de
竞价排名费 1-999 元/点击一次，但是有 IP 段锁定
例这样是告诉搜索引擎的
```<meta content = “服饰” name = “keywords”>```
```<meta content = “时装” name = “description”>```
8.```<p></p>```段标签，独占一行
9.```<h1></h1>```标题标签，最多六个标题标签，字体大小从小到大
10.```<strong></strong>```字体加粗
11.```<em></em>```斜体 
如果想实现既加粗又斜体，可以嵌套。部分代码如下：
`<strong>
<em>既加粗又斜体</em>
<strong`>
12.```<del></del>```中划线
13.```<address>浙江省杭州市</address>```地址标签 （特点：斜体+独占一行）
14.```<div></div>```独占一行
```<span></span>```不独占一行
div 和 span 这两个标签是为了成块展示，规格化，这两个就是容器，功能如下：
功能 1：分块明确，让整个页面更加结构化；
功能 2：捆绑操作的作用（搬书架）



## **二.html高级标签**

1.html编码格式是&；常用就以下三个：
1）空格，&nbsp；
2）<，&lt；
3）>，&gt；
2.`<br>`回车（换行）
3.`<hr>`水平线
4.**有序列表**标签
基本格式：

```html
<ol>
			<li></li>
			...
			<li></li>
</ol>

```

1）type地属性值只有**1/A/a/i/I**这五个
2）reversed属性（倒序）
3）如果想从第 2 个开始排序，就写```<ol type = “1” start = “2”>```
如果想从第 117 个开始排序，就写```<ol type = “i” start = “117”>```

```html
最喜欢的游戏
<ol type="1" reversed="reversed" start="3"> 
		<li>pubg</li>
		<li>Gta5</li>
</ol>
```

5.**无序列表**标签
基本格式：

```html
<ul >  
		<li></li>
		...
		<li></li>
</ul>

```

1）只有 type = “”这一个属性可以改，三个属性值disc（实心圆） square（实心方块）circle（空心圆）

```html
	<ul type="disc">  
		<li>天猫</li>
		<li>聚划算</li>
		<li>天猫超市</li>
	</ul>
```



6.`<img src = “sss.jpg style = “width:100px;”>`**图片标签**
1.网上URL 2.本地的绝对路径 3.本地的相对路径 
如 html 和图片在同一文件下，是一种相对关系，相对路径，写法：```<img src = “123.jpg”>```
D:/a/b/lesson2.html
D:/a/b/123.jpg
如 html 和图片不在同一文件下，是绝对路径，写法：```<img src = “D:/a/b/c/123.jpg”>```
D:/a/b/lesson2.html
D:/a/b/c/123.jpg
2.alt图片占位符 

```html
<img scr = “fy.jpg” style = “width:200px;” alt = “这是范爷”>
```

图片报错时，展示文字信息

3.tille 图片提示符 

```html
<img scr = “fy.jpg” style = “width:200px;” alt = “这是范爷” title = “This is fy”>
```

当鼠标放上去，就会显示这个信息

7.`<a></a>`**a标签**
```<a>```的功能
1）超链接

```html
<a href="http://www.baidu.com">www.taobao.com</a>
```

2)锚点

![在这里插入图片描述](https://img-blog.csdnimg.cn/4b4628fb6f814b95bb9ab2649d14ad9d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6J-56ICB5p2_ODgy,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
3)打电话、发邮件 

```html
<a href="tel:17788595484">给蟹老板打电话</a>`
```

4）协议限定符

```html
<a href="javascript:while(1){alert('让你手欠')}">你点我试试吖！！come on！</a>
```

8.**form表单标签**
1)form method = “get/post”这是 form 发送数据的两种方式
action = “http://ssffg.php”这是发送给谁，就是 action 的位置
form 表单里面还需要配合 input 来写，input 里面需要 type
`<input type = “text”>` //这个是输入框的意思
`<input type = “password”>` //这个是密码框的意思，默认是暗文
`<input type = “submit”>` //这个是提交的组件，也就是登录
`<input type = “submit” value = “login”>` //这样就改变了提交框的值
`<input type = “radio”>` //是单选框
`<input type = “checkbox”>` //是复选框

代码如下：

```html
<form method="get" action=""> 
		<p>
			usename:<input type="text" name="username" value="请输入用户名">
		</p>
		<p>
			password:<input type="password" name="username" >
		</p>
		<input type="submit" value="登录">
	</form>

```

2)发送数据要注重数据的主题（数据名）和数据的内容（数据值），缺一不可，没有
这个就发送不了数据
`<input type = “text” name = “1234”>` 此处 name 是数据名，1234 是数据值，此处 1234
可以随便填，最好填写接近意思的英文单词，方便使用
举例：代码如下：

```html
<form method="get" action=""> 
		<p>
			usename:<input type="text" name="username" >
		</p>
		<p>
			password:<input type="password" name="password" >
		</p>
		<input type="submit" >
	</form>
```

在浏览器中显示html？后面有值，就是发送成功的体现，如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/4b7e132c7b8149f4aca19ee52202cc23.png)
3）利用form完成单选功能
代码如下

```html
<form method="get" action="">
		你所喜欢的男星
		1.贝克汉姆<input type="radio" name="star" value="xiaobei" >
		2.莱昂纳多<input type="radio" name="star" value="xiaolai" >
		3.梅西<input type="radio" name="star" value="handsome">
		<input type="submit" name="">
	</form>
```

效果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/0707aa2fb67b43daa4f47f932dc0104b.png)

4）单选中设置默认选中

在`<input>`中添加checked="checked"，默认选中
代码如下：

```html
<form method="get" action="">
		<h1>
			CHOOSE YOUR SEX!!
		</h1>
		male:<input type="radio" name="sex" value="male" checked="checked">
		female:<input type="radio" name="sex"value="female">
		<br>
		<input type="submit" >
		
	</form>
```

效果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/3211b65b3b7946d3b3f7c7211f9f5f9a.png)


5）下拉菜单选项
利用组件select和option位置标签。
代码如下：

```html
<form method="get"action="">
		<h1>
			province
		</h1>
		<select name="province">
			<option>beijing</option>
			<option>shanghai</option>
			<option>hangzhou</option>
		</select>
		<input type="submit" >

		
	</form>
```

效果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/4a646f3b88ce482882ca07a67afe55a1.png)

 