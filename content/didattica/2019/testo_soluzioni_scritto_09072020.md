+++
title = "Scritto del 09/07/2020, A-F"
date = 2020-07-12T08:11:43+02:00
draft = false
+++

## Elettricità

Una sfera conduttrice di raggio $R = 1$ cm possiede una densità di carica $\sigma = 10^{-6}$ C/m$^2$ ed è circondata da un guscio sferico isolante di raggio $R_i = 2R$ e costante dielettrica $\kappa = 3$. 

{{< figure src="../images/scritto_09072020_esercizio_1.png" width="300px">}}

1. Determinare le densità di carica superficiale presenti sulle superfici del dielettrico **(8 punti)**.
	* Le quantità richieste si trovano a partire dal vettore di polarizzazione, che vale
	$$
	\vec{P} = \epsilon_0 (\kappa - 1) \vec{E} = \epsilon_0 (\kappa - 1) \frac{q}{4 \pi \kappa \epsilon_0} \frac{\hat{r}}{r^2} = \frac{\kappa - 1}{\kappa} \frac{\sigma R^2 \hat{r}}{r^2}.
	$$
	Ricordando che la normale è sempre orientata verso l'esterno del dielettrico si trova
	$$
	\sigma_i = \vec{P} \cdot \hat{n}_i = -\frac{\kappa - 1}{\kappa} \sigma = -0.67 \times 10^{-6} \, {\rm C/m^2}
	$$
	e
	$$
	\sigma_e = \vec{P} \cdot \hat{n}_e = \frac{\kappa - 1}{\kappa} \frac{\sigma R^2}{R_i^2} = 0.17 \times 10^{-6} \, {\rm C/m^2}
	$$
2. Scrivere l'espressione del campo elettrico in un punto posto a distanza $r > R_1$ dal centro della sfera **(8 punti)**.
	* Il campo elettrico fuori da un dielettrico non è influenzato da quest'ultimo, quindi possiamo scrivere immediatamente
	$$
	\vec{E} = \frac{q}{4 \pi \epsilon_0} \frac{\hat{r}}{r^2}
	$$
	dove $\hat{r}$ è il versore radiale e $q = 4 \pi R^2 \sigma = 1.3 \times 10^{-9}$ C è la carica totale del conduttore. Lo stesso risultato si trova applicando direttamente il teorema di Gauss.

---

## Magnetismo

Un circuito chiuso di forma rettangolare di dimensioni $a$ e $b = 10$ cm contenente una resistenza $R = 10^{-2}\, \Omega$  è parzialmente immerso in una regione di campo magnetico larga $l = 20$ cm (colorata in grigio in figura). Il campo magnetico ha direzione ortogonale al circuito e modulo che varia nel tempo con la legge $B(t) = At^2$ con $A > 0$. Al tempo $t_0 = 1$ s si misura nel circuito una corrente di verso antiorario ed intensità $i = 2$ A.

**Nota Bene:** il valore di $a$ non è importante.

{{< figure src="../images/scritto_09072020_esercizio_2.png" width="400px">}}

1. Determinare il verso del campo magnetico **(6 punti)**.
	* Poiché il modulo del campo magnetico aumenta con l'aumentare del tempo, aumenterà anche il flusso del campo attraverso il circuito. Il campo magnetico indotto dalla corrente che scorre nel circuito deve opporsi a questa variazione, e quindi avrà verso contrario a quello di $\vec{B}$. Poiché la corrente scorre in senso antiorario, il campo che induce avrà verso uscente e quindi $\vec{B}$ ha verso entrante.
2. Determinare il valore (corredato di unità di misura) di $A$ **(10 punti)**.
	* Per trovare il valore di $A$ troviamo prima la f.e.m. indotta tramite la legge di Faraday:
	$$
	\mathcal{E} = -\frac{d\Phi(B)}{dt} = -\frac{d}{dt} A t^2 bl = - 2 A t b l
	$$
	da cui si trova
	$$
	i(t_0) = \left| \frac{\mathcal{E}(t_0)}{R} \right| = \frac{2 A t_0 b l}{R}
	$$
	e quindi
	$$
	A = \frac{i R }{2 t_0 b l} = 0.5 \, {\rm T/s^2}
	$$
	
