+++
title = "Relations and Functions"
date = 2021-12-16T12:55:56-05:00
draft = false

unit = 8
lesson = 1
+++

## Definitions

Let $x$, $y$ represent an independent, and dependent variable, respectively.

A **relation** defines relations between two sets.

It can also be represented as a set of ordered pairs with two values, $x$ and $y$.

It can also be defined as a referentially transparent and side-effect-free procedure (in computer science).

`Relation = List[Tuple[complex, complex]]`

A **function** is a relation where each value of $x$ corresponds with only one value of $y$.

The **domain** of a relation is the set of all values of $x$.

```python3
def domain(relation):
    return [s[0] for s in relation]
```

The **range** of a relation is the set of all values of $y$.

```python3
def range(relation):
    return [s[1] for s in relation]
```

## Determine if a Relation is a Function

### Vertical Line Test

The **vertical line test** can be used to determine whether a relation is a function.
If for every vertical line on the appropriate plane, there exists only one point where the vertical line intersects the relation, the relation is a function.

An example of a relation:

{{% svg id="circ" title="circle" desc="a circle centred at the origin, which fails the vertical line test because a vertical line at x=0 goes through two points" style="width: 24%;" %}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< unsafe >}}
<circle cx="50" cy="50" r="25" stroke="#000" fill="none"/>
<path d="M30,0 l0 100" stroke="var(--fail)" />
{{< /unsafe >}}
{{% /svg %}}

An example of a function:

{{% svg id="lin" title="linear" desc="a linear equation, which fails the vertical line test because a vertical line at x=0 goes through two points" style="width: 24%;" %}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< unsafe >}}
<path d="M0,0 l50 50" stroke="#000" />
<path d="M30,0 l0 100" stroke="var(--pass)" />
{{< /unsafe >}}
{{% /svg %}}

An example of a function:

{{% svg id="quad" title="quadratic" desc="an quadratic equation, which fails the vertical line test because a vertical line at x=0 goes through two points" style="width: 24%;" %}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< unsafe >}}
<path d="M0,0 Q50,100 100,0" stroke="#000" fill="none" />
<path d="M30,0 l0 100" stroke="var(--pass)" />
{{< /unsafe >}}
{{% /svg %}}

An example of a relation:

{{% svg id="inv-quad" title="inverse quadratic" desc="an inverse quadratic equation, which fails the vertical line test because a vertical line at x=0 goes through two points" style="width: 24%;" %}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< unsafe >}}
<path d="M0,0 Q100,50 0,100" stroke="#000" fill="none" />
<path d="M30,0 l0 100" stroke="var(--fail)" />
{{< /unsafe >}}
{{% /svg %}}

### Ensuring a Relation is a Function

To ensure a relation is a function,
restrict its domain to make sure that all conflicts are resolved.

For example, for this relation:
{{% svg id="restrict-rel" title="a relation" %}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< unsafe >}}
<path d="M0,30 l100 0" stroke="#000" />
<path d="M0,70 l100 0" stroke="#000" />
<path d="M30,0 l0 100" stroke="var(--fail)" />
{{< /unsafe >}}
{{% /svg %}}
we can restrict the domain: $D\{x\in \mathbb{R} | x \ge 0\}$
{{% svg id="restrict-fn" title="a relation" %}}
{{< svg/grid >}}
{{< svg/origin >}}
{{< unsafe >}}
<path d="M0,30 l100 0" stroke="#000" />
<path d="M0,70 l100 0" stroke="#000" stroke-dasharray="2,4"/>
<path d="M30,0 l0 100" stroke="var(--fail)" />
{{< /unsafe >}}
{{% /svg %}}
