+++
title = "Esercitazione 18/10/2018"
date = 2018-10-18T22:24:21+02:00
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

[Esercizio 23](#esercizio-23) -- [Esercizio 24](#esercizio-24) -- [Esercizio 25](#esercizio-25) -- [Esercizio 26](#esercizio-26) -- [Esercizio 27](#esercizio-27) -- [Esercizio 28](#esercizio-28)

## Esercizio 23
<small>Esercizio II.6 del Mencuccini-SilvestrinI</small>

### Testo

Due sfere conduttrici di raggio $R$ vengono caricate con la stessa carica $q$. La distanza $d$ tra le due sfere è molto maggiore di $R$, essendo $d = 50 R$. In queste condizioni, la forza che si esercita tra le due sfere vale $F_i = 10^{-5} N$. Calcolare la forza $F_f$ tra le due sfere dopo che una delle due è stata collegata a terra.

### Soluzione

L'espressione per la forza tra due sfere cariche è:

$$
F_i = \frac{q^2}{4\pi\epsilon_0} \frac{1}{d^2}
$$

Questa espressione non può essere utilizzata per calcolare le quantità che il problema non ci fornisce, perché contiene due incognite, $q$ e $d$ (o $R$, le due quantità sono legate).

Se una delle due sfere viene messa a terra, l'altra acquisisce una carica $q_f$ che si può calcolare mettendo a 0 il suo potenziale totale:

$$
\frac{q}{4\pi\epsilon_0}\frac{1}{d} + \frac{q_f}{4\pi\epsilon_0}\frac{1}{R} = 0
$$

Da cui si ricava

$$
q_f = -\frac{qR}{d} = -\frac{q}{50}
$$

Applichiamo la legge di Coulomb per calcolare $F_f$, e notiamo che possiamo riscrivere l'espressione in funzione di $F_i$:

$$
F_f = \frac{q q_f}{4\pi\epsilon_0} \frac{1}{d^2} = -\frac{q^2}{4\pi\epsilon_0}\frac{1}{50 d^2} = -\frac{F_i}{50} = - 2 \times 10^{-7}\,\mathrm{N}
$$

---

## Esercizio 24

### Testo

Una sfera di raggio $R_1$ è posta al centro di una sfera cava di raggio interno $R_2$ ed esterno $R_3$. I due conduttori sono mantenuti da un generatore a valori del potenziale $V_1$ e $V_2$ rispetto al potenziale all'infinito (che poniamo a 0 per comodità). 

1. Calcolare le cariche $q_1$, $q_2$ e $q_3$ depositate sulle tre superfici conduttive.
2. Calcolare numericamente le cariche se $R_1 = 10$ cm, $R_2 = 20 cm$, $R_3 = 25 cm$, $V_1 = -1000$ V, $V_2 = 200$ V.

### Soluzione

1. La differenza di potenziale tra $R_1$ ed $R_2$ si trova integrando il campo all'interno della cavità:
$$
\Delta V\_{1,2} = V_1 - V_2 = \frac{q_1}{4\pi\epsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2} \right)
$$
Da cui si ricava la carica della sfera interna:
$$
q_1 = 4 \pi \epsilon_0 \Delta V \left( \frac{R_1 R_2}{R_1 - R_2} \right) = \Delta V C
$$
Dove l'ultima relazione mostra come il sistema possa essere considerato un condensatore sferico di capacità $C = 4 \pi \epsilon_0 \left( \frac{R_1 R_2}{R_1 - R_2} \right)$. Per il teorema di Gauss, la carica sulla superficie interna della sfera cava non può essere altro che $q_2 = -q_1$.  La carica sulla superficie esterna, invece, si trova integrando direttamente il campo per trovare la differenza di potenziale tra la sfera cava e l'infinito (dove $V = 0$):
$$
V_2 = \frac{q_3}{4\pi \epsilon_0} \frac{1}{R_3}
$$
Da cui si trova che:
$$
q_3 = 4 \pi \epsilon_0 R_3 V_2
$$

2. Sostituiamo i valori nelle relazioni trovate precedentemente:
\begin{align}
q_1 & = -2.67 \times 10^{-8}\\\\\\
q_2 & = 2.67 \times 10^{-8}\\\\\\
q_3 & = 5.6 \times 10^{-9}
\end{align}

---

## Esercizio 25

### Testo

Sono noti la differenza di potenziale $\Delta V\_{ab}$ e le capacità di ciascun condensatore del circuito in figura:

{{< figure src="../images/esercizio_25.png" alt="Figura esercizio 25" width="400px">}}

1. Determinare la capacità equivalente del circuito.
2. Calcolare la carica e la d.d.p. di ciascun condensatore.

### Soluzione

1. La capacità equivalente totale si ottiene in tre passi:
	1. $C_1$, $C_2$ e $C_3$ sono in parallelo. La loro capacità equivalente è quindi $C\_{\rm eq}^{(1)} = C_1 + C_2 + C_3$.
	2. Disegniamo il circuito equivalente: $C\_{\rm eq}^{(1)}$ e $C_4$ sono in serie, e quindi la loro capacità equivalente vale $C\_{\rm eq}^{(2)} = \frac{C_4 C\_{\rm eq}^{(1)}}{C_4 + C\_{\rm eq}^{(1)}}$.
	3. $C\_{\rm eq}^{(2)}$ e $C_5$ sono ora chiaramente in parallelo, e quindi $C\_{\rm eq} = C\_{\rm eq}^{(2)} + C_5$.
2. Anche qui il procedimento si semplifica se consideriamo una parte del circuito alla volta:
	* $C_5$ è posto ad una d.d.p. nota perché $\Delta V_5 = \Delta V$, quindi $q_5 = C_5 \Delta V$.
	* Il condensatore equivalente $C\_{eq}^{(2)}$ si trova anch'esso a $\Delta V^{(2)} = \Delta V$, e quindi la carica su di esso depositata è $q\_{\rm eq}^{(2)} = C\_{eq}^{(2)} \Delta V$. Poiché $C\_{eq}^{(1)}$ e $C_4$ sono in serie, essi contengono la stessa quantità di carica, quindi $q_4 = q\_{\rm eq}^{(2)}$, per cui $\Delta V_4 = q_4 / C_4$.
	* La d.d.p. ai capi dei tre condensatori in parallelo è (per definizione) la stessa, $\Delta V^{(1)}\_{\rm eq}$. Possiamo calcolarla notando che $\Delta V^{(1)}\_{\rm eq} + \Delta V_4 = \Delta V$ e quindi $\Delta V^{(1)}\_{\rm eq} = \Delta V - \Delta V_4$. Poiché conosciamo sia la d.d.p che le capacità dei diversi condensatori, le quantità di carica si possono calcolare immediatamente: $q_1 = C_1 \Delta V^{(1)}\_{\rm eq}$, $q_2 = C_2 \Delta V^{(1)}\_{\rm eq}$ e $q_3 = C_3 \Delta V^{(1)}\_{\rm eq}$.


---

## Esercizio 26

### Testo

Una nuvola temporalesca ha una forma approssimativamente rettangolare, con lati $a = 2.0$ km e $b = 3.0$ km, e fluttua ad un'altezza $h = 500$ m al di sopra di una zona pianeggiante. La nuvola contiene una carica $q = 80$ C. 

1. Sapendo che la rigidità dielettrica dell'aria è circa $3.0 \times 10^6$ V/m, le condizioni descritte sopra sono sufficienti per generare fulmini?
2. Qual è l'energia elettrostatica del sistema nuvola $+$ terreno?

### Soluzione

Il sistema può essere visto come un condensatore piano di capacità:

$$
C = \frac{\epsilon_0 \Sigma}{h} = \frac{\epsilon_0 ab}{h} = 10.6 \times 10^{-8}\, \mathrm{F}
$$

**Nota Bene:** la costante dielettrica relativa dell'aria è praticamente uno, quindi possiamo utilizzare le espressioni valide nel vuoto.

Il potenziale vale:

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

## Esercizio 27
<small>Esercizio II.11 del Mencuccini-Silvestrini</small>

### Testo

Tre condensatori, di capacità $C_A = C$, $C_B = 2C$, $C_C = 3C$, sono disposti come in figura:

{{< figure src="../images/esercizio_27.png" alt="Figura esercizio 27" width="350px">}}

Gli elettrodi di $C_A$ e $C_B$ sono tenuti a differenze di potenziale $V_A = 10$ V e $V_B = 40$ V, mentre un elettrodo di $C_C$ è collegato a terra. Qual è la differenza di potenziale ai capi di $C_C$?

### Soluzione

Le differenze di potenziale ai capi dei tre condensatori valgono:

\begin{align}
V_A - V_C & = \frac{q_A}{C}\\\\\\
V_B - V_C & = \frac{q_B}{2C}\\\\\\
V_C & = \frac{q_C}{3C} = \frac{q_A + q_B}{3C} = \frac{cV_A - CV_C + 2CV_B - 2CV_C}{3C}\\\\\\
\end{align}

Da cui si ricava che

$$
V_C = \frac{V_A + 2V_B}{6} = 15\, \mathrm{V}
$$

---

## Esercizio 28
<small>Esempio 4.13 del MNV</small>

### Testo

Un condensatore piano (di dimensioni $\Sigma = l^2$ e $h$), è inizialmente vuoto. Una lastra di dielettrico di costante dielettrica $\kappa$ viene inserita parzialmente nel condensatore. La differenza di potenziale $\Delta V$ è mantenuta costante da un generatore. Calcolare la forza con cui la lastra viene risucchiata all'interno del condensatore.

### Soluzione

Non possiamo utilizzare un'espressione simile a quella usata per calcolare la forza agente tra due armature di un condensatore, perché nel sistema condensatore $+$ lastra, infatti, l'energia non è conservata! Poiché la d.d.p. è mantenuta costante dal generatore, la variazione dell'energia potenziale del condensatore non è legata direttamente al lavoro della forza.

Cominciamo con il calcolare la capacità equivalente del condensatore. Quando la lastra è penetrata di $x$, il sistema può essere visto come due condensatori in parallelo, uno vuoto (di lunghezza $l - x$) e uno pieno (di lunghezza $x$). La capacità equivalente vale quindi:

$$
C = \frac{\kappa \epsilon_0 l(l - x)}{h} + \frac{\epsilon_0 lx}{h}
$$

Se la lastra si muove di $dx$, la capacità varia di:

$$
dC = \frac{dC}{dx}dx = \frac{\epsilon_0 (\kappa - 1) l}{h} dx
$$

Per mantenere la d.d.p. $\Delta V$, il generatore dovrà spostare una quantità di carica $dq = \Delta V dC$, spendendo una quantità di lavoro

$$
dW\_{\rm gen} = \Delta V dq = V^2 dC
$$

D'altro canto, parte di questo lavoro va ad aumentare l'energia elettrostatica del sistema, che varia di

$$
dU_e = \frac{1}{2} V^2 dC
$$

La differenza tra il lavoro compiuto dal generatore e l'energia immagazzinata dal condensatore è proprio il lavoro della *forza di risucchio*, che quindi vale:

$$
dW = dW\_{\rm gen} - dU_e = \frac{1}{2} V^2 dC = \frac{\epsilon_0 (\kappa - 1) l \Delta V^2}{2h} dx = F dx
$$

La forza vale quindi:

$$
 F= \left( \frac{dW}{dx} \right)\_{V = \mathrm{cost}} = \frac{\epsilon_0 (\kappa - 1) l \Delta V^2}{2h}
$$
