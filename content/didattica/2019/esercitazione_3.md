+++
title = "Esercitazione del 09/10/2019"
date = 2019-10-08T09:47:43+02:00
draft = false
+++

[Esercizio 10](#esercizio-10) -- [Esercizio 11](#esercizio-11) -- [Esercizio 12](#esercizio-12) -- [Esercizio 13](#esercizio-13) -- [Esercizio 14](#esercizio-14)

## Esercizio 10

### Testo

{{< figure src="../images/esercizio_10.png" width="300px">}}

Tre cariche $q$ sono poste su tre vertici di un quadrato di lato $L$.

1. Qual è l'energia elettrostatica del sistema?
2. Calcolare l'espressione del lavoro $W$ compiuto dalla forza elettrostatica qualora una carica $q_0$ venisse posta sul quarto vertice del quadrato. Discuterne il segno e metterlo in relazione con il lavoro compiuto dalla forza esterna per compiere questa operazione.
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
2. Per calcolare il lavoro usiamo $W = -\Delta U_e$. L'energia iniziale è $U_e^i = 0$, perché la carica $q_0$ è inizialmente "all'infinito". L'energia finale invece vale:
$$
U_e^f = \frac{q_0 q}{2\pi \epsilon_0} \frac{1}{L} + \frac{q_0 q}{4\pi \epsilon_0} \frac{1}{\sqrt{2}L}
$$
E quindi il lavoro vale:
$$
W = -\left( \frac{q_0 q}{2\pi \epsilon_0} \frac{1}{L} + \frac{q_0 q}{4\pi \epsilon_0} \frac{1}{\sqrt{2}L} \right)
$$
Notiamo che $W$ è negativo se $q$ e $q_0$ hanno lo stesso segno e positivo altrimenti: se le cariche hanno lo stesso segno l'energia potenziale del sistema *aumenta* e quindi la forza elettrostatica ha direzione opposta allo spostamento (e viceversa). Il lavoro fatto dalla forza esterna per "costruire" il sistema ha invece segno opposto, $W\_{\rm ext} = - W$: se l'energia potenziale aumenta, la forza esterna (che è opposta a quella elettrostatica) e lo spostamento hanno lo stesso segno e viceversa.
3. Sostituiamo i numeri nell'equazione precedente e troviamo
$$
W = 9.732 \times 10^{-4}\,\mathrm{J}
$$
**Nota Bene:** il lavoro ha le stesse unità di misura dell'energia (perché?) e quindi si misura in Joule (J).

---

## Esercizio 11

{{< figure src="../images/esercizio_11.png" width="600px">}}

### Testo

Un dipolo elettrico di momento di dipolo $\vec{p}$ e momento di inerzia $I$ è immerso in un campo elettrico uniforme $\vec{E}$. Il dipolo è inizialmente fermo in una posizione in cui $\vec{p}$ forma un angolo $\theta$ con $\vec{E}$. Al tempo $t = 0$ il dipolo viene lasciato libero di ruotare.

1. Calcolare la velocità angolare $\omega$ del dipolo quando l'angolo formato col campo vale $0$. Suggerimento: utilizzare la conservazione dell'energia.
2. Il dipolo viene bloccato nell'istante in cui è allineato col campo ($\theta = 0$). Qual è la sua energia elettrostatica se si pone  un altro dipolo di momento $\vec{p}$ (avente cioè la stessa orientamento e lo stesso valore del momento di dipolo) ad una distanza $x$ lungo la direzione data dai momenti di dipolo.

### Soluzione

1. L'energia potenziale di un dipolo in un campo vale $U_e = -\vec{p} \cdot \vec{E}$, mentre l'energia cinetica di un corpo che ruota è data da $U_k = \frac{1}{2} I \omega^2$. Scriviamo l'espressione dell'energia totale iniziale e finale ed imponiamo che il suo valore si conservi:
$$
-p E \cos{(\theta)} = -pE + \frac{1}{2} I \omega^2
$$
da cui si ottiene:
$$
\omega = \sqrt{\frac{2pE(1 - \cos{(\theta))}}{I}}
$$
2. L'energia elettrostatica del dipolo è $U_e = -\vec{p} \cdot (\vec{E} + \vec{E}_d)$, dove $\vec{E}$ è il campo uniforme e $\vec{E}_d$ è il campo generato dal secondo dipolo. Poiché i due dipoli sono paralleli e disposti uno dietro l'altro, il campo generato dal secondo dipolo nel punto in cui si trova il primo vale:
$$
\vec{E}_d = \frac{\vec{p}}{2\pi\epsilon_0} \frac{1}{x^3}
$$
E quindi l'energia potenziale totale è data da
$$
U_e = -Ep - \frac{p^2}{2\pi\epsilon_0} \frac{1}{x^3}
$$

---

## Esercizio 12
<small>Esempio 3.4 del MNV</small>

### Testo

Utilizzare il teorema di Gauss per calcolare il campo elettrostatico generato da un piano indefinito caricato uniformemente con densità superficiale di carica $\sigma$.

### Soluzione

{{< figure src="../images/esercizio_12.png" width="500px">}}

La superficie che scegliamo è un cilindro di raggio $R$ e lunghezza $2x$ centrato sul piano e avente l'asse di simmetria ortogonale al piano (cioè orientato lungo $\hat{x}$ nella figura sopra). Per simmetria il campo deve essere diretto lungo l'asse del cilindro, e quindi il flusso attraverso la superficie laterale del cilindro è nullo ($\vec{E} \cdot \hat{n} = 0$). Resta da calcolare il flusso lungo le due basi. Poiché i due contributi devono essere uguali per simmetria (provate a ruotare tutto il sistema di $180^\circ$, cosa cambia?), possiamo direttamente scrivere:

$$
2 \pi R^2 E(x) = \frac{1}{\epsilon_0} \int\_{\tau(r )} dq
$$

Poiché abbiamo a che fare con una densità superficiale costante, la carica totale non è altro che la densità per la superficie, e quindi $2 \pi R^2 E(x) = \frac{\sigma}{\epsilon_0} \pi R^2$. Risolvendo per il campo (e notando che questo non dipende da $x$), si trova

$$
E = \frac{\sigma}{2\epsilon_0}
$$

---

## Esercizio 13
<small>Esempi 3.1 e 3.2 del MNV</small>

### Testo

Calcolare (e disegnare) il campo elettrostatico generato in *tutto* lo spazio da una sfera di raggio $R$ caricata con carica $q$ distribuita

1. con densità superficiale di carica $\sigma$;
2. uniformemente con densità di carica $\rho$;
3. con densità di carica $\rho(r ) = Ar^2$.

### Soluzione

L'esercizio si risolve utilizzando il teorema di Gauss. Poiché in tutte e tre i casi abbiamo a che fare con distribuzioni di simmetria sferica, applichiamo il teorema su superfici sferiche di raggio $r$ e concentriche alla sfera carica. Poiché la simmetria è radiale, il campo calcolato è sempre parallelo alla normale delle superfici ed ha sempre lo stesso modulo su ogni punto. Possiamo quindi riscrivere l'integrale del flusso come:

$$
\oint\_{\Sigma( r)} \vec{E} \cdot \hat{n} dS = \oint\_{\Sigma( r)} E(r ) dS = 4\pi r^2 E( r)
$$

Applichiamo il teorema di Gauss:

$$
4\pi r^2 E(r ) = \frac{1}{\epsilon_0} \int\_{\tau(r )} dq
$$

Dove $\tau(r )$ indica il volume racchiuso dalla superficie sferica (e cioè una sfera di raggio $r$). Per risolvere l'esercizio dobbiamo calcolare l'integrale a destra per le diverse distribuzioni e per tutte le distanze

1. Nel caso di densità superficiale, abbiamo
\begin{align}
4\pi r^2 E(r ) & = 0 & \mathrm{per}\quad r < R\\\\\\
4\pi r^2 E(r ) & = \frac{q}{\epsilon_0} & \mathrm{per}\quad r \geq R
\end{align}
Perché se $r < R$ le superfici sferiche non contengono alcuna carica, mentre per $r \geq R$ le superfici sferiche contengono *tutta* la carica $q$. Invertendo le relazioni appena scritte si trova
\begin{align}
E(r ) & = 0 & \mathrm{per}\quad r < R\\\\\\
E(r ) & = \frac{q}{4\pi \epsilon_0 r^2} & \mathrm{per}\quad r \geq R
\end{align}
**Nota Bene:** La seconda relazione (cioè l'espressione del campo per $r \geq R$), è valida qualunque sia la distribuzione di carica, purché abbia simmetria sferica.
2. Dobbiamo calcolare come varia il campo all'interno della sfera (perché all'esterno l'espressione è la stessa di quella di un campo generato da una carica puntiforme). L'espressione per l'integrale del flusso attraverso una superficie sferica di raggio $r$ non cambia. Cambia invece il membro di destra, per il quale si ha (per $r < R$)
$$
\frac{1}{\epsilon_0} \int\_{\tau(r )} dq = \frac{1}{\epsilon_0} 4 \pi \int_0^r \rho r'^2 dr' = \frac{1}{\epsilon_0} \frac{4}{3}\pi r^3 \rho
$$
Sostituendo il membro di sinistra calcolato prima si trova (per $r < R$)
$$
E(r ) = \frac{\rho r}{3 \epsilon_0}
$$
3. Ripetiamo la stessa procedura, con la differenza che ora $\rho$ non è costante ma dipende da $r$ e quindi non si può tirare fuori dall'integrale:
$$
\frac{1}{\epsilon_0} \int\_{\tau(r )} dq = \frac{1}{\epsilon_0} 4 \pi \int_0^r Ar'^2 r'^2 dr' = \frac{1}{\epsilon_0} \frac{4}{5}\pi r^5 A
$$
e quindi
$$
E(r ) = \frac{A r^3}{5 \epsilon_0}
$$

---

## Esercizio 14
<small>Esempio 2.6 del MNV</small>

### Testo

{{< figure src="../images/esercizio_5.png" width="80px">}}

1. Calcolare il potenziale elettrostatico generato da una carica $q$ uniformemente distribuita su di un anello sottile di raggio $R$ in un generico punto $\vec{P} = (x_0, 0, 0)$ del suo asse.
2. Verificare che l'espressione di $E_x$ calcolata a partire dal potenziale coincide con quella calcolata esplicitamente.

### Soluzione

1. La densità di carica lineare vale $\lambda = \frac{q}{2\pi R}$ e si ha $dq = \lambda dl$. Ogni elementino di carica genera un potenziale in $\vec{P}$ pari a
$$
dV = \frac{dq}{4\pi\epsilon_0}\frac{1}{\sqrt{R^2 + x_0^2}} = \frac{\lambda dl}{4\pi\epsilon_0} \frac{1}{\sqrt{R^2 + x_0^2}}
$$
Per ottenere il potenziale totale integriamo su tutto l'anello:
$$
V = \frac{\lambda}{4\pi\epsilon_0} \frac{1}{\sqrt{R^2 + x_0^2}} \int_0^{2\pi R} dl = \frac{q}{4\pi\epsilon_0}\frac{1}{\sqrt{R^2 + x_0^2}}
$$
**Nota Bene:** questa espressione è valida *unicamente* sull'asse dell'anello (perché?)

2. Possiamo scrivere $E_x$ come derivata del potenziale elettrostatico:
$$
E_x = -\frac{\partial V}{\partial x} = \frac{q}{4\pi\epsilon_0}\frac{x_0}{\left( R^2 + x_0^2 \right)^{3 /2}}
$$
Questa espressione coincide con quella calcolata esplicitamente.
