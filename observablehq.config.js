// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Brian Knight",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Baseball",
      pages: [
        {name: "Hitting Runs", path: "/hitting"},
      ]
    }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: process.env.CI &&
`<link rel="icon" href="logo.png" type="image/png" sizes="32x32">
<script defer data-domain="viz.brianknight.dev" src="https://plausible.io/js/script.js"></script>`
,

  // The path to the source root.
  root: "src",

  theme: ["light", "dashboard"],

  pager: false,

  toc: false,

  header: `<style>

#observablehq-header a[href] {
  color: inherit;
}

#observablehq-header a[target="_blank"] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
}

#observablehq-header a[target="_blank"]:hover span {
  text-decoration: underline;
}

#observablehq-header a[target="_blank"]::after {
  content: "\\2197";
}

#observablehq-header a[target="_blank"]:not(:hover, :focus)::after {
  color: var(--theme-foreground-muted);
}

@container not (min-width: 640px) {
  .hide-if-small {
    display: none;
  }
}

</style>
<div style="display: flex; align-items: center; gap: 0.5rem; height: 2.2rem; margin: -1.5rem -2rem 2rem -2rem; padding: 0.5rem 2rem; border-bottom: solid 1px var(--theme-foreground-faintest); font: 500 16px var(--sans-serif);">
  <a href="https://observablehq.com/" target="_self" rel="" style="display: flex; align-items: center;">
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  width="22" height="22" viewBox="0 0 80 80" enable-background="new 0 0 80 80" xml:space="preserve">
    <path fill="#17191C" opacity="1.000000" stroke="none" 
    d="
    M1.000000,62.000000 
    C1.000000,48.312439 1.000000,34.624878 1.343831,20.404335 
    C2.053510,19.563953 2.627599,19.325010 2.754479,18.939054 
    C5.326921,11.113870 10.297852,5.676851 18.208216,3.003682 
    C18.946831,2.754080 19.409309,1.687339 20.000000,1.000000 
    C33.354229,1.000000 46.708454,1.000000 60.604706,1.350367 
    C61.473415,2.057281 61.745808,2.644991 62.134773,2.736343 
    C70.433372,4.685334 75.823410,9.803272 78.820984,17.691528 
    C79.168152,18.605104 80.255707,19.237331 81.000000,20.000000 
    C81.000000,33.354229 81.000000,46.708454 80.649712,60.604641 
    C79.897118,61.634277 79.276100,62.062664 79.125420,62.618546 
    C76.968430,70.575981 72.207718,76.082306 64.322266,78.836594 
    C63.407856,79.155983 62.767445,80.259834 62.000000,81.000000 
    C48.645771,81.000000 35.291542,81.000000 21.395344,80.649704 
    C20.525997,79.942543 20.255957,79.362732 19.862810,79.261627 
    C11.499689,77.110954 5.730009,72.196526 3.011756,63.847244 
    C2.766232,63.093109 1.690295,62.609329 1.000000,62.000000 
    M58.802895,65.374039 
    C59.943146,64.406235 61.149349,63.505585 62.213570,62.460365 
    C74.462616,50.429962 74.685936,31.508875 62.743347,19.553453 
    C50.449718,7.246617 31.044357,7.372107 18.974384,19.836494 
    C8.445916,30.709007 7.588629,47.948212 17.003172,59.475632 
    C27.365305,72.163307 43.754997,74.682594 58.802895,65.374039 
    z"/>
    <path fill="#000000" opacity="1.000000" stroke="none" 
    d="
    M81.000000,19.530624 
    C80.255707,19.237331 79.168152,18.605104 78.820984,17.691528 
    C75.823410,9.803272 70.433372,4.685334 62.134773,2.736343 
    C61.745808,2.644991 61.473415,2.057281 61.073364,1.350367 
    C67.590691,1.000000 74.181389,1.000000 81.000000,1.000000 
    C81.000000,7.018513 81.000000,13.039881 81.000000,19.530624 
    z"/>
    <path fill="#000000" opacity="1.000000" stroke="none" 
    d="
    M62.469376,81.000000 
    C62.767445,80.259834 63.407856,79.155983 64.322266,78.836594 
    C72.207718,76.082306 76.968430,70.575981 79.125420,62.618546 
    C79.276100,62.062664 79.897118,61.634277 80.649712,61.073299 
    C81.000000,67.590691 81.000000,74.181389 81.000000,81.000000 
    C74.981483,81.000000 68.960121,81.000000 62.469376,81.000000 
    z"/>
    <path fill="#000000" opacity="1.000000" stroke="none" 
    d="
    M1.000000,62.469376 
    C1.690295,62.609329 2.766232,63.093109 3.011756,63.847244 
    C5.730009,72.196526 11.499689,77.110954 19.862810,79.261627 
    C20.255957,79.362732 20.525997,79.942543 20.926685,80.649704 
    C14.409307,81.000000 7.818615,81.000000 1.000000,81.000000 
    C1.000000,74.981483 1.000000,68.960121 1.000000,62.469376 
    z"/>
    <path fill="#000000" opacity="1.000000" stroke="none" 
    d="
    M19.530624,1.000000 
    C19.409309,1.687339 18.946831,2.754080 18.208216,3.003682 
    C10.297852,5.676851 5.326921,11.113870 2.754479,18.939054 
    C2.627599,19.325010 2.053510,19.563953 1.343831,19.935677 
    C1.000000,13.740766 1.000000,7.481532 1.000000,1.000000 
    C7.018606,1.000000 13.039927,1.000000 19.530624,1.000000 
    z"/>
    <path fill="#F4F4F4" opacity="1.000000" stroke="none" 
    d="
    M58.513340,65.592880 
    C43.754997,74.682594 27.365305,72.163307 17.003172,59.475632 
    C7.588629,47.948212 8.445916,30.709007 18.974384,19.836494 
    C31.044357,7.372107 50.449718,7.246617 62.743347,19.553453 
    C74.685936,31.508875 74.462616,50.429962 62.213570,62.460365 
    C61.149349,63.505585 59.943146,64.406235 58.513340,65.592880 
    M59.197403,55.735699 
    C67.941437,47.679314 68.831970,40.338352 62.115250,30.681831 
    C60.409775,28.229897 58.591049,25.816109 56.543701,23.650076 
    C49.957649,16.682226 42.181335,14.863081 32.941238,17.865454 
    C24.431477,20.630520 20.289810,26.455334 19.135593,34.946957 
    C18.935055,36.422310 18.576988,37.877659 18.261900,39.335812 
    C16.490068,47.535461 18.469728,54.584915 25.064758,59.921215 
    C31.697777,65.288254 39.171734,66.527473 46.998825,62.888828 
    C51.041977,61.009258 54.765202,58.441486 59.197403,55.735699 
    z"/>
    <path fill="#17191C" opacity="1.000000" stroke="none" 
    d="
    M58.915188,55.960175 
    C54.765202,58.441486 51.041977,61.009258 46.998825,62.888828 
    C39.171734,66.527473 31.697777,65.288254 25.064758,59.921215 
    C18.469728,54.584915 16.490068,47.535461 18.261900,39.335812 
    C18.576988,37.877659 18.935055,36.422310 19.135593,34.946957 
    C20.289810,26.455334 24.431477,20.630520 32.941238,17.865454 
    C42.181335,14.863081 49.957649,16.682226 56.543701,23.650076 
    C58.591049,25.816109 60.409775,28.229897 62.115250,30.681831 
    C68.831970,40.338352 67.941437,47.679314 58.915188,55.960175 
    z"/>
  </svg>
  </a>
  <div style="display: flex; flex-grow: 1; justify-content: space-between; align-items: baseline;">
    <a href="https://viz.brianknight.dev" target="_self" rel="">
      <span class="hide-if-small">Brian Knight's</span> Visualization Playground
    </a>
    <span style="display: flex; align-items: baseline; gap: 0.5rem; font-size: 14px;">
      <a target="_blank" href="https://github.com/brianknight10/data-visualization"><span>View source</span></a>
    </span>
  </div>
</div>`

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // cleanUrls: true, // drop .html from URLs
};
