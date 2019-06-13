To self:

How to use

Run npm run watch and npm run serve for development

note that build.js can be improved quite a bit to allow for greater flexibility
app.js can be improved to allow for pages without a nav link

Run npm run build for the production build...this does the following:
Compiles files from the /view folder and puts them in the root ( on the same level as the build.js file )
Creates a file called global--production.css at the root

1) To see your website, run "npm run serve" in the terminal
2) When you make a change, open a new window and run "npm run build"
3) Only touch /views, /css or /js folders

Running build.js with "npm run build" does the following:
Gets files from the /views folder, and combines/smooshes each of them with the base.html file...and then puts them in the root ( on the same level as the build.js file ).
The base.html file contains elements which are shared across all pages. e.g. the sidebar and the loading screen
It also creates a file called global--production.css

Javascript is compiled from the /js folder to the /dist folder

So when editing: only edit the files in the /views, /css and /js folders

(So when uploading to a host, DO NOT upload the views folder)

When you are ready to upload to the host, run "npm run build" in the terminal
And use the output files in the root (html or global--production.css), and in the /dist (for .js files)
