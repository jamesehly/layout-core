# Layout Core

This library provides the core functionality for the Layout Framework. 
The core api can be used to create various html layouts using javascript and html 
configuration.  It focuses on ease-of-use for real world scenarios, doesn't make 
assumtions about your development workflow, and is intended to help stardardize
and streamline the layout functionality of frontend websites and applications.

It was created by James Ehly out of the desire to create web applications that 
feel more like their desktop counterparts.

For examples and more documentation, visit https://layoutframework.com

### Quick Start

Install the layout core api using npm:
```
npm install layout-core
```

Include the source in your project either with requirejs, CommonJS, as an ES6 module
or by including the source file and using the global variable _layout. Both of
these examples are taken from the files in the examples folder.

#### AMD

**index.html**
```
<script>
    require.config({
        baseUrl: "/"
    });
    require(["examples/html-amd/main", "dist/layout.min"]);
</script>
```

**main.js**
```
define( function (require) {
    var _layout = require('dist/layout.min');
    var layout = new _layout.Api();
    ...
});

```

#### Global

**index.html**
```
<script src="/dist/layout.min.js" type="text/javascript"></script>
<script type="text/javascript">
    var layout = new _layout.Api();
    ...
</script>
```

### Running the examples

Run `npm start` to start the webpack-dev-server. A web page should open in your
web browser and display a folder structure.  Navigate to the examples directory.

### License

Layout Core is released under the MIT License. See the included license file or
visit https://layoutframework.com/license