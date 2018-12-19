+++
title = "Lezione 13/12/2018"
date = 2018-12-11T07:19:34+01:00
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

## Campi elettrici e magnetici variabili nel tempo

* Cariche elettriche fisse generano il campo elettrostatico conservativo $\vec{E}$.
* Cariche elettriche in moto stazionario generano il campo magnetico solenoidale $\vec{B}$.

Note le sorgenti dei campi e le condizioni al contorno (presenza di materiali dielettrici o magnetici *etc.*), le equazioni di Maxwell per i campi statici ci permettono di calcolare indipendentemente $\vec{E}$ e $\vec{B}$. I due campi sono, a questo livello, indipendenti l'uno dall'altro. 

A metà del XIX secolo esperimenti condotti da Faraday e da Henry dimostrarono una connessione più stretta tra i due campi:

* un campo magnetico variabile nel tempo genera un campo elettrico non conservativo; un fenomeno simile avviene nel caso in cui un conduttore si muova all'interno di un campo magnetico costante.
* Un campo elettrico variabile genera un campo magnetico.

I due campi sono quindi differenti aspetti legati allo stesso concetto di *campo elettromagnetico*.

## Legge di Faraday
<small>MNV: paragrafo 8.1</small>

Consideriamo i due esperimenti seguenti:

* si prenda una spira collegata ad un galvanometro ed un magnete. Si trova che avvicinando o allontanando il magnete dalla spira il galvanometro misurerà una corrente positiva o negativa.
* Si prenda una spira collegata ad un galvanometro e la si ponga vicino ad un solenoide di lunghezza finita e nucleo di ferro (per amplificare l'intensità del campo). Il solenoide è collegato ad un generatore tramite un interruttore. Si trova che il galvanometro misurerà una corrente solamente per periodi di tempo molto brevi che seguono l'apertura o la chiusura del circuito solenoide-generatore. Questi periodi in cui la corrente è diversa da zero coincidono con i periodi durante i quali il campo magnetico generato dal solenoide varia nel tempo.

La mole di dati estratti da questi e molti altri esperimenti si può riassumere nella *legge di Faraday*: se $\mathcal{C}$ è un percorso chiuso, la circuitazione del campo elettrico lungo $\mathcal{C}$ è legata alla derivata temporale del flusso magnetico concatenato a $\mathcal{C}$ dalla relazione:

$$
\mathcal{E}_i = - \frac{d\Phi(\vec{B})}{dt},
$$

ricordando che la forza elettromotrice è definita come la circuitazione del campo elettrico:

$$
\mathcal{E} = \oint \vec{E} \cdot d\vec{s}.
$$

Se $\mathcal{C}$ identifica un circuito di resistenza $R$, in esso circolerà una corrente *indotta*

$$
i = \frac{\mathcal{E}}{R} = - \frac{1}{R} \frac{d\Phi(\vec{B})}{dt}.
$$

D'altro canto, se il circuito è aperto e collegato ad un voltmetro, quest'ultimo misurerà una differenza di potenziale

$$
\Delta V = \mathcal{E} = -\frac{\Phi(\vec{B})}{dt}.
$$

La forza elettromotrice dovuta alla variazione di flusso si comporta quindi come un generatore di tensione. 

È chiaro che il campo $\vec{E}$ non può essere di natura elettrostatica perché ha circuitazione nulla, e non è quindi conservativo: è proprio questa natura non conservativa del campo che consente di generare una corrente in un circuito.

### Legge di Lenz

Il segno meno davanti alla derivata del flusso nella legge di Faraday è così importante da prendere il nome di legge di Lenz. Questa afferma che l'effetto della forza elettromotrice indotta dalla variazione di flusso di $\vec{B}$ è tale da opporsi alla causa che l'ha generata:

* Se il flusso aumenta nel tempo, la forza elettromotrice è negativa e la corrente indotta genererà, a sua volta, un flusso che tenderà a *contrastare* l'ulteriore aumento di $\Phi(\vec{B})$.
* se il flusso diminuisce nel tempo, la forza elettromotrice è positiva e la corrente indotta genererà, a sua volta, un flusso che tenderà ad aumentare $\Phi(\vec{B})$.

Ad esempio, prendiamo un campo magnetico diretto parallelamente al momento magnetico di una spira. Se il campo magnetico è variabile nel tempo, lo è anche flusso concatenato con la spira. Applicando la legge di Faraday troviamo che se il campo aumenta di intensità, il flusso aumenta,  la corrente indotta gira in verso antiorario e genera quindi un flusso negativo che si oppone ad un ulteriore aumento. Viceversa in caso di flusso del campo decrescente.

Questa proprietà della legge di Faraday è un aspetto particolare del principio di conservazione dell'energia. Per capirlo, prendiamo due fili indefiniti paralleli. Se in uno dei due scorre una corrente dipendente dal tempo, questa genera un campo magnetico il cui flusso concatenato con l'altro varia nel tempo, inducendo quindi una corrente nel secondo filo. Se questa corrente fosse nella stessa direzione della prima, un meccanismo di rinforzo positivo contribuirebbe a generare correnti sempre maggiori nei fili, in aperta violazione del principio di conservazione dell'energia. Ne deriva che la corrente debba avere verso opposto.

## Origine del campo elettrico indotto
<small>MNV: paragrafo 8.2</small>

Consideriamo la legge di Faraday, esplicitando la definizione di flusso:

$$
\mathcal{E}_i = \oint\_{\mathcal{C}(t)} \vec{E}_i \cdot d\vec{s} = - \frac{d\Phi(\vec{B})}{dt} = - \frac{d}{dt} \int\_{\Sigma(t)} \vec{B}(t) \cdot \hat{n} d\Sigma
$$

dove $\mathcal{C}(t)$ è la linea chiusa che stiamo considerando (e che potrebbe variare nel tempo), mentre $\Sigma(t)$ è una qualsiasi superficie che ha $\mathcal{C}(t)$ come contorno. È chiaro che la forza elettromotrice risultante contiene due contributi dovuti a

* la dipendenza temporale della linea chiusa (e quindi della superficie associata);
* la dipendenza temporale del campo.

Possiamo dimostrare esplicitamente la legge di Faraday nel primo caso considerando un circuito rettangolare posto sul piano ortogonale ad un campo magnetico uniforme $\vec{B}$. Un lato del circuito è composto da una sbarretta conduttrice mobile. Se viene messa in moto con velocità $\vec{v}$, sugli elettroni agirà una forza di Lorentz $\vec{F} = -e \vec{v} \times \vec{B}$. Poiché agisce solo su particelle cariche, possiamo pensare questa forza come generata da un campo *elettromotore* 

$$
\vec{E}_i = \frac{\vec{F}}{-e} = \vec{v} \times \vec{B}.
$$

Se la sbarretta ha altezza $b$ e si muove lungo $x$, la circuitazione del campo elettromotore (calcolata in senso antiorario) è

$$
\mathcal{E}_i = \oint\_{\rm circuito} \vec{E}_i \cdot d\vec{s} = \oint\_{\rm circuito} \vec{v} \times \vec{B} \cdot d\vec{s} = \int\_{\rm sbarretta} vB dy = - v B b
$$

dove il segno meno è dovuto al verso con cui il circuito è percorso e indica che la forza elettromotrice genererà una corrente che scorre in verso orario. Dimostriamo che l'espressione precedente è uguale a quella che si ottiene con la legge di Faraday. Il flusso del campo è

$$
\Phi(\vec{B}) = \oint\_{\rm circuito} \vec{B} \cdot \hat{n} d\Sigma = B b x
$$

e quindi, applicando la legge di Faraday,

$$
\mathcal{E}_i = - \frac{d\Phi(\vec{B})}{dt} = - B b \frac{dx}{dt} = -B b v.
$$

L'uguaglianza delle due espressioni, qui ricavata per un caso specifico, è un risultato generale che si estende al caso di qualunque circuito in movimento in presenza di un campo magnetico costante. In tutti questi casi la forza elettromotrice indotta è un effetto della forza di Lorentz che agisce sugli elettroni presenti nei conduttori.

La seconda causa di induzione è quella dovuta a campi magnetici non costanti (cioè variabili nel tempo). Consideriamo una linea chiusa (e quindi una superficie su cui calcolare il flusso di $\vec{B}$) che non varia nel tempo. Se questa linea chiusa coincide con un circuito, i risultati sperimentali discussi all'inizio di questa lezione dimostrano come gli elettroni all'interno dei conduttori si mettano in moto in forza della variazione di campo magnetico. Questo è possibile solo in presenza di un campo elettrico che non può che essere generato proprio dalla variazione di flusso di campo magnetico. 
È importante notare come questo effetto *non richiede* che $\mathcal{C}$ coincida con un circuito. In ogni punto dello spazio in cui è presente un campo magnetico variabile, infatti, quest'ultimo genererà un campo elettromotore (non conservativo) indotto. Questo effetto può essere utilizzato, ad esempio, per costruire particolari acceleratori di particelle detti betatroni.

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
