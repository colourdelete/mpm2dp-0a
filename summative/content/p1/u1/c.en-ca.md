+++
title = "Circles"
date = 2021-12-17T13:54:52-05:00
draft = false

chapter = 2
section = 4
unit = 1
lesson = 6
+++

The **equation of a circle** with:
- radius $r$
- centre $O(h, k)$

is $(x-h)^2+(y-k)^2=r^2$.

Other forms of this equation include $r^2=x^2+y^2$ (notice how it's similar to the Pythagorean theorem).

To see whether a point $A$ is inside a circle, calculate $d_{AO}$ where $O=(h, k)$.
Whether a point $A$ is inside a circle (including the border) is $d_{AO}\le r$.

{{% eg id="o" %}}
$P(-5, 9)$ is outside the circle with $r=100$:
1. $d_{PO} = \sqrt{5^2+9^2} \approx 10.3$
2. $d_{PO} > r$
3. $10.3 \gtrapprox 100$
{{% /eg %}}

{{< svg id="c" >}}
	<path d="M25,50 L75 50" stroke="#000" />
	<text x="62.5" y="43" style="font: italic 5px serif;">r</text>
	<path d="M50,50 Q 62.5,40 75,50" stroke="#f00" fill="none" />
	<text x="50" y="45" style="font: italic 5px serif;">O</text>
	<circle cx="50" cy="50" r="25" stroke="#000" fill="none"/>
	<circle cx="50" cy="50" r="2" stroke="#000">
	<circle cx="50" cy="50" r="2" stroke="#000">
	<text x="50" y="45" style="font: italic 5px serif;">O</text>
{{< /svg >}}
