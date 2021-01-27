+++
title = "Scritto del 26/01/2021"
date = 2021-01-26T16:18:43+02:00
draft = false

+++

## Primo esercizio

Un conduttore sferico di raggio $R_1 = 10$ cm è circondato da un guscio sferico, anch'esso conduttore, di raggio interno $R_2 = 15$ cm ed esterno $R_3 = 20$ cm.  All'inizio entrambi i conduttori sono scarichi. La cavità tra i due conduttori è riempita con un materiale dielettrico di costante $\kappa_1 = 2$, mentre all'esterno dei conduttori è presente un guscio dielettrico di raggio esterno $R_4 = 25$ cm e costante $\kappa_2 = 3$. In figura i conduttori sono in bianco, i dielettrici in grigio.

{{< figure src="../images/scritto_20210126_esercizio_1.png"  width="400px">}}

1. Il conduttore più interno viene caricato con carica $q$. Alla fine della procedura si trova che la superficie conduttrice più esterna possiede una densità superficiale di carica $\sigma_3 = 10^{-7}$ C/m$^2$. Calcolare la densità di carica che si trova sulla superficie del conduttore sferico $\sigma_1$e sulla superficie interna del guscio conduttore $\sigma_2$ **(6 punti)**.
	* La carica sulla superficie esterna è, in modulo, la stessa delle due più interne, e infatti si ha $q_1 = q_3$ e $q_2 = -q_3$. Considerando che $\sigma_3 = q_3 4 \pi R_3^2$ si trova
	$$
	\sigma_1 = \sigma_3 \frac{R_3^2}{R_1^2} = 4 \times 10^{-7} {\rm C/m^2}
	$$
	e
	$$
	\sigma_2 = -\sigma_3 \frac{R_3^2}{R_2^2} = -1.78 \times 10^{-7} {\rm C/m^2}
	$$
2. In queste condizioni calcolare la differenza di potenziale $\Delta V_{14}$ tra il conduttore più interno ed un punto posto ad una distanza $R_4$ **(4 punti)**.
	* Il potenziale avrà una componente dovuta al campo tra la prima e la seconda superficie conduttrice e una dovuta al campo tra la superficie più esterna e il punto $R_4$:
	$$
	\Delta V\_{14} = \frac{q_1}{4 \pi \epsilon_0 \kappa_1} \left( \frac{1}{R_1} - \frac{1}{R_2} \right) + \frac{q_1}{4 \pi \epsilon_0 \kappa_2} \left( \frac{1}{R_3} - \frac{1}{R_4} \right) = 900 {\rm V}
	$$
3. Il guscio più esterno viene messo a terra. Determinare il nuovo valore di $\Delta V\_{14}$ **(6 punti)**.
	* Se si mette il guscio sferico a terra la carica sulla sua superficie esterna si annulla, e quindi anche il campo all'esterno sarà nullo. Di conseguenza, la seconda componente della differenza di potenziale è nulla. Si trova quindi
	$$
	\Delta V\_{14} = \frac{q_1}{4 \pi \epsilon_0 \kappa_1} \left( \frac{1}{R_1} - \frac{1}{R_2} \right) = 750 {\rm V}
	$$

---

## Secondo esercizio

Una spira quadrata di lato $l = 10$ cm e massa $g = 1$ g può muoversi senza attrito su di un piano inclinato di angolo $\theta = 30^\circ$. Un filo indefinito in cui scorre una corrente $i_f = 50$ A è posto ad una distanza $d$ dal lato più in alto della spira. Nella spira scorre una corrente $i = 10$ A nel verso indicato nel pannello di destra della figura, e in queste condizioni la spira è in equilibrio.

{{< figure src="../images/scritto_20210126_esercizio_2.png"  width="600px">}}

**Nota Bene:** la forza di gravità agisce verso $-\hat{y}$, il pannello di sinistra e il pannello di destra mostrano lo stesso sistema da punti di vista diversi (indicati dai sistemi di riferimento), e le soluzioni di un'equazione di secondo grado $ax^2 + bx + c=0$ sono $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

1. Determinare il verso di $i_f$ **(4 punti)**.
	
	* Il lato più vicino al filo è quello che sente la forza maggiore, e quindi il verso della corrente che scorre in esso controllerà il segno della forza magnetica. Quest'ultima deve essere diretta verso il filo per opporsi alla forza di gravità, quindi le correnti nel lato in alto e nel filo devono essere equiverse e quindi $i_f$ scorre parallela a $\hat{z}$.
2. Calcolare il valore di $d$ **(6 punti)**.
	* Imponendo che le forze parallele al piano siano uguali si trova
	$$
	mg \sin\theta = \frac{\mu_0 i_f i l}{2 \pi}\left(\frac{1}{d} - \frac{1}{l+d} \right).
	$$
	Risolvendo per $d$ si ottiene una equazione di secondo grado. Delle due soluzioni solo uno è positiva, e quindi una sola ha senso fisico (dato che $d$ è una distanza). Si trova quindi $d = 2$ mm.
3. La corrente $i_f$ viene dimezzata e quindi la spira comincia a muoversi. Determinare il verso della corrente elettromagnetica che viene indotta in questa situazione **(6 punti)**. **Nota Bene:** per risolvere questo punto non è necessario fare calcoli complicati, basta giustificare la propria risposta col ragionamento fisico!
	* Muovendosi verso il basso la spira si allontanerà dal filo e quindi  il flusso del campo prodotto dal filo attraverso la spira tenderà a diminuire. L'induzione elettromagnetica tenderà a contrapporsi a questo effetto e quindi la corrente indotta tenderà a sommarsi costruttivamente al campo già presente (che va verso il basso ortogonalmente al piano), quindi sarà equiversa a quella che già scorre nel filo. Si può arrivare allo stesso risultato considerando che i fenomeni di induzione elettromagnetica agiscono sempre come attriti, quindi la forza dovuta alla corrente indotta deve agire nella stessa direzione di quella dovuta al filo.
	