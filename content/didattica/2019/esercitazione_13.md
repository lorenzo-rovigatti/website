+++
title = "Esercitazione del 03/12/2019"
date = 2019-11-30T12:24:21+02:00
draft = false
+++

[Esercizio 53](#esercizio-53) -- [Esercizio 54](#esercizio-54) -- [Esercizio 55](#esercizio-55) -- [Esercizio 56](#esercizio-56) -- [Esercizio 57](#esercizio-57)

## Esercizio 53

### Testo

{{< figure src="../images/esercizio_53.png" width="500px">}}

Una spira quadrata rigida, di lato $l = 12$ cm e resistenza $R = 25\, \Omega$, viene trascinata con velocità orizzontale *costante*, $v=3$ m/s. La spira entra in una zona di larghezza $d = 2l$ in cui è presente un campo magnetico $B
= 4.5$ T ortogonale alla spira ed uscente dal piano del disegno.
Determinare:

1. il verso della corrente indotta nella spira nelle varie fasi del moto;
2. in quali regioni agisce una forza sulla spira, il suo verso ed intensità;
3. l'energia totale dissipata nella resistenza dopo che la spira è completamente uscita dalla zona con campo magnetico;
4. la carica che globalmente ha fluito lungo la spira.

### Soluzione

1. La corrente scorrerà solo in quelle regioni di spazio nelle quali il flusso del campo magnetico attraverso la spira sta variando. Questo avviene quando la spira entra ed esce dalla regione di campo. Per la legge di Lenz la corrente che scorre in un conduttore per effetto dell'induzione elettromagnetica si oppono sempre alla variazione di flusso. Quando la spira entra nella regione in cui è presente il campo, il flusso aumenta e quindi la corrente deve essere tale da generare un campo magnetico che si opponga al campo già presente. Considerando che il campo è uscente, la corrente dovrà quindi scorrere in senso orario per generare un campo entrante. Quando la spira esce, il flusso diminuisce e quindi la corrente dovrà scorrere in senso antiorario, così da generare un campo parallelo a quello presente, tendendo così a contrastare la variazione di flusso. L'intensità della corrente è in entrambi i casi
$$
i = \frac{\mathcal{E}_i}{R} = \frac{l B v}{R}
$$
2. Ragionando come sopra, la forza agisce solo quando vi è una variazione di flusso, quindi quando la spira entra ed esce dalla regione in cui è presente il campo. Quando la spira entra, la forza sul lato di destra non è bilanciata dal lato opposto (che non sente ancora l'effetto del campo magnetico) e quindi la spira sentirà una forza magnetica
$$
\vec{F} = i\vec{l} \times \vec{B}.
$$
Poiché la corrente scorre in verso orario (vedi sopra), in quel lato $\vec{l}$ è diretto verso il basso, e quindi la forza risultante varrà
$$
\vec{F} = - \frac{l^2 B^2 \vec{v}}{R}
$$
che ha modulo $F = 35$ mN.
Quando la spira esce, solo il lato di sinistra risente del campo magnetico. Ragionando come sopra, ma considerando che ora la corrente scorre in verso antiorario, si trova di nuovo
$$
\vec{F} = - \frac{l^2 B^2 \vec{v}}{R}
$$
che quindi ha stessi modulo, direzione e verso di prima.
3. In generale il lavoro è dato da
$$
W = \int_s \vec{F} \cdot d\vec{s},
$$
dove $s$ è lo spostamento fatto. in questo caso l'espressione della forza è quella trovata precedentemente, che è costante quando diversa da 0, mentre lo spostamento è nella direzione del moto, quindi antiparallelo alla forza stessa. $F$ è diversa da 0 unicamente quando la spira entra ed esce dalla regione di campo, e questo avviene per una lunghezza $l$ in entrambi i casi. Lo spostamento totale è quindi $s = 2l$, quindi il lavoro vale
$$
W = - 2 F l = 8.4\, {\rm mJ}
$$
4. Abbiamo visto a lezione che la carica totale che passa in una spira per effetto dell'induzione elettromagnetica è legata alla differenza di flusso del campo:
$$
q = \int\_{t_1}^{t_2} dq =  \int\_{t_1}^{t_2} i(t) dt =  -\frac{1}{R} \int\_{t_1}^{t_2} d\Phi = \frac{\Phi_1 - \Phi_2}{R}.
$$
Poiché in questo caso $\Phi_1 = \Phi_2 = 0$, dato che la spira è fuori dalla regione in cui è presente il campo magnetico sia all'inizio che alla fine del moto, $q = 0$. Questo avviene perché quando la spira entra nella regione di campo la corrente scorre in un verso, trasportando una certa quantità di carica $\Delta q$, mentre quando la spira esce la corrente scorre nel verso opporto, trasportando di nuovo $\Delta q$. La somma di questi due contributi, se teniamo conto del verso opposto, è nulla.

---

## Esercizio 54

### Testo

{{< figure src="../images/esercizio_54.png" width="500px">}}

Una sbarretta conduttrice di massa $m=5$ g e di lunghezza $l=25$ cm scorre liberamente su due binari orizzontali ai quali è elettricamente connessa. I due binari sono connessi tra di loro da una resistenza $R=15\, \Omega$. Per un tratto di lunghezza $L=40$ cm i binari sono attraversati da un campo magnetico uniforme $B=2.5$ T diretto verticalmente ed uscente dal foglio (vedi disegno). La sbarretta arriva al tempo $t=0$ nella zona con campo magnetico con una velocità $v(0)=2.5$ m/s. Determinare

1. il verso e l'intensità della corrente che fluisce nella barretta a $t = 0$;
2. la carica fluita nel circuito sbarretta-rotaie-resistenza dopo che la sbarretta è uscita dalla zona con campo magnetico;
3. la velocità di uscita della barretta;
4. la dimensione della regione di campo che si dovrebbe avere per far fermare completamente la sbarretta.

### Soluzione

1. La corrente deve opporsi all'aumentare del flusso, e quindi, dovendo generare un campo opposto a $B$, scorrerà in verso orario. L'intensità della corrente si trova applicando la legge di Faraday, ricordando che il flusso è 
$$
\Phi(B) = lBx(t)
$$
e quindi 
$$
\mathcal{E}_i(t) = - \frac{d \Phi(B)}{dt} = -l B v(t)
$$
che calcolata in 0 vale $\mathcal{E}_i(0) = -l B v(0)$, da cui si ricava
$$
i = \frac{l b v(0)}{R} = 0.104\, {\rm A}
$$
2. La variazione di flusso a cui è sottoposta la spira è semplicemente
$$
\Delta \Phi = \Phi_1 - \Phi_2 = -\Phi_2 = -lLB
$$
e quindi la carica è data dalla legge di Felici:
$$
q = \left| \frac{\Delta \Phi}{R} \right| = -0.017 \, {\rm C}.
$$
3. In questo caso la velocità con cui si muove la sbarretta non è costante poiché comincerà a rallentare non appena entrata nella regione di campo come conseguenza della presenza della forza di attrito elettromagnetico data da
$$
F(t) = - \frac{l^2 B^2}{R}v(t)
$$
dove omettiamo i simboli di vettore perché forza e velocità sono sempre parallele. Ricordando che $v(t) = dx / dt$ e $a(t) = F(t) / m$ e definendo $t_u$ come il tempo a cui la sbarrretta esce dalla regione di campo possiamo risolvere direttamente l'equazione che lega accelerazione a velocità:
$$
v(t_u) = v(0) + \int_0^{t_u} a(t) dt = v(0) - \int_0^{t_u} \frac{l^2 B^2}{mR} v(t) dt = v(0) - \int_0^{t_u} \frac{l^2 B^2}{mR}\frac{dx}{dt} dt = v(0) - \int_0^L \frac{l^2 B^2}{mR} dx
$$
che si può risolvere immediatamente per ottenere
$$
v(t) = v(0) - \frac{l^2 B^2 L}{mR} = 0.42\, {\rm m/s}
$$
4. Far fermare la sbarretta significa imporre $v(t) = 0$. Sostituendo questo valore nell'equazione precedente si trova
$$
L = \frac{v(0) mR }{l^2 B^2} = 0.48\, {m}
$$

---

## Esercizio 55 

### Testo

{{< figure src="../images/esercizio_55.png" width="500px">}}

In un piano inclinato di angolo $\alpha=\pi / 6 = 30^\circ$ sono poste due rotaie parallele, distanti $l=10$ cm, di resistenza elettrica trascurabile e connesse elettricamente tra loro alla sommità. Su di esse può scorrere senza attrito una sbarretta conduttrice di massa $m=10$ g e resistenza elettrica $R=0.1\, \Omega$. Il tutto è immerso in un campo magnetico uniforme e costante, diretto verticalmente, di modulo $B=0.5$ T. Ad un certo istante la sbarretta viene lasciata libera di scivolare lungo il piano inclinato. Determinare:

1. verso e intensità della corrente indotta nella spira individuata dal sistema rotaie-sbarretta in funzione della velocità della sbarretta.
2. la velocità limite della sbarretta nel suo moto di scivolamento.

### Soluzione

1. Il verso è dato dalla legge di Lenz: poiché il flusso attraverso la spira aumenta, il campo magnetico generato dalla corrente indotta deve opporsi a quello esterno e quindi, nel sistema di riferimento indicato in figura, la corrente scorre lungo $\hat{z}$ all'interno della sbarretta. Possiamo ricavare la corrente a partire dalla legge di Faraday. Il flusso del campo attraverso la superficie della spira è
$$
\Phi(B) = l x B \cos \alpha
$$
perché tra la normale alla spira e il campo magnetico vi è un angolo $\alpha$. $x$ indica lo spostamento della sbarretta lungo il piano parallelo rispetto alla sua posizione iniziale. La forza elettromotrice indotta sarà quindi
$$
\mathcal{E}_i = -\frac{d \Phi(B)}{dt} = - I B \cos \alpha v(t)
$$
perché $dx / dt = v(t)$, quindi la corrente ha intensità
$$
i = \frac{l B \cos \alpha v(t)}{R}
$$
2. La velocità limite si raggiunge quando $v$ rimane costante durante il moto. Affinché la velocità sia costante l'accelerazione deve essere nulla, e quindi la somma delle forze deve anch'essa azzerarsi. Le componenti ortogonali al piano si azzerano in forza della reazione normale. Le componenti parallele, d'altro canto, devono azzerarsi perché uguali in modulo ma opposte in verso. Col sistema di riferimento indicato in figura la forza peso ha direzione $-\hat{y}$, mentre quella magnetica vale 
$$
\vec{F}_m = i \vec{l} \times \vec{B} = -\frac{I^2 B^2}{R} \cos \alpha v(t) \hat{x}
$$
poiché la corrente scorre nella sbarretta verso $\hat{z}$ e $\vec{B}$ è diretto lungo $\hat{y}$. Eguagliando le intensità delle componenti delle due forze lungo il piano inclinato si trova
$$
mg \sin\alpha = \frac{I^2 B^2}{R} \cos^2 \alpha v\_{\rm lim}
$$
da cui si ricava
$$
v\_{\rm lim} = \frac{mg R \tan \alpha}{l^2 B^2 \cos \alpha}
$$
---

## Esercizio 56

### Testo

{{< figure src="../images/esercizio_56.png" width="500px">}}

Una bobina rettangolare formata da $N = 100$ spire sovrapposte di lati $a = 1$ cm e $b = 5$ cm è collegata a dei collettori circolari e ruota intorno all'asse che passa per i lati corti con velocità angolare $\omega$ all'interno di una regione in cui è presente un campo magnetico uniforme $B = 0.4$ T. 

1. Ricavare l'espressione del flusso quando la bobina si trova nella posizione in figura (cioè quando $B$ è ortogonale al piano della spira) 
2. Determinare l'espressione della differenza di potenziale massima tra i collettori, specificando per quale posizione della bobina valga.
3. Calcolare a quale velocità angolare la bobina deve ruotare per ottenere una differenza di potenziale massima pari a 100 V.

### Soluzione

1. Nella posizione data il campo e la normale alla bobina sono paralleli, quindi il flusso è la somma dei flussi che passano attraverso le $N$ spire, quindi
$$
\Phi(B) = N a b B = 0.02\, {\rm Wb}
$$
2. Se definiamo $\theta = \omega t$ l'angolo tra la normale alla bobina e il campo, il flusso vale
$$
\Phi(B) = N a b B \cos \theta = N a b B \cos (\omega t)
$$
e quindi applicando la legge di Faraday troviamo
$$
\mathcal{E}_i = \omega N a b B \sin(\omega t)
$$
che è massimo quando $\theta = \omega t = \pi / 2$, cioè quando campo e bobina sono ortogonali.
3. Utilizzando la formula di prima e imponendo $\mathcal{E}_i = 100$ V troviamo
$$
\omega = \frac{\mathcal{E}_i}{N a b B} = 5000 \, {\rm rad/sec}
$$

---

## Esercizio 57

### Testo

{{< figure src="../images/esercizio_57.png" width="500px">}}

Un circuito chiuso di forma rettangolare di dimensioni $a = 40$ cm e $b = 10$ cm contenente un condensatore di capacità $C$  è parzialmente immerso in una regione di campo magnetico larga $L = 20$ cm (vedi disegno). Il campo magnetico ha direzione e verso ortogonale al circuito e modulo che varia nel tempo con la legge $B(t) = B_0 \exp(-t / \tau)$. Determinare la carica $q(t)$ presente sulle armature del condensatore.

### Soluzione

Il flusso del campo attraverso il circuito è

$$
\Phi(B) = B_0 b L \exp(-t / \tau)
$$

e quindi la forza elettromotrice indotta vale

$$
\mathcal{E}_i = -\frac{d\Phi(B)}{dt} = \frac{B_0 b L \exp(-t / \tau)}{\tau}.
$$

In presenza di un condensatore questa forza elettromotrice sarà anche la differenza di potenziale ai capi del condensatore. La carica sulle sue armature sarà quindi

$$
q(t) = C \mathcal{E}_i
$$
