build:
	mkdir build
	mkdir build/css
	cp src/index.html build/
	cp -r src/js build/
	sass src/css/style.scss build/css/style.css

clean:
	rm -rf build

rebuild:
	make clean
	make build
