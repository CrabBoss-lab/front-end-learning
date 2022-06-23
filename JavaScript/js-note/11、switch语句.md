# switch语句

## 1、概念

**条件分支语句也叫switch语句**

语法：

```javascript
switch(条件表达式){  
	case 表达式:  
		语句...  
		break;  
	case 表达式:  
		语句...  
		break;  
	case 表达式:  
		语句...  
		break;  
	default:  
		语句...  
		break;  
}  
```

执行流程：

```javascript
//switch...case...语句
//在执行时，会依次将case后的表达式的值和switch后的表达式的值进行全等比较，
//如果比较结果为false，则继续向下比较。
//如果比较结果为true，则从当前case处开始向下执行代码。
//如果所有的case判断结果都为false，则从default处开始执行代码。
```

## 2、练习一

题目：对于成绩大于60分的，输出"合格"，低于60分的，输出"不及格"

方法一：

```javascript
var score=55
switch(parseInt(score/10)){
	case 10:
	case 9:
	case 8:
	case 7:
	case 6:
		console.log("合格");
		break;
	default:
		console.log("不合格");
		break;
}
```

方法二：

```javascript
switch(true){
	case score>=60:
		alert("合格");
		break;
	default:
		alert("不合格");
		break;
}
```

## 3、练习三

题目：从键盘接收整数参数，如果该数为1~7，打印对应的星期，否则打印非法参数

```javascript
var num=+prompt("请输入一个整数：");
switch(num){
	case 1:alert("星期一");break;
	case 2:alert("星期二");break;
    case 3:alert("星期三");break;
    case 4:alert("星期四");break;
    case 5:alert("星期五");break;
    case 6:alert("星期六");break;
    case 7:alert("星期七");break;
    default:alert("非法");break;
}
```

