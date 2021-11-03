+++
title = "Esercitazione del 29/11/2021"
date = 2021-10-21T09:47:43+02:00
draft = false
+++

[Esempio Kirchhoff](#esempio-kirchhoff) -- [Esercizio 22](#esercizio-22) -- [Esercizio 23](#esercizio-23) -- [Esercizio 24](#esercizio-24) -- [Esercizio 27](#esercizio-27)

## Esempio Kirchhoff

Calcoliamo le correnti che scorrono nel circuito in figura

{{< figure src="../images/esempio_kirchhoff.png" width="400px">}}

Scegliamo arbitrariamente i versi delle correnti in maniera tale che nelle due maglie (1 e 2) si vada dal polo positivo a quello negativo di ogni generatore. Applichiamo la prima legge di Kirchhoff nel nodo $A$:

$$
i_1 + i_2 = i_3.
$$

Per le due maglie, invece, vale

$$
\begin{align}
V_1 & = i_1 R_1 + i_3 R_3\\\\\\
V_2 & = i_2 R_2 + i_3 R_3
\end{align}
$$

Le equazioni si risolvono sostituendo la prima nelle ultime due e poi isolando le due correnti. Nello specifico caso in esame si trova $i_1 = -0.143$ A, $i_2 = 0.429$ A e $i_3 = 0.286$ A. Il fatto che $i_1$ sia negativa significa che il suo verso è contrario a quello che abbiamo scelto per applicare le leggi di Kirchoff.

---

## Esercizio 22

### Testo

{{< figure src="../images/esercizio_22.png" width="600px">}}

Un piano conduttore indefinito è carico con densità superficiale di carica $\sigma$. Su una delle due superfici viene appoggiata una lastra di materiale dielettrico omogeneo e lineare di spessore $h$ e costante dielettrica $\kappa$.

1. Calcolare le densità di carica di polarizzazione presenti sulle superfici del dielettrico.
2. Scrivere l'espressione della d.d.p. tra un punto all'interno del conduttore e uno all'esterno (dal lato del dielettrico).

### Soluzione

1. Il campo generato da una piano conduttore carico nel vuoto è
$$
\vec{E}_v = \frac{\sigma}{\epsilon_0} \hat{n}
$$
dove $\hat{n}$ è la normale al piano. All'interno di un dielettrico $\epsilon_0 \to \epsilon = \kappa \epsilon_0$, quindi
$$
\vec{E}_d = \frac{\sigma}{\kappa\epsilon_0} \hat{n}
$$
cioè l'intensità del campo diminuisce di un fattore $\kappa$. Sulle superfici del dielettrico appariranno delle densità di carica $\sigma_p$ in forza del fenomeno della polarizzazione. Queste densità di carica sono legate alla polarizzazione tramite la relazione $\sigma_p = \vec{P} \cdot \hat{n}$, dove $\vec{P} = \epsilon_0 (\kappa - 1) \vec{E}$ è il vettore polarizzazione (diverso da zero solo all'interno del dielettrico), che in questo caso vale quindi:
$$
\vec{P} = \frac{\kappa - 1}{\kappa} \sigma \hat{n}.
$$
Il dielettrico che stiamo considerando ha due superfici, una con normale diretta *verso* il conduttore, l'altra in verso opposto. Avremo quindi due densità di polarizzazione date da:
$$
\sigma_p = \pm \vec{P} \cdot \hat{n} = \pm \frac{\kappa - 1}{\kappa} \sigma
$$

2. Abbiamo visto come il campo elettrico assuma valori diversi all'interno e all'esterno del dielettrico. La d.d.p. tra la superficie del conduttore (su cui consideriamo $V(0) = 0$) ed un punto all'interno del dielettrico vale:
$$
\Delta V(x < h) = \int_0^x \frac{\sigma}{\epsilon} dx' = \frac{\sigma}{\epsilon}x
$$
Sulla seconda superficie del dielettrico si avrà quindi
$$
\Delta V(h) = \frac{\sigma}{\epsilon}h
$$
Per distanze maggiori, il campo da integrare è quello nel vuoto, quindi:
$$
\Delta V(x > h) = \int_0^h \frac{\sigma}{\epsilon} dx' + \int_h^x \frac{\sigma}{\epsilon_0} dx' = \frac{\sigma}{\epsilon}h + \frac{\sigma}{\epsilon_0}(x - h)
$$
Per validare il risultato basta vedere cosa succede se $\kappa = 1$...

---

## Esercizio 23

{{< figure src="../images/esercizio_23.png" width="400px">}}

### Testo

Un cilindro conduttore di raggio $R_1$ caricato con densità di carica superficiale $\sigma$, è posto al centro di un cilindro cavo, anch'esso conduttore, di raggio interno $R_3$ ed esterno $R_4$. Lo spazio interno tra le superfici è riempito con due dielettrici, anch'essi a forma di cilindro cavo. Il primo, di costante dielettrica $\kappa_1$, ha raggi $R_1$ ed $R_2$, il secondo, di costante dielettrica $\kappa_2$, ha raggi $R_2$ ed $R_3$. 

1. Calcolare $\vec{E}$, $\vec{D}$ e $\vec{P}$.
2. Calcolare le densità di polarizzazione sulle superfici dei dielettrici.
3. Calcolare la d.d.p. tra il cilindro interno ed un punto qualsiasi all'esterno del guscio cilindrico nei casi in cui quest'ultimo sia messo a terra oppure no.

### Soluzione

1. All'interno dei conduttori $\vec{E}$, e quindi anche $\vec{D}$ e $\vec{P}$, che sono proporzionali ad $\vec{E}$, sono nulli. All'esterno del cilindro cavo si ha, per il teorema di Gauss,
$$
\vec{E}(r ) = \frac{\sigma_4 R_4}{\epsilon_0 r} \hat{r} = \frac{\sigma R_1}{\epsilon_0 r}\hat{r}.
$$
essendoci il vuoto, $\vec{P} = 0$ e quindi $\vec{D}(r ) = \epsilon_0\vec{E}( r) = \frac{\sigma R_1}{r}\hat{r}$. All'interno dei dielettrici, se utilizziamo il teorema di Gauss per $\vec{D}$ troviamo che vale sempre (indipendentemente dal fatto che ci troviamo in un dielettrico o nell'altro)
$$
\vec{D}( r) = \frac{\sigma R_1}{r} \hat{r}
$$
questo perché le uniche cariche libere (cioè non dovute alla polarizzazione) sono quelle che si trovano sulla superficie del cilindro interno. Poiché $\vec{D} = \epsilon \vec{E} = \epsilon_0 \vec{E} + \vec{P}$ e quindi $\vec{P} = \epsilon_0 (\kappa - 1) \vec{E}$, si ha
\begin{align}
\vec{E} & = \frac{\sigma R_1}{\kappa_i \epsilon_0 r} \hat{r}\\\\\\
\vec{P} & = \frac{\kappa_i - 1}{\kappa_i} \frac{\sigma R_1}{r} \hat{r}
\end{align}
dove $i = 1, 2$ a seconda del dielettrico considerato.

2. La densità di polarizzazione vale sempre $\sigma_p = \vec{P} \cdot \hat{n}$. Sulla superficie interna:
$$
\sigma^{(1)}_p(R_1) = -\frac{\kappa_1- 1}{\kappa_1} \sigma
$$
Sulla superficie esterna del primo dielettrico:
$$
\sigma^{(1)}_p(R_2) = \frac{\kappa_1 - 1}{\kappa_1} \frac{\sigma R_1}{R_2} = -\sigma^{(1)}_p(R_1)\frac{R_1}{R_2}
$$
Sulla superficie interna del secondo dielettrico:
$$
\sigma^{(2)}_p(R_2) = -\frac{\kappa_2 - 1}{\kappa_2} \frac{\sigma R_1}{R_2}
$$
Mentre sulla superficie esterna del secondo dielettrico:
$$
\sigma^{(2)}_p(R_2) = \frac{\kappa_2 - 1}{\kappa_2} \frac{\sigma R_1}{R_3} = -\sigma^{(2)}_p(R_2)\frac{R_2}{R_3}
$$
Questi valori si possono validare a due a due considerando che la quantità di carica di polarizzazione in un dielettrico (comprese le sue superfici) deve essere zero!

3. Per il principio della gabbia di Faraday, il fatto che il conduttore più esterno sia messo o meno a terra non cambia la d.d.p. tra i due conduttori, che vale sempre:
$$
\Delta V\_{1,3} = V(R_1) - V(R_3) = \int\_{R_1}^{R_3} \vec{E} \cdot d\vec{s} = \int\_{R_1}^{R_2} \frac{\sigma R_1}{\kappa_1 \epsilon_0 r} dr + \int\_{R_2}^{R_3} \frac{\sigma R_1}{\kappa_2 \epsilon_0 r} dr = \frac{\sigma R_1}{\epsilon_0} \left( \frac{1}{\kappa_1} \log\left( \frac{R2}{R1}\right) + \frac{1}{\kappa_2} \log\left( \frac{R3}{R2}\right)\right)
$$
 D'altro canto, la d.d.p. tra il guscio esterno ed un punto qualsiasi al suo esterno vale $0$ nel caso sia messo a terra (applicate il teorema di Gauss per dimostrarlo!), oppure
$$
 \Delta V_4(r ) = \int\_{R_4}^r \frac{\sigma R_1}{\epsilon_0 r} dr = \frac{\sigma R_1}{\epsilon_0} \log\left( \frac{r}{R_4} \right)
$$
 nel caso in cui non lo sia (vedi sopra per l'espressione del campo). La differenza di potenziale totale è quindi diversa nei due casi e vale:
 \begin{align}
\Delta V(r ) & = \Delta V\_{1,3} + \Delta V_4(r )\\\\\\
\Delta V(r ) & = \Delta V\_{1,3}
 \end{align}

---

## Esercizio 24

### Testo

Una nuvola temporalesca ha una forma approssimativamente rettangolare, con lati $a = 2.0$ km e $b = 3.0$ km, e fluttua ad un'altezza $h = 500$ m al di sopra di una zona pianeggiante. La nuvola contiene una carica $q = -80$ C. 

1. Sapendo che la rigidità dielettrica dell'aria è circa $3.0 \times 10^6$ V/m, le condizioni descritte sopra sono sufficienti per generare fulmini?
2. Qual è l'energia elettrostatica del sistema nuvola $+$ terreno?

### Soluzione

Il sistema può essere visto come un condensatore piano di capacità:

$$
C = \frac{\epsilon_0 \Sigma}{h} = \frac{\epsilon_0 ab}{h} = 10.6 \times 10^{-8}\, \mathrm{F}
$$

**Nota Bene:** la costante dielettrica relativa dell'aria è praticamente uno, quindi possiamo utilizzare le espressioni valide nel vuoto.

La differenza di potenziale tra la terra (caricata positivamente) e la nuvola (caricata negativamente) vale:

$$
\Delta V = \frac{q}{C} = 7.5 \times 10^8\, \mathrm{V}
$$

1. La rigidità dielettrica è il massimo valore del campo elettrostatico che può essere applicato senza causare scariche (fulmini!). Calcoliamo il campo all'interno del "condensatore", utilizzando la solita espressione per i condensatori piani (molto approssimata in questo caso, perché?):
$$
E \simeq \Delta V / h = 1.5 \times 10^6\, \frac{\mathrm{V}}{\mathrm{m}}
$$
che è più bassa della rigidità dielettrica: niente fulmini (in questa approssimazione)!
2. L'espressione dell'energia di un qualunque condensatore è $U_e = \frac{1}{2} q\Delta V$, quindi si ha:
$$
U_e = \frac{1}{2} q \Delta V = 3 \times 10^{10}\, \mathrm{J}
$$

---

## Esercizio 27

### Testo

Dato il circuito in figura e i valori $R_1 = 1.0\, \Omega$, $R_2 = 3.0\, \Omega$, $R_3 = 2.0\, \Omega$ and $R_4 = 2.0\, \Omega$,

{{< figure src="../images/esercizio_27.png" width="250px">}}

1. Calcolare la resistenza equivalente.
2. Calcolare la potenza dissipata da ognuno dei quattro resistori se $V_0 = 6$ V.

### Soluzione

1. $R_2$ ed $R_3$ sono in parallelo, e quindi si ha
$$
R\_{\rm eq}^{(1)} = \frac{R_2 R_3}{R_2 + R_3} = 1.2 \, \Omega
$$
$R_1$ e $R\_{\rm eq}^{(1)}$ sono in serie, quindi
$$
R\_{\rm eq}^{(2)} = R_1 + R\_{\rm eq}^{(1)} = 2.2 \Omega
$$
Restano solamente due resistori ($R_4$ e $R\_{\rm eq}^{(2)}$), che sono collegati in parallelo:
$$
R\_{\rm eq} = \frac{R_4 R\_{\rm eq}^{(2)}}{R_4 + R\_{\rm eq}^{(2)}} = 1.05 \, \Omega
$$
2. Sappiamo che $\mathcal{P} = \Delta V i = R i^2 = \frac{\Delta V^2}{R}$. Per poter applicare queste relazioni dobbiamo prima trovare o le d.d.p. ai capi dei resistori, o le correnti che passano al loro interno o entrambi. Sappiamo che la corrente totale è data da:
$$
i = \frac{V_0}{R\_{\rm eq}} = 5.73 \, {\rm A}
$$
Quella passante per $R_4$ vale
$$
i_4 = \frac{V_0}{R_4} = 3\, {\rm A}
$$
e quindi, per la condizione di stazionarietà, quella che passa nel ramo superiore (che, sempre per lo stesso principio, passa anche per $R_1$) vale
$$
i_1 = i - i_4 = 2.72\, {\rm A}
$$
Quindi la d.d.p. ai capi di $R_1$ è:
$$
\Delta V_1 = R_1 i_1 = 2.71 \, {\rm V}
$$
Quindi la d.d.p. ai capi di $R_2$ ed $R_3$ vale:
$$
\Delta V\_{\rm eq}^{(1)} = V_0 - \Delta V_1 = 3.27\, {\rm V}
$$
per cui le correnti negli ultimi due resistori valgono:
\begin{align}
i_2 & = \frac{\Delta V\_{\rm eq}^{(1)}}{R_2} = 1.09 \, {\rm A}\\\\\\
i_3 & = \frac{\Delta V\_{\rm eq}^{(1)}}{R_3} = 1.63 \, {\rm A}
\end{align}
**Nota Bene**: perché $i_2 + i_3 \neq i_1$? Perché tagliando i decimali finali stiamo sempre approssimando i valori numerici... Se calcolassimo tutte le quantità senza approssimare ad ogni passaggio e stampassimo *tutte* le cifre decimali vedremmo che le correnti verrebbero identiche. Dai valori delle correnti otteniamo la potenza:
\begin{align}
\mathcal{P}_1 & = R_1 i_1^2 = 7.4 \, {\rm W}\\\\\\
\mathcal{P}_2 & = R_2 i_2^2 = 3.6 \, {\rm W}\\\\\\
\mathcal{P}_3 & = R_3 i_3^2 = 8.7 \, {\rm W}\\\\\\
\mathcal{P}_4 & = R_4 i_4^2 = 18 \, {\rm W}
\end{align}

