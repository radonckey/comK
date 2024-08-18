import{_ as s,c as n,o as a,a as l}from"./app.02c23f2e.js";const b=JSON.parse('{"title":"Canvas\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]},{"level":2,"title":"CANVAS\u4E0ESVG","slug":"canvas\u4E0Esvg","link":"#canvas\u4E0Esvg","children":[{"level":3,"title":"svg","slug":"svg","link":"#svg","children":[]},{"level":3,"title":"canvas","slug":"canvas","link":"#canvas","children":[]}]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"frontend/HTML/Canvas\u57FA\u7840.md","lastUpdated":1723944852000}'),p={name:"frontend/HTML/Canvas\u57FA\u7840.md"},o=l(`<h1 id="canvas\u57FA\u7840" tabindex="-1">Canvas\u57FA\u7840 <a class="header-anchor" href="#canvas\u57FA\u7840" aria-hidden="true">#</a></h1><p><code>HTML5</code>\u4E2D\u5F15\u5165<code>&lt;canvas&gt;</code>\u6807\u7B7E\uFF0C\u7528\u4E8E\u56FE\u5F62\u7684\u7ED8\u5236\uFF0C<code>&lt;canvas&gt;</code>\u4E3A\u56FE\u5F62\u7684\u7ED8\u5236\u63D0\u4F9B\u4E86\u753B\u5E03\uFF0C\u662F\u56FE\u5F62\u5BB9\u5668\uFF0C\u5177\u4F53\u7684\u56FE\u5F62\u7ED8\u5236\u7531<code>JavaScript</code>\u6765\u5B8C\u6210\u3002</p><h2 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#8B949E;">&lt;!-- \u7ED8\u5236\u5192\u6CE1\u6548\u679C --&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;!</span><span style="color:#7EE787;">DOCTYPE</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;Canvas&lt;/</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text/css&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#79C0FF;">#canvas</span><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">border</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">1</span><span style="color:#FF7B72;">px</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">solid</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">#eee</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">canvas</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">id</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;canvas&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">width</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;500&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">height</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;300&quot;</span><span style="color:#C9D1D9;"> &gt;&lt;/</span><span style="color:#7EE787;">canvas</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">&lt;!-- \u4E0D\u5EFA\u8BAE\u4F7F\u7528css\u63A7\u5236\u5E38\u5BBD\uFF0C\u56E0\u4E3A\u5982\u679C\u8BBE\u7F6E\u7684\u5BBD\u9AD8\u4E0E\u521D\u59CB\u6BD4\u4F8B 300:150 \u4E0D\u540C\uFF0C\u6709\u53EF\u80FD\u51FA\u73B0\u626D\u66F2\u7684\u73B0\u8C61 --&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">&lt;!-- \u5047\u5982\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas\u53EF\u4EE5\u76F4\u63A5 &lt;canvas&gt;\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas&lt;/canvas&gt; \u6D4F\u89C8\u5668\u4F1A\u6E32\u67D3\u66FF\u4EE3\u5185\u5BB9 --&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text/javascript&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Bubble</span><span style="color:#C9D1D9;">{ </span><span style="color:#8B949E;">// ES6\u65B0\u589EClass\u8BED\u6CD5\u7CD6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">constructor</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">ctx</span><span style="color:#C9D1D9;">){ </span><span style="color:#8B949E;">// \u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.colorList </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [[</span><span style="color:#79C0FF;">254</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">158</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">159</span><span style="color:#C9D1D9;">], [</span><span style="color:#79C0FF;">147</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">186</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">255</span><span style="color:#C9D1D9;">], [</span><span style="color:#79C0FF;">217</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">153</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">249</span><span style="color:#C9D1D9;">], [</span><span style="color:#79C0FF;">129</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">199</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">132</span><span style="color:#C9D1D9;">], [</span><span style="color:#79C0FF;">255</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">202</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">98</span><span style="color:#C9D1D9;">], [</span><span style="color:#79C0FF;">255</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">164</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">119</span><span style="color:#C9D1D9;">]]; </span><span style="color:#8B949E;">// \u989C\u8272\u65B9\u6848</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> ctx.</span><span style="color:#D2A8FF;">getContext</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;2d&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u4E8C\u7EF4\u7ED8\u56FE</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.circleList </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> []; </span><span style="color:#8B949E;">// \u6C14\u6CE1\u6570\u7EC4</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">randomInt</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">a</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">b</span><span style="color:#C9D1D9;">) { </span><span style="color:#8B949E;">// \u8FD4\u56DE\u968F\u673A\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Number.</span><span style="color:#D2A8FF;">parseInt</span><span style="color:#C9D1D9;">(Math.</span><span style="color:#D2A8FF;">random</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">*</span><span style="color:#C9D1D9;"> (b </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;"> a </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> a);   </span><span style="color:#8B949E;">//\u53D6a-b\u4E4B\u95F4\u5305\u62ECab\u7684\u968F\u673A\u503C</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">newCircle</span><span style="color:#C9D1D9;">(){ </span><span style="color:#8B949E;">// \u65B0\u6C14\u6CE1</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">randomInt</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">50</span><span style="color:#C9D1D9;">)) </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// \u63A7\u5236\u751F\u6210\u6C14\u6CE1\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> canvasHeight </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.canvas.height; </span><span style="color:#8B949E;">// \u83B7\u53D6\u753B\u5E03\u9AD8\u5EA6</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> circle </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {}; </span><span style="color:#8B949E;">// \u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u6C14\u6CE1\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C9D1D9;">            circle.r </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">randomInt</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">50</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u968F\u673A\u534A\u5F84</span></span>
<span class="line"><span style="color:#C9D1D9;">            circle.x </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">randomInt</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.canvas.width); </span><span style="color:#8B949E;">// \u521D\u59CB\u5316\u6C14\u6CE1X\u5750\u6807</span></span>
<span class="line"><span style="color:#C9D1D9;">            circle.xMoveSpeed </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">randomInt</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">-</span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// X\u65B9\u5411\u79FB\u52A8\u901F\u5EA6\u4EE5\u53CA\u65B9\u5411</span></span>
<span class="line"><span style="color:#C9D1D9;">            circle.y </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> canvasHeight </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> circle.r; </span><span style="color:#8B949E;">// \u521D\u59CB\u5316\u6C14\u6CE1Y\u5750\u6807</span></span>
<span class="line"><span style="color:#C9D1D9;">            circle.yMoveSpeed </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">randomInt</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">5</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// Y\u65B9\u5411\u7684\u79FB\u52A8\u901F\u5EA6</span></span>
<span class="line"><span style="color:#C9D1D9;">            circle.color </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.colorList[</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">randomInt</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.colorList.</span><span style="color:#79C0FF;">length</span><span style="color:#FF7B72;">-</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">)]; </span><span style="color:#8B949E;">// \u83B7\u53D6\u6C14\u6CE1\u989C\u8272</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.circleList.</span><span style="color:#D2A8FF;">push</span><span style="color:#C9D1D9;">(circle); </span><span style="color:#8B949E;">// \u5C06\u5BF9\u8C61\u653E\u5165\u6570\u7EC4</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">destroyCircle</span><span style="color:#C9D1D9;">(){ </span><span style="color:#8B949E;">// \u9500\u6BC1\u6C14\u6CE1</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.circleList.</span><span style="color:#D2A8FF;">forEach</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">v</span><span style="color:#C9D1D9;">,</span><span style="color:#FFA657;">i</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(v.y </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;">v.r) </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.circleList.</span><span style="color:#D2A8FF;">splice</span><span style="color:#C9D1D9;">(i,</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u6C14\u6CE1\u8D85\u8FC7\u4E0A\u8FB9\u754C\u5C31\u9500\u6BC1\u6C14\u6CE1\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C9D1D9;">            })</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">draw</span><span style="color:#C9D1D9;">(){ </span><span style="color:#8B949E;">// \u7ED8\u5236\u6C14\u6CE1</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">newCircle</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u8C03\u7528\u4EA7\u751F\u65B0\u6C14\u6CE1 </span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.</span><span style="color:#D2A8FF;">clearRect</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.canvas.width,</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.canvas.height); </span><span style="color:#8B949E;">// \u6E05\u7A7A\u753B\u5E03</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.</span><span style="color:#D2A8FF;">save</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u4FDD\u5B58\u753B\u5E03\u72B6\u6001</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.circleList.</span><span style="color:#D2A8FF;">forEach</span><span style="color:#C9D1D9;">( </span><span style="color:#FFA657;">v</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.</span><span style="color:#D2A8FF;">beginPath</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u8D77\u59CB\u4E00\u6761\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.fillStyle </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">\`rgb(\${</span><span style="color:#C9D1D9;">v</span><span style="color:#A5D6FF;">.</span><span style="color:#C9D1D9;">color</span><span style="color:#A5D6FF;">[</span><span style="color:#79C0FF;">0</span><span style="color:#A5D6FF;">]</span><span style="color:#A5D6FF;">},\${</span><span style="color:#C9D1D9;">v</span><span style="color:#A5D6FF;">.</span><span style="color:#C9D1D9;">color</span><span style="color:#A5D6FF;">[</span><span style="color:#79C0FF;">1</span><span style="color:#A5D6FF;">]</span><span style="color:#A5D6FF;">},\${</span><span style="color:#C9D1D9;">v</span><span style="color:#A5D6FF;">.</span><span style="color:#C9D1D9;">color</span><span style="color:#A5D6FF;">[</span><span style="color:#79C0FF;">2</span><span style="color:#A5D6FF;">]</span><span style="color:#A5D6FF;">},0.6)\`</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// \u8BBE\u7F6E\u80CC\u666F\u989C\u8272</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.strokeStyle </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">\`rgb(\${</span><span style="color:#C9D1D9;">v</span><span style="color:#A5D6FF;">.</span><span style="color:#C9D1D9;">color</span><span style="color:#A5D6FF;">[</span><span style="color:#79C0FF;">0</span><span style="color:#A5D6FF;">]</span><span style="color:#A5D6FF;">},\${</span><span style="color:#C9D1D9;">v</span><span style="color:#A5D6FF;">.</span><span style="color:#C9D1D9;">color</span><span style="color:#A5D6FF;">[</span><span style="color:#79C0FF;">1</span><span style="color:#A5D6FF;">]</span><span style="color:#A5D6FF;">},\${</span><span style="color:#C9D1D9;">v</span><span style="color:#A5D6FF;">.</span><span style="color:#C9D1D9;">color</span><span style="color:#A5D6FF;">[</span><span style="color:#79C0FF;">2</span><span style="color:#A5D6FF;">]</span><span style="color:#A5D6FF;">})\`</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// \u8BBE\u7F6E\u8FB9\u7EBF\u989C\u8272</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.</span><span style="color:#D2A8FF;">arc</span><span style="color:#C9D1D9;">(v.x,v.y,v.r,</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">,Math.</span><span style="color:#79C0FF;">PI</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">*</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u7ED8\u5236\u5706 x\u5750\u6807 y\u5750\u6807 \u534A\u5F84 \u8D77\u59CB\u89D2\u5EA6 \u7ED3\u675F\u89D2\u5EA6 \u987A/\u9006\u65F6\u9488\u7ED8\u5236</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.</span><span style="color:#D2A8FF;">fill</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u7ED8\u5236\u586B\u5145</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.</span><span style="color:#D2A8FF;">stroke</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u7ED8\u5236\u8FB9\u7EBF</span></span>
<span class="line"><span style="color:#C9D1D9;">                v.y </span><span style="color:#FF7B72;">-=</span><span style="color:#C9D1D9;"> v.yMoveSpeed </span><span style="color:#FF7B72;">*</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0.1</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// Y\u8F74\u79FB\u52A8</span></span>
<span class="line"><span style="color:#C9D1D9;">                v.x </span><span style="color:#FF7B72;">+=</span><span style="color:#C9D1D9;"> v.xMoveSpeed </span><span style="color:#FF7B72;">*</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0.05</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// X\u8F74\u79FB\u52A8</span></span>
<span class="line"><span style="color:#C9D1D9;">            })</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.</span><span style="color:#D2A8FF;">restore</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u6062\u590D\u753B\u5E03\u72B6\u6001</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">destroyCircle</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u9500\u6BC1\u6C14\u6CE1</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#D2A8FF;">requestAnimationFrame</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">draw</span><span style="color:#C9D1D9;">();}); </span><span style="color:#8B949E;">// \u9012\u5F52\u8C03\u7528</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">start</span><span style="color:#C9D1D9;">(){</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#8B949E;">// setInterval(() =&gt; {this.draw();},16.7); // \u5B9A\u65F6\u5668\u7ED8\u5236\u52A8\u753B\u6548\u679C</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#D2A8FF;">requestAnimationFrame</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">draw</span><span style="color:#C9D1D9;">();}); </span><span style="color:#8B949E;">// \u4F7F\u7528\u8BF7\u6C42\u52A8\u753B\u5E27\u6765\u7ED8\u5236\u56FE\u50CF\uFF0C\u6839\u636E\u5237\u65B0\u7387\uFF0860HZ\u5219\u4E3A\u6BCF16.7ms\u5237\u65B0\u4E00\u6B21\uFF09\uFF0C\u9700\u8981\u9012\u5F52\u8C03\u7528</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#8B949E;">// requestAnimationFrame\u5F53\u9875\u9762\u5904\u7406\u672A\u6FC0\u6D3B\u7684\u72B6\u6001\u4E0B\uFF0C\u8BE5\u9875\u9762\u7684\u5C4F\u5E55\u5237\u65B0\u4EFB\u52A1\u4E5F\u4F1A\u88AB\u7CFB\u7EDF\u6682\u505C\uFF0C\u56E0\u6B64\u8DDF\u7740\u7CFB\u7EDF\u6B65\u4F10\u8D70\u7684requestAnimationFrame\u4E5F\u4F1A\u505C\u6B62\u6E32\u67D3\uFF0C\u5F53\u9875\u9762\u88AB\u6FC0\u6D3B\u65F6\uFF0C\u52A8\u753B\u5C31\u4ECE\u4E0A\u6B21\u505C\u7559\u7684\u5730\u65B9\u7EE7\u7EED\u6267\u884C\uFF0CsetInterval\u9700\u8981\u4F7F\u7528\u52A0\u5165visibilitychange\u76D1\u542C\u6765\u6E05\u9664\u4E0E\u91CD\u8BBE\u5B9A\u65F6\u5668</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    (</span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> ctx </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> document.</span><span style="color:#D2A8FF;">getElementById</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;canvas&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u83B7\u53D6canvas\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> bubble </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Bubble</span><span style="color:#C9D1D9;">(ctx); </span><span style="color:#8B949E;">// \u5B9E\u4F8B\u5316Bubble</span></span>
<span class="line"><span style="color:#C9D1D9;">        bubble.</span><span style="color:#D2A8FF;">start</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u5F00\u59CB\u7ED8\u5236</span></span>
<span class="line"><span style="color:#C9D1D9;">    })();</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div><h2 id="canvas\u4E0Esvg" tabindex="-1">CANVAS\u4E0ESVG <a class="header-anchor" href="#canvas\u4E0Esvg" aria-hidden="true">#</a></h2><h3 id="svg" tabindex="-1">svg <a class="header-anchor" href="#svg" aria-hidden="true">#</a></h3><ul><li>\u4E0D\u4F9D\u8D56\u5206\u8FA8\u7387\u3002</li><li>\u652F\u6301\u4E8B\u4EF6\u5904\u7406\u5668\u3002</li><li>\u4E0D\u9002\u5408\u6E38\u620F\u5E94\u7528\u3002</li><li><code>SVG</code>\u662F\u4F7F\u7528<code>XML</code>\u6765\u63CF\u8FF0\u56FE\u5F62\u3002</li><li>\u6700\u5408\u9002\u5E26\u6709\u5927\u578B\u6E32\u67D3\u533A\u57DF\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5982\u8C37\u6B4C\u5730\u56FE\u7B49\u3002</li><li>\u590D\u6742\u5EA6\u9AD8\u4F1A\u51CF\u6162\u6E32\u67D3\u7684\u901F\u5EA6\uFF0C\u4EFB\u4F55\u8FC7\u5EA6\u4F7F\u7528<code>DOM</code>\u7684\u5E94\u7528\u90FD\u4E0D\u5FEB\u3002</li><li>\u4EE5\u5355\u4E2A\u6587\u4EF6\u7684\u5F62\u5F0F\u72EC\u7ACB\u5B58\u5728\uFF0C\u540E\u7F00\u540D<code>.svg</code>\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728<code>html</code>\u4E2D\u5F15\u5165\u3002</li><li><code>SVG</code>\u662F\u57FA\u4E8E<code>XML</code>\u7684\uFF0C\u8FD9\u4E5F\u5C31\u662F\u8BF4<code>SVG DOM</code>\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u662F\u53EF\u7528\u7684\uFF0C\u53EF\u4EE5\u4E3A\u67D0\u4E2A\u5143\u7D20\u9644\u52A0<code>JavaScript</code>\u4E8B\u4EF6\u5904\u7406\u5668\u3002</li><li>\u5728<code>SVG</code>\u4E2D\uFF0C\u6BCF\u4E2A\u88AB\u7ED8\u5236\u8FC7\u7684\u56FE\u5F62\u5747\u89C6\u4E3A\u5BF9\u8C61\uFF0C\u5982\u679C<code>SVG</code>\u5BF9\u8C61\u7684\u5C5E\u6027\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u53EF\u4EE5\u81EA\u884C\u91CD\u73B0\u56FE\u5F62\u3002</li></ul><h3 id="canvas" tabindex="-1">canvas <a class="header-anchor" href="#canvas" aria-hidden="true">#</a></h3><ul><li>\u4F9D\u8D56\u5206\u8FA8\u7387\u3002</li><li>\u6587\u672C\u6E32\u67D3\u529B\u5F31\u3002</li><li>\u4E0D\u652F\u6301\u4E8B\u4EF6\u5904\u7406\u5668\u3002</li><li><code>Canvas</code>\u662F\u9010\u50CF\u7D20\u8FDB\u884C\u6E32\u67D3\u7684\u3002</li><li><code>Canvas</code>\u662F\u901A\u8FC7<code>JavaScript</code>\u6765\u7ED8\u5236\u56FE\u5F62\u3002</li><li>\u80FD\u591F\u4EE5<code>.png</code>\u6216<code>.jpg</code>\u7684\u683C\u5F0F\u4FDD\u5B58\u7ED3\u679C\u56FE\u5F62\u3002</li><li>\u6700\u5408\u9002\u56FE\u50CF\u5BC6\u96C6\u578B\u7684\u6E38\u620F\uFF0C\u5176\u4E2D\u8BB8\u591A\u7684\u5BF9\u8C61\u4F1A\u88AB\u9891\u7E41\u7684\u91CD\u7ED8\u3002</li><li><code>Canvas</code>\u4E2D\u4E00\u65E6\u56FE\u5F62\u88AB\u7ED8\u5236\u5B8C\u6210\uFF0C\u4ED6\u5C31\u4E0D\u4F1A\u7EE7\u7EED\u5F97\u5230\u6D4F\u89C8\u5668\u7684\u5173\u6CE8\uFF0C\u5982\u679C\u4ED6\u7684\u4F4D\u7F6E\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u91CD\u65B0\u6765\u7ED8\u5236\u56FE\u5F62\uFF0C\u5176\u4E2D\u5305\u62EC\u4EFB\u4F55\u6216\u5DF2\u7ECF\u88AB\u56FE\u5F62\u8986\u76D6\u7684\u5BF9\u8C61\u3002</li></ul><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://www.runoob.com/tags/ref-canvas.html</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.runoob.com/w3cnote/html5-canvas-intro.html</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,11),e=[o];function c(r,t,D,y,F,C){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{b as __pageData,u as default};
