+++
title = "Esercitazione del 24/10/2019"
date = 2019-10-20T10:00:44+02:00
draft = false
+++

[Esercizio 26](#esercizio-26) -- [Esercizio 27](#esercizio-27) -- [Esercizio 28](#esercizio-28) -- [Esercizio 29](#esercizio-29) -- [Esercizio 30](#esercizio-30)

## Esercizio 26

### Testo

{{< figure src="../images/esercizio_26.png" width="250px">}}

Un conduttore cilindro cavo di lunghezza $h$ ha raggio interno $R_1$ ed esterno $R_2$ ed è costituito da un materiale di resistività $\rho$.

1. Calcolare la resistenza $R$ che oppone ad una corrente che scorre in direzione parallela all'asse del cilindro.
2. Dati $R_1 = 1$ mm, $R_2 = 1.5$ mm, $h = 1$ m e se nel conduttore scorre una corrente $i = 500$ mA e il campo all'interno del conduttore ha intensità $E = 10$ V/m, quanto vale la resistività $\rho$?

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
\rho = \frac{R \pi (R_2^2 - R_1^2)}{h} = 7.85 \times 10^{-5} \, \Omega{\rm m}
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

Scegliamo anche in questo caso il verso orario (per entrambe le maglie). Otteniamo le seguenti equazioni:

\begin{align}
- \mathcal{E}_1 & = R_1 i_1 + R_3 (i_1 - i_2)\\\\\\
\mathcal{E}_2 & = (R_2 + R_4) i_2 + R_3 i_3 = (R_2 + R_4) i_2 + R_3 (i_2 - i_1)
\end{align}

Se sostituiamo i valori numerici troviamo:

\begin{align}
- 18 & = 12 i_1 + 6 (i_1 - i_2) = 18 i_1 - 6 i_2\\\\\\
12 & = 6 i_2 + 6 (i_2 - i_1) = - 6 i_1 + 12 i_2 
\end{align}

da cui ricaviamo:

\begin{align}
i_1 & = -0.8 \, {\rm A}\\\\\\
i_2 & = 0.6 \, {\rm A}
\end{align}

per cui $i_1$ scorre in senso antiorario. In $R_3$ scorre la corrente $i_3 = i_1 - i_2 = -1.4$ A se consideriamo il verso della prima maglia, mentre vale $i_3 = i_2 - i_1 = 1.4$ A se consideriamo quello della seconda. In entrambi i casi otteniamo una corrente che scorre dal basso verso l'alto.

---

## Esercizio 30

### Testo

{{< figure src="../images/esercizio_30.png" width="150px">}}

Un condensatore piano di dimensioni $a \times b \times h_i$ è riempito completamente con un liquido incomprimibile dielettrico di costante relativa $\kappa$ e mantenuto da un generatore ad una d.d.p. $\Delta V$ costante. Se la distanza tra le due armature diventa $1.5 h_i$,

1. come varia la capacità del condensatore?
2. se prima di fare questa operazione di allontanamento il generatore venisse spento, cosa succederebbe?
3. se l'operazione precedente venisse ripetuta per un dielettrico solido, quale sarebbe l'espressione della d.d.p.?

### Soluzione

1. La capacità iniziale del condensatore è:
$$
C_i = \frac{\epsilon_0 a b \kappa}{h_i}
$$
Poiché il liquido è incomprimibile, il volume che occupa rimane costante. Il volume iniziale è $V_i = abh_i$, mentre quello finale vale $V_f = 1.5 a x h_i$, dove $x$ è l'altezza che raggiunge dopo la variazione di distanza. Ponendo $V_i = V_f$ si ottiene $x = \frac{2}{3}b$. La capacità finale sarà quindi:
$$
C_f = \frac{4}{9} \epsilon_0 a b \kappa + \frac{2}{9} \epsilon_0 a b = \frac{\epsilon_0 a b}{h_i} \left( \frac{4}{9}\kappa + \frac{2}{9} \right)
$$
La differenza di capacità vale quindi:
$$
\Delta C = C_f - C_i = \frac{\epsilon_0 a b}{h_i} \left( \frac{4}{9}\kappa + \frac{2}{9} - \kappa \right) = \frac{\epsilon_0 a b}{h_i} \left( \frac{2}{9} - \frac{5}{9}\kappa \right)
$$
2. Se il generatore venisse spento *prima* di allontanare le armature, la carica sulle armature resterebbe la stessa. Inizialmente abbiamo
$$
q_i = \Delta V C_i
$$
D'altro canto alla fine avremmo
$$
q_f = \Delta V_f C_f = q_i = \Delta V C_i
$$
e quindi la nuova d.d.p. tra le armature sarebbe:
$$
\Delta V_f = \Delta V \frac{C_i}{C_f} = \Delta V \frac{9\kappa}{4\kappa + 2}
$$
3. Definito $\sigma = q_i / ab$, il campo nel vuoto è $E = \sigma / \epsilon_0$, mentre nel dielettrico è $E = \sigma / \kappa\epsilon_0$. Il potenziale tra le armature vale quindi:
$$
\Delta V = \frac{\sigma \left(\frac{3}{2} h_i - h_i\right)}{\epsilon_0} + \frac{\sigma h_i}{\kappa\epsilon_0} = \frac{q_i}{ab\epsilon_0}\left(\frac{h_i}{2} + \frac{h_i}{\kappa}\right)
$$