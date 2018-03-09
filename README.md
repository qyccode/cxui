<p align="center">
  <a href="http://yawrap.yawzhou.com"><img src="http://img.yawzhou.com/yawrap.png" width="50%"/></a>
</p>

## Yawrap v0.3.0
---
> A simple procedural development of the web framework.

> 一个简单过程式开发的web框架。

项目主页：http://yawrap.yawzhou.com/
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
