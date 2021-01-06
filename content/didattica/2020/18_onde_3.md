+++
title = "Lezione del 12/01/2021"
date = 2021-01-06T07:19:34+01:00
draft = false
+++

## Interferenza da lamine sottili
<small>MNV: parte del paragrafo 13.3</small>

Uno dei fenomeni di interferenza più facili da osservare è la cosiddetta *interferenza da lamine sottili* (*thin-film interference* in inglese), che si verifica quando la luce (di solito solare) si riflette sulle due superfici di sottili strati di materiale trasparente come olio, sapone o acqua. L'effetto iridescente che si può osservare è dovuto ad un fenomeno di interferenza analogo a quello dell'esperimento di Young.

Semplifichiamo il fenomeno considerando una lamina sottile (di spessore $d$) di un materiale con indice di rifrazione $n$ immersa in aria ($n\_{\rm aria} \approx 1$). Consideriamo un raggio di luce incidente con angolo $\theta_i$. Parte dell'intensità verrà riflessa dal primo strato. Parte dell' onda che viene trasmessa verrà rifratta e poi riflessa dalla seconda superficie. Una volta raggiunta la prima superficie, parte di quest'onda verrà nuovamente rifratta e rientrerà nel primo mezzo (aria) parallelamente all'onda riflessa inizialmente. Queste due onde riflesse contengono la maggior parte dell'intensità dell'onda iniziale, e quindi possiamo ignorare i contributi dati dai raggi generati da riflessioni e rifrazioni ulteriori. 

In queste condizioni i due punti da cui hanno origine le due onde riflesse possono essere considerate sorgenti coerenti, in quanto prodotte dalla stessa sorgente (il raggio di luce incidente). Calcoliamo ora la differenza di fase $\delta$ tra le due onde, che può essere vista come la somma di due contributi: uno dovuto alla differenza di cammino delle due onde, che calcoleremo, e l'altro dovuto al fatto che la prima onda riflessa viene sfasata di $\pi$. Infatti, un risultato noto (che non dimostreremo) che si trova a partire dalle equazioni di Maxwell afferma come un'onda che viene riflessa da una superficie appartenente ad un mezzo avente indice di rifrazione maggiore di quello in cui l'onda si propaga riceve uno sfasamento di $\pi$. In altre parole, il verso del campo elettrico dopo la riflessione si inverte. Nel caso opposto, quando cioè un'onda viene riflessa da una superficie appartenente ad un mezzo avente indice di rifrazione minore, non si osserva alcuno sfasamento. 

Utilizzando la nomenclatura introdotta per l'esperimento di Young, troviamo come lo spazio percorso dall'onda rifratta all'interno della lamina sia

$$
r_2 = \frac{2d}{\cos \theta_t}
$$

e quindi la differenza di fase dovuta alla percorrenza di questa distanza è

$$
\delta_2 = k_t r_2 = \frac{2 knd}{\cos \theta_t}.
$$

D'altro canto, l'onda riflessa inizialmente compie un percorso 

$$
r_1 = h \sin \theta_i,
$$

dove $h$ è la distanza tra i punti dove i due raggi toccano la superficie superiore e può essere scritta in funzione di $\theta_t$ come

$$
h = r_2 \sin \theta_t
$$

e quindi si trova

$$
r_1 = \frac{2d \sin \theta_t}{\cos \theta_t} \sin \theta_i.
$$

Utilizzando la legge di Snell, per cui $\sin \theta_i = n \sin \theta_t$, si trova

$$
r_1 = \frac{2dn}{\cos \theta_t} \sin^2 \theta_t.
$$

e quindi la differenza di fase dovuta a questo percorso è

$$
\delta_1 = k r_1 = \frac{2knd}{\cos \theta_t} \sin^2 \theta_t.
$$

La differenza di fase totale è quindi

$$
\delta = \delta_2 - \delta_1 - \pi = 2 k n d \cos \theta_t - \pi
$$

che, nel caso in cui $\theta_i$, sia molto piccolo, diventa

$$
\delta = 2 k n d - \pi = \frac{4 \pi n d}{\lambda} - \pi.
$$

Similmente al caso di Young, si ottiene il massimo di intensità quando, se $m$ è un qualsiasi numero intero, $\delta = 2 m \pi$ (cioè $d = \frac{\lambda (2m + 1)}{4n}$, mentre la condizione $\delta = (2m + 1) \pi$ (cioè $d = \frac{\lambda m}{2n}$) è legata ai minimi di intensità. Questo significa che, a parità di $d$, alcune lunghezze d'onda saranno più visibili di altre. Questo fa sì che sulla superficie si generi un effetto iridescente, come quello che si osserva, ad esempio, sulle bolle di sapone:

{{< figure src="../images/thin_film_interference.jpg" alt="L'nterferenza da lamine sottili in azione!" width="50%">}}

## Diffrazione
<small>MNV: paragrafo 14.1</small>

La diffrazione è un caso particolare di interferenza per cui un'onda interferisce con se stessa dopo essere passata per strette fenditure oppure aver incontrato ostacoli di dimensioni comparabili con la sua lunghezza d'onda. Consideriamo un'onda che incontri un ostacolo opaco avente un bordo netto. Uno schermo posto oltre l'ostacolo mostrerà una *figura di diffrazione* formata da frange chiare e scure che si fanno via via più strette. È interessante notare che l'intensità luminosa che appare sulla parte di schermo posta dietro all'ostacolo non è nulla come avverrebbe se le onde si propagassero esclusivamente in linea retta. La diffrazione infatti, come l'interferenza, è un fenomeno legato alla natura *ondulatoria* della luce.

Il comportamento dell'onda, e la figura di diffrazione che ne risulta, possono essere analizzati utilizzando il principio di Huygens-Fresnel.

### Principio di Huygens-Fresnel (cenni)
<small>MNV: paragrafo 11.2</small>

Il principio di Huygens-Fresnel afferma che tutti i punti che compongono un dato fronte d'onda possono essere considerati sorgenti puntiformi di onde sferiche secondarie aventi frequenza, lunghezza d'onda e velocità di propagazione uguali a quelle dell'onda primaria. La posizione del fronte d'onda dopo un tempo $\Delta t$ è data dalla superficie tangente a queste onde secondarie.

Questo principio serve a prevedere la posizione del fronte d'onda nel caso in cui siano presenti ostacoli o fenditure lungo la direzione di propagazione.

## Diffrazione di Fraunhofer
<small>MNV: paragrafo 14.2</small>

Esistono diversi modi con cui i fenomeni di diffrazione possono essere prodotti. Qui ci concentreremo sulla *diffrazione di Fraunhofer*, in cui sia la sorgente dell'onda che lo schermo su cui si forma la figura di diffrazione sono posti a grande distanza dalle fenditure o dagli ostacoli che generano la diffrazione stessa.

Consideriamo una parete con un'unica fenditura di larghezza $a$. Dividiamo (arbitrariamente) la fenditura in $2 m$ parti (con $m \geq 1$). Secondo il principio di Huygens-Fresnel, ogni parte si comporterà come una sorgente di luce. Ragionando in questa maniera, la figura di diffrazione non è altro che una figura di interferenza dovuta alle diverse parti della fenditura. Consideriamo tutti i raggi (secondari) che escono dalla fenditura con un angolo $\theta$. Consideriamo le onde generate da sorgenti vicine, poste quindi a distanza $a / 2m$: la differenza tra i loro percorsi è 

$$
\Delta r = \frac{a}{2m} \sin \theta.
$$

Si ha una interferenza *distruttiva* quando questa quantità è uguale alla metà della lunghezza d'onda, $\Delta r = \lambda / 2$, perché in questo caso le due onde arrivano nello stesso punto sfasate di $\pi$. Si trova quindi la condizione 

$$
\sin \theta = \frac{m\lambda}{a}.
$$

Dove $m$ è un qualsiasi intero *diverso da zero* (ricordiamo che $2 m$ è il numero di parti in cui abbiamo diviso virtualmente la fenditura, che quindi non può essere zero). Poiché $m \neq 0$, si ha che per $\theta = 0$ non abbiamo un minimo di intensità. In particolare, si può calcolare direttamente l'intensità in funzione di $\theta$, che risulta essere

$$
I(\theta) = I\_{\rm max} \left[ \frac{\sin (\pi a \sin \theta / \lambda)}{\pi a \sin \theta / \lambda} \right]^2.
$$

Questa espressione mostra come l'intensità sia una funzione sì oscillante, ma il cui modulo decresce all'aumentare di $\theta$. Inoltre, $I(\theta)$ ha un massimo per $\theta = 0$, mentre i minimi sono dati dall'espressione trovata precedentemente. Gli altri massimi di questa funzione sono dati dalla condizione $\tan \alpha = \alpha$, non risolvibile analiticamente ma solo numericamente. 

Si può dimostrare come la maggior parte della potenza sia concentrata nella fascia centrale, che viene anche detta *immagine della fenditura*.

### Effetti cromatici
<small>MNV: esempio 14.2</small>

È chiaro dalle relazioni ricavate precedentemente che le figure di diffrazione dipendono, a parità di apparato sperimentale utilizzato, dalla lunghezza d'onda della luce incidente. Poiché la maggior parte dell'intensità è sempre concentrata nella frangia centrale, indipendentemente da $\lambda$, il pattern di diffrazione sarà bianco nel centro. D'altro canto, al variare di $\theta$ le posizioni dei minimi di intensità dipenderanno da $\lambda$, e quindi spostandosi dal punto bianco centrale si osserveranno frange colorate. Poiché la distanza del minimo dal centro aumenta con la lunghezza d'onda, la prima frangia colorata diventerà sempre più rossa all'aumentare di $\theta$. 

## Diffrazione prodotta da un'apertura circolare
<small>MNV: paragrafo 14.3</small>

Quando la fenditura attraversata dalla luce è di forma circolare, la figura di diffrazione acquista una simmetria radiale. Dal punto di vista qualitativo le frange che si osservano solo molto simili a quelle del caso rettilineo, anche se la dimostrazione analitica è più complicata. Un risultato importante è che l'angolo $\theta$ per il quale si osserva il primo minimo dell'intensità è dato dalla relazione

$$
\sin \theta = 0.61 \frac{\lambda}{R}
$$

dove $R$ è il raggio dell'apertura. Se, come spesso accade, $\lambda \ll R$, la relazione precedente si può approssimare:

$$
\theta \approx 0.61 \frac{\lambda}{R}.
$$

Si definisce in questo caso $2\theta$ come la larghezza angolare del massimo centrale. Anche in questo caso la maggior parte dell'intensità dell'onda è concentrata nella "frangia" (cioè cerchio) centrale, che viene detto *immagine* dell'apertura circolare.

Questi risultati si applicano anche al caso in cui la fenditura venga sostituita da una lente di raggio $R$. L'immagine di una sorgente puntiforme molto lontana sarà quindi data non da un punto, ma da un disco di dimensioni finite: la dimensione angolare è chiaramente la quantità $2 \theta$ calcolata precedentemente, che equivale ad una dimensione lineare $d = 2 \theta L$, dove $L$ è la distanza della lente dallo schermo. 

## Limite di risoluzione delle lenti
<small>MNV: paragrafo 14.4</small>

Quest'ultimo fenomeno fa sì che non sia possibile distinguere oggetti più vicini di una certa distanza. Questo limite *intrinseco* è dovuto alla natura ondulatoria della luce. Consideriamo due sorgenti di luce incoerenti poste a grande distanza da una singola fenditura. Prese individualmente, le immagini delle due sorgenti sono dei pattern di diffrazione aventi dei massimi centrali di una certa larghezza angolare. Quando sono presenti entrambe, a seconda della distanza reciproca, le immagini delle due sorgenti si possono sovrapporre in misura diversa. Secondo il criterio di Rayleigh, se la distanza è tale per cui il massimo di un'immagine si trova sul minimo dell'altra, le due immagini si dicono *appena risolte*. Se la distanza è minore i massimi si sovrappongono così tanto da rendere impossibile distinguere i due contributi: le immagini non sono risolte. Nell'approssimazione $\sin \theta \approx \theta$, l'angolo minimo che permette di risolvere le due immagini è

$$
\alpha\_{\rm min} = \frac{\lambda}{a}
$$

nel caso di una fenditura lineare e

$$
\alpha\_{\rm min} = 0.61 \frac{\lambda}{R}
$$

nel caso di una fenditura circolare. Nel caso in cui si abbia a che fare con delle lenti, si definisce *potere risolutivo* di una lente la quantità

$$
\rho = \frac{1}{\alpha\_{\rm min}}.
$$

Questa limitazione pone seri limiti alle osservazioni che è possibile fare utilizzando microscopi, lenti fotografiche e telescopi. 
