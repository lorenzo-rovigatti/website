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
image = ""
caption = ""

+++

## Elettricità

Nel circuito in figura $C = 1 \, {\rm nF}$, $R_1 = 10 \, {\rm \Omega}$, $R_2 = 5 \, {\rm \Omega}$  e $\mathcal{E} = 15$ V. Il cerchio grigio è un dispositivo che può essere ruotato per collegare in maniera diversa gli elementi del circuito. Le uniche configurazioni da prendere in esame sono le (1), (2), (3) e (4) disegnate in figura.

{{< figure src="../images_scritto_08022019/esercizio_1.png" alt="1" width="400px">}}

**Nota Bene:** tutte le domande che seguono si riferiscono sempre al comportamento del circuito in condizioni di stazionarietà.

1. Determinare per quale delle quattro configurazioni la corrente che scorre in $R_1$ è minima **(5 punti)**.

* Nelle configurazioni (1) e (2) scorre corrente, mentre nella configurazione (3) il generatore non è connesso al circuito, e quindi $i = 0$. Quest'ultimo è chiaramente il caso di "minima corrente".

2. Calcolare la differenza tra le differenza di potenziale ai capi di $R_1$ nelle configurazioni (1) e (2) **(5 punti)**.

* La differenza tra la (1) e la (2) è data dal valore della resistenza collegata in parallelo a $C$: nel primo caso la resistenza è semplicemente $R_1 = 10 \, \Omega$, mentre nel secondo vale $R\_{\rm eq} = R_1 + R_2 = 15 \, \Omega$. La differenza di potenziale a cui è posta questa resistenza è semplicemente $\mathcal{E}$. Nel caso (1) la d.d.p. che richiede l'esercizio è quindi proprio $\Delta V\_{(1)} = \mathcal{E} = 15 \, {\rm V}$. Nel caso (2), la corrente che scorre nelle resistenze vale
$$
i\_{(2)} = \frac{\mathcal{E}}{R\_{\rm eq}} = 1 \, {\rm A}
$$
e quindi la d.d.p. ai capi di $R_1$ è data da
$$
\Delta V\_{(2)} = R_1 i\_{(2)} = 10 \, {\rm V}
$$
La differenza tra questi due valori è $5 V$.

3. Il dispositivo viene ruotato nella posizione (1). Si aspetta finché non si raggiunge la stazionarietà e poi si ruota nella posizione (4), quindi si riempie $\mathcal{C}$ di un materiale dielettrico isotropo avente $\kappa = 3$. Calcolare la differenza di potenziale tra le armature e la carica immagazzinata dal condensatore **(6 punti)**.

* Nella posizione (1) il condensatore viene posto ad una d.d.p. $\Delta V = q / C = \mathcal{E}$. Nella posizione (3), invece, il generatore viene staccato dal circuito. Se si cambiano le proprietà del condensatore, quindi, ciò che resta costante è la carica, che vale
$$
q = C \mathcal{E} = 1.5 \times 10^{-8} {\rm nF}
$$
Dopo aver inserito il dielettrico la capacità diventa $C_d = \kappa C$ e quindi il potenziale tra le armature vale
$$
\Delta V_d = \frac{q}{C_d} = \frac{q}{\kappa C} = \frac{\Delta V}{\kappa} = 5 \, {\rm V}
$$


---

## Magnetismo

Un solenoide indefinito ha una base rettangolare di dimensioni $a \times b$ ($a = 10$ cm, $b \gg a$). La densità di spire è $n = 10\, {\rm cm}^{-1}$. Un fascio collimato di particelle cariche ($q = 10^{-9}$ C) entra nel solenoide con una velocità $v_0 = 10^4$ m/s ortogonale al lato lungo (vedi figura). Il fascio è composto da due specie di particelle di massa diversa ($m_1 = 10^{-16}$ kg e $m_2 = 2\times 10^{-16}$ Kg).

{{< figure src="../images_scritto_08022019/esercizio_2.png" alt="2" width="400px">}}

1. Determinare l'intensità di corrente minima che deve scorrere nel solenoide per far sì che nessuna particella del fascio oltrepassi il punto $x = a$ (dato l'origine degli assi della figura) **(5 punti)**.

* La condizione di non superare $x = a$ si traduce nell'imporre che il raggio della traiettoria sia pari proprio ad $a$, cioè $r = mv / qB = a$ e quindi
$$
B = \frac{mv}{qa}
$$
Per capire quale delle due massa utilizzare nella relazione appena scritta, consideriamo che, a parità di campo magnetico e carica, le particelle più pesanti sono quelle che hanno una traiettoria di raggio maggiore. Dobbiamo quindi utilizzare $m_2$:
$$
B = \frac{m_2 v}{qa} = 2 \times 10^{-2} \, {\rm T}
$$
All'interno di un solenoide il campo magnetico è dato dalla relazione
$$
B = \mu_0 n i
$$
e quindi si trova che
$$
i = \frac{B}{\mu_0 n} = \frac{m_2 v}{qa \mu_0 n} = 15.9 \, {\rm A}
$$

2. Date le condizioni del punto precedente, calcolare la differenza tra i tempi che particelle di specie diversa trascorrono all'interno del solenoide **(5 punti)**.

* Le traiettorie compiute dalle particelle sono semicirconferenze. Il tempo trascorso all'interno del solenoide è quindi metà del periodo di rotazione, che vale per le due specie:
\begin{align}
t_1 & = \frac{\pi r_1}{v} = \frac{\pi m_1}{qB} = 1.57 \times 10^{-5} \, {\rm s}\\\\\\
t_2 & = \frac{\pi r_2}{v} = \frac{\pi m_2}{qB} = 3.14 \times 10^{-5} \, {\rm s}.
\end{align}
La differenza tra i due tempi è quindi
$$
\Delta t = t_2 - t_1 = 1.57 \times 10^{-5} \, {\rm s}
$$

3. Vi è la possibilità di riempire completamente il solenoide di "nonesistonio", un materiale noto per avere una suscettività magnetica $\chi_m = -0.1$. In queste condizioni, calcolare l'intensità di corrente minima che deve scorrere nel solenoide per far sì che solo una delle due specie di particelle riesca ad oltrepassare il punto $x = a$ **(6 punti)**.

* In questo caso la condizione che dobbiamo porre è che le particelle più leggere non escano dall'altro lato del solenoide (cioè non oltrepassino $x = a$), in maniera analoga a quanto fatto nel primo punto. La condizione limite sul campo magnetico è quindi:
$$
B = \frac{m_1 v}{qa} = 10^{-2} \, {\rm T}
$$
Un solenoide pieno di un materiale magnetico genera un campo
$$
B = \mu_0 n i + \mu_0 \chi_m n i = \mu_0 \kappa_m i
$$
dove in questo caso $\kappa_m = \chi_m + 1 = 0.9$. Invertendo la relazione precedente si trova
$$
i = \frac{B}{\mu_0 \kappa_m n} = 8.84 \, {\rm A}
$$
