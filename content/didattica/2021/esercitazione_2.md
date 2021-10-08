+++
title = "Esercitazione dell'8/10/2021"
date = 2021-10-07T09:47:43+02:00
draft = false

+++

[Esercizio 5](#esercizio-5) -- [Esercizio 6](#esercizio-6) -- [Esercizio 7](#esercizio-7) -- [Esercizio 8](#esercizio-8) -- [Esercizio 9](#esercizio-9)

## Esercizio 5
<small>Dall'esempio 1.6 del MNV</small>

### Testo

{{< figure src="../images/esercizio_5.png" height="100px">}}

Una carica $q$ è distribuita uniformemente su un *sottile* anello di raggio $R$.

1. Senza calcolarlo, discutere qualitativamente il comportamento del campo elettrostatico lungo l'asse dell'anello (che prendiamo coincidente con l'asse $x$) al variare di $x$.
2. Calcolare il campo elettrico in $\vec{r} = (x, 0, 0)$ al variare di $x$.

### Soluzione

1. Lungo l'asse dell'anello il problema ha simmetria cilindrica: lì il campo (se diverso da 0) non può che essere parallelo ad $\hat{x}$. Inoltre, si deve annullare per $x = 0$ (cioè al centro dell'anello), ancora una volta per simmetria.

2. Prendiamo un elementino di carica $dq$. Questo genererà un campo infinitesimo in $x$ di intensità:
$$
d|\vec{E}| = \frac{dq}{4\pi\epsilon_0}\frac{1}{r^2}
$$
dove $r = \sqrt{R^2 + x^2}$. Sappiamo però che, lungo l'asse dell'anello, la componente $y$ del campo (totale) si deve annullare. Dobbiamo quindi utilizzare la relazione precedente per trovare l'unica componente diversa da zero, $E_x$. Per fare ciò proiettiamo il campo lungo $x$ utilizzando la relazione $E_x = |\vec{E}|\cos{(\theta)}$, con $\cos{(\theta)} = \frac{x}{r}$ (disegnare per credere). Si ottiene quindi
$$
dE_x = \frac{dq}{4\pi\epsilon_0}\frac{x}{r^3}
$$
La somma di tutti i contributi è banale, perché tutti gli elementini $dq$ generano lo stesso campo in $x$ e quindi si ottiene
$$
\vec{E} = E_x\hat{x} = \frac{q}{4\pi\epsilon_0}\frac{x}{r^3}\hat{x} = \frac{q}{4\pi\epsilon_0}\frac{x}{(R^2 + x^2)^{3/2}}\hat{x}
$$

---

## Esercizio 6
<small>Dagli esempi 1.7 e 1.8 del MNV</small>

### Testo

{{< figure src="../images/esercizio_6.png" height="100px">}}

Una carica $q$ è distribuita uniformemente su un sottile disco di raggio R. Consideriamo il sistema di riferimento che ha l'origine nel centro del disco e $\hat{x}$ orientato in maniera concorde all'asse del disco.

1. Calcolare il modulo del campo elettrico in $\vec{r} = (x, 0, 0)$ al variare di $x$.
2. Cosa succede quando $R \to \infty$?
3. Discutere il verso del campo lungo l'asse $x$.

### Soluzione

1. Il disco può essere considerato come un oggetto "bidimensionale" avente una densità di carica $\sigma = \frac{q}{\pi R^2}$. Poiché il problema ha simmetria cilindrica, l'elemento di superficie vale $d\Sigma = 2\pi r dr$. Il disco può quindi essere considerato come un insieme di anelli di spessore $dr$, aventi ognuno una carica $dq = \sigma d\Sigma = 2 \pi \sigma r dr$. Il contributo alla componente $x$ del campo (l'unica diversa da zero) del generico anello infinitesimo di raggio $r$ è (vedi [esercizio 5](#Esercizio-5)):
$$
dE_x = \frac{\sigma}{2\epsilon_0}\frac{x r dr}{(r^2 + x^2)^{3 / 2}}
$$
L'espressione per il campo totale si ottiene integrando da $0$ ad $R$ l'equazione precedente:
$$
E_x = \frac{\sigma x}{2\epsilon_0} \int_0^R \frac{r dr}{(r^2 + x^2)^{3 / 2}} = \frac{\sigma x}{2\epsilon_0} \left. \left( -\frac{1}{\sqrt{r^2 + x^2}} \right) \right|_0^R = \frac{\sigma}{2\epsilon_0} \left( 1 - \frac{x}{\sqrt{R^2 + x^2}}\right)
$$

2. Nel limite per $R \to \infty$ (tenendo $x$ costante) la radice al denominatore tende all'infinito e quindi la frazione tende a 0. Il risultato è
$$
E_x = {\rm sgn}(x) \frac{\sigma}{2\epsilon_0}
$$
dove ${\rm sgn}(x)$ indica il segno di $x$. Questo fattore viene dal fatto che $\sqrt{x^2} = |x|$, quindi $x / |x| = {\rm sgn}(x)$. Nel limite di grandi $R$ (in cui il disco carico diventa effettivamente un piano indefinito uniformemente carico) il campo è *uniforme*, cioè prende lo stesso valore in tutti i punti dello spazio. La stessa espressione è valida nel caso in cui ci avviciniamo molto ad una superficie carica (cioè nel limite in cui la superficie è così vicino da *sembrarci* un piano infinito).

3. Sia che $R$ sia finito sia che tenda all'infinito, il limite di $\vec{E}$ per $x \to 0$ è diverso venendo da sinistra o da destra: il modulo resta lo stesso, mentre il verso è opposto. Il campo ha quindi una *discontinuità* in $x = 0$: il campo ha un salto di valore pari a $\Delta E = \frac{\sigma}{\epsilon_0}$. Vettorialmente si può scrivere che nel limite $R \to \infty$
$$
\vec{E} = {\rm sgn}(x) \frac{\sigma}{2 \epsilon_0} \hat{x}
$$

---

## Esercizio 7
<small>Esempio 2.8 del MNV</small>

### Testo

{{< figure src="../images/esercizio_7.png" height="100px">}}

Calcolare e disegnare il potenziale e il modulo del campo elettrostatico generati in tutto lo spazio da due piani indefiniti paralleli uniformemente carichi con densità superficiale $\sigma_1$ e $\sigma_2$ e posti a $x_1 = 0$ e $x_2 = d$ lungo l'asse $x$,

1. Nel caso in cui $\sigma_1 = -\sigma_2$.
2. Nel caso in cui $\sigma_1 = \sigma_2 = \sigma$.

### Soluzione

Il modulo del campo generato da un singolo piano è $E = \frac{\sigma_i}{2\epsilon_0}$.

{{< figure src="../images/esercizio_7_soluzione_1.png" height="80px">}}

1. Se i piani hanno densità di carica opposta, il campo sarà diverso da 0 solamente nel mezzo, dove vale (definendo $\sigma \equiv \sigma_1$) $E = \frac{\sigma}{\epsilon_0}$. Utilizziamo la definizione di potenziale per calcolare $\Delta V = V_2 - V_1$ tra i due piani:
$$
\Delta V = -\int_0^d E dx = -Ed = -\frac{\sigma d}{\epsilon_0}
$$
Lì dove il campo è zero (cioè a sinistra e a destra dei due piani), il potenziale deve essere costante. Poiché la funzione potenziale deve essere sempre continua (perché?), troviamo $V(x) = 0$ per $x < 0$ e $V(x) = -\frac{\sigma d}{\epsilon_0}$ per $x > d$.
{{< figure src="../images/esercizio_7_soluzione_2.png" height="80px">}}
2. Se i piani hanno la stessa densità di carica, il campo sarà diverso da 0 solamente a sinistra e a destra dei due piani, dove vale $\vec{E} = {\rm sgn}(x) \frac{\sigma}{\epsilon_0}\hat{x}$ (cioè il campo ha segno $+$ a destra dei piani, $x > d$, e il segno $-$ a sinistra dei piani, $x < 0$). Dove il campo vale 0 (cioè tra i due piani) il potenziale è costante. Lo poniamo a 0 (ma potremmo porlo uguale a qualsiasi altro valore, perché?). A sinistra dei piani (cioè per $x < 0$) si ha
$$
V(x) = -\int_0^{x} \vec{E} \cdot d\vec{s} = \int_0^x E dx' = \frac{\sigma}{\epsilon_0} x
$$
perché il campo è diretto verso le $x$ negative. A destra dei piani ($x > d$) si ha invece:
$$
V(x) = -\int_d^x \vec{E} \cdot d\vec{s} = -\int_d^x E dx' = -\frac{\sigma}{\epsilon_0} (x - d)
$$

---

I due esercizi che seguono verranno discussi a lezione più avanti.

## Esercizio 8

### Testo

{{< figure src="../images/esercizio_8.png" height="100px">}}

Due piani indefiniti paralleli caricati con densità superficiale $\sigma_1$ e $\sigma_2$ sono posti in $x_1 = 0$ e $x_2 = d$.

1. Calcolare il lavoro che occorre compiere per spostare una carica $q_0$ tra i punti $(\delta, 0, 0)$ e $(5\delta, 0, 0)$, entrambi compresi tra i due piani. Il problema si può risolvere sia utilizzando la definizione di lavoro che il legame che sussiste tra il lavoro e il potenziale.
2. Poniamo $\sigma_1 = -\sigma_2 > 0$. Al tempo $t = 0$ una carica $q_0 > 0$ si trova in $\vec{r} = (\delta, 0, 0)$ con velocità iniziale $\vec{v} = (v\_{0,x}, v\_{0,y}, v\_{0,z})$. Calcolare il tempo $t^*$ dopo il quale la carica tocca il secondo piano.

### Soluzione

1. Il campo generato da un piano indefinito (e quindi anche da più piani indefiniti) è uniforme e diretto (in questo caso) lungo $\hat{x}$, quindi il lavoro si può scrivere semplicemente come $W = F\Delta x = q_0 E \Delta x$. Lo spostamente è dato dalla differenza tra la posizione finale e quella iniziale, quindi:
$$
\Delta x = 5\delta - \delta = 4\delta
$$
Il campo totale che agisce per $0 < x < d$ è:
$$
\vec{E} = \frac{\sigma_1 - \sigma_2}{2\epsilon_0} \hat{x}.
$$
Il lavoro fatto è quindi:
$$
W = \frac{q_0(\sigma_1 - \sigma_2)}{2\epsilon_0} 4\delta = \frac{2\delta q_0(\sigma_1 - \sigma_2)}{\epsilon_0}
$$
Lo stesso risultato si può ottenere ricordando che $W = -q_0 \Delta V$, dove $\Delta V = V(4 \delta) - V(\delta)$.
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

## Esercizio 9

### Testo

Calcolare l'espressione del campo elettrostatico date le seguenti espressioni del potenziale:

1. $V(x, y, z) = A(xz - 2z^2)$
2. $V(x, y, z) = A(\cos{(kx)} + Bz - \log(y))$

### Soluzione

1. Deriviamo il potenziale:

\begin{align}
E_x & = -Az\\\\\\
E_y & = 0\\\\\\
E_z & = A(4z - x)
\end{align}

2. Deriviamo il potenziale:

\begin{align}
E_x & = -Ak\sin{(kx)}\\\\\\
E_y & = \frac{A}{y}\\\\\\
E_z & = - AB
\end{align}
