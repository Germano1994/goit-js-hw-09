function e(e,t){return new Promise(((n,o)=>{setTimeout((()=>{const r=Math.random()>.3,u={position:e,delay:t};r?n(u):o(u)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=document.querySelector("input[name='delay']"),o=document.querySelector("input[name='step']"),r=document.querySelector("input[name='amount']"),u=parseInt(n.value),l=parseInt(o.value),s=function(t,n,o){const r=[];for(let u=0;u<t;u++){const t=e(u+1,n+u*o);r.push(t)}return r}(parseInt(r.value),u,l);Promise.all(s).then((e=>{console.log("All promises fulfilled:",e)})).catch((e=>{console.log("At least one promise rejected:",e)}))}));
//# sourceMappingURL=03-promises.20b372d6.js.map