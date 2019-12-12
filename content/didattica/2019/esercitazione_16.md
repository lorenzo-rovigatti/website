+++
title = "Esercitazione del 17/12/2019"
date = 2019-12-11T12:24:21+02:00
draft = false
+++

[Esercizio 61](#esercizio-61)

## Esercizio 61

### Testo

Una spira quadrata di resistenza $R = 10^{-3}\, \Omega$, massa $m = 10$ g e lato $l = 20$ cm viene lasciata cadere in una regione in cui è presente un campo di magnetico diretto lungo $\hat{y}$ avente modulo dipende dalla coordinata $z$ (vedi figura):
$$
B_y(z) = b z
$$
con $b = 2 T / m$.
La spira è orientata in maniera tale da avere normale parallela a $\vec{B}$.

1. Determinare intensità e verso della corrente.
2. Determinare il valore della velocità limite $v_0$, trascurando l'autoinduzione del telaio.
3. Calcolare la corrente che circola nel telaio per $v = v_0$.

### Soluzione

1. La corrente si calcola a partire dalla legge di Faraday. Per calcolare il flusso del campo, definiamo $h(t)$ la coordinata $z$ del lato più in alto della spira. Il flusso vale quindi
$$
\Phi(B) = \int_0^l dx \int_0^l b(h(t) + z) dz = l \int_0^l b(h(t) + z) dz = l^2 b h(t) + \frac{1}{2} b l^3.
$$
Poiché solo il primo termine dipende dal tempo, la f.e.m. indotta vale
$$
\mathcal{E}_i = - l^2 b v(t)
$$
dove $v(t)$ è la velocità della spira al tempo $t$. Il segno negativo indica che la f.e.m. genererà una corrente che, con la spira vista dalla prospettiva in cui $\hat{y}$ è uscente, scorre in senso orario. L'intensità varrà invece
$$
i(t) = \frac{l^2 b v(t)}{R}
$$
2. Ci sono tre forze agenti lungo $\hat{z}$: quella magnetica che agisce sul lato in alto, quella magnetica che agisce sul lato in basso e quella peso che agisce sul centro di massa della spira. Ricordando che la forza magnetica che agisce su di una porzione di filo in cui scorre corrente vale $\vec{F} = i \vec{l} \times \vec{B}$ si trova
$$
F\_{\rm tot} = \frac{l^3 b^2 v(t)}{R} h(t) - \frac{l^3 b^2 v(t)}{R} (h(t) + l) + mg = -\frac{l^4 b^2 v(t)}{R} + mg.
$$
Quando la spira raggiunge la velocità limite si deve avere $F\_{\rm tot} = 0$, da cui si ottiene
$$
v\_{\rm lim} = \frac{R mg}{l^4 b^2} = 0.015 \, {\rm m/s}
$$
3. Sostituendo il valore della velocità limite ottenuto precedentemente si trova
$$
i = \frac{l^2 b v\_{\rm lim}}{R} = 1.2 \, {\rm A}
$$