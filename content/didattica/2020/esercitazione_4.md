+++
title = "Esercitazione del 15/10/2019"
date = 2019-10-13T09:47:43+02:00
draft = false
+++

[Richiami di matematica](#richiami-di-matematica-coordinate-sferiche-e-polari) -- [Esercizio 15](#esercizio-15) -- [Esercizio 16](#esercizio-16) -- [Esercizio 17](#esercizio-17)

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
* In coordinate sferiche $d\tau = ds_r ds\_\theta ds\_\phi = r^2 \sin(\theta) dr d\theta d\phi$. 

L'espressione si semplifica in casi specifici:

* se l'integrando non dipende da $\theta$, $d\tau = 2 r^2 dr d\phi$;
* se l'integrando non dipende da $\phi$, $d\tau = 2 \pi r^2 \sin(\theta) dr d\theta$;
* se l'integrando non dipende né da $\theta$ né da $\phi$, $d\tau = 4\pi r^2 dr$.

### Coordinate polari

Il discorso si semplica in 2D, dove si hanno solamente $r$ e $\theta$:

$$
\left\lbrace
\begin{aligned}
x &= r \cos(\theta)\\\\\\
y &= r \sin(\theta)
\end{aligned}
\right.
$$

Per gli spostamenti infinitesimi:

* Se ci si muove lungo $\hat{r}$, $r$ aumenta e $\times$ si sposta di una quantità pari all'incremento. Si ha quindi uno spostamento pari a $ds_r = dr$.
* Se ci si muove lungo $\hat{\theta}$ di un angolo $d\theta$, lo spostamento sarà pari a $ds\_\theta = 2 r \sin(d\theta / 2) \approx r d\theta$, dove abbiamo utilizzato il fatto che $\sin (\alpha) \approx \alpha$ per piccoli valori di $\alpha$.

L'espressione di una porzione infinitesimo della superficie è quindi $d\Sigma = dx dy = r dr d\theta$. Se l'integrando non dipende da $\theta$ si ha $d\Sigma = 2 \pi r dr$.

---

## Esercizio 15
<small>Esempio 3.3 del MNV</small>

### Testo

{{< figure src="../images/esercizio_15.png" width="300px">}}

Utilizzare il teorema di Gauss per calcolare 

1. il campo elettrostatico generato da un cilindro indefinito di raggio $R$ caricato uniformemente con densità di carica $\rho$ in ogni punto dello spazio.
2. La differenza di potenziale tra due punti distanti dal centro del cilindro, rispettivamente, $r_1 > R$ e $r_2 > R$.

### Soluzione

1. Il campo ha sicuramente direzione radiale, cioè $\vec{E}(r ) = E(r ) \hat{r}$. Per calcolare il modulo $E(r )$ applichiamo il teorema di Gauss ad un cilindro di raggio $r$ ed altezza $h$ coassiale al cilindro carico. Poiché il campo è radiale, il suo flusso attraverso le basi del cilindro è nullo. Calcoliamo il flusso attraverso la superficie laterale:
$$
\oint\_{\Sigma} \vec{E} \cdot \hat{n} d\Sigma = E(r ) \oint\_{\Sigma} d\Sigma = E(r ) 2 \pi r h
$$
La carica totale contenuta all'interno della superficie è data da:
$$
\int\_{\tau} \rho d\tau = \rho \pi R^2 h
$$
Applicando il teorema di Gauss si trova:
$$
E(r ) = \frac{\rho R^2}{2 \epsilon_0 r} = \frac{\lambda}{2 \pi\epsilon_0 r}
$$
avendo definito la densità di carica *lineare* $\lambda = \rho \pi R^2$. Questa espressione è valida anche per fili *sottili* caricati con la stessa densità di carica $\lambda$.

2. La differenza di potenziale si calcola utilizzando la definizione di potenziale:
$$
\Delta V = - \int\_{r_2}^{r_1} E dr = - \frac{\rho R^2}{2 \epsilon_0 } \int\_{r_2}^{r_1} \frac{1}{r}dr = \frac{\rho R^2}{2 \epsilon_0} \log{\left ( \frac{r_2}{r_1} \right)}
$$
Possiamo usare questa relazione per calcolare la capacità di un condensatore cilindrico di altezza $h$, per il quale si ha $q = \rho \pi R^2 h$, quindi la differenza di potenziale si può scrivere come
$$
\Delta V = \frac{q}{2 \pi \epsilon_0} \log{\left ( \frac{r_2}{r_1} \right)}
$$
e quindi
$$
C = \frac{q}{\Delta V} = \frac{2 \pi \epsilon_0 h}{\log\left(\frac{r_2}{r_1}\right)}
$$

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
5. Come cambierebbe la situazione se $q_a$ e $q_b$ fossero poste inizialmente non esattamente nel centro e fossero libere di muoversi?
6. Ritorniamo al caso delle cariche poste nel centro delle cavità. Come cambia *qualitativamente* la situazione se una carica $q_c$ viene posta nelle vicinanze della sfera conduttrice?

### Soluzione

1. In ognuna delle due cavità si ha induzione totale, e quindi $\sigma_a = -\frac{q_a}{4 \pi r_a^2}$, $\sigma_b = -\frac{q_b}{4 \pi r_b^2}$. D'altro canto, la sfera conduttrice non ha altre cariche, e quindi (applicando il teorema di Gauss) sulla superficie esterna deve essere depositata una carica $q_a + q_b$, quindi $\sigma_R = \frac{q_a + q_b}{4 \pi R^2}$.
2. Poiché le cariche interne sono schermate, il campo all'esterno è dato unicamente dalla carica distribuita sulla superficie. Dal teorema di Gauss troviamo:
$$
\vec{E}(r) = \frac{q_a + q_b}{4\pi\epsilon_0} \frac{1}{r^2}\hat{r}
$$
3. Entrambe la cavità sono schermate, dall'esterno tanto quanto l'una dall'altra. In ogni cavità, quindi, il campo sarà quello generato dalla carica al suo interno e varrà $\vec{E}_a = \frac{q_a}{4\pi \epsilon_0} \frac{1}{r^2}\hat{r}$ e $\vec{E}_b = \frac{q_b}{4\pi \epsilon_0} \frac{1}{r^2}\hat{r}$, con $r$ distanza dal centro della cavità.
4. Le cariche sono al centro delle rispettive cavità, che sono schermate elettrostaticamente dall'esterno: non sentono alcuna forza.
5. Se le cariche non fossero centrate verrebbero attirate dalla densità di carica indotta sulle superfici interne. Dopo un certo tempo, entrambe le cariche toccherebbero le superfici del conduttore, caricandolo. Si otterrebbe quindi $\sigma_a = \sigma_b = 0$, e quindi i campi all'interno delle cavità si annullerebbero. Date le note proprietà dei conduttori, il campo esterno rimarrebbe invariato (così come $\sigma_R$).
6. Se avviciniamo una carica $q_c$, il suo effetto sarà quello di indurre spostamenti di carica su $R$ affinché il campo si annulli al suo interno. La carica totale sulla superficie di $R$ non cambierebbe ($q_R = q_a + q_b$), ma la sua distribuzione sì. All'interno invece la presenza di $q_c$ non è avvertita in forza dello schermo elettrostatico.
