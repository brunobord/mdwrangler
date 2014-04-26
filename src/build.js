function strip(html) {
   var tmp = document.createElement("div");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

j('static/config.json', function(data) {
    data = JSON.parse(data);
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
      var el = m('<link rel="stylesheet" href="'+css+'" type="text/css" />');
      document.head.appendChild(el);
    };

    // load template
    j(template_url, function(html) {
        // do not hesitate to remove Scripts, they shouldn't appear here.
        while ($('script').length > 0) {
          var scripts = $('script');
          var scr = scripts[0];
          scr.remove();
        }

        // get "pure" markdown
        var md = $('body')[0].innerHTML;
        // Strip it and parse it into HTML content
        marked(strip(md), data.marked, function(err, converted) {
          // Body content is swapped with template content
          $('body')[0].innerHTML = html;
          // Converted content is injected in the content element.
          var content_el = $('#'+content_id);
          content_el.innerHTML = converted;
        });
    });
});
