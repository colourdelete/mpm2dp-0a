if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const m=e||("document"in self?document.currentScript.src:"")||location.href;if(s[m])return;let a={};const r=e=>i(e,m),o={module:{uri:m},exports:a,require:r};s[m]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-9d32cf9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"nyiyui-mpm2dp-0a-summative"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/mpm2dp-0a/css/colors.css",revision:"28c88e41e3cf49ea7d6b896de2983af8"},{url:"/mpm2dp-0a/css/index.css",revision:"8f6e391c10ceb6a72e09946582f9a265"},{url:"/mpm2dp-0a/css/w3.css",revision:"5a17b495aaf053919674be9f17b3e097"},{url:"/mpm2dp-0a/js/main.js",revision:"bd8850e062c94ed76c593093198e4e29"},{url:"/mpm2dp-0a/js/quiz.js",revision:"06b0ac4f4453af9272f9a7ae70440093"}],{ignoreURLParametersMatching:[/./]}),e.registerRoute(/(?:\/)$/,new e.StaleWhileRevalidate({cacheName:"html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"img",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"vid",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map