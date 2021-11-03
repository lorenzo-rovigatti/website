+++
title = "Esercitazione del 02/11/2021"
date = 2021-10-21T09:47:43+02:00
draft = false

+++

[Esercizio 25](#esercizio-25) -- [Esercizio 26](#esercizio-26) -- [Esercizio 28](#esercizio-28) -- [Esercizio 29](#esercizio-29)

## Esercizio 25
<small>Ispirato dall'esercizio III.13 del Mencuccini-Silvestrini</small>

### Testo

{{< figure src="../images/esercizio_25.png" width="600px">}}

Un condensatore piano di dimensioni $a \times b \times h$ è parzialmente riempito (per un tratto $x = a / 3$) di una lastra di dielettrico omogeneo e isotropo di costante dielettrica relativa $\kappa$ e mantenuto ad una d.d.p. $\Delta V$. 

1. Quanto vale la carica $q_d$ che si dispone sulla parte di armatura superiore che si affaccia sul dielettrico?
2. Calcolare $q_d$ se $\Delta V = 113$ V, $a = b = 10$ cm, $h = 2$ mm e $\kappa = 4$.

### Soluzione

1. Il condensatore può essere visto come due condensatori in parallelo di capacità $C_d = \epsilon_0 \kappa ab / 3h$ e $C_v = 2 \epsilon_0 ab / 3h$. La carica di entrambi i "condensatori" si trova utilizzando la relazione che lega capacità, carica e differenza di potenziale, quindi: 
$$
q_d = C_d \Delta V = \frac{\epsilon_0 \kappa ab}{3h} \Delta V
$$
2. Sostituiamo i valori dati nelle relazione trovata al punto precedente:
$$
q_d = \frac{4}{3} 113 \cdot 8.854 \times 10^{-12} \frac{0.1 \cdot 0.1}{0.002}\, \mathrm{C} = 0.667 \times 10^{-8} \, \mathrm{C}
$$

---

## Esercizio 26

### Testo

{{< figure src="../images/esercizio_26.png" width="250px">}}

Un conduttore cilindrico cavo di lunghezza $h$ ha raggio interno $R_1$ ed esterno $R_2$ ed è costituito da un materiale di resistività $\rho$.

1. Calcolare la resistenza $R$ che oppone ad una corrente che scorre in direzione parallela all'asse del cilindro.
2. Dati $R_1 = 1$ mm, $R_2 = 1.5$ mm e se nel conduttore scorre una corrente $i = 500$ mA e il campo all'interno del conduttore ha intensità $E = 10$ V/m, quanto vale la resistività $\rho$?

### Soluzione

1. Applichiamo la definizione di resistenza:
$$
R = \rho \int_0^h \frac{dh}{\Sigma(h)} = \rho \int_0^h \frac{dh}{\pi (R_2^2 - R_1^2)} = \frac{\rho h}{\pi (R_2^2 - R_1^2)}
$$
2. Dobbiamo prima applicare la legge di Ohm per trovare la resistenza. Per farlo, però, dobbiamo prima calcolare la d.d.p. ai capi del conduttore:
$$
\Delta V = Eh = 10\, {\rm V}
$$
Quindi:
$$
R = \frac{\Delta V}{i} = 20\, {\rm \Omega} = \rho \frac{h}{\pi (R_2^2 - R_1^2)}
$$
e quindi la resistività vale:
$$
\rho = \frac{E \pi (R_2^2 - R_1^2)}{i} = 7.85 \times 10^{-5} \, \Omega{\rm m}
$$

---

## Esercizio 28
<small>MNV: esempio 5.9</small>

### Testo

Calcolare la corrente che scorre nel seguente circuito, composto da un'unica maglia ($\mathcal{E}_1 = 50$ V, $\mathcal{E}_2 = 100$ V, $R = 50\, \Omega$, $r_1 = 20\, \Omega$, $r_2 = 30\, \Omega$):

{{< figure src="../images/esempio_kirchhoff_2.png" width="400px">}}

### Soluzione

Scegliamo (arbitrariamente) il verso orario. La seconda legge di Kirchhoff diventa:

$$
\mathcal{E}_1 - \mathcal{E}_2 = (r_1 + r_2 + R) i
$$

e quindi la corrente vale:

$$
i = \frac{\mathcal{E}_1 - \mathcal{E}_2}{r_1 + r_2 + R} = -0.5 \, \mathrm{A}.
$$

Il segno negativo della corrente implica che il verso in cui scorre è opposto a quello che abbiamo scelto (quindi antiorario).

---

## Esercizio 29
<small>MNV: esempio 5.10</small>

### Testo

Calcolare le correnti che scorrono nel seguente circuito, composto da due maglie($\mathcal{E}_1 = 18$ V, $\mathcal{E}_2 = 12$ V, $R_1 = 12\, \Omega$, $R_2 = 2\, \Omega$, $R_3 = 6\, \Omega$, $R_4 = 4 \, \Omega$):

{{< figure src="../images/esempio_kirchhoff_3.png" width="500px">}}

### Soluzione

Scegliamo il verso orario per la maglia a sinistra e antiorario per quella a destra (quindi al contrario di quanto indicato in figura, che invece corrisponde alla risoluzione dell'esercizio che si trova in fondo alle soluzioni). Applicando la seconda legge di Kirchhoff otteniamo le seguenti equazioni:

\begin{align}
- \mathcal{E}_1 & = R_1 i_1 + R_3 (i_1 + i_2)\\\\\\
- \mathcal{E}_2 & = (R_2 + R_4) i_2 + R_3 (i_2 + i_1)
\end{align}

Se sostituiamo i valori numerici troviamo:

\begin{align}
- 18 & = 18 i_1 + 6 i_2\\\\\\
-12 & = 12 i_2  + 6 i_1
\end{align}

da cui ricaviamo:

\begin{align}
i_1 & = -0.8 \, {\rm A}\\\\\\
i_2 & = -0.6 \, {\rm A}
\end{align}

per cui $i_1$ scorre in senso antiorario e $i_2$ scorre in senso orario. In $R_3$ scorre la corrente $i_3 = i_1 + i_2 = -1.4$ A, quindi dal basso verso l'alto.

Se scegliamo i versi come quelli in figura allora la corrente che scorre nel ramo condiviso ha espressioni diverse per le due maglie. In questo caso l'espressione della corrente che scorre in $R_3$ è differente per le due maglie. In particolare vale

$$
i_3^L = i_1 - i_2
$$

per la maglia di sinistra e

$$
i_3^R = i_2 - i_1
$$

per la maglia di destra. Applicando la seconda equazione di Kirchhoff si ottiene il seguente sistema di equazioni:

\begin{align}
- \mathcal{E}_1 & = R_1 i_1 + R_3 i_3 = R_1 i_1 + R_3 (i_1 - i_2)\\\\\\
\mathcal{E}_2 & = (R_2 + R_4) i_2 + R_3 i_3 = (R_2 + R_4) i_2 + R_3 (i_2 - i_1)
\end{align}

le cui soluzioni corrispondono a quelle trovate precedentemente.
