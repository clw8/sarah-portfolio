To self:

How to use

Running build.js with node build.js does the following:
Compiles files from the /view folder and puts them in the root ( on the same level as the build.js file )
Creates a file called global--production.css at the root
Javascript is compiled from the /js folder to the /dist folder

So when editing: only edit the files in the /view, /css and /js folders

(So when uploading to a host, DO NOT upload the views folder)

When you are ready to upload to the host, run "npm run build" in the terminal
And use the output files in the root (html or global--production.css), and in the /dist (for .js files)
