# Tree Shaking

---

## What is it?

- Tree-shaking allows you to eliminate unused exports from your final builds.
- Normally, imports via Babel are converted to CommonJS and the entire module is included in your final build.
- However...

---

**index.js**
```
import { foo } from './fizz.js';
console.log( foo() );
```

**fizz.js**
```
export function foo () {
  return 'foo!';
}

export function bar () {
  return 'bar!';
}
```

- If we're never using bar, why should it be included in the final bundle? Tree-shaking solves this.
- It's good for eliminating dead code you've written, but particularly potent on libraries.

---

## Tree Shaking

- Webpack 2 performs tree-shaking by default, as long as you disable conversion to CommonJS
- If we're using a new-ish version of the babel loader, we can do this by using the `modules: false` option on `es2015`:

```
presets: [
  ["es2015", { "modules": false }]
]
```

- We also need to convert any lingering CommonJS imports we want pruned to ES2015 imports.
- Modules won't be removed until minification step.

---


## Exercise 5

(Duration: 5 minutes)

- Modify the build system in Exercise 5 to enable tree-shaking.
