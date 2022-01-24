+++
title = "Scritto del 13/07/2021"
date = 2021-07-16T10:18:43+02:00
draft = false

+++

## Elettricità

{{< figure src="../images/scritto_20210713_esercizio_1.png"  width="500px">}}

Un condensatore piano di superficie $\Sigma = 100$ cm$^2$ e altezza $h = 6$ mm è riempito parzialmente da una lastra conduttrice di spessore $s = 2$ mm (in nero) e da un dielettrico di spessore $a = 2$ mm e $\kappa = 4$ (in grigio), disposti come in figura. Il condensatore è posto all'interno del circuito in figura. Le due resistenze valgono $R_1 = 30\, {\rm \Omega}$ e $R_2 = 10\, {\rm \Omega}$. L'interruttore è inizialmente aperto.

1. Disegnare il circuito equivalente, calcolando esplicitamente i valori degli elementi equivalenti **(7 punti)**.
	* La resistenza equivalente vale $R_{\rm eq} = R_1R_2 / (R_1 + R_2) = 7.5 \, \Omega$. La capacità equivalente si può calcolare considerando il condensatore come l'equivalente di due condensatori in serie oppure utilizzando direttamente la definizione. Scegliamo questa seconda via e calcoliamo la d.d.p. tra le armature:
$$
\Delta V = \frac{qa}{\epsilon_0 \Sigma} + \frac{qa}{\kappa \epsilon_0 \Sigma}
$$
e quindi
$$
C\_{\rm eq} = \frac{q}{\Delta V} = \frac{\epsilon_0 \Sigma\kappa}{a} \frac{1}{1 + \kappa} = 3.54 \times 10^{-11} \, {\rm F}
$$
2. Tra le due armature vi è una d.d.p. $\Delta V = 50$ V. Calcolare la carica immagazzinata dal condensatore **(3 punti)**.
	* Utilizzando la relazione che lega le quantità in gioco troviamo
	$$
	q = C_{\rm eq} \Delta V = 1.77 \times 10^{-9} \, {\rm C}
	$$
4. Si chiude l'interruttore e si aspetta che non scorra più alcuna corrente nel circuito. Calcolare tutta l'energia dissipata sulla resistenza equivalente **(6 punti)**. *Nota Bene:* non è necessario studiare il processo di scarica per risolvere questo punto.
	* L'energia dissipata non può essere che quella contenuta nel condensatore, che vale
	$$
	U_e = \frac{1}{2} q \Delta V = 4.42 \times 10^{-8} \, {\rm J}
	$$

## Magnetismo

Una spira di forma pentagonale ($a = 10$ cm, $b = 6$ cm) ha massa $m = 15$ g, è percorsa da una corrente $i$ ed è posta, in equilibrio, in una regione di spazio in cui sono presenti due campi magnetici aventi direzione $\hat{z}$. Per $y < 0$ il campo vale $\vec{B}_2 = B_2 \hat{z}$, con $B_2 = 0.7$ T, mentre per $y > 0$ il campo vale $\vec{B}_1 = -B_1 \hat{z}$, con $B_1 = 0.3$ T. **Nota Bene:** la forza peso agisce lungo $-\hat{y}$ e la lunghezza dei lati verticali è ininfluente.

{{< figure src="../images/scritto_20210713_esercizio_2.png"  width="500px">}}

1. Determinare verso e intensità di $i$ **(5 punti)**.
	* I due campi hanno verso opposto ma, poiché la corrente scorre in verso opposto nel segmento in alto e nei due in basso, genereranno forze magnetiche con uguale verso. Affinché queste forze siano dirette verso l'alto la corrente deve scorrere in senso orario. Ricordando che la forza magnetica è data da $\vec{F} = i \vec{s} \times \vec{B}$, dove $\vec{s}$ è il vettore che congiunge il primo e l'ultimo punto del segmento, il bilancio delle forze è
	$$
	i a (B_2 + B_1) = mg
	$$
	e quindi
	$$
	i = \frac{mg}{a(B_1 + B_2)} = 1.47 \, {\rm A}
	$$
	
2. Determinare il modulo e la direzione (indicandola sul disegno) della forza magnetica agente sul segmento diagonale in alto a sinistra **(5 punti)**.
	* La direzione della forza è quella ortogonale al lato. Per il modulo usiamo di nuovo la definizione di forza magnetica:
	
	$$
	F = i b B_1 = 0.026 \, {\rm N}
	$$
	
3. Il verso del campo $\vec{B}_1$ viene invertito, lasciando inalterata sia la sua intensità che quella della corrente che scorre nella spira. Determinare il nuovo valore del modulo che $\vec{B}_2$ deve avere per far sì che la spira rimanga in equilibrio **(6 punti)**.

   * Il nuovo equilibrio è dato da

$$
  i a B_2 = mg + i a B_1
$$
  e quindi
$$
B_2 = \frac{mg}{i a} + B_1 = 1.3 \, {\rm T}
$$