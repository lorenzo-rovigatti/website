+++
title = "Scritto del 20/09/2019"
date = 2019-09-20T12:16:43+02:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
caption = ""

+++

## Elettricità

Un sistema è composto da una carica $q = 10^{-9}$ C posta nell'origine degli assi e da un piano isolante, posto parallelalelamente all’asse $y$ a distanza $l = 3$ cm dall'origine e caricato negativamente con una distribuzione uniforme di densità superficiale $\sigma = -2 \times 10^{-7}$ C / m$^2$ (si veda la figura).

{{< figure src="../images_scritto_20092019/esercizio_1.png" alt="1" width="300px">}}

1. Determinare il campo elettrostatico nel punto $A = (l/2, l/2)$ **(6 punti)**.

* Il campo totale è dato dalla sovrapposizione dei campi generati dal piano e dalla carica, che valgono:
$$
\vec{E}_p = - \frac{\sigma}{2\epsilon_0} \hat{x}
$$
$$
\vec{E}_c = \frac{q}{4\pi \epsilon_0}\frac{\hat{r}_A}{r_A^2}
$$
dove $r_A = l/\sqrt{2}$ e $\hat{r}_A = \frac{1}{r_A}(l/2, l/2) = l/\sqrt{2}(1, 1)$, quindi
$$
\vec{E}_c = \frac{\sqrt{2}q}{\pi \epsilon_0l^2}(1, 1)
$$
Sommando i contributi si trova
$$
\vec{E} = (- \frac{\sigma}{2\epsilon_0} + \frac{\sqrt{2}q}{4\pi \epsilon_0l^2}, \frac{\sqrt{2}q}{4\pi \epsilon_0l^2})
$$

2. Calcolare la differenza di potenziale tra il punto $B = (l/2, l/3)$ ed il punto $A$ **(6 punti)**.

* La differenza di potenziale in generale è la somma dei due diversi contributi. In questo caso specifico, però, la distanza dei due punti dal piano è la stessa, quindi la differenza di potenziale si riduce a
$$
\Delta V = \Delta V_p + \Delta V_c = \Delta V_c
$$
dove
$$
\Delta V_c = \frac{q}{4 \pi \epsilon_0}\frac{1}{r_B} - \frac{q}{4 \pi \epsilon_0}\frac{1}{r_A} = \frac{q}{4 \pi \epsilon_0 l} \left( \frac{6}{\sqrt{13}} - \sqrt{2} \right) = 74.9 \, {\rm V}
$$
quindi
$$
\Delta V = 74.9 \, {\rm V}
$$

3. Se si mettesse una carica $q_0 = 10^{-9}$ C, inizialmente ferma, nel punto $A$, verso quale direzione tenderebbe a muoversi **(4 punti)**? Utilizzare una notazione vettoriale per rispondere (per esempio $5 \hat{x} + 12 \hat{y}$ oppure $(5, 12)$).

* La carica tenderà a muoversi nella direzione della forza $\vec{F} = q \vec{E} = \left(2.54 \times 10^{-5} \, {\rm N}, 1.41 \times 10^{-5} \, {\rm N}\right)$, che, se normalizzata, dà la seguente direzione:
$$
0.87 \hat{x} + 0.49 \hat{y}
$$

---

## Magnetismo

Un solenoide indefinito di sezione rettangolare di lati $a = 20$ cm e $b = 10$ cm ha una densità di spire $n = 17$ cm$^{-1}$ ed è percorso da una corrente $i = 3.9$ A. Una particella di massa $m = 1.67 \times 10^{-27}$ Kg e carica $q = 1.602 \times 10^{-19}$ C entra all'interno del solenoide nel punto $O = (0, 0, 0)$ con velocità $\vec{v} = (v_x, 0, 0)$ e ne riesce nel punto $A = (a, b, 0)$ (vedi figura). 

{{< figure src="../images_scritto_20092019/esercizio_2.png" alt="1" width="300px">}}

1. Determinare il senso di scorrimento della corrente ed il modulo, la direzione ed il verso del campo magnetico all'interno del solenoide **(4 punti)**.

Poiché la $q > 0$ e la particella è deviata verso le $y$ positive, il campo deve essere diretto verso le $z$ negative (cioè verso il basso), e quindi la corrente deve scorrere in verso orario. Il modulo del campo vale
$$
B = \mu n i = 8.33 \times 10^{-3} \, {\rm T}.
$$

2. Calcolare $v_x$ **(6 punti)**.

* La velocità si può ricavare dal raggio della traiettoria, $R$. Questo si calcola notando che
$$
R^2 = a^2 + (R - b)^2
$$
e quindi
$$
R = \frac{a^2 + b^2}{2b} = 0.25 \, {\rm m}.
$$
Poiché $R = mv_x / qB$ si trova
$$
v_x = \frac{RqB}{m} = 2 \times 10^5 \, {\rm m/s}
$$

3. Determinare l'angolo $\theta$ di uscita della particella **(6 punti)**.

* Utilizzando la costruzione geometrica del punto precedente si trova che $R \cos{\theta} = R - b$ e quindi
$$
\theta = \arccos{\frac{R - b}{R}} = \arccos{\frac{3}{5}} = 0.927 \, {\rm rad} = 53^\circ.
$$

