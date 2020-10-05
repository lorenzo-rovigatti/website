+++
title = "Lezione del 23/10/2018"
date = 2019-10-20T10:00:44+02:00
draft = false
+++

## Circuito RC
<small>MNV: paragrafo 5.7</small>

Consideriamo due esempi di circuiti con correnti variabili. In entrambi i casi vediamo che la presenza del resistore fa sì che parte dell'energia venga irreversibilmente persa per effetto Joule.

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

L'energia totale dissipata in un tempo $t$ è l'integrale della potenza da $0$ a $t$, che per $t \to \infty$ vale

$$
W_R = \int_0^\infty \frac{q_0^2}{RC^2} e^{-2\frac{t'}{RC}} dt' = \frac{q_0^2}{2 C}
$$

## Corrente di spostamento
<small>MNV: paragrafo 5.8</small>

Durante i processi di carica e scarica del condensatore, all'interno del circuito scorre una corrente $i(t)$ che dipende dal tempo ma è la stessa in ogni sezione del circuito. All'interno dei conduttori questa corrente coincide con la corrente di conduzione, $i(t) = i_c(t)$. Cosa succede invece tra le armature del condensatore? È chiaro che non può esserci una corrente vera e propria, perché lo spazio tra le armature non contiene cariche libere. D'altro canto, affinché il circuito sia "chiuso" e scorra corrente in tutte le sue porzioni, dobbiamo immaginare un processo che in qualche modo "sposti" le cariche da un capo all'altro del condensatore.

Dal punto di vista intuitivo, quando la carica varia su una delle armature (ad esempio una quantità di carica $dq$ si accumula sull'armatura positiva), per induzione la stessa quantità di carica, ma di segno opposto, $-dq$, appare sull'altra armatura. In forza del principio di conservazione della carica c'è quindi un eccesso di carica $dq$ che si deve spostare dalla seconda armatura. Possiamo quindi interpretare questo fenomeno come se una quantità $dq$ di carica si fosse spostata da un'armatura all'altra, dando vita ad una *corrente di spostamento* $i_s$. Poiché non solo la carica è conservata, ma $i(t)$ è, ad un dato istante di tempo $t$, la stessa ovunque nel circuito, si deve avere $i_s(t) = i_c(t)$. Possiamo calcolare $i_s$ considerando un condensatore piano, nel quale vale $C = \frac{\epsilon_0 \Sigma}{h}$, $E = \frac{\Delta V}{h}$. Si ha quindi:

$$
i_s(t) = \frac{dq}{dt} = \frac{d}{dt} (C \Delta V) = \frac{d}{dt} \left( \frac{\epsilon_0 \Sigma \Delta V}{h} \right) = \epsilon_0 \frac{d}{dt} (\Sigma E) = \epsilon_0 \frac{d\Phi(\vec{E})}{dt}
$$

dove $\Phi(\vec{E})$ è il flusso del campo attraverso il condensatore. Questa relazione ha valore generale. Vediamo come, in questa forma, la corrente di spostamento è automaticamente nulla in presenza di un campo costante: questo si ha, ad esempio, quando il condensatore è carico e la d.d.p. ai suoi capi diventa costante. In questo caso il condensatore è equivalente ad una interruzione del circuito. In maniera analoga a quanto fatto per la corrente di conduzione, anche alla corrente di spostamento si può associare una densità di corrente,

$$
j_s = \frac{i_s}{\Sigma} = \epsilon_0 \frac{dE}{dt}.
$$

Il concetto di corrente di spostamento, come vedremo in seguito, è stato introdotto per risolvere alcuni problemi dovuti alla relazione che intercorre tra il campo elettrico e quello magnetico. Maxwell ha infatti dimostrato come corrente e densità corrente siano date, in generale, dalle espressioni

\begin{align}
i & = i_c + \epsilon_0 \frac{d\Phi(\vec{E})}{dt}\\\\\\
\vec{j} & = \vec{j}_c + \epsilon_0 \frac{d\vec{E}}{dt}
\end{align}

che implicano come qualunque variazione del campo elettrico generi una corrente.

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

anche detta *prima legge di Kirchhoff*. Quando si applica questa legge bisogna fare attenzione al verso delle correnti, che va preso con segno diverso a seconda che queste siano entranti o uscenti.

### Seconda legge di Kirchhoff

In base alle definizioni del paragrafo precedente, in ogni ramo di un circuito scorre una corrente $i_k$. Questa corrente può essere sia positiva che negativa, a seconda del verso in cui scorre. Su un ramo generico, che connette i nodi $A$ e $B$, vale la *legge generalizzata di Ohm*:

$$
V_A - V_B + \mathcal{E}_r + \Delta V_r^{(C )} = R_r i_k
$$

dove il primo termine è la differenza di potenziale tra i due nodi, il secondo è la somma delle forze elettromotrici presenti lungo il ramo, il terzo è dato dalle d.d.p. di elementi che non sono né resistori né generatori (come i condensatori), e $R_r$ è la resistenza totale del ramo. Se consideriamo ora una *maglia* della rete, possiamo sommare le leggi di Ohm generalizzate per ognuno dei rami che la compongono. Per farlo è necessario prima di tutto fissare, per convenzione, il verso con cui si percorre la maglia (ad esempio: orario o antiorario). In questo modo la somma delle d.d.p. lungo la maglia si annulla e quindi si ottiene:

$$
\sum_k \mathcal{E}_k + \sum_k \Delta V_k^{(C )} = \sum_k R_k i_k
$$

dove le somme sono estese a tutti i rami $k$ della maglia. Se sono presenti solo generatori e resistori, la relazione precedente si riduce a:

$$
\sum_k \mathcal{E}_k = \sum_k R_k i_k.
$$

Questa equazione è chiamata *seconda legge di Kirchhoff*. Per applicare questa legge bisogna prima di tutto, come detto, fissare un verso di percorrenza. Dato un verso, la forza elettromotrice di generatori che sono orientati in maniera tale da avere prima il morsetto negativo e poi quello positivo danno contributo positivo (e viceversa). Similmente, correnti parallele al verso scelto sono positive (e viceversa). 

Per reti elettrici generiche bisogna scrivere un'equazione per ogni maglia (applicando la seconda legge di Kirchoff) e un'equazione per ogni nodo (applicando la prima legge di Kirchoff). Per trovare le correnti (o le quantità incognite) bisogna quindi risolvere il sistema di equazioni risultante.

## Un esempio

Calcoliamo le correnti che scorrono nel circuito in figura

{{< figure src="../images/esempio_kirchhoff.png" width="500px">}}

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

## Alcuni circuiti particolari
<small>MNV: paragrafo 5.10</small>

### Misure di intensità di corrente

Si vedrà nella seconda parte del corso che una bobina percorsa da corrente ed immersa in un campo magnetico si comporta come un dipolo in un campo elettrico, essendo soggetta ad una coppia di forze il cui momento è proporzionale all'intensità di corrente. Questo effetto può essere utilizzato per misurare la corrente. Se infatti la bobina è libera di ruotare intorno all'asse ma soggetta ad un momento resistente, l'angolo di equilibrio dipenderà dal momento a cui è sottoposta (e quindi dall'intensità di corrente). Se alla bobina è solidale un ago, questo ruoterà a seconda della corrente che scorre nella bobina e indicherà un valore su di una scala graduata appositamente tarata. Il valore massimo di corrente misurabile è in questo caso quella che genera la rotazione massima possibile, ed è detta corrente di fondo scala $i\_{\rm fs}$. Questo strumento è detto *galvanometro*, ed è caratterizzato da $i\_{\rm fs}$ e dalla sua resistenza interna $r_g$. Valori tipici sono $i\_{\rm fs} = 100 \,\mu$A e $R_g = 10\, \Omega$.

Se colleghiamo in parallelo il sistema "galvanometro $+$ resistenza interna" con un resistore $r_s$ (detto *shunt*), possiamo variare la corrente massima che è possibile misurare. Infatti in questo caso si ha che le due resistenze sono poste alla stessa d.d.p., e quindi si trova, utilizzando la legge di Ohm,

$$
i_g r_g = i_s r_s
$$

D'altro canto, per la prima legge di Kirchhoff la corrente entrante vale $i = i_g + i_s$, e quindi la corrente entrante e quella che scorre nel galvanometro sono legate da un fattore che dipende dal valore di $r_s$:

$$
\frac{i}{i_g} = 1 + \frac{r_g}{r_s}.
$$

Più la resistenza di shunt è minore, maggiori saranno le correnti che sarà possibile misurare. Ad esempio, se $r_s = r_g/99$, la massima corrente misurabile sarà $i = 100 i\_{\rm fs}$. I moderni tester hanno a disposizione resistori di shunt di diverso valore, così da poter misurare intensità di correnti anche molto diverse tra loro. Questi strumenti si chiamano *amperometri*.

**Nota Bene:** l'amperometro va inserito nel ramo del circuito in cui scorre la corrente da misurare. Poiché così facendo si aumenta la resistenza di quel ramo, la corrente misurata sarà *minore* di quella che scorre in assenza dell'amperometro. Utilizzando la legge di Ohm si può vedere come questa differenza sia tanto più piccola quanto più piccola è la resistenza dell'amperometro rispetto a quella del ramo preso in esame.

### Misure di intensità di potenziale

Se colleghiamo un galvanometro ad un circuito, la d.d.p. ai suoi capi vale $\Delta V_g = r_g i_g$. Se il galvanometro è collegato *in parallelo* ad un ramo del circuito, una misura di corrente $i_g$ permette anche di conoscere la d.d.p. a cui sia il galvanometro che il ramo del circuito sono posti applicando la legge di Ohm scritta sopra. A parità di intensità di corrente, il *range* di valori di d.d.p. che è possibile misurare può essere esteso aggiungendo in serie al galvanometro un resistore $R_v$, così da ottenere la relazione

$$
\Delta V_g = (R_v + r_g) i_g
$$

Uno strumento che può variare il valore della resistenza in serie in un ampio intervallo è detto *voltmetro* e va connesso in parallelo al ramo del circuito di cui vogliamo conoscere la d.d.p. 

**Nota Bene:** connettere un voltmetro ad un circuito altera il $\Delta V$ iniziale, ma utilizzando la legge di Ohm si può vedere come la differenza sia tanto più piccola quanto più grande è il valore di $R_v$ rispetto a quella del ramo del circuito considerato.

Anche se sono basati sullo stesso concetto, amperometri e voltmetri si utilizzano in maniera diversa:

* Un amperometro deve essere connesso in serie ed avere una resistenza interna la più piccola possibile, in modo da non variare sensibilmente l'intensità di corrente da misurare.
* Un voltmetro deve essere connesso in parallelo ed avere una resistenza interna il più grande possibile, in modo da non perturbare sensibilmente la d.d.p. da misurare.
