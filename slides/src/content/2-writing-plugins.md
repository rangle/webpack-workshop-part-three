# Writing Loaders and Plugins: Plugins

---

# Review: What is a Plugin?

- Whereas loaders generally directly affect resources, plugins are used to add functionality typically related to bundles and compile processes
- Plugins have access to events within the build process itself and can react on them

---

## Our Approach

- Webpack installs a plugin by calling its apply method, and passes a reference to the Webpack compiler object.

```
"use strict";

class Notifier {
  apply(compiler) {

  }
}

module.exports = Notifier;
```

- Once you have this set up, you can react to events and structures exposed to you by the compiler object.

---

Plugins API: Compiler Instance

- `run(compiler: Compiler)` Compilation has started.
- `emit(c: Compilation)` Compilation has finished, and files are emitting.
- `done(stats: Stats)` Triggered upon full completion.


```
compiler.plugin("emit, function(compilation) {
    //you are now in the 'emit' phase
});
```

- Many more: [https://github.com/webpack/docs/wiki/plugins#the-compiler-instance](https://github.com/webpack/docs/wiki/plugins#the-compiler-instance)


---

Plugins API: Compilation Instance

- Extends from the Compiler Instance
- Representation of the current compilation, including all modules and dependencies
- Examples of lifecycle events: loaded, sealed, optimized, chunked, hashed and restored

```
compiler.plugin('compilation', function(compilation) {
  compilation.plugin('seal', function() {
      // Compilation is sealed.
  });
});
```

- [https://github.com/webpack/docs/wiki/plugins#the-compilation-instance](https://github.com/webpack/docs/wiki/plugins#the-compilation-instance)

---

## Exercise 2

(Duration: 10 minutes)

Write a plugin that notifies me (using OS-native notifications) about new successful compiles.

- Build your code on top of the `exercise-2` shell in your exercises
- Recommend using `node-notifier` to help you with triggering system notifications: https://www.npmjs.com/package/node-notifier
