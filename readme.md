# jaid-core-socket-api


jaid-core plugin for simple WebSocket APIs.

## Installation
<a href='https://npmjs.com/package/jaid-core-socket-api'><img alt='npm logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/npm.png'/></a>
```bash
npm install --save jaid-core-socket-api@^0.1.0
```
<a href='https://yarnpkg.com/package/jaid-core-socket-api'><img alt='Yarn logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/yarn.png'/></a>
```bash
yarn add jaid-core-socket-api@^0.1.0
```



## Documentation
**Kind**: Exported function  
**Returns**: <code>number</code> - Seconds passed since Unix epoch (01 January 1970)  

| Param | Type |
| --- | --- |
| [compareValue] | <code>number</code> | 

**Example**  
```javascript
import jaidCoreSocketApi from "jaid-core-socket-api"
const result = jaidCoreSocketApi()
result === 1549410770
setTimeout(() => {
  const result2 = jaidCoreSocketApi(result)
  result2 === 3
}, 3000)
```


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

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
