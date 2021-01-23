.PHONY: push update watch
all: update

push:
	git push origin master

update:
	hugo
	git add .

watch:
	hugo --buildDrafts --watch --path-warnings  server --disableFastRender
