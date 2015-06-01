
(function ( $ ) {
    
        
        function addSource(elem, path) {
            
            var scriptEls = document.getElementsByTagName( 'script' );
            var thisScriptEl = scriptEls[scriptEls.length - 1];
            var scriptPath = thisScriptEl.src;
            var scriptFolder = scriptPath.substr(0, scriptPath.lastIndexOf( '/' )+1 );
            
            $('<source>').attr('src', scriptFolder + path).appendTo(elem);
            
        }
        
        
        
        $('*[soundOnHover]').each( function() { 
          
          
            var soundfile = $(this).attr('soundOnHover');
            
            var audio = $('<audio />', {
               id: 'sound-'+soundfile,
               volume: 0.5
             });
            addSource(audio, 'audio/'+soundfile+'.mp3');
            addSource(audio, 'audio/'+soundfile+'.ogg');
            audio.appendTo('body');  
            
            $(this).mouseenter(
                function() { 
                    $('#sound-'+soundfile)[0].play(); 
                }); 
            
        }); 
        
        
        $('*[soundOnLoad]').each( function() { 
            
            var soundfile = $(this).attr('soundOnLoad');
            
            var audio = $('<audio />', {
               id: 'sound-'+soundfile
             });
            addSource(audio, 'audio/'+soundfile+'.mp3');
            addSource(audio, 'audio/'+soundfile+'.ogg');
            audio.appendTo('body');  
            
            // We need to add a little delay or it will trigger before the DOM can find it... 
            setTimeout(function() { $('#sound-'+soundfile)[0].play(); }, 400);  
            
        }); 
        
        
        
        $('*[soundOnClick]').each( function() { 
          
          
            var soundfile = $(this).attr('soundOnClick');
            
            var audio = $('<audio />', {
               id: 'sound-'+soundfile,
               volume: 0.8
             });
            addSource(audio, 'audio/'+soundfile+'.mp3');
            addSource(audio, 'audio/'+soundfile+'.ogg');
            audio.appendTo('body');  
            
            $(this).on('click', 
                function() { 
                    $('#sound-'+soundfile)[0].play(); 
                }); 
            
        }); 
    

    
}( jQuery ));