# Notes

* After cloning, use `git submodule update --init --recursive`
* Use {{< figure src="url relative to the base url" width="XXX" >}} to add figures
* Use `[Name]({{< ref "relative url"  >}})` to add a link in MD (either `relref` or `ref`)
* I have added a custom shortcode in `layouts/shortcodes/expand.html` that can be used to generate expandable/collapsible text

## Manage the bibliography

* Download a bib file containing all the publications that need to be converted
* Install the `BibtexParser` and `unidecode` python3 packages (`pip3 install --user bibtexparser unidecode`)
* Run the script from the website's root folder. Pass it the bib file you want to generate the md files from.

