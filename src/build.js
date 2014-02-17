function strip(html) {
   var tmp = document.createElement("div");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

$.getJSON('static/config.json', function(data) {

    // marked options
    data.marked = data.marked || {};
    data.marked.renderer = new marked.Renderer();

    // document title
    document.title = data.title || "untitled";
    // the HTML element ID where we want to inject content
    var content_id = data.content_id || 'content';
    // template URL
    var template_url = data.template || "static/template.html";

    // Optional CSS loading
    for (var i = 0; i < data.css.length; i++) {
      var css = data.css[i];
      $('head').append('<link rel="stylesheet" href="'+css+'" type="text/css" />');
    };

    // load template
    $.get(template_url, function(html) {
        // do not hesitate to remove Scripts, they shouldn't appear here.
        $('body script').remove();
        // get "pure" markdown
        var md = $('body').html();
        // Strip it and parse it into HTML content
        marked(strip(md), data.marked, function(err, converted) {
          // Body content is swapped with template content
          $('body').html(html);
          // Converted content is injected in the content element.
          $('#'+content_id).html(converted);
        });
    });

});
