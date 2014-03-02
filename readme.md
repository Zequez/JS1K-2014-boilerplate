### JS1K 2014 Boilerplate

So, this year I wanted to participate in JS1K, and I searched for a boilerplate that met my needs:

- Uglifier
- Livereload
- Some kind of notification system to allow you to see how much bytes you have left

And I didn't find it. So I decided to make it.

## Installation

- Clone this repository
- Run `npm install`

## Run

Just run `gulp watch` and then open `shim-normal.html` in your browser.

## JS2K

Just go to `gulpfile.js` and change the line that says `MAX_SIZE` from `1024` to `2048`.

## WebGL

Just load the `shim-webgl.html` instead of `shim-normal.html`.