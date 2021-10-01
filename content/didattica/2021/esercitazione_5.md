+++
title = "Esercitazione del 22/10/2020"
date = 2020-10-21T09:47:43+02:00
draft = false
+++

[Esercizio 20](#esercizio-20) -- [Esercizio 21](#esercizio-21) -- [Esercizio 22](#esercizio-22) -- [Esercizio 23](#esercizio-23)

## Esercizio 20

### Testo

{{< figure src="../images/esercizio_20.png" width="500px">}}

Una sfera di raggio $R_1$ è posta al centro di una sfera cava di raggio interno $R_2$ ed esterno $R_3$. I due conduttori sono mantenuti da un generatore a valori del potenziale $V_1$ e $V_2$ rispetto al potenziale all'infinito (che poniamo a 0 per comodità). 

1. Calcolare le cariche $q_1$, $q_2$ e $q_3$ depositate sulle tre superfici conduttive.
2. Calcolare numericamente le cariche se $R_1 = 10$ cm, $R_2 = 20$ cm, $R_3 = 25$ cm, $V_1 = -1000$ V, $V_2 = 200$ V.

### Soluzione

1. La differenza di potenziale tra $R_1$ ed $R_2$ si trova integrando il campo all'interno della cavità:
$$
\Delta V = V_1 - V_2 = \frac{q_1}{4\pi\epsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2} \right)
$$
Da cui si ricava la carica della sfera interna:
$$
q_1 = 4 \pi \epsilon_0 \Delta V \left( \frac{R_1 R_2}{R_1 - R_2} \right) = \Delta V C
$$
Dove l'ultima relazione mostra come il sistema possa essere considerato un condensatore sferico di capacità $C = 4 \pi \epsilon_0 \left( \frac{R_1 R_2}{R_1 - R_2} \right)$. Per il teorema di Gauss, la carica sulla superficie interna della sfera cava non può essere altro che $q_2 = -q_1$.  La carica sulla superficie esterna, invece, si trova integrando direttamente il campo per trovare la differenza di potenziale tra la sfera cava e l'infinito (dove $V = 0$):
$$
V_2 = \frac{q_3}{4\pi \epsilon_0} \frac{1}{R_3}
$$
Da cui si trova che:
$$
q_3 = 4 \pi \epsilon_0 R_3 V_2
$$

2. Sostituiamo i valori nelle relazioni trovate precedentemente:
\begin{align}
q_1 & = -2.67 \times 10^{-8}\\\\\\
q_2 & = 2.67 \times 10^{-8}\\\\\\
q_3 & = 5.6 \times 10^{-9}
\end{align}

---

## Esercizio 21
<small>MVN: esercizio 4.10</small>

### Testo

{{< figure src="../images/esercizio_21.png" width="250px">}}

Cinque fogli metallici sferici e concentrici (di spessore trascurabile) sono inizialmente scarichi. Il secondo e il terzo e il quarto e il quinto sono collegati da fili conduttori. Una carica $q$ è depositata sulla superficie più interna.
Calcolare

1. le cariche presenti sulle superfici;
2. il campo $E(r )$;
3. l'energia elettrostatica del sistema;

Calcolare le stesse quantità se

{{< figure src="../images/esercizio_21_1.png" width="250px">}}
4. i conduttori 1 e 2 vengono collegati;
{{< figure src="../images/esercizio_21_2.png" width="250px">}}
5. i conduttori 3 e 4 vengono collegati;
{{< figure src="../images/esercizio_21_3.png" width="300px">}}
6. il conduttore 5 viene collegato a terra;

### Soluzione

I conduttori collegati possono essere visti come un unico conduttore, quindi il sistema può essere visto come una sfera conduttrice carica al centro di due sfere conduttrici concentriche.

1. La sfera centrale ha carica $q$. La superficie 2 si carica con $-q$ per induzione completa. Per conservazione della carica la superficie 3 acquista quindi una carica $q$. Per i conduttori 4 e 5 vale lo stesso discorso, e quindi si caricano rispettivamente con carica $-q$ e $q$.

2. Il campo è nullo all'interno dei conduttori e nelle zone comprese tra i conduttori collegati (quindi 2-3 e 4-5). Negli altri punti possiamo utilizzare il teorema di Gauss per trovare il campo, che vale sempre
$$
E(r ) = \frac{q}{4 \pi \epsilon_0 r^2}
$$

3. Il sistema può essere visto come composto da due condensatori sferici e da una superficie sferica cava. L'energia di un condensatore è semplicemente $U_e = \frac{q^2}{2C}$, dove la capacità di un condensatore sferico di raggi $R_a > R_b$ è
$$
C = 4 \pi \epsilon_0 \frac{R_a R_b}{R_a - R_b}
$$
L'energia elettrostatica di una sfera conduttrice carica può essere calcolata in due modi equivalenti:
	1. considerandola come un'armatura di un condensatore piano avente l'altra armatura all'infinito. In questo caso possiamo associarle una capacità $C\_\infty = 4 \pi \epsilon_0 R_b$ che può essere utilizzata per calcolarne l'energia elettrostatica;
	2. utilizzando la relazione che lega il campo all'energia, $U_e = \frac{1}{2} \epsilon_0 \int\_V E^2 d\tau$
In entrambi i casi otteniamo $U_e = \frac{q^2}{8 \pi \epsilon_0 R_5}$, e l'energia totale vale quindi
$$
U_e = \frac{q^2}{8 \pi \epsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2} + \frac{1}{R_3} - \frac{1}{R_4} + \frac{1}{R_5}\right)
$$

4. Collegare i due conduttori azzera la loro carica e quindi annulla il campo nell'intercapedine (e quindi l'energia elettrostatica associata al condensatore).
5. Come sopra.
6. Collegare a terra il conduttore più esterno lo fa scaricare, e quindi carica, campo ed energia si annullano.

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

