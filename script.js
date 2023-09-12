const progressBar = document.getElementByIdClassName
('progress-bar')[0]
setInterval(() => {
   const compudetstyle = getComputedStyle(progressBar)
   const width = parseFloat(compudetstyle.getPropertyvalue('--width')) || 0
   progressBar.Style.setproperty('--width' , width + .1 )
}, 5);