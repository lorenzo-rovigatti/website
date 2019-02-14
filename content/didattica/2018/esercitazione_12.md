+++
title = "Esercitazione 22/11/2018"
date = 2018-11-22T12:24:21+02:00
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

[Esercizio 46](#esercizio-46) -- [Esercizio 47](#esercizio-47) -- [Esercizio 48](#esercizio-48)
## Esercizio 46

### Testo

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
U_e = - \vec{m} \cdot \vec{B} = - m B \cos(\theta)
$$
dove $\vec{m} = i \Sigma \hat{n}$ è il momento di dipolo magnetico della spira. In questo caso $\Sigma = \pi R^2$, quindi l'energia totale vale
$$
U = \frac{1}{2} I \omega^2 - i \Sigma B \cos(\theta).
$$
Quando $\theta = 0$ l'energia potenziale è minima e quindi quella cinetica è massima. In questo caso l'energia totale vale
$$
U_0 = \frac{1}{2} I \omega_0^2 - i \Sigma B
$$
e il suo valore può essere calcolato dai dati del problema. Quando $\omega = \omega_0 / 3$, si ha:
$$
U_0 = \frac{1}{18} I \omega_0^2 - i \Sigma B \cos(\theta)
$$
da cui si può ricavare il valore di $\cos(\theta)$:
$$
\cos(\theta) = \frac{1}{i \Sigma B} \left(\frac{1}{18} I \omega_0^2 -  U_0 \right).
$$

2. L'angolo per cui $\omega = 0$ si trova imponendo
$$
U_0 = - i \Sigma B \cos(\theta\_{\rm max})
$$
da cui si ottiene
$$
\theta\_{\rm max} = \arccos\left(- \frac{U_0}{i \Sigma B} \right)
$$
Il momento meccanico di una molla angolare vale, in generale $M = k \theta$. La condizione di equilibrio si impone eguagliando i due momenti meccanici,
$$
k \theta\_{\rm max} = i \Sigma B \sin(\theta\_{\rm max}),
$$
per cui il valore della costante elastica che assicura che la spira resti ferma è
$$
k = \frac{i \Sigma B \sin(\theta\_{\rm max})}{\theta\_{\rm max}}
$$
che, nel limite di piccoli angoli (per cui $\sin(\theta) \to \theta$), vale
$$
k = i \Sigma B
$$

---

## Esercizio 47

### Testo

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

## Esercizio 48

### Testo

Un sistema è formato da due conduttori sferici concentrici. Il conduttore interno è pieno e ha raggio
$a = 20$ cm, quello esterno è cavo e ha raggio interno $b = 30$ cm ed esterno $c = 35$ cm. Lo spazio compreso tra i due conduttori è riempito da un dielettrico la cui costante dipende dalla distanza $r$ dal centro secondo la relazione $\kappa(r ) = r/a$. Il conduttore interno ha carica $q = 10$ nC, mentre quello esterno è mantenuto ad una d.d.p. $\Delta V = 500$ V rispetto all'infinito . Determinare:

1. il valore della carica sulle tre superfici conduttrici;
2. le cariche superficiali di polarizzazione presenti sulle superfici del dielettrico;
3. Il conduttore interno viene ora collegato con quello esterno, mantenendo inalterate le altre condizioni. Determinare i nuovi valori delle cariche sulle tre superfici conduttrici.

### Soluzione

1. La carica sulla superficie più interna è $q_a = q$, e quindi $q_b = -q$ per induzione completa. La superficie più esterna ha una carica determinata dalla differenza di potenziale a cui è posta:
$$
\Delta V = \frac{q_c}{4 \pi \epsilon_0 c}
$$
quindi
$$
q_c = 4 \pi \epsilon_0 c \Delta V = 19.5 \, {\rm nC}.
$$
Il fatto che il conduttore sia mantenuto ad una certa d.d.p., quindi, fa sì che una quantità di carica $q_c - q = 9.5$ nC si trasferisca sulla sua superficie più esterna.
2. All'interno della cavità il campo vale
$$
E( r) = \frac{q}{4 \pi \epsilon_0 \kappa( r) r^2}
$$
e quindi il vettore polarizzazione ha modulo
$$
P(r ) = \epsilon_0 ( \kappa(r ) - 1 ) E(r ) = \frac{q (r - a)}{4 \pi r^3}.
$$
Possiamo ora calcolare le densità di carica di polarizzazione usando la relazione $\sigma_p = \vec{P}(r ) \cdot \hat{n}$:
\begin{align}
\sigma_p(a) & = 0\\\\\\
\sigma_p(b) & = P(b ) = 2.95 \, {\rm nC / m^2}
\end{align}
3. Se i due conduttori vengono collegati, le cariche sulle due superfici interne si cancellano e quindi si avrà $q(a) = q(b) = 0$. D'altro canto, il conduttore più esterno è ancora posto ad una d.d.p. rispetto all'infinito, e quindi la sua carica non varia, risultando ancora $q_c = 19.5$ nC.

---