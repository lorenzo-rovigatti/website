+++
title = "Lezione dell'08/10/2019"
date = 2019-10-07T09:47:43+02:00
draft = false
+++

## Energia potenziale elettrostatica e conservazione dell'energia
<small>MNV: paragrafo 2.3</small>

Abbiamo già visto come un campo elettrostatico acceleri una carica puntiforme. Utilizzando il concetto di energia elettrostatica potenziale introdotto nei paragrafi precedenti possiamo applicare la conservazione dell'energia allo stesso problema. Se in un sistema sono presenti unicamente forze conservative la sua energia totale, $U = U_k + U_e$, è conservata, cioè rimane costante nel tempo.

Per quanto riguarda il moto di una particella carica $q_0$, sappiamo che la sua energia cinetica vale sempre $U_k = \frac{1}{2} m v^2(t)$. D'altro canto, abbiamo visto che la sua energia potenziale elettrostatica è legata al potenziale, $U_e = q_0 V(x(t), y(t), z(t))$. L'energia totale vale quindi:

$$
U = \frac{1}{2} m v^2(t) + q_0 V(x(t), y(t), z(t))
$$

Questa quantità è *sempre* conservata. Possiamo usare questa legge di conservazione per accelerare particelle: se passando dal punto $\vec{A}$ al punto $\vec{B}$ il potenziale diminuisce, per $q_0 > 0$ la particella viene accelerata (e viceversa). La possibilità di accelerare particelle microscopiche (come gli elettroni) tramite campi elettrici ha permesso lo sviluppo di applicazioni pratiche come il tubo catodico e alcuni acceleratori di particelle.

Come abbiamo visto, l'energia potenziale è legata al lavoro compiuto dalla forza cambiata di segno. L'energia potenziale elettrostatica di un sistema di cariche si può quindi interpretare come il lavoro che bisogna compiere per "costruire" quel dato sistema. Poniamo ad esempio di voler calcolare l'energia elettrostatica di un sistema di tre cariche, $q_1$, $q_2$ e $q_3$, poste a distanze relative $r\_{12}$, $r\_{13}$ e $r\_{23}$. Partiamo da un sistema vuoto e posizioniamo la prima carica. Questa operazione è "a costo zero", poiché nella regione di spazio non è presente alcun campo. L'energia potenziale vale quindi $U_e = 0$, ma nella regione è ora presente il campo generato da $q_1$, $\vec{E}_1$. Per posizionare la seconda carica dobbiamo muoverla dall'infinito alla sua posizione. Per farlo dobbiamo applicare una forza uguale e contraria a quella elettrostatica dovuta all'interazione tra $q_1$ e $q_2$, cioè $\vec{F} = -q_2\vec{E}_1$. Il lavoro compiuto da questa forza esterna sarà quindi:

$$
W\_{\rm ext} = -q_2 \int\_{\infty}^{r\_{12}} \vec{E}_1 \cdot d\vec{s} = \frac{q_2 q_1}{4 \pi \epsilon_0} \frac{1}{r\_{12}} = \Delta U_e
$$

Ricordiamo che la relazione tra il lavoro compiuto dalla forza elettrostatica e l'energia potenziale elettrostatica sono uguali a meno del segno, mentre qui, poiché la forza esterna necessaria è *opposta* a quella elettrostatica, le due quantità hanno le stesso segno. L'energia potenziale totale del sistema è, a questo punto, $U_e = \frac{q_2 q_1}{4 \pi \epsilon_0} \frac{1}{r\_{12}}$.

Nella regione di spazio sono ora presenti due campi, $\vec{E}_1$ ed $\vec{E}_2$, e quindi il lavoro svolto dalla forza esterna per posizionare correttamente $q_3$ sarà dato da due contributi:

$$
W\_{\rm ext} = -q_3 \int\_{\infty}^{r\_{13}} \vec{E}_1 \cdot d\vec{s} - q_3 \int\_{\infty}^{r\_{23}} \vec{E}_2 \cdot d\vec{s} = \frac{q_3 q_1}{4 \pi \epsilon_0} \frac{1}{r\_{13}} + \frac{q_3 q_2}{4 \pi \epsilon_0} \frac{1}{r\_{23}} 
$$

quindi l'energia potenziale totale del sistema sarà

$$
U_e = \frac{q_2 q_1}{4 \pi \epsilon_0} \frac{1}{r\_{12}} + \frac{q_3 q_1}{4 \pi \epsilon_0} \frac{1}{r\_{13}} + \frac{q_3 q_2}{4 \pi \epsilon_0} \frac{1}{r\_{23}}
$$

Più in generale applicando il principio di sovrapposizione si trova che l'energia potenziale di un sistema di cariche (cioè l'energia necessaria per assemblare il sistema) è data da

$$
U_e = \sum\_{i > j} \frac{q_i q_j}{4 \pi \epsilon_0} \frac{1}{r\_{ij}}
$$

dove il pedice $i > j$ della somma fa sì che non si contino gli stessi contributi due volte.


## Superfici equipotenziali
<small>MNV: paragrafo 2.5</small>

Le superfici equipotenziali sono quei luoghi dei punti nello spazio per cui vale $V(x, y, z) = $ costante. Dato il rapporto che lega potenziale e campo, possiamo dire che

1. Per ogni punto passa solamente *una* superficie equipotenziale.
2. Muovendoci lungo una superficie equipotenziale il modulo del campo resta costante.
3. Le linee di campo sono *sempre* ortogonali alle superfici equipotenziali. Questa proprietà deriva dalle caratteristiche del gradiente.

Se disegniamo delle "superfici di livello" separate da $\Delta V$ costanti, più queste sono vicine più il campo localmente sarà forte (perché il potenziale varia più rapidamente!). Pensate alle linee di livello altimetriche!

Proviamo a disegnare le superfici equipotenziali dovute ad un piano carico indefinito o ad una carica singola.

## Dipolo elettrico
<small>MNV: paragrafo 2.7</small>

Costruiamo un sistema composto da due cariche uguali ma opposte in segno, $q\_{+} = q$ e $q\_{-} = -q$, poste ad una distanza $a$. Scriviamo l'espressione del potenziale generato dalle due cariche in un punto $\vec{P}$:

$$
V(\vec{P}) = \frac{q}{4\pi\epsilon_0} \left( \frac{1}{r\_{+}} - \frac{1}{r\_{-}} \right) = \frac{q}{4\pi\epsilon_0} \frac{r\_{-} - r\_{+}}{r\_{+}r\_{-}},
$$

dove $r\_{+}$ ed $r\_{-}$ sono le distanze delle cariche positiva e negativa da $\vec{r}$. Se disegniamo le quantità vettoriali in gioco troviamo che $\vec{r}\_{-} +\vec{r}\_{+} = \vec{a}$, dove $\vec{a}$ è il vettore che congiunge la carica negativa a quella positiva.

Poniamoci sufficientemente lontano da poter trascurare la dimensione del dipolo (matematicamente, $r \gg a$). In questo caso $r\_{+} r\_{-} = r^2$, dove $r$ è la distanza di $\vec{P}$ dal centro del dipolo. Possiamo approssimare $r\_{-} - r\_{+}$ tenendo conto che, se $a$ è piccolo rispetto ad $r$ e $\theta$ è l'angolo tra $\vec{a}$ ed $\vec{r}$,

$$
r\_{+} = \sqrt{(\vec{a} - \vec{r}\_{-})\cdot(\vec{a} - \vec{r}\_{-})} = \sqrt{a^2 +r\_{-}^2 - 2r_+a \cos{(\theta)}} = r\_{-} \sqrt{1 + \frac{a^2}{r\_{-}^2} - 2\frac{a}{r\_{-}} \cos{\theta}} \approx r\_{-} \sqrt{1 - 2\frac{a}{r\_{-}} \cos{\theta}}\approx r\_{-} - a\cos{\theta}.
$$

Abbiamo utilizzato il fatto che $a^2/r\_{-}^2 \approx 0$ e che $\sqrt{1 + x} \approx 1 + \frac{1}{2} x$ per piccoli valori di $x$. Questa approssimazione ha una interpretazione geometrica (vedi, ad esempio, la figura 2.29 del MNV). Si ha quindi che $r\_{-} - r\_{+} \approx a\cos{\theta}$. Possiamo riscrivere l'espressione per il potenziale in questa approssimazione:

$$
V(r ) = \frac{q}{4\pi\epsilon_0} \frac{a \cos{\theta}}{r^2} = \frac{\vec{p} \cdot \hat{r}}{4\pi\epsilon_0 r^2}
$$

dove abbiamo definito il vettore *momento di dipolo elettrico* $\vec{p} = q\vec{a}$. Vediamo che il potenziale non dipende singolarmente da $a$ e da $q$ ma solo dal loro prodotto: dal punto di vista sperimentale, se facciamo una misura (ad esempio di differenza di potenziale ad una distanza $r \gg a$) su di un dipolo avente determinati valori di $a$ e $q$, la stessa misura su di un dipolo avente $a/2$ e $2q$ darà gli stessi risultati.

Il campo elettrico di un dipolo si può ricavare calcolando il gradiente del potenziale. In questo caso le espressioni si semplificano se si utilizzando le coordinate polari (e quindi il gradiente espresso in coordinate polari):

\begin{align}
E_r & = -\frac{\partial V}{\partial r} = \frac{2 p \cos{\theta}}{4\pi\epsilon_0 r^3}\\\\\\
E\_\theta & = -\frac{1}{r}\frac{\partial V}{\partial \theta} = \frac{p \sin{\theta}}{4\pi\epsilon_0 r^3}
\end{align}

Cioè, in forma vettoriale,

$$
\vec{E} = \frac{1}{4\pi\epsilon_0 r^3} (2 p \cos{\theta}\hat{r} + \sin{\theta} \hat{\theta})
$$

Il campo non dipende da $\phi$ poiché ha simmetria cilindrica rispetto all'asse del dipolo. Se poniamo $\theta = 0$ oppure $\theta = \pi$ troviamo che, lungo l'asse del dipolo, il campo è parallelo a $\vec{p}$ e vale 

$$
\vec{E} = \frac{2\vec{p}}{4\pi\epsilon_0 r^3}
$$

Se invece $\theta = \frac{\pi}{2}$ o $\theta = \frac{3\pi}{2}$, cioè sul piano ortogonale a $\vec{p}$, il campo è antiparallelo al momento di dipolo e vale:

$$
\vec{E} = -\frac{\vec{p}}{4\pi\epsilon_0 r^3}
$$

Se disegniamo le linee di campo (fatelo utilizzando la pagina apposita!) troviamo delle linee chiuse che vanno dalla carica positiva alla carica negativa e sono parallele al dipolo solo nei due casi considerati sopra.

Il concetto di dipolo è estremamente importante in molti contesti, ad esempio:

* Ambito ingegneristico: il funzionamento di molte antenne è basato sull'approssimazione di dipolo.
* Struttura della materia: atomi e molecole si polarizzano in presenza di un campo elettrico.
* Chimica fisica: molte molecole posseggono un momento di dipolo *intrinseco*, come ad esempio l'acqua.

## Momento della forza su un dipolo elettrico
<small>MVN: paragrafo 2.8</small>

Consideriamo il caso di un dipolo immerso in un campo elettrostatico $\vec{E}$ uniforme. Poiché $\vec{E}$ è uniforme, le due cariche sentiranno forze uguali in modulo ($qE$) ma opposte in verso: la risultante è nulla e il dipolo non accelera. La coppia di forze però genera un momento meccanico diverso da zero, e quindi il dipolo tenderà, in generale, a ruotare. Scriviamo il momento delle forze rispetto al centro del dipolo:

$$
\vec{M} = \vec{r}\_{c+} \times \vec{F}\_{+} + \vec{r}\_{c-} \times \vec{F}\_{-} = \left( \vec{r}\_{c+} - \vec{r}\_{c-} \right) \times \vec{F}\_{+} = q\vec{a} \times \vec{E} = \vec{p} \times \vec{E}
$$

**Nota Bene:** i vettori $\vec{r}\_{c+}$ e $\vec{r}\_{c-}$ vanno dal centro del dipolo alle cariche, mentre prima andavano dalle cariche al punto $\vec{P}$. Se disegniamo questi vettori troviamo che, in questo caso, $\vec{a} = \vec{r}\_{c+} - \vec{r}\_{c-}$.

Se disegniamo i vettori $\vec{p}$, $\vec{E}$ ed il loro prodotto vettoriale vediamo che un dipolo immerso in un campo elettrostatico tenderà a ruotare per allinearsi al campo.

Per trovare l'energia potenziale associata ad un dipolo scriviamo il lavoro fatto dal momento meccanico. Disegniamo sul piano i vettori $\vec{p}$ ed $\vec{E}$ in maniera tale che il loro prodotto vettoriale sia diretto verso il piano, cioè lungo $-\hat{z}$. In questo caso abbiamo $\vec{M} = -pE \sin{\theta} \hat{z}$. Calcoliamo il lavoro fatto dal momento per portare l'angolo tra $\vec{p}$ ed $\vec{E}$ da $\theta_0$ a $\theta_1$:

$$
W = \int\_{\theta_0}^{\theta_1} M d\theta = -pE \int\_{\theta_0}^{\theta_1} \sin{\theta} d\theta = pE \cos{\theta_1} - pE \cos{\theta_0}
$$

Ricordando la relazione tra lavoro ed energia potenziale ($W = -\Delta U_e$) si trova che:

$$
U_e = -\vec{p} \cdot \vec{E}
$$

## Teorema di Gauss
<small>MNV: paragrafo 3.1</small>

Il teorema (o legge) di Gauss mette in relazione il flusso del campo elettrostatico attraverso una superficie chiusa e la quantità di carica presente nella porzione di volume racchiusa da quella superficie. Il flusso di un campo vettoriale attraverso un elemento di superficie $d\Sigma$ è così definito:

$$
d\Phi(\vec{E}) = \vec{E} \cdot \hat{n} d\Sigma
$$

dove $\hat{n}$ è la *normale* alla superficie, cioè il versore con direzione ortogonale e verso uscente rispetto alla porzione di superficie che stiamo considerando. **Nota Bene:** la dizione *verso uscente* ha senso solamente se la superficie è chiusa, e quindi, potendosi definire un interno ed un esterno, si può parlare di un verso che *esce* dalla superficie.

Il teorema di Gauss, valido in generale per tutti i campi vettoriali centrali che dipendono dalla distanza come $r^{-2}$ (ne conoscete altri?), è così espresso:

$$
\Phi(\vec{E}) = \oint\_\Sigma \vec{E} \cdot \hat{n} d\Sigma = \frac{q}{\epsilon_0}
$$

dove $q$ è la carica *totale* presente all'interno di $\Sigma$. Se chiamiamo $\tau$ la porzione di volume racchiusa da $\Sigma$, nel caso di distribuzioni discrete $q = \sum\_{q_i \in \tau} q_i$, mentre nel caso di distribuzioni continue $q = \int\_{\tau} dq$.

**Nota Bene:** se $\tau$ contiene sia cariche positive che cariche negative, queste si sommano algebraicamente: se la somma è zero il flusso del campo elettrostatico attraverso $\Sigma$ sarà nullo!

Diamo un'interpretazione geometrica del teorema di Gauss disegnando il flusso generato da una singola carica $q$ attraverso una superficie:

1. Disegniamo il numero di linee di campo che attraversano la proiezione del campo lungo la normale di un elementino $d\Sigma$: si vede come questo numero sia indipendente dalla distanza di $d\Sigma$ da $q$, purché l'angolo sotteso resti lo stesso. Questo significa che, se $\Sigma$ è chiusa, l'integrale del flusso attraverso la superficie non può dipendere dalla sua forma.
2. Prendiamo una superficie chiusa.
	* Se la carica è *esterna* alla superficie, le sue linee di campo che entrano nella superficie (e quindi danno contributo negativo all'integrale) ne devono anche uscire (dando contributo positivo all'integrale). Intuitivamente vediamo come il flusso totale (cioè il contributo delle cariche esterne al flusso) debba essere nullo.
	* Se la carica è *interna* alla superficie, le sue linee di campo (a seconda del segno della carica) saranno sempre entranti o uscenti la superficie, e quindi contribuiranno tutte allo stesso modo all'integrale: il contributo totale sarà quindi positivo per cariche positive e negativo per cariche negative.
	
I punti precedenti, insieme al principio di sovrapposizione, forniscono una spiegazione intuitiva del teorema di Gauss. Per una dimostrazione matematicamente ineccepibile si può vedere il paragrafo 3.2 del MNV (non nel programma). È importante però sapere che il teorema di Gauss vale per il campo elettrico perché l'intensità di $E$ diminuisce con il quadrato della distanza. In qualunque altro caso il teorema di Gauss non sarebbe valido.

Il teorema di Gauss è utile da un punto di vista pratico per calcolare il campo elettrostatico di distribuzioni di carica molto simmetriche (cilindriche, sferiche, piane, *etc.*). Permette, ad esempio, di calcolare immediatamente:

* che il campo elettrico all'interno di una sfera carica cava è 0 in ogni punto;
* il campo elettrico generato da una singola carica puntiforme (legge di Coulomb).
