+++
title = "Scritto del 24/06/2019"
date = 2019-06-24T12:18:43+02:00
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

## Elettricità

Un sistema è composta da una carica $q = 10^{-9}$ C posta nell'origine degli assi e da un piano isolante, posto parallelalelamente all’asse $y$ a distanza $l = 3$ cm dall'origine e caricato negativamente con una distribuzione uniforme di densità superficiale $\sigma = -2 \times 10^{-7}$ C / m$^2$ (si veda la figura).

{{< figure src="../images_scritto_24062019/esercizio_1.png" alt="1" width="400px">}}

1. Determinare il campo elettrostatico nel punto $A = (l/2, l/2)$ **(5 punti)**.

* Il campo totale è dato dalla sovrapposizione dei campi generati dal piano e dalla carica, che valgono:
$$
\vec{E}_p = - \frac{\sigma}{2\epsilon_0} \hat{x}
$$
$$
\vec{E}_c = \frac{q}{4\pi \epsilon_0}\frac{\hat{r}_A}{r_A^2}
$$
dove $r_A = l/\sqrt{2}$ e $\hat{r}_A = \frac{1}{r_A}(l/2, l/2) = l/\sqrt{2}(1, 1)$, quindi
$$
\vec{E}_c = \frac{q}{2\sqrt{2}\pi \epsilon_0l^2}(1, 1)
$$
Sommando i contributi si trova
$$
\vec{E} = (- \frac{\sigma}{2\epsilon_0} + \frac{q}{2\sqrt{2}\pi \epsilon_0l^2}, \frac{q}{2\sqrt{2}\pi \epsilon_0l^2})
$$

2. Calcolare il modulo del campo elettrostatico nel punto $A$ **(5 punti)**.

* Utilizziamo la formula $E = \sqrt{E_x^2 + E_y^2}$ applicata al campo trovato precedentemente. Definendo per comodità
$$
C = \frac{q}{2\sqrt{2}\pi \epsilon_0l^2},
$$
si trova
$$
E(A) = \sqrt{\frac{\sigma^2}{4\epsilon_0^2} + C^2 - \frac{\sigma}{\epsilon_0}C + C^2} = 1.16 \times 10^4 \, {\rm V/m}
$$

3. Calcolare la differenza di potenziale tra il punto $B = (l/3, l/3)$ ed il punto $A$ **(6 punti)**.

* La differenza di potenziale è la somma dei due diversi contributi:
$$
\Delta V = \Delta V_p + \Delta V_c
$$
dove
$$
\Delta V_p = -\frac{\sigma}{2\epsilon_0}\left( \frac{l}{2} - \frac{l}{3}\right) = 56.5 \, {\rm V}
$$
e 
$$
\Delta V_c = \frac{q}{4 \pi \epsilon_0}\frac{1}{r_B} - \frac{q}{4 \pi \epsilon_0}\frac{1}{r_A} = \frac{q}{4 \pi \epsilon_0 l} \left( \frac{3}{\sqrt{2}} - \sqrt{2} \right) = \frac{q}{4\sqrt{2}\pi \epsilon_0 l} = 212 \, {\rm V}
$$
quindi
$$
\Delta V = 268.5 \, {\rm V}
$$

---

\newpage

## Magnetismo

Un solenoide indefinito di sezione rettangolare di lati $a = 20$ cm e $b = 10$ cm ha una densità di spire $n = 17$ cm$^{-1}$ ed è percorso da una corrente $i = 3.9$ A. Una particella di massa $m = 1.67 \times 10^{-27}$ Kg e carica $q = 1.602 \times 10^{-19}$ C entra all'interno del solenoide nel punto $O = (0, 0)$ con velocità $\vec{v} = (v_x, 0, v_z)$ e ne riesce nel punto $A = (a, b)$ (vedi figura). 

{{< figure src="../images_scritto_24062019/esercizio_2.png" alt="2" width="400px">}}

1. Determinare il senso di scorrimento della corrente ed il modulo, la direzione ed il verso del campo magnetico all'interno del solenoide **(4 punti)**.

Poiché la $q > 0$ e la particella è deviata verso le $y$ positive, il campo deve essere diretto verso le $z$ negative (cioè verso il basso), e quindi la corrente deve scorrere in verso orario. Il modulo del campo vale
$$
B = \mu n i = 8.33 \times 10^{-3} \, {\rm T}.
$$

2. Calcolare $v_x$ **(6 punti)**.

* La velocità si può ricavare dal raggio della traiettoria, $R$. Questo si calcola notando che
$$
R^2 = a^2 + (R - B)^2
$$
e quindi
$$
R = \frac{a^2 + b^2}{2b} = 0.25 \, {\rm m}.
$$
Poiché $R = mv_x / qB$ si trova
$$
v_x = \frac{RqB}{m} = 2 \times 10^5 \, {\rm m/s}
$$

3. Determinare l'angolo $\theta$ di uscita della particella e, da questo, calcolare la distanza lungo l'asse $z$ che la particella percorre mentre si trova all'interno del solenoide. Considerare $v_z = 10^4$ m/s **(6 punti)**.

* Utilizzando la costruzione geometrica del punto precedente si trova che $R \cos{\theta} = R - b$ e quindi
$$
\theta = \arccos{\frac{R - b}{R}} = \arccos{\frac{3}{5}} = 0.927 \, {\rm rad} = 53^\circ.
$$
Ricordando che la velocità angolare vale $\omega = v/r$, il tempo che la particella trascorre all'interno del solenoide è
$$
\Delta t = \frac{\theta}{\omega} = \frac{\theta r}{v} = 1.16 \times 10^{-6} \, {\rm s}.
$$
Poiché lungo $z$ la particella si muove di moto rettilineo uniforme, la distanza percorsa varrà
$$
\Delta z = v_z \Delta t = 1.16 \times 10^{-2} {\rm m}
$$
