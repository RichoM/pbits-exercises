# pbits-exercises

## Development

Compile the cljs sources on every change:

    $ shadow-cljs watch main

Start the electron process:

    $ npm start

Then connect to the nREPL on port 9000.

## Building

Just run the `build.bat` and the output will be written to `/out`.

You'll need both [shadow-cljs](https://github.com/thheller/shadow-cljs) and [electron-packager](https://github.com/electron/electron-packager) installed globally.
