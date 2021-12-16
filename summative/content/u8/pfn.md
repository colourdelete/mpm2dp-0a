+++
title = "Parent Functions"
date = 2021-12-16T13:17:50-05:00
draft = false

[params]
unit = 8
lesson = 3
+++

**Even functions** satisfy $f(x) = f(-x)$.
(notice how even functions have even exponents (i.e. $\frac{n}{2} \in \mathbb{Z}$ in $y=x^n+c$))
For example, $y = |x|$ is even, and therefore it is symmetric on the y axis:
{{< svg id="even-func" title="an even function" >}}
{{< svg/grid >}}
{{< svg/origin >}}
<path d="M50,0 l0,100" stroke="var(--ok)" stroke-dasharray="4,4" fill="none" />
<path d="M50,50 l50,-50" stroke="#000" fill="none" />
<path d="M50,50 l-50,-50" stroke="var(--pass)" fill="none">
	<animate
		attributeName="d" 
		from="M50,50 l50,-50"
		to="M50,50 l-50,-50"
		dur="2s"
	/>
</path>
{{< /svg >}}

For example, $f$ is even,
where $f(x) = -x^2-2x^2+4$,
since $f(-x) = -(-x)^2-2(-x)^2+4 = -x^2+2x^2+4 = f(x)$.

**Odd functions (奇関数)** satisfy $f(x) = -f(-x)$.
For example, $y = x$ is odd, and therefore it is mirrored on both the $x$ and $y$ axes.
{{< svg id="odd-func" title="an even function" >}}
{{< svg/grid >}}
{{< svg/origin >}}
<path d="M0,0 l100,100" stroke="var(--ok)" stroke-dasharray="4,4" fill="none" />
<path d="M0,100 l50,-50" stroke="#000" fill="none" />
<path d="M50,50 l50,-50" stroke="var(--pass)" fill="none">
	<animate
		attributeName="d" 
		from="M50,50 l-50,50"
		to="M50,50 l50,-50"
		dur="2s"
	/>
</path>
{{< /svg >}}

{{% example %}}
$f$ is odd,
where $f(x) = x^3+4x$,
since $-f(-x) = -((-x)^3+4(-x)) = -(-x^3-4x) = x^3+4x = f(x)$.
{{% /example %}}

Functions that are neither even or odd do not meet any of the requirements.

{{% example %}}
$f$ is neither,
where $f(x)=\sqrt{x}$,
since $-f(-x) = -(\sqrt{-x}) = -\sqrt{-x} \ne f(x)$,
and since $f(-x) = \sqrt{-x} \ne f(x)$.
{{% /example %}}

# TODO: diagram

An **asymptote** is a line that the graph of a relation gets closer to, but never meets

# TODO: diagram

## Increasing and Decreasing Functions (possibly non-standard)

**Increasing functions (増加関数)** are functions where $y$ always increases when $x$ increases.
In other words, the slope is always $\ge 0$.
Another way to put it is that the *derivative of the function never goes below 0*.

{{% example %}}
{{% svg id="incr" title="an increasing function" %}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< unsafe >}}
<path d="M0,100 l100,-100" stroke="#000" fill="none" />
{{< /unsafe >}}
{{% /svg %}}
{{% /example %}}

**Decreasing functions (減少関数)** are the oppoosite of increasing functions: <br />
They are functions where $y$ always decreases when $x$ increases.
In other words, the slope is always $\le 0$.
Another way to put it is that the *derivative of the function never goes above 0*.

{{% example %}}
{{% svg id="decr" title="a decreasing function" %}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< unsafe >}}
<path d="M0,0 l100,100" stroke="#000" fill="none">
	<animate attributeName="rx" values="0;5;0" dur="10s" repeatCount="indefinite" />
</path>
{{< /unsafe >}}
{{% /svg %}}
{{% /example %}}

## Common Parent Functions

| Name | Equation | Graph | Domain | Range | Symmetry | Asymptotes | $x$ Intercept | $y$ Intercept | Quadrants | Increasing |
|---|---|---|---|---|---|---|---|---|---|---|
| Constant Function | $f(x)=c$ | ![](../fn-const.png) | {{< unsafe >}}$D\{x\in \mathbb{R}\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{R} | y=c\}${{< /unsafe >}} | Even | None | None or all | $c$ | I and II | Constant |
| Linear Function | $f(x)=x$ | ![](../fn-lin.png) | {{< unsafe >}}$D\{x\in \mathbb{R}\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{R}\}${{< /unsafe >}} | Odd | None | 0 | 0 | I and III | Increasing |
| Quadratic Function | $f(x)=x^2$ | ![](../fn-quad.png) | {{< unsafe >}}$D\{x\in \mathbb{R}\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{R} | y \ge 0\}${{< /unsafe >}} | Even | None | 0 | 0 | I and II | Neither |
| Cubic Function | $f(x)=x^3$ | ![](../fn-cubic.png) | {{< unsafe >}}$D\{x\in \mathbb{R}\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{R}\}${{< /unsafe >}} | Odd | None | 0 | 0 | I and III | Increasing |
| Root Function | $f(x)=\sqrt{x}$ | ![](../fn-root.png) | {{< unsafe >}}$D\{x\in \mathbb{R} | x \ge 0\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{R} | y \ge 0\}${{< /unsafe >}} | Neither | None | 0 | 0 | I | Increasing |
| Reciprocal Function | $f(x)=\frac{1}{x}$ | ![](../fn-reciprocal.png) | {{< unsafe >}}$D\{x\in \mathbb{R} | x \ne 0\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{R} | y \ne 0\}${{< /unsafe >}} | Odd | $x=0$ and $y=0$ | None | None | I and III | Decreasing |
| Absolute Function | {{< unsafe >}}$f(x)=|x|${{< /unsafe >}} | ![](../fn-abs.png) | {{< unsafe >}}$D\{x\in \mathbb{R}\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{R} | y \ge 0\}${{< /unsafe >}} | Even | None | None | None | I and IV | Neither |
| Ceiling Function | $f(x)=\lceil x\rceil$ | ![](../fn-ceil.png) | {{< unsafe >}}$D\{x\in \mathbb{R}\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{Z}\}${{< /unsafe >}} | Odd | None | None | None | I and III | Increasing |
| Floor Function | $f(x)=\lfloor x\rfloor$ | ![](../fn-floor.png) | {{< unsafe >}}$D\{x\in \mathbb{R}\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{Z}\}${{< /unsafe >}} | Odd | None | None | None | I and III | Increasing |
| Round Function | $f(x)=\lceil x\rfloor$ | ![](../fn-round.png) | {{< unsafe >}}$D\{x\in \mathbb{R}\}${{< /unsafe >}} | {{< unsafe >}}$R\{y\in \mathbb{Z}\}${{< /unsafe >}} | Odd | None | None | None | I and III | Increasing |
