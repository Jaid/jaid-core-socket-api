# jaid-core-socket-api


<a href="https://raw.githubusercontent.com/Jaid/jaid-core-socket-api/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/jaid-core-socket-api?style=flat-square" alt="License"/></a>  
<a href="https://actions-badge.atrox.dev/Jaid/jaid-core-socket-api/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Fjaid-core-socket-api%2Fbadge" alt="Build status"/></a> <a href="https://github.com/Jaid/jaid-core-socket-api/commits"><img src="https://img.shields.io/github/commits-since/Jaid/jaid-core-socket-api/v0.1.0?style=flat-square&logo=github" alt="Commits since v0.1.0"/></a> <a href="https://github.com/Jaid/jaid-core-socket-api/commits"><img src="https://img.shields.io/github/last-commit/Jaid/jaid-core-socket-api?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/jaid-core-socket-api/issues"><img src="https://img.shields.io/github/issues/Jaid/jaid-core-socket-api?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/jaid-core-socket-api"><img src="https://img.shields.io/npm/v/jaid-core-socket-api?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/jaid-core-socket-api/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/jaid-core-socket-api?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/jaid-core-socket-api"><img src="https://img.shields.io/npm/dm/jaid-core-socket-api?style=flat-square&logo=npm" alt="Downloads"/></a>

**jaid-core plugin for simple WebSocket APIs.**















## Installation
<a href="https://npmjs.com/package/jaid-core-socket-api"><img src="https://img.shields.io/badge/npm-jaid--core--socket--api-C23039?style=flat-square&logo=npm" alt="jaid-core-socket-api on npm"/></a>
```bash
npm install --save jaid-core-socket-api@^0.1.0
```
<a href="https://yarnpkg.com/package/jaid-core-socket-api"><img src="https://img.shields.io/badge/Yarn-jaid--core--socket--api-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="jaid-core-socket-api on Yarn"/></a>
```bash
yarn add jaid-core-socket-api@^0.1.0
```
<a href="https://jsdelivr.com/package/npm/jaid-core-socket-api/"><img src="https://img.shields.io/badge/jsDelivr-jaid--core--socket--api-orange?style=flat-square&logo=html5&logoColor=white" alt="jaid-core-socket-api on jsDelivr"/></a> <a href="https://unpkg.com/browse/jaid-core-socket-api/"><img src="https://img.shields.io/badge/UNPKG-jaid--core--socket--api-orange?style=flat-square&logo=html5&logoColor=white" alt="jaid-core-socket-api on UNPKG"/></a>
```html
<script src="https://cdn.jsdelivr.net/npm/jaid-core-socket-api@0.1.0/index.js"/>
```


## Try it out



Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type", "text/javascript");
scriptElement.setAttribute("src", "https://cdn.jsdelivr.net/npm/jaid-core-socket-api@0.1.0/index.js");
document.querySelector("head").appendChild(scriptElement);
```

jaid-core-socket-api is now stored in the global variable `jaidCoreSocketApi`. The following console expression should return something other than `"undefined"`.

```javascript
typeof jaidCoreSocketApi.default
```






## Development



Setting up:
```bash
git clone git@github.com:Jaid/jaid-core-socket-api.git
cd jaid-core-socket-api
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
