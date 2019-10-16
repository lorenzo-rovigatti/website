## Esercizio 20

### Testo

{{< figure src="../images/esercizio_20.png" width="500px">}}

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