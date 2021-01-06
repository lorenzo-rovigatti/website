+++
title = "Lezione del 07/01/2021"
date = 2021-01-06T07:19:34+01:00
draft = false

+++

## La luce e l'indice di rifrazione
<small>MNV: paragrafo 11.1</small>

Quando un'onda passa da un mezzo all'altro si osservano, in generale, due fenomeni:

* parte dell'onda viene *riflessa*: si propaga all'indietro all'interno del primo mezzo;
* parte dell'onda viene *rifratta*: si propaga nel secondo mezzo con una direzione diversa da quella incidente.
	

Sebbene questi fenomeni avvengano per qualunque tipo di onda elettromagnetica, ci occuperemo in particolare della luce, cioè di quelle onde che hanno frequenze nello spettro del visibile ($(3.8 \times 10^{14} \leq \nu \leq 7.9 \times 10^{14})$ Hz, $(0.78 \times 10^{-6} \geq \lambda \geq 0.38 \times 10^{-6})$ m).

La luce si propaga con velocità $c$ nel vuoto e con velocità $v < c$ in un mezzo. In generale, $v$ dipende dalla proprietà fisiche del mezzo. Si definisce *indice di rifrazione* del mezzo la quantità

$$
n = \frac{c}{v}.
$$

Data la definizione è chiaro che $n \geq 1$, dove l'uguaglianza vale solamente nel vuoto. Il motivo fisico per cui $v < c$ in un mezzo è che gli elettroni del materiale di cui è composto risentono del campo elettrico dell'onda e cominciano ad oscillare con pulsazione $\omega$. Questo moto elettronico genera un altro campo elettrico che si somma a quello dell'onda. Ne risulta un campo totale che si propaga con velocità $v < c$.

Valori comuni dell'indice di rifrazione sono $\approx 1$ per molti gas, $1.33$ per l'acqua, tra $1.5$ e $2$ per il vetro.

## Riflessione e rifrazione
<small>MNV: paragrafo 11.3</small>

Consideriamo un'onda armonica caratterizzata da una frequenza $\nu$, da una pulsazione $\omega$, da una lunghezza d'onda $\lambda$ e da un vettore d'onda $k$. Nell'attraversare una superficie che separa il vuoto da un mezzo abbiamo visto che la velocità di propagazione varia, in questo caso da $c$ a $v$. Studiando i meccanismi microscopici si vede che $\nu$ e $\omega$ restano costanti, mentre $\lambda$ (e quindi $k$) variano. Si ha infatti

$$
\lambda_0 \nu = c, \qquad \lambda \nu = v
$$

e quindi

$$
\lambda = \lambda_0 \frac{v}{c} = \frac{\lambda_0}{n}
$$

o, equivalentemente, 

$$
k = n k_0,
$$

dove $n$ è l'indice di rifrazione del mezzo. Poiché $n > 1$, $\lambda < \lambda_0$.

Vediamo ora cosa succede nel caso generale in cui un'onda attraversi la superficie che separa due mezzi trasparenti. In questo caso i due mezzi hanno indici di rifrazione $n_1$ ed $n_2$ e le velocità al loro interno valgono $v_1 = c / n_1$ e $v_2 = c / n_2$.

Alcune definizioni:

* i vettori $\vec{k}_i$, $\vec{k}_r$ e $\vec{k}_t$ indicano la direzione e il verso delle onde incidente, riflessa e rifratta (o trasmessa). Il loro modulo è il vettore d'onda specificato sopra. 
* $\theta_i$, $\theta_r$ e $\theta_t$ sono gli angoli che $\vec{k}_i$, $\vec{k}_r$ e $\vec{k}_t$ formano con la normale alla superficie.
* Il *piano di incidenza* è il piano formato da $\vec{k}_i$ e dalla normale alla superficie.
* Consideriamo superfici *speculari*, cioè tali per cui raggi che erano paralleli prima della riflessione lo sono anche dopo. Superfici *scabre* danno invece luogo ad onde riflesse non parallele: la luce riflessa è, in questo caso, *diffusa*.

Disegniamo ora cosa succede al fronte di un'onda che colpisca la superficie:

{{< figure src="../images/snell_1.png" alt="rifrazione e riflessione" width="50%">}}

{{< figure src="../images/snell_2.png" alt="rifrazione e riflessione" width="50%">}}

La prima figura ci permette di disegnare la seconda. Ricordiamo che il fronte d'onda si muove con la stessa velocità dell'onda, che vale $v_1$ in alto e $v_2$ in basso. Prima di tutto, si osserva sperimentalmente che i vettori $\vec{k}_i$, $\vec{k}_r$ e $\vec{k}_t$ giacciono tutti sul piano di incidenza.

Quando il raggio di sinistra colpisce la superficie, quello di destra si trova in B, quindi quando il raggio di destra colpisce la superficie in C, il raggio riflesso da sinistra deve aver percorso una distanza AD pari a BC, perché i due raggi hanno la stessa velocità $v_1$. Quindi si può notare subito come i triangoli ACD e ACB siano uguali perché hanno uguali due lati (condividono il lato AC e i lati AD e CB sono uguali) ed un angolo (poiché sono triangoli retti). Ne deriva che anche gli altri due angoli sono uguali. Poiché i due angoli più acuti dei triangoli sono quelli di incidenza e di riflessione, si trova $\theta_i = \theta_r$.

Consideriamo ora i triangoli ACB e ACE. Prima di tutto, sono entrambi triangoli retti. Inoltre, hanno in comune il cateto AC. Infine, la distanza AE è quella percorsa dal raggio trasmesso nel tempo $\Delta t$ in cui i raggi nel primo mezzo hanno percorso AD e BC. Vale quindi 

$$
{\rm BC} = {\rm AC} \sin\theta_i = v_1 \Delta t = \frac{c \Delta t}{n_1}
$$

e 

$$
{\rm AE} = {\rm AC} \sin\theta_t = v_2 \Delta t =  \frac{c \Delta t}{n_2}.
$$

Da queste relazioni si ricava

$$
\frac{\sin\theta_i}{\sin\theta_t}= \frac{n_2}{n_1},
$$

cioè

$$
n_1 \sin\theta_i = n_2 \sin\theta_t.
$$

Questa equazione è nota come *legge di Snell*. Alcune implicazioni di questa legge:

* Se l'onda incide perpendicolarmente ($\theta_i = 0$), non vi è alcuna rifrazione ($\sin \theta_t = n_1 / n_2 \sin \theta_i = 0$).
* Se $n_2 > n_1$ allora $\theta_t < \theta_i$.
* Se $n_1 > n_2$ allora $\theta_t > \theta_i$.

Quest'ultima situazione presenta un caso limite: poiché $\sin\theta_t = \frac{n_1}{n_2} \sin\theta_i$, esiste un angolo $\theta_i = \theta_0 < \pi / 2$ per cui $\theta_t = \pi / 2$. Per valori $\theta_i > \theta_0$, l'applicazione della legge di Snell porta all'equazione

$$
\sin\theta_t = \frac{n_1}{n_2} \sin\theta_i > 1,
$$

che non ha soluzioni reali! Fisicamente questo significa che non c'è più un'onda rifratta: l'onda incidente viene riflessa completamente all'interno del primo mezzo. Questo fenomeno è detto *riflessione totale* ed avviene quando l'angolo di incidenza è maggiore dell'*angolo limite* $\theta_0$, il cui valore è determinato solamente dal rapporto tra gli indici di rifrazione:

$$
\sin\theta_0 = \frac{n_2}{n_1}.
$$

Si può fare facilmente esperienza di questo fenomeno immergendosi nell'acqua ($n \approx 1.33$) e restando ad una distanza piccola dalla superficie con l'aria ($n \approx 1$): oltre una certa distanza l'acqua sembra riflettere come uno specchio!

Dal punto di vista applicativo, questo fenomeno è molto utilizzato, ad esempio nelle fibre ottiche: un raggio di luce che penetra con un angolo maggiore di quello limite rispetto alle superfici laterali attraverso la base di un lungo e sottile cilindro di vetro (o altro materiale trasparente). Il raggio viene continuamente (e totalmente) riflesso dalle superfici laterali e rimane quindi all'interno di questa *guida di luce*. L'effetto è presente anche se le guide non sono rettilinee (purché l'angolo formato non faccia sì che il fascio di luce incontri la superficie con un angolo minore di $\theta_0$). Le fibre ottiche trovano applicazioni in tanti campi, dalla medicina (*endoscopie*) alle telecomunicazioni.

Un interessante esempio di effetto dovuto alla rifrazione è quello che si vede in questo video, che si può riprodurre facilmente anche a casa:

{{< youtube 9n362snGUdw >}}

### Dispersione della luce

Il discorso sulla riflessione e rifrazione di un raggio di luce appena fatto vale strettamente solo nel caso di raggi *monocromatici*, cioè composti da onde aventi tutte la stessa lunghezza d'onda. D'altro canto, se la luce incidente è composta da uno *spettro* di onde, si osserva come l'angolo $\theta_t$ sia diverso per ogni componente del raggio. Sperimentalmente si trova infatti che l'indice di rifrazione dipende dalla lunghezza d'onda della luce incidente. Si trova cioè che $n = n(\lambda)$. Nello spettro visibile questa dipendenza è, in generale, non fortissima ma facilmente osservabile dal punto di vista sperimentale e monotona: $n$ diminuisce all'aumentare della lunghezza d'onda. L'effetto principale di questa dipendenza è che le componenti nel violetto vengono deviate maggiormente rispetto a quelle nel rosso.

Questo effetto può essere utilizzato per calcolare la dipendenza dalla lunghezza d'onda dell'indice di rifrazione. Storicamente, questo è stato fatto con un dispositivo detto *prisma*. Il prisma è una lastra di materiale trasparente a facce piane non parallele, disposte in maniera da formare un angolo $\alpha$ detto angolo di apertura. L'effetto che si ottiene quando il prisma viene attraversato da raggio di luce bianca (cioè contenente tutte le lunghezze d'onda visibili) è simile a quello di questa celebre figura:

{{< figure src="../images/prism.png" alt="The Dark Side of the Moon" width="50%">}}

La dispersione che si osserva, come detto, è dovuta al fatto che $n$ dipende dalla lunghezza d'onda incidente. Misurando con precisione gli angoli e applicando la legge di Snell è possibile ottenere la funzione $n(\lambda)$ per il materiale di cui è composto il prisma.

## Onde elettromagnetiche sferiche
<small>MNV: parte finale del paragrafo 10.4</small>

Consideriamo una sorgente puntiforme (cioè di dimensioni molto piccole) che emetta onde elettromagnetiche armoniche in tutte le direzioni. Per simmetria il campo a distanza $r$ deve avere espressione

$$
E(r, t) = E_0(r ) \cos(kr - \omega t).
$$

Si parla in questo caso di onda *sferica*, perché per $t$ costante i fronti d'onda, cioè il luogo dei punti in qui la fase è costante, sono sfere. A [questa](https://phet.colorado.edu/sims/html/waves-intro/latest/waves-intro_it.html) pagina si può simulare una sorgente di onde sferiche, elettromagnetiche e non.

La potenza media che attraversa una superficie sferica di raggio $r$ sarà data dall'intensità dell'onda $I(r )$ per la superficie della sfera, $4 \pi r^2$, e quindi

$$
\mathcal{P}_m(r ) = I(r ) 4 \pi r^2 = \frac{1}{2} c \epsilon_0 E_0^2(r ) 4 \pi r^2.
$$

D'altronde, questa quantità deve essere costante indipendentemente da $r$, poiché corrisponde alla potenza media emessa dalla sorgente. Ne deriva quindi che $E_0(r )^2 r^2$ deve essere costante, e cioè che

$$
E_0(r ) = \frac{E_0}{r}.
$$

Per le onde elettromagnetiche sferiche si ha quindi

\begin{align}
E(r, t) & = \frac{E_0}{r} \cos(kr - \omega t)\\\\\\
B(r, t) & = \frac{E_0}{cr} \cos(kr - \omega t)
\end{align}

## Interferenza
<small>MNV: paragrafo 13.1</small>

I fenomeni di interferenza avvengono quando due onde (di qualsiasi natura, non solo elettromagnetica) si sovrappongono nello spazio. A [questo](https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_it.html) link si può eseguire una simulazione di interferenza tra onde meccaniche. Un esempio reale di tale interferenza è mostrato nel video seguente:

{{< youtube BddgVHiAZF4 >}}

Definiamo prima di tutto le condizioni per le quali l'interfenza può avvenire. Consideriamo due onde armoniche sferiche aventi stessa frequenza (e quindi stessa lunghezza d'onda). Queste sono generate da due sorgenti distinte $S_1$ ed $S_2$. Consideriamo ora i campo elettrici nel punto $P$ distante $r_1$ da $S_1$ ed $r_2$ da $S_2$:

$$
E_1 = \frac{E_0}{r_1} \cos(kr_1 - \omega t + \phi_1), \quad E_2 = \frac{E_0}{r_2} \cos(kr_2 - \omega t + \phi_2),
$$

dove $\phi_1$ e $\phi_2$ sono caratteristiche delle sorgenti. La differenza tra gli argomenti dei coseni è chiamata *differenza di fase* in P e vale

$$
\delta = (kr_2 - \omega t + \phi_2) - (kr_1 - \omega t + \phi_1) = k(r_2 - r_1) + (\phi_2 - \phi_1).
$$

La differenza di fase così espressa consta di due termini:

* una *differenza di fase intrinseca* $\Delta \phi \equiv \phi_2 - \phi_1$
* una differenza di fase dovuta alla distanza di P dalle due sorgenti, $k(r_2 - r_1)$

Se $\delta$ è costante nel tempo, la sorgenti di luce sono dette *coerenti*. È evidente dalla relazione precedente che, fissato P, due sorgenti sono coerenti se e solo se $\Delta \phi$ è costante nel tempo (almeno per il tempo necessario per osservare i fenomeni di interesse). Le due sorgenti sono dette *sincrone* se $\Delta \phi = 0$. 

L'interferenza propriamente detta si può osservare solamente quando le onde che si sovrappongono vengono emesse da sorgenti di luce coerenti.

### L'esperimento di Young
<small>MNV: parte del paragrafo 13.2</small>

Young è stato il primo a produrre l'interferenza di due onde luminose, nel 1801. L'apparato con cui ha effettuato l'esperimento è formato da una sorgente di luce monocromatica posta ad una grande distanza da una parete opaca contenente una fessura molto stretta, $S_0$. Quando la luce colpisce la parete, la grande distanza dalla sorgente fa sì che l'onda possa essere considerata piana. Per effetto della diffrazione (che vedremo dopo), l'onda si propaga in tutte le direzioni prima di colpire una seconda parete su cui sono poste due ulteriori fessure molto sottili, $S_1$ ed $S_2$, poste a distanza $d$ l'una dall'altra. Qui la luce ancora una volta viene diffratta, ma stavolta da due fenditure, che si comportano come sorgenti sincrone (e quindi coerenti). Infine, a grande distanza (grande rispetto a $d$) viene posto uno schermo su cui appare un *pattern di interferenza* (o *figura di interferenza*) che consiste in una serie di striscie chiare e scure dette *frange di interferenza*. Le frange chiare corrispondono a massimi dell'intensità dell'onda (e quindi del campo), mentre quelle scure corrispondono a dei minimi.

Il fenomeno si può formalizzare calcolando come varia l'intensità del campo sullo schermo al variare della differenza di distanza percorsa dalle due onde per raggiungere un punto $P$ dello schermo, $r_2 - r_1$. Come abbiamo visto prima, questa è legata alla differenza di fase tra le due onde, definita come $\delta = k(r_2 - r_1)$, che può essere riscritta in funzione di un angolo $\theta$ come

$$
\delta = k d \sin \theta = \frac{2 \pi}{\lambda} \sin \theta
$$

dove abbiamo utilizzato il rapporto che lega il vettore d'onda alla lunghezza d'onda. Si trova come l'intensità del campo sullo schermo ha andamento 

$$
I(\theta) = 4 I_0 \cos^2 \left( \frac{\pi d \sin\theta}{\lambda} \right),
$$

dove $I_0$ è l'intensità che si produrrebbe se ci fosse un'unica sorgente. È chiaro che questa funzione è massima quando 

$$
\frac{\pi d \sin\theta}{\lambda} = m \pi,
$$

cioè

$$
d \sin \theta = m \lambda
$$

dove $m$ è un qualunque intero. Quindi se la differenza di percorso tra le due onde è un *multiplo* della lunghezza d'onda, i campi elettrici sullo schermo hanno la stessa fase e quindi si sommano, dando luogo ad un'interferenza detta *costruttiva*. D'altronde, se si ha

$$
d \sin \theta = (m + \frac{1}{2}) \lambda
$$

i campi hanno fase *opposta* e quindi danno luogo ad un'interferenza distruttiva: l'intensità si annulla completamente. Per valori intermedi l'intensità varia come il coseno al quadrato, prendendo valori intermedi tra 0 $4 I_0$.

Se $L$ è la distanza tra le fenditure e lo schermo e definiamo $x$ come la distanza del punto $P$ dal centro dello schermo, se consideriamo solo valori di $\theta$ piccoli e siamo nella condizione $L \gg d$, si può scrivere $\sin \theta \approx \tan \theta$ e quindi 

$$
\sin \theta \approx \frac{x}{L}
$$

per cui l'intensità in funzione della distanza dal centro dello schermo (che è la quantità che si misura negli esperimenti) è data da

$$
I(x) = 4 I_0 \cos^2 \left( \frac{\pi d}{\lambda} \frac{x}{L} \right).
$$

Sulla periodicità di questa funzione si possono fare le stesse considerazioni fatte prima (l'intensità è massima quando $x = m \lambda L / d$ e minima quando $x = (2m + 1) \lambda L / 2d$).

Questo fenomeno è comune a tutti i tipi di onda, ed è forse capitato ad alcuni di osservare fenomeni di interferenza con le onde superficiali di un lago o del mare.
