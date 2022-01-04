+++
title = "Unit 3"
date = 2022-01-04T14:16:56-05:00
draft = false

unit = 3
chapter = 4
+++

## Quick Reference

- {{<mi>}}x^0=1{{</mi>}}
- {{<mi>}}x^-1=\frac{1}{x}{{</mi>}}

**Mapping rule**: {{<mi>}}(x, y) \rightarrow (\frac{x}{b}+h)(ay+k){{</mi>}}.

**Quadratic relations** are relations whose equatio is in the form
{{<mi>}}y=ax^2+bx+c{{</mi>}}
where
{{<mi>}}a\in \mathbb{R}{{</mi>}},
{{<mi>}}b\in \mathbb{R}{{</mi>}},
{{<mi>}}c\in \mathbb{R}{{</mi>}}, and
{{<mi>}}a\ne 0{{</mi>}}.

**First differences** are the difference between consecutive {{<mi>}}y{{</mi>}} values.

**Second differences** are the difference between consecutive first differences.

Note: if a relation is quadratic:
- its first differences are not constant, and
- its second differences are constant.

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

[^1]: {{<ree "p4/u8/trans">}}

In the zeroes form, {{<mi>}}y=a(x-r)(x-s){{</mi>}},
the x-intercepts are {{<mi>}}(r, 0){{</mi>}} and {{<mi>}}(s, 0){{</mi>}},
and the vertex is {{<mi>}}(\frac{r+s}{2}, y){{</mi>}}
