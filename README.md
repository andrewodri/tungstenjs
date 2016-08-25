## What is TungstenJS?

TungstenJS is an ECMAScript 6 (ES6) Javascript MVC framework designed to provide common object-oriented design patterns in manner more familiar to developers who have experience working with class-based languages, thanks to the new language features introduced in the [ECMA-262 6th Edition Draft Specification](http://people.mozilla.org/~jorendorff/es6-draft.html).

## What can I expect from TungstenJS as development continues?

1. *Developer happiness*. The first priority is creating a framework that allows you to produce code that is simple, flexible, and maintainable. It aims to be intuitive, logical, and beautiful. We want to use the new features of ES6 to make a framework that non-Javascript developers can grok easily.

2. *Consistency with best practices and standard compliance*. TungstenJS aims to stay close to established design patterns and familiar MVC implementations across various platforms. It will also aim to be to stick as close as possible to the ECMA-262 specification without unnecessary use of hacks. The will have it's obvious limitations, especially seeing the path the ECMA-262 specification is taking, but we will do our best.

3. *Performance*. After the first two goals have been realized, performance will continually be improved. In the early stages of the project, performance will be a secondary concern. We expect performance to rapidly improve after release, though, as more resources this will be spent on optimizing the framework, as as browsers begin to provide native implementations of ES6 features that will initially be polyfilled.

## Why create a new Javascript framework?

Put simply, but ECMAScript 6 is a fundamentally new language. Due to the language limitations that have existed in Javascript, (and will continue to exist even in ECMAScript 6, albeit to a lesser extent) it has been impossible to create an MVC framework and library of common classes that have any type of consistency with many richer, class-based languages and frameworks. TungstenJS attempts to address this, with a strong focus on building out a small subset of useful patterns relevant to web development, drawing heavily on ActionScript 3, ASP.NET, and PHP Laravel, and PureMVC.

## ECMAScript 6/ECMA-262 isn't finalized. How can I use TungstenJS?

You can use it in any modern browser thanks to [Babel](https://babeljs.io/), an ECMAScript 6 compiler that generates ECMAScript 5.1 compatible code for use in today's browsers, while provide polyfills for any missing features. TungstenJS will only implement language features that are a) part of the ECMA-262 specification, and 2) currently implemented in 6to5. More documentation as well as boilerplate build scripts will be included as the projects gets closer to a stable release.

You can see TungstenJS in action on your own system by following these steps: (Dependent on [Git](https://github.com/git/git) and [Node.js](https://github.com/nodejs/node))

1. `git clone https://github.com/affirmix/tungstenjs.git`
2. `cd tungstenjs`
3. `npm install`
4. `gulp`
5. `python -m SimpleHTTPServer 8000`

Navigate to http://localhost:8000/demo/, and you should see a functional demo page powered by TungstenJS, complete with source maps. See the [TungstenJS Todo MVC application](https://github.com/affirmix/tungstenjs-todomvc) for a more detailed example.
