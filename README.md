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

## Configuration

You'll at least need a ``static/config.json``. It **may** host the the marked
options, and **should** at least define a template URL.

Here are the default values that you may override:

    {
        "title": "untitled",
        "content_id": "content",
        "template": "/static/template.html",
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

    <script src="/static/js/mdwrangler.js"></script>

    ## Text

    It's very easy to make some words **bold** and other words *italic* with
    Markdown. You can even [link to Google!](http://google.com).

    ## Lists

    Sometimes you want numbered lists:

    1. One
    2. Two
    3. Three


----

## License

``mdwrangler`` is (c) 2014 - Bruno Bord and is published under the terms of the
MIT License. See the LICENSE file for more information.
