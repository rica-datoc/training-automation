# Playwright

## Why Playwright?
Comes with lots of features out of the box:
* support for all browsers - Chromium, Firefox, & Webkit
* fast test execution
* debugging in VS code
* codegen
* traceview
* auto waits
* playwright report
* interceptors
* multi session support, running several tabs or several browsers at the same time
* Parallelization and Sharding (sharding == divide test runs between several VMs)
* ....

## Why typeScripts and not javascript?
TypeScript is said to be a "super set" of javaScript so "everything" that is JS is TS. We get a lot more accurate help from the IDE using TypeScript and playwright comes with "out of the box" support for typeScript.

## Why not use other language than JS/TS?
Playwright is in first hand a tool for UI testing and and ~99% of the web UI is written using JavaScript/TypeScript (and html and css). This is the domain for frontend developers and ideally the frontend should be component tested by the front end developers using tools like playwright and it convenient to use similar tools.