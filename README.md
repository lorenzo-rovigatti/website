# Notes

* After cloning, use `git submodule update --init --recursive`
* Use {{< figure src="url relative to the base url" width="XXX" >}} to add figures
* Use `[Name]({{< ref "relative url"  >}})` to add a link in MD (either `relref` or `ref`)
* I have added a custom shortcode in `layouts/shortcodes/expand.html` that can be used to generate expandable/collapsible text

## Manage the bibliography

* Download a `.bib` file containing all the publications that need to be converted
* Install `academic` with `pip3 install -U academic`
* `cd` into the website root and run `academic import --bibtex mybib.bib`
