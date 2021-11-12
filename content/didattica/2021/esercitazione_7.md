+++
title = "Esercitazione del 12/11/2021"
date = 2021-11-12T09:24:21+02:00
draft = false
+++

[Il prodotto vettoriale](#il-prodotto-vettoriale) -- [Esercizio 34](#esercizio-34) -- [Esercizio 35](#esercizio-35) -- [Esercizio 36](#esercizio-36) -- [Esercizio 37](#esercizio-37) -- [Esercizio 38](#esercizio-38)

## Il prodotto vettoriale

Il prodotto vettoriale tra i due vettori $\vec{a}$ e $\vec{b}$ gode delle seguenti proprietà:

* $\vec{a} \times \vec{b} = -\vec{b} \times \vec{a}$;
* $|\vec{a} \times \vec{b}| = ab \sin(\theta)$, dove $\theta$ è l'angolo tra i due vettori;
	* $\vec{a} \times \vec{b} = 0$ se $\vec{a}$ e $\vec{b}$ sono paralleli, cioè se vale $\vec{a} \cdot \vec{b} = 0$;
	* Il modulo del prodotto vettoriale è massimo quando $\theta = \pi / 2$, cioè quando i vettori sono ortogonali;
* Se $\vec{c} = \vec{a} \times \vec{b}$, allora $\vec{c} \cdot \vec{b} = 0$ e $\vec{c} \cdot \vec{a} = 0$, cioè il prodotto vettoriale tra due vettori è un vettore che è ortogonale ad entrambi

Un sistema di riferimento cartesiano può essere

* *destrogiro*, per il quale vale $\hat{x} \times \hat{y} = \hat{z}$;
* *levogiro*, per il quale vale $\hat{x} \times \hat{y} = -\hat{z}$;

Noi avremo sempre a che fare con sistemi di riferimento destrogiri. In questo caso valgono le seguenti relazioni

\begin{align}
\hat{x} \times \hat{y} & = \hat{z}\\\\\\
\hat{y} \times \hat{z} & = \hat{x}\\\\\\
\hat{z} \times \hat{x} & = \hat{y}
\end{align}

da cui è possibile ricavare le altre utilizzando le proprietà del prodotto vettoriale. Un'utile regola mnemonica per ricordare il segno dei risultati del prodotto vettoriale di questi versori è la seguente:

*Leggendo da sinistra verso destra (e guardando il primo versore se $\hat{x}$ è l'ultimo versore scritto), se il versore che segue $\hat{x}$ è $\hat{y}$, allora il versore a destra dell'uguale ha il segno $+$, altrimenti il segno $-$.*

### Qualche esercizio

1. Calcolare il prodotto vettoriale tra $\vec{a} = 3\hat{x} - \hat{y} + 2\hat{z}$ e $\vec{b} = 5\hat{x} + \hat{z}$ e verificare che il risultato sia ortogonale sia a $\vec{a}$ che a $\vec{b}$.
	* $-\hat{x} + 7 \hat{y} + 5\hat{z}$.
2. Calcolare il prodotto vettoriale tra $\vec{a} = (-3, 0, -1)$ e $\vec{b} = (-1, 1, 2)$
	* $(1, -5, 3)$.
3. Determinare, se esiste, il valore di $a$ per cui i due vettori $\vec{a} = (1, -1, c)$ e $\vec{b} = (-2, c, 1)$ sono paralleli.
	* $(-c^2 - 1)\hat{x} + (-2c -1)\hat{y} + (c - 2)\hat{z}$. Per nessun valore di $c$ questo vettore è nullo, quindi non esiste un valore di $c$ per cui i due vettori sono paralleli.

---

## Esercizio 34

### Testo

In una regione di spazio è presente un campo magnetico uniforme $\vec{B} = (B_x, B_y, B_z)$ G. Data una particella di carica $q$ e velocità generica $\vec{v} = (v_x, v_y, v_z)$, 

1. Calcolare per quali condizioni la forza dovuta al campo magnetico è diretta lungo $\hat{x}$, $\hat{y}$ e $\hat{z}$.
2. Poniamo $\vec{B}_1 = (0, -3, 4)$ G e $\vec{B}_2 = (3, 15, -1)$ G. Applicare nei due casi le relazioni trovate precedentemente per una carica positiva ($q \gt 0$) per trovare, se possibile, un esempio di valori di $v_x$, $v_y$ e $v_z$ per cui almeno una di queste relazioni si verifica.
3. Calcolare per quali condizioni la traiettoria della particella carica è limitata ad un piano quando è presente il campo $\vec{B}_2$.

### Soluzione

1. La forza che agisce sulla carica è quella di Lorentz, quindi
\begin{align}
\vec{F} & = q \vec{v} \times \vec{B} = q (v_x \hat{x} + v_y \hat{y} + v_z \hat{z}) \times (B_x\hat{x} + B_y\hat{y} + B_x\hat{z})\\\\\\
 & = q \left[  (v_y B_z - v_z B_y) \hat{x} + (v_z B_x - v_x B_z) \hat{y} + (v_x B_y - v_y B_x) \hat{z} \right]\\\\\\
\end{align}
Dire che la forza è diretta lungo una certa direzione significa imporre che la sua componente lungo quella direzione sia l'unica diversa da 0. Imporre queste condizioni significa risolvere un sistema composto da tre equazioni (di cui una è una diseguaglianza). Nel caso di $\hat{x}$, ad esempio, si ha
\begin{align}
q (v_y B_z - v_z B_y) & > 0\\\\\\
v_z B_x - v_x B_z & = 0\\\\\\
v_x B_y - v_y B_x & = 0
\end{align}
**Nota Bene:** nelle due uguaglianze $q$ si può semplificare (perché sempre diversa da 0), mentre nella diseguaglianza dobbiamo tenerla dato che, in principio, può essere sia positiva che negativa.
2. Svolgiamo per intero il secondo caso. Il campo magnetico si può riscrivere come $\vec{B}_2 = 3\hat{x} + 15\hat{y} - \hat{z}$. La forza che agisce sulla carica diventa quindi
\begin{align}
\vec{F} & = q (15 v_x \hat{z} + v_x \hat{y} - 3 v_y \hat{z} - v_y \hat{x} + 3 v_z \hat{y} - 15 v_z \hat{x})\\\\\\
 & = q (-v_y - 15 v_z, v_x + 3 v_z, 15 v_x - 3 v_y)
\end{align}
Le relazioni scritte sopra per il caso generico sono ora più specifiche e si possono utilizzare per trovare i valori delle componenti della velocità. Nel caso di $\hat{x}$, ad esempio, si ha
\begin{align}
-q (v_y + 15 v_z) & > 0\\\\\\
v_x + 3 v_z & = 0\\\\\\
15 v_x - 3 v_y & = 0
\end{align}
Provando a risolvere questo o uno degli altri sistemi, si vede che non hanno soluzione (o meglio, hanno come unica soluzione il vettore $\vec{v} = (0, 0, 0)$). Questo perché il risultato di un prodotto vettoriale è un vettore ortogonale ad *ambo gli operandi*. Poiché $\vec{B}_2$ non è ortogonale a nessuno dei tre assi, questi non possono essere il risultato di un'operazione di prodotto vettoriale in cui sia coinvolto un campo con queste componenti. Nel caso di $\vec{B}_1$ il campo non ha componente $\hat{x}$ e quindi la forza può essere diretta lungo quest'asse se anche la velocità non ha componenti lungo $\hat{x}$. Inoltre le componenti della velocità devono essere tali da rispettare la disuguaglianza del punto precedente $q (v_y B_z - v_z B_y) \gt 0$, che in questo caso diventa
$$
v_y \gt -\frac{3}{4} v_z.
$$
3. La condizione si verifica se la velocità iniziale è ortogonale al campo. Infatti, la forza di Lorentz è sempre perpendicolare al campo magnetico, e quindi non potrà mai far deviare nella direzione del campo una traiettoria generata da una velocità che non ha componenti in quella direzione. Per trovare la relazione richiesta dal problema dobbiamo quindi imporre $\vec{v} \cdot \vec{B} = 0$, cioè:
$$
3 v_x + 15 v_y - v_z = 0.
$$
Questa equazione ha tre incognite, e quindi chiaramente infinite soluzioni, perché infiniti sono i piani ortogonali ad un vettore.

---

## Esercizio 35

### Testo

{{< figure src="../images/esercizio_35_1.png" width="400px">}}

In una spira formata da cinque fili rettilinei scorre una corrente $i$ (vedi figura). La spira è immersa in un campo magnetico di modulo $B$ diretto lungo $\hat{z}$.

1. Determinare le forze (in modulo, direzione e verso) agenti su tutti i segmenti.
2. Determinare la forza totale agente sulla parte inferiore della spira (cioè sulla parte "diagonale" totale).
2. Calcolare la forza totale agente sulla spira.

### Soluzione

{{< figure src="../images/esercizio_35_2.png" width="250px">}}

1. Utilizzando la regola della mano destra possiamo trovare subito direzione e verso (vedi figura per il verso sui segmenti diagonali). Il filo ed il campo sono ortogonali per tutti i casi, quindi i moduli delle forze valgono $F = i c B$ per i segmenti diagonali, $F = iaB$ per quelli verticali e $F = ibB$ per quello orizzontale.
2. Il problema si può risolvere esplicitamente calcolando le due forze e sommandole vettorialmente (fatelo!), oppure si può ricordare che se il campo è omogeneo la forza totale è data da $i \vec{L} \times \vec{B}$ dove $\vec{L}$ è la distanza tra i capi del segmento di filo di cui vogliamo conoscere la forza, quindi
$$
\vec{F}\_{\rm d} = i b B \hat{y}
$$
3. Poiché la spira è chiusa e il campo omogeneo, la forza totale non può che essere nulla.

---

## Esercizio 36

### Testo

{{< figure src="../images/esercizio_36.png" width="400px">}}

In una spira rettangolare di massa $m = 4 \times 10^{-2}$ g e lati $a = 3$ cm e $b = 2$ cm scorre una corrente $|i| = 1$ A. La parte inferiore della spira è immersa in un campo magnetico diretto lungo $\hat{z}$ che fa sì che la spira resti sospesa in aria con i lati più corti paralleli al terreno. Calcolare 

1. il verso della corrente;
2. il modulo di $\vec{B}$.

### Soluzione

1. Sulla spira sicuramente agisce la forza di gravità, $\vec{F}_g = -mg \hat{y}$. Poiché solo la parte inferiore della spira è immersa in un campo magnetico, vi sarà anche una forza magnetica dovuta al fatto che solo uno dei due lati paralleli al terreno avverte il campo. Se ipotizziamo che, in questo lato, la corrente scorra lungo $\hat{x}$, la forza varrà:
$$
\vec{F} = i \vec{b} \times \vec{B} = i b B \hat{x} \times \hat{z} = - i b B \hat{y} .
$$
Se la forza fosse effettivamente diretta lungo $-\hat{y}$, sarebbe concorde a quella di gravità e quindi la spira non potrebbe rimanere in equilibrio. È chiaro quindi che la corrente deve scorrere nella direzione contraria (cioè in senso orario se disegnamo la spira in modo che l'angolo in basso a sinistra sia il punto più vicino all'origine degli assi).
2. Il modulo del campo si trova eguagliando le due forze, 
$$
mg = ibB,
$$
e quindi
$$
B = \frac{mg}{ib} = 0.0196 \, {\rm T} = 196 \, {\rm G}
$$

---

## Esercizio 37

### Testo

{{< figure src="../images/esercizio_37.png" width="400px">}}

In una spira circolare di raggio $R$ scorre una corrente $i$. La spira è immersa in un campo magnetico uniforme $\vec{B} = B_0 \hat{x}$ e le condizioni del sistema sono tali per cui si trova ad oscillare attorno ad $\hat{y}$. Il momento di inerzia lungo quest'asse vale $I$.

1. Tenendo presente che la velocità angolare massima raggiunta è $\omega_0$, calcolare l'angolo tra la normale della spira e il campo magnetico quando $\omega = \omega_0 / 3$.
2. Una molla angolare di costante $k$ viene collegata alla spira in maniera tale da contrapporsi al momento magnetico mentre questa è nel punto per cui vale $\omega = 0$. Calcolare il valore che $k$ deve avere per far sì che la spira resti ferma per angoli generici e nell'approssimazione di piccoli angoli.

### Soluzione

1. L'energia totale (che è conservata) ha due contributi: l'energia cinetica rotazionale e quella magnetica potenziale. La prima vale
$$
U_k = \frac{1}{2} I \omega^2
$$
mentre la seconda vale
$$
U_e = - \vec{m} \cdot \vec{B} = - m B \cos \theta
$$
dove $\vec{m} = i \Sigma \hat{n}$ è il momento di dipolo magnetico della spira. In questo caso $\Sigma = \pi R^2$, quindi l'energia totale vale
$$
U = \frac{1}{2} I \omega^2 - i \Sigma B \cos \theta.
$$
Quando $\theta = 0$ l'energia potenziale è minima e quindi quella cinetica è massima. In questo caso l'energia totale vale
$$
U_0 = \frac{1}{2} I \omega_0^2 - i \Sigma B
$$
e il suo valore può essere calcolato dai dati del problema. Quando $\omega = \omega_0 / 3$, si ha:
$$
U_0 = \frac{1}{18} I \omega_0^2 - i \Sigma B \cos \theta
$$
da cui si può ricavare il valore di $\cos \theta$:
$$
\cos \theta = \frac{1}{i \Sigma B} \left(\frac{1}{18} I \omega_0^2 -  U_0 \right).
$$
2. L'angolo per cui $\omega = 0$ si trova imponendo
$$
U_0 = - i \Sigma B \cos \theta\_{\rm max}
$$
da cui si ottiene
$$
\theta\_{\rm max} = \arccos\left(- \frac{U_0}{i \Sigma B} \right)
$$
Il momento meccanico di una molla angolare vale, in generale $M = k \theta$. La condizione di equilibrio si impone eguagliando i due momenti meccanici,
$$
k \theta\_{\rm max} = i \Sigma B \sin \theta\_{\rm max},
$$
per cui il valore della costante elastica che assicura che la spira resti ferma è
$$
k = \frac{i \Sigma B \sin \theta\_{\rm max}}{\theta\_{\rm max}}
$$
che, nel limite di piccoli angoli (per cui $\sin \theta \to \theta$), vale
$$
k = i \Sigma B
$$

---

## Esercizio 38

### Testo

{{< figure src="../images/esercizio_38.png" width="500px">}}

Una spira rettangolare indeformabile di dimensioni $a = 40$ cm e $b = 1$ m e massa $m = 1$ g ha i lati lunghi paralleli all'asse $x$ ed è posta ad una distanza $d = 1$ cm da esso (vedi figura). Nella regione è presente un campo magnetico diretto lungo $-\hat{z}$ di modulo $B(y) = |A / y|$, con $ A = 6 \times 10^{-6}$ Tm.  La forza peso $\vec{F}_p$ agisce in direzione $-\hat{y}$. Quando nella spira scorre una corrente $i$ il sistema è in equilibrio e la spira rimane sospesa.

1. Determinare verso e intensità di $i$.
2. Si aggiunge nella regione di spazio in figura un campo magnetico uniforme uscente dal foglio e di intensità $B_{\rm add} = 1$ T. Quale deve essere il nuovo valore di $i$ per far sì che il sistema rimanga in equilibrio?

### Soluzione

1. Il verso di $i$ deve essere tale per cui la forza magnetica $F_m$ che il circuito sente sia contrapposta alla forza peso. In questo caso $F_m$ ha due contributi dati dalle due porzioni di spira parallele al filo. Il contributo dato dal filo più in alto è più forte, poiché lì il campo è maggiore, quindi deve essere quello che determina il verso della corrente. Per far sì che si generi una forza verso l'alto, $i$ deve scorrere lungo $\hat{x}$ in questa parte di spira. Ne consegue che $i_s$ scorre in senso orario.
   Affinché la spira sia in equilibrio, le intensità della forza peso e di quella magnetica devono essere uguali. La forza peso vale semplicemente $mg$. Quella magnetica è dovuta alla presenza del campo magnetico e ha due contributi dovuti alle due parti di spira parallele all'asse $x$, che si sommano direttamente poiché hanno la stessa direzione:

$$
F_m = i b B(d) + i b B(d + a) = i b A \left( \frac{1}{d} - \frac{1}{d + a}\right).
$$

Uguagliando le due forze si ottiene
$$
 A i b \left( \frac{1}{d} - \frac{1}{d + a} \right) = mg
$$
e risolvendo per i:
$$
i = \frac{mg}{A} \frac{d(d + a)}{ab} = 16.8 \, {\rm A}
$$

2. La risposta non cambia, perché la forza totale agente sulla spira non risente di un campo omogeneo (perché?).
