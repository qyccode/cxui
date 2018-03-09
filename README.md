<p align="center">
  <a href="http://yawrap.yawzhou.com"><img src="http://img.yawzhou.com/yawrap.png" width="50%"/></a>
</p>

## Yawrap v0.3.0
---
> A simple procedural development of the web framework.

> Yawrap是一款为懒的写css党而生的渐进式web前端框架，你只需要专心编辑你的HTML，在提高开发效率的同时保证页面性能及渲染的可靠性，后面我们会慢慢完善模块化以及组件化，将Yawrap做到极致。

<<<<<<< HEAD
项目主页：http://yawrap.yawzhou.com 
=======
项目主页：http://yawrap.yawzhou.com/
>>>>>>> 220c372a0ff98056c86eb82567ac9af7fe3da002
开发文档：https://yawzhou.github.io/yawrap/doc/

### Quick Start
dist文件夹里面的yawrap.min.js便是用于生产环境的yawrap，然后您的页面结构应该是下面这样的：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>title</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>
<body style="display:none;">
    Here is the body content...
<script src="../dist/yawrap.min.js"></script>
<script type="text/javascript">
    //如果需要的话，你可以自定义三种颜色，然后分别以yawmain、yawaux、yawspa调用
    yawColor('主要色','辅助色','备用色')
</script>
</body>
</html>
```

### License
Released under the MIT License(https://opensource.org/licenses/MIT)

### Thanks
* 我的UI小妹妹 FanyXu (听起来小妹妹比小姐姐更可爱不是嘛 #0.0)

##### Yawrap完全遵循语义化版本2.0.0(https://semver.org/lang/zh-CN/)
