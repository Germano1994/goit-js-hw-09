!function(){function e(e,n){return new Promise((function(t,o){setTimeout((function(){var c=Math.random()>.3,a={position:e,delay:n};c?t(a):o(a)}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=document.querySelector("input[name='delay']"),o=document.querySelector("input[name='step']"),c=document.querySelector("input[name='amount']"),a=parseInt(t.value),u=parseInt(o.value);!function(n,t,o){for(var c=0;c<n;c++){e(c+1,t+c*o).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}(parseInt(c.value),a,u)}))}();
//# sourceMappingURL=03-promises.536760f6.js.map
