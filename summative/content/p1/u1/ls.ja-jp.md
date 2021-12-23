+++
title = "線分の長さ"
date = 2021-12-17T13:54:52-05:00
draft = false

chapter = 2
section = 2
unit = 1
lesson = 4
+++

**2点間の距離の公式**を使ってユークリッド平面上の線分の長さを求めることが出来ます。

$A(x_1, y_1)$と$B(x_1, y_1)$のとき、
線分$\overline{\rm AB}$の長さは
$\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$
か
$\frac{\Delta y}{\Delta x}$
です。

{{< svg id="ls" >}}
	<path d="M25,50 L75 50" stroke="#000" />
	<path d="M25,50 Q 50,40 75,50" stroke="#f00" fill="none" />
	<text x="50" y="40" style="font: italic 5px serif;">d</text>
	<circle cx="25" cy="50" r="2" fill="#000"/>
	<circle cx="75" cy="50" r="2" fill="#000"/>
	<text x="25" y="45" style="font: italic 5px serif;">A</text>
	<text x="75" y="45" style="font: italic 5px serif;">B</text>
{{< /svg >}}
