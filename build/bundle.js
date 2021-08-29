var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n,l){return t[1]&&l?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](l(e))):n.ctx}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function p(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function y(t,e,n){t.classList[n?"add":"remove"](e)}let x;function b(t){x=t}const w=[],k=[],C=[],S=[],T=Promise.resolve();let D=!1;function M(t){C.push(t)}let _=!1;const E=new Set;function B(){if(!_){_=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];b(e),R(e.$$)}for(b(null),w.length=0;k.length;)k.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];E.has(e)||(E.add(e),e())}C.length=0}while(w.length);for(;S.length;)S.pop()();D=!1,_=!1,E.clear()}}function R(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const z=new Set;let A;function N(){A={r:0,c:[],p:A}}function O(){A.r||l(A.c),A=A.p}function U(t,e){t&&t.i&&(z.delete(t),t.i(e))}function F(t,e,n,l){if(t&&t.o){if(z.has(t))return;z.add(t),A.c.push((()=>{z.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function J(t){t&&t.c()}function L(t,n,r,s){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(n,r),s||M((()=>{const n=a.map(e).filter(o);i?i.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(M)}function H(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(w.push(t),D||(D=!0,T.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,o,r,s,c,a,u,f=[-1]){const d=x;b(e);const m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:o.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};u&&u(m.root);let g=!1;if(m.ctx=r?r(e,o.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&W(e,t)),n})):[],m.update(),g=!0,l(m.before_update),m.fragment=!!s&&s(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();o.intro&&U(e.$$.fragment),L(e,o.target,o.anchor,o.customElement),B()}b(d)}class q{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(e){let n,o,r,s,u,d;return{c(){n=f("main"),o=f("input"),r=m(),s=f("button"),s.textContent="Go",h(o,"type","text")},m(t,l){a(t,n,l),c(n,o),v(o,e[1]),c(n,r),c(n,s),u||(d=[p(o,"input",e[2]),p(s,"click",e[3])],u=!0)},p(t,[e]){2&e&&o.value!==t[1]&&v(o,t[1])},i:t,o:t,d(t){t&&i(n),u=!1,l(d)}}}function G(t,e,n){let l,{onUsernameSet:o}=e;return t.$$set=t=>{"onUsernameSet"in t&&n(0,o=t.onUsernameSet)},[o,l,function(){l=this.value,n(1,l)},()=>o(l)]}class P extends q{constructor(t){super(),j(this,t,G,I,r,{onUsernameSet:0})}}var K;!function(t){t.standard="standard",t.chess960="chess960",t.kingOfTheHill="kingOfTheHill",t.threeCheck="threeCheck",t.antichess="antichess",t.atomic="atomic",t.horde="horde",t.racingKings="racingKings",t.crazyhouse="crazyhouse",t.ultraBullet="ultraBullet",t.bullet="bullet",t.blitz="blitz",t.rapid="rapid",t.classical="classical",t.correspondence="correspondence",t.puzzle="puzzle",t.storm="storm",t.racer="racer",t.streak="streak"}(K||(K={}));const X=[K.ultraBullet,K.bullet,K.blitz,K.rapid,K.classical,K.correspondence],V={"Rated Ultrabullet game":K.ultraBullet,"Casual Ultrabullet game":K.ultraBullet,"Rated Bullet game":K.bullet,"Casual Bullet game":K.bullet,"Rated Blitz game":K.blitz,"Casual Blitz game":K.blitz,"Rated Rapid game":K.rapid,"Casual Rapid game":K.rapid,"Rated Classical game":K.classical,"Casual Classical game":K.classical,"Rated Correspondence game":K.correspondence,"Casual Correspondence game":K.correspondence};function Y(t,e){var n;const l=localStorage.getItem(`lichess-dima-bio--${t}-games`),o=localStorage.getItem(`lichess-dima-bio--${t}-complete`);let r=[];try{r=null!==(n=JSON.parse(l))&&void 0!==n?n:[]}catch(t){r=[]}const s=(e,n=!0)=>{localStorage.setItem(`lichess-dima-bio--${t}-games`,JSON.stringify(e)),localStorage.setItem(`lichess-dima-bio--${t}-complete`,String(n))},c=(n=!0,l=!0)=>{let o=0;const c=r.map((t=>t.date)),a=Math.min(...c),i=Math.max(...c);return function(t,e,n,l){return new Promise(((o,r)=>{const s=new XMLHttpRequest;let c="moves=false";n&&(c+=`&since=${n instanceof Date?n.getTime():n}`),l&&(c+=`&until=${l instanceof Date?l.getTime():l}`),s.open("GET",`https://lichess.org/api/games/user/${t}?${c}`,!0),s.setRequestHeader("Accept","application/x-chess-pgn");const a=e=>e.split("\n\n\n").map((e=>{var n,l;if(0===e.length)return null;const[o,r]=e.split("\n\n"),s=o.split("\n"),c={};for(const t of s){const e=t.match(/^\[(\w*) \"?([^\"]*)\"?\]$/);if(null===e)continue;const n=null==e?void 0:e[1],l=null==e?void 0:e[2];c[n]=l}const a={"0-1":(null==c?void 0:c.Black)===t,"1-0":(null==c?void 0:c.White)===t,"1-1":void 0,"0-0":void 0}[null!==(n=null==c?void 0:c.Result)&&void 0!==n?n:r];return{perfType:V[null==c?void 0:c.Event],rated:null===(l=null==c?void 0:c.Event)||void 0===l?void 0:l.includes("Rated"),event:null==c?void 0:c.Event,link:null==c?void 0:c.Site,date:new Date((null==c?void 0:c.UTCDate)+" "+(null==c?void 0:c.UTCTime)).getTime(),variant:null==c?void 0:c.Variant,timeControl:null==c?void 0:c.TimeControl,white:{username:null==c?void 0:c.White,elo:Number(null==c?void 0:c.WhiteElo),eloDiff:Number(null==c?void 0:c.WhiteRatingDiff)},black:{username:null==c?void 0:c.Black,elo:Number(null==c?void 0:c.BlackElo),eloDiff:Number(null==c?void 0:c.BlackRatingDiff)},eco:null==c?void 0:c.ECO,result:a}})).filter((t=>null!==t));s.onreadystatechange=t=>{4===s.readyState&&(200!==s.status?null==r||r():null==o||o(a(s.responseText)))},s.onprogress=t=>{null==e||e(a(s.responseText))},s.send()}))}(t,(t=>{const l=n?[...r,...t]:[...t,...r];null==e||e(l),o++,o%20==0&&(null==s||s(l,!1))}),n&&isFinite(i)&&i,!n&&isFinite(a)&&a).then((t=>{const e=n?[...r,...t]:[...t,...r];s(e,l),r.push(...e)}))};return"true"===o?c(!0):c(!1,!1).then((()=>c(!0)))}function Q(t,e,n){const l=t.slice();return l[20]=e[n],l[22]=n,l}function Z(t,e,n){const l=t.slice();return l[20]=e[n],l[24]=n,l}function tt(t,e,n){const l=t.slice();return l[20]=e[n],l[26]=n,l}function et(t){let e,n,l,o,r,s,u,g,p,v,y,x,b=t[6](t[1],t[26]).length+"",w=t[6](t[1],t[26]).filter(at).length+"",k=t[6](t[1],t[26]).filter(t[9]).length+"",C=t[6](t[1],t[26]).filter(it).length+"";return{c(){e=f("span"),n=f("b"),l=d(b),o=d(" games\n            "),r=f("span"),s=d(w),u=m(),g=f("span"),p=d(k),v=m(),y=f("span"),x=d(C),h(r,"class","wins svelte-t7tk4m"),h(g,"class","draw svelte-t7tk4m"),h(y,"class","lose svelte-t7tk4m"),h(e,"class","popup svelte-t7tk4m")},m(t,i){a(t,e,i),c(e,n),c(n,l),c(e,o),c(e,r),c(r,s),c(e,u),c(e,g),c(g,p),c(e,v),c(e,y),c(y,x)},p(t,e){2&e&&b!==(b=t[6](t[1],t[26]).length+"")&&$(l,b),2&e&&w!==(w=t[6](t[1],t[26]).filter(at).length+"")&&$(s,w),2&e&&k!==(k=t[6](t[1],t[26]).filter(t[9]).length+"")&&$(p,k),2&e&&C!==(C=t[6](t[1],t[26]).filter(it).length+"")&&$(x,C)},d(t){t&&i(e)}}}function nt(t){let e,n,o,r,s=t[2]===t[26]&&t[6](t[1],t[26]).length>0,c=s&&et(t);function u(){return t[10](t[26])}function d(){return t[11](t[26])}return{c(){e=f("span"),c&&c.c(),h(e,"class","day svelte-t7tk4m"),h(e,"style",n=`top: ${(t[26]+t[5])%7*(st+ct)}px;left: ${~~((t[26]+t[5])/7)*(st+ct)}px;background-color: ${t[7](t[1],t[26])};`)},m(t,n){a(t,e,n),c&&c.m(e,null),o||(r=[p(e,"focus",u),p(e,"mouseover",d)],o=!0)},p(l,o){t=l,6&o&&(s=t[2]===t[26]&&t[6](t[1],t[26]).length>0),s?c?c.p(t,o):(c=et(t),c.c(),c.m(e,null)):c&&(c.d(1),c=null),2&o&&n!==(n=`top: ${(t[26]+t[5])%7*(st+ct)}px;left: ${~~((t[26]+t[5])/7)*(st+ct)}px;background-color: ${t[7](t[1],t[26])};`)&&h(e,"style",n)},d(t){t&&i(e),c&&c.d(),o=!1,l(r)}}}function lt(t){let e,n,l,o=t[3][t[24]]+"";return{c(){e=f("span"),n=d(o),h(e,"class","month svelte-t7tk4m"),h(e,"style",l=`left: ${~~((t[8](new Date(t[0],t[24],0,0,0,0,0))+t[5])/7)*(st+ct)}px`)},m(t,l){a(t,e,l),c(e,n)},p(t,n){1&n&&l!==(l=`left: ${~~((t[8](new Date(t[0],t[24],0,0,0,0,0))+t[5])/7)*(st+ct)}px`)&&h(e,"style",l)},d(t){t&&i(e)}}}function ot(e){let n,l=e[22]%2==1&&function(e){let n,l,o,r,s=e[4][e[22]]+"";return{c(){n=f("span"),l=d(s),o=m(),h(n,"class","weekday svelte-t7tk4m"),h(n,"style",r=`top: ${e[22]*(st+ct)}px`)},m(t,e){a(t,n,e),c(n,l),c(n,o)},p:t,d(t){t&&i(n)}}}(e);return{c(){l&&l.c(),n=g()},m(t,e){l&&l.m(t,e),a(t,n,e)},p(t,e){t[22]%2==1&&l.p(t,e)},d(t){l&&l.d(t),t&&i(n)}}}function rt(e){let n,o,r,s,d,g,$=Array(365),v=[];for(let t=0;t<$.length;t+=1)v[t]=nt(tt(e,$,t));let y=Array(12),x=[];for(let t=0;t<y.length;t+=1)x[t]=lt(Z(e,y,t));let b=Array(7),w=[];for(let t=0;t<b.length;t+=1)w[t]=ot(Q(e,b,t));return{c(){n=f("div"),o=f("div");for(let t=0;t<v.length;t+=1)v[t].c();r=m();for(let t=0;t<x.length;t+=1)x[t].c();s=m();for(let t=0;t<w.length;t+=1)w[t].c();h(o,"class","svelte-t7tk4m"),h(n,"class","calendar svelte-t7tk4m")},m(t,l){a(t,n,l),c(n,o);for(let t=0;t<v.length;t+=1)v[t].m(o,null);c(o,r);for(let t=0;t<x.length;t+=1)x[t].m(o,null);c(o,s);for(let t=0;t<w.length;t+=1)w[t].m(o,null);d||(g=[p(n,"mouseout",e[12]),p(n,"blur",e[13])],d=!0)},p(t,[e]){if(230&e){let n;for($=Array(365),n=0;n<$.length;n+=1){const l=tt(t,$,n);v[n]?v[n].p(l,e):(v[n]=nt(l),v[n].c(),v[n].m(o,r))}for(;n<v.length;n+=1)v[n].d(1);v.length=$.length}if(297&e){let n;for(y=Array(12),n=0;n<y.length;n+=1){const l=Z(t,y,n);x[n]?x[n].p(l,e):(x[n]=lt(l),x[n].c(),x[n].m(o,s))}for(;n<x.length;n+=1)x[n].d(1);x.length=y.length}if(16&e){let n;for(b=Array(7),n=0;n<b.length;n+=1){const l=Q(t,b,n);w[n]?w[n].p(l,e):(w[n]=ot(l),w[n].c(),w[n].m(o,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=b.length}},i:t,o:t,d(t){t&&i(n),u(v,t),u(x,t),u(w,t),d=!1,l(g)}}}const st=12,ct=3,at=t=>!0===t?.result,it=t=>!1===t?.result;function ut(t,e,n){let{year:l}=e,{games:o}=e;const r=new Date(l,0,0,0,0,0,0).getDay();new Date(l,11,31,11,59,59,999).getDay();const s=[224,224,224],c=[67,160,71],a=[229,57,53],i=(t,e,n)=>[t[0]+(e[0]-t[0])*Math.max(0,Math.min(1,n)),t[1]+(e[1]-t[1])*Math.max(0,Math.min(1,n)),t[2]+(e[2]-t[2])*Math.max(0,Math.min(1,n))],u=(t,e)=>{const n=new Date(l,0,e,0,0,0,0).getTime(),o=new Date(l,0,e,23,59,59,999).getTime();return t.filter((t=>(null==t?void 0:t.date)>=n&&(null==t?void 0:t.date)<=o))};let f=null;return t.$$set=t=>{"year"in t&&n(0,l=t.year),"games"in t&&n(1,o=t.games)},[l,o,f,["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Sun"],r,u,(t,e)=>{const n=u(t,e),l=n.filter((t=>!0===(null==t?void 0:t.result))).length,o=n.filter((t=>!1===(null==t?void 0:t.result))).length;n.filter((t=>void 0===(null==t?void 0:t.result))).length;const r=l/(l+o||1),f=n.length/40;var d;return`rgb(${i(s,i(a,c,(d=r)<.5?4*d*d*d:1-Math.pow(-2*d+2,3)/2),Math.pow(f,.5))})`},t=>{const e=new Date(l,0,0);return~~((+t-+e+60*(e.getTimezoneOffset()-t.getTimezoneOffset())*1e3)/864e5)},t=>void 0===t?.result,t=>n(2,f=t),t=>n(2,f=t),()=>n(2,f=null),()=>n(2,f=null)]}class ft extends q{constructor(t){super(),j(this,t,ut,rt,r,{year:0,games:1})}}function dt(t){let e,n,l,o;const r=t[3].default,c=function(t,e,n,l){if(t){const o=s(t,e,n,l);return t[0](o)}}(r,t,t[2],null);return{c(){e=f("div"),c&&c.c(),h(e,"class","svelte-xb909l"),y(e,"active",t[0])},m(r,s){a(r,e,s),c&&c.m(e,null),n=!0,l||(o=p(e,"click",t[4]),l=!0)},p(t,[l]){c&&c.p&&(!n||4&l)&&function(t,e,n,l,o,r){if(o){const c=s(e,n,l,r);t.p(c,o)}}(c,r,t,t[2],n?function(t,e,n,l){if(t[2]&&l){const o=t[2](l(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let l=0;l<n;l+=1)t[l]=e.dirty[l]|o[l];return t}return e.dirty|o}return e.dirty}(r,t[2],l,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null),1&l&&y(e,"active",t[0])},i(t){n||(U(c,t),n=!0)},o(t){F(c,t),n=!1},d(t){t&&i(e),c&&c.d(t),l=!1,o()}}}function mt(t,e,n){let{$$slots:l={},$$scope:o}=e,{value:r}=e,{onChange:s}=e;return t.$$set=t=>{"value"in t&&n(0,r=t.value),"onChange"in t&&n(1,s=t.onChange),"$$scope"in t&&n(2,o=t.$$scope)},[r,s,o,l,()=>s?.(!r)]}class gt extends q{constructor(t){super(),j(this,t,mt,dt,r,{value:0,onChange:1})}}function pt(t,e,n){const l=t.slice();return l[16]=e[n],l}function ht(t,e,n){const l=t.slice();return l[19]=e[n],l}function $t(t){let e,n,l,o,r,s,u,g,p,v=(100*t[2]).toFixed(2)+"",y=t[3]&&vt(t);return{c(){e=f("div"),n=f("span"),o=m(),r=f("span"),s=d(v),u=d("%\n        "),y&&y.c(),g=m(),p=f("br"),h(n,"class","bar svelte-12x6cic"),h(n,"style",l=`width: ${100*t[2]}%`),h(r,"class","text svelte-12x6cic"),h(e,"class","progress svelte-12x6cic")},m(t,l){a(t,e,l),c(e,n),c(e,o),c(e,r),c(r,s),c(r,u),y&&y.m(r,null),a(t,g,l),a(t,p,l)},p(t,e){4&e&&l!==(l=`width: ${100*t[2]}%`)&&h(n,"style",l),4&e&&v!==(v=(100*t[2]).toFixed(2)+"")&&$(s,v),t[3]?y?y.p(t,e):(y=vt(t),y.c(),y.m(r,null)):y&&(y.d(1),y=null)},d(t){t&&i(e),y&&y.d(),t&&i(g),t&&i(p)}}}function vt(t){let e,n;return{c(){e=d("∙ "),n=d(t[3])},m(t,l){a(t,e,l),a(t,n,l)},p(t,e){8&e&&$(n,t[3])},d(t){t&&i(e),t&&i(n)}}}function yt(t){let e;return{c(){e=d("All")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function xt(t){let e;return{c(){e=d("Rated")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function bt(t){let e;return{c(){e=d("Casual")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function wt(e){let n,l,o=e[19]+"";return{c(){n=d(o),l=m()},m(t,e){a(t,n,e),a(t,l,e)},p:t,d(t){t&&i(n),t&&i(l)}}}function kt(t){let e,n;function l(...e){return t[14](t[19],...e)}return e=new gt({props:{value:t[6].includes(t[19]),onChange:l,$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(t,l){L(e,t,l),n=!0},p(n,o){t=n;const r={};64&o&&(r.value=t[6].includes(t[19])),64&o&&(r.onChange=l),4194304&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Ct(t){let e,n,l,o,r,s=t[16]+"";return o=new ft({props:{year:t[16],games:t[1].filter(t[15])}}),{c(){e=f("h3"),n=d(s),l=m(),J(o.$$.fragment)},m(t,s){a(t,e,s),c(e,n),a(t,l,s),L(o,t,s),r=!0},p(t,e){(!r||16&e)&&s!==(s=t[16]+"")&&$(n,s);const l={};16&e&&(l.year=t[16]),98&e&&(l.games=t[1].filter(t[15])),o.$set(l)},i(t){r||(U(o.$$.fragment,t),r=!0)},o(t){F(o.$$.fragment,t),r=!1},d(t){t&&i(e),t&&i(l),H(o,t)}}}function St(t){let e,n,l,o,r,s,g,p,v,y,x,b,w,k,C,S,T,D,M,_=(t[0]?.username??"")+"",E=t[2]<1&&$t(t);v=new gt({props:{value:void 0===t[5],onChange:t[11],$$slots:{default:[yt]},$$scope:{ctx:t}}}),x=new gt({props:{value:!0===t[5],onChange:t[12],$$slots:{default:[xt]},$$scope:{ctx:t}}}),w=new gt({props:{value:!1===t[5],onChange:t[13],$$slots:{default:[bt]},$$scope:{ctx:t}}});let B=X,R=[];for(let e=0;e<B.length;e+=1)R[e]=kt(ht(t,B,e));const z=t=>F(R[t],1,1,(()=>{R[t]=null}));let A=t[4],W=[];for(let e=0;e<A.length;e+=1)W[e]=Ct(pt(t,A,e));const j=t=>F(W[t],1,1,(()=>{W[t]=null}));return{c(){e=f("main"),E&&E.c(),n=m(),l=f("h1"),o=d(_),r=m(),s=f("br"),g=m(),p=f("div"),J(v.$$.fragment),y=m(),J(x.$$.fragment),b=m(),J(w.$$.fragment),k=m(),C=f("br"),S=m(),T=f("div");for(let t=0;t<R.length;t+=1)R[t].c();D=m();for(let t=0;t<W.length;t+=1)W[t].c();h(l,"class","svelte-12x6cic"),h(e,"class","svelte-12x6cic")},m(t,i){a(t,e,i),E&&E.m(e,null),c(e,n),c(e,l),c(l,o),c(e,r),c(e,s),c(e,g),c(e,p),L(v,p,null),c(p,y),L(x,p,null),c(p,b),L(w,p,null),c(e,k),c(e,C),c(e,S),c(e,T);for(let t=0;t<R.length;t+=1)R[t].m(T,null);c(e,D);for(let t=0;t<W.length;t+=1)W[t].m(e,null);M=!0},p(t,[l]){t[2]<1?E?E.p(t,l):(E=$t(t),E.c(),E.m(e,n)):E&&(E.d(1),E=null),(!M||1&l)&&_!==(_=(t[0]?.username??"")+"")&&$(o,_);const r={};32&l&&(r.value=void 0===t[5]),32&l&&(r.onChange=t[11]),4194304&l&&(r.$$scope={dirty:l,ctx:t}),v.$set(r);const s={};32&l&&(s.value=!0===t[5]),32&l&&(s.onChange=t[12]),4194304&l&&(s.$$scope={dirty:l,ctx:t}),x.$set(s);const c={};if(32&l&&(c.value=!1===t[5]),32&l&&(c.onChange=t[13]),4194304&l&&(c.$$scope={dirty:l,ctx:t}),w.$set(c),64&l){let e;for(B=X,e=0;e<B.length;e+=1){const n=ht(t,B,e);R[e]?(R[e].p(n,l),U(R[e],1)):(R[e]=kt(n),R[e].c(),U(R[e],1),R[e].m(T,null))}for(N(),e=B.length;e<R.length;e+=1)z(e);O()}if(114&l){let n;for(A=t[4],n=0;n<A.length;n+=1){const o=pt(t,A,n);W[n]?(W[n].p(o,l),U(W[n],1)):(W[n]=Ct(o),W[n].c(),U(W[n],1),W[n].m(e,null))}for(N(),n=A.length;n<W.length;n+=1)j(n);O()}},i(t){if(!M){U(v.$$.fragment,t),U(x.$$.fragment,t),U(w.$$.fragment,t);for(let t=0;t<B.length;t+=1)U(R[t]);for(let t=0;t<A.length;t+=1)U(W[t]);M=!0}},o(t){F(v.$$.fragment,t),F(x.$$.fragment,t),F(w.$$.fragment,t),R=R.filter(Boolean);for(let t=0;t<R.length;t+=1)F(R[t]);W=W.filter(Boolean);for(let t=0;t<W.length;t+=1)F(W[t]);M=!1},d(t){t&&i(e),E&&E.d(),H(v),H(x),H(w),u(R,t),u(W,t)}}}function Tt(t,e,n){var l,o,r;let s,{username:c}=e;(function(t){return new Promise(((e,n)=>{const l=new XMLHttpRequest;l.open("GET",`https://lichess.org/api/user/${t}`,!0),l.onreadystatechange=t=>{if(4===l.readyState)if(200!==l.status)n();else try{e(JSON.parse(l.response))}catch(t){n()}},l.send()}))})(c).then((t=>n(0,s=t)));let a=[];Y(c,(t=>window.games=n(1,a=t)));let i,u,f,d=.5,m=X;return t.$$set=t=>{"username"in t&&n(7,c=t.username)},t.$$.update=()=>{if(1795&t.$$.dirty){const t=null!==n(8,l=null==a?void 0:a.length)&&void 0!==l?l:0,e=null!==n(10,r=null===n(9,o=null==s?void 0:s.count)||void 0===o?void 0:o.all)&&void 0!==r?r:1;n(2,d=t/e);const c=(e-t)/20,f=~~(c/60),m=~~(f/60);n(3,i=(m>0?`${m} hr `:"")+(f%60>0?f%60+" min ":"")+~~c%60+" sec");const g=a.map((t=>new Date(null==t?void 0:t.date).getFullYear())),p=Math.min(...g),h=Math.max(...g),$=h-p+1;n(4,u=[...Array(isNaN($)||!isFinite($)?0:$)].map(((t,e)=>h-e)))}},[s,a,d,i,u,f,m,c,l,o,r,()=>n(5,f=void 0),()=>n(5,f=!0),()=>n(5,f=!1),(t,e)=>n(6,m=e?[...m,t]:m.filter((e=>e!==t))),t=>m.includes(t?.perfType)&&(void 0===f||t?.rated===f)]}class Dt extends q{constructor(t){super(),j(this,t,Tt,St,r,{username:7})}}function Mt(t){let e,n;return e=new P({props:{onUsernameSet:t[1]}}),{c(){J(e.$$.fragment)},m(t,l){L(e,t,l),n=!0},p(t,n){const l={};1&n&&(l.onUsernameSet=t[1]),e.$set(l)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function _t(t){let e,n;return e=new Dt({props:{username:t[0]}}),{c(){J(e.$$.fragment)},m(t,l){L(e,t,l),n=!0},p(t,n){const l={};1&n&&(l.username=t[0]),e.$set(l)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Et(t){let e,n,l,o;const r=[_t,Mt],s=[];function c(t,e){return t[0]?0:1}return e=c(t),n=s[e]=r[e](t),{c(){n.c(),l=g()},m(t,n){s[e].m(t,n),a(t,l,n),o=!0},p(t,[o]){let a=e;e=c(t),e===a?s[e].p(t,o):(N(),F(s[a],1,1,(()=>{s[a]=null})),O(),n=s[e],n?n.p(t,o):(n=s[e]=r[e](t),n.c()),U(n,1),n.m(l.parentNode,l))},i(t){o||(U(n),o=!0)},o(t){F(n),o=!1},d(t){s[e].d(t),t&&i(l)}}}function Bt(t,e,n){let l=location.hash.substring(1);window.addEventListener("hashchange",(()=>n(0,l=location.hash.substring(1))));return[l,t=>{location.hash=t,n(0,l=t)}]}return new class extends q{constructor(t){super(),j(this,t,Bt,Et,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map