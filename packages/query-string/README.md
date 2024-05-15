<a name="readme-top"></a>

<div align="center">

<h1>@umdjs/query-string</h1>

UMD build dist for [query-string][query-string-npm-link].

English ・ [简体中文](./README.zh-CN.md) ・ [Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

<!-- SHIELD GROUP -->

[![][npm-release-shield]][npm-release-link]

<!-- [![][vercel-shield]][vercel-link] -->

[![][npm-downloads-shield]][npm-downloads-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![codecov][codecov-shield]][codecov-link]<br/>
[![][github-action-release-shield]][github-action-release-link]
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

<!-- [![][banner]][vercel-link] -->

</div>

## 📦 Usage

> \[!NOTE]\
> The @umdjs/query-string only provides UMD dist of [query-string][query-string-npm-link].

Add `script` tag in your browser and use the global variable **`queryString`**.

We provide dist files under [dist](https://unpkg.com/browse/@umdjs/query-string/dist/) folder in @umdjs/query-string's npm package. You can also download these files directly from [![][query-string-jsdelivr-data-link]][query-string-jsdelivr-link] or [unpkg][query-string-unpkg-link].

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <script src="//unpkg.com/@umdjs/query-string/dist/index.min.js" />
  </head>
  <body>
    <script>
      console.log(location.search);
      //=> '?foo=bar'

      // ~ Use `queryString` from global:
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
      // note that `location.search` automatically prepends a question mark
      console.log(location.search);
      //=> '?foo=unicorn&ilike=pizza'
    </script>
  </body>
</html>
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][codespaces-shield]][codespaces-link]

Or clone it for local development:

```bash
git clone https://github.com/Carrotzpc/umdjs.git
cd umdjs
pnpm install
pnpm dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🗒️ Changelog

See [query-string/CHANGELOG.md][changelog-link] for detail.

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][contributors-contrib]][contributors-link]

---

#### 📝 License

Copyright © 2024 [Carrotzpc][profile-link]. <br />
This project is MIT licensed.

<div align="right">

[![][back-to-top]](#readme-top)

</div>
<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[changelog-link]: https://github.com/Carrotzpc/umdjs/packages/query-string/CHANGELOG.md
[codecov-link]: https://codecov.io/gh/Carrotzpc/umdjs
[codecov-shield]: https://img.shields.io/codecov/c/github/Carrotzpc/umdjs?token=XVQEXR75U4&style=flat-square&logo=Codecov&logoColor=white&labelColor=black&color=4c1
[codespaces-link]: https://codespaces.new/Carrotzpc/umdjs
[codespaces-shield]: https://github.com/codespaces/badge.svg
[contributors-contrib]: https://contrib.rocks/image?repo=Carrotzpc/umdjs
[contributors-link]: https://github.com/Carrotzpc/umdjs/graphs/contributors
[github-action-release-link]: https://github.com/actions/workflows/Carrotzpc/umdjs/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/Carrotzpc/umdjs/release.yml?label=release&labelColor=black&logo=semanticrelease&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/actions/workflows/Carrotzpc/umdjs/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/Carrotzpc/umdjs/test.yml?label=test&labelColor=black&logo=jest&logoColor=white&style=flat-square
[github-contributors-link]: https://github.com/Carrotzpc/umdjs/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/Carrotzpc/umdjs?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/Carrotzpc/umdjs/network/members
[github-forks-shield]: https://img.shields.io/github/forks/Carrotzpc/umdjs?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/Carrotzpc/umdjs/issues
[github-issues-shield]: https://img.shields.io/github/issues/Carrotzpc/umdjs?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/Carrotzpc/umdjs/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/Carrotzpc/umdjs?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/Carrotzpc/umdjs/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/Carrotzpc/umdjs?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/Carrotzpc/umdjs/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/Carrotzpc/umdjs?color=ffcb47&labelColor=black&style=flat-square
[npm-downloads-link]: https://www.npmjs.com/package/@umdjs/query-string
[npm-downloads-shield]: https://img.shields.io/npm/dt/@umdjs/query-string?labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@umdjs/query-string
[npm-release-shield]: https://img.shields.io/npm/v/@umdjs/query-string?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/Carrotzpc/umdjs/pulls
[pr-welcome-shield]: https://img.shields.io/badge/🥕_pr_welcome-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/Carrotzpc
[query-string-jsdelivr-data-link]: https://data.jsdelivr.com/v1/package/npm/@umdjs/query-string
[query-string-jsdelivr-link]: https://www.jsdelivr.com/package/npm/@umdjs/query-string
[query-string-npm-link]: https://www.npmjs.com/package/query-string
[query-string-unpkg-link]: https://unpkg.com/@umdjs/query-string/dist
