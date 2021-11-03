+++
title = "Esercitazione del 22/10/2021"
date = 2021-10-19T09:47:43+02:00
draft = false
+++

[Richiami di matematica](#richiami-di-matematica-coordinate-sferiche-e-polari) -- [Esercizio 16](#esercizio-16) -- [Esercizio 17](#esercizio-17) -- [Esercizio 18](#esercizio-18) -- [Esercizio 19](#esercizio-19) -- [Esercizio 20](#esercizio-20) -- [Esercizio 21](#esercizio-21)

## Richiami di matematica: coordinate sferiche e polari

### Coordinate sferiche

Le coordinate sferiche $(r, \theta, \phi)$ sono legate a quelle cartesiane, $(x, y, z)$, tramite le seguenti relazioni:

$$
\left\lbrace
\begin{aligned}
x &= r \sin(\theta) \cos(\phi)\\\\\\
y &= r \sin(\theta) \sin(\phi)\\\\\\
z &= r \cos(\theta)
\end{aligned}
\right.
$$

Il seguente diagramma aiuta a visualizzare queste relazioni:

{{< figure src="../images/spherical_coordinates.png" width="400px">}}

In generale, nei sistemi di riferimento che ci interessano i versori che indicano le direzioni delle coordinate sono sempre ortogonali tra loro, punto per punto. Nel caso delle coordinate cartesiane questi vettori sono sempre uguali e puntano sempre nella stessa direzione. Nel caso delle coordinate sferiche questo non è vero: mentre, punto per punto, i tre versori sono ortogonali, le loro direzioni dipendono dal punto in cui vogliamo calcolarli. Per trovarli bisogna disegnare il punto in cui siamo su di un diagramma simile a quello riprodotto sopra e chiedersi quali sono le direzioni verso le quali le tre coordinate aumentano. Nel caso del punto in figura (indicato con $\times$):

* $\hat{r}$ ha direzione parallela a quella della linea tratteggiata che connette $\times$ all'origine e verso che allontana dall'origine
* $\hat{\theta}$ ha la direzione che lascia inalterati $r$ e $\phi$ e verso che fa crescere $\theta$.
* $\hat{\phi}$ fa ruotare in senso antiorario il punto attorno all'asse $z$.

Troviamo ora le relazioni che legano l'incremento della coordinata $i$-esima allo spostamento $ds_i$ che ne risulta. Per le coordinate cartesiane questo è semplicemente dato da $ds_x = dx$, $ds_y = dy$ e $ds_z = dz$. Per le coordinate sferiche, invece:

* Se ci si muove lungo $\hat{r}$, $r$ aumenta e $\times$ si sposta di una quantità pari all'incremento. Si ha quindi uno spostamento pari a $ds_r = dr$.
* Se ci si muove lungo $\hat{\theta}$ di un angolo $d\theta$, lo spostamento sarà pari a $ds\_\theta = 2 r \sin(d\theta / 2) \approx r d\theta$, dove abbiamo utilizzato il fatto che $\sin (\alpha) \approx \alpha$ per piccoli valori di $\alpha$.
* Se ci si muove lungo $\hat{\phi}$, per visualizzare lo spostamento prima proiettiamo il punto sul piano $x-y$ (contribuendo con un fattore $\sin(\theta)$) e poi effettuiamo la stessa operazione del punto precedente, ma stavolta utilizzando $d\phi$. Il risultato finale è quindi $ds\_\phi = r \sin(\theta) d\phi$.

Possiamo usare queste relazioni per ottenere l'espressione di un volumetto infinitesimo $d\tau = ds_1 ds_2 ds_3$:

* In coordinate cartesiane $d\tau = dx dy dz$.
* In coordinate sferiche $d\tau = ds_r ds\_\theta ds\_\phi = r^2 \sin\theta dr d\theta d\phi$. 

L'espressione si semplifica in casi specifici:

* se l'integrando non dipende da $\theta$, $d\tau = 2 r^2 dr d\phi$;
* se l'integrando non dipende da $\phi$, $d\tau = 2 \pi r^2 \sin(\theta) dr d\theta$;
* se l'integrando non dipende né da $\theta$ né da $\phi$, $d\tau = 4\pi r^2 dr$.

### Coordinate polari

Il discorso si semplifica in 2D, dove si hanno solamente $r$ e $\theta$:

$$
\left\lbrace
\begin{aligned}
x &= r \cos\theta\\\\\\
y &= r \sin\theta
\end{aligned}
\right.
$$

Per gli spostamenti infinitesimi:

* Se ci si muove lungo $\hat{r}$, $r$ aumenta e $\times$ si sposta di una quantità pari all'incremento. Si ha quindi uno spostamento pari a $ds_r = dr$.
* Se ci si muove lungo $\hat{\theta}$ di un angolo $d\theta$, lo spostamento sarà pari a $ds\_\theta = 2 r \sin(d\theta / 2) \approx r d\theta$, dove abbiamo utilizzato il fatto che $\sin (\alpha) \approx \alpha$ per piccoli valori di $\alpha$.

L'espressione di una porzione infinitesimo della superficie è quindi $d\Sigma = dx dy = r dr d\theta$. Se l'integrando non dipende da $\theta$ si ha $d\Sigma = 2 \pi r dr$.

---

## Esercizio 16

### Testo

{{< figure src="../images/esercizio_16.png" width="650px">}}

Due sfere conduttrici di raggio $R_1$ ed $R_2$ sono disposte ad una distanza $d$ molto maggiore dei loro raggi. Depositiamo una carica $Q$ su $R_1$.

{{< figure src="../images/esercizio_16_1.png" width="650px">}}
1. Se collegassimo le due sfere con un sottile filo conduttore quanta carica si depositerebbe sulle due sfere?
{{< figure src="../images/esercizio_16_2.png" width="650px">}}
2. Colleghiamo $R_2$ a terra. Se ora consideriamo anche l'effetto che una sfera ha sull'altra, quanto vale la carica indotta su $R_2$?
{{< figure src="../images/esercizio_16_3.png" width="650px">}}
3. Scolleghiamo $R_2$ e colleghiamo $R_1$ a terra. Quanto vale la carica indotta su $R_1$?

**Nota Bene:** Il fatto che $d \gg R_1$ e $d \gg R_2$ significa che le distribuzioni di carica (non indotte) delle sfere conduttrici possono essere considerate uniformi, e che $d - R_1 \simeq d$ e $d - R_2 \simeq d$.

### Soluzione

1. Quando colleghiamo due conduttori, la carica totale si redistribuisce sulle loro superfici (tralasciando la superficie del filo). In generale, il potenziale di due conduttori connessi deve essere lo stesso. Se lo calcoliamo sulla superficie questo vale:
\begin{align}
V_1 & = \frac{q_1}{4\pi\epsilon_0 R_1}\\\\\\
V_2 & = \frac{q_2}{4\pi\epsilon_0 R_2}
\end{align}
D'altro canto, per la conservazione della carica $Q = q_1 + q_2$, e quindi
\begin{align}
q_1 & = Q \frac{R_1}{R_1 + R_2}\\\\\\
q_2 & = Q \frac{R_2}{R_1 + R_2}
\end{align}
2. In generale, collegare a terra significa porre il potenziale di quel conduttore a 0. Il potenziale totale sarà però dato da due contributi, uno dovuto alla sfera $R_1$ (distante $d$) ed uno dovuto alla carica indotta:
\begin{align}
V_1(d) &= \frac{Q}{4\pi\epsilon_0 d}\\\\\\
V_2(R_2) &= \frac{q_2}{4\pi\epsilon_0 R_2}
\end{align}
Il fatto che la seconda sfera sia collegata a terra significa che il potenziale totale deve essere zero, da cui si ha che
$$
q_2 = -\frac{QR_2}{d}
$$
3. Se scolleghiamo $R_2$, la carica $q_2$ che inizialmente era indotta diventa fissa e, nell'ipotesi in cui $d$ è molto più grande delle dimensioni dei conduttori, si distribuisce in maniera uniforme sulla sfera. D'altro canto, collegando a terra $R_1$ questa si scarica e il suo potenziale vale $V = 0$. Siamo nelle stesse condizioni di prima, ma stavolta a parti  invertite. Con lo stesso procedimento troviamo che:
\begin{align}
V_2(d) &= \frac{q_2}{4\pi\epsilon_0 d}\\\\\\
V_1(R_1) &= \frac{q_1}{4\pi\epsilon_0 R_1}
\end{align}
Da cui si ricava
$$
q_1 = -\frac{q_2 R_1}{d} = \frac{Q R_1 R_2}{d^2}
$$

---

## Esercizio 17

### Testo

{{< figure src="../images/esercizio_17.png" width="300px">}}

Un conduttore sferico scarico di raggio $R$ contiene due cavità sferiche, rispettivamente di raggio $r_a$ e $r_b$. Al centro delle cavità sono poste due cariche $q_a$ e $q_b$. Calcolare:

1. le densità superficiali delle tre sfere;
2. il campo elettrico all'esterno del conduttore;
3. i campi elettrici all'interno delle due cavità;
4. le forze percepite dalle due cariche; c'è interazione tra le cariche?
6. Ritorniamo al caso delle cariche poste nel centro delle cavità. Come cambia *qualitativamente* la situazione se una carica $q_c$ viene posta nelle vicinanze della sfera conduttrice?

### Soluzione

1. In ognuna delle due cavità si ha induzione totale, e quindi $\sigma_a = -\frac{q_a}{4 \pi r_a^2}$, $\sigma_b = -\frac{q_b}{4 \pi r_b^2}$. D'altro canto, la sfera conduttrice non ha altre cariche, e quindi (applicando il teorema di Gauss) sulla superficie esterna deve essere depositata una carica $q_a + q_b$, quindi $\sigma_R = \frac{q_a + q_b}{4 \pi R^2}$.
2. Poiché le cariche interne sono schermate, il campo all'esterno è dato unicamente dalla carica distribuita sulla superficie. Dal teorema di Gauss troviamo:
$$
\vec{E}(r ) = \frac{q_a + q_b}{4\pi\epsilon_0} \frac{1}{r^2}\hat{r}
$$
3. Entrambe la cavità sono schermate, dall'esterno tanto quanto l'una dall'altra. In ogni cavità, quindi, il campo sarà quello generato dalla carica al suo interno e varrà $\vec{E}_a = \frac{q_a}{4\pi \epsilon_0} \frac{1}{r^2}\hat{r}$ e $\vec{E}_b = \frac{q_b}{4\pi \epsilon_0} \frac{1}{r^2}\hat{r}$, con $r$ distanza dal centro della cavità.
4. Le cariche sono al centro delle rispettive cavità, che sono schermate elettrostaticamente dall'esterno: non sentono alcuna forza.
6. Se avviciniamo una carica $q_c$, il suo effetto sarà quello di indurre spostamenti di carica su $R$ affinché il campo si annulli al suo interno. La carica totale sulla superficie di $R$ non cambierebbe ($q_R = q_a + q_b$), ma la sua distribuzione sì. All'interno invece la presenza di $q_c$ non è avvertita in forza dello schermo elettrostatico.

---

## Esercizio 18

### Testo

Sono noti la differenza di potenziale $\Delta V\_{ab}$ e le capacità di ciascun condensatore del circuito in figura:

{{< figure src="../images/esercizio_18.png" width="350px">}}

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

## Esercizio 19
<small>Esercizio II.11 del Mencuccini-Silvestrini</small>

### Testo

Tre condensatori, di capacità $C_A = C$, $C_B = 2C$, $C_C = 3C$, sono disposti come in figura:

{{< figure src="../images/esercizio_19.png" width="350px">}}

Gli elettrodi di $C_A$ e $C_B$ sono tenuti a differenze di potenziale $V_A = 10$ V e $V_B = 40$ V, mentre un elettrodo di $C_C$ è collegato a terra. Qual è la differenza di potenziale ai capi di $C_C$?

### Soluzione

Le differenze di potenziale ai capi dei tre condensatori valgono:

\begin{align}
V_A - V_C & = \frac{q_A}{C}\\\\\\
V_B - V_C & = \frac{q_B}{2C}\\\\\\
V_C & = \frac{q_C}{3C} = \frac{q_A + q_B}{3C} = \frac{cV_A - CV_C + 2CV_B - 2CV_C}{3C}
\end{align}

Da cui si ricava che

$$
V_C = \frac{V_A + 2V_B}{6} = 15\, \mathrm{V}
$$

---

## Esercizio 20

### Testo

{{< figure src="../images/esercizio_20.png" width="500px">}}

Una sfera di raggio $R_1$ è posta al centro di una sfera cava di raggio interno $R_2$ ed esterno $R_3$. I due conduttori sono mantenuti da un generatore a valori del potenziale $V_1$ e $V_2$ rispetto al potenziale all'infinito (che poniamo a 0 per comodità). 

1. Calcolare le cariche $q_1$, $q_2$ e $q_3$ depositate sulle tre superfici conduttive.
2. Calcolare numericamente le cariche se $R_1 = 10$ cm, $R_2 = 20$ cm, $R_3 = 25$ cm, $V_1 = -1000$ V, $V_2 = 200$ V.

### Soluzione

1. La differenza di potenziale tra $R_1$ ed $R_2$ si trova integrando il campo all'interno della cavità:
$$
\Delta V = V_1 - V_2 = \frac{q_1}{4\pi\epsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2} \right)
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

## Esercizio 21
<small>MVN: esercizio 4.10</small>

### Testo

{{< figure src="../images/esercizio_21.png" width="250px">}}

Cinque fogli metallici sferici e concentrici (di spessore trascurabile) sono inizialmente scarichi. Il secondo e il terzo e il quarto e il quinto sono collegati da fili conduttori. Una carica $q$ è depositata sulla superficie più interna.
Calcolare

1. le cariche presenti sulle superfici;
2. il campo $E(r )$;
3. l'energia elettrostatica del sistema;

Calcolare le stesse quantità se

{{< figure src="../images/esercizio_21_1.png" width="250px">}}
4. i conduttori 1 e 2 vengono collegati;
{{< figure src="../images/esercizio_21_2.png" width="250px">}}
5. i conduttori 3 e 4 vengono collegati;
{{< figure src="../images/esercizio_21_3.png" width="300px">}}
6. il conduttore 5 viene collegato a terra;

### Soluzione

I conduttori collegati possono essere visti come un unico conduttore, quindi il sistema può essere visto come una sfera conduttrice carica al centro di due sfere conduttrici concentriche.

1. La sfera centrale ha carica $q$. La superficie 2 si carica con $-q$ per induzione completa. Per conservazione della carica la superficie 3 acquista quindi una carica $q$. Per i conduttori 4 e 5 vale lo stesso discorso, e quindi si caricano rispettivamente con carica $-q$ e $q$.
2. Il campo è nullo all'interno dei conduttori e nelle zone comprese tra i conduttori collegati (quindi 2-3 e 4-5). Negli altri punti possiamo utilizzare il teorema di Gauss per trovare il campo, che vale sempre
$$
E(r ) = \frac{q}{4 \pi \epsilon_0 r^2}
$$
3. Il sistema può essere visto come composto da due condensatori sferici e da una superficie sferica cava. L'energia di un condensatore è semplicemente $U_e = \frac{q^2}{2C}$, dove la capacità di un condensatore sferico di raggi $R_a > R_b$ è
$$
C = 4 \pi \epsilon_0 \frac{R_a R_b}{R_a - R_b}
$$
L'energia elettrostatica di una sfera conduttrice carica può essere calcolata in due modi equivalenti:
	1. considerandola come un'armatura di un condensatore piano avente l'altra armatura all'infinito. In questo caso possiamo associarle una capacità $C\_\infty = 4 \pi \epsilon_0 R_b$ che può essere utilizzata per calcolarne l'energia elettrostatica;
	2. utilizzando la relazione che lega il campo all'energia, $U_e = \frac{1}{2} \epsilon_0 \int\_V E^2 d\tau$
In entrambi i casi otteniamo $U_e = \frac{q^2}{8 \pi \epsilon_0 R_5}$, e l'energia totale vale quindi
$$
U_e = \frac{q^2}{8 \pi \epsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2} + \frac{1}{R_3} - \frac{1}{R_4} + \frac{1}{R_5}\right)
$$
4. Collegare i due conduttori azzera la loro carica e quindi annulla il campo nell'intercapedine (e quindi l'energia elettrostatica associata al condensatore).
5. Come sopra.
6. Collegare a terra il conduttore più esterno lo fa scaricare, e quindi carica, campo ed energia si annullano.