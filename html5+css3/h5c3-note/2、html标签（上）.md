

# html标签（上）

## 一、html语法规范

### 1、基本语法规范

1.1html标签是由尖括号包围的关键字，例如<html>.

1.2html标签通常是成对出现的，称为双标签。

1.3有些特殊的标签必须是单个标签，例如<br>,称为单标签

### 2、标签关系

可分为包含关系（父子关系）和并列关系（兄弟关系）

![image-20220202155731892](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202155731892.png)

## 二、html基本结构标签

### 1、基本结构标签

每个网页都会有一个基本的结构标签（也称为骨架标签），页面内容也是在这些标签上书写。HTML页面也称为HTML文档。

![image-20220202160520100](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202160520100.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  
</body>
</html>
```

### 2、基本结构标签总结

![image-20220202160724548](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202160724548.png)

## 三、开发工具

Sublime Text

vs code（推荐使用）

![image-20220202161423867](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202161423867.png)

## 四、DOUTYPE和lang以及字符集的作用

### 1、<!DOUCTYPE>标签（文档类型声明标签）

![image-20220202162020591](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202162020591.png)



### 2、lang语言

![image-20220202162310583](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202162310583.png)



### 3、charset

![image-20220202162525534](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202162525534.png)

​	以上自动生成，所以不需要你写啦，开心吧。但是要知道什么意思。

## 五、html常用标签

### 1、标签语义

所谓标签语义就是指标签的含义，即这个标签的作用。

根据标签的语义，在合适的地方给一个最为合理的标签，可以让页面更清晰。

### 2、标题标签

```html
<h1>-</h6>
```

特点：加粗、独占一行，h1-h6依次变小。

### 3、段落标签和换行标签

标题标签：

```html
<p></p>
```

换行标签:

```html
</br>
```

### 4、文本化格式标签

![image-20220202193739860](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202193739860.png)

重点记住加粗和倾斜

### 5、div和span标签

div和span是没有语义的，他们就是一个盒子，用来装内容。

特点：

1）div标签用来布局，一行只能放一个div，大盒子

2）span标签用来布局，一行可以多个span，小盒子

### 6、图像标签

1.img标签

```html
<img src="图像url"/>
```

 图像标签的其他属性：

![image-20220202195529372](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202195529372.png)

注意alt和tittle和区别

### 7、路径

1、目录文件夹和根目录

目录文件夹：就是普通文件夹，里面存放了我们做页面是需要的相关素材，比如html、图片。

根目录：打开目录文件夹的第一层就是根目录。

2、相对路径和绝对路径

（重点）相对路径：以引用文件所在位置为参考基础，而建立出的目录路径。简单说，图片相对于html页面的位置。

![image-20220202201808121](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202201808121.png)

（使用少）绝对位置：是指目录下的绝对位置，直接到达目标位置，通常从盘符开始的路径。

例如："C:\Users\yujunyu\Desktop\创新班\html+css笔记\css基本属性.md"

### 8、超链接标签（a标签）

1、语法格式：

```html
<a href="url" target="目标窗口的弹出方式">文本或图像</a>
```

a是单词是anchor的缩写，意为：锚

![image-20220202202546813](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202202546813.png)

2、链接分类

1）外部链接：例如

```
<a href="http://www.baidu.com">百度<a>
```

2）内部链接：网站内部页面之间的互相链接，直接链接内部页面名称即可，例

```
<a href="index.html">首页<a>
```

3）空链接：没有链接目标

```
<a href="#">首页<a>
```

4）下载链接：url为一个文件.exe或压缩包.zip，会下载这个文件

5）网页元素链接：在网页中的各种元素，如文本，图像，表格等都可以添加链接

6）锚点链接：点我们的点击链接，可以快速定位到页面中的某个位置（淘宝返回顶部）

![image-20220202203522113](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202203522113.png)

```
<a href="#life">个人生活</a>
<h3 id="life">asjkdhjis></a>
```

## 六、html中的注释和特殊字符

1、注释

![image-20220202204039270](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202204039270.png)

2、特殊字符

![image-20220202204122594](C:\Users\yujunyu\AppData\Roaming\Typora\typora-user-images\image-20220202204122594.png)

