+++
title = "Esercitazione del 17/12/2021"
date = 2021-12-10T09:24:21+02:00
draft = false

+++

[Esercizio 59](#esercizio-59) -- [Esercizio 60](#esercizio-60)

---

## Esercizio 59

### Testo

Un circuito è composto da una batteria di f.e.m. $\mathcal{E}$, da una resistenza $R = 0.1 \, \Omega$, da un'induttanza ($L = 9.44$ H) e da un interruttore, inizialmente chiuso. Al tempo zero l'interruttore viene aperto. Sapendo che nei primi $15$ s la corrente passa da $1.16$ A a $10.2$ mA. Determinare

1. il valore di $\mathcal{E}$;
2. il valore della resistenza $R'$ presente tra i due poli dell'interruttore.

### Soluzione

1. La legge oraria con cui varia l'intensità di corrente in un circuito $RL$ che viene scollegato dal generatore è
$$
i(t) = i\_{\infty} e^{-\frac{t}{\tau}},
$$
dove $i\_{\infty} = \frac{\mathcal{E}}{R}$ è il valore della corrente a circuito chiuso e $\tau = L / R'$. Dal testo si capisce che $i\_{\infty} = 1.16$ A e $i(15 \, {\rm s}) = 10.2$ mA. Utilizzando la prima relazione si trova
$$
\mathcal{E} = R i\_{\infty} = 0.116 \, {\rm V}.
$$
2. Sapendo che $i(15 \, {\rm s}) = 10.2$ mA e risolvendo per $R'$ si trova
$$
R' = \frac{L}{15 \, {\rm s}} \log \left( \frac{i\_{\infty}}{i(15 \, {\rm s})} \right) = 2.98 \, \Omega
$$

---

## Esercizio 60

### Testo

Un induttore ($L=4 \times 10^{-4}$ H) ed una resistenza ($R=5\, \Omega$) sono posti in serie ad un generatore di tensione ($\mathcal{E} = 200$ V) collegato tramite un interruttore, inizialmente aperto. Al tempo zero l'interruttore viene chiuso. Determinare

1. il tempo che occorre affinché la corrente che fluisce nella resistenza raggiunga il 60% della corrente finale;
2. l'energia accumulata nel campo magnetico dopo che la corrente ha raggiunto il suo valore massimo;
3. il valore della corrente dopo un tempo pari a 3 costanti di tempo $\tau = L / R$.

### Soluzione

1. La corrente finale è data dalla legge di Ohm e vale
$$
i\_{\infty} = \frac{\mathcal{E}}{R} = 40\, {\rm A}.
$$
Sapendo che la corrente varia con la legge temporale
$$
i(t) = \frac{\mathcal{E}}{R} \left( 1 - e^{-\frac{t}{\tau}}\right),
$$
il tempo si trova imponendo $i(t) = 0.6 i\_{\infty}$ e risolvendo per $t$:
$$
t = - \frac{L}{R}\log(1 - 0.6) = 7.2 \times 10^{-6} \, {\rm s}
$$
2. L'energia è data dalla relazione
$$
U = \frac{1}{2} L i\_{\infty}^2 = 0.32 \, {\rm J}
$$
3. Il valore si ottiene sostituendo $t = 3 L / R$ in $i(t)$, trovando
$$
i(3 L / R) = 38\, {\rm A}
$$
