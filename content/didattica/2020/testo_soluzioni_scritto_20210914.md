+++
title = "Scritto del 14/09/2021"
date = 2021-09-14T10:18:43+02:00
draft = false

+++

## Elettricità

Un sistema è composto da una carica negativa $q = -10^{-9}$ C posta nell'origine degli assi e da un piano isolante, posto parallelalelamente all’asse $y$ a distanza $l = 10$ cm dall'origine e caricato positivamente con una distribuzione uniforme di densità superficiale $\sigma = 2 \times 10^{-7}$ C / m$^2$ (si veda la figura).

{{< figure src="../images/scritto_20210914_esercizio_1.png"  width="500px">}}

1. Determinare il campo elettrostatico nel punto $A = (l/3, l/2)$ **(9 punti)**.
	* Il campo totale è dato dalla sovrapposizione dei campi generati dal piano e dalla carica, che valgono:
$$
\vec{E}_p = - \frac{\sigma}{2\epsilon_0} \hat{x}
$$
$$
\vec{E}_c = \frac{q}{4\pi \epsilon_0}\frac{\hat{r}_A}{r_A^2}
$$
dove $r_A = l\sqrt{13} / 6$ e $\hat{r}_A = \frac{1}{r_A}(l/3, l/2) = 1/\sqrt{13}(2, 3)$, quindi
$$
\vec{E}_c = \frac{9 q}{\pi \epsilon_0 13 \sqrt{13} l^2}(2, 3)
$$
Sommando i contributi si trova
$$
\vec{E} = \left(- \frac{\sigma}{2\epsilon_0} + \frac{18 q}{\pi \epsilon_0 13 \sqrt{13} l^2}, \frac{27 q}{\pi \epsilon_0 13 \sqrt{13} l^2}\right)
$$
2. Calcolare la differenza di potenziale tra il punto $B = (l/3, l/3)$ ed il punto $A$ **(7 punti)**.
	* La differenza di potenziale in generale è la somma dei due diversi contributi. In questo caso specifico, però, la distanza dei due punti dal piano è la stessa, quindi la differenza di potenziale si riduce a
$$
\Delta V = \Delta V_p + \Delta V_c = \Delta V_c
$$
dove
$$
\Delta V_c = \frac{q}{4 \pi \epsilon_0}\frac{1}{r_B} - \frac{q}{4 \pi \epsilon_0}\frac{1}{r_A} = \frac{q}{4 \pi \epsilon_0 l} \left( \frac{3}{\sqrt{2}} - \frac{6}{\sqrt{13}} \right) = 41 \, {\rm V}
$$
quindi
$$
\Delta V = 41 \, {\rm V}
$$

## Magnetismo

In un solenoide indefinito di area quadrata e densità lineare di spire $n = 10$ cm$^{-1}$ posto parallelo all'asse $z$ scorre una corrente $i = 10$ A in verso anti-orario. Al tempo $t = 0$ viene inserita all'interno del solenoide una particella di carica $q$, massa $m = 10^{-9}$ g e velocità iniziale $\vec{v}(0) = -v_0 \hat{x}$, con $v_0 = 1$ m/s. La particella comincia quindi a percorrere in verso anti-orario una circonferenza di raggio $r = 8$ cm.

La figura in basso mostra a sinistra una porzione del solenoide e a destra il sistema visto dall'alto.

{{< figure src="../images/scritto_20210914_esercizio_2.png"  width="500px">}}

1. Determinare la carica (compresa di segno) della particella **(5 punti)**.
	* La carica deve essere negativa perché affinché la circonferenza sia percorsa in senso antiorario al tempo $t = 0$ la forza di Lorentz $q \vec{v}(0) \times \vec{B}$ deve avere direzione $-\hat{y}$. Poiché $\vec{v}(0) \parallel -\hat{x}$ e $\vec{B} \parallel \hat{z}$, $\vec{v}(0) \times \vec{B} \parallel \hat{y}$, quindi la carica deve essere negativa. Il modulo della carica si ottiene invertendo la relazione $r = mv / qB$, da cui si ricava
	$$
	q = \frac{mv_0}{rB} = 10^{-9} \, {\rm C}
	$$
2. Determinare il tempo $t^*$ a cui si dovrebbe togliere corrente al solenoide per fare in modo che la velocità finale della particella sia diretta lungo $\hat{y}$ **(5 punti)**.
	* La velocità della particella è diretta verso l'alto quando la particella ha percorso tre quarti della circonferenza. Poiché sappiamo che il tempo impiegato a percorrere l'intera circonferenza è $T = 2 \pi r / v_0$, il tempo richiesto varrà
	  $$
	  t^* = \frac{3}{4} T = \frac{3 \pi r}{2v_0} = 0.38 \, {\rm s}
	  $$
3. La corrente nel solenoide triplica di intensità. Determinare modulo, direzione e verso che dovrebbe avere un campo esterno aggiuntivo $\vec{B}\_{\rm ext}$ per mantenere la traiettoria della particella invariata **(6 punti)**.
   * Raddoppiando la corrente all'interno del solenoide si avrà un campo $\vec{B}_1 = 3 \vec{B}$. Affinché la traiettoria della particella rimanga inalterata è necessario aggiungere un campo esterno che riporti il valore del campo totale a quello iniziale. Bisogna cioè fare in modo che $\vec{B}_1 + \vec{B}\_{\rm ext} = \vec{B} = 3 \vec{B} + \vec{B}\_{\rm ext} = \vec{B}$ e quindi
     $$
     \vec{B}\_{\rm ext} = -2\vec{B}
     $$
     Il campo esterno deve quindi avere il doppio dell'intensità del campo iniziale, stessa direzione ma verso opposto ($\parallel -\hat{z}$).