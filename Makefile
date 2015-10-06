# Makefile to create CSS files from SASS files.

css:
	sass --compass main.scss main.css
	sass --compass old-ie.scss old-ie.css
