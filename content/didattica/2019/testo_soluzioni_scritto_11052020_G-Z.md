+++
title = "Scritto dell'11/05/2020, G-Z"
date = 2020-05-13T08:11:43+02:00
draft = false
+++

## Elettricità

Un guscio sferico di raggio interno $R_i$ contiene al suo interno una sfera conduttrice di raggio $R_s = 1$ cm. La sfera viene caricata con densità di carica $\sigma_s = 8\times 10^{-7}$ C/m$^2$. In queste condizioni tra la sfera ed il guscio si misura una differenza di potenziale $\Delta V = 100$ V.

{{< figure src="../images/scritto_11052020_esercizio_1.png"  width="400px">}}

1. Determinare il valore di $R_i$ **(10 punti)**.
	* La d.d.p. è legata alle altre quantità tramite la relazione
	$$
	\Delta V = \frac{q_s}{4 \pi \epsilon_0} \left( \frac{1}{R_s} - \frac{1}{R_i}\right)
	$$
	dove $q_s = 4 \pi R_s^2 \sigma_s$. Invertendo questa relazione si trova
	$$
	R_i = \left( \frac{1}{R_s} - \frac{\Delta V \epsilon_0}{R_s^2 \sigma_s} \right)^{-1} = 1.1 \, {\rm cm}
	$$
2. La sfera viene collegata a terra. Calcolare la quantità di carica presente sulle tre superfici conduttrici **(6 punti)**.
	* L'unica carica libera presente nel sistema è data $\sigma_s$. Nel momento in cui colleghiamo a terra la sfera, questa si scarica completamente, quindi tutte e tre le superfici avranno carica nulla.


---

## Magnetismo

Una spira quadrata di lato $l = 10$ cm in cui scorre una corrente $i$ è poggiata su di un piano e posta a distanza $d = 1$ cm da un filo indefinito fisso in cui scorre una corrente $i_f$. La metà della spira più distante dal filo è anche immersa in un campo magnetico uscente dal foglio (vedi figura) di modulo $B_e$. In queste condizioni la spira non si muove. **Nota Bene:** la spira è poggiata su di un piano e quindi la forza di gravità non agisce su di essa, e non è necessario conoscere verso o intensità di $i$ per rispondere alle domande.

{{< figure src="../images/scritto_11052020_esercizio_2.png"  width="400px">}}

Sapendo che la circuitazione del campo magnetico calcolata sul percorso indicato in figura vale $C_c = \oint_C \vec{B} \cdot d\vec{s} = -4 \pi \cdot 10^{-6}$ Tm,

1. Determinare il verso e l'intensità della corrente $i_f$ che scorre nel filo **(6 punti)**.
	* Poiché $C_c < 0$, la corrente deve avere verso contrario a quello coerente col cammino indicato, quindi deve scorrere verso sinistra. Per quanto riguarda l'intensità applicando il teorema di Ampère si trova $C_c = -\mu_0 i_f$ e quindi
	$$
	i_f = -\frac{C_c}{\mu_0} = 10 \, {\rm A}
	$$
2. Determinare il valore di $B$ **(10 punti)**.
	* Poiché la spira è in equilibrio, la forza totale agente su di essa deve essere nulla. Questa forza ha tre componenti, poiché sul lato in alto agisce solo il campo generato dal filo, ma su quello in basso agisce sia il campo del filo che $B_e$ (che hanno stessa direzione e verso). Ricordando che il verso della corrente sui lati in alto e in basso è opposto si trova
	$$
	i l (B_f(d) - B_f(d + l) - B_e) = 0
	$$
	dove $B_f(x) = \mu_0 i_f / 2 \pi x$. Risolvendo per $B_e$ si trova
	$$
	B_e = B_f(d) - B_f(d + l) = 1.82 \times 10^{-4} \, {\rm T}
	$$