+++
title = "Esercitazione del 29/10/2020"
date = 2020-10-26T10:00:44+02:00
draft = false
+++

[Esercizio 24](#esercizio-24) -- [Esercizio 25](#esercizio-25) --
[Esercizio 26](#esercizio-26) -- [Esercizio 27](#esercizio-27) -- [Esercizio 28](#esercizio-28) -- [Esercizio 29](#esercizio-29)

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
