+++
title = "Esercitazione del 25/11/2020"
date = 2020-11-23T09:24:21+02:00
draft = false
+++

[Esercizio 45](#esercizio-45) -- [Esercizio 46](#esercizio-46) -- [Esercizio 47](#esercizio-47)

## Esercizio 45
<small>Ispirato all'esercizio 7.1 del MNV</small>

### Testo

{{< figure src="../images/esercizio_45.png" width="400px">}}

Due fili conduttori molto lunghi orientati lungo l'asse $z$ sono posti a distanza $2a = 4$ cm lungo $x$. Nei fili scorre la stessa corrente $i = 50$ A ma in verso opposto (vedi figura). Prendendo come origine degli assi il punto equidistante tra i due fili,

1. Calcolare il campo magnetico lungo $\hat{x}$
2. Calcolare il campo magnetico lungo $\hat{y}$
3. Calcolare il valore per $y = a$.
4. Determinare come cambierebbero queste risposte se le due correnti scorressero nello stesso verso.

### Soluzione

1. La corrente che scorre nel filo alla sinistra dell'origine è uscente, mentre l'altra è entrante. Il modulo del campo è sempre dato da $\mu_0 i / 2 \pi$, mentre il suo verso è determinato da $\hat{t} \times \hat{r}$, dove $\hat{t}$ è il versore tangente al filo nella direzione della corrente e $\hat{r} = \vec{r} / r$, dove $\vec{r}$ è il vettore che connette la sorgente di campo (e quindi il filo) al punto dove lo calcoliamo. Utilizzando queste relazioni troviamo che i due fili (di sinistra e di destra) genereranno i seguenti campi magnetici lungo l'asse $x$:
\begin{align}
\vec{B}_s(x, 0, 0) & = \frac{\mu_0 i}{2 \pi} \frac{\hat{y}}{x + a}\\\\\\
\vec{B}_d(x, 0, 0) & = -\frac{\mu_0 i}{2 \pi} \frac{\hat{y}}{x - a}
\end{align}
**Nota Bene:** fate molta attenzione al segno del campo! Questo cambia a seconda che ci si trovi alla sinistra o alla destra del filo. Per il principio di sovrapposizione, il campo totale è semplicemente la somma dei due, quindi:
$$
\vec{B}(x, 0, 0) = \frac{\mu_0 i \hat{y}}{2 \pi} \left( \frac{1}{x + a} - \frac{1}{x - a} \right)
$$

2. Poiché i campi hanno verso opposto, lungo l'asse $y$ le componenti $x$ sono uguali e contrarie e quindi si cancellano. Il campo sarà quindi dato da $\vec{B} = 2 B_y \hat{y}$. Per trovare il valore di $B_y$ disegniamo $\vec{B}$ e vediamo che $B_y = B \sin \theta$, dove 
$$
\sin \theta = \frac{a}{r} = \frac{a}{\sqrt{a^2 + y^2}}
$$
e quindi il campo vale
$$
\vec{B}(0, y, 0) = \frac{\mu_0 i}{\pi}\frac{a}{a^2 + y^2}\hat{y}
$$
Lo stesso risultato si può ottenere calcolando in maniera più meccanica il campo generato dal filo utilizzando i versori come fatto per il punto precedente (e a lezione).

3. Sostituendo i valori noti nella relazione appena calcolata si trova
$$
B(0, a, 0) = 5 \times 10^{-4} \, {\rm T} = 5 \, {\rm G}
$$

4. Se le correnti scorressero nello stesso verso, anche i due campi sarebbero orientati nella stessa maniera. Prendiamo entrambe le correnti uscenti. Lungo l'asse $x$ si avrebbe quindi
$$
\vec{B}(x, 0, 0) = \frac{\mu_0 i \hat{y}}{2 \pi} \left( \frac{1}{x + a} + \frac{1}{x - a} \right),
$$
mentre lungo l'asse $y$ la componente $B_y$ avrebbe due contributi uguali e contrari, per cui si avrebbe
$$
B_y(0, y, 0) = 0.
$$
D'altro canto, le componenti $x$ dei due campi in questo caso si sommerebbero, per cui si avrebbe $\vec{B} = 2B_x \hat{x}$. Le componenti $x$ si trovano con una costruzione analoga a quella fatta prima con $B_x = B \cos \theta$, dove
$$
\cos \theta = \frac{y}{r} = \frac{y}{\sqrt{a^2 + y^2}}
$$
e quindi
$$
\vec{B}(0, y, 0) = -\frac{\mu_0 i}{\pi}\frac{y}{a^2 + y^2}\hat{x}
$$

---

## Esercizio 46

### Testo

{{< figure src="../images/esercizio_46.png" width="300px">}}

Sei lunghi fili complanari percorsi da una corrente $i = 1$ A sono disposti in modo tale da delimitare una regione esagonale di lato $l = 10$ cm (vedi regione grigia in figura). Il verso delle correnti porta a percorrere l'esagono in senso orario. Determinare verso e intensità della componente di $\vec{B}$ perpendicolare al piano nel centro dell'esagono.

### Soluzione

Usando la regola della mano destra (o della vite) si trova che i campi generati singolarmente dai fili nel centro dell'esagono sono sempre entranti nel piano. Per ragioni di simmetria le intensità dei campi nel centro saranno tutte uguali e, in particolare, saranno dati dalla legge di Biot-Savart, $B_s = \frac{\mu_0 i}{2 \pi r}$, dove $r$ è la distanza dal centro. Questa si può calcolare disegnando il sistema e notando che 

$$
r = \frac{l}{2} \frac{1}{\tan(\theta)}
$$

dove $\theta = \pi / 6$ è metà dell'angolo che sottende ogni lato e che, in un esagono, vale $60^\circ = \pi / 3$. Sostituendo nella relazione precedente si trova

$$
B = 6 B_s = 6\frac{\mu_0 i}{2 \pi r} = 12\frac{\mu_0 i}{2 \pi l} \tan\left( \frac{\pi}{6} \right) = 13.86 \, {\rm \mu T}
$$

---

## Esercizio 47

### Testo

{{< figure src="../images/esercizio_47.png" width="600px">}}

Una spira rettangolare indeformabile di dimensioni $a = 40$ cm e $b = 1$ m e massa $m = 1$ g è parallela ad un filo (fisso e parallelo all'asse $x$) e posta ad una distanza $d = 1$ cm da esso (vedi figura). Nel filo scorre una corrente $i_f = 30$ A verso destra ($x$ crescenti). La forza peso $\vec{F}_p$ agisce nella direzione indicata in figura. Quando nella spira scorre una corrente $i$ il sistema è in equilibrio e la spira rimane sospesa.

1. Determinare verso e intensità di $i$.
2. Si aggiunge nella regione di spazio in figura un campo magnetico uniforme uscente dal foglio e di intensità $B_{\rm add} = 1$ T. Quale deve essere il nuovo valore di $i$ per far sì che il sistema rimanga in equilibrio?

### Soluzione

1. Il campo magnetico generato dal filo è entrante nella regione di spazio in cui è presente la spira, e il suo modulo vale
$$
B(r ) = \frac{\mu_0 i_f}{2 \pi r},
$$
dove r è la distanza tra il filo e il punto in cui si calcola il campo. Il verso di $i$ deve essere tale per cui la forza magnetica $F_m$ che il circuito sente sia contrapposta alla forza peso. In questo caso $F_m$ ha due contributi dati dalle due porzioni di spira parallele al filo. Il contributo dato dal filo più in alto è più forte, poiché lì il campo è maggiore (poiché $r$ è minore), quindi deve essere quello che determina il verso della corrente. Per far sì che si generi una forza verso l'alto, $i$ deve scorrere lungo $\hat{x}$ in questa parte di spira. Ne consegue che $i_s$ scorre in senso orario.
Affinché la spira sia in equilibrio, le intensità della forza peso e di quella magnetica devono essere uguali. La forza peso vale semplicemente $mg$. Quella magnetica è dovuta alla presenza del campo magnetico e ha due contributi dovuti alle due parti di spira parallele all'asse $x$, che si sommano direttamente poiché hanno la stessa direzione:
$$
F_m = i b B(d) + i b B(d + a) = i b \frac{\mu_0 i_f}{2 \pi} \left( \frac{1}{d} - \frac{1}{d + a}\right).
$$
Uguagliando le due forze si ottiene
$$
 \frac{\mu_0 i_f}{2 \pi} i b \left( \frac{1}{d} - \frac{1}{d + a} \right) = mg
$$
e risolvendo per i:
$$
i = \frac{2\pi mg}{\mu_0 i_f} \frac{d(d + a)}{a} = 16.8 \, {\rm A}
$$
2. La risposta non cambia, perché la forza totale agente sulla spira non risente di un campo omogeneo (perché?).
