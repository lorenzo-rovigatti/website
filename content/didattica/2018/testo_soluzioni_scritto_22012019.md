+++
title = "Scritto del 22/01/2019"
date = 2018-11-11T16:18:43+02:00
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

Due piani conduttori carichi quadrati di lato $a = 10$ cm sono posti parallelamente uno all'altro a distanza $h = 2$ cm. Tra i due piani, che consideriamo indefiniti, si misura un campo elettrico di intensità $E = 150$ N/C.

{{< figure src="../images_scritto_22012019/esercizio_1A.png" alt="1A" width="400px">}}

1. Calcolare la differenza di potenziale $\Delta V$ tra i due piani.
	* $\Delta V = Eh = 3.0$ V.
2. Calcolare la carica presente su ognuno dei due piani conduttori.
	* In questa configurazione di carica $E = \frac{\sigma}{\epsilon_0}$, quindi la densità di carica sulla faccia caricata positivamente vale
	$$
	\sigma = E \epsilon_0 = 1.33 \times 10^{-9} \, {\rm C / m^2}
	$$
	e quindi
	$$
	q_c = \sigma a^2 = 1.33 \times 10^{-11} \, {\rm C}.
	$$
	La carica presente sull'altro piano è semplicemente $-q_c$.
3. Calcolare l'energia potenziale del sistema.
	* Il sistema in esame è un condensatore piano, e quindi la sua energia potenziale vale
	$$
	U = \frac{1}{2} q_c \Delta V = 2.0 \times 10^{-11} \, {\rm J}
	$$

Una particella di massa $m = 9.109 \times 10^{-31}$ kg e carica $q = 1.602 \times 10^{-19}$ C entra nello spazio compreso tra i due piani a ridosso del piano caricato positivamente (vedi figura). La particella ha una velocità iniziale $v_0$, parallela ai piani, diversa da 0. La particella esce dalla regione compresa tra i piani avendo percorso una distanza lungo $y$ pari a $\Delta y = 1.4$ cm.

{{< figure src="../images_scritto_22012019/esercizio_1B.png" alt="1B" width="400px">}}

1. Calcolare $v_0$ e il modulo della velocità finale.
	* Lungo $y$ si ha un moto uniformemente accelerato con accelerazione $a_y = \frac{qE}{m}$, quindi
	$$
	\Delta y = \frac{1}{2} a_y \Delta t^2 = \frac{1}{2} \frac{qE}{m} \Delta t^2,
	$$
	dove $\Delta t$ è il tempo impiegato dalla particella per uscire dalla regione tra i piani che quindi vale
	$$
	\Delta t = \sqrt{\frac{2 m \Delta y}{qE}} = 3.3 \times 10^{-8} \, {\rm s}.
	$$
	Poiché la velocità lungo $x$ non varia, questo tempo è anche dato da
	$$
	\Delta t = \frac{a}{v_0}
	$$
	e quindi si trova
	$$
	v_0 = \frac{a}{\Delta t} = 3 \times 10^{6} \, {\rm m/s}.
	$$
	La componente della velocità finale lungo $y$ vale
	$$
	v_y = a_y \Delta t = \frac{qE}{m} \Delta t = 0.86 \times 10^6 \, {\rm m/s}
	$$
	e quindi il modulo della velocità finale è
	$$
	v = \sqrt{v_0^2 + v_y^2} = 3.12 \times 10^6 \, {\rm m/s}
	$$
2. Calcolare la differenza di energia cinetica tra lo stato iniziale e quello finale.
	* Questa quantità si può calcolare in due modi: o come meno la differenza di energia potenziale o usando le velocità calcolate al punto precedente. In ogni caso vale
	$$
	\Delta U_k = q E \Delta y = \frac{1}{2} m v_y^2 = 3.4 \times 10^{-19} \, {\rm J}
	$$

Una lastra

* conduttrice di altezza $h' = 0.1$ cm
* di materiale dielettrico ($\kappa = 4$) di altezza $h' = 0.1$ cm
	
viene inserita tra i due piani a distanza tale da non intercettare la traiettoria della particella carica (vedi figura).

{{< figure src="../images_scritto_22012019/esercizio_1C.png" alt="1C" width="400px">}}

1. Considerando tutti gli altri dati invariati, come cambia il risultato al punto precedente?
	* Non cambia perché il valore del campo nello spazio in cui non è presente la lastra rimane invariato.

---

## Magnetismo

Un sistema è composto da tre fili indefiniti percorsi dalle correnti $i_1$, $i_2$ ed $i_3$ e disposti uno sopra l'altro. Il primo ed il terzo filo sono **fissi**, mentre il secondo, che ha densità di massa $\lambda = 0.1$ kg/m, si può muovere. Nel filo in alto scorre una corrente $i_1 = 50$ A nel verso indicato nel pannello di sinistra della figura, mentre l'integrale di linea del campo magnetico sul percorso $\mathcal{C}$ (pannello di destra della figura) vale $\oint\_\mathcal{C} \vec{B} \cdot d\vec{s} = 0$.

Il sistema è in equilibrio quando il secondo filo è posto alla stessa distanza $d$ dagli altri due fili. **Nota Bene:** la forza peso ha direzione $-\hat{y}$.

{{< figure src="../images_scritto_22012019/esercizio_2.png" alt="2" width="400px">}}

1. Determinare il verso delle correnti che scorrono nel secondo e nel terzo filo.
	* Poiché la circuitazione del campo magnetico lungo $\mathcal{C}$ è nulla, si deve avere $i_3 = -i_1$, quindi nel terzo filo scorre una corrente opposta rispetto a quella che scorre nel primo. In questa configurazione, l'unico modo per far sì che la forza magnetica si opponga a quella peso è che $i_2$ abbia lo stesso segno di $i_1$.
2. Determinare il valore di $i_2$ per $d = 0.1$ mm.
	* Se il sistema è in equilibrio la risultante delle forze agenti sul secondo filo deve essere nulla. Sommando tutti i contributi si trova
	$$
	\frac{\mu_0 i_2 i_1}{2 \pi d} + \frac{\mu_0 i_2 i_3}{2 \pi d} - \lambda g = 0
	$$
	cioè
	$$
	\lambda g = \frac{\mu_0 i_2}{2 \pi d} (i_1 + i_3) = \frac{\mu_0 i_1 i_2}{\pi d}
	$$
	dove abbiamo usato il fatto che $i_1$ e $i_3$ hanno la stessa intensità. Si trova quindi
	$$
	i_2 = \frac{\lambda g \pi d}{\mu_0 i_1} = 4.9 \, {\rm A}.
	$$
3. Determinare il valore di $d$ per $i_2 = 40$ A.
	* Utilizzando la penultima formula del punto precedente si trova
	$$
	d = \frac{\mu_0 i_1 i_2}{\pi \lambda g} = 8.16 \times 10^{-4}\, {\rm m}
	$$
4. Il primo filo viene rimosso. Considerando immutati i valori di $i_2$, $i_3$, $\lambda$ e $d$ dati (o calcolati) precedentemente, determinare intensità, direzione e verso del campo magnetico uniforme che va aggiunto alla regione di spazio in cui sono presenti i fili per far sì che il sistema resti in equilibrio.
	* Il campo uniforme che si aggiunge deve andare a sostituire quello dovuto al primo filo. Nella configurazione disegnata in figura, $\vec{B}$ deve quindi avere verso entrante nel foglio e modulo
	$$
	B = \frac{\mu_0 i_1}{2 \pi d},
	$$
	che vale $0.1$ T se $d = 0.1$ mm e $0.012$ T se $d = 0.816$ mm.
5. Il terzo filo viene rimosso. Considerando immutati i valori di $i_1$, $i_2$, $\lambda$ e $d$ dati (o calcolati) precedentemente, determinare intensità, direzione e verso del campo magnetico uniforme che va aggiunto alla regione di spazio in cui sono presenti i fili per far sì che il sistema resti in equilibrio.
	* Poiché la forza dovuta al primo ed al terzo filo è la stessa, il campo è quella trovato al punto precedente.

