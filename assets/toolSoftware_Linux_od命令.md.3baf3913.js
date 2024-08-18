import{_ as e,c as s,o as l,a}from"./app.02c23f2e.js";const m=JSON.parse('{"title":"od\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u683C\u5F0F\u63A7\u5236","slug":"\u683C\u5F0F\u63A7\u5236","link":"#\u683C\u5F0F\u63A7\u5236","children":[]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"toolSoftware/Linux/od\u547D\u4EE4.md","lastUpdated":1723944852000}'),d={name:"toolSoftware/Linux/od\u547D\u4EE4.md"},o=a(`<h1 id="od\u547D\u4EE4" tabindex="-1">od\u547D\u4EE4 <a class="header-anchor" href="#od\u547D\u4EE4" aria-hidden="true">#</a></h1><p><code>od</code>\u547D\u4EE4\u4F1A\u8BFB\u53D6\u6240\u6307\u5B9A\u7684\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u5E76\u5C06\u5176\u5185\u5BB9\u4EE5\u516B\u8FDB\u5236\u5B57\u8282\u7801\u5448\u73B0\u51FA\u6765\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">od [OPTION]... [FILE]...</span></span>
<span class="line"><span style="color:#C9D1D9;">od [-abcdfilosx]... [FILE] [[+]OFFSET[.][b]]</span></span>
<span class="line"><span style="color:#C9D1D9;">od --traditional [OPTION]... [FILE] [[+]OFFSET[.][b] [+][LABEL][.][b]]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><ul><li><code>-A, --address-radix=RADIX</code>: \u9009\u62E9\u8981\u4EE5\u4F55\u79CD\u57FA\u6570\u8BA1\u7B97\u5B57\u7801\u3002</li><li><code>-j, --skip-bytes=BYTES</code>: \u8DF3\u8FC7\u8BBE\u7F6E\u7684\u5B57\u7B26\u6570\u76EE\u3002</li><li><code>-N, --read-bytes=BYTES</code>: \u5230\u8BBE\u7F6E\u7684\u5B57\u7B26\u6570\u76EE\u4E3A\u6B62\u3002</li><li><code>-S BYTES, --strings[=BYTES]</code>: \u8F93\u51FA\u81F3\u5C11<code>BYTES</code>\u56FE\u5F62\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\uFF0C\u672A\u6307\u5B9A<code>BYTES</code>\u65F6\u9ED8\u8BA4<code>3</code>\u3002</li><li><code>-t, --format=TYPE</code>: \u8BBE\u7F6E\u8F93\u51FA\u683C\u5F0F\u3002</li><li><code>-v, --output-duplicates</code>: \u8F93\u51FA\u65F6\u4E0D\u7701\u7565\u91CD\u590D\u7684\u6570\u636E\u3002</li><li><code>-w[BYTES], --width[=BYTES]</code>: \u8BBE\u7F6E\u6BCF\u5217\u7684\u6700\u5927\u5B57\u7B26\u6570\u3002</li><li><code>--help</code>: \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u683C\u5F0F\u63A7\u5236" tabindex="-1">\u683C\u5F0F\u63A7\u5236 <a class="header-anchor" href="#\u683C\u5F0F\u63A7\u5236" aria-hidden="true">#</a></h2><ul><li><code>-a</code>: \u4E0E<code>-t a</code>\u76F8\u540C\uFF0C\u9009\u62E9\u547D\u540D\u5B57\u7B26\u3002</li><li><code>-b</code>: \u4E0E<code>-t o1</code>\u76F8\u540C\uFF0C\u9009\u62E9\u516B\u8FDB\u5236\u5B57\u8282\u3002</li><li><code>-c</code>: \u4E0E<code>-t c</code>\u76F8\u540C\uFF0C\u9009\u62E9<code>ASCII</code>\u5B57\u7B26\u6216\u53CD\u659C\u6760\u8F6C\u4E49\u3002</li><li><code>-d</code>: \u4E0E<code>-t u2</code>\u76F8\u540C\uFF0C\u9009\u62E9\u65E0\u7B26\u53F7\u5341\u8FDB\u5236<code>2</code>\u5B57\u8282\u5355\u4F4D\u3002</li><li><code>-f</code>: \u4E0E<code>-t fF</code>\u76F8\u540C\uFF0C\u9009\u62E9\u6D6E\u70B9\u6570\u3002</li><li><code>-i</code>: \u4E0E<code>-t dI</code>\u76F8\u540C\uFF0C\u9009\u62E9\u5341\u8FDB\u5236\u6574\u6570\u3002</li><li><code>-l</code>: \u4E0E<code>-t dL</code>\u76F8\u540C\uFF0C\u9009\u62E9\u5341\u8FDB\u5236\u957F\u3002</li><li><code>-o</code>: \u4E0E<code>-t o2</code>\u76F8\u540C\uFF0C\u9009\u62E9\u516B\u8FDB\u5236<code>2</code>\u5B57\u8282\u5355\u4F4D\u3002</li><li><code>-s</code>: \u4E0E<code>-t d2</code>\u76F8\u540C\uFF0C\u9009\u62E9\u5341\u8FDB\u5236<code>2</code>\u5B57\u8282\u5355\u4F4D\u3002</li><li><code>-x</code>: \u4E0E<code>-t x2</code>\u76F8\u540C\uFF0C\u9009\u62E9\u5341\u516D\u8FDB\u5236<code>2</code>\u5B57\u8282\u5355\u4F4D\u3002</li><li><code>d[SIZE]</code>: \u6709\u7B26\u53F7\u5341\u8FDB\u5236\uFF0C\u6BCF\u4E2A\u6574\u6570<code>SIZE</code>\u4E2A\u5B57\u8282\u3002</li><li><code>f[SIZE]</code>: \u6D6E\u70B9\u6570\uFF0C\u6BCF\u4E2A\u6574\u6570<code>SIZE</code>\u4E2A\u5B57\u8282\u3002</li><li><code>o[SIZE]</code>: \u516B\u8FDB\u5236\uFF0C\u6BCF\u4E2A\u6574\u6570<code>SIZE</code>\u4E2A\u5B57\u8282\u3002</li><li><code>u[SIZE]</code>: \u65E0\u7B26\u53F7\u5341\u8FDB\u5236\uFF0C\u6BCF\u4E2A\u6574\u6570<code>SIZE</code>\u4E2A\u5B57\u8282\u3002</li><li><code>x[SIZE]</code>: \u5341\u516D\u8FDB\u5236\uFF0C\u6BCF\u4E2A\u6574\u6570<code>SIZE</code>\u4E2A\u5B57\u8282\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u8F93\u51FA\u6587\u4EF6\u516B\u8FDB\u5236\u5B57\u8282\u7801\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">od /tmp/file.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u5355\u5B57\u8282\u516B\u8FDB\u5236\u89E3\u91CA\u8FDB\u884C\u8F93\u51FA\uFF0C\u5DE6\u4FA7\u7684\u9ED8\u8BA4\u5730\u5740\u683C\u5F0F\u4E3A\u516B\u5B57\u8282\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">od -c /tmp/file.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528<code>ASCII</code>\u7801\u8FDB\u884C\u8F93\u51FA\uFF0C\u5176\u4E2D\u5305\u62EC\u8F6C\u4E49\u5B57\u7B26\uFF0C\u5DE6\u4FA7\u7684\u9ED8\u8BA4\u5730\u5740\u683C\u5F0F\u4E3A\u516B\u5B57\u8282\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">od -t d1 /tmp/file.txt</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://www.howtoforge.com/linux-od-command/</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.runoob.com/linux/linux-comm-od.html</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.tutorialspoint.com/unix_commands/od.htm</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,17),c=[o];function n(i,p,t,r,u,h){return l(),s("div",null,c)}const S=e(d,[["render",n]]);export{m as __pageData,S as default};
