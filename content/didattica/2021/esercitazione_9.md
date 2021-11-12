+++
title = "Esercitazione del 12/11/2020"
date = 2020-11-07T09:24:21+02:00
draft = false
+++

[Esercizio 39](#esercizio-39)

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
