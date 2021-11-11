+++
title = "Scritto del 10/11/2021"
date = 2021-11-11T10:18:43+02:00
draft = false

+++

## Elettricità

Un guscio sferico conduttore di raggio interno $R_2 = 2$ cm è connesso a terra e contiene al suo interno una sfera di raggio $R_1 = 1.5$ cm e carica $q_0$. In queste condizioni tra la sfera ed il guscio si misura una differenza di potenziale $\Delta V = 100$ V.

{{< figure src="../images/scritto_20211110_esercizio_1.png"  width="500px">}}

1. Determinare il valore di $q_0$ **(8 punti)**.
	* La d.d.p. è legata alle altre quantità tramite la relazione
	$$
	\Delta V = \frac{q_0}{4 \pi \epsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2}\right)
	$$
	e quindi
	$$
	q_0 = 4 \pi \epsilon_0 \Delta V \frac{R_1 R_2}{R_2 - R_1} = 6.67 \times 10^{-10} \, {\rm C}
	$$
2. Il guscio sferico viene scollegato dalla terra e sulla sfera interna viene depositata un'ulteriore carica $q_u = -0.5 \times 10^{-9}$ C. Calcolare la nuova quantità di carica presente sulle due superfici conduttrici del guscio **(8 punti)**.
	* Poiché la sfera interna è ora carica con $q_{\rm tot} = q_0 + q_u = 0.167 \times 10^{-9}$ C, questa è la stessa carica che, per induzione, deve essere presente sulla superficie interna del guscio. D'altra parte finché era collegata a terra ls superficie esterna non possedeva alcuna carica. Una volta scollegata si applica il principio di conservazione della carica e quindi la superficie esterna deve caricarsi con carica $q_u$.

---

## Magnetismo

Una spira di forma romboidale ($a = 5$ cm, $\theta = 40^\circ$) ha massa $m = 10$ g, è percorsa da una corrente $i$ ed è posta, in equilibrio, in una regione di spazio in cui sono presenti due campi magnetici aventi direzione $\hat{z}$. Per $y < 0$ il campo vale $\vec{B}_2 = -B_2 \hat{z}$, con $B_2 = 0.3$ T, mentre per $y > 0$ il campo vale $\vec{B}_1 = B_1 \hat{z}$, con $B_1 = 0.7$ T. **Nota Bene:** la forza peso agisce lungo $-\hat{y}$.

{{< figure src="../images/scritto_20211110_esercizio_2.png"  width="500px">}}

1. Determinare verso e intensità di $i$ **(5 punti)**.
	* I due campi hanno verso opposto ma la corrente scorre in verso opposto nei segmenti posti in alto e nei due in basso, che quindi sentiranno forze magnetiche di eguale verso. Affinché queste forze siano dirette verso l'alto la corrente deve scorrere in senso antiorario. Ricordando che la forza magnetica è data da $\vec{F} = i \vec{s} \times \vec{B}$, dove $\vec{s}$ è il vettore che congiunge il primo e l'ultimo punto del segmento, il bilancio delle forze è
	$$
	i l (B_2 + B_1) = mg
	$$
	dove $l = 2 a \cos \theta = 0.077$ m. La corrente vale quindi
	$$
	i = \frac{mg}{l(B_1 + B_2)} = 1.25 \, {\rm A}
	$$
2. Determinare il modulo della forza magnetica agente sul segmento diagonale in alto a destra **(5 punti)**.
	* Usando di nuovo la definizione di forza magnetica si trova
	$$
	F = i a B_1 = 0.044 \, {\rm N}
	$$
3. Il campo $\vec{B}_1$ viene spento, mentre l'intensità di corrente che scorre nella spira rimane invariata. Determinare il nuovo valore del modulo che $\vec{B}_2$ deve avere per far sì che la spira rimanga in equilibrio **(6 punti)**.
	* Il nuovo equilibrio è dato da
	$$
	i l B_2 = mg
	$$
	e quindi
	$$
	B_2 = \frac{mg}{i l} = 1 \, {\rm T}
	$$