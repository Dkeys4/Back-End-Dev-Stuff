The project for the Server powered or created using Express worked flawlessly. In order to update files...node index.js is used. To the point of the instructor nodemon was suggested. There was a common error that presented itself, it is listed below. in order to install the dependency it is customary to use npm i -g nodemon. it did not work, it threw the error that is below. in order to get around it i needed to use the keyword "sudo." so, i used sudo npm i -g nodemon. the dependency downloaded immediately.


Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/nodemon'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/nodemon'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules/nodemon'
npm ERR! }
