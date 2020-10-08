+++
title = "Esercitazione del 06/10/2020"
date = 2019-10-01T09:47:43+02:00
draft = false
+++

[Esercizio 0](#esercizio-0) -- [Esercizio 1](#esercizio-1) -- [Esercizio 2](#esercizio-2) -- [Esercizio 3](#esercizio-3) -- [Esercizio 4](#esercizio-4) 

## Esercizio 0
<small>Suggerito alla fine della lezione del 30/09/2020</small>

### Testo

Due cariche $q_1 = 10^{-9}$ C e $q_2 = -2 \times 10^{-9}$ C si trovano in $\vec{r}_1 = (1, 0, 2)$ e $\vec{r}_2 = (0, -1, 0)$, dove le componenti dei vettori sono da intendersi misurate in metri. 

1. Scrivere l'espressione della forza esercitata dalla carica 2 sulla 1, $\vec{F}_{21}$.
2. Calcolare il modulo di $\vec{F}_{21}$.

### Soluzione

1. Il vettore che congiunge 2 ad 1 vale 
$$
\vec{r}\_{21} = \vec{r}\_1 - \vec{r}\_2 = (1, 1, 2),
$$
che ha modulo $r\_{21} = \sqrt{6}$ e versore associato $\hat{r} = \frac{1}{\sqrt{6}}(1, 1, 2)$. Sostituendo queste quantità nella legge dI Coulomb troviamo
$$
\vec{F}\_{21} = \frac{q_1 q_2}{24 \sqrt{6} \pi \epsilon_0} (1, 1, 2)
$$
2. Il modulo del vettore scritto sopra vale $F\_{21} = -\frac{q_1 q_2}{24 \pi \epsilon_0} = 3 \times 10^{-9}$ N.

## Esercizio 1
<small>Dall'esempio 1.3 del MNV</small>

### Testo

{{< figure src="../images/esercizio_1.png" width="200px">}}

Un oggetto (puntiforme) di massa $m$ e carica $q_0$ è sospeso ad un filo. Una carica fissa $q$ è posta alla stessa distanza dal suolo di $q_0$, ma a distanza $x_0$ da quest'ultima (vedi disegno). Il sistema è in equilibrio. Per effetto della forza elettrica, il filo formerà un angolo $\theta$ rispetto alla verticale.

1. Scrivere l'espressione di $\theta$ in funzione di $x_0$.
2. Calcolare $\theta$ per $m = 2\times 10^{-3}~\mathrm{Kg}$, $q_0 = 2\times 10^{-9}~\mathrm{C}$, $q = 5\times 10^{-7}~\mathrm{C}$, e $x_0 = 5~\mathrm{cm}$.

### Soluzione

1. Consideriamo un sistema di riferimento nel quale la forza peso $\vec{F}_g$ è diretta lungo $-\hat{y}$, mentre quella elettrica $\vec{F}_e$ è lungo $\hat{x}$. Le forze in gioco sono 3: la forza peso, quella elettrica e la tensione del filo. All'equilibrio, la risultante di queste forze deve essere nulla, e quindi $\vec{T} + \vec{F}_e +\vec{F}_g = 0$. Se disegniamo questi vettori troviamo immediatamente il legame tra la forza peso, quella elettrica e l'angolo $\theta$:
$$
\tan{(\theta)} = \frac{F_e}{F_g} = \frac{q q_0}{4\pi\epsilon_0 mg x_0^2}
$$
2. Sostituendo i valori numerici nella relazione precedente si trova $\tan{(\theta)} = 0.1833$.

---

## Esercizio 2
<small>Dall'esempio 1.1 del MNV</small>

### Testo

{{< figure src="../images/esercizio_2.png" width="200px">}}

Un corpo di massa $m$ avente carica $q$ è sospeso ad una distanza $h$ dal suolo, dove è presente un'altra carica dello stesso valore ($q$). Il sistema si trova in equilibrio. Entrambe le cariche possono essere considerate puntiformi.

1. Scrivere la relazione tra $m$ e $q$ per la quale il corpo rimane sospeso ad altezza $h$.
2. Data la relazione trovata al punto precedente, se $h = 10^{-2}~\mathrm{m}$ e $m = 3\times 10^{-3}~\mathrm{g}$, quanto vale $q$?
3. Di quante cariche elementari "spaiate" abbiamo bisogno per generare la carica di cui al punto precedente?

### Soluzione

1. Il corpo risente della forza peso e di quella di Coulomb. Se orientiamo l'asse $y$ perpendicolare al suolo, la forza peso è diretta verso $y$ negative, mentre quella di Coulomb è diretta verso $y$ positive. Se si vuole che la distanza dal suolo non cambi si deve imporre che la forza totale agente sul corpo sia 0, cioè
$$
F_y = -mg + \frac{1}{4\pi\epsilon_0}\frac{q^2}{h^2}
$$
L'equazione precedente fissa il valore del rapporto tra il quadrato delle cariche e quello della massa:
$$
\frac{q^2}{m} = \pm 4\pi\epsilon_0h^2g
$$
**Nota Bene:** la carica compare al quadrato: non importa che $q$ sia positiva o negativa, perché due cariche dello stesso tipo si respingono *sempre*.

2. Dal punto precedente si ha che, sostituendo i valori numerici, $q = \sqrt{4\pi\epsilon_0h^2mg} = 5.72\times10^{-10} C$.
3. Per trovare la soluzione dividiamo la carica totale per il valore (in modulo), trovando
$$
N_c = \frac{5.72 \times 10^{-10}}{1.6\times 10^{-19}} \approx 3.57\times 10^{9}
$$

---

## Esercizio 3

### Testo

{{< figure src="../images/esercizio_3.png" width="150px">}}

Consideriamo due cariche fisse $q$ disposte parallele all'asse $y$ e distanti $2L$. Calcolare il campo elettrostatico in un punto generico $x_0$ equidistante dalle due cariche.

### Soluzione

Utilizziamo il sistema di riferimento nel quale le due cariche hanno coordinate $\vec{r}_1 = (0, L)$ e $\vec{r}_2 = (0, -L)$ e il punto che ci interessa ha coordinate $\vec{r}_0 = (x_0, 0)$. Studiamo il campo generato dalla prima carica, rispetto alla quale $\vec{r}\_{01} = \vec{r}_0 - \vec{r}_1 = (x_0, -L)$, $r\_{01} = \sqrt{x_0^2 + L^2}$ e quindi $\hat{r}\_{01} = \frac{1}{r\_{01}}(x_0, -L)$:

$$
E_x^{01} = \frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2} \frac{x_0}{r\_{01}}
$$

$$
E_y^{01} = -\frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2} \frac{L}{r\_{01}}
$$

D'altra parte, rispetto alla seconda carica abbiamo $\vec{r}\_{02} = \vec{r}\_0 - \vec{r}\_2 = (x_0, L)$, $r\_{02} = \sqrt{x_0^2 + L^2} = r\_{01}$, $\hat{r}\_{02} = \frac{1}{r\_{02}}(x_0, L)$ e quindi

$$
E_x^{02} = \frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2} \frac{x_0}{r\_{01}}
$$
$$
E_y^{02} = \frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2} \frac{L}{r\_{01}}
$$

Il campo totale è la sovrapposizione (cioè, la somma) dei due, e quindi si ha $E_x = 2E_x^{01}$ e $E_y = 0$.

Possiamo ritrovare lo stesso risultato considerando che, in generale, se definiamo $\theta$ come l'angolo compreso tra il campo e l'asse $x$, $E_x^{01} = |\vec{E}\_{01}|\cos{\theta}$ e $E_y^{01} = |\vec{E}\_{01}|\sin{\theta}$. Nel caso specifico dell'esercizio vale l'uguaglianza trigonometrica $\cos{\theta} = \frac{x_0}{r\_{01}}$, mentre il modulo di $\vec{E}$ si ricava dalla legge di Coulomb, $|\vec{E}| = \frac{1}{4\pi\epsilon_0} \frac{q}{r\_{01}^2}$. Si trova quindi:

$$
E_x^{01} = \frac{q}{4\pi\epsilon_0} \frac{x_0}{r\_{01}^3}
$$

in accordo col risultato precedente.

---

## Esercizio 4
<small>Ispirato dall'esempio 1.5 del MNV</small>

### Testo

{{< figure src="../images/esercizio_4.png" width="250px">}}

Tre cariche fisse $q_1$, $q_2$ e $q_3$ sono poste sui vertici di un triangolo equilatero di lato $2L$. Poniamo $q_2 = q_3 = q$.

1. Calcolare l'espressione del campo elettrostatico $\vec{E} = (E_x, E_y)$ nel centro $\vec{O}$ del triangolo.
2. Possiamo muovere la carica $q_1$ lungo l'asse che la congiunge al centro. Se $q_1 = 2q$, dove dobbiamo posizionare $q_1$ per far sì che il campo si annulli nel punto $\vec{O}$?

### Soluzione

1. Orientiamo il sistema di riferimento in modo da avere l'asse $x$ parallelo al segmento che congiunge $q_2$ e $q_3$. Poiché $q_2$ e $q_3$ si equivalgono, il campo totale da loro generato lungo $x$ deve essere nullo (vedi [esercizio 3](#esercizio-3)). Inoltre, il vettore che congiunge $q_1$ con il centro del triangolo ha solamente la componente $y$ , quindi si trova $E_x = 0$. Usiamo ora la trigonometria per scrivere $E_y$ in funzione dell'angolo $\theta$ tra l'asse $y$ e la direzione del campo generato da ognuna delle due cariche, per esempio da $q_2$:
$$
E_y^{(2)} = \frac{q}{4\pi\epsilon_0}\frac{1}{r^2} \cos{\theta}
$$
dove $r$ è la distanza tra $\vec{O}$ e la carica $q_2$. Dobbiamo ora calcolare $r$ e $\theta$. Se disegniamo un triangolo equilatero e utilizziamo la trigonometria troviamo che:
$$
r = \frac{L}{\cos{(\pi/6)}}, \quad \theta = \frac{\pi}{3}
$$
Se notiamo che $\cos{\theta} = \cos{(\pi/3)} = 0.5$, possiamo scrivere il campo totale dovuto a $q_2$ e $q_3$ (pari a due volte quello dovuto a $q_2$, *cfr.* [esercizio 3](#esercizio-3)):
$$
E_y^{(2)+(3)} = \frac{q}{4\pi\epsilon_0}\frac{1}{r^2}
$$
D'altro canto, con questo sistema di riferimento il campo dovuto a $q_1$ è semplice da scrivere, perché il vettore distanza (e quindi il campo elettrostatico generato) tra $q_1$ e $\vec{O}$ ha la sola componente $y$ non nulla, che quindi vale:
$$
E_y^{(1)} = -\frac{q_1}{4\pi\epsilon_0}\frac{1}{r^2}
$$
Fate il disegno e scrivete le componenti dei vettori distanza per capire da dove viene il segno meno! Il campo totale (che è diretto tutto lungo $y$) vale quindi:
$$
E_y = \frac{q - q_1}{4\pi\epsilon_0}\frac{1}{r^2}
$$
2. Se spostiamo $q_1$, la sua distanza da $\vec{O}$ non sarà più $r$ ma un valore incognito $y_0$. Possiamo quindi riscrivere la componente $y$ del campo (che è ancora l'unica diversa da 0) come:
$$
E_y = \frac{q}{4\pi\epsilon_0}\frac{1}{r^2} - \frac{2q}{4\pi\epsilon_0}\frac{1}{y_0^2}
$$
Se imponiamo $E_y = 0$ troviamo:
$$
y_0 = \sqrt{2}r
$$
