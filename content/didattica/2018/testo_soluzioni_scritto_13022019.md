+++
title = "Scritto del 13/02/2019"
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

Un guscio sferico conduttore di raggio esterno $R = 1$ cm è inizialmente vuoto e possiede una carica $q_e$. Il guscio è posto ad una distanza $d = 1$ m da una piccola sfera conduttrice avente carica $q$. In queste condizioni la forza tra i due oggetti è repulsiva e vale $F_1 = 1.8 \times 10^{-4}$ N (figura (a)). All'interno del guscio viene inserita una carica $q_i = 3 \times 10^{-7}$ C. La forza agente tra il guscio e la carica $q$ vale ora $F_2 = 7.2 \times 10^{-4}$ N (figura (b)). **Nota Bene:** i disegni non mostrano le cariche indotte.

{{< figure src="../images_scritto_13022019/esercizio_1A.png" alt="1A" width="600px">}}

1. Trascurando gli effetti di induzione tra il guscio e la sfera conduttrice (attenzione, **non** quelli tra il guscio e la carica al suo interno), determinare i valori di $q$ e $q_e$ **(10 punti)**.
	* Utilizzando la legge di Coulomb troviamo
	$$
	F_1 = \frac{q q_e}{4 \pi \epsilon_0 d^2}.
	$$
	Dopo aver aggiunto $q_i$ sappiamo che la carica totale sulla superficie esterna del guscio diventa, per induzione completa, $Q = q_e + q_i$, quindi:
	$$
	F_2 = \frac{q Q}{4 \pi \epsilon_0 d^2} = F_1 +  \frac{q q_i}{4 \pi \epsilon_0 d^2},
	$$
	da cui si ricava:
	$$
	q = \frac{(F_2 - F_1) 4 \pi \epsilon_0 d^2}{q_i} = 2 \times 10^{-7} \, {\rm C}.
	$$
	Sostituendo questa quantità nella equazione di $F_1$ si trova
	$$
	q_e = \frac{4 \pi \epsilon_0 d^2 F_1}{q} = 10^{-7} \, {\rm C}
	$$
2. Il guscio sferico viene collegato a terra (figura (c)). Tenendo in considerazione **tutti** gli effetti di induzione, determinare la densità di carica (da considerarsi costante poiché $d \gg R$) presente sulla superficie esterna del guscio **(6 punti)**.
{{< figure src="../images_scritto_13022019/esercizio_1B.png" alt="1B" width="400px">}}
	* La carica libera presente sul guscio ($q_e$) passa alla terra. Le uniche cariche che restano sono quelle dovute all'induzione. Chiamiamo quindi $q_n$ la carica indotta da $q$, posta a distanza $d$. Poiché il guscio è connesso a terra, il suo potenziale deve essere nullo. Imponiamo questa condizione:
	$$
	\frac{q}{4 \pi \epsilon_0 d} + \frac{q_n}{4 \pi \epsilon_0 R} = 0
	$$
	e quindi
	$$
	q_n = - \frac{qR}{d} = -2 \times 10^{-9} \, {\rm C}.
	$$
	La densità di carica si trova dividendo questo valore per la superficie, quindi
	$$
	\sigma_n = \frac{q_n}{4 \pi R^2} = -1.59 \times 10^{-5} \, {\rm C / m^2}.
	$$

---

## Magnetismo

Due fili indefiniti sono posti su di un piano inclinato di un angolo $\theta = 10^\circ$. Il filo posto più in basso, in cui scorre una corrente $i_b = 20 A$ in direzione $\hat{z}$ (considerando il sistema di riferimento indicato in figura), è fisso. Il filo più in alto, che ha densità di massa $\lambda = 0.01$ kg/m ed in cui scorre una corrente $i_a$, è libero di scivolare senza attrito sul piano. Se la distanza tra i due fili vale $d = 1$ cm, il filo più in alto rimane fermo. **Nota Bene:** la forza peso ha direzione $-\hat{y}$. In figura i cerchi utilizzati per disegnare i fili **non** indicano necessariamente la direzione della corrente che scorre.

{{< figure src="../images_scritto_13022019/esercizio_2.png" alt="2" width="400px">}}

1. Calcolare verso e intensità di $i_a$ **(6 punti)**.
	* Poiché la forza peso agisce lungo $-\hat{y}$, la forza magnetica deve sicuramente avere una componente positiva lungo $\hat{y}$, quindi le correnti devono scorrere in verso opposto: il verso di $i_a$ non può che essere lungo $-\hat{z}$. Se il sistema è in equilibrio la forza totale deve essere zero. Poiché il filo è indefinito, in questo caso si parla di forza per unità di lunghezza, la cui risultante vale:
	$$
	i_a B_b(d) - \lambda g \sin\theta = \frac{\mu_0 i_a i_b}{2 \pi d} - \lambda g \sin\theta = 0
	$$
	e quindi
	$$
	i_a = \frac{2 \pi d \lambda g \sin \theta}{\mu_0 i_b} = 42.7 \, {\rm A}
	$$
2. Determinare direzione, verso e intensità del campo magnetico presente nel punto $O$ equidistante (distanza $d/2$) dai due fili (vedi figura). Per la direzione ed il verso, è sufficiente indicarli, disegnandoli in maniera **chiara**, sul foglio protocollo **(6 punti)**.
	* Poiché nei fili scorrono correnti opposte, i due contributi al campo in $O$ hanno la stessa direzione e lo stesso verso, che risulta essere ortogonale al piano inclinato e avere componente $\hat{y}$ positiva. Per quanto riguarda il modulo, questo è la somma dei moduli dei campi generati dai due fili, che si trovano dalla legge di Biot-Savart:
	\begin{align}
	B_b(O) &= B_b(d/2) = \frac{\mu_0 i_b 2}{2 \pi d} = \frac{\mu_0 i_b}{\pi d}\\\\\\
	B_a(O) &= B_a(d/2) = \frac{\mu_0 i_a 2}{2 \pi d} = \frac{\mu_0 i_b}{\pi d}\\\\\\
	\end{align}
	e quindi
	$$
	B(O) = B_a(O) + B_b(O) = \frac{\mu_0}{\pi d} (i_a + i_b) = 2.5 \times 10^{-3} \, {\rm T}
	$$
3. Il sistema viene immerso in un campo magnetico uniforme di modulo $B = 0.1$ T e direzione $-\hat{z}$. Determinare il valore di $i_a$ necessario affinché il sistema resti in equilibrio. **(4 punti)**.
	* Poiché è parallelo al filo, il campo magnetico aggiunto non può esercitare alcuna forza su di esso e quindi il valore di $i_a$ non cambia.
 
