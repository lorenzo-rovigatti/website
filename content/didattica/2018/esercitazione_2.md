+++
title = "Esercitazione 02/10/2018"
date = 2018-10-02T09:47:43+02:00
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

[Esercizio 5](#esercizio-5) -- [Esercizio 6](#esercizio-6) -- [Esercizio 7](#esercizio-7) -- [Esercizio 8](#esercizio-8) 

## Esercizio 5
<small>Ispirato dall'esempio 1.5 del MNV</small>

### Testo

Tre cariche $q_1$, $q_2$ e $q_3$ sono poste sui vertici di un triangolo equilatero di lato $2L$. Poniamo $q_2 = q_3 = q$.

1. Calcolare l'espressione del campo elettrostatico $\vec{E} = (E_x, E_y)$ nel centro $\vec{O}$ del triangolo.
2. Possiamo muovere la carica $q_1$ lungo l'asse che la congiunge al centro. Se $q_1 = 2q$, dove dobbiamo posizionare $q_1$ per far sì che il campo si annulli nel punto $\vec{O}$?

### Soluzione

1. Orientiamo il sistema di riferimento in modo da avere l'asse $x$ parallelo al segmento che congiunge $q_2$ e $q_3$. Se usiamo i risultati ottenuti nell'[Esercizio 3](#Esercizio-3), vediamo subito che $E_x = 0$. Come fatto precedentemente possiamo usare la trigonometria per scrivere $E_y$ in funzione dell'angolo $\theta$ tra l'asse $y$ e la direzione del campo generato da ognuna delle due cariche (per esempio da $q_2$):
$$
E_y^{(2)} = \frac{q}{4\pi\epsilon_0}\frac{1}{r^2} \cos{\theta}
$$
dove $r$ è la distanza tra $\vec{O}$ e la carica $q_2$. Dobbiamo ora calcolare $r$ e $\theta$. Se disegniamo un triangolo equilatero e utilizziamo la trigonometria troviamo che:
$$
r = \frac{L}{\cos{(\pi/6)}}, \quad \theta = \frac{\pi}{3}
$$
Se notiamo che $\cos{\theta} = \cos{(\pi/3)} = 0.5$, possiamo scrivere il campo totale dovuto a $q_2$ e $q_3$ (pari a due volte quello dovuto a $q_2$, *cfr.* [Esercizio 3]({{< ref "esercitazione_1.md#esercizio-3" >}}):
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

## Esercizio 6
<small>Ispirato all'esercizio 1.13 del MNV</small>

### Testo

Su di una semicirconferenza è di raggio $R$ è distribuita uniformemente una carica $q$. 

1. Calcolare il campo elettrico nel centro.
2. Partiamo dalla semicirconferenza intera e rimuoviamo in maniera simmetrica parte del materiale carico a partire dal centro. In tutto rimuoviamo un angolo $2\phi$ ( se $\phi = \pi/2$ la semicirconferenza verrebbe completamente rimossa). Calcolare il campo elettrico nel centro.

### Soluzione

1. Utilizziamo un sistema di riferimento avente l'asse $x$ come asse di simmetria del sistema. Per simmetria è chiaro che le componenti del campo lungo $y$ e $z$ sono nulle. Per trovare $E_x$ dobbiamo sommare su tutte le cariche infinitesime $dq$, in maniera formalmente analoga a quanto fatto nell'esercizio precedente. Prima di tutto definiamo la densità di carica lineare $\lambda = \frac{q}{\pi R}$ (tale che $dq = \lambda dl$). Abbiamo visto negli esercizi precedenti (in particolare nell'[esercizio 3]({{< ref "esercitazione_1.md#esercizio-3" >}})), che ogni elementino di carica genera nel centro della semisfera un campo lungo $x$ pari a:
$$
dE_x = \frac{1}{4\pi\epsilon_0}\frac{dq}{R^2} \cos{\theta}
$$
dove $\theta$ è l'angolo compreso tra il campo generato da $dq$ e l'asse $x$. Se disegniamo il sistema possiamo notare come $\theta$ sia diverso per ogni elementino $dq$ (e viceversa): $dq$ infatti è proporzionale a $dl$ che, nel caso di una (porzione di) circonferenza è proporzionale a $d\theta$. In particolare, si ha che $dl = R d\theta$ (provate a calcolare il perimetro di una circonferenza tramite un integrale per convincervene!). Utilizziamo questo risultato per riscrivere il differenziale della componente $x$ del campo:
$$
dE_x = \frac{1}{4\pi\epsilon_0}\frac{\lambda R d\theta}{R^2} \cos{\theta} = \frac{1}{4\pi\epsilon_0}\frac{\lambda d\theta}{R} \cos{\theta}
$$
Possiamo ora calcolare l'integrale (prestando attenzione agli estremi di integrazione):
$$
E_x =  \frac{1}{4\pi\epsilon_0}\frac{\lambda}{R} \int\_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos{\theta} d\theta = \frac{1}{4\pi\epsilon_0}\frac{\lambda}{R} \left. \sin(\theta) \right|\_{-\frac{\pi}{2}}^{\frac{\pi}{2}} = \frac{1}{2\pi^2\epsilon_0}\frac{q}{R^2}
$$

2. La simmetria rimane invariata, quindi $E_y = 0$ come al punto precedente. Per quanto riguarda la componente $x$, l'integrale precedente si riscrive come somma di due integrali, uno per ognuna dei due archi di circonferenza che sono rimasti. Poiché il sistema è simmetrico, il contributo dei due integrali è lo stesso, quindi ne calcoliamo uno e moltiplichiamo il risultato per due:
$$
E_x =  \frac{2}{4\pi\epsilon_0}\frac{\lambda}{R} \int\_{\phi}^{\frac{\pi}{2}} \cos{\theta} d\theta = \frac{1}{2\pi\epsilon_0}\frac{\lambda}{R} \left. \sin(\theta) \right|\_{\phi}^{\frac{\pi}{2}} = \frac{1}{2\pi^2\epsilon_0}\frac{q}{R^2} ( 1 - \sin{(\phi)} )
$$

---

## Esercizio 7

### Testo

Calcolare la carica totale $q$ presente su di un quadrato di lato $L$ carico con densità superficiale data da 

1. $\sigma$ uniforme.
2. $\sigma(x, y) = Bx$, con $-L/2 \leq x \leq L/2$.
2. $\sigma(x, y) = Bx$, con $0 \leq x \leq L$.
3. $\sigma(x, y) = C(xy + D\cos{(kx)})$, con $0 \leq x \leq L$ e con $0 \leq y \leq L$.

### Soluzione

1. Se la densità è uniforme, sappiamo che $q = \sigma S$, con $S$ area della superficie. Nel caso di un quadrato, $S = L^2$ e quindi $q = \sigma L^2$.
2. Se la densità non è uniforme dobbiamo espressamente integrarla sulla superficie. In questo caso si ha:
$$
q = \int\_{-\frac{L}{2}}^\frac{L}{2} dy \int\_{-\frac{L}{2}}^\frac{L}{2} Bx dx = BL\int\_{-\frac{L}{2}}^\frac{L}{2} x dx = \frac{BL}{2} \left. x^2 \right|\_{-\frac{L}{2}}^\frac{L}{2} = 0
$$
3. Impostiamo l'integrale come prima, con l'accorgimento di cambiare gli estremi di integrazione:
$$
q = \int_0^L dy \int_0^L Bx dx = BL\int_0^L x dx = \frac{BL}{2} \left. x^2 \right|_0^L = \frac{BL^3}{2}
$$
4. Di nuovo la stessa impostazione:
$$
q = \int_0^L dy \int_0^L C(xy + D\cos{(kx)}) dx
$$
Prima integriamo su $x$:
$$ q = C\int_0^L dy \left.\left(\frac{1}{2}yx^2 + \frac{D}{k}\sin{(kx)}\right)\right|_0^L = C\int_0^L dy \left(\frac{1}{2}yL^2 + \frac{D}{k}\sin{(kL)}\right)
$$
e poi su $y$:
$$
q = C\left.\left(\frac{1}{4}L^2y^2 + \frac{D}{k}L\sin{(kL)}\right)\right|_0^L = C\left( \frac{1}{4}L^4 + \frac{D}{k}L\sin{(kL)} \right)
$$

---

## Esercizio 8
<small>Dagli esempi 1.7 e 1.8 del MNV</small>

### Testo

Una carica $q$ è distribuita uniformemente su un sottile disco di raggio R. Consideriamo un sistema di riferimento tale che l'origine è nel centro del disco e $\hat{x}$ è orientato in maniera concorde all'asse del disco.

1. Calcolare il modulo del campo elettrico in $\vec{r} = (x, 0, 0)$ al variare di $x$.
2. Cosa succede quando $R \to \infty$?
3. Discutere il verso del campo lungo l'asse $x$.
4. Utilizzare i risultati precedenti per scrivere il campo elettrostatico generato da due piani indefiniti paralleli e uniformemente carichi con densità superficiale di carica $|\sigma|$. Discutere il risultato al variare dei segni relativi delle due densità superficiali.

### Soluzione

1. Il disco può essere considerato come un oggetto "bidimensionale" avente una densità di carica $\sigma = \frac{q}{\pi R^2}$. Poiché il problema ha simmetria cilindrica, l'elemento di superficie vale $d\Sigma = 2\pi r dr$. Il disco può quindi essere considerato come un insieme di anelli di spessore $dr$, aventi ognuno una carica $dq = \sigma d\Sigma = 2 \pi \sigma r dr$. Il contributo alla componente $x$ del campo (l'unica diversa da zero) del generico anello infinitesimo di raggio $r$ è (vedi [Esercizio 5](#Esercizio-5)):
$$
dE_x = \frac{\sigma}{2\epsilon_0}\frac{x r dr}{(r^2 + x^2)^{3 / 2}}
$$
L'espressione per il campo totale si ottiene integrando da $0$ ad $R$ l'equazione precedente:
$$
E_x = \frac{\sigma x}{2\epsilon_0} \int_0^R \frac{r dr}{(r^2 + x^2)^{3 / 2}} = \frac{\sigma x}{2\epsilon_0} \left. \left( -\frac{1}{\sqrt{r^2 + x^2}} \right) \right|_0^R = \frac{\sigma x}{2\epsilon_0} \left( 1 - \frac{x}{\sqrt{R^2 + x^2}}\right)
$$

2. Nel limite per $R \to \infty$ (tenendo $x$ costante) la radice al denominatore tende all'infinito e quindi la frazione tende a 0. Il risultato è
$$
E_x = \frac{\sigma}{2\epsilon_0}
$$
In questo limite (in cui il disco carico diventa effettivamente un piano indefinito uniformemente carico) il campo è *uniforme*, cioè prende lo stesso valore in tutti i punti dello spazio. La stessa espressione è valida nel caso in cui ci avviciniamo molto ad una superficie carica (cioè nel limite in cui la superficie è così vicino da *sembrarci* un piano infinito).

3. Sia che $R$ sia finito sia che tenda all'infinito, il limite di $\vec{E}$ per $x \to 0$ è diverso venendo da sinistra o da destra: il modulo resta lo stesso, mentre il verso è opposto. Il campo ha quindi una *discontinuità* in $x = 0$: il campo ha un salto di valore pari a $\Delta E = \frac{\sigma}{\epsilon_0}$. Vettorialmente si può scrivere che, ad esempio nel limite $R \to \infty$, 
$$
\vec{E} = \pm \frac{\sigma}{2 \epsilon_0} \hat{x}
$$

4. Nel caso $\sigma_1 = \sigma_2$ il campo tra i piani si annulla, mentre quello esterno raddoppia di intensità, $|\vec{E}| = \frac{\sigma}{\epsilon_0}$. Nel caso $\sigma_1 = -\sigma_2$, invece, avviene il contrario: il campo si annulla all'esterno e raddoppia di intensità tra i due piani.
 
