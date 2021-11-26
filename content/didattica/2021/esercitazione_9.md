+++
title = "Esercitazione del 26/11/2021"
date = 2021-11-26T11:24:21+02:00
draft = false

+++

[Esercizio 44](#esercizio-44) -- [Esercizio 46](#esercizio-46) -- [Esercizio 47](#esercizio-47) -- [Esercizio 48](#esercizio-48) -- [Esercizio 49](#esercizio-49) -- [Esercizio 50](#esercizio-50)

## Esercizio 44

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
B = \frac{\lambda g}{i}\frac{a + b}{a} \tan \theta_0  = 5.21 \cdot 10^{-3} \, {\rm T}.
$$

2. Il lavoro si ottiene integrando il momento meccanico tra $\theta = 0$ e $\theta = \theta_0$:

$$
W = iabB \int_0^{\theta_0} \cos \theta d\theta = iabB \sin \theta |_0^{\theta_0} = iabB \sin{\theta_0} = 1.3 \times 10^{-4} \, {\rm J}
$$

---

## Esercizio 46

### Testo

{{< figure src="../images/esercizio_46.png" width="300px">}}

Sei lunghi fili complanari percorsi da una corrente $i = 1$ A sono disposti in modo tale da delimitare una regione esagonale di lato $l = 10$ cm (vedi regione grigia in figura). Il verso delle correnti porta a percorrere l'esagono in senso orario. Determinare verso e intensità della componente di $\vec{B}$ perpendicolare al piano nel centro dell'esagono.

### Soluzione

Usando la regola della mano destra (o della vite) si trova che i campi generati singolarmente dai fili nel centro dell'esagono sono sempre entranti nel piano. Per ragioni di simmetria le intensità dei campi nel centro saranno tutte uguali e, in particolare, saranno dati dalla legge di Biot-Savart, $B_s = \frac{\mu_0 i}{2 \pi r}$, dove $r$ è la distanza dal centro. Questa si può calcolare disegnando il sistema e notando che un esagono è composto da sei triangoli equilateri

$$
r = l \cos\theta
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

---

## Esercizio 48 (svolto il 24/11/2021)
<small>Ispirato all'esempio 7.5 del MNV</small>

### Testo

{{< figure src="../images/esercizio_48.png" width="300px">}}

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

## Esercizio 49 (non svolto in aula)
<small>Esercizio V.17 del Mencuccini-Silvestrini</small>

### Testo

{{< figure src="../images/esercizio_49.png" width="200px">}}

Un conduttore di forma cilindrica di raggio $a$ e lunghezza indefinita è percorso da una corrente stazionaria $i$. All'interno del conduttore vi è una cavità di sezione circolare di raggio $b$ che corre parallela all'asse del cilindro. La distanza tra i centri dei cilindri è $h$. Calcolare il campo magnetico $\vec{B}$ in un punto generico posto a distanza $r > a$ dal centro del cilindro conduttore lungo l'asse che congiunge i due centri. 

### Soluzione

Questo sistema può essere considerato la sovrapposizione di due sistemi: un cilindro pieno di raggio $a$ in cui scorre una corrente e un cilindro pieno di raggio $b$ in cui scorre una corrente di verso opposto di stessa densità.
In questo caso la densità di corrente vale

$$
j = \frac{i}{\Sigma} = \frac{i}{\pi (a^2 - b^2)}.
$$

La corrente nel primo cilindro *pieno* varrà quindi

$$
i_p = j \pi a^2 = \frac{i a^2}{a^2 - b^2}
$$

mentre quella fittizia che "scorre" nel cilindro vuoto vale

$$
i_v = -j \pi b^2 = -\frac{i b^2}{a^2 - b^2}.
$$

Sommiamo ora i due contributi, ognuno dei quali è dato dalla legge di Biot-Savart:

$$
B(r ) = \frac{\mu_0}{2 \pi} \left( \frac{i_p}{r} + \frac{i_v}{r - h} \right) = \frac{\mu_0 i}{2 \pi (a^2 - b^2)} \left( \frac{a^2}{r} - \frac{b^2}{r - h} \right)
$$

---

## Esercizio 50

### Testo

{{< figure src="../images/esercizio_50.png" width="500px">}}

Una spira rettangolare è posta su di un piano inclinato di $\theta = \pi / 6 = 30^\circ$. Uno dei due lati orizzontali (lunghi $l = 50$ cm) è fisso a terra, mentre l'altro è costituito da una barra conduttrice di massa $m = 0.1$ kg che può scivolare senza attriti sul piano. Il circuito è immerso in un campo magnetico $\vec{B} = -B_0 \hat{y}$, dove $B_0 = 0.8$ T e $\hat{y}$ è indicato in figura. 
Determinare verso e intensità della corrente $i$ che deve scorrere nel circuito per far sì che la sbarra resti ferma in posizione. 

### Soluzione

La forza peso agente sulla sbarra conduttrice è $\vec{F}_p = -mg\hat{y}$. La componente $F_p \cos \theta$ è bilanciata dalla reazione vincolare del piano, mentre la componente $F_p \sin \theta$ tenderà a far scivolare la sbarra verso terra lungo il piano. Per avere una situazione di equilibrio dobbiamo generare una forza magnetica che vada in direzione opposta (cioè in direzione $\hat{x}$). Scriviamo quale sarebbe l'espressione della forza se la corrente scorresse nella barra lungo il verso di $-\hat{z}$:

$$
\vec{F}_m = i \vec{l} \times \vec{B} = -i l \hat{z} \times (-B_0 \hat{y}) = -i l B_0 \hat{x}.
$$

Poiché in questo caso la forza sarebbe diretta lungo la stessa direzione della forza peso, è chiaro che dobbiamo considerare il verso opposto della corrente, e cioè $\vec{l} = l\hat{z}$. Guardando il circuito dal semi-asse delle $y$ positive, questo significa che la corrente deve scorrere in senso orario.

Per trovare l'intensità della corrente eguagliamo i moduli delle due forze lungo la direzione del piano. Come per la forza peso, anche parte della forza magnetica ($F_m \sin \theta$) è bilanciata dalla reazione vincolare, per cui le due componenti da eguagliare sono

$$
mg \sin \theta = i l B_0 \cos \theta
$$

da cui otteniamo l'intensità di corrente come

$$
i = \frac{mg}{l B_0} \tan \theta \approx 1.4 \, {\rm A}
$$
