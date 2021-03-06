# mdwrangler

``mdwrangler`` is an experiment with Markdown, Javascript and HTML.

The basic goal was to provide a HTML content manager where the user wasn't
supposed to write any HTML tag. There are tons of static page generators, but
any of them require to install Python, Ruby, NodeJS, etc.

I've seen [StrapdownJS](http://strapdownjs.com/). Clean, efficient... But bound
to use a Bootstrap theme. Okay, they're fine. But what if I want to build a
page using Markdown without these themes?

As a consequence, I had this idea:

The ``document.html`` file would contain the Markdown content and only it.
(well, I'm cheating a little bit, because you'll at least need a bit of
javascript).

A bit of JS loads some configuration via Ajax (I'm using zepto, but one could
used whatever you want), the HTML template, a pointer to the CSS.

The [Marked](https://github.com/chjj/marked) JS parser parses the Markdown
content, and injects it into the template.

It may look a bit clunky, but the "Proof of Concept" is working. Suprisingly.

What do you think of it?

----

## Requirements

I'm publishing the built JS (concatenated and uglified) so you don't have to bother with this. But if you intend to work on the build.js source or change things, you may need to install all the needed dependencies, using the following command:

    npm install .

### Available tasks

If you have ``make`` available on your system, you can perform one (or more) of these tasks.

* `uglify` (default): build the 3 ".min.js" files needed to play around with mdwrangler features. When it's ready, you can use `dist` to build a distributable file.
* `dist`: build the ``mdwranger.min.js`` file that would be used in "production" files.
* `test`: unit test mdwrangler with both ``index.html`` and ``test.html`` pages. Please not that the index page uses the fully minified filed while the test file uses the splitted scripts.

If ``make`` is not available on your system... well... I feel sorry for you.

## Configuration

You'll at least need a ``static/config.json``. It **may** host the the marked
options, and **should** at least define a template URL.

Here are the default values that you may override:

    {
        "title": "untitled",
        "content_id": "content",
        "template": "static/template.html",
        "css": []
    }

Add as many CSS you want (they can be local or remote).

It's your duty to build a correct HTML template, and use the appropriate CSS
stylesheets, and include the HTML element ID you've defined in the
configuration.

## Usage

Create a ``HTML`` document, and fill it with **markdown** content. I know, it
sounds wierd.

Add the JS import (at the bottom or the top, whatever). Save it.

If you load this page via a web server, you'll see its content nicely rendered
in HTML, and styles with your stylesheet.

### Example

    <script class="mdwrangler" src="static/js/mdwrangler.min.js"></script>

    ## Text

    It's very easy to make some words **bold** and other words *italic* with
    Markdown. You can even [link to Google!](http://google.com).

    ## Lists

    Sometimes you want numbered lists:

    1. One
    2. Two
    3. Three

Please note the CSS class ``.mdwrangler``. Every DOM item with this class will be removed from the document.
Every other DOM item will remain (scripts? css?).

### What did I use?

* markdown conversion with [marked.js](https://github.com/chjj/marked),
* super-ultra-lightning-fast DOM manipulation and Ajax querying using [140medley](https://github.com/honza/140medley), with an [alternate version of the XHR tool](https://gist.github.com/azproduction/1625623),
* [CasperJS](http://casperjs.org/) for tests,

----

## License

``mdwrangler`` is (c) 2014 - Bruno Bord and is published under the terms of the
MIT License. See the LICENSE file for more information.
