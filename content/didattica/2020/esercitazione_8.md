+++
title = "Esercitazione del 10/11/2020"
date = 2020-11-04T09:24:21+02:00
draft = false
+++

[Il prodotto vettoriale](#il-prodotto-vettoriale) -- [Esercizio 34](#esercizio-34) -- [Esercizio 35](#esercizio-35) -- [Esercizio 36](#esercizio-36)

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

## Esercizio 34

### Testo

In una regione di spazio è presente un campo magnetico uniforme $\vec{B} = (B_x, B_y, B_z)$ G. Data una particella di carica $q$ e velocità generica $\vec{v} = (v_x, v_y, v_z)$, 

1. Calcolare per quali condizioni la forza dovuta al campo magnetico è diretta lungo $\hat{x}$, $\hat{y}$ e $\hat{z}$.
2. Poniamo $\vec{B} = (3, 15, -1)$ G. Applicare le relazioni trovate precedentemente. Se possibile, fare un esempio di valori di $v_x$, $v_y$ e $v_z$ per cui almeno una di queste relazioni si verifica.
3. Calcolare per quali condizioni la traiettoria della particella carica è limitata ad un piano;

### Soluzione

1. La forza che agisce sulla carica è quella di Lorentz, quindi
\begin{align}
\vec{F} & = q \vec{v} \times \vec{B} = q (v_x \hat{x} + v_y \hat{y} + v_z \hat{z}) \times (B_x\hat{x} + B_y\hat{y} + B_x\hat{z})\\\\\\
 & = q \left[  (v_y B_z - v_z B_y) \hat{x} + (v_z B_x - v_x B_z) \hat{y} + (v_x B_y - v_y B_x) \hat{z} \right]\\\\\\
\end{align}
Dire che la forza è diretta lungo una certa direzione significa imporre che la sua componente lungo quella direzione sia l'unica diversa da 0. Imporre queste condizioni significa risolvere un sistema composto da tre equazioni (di cui una è una diseguaglianza). Nel caso di $\hat{x}$, ad esempio, si ha
\begin{align}
q (v_y B_z - v_z B_y) & > 0\\\\\\
v_z B_x - v_x B_z) & = 0\\\\\\
v_x B_y - v_y B_x & = 0
\end{align}
**Nota Bene:** nelle due uguaglianze $q$ si può semplificare (perché sempre diversa da 0), mentre nella diseguaglianza dobbiamo tenerla dato che, in principio, può essere sia positiva che negativa.

2. Il campo magnetico si può riscrivere come $\vec{B} = 3\hat{x} + 15\hat{y} - \hat{z}$. La forza che agisce sulla carica diventa quindi
\begin{align}
\vec{F} & = q (15 v_x \hat{z} + v_x \hat{y} - 3 v_y \hat{z} - v_y \hat{x} + 3 v_z \hat{y} - 15 v_z \hat{x})\\\\\\
 & = q (-v_y - 15 v_z, v_x + 3 v_z, 15 v_x - 3 v_y))
\end{align}
Le relazioni scritte sopra per il caso generico sono ora più specifiche e si possono utilizzare per trovare i valori delle componenti della velocità. Nel caso di $\hat{x}$, ad esempio, si ha
\begin{align}
-q (v_y + 15 v_z) & > 0\\\\\\
v_x + 3 v_z & = 0\\\\\\
15 v_x - 3 v_y & = 0
\end{align}
Provando a risolvere questo o uno degli altri sistemi, si vede che non hanno soluzione (o meglio, hanno come unica soluzione il vettore $\vec{v} = (0, 0, 0)$). Questo perché il risultato di un prodotto vettoriale è un vettore ortogonale ad *ambo gli operandi*. Poiché $\vec{B}$ non è ortogonale a nessuno dei tre assi, questi non possono essere il risultato di un'operazione di prodotto vettoriale in cui sia coinvolto un campo con queste componenti.

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

1. Determinare le forze (in modulo, direzione e verso) agenti sui due segmenti diagonali.
2. Determinarre la forza totale agente sulla parte inferiore della spira (cioè sulla parte "diagonale" totale).
2. Calcolare la forza totale agente sulla spira.

### Soluzione

{{< figure src="../images/esercizio_35_2.png" width="250px">}}

1. Utilizzando la regola della mano destra possiamo trovare subito direzione e verso (vedi figura). Il filo ed il campo sono ortogonali in entrambi i casi, quindi i moduli delle forze sono uguali e valgono
$$
F = i c B
$$
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
