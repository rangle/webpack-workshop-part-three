# Writing Loaders and Plugins: Plugins

---

# Review: What is a Plugin?

- Whereas loaders generally directly affect resources, plugins are used to add functionality typically related to bundles and compile processes
- Plugins have access to events within the build process itself and can react on them

---

## Our Approach

```
"use strict";

class Notifier {
  apply(compiler) {

  }
}

module.exports = Notifier;
```

---

Plugins API: Compiler Instance


- Available when you //////////
[https://github.com/webpack/docs/wiki/plugins#the-compiler-instance](https://github.com/webpack/docs/wiki/plugins#the-compiler-instance)

---

Plugins API: Compilation Instance

- Exists within the Compiler Instance
- [https://github.com/webpack/docs/wiki/plugins#the-compilation-instance](https://github.com/webpack/docs/wiki/plugins#the-compilation-instance)

---

Plugins API: Parser Instance

[https://github.com/webpack/docs/wiki/plugins#the-parser-instance-compilerparser](https://github.com/webpack/docs/wiki/plugins#the-parser-instance-compilerparser)

---

## Exercise 2

(Duration: 10 minutes)

Write a plugin that notifies me (using OS-native notifications) about new successful compiles.

- Build your code on top of the `exercise-2` shell in your exercises
- Recommend using `node-notifier` to help you with triggering system notifications: https://www.npmjs.com/package/node-notifier
