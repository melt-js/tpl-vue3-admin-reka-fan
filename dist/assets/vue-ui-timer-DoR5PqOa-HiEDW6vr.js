const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PackageVersion-PdpqwkYX-CTFkbg8W.js","./rolldown-runtime-DK3Fl9T5-B4LfYq6V.js","./index-B8x6VgMh.js","./rolldown-runtime-Dwys_PaA.js","./reactivity.esm-bundler-B9tEGtEp.js","./index-Dz8cieEs.css"])))=>i.map(i=>d[i]);
import{t as ue}from"./rolldown-runtime-DK3Fl9T5-B4LfYq6V.js";import{n as oe,t as ie}from"./useConfig-_JwRfIqE-C9E9q6Sz.js";import{H as ne,d as ve,pt as J}from"./lib-rPeBMZrn-CmAyjhwc.js";import{t as ce}from"./canvas-lib-22VpOI4_-DlA7ayOS.js";import{t as de}from"./useResponsive-CENUxfEL-BTQIAZlw.js";import{n as he,t as pe}from"./useHints-C-TwxM0Y-l04_xdfm.js";import{t as me}from"./useChartAccessibility-DOMuYJfm-BGgFQzRH.js";import{n as fe}from"./Title-BliHuXfT-DP51Tgo_.js";import{n as H}from"./BaseIcon-CoY0vuL3-Cu-FvZGO.js";import{t as ke}from"./DefGrad-DKMq1REY-CxBXKMEb.js";import{t as ge}from"./_plugin-vue_export-helper-BDNMzG2s-DHTx-l5g.js";import{C as p,G as ye,H as we,J as u,M as F,O as x,R as Q,S as be,Z as j,b as w,k as $e,st as xe,t as Me,w as i,x as Z}from"./index-B8x6VgMh.js";import{B as X,C as m,O as Y,St as k,wt as Ce,xt as O}from"./reactivity.esm-bundler-B9tEGtEp.js";var _e=class{constructor(A,E,z,W=!0,L=!0){this.interval=E,this.elapsed=0,this.isPaused=!1;let B=new Blob([`
            let interval;
            let elapsed = 0;
            let paused = false;
            let startTime;
            let tickInterval;

            onmessage = function(e) {
                const { action, data } = e.data;

                switch(action) {
                    case 'start':
                        startTime = Date.now();
                        tickInterval = data.interval;
                        elapsed = 0;
                        paused = false;
                        interval = setInterval(() => {
                            elapsed += tickInterval;
                            postMessage({ elapsed, timestamp: Date.now() });
                        }, tickInterval);
                        break;
                    
                    case 'pause':
                        paused = true;
                        clearInterval(interval);
                        elapsed = Date.now() - startTime;
                        break;

                    case 'resume':
                        if (paused) {
                            startTime = Date.now() - elapsed;
                            interval = setInterval(() => {
                                elapsed += tickInterval;
                                postMessage({ elapsed, timestamp: Date.now() });
                            }, tickInterval);
                        }
                        paused = false;
                        break;

                    case 'stop':
                        clearInterval(interval);
                        elapsed = 0;
                        postMessage({ elapsed });
                        break;

                    case 'reset':
                        elapsed = 0;
                        clearInterval(interval);
                        postMessage({ elapsed });
                        break;

                    case 'lap':
                        postMessage({
                            elapsed,
                            timestamp: Date.now(),
                            action: 'lap'
                        });
                        break;

                    default:
                        break;
                }
            };
        `],{type:"application/javascript"}),b=URL.createObjectURL(B),c=new Worker(b);function T(h){let o=Math.floor(h/1e3),d=Math.floor(h%1e3/10),M=Math.floor(o/3600),C=Math.floor(o%3600/60),_=o%60,a="";return L&&(a+=String(M).padStart(2,"0")+":"),a+=String(C).padStart(2,"0")+":",a+=String(_).padStart(2,"0"),W&&(a+="."+String(d).padStart(2,"0")),a}this.start=()=>{this.isPaused=!1,c.postMessage({action:"start",data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,c.postMessage({action:"pause"}))},this.resume=()=>{this.isPaused&&(this.isPaused=(c.postMessage({action:"resume"}),!1))},this.stop=()=>{c.postMessage({action:"stop"}),this.isPaused=!1},this.reset=()=>{c.postMessage({action:"reset"}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(h=>{c.postMessage({action:"lap"}),c.addEventListener("message",o=>{let{elapsed:d,timestamp:M,action:C}=o.data;if(C==="lap"){let _=T(d);h({timestamp:M||0,elapsed:d,formatted:_})}},{once:!0})}),c.onmessage=h=>{let{elapsed:o,timestamp:d}=h.data;this.elapsed=o,A({timestamp:d||0,elapsed:this.elapsed,formatted:T(this.elapsed)})},c.onerror=h=>{z&&z(h)}}},lt=ue({default:()=>Ne}),Se=["xmlns","viewBox"],Pe=["width","height"],Te={key:1},Re=["cx","cy","r","fill","stroke","stroke-width"],Ie=["d","stroke","stroke-width"],He=["r","fill","stroke","stroke-width"],je=["r","fill","stroke","stroke-width"],ze=["x","y"],Be={key:5},De=["x","y","font-size","fill","font-weight"],Fe={key:0,class:"vue-ui-timer-controls"},Oe=["title"],Ae=["title"],Ee=["title"],We=["title"],Le=["title"],Ne=ge({__name:"vue-ui-timer",props:{config:{type:Object,default(){return{}}}},emits:["start","pause","reset","restart","lap"],setup(A,{expose:E,emit:z}){let W=$e(()=>Me(()=>import("./PackageVersion-PdpqwkYX-CTFkbg8W.js").then(t=>t.t),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),{vue_ui_timer:L}=ie(),B=A,b=z,c=m(null),T=m(null),h=m(null),o=Y(null),d=Y(null),M=m(ve()),C=m(0);ye(()=>{_()});function _(){if(a.value.responsive){let t=ce(()=>{let{width:v,height:y}=de({chart:c.value,title:a.value.style.title.text?T.value:null,legend:h.value});requestAnimationFrame(()=>{e.value.width=v,e.value.height=y,a.value.responsiveProportionalSizing?(e.value.tracker.core=J({relator:Math.min(v,y),adjuster:a.value.style.width,source:6*n.value.radiusRatio,threshold:1,fallback:1}),e.value.tracker.aura=J({relator:Math.min(v,y),adjuster:a.value.style.width,source:12*n.value.aura.radiusRatio,threshold:1,fallback:1}),e.value.label=J({relator:Math.min(v,y),adjuster:a.value.style.width,source:l.value.label.fontSize,threshold:10,fallback:10})):e.value.label=l.value.label.fontSize})});o.value&&(d.value&&o.value.unobserve(d.value),o.value.disconnect()),o.value=new ResizeObserver(t),d.value=c.value.parentNode,o.value.observe(d.value)}}we(()=>{o.value&&(d.value&&o.value.unobserve(d.value),o.value.disconnect())});let a=w({get:()=>K(),set:t=>t}),l=w(()=>a.value.stopwatch),n=w(()=>a.value.stopwatch.tracker),s=w(()=>a.value.stopwatch.legend);he({config:()=>a.value,dataset:()=>[],component:"VueUiTimer",rules:[pe.noHint]});let R=w(()=>a.value.useCursorPointer),{svgRef:ee}=me({config:a.value.style.title});function K(){return oe({userConfig:B.config,defaultConfig:L})}xe(()=>B.config,t=>{a.value=K(),_(),C.value+=1},{deep:!0});let te=w(()=>{if(l.value.showHours&&l.value.showHundredth)return"00:00:00.00";if(l.value.showHours&&!l.value.showHundredth)return"00:00:00";if(!l.value.showHours&&l.value.showHundredth)return"00:00.00";if(!l.value.showHours&&!l.value.showHundredth)return"00:00"}),e=m({height:a.value.style.height,width:a.value.style.width,tracker:{core:6*n.value.radiusRatio,aura:12*n.value.aura.radiusRatio},label:l.value.label.fontSize}),g=m(0),I=new _e(t=>ae(t),10,"",l.value.showHundredth,l.value.showHours),N=m(!0),r=m(!1),f=m(!1);function U(){b("start"),N.value&&I.start(),N.value=!1,r.value=!0}function V(){r.value&&(r.value=(b("reset"),I.stop(),S.value=[],N.value=!0,!1))}function q(){f.value=!f.value,b("pause",g.value),I.pause()}function G(){r.value&&(f.value=!1,b("restart"),S.value=[],I.restart())}let S=m([]);async function D(){if(!r.value||f.value)return;let t=await I.lap();t&&(S.value.push(t),b("lap",S.value))}function ae({timestamp:t,elapsed:v,formatted:y}){g.value={timestamp:t,elapsed:v,formatted:y}}let $=w(()=>Math.min(e.value.width,e.value.height)/2.5*l.value.track.radiusRatio);function le(t,v){return t*(360/(v*1e3))%360}function se(t){let v=Math.PI/180*t;return{cx:e.value.width/2+$.value*Math.cos(v),cy:e.value.height/2+$.value*Math.sin(v)}}let P=w(()=>{let t=le(g.value.elapsed,l.value.cycleSeconds),{cx:v,cy:y}=se(t-90),re=+(t>180);return{cx:v||e.value.width/2,cy:y||e.value.height/2-$.value,largeArcFlag:re,sweepFlag:1}});return E({start:U,pause:q,reset:V,restart:G,lap:D}),(t,v)=>(u(),i("div",{ref_key:"timerChart",ref:c,class:"vue-data-ui-component vue-ui-timer",style:k({fontFamily:a.value.style.fontFamily,width:"100%",height:a.value.responsive?"100%":"auto",textAlign:"center"})},[a.value.style.title.text?(u(),i("div",{key:0,ref_key:"chartTitle",ref:T,style:k({width:"100%",background:a.value.style.backgroundColor})},[(u(),be(fe,{key:`title_${C.value}`,config:{title:{cy:"title",...a.value.style.title},subtitle:{cy:"subtitle",...a.value.style.title.subtitle}}},null,8,["config"]))],4)):p("",!0),(u(),i("svg",{ref_key:"svgRef",ref:ee,xmlns:X(ne),viewBox:`0 0 ${e.value.width<=0?10:e.value.width} ${e.value.height<=0?10:e.value.height}`,style:k({maxWidth:"100%",overflow:"visible",background:a.value.style.backgroundColor})},[x(X(W)),t.$slots["chart-background"]?(u(),i("foreignObject",{key:0,x:0,y:0,width:e.value.width<=0?10:e.value.width,height:e.value.height<=0?10:e.value.height,style:{pointerEvents:"none"}},[j(t.$slots,"chart-background",{},void 0,!0)],8,Pe)):p("",!0),n.value.gradient.show?(u(),i("defs",Te,[x(ke,{t:"radial",id:`tracker_gradient_${M.value}`,cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%",stops:[["0%",n.value.gradient.color,1],["100%",n.value.fill,1]]},null,8,["id","stops"])])):p("",!0),Z("circle",{cx:e.value.width/2,cy:e.value.height/2,r:$.value,fill:l.value.track.fill,stroke:l.value.track.stroke,"stroke-width":l.value.track.strokeWidth},null,8,Re),l.value.cycleTrack.show?(u(),i("path",{key:2,d:`M ${e.value.width/2},${e.value.height/2-$.value} A ${$.value},${$.value} 0 ${P.value.largeArcFlag},${P.value.sweepFlag} ${P.value.cx},${P.value.cy}`,stroke:l.value.cycleTrack.stroke,"stroke-width":l.value.cycleTrack.strokeWidth,"stroke-linecap":"round",fill:"none"},null,8,Ie)):p("",!0),Z("circle",Q(P.value,{r:e.value.tracker.core,fill:n.value.gradient.show?`url(#tracker_gradient_${M.value})`:n.value.fill,stroke:n.value.stroke,"stroke-width":n.value.strokeWidth}),null,16,He),n.value.aura.show?(u(),i("circle",Q({key:3},P.value,{r:e.value.tracker.aura,fill:`${n.value.aura.fill}`,opacity:.2,stroke:n.value.aura.stroke,"stroke-width":n.value.aura.strokeWidth}),null,16,je)):p("",!0),t.$slots.time?(u(),i("foreignObject",{key:4,x:e.value.width/2,y:e.value.height/2,height:"0.1",width:"0.1",style:{overflow:"visible"}},[j(t.$slots,"time",O(F({...g.value,...e.value})),void 0,!0)],8,ze)):t.$slots.timeSvg?(u(),i("g",Be,[j(t.$slots,"timeSvg",O(F({...g.value,...e.value})),void 0,!0)])):(u(),i("text",{key:6,x:e.value.width/2,y:e.value.height/2+e.value.label/4,"font-size":e.value.label,"text-anchor":"middle",fill:l.value.label.color,"font-weight":l.value.label.bold?"bold":"normal",style:{"font-variant-numeric":"tabular-nums !important"}},Ce(g.value.formatted||te.value),9,De))],12,Se)),Z("div",{ref_key:"chartLegend",ref:h,style:k({width:"100%",backgroundColor:s.value.backgroundColor})},[t.$slots.controls?p("",!0):(u(),i("div",Fe,[s.value.buttons.start?(u(),i("button",{key:0,title:s.value.buttonTitles.start,onClick:U,class:"vue-ui-timer-button",style:k({opacity:r.value?.2:1,cursor:r.value?"default":R.value?"pointer":"default"})},[x(H,{name:"play",stroke:s.value.buttons.iconColor},null,8,["stroke"])],12,Oe)):p("",!0),s.value.buttons.pause?(u(),i("button",{key:1,title:f.value?s.value.buttonTitles.resume:s.value.buttonTitles.pause,onClick:q,class:"vue-ui-timer-button",style:k({opacity:r.value?1:.2,cursor:r.value&&R.value?"pointer":"default"})},[x(H,{name:"pause",stroke:s.value.buttons.iconColor},null,8,["stroke"])],12,Ae)):p("",!0),s.value.buttons.reset?(u(),i("button",{key:2,title:s.value.buttonTitles.reset,onClick:V,class:"vue-ui-timer-button",style:k({opacity:r.value?1:.2,cursor:r.value&&R.value?"pointer":"default"})},[x(H,{name:"stop",stroke:s.value.buttons.iconColor},null,8,["stroke"])],12,Ee)):p("",!0),s.value.buttons.restart?(u(),i("button",{key:3,title:s.value.buttonTitles.restart,onClick:G,class:"vue-ui-timer-button",style:k({opacity:r.value?1:.2,cursor:r.value&&R.value?"pointer":"default"})},[x(H,{name:"restart",stroke:s.value.buttons.iconColor},null,8,["stroke"])],12,We)):p("",!0),s.value.buttons.lap?(u(),i("button",{key:4,title:s.value.buttonTitles.lap,onClick:D,class:"vue-ui-timer-button",style:k({opacity:r.value&&!f.value?1:.2,cursor:r.value&&!f.value&&R.value?"pointer":"default"})},[x(H,{name:"lap",stroke:s.value.buttons.iconColor},null,8,["stroke"])],12,Le)):p("",!0)])),j(t.$slots,"controls",O(F({start:U,pause:q,reset:V,restart:G,lap:D,laps:S.value,isRunning:r.value,isPaused:f.value,...g.value})),void 0,!0),j(t.$slots,"laps",O(F({laps:S.value,lap:D,isRunning:r.value,isPaused:f.value,...g.value})),void 0,!0)],4)],4))}},[["__scopeId","data-v-27b9f373"]]);export{lt as n};
