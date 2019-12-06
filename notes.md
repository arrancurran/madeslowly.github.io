move jpegs to progressive jpegs, especially for large displays.

Fix for Flexbug 1
  https://github.com/philipwalton/flexbugs#flexbug-1
  Added flex-shrink: 0 to container and flex-basis: auto to children.

Tidio live chat button has inline style! z-index: 999999999 !important which is impossible (?) to override since the tidio script inserts the iframe just before /body

Installed jekyll-autoprefixer but don't completely understand it yet. Set to accommodate 99.5% of browsers, as defined by caniuse.

Noted out the flashing cursor on the landing call to action but haven't cleaned up all css.

<svg class="flashing-cursor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="5" width="12" >
<g><line x1="1" y1="2" x2="11" y2="2"/></g>
</svg>

.flashing-cursor
  fill: none
  stroke: $blue-color
  stroke-width: 2
  stroke-linecap: round
  animation: blink 0.3s infinite
  animation-direction: alternate
  animation-timing-function: ease-in-out
  transform: translateY(5px) translateX(-6px)

@keyframes blink
  0%
    opacity: 0
  100%
    opacity: 1

***
Need a call to action at the bottom of the homepage

***
Drop tidio and replace with a 'get a quote' questionnaire.

*******
Buttons are really broken! Im trying to make them reader friendly by using divs and a's but so far its breaking other buttons with unexpected results.

Overhauling animations etc

We need a clear definition of all the button animations and their relative shadows

btn:hover should include a change in the shadow but not the color

*******
when data-aos="fade-left", we get overflow issues. Applying overflow-x: hidden fixes it put then we clip any shadow effects

applying overflow-x: hidden to the parent is better

*****
Check layout on small rotated screen

*****
need to loop contact details dm options

can we put html in contact email
