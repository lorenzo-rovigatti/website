+++
title = "Scritto del 09/04/2019"
date = 2019-04-09T16:18:43+02:00
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

Un guscio sferico di raggio interno $R_i = 0.75$ m e raggio esterno $R_e = 1$ m è carico uniformemente con densità di carica $\rho = 10^{-9}$ C/m$^3$. All'interno del guscio sferico si trova una sfera di raggio $R_s = R_e/6$ carica uniformemente con densità di carica $-\rho$. La sfera è centrata nel punto $(-R_e/2, 0)$.

{{< figure src="../images_scritto_09042019/esercizio_1.png" alt="1" width="400px">}}

1. Determinare le coordinate di un punto in cui il campo elettrico è nullo **(6 punti)**.
	* All'interno del guscio sferico l'unico campo presente è quello dovuto alla sfera carica. Se utilizziamo il teorema di Gauss troviamo immediatamente che nel centro della sfera il campo dovuto a quest'ultima è zero. Una possibile risposta alla domanda è quindi data dal punto $(-R_e/2, 0)$.

2. Calcolare modulo, direzione e verso del campo elettrico nel punto $(0, 0)$ **(5 punti)**.
	* Come specificato sopra, il campo all'interno della cavità è dato unicamente dalla sfera:
$$
\vec{E}(\vec{r}) = \frac{q}{4 \pi \epsilon_0} \frac{\hat{r}_s}{r_s^2}
$$
dove $r_s = R_e/2 = 0.5$ m è la distanza calcolata rispetto al centro della sfera. La carica vale
$$
q = -\frac{4}{3}\pi \left(\frac{R_e}{6}\right)^3 \rho = -1.94 \times 10^{-11} \, {\rm C}.
$$
In $(0,0)$ la direzione è l'asse $x$, mentre il verso è $-\hat{x}$ perché la carica totale è negativa. Il modulo vale quindi
$$
E = 0.70 \, {\rm V/m}
$$

3. Calcolare il flusso del campo elettrico $\Phi(\vec{E})$ attraverso una superficie sferica di raggio $r > R_e$ centrata in $(0, 0)$ **(5 punti)**.
	* L'espressione del flusso si può ottenere immediatamente tramite il teorema di Gauss:
$$
\Phi(\vec{E}) = \frac{q + Q}{\epsilon_0}
$$
dove $q$ è stata calcolata al punto precedente, mentre $Q$ è la carica del guscio sferico, che vale:
$$
Q = \frac{4}{3} \pi \rho \left( R_e^3 - R_i^3 \right) = 2.42 \times 10^{-9} \, {\rm C},
$$
quindi
$$
\Phi(\vec{E}) \approx 270\, {\rm Nm^2 / C}
$$

---

## Magnetismo

Un fascio collimato di particelle cariche entra, attraverso un foro in una parete che si trova in $x = 0$, in una regione di spazio in cui è presente un campo magnetico uniforme di modulo $B = 2 \times 10^{-3}$ T. Il fascio è composto da due specie di particelle aventi la stessa massa $m = 10^{-16}$ Kg ma carica diversa. Tutte le particelle del fascio posseggono la stessa energia cinetica $K = 0.5 \times 10^{-8}$ J, e la loro velocità $v$ è diretta ortogonalmente al campo magnetico che, considerando il sistema di riferimento in figura, è diretto lungo $-\hat{z}$ (cioè entrante nel foglio). In queste condizioni la traiettoria delle particelle è tale per cui il fascio si divide in due. I due sotto-fasci colpiscono la parete nei punti $d_1 = (0, 1 \, {\rm m})$ e $d_2 = (0, -0.8 \, {\rm m})$.

{{< figure src="../images_scritto_09042019/esercizio_2.png" alt="2" width="400px">}}

1. Determinare il valore delle cariche $q_1$ e $q_2$ delle due specie di particelle **(5 punti)**.
	* La velocità iniziale delle particelle si trova considerando che $K = \frac{1}{2} m v^2$, quindi
$$
v = \sqrt{\frac{2K}{m}} = 10^{4} \, {\rm m/s}
$$
Il fatto che le due traiettorie finiscano in punti opposti rispetto al foro di entrata implica che $q_1$ e di $q_2$ hanno segni opposti. In particolare, poiché nel disegno $\vec{B}$ è entrante si deve avere $q_1 > 0$ e $q_2 < 0$. I valori si trovano tramite le solite relazioni che collegano il raggio della traiettoria a $m$, $q$ e $B$:
$$
q_1 = \frac{2mv}{d_1 B} = 10^{-9} \, {\rm C}
$$
$$
q_2 = -\frac{2mv}{d_2 B} = -1.25 \times 10^{-9} \, {\rm C}
$$

2. Calcolare la differenza tra i tempi che particelle di specie diverse trascorrono nella regione in cui è presente il campo magnetico ($x > 0$) **(5 punti)**.
	* Utilizzando la velocità ottenuta precedentemente si trova
$$
t_1 = \frac{\pi d_1}{2 v} = 1.57 \times 10^{-4} \, {\rm s}
$$
$$
t_2 = \frac{\pi d_2}{2 v} = 1.26 \times 10^{-4} \, {\rm s}
$$
e quindi
$$
\Delta t = t_1 - t_2 = 0.31 \times 10^{-4} \, {\rm s}
$$

3. Viene acceso un campo elettrico nella regione esterna a quella in cui è presente il campo magnetico. Il nuovo campo elettrico genera una differenza di potenziale $\Delta V = 2$ V che accelera il fascio. Determinare le nuove coordinate di $d_1$ e $d_2$ **(6 punti)**.
	* La presenza del campo elettrico fa variare l'energia cinetica di particelle di carica $q$ di una quantità $q \Delta V$. L'energia cinetica delle due specie diventa quindi:
$$
K_1 = K + q_1 \Delta V = 0.7 \times 10^{-8} \, {\rm J}
$$
$$
K_2 = K + q_2 \Delta V = 0.25 \times 10^{-8} \, {\rm J}
$$
da cui si ricavano le nuove velocità:
$$
v_1 = \sqrt{\frac{2K_1}{m}} = 1.18 \times 10^{4} \, {\rm m/s}
$$
$$
v_2 = \sqrt{\frac{2K_2}{m}} = 0.71 \times 10^{4} \, {\rm m/s}.
$$
I diametri delle due traiettorie saranno quindi
$$
d_1' = \frac{2mv_1}{q_1B} = 1.18 \, {\rm m}
$$
$$
d_2' = \frac{2mv_2}{q_2B} = 0.57 \, {\rm m}
$$
