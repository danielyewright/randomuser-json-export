# randomuser-json-export

> A randomuser.me command-line utility

This node module gets specific data from the randomuser.me API, places it into a new array 
and saves the data in a JSON file. This is ideal if you only want specific data from the API to
use as sample data in a RESTful webapp.

### Getting Started

Install the npm package
```shell
npm install randomuser-export
```

Run the utility
```shell
node index.js
```

The output JSON file will be in the root of the package directory. By default, the utility only get 20 results from the API.

### Changelog

**1.0.1**
- Updated package name
- Added `npm-shrinkwrap.json`

**1.0.0**
- Initial release