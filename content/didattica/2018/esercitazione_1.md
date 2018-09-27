+++
title = "Esercitazione 27/09/2018"
date = 2018-09-22T09:47:43+02:00
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

[Esercizio 1](#esercizio-1) -- [Esercizio 2](#esercizio-2) -- [Esercizio 3](#esercizio-3) -- [Esercizio 4](#esercizio-4) 

## Esercizio 1
<small>Dall'esempio 1.1 del MNV</small>

### Testo

Un corpo di massa $m$ avente carica $q$ è sospeso ad una distanza $h$ dal suolo, dove è presente un'altra carica dello stesso valore ($q$). Entrambe le cariche possono essere considerate puntiformi.

1. Scrivere la relazione tra $m$ e $q$ per la quale il corpo rimane sospeso ad altezza $h$.
2. Data la relazione trovata al punto precedente, se $h = 1~\mathrm{m}$ e $m = 70~\mathrm{Kg}$, quanto vale $q$?
3. Di quante cariche elementari "spaiate" abbiamo bisogno per generare la carica di cui al punto precedente?

### Soluzione

1. Il corpo risente della forza peso e di quella di Coulomb. Se orientiamo l'asse $y$ perpendicolare al suolo, la forza peso è diretta verso $y$ negative, mentre quella di Coulomb è diretta verso $y$ positive. Se si vuole che la distanza dal suolo non cambi si deve imporre che la forza totale agente sul corpo sia 0, cioè
$$
F_y = -mg + \frac{1}{4\pi\epsilon_0}\frac{q^2}{h^2}
$$
L'equazione precedente fissa il valore del rapporto tra il quadrato delle cariche e quello della massa:
$$
\frac{q^2}{m} = 4\pi\epsilon_0h^2g
$$
**Nota Bene:** la carica compare al quadrato: non importa che $q$ sia positiva o negativa, perché due cariche dello stesso tipo si respingono *sempre*.

2. Dal punto precedente si ha che, sostituendo i valori numerici, $q = \sqrt{4\pi\epsilon_0h^2mg} = 2.76\times10^{-4} C$.
3. Per trovare la soluzione dividiamo la carica totale per il valore (in modulo), trovando
$$
N_c = \frac{2.76 \times 10^{-4}}{1.6\times 10^{-19}} \approx 1.73\times 10^{15}
$$

---

## Esercizio 2
<small>Dall'esempio 1.3 del MNV</small>

### Testo

Un oggetto (puntiforme) di massa $m$ e carica $q_0$ è sospeso ad un filo. Una carica $q$ viene posta a distanza $x_0$ da $q_0$ (in maniera tale che, all'equilibrio, entrambe si trovino alla stessa distanza dal suolo). Per effetto della forza elettrica, il filo formerà un angolo $\theta$ rispetto alla verticale.

1. Scrivere l'espressione di $\theta$ in funzione di $x_0$.
2. Approssimare l'espressione per piccoli valori di $\theta$.
3. Calcolare $\theta$ per $m = 2\times 10^{-3}~\mathrm{Kg}$, $q_0 = 2\times 10^{-9}~\mathrm{C}$, $q = 5\times 10^{-7}~\mathrm{C}$, e $x = 5~\mathrm{cm}$ con e senza l'approssimazione del punto precedente.

### Soluzione

1. Consideriamo un sistema di riferimento nel quale la forza peso $\vec{F}_g$ è diretta lungo $-\hat{y}$, mentre quella elettrica $\vec{F}_e$ è lungo $\hat{x}$. Le forze in gioco sono 3: la forza peso, quella elettrica e la tensione del filo. All'equilibrio, la risultante di queste forze deve essere nulla, e quindi $\vec{T} + \vec{F}_e +\vec{F}_g = 0$. Se disegniamo questi vettori troviamo immediatamente il legame tra la forza peso, quella elettrica e l'angolo $\theta$:
$$
\tan{(\theta)} = \frac{F_e}{F_g} = \frac{q q_0}{4\pi\epsilon_0 mg x_0^2}
$$

2. Se $\theta$ è piccolo, $\sin{(\theta)} \approx \theta$, $\cos{(\theta)} \approx 0$ e $\tan{(\theta)} \approx \theta$, quindi si trova che $\theta$ è proporzionale sia a $q$ che a $q_0$.
3. Sostituiamo i valori numerico nelle relazioni precedenti. Nel caso "esatto" troviamo $\tan{(\theta)} = 0.1833$, e quindi $\theta = 0.1813 = 10.4^\circ$, mentre nel caso approssimato troviamo $\theta = 0.1833 = 10.5^\circ$.

---

## Esercizio 3

### Testo

Consideriamo due cariche $q$ disposte parallele all'asse $y$ e distanti $2L$. Calcolare il campo elettrostatico in un punto generico $x_0$ equidistante dalle due cariche.

### Soluzione

Utilizziamo il sistema di riferimento nel quale le due cariche hanno coordinate $\vec{r}\_1 = (0, L)$ e $\vec{r}\_2 = (0, -L)$ e il punto che ci interessa ha coordinate $\vec{r}\_0 = (x_0, 0)$. Studiamo il campo generato dalla prima carica, rispetto alla quale $\vec{r}\_{01} = \vec{r}_0 - \vec{r}_1 = (x_0, -L)$, $r\_{01} = \sqrt{x_0^2 + L^2}$ e quindi $\hat{r}\_{01} = \frac{1}{r\_{01}}(x_0, -L)$:

$$
E_x^{01} = \frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2} \frac{x_0}{r\_{01}}
$$
$$
E_y^{01} = -\frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2} \frac{L}{r\_{01}}
$$

D'altra parte, rispetto alla seconda carica abbiamo $\vec{r}\_{02} = \vec{r}_0 - \vec{r}_2 = (x_0, L)$, $r\_{02} = \sqrt{x_0^2 + L^2} = r\_{01}$, $\hat{r}\_{02} = \frac{1}{r\_{02}}(x_0, L)$ e quindi

$$
E_x^{02} = \frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2} \frac{x_0}{r\_{01}}
$$
$$
E_y^{02} = \frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2} \frac{L}{r\_{01}}
$$

Il campo totale è la sovrapposizione (cioè, la somma) dei due, e quindi si ha $E_x = 2E_x^{01}$ e $E_y = 0$.

Possiamo ritrovare lo stesso risultato considerando che, in generale, se definiamo $\theta$ come l'angolo compreso tra il campo e l'asse $x$, $E_x^{01} = |\vec{E}\_{01}|\cos{\theta}$ e $E_y^{01} = |\vec{E}\_{01}|\sin{\theta}$. Nel caso specifico dell'esercizio vale l'uguaglianza trigonometrica $\cos{\theta} = \frac{x_0}{r\_{01}}$, mentre il modulo di $\vec{E}$ si ricava dalla legge di Coulomb, $|\vec{E}| = \frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2}$. Vale quindi:

$$
E_x^{01} = \frac{1}{4\pi\epsilon_0} \frac{qx_0}{r\_{01}^3}
$$

in accordo col risultato precedente.

---

## Esercizio 4
<small>Dall'esempio 1.6 del MNV</small>

### Testo

Una carica $q$ è distribuita uniformemente su un *sottile* anello di raggio $R$.

1. Senza calcolarlo, discutere qualitativamente il comportamento del campo elettrostatico lungo l'asse dell'anello (che prendiamo coincidente con l'asse $x$) al variare di $x$.
2. Calcolare il campo elettrico in $\vec{r} = (x, 0, 0)$ al variare di $x$.
3. Scrivere l'espressione approssimata del campo quando $x \gg R$.

### Soluzione

1. Lungo l'asse dell'anello il problema ha simmetria cilindrica: lì il campo (se diverso da 0) non può che essere parallelo ad $\hat{x}$. Inoltre, si deve annullare per $x = 0$ (cioè al centro dell'anello), ancora una volta per simmetria.

2. Prendiamo un elementino di carica $dq$. Questo genererà un campo infinitesimo in $x$ di intensità:
$$
d|\vec{E}| = \frac{dq}{4\pi\epsilon_0}\frac{1}{r^2}
$$
dove $r = \sqrt{R^2 + x^2}$. Sappiamo però che, lungo l'asse dell'anello, la componente $y$ del campo (totale) si deve annullare. Dobbiamo quindi utilizzare la relazione precedente per trovare l'unica componente diversa da zero, $E_x$. Per fare ciò proiettiamo il campo lungo $x$ utilizzando la relazione $E_x = |\vec{E}|\cos{(\theta)}$, con $\cos{(\theta)} = \frac{x}{r}$ (disegnare per credere). Si ottiene quindi

$$
dE_x = \frac{dq}{4\pi\epsilon_0}\frac{x}{r^{3 / 2}}
$$

La somma di tutti i contributi è banale, perché tutti gli elementini $dq$ generano lo stesso campo in $x$ e quindi si ottiene

$$
\vec{E} = E_x\hat{x} = \frac{q}{4\pi\epsilon_0}\frac{x}{r^{3 / 2}}\hat{x} = \frac{q}{4\pi\epsilon_0}\frac{x}{(R^2 + x^2)^{3 / 2}}\hat{x}
$$

3. $x \gg R$ implica $\frac{R}{x} \ll 1$. Riscriviamo l'espressione ottenuta al punto precedente in modo da far comparire quest'ultima frazione:
$$
E_x = \frac{q}{4\pi\epsilon_0}\frac{x}{x^3\left(\frac{R^2}{x^2} + 1\right)^{3 / 2}} \approx \frac{q}{4\pi\epsilon_0}\frac{1}{x^2}
$$
Se ci si allontano molto dall'anello, il dettaglio della distribuzione di carica non si distingue più ed il campo tende ad essere quello generato da una carica puntiforme posizionata nel centro dell'anello!
