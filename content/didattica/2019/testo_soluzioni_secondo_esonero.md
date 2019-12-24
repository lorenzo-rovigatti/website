+++
title = "Secondo Esonero"
date = 2019-12-24T08:18:43+02:00
draft = false
+++

**Nota Bene:** i compiti che avete svolto avevano alcune piccole differenze tra di loro (i versi delle correnti, alcuni valori numerici, *ecc*).

## Primo esercizio

Un lungo filo rettilineo percorso da una corrente $i$ è sospeso al soffitto tramite delle corde ad esso collegate ad invervalli regolari e forma un angolo $\theta = \pi / 6 = 30^\circ$ con la verticale. Il filo ha una densità lineare di massa $\lambda = 0.01$ kg/m e si trova a distanza $l = 1$ mm da un altro filo (questo fisso) in cui scorre una corrente $i_f = 10$ A nella direzione indicata in figura.

{{< figure src="../images/secondo_esonero_esercizio_1_1.png"  width="400px">}}

1. Determinare verso e intensità di $i$ **(6 punti)**.
	* L'unico modo affinché i due fili si attraggano è che la corrente scorra in entrambi nello stesso verso. Per trovare l'intensità dobbiamo invece imporre che la forza totale agente sul filo sia nulla. Scomponiamo le forze in due componenti, una parallela ed una ortogonale alle corde che collegano il filo al soffitto. Le componenti parallele della forza magnetica $\vec{F}_m$ e di quella peso $\vec{F}_p$ sono contrastate dalla tensione, mentre quelle ortogonali devono essere uguali e contrarie. La condizione che si trova è
	$$
	F_p \sin \theta = F_m \cos \theta
	$$
	e quindi, considerando che la forza peso per unità di lunghezza è $\lambda g$ e la forza magnetica per unità di lunghezza è $i B(l)$ si trova
	$$
	i = \frac{\lambda g}{B(l)} \tan \theta,
	$$
	dove $B(l)$ è il modulo del campo generato da $i_f$ a distanza $l$, che vale
	$$
	B(l) = \frac{\mu_0 i_f}{2 \pi l} = 2 \times 10^{-3} \, {\rm T}.
	$$
	Sostituendo tutti i valori si trova $i = 28.3$ A.
2. Calcolare l'integrale $\oint_{\mathcal{C}} \vec{B} \cdot d\vec{s}$, dove $\mathcal{C}$ è il cammino indicato in figura. **(4 punti)**.
	* Poiché il verso delle correnti concatenate non è coerente con quello del cammino, l'integrale sarà dato dalla somma delle correnti pesate da $\mu_0$ prese col segno meno, cioè:
	$$
	\oint\_{\mathcal{C}} \vec{B} \cdot d\vec{s} = -\mu_0 (i + i_f) = -4.81 \times 10^{-5} \, {\rm Tm}.
	$$
3. La corrente del filo fisso viene portata ad un valore $i_n = i_f / 2$ e, allo stesso tempo, viene acceso un campo esterno $\vec{B}$ uniforme. Determinare direzione, verso e modulo del campo da aggiungere per far sì che il filo in cui scorre $i$ resti nella stessa posizione e calcolare nuovamente la circuitazione su $\mathcal{C}$ **(6 punti)**.
	* Affinché il sistema resti in equilibrio dobbiamo aggiungere un campo faccia sì che la forza totale agente sul filo sia la stessa. Se $i$ è uscente il campo avrà direzione $\hat{y}$ (e viceversa), mentre il suo modulo sarà
	$$
	B = B(l) = \frac{\mu_0 (i_f - i_n)}{2 \pi l} = 10^{-3} \, {\rm T}.
	$$
	La circuitazione è data dalla stessa relazione di prima, dove dobbiamo però considerare $i_n$ invece di $i_f$, quindi
	$$
	\oint\_{\mathcal{C}} \vec{B} \cdot d\vec{s} = -\mu_0 (i_n + i) = -3.97 \times 10^{-5} \, {\rm Tm}
	$$
	Per i compiti che avevano $i_n = i_f / 3$ si ottengono i valori $B = 1.33 \times 10^{-3} \, {\rm T}$ e $\oint\_{\mathcal{C}} \vec{B} \cdot d\vec{s} = -4.18 \times 10^{-5} \, {\rm Tm}$.

---

## Secondo esercizio

Una spira quadrata fissa di lato $l = 10$ cm e resistenza $R = 15\, \Omega$ è parzialmente immersa (per una distanza $l/2$) in una regione di spazio in cui è presente un campo magnetico uniforme ma variabile nel tempo, $\vec{B}(t) = B_0 \exp\left( -\frac{t}{\tau} \right) \hat{z}$ con $B_0 = 0.5$ T e $\tau = 1$ s. 

{{< figure src="../images/secondo_esonero_esercizio_2_1.png"  width="400px">}}

1. Determinare la corrente indotta che scorre nella spira al tempo (generico) $t$ **(7 punti)**.
	* Utilizziamo la legge di Faraday sul circuito, scegliendo il cammino in modo tale che il verso di percorrenza sia coerente col verso del campo. Ne discende che
	$$
	\Phi(B) = \frac{Bl^2}{2}
	$$
	e quindi la f.e.m. indotta vale
	$$
	\mathcal{E}_i = \frac{B(t) l^2}{2 \tau}.
	$$
	Poiché la f.e.m. è positiva, la corrente scorre in verso antiorario se $\vec{B}$ è uscente e viceversa. L'intensità di corrente è
	$$
	i(t) = \frac{\mathcal{E}_i}{R} = \frac{B(t) l^2}{2 R} = \frac{B_0 \exp\left( -\frac{t}{\tau} \right)l^2}{2 \tau R}
	$$
2. Calcolare la carica che è fluita nel circuito tra il tempo $0$ ed il tempo $t = \tau$ **(3 punti)**.
	* La carica si trova con la legge di Felici:
	$$
	q = \frac{\Phi_1 - \Phi_2}{R} = \frac{B_0(1 - e^{-1}) l^2}{2 R} = 10^{-4} \, {\rm C}
	$$
3. Determinare la forza agente sulla spira (direzione, verso e modulo) al tempo $t = \tau / 2$. **(6 punti)**.
	* Indipendentemente dal verso di $\vec{B}(t)$, la forza agente sulla spira tenderà a far entrare quest'ultima sempre di più nella regione di campo, poiché tenderà a contrastare la variazione di flusso (che diminuisce). Il suo modulo è
	$$
	F_m = i(\tau / 2) l B(\tau / 2) = \frac{B_0^2 e^{-1} l^3}{2 \tau R} = 3.06 \times 10^{-6} \, {\rm N}
	$$
	Per $t = \tau / 3$ il valore è $F_m = 4.28 \times 10^{-6} \, {\rm N}$.
