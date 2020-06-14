---
title: Toast 弹窗
---


# Toast 弹窗

### 示例

使用方法
<ClientOnly>
    <toast-demo></toast-demo>
    <toast-demo-2></toast-demo-2>
</ClientOnly>

### API

| 属性          | 说明           | 值  |
| ------------- |:-------------| :-----|
|autoClose |是否自动关闭，默认为true |`true` `false` |
|autoCloseDelay  |设置多久自动关闭 s|`Number` |
| closeButton   |设置关闭按钮中的文字和回调函数|`{  text:'关闭', callback: undefined}`|
|enableHtml |是否支持html,默认为false | `true` `false` |
|position |弹窗的位置 ，默认为top| 'top', 'bottom', 'left', 'right', 'center'|
