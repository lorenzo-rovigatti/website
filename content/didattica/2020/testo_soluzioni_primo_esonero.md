+++
title = "Primo Esonero"
date = 2020-11-10T16:18:43+02:00
draft = false
+++

## Primo esercizio

Un sistema è formato da un conduttore sferico cavo e da una carica puntiforme $q = 10^{-9}$ C, entrambi distanti $a = 50$ cm dal punto $O$. All'interno della cavità del conduttore è presente un'altra carica $q$ (uguale in segno e modulo alla prima). Si svolga tutto l'esercizio trascurando gli effetti di induzione che le cariche **esterne** al conduttore (cioè quella posta a distanza $2a$ e, per i punti 2 e 3 dell'esercizio, $q_0$) hanno su di esso.

{{< figure src="../images/primo_esonero_esercizio_1.png"  width="400px">}}

1. Determinare l'espressione del campo elettrostatico nel punto $P$ posto a distanza $a$ da $O$  **(6 punti)**.
	* Il conduttore sferico genera al proprio esterno un campo equivalente a quello di una carica $q$ in tutto e per tutto uguale all'altra. Di conseguenza, il campo generato in $P$ avrà come unica componente quella diretta verso il basso (perché le componenti orizzontali dei campi generati dalle due cariche sono uguali e contrarie), che varrà
	  $$
	  E\_{\rm tot} = 2 E_q \cos\theta
	  $$
	  dove $\theta$ è l'angolo compreso tra $\vec{r}_P - \vec{r}_q$ e $\vec{r}_P - \vec{r}_O$.
	  Dati i valori in figura si trova $\cos \theta = a / r$, dove $r = \sqrt{2}a$ e quindi
	  $$
	  E\_{\rm tot} = \frac{q}{2 \pi \epsilon_0} \frac{a}{r^3} = \frac{q}{4 \sqrt{2} \pi \epsilon_0 a^2}
	  $$
	
2. Calcolare il lavoro fatto dalla **forza elettrostatica** per portare una carica $q_0 = -10^{-9}$ C dall'infinito fino al punto P **(4 punti)**.

   * Il lavoro richiesto è pari alla differenza di energia potenziale cambiata di segno, cioè $W = - \Delta U_e$. Ricordando che $U_e = q_0 V$ e considerando che l'energia iniziale $U_e^i = 0$ perché la carica si trova inizialmente all'infinito si ha
     $$
     W = -\Delta U_e = U_e^i - U_e^f = - U_e^f = -q_0 V(P) = -\frac{q q_0}{2 \pi \epsilon_0}\frac{1}{r} = -\frac{q q_0}{2 \pi \epsilon_0}\frac{1}{\sqrt{2}a} = 2.54 \times 10^{-8} \, {\rm J}
     $$
     Poiché $q_0$ è negativa, lo spostamento di $q_0$ dall'infinito a $P$ è concorde con il verso della forza elettrostatica, quindi ci aspettiamo un lavoro di segno positivo, come effettivamente abbiamo trovato.

3. Una volta che $q_0$ è in posizione il conduttore viene **messo a terra**. Calcolare il lavoro che una **forza esterna** deve compiere per rimuovere $q_0$ in queste condizioni **(6 punti)**.

   * In questo caso il lavoro richiesto è quello svolto dalle forze esterne, per cui vale $W\_{\rm ext} = \Delta U_e$. L'energia potenziale finale di $q_0$ è 0, mentre quella iniziale dipende solamente dalla carica puntiforme $q$, perché nel momento in cui viene messo a terra il conduttore perde la sua carica libera, quindi non genererà più alcun campo elettrico. Si ha quindi
     $$
     W\_{\rm ext} = \Delta U_e = -U_e^i = -\frac{qq_0}{4 \pi \epsilon_0 \sqrt{2} a} = 1.27 \times 10^{-8} \, {\rm J}
     $$
     Anche qui il segno è positivo perché la forza esterna ha verso contrario a quello della forza elettrostatica.

---

## Secondo esercizio

{{< figure src="../images/primo_esonero_esercizio_2.png"  width="400px">}}

Il circuito in figura è formato da un generatore di forza elettromotrice $\mathcal{E}$, da due resistenze $R = 10\, \Omega$, e da due condensatori piani aventi armature di superficie $\Sigma = 100$ cm$^2$ e spessore $h=1$ cm. Uno dei due condensatori è pieno di un dielettrico di costante relativa $\kappa = 2$. Nel circuito c'è anche un interruttore (in rosso in figura) che può connettere, a scelta, i punti $A$ e $B$ oppure i punti $A$ e $C$. Quando $A$ e $B$ sono connessi ognuna delle due resistenze dissipa una potenza di $10$ W.

1. Determinare il valore di $\mathcal{E}$ **(6 punti)**.

   * La corrente che scorre in ognuna delle due resistenze si può trovare ricordando che $\mathcal{P} = R i^2$, quindi $i = 1$ A. Poiché le due resistenze sono in parallelo, per ognuna vale la legge di Ohm, $\mathcal{E} = R i$,  da cui si ricava $\mathcal{E} = 10$ V.

2. Si connettono $A$ e $C$ e si aspetta che i condensatori si carichino. Calcolare i moduli dei campi elettrici presenti all'interno dei due condensatori **(6 punti)**.

   * Le capacità dei due condensatori sono $C_1 = \epsilon_0 \Sigma / h = 8.85 \times 10^{-12}$ F e $C_2 = \kappa C_1 = 1.78 \times 10^{-11}$ F. Poiché sono collegati in serie la capacità del condensatore equivalente è
     $$
     C\_{\rm eq} = \frac{C_1C_2}{C_1 + C_2} = \frac{\kappa C_1}{\kappa + 1} = \frac{2}{3} C_1 = 5.90 \times 10^{-12} \, {\rm F}
     $$
     La carica sulle armature dei condensatori è la stessa (perché sono collegati in serie) e vale
     $$
     q = C\_{\rm eq} \mathcal{E} = 5.9 \times 10^{-11} \, {\rm C}
     $$
     Dalla carica possiamo ottenere direttamente il valore dei campi utilizzando la relazione $E = \sigma / \epsilon_0$ e ricordando che $\sigma = q / \Sigma$. Troviamo quindi
     $$
     E_1 = \frac{q}{\Sigma \epsilon_0} = 6.66 \times 10^{2} \, {\rm V / m}, \qquad E_2 = \frac{q}{\Sigma \epsilon_0 \kappa} = \frac{E_1}{\kappa} = 3.33 \times 10^{2} \, {\rm V / m}
     $$

3. Dal secondo condensatore viene rimosso il dielettrico. Calcolare la variazione di energia elettrostatica del sistema **(4 punti)**.

   * In ogni dato momento l'energia elettrostatica del sistema è $U_e = \frac{1}{2} C\_{\rm eq} \mathcal{E}^2$. Quella iniziale vale $U_e^i = \frac{1}{2} \frac{\kappa C_1}{ \kappa + 1} \mathcal{E}^2 = \frac{1}{3} C_1 \mathcal{E}^2$, mentre quella finale è $U_e^f = \frac{1}{2} \frac{C_1}{2} \mathcal{E}^2 = \frac{1}{4} C_1 \mathcal{E}^2$, quindi
     $$
     \Delta U_e = U_e^f - U_e^i = -\frac{1}{12} C_1 \mathcal{E}^2 = -7.37 \times 10^{-11} \, {\rm J}
     $$
