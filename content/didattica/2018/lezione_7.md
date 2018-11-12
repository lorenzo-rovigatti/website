+++
title = "Lezione 25/10/2018"
date = 2018-10-11T16:00:44+02:00
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

## Forza elettromotrice
<small>MNV: paragrafo 5.6</small>

La legge di Ohm può essere scritta come integrale del campo:

$$
\Delta V = V_A - V_B = \int_A^B \vec{E} \cdot d\vec{s} = Ri
$$

Esteso a tutto il circuito, l'integrale vale:

$$
\oint \vec{E} \cdot d\vec{s} = R_Ti
$$

dove $R_T$ è la resistenza totale. Il fatto che la circuitazione del campo non sia nulla implica che $\vec{E}$ non può avere natura unicamente elettrostatica. Sicuramente avrà una componente elettrostatica data dall'accumulo di carica sui poli del generatore, il cui integrale lungo tutto il circuito è nullo. Questo campo $\vec{E}\_{\rm el}$ è sempre diretto dal polo positivo a quello negativo. All'interno del generatore deve quindi essere presente un meccanismo *non elettrostatico*, che chiamiamo campo elettromotore $\vec{E}\_{\rm em}$, che sposta le cariche dal polo negativo a quello positivo. La circuitazione di questo campo è chiamata *forza elettromotrice*:

$$
\mathcal{E} = \oint \vec{E}\_{\rm em} \cdot d\vec{s} = \int_A^B \vec{E}\_{\rm em} \cdot d\vec{s}
$$

**Nota Bene:** nonostante il nome possa confondere, la forza elettromotrice **non** è una forza, ma ha le stesse unità di misura di un potenziale (perché?).

Il meccanismo che genera il campo elettromotore dipende dal generatore, e può essere di natura diversa (chimica, meccanica, elettromagnetica, *etc.*). Oltre che da $\mathcal{E}$, il generatore è anche caratterizzato da una resistenza interna $R_i$. Un generatore realistico può quindi essere schematizzato come un generatore "ideale" in serie ad una resistenza $R_i$. Applicando la legge di Ohm ad un circuito di resistenza $R$ collegato ad un generatore del genere si ottiene

$$
\mathcal{E} = (R + R_i) i
$$

e quindi 

$$
R i = \mathcal{E} - R_i i
$$

che è la differenza di potenziale ai capi del generatore. Proviamo a disegnare l'andamento del potenziale lungo un semplice circuito composto da un generatore e una resistenza. Partiamo dal polo negativo (il cui potenziale poniamo convenzionalmente a 0). Muovendoci verso il polo positivo *all'interno del generatore*, il potenziale aumenta di $\mathcal{E}$. Ancora all'interno del generatore la corrente oltrepassa la resistenza interna, e quindi il potenziale diminuisce di $R_i i$. Resta costante nel filo (la cui resistenza consideriamo trascurabile) che collega il generatore al resistore. Oltrepassando il resistore il potenziale diminuisce di un ulteriore $R i$, tornando a 0 sul polo negativo del generatore.

Interpretiamo questo grafico considerando che l'andamento rispecchia l'energia potenziale di una carica positiva che si muove lungo il circuito ($\Delta U_e = q\Delta V$). La quantità $q\mathcal{E}$ è quindi il lavoro fornito dal generatore ad una carica $q$, che l'acquista nella forma di energia potenziale. Questa energia, a sua volta, viene dissipata nella due resistenze (interna ed esterna). Possiamo trovare la potenza dissipata sulle due resistenze utilizzando la legge di Ohm per esplicitare questo bilancio energetico, che si ottiene moltiplicando per il fattore $dq = i dt$, che :

$$
\mathcal{E} i dt = R i^2 dt + R_i i^2 dt
$$

Da cui si vede che la potenza ha anch'essa due contributi:

$$
\mathcal{P} = R i^2 + R_i i^2
$$

## Circuito RC
<small>MNV: paragrafo 5.7</small>

Consideriamo due esempi di circuiti con correnti variabili. In entrambi i casi vediamo che la presenza del resistore fa sì che parte dell'energia venga irreversibilmente persa per effetto Joule sul resistore.

### Carica di un condensatore

Consideriamo un circuito composto da un generatore di forza elettromotrice $\mathcal{E}$, una resistenza $R$ ed un condensatore $C$. La resistenza interna del generatore può essere considerata trascurabile (o inclusa in $R$). Il circuito è inizialmente aperto. Al tempo $t = 0$ il collegamento viene chiuso. Come variano nel tempo la corrente $i(t)$, le d.d.p. ai capi degli elementi del circuito, $\Delta V_R(t)$ e $\Delta V_C(t)$, e la carica immagazzinata sul condensatore $q(t)$?

Consideriamo il sistema stazionario: la corrente che scorre nel circuito varia nel tempo, ma ad un dato istante $t$ l'intensità di corrente è la stessa ovunque. In un istante generico $t$ si deve quindi avere 

\begin{align}
\Delta V_C(t) & = \frac{q(t)}{C}\\\\\\
\Delta V_R(t) & = R i(t) = R \frac{dq}{dt}\\\\\\
\mathcal{E} & = \Delta V_C(t) + \Delta V_R(t)
\end{align}

Si ha quindi

$$
R \frac{dq}{dt} = \mathcal{E} - \frac{q}{C}
$$

Questa è, dal punto di vista matematico, un'equazione differenziale, cioè un'equazione in cui "l'incognita" è una funzione piuttosto che un numero (in questo caso la funzione $q(t)$). Le equazioni differenziali di questo tipo sono facilmente risolvibili per *separazione di variabili*. Riscriviamo l'equazione mettendo in un membro tutto ciò che dipende dall'argomento della funzione ($t$) e nell'altro tutto ciò che è legato alla funzione:

$$
\frac{dq}{C\mathcal{E} - q} = \frac{dt}{RC}
$$

Integriamo entrambi i membri da $0$ a $t$ imponendo la condizione iniziale $q(0) = 0$:

$$
\int_0^q \frac{dq'}{C\mathcal{E} - q'} = -\left( \log{(C\mathcal{E} - q)} - \log{(C\mathcal{E})} \right) = -\log{\left( \frac{C\mathcal{E} - q}{C\mathcal{E}} \right) }
$$

$$
\int_0^t \frac{dt'}{RC} = \frac{t}{RC}
$$

Spostando il segno $-$ dal membro di sinistra a quello di destra ed esponenziandoli entrambi si ottiene

$$
C\mathcal{E} - q = C\mathcal{E}e^{-\frac{t}{RC}}
$$

Da cui si ricava:

$$
q(t) = C\mathcal{E} \left( 1 - e^{-\frac{t}{RC}} \right)
$$

Sostituendo questa relazione nelle precedenti troviamo:

\begin{align}
i(t) &= \frac{\mathcal{E}}{R}e^{-\frac{t}{RC}}\\\\\\
\Delta V_C & = \mathcal{E} \left( 1 - e^{-\frac{t}{RC}} \right)\\\\\\
\Delta V_R & = \mathcal{E} e^{-\frac{t}{RC}}
\end{align}

Tutte le quantità variano in maniera esponenziale, con il tempo caratteristico dato dal prodotto $RC$ (che infatti si misura in secondi). Tutte le quantità finali sono quindi raggiunte *asintoticamente* (ma dal punto di vista pratico questo avviene quando $t \gtrsim 5 RC$). Se variamo i componenti in maniera che questo prodotto rimanga invariato, la dipendenza dal tempo di tutte le quantità rimane costante. Cambiano però i valori finali (che dipendono da $\mathcal{E}$ e da $C$ o $R$, mai da entrambi). L'interpretazione di questi risultati è semplice: la corrente è massima all'inizio, quando la carica è nulla. Mano a mano che il condensatore si carica la corrente diminuisce, la d.d.p. ai capi del condensatore aumenta (con $q$), mentre quella ai capi del resistore diminuisce.

Se chiamiamo $q_f = \mathcal{E}C$ il valore di carica asintotico, il lavoro compiuto dal generatore per caricare il condensatore vale:

$$
W\_g = \int_0^{q_f} \mathcal{E} dq = \mathcal{E} q_f = \mathcal{E}^2 C
$$

D'altro canto, l'energia elettrostatica immagazzinata dal condensatore è:

$$
\frac{1}{2} q_f \mathcal{E} = \frac{1}{2} \mathcal{E}^2 C
$$

cioè metà dell'energia spesa dal generatore. Il resto viene dissipato sulla resistenza. La potenza totale erogata, quindi, viene consumata sulla resistenza per effetto Joule e per aumentare l'energia elettrostatica del condensatore, caricandolo. Utilizzando le relazioni ottenute precedentemente si può trovare che, ad ogni istante, vale la relazione:

$$
\mathcal{P}_g = \mathcal{P}_R + \mathcal{P}_C
$$

### Scarica di un condensatore

Consideriamo un circuito aperto formato da un condensatore $C$, inizialmente carico con carica $q_0$, e da una resistenza $R$. Calcoliamo come variano nel tempo le quantità introdotte nel paragrafo precedente se il circuito viene chiuso.

Le espressioni per la d.d.p. ai capi dei due elementi sono le stesse del caso precedente:

$$
\Delta V_R = R i(t) = R \frac{dq}{dt}
$$

$$
\Delta V_C = \frac{q(t)}{C}
$$

anche se in questo caso non è presente alcun generatore, quindi

$$
\Delta V_R + \Delta V_C = R \frac{dq}{dt} + \frac{q(t)}{C} = 0
$$

che è di nuovo un'equazione differenziale risolvibile per separazione di variabili:

$$
\frac{dq}{q} = -\frac{dt}{RC}
$$

che integriamo di nuovo da 0 a $t$, con condizione iniziale $q(0) = q_0$, ottenendo

\begin{align}
q(t) & = q_0 e^{-\frac{t}{RC}}\\\\\\
i(t) & = -\frac{q_0}{RC} e^{-\frac{t}{RC}}\\\\\\
\Delta V_C & = \frac{q_0}{C} e^{-\frac{t}{RC}}\\\\\\
\Delta V_R & = -\frac{q_0}{C} e^{-\frac{t}{RC}}
\end{align}

**Nota Bene:** la corrente ha segno negativo, perché la carica sta *diminuendo*, quindi $dq/dt < 0$.
La dipendenza temporale è identica a prima, essendo caratterizzata unicamente dal prodotto $RC$. In questo caso si parte da una condizione di carica massima del condensatore, che ha inizialmente energia $U_e = \frac{q_0^2}{2 C}$. Alla fine del processo (cioè per $t \to \infty$) la carica è nulla e quindi $U_e = 0$. Dove è finita l'energia? Calcoliamo la potenza istantanea dissipata sul resistore:

$$
\mathcal{P}_R(t) = R i^2 = \frac{q_0^2}{RC^2} e^{-2\frac{t}{RC}}
$$

L'energia totale dissipata in un tempo $t$ è l'integrale della potenza da $0$ a $t$:

$$
W_R = \int_0^t \frac{q_0^2}{RC^2} e^{-2\frac{t'}{RC}} dt' = \frac{q_0^2}{2 C}
$$

## Reti elettriche
<small>MNV: paragrafo 5.9</small>

Un circuito può essere composto da molti elementi che possono essere collegati, a due a due, in serie o in parallelo. Definiamo:

* nodo della rete: un punto in cui tre o più fili/elementi si uniscono;
* ramo della rete: una porzione di circuito che collega due nodi ed è percorsa da corrente. In generale, i rami possono contenere elementi di diverso tipo (generatori, condensatori, resistori, motori, *etc.*);
* maglia della rete: una parte del circuito che forma un percorso chiuso. È composta da un numero quasiasi di rami (ognuno però incluso non più di una volta). I rami e i nodi di una maglia sono, in generale, condivisi con altre maglie.

### Prima legge di Kirchhoff

In virtù del principio di conservazione della carica, possiamo generalizzare il principio di stazionarietà ad un nodo da cui escano $N$ rami, ognuno dei quali percorso da una corrente $i_k$:

$$
\sum\_{k = 0}^N i_k = 0
$$

anche detta *prima legge di Kirchhoff*.

### Seconda legge di Kirchhoff

In base alle definizioni del paragrafo precedente, in ogni ramo di un circuito scorre una corrente $i_k$. Questa corrente può essere sia positiva che negativa, a seconda del verso in cui scorre. Su un ramo generico (che consideriamo connettere i nodi $A$ e $B$) vale la *legge generalizzata di Ohm*:

$$
V_A - V_B + \mathcal{E}_r + \Delta V_r^{(C)} = R_r i_k
$$

dove il primo termine è la differenza di potenziale tra i due nodi, il secondo è la somma delle forze elettromotrici presenti lungo il ramo, il terzo è dato dalle d.d.p. di elementi che non sono né resistori né generatori (come i condensatori), e $R_r$ è la resistenza totale del ramo. Se consideriamo ora una *maglia* della rete, possiamo sommare le leggi di Ohm generalizzate per ognuno dei rami che la compongono. Per farlo è necessario prima di tutto fissare, per convenzione, il verso con cui si percorre la maglia (ad esempio: orario o antiorario). In questo modo la somma delle d.d.p. lungo la maglia si annulla e quindi si ottiene:

$$
\sum_k \mathcal{E}_k + \sum_k \Delta V_k^{(C)} = \sum_k R_k i_k
$$

dove le somme sono estese a tutti i rami $k$ della maglia. Se sono presenti solo generatori e resistori, la relazione precedente si riduce a:

$$
\sum_k \mathcal{E}_k = \sum_k R_k i_k.
$$

Questa equazione è chiamata *seconda legge di Kirchhoff*. Per applicare questa legge bisogna prima di tutto, come detto, fissare un verso di percorrenza. Dato un verso, la forza elettromotrice di generatori che sono orientati in maniera tale da avere prima il morsetto negativo e poi quello positivo danno contributo positivo (e viceversa). Similmente, correnti parallele al verso scelto sono positive (e viceversa). 

In reti elettrici generiche bisogna scrivere un'equazione per ogni maglia (applicando la seconda legge di Kirchoff) e un'equazione per ogni nodo (applicando la prima legge di Kirchoff). Trovate le soluzioni, la corrente che passa in ogni ramo è data dalla somma delle correnti trovate per quel ramo in ognuna delle maglie tra cui è condiviso.

## Un esempio

Calcoliamo le correnti che scorrono nel circuito in figura

{{< figure src="../images/esempio_kirchhoff.png" alt="Il simbolo del resistore" width="500px">}}

Scegliamo arbitrariamente i versi delle correnti in maniera tale che nelle due maglie (1 e 2) si vada dal polo positivo a quello negativo di ogni generatore. Applichiamo la prima legge di Kirchhoff nel nodo $A$:

$$
i_1 + i_2 = i_3.
$$

Per le due maglie, invece, vale

\begin{align}
V_1 & = i_1 R_1 + i_3 R_3\\\\\\
V_2 & = i_2 R_2 + i_3 R_3
\end{align}

Le equazioni si risolvono sostituendo la prima nelle ultime due e poi isolando le due correnti. Nello specifico caso in esame si trova $i_1 = -0.143$ A, $i_2 = 0.429$ A e $i_3 = 0.286$ A. Il fatto che $i_1$ sia negativa significa che il suo verso è contrario a quello che abbiamo scelto per applicare le leggi di Kirchoff.

