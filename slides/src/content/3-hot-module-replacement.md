# Hot Module Replacement

---

## What is HMR?

- It allows you to drop in module changes on the fly as you edit, without reloading your page
- Live-reload on steroids
- Eases the pain of testing routeless, transient app states such as modals and forms

---

## Caveats

 - HMR is meant to be a dev-only, and generally shouldn't be used in production
 - Requires addition of code to your codebase just to account for HMR. It's not much, but it's there.

---

## HMR in Detail

- It sounds scary, but thanks to good tools, it's actually not radically more difficult than working with, say, livereload
- Requires two parts, you just need to make sure you have a mechanism present to account for these two things:
- **HMR Server**: Runs in parallel/subset to your web-server, and tracks which modules need to be reloaded, communicating that information via websockets to...
- **HMR Runtime**: Runs client-side, the HMR Runtime accepts news of updates to your app, unloads the old, stale modules and injects updated versions of them.

---

## The HMR Server + Runtime

- Comes built into webpack-dev-server: `webpack-dev-server --inline --watch --hot`
- If you're using an express server, you can integrate `webpack-hot-middleware`: https://github.com/glenjamin/webpack-hot-middleware
- Good overview of the above and some other integrations here: http://andrewhfarmer.com/webpack-hmr-tutorial/

---

## .Accept-ing updates

- Add to your root module(s):
```
if (module.hot) {
  module.hot.accept();
}
```
- That's it! This line signifies that this module and all dependencies can be hot-swapped.

---

## Side Effects: `.Dispose()ing stale modules'
- While the HMR code can add and remove modules for you, it doesn't really what your code may have done that it now needs to account for in the transition
- HMR is basically time travel, and you don't want to end up like the climax of Primer.
- If your module manipulated the DOM, or changed general app state in other ways, you may end up with inconsistencies.
- We call these artifacts **side effects**
- You can remove side effects with `module.hot.dispose` on a per-module basis:

```
if (module.hot) {
  module.hot.dispose(function() {
    // Remove nodes, reset app states. Do whatever you need to do here.
  });
}
```

---

## React/Angular

- React/Angular implementations
- React: https://webpack.js.org/guides/hmr-react/
- Angular: https://github.com/AngularClass/angular2-hmr

---

## Exercise 3

(Duration: 5 minutes)

Modify the project to enable Hot Module Replacement.
