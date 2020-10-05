---
# Documentation: https://wowchemy.com/docs/managing-content/

title: A comparison between parallelization approaches in molecular dynamics simulations
  on GPUs
subtitle: ''
summary: ''
authors:
- L. Rovigatti
- P. Šulc
- I.Z. Reguly
- F. Romano
tags:
- '"Computer graphics;  Computer graphics equipment;  Image coding;  Program processors"'
- '"Computation time;  Computing power;  Graphics Processing Unit;  Molecular dynamics
  simulations;  Parallelizations;  Processing core;  Relative performance;  Soft matter"'
- '"Molecular dynamics"'
categories: []
date: '2015-01-01'
lastmod: 2020-10-05T18:18:14+02:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2020-10-05T16:18:14.806948Z'
publication_types:
- '2'
abstract: We test the relative performances of two different approaches to the computation
  of forces for molecular dynamics simulations on graphics processing units. A \"vertex-based\"
  approach, where a computing thread is started per particle, is compared to an \"edge-based\"
  approach, where a thread is started per each potentially non-zero interaction. We
  find that the former is more efficient for systems with many simple interactions
  per particle while the latter is more efficient if the system has more complicated
  interactions or fewer of them. By comparing computation times on more and less recent
  graphics processing unit technology, we predict that, if the current trend of increasing
  the number of processing cores - as opposed to their computing power - remains,
  the \"edge-based\" approach will gradually become the most efficient choice in an
  increasing number of cases. © 2014 Wiley Periodicals, Inc.
publication: '*Journal of Computational Chemistry*'
url_pdf: https://www.scopus.com/inward/record.uri?eid=2-s2.0-84918814617&doi=10.1002%2fjcc.23763&partnerID=40&md5=5e7905df9f8baabf94e25f75b73eb5ad
doi: 10.1002/jcc.23763
---
