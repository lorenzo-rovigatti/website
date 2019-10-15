## Esercizio 18

### Testo

{{< figure src="../images/esercizio_18.png" width="500px">}}

Una sfera di raggio $R_1$ è posta al centro di una sfera cava di raggio interno $R_2$ ed esterno $R_3$. I due conduttori sono mantenuti da un generatore a valori del potenziale $V_a$ e $V_b$ rispetto al potenziale all'infinito (che poniamo a 0 per comodità). 

1. Calcolare le cariche $q_1$, $q_2$ e $q_3$ depositate sulle tre superfici conduttive.
2. Calcolare numericamente le cariche se $R_1 = 10$ cm, $R_2 = 20$ cm, $R_3 = 25$ cm, $V_1 = -1000$ V, $V_2 = 200$ V.

### Soluzione

1. La differenza di potenziale tra $R_1$ ed $R_2$ si trova integrando il campo all'interno della cavità:
$$
\Delta V = V_a - V_b = \frac{q_1}{4\pi\epsilon_0} \left( \frac{1}{R_2} - \frac{1}{R_1} \right)
$$
Da cui si ricava la carica della sfera interna:
$$
q_1 = 4 \pi \epsilon_0 \Delta V \left( \frac{R_1 R_2}{R_1 - R_2} \right) = \Delta V C
$$
Dove l'ultima relazione mostra come il sistema possa essere considerato un condensatore sferico di capacità $C = 4 \pi \epsilon_0 \left( \frac{R_1 R_2}{R_1 - R_2} \right)$. Per il teorema di Gauss, la carica sulla superficie interna della sfera cava non può essere altro che $q_2 = -q_1$.  La carica sulla superficie esterna, invece, si trova integrando direttamente il campo per trovare la differenza di potenziale tra la sfera cava e l'infinito (dove $V = 0$):
$$
V_b = \frac{q_3}{4\pi \epsilon_0} \frac{1}{R_3}
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

## Esercizio 19

### Testo

Sono noti la differenza di potenziale $\Delta V\_{ab}$ e le capacità di ciascun condensatore del circuito in figura:

{{< figure src="../images/esercizio_19.png" width="350px">}}

1. Determinare la capacità equivalente del circuito.
2. Calcolare la carica e la d.d.p. di ciascun condensatore.

### Soluzione

1. La capacità equivalente totale si ottiene in tre passi:
	1. $C_1$, $C_2$ e $C_3$ sono in parallelo. La loro capacità equivalente è quindi $C\_{\rm eq}^{(1)} = C_1 + C_2 + C_3$.
	2. Disegniamo il circuito equivalente: $C\_{\rm eq}^{(1)}$ e $C_4$ sono in serie, e quindi la loro capacità equivalente vale $C\_{\rm eq}^{(2)} = \frac{C_4 C\_{\rm eq}^{(1)}}{C_4 + C\_{\rm eq}^{(1)}}$.
	3. $C\_{\rm eq}^{(2)}$ e $C_5$ sono ora chiaramente in parallelo, e quindi $C\_{\rm eq} = C\_{\rm eq}^{(2)} + C_5$.
2. Anche qui il procedimento si semplifica se consideriamo una parte del circuito alla volta:
	* $C_5$ è posto ad una d.d.p. nota perché $\Delta V_5 = \Delta V$, quindi $q_5 = C_5 \Delta V$.
	* Il condensatore equivalente $C\_{eq}^{(2)}$ si trova anch'esso a $\Delta V^{(2)} = \Delta V$, e quindi la carica su di esso depositata è $q\_{\rm eq}^{(2)} = C\_{eq}^{(2)} \Delta V$. Poiché $C\_{eq}^{(1)}$ e $C_4$ sono in serie, essi contengono la stessa quantità di carica, quindi $q_4 = q\_{\rm eq}^{(2)}$, per cui $\Delta V_4 = q_4 / C_4$.
	* La d.d.p. ai capi dei tre condensatori in parallelo è (per definizione) la stessa, $\Delta V^{(1)}\_{\rm eq}$. Possiamo calcolarla notando che $\Delta V^{(1)}\_{\rm eq} + \Delta V_4 = \Delta V$ e quindi $\Delta V^{(1)}\_{\rm eq} = \Delta V - \Delta V_4$. Poiché conosciamo sia la d.d.p che le capacità dei diversi condensatori, le quantità di carica si possono calcolare immediatamente: $q_1 = C_1 \Delta V^{(1)}\_{\rm eq}$, $q_2 = C_2 \Delta V^{(1)}\_{\rm eq}$ e $q_3 = C_3 \Delta V^{(1)}\_{\rm eq}$.

---

## Esercizio 20
<small>Esercizio II.11 del Mencuccini-Silvestrini</small>

### Testo

Tre condensatori, di capacità $C_A = C$, $C_B = 2C$, $C_C = 3C$, sono disposti come in figura:

{{< figure src="../images/esercizio_20.png" width="350px">}}

Gli elettrodi di $C_A$ e $C_B$ sono tenuti a differenze di potenziale $V_A = 10$ V e $V_B = 40$ V, mentre un elettrodo di $C_C$ è collegato a terra. Qual è la differenza di potenziale ai capi di $C_C$?

### Soluzione

Le differenze di potenziale ai capi dei tre condensatori valgono:

\begin{align}
V_A - V_C & = \frac{q_A}{C}\\\\\\
V_B - V_C & = \frac{q_B}{2C}\\\\\\
V_C & = \frac{q_C}{3C} = \frac{q_A + q_B}{3C} = \frac{cV_A - CV_C + 2CV_B - 2CV_C}{3C}
\end{align}

Da cui si ricava che

$$
V_C = \frac{V_A + 2V_B}{6} = 15\, \mathrm{V}
$$

---