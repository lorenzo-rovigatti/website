+++
title = "Lezione 21/11/2018"
date = 2018-11-15T14:19:34+01:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
caption = ""

+++
## Moto di una carica in un campo magnetico uniforme
<small>MNV: paragrafo 6.7</small>

Prendiamo il caso di una particella di carica $q$ e massa $m$ che entra in una regione di spazio in cui è presente un campo uniforme $\vec{B}$. La velocità iniziale della particella è $\vec{v}$.

### Il caso $\theta = \pi / 2$

Poniamo il caso che si abbia, inizialmente, $\vec{v} \perp \vec{B}$ (cioè $\vec{v}$ e $\vec{B}$ sono ortogonali). La forza agente sulla carica è quella di Lorentz che deve essere, per definizione, ortogonale sia a $\vec{v}$ che a $\vec{B}$. Dato che anche la velocità iniziale era ortogonale a $\vec{B}$, ne segue che $\vec{v}$ resterà ortogonale a $\vec{B}$ per tutti gli istanti successivi, e quindi *tutto* il moto della carica si svolgerà sul piano ortogonale al campo magnetico. Possiamo facilmente dimostrarlo scrivendo esplicitamente l'espressione della forza di Lorentz. Orientiamo il sistema di riferimento in modo da avere $\vec{v} = (v_x, v_y, 0)$ e $\vec{B} = (0, 0, B)$, allora 

$$
\vec{F} = q \vec{v} \times \vec{B} = q (v_x \hat{x} + v_y \hat{y}) \times B \hat{z} = q v_x B \hat{x} \times \hat{z} + q v_y B \hat{y} \times \hat{z} = -q v_x B \hat{y} + q v_y B \hat{x} = (q v_y B, -q v_x B, 0)
$$

e quindi la forza non ha componente lungo l'asse $z$. Poiché anche la velocità iniziale ha componente $z$ nulla, il moto resterà confinato al piano $(x, y)$.

In questo caso particolare $\theta = \frac{\pi}{2}$ e quindi il modulo della forza di Lorentz è costante e vale

$$
F = q v B = m a.
$$

Istante per istante, l'accelerazione è costante in modulo ed ortogonale alla velocità: il moto che ne deriva è circolare uniforme (MCU). Ricordiamo alcuni dettagli relativi a questo tipo di moto:

* L'accelerazione (che in questo caso ha solo la componente *centripeta*) vale in generale $a = \frac{v^2}{r}$, dove $r$ è il raggio di curvatura della traiettoria. Nel caso di MCU il raggio è costante e quindi la traiettoria seguita dalla particella è una circonferenza di raggio $r$.
* la velocità tangenziale è costante (ed in questo specifico caso è pari al modulo della velocità iniziale). Possiamo calcolarla ricordando che la velocità è il rapporto tra lo spazio percorso in un tempo $\Delta t$ e $\Delta t$, quindi
$$
v_t = \frac{2 \pi r}{T}
$$
dove $T$ è il tempo necessario per compiere un giro completo (cioè il *periodo* del moto circolare).
* Si definisce *velocità angolare* il rapporto tra l'angolo descritto in un certo intervallo di tempo $\Delta t$ e $\Delta t$ stesso. In termini infinitesimi
$$
\omega = \frac{d\theta}{dt}
$$
Nel caso di MCU $\omega$ è chiaramente costante e, per definizione, vale
$$
\omega = \frac{2 \pi}{T} = \frac{v}{r}
$$
* La velocità angolare si può vedere come quantità vettoriale, $\vec{\omega}$, in cui direzione e verso del vettore indicano l'asse e il verso di rotazione. Per l'accelerazione centripeta vale la relazione
$$
\vec{a} = \vec{\omega} \times \vec{v}
$$

Nel caso specifico che stiamo considerando il raggio della circonferenza vale

$$
r = \frac{v^2}{a} = \frac{mv}{qB}
$$

mentre la velocità angolare vale

$$
\omega = \frac{v}{r} = \frac{qB}{m}.
$$

Entrambe queste relazioni sono costanti, e ciò conferma la natura uniforme del moto.

**Nota Bene:** il modulo della velocità angolare non dipende dalla velocità iniziale. Poiché $\omega$ e il periodo del moto sono legati dalla relazione $T = \frac{2 \pi}{\omega} = \frac{2 \pi m}{qB}$, anche il periodo risulta essere indipendente da $v$!

Possiamo trovare anche una relazione tra la velocità angolare vettoriale ed il campo magnetico utilizzando l'anticommutatività del prodotto vettoriale:

$$
\vec{a} = q \vec{v} \times \vec{B} = m \vec{\omega} \times \vec{v} = - m \vec{v} \times \vec{\omega}
$$

da cui si trova

$$
\vec{\omega} = - \frac{q}{m} \vec{B}.
$$

Questa relazione ricorda (anche se è diversa!) quella trovata per il campo elettrico ($\vec{a} = \frac{q}{m}\vec{E}$). Utilizzando questa relazione possiamo ricavare una definizione operativa del campo magnetico (cioè un modo per misurarlo) scrivendo $B$ in funzione di $\omega$:

$$
B = \frac{mv}{qr}
$$

### Il caso generico

Nel caso generico, la velocità iniziale e il campo magnetico uniforme non sono ortogonali, e quindi $\theta \neq \frac{\pi}{2}$. Dato un vettore $\vec{v}$ qualsiasi, possiamo sempre scomporlo in due componenti, una parallela e l'altra ortogonale a $\vec{B}$, cioè:

$$
\vec{v} = \vec{v}_o + \vec{v}_p.
$$

Utilizzando le proprietà del prodotto vettoriale la forza di Lorentz si può scrivere come

$$
\vec{F}_L = q \vec{v} \times \vec{B} = q (\vec{v}_o + \vec{v}_p) \times \vec{B} = q \vec{v}_o \times \vec{B}
$$

perché $\vec{v}_p \times \vec{B} = 0$, essendo i due vettori paralleli. 

L'accelerazione giace quindi sempre sul piano ortogonale a $\vec{B}$, e le equazioni che governano il moto sono formalmente identiche a quelle trovate nel paragrafo precedente, dove $v_o = v \sin({\theta)}$ fa le veci di $v$. Sul piano ortogonale a $\vec{B}$ quindi la carica compirà traiettorie circolari di raggio $r = \frac{m v \sin(\theta)}{qB}$. Nella direzione parallela al campo magnetico, d'altro canto, si avrà un moto rettilineo uniforme di velocità $v_p = v \cos(\theta)$. 

Il moto totale è quindi la *sovrapposizione* di un moto circolare uniforme e un moto rettilineo uniforme: la carica compirà una traiettoria elicoidale. Dopo ogni circonferenza compiuta, la carica si muove lungo l'asse dell'elica di una quantità

$$
p = v_p T = \frac{2 \pi m v \cos(\theta)}{q B}
$$

detta *passo dell'elica*.

### La bottiglia magnetica
<small>MNV: nota alla fine del paragrafo 6.7</small>

Il moto di una carica in un campo magnetico non uniforme è, in generale, un problema molto complesso. Facciamo un esempio che si applica a situazioni di interesse pratico. Prendiamo un campo con simmetria assiale, che sia più intenso alle estremità e più debole al centro. Se l'asse $z$ è l'asse di simmetria del sistema, possiamo scomporre il campo in due componenti, $B_z$, parallelo a $\hat{z}$, e $B_r$, ortogonale a $\hat{z}$. 

Disegnando il campo vediamo come $B_z$ sia diretto sempre nello stesso verso (dal polo Nord a quello Sud), mentre $B_r$ cambia segno passando da un polo all'altro. Consideriamo una carica che entra nella regione di spazio in cui è presente il campo. Se scomponiamo la sua velocità vediamo come la componente $B_z$ tenderà a far ruotare le particelle attorno all'asse $z$, mentre $B_r$ tenderà ad intrappolarle accelerandole sempre verso il centro della "bottiglia". La particella quindi tenderà a muoversi su di una traiettoria elicoidale tra i due poli e, in dipendenza dalla sua velocità iniziale, potrebbe rimanere intrappolata anche per lungo tempo. Questo effetto di *confinamento* può essere utilizzato per generare un contenitore senza pareti, utile ad esempio per intrappolare il plasma in alcuni tipi di reattori a fusione nucleare.

Il campo magnetico generato dalla Terra ha più o meno questa forma, e infatti esiste una regione nello spazio vicino al nostro pianeta (detta fascia di Van Allen) dove molte particelle cariche restano intrappolate. Poiché questo effetto di confinamento non è perfetto, alcune di queste particelle riescono a sfuggire dalla bottiglia e, per esempio, a raggiungere l'atmosfera terrestre. Questo accade con più probabilità vicino ai poli, dove il campo è più forte. L'interazione con i gas che compongono l'atmosfera può generare, in determinate condizioni, il fenomeno dell'aurora boreale.

### Lo spettrometro di massa
<small>MNV: parte del paragrafo 6.8</small>

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
r = \frac{m}{qB} \sqrt{\frac{2q\Delta V}{m}} = \sqrt{\frac{2\Delta V}{B^2} \frac{q}{m}}.
$$

Poiché i valori di $\Delta V$ e $B$ sono caratteristici dell'apparecchio e quindi noti, tramite misure di $r$ (ottenibili con rilevatori di posizione come ad esempio lastre fotografiche) è possibile determinare il rapporto $q/m$.
