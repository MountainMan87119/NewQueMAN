
Queue Manager V15


This script :: 
QueueManDEMOxHTML.html       +      QueueManagerDEMO.php

is the html and css and JavaScript all smushed together, and it still depends on the php file.

The other html file,  needs the usual suspects:
QueManDEMO_1_HTML.html   >>>
+      QueueManCSS.css
+      QueueManDEMO.js
+      QueueManagerDEMO.php

######################################

I was thinking of doing up a *single file* version, by including some JavaScript in the first one,
to fake an AJAX; just go away, into a setTimeout and do some stringwork then *return*...

but I imagine you have a php somewhere on your machine or nearby.


