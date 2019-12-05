+++
title = "Esercitazione del 05/12/2019"
date = 2019-12-03T12:24:21+02:00
draft = false
+++

[Esercizio 55](#esercizio-55) -- [Esercizio 56](#esercizio-56) -- [Esercizio 57](#esercizio-57) -- [Esercizio 58](#esercizio-58)

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

---

## Esercizio 58

### Testo

{{< figure src="../images/esercizio_58.png" width="500px">}}

Una barra conduttrice, di massa $m=100$ g e resistenza $R = 500\, \Omega$, appoggia senza attrito su due binari orizzontali di resistenza trascurabile. La distanza tra i binari è $l=40$ cm e il sistema è immerso in un campo magnetico uniforme $B=0.8$T, perpendicolare ai binari ed alla barra (entrante nel foglio, vedi figura). All’istante $t=0$ la barra è ferma e tra i binari viene posto un generatore con la polarità indicata in figura.

* Se il generatore fornisce una corrente *costante* $i_0 = 0.2$ A calcolare:
	1. in che direzione si muove la sbarra;
	2. la velocità della sbarra al tempo $t_1=15$ s;
	3. il lavoro fatto dal generatore fino al tempo $t_1$.
* Se invece il generatore fornisce una f.e.m. costante pari a $\mathcal{E}_0= 8$ V calcolare
	1. la potenza fornita dal generatore quando la sbarra ha raggiunto la velocità limite;
	1. il valore della velocità limite.
	

### Soluzione

* Poiché nella sbarretta scorre una corrente costante $i_0$, essa sarà soggetta ad una forza (anch'essa costante) data da
$$
\vec{F} = i \vec{l} \times \vec{B}
$$
che, dati i versi indicati in figura, ha direzione verso destra.
	1. Poiché la sbarretta parte da ferma, la sua velocità sarà parallela alla forza, e quindi si muoverà verso destra.
	2. Ricordando che $\vec{F} = m \vec{a}$ troviamo subito che 
	$$
	v(t) = at = \frac{ilBt}{m}
	$$
	che per $t_1 = 15$ s vale $v(t_1) = 9.6$ m/s.
	3. All'inizio del moto la sbarretta è ferma e la f.e.m. totale ai capi del circuito è $\mathcal{E}_0 = R i$. Quando la sbarretta si mette in moto, a questa f.e.m. va sommata quella indotta che si oppone alla sorgente di moto. Considerando che il flusso è $\Phi(B) = x(t) l B$ (vedi esercizi precedenti) la f.e.m. indotta vale
	$$
	\mathcal{E}_i = - \frac{d\Phi}{dt} = - \frac{dx}{dt} l B = - v(t) l B = - \frac{il^2B^2t}{m}
	$$
	Poiché la corrente deve rimanere costante, la f.e.m. nel circuito deve anche rimanere costante (perché la resistenza non varia), e quindi la f.e.m. che il generatore eroga, dovendo contrastare $\mathcal{E}_i$, sarà
	$$
	\mathcal{E}(t) = \mathcal{E}_0 - \mathcal{E}_i = Ri + v(t) l B = Ri + \frac{il^2B^2t}{m}
	$$
	Ricordando il legame tra potenza, differenza di potenziale e corrente si trova
	$$
	\mathcal{P} = \mathcal{E}(t) i = Ri^2 + \frac{i^2l^2B^2t}{m}
	$$
	che integrata da 0 a $t_1$ dà proprio l'energia dissipata:
	$$
	W = Ri^2 t_1 + \int_0^{t_1} \frac{i^2l^2B^2t}{m} dt = Ri^2 t_1 + \frac{1}{2} \frac{i^2l^2B^2t_1^2}{m}.
	$$
	Questo risultato si poteva trovare anche considerando che l'energia fornita dal generatore viene parzialmente trasformata in energia cinetica, e quindi l'energia totale dissipata si può scrivere come
	$$
	W = Ri^2 + \frac{1}{2}m v(t)^2
	$$
	che dà lo stesso risultato (provate!).
* Se la tensione (invece della corrente) è costante il comportamento del sistema cambia qualitativamente, poiché la f.e.m. indotta genererà una corrente che non verrà più contrastata dall'aumento della f.e.m. erogata dal generatore. Definiamo $i$ la corrente erogata dal generatore e $i_i$ quella dovuta alla presenza della f.e.m. indotta.
	1. Se un oggetto raggiunge una velocità limite significa che la risultante delle forze agenti su di esso è nulla. L'unica forza che può agire sulla sbarra è quella magnetica $i \vec{l} \times \vec{B}$. L'unico modo affinché sia zero è che sia nulla la corrente che scorre attraverso la sbarra, cioè si deve avere $i = i_i$ (perché le due correnti scorrono in verso opposto). Poiché $\mathcal{E}_0$ è costante, si avrà
	$$
	i = \frac{\mathcal{E}_0}{R},
	$$
	mentre la corrente indotta si trova tramite la legge di Faraday,
	$$
	i_i = \frac{\mathcal{E}_i}{R} = \frac{l B v}{R}.
	$$
	Uguagliando le due correnti si ottiene
	$$
	v = \frac{\mathcal{E}_0}{l B} = 25\, {\rm m/s}
	$$