+++
title = "Length of Line Segments"
date = 2021-12-17T13:54:52-05:00
draft = false

chapter = 2
section = 2
unit = 1
lesson = 4
+++

The **distance formula** can be used to calculate the length of a line segment on the Euclidean plane.

To get the length of a line segment $\overline{\rm AB}$ where $A(x_1, y_1)$, $B(x_1, y_1)$, and $d$ is the length:

$d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$
or
$d=\frac{\Delta y}{\Delta x}$

{{< svg id="ls" >}}
	<path d="M25,50 L75 50" stroke="#000" />
	<path d="M25,50 Q 50,40 75,50" stroke="#f00" fill="none" />
	<text x="50" y="40" style="font: italic 5px serif;">d</text>
	<circle cx="25" cy="50" r="2" fill="#000"/>
	<circle cx="75" cy="50" r="2" fill="#000"/>
	<text x="25" y="45" style="font: italic 5px serif;">A</text>
	<text x="75" y="45" style="font: italic 5px serif;">B</text>
{{< /svg >}}
