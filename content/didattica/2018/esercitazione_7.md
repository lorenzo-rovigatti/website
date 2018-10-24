+++
title = "Esercitazione 24/10/2018"
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

[Esercizio 29](#esercizio-29) -- [Esercizio 30](#esercizio-30) -- [Esercizio 31](#esercizio-31) -- [Esercizio 32](#esercizio-32) -- [Esercizio 33](#esercizio-33) -- [Esercizio 34](#esercizio-34)

## Esercizio 29

### Testo

Un piano conduttore indefinito è carico con densità superficiale di carica $\sigma$. Su una delle due superfici viene appoggiata una lastra di materiale dielettrico omogeneo e lineare di spessore $h$ e costante dielettrica $\kappa$.

1. Calcolare le densità di carica di polarizzazione presenti sulle superfici del dielettrico.
2. Scrivere l'espressione della d.d.p. tra un punto all'interno del conduttore e uno all'esterno (dal lato del dielettrico).

### Soluzione

1. Il campo generato da una piano conduttore carico nel vuoto è
$$
\vec{E}_v = \frac{\sigma}{\epsilon_0} \hat{n}
$$
dove $\hat{n}$ è la normale al piano. All'interno di un dielettrico $\epsilon_0 \to \epsilon = \kappa \epsilon_0$, quindi
$$
\vec{E}_d = \frac{\sigma}{\kappa\epsilon_0} \hat{n}
$$
cioè l'intensità del campo diminuisce di un fattore $\kappa$. Sulle superfici del dielettrico appariranno delle densità di carica $\sigma_p$ in forza del fenomeno della polarizzazione. Queste densità di carica sono legate alla polarizzazione tramite la relazione $\sigma_p = \vec{P} \cdot \hat{n}$, dove $\vec{P} = \epsilon_0 (\kappa - 1) \vec{E}$ è il vettore polarizzazione (diverso da zero solo all'interno del dielettrico), che in questo caso vale quindi:
$$
\vec{P} = \frac{\kappa - 1}{\kappa} \sigma \hat{n}.
$$
Il dielettrico che stiamo considerando ha due superfici, una con normale diretta *verso* il conduttore, l'altra in verso opposto. Avremo quindi due densità di polarizzazione date da:
$$
\sigma_p = \pm \vec{P} \cdot \hat{n} = \pm \frac{\kappa - 1}{\kappa} \sigma
$$

2. Abbiamo visto come il campo elettrico assuma valori diversi all'interno e all'esterno del dielettrico. La d.d.p. tra la superficie del conduttore (su cui consideriamo $V(0) = 0$) ed un punto all'interno del dielettrico vale:
$$
\Delta V(x < h) = \int_0^x \frac{\sigma}{\epsilon} dx' = \frac{\sigma}{\epsilon}x
$$
Sulla seconda superficie del dielettrico si avrà quindi
$$
\Delta V(h) = \frac{\sigma}{\epsilon}h
$$
Per distanze maggiori, il campo da integrare è quello nel vuoto, quindi:
$$
\Delta V(x > h) = \int_0^h \frac{\sigma}{\epsilon} dx' + \int_h^x \frac{\sigma}{\epsilon_0} dx' = \frac{\sigma}{\epsilon}h + \frac{\sigma}{\epsilon_0}(x - h)
$$
Per validare il risultato basta vedere cosa succede se $\kappa = 1$...

---

## Esercizio 30

### Testo

Un cilindro conduttore di raggio $R_1$ caricato con densità di carica superficiale $\sigma$, è posto al centro di un cilindro cavo, anch'esso conduttore, di raggio interno $R_3$ ed esterno $R_4$. Lo spazio interno tra le superfici è riempito con due dielettrici, anch'essi a forma di cilindro cavo. Il primo, di costante dielettrica $\kappa_1$, ha raggi $R_1$ ed $R_2$, il secondo $R_2$ ed $R_3$. 

1. Calcolare $\vec{E}$, $\vec{D}$ e $\vec{P}$.
2. Calcolare le densità di polarizzazione sulle superfici dei dielettrici.
3. Calcolare la d.d.p. tra il cilindro interno ed un punto qualsiasi all'esterno del guscio cilindrico nei casi in cui quest'ultimo sia messo a terra oppure no.

### Soluzione

1. All'interno dei conduttori $\vec{E}$, e quindi anche $\vec{D}$ e $\vec{P}$, che sono proporzionali ad $\vec{E}$, sono nulli. All'esterno del cilindro cavo si ha, per il teorema di Gauss,
$$
\vec{E}(r ) = \frac{\sigma R_4}{\epsilon_0 r}\hat{r}.
$$
essendoci il vuoto, $\vec{P} = 0$ e quindi $\vec{D}(r ) = \epsilon_0\vec{E}( r) = \frac{\sigma R}{r}\hat{r}$. All'interno dei dielettrici, se utilizziamo il teorema di Gauss per $\vec{D}$ troviamo che vale sempre (indipendentemente dal fatto che ci troviamo in un dielettrico o nell'altro)
$$
\vec{D}( r) = \frac{\sigma R_1}{r} \hat{r}
$$
questo perché le uniche cariche libere (cioè non dovute alla polarizzazione) sono quelle che si trovano sulla superficie del cilindro interno. Poiché $\vec{D} = \epsilon \vec{E} = \epsilon_0 \vec{E} + \vec{P}$ e quindi $\vec{P} = \epsilon_0 (\kappa - 1) \vec{E}$, si ha
\begin{align}
\vec{E} & = \frac{\sigma R_1}{\kappa_i \epsilon_0 r} \hat{r}\\\\\\
\vec{P} & = \frac{\kappa_i - 1}{\kappa_i} \frac{\sigma R_1}{r} \hat{r}
\end{align}
dove $i = 1, 2$ a seconda del dielettrico considerato.

2. La densità di polarizzazione vale sempre $\sigma_p = \vec{P} \cdot \hat{n}$. Sulla superficie interna:
$$
\sigma^{(1)}_p(R_1) = -\frac{\kappa_1- 1}{\kappa_1} \sigma
$$
Sulla superficie esterna del primo dielettrico:
$$
\sigma^{(1)}_p(R_2) = \frac{\kappa_1 - 1}{\kappa_1} \frac{\sigma R_1}{R_2} = -\sigma^{(1)}_p(R_2)\frac{R_1}{R_2}
$$
Sulla superficie interna del secondo dielettrico:
$$
\sigma^{(2)}_p(R_2) = -\frac{\kappa_2 - 1}{\kappa_2} \frac{\sigma R_1}{R_2}
$$
Mentre sulla superficie esterna del secondo dielettrico:
$$
\sigma^{(2)}_p(R_2) = \frac{\kappa_2 - 1}{\kappa_2} \frac{\sigma R_1}{R_3} = -\sigma^{(1)}_p(R_2)\frac{R_2}{R_3}
$$
Questi valori si possono validare a due a due considerando che la quantità di carica di polarizzazione in un dielettrico (comprese le sue superfici) deve essere zero!

3. Per il principio della gabbia di Faraday, il fatto che il conduttore più esterno sia messo o meno a terra non cambia la d.d.p. tra i due conduttori, che vale sempre:
$$
\Delta V\_{1,3} = V(R_1) - V(R_3) = \int\_{R_1}^{R_3} \vec{E} \cdot d\vec{s} = \int\_{R_1}^{R_2} \frac{\sigma R_1}{\kappa_1 \epsilon_0 r} dr + \int\_{R_2}^{R_3} \frac{\sigma R_1}{\kappa_2 \epsilon_0 r} dr = \frac{\sigma R_1}{\epsilon_0} \left( \frac{1}{\kappa_1} \log\left( \frac{R2}{R1}\right) + \frac{1}{\kappa_2} \log\left( \frac{R3}{R2}\right)\right)
 $$
 D'altro canto, la d.d.p. tra il guscio esterno ed un punto qualsiasi al suo esterno vale $0$ nel caso sia messo a terra (applicate il teorema di Gauss per dimostrarlo!), oppure
 $$
 \Delta V_4(r ) = \int\_{R_4}^r \frac{\sigma R_4}{\epsilon_0 r} dr = \frac{\sigma R_4}{\epsilon_0} \log\left( \frac{r}{R_4} \right)
 $$
 nel caso in cui non lo sia (vedi sopra per l'espressione del campo). La differenza di potenziale totale è quindi diversa nei due casi e vale:
 \begin{align}
\Delta V(r ) & = \Delta V\_{1,3} + \Delta V_4(r )\\\\\\
\Delta V(r ) & = \Delta V\_{1,3}
 \end{align}

## Esercizio 31
<small>Ispirato dall'esercizio III.13 del Mencuccini-Silvestrini</small>

### Testo

Un condensatore piano di dimensioni $a \times b \times h$ è parzialmente riempito (per un tratto $x = a / 3$) di una lastra di dielettrico omogeneo e isotropo con $\kappa = 4$ e mantenuto ad una d.d.p. $\Delta V$. 

1. Quanto vale la carica $q_d$ che si dispone sulla parte di armatura superiore che si affaccia sul dielettrico?
2. Calcolare $q_d$ se $\Delta V = 113$ V, $a = b = 10$ cm e $h = 2$ mm.

### Soluzione

1. Il condensatore può essere visto come due condensatori in parallelo di capacità $C_d = \epsilon_0 \kappa ab / 3h$ e $C_v = 2 \epsilon_0 ab / 3$. La capacità totale è quindi:
$$
C\_{\rm eq} = \frac{\epsilon_0 ab}{h} \left( \frac{\kappa}{3} + \frac{2}{3} \right) = \frac{2\epsilon_0 a b}{h}
$$
La carica totale sulle armatura è data da:
$$
q = q_d + q_i = \Delta V C\_{\rm eq} = \Delta V \frac{2 \epsilon_0 a b}{h}
$$
Poiché la d.d.p. tra i due "condensatori" deve essere la stessa, si deve avere
$$
\frac{q_d}{C_d} = \frac{q_v}{C_v}
$$
e quindi
$$
\frac{q_d}{2} = q_i = q - q_d
$$
da cui si ricava
$$
q_d = \frac{2}{3} q = \Delta V \frac{4 \epsilon_0 a b}{3 h}
$$

2. Sostituiamo i valori dati nelle relazione trovata al punto precedente:
$$
q_d = \frac{4}{3} 113 \cdot 8.854 \times 10^{-12} \frac{0.1 \cdot 0.1}{0.002}\, \mathrm{C} = 0.667 \times 10^{-8} \, \mathrm{C}
$$

---

## Esercizio 32

### Testo

Un condensatore piano di dimensioni $a \times b \times h_i$ è riempito completamente da un liquido incomprimibile dielettrico di costante relativa $\kappa$ e mantenuto da un generatore ad una d.d.p. $\Delta V$ costante. Se la distanza tra le due armature diventa $1.5 h_i$,

1. come varia la capacità del condensatore?
2. se prima di fare questa operazione di allontanamento il generatore venisse spento, cosa succederebbe?
3. se l'operazione precedente venisse ripetuta per un dielettrico solido, quale sarebbe l'espressione della d.d.p.?

### Soluzione

1. La capacità iniziale del condensatore è:
$$
C_i = \frac{\epsilon_0 a b \kappa}{h_i}
$$
Poiché il liquido è incomprimibile, il volume che occupa rimane costante. Il volume iniziale è $V_i = abh_i$, mentre quello finale vale $V_f = 1.5 a x h_0$, dove $x$ è l'altezza che raggiunge dopo la variazione di distanza. Ponendo $V_i = V_f$ si ottiene $x = \frac{2}{3}b$. La capacità finale sarà quindi:
$$
C_f = \frac{4}{9} \epsilon_0 a b \kappa + \frac{2}{9} \epsilon_0 a b = \frac{\epsilon_0 a b}{h_i} \left( \frac{4}{9}\kappa + \frac{2}{9} \right)
$$

La differenza di capacità vale quindi:
$$
\Delta C = C_f - C_i = \frac{\epsilon_0 a b}{h_i} \left( \frac{4}{9}\kappa + \frac{2}{9} - \kappa \right) = \frac{\epsilon_0 a b}{h_i} \left( \frac{2}{9} - \frac{5}{9}\kappa \right)
$$
2. Se il generatore venisse spento *prima* di allontanare le armature, la carica sulle armature resterebbe la stessa. Inizialmente abbiamo
$$
q_i = \Delta V C_i
$$
D'altro canto alla fine avremmo
$$
q_f = \Delta V_f C_f = q_i = \Delta V C_i
$$
e quindi la nuova d.d.p. tra le armature sarebbe:
$$
\Delta V_f = \Delta V \frac{C_i}{C_f} = \Delta V \frac{9\kappa}{4\kappa + 2}
$$
3. Definito $\sigma = q_i / ab$, il campo nel vuoto è $E = \sigma / \epsilon_0$, mentre nel dielettrico è $E = \sigma / \kappa\epsilon_0$. Il potenziale tra le armature vale quindi:
$$
\Delta V = \frac{\sigma \left(\frac{3}{2} h_i - h_i\right)}{\epsilon_0} + \frac{\sigma h_i}{\kappa\epsilon_0} = \frac{q}{ab\epsilon_0}\left(\frac{h_i}{2} + \frac{h_i}{\kappa}\right)
$$

---

## Esercizio 33

Un conduttore cilindro cavo di lunghezza $h$ ha raggio interno $R_1$ ed esterno $R_2$ ed è costituito da un materiale di resistività $\rho$.

1. Calcolare la resistenza $R$ che oppone ad una corrente che scorre in direzione parallela al cilindro.
2. Dati $R_1 = 1$ mm, $R_2 = 1.5$ mm, $h = 1$ m e se nel conduttore scorre una corrente $i = 500$ mA e il campo all'interno del conduttore ha intensità $E = 10$ V/m, quanto vale la resistività $\rho$?

### Testo

1. Applichiamo la definizione di resistenza:
$$
R = \rho \int_0^h \frac{dh}{\Sigma(h)} = \rho \int_0^h \frac{dh}{\pi (R_2^2 - R_1^2)} = \frac{\rho h}{\pi (R_2^2 - R_1^2)}
$$
2. Dobbiamo prima applicare la legge di Ohm per trovare la resistenza. Per farlo, però, dobbiamo prima calcolare la d.d.p. ai capi del conduttore:
$$
\Delta V = Eh = 10\, {\rm V}
$$
Quindi:
$$
R = \frac{\Delta V}{i} = 20\, {\rm \Omega} = \rho \frac{h}{\pi (R_2^2 - R_1^2)}
$$
e quindi la resistività vale:
$$
\rho = \frac{R \pi (R_2^2 - R_1^2)}{h} = 7.85 \times 10^{-5} \, \Omega{\rm m}
$$

### Soluzione

---

## Esercizio 34

### Testo

Dato il circuito in figura e i valori $R_1 = 1.0\, \Omega$, $R_2 = 3.0\, \Omega$, $R_3 = 2.0\, \Omega$ and $R_4 = 2.0\, \Omega$,

{{< figure src="/didattica/2018/images/esercizio_33.png" alt="Figura esercizio 27" width="350px">}}

1. Calcolare la resistenza equivalente.
2. Calcolare la potenza dissipata da ognuno dei quattro resistori se $V_0 = 6$ V.

### Soluzione

1. $R_2$ ed $R_3$ sono in parallelo, e quindi si ha
$$
R\_{\rm eq}^{(1)} = \frac{R_2 R_3}{R_2 + R_3} = 1.2 \, \Omega
$$
$R_1$ e $R\_{\rm eq}^{(1)}$ sono in serie, quindi
$$
R\_{\rm eq}^{(2)} = R_1 + R\_{\rm eq}^{(1)} = 2.2 \Omega
$$
Restano solamente due resistori ($R_4$ e $R\_{\rm eq}^{(2)}$), che sono collegati in parallelo:
$$
R\_{\rm eq} = \frac{R_4 R\_{\rm eq}^{(2)}}{R_4 + R\_{\rm eq}^{(2)}} = 1.05 \, \Omega
$$
2. Sappiamo che $\mathcal{P} = \Delta V i = R i^2 = \frac{\Delta V^2}{R}$. Per poter applicare queste relazioni dobbiamo prima trovare o le d.d.p. ai capi dei resistori, o le correnti che passano al loro interno o entrambi. Sappiamo che la corrente totale è data da:
$$
i = \frac{V_0}{R\_{\rm eq}} = 5.73 \, {\rm A}
$$
Quella passante per $R_4$ vale
$$
i_4 = \frac{V_0}{R_4} = 3\, {\rm A}
$$
e quindi, per la condizione di stazionarietà, quella che passa nel ramo superiore (che, sempre per lo stesso principio, passa anche per $R_1$) vale
$$
i_1 = i - i_4 = 2.72\, {\rm A}
$$
Quindi la d.d.p. ai capi di $R_1$ è:
$$
\Delta V_1 = R_1 i_1 = 2.71 \, {\rm V}
$$
Quindi la d.d.p. ai capi di $R_2$ ed $R_3$ vale:
$$
\Delta V\_{\rm eq}^{(1)} = V_0 - \Delta V_1 = 3.27\, {\rm V}
$$
per cui le correnti negli ultimi due resistori valgono:
\begin{align}
i_2 & = \frac{\Delta V\_{\rm eq}^{(1)}}{R_2} = 1.09 \, {\rm A}\\\\\\
i_3 & = \frac{\Delta V\_{\rm eq}^{(1)}}{R_3} = 1.63 \, {\rm A}
\end{align}
**Nota Bene**: perché $i_2 + i_3 \neq i_1$? Perché tagliando i decimali finali stiamo sempre approssimando i valori numerici... Se calcolassimo tutte le quantità senza approssimare ad ogni passaggio e stampassimo *tutte* le cifre decimali vedremmo che le correnti verrebbero identiche. Dai valori delle correnti otteniamo la potenza:
\begin{align}
\mathcal{P}_1 & = R_1 i_1^2 = 7.4 \, {\rm W}\\\\\\
\mathcal{P}_2 & = R_2 i_2^2 = 3.6 \, {\rm W}\\\\\\
\mathcal{P}_3 & = R_3 i_3^2 = 8.7 \, {\rm W}\\\\\\
\mathcal{P}_4 & = R_4 i_4^2 = 18 \, {\rm W}\\\\\\
\end{align}

---