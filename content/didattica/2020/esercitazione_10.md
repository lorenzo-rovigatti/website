+++
title = "Esercitazione del 17/11/2020"
date = 2020-11-16T09:24:21+02:00
draft = false
+++

[Esercizio 40](#esercizio-40) -- [Esercizio 41](#esercizio-41) -- [Esercizio 42](#esercizio-42) -- [Esercizio 43](#esercizio-43) -- [Esercizio 44](#esercizio-44)

## Esercizio 40

### Testo

{{< figure src="../images/esercizio_40.png" width="400px">}}

Consideriamo uno spettrometro di massa costituito da un selettore di velocità seguito da una camera di deflessione. Il campo elettrico fra le placche del selettore di velocità ha modulo $E=2.5$ kV/m e direzione $\hat{x}$ (vedi disegno), mentre il campo magnetico nella camera di deflessione ha modulo $B_0=0.035$ T.  Per uno ione di carica $q=1.6 \times 10^{-19}$ C e $m=2.18 \times 10^{-26}$ Kg si misura un raggio della traiettoria $R = 0.28$ m. Determinare direzione, verso e modulo del campo magnetico presente nel selettore di velocità.

### Soluzione

Affinché l'effetto del campo magnetico controbilanci quello del campo elettrico, $\vec{B}$ deve essere diretto lungo $\hat{z}$.

Per trovare il modulo consideriamo che dal raggio di curvatura è possibile ottenere direttamente la velocità degli ioni, che vale

$$
v = \frac{rqB_0}{m} = 7.2 \times 10^{4} \, {\rm m/s}.
$$

Ricordando che in un selettore di velocità quest'ultima è data dal rapporto tra i moduli dei campi si trova

$$
B = \frac{E}{v} = 0.035 \, {\rm T}
$$

---

## Esercizio 41

### Testo

{{< figure src="../images/esercizio_41.png" width="400px">}}

Un piccolo fascio di ioni di carica $q = 1.6 \times 10^{-19}$ C e velocità iniziale nulla viene accelerato da una d.d.p. $\Delta V = 23$ V e penetra ortogonalmente in una camera a vuoto di uno spettrometro di massa. All'interno vi è un campo magnetico uniforme. Si nota che nello spettrometro il fascio si divide in due componenti: una colpisce la parete da cui sono entrati gli ioni ad una distanza $d_1 = 280$ mm, l'altra ad una distanza $d_2 = 392$ mm. Il primo fascio è composto da ioni sodio aventi $m_1 = 3.8 \times 10^{-26}$ Kg. 

1. Dato il disegno, determinare la direzione ed il verso del campo magnetico.
2. Calcolare la massa e la velocità del secondo tipo di ioni.

### Soluzione

1. Poiché $q > 0$, il campo deve essere entrante nel foglio.
2. La velocità degli ioni sodio si calcola dall'energia cinetica, che vale
$$
\frac{1}{2} m_1 v_1^2 = q\Delta V
$$
da cui si ottiene
$$
v_1 = \sqrt{\frac{2q\Delta V}{m_1}} = 1.4 \times 10^4 \, {\rm m / s}
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

## Esercizio 42

### Testo

{{< figure src="../images/esercizio_42.png" width="400px">}}

Una particella di carica $q = 50$ mC e massa $m = 20$ g entra al tempo $t = 0$ in una regione molto grande dove è presente un campo magnetico di intensità $B = 0.25$ T ortogonale alla sua velocità iniziale, di modulo $v = 8$ m/s.

1. Calcolare la distanza a cui la particella riesce dalla regione col campo magnetico.
2. Calcolare il tempo che la particella trascorre nella regione col campo magnetico.
3. Calcolare l'intensità e la direzione del campo elettrico che bisogna applicare per far sì che che la traiettoria della particella rimanga perpendicolare al campo.
4. Calcolare a che tempo bisognerebbe spegnere il campo magnetico per ottenere un angolo di $\theta = 30^\circ$ tra le velocità di entrata e di uscita.

### Soluzione

1. Poiché la traiettoria presa dalla particella è una circonferenza di raggio $r = mv / qB$, la distanza è data dal suo diametro, cioè:
$$
d = 2 r = \frac{2 m v}{qb} = 26 \, {\rm m}
$$

2. Il tempo trascorso nella regione col campo sarà metà del periodo del moto circolare uniforme, che vale $T = 2 \pi m / qB$, cioè:
$$
t = \frac{T}{2} = \frac{\pi m}{q B} = 5 \, {\rm s}
$$

3. La direzione del campo elettrostatico deve essere perpendicolare al campo magnetico, così da contrastare la forza di Lorentz. L'intensità si trova equagliando il modulo delle forze che ne risulterebbero, cioè:
$$
q E = q v B
$$
e quindi
$$
E = v B = 2 \, {\rm \frac{V}{m}}
$$

4. In un moto circolare uniforme la velocità angolare è costante ed è uguale all'angolo percorso nell'unità di tempo. Nel caso specifico di campo magnetico uniforme la velocità angolare vale

$$
\omega = qB / m
$$

e quindi si ha che, in funzione del tempo $t$, l'angolo vale

$$
\theta = \omega t
$$

da cui si ottiene

$$
t = \frac{\theta}{\omega} = \frac{\theta m}{q B}
$$

che, per $\theta = 30^\circ$, dà $t = 0.84$ s.

---

## Esercizio 43

### Testo

Sei fili conduttori sono tutti perpendicolari allo stesso piano e attraversati da correnti $i$ uguali in modulo ma diverse in verso, come indicato in figura.

{{< figure src="../images/esercizio_43.png" width="400px">}}

1. Calcolare la circuitazione del campo $\oint \vec{B} \cdot d\vec{s}$ lungo la linea chiusa percorsa nella direzione indicata dalle frecce.
2. Trovare, se esiste, un percorso chiuso tale per cui la circuitazione del campo valga $\oint \vec{B} \cdot d\vec{s} = -3 \mu_0 i$.
3. Trovare, se esiste, un percorso chiuso tale per cui la circuitazione del campo valga $\oint \vec{B} \cdot d\vec{s} = \mu_0 i /2$.

### Soluzione

1. Applichiamo la legge di Ampère. Notiamo subito che i fili $1$ e $5$ non sono concatenati al percorso e quindi danno un contributo nullo all'integrale. Per valutare i restanti dobbiamo applicare la regola della mano destra (o della vite) ai versi delle correnti per vedere se i loro contributi sono positivi o negativi. In tutti i casi indicati in figura il verso della linea chiusa è orario, e quindi correnti entranti danno contributo positivo e correnti uscenti danno contributo negativo. Si ha quindi:
$$
\oint \vec{B} \cdot d\vec{s} = \mu_0 (i_2 + i_4 - i_3 - i_6) = 0
$$
2. Si può prendere, ad esempio, un ovale che circondi i fili $1$, $4$ e $5$ e venga percorso in verso antiorario
3. Un percorso del genere non esiste, perché in questo sistema specifico non c'è modo di ottenere una somma di correnti che dia come risultato $i/2$.

---

## Esercizio 44 (non svolto a lezione)

### Testo

{{< figure src="../images/esercizio_44.png" width="300px">}}

Una spira rettangolare rigida di lati $a = 10$ cm e $b = 20$ cm ha una densità lineare di massa $\lambda_m = 0.05$ g/cm ed è percorsa da una corrente $i = 6$ A. Essa è posta inizialmente sul piano $xy$ con il lato a $y$ maggiori (lungo $a$) combaciante con l'asse $x$ e, in questa configurazione, la corrente scorre in verso antiorario. La spira può ruotare liberamente (senza attrito) intorno a quest'asse, mentre la forza peso agisce in direzione $-\hat{y}$. Determinare 

1. il modulo ed il verso del campo magnetico $\vec{B}$, uniforme e parallelo all'asse $y$, che produce una rotazione della spira verso $\hat{z}$ di $\theta_0 = 12^\circ = 0.209$ rad;
2. il lavoro compiuto dal campo sulla spira per produrre detta rotazione.

### Soluzione

1. Se la spira è in equilibrio quando forma un certo angolo $\theta$, significa che per questo valore dell'angolo i momenti meccanici presenti si equivalgono. Calcoliamoli rispetto all'asse $x$. Il fatto che la spira sia libera di ruotare rispetto al lato più in alto significa che quest'ultimo è fermo, e cioè non risente di eventuali forze presenti. Il momento magnetico sarà quindi dato dalla forza che agisce sull'altro lato di dimensione $a$, che vale
$$
\vec{F}_m = i a B \hat{x} \times \hat{y} = i a B \hat{z}
$$
e che, rispetto all'asse $x$, genera un momento meccanico magnetico
$$
\vec{M}_m = -i a b B \sin\left( \frac{\pi}{2} - \theta_0 \right) \hat{x}
$$
**Nota Bene:** data la definizione di $\theta$, il braccio del momento *non è* $\theta$ ma $\pi / 2 - \theta$ (disegnare il sistema di profilo per dimostrarlo!). D'altro canto, la forza peso vale in modulo $mg = 2\lambda_m (a + b) g$ ed è applicata a distanza $b / 2 \sin \theta_0$, quindi il suo momento rispetto ad $\hat{x}$ vale
$$
\vec{M}_g = \lambda_m (a + b)b g \sin \theta_0 \hat{x}
$$
I segni che abbiamo trovato considerando il verso di $\vec{B}$ parallelo a $\hat{y}$ sono corretti, perché così facendo si trova che i due momenti hanno verso opposto, e quindi effettivamente $\hat{B} = \hat{y}$. Eguagliando i moduli dei due momenti possiamo ricavare il modulo del campo:
$$
B = \frac{mg}{i}\frac{a + b}{a} \tan \theta_0  = 5.21 \cdot 10^{-3} \, {\rm T}.
$$

2. Il lavoro si ottiene integrando il momento meccanico tra $\theta = 0$ e $\theta = \theta_0$:

$$
W = iabB \int_0^{\theta_0} \cos \theta d\theta = iabB \sin \theta |_0^{\theta_0} = iabB \sin{\theta_0} = 1.3 \times 10^{-4} \, {\rm J}
$$
