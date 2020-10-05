+++
title = "Lezione 26/09/2018"
date = 2018-09-22T09:47:43+02:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
caption = ""

+++

# Elettrostatica

L'interazione elettromagnetica è una delle forze fondamentali della natura come, ad esempio, quella gravitazionale. Per dare un esempio dell'importanza dell'interazione elettromagnetica, considerate che la maggior parte della passa atomica è condensata nel nucleo, che è circa $10^5$ volte più piccolo delle dimensioni atomiche: la materia è vuota! La repulsione elettromagnetica (anche se in una forma *molto* diversa da quella che vedremo nel corso) è una delle principali responsabili del fatto che i corpi non si interpenetrano!

In questa prima parte del corso studieremo i fenomeni legati all'*elettrostatica*, che studia i fenomeni elettrici dovuti a distribuzioni di cariche che sono, come implica il nome, *stazionari nel tempo*.

## Carica elettrica
<small>MNV: paragrafo 1.1</small>

Alcuni oggetti, se strofinati con un panno, mostrano la capacità di attirare corpuscoli come pagliuzze o granelli di polvere. Questo è dovuto al fatto che alcuni materiali, quando strofinati, acquistano una *carica*. Tramite esperimenti si è capito che

* Non tutti i materiali si possono caricare
* Due oggetti carichi esercitano l'uno sull'altro una forza che chamiamo *elettrica*
* Esistono cariche di due tipi, che chiamiamo positive e negative
* Cariche dello stesso tipo si respingono, cariche di tipo diverso si attraggono

## Struttura elettrica della materia
<small>MNV: paragrafo 1.2</small>

Quella che segue è una descrizione poco rigorosa e molto qualitativa della vera struttura atomica della materia, ma è sufficiente per i nostri scopi.

* La materia è composta da neutroni (carica nulla), protoni (carica positiva) ed elettroni (carica negativa)
* La massa dei protoni (che, insieme ai neutroni, compongono il nucleo degli atomi) è quasi 2000 volte più grande di quella degli elettroni, che invece "orbitano" intorno al nucleo.
* La carica degli elettroni e dei protoni, in modulo, è detta carica elementare ed è indicata col simbolo $e$. Ogni altra carica presente in natura è multiplo di questa carica (la carica è una quantità *quantizzata*).
* La maggior parte dei corpi ha carica netta $0$ ed è quindi detto *neutro*. 
* Gli elettroni negli orbitali più esterni hanno una certa energia di legame. È quindi possibile, fornendo ad esempio energia meccanica tramite strofinio, *strappare* alcuni di questi elettroni facendoli passare da un corpo $A$ ad un altro $B$. Alla fine della procedura $A$ e $B$ non saranno più neutri ma carichi, poiché $A$ avrà un eccesso di cariche positive e $B$ un eccesso di cariche negative.
* In un sistema isolato (dal punto di vista elettrico) le cariche si conservano: la somma totale della carica non cambia nel tempo.

L'unità di misura della carica è il Coulomb (C). In questa unità $e = 1.6 \times 10^{-19}$ C. Le cariche con cui avremo a che fare sono molto più grandi, dell'ordine di $10^{-9} - 10^{-7}$ C. Questi valori equivalgono ad un gran numero di elettroni o protoni, dell'ordine di $10^{10}$. D'altro canto, in un grammo di materia abbiamo un numero *enormemente* maggiore di elettroni e protoni, comparabile con il numero di Avogadro, $N_A = 6.022 \times 10^{23}$. Anche nei sistemi molto carichi, quindi, solo una piccola parte delle cariche elementari è "spaiata".

## Legge di Coulomb
<small>MNV: paragrafo 1.3</small>

Partiamo dai seguenti risultati sperimentali ottenute con cariche *puntiformi*:

* Due cariche sono uguali se esercitano la stessa forza su di una terza carica
* Se la forza esercitata sulla terza carica è uguale in modulo ma opposta in segno, le cariche sono anch'esse opposte in segno
* Il modulo della forza diminuisce con il quadrato della distanza
* La forza elettrica che una carica esercita sull'altra è diretta lungo l'asse che le congiunge

La relazione matematica che riassume queste proprietà è la cosiddetta legge di Coulomb:

$$
\vec{F} = k \frac{q_1q_2}{r^2} \hat{r}
$$

dove $r$ è la distanza tra le due cariche $q_1$ e $q_2$, $\hat{r}$ è il versore che le congiunge e $k$ è una costante di proporzionalità. Facciamo un esercizio di analisi dimensionale per determinare le unità di misura delle quantità coinvolte:

* La distanza si misura in m (metri)
* La forza si misura in N (Newton), cioè Kg$\cdot$m/s$^2$
* La carica si misura in C (Coulomb)

Quindi si ha che $[k] = [F][r]^2 / [q]^2 =$ Nm$^2/$C$^2$. Per motivi storici (e, in parte, pratici) si scrive

$$
k = \frac{1}{4\pi\epsilon_0}
$$

dove $\epsilon_0 = 8.8542 \times 10^{-12}$ C$^2$/Nm$^2$ è chiamata costante dielettrica del vuoto.

Applicazioni in MNV: esempi 1.3 e 1.4

## Campo elettrostatico
<small>MNV: paragrafo 1.4</small>

Prendiamo $N$ cariche puntiformi $q_1$, $q_2$, $\ldots$, $q_N$ distribuite nello spazio e una *carica di prova* $q_0$, anch'essa puntiforme. Calcoliamo la forza agente su $q_0$, nel limite in cui quest'ultima è piccola e non perturba la distribuzione delle altre cariche:

$$
\vec{F}_{\rm tot} = \frac{q_0}{4\pi\epsilon_0} \sum\_{i=1}^N \frac{q_i}{r\_{0i}^2}\hat{r}\_{0i}
$$

**Nota Bene:** l'equazione precedente vale perché vige il *principio di sovrapposizione*: le forze esercitate su $q_0$ sono indipendenti fra loro e quindi si sommano.

È interessante notare che la forza agente su $q_0$ è proporzionale alla sua carica. Possiamo quindi definire una grandezza che sia *indipendente* dal valore di $q_0$. Questa grandezza vettoriale è chiamata *campo elettrostatico* ed è definita come segue:

$$
\vec{E} = (E_x, E_y, E_z) = \frac{\vec{F}}{q_0}
$$

La legge di Coulomb e la definizione di campo elettrostatico implicano che il campo generato da una carica puntiforme $q$ in $\vec{r} = (x, y, z)$ vale $\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\hat{r}$.

Possiamo invertire la relazione tra forza e campo, $\vec{F}(\vec{r}) = q_0 \vec{E}(\vec{r})$: la distribuzione di cariche *genera* un campo (vettoriale!) in ogni punto dello spazio, ed è attraverso questo campo che le cariche interagiscono a distanza. Il principio di sovrapposizione ci dice che *ogni* carica genera un campo, e il campo totale non è altro che la *somma vettoriale* dei singoli campi.

**Nota Bene:** la forza elettrica generata dalla presenza di un campo elettrico è ovviamente soggetta alla terza legge di Newton: la forza che $q_0$ sente in presenza di un'altra carica $q$ è uguale ma opposta in verso a quella che la stessa $q_0$ esercita su $q$. Quando si chiede di calcolare la forza che agirebbe su di una carica di prova $q_0$ in presenza di una certa distribuzione di cariche, di solito si suppone che $q_0$ è molto piccola oppure che le altre cariche sono tenute fisse. Una definizione più generale (e rigorosa) di campo elettrostatico che tiene conto di questo aspetto è $\vec{E} = \lim\_{q_0 \to 0} \frac{\vec{F}}{q_0}$.

Che unità di misura è associata al campo elettrico? Usiamo l'analisi dimensionale: $[E] = \frac{[F]}{[q]}$ = N/C. In pratica si usa più spesso un'altra unità di misura equivalente che introdurremo più avanti, i Volt per metro (V/m).

## Distribuzioni continue di cariche
<small>MNV: paragrafo 1.5</small>

Poiché la carica è quantizzata, a rigor di logica il campo elettrico $\vec{E}$ (o, equivalentemente, la forza $\vec{F}$) dovrebbe essere sempre espresso come una somma di contributi concentrati intorno agli atomi. In realtà abbiamo a che fare sempre con dimensioni molto maggiori di quelle atomiche, e quindi, all'atto pratico, ciò che misuriamo è il campo elettrostatico *mediato* sulla distribuzione di cariche atomiche che, alle scale macroscopiche che ci interessano, è vista come una distribuzione continua. Utilizzando quindi il concetto di infinitesimo, possiamo scrivere il campo totale come una somma di infiniti contributi: un integrale.

Consideriamo un volume $v$ in cui è distribuita una certa quantità di carica. Il campo elettrico generato in un punto $\vec{P}$ da una porzione infinitesima di carica $dq$ distante $\vec{r}$ da $\vec{P}$ è semplicemente

$$
d\vec{E}(\vec{P}) = \frac{1}{4\pi\epsilon_0} \frac{dq}{r^2} \hat{r}.
$$

L'espressione del campo elettrico *totale* in $\vec{P}$, in forza del principio di sovrapposizione, è quindi

$$
\vec{E}(\vec{P}) =  \frac{1}{4\pi\epsilon_0} \int_v \frac{dq}{r^2} \hat{r}
$$

**Nota Bene:** poiché è esteso a tutto il volume, l'integrale è un integrale triplo. Inoltre, poiché abbiamo a che fare con quantità vettoriali, dobbiamo calcolare un integrale per ogni componente del vettore (uno per $x$, uno per $y$ e uno per $z$).

Nella maggior parte dei casi che incontreremo, la carica totale $q$ sarà distribuita *uniformemente* su oggetti di diversa forma. In questo caso la carica infinitesima si può scrivere esplicitamente:

* $dq = \lambda dl$ per oggetti "unidimensionali", dove $\lambda$ è detta densità lineare e $dl$ è l'elemento di linea infinitesimo (MNV: esempio 1.6).
* $dq = \sigma d\Sigma$ per oggetti "bidimensionali", dove $\sigma$ è detta densità superficiale e $d\Sigma$ è l'elemento superficiale infinitesimo (MNV: esempio 1.7).
* $dq = \rho d\tau$ per oggetti "tridimensionali", dove $\rho$ è detta densità volumetrica e $d\tau$ è l'elemento di volume infinitesimo.
