+++
title = "Esercitazione del 03/11/2020"
date = 2020-10-27T10:00:44+02:00
draft = false
+++

[Esercizio 30](#esercizio-30) -- [Esercizio 31](#esercizio-31) -- [Esercizio 32](#esercizio-32) -- [Esercizio 33](#esercizio-33)

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

---

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

## Esercizio 32

### Testo

{{< figure src="../images/esercizio_32_1.png" width="300px">}}

Un cilindro conduttore di raggio $R_1$ è circondato da un guscio cilindrico conduttore di raggi $R_2$ ed $R_3$. Sui due conduttori vengono depositate le cariche $q_1$ e $q_2$. L'altezza $h$ dei cilindri è tale per cui nel sistema si ha, con buona approssimazione, induzione completa.

1. Calcolare le quantità di carica che si trovano sulle tre superfici conduttive.
{{< figure src="../images/esercizio_32_2.png" width="500px">}}
2. Una sfera conduttrice di raggio $R_s$ posta a grande distanza viene collegata al sistema. Calcolare le nuove distribuzioni di carica.
3. Calcolare la d.d.p. rispetto all'infinito ($V = 0$) del sistema di conduttori.

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
\frac{q_i - q_s}{q_s} = \frac{h}{2R_s \log(R_3)}.
$$
da cui si trova
$$
q_s = \frac{q_i}{1 + \frac{h}{2R_s \log(R_3)}}
$$
e da cui si può ricavare la carica sulla superficie esterna del guscio, $q_f = q - q_s$. All'interno del guscio, ovviamente, nulla varia in forza del fenomeno di schermo elettrostatico.

3. Poiché sappiamo qual è la carica presente sulla superficie della sfera possiamo calcolare direttamente la differenza di potenziale:
$$
V(R_s) - V(\infty) = \frac{q_s}{4 \pi \epsilon_0 R_s} = \frac{q_i}{1 + \frac{h}{2R_s \log(R_3)}}  \frac{1}{4 \pi \epsilon_0 R_s}
$$

---

## Esercizio 33

### Testo

{{< figure src="../images/esercizio_33.png" width="500px">}}

Un sistema è formato da due conduttori sferici concentrici. Il conduttore interno è pieno e ha raggio
$a = 20$ cm, quello esterno è cavo e ha raggio interno $b = 30$ cm ed esterno $c = 35$ cm. Lo spazio compreso tra i due conduttori è riempito da un dielettrico la cui costante dipende dalla distanza $r$ dal centro secondo la relazione $\kappa(r ) = r/a$. Il conduttore interno ha carica $q = 10$ nC, mentre quello esterno è mantenuto ad una d.d.p. $\Delta V = 500$ V rispetto all'infinito . Determinare:

1. il valore della carica sulle tre superfici conduttrici;
2. le cariche superficiali di polarizzazione presenti sulle superfici del dielettrico;
3. Il conduttore interno viene ora collegato con quello esterno, mantenendo inalterate le altre condizioni. Determinare i nuovi valori delle cariche sulle tre superfici conduttrici.

### Soluzione

1. La carica sulla superficie più interna è $q_a = q$, e quindi $q_b = -q$ per induzione completa. La superficie più esterna ha una carica determinata dalla differenza di potenziale a cui è posta:
$$
\Delta V = \frac{q_c}{4 \pi \epsilon_0 c}
$$
quindi
$$
q_c = 4 \pi \epsilon_0 c \Delta V = 19.5 \, {\rm nC}.
$$
Il fatto che il conduttore sia mantenuto ad una certa d.d.p., quindi, fa sì che una quantità di carica $q_c - q = 9.5$ nC si trasferisca sulla sua superficie più esterna.
2. All'interno della cavità il campo vale
$$
E( r) = \frac{q}{4 \pi \epsilon_0 \kappa( r) r^2}
$$
e quindi il vettore polarizzazione ha modulo
$$
P(r ) = \epsilon_0 ( \kappa(r ) - 1 ) E(r ) = \frac{q (r - a)}{4 \pi r^3}.
$$
Possiamo ora calcolare le densità di carica di polarizzazione usando la relazione $\sigma_p = \vec{P}(r ) \cdot \hat{n}$:
\begin{align}
\sigma_p(a) & = 0\\\\\\
\sigma_p(b) & = P(b ) = 2.95 \, {\rm nC / m^2}
\end{align}
3. Se i due conduttori vengono collegati, le cariche sulle due superfici interne si cancellano e quindi si avrà $q(a) = q(b) = 0$. D'altro canto, il conduttore più esterno è ancora posto ad una d.d.p. rispetto all'infinito, e quindi la sua carica non varia, risultando ancora $q_c = 19.5$ nC.

---
