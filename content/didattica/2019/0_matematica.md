# Note sul questionario anonimo:

Anno | Mat I | Mat II | Fisica I | 2a | 2b | 3 | 4 | 5 | 6
---|---|---|---|---|---|---|---|---|---
2018 | 0.9|0.5|0.53|	0.29| 0.59|0.39|0.57|0.93|0.74
2019 | 0.94|0.44|0.7|0.58|0.72|0.62|0.92|0.9|0.76

* Attenzione, $\frac{d\sin\theta}{d\theta} = \cos \theta$, non $-\cos\theta$
* Alcuni hanno scritto il prodotto scalare come un vettore nel punto 2a e come uno scalare nel punto 2b

# Ripasso

Le note che seguono mostrano un assoluto disprezzo per la rigorosità. Non mostratele a nessun un matematico!

## Vettori

Le grandezze fisiche si distinguono essenzialmente in due grandi classi. Quelle che risultano completamente definite quando se ne conosce la sola misura rientrano nella categoria delle grandezze scalari. Tecnicamente, queste sono quantità che non dipendono in alcun modo dal sistema di riferimento che consideriamo. Tra le quantità che *non* posseggono questa qualità abbiamo i vettori, che ruotano insieme al sistema di riferimento. Nel corso avremo a che fare con vettori tridimensionali , cioè oggetti aventi tre componenti, solitamente definiti nello spazio cartesiano $\mathbb{R}^3$. Quando vedrete vettori bidimensionali, questi sono da intendere vettori tridimensionali la cui terza componente è la stessa per tutti (pere sempio 0): è una semplificazione utile che di permette di studiare più facilmente fenomeni che avvengono su di un piano.

Nella prima categoria rientrano grandezze come la lunghezza, l'area, il volume, il tempo, la temperatura, la pressione, il calore specifico, l'energia ..., e per queste è sufficiente fornire la loro grandezza relativamente ad una opportuna unità di misura: esempi tipici delle grandezze vettoriali sono invece lo spostamento, la velocità, l'accelerazione, la forza, l'impulso, ....

Un generico vettore $\vec{x} = (x_1, x_2, x_3)$ ha modulo $x = |\vec{x}| = \sqrt{x_1^2 + x_2^2 + x_3^2}$. Si definisce *versore* un vettore avente un modulo unitario. Dato $\vec{x}$, il suo versore è $\hat{x} = \vec{x} / x$.

Le più importanti operazioni che utilizzeremo nel corso sono:

* Somma: $\vec{x} + \vec{y} = (x_1 + y_1, x_2 + y_2, x_3 + y_3)$. Questa operazione può essere svolta anche graficamente costruendo un parallelogramma utilizzando i due vettori: il vettore somma che ne risulta è dato dalla diagonale.
* Moltiplicazione per uno scalare: $a\vec{x} = (ax_1, ax_2, ax_3)$
* Prodotto scalare: $\vec{x} \cdot \vec{y} = x_1y_1 + x_2y_2 + x_3y_3$
* Prodotto vettoriale: $\vec{x} \times \vec{y} = (x_2y_3 - x_3y_2, x_3y_1 - x_1y_3, x_1y_2 - x_2y_1)$

Le due ultime relazioni si possono scrivere anche in funzione dei moduli di $\vec{x}$ e $\vec{y}$ e dell'angolo $\theta$ compreso tra i due:

* $\vec{x} \cdot \vec{y} = xy\cos{\theta}$, quindi se i due vettori sono allineati il prodotto scalare è dato da $xy$.
* $\vec{x} \times \vec{y} = \hat{n} xy\sin{\theta}$, dove $\hat{n}$ è il versore costruito con la regola della mano destra a partire dai vettori $\vec{x}$ e $\vec{y}$. Se i due vettori sono allineati il loro prodotto vettoriale è nullo.

**Nota Bene:** il risultato di un prodotto scalare è uno scalare, quello di un prodotto vettoriale è un vettore. Facile da memorizzare!

### Coordinate cartesiane

Durante il corso utilizzeremo quasi sempre le coordinate cartesiane. In questo sistema, un punto nello spazio è identificato da tre numeri che rappresentano le coordinate di quel punto lungo gli assi $x$, $y$ e $z$. Due possibili notazioni per scrivere lo stesso vettore di componenti $a$, $b$ e $c$ sono $(a, b, c$) oppure $a\hat{x} + b\hat{y} + c\hat{z}$, dove i tre versori indicano le tre direzioni cartesiane, cioè:

$$
\hat{x} = (1, 0, 0), \hat{y} = (0, 1, 0), \hat{z} = (0, 0, 1)
$$

Questi versori (e la loro somma pesata, che può generare qualunque altro vettore nello spazio) non hanno nulla di speciale, e si trattano esattamente come ogni altro vettore. In effetti, le coordinate di un generico vettore $\vec{v} = (v_x, v_y, v_z)$ lungo i tre assi cartesiani si possono trovare applicando il prodotto scalare ai tre versori. Facciamo un esempio con la componente $\hat{x}$:

$$
\vec{v} \cdot \hat{x} = (v_x\hat{x} + v_y\hat{y} + v_z\hat{z}) \cdot \hat{x} = v_x
$$

perché $\hat{x}$, $\hat{y}$ e $\hat{z}$ sono ortogonali fra di loro!



### Coordinate sferiche

Le coordinate sferiche $(r, \theta, \phi)$ sono legate a quelle cartesiane, $(x, y, z)$, tramite le seguenti relazioni:

$$
\left\lbrace
\begin{aligned}
x &= r \sin(\theta) \cos(\phi)\\\\\\
y &= r \sin(\theta) \sin(\phi)\\\\\\
z &= r \cos(\theta)
\end{aligned}
\right.
$$

Il seguente diagramma aiuta a visualizzare queste relazioni:

{{< figure src="../images/spherical_coordinates.png" alt="La relazione tra coordinate sferiche e coordinate cartesiane" width="50%">}}

In generale, nei sistemi di riferimento che ci interessano i versori che indicano le direzioni delle coordinate sono sempre ortogonali tra loro, punto per punto. Nel caso delle coordinate cartesiane questi vettori sono sempre uguali e puntano sempre nella stessa direzione. Nel caso delle coordinate sferiche questo non è vero: mentre, punto per punto, i tre versori sono ortogonali, le loro direzioni dipendono dal punto in cui vogliamo calcolarli. Per trovarli bisogna disegnare il punto in cui siamo su di un diagramma simile a quello riprodotto sopra e chiedersi quali sono le direzioni verso le quali le tre coordinate aumentano. Nel caso del punto in figura (indicato con $\times$):

* $\hat{r}$ ha direzione parallela a quella della linea tratteggiata che connette $\times$ all'origine e verso che allontana dall'origine
* $\hat{\theta}$ ha la direzione che lascia inalterati $r$ e $\phi$ e verso che fa crescere $\theta$.
* $\hat{\phi}$ fa ruotare in senso antiorario il punto attorno all'asse $z$.

### Coordinate polari

Il discorso si semplica in 2D, dove si hanno solamente $r$ e $\theta$:

$$
\left\lbrace
\begin{aligned}
x &= r \cos(\theta)\\\\\\
y &= r \sin(\theta)
\end{aligned}
\right.
$$

Tramite queste relazioni possiamo ottenere le coordinate di un vettore conoscendo il suo modulo (cioè $r$) e l'angolo che forma con l'asse $x$.

### Sistemi di riferimento

Attenzione: il sistema di riferimento che scegliamo di utilizzare è una costruzione *artificiale* (umana, se volete) e quindi non può avere nessun effetto sul fenomeno fisico che intendiamo osservare/studiare. Infatti, i fenomeni fisici sono indipendenti dal modo in cui li studiamo, ma le equazioni che li descrivono no: scegliere un "buon" sistema di riferimento può semplificare *grandemente* i calcoli.

### Esercizi

(Gli esercizi contrassegnati con $\rightarrow$ non sono stati svolti né discussi in classe)

* Quanto fa $\hat{x} \cdot \hat{y}$? Perché?
	* Risposta: 0, perché sono ortogonali
* Quanto vale l'angolo compreso tra $\vec{v} = 3 \hat{x} + 3 \hat{y}$ e $\vec{w} = 2\hat{x} + \hat{y}$?
	* Risposta: $18.49^\circ$, cioè $0.32$ rad
* Quanto vale il modulo del vettore $\vec{v} = \hat{x} + 4 \hat{y} - 2\sqrt{2} \hat{z}$? E qual è l'espressione di $\hat{v}$? 
	* Risposte: $5$ e $\hat{v} = \frac{1}{5} \hat{x} + \frac{4}{5} \hat{y} - \frac{2\sqrt{2}}{5} \hat{z}$
* $\rightarrow$ Un vettore $\vec{v} = v_x \hat{x} + v_y \hat{y}$ di modulo $4$ giace sul piano $(x, y)$ e forma un angolo di $\pi/3$ con l'asse $x$. Quali sono le sue componenti?
	* Risposta: definendo $v$ il modulo si trova $v_x = v \cos(\theta) = 2.00$, $v_y = v \sin(\theta) = 3.46$
* Dati due vettori $\vec{a} = (2, 3, 0)$ e $\vec{b} = (-2, h, 0)$, quanto deve valere $h$ affinché i vettori risultino perpendicolari? E affinché risultino (anti)paralleli (non fate i conti, delinate solamente la strategia da utilizzare, per esempio disegnando i due vettori)?
	* Risposte: imponendo $\vec{a} \cdot \vec{b} = -4 + 3h + 0 = 0$ si trova $h = 4/3$. La seconda risposta è un po' più complicata, ma si affronta considerando che la condizione di parallelismo si può scrivere come $\cos\theta = \frac{\vec{a} \cdot \vec{b}}{ab} = \pm 1$. Se disegniamo i due vettori vedremo che l'unica possibilità che abbiamo è di imporre $\cos{\theta} = -1$, che si ottiene solo se $h = -3$, cioè quando $\vec{a} = -\vec{b}$!
* Un aereo percorre 100 Km in direzione nord, per poi virare e percorrere 150 Km in direzione nord $30^\circ$ est ed infine percorrere 300 Km in direzione est. Calcolare lo spostamento risultante in modulo, direzione e verso. 
	* Risposta: il primo vettore (omettendo le unità di misura per comodità, ma è tutto misurato in Km) vale $\vec{s}_1 = (0, 100)$, $\vec{s}_2 = (75, 75 \sqrt{3})$ e $\vec{s}_3 = (300, 0)$. Il vettore spostamento totale è quindi $\vec{s}_t = (375, 100 + 75 \sqrt{3}) = (375, 229.9)$, e il suo modulo vale $s = \sqrt{375^2 + 229.9^2} = 439.86$ Km. Per quanto riguarda la direzione, il vettore forma un angolo $\alpha$ con l'asse $x$ che è dato da $s \cos\alpha = s_x$ e quindi $\alpha = \arccos\left(\frac{s_x}{s}\right) = 0.55 \, {\rm rad} = 31.5^\circ$.
*  $\rightarrow$ Un giocatore di golf in tre colpi riesce a gettare la sua palla nella buca. Il primo tiro sposta la palla di 12 m a nord, il secondo di 6 m a sud–est (cioè con un angolo $-\pi/4 = -45^\circ$) ed il terzo tiro di 3 m a sud–ovest (cioè con un angolo $-3\pi/4 = -135^\circ$). Quale spostamento è necessario per mandare la palla nella buca al primo colpo?
	* Ragionando come sopra otteniamo $s = 6$ m e $\alpha = 1.21 \, {\rm rad} = 69.4^\circ$
