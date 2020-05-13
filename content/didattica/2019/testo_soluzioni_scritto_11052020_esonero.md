+++
title = "Recupero primo esonero dello scritto dell'11/05/2020"
date = 2020-05-13T08:11:43+02:00
draft = false
+++

## Elettricità

Un guscio sferico di raggio interno $R_i = 1.1$ cm ed esterno $R_e = 2$ cm contiene al suo interno una sfera conduttrice di raggio $R_s = 1$ cm. La sfera viene caricata con densità di carica $\sigma_s$. In queste condizioni tra la sfera ed il guscio si misura una differenza di potenziale $\Delta V = 100$ V.

{{< figure src="../images/scritto_11052020_esercizio_esonero.png"  width="400px">}}

1. Determinare il valore di $\sigma_s$ **(10 punti)**.
	* La d.d.p. è legata alle altre quantità tramite la relazione
	$$
	\Delta V = \frac{q_s}{4 \pi \epsilon_0} \left( \frac{1}{R_s} - \frac{1}{R_i}\right)
	$$
	dove $q_s = 4 \pi R_s^2 \sigma_s$. Invertendo questa relazione si trova
	$$
	\sigma_s = \frac{\Delta V \epsilon_0}{R_s^2} \left( \frac{1}{R_s} - \frac{1}{R_i} \right)^{-1} = 9.7 \times 10^{-7} \, {\rm C / m^2}
	$$
2. Sul guscio viene depositata una carica $q = 10^{-9}$ C. Calcolare la quantità di carica presente sulle tre superfici conduttrici **(8 punti)**.
	* Sulla sfera è presente una carica $q_s = \sigma_s 4 \pi R_s^2 = 1.22 \times 10^{-9}$ C. Sulla superficie interna del guscio, per induzione, ci sarà una carica $-q_s$ e su quella esterna alla carica che viene depositata si aggiunge una carica $q_s$ dovuta al meccanismo di conservazione della carica, quindi la carica totale vale $q_e = q + q_s = 2.22 \times 10^{-9}$ C.
3. Nelle condizioni del punto precedente calcolare la differenza di potenziale tra la sfera interna ed un punto posto a distanza $r = 3$ cm dal suo centro **(14 punti)**.
	* La d.d.p. tra la sfera ed un punto esterno al guscio è data dalla somma delle d.d.p. tra la sfera ed il guscio e tra il guscio e il punto $r$. La prima è semplicemente $\Delta V$, mentre la seconda vale
	$$
	\Delta V_g = \frac{q_e}{4 \pi \epsilon_0} \left( \frac{1}{R_e} - \frac{1}{r} \right) = 332 \, {\rm V}
	$$
	e quindi la d.d.p. totale richiesta è $\Delta V\_{\rm tot} = \Delta V + \Delta V_g = 432 \, {\rm V}$
	