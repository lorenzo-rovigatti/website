+++
title = "Scritto dell'11/06/2019"
date = 2019-06-16T16:18:43+02:00
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

Un sistema è composto da una sfera isolante di raggio $R = 2$ m, carica uniformemente con densità di carica $\rho = 10^{-9}$ C/m$^3$, e da due cariche puntiformi $q_1 = 3.77 \times 10^{-9}$ C e $q_2 = -2 q_1$. Le cariche sono disposte su tre vertici di un rettangolo (vedi figura).

{{< figure src="../images_scritto_11062019/esercizio_1.png" alt="1" width="400px">}}

1. Determinare il campo elettrico nel vertice posto in $(2R, 3/2 R)$ **(6 punti)**.

* Il campo elettrico risultante è la somma dei campi elettrici generati da $q_1$, $q_2$ e dalla sfera. I primi due contributi sono diretti, rispettivamente, verso $\hat{y}$ e verso $-\hat{x}$ e sono dati da:
$$
\vec{E}_1 = \frac{q_1}{4\pi \epsilon_0} \frac{4 \hat{y}}{9 R^2}
$$
$$
\vec{E}_2 = \frac{q_2}{4\pi \epsilon_0} \frac{\hat{x}}{R^2} = -\frac{2 q_1}{4\pi \epsilon_0} \frac{\hat{x}}{4R^2}.
$$
Applicando il teorema di Gauss possiamo considerare la sfera come una carica puntiforme di carica $q_s = \frac{4}{3} \pi R^3 \rho = 3.35 \times 10^{-8}$ C. Il contributo dato da questa carica ha direzione
$$
\hat{r} = \frac{R}{r_s}\left(2, \frac{3}{2}\right),
$$
dove $r_s = 5 / 2 R$ è la distanza del centro della sfera dal vertice $(2R, 3 / 2 R)$. Il campo elettrico generato dalla sfera vale quindi:
$$
\vec{E}_s = \frac{q_s}{4\pi \epsilon_0 r_s} \left(\frac{8\hat{x}}{25R} + \frac{12\hat{y}}{50 R} \right) = \frac{q_s}{4\pi \epsilon_0} \left(\frac{16\hat{x}}{125 R^2} + \frac{12\hat{y}}{125 R} \right)
$$
Il campo totale è dato dalla somma di questi tre contributi:
$$
\vec{E} = \vec{E}_1 + \vec{E}_2 + \vec{E}_s.
$$

2. Determinare il campo elettrico nel centro della sfera uniformemente carica **(4 punti)**.

* Nel centro della sfera la densità di carica di quest'ultima non ha effetto, quindi il campo elettrico è dato solamente dalle due cariche puntiformi, cioè
$$
\vec{E} = \vec{E}_1 + \vec{E_2}
$$
dove
$$
\vec{E}_1 = -\frac{q_1}{4\pi \epsilon_0} \frac{\hat{x}}{4R^2}
$$
$$
\vec{E}_2 = -\frac{q_2}{4\pi \epsilon_0} \frac{4\hat{y}}{9 R^2} = \frac{2 q_1}{\pi \epsilon_0} \frac{\hat{y}}{9 R^2}.
$$

3. Calcolare la variazione di energia elettrostatica del sistema qualora la carica $q_1$ venisse rimossa **(6 punti)**.

* La differenza di energia elettrostatica è definita come $\Delta U = U_f - U_i$, dove $U_f$ e $U_i$ sono i valori di energia finali ed iniziali del sistema. Poiché cambia solamente l'energia relativa a $q_1$, l'esercizio si riduce a calcolare i contributi in cui è presente quest'ultima. Quando $q_1$ è a distanza infinita la sua energia vale $U_f = 0$, mentre nello stato iniziale è pari a $U_i = q_1(V_2 + V_s)$, dove $V_2$ e $V_s$ sono i valori del potenziale dovuto alla presenza di $q_2$ e della sfera carica. Questi due contributi si possono immediatamente calcolare utilizzando l'espressione del potenziale dovuto alla presenza di cariche puntiformi:
$$
V_2 = \frac{q_2}{4 \pi \epsilon_0 \frac{5}{2} R} = -27 {\rm V}
$$
$$
V_s = \frac{q_s}{4 \pi \epsilon_0 2 R} = 75 {\rm V}
$$
e quindi la differenza di energia richiesta vale $\Delta U = -U_i = -q_1 (V_2 + V_s) = -1.82 \times 10^{-7}$ J.

---

## Magnetismo

Tre fili indefiniti percorsi dalla stessa intensità di corrente $i = 3$ A ma verso diverso sono posti sui vertici di un triangolo equilatero di lato $l = 4$ m (vedi figura). Nel punto mediano $\mathbf{C}$ tra i fili 2 e 3 si pone una spira di momento di dipolo di modulo $m = 3.7 \times 10^{-5}$ Am$^2$ diretto lungo l'asse $x$.

{{< figure src="../images_scritto_11062019/esercizio_2.png" alt="2" width="400px">}}

1. Determinare il modulo del campo magnetico generato dai fili nel punto $\mathbf{C}$ **(7 punti)**.

* Il campo magnetico in $\mathbf{C}$ è dato dalla somma dei campi generati dai tre fili. Poiché i fili 2 e 3 sono percorsi da correnti di verso opposto ma eguale intensità, il loro contributo è uguale sia in modulo che in verso e vale
$$
\vec{B}_2 = \vec{B}_3 = \frac{2 \mu_0 i}{2 \pi l} \hat{y} = \frac{\mu_0 i}{\pi l} \hat{y}
$$
mentre il contributo del primo filo è dato da
$$
\vec{B}_1 = - \frac{2\mu_0 i}{2 \pi \sqrt{3} l} \hat{x} = - \frac{\mu_0 i}{\pi \sqrt{3} l} \hat{x}
$$
e quindi il campo magnetico totale è
$$
\vec{B} = \vec{B}_1 + \vec{B}_2 + \vec{B}_3 = \frac{\mu_0 i}{\pi l}\left( -\frac{\hat{x}}{\sqrt{3}} + 2\hat{y}\right),
$$
il cui modulo vale
$$
B = \frac{\mu_0 i}{\pi l} \sqrt{4 + \frac{1}{3}} = 6.2 \times 10^{-7} {\rm T}
$$

2. Calcolare l'energia potenziale del dipolo magnetico **(4 punti)**.

* L'energia potenziale di un dipolo magnetico in un campo data dal prodotto scalare del momento di dipolo con il campo stesso preso con il segno negativo, quindi
$$
U = - \vec{m} \cdot \vec{B} = - m \hat{x} \cdot \vec{B} = -m \hat{x} \cdot \vec{B}_1 = m \frac{\mu_0 i}{\pi \sqrt{3} l} = 6.4 \times 10^{-12} \, {\rm J}.
$$
Il segno positivo dell'energia viene dal fatto che il momento di dipolo e il campo sono di verso opposto.

3. Calcolare il modulo del momento meccanico delle forze subito dal dipolo magnetico **(5 punti)**.

* Il momento meccanico agente su di un dipolo è dato dal prodotto vettoriale tra il dipolo ed il campo, cioè:
$$
\vec{M} = \vec{m} \times \vec{B} = m \hat{x} \times (\vec{B}_1 + \vec{B}_2 + \vec{B}_3) = m \hat{x} \times (\vec{B}_2 + \vec{B}_3) = m \frac{2\mu_0 i}{\pi l} \hat{x} \times \hat{y} = m \frac{2\mu_0 i}{\pi l} \hat{z}
$$
dove sono presenti solo i contributi dovuti ai fili 2 e 3 poiché il campo magnetico generato dal filo 1 è diretto lungo $\hat{x}$ e quindi il suo prodotto vettoriale con il momento di dipolo è 0. Il modulo del momento meccanico vale quindi
$$
M = m \frac{2 \mu_0 i}{\pi l} = 2.2 \times 10^{-11} \, {\rm Nm}
$$
