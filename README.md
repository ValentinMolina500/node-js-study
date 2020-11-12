### NodeJS Study
Code snippets used for learning NodeJS.

Node.js is an open-source, cross-platform JavaScript runtime environment.

It runs on the V8 JavaScript engine, the core of Chrome.

`app.js` is the common entry point for NodeJS server applications.

# Node.js History

Node.js has been around for 11 years, (JS for 24 years, the Web 31).

JavaScript was created by Netscape as a scripting tool to manipulate web pages in their browser, Netscape Navigator.

Using server-side JavaScript was not too popular until Web 2.0 applications like Flickr and Gmail showed the world what a modern web experience could be.

Also, JavaScript engines becoming more performant helped make Node.js more viable as a server-side language.

# Node.js and the Browser

Main thing that changes is the environment.

Most JavaScript in the browser is interacting with the DOM and with Web API's (Cookies, Local Storage, etc.)

Browsers lack things such as robust filesystem access, and system programming fixtures such as processes mostly due to security.

With Node.js, you control the environment your application runs in. Typically you specify a Node.js version and what packages to use.

Browsers don't have that luxury: you can't guarantee how users are accessing your site (i.e their browsers).

Also, no `import` in Node.js. Back to `require` statements (for better or for worse).

