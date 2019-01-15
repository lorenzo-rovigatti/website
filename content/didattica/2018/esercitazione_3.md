+++
title = "Esercitazione 04/10/2018"
date = 2018-10-04T11:34:13+02:00
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

[Esercizio 8](#esercizio-8) -- [Esercizio 9](#esercizio-9) -- [Esercizio 10](#esercizio-10) -- [Esercizio 11](#esercizio-11)  -- [Esercizio 12](#esercizio-12)

## Esercizio 8
<small>Dagli esempi 1.7 e 1.8 del MNV</small>

### Testo

Una carica $q$ è distribuita uniformemente su un sottile disco di raggio R. Consideriamo un sistema di riferimento tale che l'origine è nel centro del disco e $\hat{x}$ è orientato in maniera concorde all'asse del disco.

1. Calcolare il modulo del campo elettrico in $\vec{r} = (x, 0, 0)$ al variare di $x$.
2. Cosa succede quando $R \to \infty$?
3. Discutere il verso del campo lungo l'asse $x$.
4. Utilizzare i risultati precedenti per scrivere il campo elettrostatico generato da due piani indefiniti paralleli e uniformemente carichi con densità superficiale di carica $|\sigma|$. Discutere il risultato al variare dei segni relativi delle due densità superficiali.

### Soluzione

1. Il disco può essere considerato come un oggetto "bidimensionale" avente una densità di carica $\sigma = \frac{q}{\pi R^2}$. Poiché il problema ha simmetria cilindrica, l'elemento di superficie vale $d\Sigma = 2\pi r dr$. Il disco può quindi essere considerato come un insieme di anelli di spessore $dr$, aventi ognuno una carica $dq = \sigma d\Sigma = 2 \pi \sigma r dr$. Il contributo alla componente $x$ del campo (l'unica diversa da zero) del generico anello infinitesimo di raggio $r$ è (vedi [Esercizio 5](#Esercizio-5)):
$$
dE_x = \frac{\sigma}{2\epsilon_0}\frac{x r dr}{(r^2 + x^2)^{3 / 2}}
$$
L'espressione per il campo totale si ottiene integrando da $0$ ad $R$ l'equazione precedente:
$$
E_x = \frac{\sigma x}{2\epsilon_0} \int_0^R \frac{r dr}{(r^2 + x^2)^{3 / 2}} = \frac{\sigma x}{2\epsilon_0} \left. \left( -\frac{1}{\sqrt{r^2 + x^2}} \right) \right|_0^R = \frac{\sigma x}{2\epsilon_0} \left( 1 - \frac{x}{\sqrt{R^2 + x^2}}\right)
$$

2. Nel limite per $R \to \infty$ (tenendo $x$ costante) la radice al denominatore tende all'infinito e quindi la frazione tende a 0. Il risultato è
$$
E_x = \frac{\sigma}{2\epsilon_0}
$$
In questo limite (in cui il disco carico diventa effettivamente un piano indefinito uniformemente carico) il campo è *uniforme*, cioè prende lo stesso valore in tutti i punti dello spazio. La stessa espressione è valida nel caso in cui ci avviciniamo molto ad una superficie carica (cioè nel limite in cui la superficie è così vicino da *sembrarci* un piano infinito).

3. Sia che $R$ sia finito sia che tenda all'infinito, il limite di $\vec{E}$ per $x \to 0$ è diverso venendo da sinistra o da destra: il modulo resta lo stesso, mentre il verso è opposto. Il campo ha quindi una *discontinuità* in $x = 0$: il campo ha un salto di valore pari a $\Delta E = \frac{\sigma}{\epsilon_0}$. Vettorialmente si può scrivere che, ad esempio nel limite $R \to \infty$, 
$$
\vec{E} = \pm \frac{\sigma}{2 \epsilon_0} \hat{x}
$$

4. Nel caso $\sigma_1 = \sigma_2$ il campo tra i piani si annulla, mentre quello esterno raddoppia di intensità, $|\vec{E}| = \frac{\sigma}{\epsilon_0}$. Nel caso $\sigma_1 = -\sigma_2$, invece, avviene il contrario: il campo si annulla all'esterno e raddoppia di intensità tra i due piani.
 
---

## Esercizio 9

### Testo

Due piani indefiniti paralleli caricati con densità superficiale $\sigma_1$ e $\sigma_2$ sono posti in $x_1 = 0$ e $x_2 = d$.

1. Calcolare il lavoro che occorre compiere per spostare una carica $q_0$ tra i punti $(\delta, 0, 0)$ e $(5\delta, 0, 0)$, con $\delta > 0$, e tale che $5\delta < d$.
2. Poniamo $\sigma_1 = -\sigma_2 > 0$. Al tempo $t = 0$ una carica $q_0 > 0$ si trova in $\vec{r} = (\delta, 0, 0)$ con velocità iniziale $\vec{v} = (v\_{0,x}, v\_{0,y}, v\_{0,z})$. Calcolare il tempo $t^*$ dopo il quale la carica tocca il secondo piano.

### Soluzione

1. Il campo generato da un piano indefinito (e quindi anche da più piani indefiniti) è uniforme e diretto (in questo caso) lungo $\hat{x}$, quindi il lavoro si può scrivere semplicemente come $W = F\Delta x = q_0 E \Delta_x$. Lo spostamente è dato dalla differenza tra la posizione finale e quella iniziale, quindi:
$$
\Delta x = d + 5\delta - (d + \delta) = 4\delta
$$
Il campo totale che agisce per $0 < x < d$ è:
$$
\vec{E} = \frac{\sigma_1 - \sigma_2}{2\epsilon_0} \hat{x}.
$$
Il lavoro fatto è quindi:
$$
W = \frac{q_0(\sigma_1 - \sigma_2)}{2\epsilon_0} 4\delta = \frac{2\delta q_0(\sigma_1 - \sigma_2)}{\epsilon_0}
$$
2. Il campo è uniforme e, tra i due piani, vale $\frac{\sigma_1 - \sigma_2}{2\epsilon_0}$. L'accelerazione quindi è costante lungo $\hat{x}$ e vale
$$
a_x = \frac{q_0}{m}E = \frac{q_0(\sigma_1 - \sigma_2)}{2m\epsilon_0}
$$
La posizione in funzione del tempo è:
$$
x(t) = \delta + v\_{0,x}t + \frac{1}{2}a_x t^2
$$
Ponendo questa ultima quantità uguale alla posizione del secondo piano, cioè $x(t) = d$, otteniamo un'equazione di secondo grado:
$$
(\delta - d) + v\_{0,x} t + \frac{1}{2}a_x t^2 = 0.
$$
Risolviamo per $t$ per trovare il risultato:
$$
t^* = \frac{-v\_{0,x} \pm \sqrt{v\_{0,x}^2 - 2a(\delta - d)}}{a_x}
$$

---

## Esercizio 10

### Testo

Tre cariche $q$ sono poste su tre vertici di un quadrato di lato $L$.

1. Qual è l'energia elettrostatica del sistema?
2. Calcolare l'espressione del lavoro $W$ necessario per portare una carica $q_0$ sul quarto vertice del quadrato. Discuterne il segno.
3. Calcolare $W$ per $q = 2\cdot 10^{-7}$ C, $q_0 = -10^{-8}$ C e $L = 5$ cm.

### Soluzione

1. L'energia totale ha tre contributi, $U_e = U_e^{1,2} + U_e^{1,3} + U_e^{2,3}$. Ognuno di questi tre contributi ha la forma:
$$
U_e^{i,j} = \frac{q_i q_j}{4\pi \epsilon_0} \frac{1}{r\_{ij}}
$$
Delle tre distanze tra le cariche, due valgono $L$ e una vale $\sqrt{2}L$, quindi si ha:
$$
U_e = \frac{q^2}{2\pi \epsilon_0} \frac{1}{L} + \frac{q^2}{4\pi \epsilon_0} \frac{1}{\sqrt{2}L}
$$
2. Per calcolare il lavoro usiamo $W = -\Delta U_e = -q_0\Delta V$. L'energia iniziale è $U_e^i = 0$, perché la carica $q_0$ è inizialmente "all'infinito". L'energia finale invece vale:
$$
U_e^f = \frac{q_0 q}{2\pi \epsilon_0} \frac{1}{L} + \frac{q_0 q}{4\pi \epsilon_0} \frac{1}{\sqrt{2}L}
$$
E quindi il lavoro vale:
$$
W = -\left( \frac{q_0 q}{2\pi \epsilon_0} \frac{1}{L} + \frac{q_0 q}{4\pi \epsilon_0} \frac{1}{\sqrt{2}L} \right)
$$
Notiamo che $W$ è negativo se $q$ e $q_0$ hanno lo stesso segno e positivo altrimenti: se le cariche hanno lo stesso segno l'energia potenziale del sistema *aumenta* e quindi dobbiamo fare lavoro *contro* la forza elettrostatica (e viceversa).
3. Sostituiamo i numeri nell'equazione precedente e troviamo
$$
W = 9.732 \times 10^{-4}\,\mathrm{J}
$$
**Nota Bene:** il lavoro ha le stesse unità di misura dell'energia (perché?) e quindi si misura in Joule (J).

---

## Esercizio 11

### Testo

Calcolare l'espressione del campo elettrostatico date le seguenti espressioni del potenziale:

1. $V(x, y, z) = A(xz - 2z^2)$
2. $V(x, y, z) = A(\cos{(kx)} + z - \log(y))$

### Soluzione

1. Deriviamo il potenziale:
$$
\begin{align}
E_x & = -Az\\\\\\
E_y & = 0\\\\\\
E_z & = A(4z - x)
\end{align}
$$
2. Deriviamo il potenziale:
$$
\begin{align}
E_x & = -Ak\sin{(kx)}\\\\\\
E_y & = \frac{A}{y}\\\\\\
E_z & = - A
\end{align}
$$

---

## Esercizio 12

<small>Esempio 2.8 del MNV</small>

### Testo

Calcolare e disegnare il potenziale e il modulo del campo elettrostatico generati in tutto lo spazio da due piani indefiniti paralleli uniformemente carichi con densità superficiale $\sigma_1$ e $\sigma_2$ e posti a $x_1 = 0$ e $x_2 = d$ lungo l'asse $x$,

1. Nel caso in cui $\sigma_1 = -\sigma_2$.
2. Nel caso in cui $\sigma_1 = \sigma_2$.

### Soluzione

Il modulo del campo generato da un singolo piano è $E = \frac{\sigma_i}{2\epsilon_0}$.
1. Se i piani hanno densità di carica opposta, il campo sarà diverso da 0 solamente nel mezzo, dove vale $E = \frac{\sigma}{\epsilon_0}$. Utilizziamo la definizione di potenziale per calcolare $\Delta V = V_2 - V_1$ tra i due piani:
$$
\Delta V = -\int_0^d E dx = -Ed = -\frac{\sigma d}{\epsilon_0}
$$
Lì dove il campo è zero (cioè a sinistra e a destra dei due piani), il potenziale deve essere costante. Poiché la funzione potenziale deve essere sempre continua (perché?), troviamo $V(x) = 0$ per $x < 0$ e $V(x) = -\frac{\sigma d}{\epsilon_0}$ per $x > d$.
2. Se i piani hanno la stessa densità di carica, il campo sarà diverso da 0 solamente a sinistra e a destra dei due piani, dove vale $\vec{E} = \pm \frac{\sigma}{\epsilon_0}\hat{x}$ (vale il segno $+$ a destra dei piani, cioè per $x > d$, e il segno $-$ a sinistra dei piani, cioè per $x < 0$). Dove il campo vale 0 (cioè tra i due piani) il potenziale è costante. Lo poniamo a 0 (ma potremmo porlo uguale a qualsiasi altro valore, perché?). A sinistra dei piani (cioè per $x < 0$) si ha
$$
V(x) = -\int_0^x \vec{E} d\vec{s} = \int_0^x E dx' = \frac{\sigma}{\epsilon_0} x
$$
perché il campo è diretto verso le $x$ negative. A destra dei piani ($x > d$) si ha invece:
$$
V(x) = -\int_d^x \vec{E} d\vec{s} = -\int_d^x E dx' = -\frac{\sigma}{\epsilon_0} (x - d)
$$