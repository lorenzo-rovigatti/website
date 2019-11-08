+++
title = "Scritto del 06/11/2019"
date = 2019-11-06T16:18:43+02:00
draft = false
+++

## Elettricità

Il circuito in figura è composto da un generatore di forza elettromotrice $\mathcal{E} = 10$ V e resistenza interna trascurabile, da un condensatore sferico $C_1$ di raggi $r_1 = 5$ cm ed $r_2 = 6$ cm, da un condensatore piano $C_2$ di dimensioni $a \times a \times h$ ($a = 10$ cm, $h = 1$ cm) e da due resistori, $R_1 = 10 \, \Omega$ ed $R_2 = 30 \, \Omega$. L'interruttore è inizialmente aperto.

{{< figure src="../images_scritto_06112019/esercizio_1.png" alt="1" width="300px">}}

1. Calcolare l'intensità di corrente che scorre in $R_1$ **(5 punti)**.
	* La corrente scorre solamente nel ramo di $R_1$, e quindi vale
	$$
	i_a = \frac{\mathcal{E}}{R_1} = 1\, {\rm A}
	$$

2. L'interruttore viene chiuso e si aspetta un tempo tale per cui il sistema torna in uno stato stazionario. Determinare in quale configurazione (aperta o chiusa) il circuito dissipa meno potenza **(5 punti)**.

	* La potenza dissipata in un circuito, in generale, è data da $\mathcal{P} = \Delta V i$. In questo caso $\Delta V = \mathcal{E}$ non cambia nei due casi, quindi per rispondere alla domanda è sufficiente confrontare le intensità di corrente che scorrono nel circuito nei due casi. Ad interruttore chiuso la corrente è quella che scorre nella resistenza equivalente data dal parallelo tra $R_1$ ed $R_2$, che vale
	$$
	R\_{\rm eq} = \frac{R_1 R_2}{R_1 + R_2} = 7.5 \, {\rm \Omega}.
	$$
	La corrente è quindi data da
	$$
	i_c = \frac{\mathcal{E}}{R\_{\rm eq}} = 1.33 \, {\rm A}.
	$$
	Poiché $i_a < i_c$ (vedi punto sopra), la potenza dissipata è minore ad interruttore aperto.

3. Calcolare la carica immagazzinata in ognuno dei due condensatori ad interruttore chiuso  **(6 punti)**.

	* I due condensatori sono collegati in serie, quindi la carica che posseggono è la stessa e si può calcolare a partire dalla capacità equivalente. Le due capacità sono
	$$
	C_1 = 4 \pi \epsilon_0 \frac{r_1r_2}{r_2 - r_1} = 3.34 \times 10^{-9} \, {\rm F}
	$$
	e
	$$
	C_2 = \frac{\epsilon_0 a^2}{h} = 8.854 \times 10^{-12} \, {\rm F}
	$$
	quindi la capacità equivalente vale
	$$
	C\_{\rm eq} = \frac{C_1 C_2}{C_1 + C_2} = 8.85 \times 10^{-12} \, {\rm F}
	$$
	e quindi la carica immagazzinata su ognuno dei due condensatori vale
	$$
	q = C\_{\rm eq} \mathcal{E} = 8.85 \times 10^{-11} \, {\rm C}
	$$
	
---

## Magnetismo

Un sistema è composto da due fili indefiniti percorsi dalle correnti $i_1$ ed $i_2$ e disposti uno sopra l'altro. Il filo in alto ha densità di massa $\lambda = 0.1$ kg/m e si può muovere, mentre quello in basso è **fisso**, e al suo interno scorre una corrente $i_2 = 50$ A nel verso indicato nel pannello di sinistra della figura. 

Il sistema è in equilibrio quando i due fili sono posti ad una distanza $d = 1$ cm l'uno dall'altro. **Nota Bene:** la forza peso ha direzione $-\hat{y}$ e i pallini del pannello di destra **non** indicano la direzione delle correnti ma solo la posizione dei fili da un altro punto di vista (indicato dal sistema di riferimento).

{{< figure src="../images_scritto_06112019/esercizio_2.png" alt="2" width="300px">}}

1. Calcolare verso e intensità di $i_1$ **(6 punti)**. 
	* Il campo generato dal filo in basso nella regione di spazio in cui è presente il filo in alto è parallelo a $\hat{z}$, quindi affinché la forza magnetica sia diretta lungo $\hat{y}$ (e quindi controbilanci la forza di gravità), la corrente deve scorrere verso sinistra (cioè lungo $-\hat{x}$). Per trovare l'intensità basta considerare la condizione di equilibrio, cioè imporre che le due forze si bilancino:
	$$
	\lambda g = i_1 B(d),
	$$
	dove $B(d)$ è il modulo del campo generato dal filo in basso, che vale
	$$
	B(d) = \frac{\mu_0 i_2}{2 \pi d}
	$$
	e quindi
	$$
	i_1 = \frac{\lambda g 2 \pi d}{\mu_0 i_2} = 918 \, {\rm A}
	$$
2. Calcolare $\oint_C \vec{B} \cdot d\vec{s}$, con $C$ il percorso chiuso indicato nel pannello di destra della figura **(5 punti)**.
	* Utilizzando il teorema di Ampère si trova
	$$
	\oint_C \vec{B} \cdot d\vec{s} = \mu_0 (i_1 - i_2) = 1.17 \times 10^{-3} \, {\rm Tm}
	$$
3. Il filo in basso viene rimosso e si ha la possibilità di accendere un campo magnetico uniforme $\vec{B}$ parallelo a $\hat{z}$. Determinare per quale modulo e verso di $\vec{B}$ il filo in alto resta in equilibrio **(5 punti)**.
	* Il campo esterno $\vec{B}\_{\rm ext}$ deve essere uguale a quello del filo rimosso, quindi $\vec{B}$ deve essere parallelo a $\hat{z}$ e il modulo deve valere
	$$
	B\_{\rm ext} = B(d) = 10^{-3} \, {\rm T}
	$$
