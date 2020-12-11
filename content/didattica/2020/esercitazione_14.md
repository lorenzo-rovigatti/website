+++
title = "Esercitazione del 15/12/2020"
date = 2020-12-07T12:24:21+02:00
draft = false
+++

[Esercizio 55](#esercizio-55) -- [Esercizio 56](#esercizio-56) -- [Esercizio 57](#esercizio-57)

## Esercizio 55 

### Testo

{{< figure src="../images/esercizio_55.png" width="500px">}}

In un piano inclinato di angolo $\alpha=\pi / 6 = 30^\circ$ sono poste due rotaie parallele, distanti $l=10$ cm, di resistenza elettrica trascurabile e connesse elettricamente tra loro alla sommità. Su di esse può scorrere senza attrito una sbarretta conduttrice di massa $m=10$ g e resistenza elettrica $R=0.1\, \Omega$. Il tutto è immerso in un campo magnetico uniforme e costante, diretto verticalmente, di modulo $B=0.5$ T. Ad un certo istante la sbarretta viene lasciata libera di scivolare lungo il piano inclinato. Determinare:

1. verso e intensità della corrente indotta nella spira individuata dal sistema rotaie-sbarretta in funzione della velocità della sbarretta.
2. la velocità limite della sbarretta nel suo moto di scivolamento.

### Soluzione

1. Il verso è dato dalla legge di Lenz: poiché il flusso attraverso la spira aumenta, il campo magnetico generato dalla corrente indotta deve opporsi a quello esterno e quindi, nel sistema di riferimento indicato in figura, la corrente scorre lungo $-\hat{z}$ all'interno della sbarretta. Possiamo ricavare la corrente a partire dalla legge di Faraday. Il flusso del campo attraverso la superficie della spira è
$$
\Phi(B) = l x B \cos \alpha
$$
perché tra la normale alla spira e il campo magnetico vi è un angolo $\alpha$. $x$ indica lo spostamento della sbarretta lungo il piano parallelo rispetto alla sua posizione iniziale. La forza elettromotrice indotta sarà quindi
$$
\mathcal{E}_i = -\frac{d \Phi(B)}{dt} = - I B \cos \alpha v(t)
$$
perché $dx / dt = v(t)$, quindi la corrente ha intensità
$$
i = \frac{l B \cos \alpha v(t)}{R}
$$
2. La velocità limite si raggiunge quando $v$ rimane costante durante il moto. Affinché la velocità sia costante l'accelerazione deve essere nulla, e quindi la somma delle forze deve anch'essa azzerarsi. Le componenti ortogonali al piano si azzerano in forza della reazione normale. Le componenti parallele, d'altro canto, devono azzerarsi perché uguali in modulo ma opposte in verso. Col sistema di riferimento indicato in figura la forza peso ha direzione $-\hat{y}$, mentre quella magnetica vale 
$$
\vec{F}_m = i \vec{l} \times \vec{B} = -\frac{I^2 B^2}{R} \cos \alpha v(t) \hat{x}
$$
poiché la corrente scorre nella sbarretta verso $\hat{z}$ e $\vec{B}$ è diretto lungo $\hat{y}$. Eguagliando le intensità delle componenti delle due forze lungo il piano inclinato si trova
$$
mg \sin\alpha = \frac{I^2 B^2}{R} \cos^2 \alpha v\_{\rm lim}
$$
da cui si ricava
$$
v\_{\rm lim} = \frac{mg R \tan \alpha}{l^2 B^2 \cos \alpha}
$$

---

## Esercizio 56

### Testo

{{< figure src="../images/esercizio_56.png" width="500px">}}

Una bobina rettangolare formata da $N = 100$ spire sovrapposte di lati $a = 1$ cm e $b = 5$ cm è collegata a dei collettori circolari e ruota intorno all'asse che passa per i lati corti con velocità angolare $\omega$ all'interno di una regione in cui è presente un campo magnetico uniforme $B = 0.4$ T. 

1. Ricavare l'espressione del flusso quando la bobina si trova nella posizione in figura (cioè quando $B$ è ortogonale al piano della spira) 
2. Determinare l'espressione della differenza di potenziale massima tra i collettori, specificando per quale posizione della bobina valga.
3. Calcolare a quale velocità angolare la bobina deve ruotare per ottenere una differenza di potenziale massima pari a 100 V.

### Soluzione

1. Nella posizione data il campo e la normale alla bobina sono paralleli, quindi il flusso è la somma dei flussi che passano attraverso le $N$ spire, quindi
$$
\Phi(B) = N a b B = 0.02\, {\rm Wb}
$$
2. Se definiamo $\theta = \omega t$ l'angolo tra la normale alla bobina e il campo, il flusso vale
$$
\Phi(B) = N a b B \cos \theta = N a b B \cos (\omega t)
$$
e quindi applicando la legge di Faraday troviamo
$$
\mathcal{E}_i = \omega N a b B \sin(\omega t)
$$
che è massimo quando $\theta = \omega t = \pi / 2$, cioè quando campo e bobina sono ortogonali.
3. Utilizzando la formula di prima e imponendo $\mathcal{E}_i = 100$ V troviamo
$$
\omega = \frac{\mathcal{E}_i}{N a b B} = 5000 \, {\rm rad/sec}
$$

---

## Esercizio 57

### Testo

{{< figure src="../images/esercizio_57.png" width="500px">}}

Un circuito chiuso di forma rettangolare di dimensioni $a = 40$ cm e $b = 10$ cm contenente un condensatore di capacità $C$  è parzialmente immerso in una regione di campo magnetico larga $L = 20$ cm (vedi disegno). Il campo magnetico ha direzione e verso ortogonale al circuito e modulo che varia nel tempo con la legge $B(t) = B_0 \exp(-t / \tau)$.  Determinare segno e quantità di carica $q(t)$ presente sulle armature del condensatore.

### Soluzione

Applichiamo la legge di Faraday utilizzando come cammino il circuito percorso in senso antiorario, così che la normale alla superficie sia parallela al campo magnetico. Il flusso del campo attraverso questa superficie è

$$
\Phi(B) = B_0 b L \exp(-t / \tau)
$$

e quindi la forza elettromotrice indotta vale

$$
\mathcal{E}_i = -\frac{d\Phi(B)}{dt} = \frac{B_0 b L \exp(-t / \tau)}{\tau}.
$$

La f.e.m. è positiva e quindi coerente con il verso scelto antiorario scelto. Come conseguenza, il condensatore avrà l'armatura superiore carica negativamente e quella inferiore carica positivamente. La differenza di potenziale ai capi delle armature non può che essere la f.e.m. indotta, quindi la carica varrà

$$
q(t) = C \mathcal{E}_i = \frac{C B_0 b L \exp(-t / \tau)}{\tau}.
$$
