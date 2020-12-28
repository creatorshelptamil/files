/*
* Created & Maintained By Creators Help Tamil
* Author : Admin Of Creators Help Tamil
* Visit Website : https://www.creatorshelptamil.com/
* YouTube : https://www.youtube.com/results?q=creators+help+tamil
*/
var img = document.querySelectorAll("img");
for (var i = 0; i < img.length; i++) {
if (img[i].hasAttribute("data-src") === false) {
img[i].setAttribute("data-src", img[i].src);
img[i].removeAttribute("src");
img[i].setAttribute("class", img[i].classList + " lazyload blur-up");
}
}
var iframe = document.querySelectorAll("iframe");
for (var i = 0; i < iframe.length; i++) {
if (iframe[i].hasAttribute("data-src") === false) {
iframe[i].setAttribute("data-src", iframe[i].src);
iframe[i].removeAttribute("src");
iframe[i].setAttribute("class", iframe[i].classList + " lazyload blur-up");
}
}

/*
Automatic Table Of Contents  For Blogger
Plugins Used - Table of Contents | v0.4.0 - https://github.com/ndabas/toc
*/
// Plugin Scripts Start
/*! Table of Contents | v0.4.0 - https://github.com/ndabas/toc */
!function(t){"use strict";var n=function(n){return this.each(function(){var e,i,a=t(this),o=a.data(),c=[a],r=this.tagName,d=0;e=t.extend({content:"body",headings:"h2,h3,h4,h5"},{content:o.toc||void 0,headings:o.tocHeadings||void 0},n),i=e.headings.split(","),t(e.content).find(e.headings).attr("id",function(n,e){return e||function(t){0===t.length&&(t="?");for(var n=t.replace(/\s+/g,"_"),e="",i=1;null!==document.getElementById(n+e);)e="_"+i++;return n+e}(t(this).text())}).each(function(){var n=t(this),e=t.map(i,function(t,e){return n.is(t)?e:void 0})[0];if(e>d){var a=c[0].children("li:last")[0];a&&c.unshift(t("<"+r+"/>").appendTo(a))}else c.splice(0,Math.min(d-e,Math.max(c.length-1,0)));t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href","#"+n.attr("id"))),d=e})})},e=t.fn.toc;t.fn.toc=n,t.fn.toc.noConflict=function(){return t.fn.toc=e,this},t(function(){n.call(t("[data-toc]"))})}(window.jQuery);
// Plugin Scripts End
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('b e=0;b 6=i.g("J");t(6&&6.o=="d-8"){6.B=\'<7 3="d-8"><7 3="2-q"><a r="u:l();" 3="2-4" v="x" 4="9 s 5">9 h 5 [ k ]</a><f 3="2"></f></7></7>\'}p{b 6=i.g(".d-8");6.A=\'<7 3="2-q"><a r="u:l();" 3="2-4" v="x" 4="9 s 5">9 h 5 [ k ]</a><f 3="2"></f></7>\'}b j=i.g(".d-8 .2");b c=i.g(".d-8 .2-4");j.n("D-8",".E-F");m();y m(){t(e==1){j.z.w="C";c.n("3","2-4 G");e=0;c.o="9 h 5 [ k ]"}p{j.z.w="H";e=1;c.o="9 h 5 [ I ]";c.n("3","2-4")}}y l(){m()}',46,46,'||tocarea|class|title|Contents|stcht|div|toc|Table||var|toctit|cht|opcl|ol|querySelector|Of|document|autotoc|Hide|tococ|octoc|setAttribute|textContent|else|inner|href|of|if|javascript|role|display|button|function|style|innerHTML|outerHTML|block|data|post|body|ex|none|Show|strike'.split('|'),0,{}))

var cs = document.querySelectorAll(".cht-codesnippet");
cs.forEach((cs) => {
var codecls = cs.querySelector(".code_box").classList.length;
var lc = cs.querySelector(".code_box").classList[codecls - 1];
if (lc === "hljs") {
lc = cs.querySelector(".code_box").classList[codecls - 2];
}
cs.innerHTML = cs.innerHTML + '<span class="ctmsg">' + lc.toUpperCase() + '</span><span class="cbmsg">Double Click To Copy</span>';
});
document.querySelectorAll(".cht.code_box").forEach((block) => {
hljs.highlightBlock(block);
});
var c = document.querySelectorAll(".cht.code_box");
for (var i = 0; i < c.length; i++) {
c[i].setAttribute("ondblclick", "ctc(this)");
c[i].setAttribute("title", "Double Click To Copy");
}
function ctc(cls) {
var range = document.createRange();
range.selectNode(cls);
window.getSelection().removeAllRanges();
window.getSelection().addRange(range);
document.execCommand("copy");
window.getSelection().removeAllRanges();
alert("Code Copied");
}
