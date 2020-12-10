---
layout: single-post
categories: [ web 101 ]
title: "What is JavaScript"
subtitle: "And why do you care"
date: 2020-01-07
background: 'assets/img/posts/what-is-javascript.jpg'

description: Simple introduction to JavaScirpt. This article aims to inform the techy curious what JavaScript is and provide further resources to learn how to use JavaScript in the real world.

thumbnail: fun-with-js-thumb.jpg

nav: 'dark'

func:

syntax_style: "github"

comments: true
---

It doesn't take long for the techy curious to come across JavaScript. Chances are, you're here because you've heard the term and have been doing a bit of gooleing. A little understanding of JavaScript can be really powerful for those wanting to tweak things.

## What is JavaScript

JavaScript (JS) is a scripting language used to create and control a websites content. Unlike HTML and CSS, content that is under the control of JS can respond and change in response to a users actions. Features like:

 - Animated graphics

 - Photo slideshows

 - Autocomplete text suggestions

 - Interactive forms

An even better way of understanding what JS does, is to think about certain web features you use every day and likely take for granted. Like when your Facebook timeline automatically updates on your screen or Google suggests search terms based on a few letters you’ve started typing. In both cases, that’s JS in action.

### The Power of 3: HTML, CSS, and JavaScript

When most people learn to code for the web, they start with HTML and CSS. From there, they move on to JS. Which makes sense! The three elements together form the backbone of web development.

- `HTML` is the structure of your page
- `CSS` controls how the page *looks*
- `JavaScript` is the magic third element that can make your site dynamic.

### JavaScript is Used to Automate and Animate

I mentioned above that JS is a “scripting language”. Scripting languages are coding languages used to automate processes that users would otherwise need to execute on their own, step-by-step. Short of scripting, any changes on web pages you visit would require either manually reloading the page, or navigating a series of static menus to get to the content you’re after

A scripting language, like JS does the heavy lifting by telling websites or web applications to “do something.” In the case of JS, this means doing things like animating as you scroll down, cycling through a slideshow of pictures, or suggesting autocompletes. It’s the “script” in JavaScript that makes these things happen seemingly on their own.

Meanwhile, because JS is such an integral part of web functionality, all major web browsers (the program you are using to read this) come with built-in engines that can render JS. This means JS commands can be typed directly into an HTML document, and web browsers will be able to understand them. In other words, using JS doesn’t require downloading any additional programs.

## 2. How Does JavaScript Work?

JavaScript is either embedded into a web page or else it's included in a .js file. JS is a client-side language (rather than a server-side language), which is a fancy way of saying that it gets downloaded, and is then processed by the users device.

### How Do You Add JavaScript to a Website?

Actually adding JS code to a web page is a pretty simple process (and a familiar one if you've done any coding with HTML and CSS). JS can be added directly to a page's code using ```<script>``` tags and giving them the type attribute ```text/javascript```. Honestly, JS looks very similar to adding CSS to a site. Here's a side-by-side comparison:

**JavaScript:**
```html
<script type="text/javascript">

 var item = document.getElementById( itemID );

 item.classList.toggle( 'display-none' );

</script>
```

**CSS:**
```html
<style>

 .display-none {

  display: none;

 }
</style>
```

JS code can also be added to a page as a separate file with the extension .js. The script is then downloaded and processed in	each individual's web browser, turning it into the dynamic objects and effects they see on their screen.

One word of warning, though: since JavaScript is processed by individual browsers, it's possible a user might have JavaScript disabled on their end. Sites that use JavaScript need to have a back up plan in place to avoid breaking when this	happens.

## 3. What is Vanilla JavaScript?

As you dig into JS you'll eventually hear the term *vanilla JavaScript*. So what does that mean?

**Vanilla JavaScript** is the JS language *as is* without using any libraries to make the coding process easier or more efficient.

To give you an idea of what vanilla JS looks like, consider the following basic example of JS code. If you wanted users to receive a “thanks for signing up” confirmation message after signing up for an offer or service on a website, you could code it directly into an HTML page (between ```<script>``` tags) like this:

```html
<script>

window.onload = initAll;

function initAll() {

 document.getElementById( 'submit' ).onclick = submitMessage;

}

function submitMessage() {

 var greeting = document.getElementById( 'name' ).getAttribute( 'value' );

 document.getElementById( 'headline' ).innerHTML = 'Thank you for joining, ' + greeting;

  return false;

}

</script>
```

Vanilla JS like this can be used to create JS projects, but as you become more familiar with the JS language, there are different tools you can implement to make JS easier and more efficient to use.


## 4. Advanced Javascript: Frameworks and Libraries (AKA Tools to Make JS Easier)

As you might imagine, developing with vanilla JS can be very time consuming. That's why JS frameworks and libraries (tools that make JS a lot easier to use) are your new best friends. Here's a breakdown of some of the main ones you'll encounter and what they do.

### jQuery—The O.G. JavaScript Library

When you work with JS, you’ll notice JS functions and features that show up regularly across multiple websites or web apps, things like menu animations and builds in and out, file upload forms, and image galleries. While you could code each of these things from the ground up every time you need one, your coding life will feel a lot easier if you use coding libraries like jQuery instead.

The jQuery library is made up of JS coding functions that can be performed through single line jQuery commands. For example, the JS code example above looks like this if it’s performed using jQuery code instead:

```html
<script>

$( '#submit' ).click( function () {

 var greeting = $( '#name' ).val();

 $( '#headline' ).html( 'Thank you for joining, ' + greeting);

 return false;

});

</script>
```

As you can see, the jQuery programming approach is a lot more concise, and it can be reused any time you want to perform the same JS function while coding a website or web app.

In addition to examples like the one above, jQuery code can be put together to create more complicated plugins.

jQuery plugins can be found directly from the jQuery UI (User Interface) repository, where source code is available for copying and pasting.

### React JS—A Front End Developer's Best Friend

Along with jQuery, React JS is another key JS library for web developers. React JS is a front end JS library developed by Facebook in 2011 and designed specifically for building UIs (user interfaces). If you're not familiar, UIs are the collection of on-screen menus, search bars, buttons, and anything else someone interacts with to use a website or app, and while you CAN build them painstakingly by hand with vanilla JS, who has time for that?

React allows developers to use prewritten code for repetitive menu objects and effects (like interactive forms, autocomplete features, fade-in or out menu animations, etc.), and it also improves overall site speed and performance through feature called Virtual DOM. Learning how to use React JS will make your life a whole lot easier as a JS developer, and it will also make you a lot more hireable.

### Other JavaScript Libraries and Frameworks

While JS libraries like jQuery and React function as digital Swiss Army knives for individual coding needs, front-end developers can take things a step farther by using tools called JavaScript frameworks.

Extending past the patchwork functionality of jQuery, JS frameworks provide JavaScript developers with full templates for websites or web applications. JS frameworks then create spaces in those templates where JS code is recommended to go, as well as prewritten code (much like jQuery) that can be plugged into those spaces.

While there are a number of frameworks that can are considered industry standards (e.g. Vue, and Angular), your best bet when picking one to learn is to consider potential employers or clients and identify which JS framework—if any—they favour. And keep in mind, once you’ve learned one framework, it’s relatively easy to pick up more.
