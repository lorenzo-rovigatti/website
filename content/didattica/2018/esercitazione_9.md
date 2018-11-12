+++
title = "Esercitazione 07/11/2018"
date = 2018-10-18T22:24:21+02:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

[Esercizio 36](#esercizio-36) -- [Esercizio 37](#esercizio-37) -- [Esercizio 38](#esercizio-38)

## Esercizio 36
<small>MNV: esempio 5.9</small>

### Testo

Calcolare la corrente che scorre nel seguente circuito, composto da un'unica maglia ($\mathcal{E}_1 = 50$ V, $\mathcal{E}_2 = 100$ V, $R = 50\, \Omega$, $r_1 = 20\, \Omega$, $r_2 = 30\, \Omega$):

{{< figure src="../images/esempio_kirchhoff_2.png" alt="Un circuito a maglia singola" width="400px">}}

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

## Esercizio 37
<small>MNV: esempio 5.10</small>

### Testo

Calcolare le correnti che scorrono nel seguente circuito, composto da due maglie($\mathcal{E}_1 = 18$ V, $\mathcal{E}_2 = 12$ V, $R_1 = 12\, \Omega$, $R_2 = 2\, \Omega$, $R_3 = 6\, \Omega$, $R_4 = 4 \, \Omega$):

{{< figure src="../images/esempio_kirchhoff_3.png" alt="Un circuito con due maglie" width="500px">}}

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

## Esercizio 38

### Testo

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
