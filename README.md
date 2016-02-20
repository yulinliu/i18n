# i18n
i18n for javascript, easy use

# How to use

## setting i18n.js
<pre><code>&lt;script type="text/javascript" src="i18n.js"&gt;&lt;/script&gt;</code></pre>

## example
<pre><code>
  var lang_en = {"save":"Save", "new":"New"};
  i18n.push("en", lang_en);

  var lang_zh = {"save":"儲存"};
  i18n.push("zh-TW", lang_zh);
  
  i18n.use_lang="zh-TW";
  console.log(i18n.use_lang+": "+i18n.get("save")+" "+i18n.get("new"));

  i18n.use_lang="zh";
  console.log(i18n.use_lang+": "+i18n.get("save")+" "+i18n.get("new"));

  i18n.use_lang="en";
  console.log(i18n.use_lang+": "+i18n.get("save")+" "+i18n.get("new"));
</code></pre>

## output result
<pre><code>
  zh-TW: 儲存 New
  zh: 儲存 New
  en: Save New
</code></pre>
