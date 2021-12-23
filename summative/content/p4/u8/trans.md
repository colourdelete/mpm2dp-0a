+++
title = "Transformations of Functions"
date = 2021-12-16T13:17:50-05:00
draft = false

unit = 8
lesson = 6
+++
For functions of the form $g(x)=af(x-d)+c$,
constants $a$, $d$, and $c$ change the shape or location of the graph of $g(x)$.

{{< svg id="u8l7abs" title="$y=|x|$" >}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< svg/markers >}}
<path d="M50,50 l50,-50" stroke="#000" fill="none" />
<path d="M50,50 l-50,-50" stroke="#000" fill="none" />
{{< /svg >}}

{{< svg id="u8l7rx" title="$y=-|x|$" >}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< svg/markers >}}
<path d="M50,50 l50,50" stroke="#000" fill="none" />
<path d="M50,50 l-50,50" stroke="#000" fill="none" />
{{< /svg >}}


**Mapping rule**: {{< unsafe >}}$(x, y) \rightarrow (\frac{x}{b}+h)(ay+k)${{< /unsafe >}}

For any function with the form: {{< unsafe >}}$g(x)=af(b(x-h))+k${{< /unsafe >}})

Constants:
- $a$ vertical stretch/compression
- $b$ horizontal stretch/compression
- $h$ vertical translation
- $k$ horizontal translation

**Transformations**:
For this equation, {{< unsafe >}}$y=af(b(x-h))+k${{< /unsafe >}}:
- Vertical Scaling (using $a$)
	- If $|a| > 1$: {{% abbr "vertical stretch" %}}vs{{% /abbr %}} by $|a|$.
	- Else if $0 < |a| < 1$: {{% abbr "vertical compress" %}}vc{{% /abbr %}} by $|a|$.
- Vertical Reflection (using $a$)
	- If $a < 0$: reflect on x-axis.
- Horizontal Scaling (using $b$)
	- If $|b| > 1$: {{% abbr "horizontal stretch" %}}hs{{% /abbr %}} by $\frac{1}{|b|}$.
	- Else if $0 < |b| < 1$: {{% abbr "horizontal compress" %}}hc{{% /abbr %}} by $\frac{1}{|b|}$.
- Horizontal Reflection (using $b$)
	- If $b < 0$: reflect on y-axis.
- Horizontal Translation (using $h$)
	- If $h > 0$: {{% abbr "horizontal translation" %}}ht{{% /abbr %}} $h$ right.
	- Else uf $h < 0$: {{% abbr "horizontal translation" %}}ht{{% /abbr %}} $h$ left.
- Vertical Translation (using $k$)
	- If $k > 0$: {{% abbr "vertical translation" %}}vt{{% /abbr %}} $k$ up.
	- Else uf $k < 0$: {{% abbr "vertical translation" %}}vt{{% /abbr %}} $k$ down.

An **invariant point** is a point that is unchanged by a transformation. (not exactly the same as invariants in computer science)

{{< svg id="u8l7ip" title="$y=|x|$ and $y=-|x|+4$" >}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< svg/markers >}}
<path d="M50,50 l50,-50" stroke="#000" fill="none" />
<path d="M50,50 l-50,-50" stroke="#000" fill="none" />
<path d="M50,30 l50,50" stroke="#000" fill="none" />
<path d="M50,30 l-50,50" stroke="#000" fill="none" />
<circle cx="40" cy="40" r="2" stroke="#000" />
<circle cx="60" cy="40" r="2" stroke="#000" />
{{< /svg >}}
