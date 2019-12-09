+++
title = "Esercitazione del 11/12/2019"
date = 2019-12-05T12:24:21+02:00
draft = false
+++

[Esercizio 58](#esercizio-58) -- [Esercizio 59](#esercizio-59) -- [Esercizio 60](#esercizio-60) -- [Esercizio 61](#esercizio-61)

## Esercizio 58

### Testo

{{< figure src="../images/esercizio_58.png" width="500px">}}

Una barra conduttrice, di massa $m=100$ g e resistenza $R = 500$ \Omega, appoggia senza attrito su due binari orizzontali di resistenza trascurabile. La distanza tra i binari è $l=40$ cm e il sistema è immerso in un campo magnetico uniforme $B=0.8$T, perpendicolare ai binari ed alla barra (entrante nel foglio, vedi figura). All’istante $t=0$ la barra è ferma e tra i binari viene posto un generatore con la polarità indicata in figura.

* Se il generatore fornisce una corrente *costante* $i_0 = 0.2$ A calcolare:
	1. in che direzione si muove la sbarra;
	2. la velocità della sbarra al tempo $t_1=15$ s;
	3. il lavoro fatto dal generatore fino al tempo $t_1$.
* Se invece il generatore fornisce una f.e.m. costante pari a $\mathcal{E}_0= 8$ V calcolare
	1. la potenza fornita dal generatore quando la sbarra ha raggiunto la velocità limite;
	1. il valore della velocità limite.
	

### Soluzione

* Poiché nella sbarretta scorre una corrente costante $i_0$, essa sarà soggetta ad una forza (anch'essa costante) data da
$$
\vec{F} = i \vec{l} \times \vec{B}
$$
che, dati i versi indicati in figura, ha direzione verso destra.
	1. Poiché la sbarretta parte da ferma, la sua velocità sarà parallela alla forza, e quindi si muoverà verso destra.
	2. Ricordando che $\vec{F} = m \vec{a}$ troviamo subito che 
	$$
	v(t) = at = \frac{ilBt}{m}
	$$
	che per $t_1 = 15$ s vale $v(t_1) = 9.6$ m/s.
	3. All'inizio del moto la sbarretta è ferma e la f.e.m. totale ai capi del circuito è $\mathcal{E}_0 = R i$. Quando la sbarretta si mette in moto, a questa f.e.m. va sommata quella indotta che si oppone alla sorgente di moto. Considerando che il flusso è $\Phi(B) = x(t) l B$ (vedi esercizi precedenti) la f.e.m. indotta vale
	$$
	\mathcal{E}_i = - \frac{d\Phi}{dt} = - \frac{dx}{dt} l B = - v(t) l B = - \frac{il^2B^2t}{m}
	$$
	Poiché la corrente deve rimanere costante, la f.e.m. nel circuito deve anche rimanere costante (perché la resistenza non varia), e quindi la f.e.m. che il generatore eroga, dovendo contrastare $\mathcal{E}_i$, sarà
	$$
	\mathcal{E}(t) = \mathcal{E}_0 - \mathcal{E}_i = Ri + v(t) l B = Ri + \frac{il^2B^2t}{m}
	$$
	Ricordando il legame tra potenza, differenza di potenziale e corrente si trova
	$$
	\mathcal{P} = \mathcal{E}(t) i = Ri^2 + \frac{i^2l^2B^2t}{m}
	$$
	che integrata da 0 a $t_1$ dà proprio l'energia dissipata:
	$$
	W = Ri^2 t_1 + \int_0^{t_1} \frac{i^2l^2B^2t}{m} dt = Ri^2 t_1 + \frac{1}{2} \frac{i^2l^2B^2t_1^2}{m}.
	$$
	Questo risultato si poteva trovare anche considerando che l'energia fornita dal generatore viene parzialmente trasformata in energia cinetica, e quindi l'energia totale dissipata si può scrivere come
	$$
	W = Ri^2 + \frac{1}{2}m v(t)^2
	$$
	che dà lo stesso risultato (provate!).
* Se la tensione (invece della corrente) è costante il comportamento del sistema cambia qualitativamente, poiché la f.e.m. indotta genererà una corrente che non verrà più contrastata dall'aumento della f.e.m. erogata dal generatore. Definiamo $i$ la corrente erogata dal generatore e $i_i$ quella dovuta alla presenza della f.e.m. indotta.
	1. Se un oggetto raggiunge una velocità limite significa che la risultante delle forze agenti su di esso è nulla. L'unica forza che può agire sulla sbarra è quella magnetica $i \vec{l} \times \vec{B}$. L'unico modo affinché sia zero è che sia nulla la corrente che scorre attraverso la sbarra, cioè si deve avere $i = i_i$ (perché le due correnti scorrono in verso opposto). Poiché $\mathcal{E}_0$ è costante, si avrà
	$$
	i = \frac{\mathcal{E}_0}{R},
	$$
	mentre la corrente indotta si trova tramite la legge di Faraday,
	$$
	i_i = \frac{\mathcal{E}_i}{R} = \frac{l B v}{R}.
	$$
	Uguagliando le due correnti si ottiene
	$$
	v = \frac{\mathcal{E}_0}{l B} = 25\, {\rm m/s}
	$$

---
	
## Esercizio 59

### Testo

Un circuito è composto da una batteria, da una resistenza e da un'induttanza ($L = 9.44$ H). Al tempo zero la batteria viene scollegata dal circuito. Sapendo che nei primi $1.5$ s la corrente passa da $1.16$ A a $10.2$ mA, determinare il valore della resistenza.

### Soluzione

La legge oraria con cui varia l'intensità di corrente in un circuito $RL$ che viene scollegato dal generatore è

$$
i(t) = i\_{\infty} e^{-\frac{t}{\tau}},
$$

dove $i\_{\infty} = \frac{\mathcal{E}}{R}$ è il valore della corrente a circuito chiuso e $\tau = L / R$. Dal testo si capisce che $i\_{\infty} = 1.16$ A e quindi $i(1.5 \, {\rm s}) = 10.2$ mA. Risolvendo per $R$ si trova

$$
R = \frac{L}{1.5 \, {\rm s}} \log \left( \frac{i\_{\infty}}{i(1.5 \, {\rm s})} \right) = 29.8 \, \Omega
$$

---

## Esercizio 60

### Testo

Un induttore ($L=4 \times 10^{-4}$ H) ed una resistenza ($R=5\, \Omega$) sono posti in serie ad un generatore di tensione ($\mathcal{E} = 200$ V) collegato tramite un interruttore. Al tempo zero l'interruttore viene chiuso. Determinare

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
3. Il valore si ottiene sostituendo $t = 3 L / R$ in $i(t)$, ottenendo
$$
i(3 L / R) = 38\, {\rm A}
$$

---

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