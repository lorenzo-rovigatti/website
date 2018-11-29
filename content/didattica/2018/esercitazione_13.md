+++
title = "Esercitazione 28/11/2018"
date = 2018-11-28T12:24:21+02:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

[Esercizio 49](#esercizio-49) -- [Esercizio 50](#esercizio-50)

## Esercizio 49

### Testo

Una spira rettangolare rigida di lati $a = 10$ cm e $b = 20$ cm ha una densità lineare di massa $\lambda_m = 0.05$ g/cm ed è percorsa da una corrente $i = 6$ A. Essa è posta inizialmente sul piano $xy$ con il lato a $y$ maggiori (lungo $a$) combaciante con l'asse $x$ e, in questa configurazione, la corrente scorre in verso antiorario. La spira può ruotare liberamente (senza attrito) intorno a quest'asse, mentre la forza peso agisce in direzione $-\hat{y}$. Determinare 

1. il modulo ed il verso del campo magnetico $\vec{B}$, uniforme e parallelo all'asse $y$, che produce una rotazione della spira verso $\hat{z}$ di $\theta_0 = 12^\circ = 0.209$ rad;
2. il lavoro compiuto dal campo sulla spira per produrre detta rotazione.

### Soluzione

1. Se la spira è in equilibrio quando forma un certo angolo $\theta$, significa che per questo valore dell'angolo i momenti meccanici presenti si equivalgono. Calcoliamoli rispetto all'asse $x$. Il fatto che la spira sia libera di ruotare rispetto al lato più in alto significa che quest'ultimo è fermo, e cioè non risente di eventuali forze presenti. Il momento magnetico sarà quindi dato dalla forza che agisce sull'altro lato di dimensione $a$, che vale
$$
\vec{F}_m = i a B \hat{x} \times \hat{y} = i a B \hat{z}
$$
e che, rispetto all'asse $x$, genera un momento meccanico magnetico
$$
\vec{M}_m = -i a b B \sin\left( \frac{\pi}{2} - \theta \right) \hat{x} = -i a b B \cos(\theta) \hat{x}
$$
**Nota Bene:** data la definizione di $\theta$, il braccio del momento *non è* $\theta$ ma $\pi / 2 - \theta$ (disegnare il sistema di profilo per dimostrarlo!). D'altro canto, la forza peso vale in modulo $mg = 2\lambda_m (a + b) g$ ed è applicata a distanza $b / 2 \sin(\theta)$, quindi il suo momento rispetto ad $\hat{x}$ vale
$$
\vec{M}_g = \lambda_m (a + b)b g \sin(\theta) \hat{x}
$$
I segni che abbiamo trovato considerando il verso di $\vec{B}$ parallelo a $\hat{y}$ sono corretti, perché così facendo si trova che i due momenti hanno verso opposto, e quindi effettivamente $\hat{B} = \hat{y}$. Eguagliando i moduli dei due momenti possiamo ricavare il modulo del campo:
$$
B = \frac{mg}{i}\frac{a + b}{a} \tan(\theta_0) = 5.21 \cdot 10^{-3} \, {\rm T}.
$$

2. Il lavoro si ottiene integrando il momento meccanico tra $\theta = 0$ e $\theta = \theta_0$:
$$
W = iabB \int_0^{\theta_0} \cos(\theta) d\theta = iabB \sin(\theta)|_0^{\theta_0} = iabB \sin(\theta_0) = 1.3 \times 10^{-4} \, {\rm J}
$$

---

## Esercizio 50

### Testo

Una particella di carica $q$ entra dal lato delle $x$ negative e con velocità $\vec{v} = (v, 0, 0)$ nel centro di una regione in cui è presente un campo magnetico uniforme $\vec{B} = (0, 0, B)$. La regione si estende indefinitamente lungo $\hat{z}$ mentre ha dimensioni $a$ sia lungo $\hat{x}$ che lungo $\hat{y}$.

1. Calcolare qual è l'angolo $\theta$ rispetto all'asse $x$ con cui la particella esce dalla regione col campo se $B = \frac{mv}{10 qa}$.
2. Calcolare per quali valori di $B$ la particella esce dal lato da cui è entrata.

### Soluzione

1. Per quel valore di $B$ il raggio della traiettoria è
$$
r = \frac{mv}{qB} = 10 a.
$$
Notiamo che la domanda è equivalente a chiedersi qual è l'angolo $\theta$ sotteso dall'arco di circonferenza compiuto dalla particella quando questa si è mossa di una distanza $a$ lungo $\hat{x}$. Questo vuol dire che si ha
$$
a = r \sin(\theta)
$$
e quindi
$$
\sin(\theta) = \frac{a}{r} = \frac{1}{10}
$$
e quindi
$$
\theta = \arcsin(0.1) \approx 0.1
$$

2. Per avere la condizione richiesta si deve avere $2r = 2\frac{mv}{qB} < a / 2$, quindi
$$
B > \frac{4 m v}{qa}.
$$
