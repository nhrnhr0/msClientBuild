import{S as H,i as K,s as Q,e as c,a3 as R,c as r,d as a,b as t,E as i,M as F,A as U}from"../../../../chunks/vendor-ab4be69b.js";import{P as V,C as P}from"../../../../chunks/cookies-d7879264.js";import{f as W}from"../../../../chunks/api-a4781abf.js";import{i as X}from"../../../../chunks/utils-6e4fb32a.js";function Y(o){var q;let s,d,m,p,G,u,I,l,L,y,$,h,C,M,T,w,A,f,J,g,N,E,O;return document.title=s=(q=o[0])==null?void 0:q.title,{c(){d=c("meta"),p=c("meta"),u=c("meta"),l=c("meta"),y=c("meta"),h=c("meta"),M=c("meta"),T=c("meta"),w=c("meta"),A=c("meta"),f=c("meta"),g=c("meta"),E=c("meta"),this.h()},l(n){const e=R('[data-svelte="svelte-1kygxou"]',document.head);d=r(e,"META",{name:!0,content:!0}),p=r(e,"META",{name:!0,content:!0}),u=r(e,"META",{name:!0,content:!0}),l=r(e,"META",{property:!0,content:!0}),y=r(e,"META",{property:!0,content:!0}),h=r(e,"META",{property:!0,content:!0}),M=r(e,"META",{property:!0,content:!0}),T=r(e,"META",{property:!0,content:!0}),w=r(e,"META",{property:!0,content:!0}),A=r(e,"META",{property:!0,content:!0}),f=r(e,"META",{property:!0,content:!0}),g=r(e,"META",{property:!0,content:!0}),E=r(e,"META",{property:!0,content:!0}),e.forEach(a),this.h()},h(){var n,e,_,k,b,j,x,S,v;t(d,"name","title"),t(d,"content",m=(n=o[0])==null?void 0:n.title),t(p,"name","description"),t(p,"content",G=(e=o[0])==null?void 0:e.description),t(u,"name","keywords"),t(u,"content",I=(_=o[0])==null?void 0:_.keywords),t(l,"property","og:title"),t(l,"content",L=(k=o[0])==null?void 0:k.title),t(y,"property","og:description"),t(y,"content",$=(b=o[0])==null?void 0:b.description),t(h,"property","og:image"),t(h,"content",C=P+"f_auto,w_auto/"+((j=o[0])==null?void 0:j.cimage)),t(M,"property","og:type"),t(M,"content","product"),t(T,"property","og:site_name"),t(T,"content","M.S. Global"),t(w,"property","og:locale"),t(w,"content","IL"),t(A,"property","twitter:card"),t(A,"content","summary_large_image"),t(f,"property","twitter:title"),t(f,"content",J=(x=o[0])==null?void 0:x.title),t(g,"property","twitter:description"),t(g,"content",N=(S=o[0])==null?void 0:S.description),t(E,"property","twitter:image"),t(E,"content",O=P+"f_auto,w_auto/"+((v=o[0])==null?void 0:v.cimage))},m(n,e){i(document.head,d),i(document.head,p),i(document.head,u),i(document.head,l),i(document.head,y),i(document.head,h),i(document.head,M),i(document.head,T),i(document.head,w),i(document.head,A),i(document.head,f),i(document.head,g),i(document.head,E)},p(n,[e]){var _,k,b,j,x,S,v,z,B,D;1&e&&s!==(s=(_=n[0])==null?void 0:_.title)&&(document.title=s),1&e&&m!==(m=(k=n[0])==null?void 0:k.title)&&t(d,"content",m),1&e&&G!==(G=(b=n[0])==null?void 0:b.description)&&t(p,"content",G),1&e&&I!==(I=(j=n[0])==null?void 0:j.keywords)&&t(u,"content",I),1&e&&L!==(L=(x=n[0])==null?void 0:x.title)&&t(l,"content",L),1&e&&$!==($=(S=n[0])==null?void 0:S.description)&&t(y,"content",$),1&e&&C!==(C=P+"f_auto,w_auto/"+((v=n[0])==null?void 0:v.cimage))&&t(h,"content",C),1&e&&J!==(J=(z=n[0])==null?void 0:z.title)&&t(f,"content",J),1&e&&N!==(N=(B=n[0])==null?void 0:B.description)&&t(g,"content",N),1&e&&O!==(O=P+"f_auto,w_auto/"+((D=n[0])==null?void 0:D.cimage))&&t(E,"content",O)},i:F,o:F,d(n){a(d),a(p),a(u),a(l),a(y),a(h),a(M),a(T),a(w),a(A),a(f),a(g),a(E)}}}async function at({page:o,fetch:s,session:d,contex:m}){let p=V+o.params.id+"/";if(X(o.params.id))return{props:{data:await W(p,{method:"GET"},s)}}}function Z(o,s,d){let{data:m}=s;return U(()=>{sessionStorage.setItem("onLoadTask",JSON.stringify({type:"product",data:m})),window.location.replace("/")}),o.$$set=p=>{"data"in p&&d(0,m=p.data)},[m]}class ct extends H{constructor(s){super(),K(this,s,Z,Y,Q,{data:0})}}export{ct as default,at as load};
