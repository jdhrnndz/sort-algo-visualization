(this["webpackJsonpsort-algo-visualization"]=this["webpackJsonpsort-algo-visualization"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=(n(10),n(2)),s=(n(11),function(e,t){for(var n=Math.floor(Math.sqrt(t)),a=e.length,r=0,o=0,c=n;r<a;r++){var i=(Math.floor(Math.random()*n)+o)%t,s=e[i];e[i]=e[r],e[r]=s,r===c&&(o+=n,c+=n)}return e}),u=n(1),l=n.n(u),f=l.a.mark(v);function v(e){var t,n,a;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=!1,n=0;case 2:if(!(n<e.length)){r.next=16;break}a=0;case 4:if(!(a<e.length-n-1)){r.next=11;break}return e[a]>e[a+1]&&(h(e,a,a+1),t=!0),r.next=8,e;case 8:a++,r.next=4;break;case 11:if(t){r.next=13;break}return r.abrupt("return");case 13:n++,r.next=2;break;case 16:case"end":return r.stop()}}),f)}function h(e,t,n){var a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}var b=v,m=l.a.mark(d);function d(e){var t,n,a,r,o;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t=e.length,n=t,a=!0;case 3:if(1===n&&!a){c.next=20;break}n=w(n),a=!1,r=0;case 7:if(!(r<t-n)){c.next=18;break}if(!(e[r]>e[r+n])){c.next=15;break}return o=[e[r+n],e[r]],e[r]=o[0],e[r+n]=o[1],c.next=14,e;case 14:a=!0;case 15:r++,c.next=7;break;case 18:c.next=3;break;case 20:case"end":return c.stop()}}),m)}var w=function(e){var t=10*e/13;return t<1?1:t},p=d,g=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e}),[e]),t.current},k=Math.floor(window.innerWidth/50),x=Math.floor(window.innerHeight/50);var E=function e(t,n,a){return function(){var r=t.current.getContext("2d"),o=n.next();if(o.done)alert("done!");else{for(var c=0;c<x;c++)for(var i=0;i<k;i++)r.fillStyle="hsl(".concat(o.value[i],", 100%, 50%)"),r.fillRect(50*i,50*c,50,50);var s=requestAnimationFrame(e(t,n,a));a(s)}}},A=function(){var e=r.a.useRef(null),t=0,n=s(Array.from(Array(k),(function(e){return t++})),k),a=r.a.useState("combsort"),o=Object(i.a)(a,2),c=o[0],u=o[1],l=r.a.useState(null),f=Object(i.a)(l,2),v=f[0],h=f[1],m=g(v);return r.a.useEffect((function(){var t;switch(c){case"combsort":t=p(n);break;case"bubblesort":default:t=b(n)}window.cancelAnimationFrame(m),E(e,t,h)()}),[c]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-content"},r.a.createElement("select",{name:"sort-algo",id:"sort-algo-select",value:c,onChange:function(e){return u(e.target.value)}},r.a.createElement("option",{value:"bubblesort"},"Bubble Sort"),r.a.createElement("option",{value:"combsort"},"Comb Sort")),r.a.createElement("canvas",{ref:e,width:window.innerWidth,height:window.innerHeight})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.7faaaabc.chunk.js.map