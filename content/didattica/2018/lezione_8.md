+++
title = "Lezione 07/11/2018"
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

## Alcuni circuiti particolari
<small>MNV: paragrafo 5.10</small>

### Misure di intensità di corrente

Si vedrà nella seconda parte del corso che una bobina percorsa da corrente ed immersa in un campo magnetico è soggetta ad una coppia di forze il cui momento è proporzionale all'intensità di corrente. Questo effetto può essere utilizzato per misurare la corrente. Se infatti la bobina è libera di ruotare intorno all'asse ma soggetta ad un momento resistente, l'angolo di equilibrio dipenderà dal momento a cui è sottoposta (e quindi dell'intensità di corrente). Se alla bobina è solidale un ago, questo ruoterà a seconda della corrente che scorre nella bobina e indicherà un valore su di una scala graduata appositamente tarata. Il valore massimo di corrente misurabile è in questo caso quella che genera la rotazione massima possibile, ed è detta corrente di fondo scala $i\_{\rm fs}$. Questo strumento è detto *galvanometro*, ed è caratterizzato da $i\_{\rm fs}$ e dalla sua resistenza interna $r_g$. Valori tipici sono $i\_{\rm fs} = 100 \,\mu$A e $R_g = 10\, \Omega$.

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
