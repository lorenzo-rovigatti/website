+++
title = "Esercitazione del 12/11/2020"
date = 2020-11-07T09:24:21+02:00
draft = false
+++

[Esercizio 37](#esercizio-37) -- [Esercizio 38](#esercizio-38) -- [Esercizio 39](#esercizio-39)

## Esercizio 37

### Testo

{{< figure src="../images/esercizio_37.png" width="400px">}}

In una spira circolare di raggio $R$ scorre una corrente $i$. La spira è immersa in un campo magnetico uniforme $\vec{B} = B_0 \hat{x}$ e le condizioni del sistema sono tali per cui si trova ad oscillare attorno ad $\hat{y}$. Il momento di inerzia lungo quest'asse vale $I$.

1. Tenendo presente che la velocità angolare massima raggiunta è $\omega_0$, calcolare l'angolo tra la normale della spira e il campo magnetico quando $\omega = \omega_0 / 3$.
2. Una molla angolare di costante $k$ viene collegata alla spira in maniera tale da contrapporsi al momento magnetico mentre questa è nel punto per cui vale $\omega = 0$. Calcolare il valore che $k$ deve avere per far sì che la spira resti ferma per angoli generici e nell'approssimazione di piccoli angoli.

### Soluzione

1. L'energia totale (che è conservata) ha due contributi: l'energia cinetica rotazionale e quella magnetica potenziale. La prima vale
$$
U_k = \frac{1}{2} I \omega^2
$$
mentre la seconda vale
$$
U_e = - \vec{m} \cdot \vec{B} = - m B \cos \theta
$$
dove $\vec{m} = i \Sigma \hat{n}$ è il momento di dipolo magnetico della spira. In questo caso $\Sigma = \pi R^2$, quindi l'energia totale vale
$$
U = \frac{1}{2} I \omega^2 - i \Sigma B \cos \theta.
$$
Quando $\theta = 0$ l'energia potenziale è minima e quindi quella cinetica è massima. In questo caso l'energia totale vale
$$
U_0 = \frac{1}{2} I \omega_0^2 - i \Sigma B
$$
e il suo valore può essere calcolato dai dati del problema. Quando $\omega = \omega_0 / 3$, si ha:
$$
U_0 = \frac{1}{18} I \omega_0^2 - i \Sigma B \cos \theta
$$
da cui si può ricavare il valore di $\cos \theta$:
$$
\cos \theta = \frac{1}{i \Sigma B} \left(\frac{1}{18} I \omega_0^2 -  U_0 \right).
$$

2. L'angolo per cui $\omega = 0$ si trova imponendo
$$
U_0 = - i \Sigma B \cos \theta\_{\rm max}
$$
da cui si ottiene
$$
\theta\_{\rm max} = \arccos\left(- \frac{U_0}{i \Sigma B} \right)
$$
Il momento meccanico di una molla angolare vale, in generale $M = k \theta$. La condizione di equilibrio si impone eguagliando i due momenti meccanici,
$$
k \theta\_{\rm max} = i \Sigma B \sin \theta\_{\rm max},
$$
per cui il valore della costante elastica che assicura che la spira resti ferma è
$$
k = \frac{i \Sigma B \sin \theta\_{\rm max}}{\theta\_{\rm max}}
$$
che, nel limite di piccoli angoli (per cui $\sin \theta \to \theta$), vale
$$
k = i \Sigma B
$$

---

## Esercizio 38

### Testo

{{< figure src="../images/esercizio_38.png" width="500px">}}

Una spira rettangolare indeformabile di dimensioni $a = 40$ cm e $b = 1$ m e massa $m = 1$ g ha i lati lunghi paralleli all'asse $x$ ed è posta ad una distanza $d = 1$ cm da esso (vedi figura). Nella regione è presente un campo magnetico diretto lungo $-\hat{z}$ di modulo $B(y) = |A / y|$, con $ A = 6 \times 10^{-6}$ Tm.  La forza peso $\vec{F}_p$ agisce in direzione $-\hat{y}$. Quando nella spira scorre una corrente $i$ il sistema è in equilibrio e la spira rimane sospesa.

1. Determinare verso e intensità di $i$.
2. Si aggiunge nella regione di spazio in figura un campo magnetico uniforme uscente dal foglio e di intensità $B_{\rm add} = 1$ T. Quale deve essere il nuovo valore di $i$ per far sì che il sistema rimanga in equilibrio?

### Soluzione

1. Il verso di $i$ deve essere tale per cui la forza magnetica $F_m$ che il circuito sente sia contrapposta alla forza peso. In questo caso $F_m$ ha due contributi dati dalle due porzioni di spira parallele al filo. Il contributo dato dal filo più in alto è più forte, poiché lì il campo è maggiore, quindi deve essere quello che determina il verso della corrente. Per far sì che si generi una forza verso l'alto, $i$ deve scorrere lungo $\hat{x}$ in questa parte di spira. Ne consegue che $i_s$ scorre in senso orario.
Affinché la spira sia in equilibrio, le intensità della forza peso e di quella magnetica devono essere uguali. La forza peso vale semplicemente $mg$. Quella magnetica è dovuta alla presenza del campo magnetico e ha due contributi dovuti alle due parti di spira parallele all'asse $x$, che si sommano direttamente poiché hanno la stessa direzione:
$$
F_m = i b B(d) + i b B(d + a) = i b A \left( \frac{1}{d} - \frac{1}{d + a}\right).
$$
Uguagliando le due forze si ottiene
$$
 A i b \left( \frac{1}{d} - \frac{1}{d + a} \right) = mg
$$
e risolvendo per i:
$$
i = \frac{mg}{A} \frac{d(d + a)}{ab} = 16.8 \, {\rm A}
$$
2. La risposta non cambia, perché la forza totale agente sulla spira non risente di un campo omogeneo (perché?).

---

## Esercizio 39

### Testo

{{< figure src="../images/esercizio_39.png" width="500px">}}

Una particella di carica $q > 0$ entra dal lato delle $x$ negative e con velocità $\vec{v} = (v, 0, 0)$ nel centro di una regione in cui è presente un campo magnetico uniforme $\vec{B} = (0, 0, B)$. La regione si estende indefinitamente lungo $\hat{z}$ mentre ha dimensioni $a$ sia lungo $\hat{x}$ che lungo $\hat{y}$.

1. Calcolare qual è l'angolo $\theta$ rispetto all'asse $x$ con cui la particella esce dalla regione col campo se $B = \frac{mv}{10 qa}$.
2. Calcolare per quali valori di $B$ la particella esce dal lato da cui è entrata,
3. dal lato alla sua destra,
4. dal lato opposto a quello da cui è entrata.
5. Discutere cosa cambierebbe se la particella avesse una velocità iniziale $\vec{v} = (v_x, 0, v_z)$
6. Discutere cosa cambiarebbe se la particella possedesse una carica $q < 0$

### Soluzione

1. Per quel valore di $B$ il raggio della traiettoria è
$$
r = \frac{mv}{qB} = 10 a.
$$
Notiamo che la domanda è equivalente a chiedersi qual è l'angolo $\theta$ sotteso dall'arco di circonferenza compiuto dalla particella quando questa si è mossa di una distanza $a$ lungo $\hat{x}$. Questo vuol dire che si ha
$$
a = r \sin \theta
$$
e quindi
$$
\sin(\theta) = \frac{a}{r} = \frac{1}{10}
$$
e quindi
$$
\theta = \arcsin(0.1) \approx 0.1
$$
2. La particella percorrerà la circonferenza verso il basso (utilizzare la definizione di forza di Lorentz per vederlo!). Per avere la condizione richiesta si deve avere $2r = 2\frac{mv}{qB} < a / 2$, quindi
$$
B > \frac{4 m v}{qa}.
$$
3. Perché esca dal lato a destra, il campo deve essere chiaramente più debole di quello che la farebbe uscire dal lato da cui entrata. D'altro canto, deve essere più forte di quello che la farebbe uscire dal lato opposto. Si ha quindi
$$
B_o < B < \frac{4 m v}{qa}
$$
$B_o$ si trova calcolando il caso limite; quello, cioè, per cui la particella uscirebbe dallo spigolo del quadrato. Questo si trova imponendo che il punto di entrata e lo spigolo si trovino alla stessa distanza dal centro della circonferenza che identifica la traiettoria. Consideriamo il punto di entrata come l'origine degli assi. È chiaro quindi che, in questo sistema di riferimento, il centro della circonferenza deve avere $x_c = 0$. Vale quindi $r = y_c$. D'altro canto, per lo spigolo vale
$$
r = \sqrt{a^2 + \left(\frac{a}{2} - y_c\right)^2} = \sqrt{a^2 + \frac{a^2}{4} + y_c^2 - ay_c}.
$$
Elevando entrambi i membri al quadrato e sostituendo $r = y_c$ si trova
$$
b^2 + \frac{a^2}{4} - ay_c = 0
$$
da cui si ricava
$$
y_c = \frac{5}{4} a = r = \frac{mv}{qB_0}
$$
e quindi la condizione richiesta diventa
$$
\frac{4}{5} \frac{mv}{qa} < B < \frac{4 m v}{qa}
$$
4. Poiché per $B = 0$ il moto risulta inalterato, la condizione richiesta è
$$
0 < B < \frac{4}{5} \frac{mv}{qa}
$$
5. Non cambia nulla, perché avere una velocità con componente lungo il campo dà luogo ad un moto uniforme elicoidale che non modifica affatto il moto lungo il piano $xy$.
6. Il verso di percorrenza della circonferenza (o degli archi di circonferenza) dipende dal segno della carica quindi, data la simmetria del sistema, con carica negativa si avrebbero le stesse relazioni.
