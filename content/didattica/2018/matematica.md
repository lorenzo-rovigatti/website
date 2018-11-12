+++
title = "Ripasso di matematica"
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

Le note che seguono mostrano un assoluto disprezzo per la rigorosità matematica. Non fatele vedere ad un matematico!

## Vettori

Nel corso avremo a che fare unicamente con vettori tridimensionali, cioè oggetti aventi tre componenti, definiti nello spazio cartesiano $\mathbb{R}^3$. Un generico vettore $\vec{x} = (x_1, x_2, x_3)$ ha modulo $x = |\vec{x}| = \sqrt{x_1^2 + x_2^2 + x_3^2}$. Si definisce *versore* un vettore avente un modulo unitario. Dato $\vec{x}$, il suo versore è $\hat{x} = \vec{x} / x$.

Le più importanti operazioni che utilizzeremo nel corso sono:

* Somma: $\vec{x} + \vec{y} = (x_1 + y_1, x_2 + y_2, x_3 + y_3)$
* Moltiplicazione per uno scalare: $a\vec{x} = (ax_1, ax_2, ax_3)$
* Prodotto scalare: $\vec{x} \cdot \vec{y} = x_1y_1 + x_2y_2 + x_3y_3$
* Prodotto vettoriale: $\vec{x} \times \vec{y} = (x_2y_3 - x_3y_2, x_3y_1 - x_1y_3, x_1y_2 - x_2y_1)$

Le due ultime relazioni si possono scrivere anche in funzione dei moduli di $\vec{x}$ e $\vec{y}$ e dell'angolo $\theta$ compreso tra i due:

* $\vec{x} \cdot \vec{y} = xy\cos{\theta}$, quindi se i due vettori sono allineati il prodotto scalare è dato da $xy$.
* $\vec{x} \times \vec{y} = \hat{n} xy\sin{\theta}$, dove $\hat{n}$ è il versore costruito con la regola della mano destra a partire dai vettori $\vec{x}$ e $\vec{y}$. Se i due vettori sono allineati il loro prodotto vettoriale è nullo.

**Nota Bene:** il risultato di un prodotto scalare è uno scalare, quello di un prodotto vettoriale è un vettore. Facile da memorizzare!

## Derivate

Data una funzione $f(x)$, la sua derivata $\frac{df(x)}{dx}$ misura quanto $f(x)$ cambi al variare di $x$. In pratica, la derivata di $f(x)$ calcolata nel punto $x_0$ è la pendenza della tangente di $f(x_0)$.

Il concetto di derivata si può estendere anche a funzioni *multidimensionali* tramite la nozione di derivata *parziale*, che misura come una funzione di più variabili vari lungo una particolare direzione (per esempio $x$, $y$ o $z$). La derivata parziale di $f(x, y)$ rispetto ad x si scrive $\frac{\partial}{\partial x} f(x, y)$. Dal punto di vista operativo, una derivata parziale si effettua in maniera del tutto analoga ad una derivata normale, avendo l'accortezza di considerare costanti le variabili su cui non si deriva. 

Alcune relazioni utili legate alle derivate (*a*, *b* e *c* sono scalari):

* $\frac{d}{dx} (ax^b + c) = abx^{b-1}$
* $\frac{d}{dx} e^{ax} = ae^{ax}$
* $\frac{d}{dx} \cos(ax) = -a\sin(ax)$
* $\frac{d}{dx} \sin(ax) = a\cos(ax)$
* $\frac{d}{dx} \log(ax) = \frac{1}{x}$
* $\frac{d}{dx} (f(x)g(x)) = \frac{df(x)}{dx}g(x) + f(x)\frac{dg(x)}{dx}$
* $\frac{d}{dx} f(g(x)) = \frac{df(g(x))}{dg(x)}\frac{dg(x)}{dx}$
* $\frac{\partial}{\partial x} (ax^2y + y) = 2ax$

## Integrali

Per quel che concerne l'argomento del corso, l'integrale può essere visto come una somma di tanti (infiniti) contributi molto piccoli (infinitesimi). Integrali e derivate sono intimamente connessi tramite il cosiddetto [teorema fondamentale del calcolo integrale](https://it.wikipedia.org/wiki/Teorema_fondamentale_del_calcolo_integrale). Questo afferma che, data una funzione $f(x)$ continua in un intervallo $(a, b)$, si può scrivere (in quello stesso intervallo) 

$$F(x) = \int_a^x f(x') dx',$$

dove $\frac{dF(x)}{dx} = f(x)$. Integrali e derivate sono quindi operazioni *inverse*. Nel caso di estremi di integrazione costanti si ha che, se $\frac{df(x)}{dx} = g(x)$, allora $\int_a^b g(x) dx = f(b) - f(a)$. 

**Nota Bene:** poiché la derivata di una costante è 0, se $\frac{dF(x)}{dx} = f(x)$ e $G(x) = F(x) + C$ con $C$ costante, si avrà $\frac{dG(x)}{dx} = f(x)$.

In maniera del tutto analoga a quanto fatto per le derivate, anche il concetto di integrale può essere esteso a funzioni multidimensionali.

Una distinzione fondamentale è quella tra gli integrali *indefiniti* e quelli *definiti*:

* In un integrale indefinito le variabili figurano negli estremi di integrazione o non figurano affatto. Il risultato di un'integrazione indefinita di una funzione a $N$ variabili è anch'esso una funzione ad $N$ variabili. Si scrive quindi (impropriamente o, come i matematici amano dire, con un abuso di notazione) $g(x) = \int f(x) dx$.
* Un integrale definito ha come estremi di integrazione delle costanti. Il tipo di risultato dipende dal numero di variabili su cui si integra: un integrale doppio di una funzione a due variabili è uno scalare, mentre un integrale singolo della stessa funzione a due variabili è una funzione di una variabile.

Alcuni esempi:

* $$\int ax^b = \frac{ax^{b+1}}{b+1} \qquad\textrm{(per $b\neq -1$, perché?)}$$
* $$\int \cos(ax) dx = \frac{\sin(ax)}{a}$$
* $$\int_0^2 (x^2 + 1)dx = \left.\left( \frac{1}{3}x^3 + x\right)\right|_0^2 = \frac{14}{3}$$
* $$\int_0^\pi \cos^2(ax) dx = \frac{\pi}{2}$$

Durante il corso spiegherò tutti i passaggi degli integrali che incontreremo. Tenete conto che integrare è difficile, quindi non preoccupatevi se incontrerete difficoltà. In ogni caso, per calcolare integrali generici si può utilizzare il sito di [Wolfram Alpha](http://www.wolframalpha.com) come nell'immagine che segue:

{{< figure src="../images/wolfram.png" alt="Wolfram alpha" width="700">}}

## Grandezze fisiche e unità di misura

* La maggior parte delle quantità fisiche è associata ad una unità di misura.
* Quelle che non lo sono sono spesso espresse come rapporto tra quantità aventi le stesse unità di misura e sono dette quantità *adimensionali*.
* Quando si ha a che fare con equazioni matematiche, le quantità che sono a sinistra e a destra dell'uguale **devono** avere le stesse unità di misura.
* Fare un'*analisi dimensionale* permette spesso di capire rapidamente quali sono le unità di misura in gioco e se le equazioni o relazioni scritte sono errate o meno.
* È molto importante stimare gli ordini di grandezza delle quantità in gioco perché permette di scegliere il tipo di descrizione più adatto al fenomeno sotto osservazione. Esempi:
	* Se abbiamo a che fare con velocità molto minori di quelle della luce non c'è bisogno di utilizzare la teoria della relatività.
	* Sappiamo che l'intensità della forza di gravità presente tra due masse è $F = G \frac{m_1m_2}{r^2}$, ma nei problemi di meccanica la stessa forza si scrive come $F = mg$.
