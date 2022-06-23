**1、JS代码需要写到script标签中**，类似于css代码需要写到style标签中。

**2、实现控制浏览器弹出一个警告框****

```javascript
alert("这是第一个js代码");
```

**3、让计算机在页面中输出一个内容****

//document.write()可以向body中输出一个内容；

```javascript
document.write("helloworld");
```

**4、向控制台输出一个内容****

  // console.log()可以向控制台输出一个内容；

```javascript
console.log("你猜猜我在那里？？");
```

**5、注意：**

**js的代码执行顺序是从上到下，一行一行执行；**以下代码先弹出一个警告框，再输出”helloworld“，最后再控制台输出相应内容；

```javascript
alert("这是第一个js代码");
document.write("helloworld");
console.log("你猜猜我在那里？？");
```

记住以上三输出语句；