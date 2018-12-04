+++
title = "Esercitazione 04/12/2018"
date = 2018-12-04T12:24:21+02:00
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

[Esercizio 50](#esercizio-50) -- [Esercizio 51](#esercizio-51) -- [Esercizio 52](#esercizio-52)

## Esercizio 50

### Testo

Una particella di carica $q$ entra dal lato delle $x$ negative e con velocità $\vec{v} = (v, 0, 0)$ nel centro di una regione in cui è presente un campo magnetico uniforme $\vec{B} = (0, 0, B)$. La regione si estende indefinitamente lungo $\hat{z}$ mentre ha dimensioni $a$ sia lungo $\hat{x}$ che lungo $\hat{y}$.

1. Calcolare qual è l'angolo $\theta$ rispetto all'asse $x$ con cui la particella esce dalla regione col campo se $B = \frac{mv}{10 qa}$.
2. Calcolare per quali valori di $B$ la particella esce dal lato da cui è entrata,
3. dal lato alla sua sinistra,
4. dal lato opposto a quello da cui è entrata.
5. Discutere cosa cambierebbe se la particella avesse una velocità iniziale $\vec{v} = (v_x, 0, v_z)$

### Soluzione

1. Per quel valore di $B$ il raggio della traiettoria è
$$
r = \frac{mv}{qB} = 10 a.
$$
Notiamo che la domanda è equivalente a chiedersi qual è l'angolo $\theta$ sotteso dall'arco di circonferenza compiuto dalla particella quando questa si è mossa di una distanza $a$ lungo $\hat{x}$. Questo vuol dire che si ha
$$
a = r \sin(\theta)
$$
e quindi
$$
\sin(\theta) = \frac{a}{r} = \frac{1}{10}
$$
e quindi
$$
\theta = \arcsin(0.1) \approx 0.1
$$
2. Per avere la condizione richiesta si deve avere $2r = 2\frac{mv}{qB} < a / 2$, quindi
$$
B > \frac{4 m v}{qa}.
$$
3. Perché esca dal lato a sinistra, il campo deve essere chiaramente più debole di quello che la farebbe uscire dal lato da cui entrata. D'altro canto, deve essere più forte di quello che la farebbe uscire dal lato opposto. Si ha quindi
$$
B_o < B < \frac{2 m v}{qa}
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
4. Non cambia nulla, perché avere una velocità con componente lungo il campo dà luogo ad un moto uniforme elicoidale che non modifica affatto il moto lungo il piano $xy$.

---

## Esercizio 51
<small>Ispirato all'esercizio 7.1 del MNV</small>

### Testo

Due fili conduttori molto lunghi orientati lungo l'asse $z$ sono posti a distanza $2a = 4$ cm lungo $x$. Nei fili scorre la stessa corrente $i = 50$ A ma in verso opposto. Prendendo come origine degli assi il punto equidistante tra i due fili,

1. Calcolare il campo magnetico lungo $\hat{x}$
2. Calcolare il campo magnetico lungo $\hat{y}$
3. Calcolare il valore per $y = a$.
4. Determinare come cambierebbero queste risposte se le due correnti scorressero nello stesso verso.

### Soluzione

1. Consideriamo la corrente che scorre nel filo alla sinistra dell'origine uscente e l'altra entrante. I due fili genereranno, quindi, i seguenti campi magnetici lungo l'asse $x$:
\begin{align}
\vec{B}_s(x, 0, 0) & = \frac{\mu_0 i}{2 \pi} \frac{\hat{y}}{x + a}\\\\\\
\vec{B}_d(x, 0, 0) & = -\frac{\mu_0 i}{2 \pi} \frac{\hat{y}}{x - a}
\end{align}
**Nota Bene:** fate molta attenzione al segno del campo! Questo cambia a seconda che ci si trovi alla sinistra o alla destra del filo. Per il principio di sovrapposizione, il campo totale è semplicemente la somma dei due, quindi:
$$
\vec{B}(x, 0, ,0) = \frac{\mu_0 i \hat{y}}{2 \pi} \left( \frac{1}{x + a} - \frac{1}{x - a} \right)
$$

2. Poiché i campi hanno verso opposto, lungo l'asse $y$ le componenti $x$ sono uguali e contrarie e quindi si cancellano. Il campo sarà quindi dato da $\vec{B} = 2 B_y \hat{y}$. Per trovare il valore di $B_y$ disegniamo $\vec{B}$ e vediamo che $B_y = B \sin(\theta)$, dove 
$$
\sin(\theta) = \frac{y}{r} = \frac{y}{\sqrt{a^2 + y^2}}
$$
e quindi il campo vale
$$
\vec{B}(0, y, 0) = \frac{\mu_0 i}{\pi}\frac{y}{a^2 + y^2}\hat{y}
$$

3. Sostituendo i valori noti nella relazione appena calcolata si trova
$$
B(0, a, 0) = 5 \times 10^{-4} \, {\rm T} = 5 \, {\rm G}
$$

4. Nel caso in cui le correnti avessero lo stesso verso, anche i due campi sarebbero orientati nella stessa maniera. Prendiamo entrambe le correnti uscenti. Lungo l'asse $x$ si avrebbe quindi
$$
\vec{B}(x, 0, 0) = \frac{\mu_0 i \hat{y}}{2 \pi} \left( \frac{1}{x + a} + \frac{1}{x - a} \right),
$$
mentre lungo l'asse $y$ la componente $B_y$ avrebbe due contributi uguali e contrari, per cui si avrebbe
$$
B_y(0, y, 0) = 0.
$$
D'altro canto, le componenti $x$ dei due campi in questo caso si sommerebbero, per cui si avrebbe $\vec{B} = 2B_x \hat{x}$. Le componenti $x$ si trovano con una costruzione analoga a quella fatta prima, per cui varrebbe $B_x = B \cos(\theta)$, dove
$$
\cos(\theta) = \frac{a}{r} = \frac{a}{\sqrt{a^2 + y^2}}
$$
e quindi
$$
\vec{B}(0, y, 0) = \frac{\mu_0 i}{\pi}\frac{a}{a^2 + y^2}\hat{x}
$$

---
## Esercizio 52

### Testo

Sei fili conduttori sono tutti perpendicolari allo stesso piano e attraversati da correnti $i$ uguali in modulo ma diverse in verso, come indicato in figura.

{{< figure src="../images/esercizio_52.png" alt="figura esercizio 52" width="500px">}}

Calcolare la circuitazione del campo $\oint \vec{B} \cdot d\vec{s}$ lungo la linea chiusa percorsa nella direzione indicata dalle frecce.

### Soluzione

Applichiamo la legge di Ampère. Notiamo subito che i fili $1$ e $5$ non sono concatenati al percorso e quindi danno un contributo nullo all'integrale. Per valutare i restanti dobbiamo applicare la regola della mano destra (o della vite) ai versi delle correnti per vedere se i loro contributi sono positivi o negativi. In tutti i casi indicati in figura il verso della linea chiusa è orario, e quindi correnti entranti danno contributo positivo e correnti uscenti danno contributo negativo. Si ha quindi:

$$
\oint \vec{B} \cdot d\vec{s} = \mu_0 (i_2 + i_4 - i_3 - i_6) = 0
$$
