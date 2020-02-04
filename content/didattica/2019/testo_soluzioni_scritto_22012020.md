+++
title = "Scritto del 22/01/2020"
date = 2020-01-23T08:11:43+02:00
draft = false
+++

**Nota Bene:** i compiti che avete svolto avevano alcune piccole differenze tra di loro.

## Elettricità

I condensatori in figura hanno valori $C_1 = 3$ nF, $C_2 = 2$ nF, $C_3 = 4$ nF, $C_4 = 2$ nF, $C_5 = 3$ nF. Il circuito viene inizialmente chiuso. \[Nelle soluzioni poniamo $\Delta V = 10$ V per comodità.\]

{{< figure src="../images/scritto_22012020_esercizio_1.png"  width="400px">}}

1. Determinare il circuito equivalente **(5 punti)**.
	* Il circuito si riduce ad un unico condensatore equivalente posto ad una d.d.p. $\Delta V$. Il ramo di sinistra ha capacità equivalente
	$$
	C\_{\rm eq}^{s} = \frac{(C_1 + C_2)C_3}{C_1 + C_2 + C_3} = 2.22 \, {\rm nF}
	$$
	mentre per quello di destra si ha
	$$
	C\_{\rm eq}^{d} = C_4 + C_5
	$$
	e quindi la capacità equivalente totale vale
	$$
	C\_{\rm eq} = C\_{\rm eq}^{s} + C\_{\rm eq}^{d} = 7.22 \, {\rm nF}
	$$
2. Determinare la differenza di potenziale tra i punti $A$ e $B$ **(6 punti)**.
	* La d.d.p. richiesta è quella ai capi del parallelo di $C_1$ e $C_2$, che hanno capacità equivalente $C\_{\rm eq}^{a} = C_1 + C_2 = 5$ nF. Per trovarla è quindi sufficiente calcolare la carica $q^a$ presente sulle sue armature e dividerla per la capacità. Poiché $C\_{\rm eq}^{a}$ e $C_3$ sono connessi in serie, $q^a$ è la quantità di carica presente sul condensatore equivalente $C\_{\rm eq}^{s}$. Si trova quindi
	$$
	q^a = C\_{\rm eq}^{s} \Delta V = 22.2 \times 10^{-9}\, {\rm C},
	$$
	e quindi
	$$
	\Delta V\_{AB} = \frac{q^a}{C\_{\rm eq}^{a}} = \frac{C\_{\rm eq}^{s} \Delta V}{C\_{\rm eq}^{a}} = 4.44 \, {\rm V}
	$$
3. L'interruttore viene aperto e $C_3$ riempito completamente con un materiale dielettrico con $\kappa = 4$. Calcolare la carica e la differenza di potenziale ai capi di $C_3$. **(5 punti)**.
	* Poiché scolleghiamo il generatore prima di aggiungere l'isolante, la carica presente sul condensatore ($q_3 = q^a = 22.2$ nC) rimane invariata. La d.d.p. si trova dalla definizione di capacità, e vale (ricordando che ora la capacità vale $C_3' = \kappa C_3$)
	$$
	\Delta V_3' = \frac{q_3}{\kappa C_3} = 1.39 \, {\rm V}
	$$

---

## Magnetismo

Un solenoide di sezione rettangolare di lati $a = 15$ cm e $b = 10$ cm ha una densità di spire $n = 17$ cm$^{-1}$, possiede un'induttanza $L = 9$ H ed è percorso da una corrente $i$. Una particella di massa $m = 1.67 \times 10^{-27}$ Kg, carica $q = 1.602 \times 10^{-19}$ C e velocità $v = 10^4$ m/s entra all'interno del solenoide nel punto posto a distanza $b/3$ dallo spigolo in basso a sinistra e ne riesce nello spigolo in basso a destra (vedi figura).
{{< figure src="../images/scritto_22012020_esercizio_2.png"  width="400px">}}

1. Determinare l'intensità ed il verso della corrente ed il modulo, la direzione ed il verso del campo magnetico all'interno del solenoide **(6 punti)**.
	* Dato il segno della carica e la traiettoria della particella, il campo deve essere uscente se $q > 0$ ed entrante se $q < 0$ rispetto al foglio. Coerentemente, la corrente deve scorrere in senso antiorario se $q > 0$, orario altrimenti. Notiamo che vale la costruzione geometrica
	$$
	a^2 + (R - b/3)^2 = R^2
	$$
	dove $R$ è il raggio di curvatura, che quindi vale
	$$
	R = \frac{3}{2}\frac{a^2}{b} + \frac{b}{6} = 0.35 \, {\rm m}.
	$$
	Conoscendo $R$ possiamo ottenere il valore del modulo del campo magnetico:
	$$
	B = \frac{mv}{qR} = 2.95 \times 10^{-4} \, {\rm T}
	$$
	da cui ricaviamo la corrente:
	$$
	i = \frac{B}{\mu_0 n} = 0.14 \, {\rm A}
	$$
	**Nota Bene:** alcuni compiti avevano $q < 0$. In questo caso il campo è entrante e la corrente oraria.
2. Calcolare il tempo che la particella trascorre all'interno del solenoide **(5 punti)**.
	* Ricordando che $\theta = \omega t$, dove $\omega$ è la velocità angolare e $\theta$ è l'angolo spazzato dalla traiettoria. Il seno di quest'ultimo è legato al rapporto tra cateto ed ipotenusa, cioè
	$$
	\sin \theta = \frac{a}{R} = 0.42
	$$
	e quindi $\theta = 0.44$ rad. La velocità angolare è
	$$
	\omega = \frac{qB}{m} = \frac{v}{R} = 2.82 \times 10^4 \, {\rm rad/s}
	$$
	e quindi si trova
	$$
	t = \frac{\theta}{\omega} = 0.15 \times 10^{-4} \, {\rm s}
	$$
3. Un interruttore che collega il solenoide al generatore viene aperto. Sapendo che nei primi 0.1 secondi la corrente passa dall'intensità iniziale (calcolata precedentemente) a 10 mA, determinare il valore della resistenza $R'$ presente tra i due poli dell’interruttore **(5 punti)**.
	* La legge oraria della corrente è $i(t) = i e^{-\frac{t}{\tau}}$, con $\tau = L / R'$. Poiché $i$(0.1 s)$ = 10$ mA, si trova
	$$
	R' = \frac{L}{0.1 \, {\rm s}} \log \left( \frac{i}{10 \, {\rm mA}} \right) = 236 \, \Omega
	$$
