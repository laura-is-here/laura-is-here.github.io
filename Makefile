SHELL := /bin/zsh
NPM := npm
VENDOR_DIR = assets/vendor/
JEKYLL := jekyll

PROJECT_DEPS := package.json

.PHONY: all clean install update

all : serve

check:
	$(JEKYLL) doctor
	$(HTMLPROOF) --check-html \
		--http-status-ignore 999 \
		--internal-domains localhost:4000 \
		--assume-extension \
		_site

install: $(PROJECT_DEPS)
	$(NPM) install

update: $(PROJECT_DEPS)
	$(NPM) update

include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	cp node_modules/normalize.css/normalize.css $(VENDOR_DIR)
	cp node_modules/@fortawesome/fontawesome-free/js/all.js $(VENDOR_DIR)

build: include-npm-deps
	$(JEKYLL) build

serve: include-npm-deps
	JEKYLL_ENV=production $(JEKYLL) serve

