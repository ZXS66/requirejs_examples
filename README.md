requirejs examples
============

Example of requirejs with minification and using has.js


There are 6 build files in Scripts, they will each produce a main-min.js used in index-min.html and showing more and more functionality.

------------------------------------

You will need to install nodejs as we will use r.js to minify the code (r.js is a node module)

After you install nodejs and npm you can globally install r.js (for Linux/mac you may need sudo)

        npm install requirejs

------------------------------------

To run the compiler just change directory in Scripts and execute the following command

        r.js -o build1.js
        
for Windows:

        r.js.cmd -o build1.js

There are 6 builds so you can use build1 to build6.js