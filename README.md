# pick-keys

> Randomly sampling some keys from an object.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/pick-keys/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/pick-keys/master.svg?style=flat-square)](https://travis-ci.org/mock-end/pick-keys)
[![coverage:?](https://img.shields.io/coveralls/mock-end/pick-keys/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/pick-keys)



## Install

```
$ npm install --save pick-keys 
```



## Usage

> For more use-cases see the [tests](https://github.com/mock-end/pick-keys/blob/master/test/spec/index.js)

```js
var pickKeys = require('pick-keys');

// pickKeys(object[, count]);

pickKeys({ a: 1, b: 1, c: 1 });
// => ['a', 'c']

pickKeys({ a: 1, b: 1, c: 1 }, 1);
// => ['b']

pickKeys({ a: 1, b: 1, c: 1 }, 0);
// => []

pickKeys([1, 2, 3, 4, 5]);
// => ['1', '3', '4']


// others
pickKeys();      // => []
pickKeys(null);  // => []
pickKeys(1);     // => []
pickKeys('abc'); // => []
pickKeys({});    // => []
pickKeys([]);    // => []
```


## Related

- [pick-key](https://github.com/mock-end/pick-key) - Randomly sampling a key from an object.
- [pick-prop](https://github.com/mock-end/pick-prop) - Randomly sampling a property from an object.
- [pick-props](https://github.com/mock-end/pick-props) - Randomly sampling some properties from an object.
- [object-at](https://github.com/gearcase/object-at) - Get object's property according to the path.
- [object-has](https://github.com/gearcase/object-has) - Checks if path is a direct property of object.
- [object-set](https://github.com/gearcase/object-set) - Sets the value at path of object.
- [object-unset](https://github.com/gearcase/object-unset) - Removes the property at path of object.
- [to-path](https://github.com/gearcase/to-path) - Converts string to a property path array. 



## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/pick-keys/issues/new).
