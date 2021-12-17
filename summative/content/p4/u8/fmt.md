+++
title = "Notation for Sets"
date = 2021-12-16T12:55:56-05:00
draft = false

unit = 8
lesson = 1
+++

## Set Notation

- {{< unsafe >}}$\{…\}${{< /unsafe >}} defines a set.
- {{< unsafe >}}$(…)${{< /unsafe >}} defines a tuple.
- {{< unsafe >}}$D\{…\}${{< /unsafe >}} defines the domain of a set.
- {{< unsafe >}}$R\{…\}${{< /unsafe >}} defines the range of a set.

{{% eg id="fn" %}}
For a relation {{< unsafe >}}$S\{(0, 1), (2, 3), (4, 5)\}${{< /unsafe >}},
{{< unsafe >}}$D_S\{0, 2, 4\}${{< /unsafe >}}, and {{< unsafe >}}$R_S\{1, 3, 5\}${{< /unsafe >}}.
This relation *is* a function.
{{% /eg %}}

{{% eg id="rel" %}}
For a relation {{< unsafe >}}$S\{(0, 1), (2, 1), (4, 5)\}${{< /unsafe >}},
{{< unsafe >}}$D_S\{0, 2, 4\}${{< /unsafe >}}, and {{< unsafe >}}$R_S\{1, 1, 5\}${{< /unsafe >}}.
This relation *is not* a function ($S(0) = S(2)$).
{{% /eg %}}

## Interval Notation

{{% note id="ivl-iso" %}}
Using the definition in [ISO 80000-2:2019](https://www.iso.org/standard/64973.html).
{{% /note %}}

- $($ and $)$ are exclusive endpoints (the empty circle in number lines)
- $[$ and $]$ are inclusive endpoints (the filled circle in number lines)

Therefore:
{{< unsafe >}}
$$
\begin{align}
{\color{Maroon}(} a,b{\color{Maroon})}  = \mathopen{\color{Maroon}]}a,b\mathclose{\color{Maroon}[} &= \{x\in\mathbb{R}\mid a{\color{Maroon}{}<{}}x{\color{Maroon}{}<{}}b\}, \\{}
{\color{DarkGreen}[}a,b{\color{Maroon})}  = \mathopen{\color{DarkGreen}[} a,b\mathclose{\color{Maroon}[} &= \{x\in\mathbb{R}\mid a{\color{DarkGreen}{}\le{}} x{\color{Maroon}{}<{}}b\}, \\{}
{\color{Maroon}(} a,b{\color{DarkGreen}]} = \mathopen{\color{Maroon}]}a,b\mathclose{\color{DarkGreen}]} &= \{x\in\mathbb{R}\mid a{\color{Maroon}{}<{}}x{\color{DarkGreen}{}\le{}} b\}, \\{}
{\color{DarkGreen}[}a,b{\color{DarkGreen}]} = \mathopen{\color{DarkGreen}[} a,b\mathclose{\color{DarkGreen}]} &= \{x\in\mathbb{R}\mid a{\color{DarkGreen}{}\le{}} x{\color{DarkGreen}{}\le{}} b\}.
\end{align}
$$
{{< /unsafe >}}

{{% note %}}
The above fenced code block and its content is from [Interval (mathematics) --- Wikipedia, The Free Encyclopedia (by Wikipedia contributors)](https://en.wikipedia.org/w/index.php?title=Interval_(mathematics)&oldid=1048203447).
{{% /note %}}
