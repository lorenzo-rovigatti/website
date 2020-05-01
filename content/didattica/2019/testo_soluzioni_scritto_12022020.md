+++
title = "Scritto del 12/02/2020"
date = 2020-02-14T08:11:43+02:00
draft = false
+++

## Elettricità

Un filo indefinito, caricato con densità di carica lineare $\lambda > 0$, è posto parallelo a $\hat{z}$ e passa per l'origine (vedi figura). Il campo che genera ad una distanza $d = 50$ cm vale $E(d) = 36$ V/m. Una carica puntiforme $q = 10^{-9}$ C si trova nel punto $(x_0, 0, 0)$, con $x_0 = 10$ cm.

{{< figure src="../images/scritto_12022020_esercizio_1.png"  width="400px">}}

1. Calcolare il valore di $\lambda$ **(4 punti)**.
	* Il modulo del campo generato da un filo posto a distanza $d$ è
	$$
	E(d) = \frac{\lambda}{2 \pi \epsilon_0 d}
	$$
	e quindi
	$$
	\lambda = 2 \pi \epsilon_0 d E(d) = 10^{-9} \, {\rm C / m}
	$$
2. Determinare l'espressione del campo elettrico nel punto $P = (2x_0, x_0, 0)$ **(6 punti)**.
	* Per il principio di sovrapposizione il campo totale è dato dalla somma dei campi dovuti al filo ed alla carica. Il primo vale
	$$
	\vec{E}_f = \frac{\lambda}{2 \pi \epsilon_0} \frac{\hat{r}_f}{r_f}
	$$
	dove $r_f = \sqrt{5}x_0$ e $\hat{r}_f = \frac{1}{\sqrt{5}}(2, 1, 0)$. Il campo dovuto alla carica è
	$$
	\vec{E}_q = \frac{q}{4 \pi \epsilon_0} \frac{\hat{r}_q}{r^2_q}
	$$
	dove $r_q = \sqrt{2}x_0$ e $\hat{r}_q = \frac{1}{\sqrt{2}} (1, 1, 0)$.
3. La carica $q$ viene spostata nel punto $(2x_0, x_0, 0)$. Calcolare il lavoro compiuto dalla forza elettrostatica **(6 punti)**.
	* Per calcolare il lavoro possiamo utilizzare la relazione $W = q\Delta V$, dove la differenza di potenziale, data solo dal campo generato dal filo, vale
	$$
	\Delta V = \int\_{r_0}^{r_1} \frac{\lambda dr}{2 \pi \epsilon_0 r} = \frac{\lambda}{2 \pi \epsilon_0} \log\left( \frac{r_1}{r_0} \right) = \frac{\lambda}{2 \pi \epsilon_0} \log \sqrt{5}
	$$
	dove $r_0 = x_0$ è la distanza iniziale e $r_1 = \sqrt{5} x_0$ quella finale. Per il lavoro vale quindi
	$$
	W = \frac{q\lambda}{2 \pi \epsilon_0} \log \sqrt{5} = 1.45 \times 10^{-8} \, {\rm J}
	$$

---

## Magnetismo

Una spira di forma pentagonale ($l = 10$ cm, $a = 6$ cm) ha massa $g = 10$ g, è percorsa da una corrente $i$ ed è posta, in equilibrio, in una regione di spazio in cui sono presenti due campi magnetici aventi direzione $\hat{z}$. Per $y < 0$ il campo vale $\vec{B}_2 = B_2 \hat{z}$, con $B_2 = 0.6$ T, mentre per $y > 0$ il campo vale $\vec{B}_1 = -B_1 \hat{z}$, con $B_1 = 0.4$ T. **Nota Bene:** la forza peso agisce lungo $-\hat{y}$ e la lunghezza dei lati verticali è ininfluente.

{{< figure src="../images/scritto_12022020_esercizio_2.png"  width="400px">}}

1. Determinare verso e intensità di $i$ **(5 punti)**.
	* I due campi hanno verso opposto ma, poiché la corrente scorre in verso opposto nel segmento in alto e nei due in basso, genereranno forze magnetiche con uguale verso. Affinché queste forze siano dirette verso l'alto la corrente deve scorrere in senso orario. Ricordando che la forza magnetica è data da $\vec{F} = i \vec{s} \times \vec{B}$, dove $\vec{s}$ è il vettore che congiunge il primo e l'ultimo punto del segmento, il bilancio delle forze è
	$$
	i l (B_2 + B_1) = mg
	$$
	e quindi
	$$
	i = \frac{mg}{l(B_1 + B_2)} = 0.981 \, {\rm A}
	$$
2. Determinare il modulo della forza magnetica agente sul segmento diagonale in basso a sinistra **(5 punti)**.
	* Usando di nuovo la definizione di forza magnetica si trova
	$$
	F = i a B_2 = 0.035 \, {\rm N}
	$$
3. Il verso del campo $\vec{B}_1$ viene invertito, lasciando inalterata sia la sua intensità che quella della corrente che scorre nella spira. Determinare il nuovo valore del modulo che $\vec{B}_2$ deve avere per far sì che la spira rimanga in equilibrio **(6 punti)**.
	* Il nuovo equilibrio è dato da
	$$
	i l B_2 = mg + i l B_1
	$$
	e quindi
	$$
	B_2 = \frac{mg}{i l} + B_1 = 1.4 \, {\rm T}
	$$
