+++
title = "Lezione del 10/10/2019"
date = 2019-10-10T09:47:43+02:00
draft = false
+++

## Prima equazione di Mawell
<small>MNV: paragrafo 3.4</small>

Possiamo riscrivere il teorema di Gauss in forma locale utilizzando il teorema della divergenza:

$$
\oint\_\Sigma \vec{E} \cdot \hat{n} dS = \int\_\tau \vec{\nabla} \cdot \vec{E} d\tau = \frac{1}{\epsilon_0} \int\_\tau \rho d\tau
$$

Notiamo che ora sia a sinistra che a destra abbiamo un integrale sul volume. Possiamo quindi eguagliare gli argomenti dell'integrale, trovando

$$
\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\epsilon_0}
$$

Questa è la prima legge di Maxwell. Il prodotto scalare tra l'operatore gradiente ed un campo vettoriale è detto *divergenza*, e quindi la prima legge di Maxwell si può enunciare dicendo che "la divergenza del campo elettrico in ogni punto dello spazio è uguale alla densità di carica in quel punto, diviso per la costante dielettrica del vuoto".

Utilizzando la definizione di potenziale la prima equazione di Maxwell può essere riscritta, ottenendo l'equazione di Poisson:

$$
\vec{\nabla} \cdot (-\vec{\nabla} V) = -\nabla^2 V = \frac{\rho}{\epsilon_0}
$$
O, equivalentemente, $\nabla^2 V = -\frac{\rho}{\epsilon_0}$.
