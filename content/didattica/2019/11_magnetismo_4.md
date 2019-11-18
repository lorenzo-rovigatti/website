+++
title = "Lezione del 20/11/2019"
date = 2019-11-17T14:19:34+01:00
draft = false
+++

## Applicazioni della legge di Ampère

Come il teorema di Gauss, anche la legge di Ampère può essere utilizzata per calcolare il camp magnetico in casi particolarmente simmetrici.

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

Possiamo estendere l'analisi al caso di un filo di spessore $R$ finito. Per $r > R$ il campo è ancora quello trovato precedentemente. Per $r < R$, d'altro canto, l'intensità della corrente è proporzionale all'area che stiamo considerando, cioè $i(r ) = i r^2 / R^2$, e quindi

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

poiché $d\vec{s} = ds \hat{t}$, dove $\hat{t}$ è il versore tangente al filo.

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

Calcoliamo il campo magnetico generato da un solenoide indefinito di raggio $R$ caratterizzato da una densità di spire $n$. All'interno del solenoide il campo non può che essere diretto lungo l'asse. D'altro canto, all'esterno il campo deve essere nullo. Questo si può mostrare o considerando il fatto che le linee del campo magnetico in questo caso si chiudono all'infinito oppure applicando la legge di Ampère ad una circonferenza esterna al solenoide: poiché questa non concatena nessuna corrente (o, equivalentemente, non passa corrente netta attraverso una superficie delineata dalla circonferenza), il campo deve essere nullo.

Calcoliamo la circuitazione del campo su di un percorso rettangolare che hai lati lunghi lungo $h$ diretti come l'asse del solenoide e i lati corti di lunghezza $d > R$. È chiaro che l'unico lato che contribuisce è quello interno al solenoide e parallelo all'asse, poiché esternamente si ha $B = 0$, mentre gli altri due lati sono ortogonali al campo e quindi $\vec{B} \cdot d\vec{s} = 0$. Applicando la legge di Ampère si trova quindi

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

A differenza del caso di solenoide lineare, quindi, all'interno di un solenoide toroidali il campo non è uniforme ma varia con l'inverso del raggio. 

Applicando la legge di Ampère ad un percorso chiuso esterno al solenoide si trova che qui il campo è nullo, in maniera del tutto simile a quanto trovato per il solenoide rettilineo.

## Proprietà magnetiche della materia
<small>MNV: paragrafo 7.5</small>

Analogamente a quanto fatto per i dielettrici, discuteremo ora i fenomeni associati alla presenza di campi magnetici all'interno di materiali (cioè non nel vuoto). In particolare, discuteremo quello che succede a materiali di diverso genere quando si trovano in presenza di correnti elettriche.

Prendiamo come esempio l'interno di un solenoide indefinito, che abbiamo visto generare, nel vuoto, un campo magnetico uniforme $\vec{B}_0 = \mu_0 n i$. Cominciamo con il definire il vettore 

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

Al contrario della costante dielettrica relativa, $\kappa_m$ può essere sia maggiore che minore di $1$, e quindi la suscettività magnetica può essere sia positiva che negativa. I materiali si possono classifica in tre grandi categorie, a seconda del loro comportamento magnetico.

### Sostanze diamagnetiche

Questi materiali hanno $\kappa_m < 1$ e quindi $\chi_m < 0$. Se consideriamo nuovamente un solenoide, vediamo che questi materiali generano *correnti amperiane* di verso opposto a quella che scorre nel solenoide. Il loro effetto è quindi quello di *diminuire* l'intensità del campo magnetico presente.

La suscettività di sostanze diamagnetiche comuni è dell'ordine di $-10^{-5}$ per i solidi e i liquidi e $-10^{-8}$ per i gas.

La fenomenologia delle sostanze diamagnetiche è tale per cui sono spesso chiamate "non magnetiche" perché non mostrano rilevanti effetti di natura magnetica. Esempi sono l'acqua, molte sostanze organiche (DNA, olii), il mercurio, l'oro e il rame.

### Sostanze paramagnetiche

Questi materiali hanno $\kappa_m > 1$ e quindi $\chi_m > 0$. Le correnti amperiane, in questo caso, hanno lo stesso verso di quelle di conduzione: l'intensità del campo magnetico è aumentata dalla presenza del materiale paramagnetico. 

L'ordine di grandezza della suscettività di materiali comuni è lo stesso del caso diamagnetico, ma in questo caso i valori sono positivi.

### Sostanze ferromagnetiche

Alcuni materiali, tra cui il ferro, il cobalto, il nichel e molte leghe, sono paramagnetici ad alta temperatura ma, per $T < T_c$ (dove $T_c$ è detta temperatura critica o di Curie) acquisiscono una natura *ferromagnetica*: i valori di $\kappa_m$ (e quindi di $\chi_m$) diventano molto grandi, dell'ordine di $10^3$ o persino $10^4$. Questi valori sono sempre positivi, e quindi le correnti amperiane generate sono equiverse a quelle di conduzione. La permeabilità magnetica non è però costante, ma dipende non solo dal campo magnetico presente, ma anche dalla maniera in cui tale valore è stato raggiunto. 

La dipendenza delle permeabilità, o, analogamente, della suscettività, si trova misurando sperimentalmente il rapporto tra $\vec{H}$ e $\vec{M}$ oppure, equivalentemente, tra $\vec{H}$ e $\vec{B}$.

{{< figure src="../images/isteresi.png" width="400px">}}

Descriviamo brevemente la fenomenologia associata alle sostanze ferromagnetiche per $T < T_c$ considerando il caso di un mezzo in un solenoide indefinito di cui possiamo far variare la corrente. Partiamo da una porzione di materiale che non è mai stata a contatto con un campo magnetico (cioè si trova nello *stato vergine*). In queste condizioni, se $H = 0$ si deve chiaramente avere anche $M = 0$ (vedi figura sopra). Aumentando il valore del campo sale anche $M$, ma in maniera non lineare (curva **a**). Aumentando ancora $H$ si arriva ad un valore massimo della magnetizzazione detto *di saturazione* ($M\_{\rm sat}$). Per campi ancora maggiori $M$ resta costante e quindi $B$ aumenta linearmente con $H$: poiché la magnetizzazione ha raggiunto il valore massimo possibile, questo aumento è dovuto solamente all'aumento della corrente di conduzione. 

Se dopo aver raggiunto la saturazione si fa decrescere il campo, $M$ comincia a diminuire, ma scostandosi decisamente dal comportamento precedente (curva **b** in figura). Al diminuire di $H$, infatti, la magnetizzazione resta sempre ad un valore maggiore rispetto a prima. Per $H = 0$ la curva interseca l'asse per un valore positivo, ed è quindi presente una magnetizzazione non nulla $M_r$ detta *residua*. Poiché il materiale è magnetizzato anche in assenza di corrente si parla di *magnete permanente*, ed è il motivo per cui pezzi di ferro acquisiscono proprietà magnetiche dopo essere stati messi a contatto con un campo magnetico.

Per far sì che la magnetizzazione si annulli è necessario applicare un campo *coercitivo* $-H_c$ dovuto a correnti di verso *opposto* rispetto a quelle che hanno generato la magnetizzazione residua. Diminuendo ancora $H$ si arriva ad un valore di saturazione della magnetizzazione $-M\_{\rm sat}$, con una fenomenologia uguale a quella discussa per campi positivi.

Una volta raggiunta la saturazione, aumentando di nuovo $H$ si passa per gli stessi stati visti precendentemente: per $H = 0$ si ha una magnetizzazione residua $-M_r$, poi uno stato con magnetizzazione nulla per $H = H_c$ e poi si risale di nuovo fino a saturazione (curva **c**).

Il ciclo sopra descritto è chiamato *di isteresi* e può essere espresso sia graficando $M(H)$ che graficando $B(H)$. Se si arriva ogni volta a saturazione, il ciclo che si ottiene è sempre lo stesso. Per punti in cui $|M| < M\_{\rm sat}$, il rapporto tra $B$ ed $H$ non è costante ma funzione di $H$, e quindi lo sono anche $\kappa_m$, $\mu$ e $\chi_m$, che dipendono chiaramente dalla *storia* con cui è stato preparato il materiale.

Questa fenomenologia è comune a tutte quelle sostanze che, al variare di qualche parametro macroscopico (in questo il campo) subiscono una *transizione di fase del primo ordine*. Un altro esempio di isteresi si osserva in sistemi in cui è presente una transizione di fase liquido-gas. In questo caso al posto del campo c'è la pressione e al posto della magnetizzazione c'è la densità.

In generale, materiali diversi hanno cicli di isteresi diversi. I materiali si possono classificare in due macro-categorie:

* Materiali *duri*, che hanno grandi valori di magnetizzazione residua $M_r$ e campo coercitivo $H_c$ e quindi sono utili per costruire magneti permanenti.
* Materiali *dolci*, che hanno un ciclo di isteresi molto stretto, e cioè hanno valori bassi di $M_r$ e $H_c$ e quindi possono essere magnetizzati e smagnetizzati con facilità. Questa proprietà li rende buoni materiali per la costruzione di elettromagneti.

Quando un materiale ferromagnetico viene riscaldato a temperature superiori a quella di Curie, la suscettività magnetica è ben descritta dalla *seconda legge di Curie*:

$$
\chi_m = \frac{C \rho}{T - T_c},
$$

dove $\rho$ è la densità del materiale e $C$ una costante.

**Nota Bene:** $\vec{H}$ ed $\vec{M}$ sono misurati in A / m.
