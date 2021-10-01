+++
title = "Esercitazione del 16/12/2020"
date = 2020-12-14T12:24:21+02:00
draft = false
+++

[Esercizio 58](#esercizio-58) -- [Esercizio 59](#esercizio-59) -- [Esercizio 60](#esercizio-60)

## Esercizio 58

### Testo

{{< figure src="../images/esercizio_58.png" width="500px">}}

Una barra conduttrice, di massa $m=100$ g e resistenza $R = 500\, \Omega$, appoggia senza attrito su due binari orizzontali di resistenza trascurabile. La distanza tra i binari è $l=40$ cm e il sistema è immerso in un campo magnetico uniforme $B=0.8$T, perpendicolare ai binari ed alla barra (entrante nel foglio, vedi figura). All’istante $t=0$ la barra è ferma e tra i binari viene posto un generatore con la polarità indicata in figura.

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
\vec{F} = i_0 \vec{l} \times \vec{B}
$$
che, dati i versi indicati in figura, ha direzione verso destra.
	1. Poiché la sbarretta parte da ferma, la sua velocità sarà parallela alla forza, e quindi si muoverà verso destra.
	2. Ricordando che $\vec{F} = m \vec{a}$ troviamo subito che 
	$$
	v(t) = at = \frac{i_0lBt}{m}
	$$
	che per $t_1 = 15$ s vale $v(t_1) = 9.6$ m/s.
	3. All'inizio del moto la sbarretta è ferma e la f.e.m. totale ai capi del circuito è $\mathcal{E}_0 = R i_0$. Quando la sbarretta si mette in moto, a questa f.e.m. va sommata a quella indotta che si oppone alla sorgente di moto. Considerando che il flusso è $\Phi(B) = x(t) l B$ (vedi esercizi precedenti) la f.e.m. indotta vale
	$$
	\mathcal{E}_i = - \frac{d\Phi}{dt} = - \frac{dx}{dt} l B = - v(t) l B = - \frac{i_0l^2B^2t}{m}
	$$
	Poiché la corrente deve rimanere costante, la f.e.m. nel circuito deve anche rimanere costante (perché la resistenza non varia), e quindi la f.e.m. che il generatore eroga, dovendo contrastare $\mathcal{E}_i$, sarà
	$$
	\mathcal{E}(t) = \mathcal{E}_0 - \mathcal{E}_i = Ri_0 + v(t) l B = Ri + \frac{i_0l^2B^2t}{m}
	$$
	Ricordando il legame tra potenza, differenza di potenziale e corrente si trova
	$$
	\mathcal{P} = \mathcal{E}(t) i_0 = Ri_0^2 + \frac{i_0^2l^2B^2t}{m}
	$$
	che integrata da 0 a $t_1$ dà proprio l'energia dissipata:
	$$
	W = Ri_0^2 t_1 + \int_0^{t_1} \frac{i_0^2l^2B^2t}{m} dt = Ri_0^2 t_1 + \frac{1}{2} \frac{i_0^2l^2B^2t_1^2}{m}.
	$$
	Questo risultato si poteva trovare anche considerando che l'energia fornita dal generatore viene parzialmente trasformata in energia cinetica, e quindi l'energia totale erogata si può scrivere come
	$$
	W = Ri_0^2 + \frac{1}{2}m v(t)^2
	$$
	che dà lo stesso risultato (provate!).
	**Nota Bene**: la relazione $\mathcal{P} = Ri^2(t)$ (usata erroneamente in aula dal docente) non si applica perché non stiamo considerando un sistema in cui *tutta* l'energia viene dissipata dalla resistenza, ma un sistema in cui una parte dell'energia viene convertita in altre forme (energia cinetica).
* Se la tensione (invece della corrente) è costante il comportamento del sistema cambia qualitativamente, poiché la f.e.m. indotta genererà una corrente che non verrà più contrastata dall'aumento della f.e.m. erogata dal generatore. Definiamo $i$ la corrente erogata dal generatore e $i_i$ quella dovuta alla presenza della f.e.m. indotta.
	1. Se un oggetto raggiunge una velocità limite significa che la risultante delle forze agenti su di esso è nulla. L'unica forza che può agire sulla sbarra è quella magnetica $i \vec{l} \times \vec{B}$. L'unico modo affinché sia zero è che sia nulla la corrente che scorre attraverso la sbarra, cioè si deve avere $i = i_i$ (perché le due correnti scorrono in verso opposto). Se è nulla la corrente, sarà nulla anche la potenza erogata.
	2. Poiché $\mathcal{E}_0$ è costante, si avrà
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
