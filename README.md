# randomuser-json-export

> A randomuser.me command-line utility

This node module gets specific data from the randomuser.me API, places it into a new array 
and saves the data in a JSON file. This is ideal if you only want specific data from the API to
use as sample data in a RESTful webapp.

### Getting Started

Install the npm package
```shell
npm install randomuser-json-export
```

Run the utility
```shell
node index.js
```

The output JSON file will be in the root of the package directory. By default, the file name is `data.json`. Currently, the utility only gets 20 results from the API. To change this, edit the HTTP URL in `index.js`.

```javascript
https://randomuser.me/api/?nat=us&results=20
```

Read the [randomuser.me docs](https://randomuser.me/documentation) for more configuration options.