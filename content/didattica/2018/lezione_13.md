+++
title = "Lezione 29/11/2018"
date = 2018-11-29T07:19:34+01:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
caption = ""

+++

### Solenoide

Un solenoide è un filo conduttore avvolto in molte spire parallele. Il caso più semplice (e anche più comune) è quello di solenoide *cilindrico*, in cui il filo è avvolto in forma di elica cilindrica di raggio $R$. Indichiamo con $N$ il numero di spire e con $d$ la lunghezza del solenoide. Di solito il passo dell'elica è generalmente molto piccolo, cioè la *densità* di spire, data da $n = N / d$, è alta. In queste condizioni possiamo considerare le spire distribuite con continuità. In particolare, possiamo scrivere il numero di spire contenute in un tratto di lunghezza $dx$ come

$$
dN = n dx.
$$

Poiché la simmetria del sistema è la stessa che si ha per la spira singola, anche in questo caso il campo magnetico lungo l'asse del solenoide sarà diretto unicamente lungo l'asse stesso, che prendiamo di nuovo coincidente con $\hat{x}$. Il verso è ancora una volta determinato dal verso in cui scorre la corrente. Dato un punto $x_0$ sull'asse del solenoide, se nel solenoide scorre una corrente $i$ il contributo al campo magnetico generato di $dN$ spire è dato da

$$
dB(x) = \frac{\mu_0 i R^2}{2 r^3} dN = \frac{\mu_0 i R^2}{2 (R^2 + x^2)^{3 / 2}} n dx.
$$

Disegnando il sistema di profilo, vediamo che, dato l'angolo $\phi$ tra il vettore $\vec{r}$ e l'asse $x$, vale $R = r \sin(\phi)$, quindi la distanza lungo $x$ si scrive

$$
x - x_0 = -r \cos(\phi) = -R \frac{\cos(\phi)}{\sin(\phi)} = -R \cot(\phi)
$$

che, ricordando che $\frac{d\cot(\phi)}{d\phi} = -\frac{1}{\sin^2(\phi)}$ ci permette di calcolare il legame che intercorre tra i due differenziali:

$$
dx = \frac{R d\phi}{\sin^2(\phi)}.
$$

Sostituiamo le relazione trovate sopra nell'espressione di $dB$:

$$
dB(\phi) = \frac{\mu_0 i n}{2} \sin(\phi) d\phi.
$$

L'espressione del campo si trova integrando $dB$ tra i due angoli che si hanno nei punti in cui il solenoide finisce, che chiamiamo $\phi_1$ e $\phi_2$:

$$
B = \frac{\mu_0 i n }{2} \int\_{\phi_1}^{\phi_2} \sin(\phi) d\phi = \frac{\mu_0 i n }{2} [\cos(\phi_1) - \cos(\phi_2)]
$$

che si può riscrivere in maniera più simmetrica se consideriamo l'angolo $\phi'_2 = \pi - \phi_2$:

$$
B = \frac{\mu_0 i n }{2} [\cos(\phi_1) + \cos(\phi'_2)].
$$

Se prendiamo l'origine del'asse $x$ nel mezzo del solenoide, i coseni che figurano nella formula precedente si possono scrivere direttamente in funzione di $x$, $R$ e $d$. Per quello a destra ($x > 0$) vale

$$
\cos\phi'_2 = \frac{\frac{d}{2} - x}{\sqrt{\left( \frac{d}{2} - x \right)^2 + R^2}} = \frac{d - 2x}{\sqrt{(d - 2x)^2 + 4R^2}},
$$

mentre per $x < 0$ si ha

$$
\cos\phi_1 = \frac{\frac{d}{2} + x}{\sqrt{\left( \frac{d}{2} + x \right)^2 + R^2}} = \frac{d + 2x}{\sqrt{(d + 2x)^2 + 4R^2}}.
$$

L'espressione del campo scritta in funzione di queste quantità diventa quindi

$$
B(x) = \frac{\mu_0 i n }{2} \left( \frac{d + 2x}{\sqrt{(d + 2x)^2 + 4R^2}} + \frac{d - 2x}{\sqrt{(d - 2x)^2 + 4R^2}} \right)
$$

Nel centro del solenoide ($x = 0$) il campo vale

$$
B(0) = \mu_0 i n \frac{d}{\sqrt{d^2 + 4R^2}}
$$

mentre nel centro di entrambe le spire più estreme ($x = \pm d/2$) si ha

$$
B(\pm d/2) = \frac{\mu_0 i n}{2} \frac{d}{\sqrt{d^2 + R^2}}.
$$

Nel limite di raggio molto piccolo ($d \gg R$), queste due quantità valgono

\begin{align}
B(0) &\to \mu_0 i n \equiv B\_\infty\\\\\\
B(0) &\to \frac{\mu_0 i n}{2} \equiv \frac{B\_\infty}{2}.\\\\\\
\end{align}

Se grafichiamo l'andamento di $B$ con $x$ a diversi valori di $R / d$ (vedi figura 7.10 del MNV), è evidente come, nel limite in cui questo tenda a 0, il campo magnetico valga $\approx B\_\infty$ in un esteso intervallo di valori di $x$.

Estendendo il calcolo a punti non sull'asse del solenoide (oppure utilizzando della limatura di ferro) è possibile disegnare le linee di campo, che risultano essere molto simili a quelle generate da un magnete cilindrico. Anche in questo caso *tutte* le linee sono concatenate ad una o più spire.

## Forza tra fili percorsi da corrente
<small>MNV: paragrafo 7.3</small>

Abbiamo visto che un filo percorso da una corrente $i$ e immerso in campo magnetico $\vec{B}$ sente una forza dovuta alla forza di Lorentz che agisce sui portatori di carica. Per un tratto di filo di lunghezza infinitesima, questa forza vale

$$
d\vec{F} = i d\vec{s} \times \vec{B}
$$

e quindi la forza per unità di lunghezza è

$$
\vec{f} = i \hat{t} \times \vec{B}
$$

poiché $d\vec{s} = ds \hat{t}$, dove $\hat{t}$ è il versore tangente al filo.

Poniamo che il campo $\vec{B}$ sia quello generato da un altro filo indefinito posto nelle vicinanze. Se i due fili sono paralleli, ognuno avvertirà il campo generato dall'altro con direzione perpendicolare al verso della corrente, quindi le forze risultanti (uguali per il principio di azione e reazione) tenederanno ad avvicinare o ad allontanare i fili, a seconda del verso relativo delle due correnti. In particolare, se disegniamo il sistema vediamo come i due fili si attraggono se le due correnti sono concordi, mentre si respingono se sono discordi. Il modulo della forza per unità di lunghezza si può calcolare utilizzando la legge di Biot-Savart:

$$
f = i_1 B_2 = i_2 B_1 = \frac{\mu_0 i_1 i_2}{2\pi r}
$$

La forza subita da un tratto di filo di lunghezza finita $d$ è:

$$
F = fd = \frac{\mu_0 i_1 i_2 d}{2 \pi r}
$$

**Nota Bene:** se i due fili sono perpendicolari, il campo magnetico generato da ogni filo sarà parallelo al verso della corrente che scorre nell'altro, e quindi la forza risultante sarà nulla.

## Legge di Ampère
<small>MNV: paragrafo 7.4</small>

Abbiamo già visto come, in generale, il fatto che le linee del campo magnetico siano chiuse faccia che la circuitazione del campo magnetico lungo di esse sia sempre diversa da zero. Esplicitiamo ora questa proprietà di $\vec{B}$. Per farlo consideriamo il caso particolare di un filo indefinito percorso da corrente che, come abbiamo visto, genera un campo

$$
\vec{B}(r ) = \frac{\mu_0 i}{2 \pi r} \hat{\phi}.
$$

Sappiamo che, in questo caso, le linee di campo sono delle circonferenze centrate sul filo. Consideriamone una a distanza $R$ dal filo. Per calcolare l'integrale di linea dobbiamo prima calcolare il prodotto scalare tra il campo e lo spostamento, che in questo caso vale

$$
\vec{B} \cdot d\vec{s} = \frac{\mu_0 i}{2 \pi r} ds = \frac{\mu_0 i}{2 \pi} d\theta
$$

perché lo spostamento ed il campo magnetico sono paralleli, essendo entrambi tangenti alla linea del campo (il primo per definizione, il secondo perché diretto lungo $\hat{\phi}$), e perché $ds = r d\theta$, dove $d\theta$ è quindi l'angolo sotteso da $ds$. Se integriamo questa quantità su di un arco di circonferenza che unisce i punti $C$ e $D$ otteniamo

$$
\int_C^D \vec{B} \cdot d\vec{s} = \int_0^\theta \frac{\mu_0 i}{2 \pi} d\theta' = \frac{\mu_0 i}{2 \pi} \theta,
$$

dove $\theta$ è l'angolo sotteso dall'arco su cui abbiamo integrato. L'espressione precedente dipende solamente dall'angolo, ed è quindi naturale pensare che la stessa relazione valga indipendentemente dal percorso che unisce $C$ e $D$. Questo si può dimostrare scomponendo il vettore spostamento in due componenti $d\vec{s}_p$ e $d\vec{s}_o$, una parallela e l'altra ortogonale a $\hat{\phi}$. Il prodotto scalare con il campo diventa quindi

$$
\vec{B} \cdot d\vec{s} = \vec{B} \cdot d\vec{s}_p + \vec{B} \cdot d\vec{s}_o = \vec{B} \cdot \hat{\phi} ds_p = \frac{\mu_0 i}{2 \pi} d\theta
$$

dove $d\theta$ è l'angolo sotteso da $ds_p$. Avendo ottenuto la stessa espressione di prima, abbiamo dimostrato come l'integrale da $C$ a $D$ non dipende dal percorso che scegliamo, ma solo dall'angolo $\theta$ sotteso dall'arco di circonferenza che li unisce. Se consideriamo il percorso inverso, da $D$ a $C$, lo spostamento sarà ora orientato lungo $-\hat{\phi}$ e quindi avremo

$$
\int_D^C \vec{B} \cdot d\vec{s} = -\int_0^\theta \frac{\mu_0 i}{2 \pi} d\theta' = -\frac{\mu_0 i}{2 \pi} \theta.
$$

Possiamo ora calcolare l'integrale del campo per lo spostamento su di una linea chiusa, cioè la circuitazione di $\vec{B}$:

$$
\oint \vec{B} \cdot d\vec{s} = \frac{\mu_0 i}{2 \pi} \oint d\theta,
$$

ricordando che la definizione di $\theta$ è legata all'angolo visto dalla sorgente del campo, dobbiamo distinguere due casi:

* Se torniamo da $D$ a $C$ *senza* girare intorno alla (cioè senza concatenare la) sorgente, prima ci muoviamo di $+\theta$ e poi di $-\theta$. È chiaro quindi che la circuitazione del campo è nulla, cioè 
$$
\frac{\mu_0 i}{2 \pi} \oint d\theta = \frac{\mu_0 i}{2 \pi} \int_0^{\theta} d\theta' + \frac{\mu_0 i}{2 \pi} \int_0^{-\theta} d\theta' = 0
$$
* Se torniamo da $D$ a $C$ girando attorno alla (cioè concatenando la) sorgente, l'angolo $\theta$ aumenta monotonicamente, e quindi la circuitazione del campo diventa:
$$
\frac{\mu_0 i}{2 \pi} \oint d\theta = \mu_0 i.
$$

Questa relazione, che abbiamo ottenuto per un filo rettilineo indefinito, ha carattere del tutto generale ed è nota come *legge di Ampère*, che afferma che la circuitazione del campo magnetico $\vec{B}$ è uguale alla somma delle correnti concatenate, moltiplicata per $\mu_0$. Si ha cioè

$$
\oint \vec{B} \cdot d\vec{s} = \mu_0 \sum_k i_k,
$$

Come nel caso della legge di Gauss per il campo elettrostatico, il campo magnetico che compare al primo membro è quello generato da *tutte* le correnti presenti nello spazio, mentre al secondo membro compaiono *tutte* le correnti concatenate al percorso chiuso che stiamo considerando. Il segno con cui si considera una corrente $i_k$ nella somma dipende dal rapporto tra il verso in cui scorre e il verso con cui si percorre la linea chiusa su cui si calcola la circuitazione:

* se i due versi sono legati dalla regola della mano destra (o della vite) si prende $+i_k$;
* altrimenti si considera $-i_k$.

La legge di Ampère lega direttamente le sorgenti del campo al campo stesso, in maniera analoga a quanto fatto dalla legge di Gauss.
**Nota Bene:** la legge di Ampère mostra come, in generale, la circuitazione di $\vec{B}$ sia diversa da zero. Anche se in casi specifici (come ad esempio quando il percorso su cui si integra non concatena alcuna corrente) la circuitazione può essere nulla, il campo magnetico è sempre un campo *non conservativo*.

## Applicazioni della legge di Ampère

Come il teorema di Gauss, anche la legge di Ampère può essere utilizzata per calcolare il camp magnetico in casi particolarmente simmetrici.

### Filo indefinito
<small>MNV: esempio 7.2</small>

Applichiamo la legge di Ampère al caso di un filo indefinito percorso da una corrente $i$. La simmetria del sistema è chiaramente cilindrica, e quindi le linee di campo non possono che essere circonferenze centrate sul filo. Calcoliamo la circuitazione del campo lungo una di queste linee, di raggio $r$:

$$
\oint \vec{B} \cdot d\vec{s} = B 2 \pi r = \mu_0 i
$$

e quindi risolvendo per $B$ si ottiene

$$
B = \frac{\mu_0 i}{2 \pi r},
$$

ritrovando la legge di Biot-Savart.

Possiamo estendere l'analisi al caso di un filo di spessore $R$ finito. Per $r > R$ il campo è ancora quello trovato precedentemente. Per $r < R$, d'altro canto, l'intensità della corrente è proporzionale all'area che stiamo considerando, cioè $i(r ) = i r^2 / R^2$, e quindi

$$
\oint \vec{B} \cdot d\vec{s} = B 2 \pi r = \mu_0 i \frac{r^2}{R^2}
$$

da cui si trova

$$
B(r < R) = \frac{\mu_0 i r}{2 \pi R^2}
$$

### Solenoide indefinito
<small>MNV: esempio 7.3</small>

Calcoliamo il campo magnetico generato da un solenoide indefinito di raggio $R$ caratterizzato da una densità di spire $n$. All'interno del solenoide il campo non può che essere diretto lungo l'asse. D'altro canto, all'esterno il campo deve essere nullo. Questo si può mostrare o considerando il fatto che le linee del campo magnetico in questo caso si chiudono all'infinito oppure applicando la legge di Ampère ad una circonferenza esterna al solenoide: poiché questa non concatena nessuna corrente (o, equivalentemente, non passa corrente netta attraverso una superficie delineata dalla circonferenza), il campo deve essere nullo.

Calcoliamo la circuitazione del campo su di un percorso rettangolare che hai lati lunghi lungo $h$ diretti come l'asse del solenoide e i lati corti di lunghezza $d > R$. È chiaro che l'unico lato che contribuisce è quello interno al solenoide e parallelo all'asse, poiché esternamente si ha $B = 0$, mentre gli altri due lati sono ortogonali al campo e quindi $\vec{B} \cdot d\vec{s} = 0$. Applicando la legge di Ampère si trova quindi

$$
\oint \vec{B} \cdot d\vec{s} = B h = \mu_0 n h i
$$

dove $nh$ è il numero di spire che contribuiscono. Risolvendo per $B$ si trova

$$
B = \mu_0 n i.
$$

Notiamo prima di tutto che questo risultato non dipende dalla distanza dall'asse del segmento lungo $h$ su cui stiamo calcolando la circuitazione. Il campo all'interno del solenoide ha quindi sempre lo stesso modulo, oltre a direzione e verso: $\vec{B}$ è uniforme. Notiamo anche che $B$ non dipende dal raggio del solenoide.
