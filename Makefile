target_win      ?= win
target_linux    ?= linux

TARGET          = $(target)

all: build deploy clean-build

build: build-app build-nginx

build-app: package.json
	npm run build
	rm -rf $(PWD)/temp
	mkdir $(PWD)/temp
	\mv -f $(PWD)/public/* $(PWD)/temp

build-nginx: deploy/nginx/default.conf
	docker build -t architect:doc -f Dockerfiles/Dockerfile-nginx .

deploy: deploy-nginx

deploy-nginx:
	docker run -it -p 8888:80 --name architect-document -d architect:doc

clean-build:
	rm -rf $(PWD)/temp
