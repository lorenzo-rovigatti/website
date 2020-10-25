+++
title = "Esercitazione del 22/10/2020"
date = 2019-10-16T09:47:43+02:00
draft = false
+++

[Esercizio 24](#esercizio-24) -- [Esercizio 25](#esercizio-25)

## Esercizio 24

### Testo

Una nuvola temporalesca ha una forma approssimativamente rettangolare, con lati $a = 2.0$ km e $b = 3.0$ km, e fluttua ad un'altezza $h = 500$ m al di sopra di una zona pianeggiante. La nuvola contiene una carica $q = -80$ C. 

1. Sapendo che la rigidità dielettrica dell'aria è circa $3.0 \times 10^6$ V/m, le condizioni descritte sopra sono sufficienti per generare fulmini?
2. Qual è l'energia elettrostatica del sistema nuvola $+$ terreno?

### Soluzione

Il sistema può essere visto come un condensatore piano di capacità:

$$
C = \frac{\epsilon_0 \Sigma}{h} = \frac{\epsilon_0 ab}{h} = 10.6 \times 10^{-8}\, \mathrm{F}
$$

**Nota Bene:** la costante dielettrica relativa dell'aria è praticamente uno, quindi possiamo utilizzare le espressioni valide nel vuoto.

La differenza di potenziale tra la terra (caricata positivamente) e la nuvola (caricata negativamente) vale:

$$
\Delta V = \frac{q}{C} = 7.5 \times 10^8\, \mathrm{V}
$$

1. La rigidità dielettrica è il massimo valore del campo elettrostatico che può essere applicato senza causare scariche (fulmini!). Calcoliamo il campo all'interno del "condensatore", utilizzando la solita espressione per i condensatori piani (molto approssimata in questo caso, perché?):
$$
E \simeq \Delta V / h = 1.5 \times 10^6\, \frac{\mathrm{V}}{\mathrm{m}}
$$
che è più bassa della rigidità dielettrica: niente fulmini (in questa approssimazione)!
2. L'espressione dell'energia di un qualunque condensatore è $U_e = \frac{1}{2} q\Delta V$, quindi si ha:
$$
U_e = \frac{1}{2} q \Delta V = 3 \times 10^{10}\, \mathrm{J}
$$

---

## Esercizio 25
<small>Ispirato dall'esercizio III.13 del Mencuccini-Silvestrini</small>

### Testo

{{< figure src="../images/esercizio_25.png" width="600px">}}

Un condensatore piano di dimensioni $a \times b \times h$ è parzialmente riempito (per un tratto $x = a / 3$) di una lastra di dielettrico omogeneo e isotropo di costante dielettrica relativa $\kappa$ e mantenuto ad una d.d.p. $\Delta V$. 

1. Quanto vale la carica $q_d$ che si dispone sulla parte di armatura superiore che si affaccia sul dielettrico?
2. Calcolare $q_d$ se $\Delta V = 113$ V, $a = b = 10$ cm, $h = 2$ mm e $\kappa = 4$.

### Soluzione

1. Il condensatore può essere visto come due condensatori in parallelo di capacità $C_d = \epsilon_0 \kappa ab / 3h$ e $C_v = 2 \epsilon_0 ab / 3h$. La carica di entrambi i "condensatori" si trova utilizzando la relazione che lega capacità, carica e differenza di potenziale, quindi: 
$$
q_d = C_d \Delta V = \frac{\epsilon_0 \kappa ab}{3h} \Delta V
$$
2. Sostituiamo i valori dati nelle relazione trovata al punto precedente:
$$
q_d = \frac{4}{3} 113 \cdot 8.854 \times 10^{-12} \frac{0.1 \cdot 0.1}{0.002}\, \mathrm{C} = 0.667 \times 10^{-8} \, \mathrm{C}
$$

---
