for (var i = 0; i < 100; i++) {
    var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('body').append(star);
  }
  // function([string1, string2],target id,[color1,color2])    
 consoleText(['SPACE', 'ARTIFICIAL INTELLIGENCE', 'MACHINE LEARNING','DEEP LEARNING','COMPUTER VISION'], 'text',['OrangeRed','Fuchsia','GreenYellow','yellow','DeepSkyBlue']);

 function consoleText(words, id, colors) {
   if (colors === undefined) colors = ['#fff'];
   var visible = true;
   var con = document.getElementById('console');
   var letterCount = 1;
   var x = 1;
   var waiting = false;
   var target = document.getElementById(id)
   target.setAttribute('style', 'color:' + colors[0])
   window.setInterval(function() {
 
     if (letterCount === 0 && waiting === false) {
       waiting = true;
       target.innerHTML = words[0].substring(0, letterCount)
       window.setTimeout(function() {
         var usedColor = colors.shift();
         colors.push(usedColor);
         var usedWord = words.shift();
         words.push(usedWord);
         x = 1;
         target.setAttribute('style', 'color:' + colors[0])
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (letterCount === words[0].length + 1 && waiting === false) {
       waiting = true;
       window.setTimeout(function() {
         x = -1;
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (waiting === false) {
       target.innerHTML = words[0].substring(0, letterCount)
       letterCount += x;
     }
   }, 120)
   window.setInterval(function() {
     if (visible === true) {
       con.className = 'console-underscore hidden'
       visible = false;
 
     } else {
       con.className = 'console-underscore'
 
       visible = true;
     }
   }, 400)
 }