+++
title = "Lezione del 06/11/2019"
date = 2019-10-30T14:19:34+01:00
draft = false
+++

## Momenti meccanici su circuiti piani
<small>MNV: paragrafo 6.5 (senza la parte sulle piccole oscillazioni)</small>

Riassumendo, circuiti chiusi immersi in un campo magnetico $\vec{B}$ uniforme non sono sottoposti ad alcuna forza, e quindi il loro centro di massa (se erano inizialmente fermi) non si muoverà. D'altro canto, l'interazione magnetica può generare un momento delle forze e quindi indurre una rotazione. Studiamo il caso semplice di una spira rettangolare di lati $a$ e $b$ e percorsa da corrente $i$. Poiché la spira è un oggetto planare, la sua normale $\hat{n}$ è costante su tutta la superficie. 

**Nota Bene:** La normale alla spira è definita utilizzando la regola della vite (o della mano destra) applicata al verso della corrente: la normale è diretta verso di noi se stiamo guardando il circuito dalla direzione per cui la corrente scorre in senso *antiorario*.

Poniamo la spira in una regione di spazio in cui è presente un campo magnetico uniforme $\vec{B}$. Orientiamo la spira in maniera che abbia due dei lati ortogonali a $\vec{B}$. L'orientamento della spira in questa configurazione è determinato dall'angolo $\theta$ che gli altri due lati formano con $\vec{B}$, che può essere calcolato a partire dalla normale:

$$
\vec{B} \cdot \hat{n} = B \cos{ \theta}
$$

Se chiamiamo $1$ e $2$ i lati mantenuti ortogonali a $\vec{B}$ e $3$ e $4$ gli altri, disegnando il circuito troviamo subito che le forze di origine magnetica agenti su questi ultimi hanno stesso modulo e direzione ma verso opposto. Dal disegno si vede come queste forze siano dirette in modo tale da non poter originare alcun momento.

Similmente, le forze agenti su $1$ e $2$ sono ancora uguali in modulo e direzione e opposte in verso, ma se $\theta > 0$ costituiscono una *coppia di forze* di braccio $b \sin{(\theta)}$. Il modulo del momento meccanico vale quindi

$$
M = b F \sin{ \theta } = i a b B \sin{ \theta } = i \Sigma B \sin{ \theta }
$$

dove abbiamo utilizzato l'espressione della forza agente su di un segmento rettilineo percorso da corrente $i$ derivata precedentemente e $\Sigma = ab$. La relazione precedente si può scrivere vettorialmente una volta definito il *momento magnetico* della spira:

$$
\vec{m} = i \Sigma \hat{n}
$$

che ha verso dato dalla normale della superficie planare e modulo $i\Sigma$. Il momento meccanico in forma vettoriale diventa così

$$
\vec{M} = \vec{m} \times \vec{B}.
$$

Questa relazione, dedotta per una spira, vale in realtà per ogni circuito piano, cioè per ogni circuito per cui è possibile definire un momento magnetico $\vec{m} = i \Sigma \hat{n}$.

Il momento meccanico generato tenderà sempre a ruotare il circuito in modo tale da allineare $\vec{B}$ ed $\hat{n}$. Questo si può visualizzare disegnando le quantità vettoriali in gioco usando un punto di vista per cui $\vec{M}$ esce dal foglio. Quando $\vec{B}$ e $\hat{n}$ sono allineati si ha $\vec{M} = 0$ (in condizioni di equilibrio stabile), mentre il momento meccanico è massimo quando $\theta = \frac{\pi}{2}$ (equilibrio instabile). Questo ricorda il comportamento di un dipolo elettrico in un campo elettrico uniforme, per il quale vale infatti un'espressione analoga, $\vec{M} = \vec{p} \times \vec{E}$.

Analogamente a quanto fatto per i dipoli elettrici, si può associare un'energia potenziale ad un dipolo magnetico in un campo $\vec{B}$:

$$
U_e = - \vec{m} \cdot \vec{B} = -m B \cos{ \theta }
$$

che è minima in condizioni di equilibrio stabile ($\theta = 0$) e massima in condizioni di equilibrio instabile ($\theta = \pi$). La relazione tra momento meccanico ed energia potenziale si può scrivere come:

$$
M = -\frac{dU_e}{d\theta} = - m B \sin{ \theta }
$$

In generale, il moto rotatorio del sistema sarà dato da

$$
\frac{d \vec{L}}{dt} = \vec{M}
$$

dove $\vec{L}$ è il momento angolare del sistema. Lungo l'asse di rotazione questa equazione si può riscrivere come

$$
M = I \alpha = I \frac{d^2 \theta}{dt}
$$

dove $I$ è il momento di inerzia della spira rispetto all'asse di rotazione e $\alpha$ è l'accelerazione angolare.

**Nota Bene:** le unità di misura del momento di dipolo magnetico, data la sua definizione, sono 
$$
[m] = A m^2 = \frac{J}{T}
$$

### Due esempi

#### Il galvanometro
<small>MNV: esempio 6.3</small>

{{< figure src="../images/galvanometro.png" alt="Il galvanometro" width="300px">}}

Un galvanometro (vedi figura sopra) è costituito da una bobina (composta da $N$ spire di superficie $\Sigma$) avvolta intorno ad un cilindro di ferro e solidale ad una molla. La molla è, a sua volta, solidale con un ago che si muove lungo una scala graduata. Il sistema bobina $+$ cilindro $+$ molla è posta tra due poli che generano un campo magnetico $\vec{B}$ che può essere considerato uniforme (grazie alla presenza del cilindro). La molla oppone resistenza alla rotazione generando un momento meccanico 

$$
M = k \theta
$$

dove $k$ è una costante del sistema e $\theta$ è l'angolo definito precedentemente. Quando viene fatta scorrere una corrente all'interno della bobina, questa tenderà a ruotare a causa del momento meccanico generato dalle coppie di forze agenti sulle diverse spire. Utilizzando la formula ricavata precedentemente,

$$
M = N i \Sigma B.
$$

All'equilibrio, i due momenti torcenti si equivalgono, quindi

$$
k \theta = N i \Sigma B
$$

da cui si ottiene

$$
i = \frac{k \theta}{N \Sigma B}.
$$

Misurando $\theta$ (e dopo aver tarato opportunamente la scala graduata) è possibile risalire al valore di $i$.

#### Motore elettrico in corrente continua

{{< figure src="../images/electric_motor.gif" alt="Il motore elettrico in corrente continua" width="300px">}}

Un motore a corrente continua è composto da 

* uno statore, che genera un campo magnetico. Nei motori più piccoli il campo magnetico è generato dai due poli di un magnete permamente, mentre nei motori più grandi è generato da *correnti di eccitazione* che scorrono in apposite spire poste intorno al rotore;
* un rotore, che è la parte del motore che ruota e su cui sono avvolte le spire del circuito che, essendo solidali al rotore, inducono la rotazione per effetto della forza magnetica;
* un collettore che, collegato ad un generatore, fa sì che scorra corrente nelle spire del rotore.

Le spire sul rotore si collegano al generatore tramite contatti "striscianti" detti spazzole. Quando si chiude il collegamento e passa corrente nelle spire, queste avvertiranno un momento meccanico che tenderà a far ruotare il rotore, attivando così il motore. 

Prendiamo l'esempio di un'unica spira. Se le connessioni coi poli del generatore fossero tali per cui la corrente scorre sempre nello stesso verso durante tutta la rotazione, la spira tenderebbe ad oscillare intorno alla posizione di equilibrio, e non a ruotare. Per far sì che, come in figura, la spira tenda a ruotare sempre nella stessa direzione, la polarità del collegamento tra la spira (o le spire) ed il collettore si inverte ogni mezzo giro. Così facendo anche la direzione della corrente si inverte, e questo porta ad avere un sistema in cui il momento meccanico generato tenderà a far ruotare la spira (e quindi il rotore ad essa solidale) in una direzione specifica. 

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

L'accelerazione giace quindi sempre sul piano ortogonale a $\vec{B}$, e le equazioni che governano il moto sono formalmente identiche a quelle trovate nel paragrafo precedente, dove $v_o = v \sin \theta$ fa le veci di $v$. Sul piano ortogonale a $\vec{B}$ quindi la carica compirà traiettorie circolari di raggio $r = \frac{m v \sin \theta}{qB}$. Nella direzione parallela al campo magnetico, d'altro canto, si avrà un moto rettilineo uniforme di velocità $v_p = v \cos \theta$. 

Il moto totale è quindi la *sovrapposizione* di un moto circolare uniforme e un moto rettilineo uniforme: la carica compirà una traiettoria elicoidale. Dopo ogni circonferenza compiuta, la carica si muove lungo l'asse dell'elica di una quantità

$$
p = v_p T = \frac{2 \pi m v \cos \theta}{q B}
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
