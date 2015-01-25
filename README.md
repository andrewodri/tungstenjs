<p align="center">
  <img src="https://github.com/affirmix/tungstenjs/blob/master/tungstenjs-logo.png?raw=true" alt="TungstenJS logo"/>
</p>

## What is TungstenJS?

TungstenJS is an ECMAScript 6 Javascript MVC framework designed to provide common object-oriented design patterns in manner more familiar to developers who have experience working with class-based languages, thanks to the new language features introduced in the [ECMA-262 6th Edition Draft Specification](http://people.mozilla.org/~jorendorff/es6-draft.html).

## What can I expect from TungstenJS as development continues?

1. *Developer happiness*. The first priority is creating a framework that allows you to produce code that is simple, flexible, and maintainable. It aims to be intuitive, logical, and beautiful.

2. *Consistency with common/best practices*. TungstenJS aims to stay close to established designed patterns, MVC implementations across various platforms, while maintain the most logical familiar syntax possible. The will be obvious limitations, espcially seeing the path the ECMA-262 specification is taking, but we will do our best.

3. *Performance*. After the first two goals have been realized, perfomance will continually be improved. In the early stages of the project performance will be a secondary concern, but this will be a constant priority as development continues.

## Why create a new Javascript framework?

Put simply, but ECMAScript 6 is a fundamentally new language. Due to the language limitations that have existed in Javascript, (and will continue to exist even in ECMAScript 6, albeit to a lesser extent) it has been impossible to create an MVC framework and library of common classes that have any type of consistency or familiarily with many of server languages and frameworks. TungstenJS attempts to address this, with a strong focus on building out a small subset of useful patterns relevant to web development, drawing heavily on ActionScript 3, ASP.NET, and PHP Laravel, and PureMVC.

## ECMAScript 6/ECMA-262 isn't finalized. How can I use TungstenJS?

You can use it today by means of [Google Traceur](https://github.com/google/traceur-compiler), and more recently [6to5](https://6to5.org/). TungstenJS will only implement language features currently supported in these projects, an ECMAScript 6 compiler that generates ECMASCript 5.1 compatible code for use in today's browsers. More documentation as well as boilerplate build scripts will be included as the projects gets closer to a stable release.

For now at least, a lot of the heavy lifting for XMLHTTPRequests, DOM traversal, and deferred processing is handled by jQuery. With that in mind, TungstenJS has the following dependencies:

* [Google Traceur](https://github.com/google/traceur-compiler) / [6to5](https://6to5.org/)
* [jQuery](https://github.com/jquery/jquery) *This dependency will be removed as development continues*
