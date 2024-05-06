---
title: Hitting Runs
sidebar: false
---

# Hitting Runs

Which hitting statistic best correlates with total runs scored?

See analysis below:

```js
import { RunPlot } from "./components/runPlot.js";
```
<div class="grid grid-cols-2">
  <div class="card">
    <h2>Batting Average (AVG)</h2>
    ${resize((width) => 
      RunPlot(data, {
        width,
        color: "red",
        column: "AVG"
      })
    )}
  </div>
  <div class="card">
    <h2>On-Base Percentage (OBP)</h2>
    ${resize((width) => 
      RunPlot(data, {
        width,
        color: "blue",
        column: "OBP"
      })
    )}
  </div>
  <div class="card">
    <h2>Slugging Percentage (SLG)</h2>
    ${resize((width) => 
      RunPlot(data, {
        width,
        color: "green",
        column: "SLG"
      })
    )}
  </div>
  <div class="card">
    <h2>On-Base Plus Slugging (OPS)</h2>
    ${resize((width) => 
      RunPlot(data, {
        width,
        color: "orange",
        column: "OPS"
      })
    )}  
  </div>
  <div class="card">
    <h2>Weighted On-Base Average (wOBA)</h2>
    ${resize((width) => 
      RunPlot(data, {
        width,
        color: "purple",
        column: "wOBA"
      })
    )}  
  </div>
</div>

## Analysis

Of the statistics considered, **OPS** works best as an evaluator of team offense because it has the best correlation to runs scored. The table below lists the correlation coefficient - in which 1 is a perfect positive correlation and 0 is no correlation at all - for 20 seasons of team-by-team offensive data from 2003 to 2023.

| Batting Statistic | Correlation Coefficient |
|:--|:---:|
| Batting average | 0.68 |
| On-base percentage | 0.84 |
| Slugging percentage | 0.92 |
| On-base plus slugging | 0.95 |
| Weighted on-base average | 0.92 |

For access to the raw data, calculations, statistical descriptions, and to see how the plots were generated, please visit the accompanying [Observable notebook](https://observablehq.com/d/fd48d7bee809973b).


```js
const data = FileAttachment("data/team-batting.csv").csv({ typed: true })
```