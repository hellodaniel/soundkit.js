# soundkit.js
jQuery/HTML5 sound UI kit for web applications. 

[http://hellodaniel.github.io/soundkit.js](View demo)

## Requirements
 * Requires jQuery >= 1.11.2

##Basic Usage

Call direct from javascript `$.soundkit('sound-to-play')` or: 

1. Include the javascript file as close to the end of your `<body>` as possible

  ```html
  <body>
        <div class="alert alert-success" data-sound-load="alert-echo">Success!</div>
        
        ...
        
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script type="text/js" src="soundkit.min.js" />
  </body>
  ```
2. Add one of the following attributes to the element that you want the sound to be attached to: 

  * `data-sound-hover`
  * `data-sound-click`
  * `data-sound-load`


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


## Attribution

 * Script based on [Jeffrey Way's](http://code.tutsplus.com/tutorials/quick-tip-the-html-5-audio-element--net-9672) audio element tips.
 * Sounds used in this kit were created by Fran at [narfstuff.co.uk](http://www.narfstuff.co.uk/2009/09/13/royalty-free-ui-sound-pack-now-free/) 

## To do
 * Remove jQuery dependency some day... 
 
