+++
title = "Esercitazione del 27/11/2019"
date = 2019-11-24T12:24:21+02:00
draft = false
+++

[Esercizio 48](#esercizio-48) -- [Esercizio 49](#esercizio-49) -- [Esercizio 50](#esercizio-50) -- [Esercizio 51](#esercizio-51) -- [Esercizio 52](#esercizio-52)

## Esercizio 48
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

## Esercizio 49
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
B(r ) = \frac{\mu_0}{2 \pi} \left( \frac{i_p}{r} + \frac{i_v}{r - h} \right) = \frac{\mu_0 i}{2 \pi (a^2 - b^2)} \left( \frac{a^2}{r} + \frac{b^2}{r - h} \right)
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

---

## Esercizio 51

### Testo

{{< figure src="../images/esercizio_51.png" width="600px">}}

Un lungo filo rettilineo percorso da una corrente $i$ è sospeso al soffitto tramite delle corde ad esso collegate ad invervalli regolari e forma un angolo $\theta = 30^\circ$ con la verticale, definito come uno spostamento in direzione antioraria rispetto a quest'ultima. Il filo ha una densità lineare di massa $\lambda = 0.12$ kg/m e si trova in una regione di spazio in cui è presente un campo magnetico diretto verso il basso di intensità $B = 0.36$ T. Determinare verso e intensità della corrente che scorre nel filo. 

**Nota Bene:** la figura mostra lo stesso sistema da due punti di riferimento diversi (identificati dai sistemi di riferimento).

### Soluzione

Sul filo agiscono due forze: quella peso e quella magnetica. Poiché la lunghezza del filo è indefinita, dobbiamo ragionare in termini di *forza per unità di lunghezza*. In questo caso è possibile farlo perché entrambe le forze sono proporzionali alla lunghezza del tratto considerato. L'intensità della forza peso vale infatti $\lambda l g$, mentre quella della forza magnetica è $ilB$. Per porre le condizioni di equilibrio, dobbiamo scomporre le forze per unità di lunghezza lungo le componenti tangenziali e normali alle corde che tengono sospeso il filo. Queste ultime vengono annullate dalla tensione delle corde, e quindi dobbiamo semplicemente porre uguali ed opposte le componenti tangenziali.
Disegnando il sistema, vediamo come la componente tangenziale della forza peso tenderà a far diminuire $\theta$, quindi la corrente deve essere tale per cui la componente tangenziale della forza magnetica deve andare nel verso opposto. Considerando che $\vec{F} = i \vec{l} \times \vec{B}$ e che $\vec{B} = - B \hat{y}$ si trova subito che la corrente deve avere verso uscente dal foglio.
Per trovare l'intensità di corrente poniamo uguali le due componenti tangenziali:

$$
\lambda g \sin(\theta) = i B \cos(\theta)
$$

e quindi otteniamo

$$
i = \frac{\lambda g}{B} \tan(\theta) = 1.89 \, {\rm A}
$$

---

## Esercizio 52
<small>Esercizio 6.11 del MNV</small>

### Testo

Due griglie metalliche $G_1$ e $G_2$ parallele molto estese distano $d = 4$ cm e separano due regioni di spazio in cui esiste un campo magnetico $B = 0.8$ T uniforme e uscente dal foglio. Tra le griglie è applicata un d.d.p. $\Delta V$. Al tempo $t = 0$ un protone attraversa $G_1$ nel punto $A_1$ ed entra nella regione tra le griglie con velocità ortogonale a $G_1$. Dopo un tempo $t\_{\rm tot} = 1.22 \times 10^{-7}$ s il protone riattraversa nuovamente $G_1$ nello stesso verso ma in un punto $A_2$ distante $h = 5.2$ cm da $A_1$. 

1. Calcolare $\Delta V$.
2. Calcolare le velocità $v_1$ e $v_2$ del protone all'interno delle due regioni col campo magnetico.

### Soluzione

1. Il tempo $t\_{\rm tot}$ è la somma del tempo trascorso all'interno delle regioni e dello spazio tra le griglie, cioè:
$$
t\_{\rm tot} = 2 t_G + t_1 + t_2
$$
perché $t_G$ è lo stesso sia un verso che nell'altro, poiché la particella è sottoposta alla stessa forza e in un caso passa da $v_1$ a $v_2$ e nell'altro da $v_2$ a $v_1$. I tempi $t_1$ e $t_2$ sono metà dei periodi necessari per compiere una traiettoria circolare. Poiché ci ricordiamo che il periodo è indipendente dalla velocità, si trova immediatamente
$$
t_1 = t_2 = \frac{T}{2} = \frac{\pi m}{q B}
$$
e quindi, sostituendo,
$$
t_G = \frac{t\_{\rm tot} - T}{2} = 2 \times 10^{-8} \, {\rm s}
$$
Se disegniamo il sistema notiamo come $h$ sia semplicemente la differenza tra i diametri delle semicirconferenze disegnate dalla traiettoria della particella all'interno delle due regioni col campo, cioè:
$$
h = 2r_2 - 2r_1 = 2 \frac{m}{qB} (v_2 - v_1)
$$
da cui si ricava
$$
v_2 - v_1 = \frac{hqB}{2m} = 2 \times 10^{6} \, {\rm m/s}.
$$
D'altronde, l'accelerazione tra le due griglie è costante e quindi possiamo scrivere
$$
v_2 = v_1 + at_G = v_1 + \frac{q\Delta V}{md} t_G,
$$
dove abbiamo scritto l'accelerazione come la forza dovuta al campo elettrico, che vale $E = \Delta V / d$, diviso per la massa della particella, $a = q \Delta V / dm$. Risolvendo per $\Delta V$ si trova
$$
\Delta V = (v_2 - v_1) \frac{md}{qt_G} = 4.18 \times 10^4 \, {\rm V}
$$

2. Ora conosciamo solo la differenza tra le due velocità. Possiamo trovarne il valore assoluto scrivendo l'equazione del moto iniziale per la particella, per cui si ha, considerando $x(0) = 0$,
$$
x(t) = v_1 t + \frac{1}{2} a t^2 = v_1 + \frac{q \Delta V}{2md} t^2
$$
che, per $t = t_G$, vale
$$
d = v_1 t_G + \frac{q \Delta V}{2md} t_G^2 = v_1 t_G + \frac{1}{2}(v_1 - v_2) t_G
$$
da cui possiamo ricavare $v_1$:
$$
v_1 = \frac{d - \frac{1}{2}(v_2 - v_1) t_G}{t_G} = 10^6 \, {\rm m/s}
$$
e quindi $v_2$ vale:
$$
v_2 = (v_2 - v_1) + v_1 = 3 \times 10^6 \, {\rm m/s}
$$
