---
layout: single-post
categories: [ web 101 ]
title: "What is JavaScript"
subtitle: "Can your browser do science?"
date: 2018-06-05
background: 'assets/img/posts/experimenting-with-javascript.jpg'

description: Fun with JavaScript. Is your browser capable of doing science? We try this out with some simple JavaScript and a little bit of physics.

thumbnail: fun-with-js-thumb.jpg

nav: 'dark'

func:
---

It doesn't take long for the techy curious to come across JavaScript. Chances are, you're here because you've heard the term and have been doing a bit og gooleing. A little understanding of JavaScript can be really powerfull for those wanting to tweak things.

## What is JavaScript

JavaScript (JS) is a scripting language used to create and control a websites content. Unlike HTML and CSS, content that is under the control of JS can respond and change in response to a users actions. Features like:

- animated graphics
- photo slideshows
- autocomplete text suggestions
- interactive forms

An even better way of understanding what JS does is to think about certain web features you use every day and likely take for granted. Like when your Facebook timeline automatically updates on your screen or Google suggests search terms based on a few letters you’ve started typing. In both cases, that’s JavaScript in action.

Even here, on this website, the changeing colour of the menu bar as you scroll from the top is triggered by your action (scrolling) and JS see's this and responds by changing the background colour.


### The Power of 3: HTML, CSS, and JavaScript

When most people learn to code for the web, they start with HTML and CSS. From there, they move on to JS. Which makes sense! The three elements together form the backbone of web development.

- **HTML** is the structure of your page
- **CSS** controls how the page *looks*
- **JavaScript** is the magic third element which makes your site dynamic.

### JavaScript is Used to Automate and Animate

I mentioned above that JS is a “scripting language”. Scripting languages are coding languages used to automate processes that users would otherwise need to execute on their own, step-by-step. Short of scripting, any changes on web pages you visit would require either manually reloading the page, or navigating a series of static menus to get to the content you’re after

A scripting language like JS does the heavy lifting by telling computer programs like websites or web applications to “do something.” In the case of JS, this means telling those dynamic features described earlier to do whatever it is they do—like telling images to animate themselves, photos to cycle through a slideshow, or autocomplete suggestions to respond to prompts. It’s the “script” in JavaScript that makes these things happen seemingly on their own.

Meanwhile, because JavaScript is such an integral part of web functionality, all major web browsers come with built-in engines that can render JavaScript. This means JS commands can be typed directly into an HTML document, and web browsers will be able to understand them. In other words, using JavaScript doesn’t require downloading any additional programs or compilers.

## 2. What is JavaScript Used For?

We covered this a bit in the intro, but here's a quick list of the main things JavaScript is used for.

- **Adding interactivity to websites**—yup, if you want a website to be more than a static page of text, you'll need to do some JavaScripting
- **Developing mobile applications**—JavaScript isn't just for websites... it's used to create those apps you have on your phone and tablet as well
- **Creating web browser based games**—Ever played a game directly from your web browser? JavaScript probably helped make that happen
- **Back end web development**—yeah, JavaScript is MOSTLY used on the front end of things, but it's a versatile enough scripting language to be used on back end infrastructure, too.

## 3. How Does JavaScript Work?

JavaScript is either embedded into a web page or else it's included in a .js file. JavaScript is also a client-side language (rather than a server-side language), which is a fancy way of saying that it gets downloaded to site visitors' computers, then processed.

### How Do You Add JavaScript to a Website?

Actually adding JavaScript code to a web page is a pretty simple process (and a familiar one if you've done any coding with HTML and CSS). JavaScript can be added directly to a page's code using ```<script>``` tags and giving them the type attribute ```text/javascript```. Honestly, JavaScript looks very similar to adding CSS to a site. Here's a side-by-side comparison:

**css:**
{% highlight CSS %}
<style>

	CSS goes here
</style>
{% endhighlight %}

**JavaScript:**
{% highlight javascript %}
<script type="text/javascript">
	JavaScript code goes here
</script>
{% endhighlight %}

{% highlight javascript %}

var test = themoney ;

{% endhighlight %}


Voila! JavaScript code can also be added to a page as a separate header file with the extension .js. The script is then downloaded and processed in	each individual's web browser, turning it into the dynamic objects and effects they see on their screen.

One word of warning, though: since JavaScript is processed by individual browsers, it's possible a user might have JavaScript disabled on their end. Sites that use JavaScript need to have a back up plan in place to avoid breaking when this	happens.

## 4. What is Vanilla JavaScript?

As you dig into JavaScript you'll eventually hear the term *vanilla Javascript*. So what does that mean?

**Vanilla JavaScript** is the JavaScript language *as is* without using any tools to make the coding process easier or more efficient.

To give you an idea of what vanilla JavaScript looks like, consider the following basic example of JavaScript code. If you wanted users to receive a “thanks for signing up” confirmation message after signing up for an offer or service on a website, you would code it directly into an HTML page (between ```<script>``` tags) like this:
	<pre style="white-space: pre-wrap; white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;"><span style="font-weight: 400;">&lt;script&gt;
</span><span style="font-weight: 400;">window.onload = initAll;
</span><span style="font-weight: 400;">function initAll() {
</span><span style="font-weight: 400;">document.getElementById(“submit”).onclick = submitMessage;
</span><span style="font-weight: 400;">}
</span><span style="font-weight: 400;">function submitMessage() {
</span><span style="font-weight: 400;">var greeting = document.getElementById(“name”).getAttribute(“value”);
</span><span style="font-weight: 400;">document.getElementById(“headline”).innerHTML = “Thank you for joining our email list,” + greeting;
</span><span style="font-weight: 400;">return false;
</span><span style="font-weight: 400;">}
</span><span style="font-weight: 400;">&lt;/script&gt;</span></pre>
	<p>Vanilla JS like this can be used to create JavaScript projects, but as you become more familiar with the JavaScript language, there are different tools you can implement to make JS easier and more efficient to use.
	<p><a href="#toc">(back to top)</a>
	<h2 id="tool">5. Advanced Javascript: Frameworks and Libraries (AKA Tools to Make JS Easier)</h2>
	<p>As you might imagine, using vanilla javascript alone takes&#8230;forever and for web developers, and time is money. That's why <a href="https://skillcrush.com/2019/05/22/javascript-frameworks-vs-libraries/" target="_blank" rel="noopener noreferrer">JavaScript
			frameworks and libraries</a> (tools that make JS a whooole lot easier to use) are your new best friends. Here's a breakdown of some of the main ones you'll encounter and what they do.
	<h3>jQuery—The O.G. JavaScript Library</h3>
	<p>When you work with JavaScript, you’ll notice JS functions and features that show up regularly across multiple websites or web apps—things like menu animations and fade outs, file upload forms, and image galleries. While you could code each of
		these things from the ground up every time you need one, your coding life will feel a lot easier if you use coding libraries like <a href="https://skillcrush.com/2018/07/13/what-is-jquery-used-for/" target="_blank" rel="noopener noreferrer">jQuery</a>
		instead.
	<p>The jQuery library is made up of JavaScript coding functions that can be performed through single line jQuery commands. For example, the JavaScript code example above looks like this if it’s performed using jQuery code instead:
	<pre style="white-space: pre-wrap; white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;"><span style="font-weight: 400;">&lt;script&gt;
</span><span style="font-weight: 400;">$(“#submit”).click(function () {
</span><span style="font-weight: 400;">var greeting = $(“#name”).val();
</span><span style="font-weight: 400;">$(“#headline”).html(“Thank you for joining our email list, ” + greeting);
</span><span style="font-weight: 400;">return false;
</span><span style="font-weight: 400;">});
</span><span style="font-weight: 400;">&lt;script/&gt;</span></pre>
	<p>As you can see, the jQuery programming approach is a lot more concise, and it can be reused any time you want to perform the same JavaScript function while coding a website or web app.
	<p>In addition to examples like the one above (which are considered jQuery snippets—snippets of code inserted directly from the jQuery library to perform dedicated functions), jQuery code can be put together to create more complicated plugins.
		jQuery plugins can be found directly from the jQuery UI (User Interface) repository, where source code is available for copying and pasting.
	<h3>React JS—A Front End Developer's Best Friend</h3>
	<p>Along with jQuery, <a href="https://skillcrush.com/2019/06/13/how-to-learn-react-js/" target="_blank" rel="noopener noreferrer">React JS </a>is another key JavaScript library for web developers. React JS is a front end JavaScript library
		developed by Facebook in 2011 and designed specifically for building UIs (user interfaces). If you're not familiar, UIs are the collection of on-screen menus, search bars, buttons, and anything else someone interacts with to use a website or
		app, and while you CAN build them painstakingly by hand with vanilla JavaScript, who has time for that?
	<p>React allows developers to use prewritten code for repetitive menu objects and effects (like interactive forms, autocomplete features, fade-in or out menu animations, etc.), and it also improves overall site speed and performance through feature
		called Virtual DOM (which you can <a href="https://skillcrush.com/2019/05/14/what-is-react-js/" target="_blank" rel="noopener noreferrer">read all about here</a>). Learning how to use React JS will make your life a whole lot easier as a JavaScript
		developer, and it will also make you a lot more hireable.
	<h3>Other JavaScript Libraries and Frameworks</h3>
	<p>While JS libraries like jQuery and React function as digital Swiss Army knives for individual coding needs, front-end developers can take things a step farther by using tools called <a href="https://skillcrush.com/2018/07/23/what-is-a-javascript-framework/"
		  target="_blank" rel="noopener noreferrer">JavaScript frameworks</a>.
	<p>Extending past the patchwork functionality of jQuery, JS frameworks provide JavaScript developers with full templates for websites or web applications. JS frameworks then create spaces in those templates where JS code is recommended to go, as
		well as prewritten code (much like jQuery) that can be plugged into those spaces.
	<p>While t<a href="https://skillcrush.com/2018/07/05/which-javascript-framework-should-you-learn-first/" target="_blank" rel="noopener noreferrer">here are a number of frameworks</a> that can are considered industry standards (e.g. Vue, and
		Angular), your best bet when picking one to learn is to consider potential employers or clients and identify which JS framework—if any—they favor. And keep in mind, once you’ve learned one framework, it’s relatively easy to pick up more.
	<p><a href="#toc">(back to top)</a>
	<h2 id="learn">5. How to Learn JavaScript</h2>
	<p>The takeaway here? While HTML and <a href="https://skillcrush.com/2012/04/03/css/" target="_blank" rel="noopener noreferrer">CSS </a>are the skills that will let you code a basic web page, JavaScript is the programming language that will bring
		that page to life. Even though HTML and CSS by themselves will put you in position to do beginning developer work, taking the time to learn JavaScript will help your job prospects increase exponentially.
	<p>If you’re ready for a comprehensive JavaScript tutorial, look no further than our <a href="https://skillcrush.com/blueprint/front-end-developer/" target="_blank" rel="noopener noreferrer">Front End Developer Blueprint</a>. This instructor-led
		course will guide you through the ins and outs of the JavaScript language and the jQuery library, as well as HTML, CSS, and other critical web developer skills.
	<p><a href="#toc">(back to top)</a>
</div>
