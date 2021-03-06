#!/usr/bin/env python3

import sys
import bibtexparser as bib
import os
import unidecode
import datetime

OUTPUT_DIR = "./content/publication/"
TYPE_TO_ACADEMIC = {
	"article" : "2",
	"article in press" : "2",
	"review" : "2",
	"inproceedings" : "1",
	"proceedings" : "1",
	"conference" : "1",
	"conference paper" : "1",
	"mastersthesis" : "3",
	"phdthesis" : "3",
	"manual" : "4",
	"techreport" : "4",
	"book" : "5",
	"incollection" : "6",
	"inbook" : "6",
	"book chapter" : "6",
	"misc" : "0",
	"editorial" : "0",
}

if len(sys.argv) < 2:
	print("Usage is %s bib_file" % sys.argv[0], file=sys.stderr)
	exit(1)

with open(sys.argv[1]) as f:
	bib_database = bib.load(f)

if not os.path.isdir(OUTPUT_DIR):
	os.makedirs(OUTPUT_DIR)
for i, article in enumerate(bib_database.entries):
	# the unidecode function transliterates unicode strings into the closest possible representation in ASCII text
	filename = unidecode.unidecode("abstract-%s-%d.md" % (article["ID"], i))
	print(filename)
	path = os.path.join(OUTPUT_DIR, filename)
	title = article["title"]
	authors_line = '["' + '", "'.join(article["author"].split(" and ")) + '"]'
	pub_types = '["%s"]' % TYPE_TO_ACADEMIC[article["ENTRYTYPE"].lower()]

	reference = "*%s* **%s**" % (article["journal"], article["year"])
	if "volume" in article:
		reference += ", *%s*" % article["volume"]

	if "pages" in article:
		reference += ", %s" % article["pages"]
	elif "art_number" in article:
		reference += ", %s" % article["art_number"]

	if "doi" in article:
		reference += ", https://doi.org/%s" % article["doi"]

	date = datetime.date(int(article["year"]), 1, 1)

	if "abstract" in article:
		abstract = article["abstract"]
		abstract = abstract.replace('\n', ' ').replace('\\', '\\\\').replace('"', '\\"')

	else:
		abstract = ""

	with open(path, "w") as output:
		output.write("+++\n")

		output.write('title = "%s"\n' % title)
		output.write('authors = %s\n' % authors_line)
		output.write('publication_types = %s\n' % pub_types)
		output.write('publication = "%s"\n' % reference)
		output.write('date = "%s"\n' % date)
		output.write('abstract = "%s"\n' % abstract)

		output.write('math = true\n')
		output.write('selected = false\n')
		output.write('highlight = true\n')

		output.write('image = ""\n')
		output.write('image_preview = ""\n')
		output.write('publication_short = ""\n')
		output.write('abstract_short = ""\n')
		output.write('projects = []\n')
		output.write('tags = []\n')

		output.write("+++\n")
