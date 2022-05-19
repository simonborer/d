(()=>{var N="http://www.w3.org/2000/svg",E=class{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}};function M(e,t,s,n,i){return{type:"path",ops:R(e,t,s,n,i)}}function q(e,t,s){let n=(e||[]).length;if(n>2){let i=[];for(let h=0;h<n-1;h++)i.push(...R(e[h][0],e[h][1],e[h+1][0],e[h+1][1],s));return t&&i.push(...R(e[n-1][0],e[n-1][1],e[0][0],e[0][1],s)),{type:"path",ops:i}}return n===2?M(e[0][0],e[0][1],e[1][0],e[1][1],s):{type:"path",ops:[]}}function J(e,t,s,n,i){return function(h,c){return q(h,!0,c)}([[e,t],[e+s,t],[e+s,t+n],[e,t+n]],i)}function D(e,t,s,n,i){return function(h,c,o,r){let[_,f]=W(r.increment,h,c,r.rx,r.ry,1,r.increment*$(.1,$(.4,1,o),o),o),w=O(_,null,o);if(!o.disableMultiStroke){let[p]=W(r.increment,h,c,r.rx,r.ry,1.5,0,o),d=O(p,null,o);w=w.concat(d)}return{estimatedPoints:f,opset:{type:"path",ops:w}}}(e,t,i,function(h,c,o){let r=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(h/2,2)+Math.pow(c/2,2))/2)),_=Math.max(o.curveStepCount,o.curveStepCount/Math.sqrt(200)*r),f=2*Math.PI/_,w=Math.abs(h/2),p=Math.abs(c/2),d=1-o.curveFitting;return w+=y(w*d,o),p+=y(p*d,o),{increment:f,rx:w,ry:p}}(s,n,i)).opset}function T(e){return e.randomizer||(e.randomizer=new E(e.seed||0)),e.randomizer.next()}function $(e,t,s,n=1){return s.roughness*n*(T(s)*(t-e)+e)}function y(e,t,s=1){return $(-e,e,t,s)}function R(e,t,s,n,i,h=!1){let c=h?i.disableMultiStrokeFill:i.disableMultiStroke,o=I(e,t,s,n,i,!0,!1);if(c)return o;let r=I(e,t,s,n,i,!0,!0);return o.concat(r)}function I(e,t,s,n,i,h,c){let o=Math.pow(e-s,2)+Math.pow(t-n,2),r=Math.sqrt(o),_=1;_=r<200?1:r>500?.4:-.0016668*r+1.233334;let f=i.maxRandomnessOffset||0;f*f*100>o&&(f=r/10);let w=f/2,p=.2+.2*T(i),d=i.bowing*i.maxRandomnessOffset*(n-t)/200,a=i.bowing*i.maxRandomnessOffset*(e-s)/200;d=y(d,i,_),a=y(a,i,_);let l=[],g=()=>y(w,i,_),u=()=>y(f,i,_);return h&&(c?l.push({op:"move",data:[e+g(),t+g()]}):l.push({op:"move",data:[e+y(f,i,_),t+y(f,i,_)]})),c?l.push({op:"bcurveTo",data:[d+e+(s-e)*p+g(),a+t+(n-t)*p+g(),d+e+2*(s-e)*p+g(),a+t+2*(n-t)*p+g(),s+g(),n+g()]}):l.push({op:"bcurveTo",data:[d+e+(s-e)*p+u(),a+t+(n-t)*p+u(),d+e+2*(s-e)*p+u(),a+t+2*(n-t)*p+u(),s+u(),n+u()]}),l}function O(e,t,s){let n=e.length,i=[];if(n>3){let h=[],c=1-s.curveTightness;i.push({op:"move",data:[e[1][0],e[1][1]]});for(let o=1;o+2<n;o++){let r=e[o];h[0]=[r[0],r[1]],h[1]=[r[0]+(c*e[o+1][0]-c*e[o-1][0])/6,r[1]+(c*e[o+1][1]-c*e[o-1][1])/6],h[2]=[e[o+1][0]+(c*e[o][0]-c*e[o+2][0])/6,e[o+1][1]+(c*e[o][1]-c*e[o+2][1])/6],h[3]=[e[o+1][0],e[o+1][1]],i.push({op:"bcurveTo",data:[h[1][0],h[1][1],h[2][0],h[2][1],h[3][0],h[3][1]]})}if(t&&t.length===2){let o=s.maxRandomnessOffset;i.push({op:"lineTo",data:[t[0]+y(o,s),t[1]+y(o,s)]})}}else n===3?(i.push({op:"move",data:[e[1][0],e[1][1]]}),i.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):n===2&&i.push(...R(e[0][0],e[0][1],e[1][0],e[1][1],s));return i}function W(e,t,s,n,i,h,c,o){let r=[],_=[],f=y(.5,o)-Math.PI/2;_.push([y(h,o)+t+.9*n*Math.cos(f-e),y(h,o)+s+.9*i*Math.sin(f-e)]);for(let w=f;w<2*Math.PI+f-.01;w+=e){let p=[y(h,o)+t+n*Math.cos(w),y(h,o)+s+i*Math.sin(w)];r.push(p),_.push(p)}return _.push([y(h,o)+t+n*Math.cos(f+2*Math.PI+.5*c),y(h,o)+s+i*Math.sin(f+2*Math.PI+.5*c)]),_.push([y(h,o)+t+.98*n*Math.cos(f+c),y(h,o)+s+.98*i*Math.sin(f+c)]),_.push([y(h,o)+t+.9*n*Math.cos(f+.5*c),y(h,o)+s+.9*i*Math.sin(f+.5*c)]),[_,r]}function L(e,t){return{maxRandomnessOffset:2,roughness:e==="highlight"?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:e!=="double",disableMultiStrokeFill:!1,seed:t}}function G(e,t,s,n,i,h){let c=[],o=s.strokeWidth||2,r=function(d){let a=d.padding;if(a||a===0){if(typeof a=="number")return[a,a,a,a];if(Array.isArray(a)){let l=a;if(l.length)switch(l.length){case 4:return[...l];case 1:return[l[0],l[0],l[0],l[0]];case 2:return[...l,...l];case 3:return[...l,l[1]];default:return[l[0],l[1],l[2],l[3]]}}}return[5,5,5,5]}(s),_=s.animate===void 0||!!s.animate,f=s.iterations||2,w=s.rtl?1:0,p=L("single",h);switch(s.type){case"underline":{let d=t.y+t.h+r[2];for(let a=w;a<f+w;a++)a%2?c.push(M(t.x+t.w,d,t.x,d,p)):c.push(M(t.x,d,t.x+t.w,d,p));break}case"strike-through":{let d=t.y+t.h/2;for(let a=w;a<f+w;a++)a%2?c.push(M(t.x+t.w,d,t.x,d,p)):c.push(M(t.x,d,t.x+t.w,d,p));break}case"box":{let d=t.x-r[3],a=t.y-r[0],l=t.w+(r[1]+r[3]),g=t.h+(r[0]+r[2]);for(let u=0;u<f;u++)c.push(J(d,a,l,g,p));break}case"bracket":{let d=Array.isArray(s.brackets)?s.brackets:s.brackets?[s.brackets]:["right"],a=t.x-2*r[3],l=t.x+t.w+2*r[1],g=t.y-2*r[0],u=t.y+t.h+2*r[2];for(let b of d){let m;switch(b){case"bottom":m=[[a,t.y+t.h],[a,u],[l,u],[l,t.y+t.h]];break;case"top":m=[[a,t.y],[a,g],[l,g],[l,t.y]];break;case"left":m=[[t.x,g],[a,g],[a,u],[t.x,u]];break;case"right":m=[[t.x+t.w,g],[l,g],[l,u],[t.x+t.w,u]]}m&&c.push(q(m,!1,p))}break}case"crossed-off":{let d=t.x,a=t.y,l=d+t.w,g=a+t.h;for(let u=w;u<f+w;u++)u%2?c.push(M(l,g,d,a,p)):c.push(M(d,a,l,g,p));for(let u=w;u<f+w;u++)u%2?c.push(M(d,g,l,a,p)):c.push(M(l,a,d,g,p));break}case"circle":{let d=L("double",h),a=t.w+(r[1]+r[3]),l=t.h+(r[0]+r[2]),g=t.x-r[3]+a/2,u=t.y-r[0]+l/2,b=Math.floor(f/2),m=f-2*b;for(let v=0;v<b;v++)c.push(D(g,u,a,l,d));for(let v=0;v<m;v++)c.push(D(g,u,a,l,p));break}case"highlight":{let d=L("highlight",h);o=.95*t.h;let a=t.y+t.h/2;for(let l=w;l<f+w;l++)l%2?c.push(M(t.x+t.w,a,t.x,a,d)):c.push(M(t.x,a,t.x+t.w,a,d));break}}if(c.length){let d=function(b){let m=[];for(let v of b){let x="";for(let C of v.ops){let k=C.data;switch(C.op){case"move":x.trim()&&m.push(x.trim()),x=`M${k[0]} ${k[1]} `;break;case"bcurveTo":x+=`C${k[0]} ${k[1]}, ${k[2]} ${k[3]}, ${k[4]} ${k[5]} `;break;case"lineTo":x+=`L${k[0]} ${k[1]} `}}x.trim()&&m.push(x.trim())}return m}(c),a=[],l=[],g=0,u=(b,m,v)=>b.setAttribute(m,v);for(let b of d){let m=document.createElementNS(N,"path");if(u(m,"d",b),u(m,"fill","none"),u(m,"stroke",s.color||"currentColor"),u(m,"stroke-width",""+o),_){let v=m.getTotalLength();a.push(v),g+=v}e.appendChild(m),l.push(m)}if(_){let b=0;for(let m=0;m<l.length;m++){let v=l[m],x=a[m],C=g?i*(x/g):0,k=n+b,P=v.style;P.strokeDashoffset=""+x,P.strokeDasharray=""+x,P.animation=`rough-notation-dash ${C}ms ease-out ${k}ms forwards`,b+=C}}}}var A=class{constructor(t,s){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state==="showing"&&this.haveRectsChanged()&&this.show()},400))},this._e=t,this._config=JSON.parse(JSON.stringify(s)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if(this._state==="unattached"&&this._e.parentElement){(function(){if(!window.__rno_kf_s){let i=window.__rno_kf_s=document.createElement("style");i.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(i)}})();let t=this._svg=document.createElementNS(N,"svg");t.setAttribute("class","rough-annotation");let s=t.style;s.position="absolute",s.top="0",s.left="0",s.overflow="visible",s.pointerEvents="none",s.width="100px",s.height="100px";let n=this._config.type==="highlight";if(this._e.insertAdjacentElement(n?"beforebegin":"afterend",t),this._state="not-showing",n){let i=window.getComputedStyle(this._e).position;(!i||i==="static")&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(t=>{for(let s of t)s.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){let t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let s=0;s<t.length;s++)if(!this.isSameRect(t[s],this._lastSizes[s]))return!0}return!1}isSameRect(t,s){let n=(i,h)=>Math.round(i)===Math.round(h);return n(t.x,s.x)&&n(t.y,s.y)&&n(t.w,s.w)&&n(t.h,s.h)}isShowing(){return this._state!=="not-showing"}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,s){let n=this._config;s&&(n=JSON.parse(JSON.stringify(this._config)),n.animate=!1);let i=this.rects(),h=0;i.forEach(r=>h+=r.w);let c=n.animationDuration||800,o=0;for(let r=0;r<i.length;r++){let _=c*(i[r].w/h);G(t,i[r],n,o+this._animationDelay,_,this._seed),o+=_}this._lastSizes=i,this._state="showing"}rects(){let t=[];if(this._svg)if(this._config.multiline){let s=this._e.getClientRects();for(let n=0;n<s.length;n++)t.push(this.svgRect(this._svg,s[n]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,s){let n=t.getBoundingClientRect(),i=s;return{x:(i.x||i.left)-(n.x||n.left),y:(i.y||i.top)-(n.y||n.top),w:i.width,h:i.height}}};function F(e,t){return new A(e,t)}var S=class extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute("videoid");let t=this.querySelector(".lty-playbtn");if(this.playLabel=t&&t.textContent.trim()||this.getAttribute("playlabel")||"Play",this.style.backgroundImage||(this.style.backgroundImage=`url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`),t||(t=document.createElement("button"),t.type="button",t.classList.add("lty-playbtn"),this.append(t)),!t.textContent){let s=document.createElement("span");s.className="lyt-visually-hidden",s.textContent=this.playLabel,t.append(s)}this.addEventListener("pointerover",S.warmConnections,{once:!0}),this.addEventListener("click",this.addIframe)}static addPrefetch(t,s,n){let i=document.createElement("link");i.rel=t,i.href=s,n&&(i.as=n),document.head.append(i)}static warmConnections(){S.preconnected||(S.addPrefetch("preconnect","https://www.youtube-nocookie.com"),S.addPrefetch("preconnect","https://www.google.com"),S.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),S.addPrefetch("preconnect","https://static.doubleclick.net"),S.preconnected=!0)}addIframe(t){if(this.classList.contains("lyt-activated"))return;t.preventDefault(),this.classList.add("lyt-activated");let s=new URLSearchParams(this.getAttribute("params")||[]);s.append("autoplay","1");let n=document.createElement("iframe");n.width=560,n.height=315,n.title=this.playLabel,n.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",n.allowFullscreen=!0,n.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${s.toString()}`,this.append(n),n.focus()}};customElements.define("lite-youtube",S);var H=document.querySelectorAll("[data-annotate]"),z={type:"highlight",color:"#ffd970",strokeWidth:2,padding:8};H.forEach(e=>{F(e,{type:e.dataset.annType?e.dataset.annType:z.type,animate:e.dataset.annAnim?e.dataset.annAnim:!1,color:e.dataset.annColor?e.dataset.annColor:z.color,multiline:!0,strokeWidth:z.strokeWidth,padding:e.dataset.annPadding?e.dataset.annPadding:z.padding}).show()});window.addEventListener("scroll",()=>{document.body.style.setProperty("--scroll",window.pageYOffset/(document.body.offsetHeight-window.innerHeight))},!1);})();
