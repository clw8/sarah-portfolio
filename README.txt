To self:

How to use

TRunning build.js with node build.js does the following:

It takes the app element from each of the files in the view folder
THen, it inserts it into the app div in the base.html folder
Finally it saves these files TO THE ROOT, i.e. the html files that
are on the same level as the build.js file (the view files are left unchanged)

So when uploading to a host, DO NOT upload the views folder




To upload after running 'npm run build':
Images EXCEPT lab_photography and nature_photography
dist/main.js and global--production.css

DON'T upload: css/ or js/ or views/


