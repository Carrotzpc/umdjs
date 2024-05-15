"use strict";(self.webpackChunkumdjs=self.webpackChunkumdjs||[]).push([[56],{44669:function(o,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(59496),d={}},62735:function(o,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(59496),d={}},8824:function(o,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(59496),d={}},9298:function(o,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"@umdjs/query-string",paraId:0,tocIndex:0}]},64957:function(o,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"UMD build dist for ",paraId:0,tocIndex:0},{value:"query-string",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"English \u30FB ",paraId:1,tocIndex:0},{value:"\u7B80\u4F53\u4E2D\u6587",paraId:2,tocIndex:0},{value:" \u30FB ",paraId:1,tocIndex:0},{value:"Changelog",paraId:3,tocIndex:0},{value:" \xB7 ",paraId:1,tocIndex:0},{value:"Report Bug",paraId:1,tocIndex:0},{value:" \xB7 ",paraId:1,tocIndex:0},{value:"Request Feature",paraId:1,tocIndex:0},{value:"[!NOTE]",paraId:4,tocIndex:1},{value:`
The @umdjs/query-string only provides UMD dist of `,paraId:4,tocIndex:1},{value:"query-string",paraId:4,tocIndex:1},{value:".",paraId:4,tocIndex:1},{value:"Add ",paraId:5,tocIndex:1},{value:"script",paraId:5,tocIndex:1},{value:" tag in your browser and use the global variable ",paraId:5,tocIndex:1},{value:"queryString",paraId:5,tocIndex:1},{value:".",paraId:5,tocIndex:1},{value:"We provide dist files under ",paraId:6,tocIndex:1},{value:"dist",paraId:6,tocIndex:1},{value:" folder in @umdjs/query-string's npm package. You can also download these files directly from ",paraId:6,tocIndex:1},{value:" or ",paraId:6,tocIndex:1},{value:"unpkg",paraId:6,tocIndex:1},{value:".",paraId:6,tocIndex:1},{value:`<!doctype html>
<html lang="zh-CN">
  <head>
    <script src="//unpkg.com/@umdjs/query-string/dist/index.min.js" />
  </head>
  <body>
    <script>
      console.log(location.search);
      //=> '?foo=bar'

      // ~ Use \`queryString\` from global:
      const parsed = queryString.parse(location.search);
      console.log(parsed);
      //=> {foo: 'bar'}

      console.log(location.hash);
      //=> '#token=bada55cafe'

      const parsedHash = queryString.parse(location.hash);
      console.log(parsedHash);
      //=> {token: 'bada55cafe'}

      parsed.foo = 'unicorn';
      parsed.ilike = 'pizza';

      const stringified = queryString.stringify(parsed);
      //=> 'foo=unicorn&ilike=pizza'

      location.search = stringified;
      // note that \`location.search\` automatically prepends a question mark
      console.log(location.search);
      //=> '?foo=unicorn&ilike=pizza'
    <\/script>
  </body>
</html>
`,paraId:7,tocIndex:1},{value:"You can use Github Codespaces for online development:",paraId:8,tocIndex:2},{value:"Or clone it for local development:",paraId:9,tocIndex:2},{value:`git clone https://github.com/Carrotzpc/umdjs.git
cd umdjs
pnpm install
pnpm dev
`,paraId:10,tocIndex:2},{value:"See ",paraId:11,tocIndex:3},{value:"query-string/CHANGELOG.md",paraId:11,tocIndex:3},{value:" for detail.",paraId:11,tocIndex:3},{value:"Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub ",paraId:12,tocIndex:4},{value:"Issues",paraId:12,tocIndex:4},{value:" to get stuck in to show us what you\u2019re made of.",paraId:12,tocIndex:4},{value:"Copyright \xA9 2024 ",paraId:13,tocIndex:5},{value:"Carrotzpc",paraId:13,tocIndex:5},{value:". ",paraId:13,tocIndex:5},{value:`
This project is MIT licensed.`,paraId:13,tocIndex:5}]},25847:function(o,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"UMD build dist for ",paraId:0,tocIndex:0},{value:"query-string",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"English \u30FB ",paraId:1,tocIndex:0},{value:"\u7B80\u4F53\u4E2D\u6587",paraId:2,tocIndex:0},{value:" \u30FB ",paraId:1,tocIndex:0},{value:"Changelog",paraId:3,tocIndex:0},{value:" \xB7 ",paraId:1,tocIndex:0},{value:"Report Bug",paraId:1,tocIndex:0},{value:" \xB7 ",paraId:1,tocIndex:0},{value:"Request Feature",paraId:1,tocIndex:0},{value:"[!NOTE]",paraId:4,tocIndex:1},{value:`
The @umdjs/query-string only provides UMD dist of `,paraId:4,tocIndex:1},{value:"query-string",paraId:4,tocIndex:1},{value:".",paraId:4,tocIndex:1},{value:"Add ",paraId:5,tocIndex:1},{value:"script",paraId:5,tocIndex:1},{value:" tag in your browser and use the global variable ",paraId:5,tocIndex:1},{value:"queryString",paraId:5,tocIndex:1},{value:".",paraId:5,tocIndex:1},{value:"We provide dist files under ",paraId:6,tocIndex:1},{value:"dist",paraId:6,tocIndex:1},{value:" folder in @umdjs/query-string's npm package. You can also download these files directly from ",paraId:6,tocIndex:1},{value:" or ",paraId:6,tocIndex:1},{value:"unpkg",paraId:6,tocIndex:1},{value:".",paraId:6,tocIndex:1},{value:`<!doctype html>
<html lang="zh-CN">
  <head>
    <script src="//unpkg.com/@umdjs/query-string/dist/index.min.js" />
  </head>
  <body>
    <script>
      console.log(location.search);
      //=> '?foo=bar'

      // ~ Use \`queryString\` from global:
      const parsed = queryString.parse(location.search);
      console.log(parsed);
      //=> {foo: 'bar'}

      console.log(location.hash);
      //=> '#token=bada55cafe'

      const parsedHash = queryString.parse(location.hash);
      console.log(parsedHash);
      //=> {token: 'bada55cafe'}

      parsed.foo = 'unicorn';
      parsed.ilike = 'pizza';

      const stringified = queryString.stringify(parsed);
      //=> 'foo=unicorn&ilike=pizza'

      location.search = stringified;
      // note that \`location.search\` automatically prepends a question mark
      console.log(location.search);
      //=> '?foo=unicorn&ilike=pizza'
    <\/script>
  </body>
</html>
`,paraId:7,tocIndex:1},{value:"You can use Github Codespaces for online development:",paraId:8,tocIndex:2},{value:"Or clone it for local development:",paraId:9,tocIndex:2},{value:`git clone https://github.com/Carrotzpc/umdjs.git
cd umdjs
pnpm install
pnpm dev
`,paraId:10,tocIndex:2},{value:"See ",paraId:11,tocIndex:3},{value:"query-string/CHANGELOG.md",paraId:11,tocIndex:3},{value:" for detail.",paraId:11,tocIndex:3},{value:"Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub ",paraId:12,tocIndex:4},{value:"Issues",paraId:12,tocIndex:4},{value:" to get stuck in to show us what you\u2019re made of.",paraId:12,tocIndex:4},{value:"Copyright \xA9 2024 ",paraId:13,tocIndex:5},{value:"Carrotzpc",paraId:13,tocIndex:5},{value:". ",paraId:13,tocIndex:5},{value:`
This project is MIT licensed.`,paraId:13,tocIndex:5}]}}]);
