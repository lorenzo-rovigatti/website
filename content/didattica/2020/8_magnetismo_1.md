+++
title = "Lezione del 05/11/2020"
date = 2020-10-31T10:00:44+02:00
draft = false
+++

## Campo magnetico e forza magnetica
<small>MNV: paragrafo 6.1</small>

Alcuni materiali hanno la proprietà di attrarre la limatura di ferro. L'esempio più famoso è quello della *magnetite* (ossidi di ferro), il cui nome deriva dalla città di Magnesia, in Asia Minore, dove si trovavano giacimenti di questo materiale. 

Dato un oggetto fatto di magnetite, che chiamiamo *magnete*, la sua proprietà di attrarre la limatura non è uniforme, ma si concentra in alcune zone dette *poli del magnete*. I fenomeni legati a questa proprietà, al pari dei fenomeni elettrici,  erano considerati curiosità nell'Antichità, e sono stati studiati in maniera sistematica solo in epoca moderna. Ecco un video che mostra l'effetto di un magnete sulla limatura:

{{< youtube snNG481SYJw >}}

Le osservazioni sperimentali compiute nel XXVII, XXVIII e XIX secolo possono essere così riassunte:

1. I magneti esercitano una forza l'uno sull'altro causata dalla presenza di un *campo magnetico*. I fenomeni magnetici si verificano anche in assenza di cariche elettriche fisse e non sono quindi ascrivibili ad effetti elettrostatici. Tramite esperimenti controllati è possibile dimostrare come esistano solo due tipi di poli magnetici, per i quali valgono le seguenti proprietà
	* i poli possono essere *positivi* o *negativi*
	* poli dello stesso tipo si respingono, di tipo diverso si attraggono
	* i poli di uno stesso magnete sono sempre di tipo diverso
2. I magneti hanno la capacità di *magnetizzare* altri oggetti. Non tutti i materiali possono essere magnetizzati (ferro sì, vetro e plastica no). Un esempio noto è il caso di un sottile ago di ferro che, se magnetizzato, prende il nome di *ago magnetico*.
3. Un ago magnetico, se libero di ruotare (perché sospeso ad un filo o posto su di un sostegno galleggiante), si orienta sempre nella stessa direzione (approssimativamente coincidente con la direzione dei meridiani terrestri). Questo effetto è dovuto alla presenza del *campo magnetico terrestre* ed è analogo a quel che succede ad un dipolo elettrico in presenza di un campo elettrico. I due poli dell'ago vengono denominati nord e sud, a seconda della direzione lunga la quale tendono ad orientarsi. L'asse "magnetico" della Terra è spostato di circa $15^\circ$ rispetto al'asse nord-sud: i poli cosiddetti magnetici non coincidono infatti con quelli geografici, ma ne sono distanziati di $\approx 1600$ km.
4. Grazie ad esperimenti simili a quelli che hanno permesso di ricavare la dipendenza funzionale della forza elettrostatica, Coulomb mostrò come anche la forza tra poli magnetici puntiformi (quali quelli che si trovano, con buona approssimazione, agli estremi di sbarre lunghe e sottili) sia inversamente proporzionale al quadrato della distanza.
5. Esiste una differenza fondamentale fra la forza elettrostatica e quella magnetica: la carica elettrica elementare, in natura, può essere sia positiva che negativa. Nel caso dei poli magnetici, questi si trovano sempre a due a due: se si prende una sbarra magnetizzata e la si divide in due, ognuna delle due metà diventerà un magnete con due poli. Dal punto di vista microscopico, le nostre conoscenze attuali non spiegano perché non esistano i cosiddetti *monopoli magnetici*, ma esperimenti molto scrupolosi non ne hanno ancora dimostrato l'esistenza. In effetti, le particelle "elementari" (anche quelle neutre) posseggono tutte un momento di dipolo magnetico che, allo stato attuale delle nostre conoscenze, consideriamo *intrinseco*.
6. Limatura di ferro posta nelle vicinanze di un magnete tenderà a disporsi lungo le linee del campo magnetico. Questo è dovuto al fatto che i grani che compongono la limatura si magnetizzano e si comportano quindi come dipoli magnetici, orientandosi lungo il campo. Le proprietà di queste linee di campo sono molto simili a quelle che valgono per il campo elettrico:
	* Le linee sono tangenti e concordi al campo, punto per punto. Il verso si può trovare ponendo un ago magnetico di cui conosciamo i poli.
	* Le linee di campo sono più dense dove il campo è più forte. Ne deriva che un campo uniforme genera linee parallele ed equidistanti.
	* Le linee di campo non si incrociano mai, perché anche il campo magnetico è definitivo univocamente.
	* Le linee di campo sono uscenti dai poli nord (positivi) ed entranti nei poli sud (negativi).
	
## Elettricità e magnetismo
<small>MNV: paragrafo 6.2</small>

L'insieme dei risultati sperimentali appena riassunti porta a pensare che i magneti (o comunque i materiali magnetizzati) siano composti da dipoli magnetici caratterizzati da un momento di dipolo magnetico $\vec{m}$. Nell'800, dopo che l'invenzione della pila di Volta permise di studiare le correnti elettriche in maniera sistematica, fu notato come la limatura di ferro si addensasse in cerchi concentrici intorno ad un filo percorso da corrente, come mostrato in questo video:

{{< youtube caHXwJbkbQU >}}

In linea con quanto detto precedentemente, risulta quindi evidente come delle cariche in movimento (cioè una corrente elettrica) generi un campo magnetico (indicato col simbolo $\vec{B}$).

Il fatto sperimentale che due fili percorsi da corrente interagiscono portò Ampère a ipotetizzare che tutti i fenomeni magnetici siano generati dall'interazione tra cariche elettriche in movimento (cioè da correnti). Per spiegare come fosse possibile che oggetti in cui non sembra scorrere corrente (come quelli composti da magnetite) generino comunque campi magnetici, Ampère ipotizzò anche che esistono correnti microscopiche, dette *correnti molecolari di Ampère* o *correnti amperiane*, che sono responsabili dei fenomeni magnetici in assenza di corrente.

Ulteriori sviluppi sperimentali e teorici misero in evidenza altri legami tra elettricità e magnetismo:

* Campi magnetici variabili nel tempo producono campi elettrici (non conservativi!).
* Campi elettrici variabili nel tempo producono campi magnetici (cfr. la corrente di spostamento).

In effetti, il legame tra $\vec{E}$ e $\vec{B}$ è così stretto da richiedere l'unificazione dei due nel concetto di *campo elettromagnetico*. Da un punto di vista storico questa unificazione, portata avanti dal punto di vista formale da Maxwell, diede anche una spinta allo sviluppo della teoria della relatività. Le equazione di campo di Maxwell, infatti, non sono invarianti per trasformazioni di Galileo ma per trasformazioni di Lorentz, che sono alla base della teoria della relatività ristretta sviluppata da Einstein all'inizio del '900. Applicando questa teoria alle equazioni di campo si vede come campi magnetici in un sistema di riferimento inerziale si trasformino in campi elettrici in un altro (e viceversa).

## Forza magnetica

### Carica in moto
<small>MNV: paragrafo 6.3</small>

Dato un campo $\vec{B}$ generato da correnti amperiane o da cariche elettriche in movimento, un oggetto di massa $m$, carica $q$ e velocità $\vec{v}$ risente dell'effetto della *forza di Lorentz*:

$$
\vec{F} = q \vec{v} \times \vec{B}.
$$

Dato l'angolo $\theta$ tra la direzione della velocità e quella del campo magnetico, il modulo della forza di Lorentz vale

$$
F = q v B \sin \theta.
$$

La forza è quindi nulla quando $\vec{v}$ e $\vec{B}$ sono paralleli e massima quando sono ortogonali. Direzione e verso sono invece dati dal versore generato dal prodotto vettoriale tra la velocità e il campo magnetico, che si può calcolare con la regola della [mano destra](https://it.wikipedia.org/wiki/Regola_della_mano_destra). Ricordiamo le seguenti proprietà del prodotto vettoriale $\vec{c} = \vec{a} \times \vec{b}$:

1. $| \vec{a} \times \vec{b} | = ab\sin{ \theta}$
2. $\vec{a} \times \vec{b} = - \vec{b} \times \vec{a}$
3. $\vec{c}$ è ortogonale sia ad $\vec{a}$ che a $\vec{b}$

Analizziamo quest'ultima proprietà: il vettore risultante dall'operazione è ortogonale ad entrambi gli operandi. Ne deriva che la velocità della carica e la forza dovuta all'interazione magnetica sono sempre ortogonali. Poiché quest'ultima è anche parallela alla traiettoria della particella (e quindi allo spostamento), il lavoro compiuto dalle forze magnetiche, e quindi la differenza di energia cinetica, tra due punti generici della traiettoria si annulla:

$$
W = \int_P^Q \vec{F} \cdot d\vec{s} = \frac{1}{2}mv_Q^2 - \frac{1}{2}mv_P^2 = 0.
$$

In altre parole, in presenza di un campo magnetico il *modulo* della velocità non cambia, ma solo la sua direzione. Forza di Coulomb e forza di Lorentz sono quindi *molto* diverse:

* La forza elettrostatica compie, in generale, lavoro sulle cariche e quindi ne cambia l'energia cinetica, quella magnetica no.
* La forza elettrostatica è parallela alle linee di campo di $\vec{E}$ (che infatti si chiamano anche linee di forza), quella magnetica è ortogonale a $\vec{B}$.

Utilizzando la definizione di forza di Lorentz possiamo trovare le unità di misura del campo magnetico:

$$
[B] = \frac{\rm Ns}{\rm Cm} = \frac{\rm kg}{\rm As^2} \equiv T
$$

L'intensità del campo magnetico è solitamente misurata in Tesla o suoi sottomultipli (molto comune è il Gauss G, che vale $10^{-4}$ T). Il campo magnetico terrestre vale $0.4$ G. I campi utilizzati per le risonanze magnetiche sono invece dell'ordine dei Tesla.

### Conduttore percorso da corrente

Consideriamo un conduttore percorso da corrente. Ricordiamo le definizioni principali (consideriamo un conduttore in cui i portatori sono elettroni):

* il conduttore è composto da un reticolo di ioni fermi e da un "mare" di elettroni liberi
* $n$ è il numero di elettroni per unità di volume
* $-e$ è la carica dei elettroni
* $\vec{v}_d$ è la velocità di deriva 
* $\vec{j} = - n e \vec{v}_d$ è la densità di corrente
* $i = j \Sigma$ è l'intensità di corrente che passa attraverso una superficie $\Sigma$ ortogonale a $\vec{j}$

#### Forza magnetica
<small>MNV: paragrafo 6.4, esempio 6.2</small>

Se il conduttore è immerso in un campo magnetico $\vec{B}$, su ogni elettrone agirà la forza di Lorentz:

$$
\vec{F}_L = -e \vec{v}_d \times \vec{B}
$$

questa forza si trasmette direttamente al reticolo (e quindi alla massa del conduttore, che consideriamo indeformabile) tramite gli urti degli elettroni. In un tratto $ds$ di sezione $\Sigma$ la forza agente sul conduttore vale

$$
d\vec{F} = n \Sigma ds \vec{F}_L = -n \Sigma ds e \vec{v}_d \times \vec{B} = \Sigma ds \vec{j} \times \vec{B}.
$$

Se orientiamo $d\vec{s}$ nella direzione di $\vec{j}$, prendiamo un conduttore di sezione $\Sigma$ costante e introduciamo l'intensità di corrente al posto di $j$ possiamo scrivere la relazione precedente come

$$
d\vec{F} = i d\vec{s} \times \vec{B}
$$

che è detta *seconda legge elementare di Laplace*. Essendo molto simile all'espressione della legge di Lorentz, valgono le considerazioni fatte prima su verso e modulo della forza rispetto al verso e al modulo dell'orientamento del conduttore (dato da $d\vec{s}$) e di $\vec{B}$. 

La forza che agisce su di un tratto $PQ$ di conduttore si trova integrando la legge di Laplace:

$$
\vec{F} = i \int_P^Q d\vec{s} \times \vec{B}.
$$

La corrente si porta fuori dall'integrale perché costante su ogni sezione del conduttore. In generale, invece, la direzione e il modulo di $\vec{B}$ cambiano punto per punto.

Facciamo degli esempi particolari:

* Se $\vec{B}$ è uniforme ed il conduttore è rettilineo fra $P$ e $Q$ vale
$$
\vec{F} = i \int_P^Q d\vec{s} \times \vec{B} = i \left( \int_P^Q d\vec{s} \right) \times \vec{B} = i \vec{PQ} \times \vec{B}
$$
* Lo stesso risultato si ottiene se il conduttore non è rettilineo, perché $\vec{B}$ non dipende da $s$ e quindi si può portare fuori dall'integrale (perché il prodotto vettoriale è un'operazione lineare!).
* Dati i risultati precedenti, è chiaro che la forza agente su di un circuito chiuso immerso in un campo magnetico uniforme debba essere nulla, infatti
$$
\vec{F}\_{\rm tot} = i \oint d\vec{s} \times \vec{B} = i \int_P^Q d\vec{s} \times \vec{B} - i \int_Q^P d\vec{s} \times \vec{B} = 0
$$

Prendiamo come esempio un circuito formato da una semicirconferenza di raggio $L/2$ e da un tratto rettilineo di lunghezza $L$. Poniamo che il circuito sia adagiato sul piano $x, y$, che il tratto rettilineo sia orientato lungo $\hat{x}$, che in esso scorra una corrente $i$ sempre in direzione $\hat{x}$ e che il campo sia orientato lungo $\hat{y}$. La forza totale può essere calcolata come somma della forza agente sul tratto rettilineo più quella agente sul tratto curvo:

* Lungo il tratto rettilineo lo spostamento $d\vec{s}$ è orientato lungo $\hat{x}$ e quindi $i d\vec{s} \times \vec{B} = i B dx \hat{z}$ e quindi
$$
\vec{F}_r = i \int\_0^L B dx \hat{z} = L i B \hat{z}
$$
* Lungo il tratto curvo lo spostamento ha una componente lungo $-\hat{x}$ e una lungo $\pm \hat{y}$ (a seconda della posizione). Poiché $\vec{B}$ è orientato lungo $\hat{y}$ si ha $\hat{y} \times \vec{B} = 0$ e quindi
$$
\vec{F}_c = -i \int\_0^L dx \hat{x} \times B \hat{y} = -L i B \hat{z}
$$

Come dimostrato precedentemente, la forza totale è quindi nulla. Le due forze, però, sono uguali in modulo ma opposte in verso e formano quindi una coppia di forze che dà luogo ad un momento meccanico che tenderà a *ruotare* il circuito. 
