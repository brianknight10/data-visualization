import * as Plot from "npm:@observablehq/plot";

export function RunPlot(data, { color, column, width }) {
  return Plot.plot({
    width,
    x: { label: "Total Runs" },
    y: { label: column },
    marks: [
      Plot.dot(data, {
        x: "R",
        y: column,
        channels: { Team: "Team", Season: "Season" },
        tip: true,
        fill: color,
      }),
      Plot.linearRegressionY(data, { x: "R", y: column, stroke: color, ci: 0 })
    ]
  })
}