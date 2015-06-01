# soundkit.js
jQuery/HTML5 sound UI kit for web applications

##Basic Usage
1. Include the javascript file as close to the end of your `<body>` as possible

  ```html
  <body>
        ...
        <script type="text/js" src="soundkit.min.js" />
  </body>
  ```
2. Add one of the following attributes to the element that you want the sound to be attched to: 

  * `soundOnHover`
  * `soundOnClick`
  * `soundOnLoad`


3. Lastly, you need to tell it which sound to play: 

  * alert-click
  * alert-echo
  * alert-electric
  * alert-flick
  * alert-triangle
  * alert-wobble
  * click-analogue
  * click-analogue2
  * click-analogue3
  * click-blip
  * click-footfall
  * click-melodic
  * click-melodic2
  * click-pistachio
  * click-pistachio2
  * click-pistachio3
  * click-pop
  * click-retro
  * click-round-pop
  * click-round-pop2
  * click-round-pop3
  * click-silly
  * click-simple
  * click-simple-double
  * click-simple-resonant
  * click-woody
  * confirm-bass
  * confirm-blip
  * confirm-detuned
  * confirm-echo
  * confirm-echo2
  * confirm-melodic
  * confirm-melodic2
  * confirm-melodic3
  * confirm-melodic4
  * confirm-melodic5
  * confirm-retro
  * confirm-techy
  * confirm-techy2
  * confirm-xylophone
  * confirm-xylophone2
  * deny-analogue
  * deny-bass
  * deny-bass2
  * deny-bass3
  * deny-bass4
  * deny-echo
  * deny-electric
  * deny-electric2
  * deny-jar
  * deny-note
  * deny-retro
  * hover-doubleclick
  * hover-metallic
  * hover-pop
  * hover-sub-bass
  * hover-sub-bass2
  * hover
  * hover2
  * hover3
  * hover4
  * hover5
  * whoosh-sub-bass
  * whoosh
  * whoosh2
  * whoosh3
  * whoosh4
  * whoosh5
  * whoosh6
  * whoosh7


Complete example:

  ```html
  <body>
  	<div class="alert alert-success" soundOnLoad="confirm-echo2">Well done!</div>
        
        ...
        
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/js" src="soundkit.min.js" />
  </body>
  ```
  
## Requirements
 * Requires jQuery (any version)
 * Script tag must be placed after jQuery and after any objects containing tags to be loaded. 

## Attribution
Sounds used in this kit were created by Fran at [narfstuff.co.uk](http://www.narfstuff.co.uk/2009/09/13/royalty-free-ui-sound-pack-now-free/) (currently pending re-distribution permission). 
