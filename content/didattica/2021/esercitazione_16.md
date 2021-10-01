+++
title = "Esercitazione del 17/12/2020"
date = 2020-12-14T12:24:21+02:00
draft = false
+++

[Esercizio 61](#esercizio-61) -- [Esercizio 62](#esercizio-62) -- [Esercizio 52](#esercizio-52) -- [Esercizio 44](#esercizio-44)

## Esercizio 61 (non svolto in aula)

### Testo

{{< figure src="../images/esercizio_61.png" width="400px">}}

Una spira quadrata di resistenza $R = 10^{-3}\, \Omega$, massa $m = 10$ g e lato $l = 20$ cm viene lasciata cadere in una regione in cui è presente un campo di magnetico diretto lungo $\hat{y}$ avente modulo dipende dalla coordinata $z$:
$$
B_y(z) = b z
$$
con $b = 2 T / m$.
La spira è orientata in maniera tale da avere normale parallela a $\vec{B}$.

1. Determinare intensità e verso della corrente.
2. Determinare il valore della velocità limite $v\_{\rm lim}$, trascurando l'autoinduzione della spira.
3. Calcolare la corrente che circola nella spira per $v = v\_{\rm lim}$.

### Soluzione

1. La corrente si calcola a partire dalla legge di Faraday. Per calcolare il flusso del campo, definiamo $h(t)$ la coordinata $z$ del lato più in alto della spira. Il flusso vale quindi
$$
\Phi(B) = b\int_0^l dx \int\_{h(t)}^{h(t) + l} z dz = l b\int\_{h(t)}^{h(t) + l} z dz = l^2 b h(t) + \frac{1}{2} b l^3.
$$
Poiché solo il primo termine dipende dal tempo, la f.e.m. indotta vale
$$
\mathcal{E}_i = - l^2 b v(t)
$$
dove $v(t)$ è la velocità della spira al tempo $t$. Il segno negativo indica che la f.e.m. genererà una corrente che, con la spira vista dalla prospettiva in cui $\hat{y}$ è uscente, scorre in senso orario. L'intensità varrà invece
$$
i(t) = \frac{l^2 b v(t)}{R}
$$
2. Ci sono tre forze agenti lungo $\hat{z}$: quella magnetica che agisce sul lato in alto, quella magnetica che agisce sul lato in basso e quella peso che agisce sul centro di massa della spira. Ricordando che la forza magnetica che agisce su di una porzione di filo in cui scorre corrente vale $\vec{F} = i \vec{l} \times \vec{B}$ si trova
$$
F\_{\rm tot} = \frac{l^3 b^2 v(t)}{R} h(t) - \frac{l^3 b^2 v(t)}{R} (h(t) + l) + mg = -\frac{l^4 b^2 v(t)}{R} + mg.
$$
Quando la spira raggiunge la velocità limite si deve avere $F\_{\rm tot} = 0$, da cui si ottiene
$$
v\_{\rm lim} = \frac{R mg}{l^4 b^2} = 0.015 \, {\rm m/s}
$$
3. Sostituendo il valore della velocità limite ottenuto precedentemente si trova
$$
i = \frac{l^2 b v\_{\rm lim}}{R} = 1.2 \, {\rm A}
$$

---

## Esercizio 62

### Testo

{{< figure src="../images/esercizio_62.png" width="500px">}}

Due fili indefiniti sono posti su di un piano inclinato di un angolo $\theta = 10^\circ$. Il filo posto più in basso, in cui scorre una corrente $i_b = 20 A$ in direzione $\hat{z}$ (considerando il sistema di riferimento indicato in figura), è fisso. Il filo più in alto, che ha densità di massa $\lambda = 0.01$ kg/m ed in cui scorre una corrente $i_a$, è libero di scivolare senza attrito sul piano. Se la distanza tra i due fili vale $d = 1$ cm, il filo più in alto rimane fermo. **Nota Bene:** la forza peso ha direzione $-\hat{y}$. In figura i cerchi utilizzati per disegnare i fili **non** indicano necessariamente la direzione della corrente che scorre.

1. Calcolare verso e intensità di $i_a$.
2. Determinare direzione, verso e intensità del campo magnetico presente nel punto $O$ equidistante (distanza $d/2$) dai due fili (vedi figura).
3. Il sistema viene immerso in un campo magnetico uniforme di modulo $B = 0.1$ T e direzione $-\hat{z}$. Determinare il valore di $i_a$ necessario affinché il sistema resti in equilibrio.

### Soluzione

1. Poiché la forza peso agisce lungo $-\hat{y}$, la forza magnetica deve sicuramente avere una componente positiva lungo $\hat{y}$, quindi le correnti devono scorrere in verso opposto: il verso di $i_a$ non può che essere lungo $-\hat{z}$. Se il sistema è in equilibrio la forza totale deve essere zero. Poiché il filo è indefinito, in questo caso si parla di forza per unità di lunghezza, la cui risultante vale:
$$
i_a B_b(d) - \lambda g \sin\theta = \frac{\mu_0 i_a i_b}{2 \pi d} - \lambda g \sin\theta = 0
$$
e quindi
$$
i_a = \frac{2 \pi d \lambda g \sin \theta}{\mu_0 i_b} = 42.7 \, {\rm A}
$$
2. Poiché nei fili scorrono correnti opposte, i due contributi al campo in $O$ hanno la stessa direzione e lo stesso verso, che risulta essere ortogonale al piano inclinato e avere componente $\hat{y}$ positiva. Per quanto riguarda il modulo, questo è la somma dei moduli dei campi generati dai due fili, che si trovano dalla legge di Biot-Savart:
\begin{align}
B_b(O) &= B_b(d/2) = \frac{\mu_0 i_b 2}{2 \pi d} = \frac{\mu_0 i_b}{\pi d}\\\\\\
B_a(O) &= B_a(d/2) = \frac{\mu_0 i_a 2}{2 \pi d} = \frac{\mu_0 i_b}{\pi d}\\\\\\
\end{align}
e quindi
$$
B(O) = B_a(O) + B_b(O) = \frac{\mu_0}{\pi d} (i_a + i_b) = 2.5 \times 10^{-3} \, {\rm T}
$$
3. Poiché è parallelo al filo, il campo magnetico aggiunto non può esercitare alcuna forza su di esso e quindi il valore di $i_a$ non cambia.

---

## Esercizio 52
<small>Esercizio 6.11 del MNV</small>

### Testo

{{< figure src="../images/esercizio_52.png" width="500px">}}

Due griglie metalliche $G_1$ e $G_2$ parallele molto estese distano $d = 4$ cm e separano due regioni di spazio in cui esiste un campo magnetico $B = 0.8$ T uniforme e uscente dal foglio. Tra le griglie è applicata un d.d.p. $\Delta V$. Al tempo $t = 0$ un protone attraversa $G_1$ nel punto $A_1$ ed entra nella regione tra le griglie con velocità ortogonale a $G_1$. Dopo un tempo $t\_{\rm tot} = 1.22 \times 10^{-7}$ s il protone riattraversa nuovamente $G_1$ nello stesso verso ma in un punto $A_2$ distante $h = 5.2$ cm da $A_1$. 

1. Calcolare $\Delta V$.
2. Calcolare le velocità $v_1$ e $v_2$ del protone all'interno delle due regioni col campo magnetico.

### Soluzione

1. Il tempo $t\_{\rm tot}$ è la somma del tempo trascorso all'interno delle regioni e dello spazio tra le griglie, cioè:
$$
t\_{\rm tot} = 2 t_G + t_1 + t_2
$$
perché $t_G$ è lo stesso sia in un verso che nell'altro, poiché la particella è sottoposta alla stessa forza e in un caso passa da $v_1$ a $v_2$ e nell'altro da $v_2$ a $v_1$. I tempi $t_1$ e $t_2$ sono metà dei periodi necessari per compiere una traiettoria circolare. Poiché ci ricordiamo che il periodo è indipendente dalla velocità, si trova immediatamente
$$
t_1 = t_2 = \frac{T}{2} = \frac{\pi m}{q B}
$$
e quindi, sostituendo,
$$
t_G = \frac{t\_{\rm tot} - T}{2} = 2 \times 10^{-8} \, {\rm s}
$$
Se disegniamo il sistema notiamo come $h$ sia semplicemente la differenza tra i diametri delle semicirconferenze disegnate dalla traiettoria della particella all'interno delle due regioni col campo, cioè:
$$
h = 2r_2 - 2r_1 = 2 \frac{m}{qB} (v_2 - v_1)
$$
da cui si ricava
$$
v_2 - v_1 = \frac{hqB}{2m} = 2 \times 10^{6} \, {\rm m/s}.
$$
D'altronde, l'accelerazione tra le due griglie è costante e quindi possiamo scrivere
$$
v_2 = v_1 + at_G = v_1 + \frac{q\Delta V}{md} t_G,
$$
dove abbiamo scritto l'accelerazione come la forza dovuta al campo elettrico, che vale $E = \Delta V / d$, diviso per la massa della particella, $a = q \Delta V / dm$. Risolvendo per $\Delta V$ si trova
$$
\Delta V = (v_2 - v_1) \frac{md}{qt_G} = 4.18 \times 10^4 \, {\rm V}
$$

2. Ora conosciamo solo la differenza tra le due velocità. Possiamo trovarne il valore assoluto scrivendo l'equazione del moto iniziale per la particella, per cui si ha, considerando $x(0) = 0$,
$$
x(t) = v_1 t + \frac{1}{2} a t^2 = v_1 t + \frac{q \Delta V}{2md} t^2
$$
che, per $t = t_G$, vale
$$
d = v_1 t_G + \frac{q \Delta V}{2md} t_G^2 = v_1 t_G + \frac{1}{2}(v_2 - v_1) t_G
$$
da cui possiamo ricavare $v_1$:
$$
v_1 = \frac{d - \frac{1}{2}(v_2 - v_1) t_G}{t_G} = 10^6 \, {\rm m/s}
$$
e quindi $v_2$ vale:
$$
v_2 = (v_2 - v_1) + v_1 = 3 \times 10^6 \, {\rm m/s}
$$

---

## Esercizio 44

### Testo

{{< figure src="../images/esercizio_44.png" width="300px">}}

Una spira rettangolare rigida di lati $a = 10$ cm e $b = 20$ cm ha una densità lineare di massa $\lambda_m = 0.05$ g/cm ed è percorsa da una corrente $i = 6$ A. Essa è posta inizialmente sul piano $xy$ con il lato a $y$ maggiori (lungo $a$) combaciante con l'asse $x$ e, in questa configurazione, la corrente scorre in verso antiorario. La spira può ruotare liberamente (senza attrito) intorno a quest'asse, mentre la forza peso agisce in direzione $-\hat{y}$. Determinare 

1. il modulo ed il verso del campo magnetico $\vec{B}$, uniforme e parallelo all'asse $y$, che produce una rotazione della spira verso $\hat{z}$ di $\theta_0 = 12^\circ = 0.209$ rad;
2. il lavoro compiuto dal campo sulla spira per produrre detta rotazione.

### Soluzione

1. Se la spira è in equilibrio quando forma un certo angolo $\theta$, significa che per questo valore dell'angolo i momenti meccanici presenti si equivalgono. Calcoliamoli rispetto all'asse $x$. Il fatto che la spira sia libera di ruotare rispetto al lato più in alto significa che quest'ultimo è fermo, e cioè non risente di eventuali forze presenti. Il momento magnetico sarà quindi dato dalla forza che agisce sull'altro lato di dimensione $a$, che vale

$$
\vec{F}_m = i a B \hat{x} \times \hat{y} = i a B \hat{z}
$$

e che, rispetto all'asse $x$, genera un momento meccanico magnetico
$$
\vec{M}_m = -i a b B \sin\left( \frac{\pi}{2} - \theta_0 \right) \hat{x}
$$
**Nota Bene:** data la definizione di $\theta$, il braccio del momento *non è* $\theta$ ma $\pi / 2 - \theta$ (disegnare il sistema di profilo per dimostrarlo!). D'altro canto, la forza peso vale in modulo $mg = 2\lambda_m (a + b) g$ ed è applicata a distanza $b / 2 \sin \theta_0$, quindi il suo momento rispetto ad $\hat{x}$ vale
$$
\vec{M}_g = \lambda_m (a + b)b g \sin \theta_0 \hat{x}
$$
I segni che abbiamo trovato considerando il verso di $\vec{B}$ parallelo a $\hat{y}$ sono corretti, perché così facendo si trova che i due momenti hanno verso opposto, e quindi effettivamente $\hat{B} = \hat{y}$. Eguagliando i moduli dei due momenti possiamo ricavare il modulo del campo:
$$
B = \frac{\lambda g}{i}\frac{a + b}{a} \tan \theta_0  = 5.21 \cdot 10^{-3} \, {\rm T}.
$$

2. Il lavoro si ottiene integrando il momento meccanico tra $\theta = 0$ e $\theta = \theta_0$:

$$
W = iabB \int_0^{\theta_0} \cos \theta d\theta = iabB \sin \theta |_0^{\theta_0} = iabB \sin{\theta_0} = 1.3 \times 10^{-4} \, {\rm J}
$$

