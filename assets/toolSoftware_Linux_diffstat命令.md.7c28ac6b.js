import{_ as e,c as s,o as l,a}from"./app.02c23f2e.js";const b=JSON.parse('{"title":"diffstat\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"toolSoftware/Linux/diffstat\u547D\u4EE4.md","lastUpdated":1723944852000}'),n={name:"toolSoftware/Linux/diffstat\u547D\u4EE4.md"},c=a(`<h1 id="diffstat\u547D\u4EE4" tabindex="-1">diffstat\u547D\u4EE4 <a class="header-anchor" href="#diffstat\u547D\u4EE4" aria-hidden="true">#</a></h1><p><code>diffstat</code>\u547D\u4EE4\u6839\u636E<code>diff</code>\u7684\u6BD4\u8F83\u7ED3\u679C\uFF0C\u7EDF\u8BA1\u5404\u6587\u4EF6\u7684\u63D2\u5165\u3001\u5220\u9664\u3001\u4FEE\u6539\u7B49\u5DEE\u5F02\u8BA1\u91CF\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">diffstat [options] [files]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><ul><li><code>-c</code>: \u8F93\u51FA\u7684\u6BCF\u4E00\u884C\u90FD\u4EE5<code>\uFF03</code>\u4F5C\u4E3A\u524D\u7F00\uFF0C\u4F7F\u5176\u6210\u4E3A<code>Shell</code>\u811A\u672C\u7684\u6CE8\u91CA\u884C\u3002</li><li><code>-C</code>: \u6DFB\u52A0<code>SGR</code>\u989C\u8272\u8F6C\u4E49\u5E8F\u5217\u4EE5\u7A81\u51FA\u663E\u793A\u76F4\u65B9\u56FE\u3002</li><li><code>-e</code>: \u5C06\u6807\u51C6\u9519\u8BEF\u91CD\u5B9A\u5411\u5230<code>file</code>\u3002</li><li><code>-f &lt;num&gt;</code>: \u6307\u5B9A\u76F4\u65B9\u56FE\u7684\u683C\u5F0F\uFF0C<code>0</code>\u4EC5\u663E\u793A\u63D2\u5165<code>+</code>\uFF0C\u5220\u9664<code>-</code>\u6216\u4FEE\u6539<code>!</code>\u7684\u503C\u548C\u5355\u4E2A\u76F4\u65B9\u56FE\u4EE3\u7801\uFF0C<code>1</code>\u6B63\u5E38\u8F93\u51FA\uFF0C<code>2</code>\u7528\u70B9\u586B\u5145\u76F4\u65B9\u56FE\uFF0C<code>4</code>\u7528\u76F4\u65B9\u56FE\u6253\u5370\u6BCF\u4E2A\u503C\uFF0C\u4EFB\u4F55\u975E\u96F6\u503C\u90FD\u4F1A\u7ED9\u51FA\u76F4\u65B9\u56FE\uFF0C\u70B9\u548C\u5355\u4E2A\u503C\u53EF\u4EE5\u7EC4\u5408\u3002</li><li><code>-H</code>: \u6253\u5370\u4F7F\u7528\u60C5\u51B5\u6D88\u606F\u5E76\u9000\u51FA\u3002</li><li><code>-k</code>: \u7981\u6B62\u5408\u5E76\u62A5\u544A\u4E2D\u7684\u6587\u4EF6\u540D\u3002</li><li><code>-l</code>: \u4EC5\u5217\u51FA\u6587\u4EF6\u540D\uFF0C\u4E0D\u751F\u6210\u76F4\u65B9\u56FE\u3002</li><li><code>-n &lt;file length&gt;</code>: \u6307\u5B9A\u6587\u4EF6\u540D\u957F\u5EA6\uFF0C\u6307\u5B9A\u7684\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u6216\u7B49\u4E8E\u6240\u6709\u6587\u4EF6\u4E2D\u6700\u957F\u7684\u6587\u4EF6\u540D\u3002</li><li><code>-o &lt;file&gt;</code>: \u5C06\u6807\u51C6\u8F93\u51FA\u91CD\u5B9A\u5411\u5230<code>file</code>\u3002</li><li><code>-p &lt;file length&gt;</code>: \u4E0E<code>-n</code>\u53C2\u6570\u76F8\u540C\uFF0C\u4F46\u6B64\u5904\u7684<code>&lt;file length&gt;</code>\u5305\u62EC\u4E86\u6587\u4EF6\u7684\u8DEF\u5F84\u3002</li><li><code>-r</code>: \u63D0\u4F9B\u5BF9\u76F4\u65B9\u56FE\u6240\u793A\u6570\u636E\u7684\u53EF\u9009\u820D\u5165\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7\u8BEF\u5DEE\u8C03\u6574\u6765\u622A\u65AD\uFF0C<code>0</code>\u662F\u9ED8\u8BA4\u503C\uFF0C\u4E0D\u8FDB\u884C\u820D\u5165\uFF0C\u4F46\u7D2F\u79EF\u7684\u9519\u8BEF\u5C06\u6DFB\u52A0\u5230\u4EE5\u4E0B\u5217\uFF0C<code>1</code>\u820D\u5165\u6570\u636E\uFF0C<code>2</code>\u5BF9\u6570\u636E\u8FDB\u884C\u820D\u5165\u5E76\u8C03\u6574\u76F4\u65B9\u56FE\uFF0C\u4EE5\u786E\u4FDD\u5373\u4F7F\u6709\u5DEE\u5F02\u901A\u5E38\u4F1A\u56DB\u820D\u4E94\u5165\u4E5F\u5B58\u5728\u5DEE\u5F02\u3002</li><li><code>-t</code>: \u8986\u76D6\u76F4\u65B9\u56FE\uFF0C\u751F\u6210\u9017\u53F7\u5206\u9694\u503C\u7684\u8F93\u51FA\u3002</li><li><code>-u</code>: \u7981\u6B62\u5728\u62A5\u544A\u4E2D\u5BF9\u6587\u4EF6\u540D\u8FDB\u884C\u6392\u5E8F\u3002</li><li><code>-v</code>: \u663E\u793A\u8FDB\u5EA6\uFF0C\u4F8B\u5982\u5982\u679C\u5C06\u8F93\u51FA\u91CD\u5B9A\u5411\u5230\u6587\u4EF6\uFF0C\u5219\u5C06\u8FDB\u5EA6\u6D88\u606F\u5199\u5165\u6807\u51C6\u9519\u8BEF\u3002</li><li><code>-w</code>: \u6307\u5B9A\u8F93\u51FA\u65F6\u680F\u4F4D\u7684\u5BBD\u5EA6\u3002</li><li><code>-V</code>: \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u7EDF\u8BA1<code>diff</code>\u7684\u6BD4\u8F83\u7ED3\u679C\u7684\u5DEE\u5F02\u4FE1\u606F\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">diff file.txt file2.txt </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> diffstat -v</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7EDF\u8BA1<code>diff</code>\u7684\u6BD4\u8F83\u7ED3\u679C\u7684\u5DEE\u5F02\u4FE1\u606F\uFF0C\u4EC5\u5217\u51FA\u6587\u4EF6\u540D\uFF0C\u4E0D\u751F\u6210\u76F4\u65B9\u56FE\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">diff file.txt file2.txt </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> diffstat -l</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7EDF\u8BA1<code>diff</code>\u7684\u6BD4\u8F83\u7ED3\u679C\u7684\u5DEE\u5F02\u4FE1\u606F\uFF0C\u6307\u5B9A\u76F4\u65B9\u56FE\u7684\u6700\u5927\u5BBD\u5EA6\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">diff file.txt file2.txt </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> diffstat -w 11</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://man.linuxde.net/diffstat</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.runoob.com/linux/linux-comm-diffstat.html</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.tutorialspoint.com/unix_commands/diffstat.htm</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,15),d=[c];function o(i,t,p,r,f,u){return l(),s("div",null,d)}const m=e(n,[["render",o]]);export{b as __pageData,m as default};
