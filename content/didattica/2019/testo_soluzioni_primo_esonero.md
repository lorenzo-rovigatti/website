+++
title = "Primo Esonero"
date = 2019-10-31T16:18:43+02:00
draft = false
+++

## Primo esercizio

Un sistema è formato da tre cariche fisse $q_1 = 10^{-9}$ C, $q_2 = -2 \times 10^{-9}$ C, $q_3 = 10^{-9}$ C, e da una carica di prova $q_0 = \pm 10^{-9}$ C. Le cariche sono disposte come in figura, con $a = 10$ cm.

{{< figure src="../images/primo_esonero_esercizio_1_1.png"  width="400px">}}

1. Determinare il campo elettrostatico generato dalle tre cariche fisse nel punto in cui si trova $q_0$ **(6 punti)**.
	* Definiamo asse $x$ quello che passa per $q_0$ e $q_2$ (orientato verso $q_0$) e asse $y$ quello che passa per le tre cariche fisse (con verso che va da $q_1$ a $q_3$). Sicuramente $E_y = 0$, perché i contributi di $q_1$ e $q_3$ si equivalgono e l'interazione tra $q_2$ e $q_0$ è tutta lungo $\hat{x}$. L'interazione dovuta a $q_2$ si può scrivere direttamente:
	$$
	E_x^{q_2} = \frac{q_2}{4 \pi \epsilon_0} \frac{1}{4a^2}.
	$$
	L'interazione dovuta alle altre due cariche è semplicemente due volte quella dovuta ad una carica sola, che vale (considerando che in questo caso $r = \sqrt{5} a$ e $\cos\theta = 2 / \sqrt{5}$):
	$$
	E_x^{q_1} = \frac{q_1}{4 \pi \epsilon_0} \frac{2}{5\sqrt{5}a^2}.
	$$
	Il campo totale vale quindi:
	$$
	\vec{E} = \frac{1}{4 \pi \epsilon_0a^2} \left( \frac{q_2}{4} + \frac{4q_1}{5\sqrt{5}} \right)\hat{x}.
	$$
2. Determinare la forza agente sulla carica $q_0$ **(6 punti)**.
	* La forza è data dal campo moltiplicato per $q_0$ (vedi punto sopra).
3. Determinare il lavoro esterno da compiere per rimuovere $q_0$ dal sistema **(6 punti)**.
	* Poiché si parla di forze esterne, $W\_{\rm ext} = \Delta U_e$. Poiché si muove solo $q_0$, la differenza di energia potenziale ha un solo contributo. Inoltre, l'energia potenziale finale di $q_0$ è zero, quindi $W\_{\rm ext}$ è dato semplicemente dall'energia potenziale iniziale di $q_0$ presa col segno meno, cioè da
	$$
	W\_{\rm ext} = - \frac{q_0}{4 \pi \epsilon_0a} \left( \frac{q_2}{2} + \frac{2q_1}{\sqrt{5}} \right) = \pm 10^{-10} \, {\rm J}
	$$
	dove il segno è determinato dal segno di $q_0$.
4. Determinare il lavoro che le forze elettrostatiche debbono compiere per rimuovere $q_0$ dal sistema **(6 punti)**.
	* Il lavoro delle forze interne è uguale al lavoro delle forze esterne cambiato di segno, quindi
	$$
	W = -W\_{\rm ext} = \frac{q_0}{4 \pi \epsilon_0a} \left( \frac{q_2}{2} + \frac{2q_1}{\sqrt{5}} \right) = \mp 10^{-10} \, {\rm J}
	$$
	dove il segno è di nuovo determinato dal segno di $q_0$ (ma al contrario).
5. Vi è la possibilità di variare i valori delle cariche fisse. Trovare una combinazione di valori di $q_1$, $q_2$ e $q_3$ per cui almeno una delle tre cariche è diversa da zero e la carica $q_0$ rimane ferma se lasciata libera di muoversi **(4 punti)**.
	* Per rispondere basta imporre che il campo (o la forza) calcolati all'inizio siano 0. Così facendo si ottiene
	$$
	q_2 = -\frac{16 q_1}{5\sqrt{5}}
	$$

---

## Secondo esercizio

{{< figure src="../images/primo_esonero_esercizio_2_1.png"  width="400px">}}
{{< figure src="../images/primo_esonero_esercizio_2_2.png"  width="400px">}}

Un condensatore piano di superficie $\Sigma = 100$ cm$^2$ e altezza $h = 10$ mm è riempito parzialmente da una lastra conduttrice di spessore $s = 2$ mm (in nero) e da un dielettrico di spessore $a = (h - s) / 2$ e $\kappa = 4$ (in grigio), disposti come in figura. Le due resistenze valgono $R_1 = 10\, {\rm \Omega}$ e $R_2 = 5\, {\rm \Omega}$. L'interruttore è inizialmente aperto.

1. Disegnare il circuito equivalente, calcolando esplicitamente i valori degli elementi equivalenti **(7 punti)**.
	* A seconda che le due resistenze siano in parallelo o in serie si trova $R\_{\rm eq} = R_1R_2 / (R_1 + R_2)$ o $R\_{\rm eq} = R_1 + R_2$. La capacità equivalente si può calcolare considerando il condensatore come l'equivalente di due condensatori in parallelo oppure utilizzando direttamente la definizione. Scegliamo questa seconda via e calcoliamo la d.d.p. tra le armature:
$$
\Delta V = \frac{qa}{\epsilon_0 \Sigma} + \frac{qa}{\kappa \epsilon_0 \Sigma}
$$
e quindi
$$
C\_{\rm eq} = \frac{\epsilon_0 \Sigma\kappa}{a} \frac{1}{1 + \kappa} = 1.77 \times 10^{-11} \, {\rm F}
$$
2. Tra le due armature vi è una d.d.p. $\Delta V = 100$ V. Calcolare la carica immagazzinata dal condensatore **(3 punti)**.
	* Utilizzando la relazione che lega le quantità in gioco troviamo
	$$
	q = C\_{\rm eq} \Delta V = 1.77 \times 10^{-9} \, {\rm C}
	$$
3. La carica immagazzinata nel condensatore è $q = 10^{-9}$ C. Calcolare la d.d.p. tra le due armature. **(3 punti)**.
	* Utilizzando la relazione che lega le quantità in gioco troviamo
	$$
	\Delta V = \frac{q}{C\_{\rm eq}} = 56.5 \, {\rm V}
	$$
4. Si chiude l'interruttore e si aspetta che non scorra più alcuna corrente nel circuito. Calcolare tutta l'energia dissipata sulla resistenza equivalente **(6 punti)**. *Nota Bene:* non è necessario studiare il processo di scarica per risolvere questo punto.
	* L'energia dissipata non può essere che quella contenuta nel condensatore, che vale
	$$
	U_e = \frac{1}{2} q \Delta V
	$$
	il cui valore numerico varia a seconda che il compito chiedesse di calcolare $q$ avendo $\Delta V$ o viceversa nel punto precedente.
