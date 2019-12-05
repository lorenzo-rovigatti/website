+++
title = "Lezione del 04/12/2019"
date = 2019-11-27T07:19:34+01:00
draft = false
+++

## Autoinduzione
<small>MNV: paragrafo 8.4, esempio 8.4</small>

Consideriamo un circuito in cui scorra una corrente $i$. Questo genererà un campo dato dalla legge di Ampère-Laplace:

$$
\vec{B} = \frac{\mu_0 i }{4 \pi} \oint \frac{d\vec{s} \times \hat{r}}{r^2}.
$$

Il flusso di questo campo concatenato col circuito stesso è detto *autoflusso* e vale

$$
\Phi(\vec{B}) = \int\_{\Sigma} \left( \frac{\mu_0 i }{4 \pi} \oint \frac{d\vec{s} \times \hat{r}}{r^2} \right) \cdot \hat{n} d\Sigma,
$$

dove $\Sigma$ è una qualunque superficie che abbia il circuito come contorno. Poiché il flusso, come anche il campo, è proporzionale alla corrente, la relazione precedente si può scrivere come:

$$
\Phi(\vec{B}) \equiv Li
$$

dove $L$ è detta *induttanza* (o coefficiente di autoinduzione) del circuito e, se quest'ultimo è indeformabile, dipende solamente dalla forma che ha e dai materiali di cui è composto.

Calcoliamo $L$ per il caso di un solenoide toroidale composto da $N$ spire in cui scorre una corrente $i$, di sezione rettangolare di lati $a$ e $b$ e raggio interno $R$. In questo caso si ha

$$
\vec{B} = \frac{\mu_0 N i}{2 \pi r} \hat{\phi}
$$

dove $r$ è la distanza dal centro del solenoide. Calcoliamo il flusso attraverso una singola spira (per cui vale $\hat{n} = \hat{\phi}$):

$$
\Phi_s(\vec{B}) = \int\_\Sigma \vec{B} \cdot \hat{n} = \frac{\mu_0 N i}{2 \pi } \int_0^a da \int_0^b \frac{db'}{R + b'} = \frac{\mu_0 N i a}{2 \pi} \int_0^b \frac{db'}{R + b'} = \frac{\mu_0 N i a}{2 \pi} \log\left( \frac{R + b}{R} \right)
$$

e quindi per $N$ spire vale

$$
\Phi(\vec{B}) = N \Phi_s(\vec{B}) = \frac{\mu_0 N^2 i a}{2 \pi} \log\left( \frac{R + b}{R} \right)
$$

e quindi il solenoide ha induttanza

$$
L = \frac{\mu_0 N^2 a}{2 \pi} \log\left( \frac{R + b}{R} \right).
$$

Se la corrente non è costante, nel circuito apparirà una corrente *autoindotta* dovuta alla forza elettromotrice generata dalla variazione di flusso concatenato al circuito stesso, che vale

$$
\mathcal{E}_L = - \frac{d\Phi(\vec{B})}{dt} = -L \frac{di}{dt},
$$

che fornisce una definizione *operativa* del coefficiente di induzione $L$. In generale qualunque porzione di circuito possiede $L \neq 0$, ma di solito questo valore è molto piccolo. Elementi circuitali con $L$ grande possono essere costruiti, ad esempio avvolgendo del filo in spire a formare un solenoide, e sono solitamente indicati col simbolo 

{{< figure src="../images/inductance.png" alt="simbolo dell'induttore" width="150px">}}

**Nota Bene:** data la sua definizione l'induttanza è misurata in weber/ampere, a cui si dà il nome di *henry* (H). I sottomultipli più utilizzati sono $mH$ e $\mu H$. 

L'effetto dovuto all'induttanza è sempre presente quando vi è un circuito in cui scorre una corrente variabile, ma fino ad ora l'abbiamo trascurato perché, per circuiti composti da singole (o poche) spire avvolte nel vuoto $L$ ha un valore molto piccolo. Esistono diversi strumenti online che permettono di calcolare l'induttanza di circuiti generici ([qui](https://technick.net/tools/inductance-calculator/?aiocp_dp=util_inductance_calculator) un caso semplice da utilizzare), che permettono di vedere come, ad esempio, sia per una spira circolare di raggio $0.5$ m che per una spira quadrata di lato $1$ m si ha $L \approx 4 \times 10^{-6}$ H, cioè valori molto piccoli. Se provate a svolgere nuovamente gli esercizi fatti senza considerare l'autoinduzione, troverete che in questi casi specifici il suo effetto è sempre trascurabile.

### Extracorrenti di apertura e di chiusura

#### Chiusura di un circuito induttivo

Consideriamo un circuito composto da un generatore di f.e.m. $\mathcal{E}$, da una resistenza $R$, da un induttore $L$ e da un interruttore, inizialmente aperto. Al tempo $t = 0$ l'interruttore viene chiuso. È chiaro che, per continuità, deve valere $i(0) = 0$. La legge di Ohm in presenza di un induttore si scrive:

$$
R i = \mathcal{E} + \mathcal{E}_L = \mathcal{E} - L \frac{di}{dt},
$$

che può essere risolta per separazione di variabili:

$$
\frac{di}{i - \mathcal{E} / R} = -\frac{R}{L} dt
$$

che, integrando dal tempo iniziale ad un generico tempo $t$, diventa

$$
\log\left( \frac{i(t) - \mathcal{E}/R}{\mathcal{E}/R} \right) = -\frac{R}{L} t
$$

da cui si ottiene la corrente

$$
i(t) = \frac{\mathcal{E}}{R}\left( 1 - e^{-\frac{t}{\tau}} \right),
$$

dove $\tau \equiv \frac{L}{R}$ è detta *costante di tempo* del circuito per cui valgono le stesse considerazioni fatte nel caso del circuito $RC$. La forza elettromotrice autoindotta è

$$
\mathcal{E}_L(t) = -L\frac{di}{dt} = - \mathcal{E} e^{-\frac{t}{\tau}}
$$

e va a 0 per $t \to \infty$, cioè quando la corrente $i(t)$ raggiunge il suo valore asintotico. La corrente dovuta alla presenza dell'induttore, detta *extracorrente di chiusura*, vale

$$
i_L(t) = \frac{\mathcal{E}_L}{R} = - \frac{\mathcal{E}}{R} e^{-\frac{t}{\tau}},
$$

ed è negativa perché si *oppone* alla corrente dovuta alla presenza del generatore.
In assenza di induttori veri e propri $\tau$ è solitamente molto piccolo ($10^{-5}$ - $10^{-8}$ s), mentre può diventare anche dell'ordine del secondo in presenza di elementi con grandi induttanze. Ad esempio, per $R = 1\, \Omega$ e $L = 1$ H $\tau = 1$ s.

#### Apertura di un circuito induttivo

Consideriamo il circuito precedente nel limite in cui la corrente ha raggiunto il suo valore asintotico. Nel momento in cui apriamo il circuito, questo si può vedere come un circuito chiuso avente resistenza $R' \gg R$ che consideriamo costante durante il periodo transiente in cui la corrente decresce dal suo valore iniziale ($\mathcal{E} / R$) a $0$. Nell'ipotesi, che confermeremo a posteriori, che $\mathcal{E}$ è trascurabile rispetto alla f.e.m. autoindotta, l'equazione che governa il sistema è

$$
\mathcal{E}_L = -L \frac{di}{dt} = R' i
$$

separando le variabili e integrando da $t = 0$ si ottiene immediatamente

$$
i(t) = \frac{\mathcal{E}_L}{R}e^{-\frac{t}{\tau'}},
$$

dove $\tau' = \frac{L}{R'} \ll \tau$. Derivando l'espressione precedente si ottiene la forza elettromotrice autoindotta:

$$
\mathcal{E}_L = -L \frac{di}{dt} = \frac{R'}{R} \mathcal{E} e^{-\frac{t}{\tau'}}
$$

che, per tempi piccoli risulta molto più grande di $\mathcal{E}$ e quindi ha senso trascurare il contributo di quest'ultima. La corrente originata dall'autoinduzione è detta extracorrente di apertura e vale

$$
\frac{\mathcal{E}_L}{R'} = i(t),
$$

cioè proprio la corrente che scorre nel circuito. Il grande valore di $\mathcal{E}_L$ fa sì che tra i contatti dell'interruttore si generi un campo che può talvolta eccedere la resistenza dielettrica del mezzo: in questo caso si possono generare scintille o addirittura incendi.

## Energia magnetica
<small>MNV: paragrafo 8.5</small>

Abbiamo visto come la presenza di un induttore in un circuito in cui varia la corrente generi una f.e.m. che, generando una corrente, compirà un lavoro. Questo lavoro è, per definizione, associabile ad una differenza di energia potenziale. Calcoliamolo nel caso di un circuito $RL$. In questo caso la potenza, $\mathcal{P} = Vi$, si scrive

$$
\mathcal{P} = \mathcal{E}i = Ri^2 + Li \frac{di}{dt}
$$

e quindi il lavoro nel tempo $dt$ vale

$$
\mathcal{E}i dt = Ri^2 dt + Li di.
$$

Il primo membro di questa espressione è il lavoro compiuto dal generatore. Questo è pari alla somma di due contributi: uno dissipato nella resistenza, l'altro speso per contrastare la f.e.m. di autoinduzione, $\mathcal{E}_L = - L di / dt$. Integrando questo contributo per un intervallo di tempo (per esempio quello necessario per passare dalla corrente $i_1$ a quella $i_2$) si ottiene il lavoro compiuto dal generatore per opporsi alla f.e.m. autoindotta:

$$
W(t) = \int\_{i_1}^{i_2} L i di = \frac{1}{2} L i_2^2 - \frac{1}{2} L i_1^2.
$$

È chiaro che questo valore non dipende dalla maniera in cui avviene la variazione di corrente, ma soltanto dai valori $i_1$ e $i_2$. Un risultato simile si ottiene quando si apre il circuito e la corrente passa da $i\_\infty = \mathcal{E} / R$ a $0$. In questo, infatti, abbiamo visto che $i(t) = \frac{\mathcal{E}}{R} e^{-R' t / L}$, e quindi

$$
\int_0^\infty R' i^2 dt = R' \frac{\mathcal{E}^2}{R^2} \int_0^\infty e^{-2 R' t / L} dt = \frac{1}{2} L \frac{\mathcal{E}^2}{R^2} = \frac{1}{2} L i\_\infty^2.
$$

All'apertura del circuito l'energia immagazzinata dall'induttanza viene dissipata sulla resistenza $R'$. Anche in questo caso questa energia ha l'espressione

$$
U_L = \frac{1}{2} L i^2.
$$

La corrente sembra quindi possedere una *energia intrinseca*, e questa energia sembrerebbe localizzata proprio nel circuito in cui la corrente scorre. Ricordiamo però che la corrente è un effetto secondario: l'effetto primario è la presenza della f.e.m. autoindotta dalla variazione del flusso del campo che, a sua volta, è generato dalla variazione del campo magnetico. L'energia si può quindi pensare come associata alla presenza del campo $\vec{B}$ piuttosto che a quella della corrente. In maniera analoga a quanto detto per il campo elettrico, possiamo pensare che ad una regione in cui è presente un campo magnetico si possa associare una certa *energia magnetica*. 
Consideriamo un solenoide di lunghezza $d$, sezione $\Sigma$ e densità di spire $n$. Approssimando l'espressione del campo con quella di un solenoide indefinito, $B = \mu_0 n i$, possiamo scrivere l'autoflusso attraverso una singola spira come

$$
\Phi_s(\vec{B}) = \mu_0 n i \Sigma
$$

e quindi il flusso totale come 

$$
\Phi(\vec{B}) = \mu_0 n i \Sigma nd = \mu_0 n^2 i \Sigma d
$$

perché $nd = N$ è il numero totale di spire. Il coefficiente di autoinduzione è quindi

$$
L = \mu_0 n^2 \Sigma d
$$

e, se nel solenoide scorre una corrente $i$, l'energia immagazzinata si può scrivere come

$$
U_L = \frac{1}{2} L i^2 = \frac{1}{2} \mu_0 n^2 \Sigma d i^2 = \frac{1}{2} \frac{B^2}{\mu_0} \tau
$$

dove $\tau = \Sigma d$ è il volume del solenoide. Lo stesso risultato si ottiene per un solenoide toroidale.

Poiché l'energia risulta, almeno in questi casi specifici, proporzionale al volume in cui è presente un campo magnetico, si può definire una *densità di energia magnetica*, che vale

$$
u_m = \frac{1}{2} \frac{B^2}{\mu_0} = \frac{1}{2} \mu_0 H^2 = \frac{1}{2} BH.
$$

Analogamente a quanto fatto per il caso elettrostatico, l'energia totale di una porzione di spazio si può scrivere come integrale della densità di energia:

$$
U_m = \int\_\tau \frac{1}{2} \frac{B^2}{\mu_0} d\tau.
$$

Anche se lo non lo faremo, si può dimostrare che questo risultato è assolutamente generale, e l'espressione ricavata inizialmente nel caso di un'induttanza ne è semplicemente un caso particolare.
