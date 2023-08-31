npm init
npm i express dotenv nodemon mongoose express-async-handler jsonwebtoken bcryptjs


FOR cd frontned/
https://chakra-ui.com/getting-started
we configured proxy in FE pacakge.json
npm install react-router-dom@5
npm i axios
npm i @chakra-ui/icons
npm i react-scrollable-feed
npm i socket.io-client
npm install @chakra-ui/button @chakra-ui/form-control @chakra-ui/input @chakra-ui/layout @chakra-ui/toast @chakra-ui/skeleton @chakra-ui/avatar @chakra-ui/tooltip @chakra-ui/hooks @chakra-ui/menu @chakra-ui/modal @chakra-ui/spinner


// to start project
npm run build
npm start


// HAVE NOT USED LOTTIE and react-notification-badge


parkaush1@WKMZT5811CC5 frontend % npm i react-lottie
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: frontend@0.1.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^0.14.7 || ^15.0.0 || ^16.0.0" from react-lottie@1.2.3
npm ERR! node_modules/react-lottie
npm ERR!   react-lottie@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! /Users/parkaush1/.npm/_logs/2023-08-03T13_48_16_588Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/parkaush1/.npm/_logs/2023-08-03T13_48_16_588Z-debug-0.log


parkaush1@WKMZT5811CC5 frontend % npm i react-notification-badge
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: frontend@0.1.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.8.6" from react-notification-badge@1.5.1
npm ERR! node_modules/react-notification-badge
npm ERR!   react-notification-badge@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! /Users/parkaush1/.npm/_logs/2023-08-03T13_54_22_014Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/parkaush1/.npm/_logs/2023-08-03T13_54_22_014Z-debug-0.log


// Some other notes:

- Both body-parser (app.use(bodyParser.urlencoded({ extended: false }));) and express.json() serve the same purpose of parsing JSON request bodies in an Express application. However, body-parser is an external package that was commonly used in the past, while express.json() is built-in and available in more recent versions of Express
-



// APP FUNTIONALITY
1 User sign in - with image storage
2 User login
3
