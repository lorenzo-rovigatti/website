+++
title = "Secondo Esonero"
date = 2018-11-11T16:18:43+02:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

### II ESONERO FISICA II - AA 2018 / 2019 - 20/12/2018

## Esercizio 1

Un solenoide indefinito di sezione quadrata di lato $l = 10$ cm ha una densità di spire $n = 8.5 \, {\rm cm^{-1}}$ ed è percorso da una corrente $i = 7.8$ A. Una particella carica di massa $m = 1.67 \times 10^{-27}$ Kg, che può passare senza urti attraverso il solenoide, entra all'interno del solenoide nel punto $\vec{O} = (0, l/4)$ con velocità $v = 10^5$ m/s ortogonale alla superficie del solenoide e ne riesce nel punto $\vec{P} = (l, 3l/4)$. Considerando il sistema di riferimento indicato in figura, si trova l'angolo di uscita $\theta_p = 53^\circ$.

**Nota Bene:** il campo magnetico generato da un solenoide indefinito non dipende dalla forma della sezione, purché questa sia sempre costante lungo l'asse, come in questo caso.

{{< figure src="../images_secondo_esonero/esercizio_1.png" alt="primo esercizio" width="400px">}}

Nel pannello di sinistra l'asse $z$ è uscente dal foglio. Considerare $q = \pm 1.602 \times 10^{-19}$ C.

1. Determinare il verso della corrente  **(3 punti)**.
	* Se $q$ è positiva $\vec{B} = -\hat{z}$ (la corrente scorre in verso orario), se è negativa $\vec{B} = \hat{z}$ (la corrente scorre in verso antiorario).
2. Determinare direzione, verso e modulo del campo magnetico $\vec{B}$ all'interno del solenoide **(3 punti)**.
	* Direzione e verso sono stati trovati nel punto precedente, mentre il modulo vale $B = \mu_0 n i = 8.33 \times 10^{-3}$ T.
3. Calcolare il tempo che la particella trascorre all'interno del solenoide **(3 punti)**.
	* Il tempo impiegato per "percorrere" un angolo $\theta$ vale $t = \theta / \omega$, dove il modulo della velocità angolare è $\omega = qB /m = 8 \times 10^5$ rad/s. Si trova quindi $t = \theta_p / \omega = 1.16 \times 10^{-6}$ s.
4. Calcolare la distanza percorsa dalla particella all'interno del solenoide **(3 punti)**.
	* La distanza è semplicemente la lunghezza dell'arco di circonferenza sotteso da $\theta_p$, quindi vale $\theta_p r = \theta  _p mv / qB = 0.115$ m.
5. Calcolare la distanza percorsa dalla particella lungo l'asse $z$ **(3 punti)**.
	* La velocità iniziale non ha componenti lungo $z$, quindi la particella non si muoverà lungo quest'asse.

Si ha la possibilità di riempire completamente il solenoide con una sostanza di suscettività magnetica $\chi_m$ ed, eventualmente, di cambiare il verso della corrente.

1. Determinare il valore di $\chi_m$ ed il verso della corrente necessari per far sì che la particella esca dallo spigolo $(0, l)$ (in alto a sinistra nella figura) **(6 punti)**.
	* Con i dati iniziali si trova $r = \frac{5}{4} l = 0.125$ m. Affinché la particella esca dallo spigolo in alto a sinistra si deve avere un campo di intensità $B'$ tale che $2r' = \frac{3}{4}l$. Poiché il raggio è inversamente proporzionale all'intensità del campo si trova
	$$
	\frac{B'}{B} = \frac{r}{r'} = \frac{10}{3} = \mu_r
	$$
	e quindi
	$$
	\chi_m = \mu_r - 1 = \frac{7}{3} = 2.33
	$$
	Il verso della corrente dipende dal segno di $q$ ed è lo stesso trovato nei punti precedenti.
2. Determinare il valore di $\chi_m$ ed il verso della corrente necessari per far sì che la particella esca dallo spigolo $(l, l)$ (in alto a destra nella figura) **(6 punti)**.
	* In questo caso $r'^2 = l^2 + (r - 3l/4)^2$, quindi
	$$
	r' = \frac{25}{24} l
	$$
	ragionando come prima si ottiene
	$$
	\chi_m = \mu_r - 1 = \frac{r}{r'} - 1 = \frac{6}{5} - 1 = \frac{1}{5} = 0.20.
	$$
	Per la corrente si ripete il discorso del punto precedente.
3. Determinare il valore di $\chi_m$ ed il verso della corrente necessari per far sì che la particella esca dallo spigolo $(l, 0)$ (in basso a destra nella figura) **(6 punti)**.
	* La stessa costruzione di prima dà $r'^2 = l^2 + (r - l/4)^2$, e cioè
	$$
	r' = \frac{17}{8} l
	$$
	che dà
	$$
	\chi_m = \mu_r - 1 = \frac{r}{r'} - 1 = \frac{10}{17} - 1 = -\frac{7}{17} = -0.41.
	$$
	Poiché la particella deve girare nell'altro senso, la corrente deve essere opposta a quella che genera il campo dei punti precedenti.

---

## Esercizio 2

Un filo rettilineo indefinito e fisso è percorso da una corrente $i$, con il verso indicato in figura. Una spira rettangolare indeformabile di dimensioni $a = 40$ cm e $b = 1$ m e massa $m$ è parallela al filo e posta ad una distanza $d = 1$ cm. La forza peso $\vec{F}_p$ agisce nella direzione indicata in figura. Quando nella spira scorre una corrente $i_s$ il sistema è in equilibrio e la spira rimane sospesa.

{{< figure src="../images_secondo_esonero/esercizio_2.png" alt="primo esercizio" width="400px">}}

1. Determinare il verso in cui scorre $i_s$ **(3 punti)**.
	* $i_s$ deve essere tale per cui la forza magnetica $F_m$ che il circuito sente sia contrapposta alla forza peso. In questo caso $F_m$ ha due contributi dati dalle due porzioni di spira parallele al filo. Il contributo dato dal filo più in alto è più forte, e quindi deve essere quello che determina il verso della corrente. Per far sì che si generi un'attrazione $i_s$ deve essere parallela ad $i$ in questa parte di spira. Ne consegue che $i_s$ scorre in senso orario.
2. Se $i = 30$ A e $m = 1$ g, calcolare $i_s$ **(9 punti)**.
	* L'esercizio si risolve mettendo uguali le intensità della forza peso e di quella magnetica. La forza peso vale semplicemente $mg$. Quella magnetica è dovuta alla presenza del campo magnetico generato dal filo, dato dalla legge di Biot-Savart: 
	$$
	B(r ) = \frac{\mu_0 i}{2 \pi r}.
	$$
	La forza magnetica ha due componenti dovute alle due parti di spira parallele al filo, che si sommano direttamente poiché hanno la stessa direzione:
	$$
	F_m = i_s b B(d) + i_s b B(d + a) = \frac{\mu_0 i_s i b}{2 \pi} \left( \frac{1}{d} - \frac{1}{d + a} \right).
	$$
	Uguagliando le due forze si ottiene
	$$
	\frac{\mu_0 i_s i b}{2 \pi} \left( \frac{1}{d} - \frac{1}{d + a} \right) = mg
	$$
	e risolvendo per i_s:
	$$
	i_s = \frac{2 \pi mg}{\mu_0 i} \frac{d(d + a)}{a} = 16.8 \, {\rm A}
	$$
3. Se $i = 25$ A e $i_s = 30$ A, calcolare $m$ **(9 punti)**.
	* Utilizzando la relazione trovata al punto precedente si trova:
	$$
	m = \frac{\mu_0 i_s i b}{2 \pi g} \left( \frac{1}{d} - \frac{1}{d + a} \right) = 1.5 \times 10^{-3} \, {\rm Kg}
	$$

4. Se $i_s = 25$ A e $m = 1.5$ g, calcolare $i$ **(9 punti)**.
	* Utilizzando la stessa relazione si trova:
	$$
	i = \frac{2 \pi mg}{\mu_0 i_s} \frac{d(d + a)}{a} = 30 \, {\rm A}
	$$

Si aggiunge nella regione di spazio in figura un campo magnetico uniforme ortogonale al foglio.

1. Determinare come cambierebbe il risultato al punto precedente se il campo uniforme avesse verso uscente dal foglio e di intensità $B = 1$ T **(3 punti)**.
	* Un campo uniforme genera una forza che agisce con la stessa intensità ma verso opposto su entrambi i fili, e quindi non sortisce nessun effetto.
2. Determinare come cambierebbe il risultato al punto precedente se il campo uniforme avesse verso entrante nel foglio e di intensità  $B = 0.5$ T **(3 punti)**.
	* Un campo uniforme genera una forza che agisce con la stessa intensità ma verso opposto su entrambi i fili, e quindi non sortisce nessun effetto.
