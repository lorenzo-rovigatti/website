+++
title = "Esercitazione del 07/11/2019"
date = 2019-11-04T09:24:21+02:00
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

Una spira rettangolare indeformabile di dimensioni $a = 40$ cm e $b = 1$ m e massa $m = 1$ g è parallela all'asse $x$ e posta ad una distanza $d = 1$ cm da esso (vedi figura). Nella regione è presente un campo magnetico diretto lungo $-\hat{z}$ di modulo $B(y) = A / y$, con $ A = 6 \times 10^{-6}$ T/m.  La forza peso $\vec{F}_p$ agisce nella direzione indicata in figura. Quando nella spira scorre una corrente $i$ il sistema è in equilibrio e la spira rimane sospesa.

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
i = \frac{mg}{A} \frac{d(d + a)}{a} = 16.8 \, {\rm A}
$$
2. La risposta non cambia, perché la forza totale agente sulla spira non risente di un campo omogeneo (perché?).

---

## Esercizio 39

### Testo

{{< figure src="../images/esercizio_39.png" width="400px">}}

Un piccolo fascio di ioni di carica $q = 1.6 \times 10^{-19}$ C e velocità iniziale nulla viene accelerato da una d.d.p. $\Delta V = 23$ V e penetra ortogonalmente in una camera a vuoto di uno spettrometro di massa. All'interno vi è un campo magnetico uniforme. Si nota che nello spettrometro il fascio si divide in due componenti: una colpisce la parete da cui sono entrati gli ioni ad una distanza $d_1 = 280$ mm, l'altra ad una distanza $d_2 = 392$ mm. Il primo fascio è composto da ioni sodio aventi $m = 3.8 \times 10^{-26}$ Kg. Calcolare la massa e la velocità del secondo tipo di ioni.

### Soluzione

La velocità degli ioni sodio si calcola dall'energia cinetica, che vale

$$
\frac{1}{2} m_i v_i^2 = q\Delta V
$$

da cui si ottiene

$$
v_i = \frac{2q\Delta V}{m} = 1.4 \times 10^4 \, {\rm m / s}
$$

I raggi di curvatura delle due traiettorie sono

\begin{align}
R_1 & = \frac{1}{2} d_1 = 140 \, {\rm mm}\\\\\\
R_2 & = \frac{1}{2} d_2 = 196 \, {\rm mm}
\end{align}

e, per la legge del moto uniformemente accelerato, vale

$$
q B = \frac{m_1 v_1}{R_1} = \frac{m_1 v_2}{R_2}
$$

d'altro canto, l'energia cinetica iniziale è la stessa per entrambi i fasci, e quindi

$$
\frac{1}{2} m_1 v_1^2 = \frac{1}{2} = m_2 v_2^2.
$$

Abbiamo due equazioni in due incognite. Risolvendo il sistema otteniamo

\begin{align}
m_2 & = m_1 \left(\frac{R_2}{R_1}\right)^2 = 7.44 \times 10^{-26}\\\\\\
v_2 & = v_1 \frac{R_1}{R_2} = 10^4\, {\rm m / s}
\end{align}

---
