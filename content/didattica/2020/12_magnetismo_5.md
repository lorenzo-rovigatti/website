+++
title = "Lezione del 26/11/2020"
date = 2020-11-23T14:19:34+01:00
draft = false
+++

### Fenomenologia del ferromagnetismo

La dipendenza delle permeabilità, o, analogamente, della suscettività, si trova misurando sperimentalmente il rapporto tra $\vec{H}$ e $\vec{M}$ oppure, equivalentemente, tra $\vec{H}$ e $\vec{B}$.

{{< figure src="../images/isteresi.png" width="400px">}}

Descriviamo brevemente la fenomenologia associata alle sostanze ferromagnetiche per $T < T_c$ considerando il caso di un mezzo in un solenoide indefinito di cui possiamo far variare la corrente. Partiamo da una porzione di materiale che non è mai stata a contatto con un campo magnetico (cioè si trova nello *stato vergine*). In queste condizioni, se $H = 0$ si deve chiaramente avere anche $M = 0$ (vedi figura sopra). Aumentando il valore del campo sale anche $M$, ma in maniera non lineare (curva **a**). Aumentando ancora $H$ si arriva ad un valore massimo della magnetizzazione detto *di saturazione* ($M\_{\rm sat}$). Per campi ancora maggiori $M$ resta costante e quindi $B$ aumenta linearmente con $H$: poiché la magnetizzazione ha raggiunto il valore massimo possibile, questo aumento è dovuto solamente all'aumento della corrente di conduzione. 

Se dopo aver raggiunto la saturazione si fa decrescere il campo, $M$ comincia a diminuire, ma scostandosi decisamente dal comportamento precedente (curva **b** in figura). Al diminuire di $H$, infatti, la magnetizzazione resta sempre ad un valore maggiore rispetto a prima. Per $H = 0$ la curva interseca l'asse per un valore positivo, ed è quindi presente una magnetizzazione non nulla $M_r$ detta *residua*. Poiché il materiale è magnetizzato anche in assenza di corrente si parla di *magnete permanente*, ed è il motivo per cui pezzi di ferro acquisiscono proprietà magnetiche dopo essere stati messi a contatto con un campo magnetico.

Per far sì che la magnetizzazione si annulli è necessario applicare un campo *coercitivo* $-H_c$ dovuto a correnti di verso *opposto* rispetto a quelle che hanno generato la magnetizzazione residua. Diminuendo ancora $H$ si arriva ad un valore di saturazione della magnetizzazione $-M\_{\rm sat}$, con una fenomenologia uguale a quella discussa per campi positivi.

Una volta raggiunta la saturazione, aumentando di nuovo $H$ si passa per gli stessi stati visti precendentemente: per $H = 0$ si ha una magnetizzazione residua $-M_r$, poi uno stato con magnetizzazione nulla per $H = H_c$ e poi si risale di nuovo fino a saturazione (curva **c**).

Il ciclo sopra descritto è chiamato *di isteresi* e può essere espresso sia graficando $M(H)$ che graficando $B(H)$. Se si arriva ogni volta a saturazione, il ciclo che si ottiene è sempre lo stesso. Per punti in cui $|M| < M\_{\rm sat}$, il rapporto tra $B$ ed $H$ non è costante ma funzione di $H$, e quindi lo sono anche $\kappa_m$, $\mu$ e $\chi_m$, che dipendono chiaramente dalla *storia* con cui è stato preparato il materiale.

Questa fenomenologia è comune a tutte quelle sostanze che, al variare di qualche parametro macroscopico (in questo il campo) subiscono una *transizione di fase del primo ordine*. Un altro esempio di isteresi si osserva in sistemi in cui è presente una transizione di fase liquido-gas. In questo caso al posto del campo c'è la pressione e al posto della magnetizzazione c'è la densità.

In generale, materiali diversi hanno cicli di isteresi diversi. I materiali si possono classificare in due macro-categorie:

* Materiali *duri*, che hanno grandi valori di magnetizzazione residua $M_r$ e campo coercitivo $H_c$ e quindi sono utili per costruire magneti permanenti.
* Materiali *dolci*, che hanno un ciclo di isteresi molto stretto, e cioè hanno valori bassi di $M_r$ e $H_c$ e quindi possono essere magnetizzati e smagnetizzati con facilità. Questa proprietà li rende buoni materiali per la costruzione di elettromagneti.

Quando un materiale ferromagnetico viene riscaldato a temperature superiori a quella di Curie, la suscettività magnetica è ben descritta dalla *seconda legge di Curie*:

$$
\chi_m = \frac{C \rho}{T - T_c},
$$

dove $\rho$ è la densità del materiale e $C$ una costante.

**Nota Bene:** $\vec{H}$ ed $\vec{M}$ sono misurati in A / m.

Il comportamento microscopico dei materiali ferromagnetici non può essere descritto classicamente. Si può però utilizzare una descrizione *mesoscopica* basata sul fatto che solitamente questi materiali contengono delle zone di dimensioni $10^{-4}$ - $10^{-6}$ m (o, equivalentemente, $10^{-12}$ - $10^{-18}$ m$^3$), detti *domini di Weiss*, che posseggono una magnetizzazione spontanea. Questi domini sono separati da delle zone di confine, dette *pareti di Bloch*, nelle quali la magnetizzazione passa con continuità da quella di un dominio a quella dei domini vicini. 

In generale, all'interno di una porzione macroscopica di materiale sono presenti tantissimi domini di Weiss che sono orientati casualmente. La magnetizzazione spontanea è quindi, in media, nulla. Quando viene applicato un campo magnetico, le pareti di Bloch si spostano e i domini orientati parallelamente al campo si ingrandiscono. All'aumentare dell'intensità del campo la taglia dei domini orientati lungo il campo aumenta a discapito degli altri finché non si raggiunge la *saturazione*: tutte le porzioni di materiale sono magnetizzate nella stessa direzione e quindi $\vec{M} = \vec{M}\_{\rm sat}$. 

Questo processo è, in generale, irreversibile: quando si spegne il campo le pareti di Bloch e i domini di Weiss originari non tornano allo stato iniziale e il materiale mantiene una parte di magnetizzazione ($\vec{M} = \vec{M}_r$), trasformando il materiale in un *magnete permanente*.

Il processo di magnetizzazione e smagnetizzazione di un materiale, graficamente esprimibile disegnando il ciclo di isteresi, comporta un certo lavoro che il generatore di corrente deve fornire al sistema. Questo lavoro viene *dissipato* all'interno del materiale proprio in virtù della natura *irreversibile* del processo, ed il materiale tenderà quindi a scaldarsi. Si può dimostrare che il lavoro per unità di volume speso durante un ciclo di isteresi è dato dall'area del ciclo stesso sul piano $B$-$H$. Notiamo infatti che

$$
[BH] = {\rm J / m^3}
$$

## Meccanismi di magnetizzazione
<small>MNV: paragrafo 7.6</small>

Analogamente al fenomeno della polarizzazione, i principali meccanismi di magnetizzazione sono due,

### Perturbazione del moto orbitale elettronico

Se consideriamo una descrizione classica dell'atomo, ogni elettrone che orbita intorno ad un atomo possiede un momento angolare classico. D'altro canto, un elettrone in movimento, essendo una carica, è equivalente ad una corrente. Poiché l'elettrone compie un'orbita chiusa il sistema può essere considerato come una spira avente un certo momento magnetico parallelo alla velocità angolare che, a sua volta, è parallela al momento angolare.
In presenza di un campo magnetico esterno questo moto viene perturbato, dando luogo a extracorrenti dovute alla *precessione di Larmor*: l'effetto di un campo magnetico sull'elettrone è di generare un moto circolare del momento angolare che dà luogo ad un dipolo aggiuntivo che genera un campo che, in forza della carica negativa dell'elettrone, si oppone al campo magnetico esterno.

### Magnetizzazione per orientamento

Se gli atomi o le molecole che compongono il materiale posseggono un momento magnetico *intrinseco*, in condizioni ordinarie il loro orientamento sarà casuale e non darà luogo ad alcun momento di dipolo magnetico macroscopico per effetto del disordine termico.

Se invece è presente un campo magnetico esterno, questo farà sì che gli atomi o le molecole tendano ad orientarsi lungo $\vec{H}$. 

In entrambi i casi una trattazione rigorosa richiederebbe di utilizzare argomenti di meccanica quantistica. 

Da un punto di vista microscopico il vettore magnetizzazione è dato, analogamente al vettore polarizzazione, dalla densità di momento magnetico medio ed è quindi definito come

$$
\vec{M} = n \langle \vec{m} \rangle
$$

dove $n$ è la densità *numerica* (cioè il numero di atomi o molecole per unità di volume) del materiale considerato e $\langle \vec{m} \rangle$ il momento magnetico medio per atomo/molecola.

La magnetizzazione è detta *uniforme* quando $\vec{M}$ è costante nel mezzo. Questo accade solitamente quando il campo esterno è anch'esso uniforme e il mezzo è composto di una sostanza dotata di simmetria spaziale, cioè una sostanza le cui proprietà sono *uniformi* nello spazio. 

Consideriamo un parallelepipedo di base quadrata magnetizzato uniformemente con magnetizzazione $\vec{M}$ diretta lungo l'asse $z$. Consideriamo una porzione del parallelepipedo alto $dh$. Se dividiamo questa porzione in prismetti, questi avranno altezza $dh$, area $d\Sigma$ e volume $d\tau$. Ogni prismetto avrà un momento magnetico dato da

$$
d\vec{m} = \vec{M} d\tau = M d\Sigma dh \hat{z}.
$$

Ricordando l'espressione del momento di dipolo di una spira, $\vec{m} = i\Sigma \hat{n}$, troviamo che ogni prismetto può essere considerato una spira quadrata in cui scorra corrente

$$
di_m = M dh.
$$

Disegnando una sezione del parallelepipedo è chiaro che le correnti che scorrono sui lati che sono condivisi tra prismetti vicini si annullano, poiché hanno verso opposto. Restano solo le correnti che scorrono sulla superficie laterale del parallelepipedo. La porzione di altezza $dh$ può essere quindi considerata come una spira quadrata in cui scorre la corrente $di_m$. Integrando lungo $z$, considerando che $M$ è costante, si ottiene 

$$
i_m = M h
$$

dove $h$ è l'altezza del parallelepipedo. Invertendo questa relazione si ha

$$
M = \frac{i_m}{h} \equiv j_m
$$

che fissa la relazione (almeno nel caso uniforme) tra $M$ e le *correnti amperiane*. In particolare, se introduciamo la densità lineare di corrente $j_m$, le due quantità risultano uguali in modulo. Per trovare la relazione vettoriale equivalente consideriamo un cilindro invece di un parallelepipedo. In questo caso è chiaro come si abbia

$$
\vec{j}_m = \vec{M} \times \hat{n}
$$

dove $\hat{n}$ è la normale alla superficie laterale del cilindro. Scritta in questa maniera risulta evidente come le correnti amperiane siano tangenti alla superficie del cilindro e abbiano verso coerente con la regola della mano destra (o della vite). 

Possiamo trovare una relazione equivalente applicando la legge di Ampère. Consideriamo un percorso chiuso che concateni la corrente $i_m$. Poiché $\vec{M} = 0$ al di fuori del cilindro e $\vec{M} = i_m / h$ all'interno, si trova immediatamente

$$
\oint \vec{M} \cdot d\vec{s} = i_m,
$$

che si può enunciare dicendo che la circuitazione di $\vec{M}$ è uguale alla somma delle correnti amperiane concatenate al percorso chiuso.

## La legge di Gauss per il campo magnetico
<small>MNV: paragrafo 7.7</small>

Abbiamo già visto come le linee di campo di $\vec{B}$ siano sempre chiuse, e il campo lungo di esse sia sempre orientato nello stesso verso. Questo aspetto può essere collegato immediatamente alle proprietà del flusso di $\vec{B}$ attraverso una superficie chiusa. Ricordiamo che il flusso di un campo vettoriale attraverso una superficie $\Sigma$ è definito come

$$
\Phi\_{\Sigma}(\vec{B}) = \int_{\Sigma} \vec{B} \cdot \hat{n} d\Sigma
$$

che, se la superficie è chiusa, si scrive come

$$
\Phi\_{\Sigma}(\vec{B}) = \oint_{\Sigma} \vec{B} \cdot \hat{n} d\Sigma.
$$

Consideriamo una superficie chiusa qualsiasi che racchiuda delle sorgenti del campo. Poiché non esistono monopoli magnetici, abbiamo solo due tipi di linee di campo:

1. linee che si trovano completamente all'interno della superficie, e che quindi non possono contribuire all'integrale;
2. linee che entrano nella superficie, ma che devono necessariamente uscirne in forza del fatto che sono linee chiuse. Il contributo totale della linea all'integrale è anche in questo nullo.

È quindi chiaro che il flusso totale di $\vec{B}$ attraverso qualunque superficie chiusa non possa che essere zero, cioè:

$$
\int_{\Sigma} \vec{B} \cdot \hat{n} d\Sigma = 0,
$$

nota come *legge di Gauss per il campo magnetico*. Utilizzando il teorema della divergenza si può scrivere anche la forma locale di questa legge:

$$
\vec{\nabla} \cdot \vec{B} = 0.
$$

Poiché le correnti amperiane si comportano in tutto e per tutto come correnti normali, questa relazione si estende al caso in cui queste sono presenti. Per esempio, abbiamo già visto come un cilindro di materiale magnetico inserito in un solenoide generi un campo del tutto equivalente a quello di un altro solenoide percorso da corrente $i_m = Mh = \chi_m H h$.

Per ricapitolare, consideriamo un cilindro magnetizzato e calcoliamo, disegnando le linee di campo di $\vec{B}$, il flusso attraverso due superfici diverse:

1. se la superficie non interseca il cilindro ma lo ingloba completamente, è chiaro dal disegno come si debba avere $\Phi(\vec{B}) = 0$;
2. se la superficie interseca il cilindro, per ritrovare lo stesso risultato pensiamo a quel che succede quando tagliamo in due un magnete permanente: ognuna delle due metà si comporta ancora come un magnete permanente. Alla stessa maniera, la superficie che consideriamo per il calcolo del flusso non può separare un magnete isolandone i poli perché, dal punto di vista sperimentale, non è possibile *separare* i due poli e quindi ottenere un monopolo magnetico, che infatti non è mai stato osservato.

La legge di Gauss per il campo magnetico è equivalente a quel che accade nel caso elettrostatico quando la superficie chiusa che consideriamo racchiude una carica totale $Q = 0$. In questo caso, infatti, per ogni linea di $\vec{E}$ che entra ve ne è una che esce. 

**Nota Bene:** il flusso del campo magnetico è una quantità molto importante nel contesto dell'elettromagnetismo ed ha una unità di misura propria detta *weber* (Wb), che vale Wb = Tm$^2$ = Vs.

I campi che hanno divergenza identicamente nulla, cioè per i quali il flusso attraverso una qualunque superficie chiusa è nullo, sono detti *campi solenoidali*. Questi campi posseggono la seguente proprietà interessante: consideriamo una linea chiusa $\mathcal{C}$ ed un verso di percorrenza. Prendiamo ora due superfici aperte $\Sigma_1$ e $\Sigma_2$ che abbiano come contorno $\mathcal{C}$ e che abbiano normali $\hat{n}_1$ e $\hat{n}_2$ orientate verso l'esterno. Dalla legge di Gauss è chiaro che il flusso totale attraverso la superficie chiusa formata da $\Sigma_1$ e $\Sigma_2$ debba essere nullo:

$$
\oint\_{\rm \Sigma_1 + \Sigma_2} \vec{B} \cdot \hat{n} d\Sigma = \int\_{\Sigma_1} \vec{B} \cdot \hat{n}_1 d\Sigma_1 + \int\_{\Sigma_2} \vec{B} \cdot \hat{n}_2 d\Sigma_2 = \Phi_1(\vec{B}) + \Phi_2(\vec{B}).
$$

Se consideriamo il verso di percorrenza di $\mathcal{C}$, le due normali sono orientate in maniera discorde, perché non possono soddisfare entrambe la regola della vite (o della mano destra). Se le prendiamo concordi, d'altro canto, troviamo che $\hat{n}'_1 = -\hat{n}_1$. Con questa definizione si trova

$$
\Phi'_1(\vec{B}) = -\Phi_1(\vec{B}) = \Phi_2(\vec{B}).
$$

Poiché $\Sigma_1$ e $\Sigma_2$ sono arbitrarie, troviamo che, fissata la curva $\mathcal{C}$, il flusso attraverso qualunque superficie che abbia $\mathcal{C}$ come contorno è lo stesso, purché la normale sia scelta concordemente al verso di percorrenza di $\mathcal{C}$. È chiaro quindi che il flusso del campo sia associabile alla linea più che alla superficie, e si parla quindi di *flusso concatenato alla linea chiusa*. 

## Equazioni generali della magnetostatica
<small>MNV: paragrafo 7.8</small>

Le relazioni precedenti, dalla legge di Ampère alla relazione tra $\vec{M}$ e $\vec{j}_m$ alla legge di Gauss, hanno carattere generale anche se ottenute in casi specifici.

Consideriamo ora un percorso chiuso $\mathcal{C}$ che concateni sia correnti di conduzione che correnti amperiane. In questo caso la legge di Ampère si scrive

$$
\oint \vec{B} \cdot d\vec{s} = \mu_0 (i + i_m).
$$

Abbiamo visto che le correnti amperiane si possono scrivere come

$$
\oint \vec{M} \cdot d\vec{s} = i_m,
$$

e quindi

$$
\oint \vec{B} \cdot d\vec{s} = \mu_0 \left( i + \oint \vec{M} \cdot d\vec{s} \right).
$$

Ricordando che $\vec{B} = \mu_0 (\vec{H} + \vec{M})$, si trova che

$$
\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}
$$

e quindi 

$$
\oint \vec{H} \cdot d\vec{s} = i,
$$

che è la legge di Ampère per il campo $\vec{H}$. Come per la legge di Gauss per il campo $\vec{D}$ in presenza di dielettrici, anche questa relazione non contiene contributi dei mezzi magnetizzati eventualmente presenti, che ovviamente vanno considerati se si vuole calcolare il campo magnetico $\vec{B}$.

La legge di Ampère e la legge di Gauss per il campo magnetico (in forma integrale o locale) sono le leggi fondamentali della magnetostatica. Notiamo la simmetria con le due leggi fondamentali della elettrostatica. Nella versione nel vuoto:

\begin{align}
\vec{\nabla} \times \vec{E} = 0 \qquad & \vec{\nabla} \times \vec{B} = \mu_0 \vec{j}\\\\\\
\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\epsilon_0} \qquad & \vec{\nabla} \cdot \vec{B} = 0
\end{align}

e nella versione in presenza di dielettrici e mezzi magnetizzati:

\begin{align}
\vec{\nabla} \times \vec{D} = 0 \qquad & \vec{\nabla} \times \vec{H} = \vec{j}\\\\\\
\vec{\nabla} \cdot \vec{D} = \rho \qquad & \vec{\nabla} \cdot \vec{H} = 0
\end{align}
