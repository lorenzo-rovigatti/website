+++
title = "Lezione del 20/11/2019"
date = 2019-11-17T14:19:34+01:00
draft = false
+++

## Applicazioni della legge di Ampère

Come il teorema di Gauss, anche la legge di Ampère può essere utilizzata per calcolare il campo magnetico in casi particolarmente simmetrici.

### Filo indefinito
<small>MNV: esempio 7.2</small>

Applichiamo la legge di Ampère al caso di un filo indefinito percorso da una corrente $i$. La simmetria del sistema è chiaramente cilindrica, e quindi le linee di campo non possono che essere circonferenze centrate sul filo. Calcoliamo la circuitazione del campo lungo una di queste linee, di raggio $r$:

$$
\oint \vec{B} \cdot d\vec{s} = B 2 \pi r = \mu_0 i
$$

e quindi risolvendo per $B$ si ottiene

$$
B = \frac{\mu_0 i}{2 \pi r},
$$

detta legge di Biot-Savart.

Possiamo estendere l'analisi al caso di un filo di spessore $R$ finito. Per $r > R$ il campo è ancora quello trovato precedentemente. Per $r < R$, d'altro canto, l'intensità della corrente è proporzionale all'area che stiamo considerando. Per vederlo consideriamo l'intensità di corrente $j = i / \pi R^2$ e, ricordando la relazione che intercorre tra $j$ ed $i$ si trova $i(r ) = i r^2 / R^2$, e quindi

$$
\oint \vec{B} \cdot d\vec{s} = B 2 \pi r = \mu_0 i \frac{r^2}{R^2}
$$

da cui si trova

$$
B(r < R) = \frac{\mu_0 i r}{2 \pi R^2}
$$

## Forza tra fili percorsi da corrente
<small>MNV: paragrafo 7.3</small>

Abbiamo visto che un filo percorso da una corrente $i$ e immerso in campo magnetico $\vec{B}$ sente una forza dovuta alla forza di Lorentz che agisce sui portatori di carica. Per un tratto di filo di lunghezza infinitesima, questa forza vale

$$
d\vec{F} = i d\vec{s} \times \vec{B}
$$

e quindi la forza per unità di lunghezza è

$$
\vec{f} = i \hat{t} \times \vec{B}
$$

poiché $d\vec{s} = \hat{t} ds$, dove $\hat{t}$ è il versore tangente al filo.

Poniamo che il campo $\vec{B}$ sia quello generato da un altro filo indefinito posto nelle vicinanze. Se i due fili sono paralleli, ognuno avvertirà il campo generato dall'altro con direzione perpendicolare al verso della corrente, quindi le forze risultanti (uguali per il principio di azione e reazione) tenederanno ad avvicinare o ad allontanare i fili, a seconda del verso relativo delle due correnti. In particolare, se disegniamo il sistema vediamo come i due fili si attraggono se le due correnti sono concordi, mentre si respingono se sono discordi. Il modulo della forza per unità di lunghezza si può calcolare utilizzando la legge di Biot-Savart:

$$
f = i_1 B_2 = i_2 B_1 = \frac{\mu_0 i_1 i_2}{2\pi r}
$$

La forza subita da un tratto di filo di lunghezza finita $d$ è:

$$
F = fd = \frac{\mu_0 i_1 i_2 d}{2 \pi r}
$$

**Nota Bene:** se i due fili sono perpendicolari, il campo magnetico generato da ogni filo sarà parallelo al verso della corrente che scorre nell'altro, e quindi la forza risultante sarà nulla.

### Solenoide indefinito
<small>MNV: esempio 7.3</small>

Calcoliamo il campo magnetico generato da un solenoide indefinito di raggio $R$ caratterizzato da una densità di spire $n$. All'interno del solenoide il campo non può che essere diretto lungo l'asse. D'altro canto, all'esterno il campo deve essere nullo. Questo si può mostrare o considerando il fatto che le linee del campo magnetico in questo caso si chiudono all'infinito.

Calcoliamo la circuitazione del campo su di un percorso rettangolare che abbia due lati paralleli all'asse del solenoide: uno all'interno di quest'ultimo e uno posto a grande distanza (dove si può desumere non ci sia campo magnetico). È chiaro che l'unico lato che contribuisce è quello interno al solenoide e parallelo all'asse, poiché esternamente si ha $B = 0$, mentre gli altri due lati sono ortogonali al campo e quindi $\vec{B} \cdot d\vec{s} = 0$. Applicando la legge di Ampère si trova quindi

$$
\oint \vec{B} \cdot d\vec{s} = B h = \mu_0 n h i
$$

dove $nh$ è il numero di spire che contribuiscono. Risolvendo per $B$ si trova

$$
B = \mu_0 n i.
$$

Notiamo prima di tutto che questo risultato non dipende dalla distanza dall'asse del segmento lungo $h$ su cui stiamo calcolando la circuitazione. Il campo all'interno del solenoide ha quindi sempre lo stesso modulo, oltre a direzione e verso: $\vec{B}$ è uniforme. Notiamo anche che $B$ non dipende dal raggio del solenoide.

### Solenoide toroidale
<small>MNV: esempio 7.4</small>

Un solenoide toroidale è costituito da $N$ spire avvolte attorno ad un toroide (cioè ad un cilindro piegato a forma di ciambella). Calcoliamo il campo magnetico all'interno nel caso in cui scorra una corrente $i$ nelle spire.

La simmetria del sistema suggerisce che, all'interno del toroide, le linee di campo siano circonferenze (questo è vero solo se la densità di spire è molto alta, cioè nel limite in cui si ha simmetria cilindrica). Applichiamo la legge di Ampère ad una di queste circonferenze di raggio $r$:

$$
\oint \vec{B} \cdot d\vec{s} = B 2 \pi r = \mu_0 N i
$$

da cui si ricava

$$
B = \frac{\mu_0 N i}{2 \pi r}.
$$

A differenza del caso di solenoide lineare, quindi, all'interno di un solenoide toroidale il campo non è uniforme ma varia con l'inverso del raggio. 

## Proprietà magnetiche della materia
<small>MNV: paragrafo 7.5</small>

Analogamente a quanto fatto per i dielettrici, discuteremo ora i fenomeni associati alla presenza di campi magnetici all'interno di materiali (cioè non nel vuoto). In particolare, discuteremo quello che succede a materiali di diverso genere quando si trovano in presenza di correnti elettriche.

Prendiamo come esempio l'interno di un solenoide indefinito orientato lungo l'asse $x$, che abbiamo visto generare, nel vuoto, un campo magnetico uniforme $\vec{B}_0 = \mu_0 n i \hat{x}$. Cominciamo con il definire il vettore 

$$
\vec{H} \equiv \frac{\vec{B}}{\mu_0}.
$$

Riempiendo il solenoide di un materiale *omogeneo*, si trova sperimentalmente che il campo al suo interno ha direzione parallela e modulo proporzionale a $\vec{B}_0$. In particolare, si trova che tra i moduli si stabilisce la relazione

$$
\frac{B}{B_0} = \kappa_m
$$

dove $\kappa_m$ (spesso indicata anche con il simbolo $\mu_r$) è detta permeabilità magnetica relativa e, come la costante dielettrica relativa, è una caratteristica del materiale. Nel caso del solenoide indefinito avremo quindi

$$
B = \kappa_m \mu_0 n i.
$$

Analogamente a quanto fatto per il caso elettrostatico, definiamo la *permeabilità magnetica assoluta* come

$$
\mu = \kappa_m \mu_0.
$$

Poiché $k_m$ è un numero (cioè una costante adimensionale), $\mu$ e $\mu_0$ hanno le stesse unità di misura, cioè Tm/A oppure H/m. (Henry per metro, dove l'henry è un'unità di misura che viene definita nell'ambito dell'elettromagnetismo).

Sostituendo la definizione di $\vec{H}$ si trova anche

$$
\vec{B} = \kappa_m \vec{B_0} = \kappa_m \mu_0 \vec{H} = \mu \vec{H},
$$

una relazione che ricorda $\vec{D} = \epsilon \vec{E}$. Possiamo applicare queste relazioni alle leggi del magnetismo che già conosciamo. Per esempio, il campo magnetico generato da un circuito percorso da corrente immerso in un materiale caratterizzato da $k_m$ sarà dato dalla legge di Ampère-Laplace:

$$
\vec{B} = \frac{\mu i}{4 \pi} \oint \frac{d\vec{s} \times \hat{r}}{r^2},
$$

mentre la legge di Ampère diventa

$$
\oint \vec{B} \cdot d\vec{s} = \mu i.
$$

Possiamo scrivere la differenza tra il campo magnetico in un materiale e quello nel vuoto:

$$
\vec{B} - \vec{B}_0 = \kappa_m \vec{B}_0 - \vec{B}_0 = (\kappa_m - 1) \vec{B}_0 = \chi_m \vec{B}_0 = \chi_m \mu_0 \vec{H},
$$

dove $\chi_m$ prende il nome di suscettività magnetica, definita come

$$
\chi_m = \kappa_m - 1.
$$

I meccanismi microscopici alla base della variazione del campo magnetico in un materiale sono diversi e li discuteremo più avanti. Nei casi semplici che vedremo l'effetto di questi meccanismi si può descrivere tramite il concetto di *magnetizzazione*, che ricorda molto la polarizzazione vista nei dielettrici. In particolare, possiamo definire il *vettore magnetizzazione* come

$$
\vec{M} = \chi_m \vec{H} = (\kappa_m - 1) \vec{H}
$$

che è legato a ciò che accade al mezzo in presenza di correnti e ci permette di riscrivere il campo magnetico come

$$
\vec{B} = \vec{B}_0 + \vec{B} - \vec{B}_0 = \mu_0 \vec{H} + \chi_m \mu_0 \vec{H} = \mu_0 (\vec{H} + \vec{M}),
$$

una relazione che ricorda quella che lega $\vec{E}$, $\vec{P}$ e $\vec{D}$. 

Nel caso specifico del solenoide possiamo utilizzare le relazioni trovate precedentemente per riscrivere il modulo del campo come

$$
B = B_0 + \chi_m B_0 = \mu_0 n i + \mu_0 \chi_m n i.
$$

Poiché il primo termine è dato dal campo generato dal solenoide, il secondo deve essere causato dalla presenza del mezzo. Data la forma analoga dei due, l'effetto della presenza del mezzo è equivalente a quello di un secondo solenoide avente una *corrente di densità lineare* proporzionale a quella del primo solenoide, con costante di proporzionalità $\chi_m$. Questa corrente non è fittizia, anche se non è di conduzione, e viene detta *di Ampère* o *amperiana*, ed ha un'origine microscopica che dipende dal materiale considerato. Queste correnti di origine atomica hanno un ruolo simile a quello delle cariche di polarizzazione che appaiono nei dielettrici.

**Nota Bene:** $\vec{B}$ e $\vec{H}$ sono a volte chiamati campo di induzione magnetica e campo magnetico. Noi, seguendo MNV, chiamiamo il primo campo magnetico e il secondo "vettore $\vec{H}$".

Al contrario della costante dielettrica relativa, $\kappa_m$ può essere sia maggiore che minore di $1$, e quindi la suscettività magnetica può essere sia positiva che negativa. I materiali si possono classificare in tre grandi categorie, a seconda del loro comportamento magnetico.

### Sostanze diamagnetiche

Questi materiali hanno $\kappa_m < 1$ e quindi $\chi_m < 0$. Se consideriamo nuovamente un solenoide, vediamo che questi materiali generano *correnti amperiane* di verso opposto a quella che scorre nel solenoide. Il loro effetto è quindi quello di *diminuire* l'intensità del campo magnetico presente.

La suscettività di sostanze diamagnetiche comuni è dell'ordine di $-10^{-5}$ per i solidi e i liquidi e $-10^{-8}$ per i gas.

La fenomenologia delle sostanze diamagnetiche è tale per cui sono spesso chiamate "non magnetiche" perché non mostrano rilevanti effetti di natura magnetica. Esempi sono l'acqua, molte sostanze organiche (DNA, olii), il mercurio, l'oro e il rame.

### Sostanze paramagnetiche

Questi materiali hanno $\kappa_m > 1$ e quindi $\chi_m > 0$. Le correnti amperiane, in questo caso, hanno lo stesso verso di quelle di conduzione: l'intensità del campo magnetico è aumentata dalla presenza del materiale paramagnetico. 

L'ordine di grandezza della suscettività di materiali comuni è lo stesso del caso diamagnetico, ma in questo caso i valori sono positivi. Esempi di materiali paramagnetici sono l'aria, il cromo, l'alluminio, il platino.

### Sostanze ferromagnetiche

Alcuni materiali, tra cui il ferro, il cobalto, il nichel e molte leghe, sono paramagnetici ad alta temperatura ma, per $T < T_c$ (dove $T_c$ è detta temperatura critica o di Curie) acquisiscono una natura *ferromagnetica*: i valori di $\kappa_m$ (e quindi di $\chi_m$) diventano molto grandi, dell'ordine di $10^3$ o persino $10^4$. Questi valori sono sempre positivi, e quindi le correnti amperiane generate sono equiverse a quelle di conduzione. La permeabilità magnetica non è però costante, ma dipende non solo dal campo magnetico presente, ma anche dalla maniera in cui tale valore è stato raggiunto. 
