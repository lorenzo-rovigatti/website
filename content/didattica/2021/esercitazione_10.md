+++
title = "Esercitazione del 03/12/2021"
date = 2021-11-26T09:24:21+02:00
draft = false

+++

[Esercizio 51](#esercizio-51) -- [Esercizio 52](#esercizio-52)

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

{{< figure src="../images/esercizio_52.png" width="500px">}}

Due griglie metalliche $G_1$ e $G_2$ parallele molto estese distano $d = 4$ cm e separano due regioni di spazio in cui esiste un campo magnetico $B = 0.8$ T uniforme e uscente dal foglio. Tra le griglie è applicata un d.d.p. $\Delta V$. Al tempo $t = 0$ un protone attraversa $G_1$ nel punto $A_1$ ed entra nella regione tra le griglie con velocità ortogonale a $G_1$. Dopo un tempo $t\_{\rm tot} = 1.22 \times 10^{-7}$ s il protone riattraversa nuovamente $G_1$ nello stesso verso ma in un punto $A_2$ distante $h = 5.2$ cm da $A_1$. 

1. Calcolare $\Delta V$.
2. Calcolare le velocità $v_1$ e $v_2$ del protone all'interno delle due regioni col campo magnetico.

### Soluzione

1. Il tempo $t\_{\rm tot}$ è la somma del tempo trascorso all'interno delle regioni e dello spazio tra le griglie, cioè:
$$
t\_{\rm tot} = 2 t_G + t_1 + t_2
$$
perché $t_G$ è lo stesso sia in un verso che nell'altro, poiché la particella è sottoposta alla stessa forza e in un caso passa da $v_1$ a $v_2$ e nell'altro da $v_2$ a $v_1$. I tempi $t_1$ e $t_2$ sono metà dei periodi necessari per compiere una traiettoria circolare. Poiché ci ricordiamo che il periodo è indipendente dalla velocità, si trova immediatamente
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
x(t) = v_1 t + \frac{1}{2} a t^2 = v_1 t + \frac{q \Delta V}{2md} t^2
$$
che, per $t = t_G$, vale
$$
d = v_1 t_G + \frac{q \Delta V}{2md} t_G^2 = v_1 t_G + \frac{1}{2}(v_2 - v_1) t_G
$$
da cui possiamo ricavare $v_1$:
$$
v_1 = \frac{d - \frac{1}{2}(v_2 - v_1) t_G}{t_G} = 10^6 \, {\rm m/s}
$$
e quindi $v_2$ vale:
$$
v_2 = (v_2 - v_1) + v_1 = 3 \times 10^6 \, {\rm m/s}
$$
