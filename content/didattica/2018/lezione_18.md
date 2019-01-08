+++
title = "Lezione 08/01/2019"
date = 2019-01-08T07:19:34+01:00
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

## Onde elettromagnetiche

Le onde sono fenomeni fisici comuni che appaiono in molti contesti ogniqualvolta una o più quantità fisiche si propagano nel tempo e nello spazio. In generale, sono onde quelle perturbazioni, non necessariamente periodiche, che si propagano con una velocità ben definita. Nonostante la fenomenologia diversa, tutti i tipi di onde posseggono caratteristiche generali che ne permettono una descrizione matematica unificata.

Le onde con cui abbiamo più familiarità sono quelle *meccaniche*, che richiedono un mezzo materiale per propagarsi. Esempi noti sono le onde sonore, le onde sulla superficie di un liquido oppure le onde che si ottengono facendo oscillare una corda tesa. **Nota Bene:** in tutti questi casi il trasporto non è di materia ma di energia e quantità di moto (anche se in alcuni casi, come per le onde del mare, potrebbe sembrare il contrario).

### Soluzione delle equazioni di Maxwell
<smalll>MNV: paragrafo 10.3</small>

Nel caso del campo elettromagnetico, abbiamo visto come le equazioni di Maxwell in assenza di sorgenti di campo (cariche e correnti) diventano estremamente simmetriche nei campi,

\begin{align}
\vec{\nabla} \cdot \vec{E} = 0 \qquad & \vec{\nabla} \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}\\\\\\
\vec{\nabla} \cdot \vec{B} = 0 \qquad & \vec{\nabla} \times \vec{B} = \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}.
\end{align}

Queste equazioni ammettono due classi di soluzioni: 

* $\vec{E} = 0$ e $\vec{B} = 0$;
* i due campi sono diversi da zero e variabili sia nel tempo che nello spazio.

Quest'ultima classe di soluzioni descrive le *onde elettromagnetiche*. Deriviamo una soluzione delle equazioni di Maxwell nell'ipotesi in cui i campi siano costanti (spazialmente) su di un piano ortogonale alla direzione lungo cui l'onda si propaga. Orientiamo il nostro sistema di riferimento in modo tale da avere $\hat{x}$ come direzione di propagazione, chiaramente ortogonale al piano $(y, z)$. Poiché assumiamo che i campi siano costanti lungo $y$ e $z$, le loro derivate parziali lungo queste direzioni saranno anch'esse nulle, cioè

\begin{align}
\frac{\partial E\_\alpha}{\partial y} = \frac{\partial E\_\alpha}{\partial z} = 0\\\\\\
\frac{\partial B\_\alpha}{\partial y} = \frac{\partial B\_\alpha}{\partial z} = 0,
\end{align}

dove $\alpha$ è una qualsiasi delle tre direzioni $x$, $y$ e $z$. In particolare si trova $\frac{\partial E_y}{\partial y} = \frac{\partial E_z}{\partial z} = 0$ (e lo stesso per il campo magnetico). Poiché entrambi i campi hanno divergenza nulla (cfr. le equazioni di Maxwell), si deve anche avere

$$
\frac{\partial E_x}{\partial x} = 0 \qquad \frac{\partial B_x}{\partial x} = 0.
$$

Possiamo ora utilizzare le altre due equazioni di Maxwell (in cui figurano i rotori dei campi). Ricordando che le derivate di $\vec{E}$  e $\vec{B}$ rispetto a $y$ e $z$ sono nulle si trova

\begin{matrix}
0 = \frac{\partial B_x}{\partial t}, & \frac{\partial E_z}{\partial x} = \frac{\partial B_y}{\partial t}, & \frac{\partial E_y}{\partial x} = -\frac{\partial B_z}{\partial t}\\\\\\
0 = \frac{\partial E_x}{\partial t}, & \frac{\partial B_z}{\partial x} = -\epsilon_0 \mu_0  \frac{\partial E_y}{\partial t}, & \frac{\partial B_y}{\partial x} = \epsilon_0 \mu_0 \frac{\partial E_z}{\partial t}.
\end{matrix}

Poiché le componenti lungo $x$ dei campi hanno derivate nulle sia rispetto al tempo che rispetto allo spazio, si trova che $E_x$ e $B_x$ devono essere *costanti*. In generale esistono situazioni in cui è presente nello spazio un campo costante e diverso da zero (per esempio il campo generato da un piano indefinito), ma in questo caso sappiamo che non ci sono sorgenti di campo: $E_x$ e $B_x$ devono essere non solo costanti ma proprio nulli.

Per risolvere questo set di equazioni consideriamo le relazioni che legano $E_y$ e $B_z$. Derivandone una rispetto al tempo e l'altra rispetto a $x$ si trova

$$
\frac{\partial^2 E_y}{\partial x^2} = -\frac{\partial^2 B_z}{\partial t \partial x} \qquad 
\frac{\partial^2 E_y}{\partial t^2} = -\frac{1}{\epsilon_0 \mu_0} \frac{\partial^2 B_z}{\partial x \partial t}
$$

e quindi le derivate secondo rispetto ad $x$ e a $t$ sono proporzionali tra di loro, cioè:

$$
\frac{\partial^2 E_y}{\partial x^2} = \epsilon_0 \mu_0 \frac{\partial^2 E_y}{\partial t^2}.
$$

Applicando lo stesso procedimento troviamo relazioni identiche per $E_z$, $B_y$ e $B_z$. Questa equazione differenziale è nota come *equazione di d'Alembert*, spesso scritta nella forma 

$$
\frac{\partial^2 f}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 f}{\partial t^2}
$$

dove $v$ è detta velocità di propagazione dell'onda. Nel caso specifico delle onde elettromagnetiche, $v = \frac{1}{\sqrt{\epsilon_0 \mu_0}}$, che abbiamo visto essere uguale alla velocità della luce, $c = 2.99792 \times 10^8$ m/s.

### Onde piane
<smalll>MNV: paragrafi 10.1, 10.2</small>

L'equazione di d'Alembert è anche detta *equazione delle onde piane* proprio perché ammette come soluzioni delle funzioni che assumono valore costante sul piano ortogonale alla direzione di propagazione, qui presa come $\hat{x}$. Si può dimostrare infatti come l'equazione di d'Alembert sia soddisfatta solamente da funzioni del tipo

$$
f(x, t) = f(x \pm vt).
$$

Funzioni di questo tipo rappresentano fenomeni di *propagazione* lungo $x$ che avvengono a velocità $v$ (o $-v$). Consideriamo una soluzione del tipo $f(x - vt)$. Dati due valori $x_0$ e $t_0$, il valore $f(x_0, t_0)$ si ritrova per ogni coppia $t$ e $v$ per cui vale

$$
x - vt = x_0 - v t_0,
$$

relazione che può essere riscritta come

$$
x = x_0 + v (t - t_0)
$$

che esprime un moto rettilineo uniforme lungo l'asse $x$ con velocità $v$. In una dimensione, questa fenomenologia si può visualizzare graficando la funzione ad un tempo $t = t_0$ fissato. Al variare del tempo, il grafico mostra una *traslazione rigida* della funzione, che non cambia forma ma si muove uniformemente con velocità $v$.

#### Onde armoniche

Casi particolari (ma fondamentali) di funzioni che soddisfano l'equazione di d'Alembert sono

$$
f(x, t) = f_0 \sin[k(x - vt)] \quad {\rm oppure} \quad f(x, t) = f_0\cos[k(x - vt)]
$$

dove $f_0$ è detta *ampiezza dell'onda* e $k$ è una costante che assicura che gli argomenti delle funzioni trigonometriche abbiano la giusta dimensione (e cioè radianti). $k$ è quindi espressa in radianti per metri ed è detta *vettore d'onda* (o numero d'onda). Definendo $\omega \equiv kv$ (detta *pulsazione*), la soluzione precedenta diventa

$$
f(x, t) = f_0 \sin[kx - \omega t] \quad {\rm oppure} \quad f(x, t) = f_0\cos[kx - \omega t].
$$

Queste funzioni sono casi particolari dell'onda piana dette *onde armoniche*. Data la loro forma è chiaro come, fissando una delle due variabili, la funzione sia periodica nell'altra. A $t$ fissato la funzione si ripete identica ogniqualvolta ci si sposta di una distanza $\Delta x$ tale per cui $k\Delta x$ è un multiplo di $2\pi$. La funzione ha quindi periodicità spaziale data da

$$
\lambda = \frac{2 \pi}{k},
$$

detta *lunghezza d'onda*.

Con lo stesso ragionamento troviamo che la periodicità temporale dell'onda è data da

$$
T = \frac{2 \pi}{\omega}
$$

detta *periodo* dell'onda.

È chiaro quindi che la velocità di propagazione, e le periodicità spaziale e temporale non sono indipendenti ma legate da relazioni precise. Ad esempio si ha anche che $\lambda = v T = v / \nu$, dove $\nu$ è la *frequenza* dell'onda.

Da un punto di vista fisico si trova che $T$ (e quindi le quantità associate $\omega$ e $\nu$) dipende unicamente dalle sorgenti del campo, mentre $\lambda$ (e quindi $k$) dipende dal mezzo in cui l'onda si propaga.

Diamo ora altre definizioni utili:

* è definita *fase* dell'onda l'argomento della funzione, $\phi \equiv kx - \omega t$.
* Tutti i punti dello spazio aventi, in un certo istante, la stessa fase sono detti *fronte d'onda*. Nel caso di un'onda piana il fronte d'onda è, per l'appunto, un piano. La funzione che rappresenta l'onda prende lo stesso valore su tutto il fronte d'onda. Poiché la funzione è periodica, la stessa situazione si ripete a distanze multiple di $\lambda$: il fronte d'onda, come del resto l'onda in generale, si muove lungo la direzione di propagazione con velocità $v$.

Questi concetti di generalizzano anche in presenza di onde non piane. In particolare, il fronte d'onda è sempre definito come il luogo dei punti per i quali, in un certo istante, la fase dell'onda è costante.

#### Onde elettromagnetiche piane

Abbiamo visto come, per le onde elettromagnetiche, le equazioni alla base del fenomeno sono del tipo

$$
\frac{\partial^2 E_y}{\partial x^2} = \frac{1}{c^2} \frac{\partial^2 E_y}{\partial t^2}.
$$

Abbiamo quattro di queste equazioni, due per il campo elettrico e due per il campo magnetico (lungo $y$ e lungo $z$). Ipotizzando di avere a che fare con onde armoniche, i risultati ottenuti nel paragrafo precedente si possono generalizzare al caso multidimensionale, e le soluzioni diventano:

\begin{align}
\vec{E} & = E_y \hat{y} + E_z \hat{z} = E\_{y,0} \cos(kx - \omega t) \hat{y} + E\_{z,0} \cos(kx - \omega t) \hat{z}\\\\\\
\vec{B} & = B_y \hat{y} + B_z \hat{z} = B\_{y,0} \cos(kx - \omega t) \hat{y} + B\_{z,0} \cos(kx - \omega t) \hat{z}.
\end{align}

Ricordiamo però che le due soluzioni sono connesse dalle equazioni di Maxwell, e quindi le ampiezze non possono essere tutte indipendenti. Ad esempio utilizzando la relazione $\frac{\partial E_z}{\partial x} = \frac{\partial B_y}{\partial t}$ si trova

$$
-k E_{z,0} \sin(kx - \omega t) = \omega B\_{y,0} \sin(kx - \omega t)
$$

e quindi

$$
B\_{y,0} = -\frac{E\_{z,0}}{c}.
$$

Alla stessa maniera si ottiene

$$
B\_{z,0} = \frac{E\_{y,0}}{c}.
$$

È chiaro quindi che i due campi sono indissolubilmente legati l'un l'altro. Proprio in virtù di questo legame possiamo esprimere le quantità di interesse in funzione del campo elettrico. Ad esempio,

$$
B^2 = B_y^2 + B_z^2 = \frac{E_y^2}{c^2} + \frac{E_z^2}{c^2} = \frac{E^2}{c^2}
$$

e quindi

$$
B = \frac{E}{c},
$$

ed inoltre

$$
\vec{E} \cdot \vec{B} = E_y B_y + E_z B_z = -\frac{E_y E_z}{c} + \frac{E_z E_y}{c} = 0.
$$

Quest'ultima relazione ci dice che i due campi sono sempre *ortogonali* fra di loro. In ultimo,

$$
\vec{E} \times \vec{B} = \frac{1}{c} (E^2_y + E^2_z) \hat{x} = \frac{E^2}{c} \hat{x} = c B^2 \hat{x} = EB \hat{x}.
$$

Il prodotto vettoriale tra i due campi dà quindi la direzione di propagazione dell'onda elettromagnetica.

Tutte queste proprietà delle onde (dalla relazione tra le componenti alla direzione di propagazione) sono valide anche quando le onde non sono armoniche.

### Energia e quantità di moto di un'onda
<small>MNV: paragrafo 10.4, 10.5</small>

Abbiamo visto come sia possibile associare un'energia alla presenza di campi, sia magnetici che elettrici, in una regiona di spazio. Considerando la relazione che lega i modulli dei campi, in questo caso la densità di energia vale

$$
u = \frac{1}{2} \epsilon_0 E^2 + \frac{1}{2\mu_0} B^2 = \frac{1}{2} \epsilon_0 E^2 + \frac{1}{2\mu_0} \frac{E^2}{c^2} = \epsilon_0 E^2
$$

Consideriamo ora una superficie $\Sigma$ perpendicolare alla direzione di propagazione dell'onda, data da $\vec{E} \times \vec{B}$. Nel tempo $dt$ il *flusso di energia* attraverso $\Sigma$ è dato dalla densità di energia per il volume del solido avente base $\Sigma$ e altezza $cdt$, cioè:

$$
dU = u \Sigma c dt = \epsilon_0 E^2 \Sigma c dt.
$$

La potenza che attraversa la superficie è quindi

$$
\mathcal{P} = \frac{dU}{dt} = \epsilon_0 E^2 \Sigma c.
$$

Possiamo quindi definire un vettore il cui flusso attraverso $\Sigma$ lungo la direzione di propagazione sia proprio $\mathcal{P}$. Questo vettore è detto *vettore di Poynting*:

$$
\vec{S} = \epsilon_0 E^2 c \hat{x} = \epsilon_0 c^2 EB \hat{x} = \frac{1}{\mu_0} \vec{E} \times \vec{B}.
$$

Direzione e verso di $\vec{S}$ indicano direzione e verso della propagazione dell'onda, mentre il suo modulo è l'energia elettromagnetica per unità di tempo per unità di superficie. Questo modulo, per un'onda armonica, vale

$$
S = \epsilon_0 c E^2 = \epsilon_0 c E_0^2 \cos^2(kx - \omega t).
$$

Come i campi stessi, anche questa quantità è variabile (e periodica) nel tempo. Si definisce *intensità dell'onda* la media di $S$ lungo un periodo:

$$
I \equiv \epsilon_0 c E_0^2 \frac{1}{T} \int_0^T \cos^2(kx - \omega t) dt = \frac{1}{2} \epsilon_0 c E_0^2.
$$

Un'onda non possiede solo un'energia intrinseca, ma anche una quantità di moto. Questo fa sì che, come per i corpi dotati di massa che collidono, le onde che urtano degli ostacoli trasferiscano (parzialmente o totalmente) questa quantità di moto ad altri corpi. Questo scambio di quantità di moto è detto *pressione di radiazione*:

* nel caso di assorbimento completo *tutta* la quantità di moto viene ceduta all'oggetto colpito. In questo caso si ha $p_{\rm rad} = \frac{I}{c} = \frac{1}{2} \epsilon_0 E_0^2$.
* Se l'oggetto colpito ha la proprietà di riflettere completamente l'onda, questa dopo l'urto si propagherà in direzione $-\hat{x}$, e quindi l'impulso trasferito al corpo sarà doppio rispetto a prima. In questo caso la pressione di radiazione varrà quindi $p_{\rm rad} = \epsilon_0 E_0^2$.

Un'interessante applicazione di questa proprietà delle onde elettromagnetiche sono le cosiddette *pinzette ottiche* (*optical tweezers* in inglese), il cui sviluppo da parte di Arthur Ashkin è stato premiato nel 2018 con il Nobel per la fisica. Questa tecnologia utilizza fasci laser per intrappolare ed eventualmente spostare a piacere piccoli oggetti microscopici quali particelle colloidali, batteri e cellule. Se siete curiosi date un'occhiata [qui](https://www.youtube.com/watch?v=ju6wENPtXu8) o [qui](https://www.youtube.com/watch?v=mBE6xboXeHM) per vedere come piccole sfere micrometriche o globuli rossi possono essere manipolati e spostati a piacere!

### Onde elettromagnetiche sferiche
<small>MNV: parte finale del paragrafo 10.4</small>

Consideriamo una sorgente puntiforme (cioè di dimensioni molto piccole) che emetta onde elettromagnetiche armoniche in tutte le direzioni. Per simmetria il campo a distanza $r$ deve avere espressione

$$
E(r, t) = E_0(r ) \cos(kr - \omega t).
$$

Si parla in questo caso di onda *sferica*, perché per $t$ costante i fronti d'onda, cioè il luogo dei punti in qui la fase è costante, sono sfere.

La potenza media che attraversa una superficie sferica di raggio $r$ sarà data dall'intensità dell'onda $I(r )$ per la superficie della sfera, $4 \pi r^2$, e quindi

$$
\mathcal{P}_m(r ) = I(r ) 4 \pi r^2 = \frac{1}{2} c \epsilon_0 E_0^2(r ) 4 \pi r^2.
$$

D'altronde, questa quantità deve essere costante indipendentemente da $r$, poiché corrisponde alla potenza media emessa dalla sorgente. Ne deriva quindi che $E_0(r)^2 r^2$ deve essere costante, e cioè che

$$
E_0(r ) = \frac{E_0}{r}.
$$

Per le onde elettromagnetiche sferiche si ha quindi

\begin{align}
E(r, t) & = \frac{E_0}{r} \cos(kr - \omega t)\\\\\\
B(r, t) & = \frac{E_0}{cr} \cos(kr - \omega t)
\end{align}

### Spettro delle onde elettromagnetiche
<smalll>MNV: paragrafo 10.8</small>

Le onde elettromagnetiche possono avere frequenze in intervallo di valori molto ampio, che va da $10^2$ Hz fino a $10^18$ Hz. Questo *spettro* di frequenze è stato storicamente suddiviso in *bande*:

#### Onde hertziane o radio,$(10^2 \leq \nu \leq 10^9)$ Hz, $(3 \times 10^6 \geq \lambda \geq 0.3)$ m

Queste onde sono utilizzate nelle trasmissioni radiofoniche e televisive

#### Microonde, $(10^9 \leq \nu \leq 10^{11})$ Hz, $(3 \times 0.3 \geq \lambda \geq 3 \times 10^{-3})$ m

Queste onde sono utilizzate per telecomunicazioni (ad esempio i telefoni cellulari), per le connessioni WiFi, per i sistemi radar. Nei forni a microonde viene utilizzato il fatto che  molte molecole (come l'acqua) possono essere eccitate vibrazionalmente a queste frequenze.

#### Infrarosso, $(3 \times 10^{11} \leq \nu \leq 3.8 \times 10^{14})$ Hz, $(10^{-3} \geq \lambda \geq 0.78 \times 10^{-6})$ m

Gli infrarossi vengono prodotti da corpi caldi. Similmente, le onde infrarosse possono essere utilizzate per scaldare. Sono anche utilizzate per fare spettroscopia.

#### Visibile, $(3.8 \times 10^{14} \leq \nu \leq 7.9 \times 10^{14})$ Hz, $(0.78 \times 10^{-6} \geq \lambda \geq 0.38 \times 10^{-6})$ m

È detta luce visibile quell'insieme di onde a cui l'occhio umano è sensibile. L'intervallo di frequenze del visibile coincide approssimativamente con la parte dello spettro della radiazione solare più intensa.

#### Ultravioletto, $(7.9 \times 10^{14} \leq \nu \leq 5 \times 10^{17})$ Hz, $(0.38 \times 10^{-6} \geq \lambda \geq 6 \times 10^{-10})$ m

Lo spettro solare contiene anche molte frequenze ultraviolette. Sulla terra, una gran parte dell'intensità di queste onde viene assorbita dall'atmosfera nel processo che porta alla formazione dell'ozono.

#### Raggi X, $(5 \times 10^{17} \leq \nu \leq 5 \times 10^{19})$ Hz, $(6 \times 10^{-10} \geq \lambda \geq 6 \times 10^{-12})$ m

Queste onde, molto energetiche, sono legate alla decelerazioni di elettroni di alta energia. Sono utilizzati, ad esempio, per indagini radiografiche, poiché diversi tessuti assorbono i raggi X in maniera differente.

#### Raggi $\gamma$, $(\nu \geq 3 \times 10^{18})$ Hz, $(\lambda \leq 10^{-10})$ m

I raggi $\gamma$ sono legati a processi nucleari (decadimenti radioattivi o reazioni tra i nuclei) e possono danneggiare rapidamente gli organismi viventi. Se utilizzati in maniera controllata trovano applicazioni in terapie antitumorali.

Come si vede, la suddivisione non è ben definita e ci sono alcune sovrapposizioni tra l'una e l'altra banda.
