uglify:
	uglifyjs -nc --output dist/build.min.js src/build.js
	uglifyjs -nc --output dist/marked.min.js src/marked.js
	uglifyjs -nc --output dist/140medley.min.js src/140medley.js

dist:
	cat src/140medley.js src/marked.js src/build.js > dist/mdwrangler.js
	uglifyjs -nc --output static/js/mdwrangler.min.js dist/mdwrangler.js
	rm dist/mdwrangler.js

test:
	forever start server.js
	casperjs test tests
	forever stop server.js

.PHONY: uglify dist
