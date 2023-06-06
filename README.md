# Node Basics

Node is an Open Source Framework to create servers and develop backends. It run JavaScript code directly on the computer processor rather than in the browser. It can be run on various environments like MacOS, Windows, Linux, and more. 

The official Node.js website describes it as 

```
As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications
```

## This repo covers the following topics:

1. Basic Server steup: 
    In the folder `BasicServer`, I have created a basic server that listens to port 8080 and sends the message `Hello World` upon running successfully.

2. Importing Modules:
    In the folder called `ImportingModules`, I created a module called `dateModule` and imported it into my server. Then I made the server send the value returned by the module when it is successfully up.

3. Request URLs:
    In the folder called `ReqUrls`, I extracted and sent the url that comes as a part of the request to the server.

4. Handling Events:
    In the folder called `Events`, I used the `events` module to emit and handle the event. 

5. Sending Emails:
    In the folder called `Email`, I used the `nodemailer` module to send an email. To run this code,

        a. Clone this repository
        b. Open cmd and navigate to `Email` directory using `cd`
        c. Run `npm i` or `npm install`
        d. Create a .env file with 3 constants:
            i. EMAIL: sender's email
            ii. PASSWORD: sender email's password
            iii. RE_EMAIL: receiver's email
    
    Note that this code may not run if MFA is enabled on the sender's email even if correct password is provided.