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
