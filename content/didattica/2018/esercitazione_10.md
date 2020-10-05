+++
title = "Esercitazione 08/11/2018"
date = 2018-10-18T22:24:21+02:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
caption = ""

+++

[Esercizio 39](#esercizio-39) -- [Esercizio 40](#esercizio-40) -- [Esercizio 41](#esercizio-41) -- [Esercizio 42](#esercizio-42) -- [Esercizio 43](#esercizio-43)

## Esercizio 39

### Testo

Due resistori in parallelo, $R_1$ ed $R_2$, sono collegati in parallelo ed attraversati dalle correnti $i_1$ e $i_2$. Detta $i = i_1 + i_2$ la somma delle correnti, verificare che i valori di $i_1$ ed $i_2$ sono tali da minimizzare la potenza dissipata per effetto Joule dal sistema.

### Soluzione

La potenza dissipata dal sistema vale, in generale,

$$
\mathcal{P} = R_1 i_1^2 + R_2 i_2^2
$$

I valori delle due correnti si ottengono tramite la legge di Ohm. Poiché sono collegati in parallelo, i due resistori sono posti alla stessa d.d.p., quindi

$$
R_1 i_1 = R_2 i_2
$$

da cui otteniamo, tenendo conto del fatto che $i_2 = i - i_1$, 

$$
i_1 = \frac{R_2}{R_1 + R_2} i.
$$

Poniamo ora per assurdo che nel resistore $R_1$ scorra una corrente $i_a$. La potenza può essere scritta come

$$
\mathcal{P} = R_1 i_a^2 + R_2 (i - i_a)^2.
$$

Possiamo calcolare il valore di $i_a$ che minimizza la potenza ponendo a zero la derivata di $\mathcal{P}$ rispetto ad $i_a$:

$$
\frac{d\mathcal{P}}{di_a} = 2 R_1 i_a - 2R_2(i - i_a) = 0.
$$

Da cui si trova

$$
i_a = \frac{R_2}{R_1 + R_2} i = i_1
$$

---

### Esercizio 40

### Testo

Dato il circuito in figura ($R_1 = 1 \, \Omega$, $R_2 = 2 \, \Omega$, $R_3 = 3 \, \Omega$, $R_4 = 4 \, \Omega$, $i_4 = 3$ A, $\mathcal{E}_2 = 20$ V)

{{< figure src="../images/esercizio_41.png" alt="circuito esercizio 41" width="500px">}}

1. Calcolare la corrente che scorre nei resistori
2. Calcolare la forza elettromotrice $\mathcal{E}_1$ del generatore di sinistra
3. Cosa cambierebbe se al posto di $R_1$ ci fosse un condensatore di capacità $C$?

### Soluzione

1. Applichiamo la legge di Kirchhoff alla maglia in basso a destra, scegliendo un verso antiorario:
$$
\mathcal{E}_1 = R_2 i_2 + R_4 i_4
$$
da cui possiamo ricavarci la corrente che passa attraverso $R_2$:
$$
i_2 = \frac{R_4 i_4 - \mathcal{E}_1}{R_2} = 4 \, {\rm A}.
$$
Applichiamo la prima legge di Kirchhoff per trovare la corrente che scorre attraverso $R_3$, cioè imponiamo $
i_4 - i_2 + i_3 = 0$, dove $i_2$ ha il segno meno perché *entra* nel nodo, mentre $i_4$ ha il segno $+$ perché ne esce. Risolvendo per $i_3$:
$$
i_3 = i_2 - i_4 = 1 \, {\rm A}.
$$
Il fatto che $i_3$ sia positiva ci dice che è uscente. Per trovare la corrente che scorre nella maglia in alto applichiamo la legge di Kirchhoff in senso orario:
$$
0 = i_1 R_1 + i_2 R_2 + i_3 R_3
$$
da cui si trova
$$
i_1 = -\frac{i_2 R_2 + i_3 R_3}{R_1} = -11 \, {\rm A}
$$
e quindi scorre in senso antiorario.

2. Applichiamo la legge di Kirchhoff alla maglia in basso a sinistra (in senso orario):
$$
\mathcal{E}_1 = -R_3 i_3 + R_4 i_4 = 9 \, {\rm V}
$$

3. In un circuito in corrente continua un condensatore, una volta carico, si comporta come un interruttore aperto. Usando la seconda legge di Kirchhoff applicata a quella maglia possiamo trovare qual è la d.d.p. ai suoi capi:
$$
0 = R_2 i_2 + R_3 i_3 + \Delta V_C
$$
e quindi
$$
\Delta V_C = - (R_2 i_2 + R_3 i_3) = -11 \, {\rm V}.
$$

---

## Esercizio 41

### Testo

Un cilindro conduttore di raggio $R_1$ è circondato da un guscio cilindrico conduttore di raggi $R_2$ ed $R_3$. Sui due conduttori vengono depositate le cariche $q_1$ e $q_2$. L'altezza $h$ dei cilindri è tale per cui nel sistema si ha, con buona approssimazione, induzione completa.

1. Calcolare le quantità di carica che si trovano sulle tre superfici conduttive.
2. Una sfera conduttrice di raggio $R_s$ posta a grande distanza viene collegata al sistema. Calcolare le nuove distribuzioni di carica.
3. Calcolare la d.d.p. rispetto all'infinito ($V = 0$) del sistema di conduttori se invece di cilindro e guscio cilindrico si fosse trattato di sfera e guscio sferico.

### Soluzione

1. Il cilindro interno ha carica $q_1$, che induce una carica $-q_1$ sulla faccia interna del guscio. Per conservazione della carica, la superficie più esterna del guscio sarà quindi caricata con $q_i = q_1 + q_2$.

2. Quando colleghiamo due conduttori, le cariche libere che eventualmente si trovano sulle loro superfici si spostano dall'uno all'altro in modo tale da eguagliare il loro potenziale. In questo caso troviamo:
$$
\frac{q_f}{2 \pi \epsilon_0 h} \log(R_3) = \frac{q_s}{4 \pi \epsilon_0 R_s}
$$
dove $q_f$ e $q_s$ sono le cariche finali del guscio e della sfera. Dalla relazione precedente si trova che
$$
\frac{q_f}{q_s} = \frac{h}{2R_s \log(R_3)}.
$$
D'altronde, per la conservazione della carica si deve avere $q_f + q_s = q_i$, e quindi
$$
\frac{q - q_s}{q_s} = \frac{h}{2R_s \log(R_3)}.
$$
da cui si trova
$$
q_s = \frac{q}{1 + \frac{h}{2R_s \log(R_3)}}
$$
e da cui si può ricavare la carica sulla superficie esterna del guscio, $q_f = q - q_s$. All'interno del guscio, ovviamente, nulla varia in forza del fenomeno di schermo elettrostatico.

3. Nel caso di due sfere, la carica è proporzionale ai raggi, quindi:
$$
\frac{R_3}{R_s} = \frac{q_f}{q_s} = \frac{q_i - q_s}{q_s}
$$
dove abbiamo di nuovo consideriamo la conservazione della carica. La carica sulla sfera vale quindi
$$
q_s = \frac{q_i R_s}{R_s + R_3}
$$
e quindi il potenziale vale
$$
V(R_s) - V(\infty) = \frac{q_s}{4 \pi \epsilon_0 R_s} = \frac{q_1 + q_2}{4 \pi \epsilon_0} \frac{1}{R_s + R_3}
$$

---

## Esercizio 42
<small>Esercizio II.6 del Mencuccini-Silvestrini</small>

### Testo

Dato il circuito in figura

{{< figure src="../images/esercizio_42.png" alt="Circuito esercizio 42" width="300px">}}

calcolare quale relazione debba sussistere tra le quattro capacità per far sì che si annulli la differenza di potenziale $\Delta V\_{AB} = V_A - V_B$.

### Soluzione

La differenza di potenziale ai capi dei due è la stessa, sono cioè collegati in parallelo. Le capacità equivalenti dei due rami valgono:

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

Una relazione simile si può scrivere per il ramo inferiore

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

## Esercizio 43
<small>Esercizio II.18 del Mencuccini-Silvestrini</small>

### Testo

Su una sfera conduttrice di raggio $a$ è posta una carica $q$. Concentrico a questa sfera si trova un guscio sferico di raggio medio $b$. Calcolare la carica $q_g$ che bisogna fornire al guscio per far sì che la sfera interna abbia d.d.p. rispetto all'infinito $\Delta V = 0$.

### Soluzione

La d.d.p. tra la sfera interna e l'infinito si scrive come somma di due contributi, uno dovuto alla sua carica, uno dovuto alla carica del guscio:

$$
\Delta V = \frac{q}{4 \pi \epsilon_0} \left( \frac{1}{a} - \frac{1}{b} \right) + \frac{q_g + q}{4\pi \epsilon_0} \frac{1}{b}
$$

che imponiamo a zero, ottenendo

$$
\frac{q}{a} + \frac{q_g}{b} = 0
$$

e quindi

$$
q_s = -\frac{qb}{a}
$$


