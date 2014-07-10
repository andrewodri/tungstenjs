ElementsJS - ECMAScript 6 MVC Framework
=======================================

ElementsJS is a Javascript framework designed to provide common object-oriented design patterns in manner more familiar to developers who have experience working with class-based languages, thanks to the new language features introduced in the [ECMA-262 6th Edition Draft Specification](http://people.mozilla.org/~jorendorff/es6-draft.html).

**Why would you create a fundamentally new framework when there is a plethoa of existing Javascript frameworks already out there?**

Put simply, but ECMAScript 6 is a fundamentally new language. Due to the language limitations that have existed in Javascript, (and will continue to exist even in ECMAScript 6, albeit to a lesser extent) it has been impossible to create an MVC framework and library of common classes that have any type of consistency or familiarily with many of server languages and frameworks. ElementsJS attempts to address this, with a strong focus on building out a small subset of useful patterns relevant to web development, drawing heavily on ActionScript 3, ASP.NET, and PHP Laravel.

**ECMAScript 6 isn't even a finalized specification. When can I start using ElementsJS?**

Today. ElementsJS will only implement language features currently support in Google Traceur, an ECMAScript 6 compiler that generates ECMASCript 5.1 compatible code for use in today's browsers. For now at least, a lot of the heavy lifting for XMLHTTPRequests, DOM traversal, and deferred processing is handled by jQuery. With that in mind, ElementsJS has the following dependencies:

* [Google Traceur](https://github.com/google/traceur-compiler)
* [jQuery](https://github.com/jquery/jquery)
