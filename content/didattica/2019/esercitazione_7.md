+++
title = "Esercitazione del 29/10/2019"
date = 2019-10-29T10:00:44+02:00
draft = false
+++

[Esercizio 31](#esercizio-31)  -- [Esercizio 32](#esercizio-32)

## Esercizio 31
<small>Esercizio II.6 del Mencuccini-Silvestrini</small>

### Testo

Dato il circuito in figura

{{< figure src="../images/esercizio_31.png" width="300px">}}

calcolare quale relazione debba sussistere tra le quattro capacità per far sì che si annulli la differenza di potenziale $\Delta V\_{AB} = V_A - V_B$.

### Soluzione

La differenza di potenziale ai capi dei due rami è la stessa, sono cioè collegati in parallelo. Le capacità equivalenti dei due rami valgono:

\begin{align}
C_u &= \frac{C_1 C_2}{C_1 + C_2}\\\\\\
C_d &= \frac{C_3 C_4}{C_3 + C_4}
\end{align}

e quindi le cariche sui rami valgono:

\begin{align}
q_u &= \Delta V \frac{C_1 C_2}{C_1 + C_2}\\\\\\
q_d &= \Delta V \frac{C_3 C_4}{C_3 + C_4}
\end{align}

Per il ramo superiore vale $\Delta V = \frac{q_u}{C_u} = \frac{q_u}{C_1} + \frac{q_u}{C_2}$. I due termini indicano la differenza di potenziale tra uno dei due poli ed il punto mediano $A$, e tra questo e il secondo polo. La d.d.p. tra il primo polo e $A$ vale quindi

$$
\Delta V_A = \Delta V - \frac{q_u}{C_2}
$$

Una relazione simile per la differenza di potenziale rispetto a $B$ si può scrivere per il ramo inferiore

$$
\Delta V_B = \Delta V - \frac{q_d}{C_4}
$$

Uguagliando queste due quantità troviamo

$$
\frac{q_u}{C_2} = \frac{q_d}{C_4}
$$

da cui si ricava 

$$
\frac{C_1}{C_1 + C_2} = \frac{C_3}{C_3 + C_4}
$$

e quindi

$$
C_1 C_4 = C_2 C_3
$$

---
