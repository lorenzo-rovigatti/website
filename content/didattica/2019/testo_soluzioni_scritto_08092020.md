+++
title = "Scritto dell'08/09/2020, A-F"
date = 2020-09-08T08:11:43+02:00
draft = false
+++

## Elettricità

Un guscio sferico conduttore di raggio interno $R_i = 1.1$ cm contiene al suo interno una sfera di raggio $R_s = 1$ cm e carica $q_s$. In queste condizioni tra la sfera ed il guscio si misura una differenza di potenziale $\Delta V = 100$ V.

{{< figure src="../images/scritto_08092020_esercizio_1.png" width="300px">}}

1. Determinare il valore di $q_s$ **(10 punti)**.
	* La d.d.p. è legata alle altre quantità tramite la relazione
	$$
	\Delta V = \frac{q_s}{4 \pi \epsilon_0} \left( \frac{1}{R_s} - \frac{1}{R_i}\right)
	$$
	e quindi
	$$
	q_s= 4 \pi \epsilon_0 \Delta V \left( \frac{1}{R_s} - \frac{1}{R_i} \right)^{-1} = 1.22 \times 10^{-9} \, {\rm C}
	$$
2. Il guscio sferico viene collegato a terra. Calcolare la quantità di carica presente sulle due superfici conduttrici del guscio **(6 punti)**.
	* La superficie interna ha carica $-q_s$ per induzione completa e quindi non cambia mettendo il guscio a terra. La superficie esterna ha invece inizialmente carica $q_s$, ma si scarica una volta collegato il guscio a terra.


---

## Magnetismo

In una spira quadrata di lato $l = 10$ cm scorre una corrente $i$ in verso orario. La spira è poggiata su di un piano ed è posta a distanza $d = 1$ cm da un filo indefinito fisso in cui scorre una corrente $i_f$ nella direzione indicata in figura. La metà della spira più distante dal filo è anche immersa in un campo magnetico uniforme uscente dal foglio (vedi figura) di modulo $B_e = 1.82 \times 10^{-4}$ T. In queste condizioni la spira non si muove. **Nota Bene:** poiché la spira è poggiata su di un piano la forza di gravità non è rilevante ai fini dell'esercizio. Inoltre, i valori numerici di $i$ e della lunghezza dei lati orizzontali della spira non sono necessari per risolvere l'esercizio.

{{< figure src="../images/scritto_08092020_esercizio_2.png" width="300px">}}

1. Discutere il motivo per cui la spira, nelle condizioni dell'esercizio, è in equilibrio (quali sono le forze che si bilanciano, quali sono le loro direzioni, *ecc*). **(8 punti)**.
	* Poiché la spira è in equilibrio, la forza totale agente su di essa deve essere nulla. Questa forza ha tre componenti, poiché sul lato in alto agisce solo il campo generato dal filo, ma su quello in basso agisce sia il campo del filo che $B_e$ (che hanno stessa direzione e verso). Ricordando che il verso della corrente sui lati in alto e in basso è opposto si trova che la forza agente sul lato in alto è diretta verso il basso, mentre quelle agenti sul lato in basso sono dirette verso l'alto.
2. Determinare l'intensità della corrente $i_f$ che scorre nel filo **(8 punti)**.
	* Mettendo in formule quanto detto prima si trova
	$$
	i l (B_f(d) - B_f(d + l) - B_e) = 0
	$$
	dove $B_f(x) = \mu_0 i_f / 2 \pi x$. Risolvendo per $i_f$ si trova
	$$
	i_f = \frac{2 \pi B_e}{\mu_0} \left( \frac{1}{d} - \frac{1}{d + l}\right)^{-1} = 10 \, {\rm A}
	$$
