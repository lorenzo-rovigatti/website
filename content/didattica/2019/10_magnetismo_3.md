+++
title = "Lezione del 14/11/2019"
date = 2019-10-30T14:19:34+01:00
draft = false
+++

### La bottiglia magnetica
<small>MNV: nota alla fine del paragrafo 6.7</small>

Il moto di una carica in un campo magnetico non uniforme è, in generale, un problema molto complesso. Facciamo un esempio che si applica a situazioni di interesse pratico. Prendiamo un campo con simmetria assiale, che sia più intenso alle estremità e più debole al centro. Se l'asse $z$ è l'asse di simmetria del sistema, possiamo scomporre il campo in due componenti, $B_z$, parallelo a $\hat{z}$, e $B_r$, ortogonale a $\hat{z}$. 

Disegnando il campo vediamo come $B_z$ sia diretto sempre nello stesso verso (dal polo Nord a quello Sud), mentre $B_r$ cambia segno passando da un polo all'altro. Consideriamo una carica che entra nella regione di spazio in cui è presente il campo. Se scomponiamo la sua velocità vediamo come la componente $B_z$ tenderà a far ruotare le particelle attorno all'asse $z$, mentre $B_r$ tenderà ad intrappolarle accelerandole sempre verso il centro della "bottiglia". La particella quindi tenderà a muoversi su di una traiettoria elicoidale tra i due poli e, in dipendenza dalla sua velocità iniziale, potrebbe rimanere intrappolata anche per lungo tempo. Questo effetto di *confinamento* può essere utilizzato per generare un contenitore senza pareti, utile ad esempio per intrappolare il plasma in alcuni tipi di reattori a fusione nucleare.

Il campo magnetico generato dalla Terra ha più o meno questa forma, e infatti esiste una regione nello spazio vicino al nostro pianeta (detta fascia di Van Allen) dove molte particelle cariche restano intrappolate. Poiché questo effetto di confinamento non è perfetto, alcune di queste particelle riescono a sfuggire dalla bottiglia e, per esempio, a raggiungere l'atmosfera terrestre. Questo accade con più probabilità vicino ai poli, dove il campo è più forte. L'interazione con i gas che compongono l'atmosfera può generare, in determinate condizioni, il fenomeno dell'aurora boreale.

### Lo spettrometro di massa
<small>MNV: parte del paragrafo 6.8</small>

#### Lo spettromero di Dempster

Il moto uniforme circolare generato da un campo magnetico uniforme può essere utilizzato per separare ioni aventi diversi rapporti di carica su massa da dispositivi detti *spettrometri di massa*. 

Vediamo una semplice schematizzazione di come funziona uno di questi strumenti. Gli ioni vengono inizialmente accelerati. Se, come spesso succede, viene utilizzato un campo elettrostatico, ogni ione avrà una energia cinetica iniziale

$$
U_k = \frac{1}{2} m v^2 = q \Delta V,
$$

e quindi la velocità dei singoli ioni dipenderà dal rapporto tra la massa e la carica. Se consideriamo ioni aventi stessa carica ma massa diversa (come succede per gli isotopi), quest'ultima determinerà la velocità di entrata dei singoli ioni, che vale

$$
v = \sqrt{\frac{2q\Delta V}{m}}
$$

In seguito gli ioni vengono fatti entrare, tramite delle fessure molto strette che ne collimano il fascio, in una regione di spazio in cui è presente un campo magnetico ortogonale alla traiettoria di entrata. Poiché l'unica forza presente è quella magnetica, gli ioni compiranno una traiettoria circolare di raggio $r = mv / qB$. Sostituendo il valore della velocità trovato precedentemente si ottiene

$$
r = \frac{m}{qB} \sqrt{\frac{2q\Delta V}{m}} = \sqrt{\frac{2\Delta V}{B^2} \frac{m}{q}}.
$$

Poiché i valori di $\Delta V$ e $B$ sono caratteristici dell'apparecchio e quindi noti, tramite misure di $r$ (ottenibili con rilevatori di posizione come ad esempio lastre fotografiche) è possibile determinare il rapporto $q/m$.

#### Lo spettrometro di Bainbridge

Il dispositivo descritto sopra (spettrometro di Dempster) si basa sul presupposto che la velocità iniziale degli ioni sia molto minore di quella dovuta al campo elettrostatico iniziale. Se le condizioni sono tali per cui questo non avviene, la relazione tra $r$ e $m / q$ non è più valida. Si può ovviare a questo problema mettendo un *selettore di velocità* sul percorso degli ioni, prima che questi entrino nella zona col campo magnetico. Questo selettore di velocità non è altro che una regione di spazio in cui sono presenti un campo elettrostatico $\vec{E}_s$ e un campo magnetico $\vec{B}_s$, l'uno ortogonale all'altro ed entrambi ortogonali alla traiettoria degli ioni. In queste condizioni sul fascio di ioni agirà una forza $\vec{F}_s = q(\vec{E}_s + \vec{v} \times \vec{B}_s)$ che ha direzione ortogonale al moto degli ioni. Se i campi sono orientati in maniera tale da generare forze di verso opposto e i loro moduli sono scelti opportunamente, la forza si annullerà per un particolare valore di velocità dato da 

$$
v = \frac{E_s}{B_s}.
$$

Gli ioni aventi questa velocità, quindi, non cambieranno direzione. Se si mette una stretta fessura alla fine della regione di spazio in cui sono presenti i campi, solo gli ioni aventi questo particolare valore di velocità riusciranno ad entrare nella camera dove verranno deflessi dal campo magnetico $\vec{B}$ dello spettrometro di massa. Qui il raggio della traiettoria sarà dato da

$$
r = \frac{mv}{qB} = \frac{mE_s}{qB_s B}
$$

e quindi

$$
\frac{m}{q} = \frac{rB_s B}{E_s}.
$$

Se confrontiamo questa relazione con quella ottenuta per lo spettromero di Dempster vediamo come il rapporto massa/carica non dipenda più dalla differenza di potenziale (e quindi dalla velocità iniziale degli ioni), ma solo da quantità misurabili sperimentalmente ($r$) o legate allo strumento, e quindi note ($B_s$, $E_s$ e $B$). Un altro vantaggio è che la relazione che lega la quantità di interesse (il rapporto $m/q$) e la quantità che si misura ($r$) è lineare.

#### Il ciclotrone

Consideriamo due cavità semicilindriche conduttrici poste ad una d.d.p. variabile $\Delta V = V_0 \sin (\omega\_{RF} t)$ ed immerse in un campo magnetico uniforme $\vec{B}$ ortogonale alle loro basi. All'interno delle cavità il campo elettrico è essenzialmente nullo. Gli ioni vengono iniettati nel centro del sistema e inizialmente accelerati dalla d.d.p., così che la loro energia cinetica sia $U_k = q \Delta V$. Entrati in una delle due cavità, gli ioni vengono deflessi dal campo magnetico e ne escono dopo un tempo che è semplicemente la metà del periodo del moto circolare di una carica in un campo magnetico uniforme, cioè

$$
T_h = \frac{\pi m}{qB},
$$

che non dipende dalla loro velocità. Trascorso $T_h$, quindi, gli ioni si ritroveranno di nuovo nello spazio tra le due cavità in cui è presente la d.d.p. Se il dispostivo è progettato in maniera tale da invertire la d.d.p. dopo un tempo $T_h$, e cioè se $\omega\_{RF} = \omega = \pi / T_h = qB / m$, gli ioni verranno accelerati nuovamente e la loro energia cinetica diventerà $U_k = 2 \Delta V$. Poiché la velocità aumenta, aumenta anche il raggio di curvatura $r = mv / qB$, e quindi gli ioni percorreranno traiettorie di raggio via via maggiore con velocità crescenti, ma mantenendo sempre la stessa velocità angolare $\omega$. Questo processo continua finché il raggio di curvatura non raggiunge le dimensioni del raggio $R$ del ciclotrone stesso. Per questo valore del raggio si trova la velocità massima degli ioni, che vale

$$
v\_{\rm max} = \frac{qBR}{m}.
$$

Il principio del ciclotrone è alla base di tutti i moderni acceleratori di particelle circolare (come LHC), e quindi di tutte le loro applicazioni (*imaging*, terapia adronica, *ecc*).

## Campi magnetici prodotti da correnti
<small>MNV: paragrafo 7.1</small>

Fino ad ora ci siamo occupati dell'effetto che un campo magnetico ha su particella cariche o su fili percorsi da corrente. Ora risponderemo alla domanda complementare: qual è il campo magnetico generato da cariche in moto in diverse configurazioni (cioè da correnti generiche)?

### Correnti in circuiti

Esperimenti compiuti nell'800 hanno permesso di identificare la dipendenza funzionale del campo magnetico generato da un tratto infinitesimo di filo percorso da corrente dalle diverse quantità in gioco. In particolare si è trovato che

* il campo generato in un punto a distanza $r$ è inversamente proporzionale a $r^2$;
* l'intensità del campo è proporzionale alla corrente $i$
* la direzione del campo è ortogonale sia al vettore distanza $\vec{r}$ che al versore tangenziale al tratto di filo

In formule, questa dipendenza si può scrivere come

$$
d\vec{B}(\vec{r}) = k_m i \frac{d\vec{l} \times \hat{r}}{r^2}
$$

dove $k_m$ è una costante di proporzionalità che dipende dal materiale che stiamo considerando (e il cui valore si misura sperimentalmente), $d\vec{l} = \hat{t} dl$ indica la direzione del filo (con $\hat{t}$ versore tangente) e $\vec{r}$ è il vettore distanza tra il tratto infinitesimo e il punto in cui stiamo misurando il campo.

Nel vuoto si trova $k_m = 10^{-7} {\rm \frac{Tm}{A}}$ e, per motivi storici, di solito si scrive in funzione della cosiddetta *permeabilità magnetica del vuoto*,

$$
k_m = \frac{\mu_0}{4\pi}
$$

da cui si ottiene $\mu_0 = 4 \pi k_m = 1.26 \times 10^{-6}$ Tm/A. 

L'espressione del campo diventa quindi

$$
d\vec{B}(\vec{r}) = \frac{\mu_0}{4 \pi} \frac{i dl}{r^2} \hat{t} \times \hat{r}
$$

detta *prima legge elementare di Laplace*. Questa legge consente di calcolare il campo magnetico generato da qualsiasi circuito percorso da corrente integrando su tutti i diversi contributi. Nel caso generico di circuito chiuso, l'espressione formale del campo diventa

$$
\vec{B} = \frac{\mu_0 i }{4 \pi} \oint \frac{d\vec{l} \times \hat{r}}{r^2}.
$$

Questa relazione, nota come *legge di Ampère-Laplace*, è valida per tutti i casi in cui i conduttori che compongono il circuito hanno sezioni su cui le quantità in gioco possono essere considerate costanti; quando, cioè, possono essere considerati filiformi.

### Cariche in moto

Possiamo riscrivere la legge elementare di Laplace da un punto di vista microscopico ricordando che $j = i / \Sigma$ e, per portatori generici di carica $q$ e velocità di deriva $\vec{v}$, $\vec{j} = n q \vec{v}$:

$$
d\vec{B}(\vec{r} ) = \frac{\mu_0}{4 \pi} \frac{q  \vec{v} \times \hat{r}}{r^2} n \Sigma dl = \frac{\mu_0}{4 \pi} \frac{q \vec{v} \times \hat{r}}{r^2} n d\tau.
$$

Questa è l'espressione del campo generata dagli $N = n d\tau$ portatori di carica presenti nel volumetto $d\tau = \Sigma dl$. Il campo generato da ognuno di questi portatori sarà quindi pari a $d\vec{B}(\vec{r} ) / n d\tau$, da cui si ricava il campo dovuto ad una semplice carica $q$ in movimento con velocità $\vec{v}$

$$
\vec{B} = \frac{\mu_0}{4 \pi} \frac{q \vec{v} \times \hat{r}}{r^2}.
$$

Poiché dipende unicamente dal valore della carica e dalla velocità della particella, questa espressione ha carattere del tutto generale. È chiaro quindi come una carica in moto generi *sempre* un campo magnetico, indipendentemente dalle cause che generano (o hanno generato) il moto. Questo risultato si può confermare misurando i campi magnetici generati da sistemi elettrostatici messi in moto, come fatto per la prima volta da Rowland nel 1878 con un disco carico rotante.

## Legge di Ampère
<small>MNV: paragrafo 7.4</small>

Consideriamo il campo magnetico generato da un filo indefinito rettilineo. Per simmetria (e per le proprietà della prima legge elementare di Laplace), le linee di campo non possono che essere che circonferenze poste sui piani ortogonali all'asse del filo. È quindi evidente una proprietà del campo magnetico: *tutte* le linee di campo sono chiuse. Data la loro definizione, il fatto che siano chiuse implica che la circuitazione del campo magnetico calcolata su una linea di campo (e, come vedremo, calcolata su *qualunque* linea chiusa) sia, in generale, diversa da zero. Esplicitiamo questa proprietà di $\vec{B}$. Per farlo consideriamo il caso particolare di un filo indefinito percorso da corrente che, come vedremo esplicitamente tra poco, genera un campo

$$
\vec{B}(r ) = \frac{\mu_0 i}{2 \pi r} \hat{\phi}.
$$

Dove $\hat{\phi}$ indica la direzione tangente alla linea di campo che, in questo caso, è una circonferenza centrata sul filo. Consideriamone una a distanza $R$ dal filo. Per calcolare l'integrale di linea dobbiamo prima calcolare il prodotto scalare tra il campo e lo spostamento, che in questo caso vale

$$
\vec{B} \cdot d\vec{s} = \frac{\mu_0 i}{2 \pi r} ds = \frac{\mu_0 i}{2 \pi} d\theta
$$

perché lo spostamento ed il campo magnetico sono paralleli, essendo entrambi tangenti alla linea del campo (il primo per definizione, il secondo perché diretto lungo $\hat{\phi}$), e perché $ds = r d\theta$, dove $d\theta$ è quindi l'angolo sotteso da $ds$. Se integriamo questa quantità su di un arco di circonferenza che unisce i punti $C$ e $D$ otteniamo

$$
\int_C^D \vec{B} \cdot d\vec{s} = \int_0^\theta \frac{\mu_0 i}{2 \pi} d\theta' = \frac{\mu_0 i}{2 \pi} \theta,
$$

dove $\theta$ è l'angolo sotteso dall'arco su cui abbiamo integrato. L'espressione precedente dipende solamente dall'angolo, ed è quindi naturale pensare che la stessa relazione valga indipendentemente dal percorso che unisce $C$ e $D$. Questo si può dimostrare considerando un percorso qualsiasi che unisca C e D, e scomponendo il vettore spostamento in due componenti $d\vec{s}_p$ e $d\vec{s}_o$, una parallela e l'altra ortogonale a $\hat{\phi}$. Il prodotto scalare con il campo diventa quindi

$$
\vec{B} \cdot d\vec{s} = \vec{B} \cdot d\vec{s}_p + \vec{B} \cdot d\vec{s}_o = \vec{B} \cdot \hat{\phi} ds_p = \frac{\mu_0 i}{2 \pi} d\theta
$$

dove $d\theta$ è l'angolo sotteso da $ds_p$. Avendo ottenuto la stessa espressione di prima, abbiamo dimostrato come l'integrale da $C$ a $D$ non dipende dal percorso che scegliamo, ma solo dall'angolo $\theta$ sotteso dall'arco di circonferenza che li unisce. Se consideriamo il percorso inverso, da $D$ a $C$, lo spostamento sarà ora orientato lungo $-\hat{\phi}$ e quindi avremo

$$
\int_D^C \vec{B} \cdot d\vec{s} = -\int_0^\theta \frac{\mu_0 i}{2 \pi} d\theta' = -\frac{\mu_0 i}{2 \pi} \theta.
$$

Possiamo ora calcolare l'integrale del campo per lo spostamento su di una linea chiusa, cioè la circuitazione di $\vec{B}$:

$$
\oint \vec{B} \cdot d\vec{s} = \frac{\mu_0 i}{2 \pi} \oint d\theta,
$$

ricordando che la definizione di $\theta$ è legata all'angolo visto dalla sorgente del campo, dobbiamo distinguere due casi:

* Se torniamo da $D$ a $C$ *senza* girare intorno alla (cioè senza concatenare la) sorgente, prima ci muoviamo di $+\theta$ e poi di $-\theta$. È chiaro quindi che la circuitazione del campo è nulla, cioè 
$$
\frac{\mu_0 i}{2 \pi} \oint d\theta = \frac{\mu_0 i}{2 \pi} \int_0^{\theta} d\theta' + \frac{\mu_0 i}{2 \pi} \int_0^{-\theta} d\theta' = 0
$$
* Se torniamo da $D$ a $C$ girando attorno alla (cioè concatenando la) sorgente, l'angolo $\theta$ aumenta monotonicamente, e quindi la circuitazione del campo diventa:
$$
\frac{\mu_0 i}{2 \pi} \oint d\theta = \mu_0 i.
$$

Questa relazione, che abbiamo ottenuto per un filo rettilineo indefinito, ha carattere del tutto generale ed è nota come *legge di Ampère*, che afferma che la circuitazione del campo magnetico $\vec{B}$ è uguale alla somma delle correnti concatenate, moltiplicata per $\mu_0$. Si ha cioè

$$
\oint \vec{B} \cdot d\vec{s} = \mu_0 \sum_k i_k,
$$

Come nel caso della legge di Gauss per il campo elettrostatico, il campo magnetico che compare al primo membro è quello generato da *tutte* le correnti presenti nello spazio, mentre al secondo membro compaiono *tutte* le correnti concatenate al percorso chiuso che stiamo considerando. Il segno con cui si considera una corrente $i_k$ nella somma dipende dal rapporto tra il verso in cui scorre e il verso con cui si percorre la linea chiusa su cui si calcola la circuitazione:

* se i due versi sono legati dalla regola della mano destra (o della vite) si prende $+i_k$;
* altrimenti si considera $-i_k$.

La legge di Ampère lega direttamente le sorgenti del campo al campo stesso, in maniera analoga a quanto fatto dalla legge di Gauss.
**Nota Bene:** la legge di Ampère mostra come, in generale, la circuitazione di $\vec{B}$ sia diversa da zero. Anche se in casi specifici (come ad esempio quando il percorso su cui si integra non concatena alcuna corrente) la circuitazione può essere nulla, il campo magnetico è sempre un campo *non conservativo*.

### Forma locale della legge di Ampère

La legge di Ampère è una relazione integrale che può essere riscritta in forma locale utilizzando il teorema di Stokes che, in elettrostatica, è usato in maniera simile per dimostrare come $\vec{E}$ sia *irrotazionale*. In questo applicando il teorema si ottiene

$$
\oint \vec{B} \cdot d\vec{s} = \int\_{\Sigma} \vec{\nabla} \times \vec{B} \cdot \hat{n} d\Sigma = \mu_0 i
$$

dove $\Sigma$ è una *qualsiasi* superficie avente come contorno la linea su cui calcoliamo la circuitazione e $i$ è la somma delle correnti concatenate. Quest'ultima quantità può essere riscritta come integrale della densità di corrente:

$$
i =  \int_{\Sigma} \vec{j} \cdot \hat{n} d\Sigma
$$

dove, chiaramente, $\vec{j} \neq 0$ dove i fili in cui scorre corrente intersecano $\Sigma$. Uguagliando le espressioni membro a membro si ottiene

$$
\int\_{\Sigma} \vec{\nabla} \times \vec{B} \cdot \hat{n} d\Sigma = \mu_0 \int\_{\Sigma} \vec{j} \cdot \hat{n} d\Sigma
$$

e quindi, poiché $\Sigma$ è arbitraria, si trova

$$
\vec{\nabla} \times \vec{B} = \mu_0 \vec{j},
$$

detta *forma locale della legge di Ampère*. 
