+++
title = "Esercitazione del 25/11/2020"
date = 2020-11-23T09:24:21+02:00
draft = false
+++

[Esercizio 45](#esercizio-45)

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
