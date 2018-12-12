+++
title = "Esercitazione 12/12/2018"
date = 2018-12-12T12:24:21+02:00
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

[Esercizio 56](#esercizio-56) -- [Esercizio 57](#esercizio-57) -- [Esercizio 58](#esercizio-58)

## Esercizio 56

### Testo

Una spira rettangolare è posta su di un piano inclinato di $\pi / 6 = 30^\circ$. Uno dei due lati orizzontali (lunghi $l = 50$ cm) è fisso a terra, mentre l'altro è costituito da una barra conduttrice di massa $m = 0.1$ kg che può scivolare senza attriti sul piano. Il circuito è immerso in un campo magnetico $\vec{B} = -B_0 \hat{y}$, dove $B_0 = 0.8$ T e $\hat{y}$ è la direzione verticale con verso uscente dal piano. 
Determinare verso e intensità della corrente $i$ che deve scorrere nel circuito per far sì che la sbarra resti ferma in posizione. 

### Soluzione

La forza peso agente sulla sbarra conduttrice è $\vec{F}_p = -mg\hat{y}$. La componente $F_p \cos(\theta)$ è bilanciata dalla reazione vincolare del piano, mentre la componente $F_p \cos(\theta)$ tenderà a far scivolare la sbarra verso terra lungo il piano. Per avere una situazione di equilibrio dobbiamo generare una forza magnetica che vada in direzione opposta (cioè in direzione $\hat{x}$. Scriviamo quale sarebbe l'espressione della forza se la corrente scorresse nella barra lungo il verso di $-\hat{z}$:

$$
\vec{F}_m = i \vec{l} \times \vec{B} = -i l \hat{z} \times (-B_0 \hat{y}) = -i l B_0 \hat{x}.
$$

Poiché in questo caso la forza sarebbe diretta lungo la stessa direzione della forza peso, è chiaro che dobbiamo considerare il verso opposto della corrente, e cioè $\vec{l} = l\hat{z}$. Guardando il circuito dal semi-asse delle $y$ positive, questo significa che la corrente deve scorrere in senso orario.

Per trovare l'intensità della corrente eguagliamo i moduli delle due forze lungo la direzione del piano. Come per la forza peso, anche parte della forza magnetica ($F_m \sin(\theta)$) è bilanciata dalla reazione vincolare, per cui le due componenti da eguagliare sono

$$
mg \cos(\theta) = i l B_0 \sin(\theta)
$$

da cui otteniamo l'intensità di corrente come

$$
i = \frac{mg}{l B_0} \tan(\theta) \approx 1.4 \, {\rm A}
$$

---

## Esercizio 57
<small>Ispirato all'esempio 7.5 del MNV</small>

### Testo

Un solenoide toroidale composto da $N$ spire in cui scorre una corrente $i$ è riempito con un materiale avente permeabilità magnetica relativa $\kappa_m$. 

1. Calcolare i campi $\vec{H}$, $\vec{B}$ ed $\vec{M}$ presenti nel suo interno.
2. Calcolare la corrente di magnetizzazione.

### Soluzione

1. Usando la legge di Ampère abbiamo già visto che, nel vuoto, il campo magnetico generato da un solenoide toroidale è nullo all'esterno mentre all'interno ha modulo costante e direzione tangente alle circonferenze di raggio $r$. In particolare, il modulo vale
$$
B_0 = \frac{\mu_0 N i}{2 \pi r}.
$$
Quando è pieno possiamo applicare la legge di Ampère per il vettore $\vec{H}$:
$$
\oint \vec{H} \cdot d\vec{s} = 2 \pi r H = N i
$$
da cui si ottiene
$$
H = \frac{N i}{2 \pi r}.
$$
Il campo magnetico vale quindi
$$
B = \mu H = \frac{\mu N i}{2 \pi r}
$$
Per quanto riguarda la magnetizzazione, si trova 
$$
M = \chi_m H = \frac{\chi_m N i}{2 \pi r}
$$

2. La corrente di magnetizzazione si può trovare in diversi modi. Ad esempio, si può considerare la circuitazione del vettore magnetizzazione:

$$
i_m = \oint \vec{M} \cdot d\vec{s} = M 2 \pi r = \chi_m N i
$$

oppure si può calcolare dalla relazione generale ottenuta dalle considerazioni microscopiche:

$$
\vec{j}_m = \vec{M} \times \hat{n}
$$

che, poiché $\vec{M}$ e $\hat{n}$ sono ortogonali, diventa

$$
j_m = M.
$$

Ricordando che $j_m$ è una densità di corrente *lineare*, vale 

$$
i_m = 2 \pi r j_m = 2 \pi r M = \chi_m N i
$$

---

## Esercizio 58
<small>Seconda parte dell'esercizio 51</small>

### Testo

Due fili conduttori molto lunghi orientati lungo l'asse $z$ sono posti a distanza $2a = 4$ cm lungo $x$. Nei fili scorre la corrente $i = 50$ A in verso antiorario. Prendendo come origine degli assi il punto equidistante tra i due fili,

1. Calcolare il campo magnetico lungo $\hat{x}$
2. Calcolare il campo magnetico lungo $\hat{y}$

### Soluzione

1. Applicando la legge di Biot-Savart i due fili generano i seguenti campi magnetici lungo l'asse $x$:
\begin{align}
\vec{B}_s(x, 0, 0) & = \frac{\mu_0 i}{2 \pi} \frac{\hat{y}}{x + a}\\\\\\
\vec{B}_d(x, 0, 0) & = \frac{\mu_0 i}{2 \pi} \frac{\hat{y}}{x - a}
\end{align}
**Nota Bene:** fate molta attenzione al segno del campo! Questo cambia a seconda che ci si trovi alla sinistra o alla destra del filo. Per il principio di sovrapposizione, il campo totale è semplicemente la somma dei due, quindi:
$$
\vec{B}(x, 0, ,0) = \frac{\mu_0 i \hat{y}}{2 \pi} \left( \frac{1}{x + a} + \frac{1}{x - a} \right)
$$

2. Poiché i campi hanno lo stesso verso, lungo l'asse $y$ le componenti $y$ sono uguali e contrarie e quindi si cancellano. Il campo sarà quindi dato da $\vec{B} = 2 B_x \hat{x}$. Per trovare il valore di $B_x$ disegniamo $\vec{B}$ e vediamo che $B_x = B \cos(\theta)$, dove 
$$
\cos(\theta) = \frac{a}{r} = \frac{a}{\sqrt{a^2 + y^2}}
$$
e quindi il campo vale
$$
\vec{B}(0, y, 0) = \frac{\mu_0 i}{\pi}\frac{a}{a^2 + y^2}\hat{x}
$$
