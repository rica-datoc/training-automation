# Introduction 
Greetings. This repository will serve as our _playground_ for learning __playwright automation__. 
> You may clone this repo and create your own branches where you can code however you like. 
> You'll get to learn how to use common git commands here too. 

# Prerequisites
Please make sure to have the following software installed prior to playwright:
1. [Visual Studio Code](https://code.visualstudio.com/) 
    - Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop.
    - We will be using VSCode as our code editor (cuz it's free).
2. [Node.js](https://nodejs.org/en) 
    - Node.js is an open-source, cross-platform, that allows us to use JavaScript everywhere.
    - We will need this if we want to use JavaScript/TypeScript for our automation.
    - Open command prompt
        - check node version by entering: node -v
        - check npm version by entering: npm -v

3. [Git](https://git-scm.com/downloads) 
    - Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
    - We will need this for collaboration and version control of our repository

# Getting Started
To be able to run this repo open a terminal (cmd/powershell/git bash) on VS Code
1. Clone this repo: 
    > git clone https://github.com/rica-datoc/training-automation.git
2. Navigate to your newly created training-automation folder.
3. Go to VS Code extensions and install Playwright Test for VSCode (by Microsoft)
4. Install Playwright dependencies (i.e. browsers):
    > npm init playwright@latest
5. Run the example test on terminal:
    > npx playwright test
6. Run the example test using extension:
    1. In the left pane, click on the Testing icon.
    2. Expand tests and wait for it to load then example.spec.ts would appear and it will have "Run test" and "Debug test" buttons
    3. Click on the "Run test" button and make sure the tests start to run.
    4. If you want to see the browser UI as it runs, click on the Debug test button.

## Using this repo
Make sure that you don't commit anything to the __main__ branch of the repo instead create you own branch and commit to that.


# Troubleshoot
* When you create a new test and you don't see the "run test" button then you need to refresh the test in VS Code. You do this in the _Testing_ tab (on the left pane). Open in and in the top there is a refresh button.
* If you still can't see the "run test" button after refreshing the testing tab then there might be a "syntactical" error in the test, so check for any typos.

### LET THE FUN BEGIN :>
-R