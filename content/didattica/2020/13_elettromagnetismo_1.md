+++
title = "Lezione del 02/12/2020"
date = 2020-11-27T07:19:34+01:00
draft = false
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

* si prenda una spira collegata ad un galvanometro e un magnete. Si trova che avvicinando o allontanando il magnete dalla spira il galvanometro misurerà una corrente positiva o negativa.
* Si prenda una spira collegata ad un galvanometro e la si ponga vicino ad un solenoide di lunghezza finita e nucleo di ferro (per amplificare l'intensità del campo). Il solenoide è collegato ad un generatore tramite un interruttore. Si trova che il galvanometro misurerà una corrente solamente per periodi di tempo molto brevi che seguono l'apertura o la chiusura del circuito solenoide-generatore. Questi periodi in cui la corrente è diversa da zero coincidono con i periodi durante i quali il campo magnetico generato dal solenoide varia nel tempo.

La mole di dati estratti da questi e molti altri esperimenti si può riassumere nella *legge di Faraday*: se $\mathcal{C}$ è un percorso chiuso, la circuitazione del campo elettrico lungo $\mathcal{C}$ è legata alla derivata temporale del flusso magnetico concatenato a $\mathcal{C}$ dalla relazione:

$$
\oint_\mathcal{C} \vec{E} \cdot d\vec{s} = - \frac{d\Phi_\mathcal{C}(\vec{B})}{dt}.
$$

Ricordando che la forza elettromotrice è definita come la circuitazione del campo elettrico:

$$
\mathcal{E} = \oint_\mathcal{C} \vec{E} \cdot d\vec{s},
$$

si ottiene

$$
\mathcal{E}_i = - \frac{d\Phi_\mathcal{C}(\vec{B})}{dt}.
$$

Se $\mathcal{C}$ identifica un circuito di resistenza $R$, in esso circolerà una corrente *indotta* (dovuta alla forza elettromotrice)

$$
i = \frac{\mathcal{E}_i}{R} = - \frac{1}{R} \frac{d\Phi_\mathcal{C}(\vec{B})}{dt}.
$$

D'altro canto, se il circuito è aperto e collegato ad un voltmetro, quest'ultimo misurerà una differenza di potenziale

$$
\Delta V = \mathcal{E}_i = -\frac{d\Phi_\mathcal{C}(\vec{B})}{dt}.
$$

La forza elettromotrice dovuta alla variazione di flusso si comporta quindi come un generatore di tensione. 

È chiaro che il campo $\vec{E}$ non può essere di natura elettrostatica perché non ha circuitazione nulla, e non è quindi conservativo: è proprio questa natura non conservativa del campo che consente di generare una corrente in un circuito.

### Legge di Lenz

Il segno meno davanti alla derivata del flusso nella legge di Faraday è così importante da prendere il nome di legge di Lenz. Questa afferma che l'effetto della forza elettromotrice indotta dalla variazione di flusso di $\vec{B}$ è tale da opporsi alla causa che l'ha generata:

* Se il flusso aumenta nel tempo, la forza elettromotrice è negativa e la corrente indotta genererà, a sua volta, un flusso che tenderà a *contrastare* l'ulteriore aumento di $\Phi(\vec{B})$.
* se il flusso diminuisce nel tempo, la forza elettromotrice è positiva e la corrente indotta genererà, a sua volta, un flusso che tenderà ad aumentare $\Phi(\vec{B})$.

Ad esempio, prendiamo un campo magnetico diretto parallelamente alla normale di una spira. Se il campo magnetico è variabile nel tempo, lo è anche il flusso concatenato con la spira. Applicando la legge di Faraday troviamo che se il campo aumenta di intensità il flusso aumenta, e questo aumento genererà una corrente indotta il cui verso sara tale da generare un flusso negativo che si opporrà a un ulteriore aumento. Viceversa in caso di flusso del campo decrescente.

Questa proprietà della legge di Faraday è un aspetto particolare del principio di conservazione dell'energia. Per capirlo, prendiamo due fili indefiniti paralleli. Se in uno dei due scorre una corrente dipendente dal tempo, questa genera un campo magnetico il cui flusso concatenato con l'altro varia nel tempo, inducendo quindi una corrente nel secondo filo. Se questa corrente fosse nella stessa direzione della prima, un meccanismo di rinforzo positivo contribuirebbe a generare correnti sempre maggiori nei fili, in aperta violazione del principio di conservazione dell'energia. Ne deriva che la corrente debba avere verso opposto.

## Origine del campo elettrico indotto
<small>MNV: paragrafo 8.2</small>

Consideriamo la legge di Faraday, esplicitando la definizione di flusso:

$$
\mathcal{E}_i = \oint\_{\mathcal{C}(t)} \vec{E}_i \cdot d\vec{s} = - \frac{d\Phi\_{\mathcal{C}(t)}(\vec{B})}{dt} = - \frac{d}{d t} \int\_{\Sigma(t)} \vec{B}(t) \cdot \hat{n} d\Sigma
$$

dove $\mathcal{C}(t)$ è la linea chiusa che stiamo considerando (e che potrebbe variare nel tempo), mentre $\Sigma(t)$ è una qualsiasi superficie che ha $\mathcal{C}(t)$ come contorno. È chiaro che la forza elettromotrice risultante contiene due contributi dovuti a

* la dipendenza temporale della linea chiusa (e quindi della superficie associata);
* la dipendenza temporale del campo.

Possiamo dimostrare esplicitamente la legge di Faraday nel primo caso considerando un circuito rettangolare posto sul piano ortogonale ad un campo magnetico uniforme $\vec{B}$ di verso uscente. Un lato del circuito è composto da una sbarretta conduttrice mobile. Se viene messa in moto con velocità $\vec{v}$ parallela ad $\hat{x}$, sugli elettroni agirà una forza di Lorentz $\vec{F} = -e \vec{v} \times \vec{B}$. Poiché la forza di Lorentz è *proporzionale* alla carica della particella ed all'inizio del corso abbiamo definito il campo elettrico in termini di forza e carica come $\vec{E} = \vec{F} / q$,  possiamo pensare a questa forza come una forza generata da un campo *elettromotore* 

$$
\vec{E}_i = \frac{\vec{F}}{-e} = \vec{v} \times \vec{B}.
$$

Questo risultato si può anche ottenere formalmente riscrivendo la derivata totale rispetto al tempo del flusso del campo magnetico calcolato su di una superficie che dipende essa stessa dal tempo.

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

## Applicazioni della legge di Faraday
<small>MNV: paragrafo 8.3</small>

### Generatore di corrente

Consideriamo un circuito con sbarretta mobile, simile a quello discusso prima, immerso in un campo magnetico uniforme. Se manteniamo la velocità della sbarretta costante, nel circuito scorrerà una corrente

$$
i = \frac{\mathcal{E}_i}{r + R}
$$

dove $r$ ed $R$ sono le resistenze della sbarretta e del circuito. Siamo quindi nella situazione in cui la sbarretta sente una forza magnetica (dovuta alla forza di Lorentz agente sugli elettroni al suo interno)

$$
\vec{F}_m = i \vec{b} \times \vec{B} = - \frac{B^2 b^2}{r + R} \vec{v}
$$

che quindi si *oppone* al moto. Questa forza, di tipo viscoso perché proporzionale alla velocità, è detta *attrito elettromagnetico*. Per far sì che, nonostante questo attrito, la sbarretta si muova con una velocità costante sarà necessario applicare una forza esterna uguale e contraria ad $\vec{F}_m$. Dobbiamo quindi fornire una certa energia per unità di tempo per tenere in moto la sbarretta, equivalente alla potenza

$$
\mathcal{P} = \frac{dW}{dt} = \frac{F\_{\rm ext} v dt}{dt} = F\_{\rm ext} v = \frac{B^2 b^2 v^2}{r + R} = \mathcal{E}_i i.
$$

Il dispositivo così descritto è chiaramente un *generatore di corrente*, cioè uno strumento in grado di convertire direttamente una forza (ad esempio di tipo meccanico) in una corrente.

### Generatore di corrente alternata

Possiamo utilizzare lo stesso principio applicato ad una spira rotante per generare una corrente alternata. Consideriamo una spira in una regione di spazio in cui è presente un campo magnetico uniforme. Se la spira ruota con velocità angolar costante $\omega$ intorno ad un asse ortogonale al campo, il flusso magnetico che la attraversa vale

$$
\Phi(\vec{B}) = B \Sigma \cos \theta = B \Sigma \cos (\omega t)
$$

e quindi la forza elettromotrice vale

$$
\mathcal{E}_i = - \frac{d\Phi(\vec{B})}{dt} = \omega B \Sigma \sin (\omega t)
$$

che, se la spira ha resistenza $R$, induce la corrente

$$
i = \frac{\mathcal{E}_i}{R} = \frac{\omega B \Sigma \sin (\omega t)}{R}
$$

che quindi oscilla in fase con la spira. Come per il caso della sbarretta, anche in questo caso per mantenere $\omega$ costante sarà necessario spendere potenza (ad esempio meccanica), che verrà quindi convertita in potenza elettrica. Questo è il principio alla base degli *alternatori*.

### Correnti di Foucault

Se un oggetto conduttore si trova in una regione di spazio in cui il campo magnetico è variabile (perché $\vec{B}$ non è costante nel tempo o perché non è omogeneo e il conduttore è in movimento), si troverà attraversato da correnti indotte che, percorrendolo, lo scalderanno. Questo effetto è alla base di diverse tecnologie, sia industriali (*forni a induzione*) che non (*fornelli ad induzione*).

Le correnti dovute a questo effetto sono dette *parassite* o di Foucault (*eddy currents* in inglese) e sono alla base dei freni elettromagnetici, che si basano sull'effetto di attrito elettromagnetico visto prima: utilizzando un elettromagnete che si può accendere o spegnere a piacimento è possibile generare correnti parassite all'interno, ad esempio, di un disco o di una ruota di un treno, con conseguente aumento dell'attrito e quindi diminuzione della velocità. Controllando l'intensità del campo generato dall'elettromagnete è possibile controllare l'attrito e quindi l'efficacia del freno.

Lo stesso concetto di correnti parassite è alla base del funzionamento dei *metal detector*. Questi dispositivi generano campi magnetici variabili nel tempo che possono indurre correnti parassite in oggetti metallici posti nelle vicinanze. Queste correnti parassite, a loro volta, generano un campo magnetico che, se misurato, ne rivela la presenza.

### Misure di campo magnetico

Una bobina composta da $N$ spire immersa in un campo magnetico è percorsa da una corrente $i$ che dipende solamente dalla variazione del flusso di campo magnetico e dalla resistenza $R$ che possiede. La carica che fluisce nella spira tra $t_1$ e $t_2$ è data da

$$
q = \int\_{t_1}^{t_2} dq = \int\_{t_1}^{t_2} i(t) dt = - \frac{1}{R} \int\_{\Phi_1}^{\Phi_2} d\Phi = \frac{\Phi_1 - \Phi_2}{R},
$$

e dipende quindi solo dalla differenza dei flussi iniziale e finale. Se la bobina ha dimensioni abbastanza piccole da poter considerare il campo magnetico uniforme sulla sua superficie e viene orientata in maniera che il suo momento di dipolo magnetico sia parallelo al campo, il flusso iniziale vale semplicemente

$$
\Phi_1 = N B \Sigma
$$

dove $\Sigma$ è la superficie della bobina. Se spostiamo la bobina in una zona di senza campo magnetico, la quantità di carica che passa nella bobina sarà pari a

$$
q = \frac{\Phi_1}{R} = \frac{NB\Sigma}{R},
$$

che possiamo utilizzare per misurare il valore del modulo del campo magnetico:

$$
B = \frac{qR}{N\Sigma}.
$$
