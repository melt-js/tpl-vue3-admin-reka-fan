import{b as i}from"./index-3-vKsiWA.js";function o(){let n=i(()=>e=>!e||!e.theme?!1:["default","dark","celebration","celebrationNight","hack","zen","concrete","minimal","minimalDark"].includes(e.theme));function a(e){e?.debug&&console.warn(`Vue Data UI - "${e?.theme}" is not a valid theme.

Available themes:

- default (or "")
- dark
- celebration
- celebrationNight 
- hack
- zen
- concrete`)}return{isThemeValid:n,warnInvalidTheme:a}}function t(n,a){return Array.isArray(n)?n[0]===-1?n.slice(1).map(e=>t(e,a)):Object.fromEntries(a[n[0]].map((e,r)=>[e,t(n[r+1],a)])):n}export{o as n,t};
