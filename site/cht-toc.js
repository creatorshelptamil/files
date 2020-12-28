/*
Automatic Table Of Contents  For Blogger
Plugins Used - Table of Contents | v0.4.0 - https://github.com/ndabas/toc
*/
// Plugin Scripts Start
/*! Table of Contents | v0.4.0 - https://github.com/ndabas/toc */
!function(t){"use strict";var n=function(n){return this.each(function(){var e,i,a=t(this),o=a.data(),c=[a],r=this.tagName,d=0;e=t.extend({content:"body",headings:"h2,h3,h4,h5"},{content:o.toc||void 0,headings:o.tocHeadings||void 0},n),i=e.headings.split(","),t(e.content).find(e.headings).attr("id",function(n,e){return e||function(t){0===t.length&&(t="?");for(var n=t.replace(/\s+/g,"_"),e="",i=1;null!==document.getElementById(n+e);)e="_"+i++;return n+e}(t(this).text())}).each(function(){var n=t(this),e=t.map(i,function(t,e){return n.is(t)?e:void 0})[0];if(e>d){var a=c[0].children("li:last")[0];a&&c.unshift(t("<"+r+"/>").appendTo(a))}else c.splice(0,Math.min(d-e,Math.max(c.length-1,0)));t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href","#"+n.attr("id"))),d=e})})},e=t.fn.toc;t.fn.toc=n,t.fn.toc.noConflict=function(){return t.fn.toc=e,this},t(function(){n.call(t("[data-toc]"))})}(window.jQuery);
// Plugin Scripts End
function tocint() {
var opcl = 0;
var stcht = document.querySelector("strike");
if (stcht && stcht.textContent == "cht-toc") {
stcht.outerHTML = '<div class="cht-toc"><div class="tocarea-inner"><a href="javascript:tococ();" class="tocarea-title" role="button" title="Table of Contents">Table Of Contents [ Hide ]</a><ol class="tocarea"></ol></div></div>';
} else {
var stcht = document.querySelector(".cht-toc");
stcht.innerHTML = '<div class="tocarea-inner"><a href="javascript:tococ();" class="tocarea-title" role="button" title="Table of Contents">Table Of Contents [ Hide ]</a><ol class="tocarea"></ol></div>';
}
var autotoc = document.querySelector(".cht-toc .tocarea");
var toctit = document.querySelector(".cht-toc .tocarea-title");
autotoc.setAttribute("data-toc", ".post-body");
octoc();
function octoc() {
if (opcl == 1) {
autotoc.style.display = "block";
toctit.setAttribute("class", "tocarea-title ex");
opcl = 0;
toctit.textContent = "Table Of Contents [ Hide ]";
} else {
autotoc.style.display = "none";
opcl = 1;
toctit.textContent = "Table Of Contents [ Show ]";
toctit.setAttribute("class", "tocarea-title");
}
}
function tococ() {
octoc();
}
}
tocint();
