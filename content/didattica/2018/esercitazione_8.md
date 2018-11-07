+++
title = "Esercitazione 06/11/2018"
date = 2018-10-18T22:24:21+02:00
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

[Esercizio 33](#esercizio-33) -- [Esercizio 34](#esercizio-34) -- [Esercizio 35](#esercizio-35)

## Esercizio 33
<small>Ispirato dall'esercizio III.13 del Mencuccini-Silvestrini</small>

### Testo

Un condensatore piano di dimensioni $a \times b \times h$ è parzialmente riempito (per un tratto $x = a / 3$) di una lastra di dielettrico omogeneo e isotropo con $\kappa = 4$ e mantenuto ad una d.d.p. $\Delta V$. 

1. Quanto vale la carica $q_d$ che si dispone sulla parte di armatura superiore che si affaccia sul dielettrico?
2. Calcolare $q_d$ se $\Delta V = 113$ V, $a = b = 10$ cm e $h = 2$ mm.

### Soluzione

1. Il condensatore può essere visto come due condensatori in parallelo di capacità $C_d = \epsilon_0 \kappa ab / 3h$ e $C_v = 2 \epsilon_0 ab / 3h$. La capacità totale è quindi:
$$
C\_{\rm eq} = \frac{\epsilon_0 ab}{h} \left( \frac{\kappa}{3} + \frac{2}{3} \right) = \frac{2\epsilon_0 a b}{h}
$$
La carica totale sulle armature è data da:
$$
q = q_d + q_i = \Delta V C\_{\rm eq} = \Delta V \frac{2 \epsilon_0 a b}{h}
$$
Poiché la d.d.p. tra i due "condensatori" deve essere la stessa, si deve avere
$$
\frac{q_d}{C_d} = \frac{q_v}{C_v}
$$
e quindi
$$
\frac{q_d}{2} = q_i = q - q_d
$$
da cui si ricava
$$
q_d = \frac{2}{3} q = \Delta V \frac{4 \epsilon_0 a b}{3 h}
$$

2. Sostituiamo i valori dati nelle relazione trovata al punto precedente:
$$
q_d = \frac{4}{3} 113 \cdot 8.854 \times 10^{-12} \frac{0.1 \cdot 0.1}{0.002}\, \mathrm{C} = 0.667 \times 10^{-8} \, \mathrm{C}
$$

---

## Esercizio 34
<small>MVN: esercizio 4.10</small>

### Testo

Cinque fogli metallici sferici e concentrici (di spessore trascurabile) sono inizialmente scarichi. Il secondo e il terzo e il quarto e il quinto sono collegati da fili conduttori. Una carica $q$ è depositata sulla superficie più interna.
Calcolare

1. le cariche presenti sulle superfici;
2. il campo $E(r )$;
3. l'energia elettrostatica del sistema;

Calcolare le stesse quantità se

4. i conduttori 1 e 2 vengono collegati;
5. i conduttori 3 e 4 vengono collegati;
6. il conduttore 5 viene collegato a terra;

### Soluzione

I conduttori collegati possono essere visti come un unico conduttore, quindi il sistema può essere visto come una sfera conduttrice carica al centro di due sfere conduttrici concentriche.

1. La sfera centrale ha carica $q$. La superficie 2 si carica con $-q$ per induzione completa. Per conservazione della carica la superficie 3 acquista quindi una carica $q$. Per i conduttori 4 e 5 vale lo stesso discorso, e quindi si caricano rispettivamente con carica $-q$ e $q$.

2. Il campo è nullo all'interno dei conduttori e nelle zone comprese tra i conduttori collegati (quindi 2-3 e 4-5). Negli altri punti possiamo utilizzare il teorema di Gauss per trovare il campo, che vale sempre
$$
E(r ) = \frac{q}{4 \pi \epsilon_0 r^2}
$$

3. Il sistema può essere visto come composto da due condensatori sferici e da una superficie sferica cava. L'energia di un condensatore è semplicemente $U_e = \frac{q^2}{2C}$, dove la capacità di un condensatore sferico di raggi $R_a > R_b$ è
$$
C = 4 \pi \epsilon_0 \frac{R_a R_b}{R_a - R_b}
$$
L'energia elettrostatica di una sfera conduttrice carica può essere calcolata in due modi equivalenti:
	1. considerandola come un'armatura di un condensatore piano avente l'altra armatura all'infinito. In questo caso possiamo associarle una capacità $C\_\infty = 4 \pi \epsilon_0 R_b$ che può essere utilizzata per calcolarne l'energia elettrostatica;
	2. utilizzando la relazione che lega il campo all'energia, $U_e = \frac{1}{2} \epsilon_0 \int\_V E^2 d\tau$
In entrambi i casi otteniamo $U_e = \frac{q^2}{8 \pi \epsilon_0 R_5}$, e l'energia totale vale quindi
$$
U_e = \frac{q^2}{8 \pi \epsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2} + \frac{1}{R_3} - \frac{1}{R_4} + \frac{1}{R_5}\right)
$$

4. Collegare i due conduttori azzera la loro carica e quindi annulla il campo nell'intercapedine (e quindi l'energia elettrostatica associata al condensatore).
5. Come sopra.
6. Collegare a terra il conduttore più esterno lo fa scaricare, e quindi carica, campo ed energia si annullano.

---

## Esercizio 35

### Testo

Una sfera di raggio di raggio $2R$ è carica uniformemente con densità di carica $\rho$ dal centro fino ad $R$ e con densità di carica $-\rho$ da $R$ a $2R$. 

1. Calcolare il campo elettrico per $r < R$, $R < r < 2R$ ed $r > 2R$. 
2. La d.d.p. tra il centro e la superficie esterna ($r = 2 R$).
3. Se l'origine del sistema di riferimento coincide con il centro della sfera, una porzione sferica di raggio $R/2$ posta nel punto $(\frac{3}{2} R, 0, 0)$ viene rimossa dal sistema. Scrivere l'espressione del campo per un generico punto $(x, 0, 0)$, con $x > 2 R$.

### Soluzione

1. Applichiamo il teorema di Gauss nelle tre regioni indicate nel testo.
	* Per $r < R$, il campo è quello che si trova all'interno di una sfera carica uniformemente, quindi
	$$
	E^{(1)}(r ) = \frac{\rho r}{3 \epsilon_0}
	$$
	* Per $R < r < 2R$, la quantità di carica contenuta in una sfera di raggio $r$ vale
	$$
	Q(r ) = \frac{4}{3} \pi R^3 \rho - 4 \pi \rho \int_R^r r'^2 dr' = \frac{4}{3} \pi R^3 \rho - \frac{4}{3} \pi \rho \left( r^3 - R^3 \right) = \frac{8}{3} \pi R^3 \rho - \frac{4}{3} \pi r^3 \rho = \frac{4}{3}  \pi \rho \left( 2R^3 - r^3 \right)
	$$
	e quindi il campo vale:
	$$
	E^{(2)}(r ) = \frac{\rho \left( 2R^3 - r^3 \right)}{3 \epsilon_0 r^2} =  \frac{\rho}{3 \epsilon_0} \left( \frac{2R^3}{r^2} - r \right)
	$$
	* Per $r > 2R$ il campo è quello generato da una carica puntiforme avente carica 
	$$
	q = Q(2R) = \frac{4}{3}  \pi \rho \left( 2R^3 - (2R)^3 \right) = -8  \pi \rho R^3
	$$
	e quindi vale:
	$$
	E^{(3)} = -\frac{2 \rho R^3}{\epsilon_0 r^2}
	$$

2. Uitlizziamo la definizione di d.d.p.:
$$
\Delta V = \int_0^{3/ 2 R} E(r ) dr = \int_0^{R} E^{(1)}(r ) dr + \int_R^{3/ 2 R} E^{(2)}(r ) dr = \frac{\rho R^2}{6 \epsilon_0} + \frac{\rho}{3 \epsilon_0} \left( \int_R^{2R} \frac{2R^3}{r^2} dr - \int_R^{2R} r dr \right) = \frac{\rho R^2}{6 \epsilon_0} - \frac{\rho R^2}{6 \epsilon_0} = 0
$$

3. Con il sistema di coordinate scelto, prima di rimuovere la porzione di sfera, per $x > 2R$ il campo vale (vedi punti precedenti)
$$
E^{(3)}(r ) = -\frac{2 \rho R^3}{\epsilon_0 r^2}
$$
Dopo che la sfera viene rimossa, il campo totale si può vedere come una sovrapposizione tra il campo iniziale e quello generato da una sfera caricata con densità opposta a quella rimossa (e avente stessa posizione e dimensioni). In questo caso la quantità di carica (cambiata di segno) contenuta nella sfera fittizia è
$$
q_f = \frac{\pi R^3\rho}{6}
$$
e il campo che genera al suo esterno vale
$$
\vec{E}_f(r_f) = \frac{q_f}{4 \pi \epsilon_0 r_f^2} \hat{r}_f
$$
dove $\vec{r}_f$ indica la distanza tra il centro della sfera ed un generico punto nello spazio. Se consideriamo solo l'asse $x$, $r_f = x_f = x - \frac{3}{2}R$. Sommando i due contributi troviamo che il campo lungo l'asse $x$ è parallelo ad $\hat{x}$ e (per $x > 2R$) vale 
$$
E(x, 0, 0) = -\frac{2 \rho R^3}{\epsilon_0 x^2} + \frac{q_f}{4 \pi \epsilon_0 x_f^2} = -\frac{2 \rho R^3}{\epsilon_0 x^2} + \frac{\rho R^3}{24 \epsilon_0 (x - 1.5 R)^2}
$$

---