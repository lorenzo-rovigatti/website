+++
title = "Primo Esonero"
date = 2018-11-11T16:18:43+02:00
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

### I ESONERO FISICA II - AA 2018 / 2019 - 09/11/2018

## Esercizio 1

### Parte A

Un piano indefinito orientato parallelamente al piano $(y, z)$ è carico con densità di carica superficiale $\sigma = 10^{-9}$ C/m$^2$. 

1. Calcolare il campo elettrico (modulo, direzione e verso) in tutto lo spazio **(2 punti)**.
	* Il campo è uniforme e diretto lungo $\hat{x}$ per $x > 0$ (e viceversa). Il modulo vale $E = \frac{\sigma}{2\epsilon_0} = 56.5$ V / m.
2. Scrivere l'espressione della differenza di potenziale tra un punto generico $(x, y, z)$ ed il piano stesso **(2 punti)**.
	* $\Delta V = -E x = -\frac{\sigma x}{2\epsilon_0}$
3. Calcolare la differenza di potenziale $V(\vec{P}_2) - V(\vec{P}_1)$, dove $\vec{P}_1 = (2d, 0, d)$ e $\vec{P}_2 = (d, d, 2d)$, $d = 10$ m **(2 punti)**.
	* $\Delta V = -\frac{\sigma}{2\epsilon_0} (d - 2d) = \frac{\sigma d}{2\epsilon_0} = 565$ V.

#### Parte B

Dal piano viene rimosso un anello di raggio $R = 15$ m e spessore molto piccolo, $\delta r = 0.1$ m. Indizio: lo spessore è così piccolo che se l'anello fosse carico con densità superficiale $\sigma_a$, si potrebbe considerare con buona approssimazione carico con densità lineare $\lambda_a = \sigma_a \delta r$.

4. Calcolare il campo elettrico generato dal nuovo sistema (modulo, direzione e verso) su di un generico punto dell'asse passante per il centro dell'anello **(6 punti)**.
	* Il campo è diretto lungo $\hat{x}$, e per il verso vale lo stesso discorso di prima. Il modulo si trova sommando il contributo del piano a quello dell'anello, preso con la densità di carica opposta. Utilizzando i dati del problema l'anello ha carica
	$$
	q_a = -2 \pi R \delta r \sigma = - 9.4 \times 10^{-9} \, {\rm C}
	$$
	e il campo vale (per $x > 0$):
	$$
	E_x(x, y, z) = \frac{\sigma}{2\epsilon_0} - \frac{R \delta r \sigma}{2 \epsilon_0} \frac{x}{(R^2 + x^2)^{3 / 2}}
	$$
5. Una particella di massa $m$ e carica $q > 0$ è inizialmente posizionata su di un punto posto sull'asse dell'anello rimosso a distanza $d$ dal piano. Scrivere l'espressione della velocità iniziale minima con la quale la particella deve essere lanciata verso il piano perché possa arrivare al centro dell'anello **(6 punti)**.
	* Al tempo 0 la particella ha energia
	$$
	U_e^{(i)} = \frac{1}{2} m v^2 - \frac{d q \sigma}{2 \epsilon_0} - \frac{R \delta r \sigma q}{2 \epsilon_0 \sqrt{R^2 + d^2}}
	$$
	mentre l'energia finale della particella che tocca il piano con $v = 0$ vale:
	$$
	U_e^{(f)} = -\frac{R \delta r \sigma q}{2 \epsilon_0 R}
	$$
	si ha quindi
	$$
	v = \sqrt{\frac{\sigma}{m\epsilon_0} \left( dq + \frac{R \delta r q}{\sqrt{R^2 + d^2}} - \frac{R \delta r q}{R} \right)}
	$$
6. Una particella di massa $m$ e carica $q < 0$ è inizialmente posizionata al centro dell'anello e possiede una velocità iniziale $v$ uscente dal piano. Scrivere l'espressione del valore minimo di $v$ per il quale la particella raggiunge un punto posto a distanza $d$ dal piano **(6 punti)**.
	* L'energia iniziale vale
	$$
	U_e^{(i)} = \frac{1}{2} m v^2 - \frac{R \delta r \sigma q}{2 \epsilon_0 R}
	$$
	mentre quella finale è
	$$
	U_e^{(f)} = -\frac{R \delta r \sigma q}{2 \epsilon_0 \sqrt{R^2 + d^2}} - \frac{d q \sigma}{2 \epsilon_0}
	$$
	uguagliando le due quantità e risolvendo per $v$ si trova
	$$
	v = \sqrt{\frac{\sigma}{m\epsilon_0} \left( \frac{R \delta r q}{R} - \frac{R \delta r q}{\sqrt{R^2 + d^2}} - d q \right)}
	$$

{{< figure src="../images_primo_esonero/esercizio_1_campo.png" alt="primo esercizio" width="400px">}}

---

### Esercizio 2

Un cilindro conduttore di raggio $R_1 = 10$ cm è circondato da un guscio cilindrico di raggi $R_2 = 12$ cm ed $R_3 = 15$ cm. Quest'ultimo è a sua volta circondato da un guscio cilindrico di raggi $R_4 = 20$ cm ed $R_5 = 22$ cm. Il conduttore più interno e quello più esterno sono mantenuti ad una differenza di potenziale $\Delta V = 10$ V.

{{< figure src="../images_primo_esonero/esercizio_2.png" alt="secondo esercizio" width="300px">}}

1. Calcolare la densità di carica presente su ogni superficie conduttrice **(6 punti)**.
	* Definendo la densità di carica lineare $\lambda$, la d.d.p. tra il conduttore interno e quello esterno vale
	$$
	\Delta V = \frac{\lambda}{2 \pi \epsilon_0} \left[ \log\left( \frac{R_2}{R_1} \right) + \log\left( \frac{R_4}{R_3} \right) \right]
	$$
	e quindi la densità di carica presente sulle facce delle armature vale
	$$
	|\lambda| = 1.184 \times 10^{-9} \, {\rm C / m}
	$$
	la più interna sarà caricata con $\lambda$, poi $-\lambda$, poi $\lambda$, poi $-\lambda$ e, infine, $\lambda$. Si può anche scrivere la densità superficiale di carica su di una superficie generica di raggio $R_i$:
	$$
	\sigma = \frac{\lambda}{2 \pi R_i}
	$$
2. Se il conduttore più esterno venisse messo a terra, quale sarebbe la differenza di potenziale tra il conduttore mediano ed un punto $r > R_5$ **(6 punti)**.
	* Mettere il guscio più esterno a terra significa scaricare la sua superficie più esterna e mettere il suo potenziale a $0$. Si trova quindi:
	$$
	V(R_3) - V(r > R_5) = V(R_3) - V(R_4) = \frac{\lambda}{2 \pi \epsilon_0} \log\left( \frac{R_4}{R_3} \right) = 6.12 \, {\rm V}
	$$
3. Un guscio **cilindrico** di materiale dielettrico (lineare ed omogeneo) di raggi $R_3$ e $1.2 R_3 = 18$ cm e costante dielettrica $\kappa = 3$ viene inserito nell'intercapedine tra il secondo ed il terzo conduttore. Calcolare la densità di carica di polarizzazione sulle sue superfici **(6 punti)**.
	* La due densità di carica si ottengono applicando $\sigma_p = \vec{P} \cdot \hat{n}$ alle due superfici cilindriche, ricordando che 
	$$
	\vec{P}(r ) = \epsilon_0 \chi \vec{E}(r ) = \frac{\kappa - 1}{\kappa} \frac{\lambda}{2 \pi r} \hat{r}
	$$
	e quindi
	\begin{align}
	\sigma_p^{(i)} & = \frac{\kappa - 1}{\kappa} \frac{\lambda}{2 \pi R_3} = 0.84 \times 10^{-9} \, {\rm C/m}^2\\\\\\
	\sigma_p^{(e)} & = -\frac{\kappa - 1}{\kappa} \frac{\lambda}{2 \pi 1.2 R_3} = - 0.70 \times 10^{-9} \, {\rm C/m}^2
	\end{align}

---

### Esercizio 3

#### Parte A

Il circuito in figura è composto da un generatore di forza elettromotrice $\mathcal{E} = 10$ V e resistenza interna trascurabile, da un condensatore sferico $C_1$ di raggi $R_1 = 5$ cm ed $R_2 = 6$ cm, da un condensatore piano $C_2$ di dimensioni $a \times b \times h$ ($a = 10$ cm, $b = 10$ cm, $h = 1$ cm) e da tre resistori, $R_1 = 10 \, \Omega$, $R_2 = 30 \, \Omega$ e $R_3 = 10 \, \Omega$.

{{< figure src="../images_primo_esonero/esercizio_3.png" alt="terzo esercizio" width="400px">}}

1. Disegnare il circuito equivalente, calcolando esplicitamente $R\_{\rm eq}$ e $C\_{\rm eq}$ **(4 punti)**.
	* I due condensatori hanno capacità
	\begin{align}
	C_1 & = 4 \pi \epsilon_0 \left( \frac{1}{R_1} - \frac{1}{R_2} \right) = 3.34 \times 10^{-11} \, {\rm F}\\\\\\
	C_2 &= \frac{\epsilon_0 ab}{h} = 8.85 \times 10^{-12} \, {\rm F}
	\end{align}
	e sono connessi in serie, quindi
	$$
	C\_{\rm eq} = \frac{C_1 C_2}{C_1 + C_2} = 7 \times 10^{-11} \, {\rm F}
	$$
	Per quanto riguarda i resistori, $R_1$ è in serie al parallelo di $R_2$ ed $R_3$ quindi
	$$
	R\_{\rm eq} = \frac{R_2 R_3}{R_2 + R_3} + R_1 = 17.5 \, \Omega
	$$
2. Calcolare l'intensità di corrente che scorre in $R_1$ **(4 punti)**.
	* Nei circuiti di corrente continua i condensatori sono interruzioni del circuito e quindi non si devono considerare nell'analisi. La corrente che scorre in $R_1$ si calcola applicando la legge di Ohm
	$$
	\mathcal{E} = R\_{\rm eq} i
	$$
	e quindi
	$$
	i = \frac{\mathcal{E}}{R\_{\rm eq}} = 0.57 \, {\rm A}
	$$
3. Calcolare la quantità di carica immagazzinata dai due condensatori **(4 punti)**.
	* Poiché non scorre corrente si deve avere $\mathcal{E} = \frac{q}{C_{\rm eq}}$, quindi la carica dei due condensatori (che sono collegati in serie e quindi contengono la stessa carica) vale
	$$
	q = \mathcal{E} C\_{\rm eq} = 7 \times 10^{-10} \, {\rm C}
	$$

#### Parte B

Si ha la possibilità di riempire con un materiale dielettrico lineare ed omogeneo di costante dielettrica $\kappa = 4$ uno solo dei due condensatori. Mostrare quale delle tre combinazioni possibili (dielettrico in $C_1$, dielettrico in $C_2$, no dielettrico)

3. massimizza la carica immagazzinata nel condensatore equivalente **(2 punti)**
	* La carica immagazzinata è proporzionale alla capacità equivalente, che aumenta maggiormente se riempiamo $C_2$ ($C\_{\rm eq} = 1.7 \times 10^{-10}$ F vs. $C\_{\rm eq} = 0.83^{-10}$ F).
4. massimizza la differenza di potenziale ai capi di $C_2$ **(2 punti)**
	* Sappiamo che $q = C\_{\rm eq} \Delta V$, quindi la d.d.p. ai capi di $C_2$ vale:
	$$
	\Delta V_2 = \frac{q}{C_2} = \frac{C_1}{C_1 + C_2} \Delta V
	$$
	che è un funzione monotona crescente di $C_1$ e decrescente di $C_2$: è quindi meglio riempire $C_1$ di dielettrico (così da avere $C_1 \to \kappa C_1$).
5. massimizza l'energia elettrostatica immagazzinata dal condensatore equivalente **(2 punti)**
	* Poiché la d.d.p. è mantenuta costante, capacità e carica sono proporzionali. Poiché l'energia vale $U_e = \frac{q^2}{2C\_{\rm eq}}$, è meglio massimizzare la carica e quindi la capacità. Questo si ottiene riempiendo di dielettrico  $C_2$ ($C\_{\rm eq} = 1.7 \times 10^{-10}$ F vs. $C\_{\rm eq} = 0.83^{-10}$ F).
