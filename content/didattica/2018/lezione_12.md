+++
title = "Lezione 27/11/2018"
date = 2018-11-27T07:19:34+01:00
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

## Campi magnetici prodotti da correnti
<small>MNV: paragrafo 7.1</small>

Fino ad ora ci siamo occupati dell'effetto che un campo magnetico ha su particella cariche o su fili percorsi da corrente. Ora risponderemo alla domanda complementare: qual è il campo magnetico generato da cariche in moto in diverse configurazioni (cioè da correnti generiche)?

### Correnti in circuiti

Esperimenti compiuti nell'800 hanno permesso di identificare la dipendenza funzionale del campo magnetico generato da un tratto infinitesimo di filo percorso da corrente dalle diverse quantità in gioco. In particolare si è trovato che

* il campo generato in un punto a distanza $r$ è inversamente proporzionale a $r^2$;
* l'intensità del campo è proporzionale alla corrente $i$
* la direzione del campo è ortogonale sia al vettore distanza $\vec{r}$ che al versore tangenziale al tratto di filo

In formule, questa dipendenza si può scrivere come

$$
d\vec{B}(\vec{r}) = k_m i \frac{d\vec{s} \times \hat{r}}{r^2}
$$

dove $k_m$ è una costante di proporzionalità che dipende dal materiale che stiamo considerando (e il cui valore si misura sperimentalmente), $d\vec{s} = \hat{t} ds$ indica la direzione del filo (con $\hat{t}$ versore tangente) e $\vec{r}$ è il vettore distanza tra il tratto infinitesimo e il punto in cui stiamo misurando il campo.

Nel vuoto si trova $k_m = 10^{-7} {\rm \frac{Tm}{A}}$ e, per motivi storici, di solito si scrive in funzione della cosiddetta *permeabilità magnetica del vuoto*,

$$
k_m = \frac{\mu_0}{4\pi}
$$

da cui si ottiene $\mu_0 = 4 \pi k_m = 1.26 \times 10^{-6}$ Tm/A. 

L'espressione del campo diventa quindi

$$
d\vec{B}(\vec{r}) = \frac{\mu_0}{4 \pi} \frac{i ds}{r^2} \hat{t} \times \hat{r}
$$

detta *prima legge elementare di Laplace*. Questa legge consente di calcolare il campo magnetico generato da qualsiasi circuito percorso da corrente integrando su tutti i diversi contributi. Nel caso generico di circuito chiuso, l'espressione formale del campo diventa

$$
\vec{B} = \frac{\mu_0 i }{4 \pi} \oint \frac{d\vec{s} \times \hat{r}}{r^2}.
$$

Questa relazione, nota come *legge di Ampère-Laplace*, è valida per tutti i casi in cui i conduttori che compongono il circuito hanno sezioni su cui le quantità in gioco possono essere considerate costanti; quando, cioè, possono essere considerati filiformi.

### Cariche in moto

Possiamo riscrivere la legge elementare di Laplace da un punto di vista microscopico ricordando che $j = i / \Sigma$ e, per portatori generici di carica $q$ e velocità di deriva $\vec{v}$, $\vec{j} = n q \vec{v}$:

$$
d\vec{B}(\vec{r} ) = \frac{\mu_0}{4 \pi} \frac{q  \vec{v} \times \hat{r}}{r^2} n \Sigma ds = \frac{\mu_0}{4 \pi} \frac{q \vec{v} \times \hat{r}}{r^2} n d\tau.
$$

Questa è l'espressione del campo generata dagli $N = n d\tau$ portatori di carica presenti nel volumetto $d\tau = \Sigma ds$. Il campo generato da ognuno di questi portatori sarà quindi pari a $d\vec{B}(\vec{r} ) / n d\tau$, da cui si ricava il campo dovuto ad una semplice carica $q$ in movimento con velocità $\vec{v}$

$$
\vec{B} = \frac{\mu_0}{4 \pi} \frac{q \vec{v} \times \hat{r}}{r^2}.
$$

Poiché dipende unicamente dalla valore della carica e dalla velocità della particella, questa espressione ha carattere del tutto generale. È chiaro quindi come una carica in moto generi *sempre* un campo magnetico, indipendentemente dalle cause che generano (o hanno generato) il moto. Questo risultato si può confermare misurando i campi magnetici generati da sistemi elettrostatici messi in moto, come fatto per la prima volta da Rowland nel 1878 con un disco carico rotante.

## Campi magnetici generati da circuiti particolari
<small>MNV: paragrafo 7.2</small>

Utilizziamo la prima legge elementare di Laplace per calcolare il campo magnetico generato da conduttori percorsi da corrente in alcuni casi particolari.

### Filo rettilineo

Consideriamo un filo di lunghezza $2a$ percorso da una corrente $i$. Vogliamo calcolare il campo generato dal filo sul piano ortogonale al filo, e che lo taglia a metà. Consideriamo, in particolare, un punto posto a distanza R. Ogni tratto di filo darà un contributo

$$
d\vec{B} = \frac{\mu_0 i}{4 \pi} \frac{d\vec{s} \times \hat{r}}{r^2} = \frac{\mu_0 i}{4 \pi} \frac{ds \sin(\theta)}{r^2} \hat{\phi}
$$

dove $\hat{\phi}$ indica il versore tangente alla circonferenza di raggio $R$ (il cui verso è dato dalla regola della vite applicata alla direzione della corrente) che è, per simmetria, l'unica direzione lungo la quale il campo non è nullo. È chiaro dalla relazione precedente che il modulo del campo è costante lungo la circonferenza, quindi il problema si riduce a calcolare l'integrale dello scalare $dB$. Se disegniamo il sistema e le quantità in gioco troviamo che

\begin{align}
R & = r \sin(\theta)\\\\\\
s & = -r \cos(\theta) = -R \cot(\theta)\\\\\\
ds & = R \frac{d\theta}{\sin^2(\theta)}
\end{align}

e quindi

$$
dB = \frac{\mu_0 i}{4 \pi} \frac{\sin(\theta) d\theta}{R}.
$$

Integriamo questa espressione dall'angolo più piccolo fino a $\pi /2$ (che equivale ad integrare lungo $s$ da $-a$ a $0$):

$$
B_a(R ) = \frac{\mu_0 i}{4 \pi R} \int\_{\theta_a}^{\pi/2} \sin(\theta) d\theta = \frac{\mu_0 i}{4 \pi R} \left( - \cos(\theta) \right)\_{\theta_a}^{\pi/2} = \frac{\mu_0 i \cos(\theta_a)}{4 \pi R}
$$

Il campo totale è dato dalla somma dei contributi da $-a$ ad $0$ e da $0$ ad $a$ che, per simmetria, sono uguali, quindi

$$
B(R ) = 2 B_a(R ) = \frac{\mu_0 i \cos(\theta_a)}{2 \pi R} = \frac{\mu_0 i}{2 \pi R} \frac{a}{\sqrt{R^2 + a^2}}
$$

Dove abbiamo notato che il coseno dell'angolo più piccolo è dato dalla relazione

$$
\cos(\theta_a) = \frac{a}{\sqrt{R^2 + a^2}}
$$

Vettorialmente possiamo scrivere

$$
\vec{B}(R ) = \frac{\mu_0 i}{2 \pi R} \frac{a}{\sqrt{R^2 + a^2}} \hat{\phi}
$$

che, nel limite di filo infinito (cioè quando $a \gg R$), diventa

$$
\vec{B}(R ) = \frac{\mu_0 i}{2 \pi R} \hat{\phi}.
$$

Questa espressione è nota come *legge di Biot-Savart*. In questo caso si ha che

* l'intensità del campo dipende unicamente dalla distanza dal filo;
* le linee del campo sono circonferenze *concatenate* alla corrente (cioè alla sorgente del campo).

La relazione ottenuta nel limite di filo infinito è chiaramente ideale ma è una buona approssimazione quando ci si mette ad una distanza dal filo molto minore della sua lunghezza.

### Spira circolare

Consideriamo una spira circolare di raggio $R$ in cui scorre una corrente $i$ e calcoliamo il campo che genera lungo il suo asse, che prendiamo coincidente con l'asse $x$. In questo caso specifico, il versore tangente alla spira e $\hat{r}$ sono sempre ortogonali (disegnare per credere!) e quindi ogni elementino della spira genera un campo magnetico di modulo

$$
dB = \frac{\mu_0 i}{4 \pi} \frac{ds |\hat{t} \times \hat{r}|}{r^2} = \frac{\mu_0 i}{4 \pi} \frac{ds}{r^2}.
$$

La direzione del campo magnetico così generato è quella ortogonale ad entrambi i versori. Per ottenere la componente lungo l'asse, il campo così calcolato va proiettato su $x$, cioè va moltiplicato per $\cos(\theta)$, dove $\theta$ è l'angolo compreso tra $d\vec{B}$ e $\hat{x}$, cioè:

$$
dB_x = \frac{\mu_0 i}{4 \pi} \frac{ds}{r^2} \cos(\theta).
$$

Le altre due componenti del campo sono, in generale, diverse da zero ma opposte in segno per elementini della spira che si trovano l'uno di fronte all'altro. La somma totale dei loro contributi lungo gli assi $y$ e $z$ è quindi nulla. Il campo magnetico totale avrà quindi un'unica componente, quella lungo $\hat{x}$. Lo stesso risultato si può ottenere facendo considerazioni di simmetria, in maniera del tutto simile a quanto fatto quando abbiamo ricavato il campo elettrostatico generato da un anello carico. **Nota Bene:** la direzione è sempre lungo $x$, mentre il verso non è arbitrario ma è dato dalla regola della mano destra applicata al verso in cui scorre la corrente.
Il modulo del campo si trova integrando $dB_x$ lungo tutta la spira. Poiché $r$ e $\cos(\theta)$ sono gli stessi per ogni elementino, i contributi sono tutti uguali e quindi l'integrale si risolve semplicemente:

$$
B = \oint \frac{\mu_0 i}{4 \pi} \frac{ds}{r^2} \cos(\theta) = \frac{\mu_0 i}{4 \pi} \frac{2 \pi R}{r^2} \cos(\theta) = \frac{\mu_0 i R}{2 r^2} \cos(\theta).
$$

Se disegniamo il sistemo di profilo possiamo vedere come $\theta$ sia lo stesso angolo che abbiamo calcolato per il caso dell'anello carico, e quindi si ha $\cos(\theta) = \frac{R}{r}$. Poiché $r = \sqrt{R^2 + x^2}$, il campo magnetico si può scrivere come

$$
\vec{B} = \frac{\mu_0 i R^2}{2(R^2 + x^2)^{3 / 2}} \hat{x}.
$$

Notiamo come, al contrario dell'equivalente sistema elettrostatico, il campo magnetico non cambi di segno nel passare da un lato all'altro della spira e abbia valore massimo per $x = 0$, dove si ha $B = \frac{\mu_0 i}{2R}$.

Consideriamo il caso $x \gg R$. Il campo magnetico in questo limite diventa

$$
\vec{B} = \frac{\mu_0 i R^2}{2x^3} \hat{x} = \vec{B} = \frac{\mu_0}{4 \pi} \frac{i 2 \pi R^2}{x^3} \hat{x} = \frac{\mu_0}{4 \pi} \frac{2 i\Sigma}{x^3} \hat{x} = \frac{\mu_0}{4 \pi} \frac{2 \vec{m}}{x^3}
$$

dove $\vec{m} = i \Sigma \hat{x} = i \pi R^2 \hat{x}$ è il momento di dipolo magnetico della spira. Scritto in questa maniera, il campo ha un'espressione identica a quella del campo elettrostatico generato da un dipolo, per cui vale $\vec{E} = \frac{1}{4 \pi \epsilon_0} \frac{2 \vec{p}}{r^3}$. Si può vedere come quest'analogia non valga solo sull'asse della spira ma resti valida in qualunque punto dello spazio e per spire di qualsiasi forma. In altre parole, il campo si può esprimere come

$$
\vec{B}(r, \theta) = \frac{\mu_0}{4 \pi} \frac{m}{r^3} (2\cos(\theta) \hat{r} + \sin(\theta)\hat{\theta})
$$

Anche le linee di campo, nel limite $x \gg R$, sono identiche a quelle generate da un dipolo elettrico. Per quanto riguarda quelle più vicine alla spira invece, la differenza è sostanziale. In particolare, si trova che anche in questo caso le linee di campo sono *sempre* concatenate alla spira, cioè alla sorgente del campo stesso. Questo, lo ripetiamo, è un risultato generale: mentre nel caso del campo elettrico le linee di campo escono dalle cariche positive ed entrano in quelle negative, nel caso del campo magnetico le linee sono sempre chiuse e concatenate alle sorgenti.
Una importante conseguenza di questa osservazione è che la circuitazione del campo magnetico non può essere nulla. Il campo magnetico, infatti, mantiene lo stesso verso sulla linea di campo, e quindi un integrale di linea non può che essere diverso da zero. **Nota Bene:** questa è una proprietà *fondamentale* del campo magnetico che lo distingue dal campo elettrostatico.
