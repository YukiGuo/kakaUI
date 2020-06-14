---
title: Gird 栅格
---

# Gird 栅格
### 示例


<ClientOnly>
<gird-demo></gird-demo>
</ClientOnly>


### API
| 属性          | 说明           | 值  |
| ------------- |:-------------| :-----|
| gutter  |k-row：是否有间隔 | 数字或者数字的字符串，例如12"12" |
| wrap  |K-row：当前列总和大于24时，是否换行，默认为true   | `true `false` |
| span|表示当前列的宽度，最大是24|  数字或者数字的字符串，例如12"12"|
| offset  |表示当前列的间隔   |  数字或者数字的字符串，例如12"12"|
| m l xl |表示不同屏幕下网格的分配   | `Object` 例如 `:m="{span:12}" :l="{span:'6'}"`|
