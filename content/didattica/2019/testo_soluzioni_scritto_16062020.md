+++
title = "Scritto del 16/06/2020, A-F"
date = 2020-06-16T08:11:43+02:00
draft = false
+++

## Elettricità

Il circuito in figura è composto da due resistenze, $R_1 = 10\, \Omega$, $R_2 = 5\, \Omega$, da un condensatore di capacità $C = 1$ nF e da due generatori di tensione, $\Delta V_1 = 10$ V e $\Delta V_2 = 5$ V. I segni `+` e `-` in figura indicano i poli positivi e negativi dei due generatori.

{{< figure src="../images/scritto_16062020_esercizio_1.png" >}}

1. Determinare verso e intensità della corrente **(8 punti)**.
	* Poiché un condensatore in un circuito a corrente continuo è assimilabile ad una interruzione, i generatori e le resistenze formano un'unica maglia. Se consideriamo il verso di $\Delta V_1$ come positivo, la seconda legge di Kirchhoff si può scrivere come
	$$
	\Delta V_1 - \Delta V_2 = (R_1 + R_2) i
	$$
	quindi
	$$
	i = \frac{\Delta V_1 - \Delta V_2}{R_1 + R_2} = 0.33 \, {\rm A}.
	$$
	Poiché il risultato è positivo, la corrente deve scorrere coerentemente rispetto al generatore 1, e quindi in verso orario.
2. Calcolare la quantità di carica immagazzinata dal condensatore **(8 punti)**.
	* La d.d.p. a cui è posto il condensatore è quella del primo generatore, poiché i suoi capi sono direttamente connessi ai capi del generatore, quindi
	$$
	q = C \Delta V_1 = 10^{-8} \, {\rm C}
	$$


---

## Magnetismo

Un fascio di cariche, composto da due tipi di particelle aventi $m_1 = 1.67 \times 10^{-27}$ kg, $m_2 = 9.1 \times 10^{-31}$ kg e $|q_1| = |q_2|$, entra in uno spettroscopio di massa costruito come in figura. All'interno dello spettroscopio (in grigio nella figura) vi è un campo magnetico uscente di intensità $B = 10^{-4}$ T. Le particelle di tipo 1 trascorrono un tempo $t_1 = 1.64 \times 10^{-4}$ s all'interno della regione col campo magnetico prima di urtare lo schermo di sinistra.

**Nota Bene:** le due pareti formano un angolo retto.

{{< figure src="../images/scritto_16062020_esercizio_2.png" >}}

1. Determinare i segni di $q_1$ e $q_2$ **(4 punti)**.
	* Applicando la legge di Lorentz si trova che $q_1 > 0$ e $q_2 < 0$.
2. Calcolare il tempo che le particelle di tipo 2 trascorrono all'interno della regione col campo prima di colpire lo schermo in alto **(12 punti)**.
	* $t_1$ è il tempo che le particelle di tipo 1 impiegano a percorrere una traiettoria sottesa da un angolo $\pi / 2$, quindi
	$$
	t_1 = \frac{\pi}{2} \frac{1}{\omega} = \frac{\pi}{2} \frac{m_1}{q_1 B} 
	$$
	dove $\omega = v_1 / r_1 = q_1 B / m_1$ è la velocità angolare. Dalla relazione precedente ci troviamo il valore della carica:
	$$
	q_1 = \frac{\pi}{2} \frac{m_1}{t_1 B} = 1.6 \times 10^{-19} \, {\rm C}.
	$$
	Ora che conosciamo il valore della carica possiamo trovare direttamente $t_2$ sapendo che $|q_2| = |q_1|$ e che l'angolo che sottende la traiettoria percorsa dalle particelle 2 è $\pi$:
	$$
	t_2 = \frac{\pi m_2}{q_2 B} = 1.78 \times 10^{-7} \, {\rm s}.
	$$
