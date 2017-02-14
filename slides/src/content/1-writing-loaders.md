# Writing Loaders and Plugins: Loaders

---

## Review: What is a Loader?

- Loaders are transformations that are performed on a resource (file) within our app.
- Loaders can be synchronous or asynchronous
- Loaders can be chained
- Loaders accept query parameters
- Loaders can access configuration of the build itself


---

## Our Approach

- Loaders are expressed as a node module exporting a function
- Webpack calls this function and passes your resource (either pure, or as a modified result of the last loader up the line)
```
module.exports = function(text) {

  var query = loaderUtils.parseQuery(this.query),
      delimiter = query.delimiter || ',',
      dsv = dsvFormat(delimiter),
      rows = query.rows,
      res = rows ? dsv.parseRows(text) : dsv.parse(text);
  return 'var res = ' + JSON.stringify(res) + ';' +
    'res.columns = ' + JSON.stringify(res.columns) + ';' +
    'module.exports = res;';
}
```

---

## Loader Context
- Webpack exposes a set of tools/information to your loader via `this` context.
- Use `this.value` to set the value to be passed to the next loader in line
- Use `this.context` to get the directory of the resource being processed
- Use `this.cacheable()` to indicate to Webpack that a loader is cacheable (always true if your loader is 100% deterministic)
- Use `this.query` to get a raw string representation of parameters passed into this loader call
- Use `this.options` to get the options passed to the compiler
- Use `this.emitWarning(string)` `this.emitError(string)` to emit warnings and errors
- IE:
```
module.exports = function(text) {
  this.cacheable();
  var query = this.query; // -> '?xyz=abc'
  // …
```

---

## Exposing better information with `webpack/loader-utils`:

- [https://github.com/webpack/loader-utils](https://github.com/webpack/loader-utils)
- `getLoaderConfig(this,'nameOfLoader')` — Retrieves the loader config (with query paramter options applied) from current webpack.config.js in object form.
- `parseQuery` — Parse queries directly into objects. ie, `?xyz=test` -> `{ xyz: "test" }`

---

## Exposing custom loaders to Webpack (Webpack 1)

- By default, Webpack is aware of modules in `node_modules`, but must be informed of wherever else your loaders might be.

- In Webpack 1, custom loaders must be specified in the config by defining an alias:

```
module.exports = {
  // …
  resolveLoader: {
    alias: {
      "some-loader": path.join(__dirname, "loaders/some-loader")
    }
  },
  // …
};
```

---

## Exposing custom loaders to Webpack (Webpack 2)

- In Webpack 2, we can take advantage of the new resolveLoader.modules option instead, and specify merely where custom loaders will be:

```
  resolveLoader: {
     modules: ['node_modules', 'loaders'] // Will look in ./node_modules and ./loaders
  },
```

[https://webpack.js.org/configuration/resolve/#resolveloader](https://webpack.js.org/configuration/resolve/#resolveloader)

---

## Exercise 1

(Duration: 10 minutes)

Write a CSV loader that converts a CSV to JSON data.
- Build your code on top of the `exercise-1` shell in your exercises
- Recommend using `d3-dsv` to your advantage: https://github.com/d3/d3-dsv
- Decent package to output your resulting JSON to the page within your app: https://www.npmjs.com/package/json-to-htmltable
