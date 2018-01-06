<p align="center">
  <a href="http://yawrap.yawzhou.com" target="blank"><img src="http://img.yawzhou.com/yawrap.png" width="80%"/></a>
</p>

## Yawrap
---
> A lightweight web development framework based on Jquery.

> 一款基于Jquery的轻量级Web开发框架。

项目主页：http://yawrap.yawzhou.com

require Jquery(http://jquery.com/)
因此您在使用前需要引入Jquery

### Quick Start
dist文件夹里的便是用于生产环境的yawrap，里面Jquery的版本是1.8.3，您可以按照实际情况选择自己需要的Jquery。
然后您的页面结构应该是下面这样的，请注意无论js文件放在head内还是下面的/body之前，一定要把Jquery文件放在最上面,否则会报错jQuery is not defined。

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>这是个栗子</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>
<body>
    这里是body内容...
<script src="../dist/jquery.min.js"></script>
<script src="../dist/yawrap.min.js"></script>
</body>
</html>
```

### License
Released under the MIT License(https://opensource.org/licenses/MIT)

### Thanks
* 隐澈 (我的小伙伴UI小可爱)
