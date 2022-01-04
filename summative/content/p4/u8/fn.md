+++
title = "Functions"
date = 2021-12-16T13:16:46-05:00
draft = false

unit = 8
lesson = 1
chapter = 1
section = 1
+++

$f(x)$ is pronounced as "f of x", "f at x", among many others. It means to replace $f(x)$ with the definition of $f(x)$.

For example, if $f(x)=x+1$, $f(1) = 1+1 = 2$ and $f(y) = x+y$.

{{% svg id="func" title="a function" desc="a function for use in the example below" %}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< unsafe >}}
<path d="M0,0 Q50,100 100,0" stroke="#000" fill="none" />
{{< /unsafe >}}
{{% /svg %}}

$f(0) = 0$

## Composition of Functions

**Function composition** is a useful way to make new functions. It is done using the $\circ$ operator.

$(f\circ g)(x) = f(g(x))$

This is pronounced as "f composed with g of x" ($g\circ f$ is pronounced "g composed with f").

 Note that this is similar to the funtion composition operator (`.`) in Haskell.

For example,
if $g(x)=5x^2+1$,
and $f(x)=x+1$,
then $g(f(x)) = (g\circ f)(x) = g(x+1) = 5(x+1)^2+1$
