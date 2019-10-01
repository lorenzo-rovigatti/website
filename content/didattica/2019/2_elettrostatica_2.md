+++
title = "Lezione del 02/10/2019"
date = 2019-10-01T09:47:43+02:00
draft = false
+++

## Linee di forza di $\vec{E}$
<small>MNV: paragrafo 1.6</small>

Qualunque distribuzione di carica genera un campo elettrostatico in tutto lo spazio: se volessimo mettere una carica di prova in un punto qualsiasi, questa sentirebbe una forza dovuta alla presenza di tutte le altre cariche.

Possiamo *disegnare* questo campo partendo da un punto e muovendoci lungo la tangente del campo. Otterremo un insieme di linee (dette di forza o di campo) con le seguenti proprietà:

* Le linee hanno la stessa direzione e lo stesso verso del campo.
* Più le linee sono dense, più il campo è intenso (e viceversa).
* In ogni punto il campo prende uno e un solo valore: le linee non possono *mai* incrociarsi.
* Le linee partono dalle cariche positive e terminano su quelle negative. Se il sistema non è neutro, alcune linee di forza non terminano ma si *chiudono all'infinito*.

A [questo]({{< ref "../html-field-lines/index.html" >}}) link è possibile visualizzare le linee di forza di un campo elettrostatico generato sul piano da una qualsiasi distribuzione di carica discreta.

## Moto di una carica in un campo elettrostatico
<small>MNV: paragrafo 1.7 ed esempio 1.9</small>

Poniamo una carica $q_0$ in una regione di spazio dove è presente un campo elettrostatico $\vec{E}$ generato da una distribuzione di cariche fisse (nel senso che abbiamo già discusso). Se la carica ha massa $m$, la presenza del campo la sottoporà ad una accelerazione in accordo con le leggi della dinamica in condizioni non relativistiche ($\vec{F} = q_0\vec{E} = m\vec{a}$), per cui

$$
\vec{a} = \frac{d^2\vec{r}}{dt^2} = \frac{q}{m}\vec{E}
$$

La relazione precedente può essere integrata per ottenere (a partire da condizioni iniziali date) la posizione e velocità della carica nel tempo. In generale, se $q > 0$ l'accelerazione è parallela e concorde ad $\vec{E}$, mentre se $q$ è negativa $\vec{a}$ ed $\vec{E}$ hanno verso opposto.

Per fare un esempio, descriviamo il moto di una particella di massa $m$ e carica $q$ in un campo uniforme $\vec{E}$ (come può essere quello generato da piani indefiniti). Prendiamo un sistema di riferimento che abbia l'asse $x$ orientato lungo la direzione del campo elettrico. Se la particella carica ha posizione iniziale $(x_0, y_0, z_0)$ e velocità iniziale $(v\_{0,x}, v\_{0,y}, v\_{0,z})$, le equazioni del moto lungo $x$ si scrivono:

$$
\begin{align}
a_x(t) & = \frac{q}{m}E\\\\
v_x(t) & = v\_{0,x} + at\\\\
x(t) & = x_0 + v\_{0,x}t + \frac{1}{2}at^2
\end{align}
$$

Lungo gli altri assi si ha $a_y(t) = a_z(t) = 0$ e quindi

$$
\begin{align}
v_y(t) & = v\_{0,y}\\\\
v_z(t) & = v\_{0,z}\\\\
y(t) & = y_0 + v\_{0,y}t\\\\
z(t) & = z_0 + v\_{0,z}t
\end{align}
$$

Poiché la particella accelera, la sua energia cinetica $U_k = \frac{1}{2}mv^2(t)$ cambia nel tempo. Calcoliamo la differenza di energia cinetica:

$$
\Delta U_k(t) = U_k(t) - U_k(0) = \frac{1}{2}m\left(v\_{0,x}^2 + a^2t^2 + 2v\_{0,x}at\right) - \frac{1}{2}mv\_{0,x}^2 = \frac{1}{2}m(a(at^2+ 2v\_{x,0}t)) = ma(x(t) - x_0)
$$

Se ora sostituiamo la relazione che collega $E$ ad $a$ troviamo

$$
\Delta U_k(t) = qE(x(t) - x_0) = F\Delta s(t)
$$

Dove $F$ è la forza elettrica e $\Delta s$ è lo spostamento. La differenza di energia cinetica è quindi pari al lavoro svolto dalla forza elettrostatica, $W$.

## Lavoro della forza elettrostatica
<small>MNV: prima parte del paragrafo 2.1 (senza forza elettromotrice)</small>

La formula trovata prima è un caso particolare di una definizione più generale. Richiamiamo qui un argomento del corso di meccanica: la definizione di lavoro associato ad uno spostamento lungo un percorso generico $\mathcal{C}_1$ che va dal punto $A$ al punto $B$ in presenza di una forza $\vec{F}$. Dividiamo il percorso $\mathcal{C}_1$ in segmenti infinitesimi $d\vec{s}$, dove ogni $d\vec{s}$ è il vettore tangente al percorso $\mathcal{C}_1$ in quel punto. Ogni contributo infinitesimo di lavoro $dW$ è dato dalla componente della forza $\vec{F}$ lungo $d\vec{s}$, cioè $\vec{F} \cdot d\vec{s}$. Per ottenere il lavoro totale sommiamo tutti questi contributi integrando su tutto il percorso $\mathcal{C}_1$:

$$
W\_{\mathcal{C}_1} = \int\_{\mathcal{C}_1} \vec{F} \cdot d\vec{s}
$$

In linea di massima la quantità $W$ dipende dal percorso che scegliamo per connettere $A$ e $B$: se anche $\mathcal{C}_2$ porta da $A$ a $B$, in generale si avrà $W\_{\mathcal{C}_1} \neq W\_{\mathcal{C}_2}$. Le forze per cui vige l'uguaglianza sono dette *forze conservative*. In questo caso l'integrale precedente non dipende più da tutto il percorso $\mathcal{C}_1$, ma solo dai punti $A$ e $B$ di partenza e di arrivo. In formule:

$$
W\_{\mathcal{C}_1} = W\_{AB} = \int_A^B \vec{F} \cdot d\vec{s}
$$

Un esempio di forza conservativa è data dalla forza gravitazionale. Al contrario, la forza d'attrito è un esempio di forza non conservativa. Infatti, immaginiamo di trascinare un peso che poggia su un piano con attrito da un punto $A$ ad un punto $B$. È chiaro anche da un punto di vista intuitivo che il lavoro compiuto dalla forza lungo un percorso rettilineo sarà minore (in modulo) di quello compiuto lungo un percorso (ad esempio) ad arco. Un'importante proprietà delle forze conservative è che il lavoro da loro compiuto su di un circuito chiuso è sempre nullo. Questo si può dimostrare facilmente prendendo due punti $A$ e $B$ e due percorsi $\mathcal{C}_1$ e $\mathcal{C}_2$ qualsiasi che li uniscono. Si avrà allora:

$$
W\_{\rm tot} = W\_{\mathcal{C}_1} + W\_{\mathcal{C}_2} = W\_{AB} + W\_{BA} = \int_A^B \vec{F} \cdot d\vec{s} + \int_B^A \vec{F} \cdot d\vec{s} = \int_A^B \vec{F} \cdot d\vec{s} - \int_A^B \vec{F} \cdot d\vec{s} = 0
$$

Solitamente l'integrale di linea di un percorso chiuso si indica col simbolo $\oint$.

Per quanto riguarda l'interazione elettromagnetica, mentre in generale le forze elettriche non sono conservative, si può dimostrare (vedi MNV 2.2) che la forza elettrostatica lo è. Si può quindi scrivere, per una forza elettrostatica agente sulla carica $q_0$,

$$
W\_{\mathcal{C}_1} = W\_{AB} = \int_A^B \vec{F} \cdot d\vec{s} = q_0 \int_A^B \vec{E} \cdot d\vec{s}
$$

Discende da questa relazione e da quanto detto in precedenza sulle forze conservative che la circuitazione del campo elettrostatico è *sempre nulla*, cioè:

$$
\oint \vec{E} \cdot d\vec{s} = 0
$$

In maniera analoga a quanto fatto per la forza, il risultato precedente si può esprimere dicendo che anche il campo elettrostatico è conservativo.

## Potenziale elettrostatico
<small>MNV: seconda parte del paragrafo 2.1 e paragrafo 2.2</small>

Ricordiamo che l'integrale di linea di $\vec{E}\cdot d\vec{S}$ non dipende dal percorso ma solo dai punti $A$ e $B$ di partenza ed arrivo. Senza perdere di generalità possiamo quindi scrivere:

$$
\int_A^B \vec{E}\cdot d\vec{s} = V(A) - V(B) = -(V(B) - V(A)).
$$

La funzione $V(\vec{r})$ si chiama potenziale elettrostatico e, poiché compare come differenza nella relazione precedente (che la definisce), è definita a meno di una costante. Utilizzando la funzione $V$ possiamo riscrivere la definizione di lavoro della forza elettrostatica:

$$
W\_{AB} = -q_0(V(B) - V(A)) = -q_0 \Delta V
$$

Alle forze conservative si può associare una energia potenziale la cui differenza tra due punti è pari all'opposto del lavoro compiuto per quello stesso spostamento, cioè:

$$
W\_{AB} = U_e(A) - U_e(B) = -( U_e(B) - U_e(A) ) = -q_0 ( V(B) - V(A) )
$$

L'energia potenziale di un sistema elettrostatico (detta anche *energia potenziale elettrostatica*) è quindi strettamente legata al potenziale:

$$
\Delta U_e = q_0 \Delta V
$$

**Nota Bene:** la dicitura *conservativa* non è casuale. In presenza di sole forze conservative, infatti, l'energia *totale* del sistema (energia cinetica più energia potenziale) si conserva: se l'energia potenziale varia di una certa quantità, il valore dell'energia cinetica varia della stessa quantità cambiata di segno. Per esempio, nel caso semplice di un campo uniforme abbiamo dimostrato che $\Delta U_k = W$. Ora abbiamo visto che $W = -\Delta U_e$, il che implica che $\Delta U_k + \Delta U_e = 0$.

### Il potenziale generato da una carica puntiforme

Calcoliamo il potenziale elettrostatico associato al campo generato da una carica puntiforme $q$. Per farlo dobbiamo usare la definizione che lo collega all'integrale del prodotto scalare tra il campo elettrostatico e lo spostamento elementare $d\vec{s}$:

$$
\vec{E} \cdot d\vec{s} = E \hat{E} \cdot d\vec{s} = E dr = \frac{q}{4\pi \epsilon_0} \frac{dr}{r^2}
$$

Integriamo questa quantità lungo un percorso $\mathcal{C}$ che va da $A$ a $B$ per trovare la differenza di potenziale:

$$
\int\_\mathcal{C} \vec{E} \cdot d\vec{s} = \frac{q}{4\pi \epsilon_0} \int_A^B \frac{dr}{r^2} = - \left( \frac{q}{4\pi \epsilon_0}\frac{1}{r_B} - \frac{q}{4\pi \epsilon_0}\frac{1}{r_A} \right).
$$

In questo caso abbiamo dimostrato direttamente che il lavoro non dipende dallo specifico $\mathcal{C}$ scelto ma solo da $A$ e $B$. Inoltre, il risultato dell'integrale ci dà l'espressione del potenziale elettrostatico generato da una carica puntiforme $q$:

$$
V(r ) = \frac{q}{4\pi\epsilon_0} \frac{1}{r} + C
$$
dove $C$ è una costante arbitraria. Nella maggior parte dei casi (ma non sempre!) si impone $V(r \to \infty) = 0$ e quindi $C = 0$, per cui l'espressione del potenziale diventa:

$$
V(r ) = \frac{q}{4\pi\epsilon_0} \frac{1}{r}.
$$

In questo caso il potenziale dipende solo dalla distanza dalla carica e ha quindi simmetria sferica.

**Nota Bene:** la *funzione* potenziale e la *differenza* di potenziale sono due cose diverse! 

### Il principio di sovrapposizione applicato al potenziale

Consideriamo una distribuzione discreta di $N$ cariche. Il campo elettrico è dato da $\vec{E} = \sum\_{i=1}^N \vec{E}_i$. La differenza di potenziale tra due punti $A$ e $B$ sarà quindi:

$$
\Delta V = -\int_A^B \vec{E} \cdot d\vec{s} = -\int_A^B \sum\_{i=1}^N \vec{E}_i \cdot d\vec{s} = -\sum\_{i=1}^N \int_A^B  \vec{E}_i \cdot d\vec{s}
$$

Dalla definizione di potenziale possiamo riscrivere la differenza come:

$$
\Delta V = \sum\_{i=1}^N \Delta V_i
$$

Il che dimostra che il principio di sovrapposizione si applica anche al potenziale elettrostatico: la differenza di potenziale dovuta ad una distribuzione di cariche è uguale alla somma delle differenze di potenziale dovute alle singole cariche. Lo stesso risultato si estende a distribuzione di cariche continue, per le quali vale (analogamente a quanto visto per il campo e se scegliamo di imporre $C = 0$):

$$
V(r ) = \int dV = \frac{1}{4\pi\epsilon_0} \int \frac{dq}{r}
$$

dove l'integrale è esteso al volume contenente la distribuzione di carica.

## Relazione inversa tra $\vec{E}$ e $V$
<small>MNV: paragrafi 2.4 e 2.6</small>

Consideriamo i due punti $\vec{A} = (x, y, z)$ e $\vec{B} = \vec{A} + d\vec{r}$, dove $d\vec{r} = \hat{x}dx + \hat{y}dy + \hat{z}dz$ è uno spostamento infinitesimo. La differenza di potenziale tra $\vec{A}$ e $\vec{B}$ dipende solamente dalle loro coordinate, quindi

$$
dV = V(x + dx, y + dy, z + dz) = -\vec{E} \cdot d\vec{r} = -E_x dx - E_y dy - E_z dz
$$

Consideriamo anche che, in maniera del tutto generale, il differenziale totale si scrive $dV = \frac{\partial V}{\partial x}dx + \frac{\partial V}{\partial y}dy + \frac{\partial V}{\partial z}dz$. Uguagliando membro a membro le due equazioni precedenti troviamo:

$$
E_x = -\frac{\partial V}{\partial x}, \quad E_y = -\frac{\partial V}{\partial y}, \quad E_z = -\frac{\partial V}{\partial z}
$$

La relazione precedente si può riassumere dicendo che, in ogni punto dello spazio, *il campo elettrostatico è uguale al gradiente del potenziale*. Di solito l'*operatore* gradiente si indica con il simbolo $\vec{\nabla}$ (detto *nabla* o *del*) e, in coordinate cartesiane, vale

$$
\vec{\nabla} = \frac{\partial}{\partial x}\hat{x} + \frac{\partial}{\partial y}\hat{y} + \frac{\partial}{\partial z}\hat{z}
$$

**Nota Bene:** $\vec{\nabla}$ è un vettore e come tale si può quindi moltiplicare per un altro vettore sia scalarmente che vettorialmente.

Ora che abbiamo introdotto il concetto di gradiente possiamo riscrivere in forma *locale* il fatto che la circuitazione del campo elettrostatico sia sempre nulla. Lo facciamo applicando il *teorema di Stokes*, che afferma che *la circuitazione di un campo vettoriale lungo un percorso chiuso $\mathcal{C}$ è uguale al flusso del rotore dello stesso campo attraverso una qualunque superficie $\Sigma$ avente per contorno $\mathcal{C}$*. In formule:

$$
\oint \vec{E} \cdot d\vec{s} = \int_\Sigma \vec{\nabla} \times \vec{E} \cdot \hat{n} d\Sigma = 0,
$$
 dove $\hat{n}$ è il versore *normale* alla superficie. Poiché l'integrale a destra deve essere vero per *qualunque* $\Sigma$ che abbia come contorno $\mathcal{C}$, si deve avere, in ogni punto dello spazio,
 
 $$
 \vec{\nabla} \times \vec{E} = 0
 $$
 
Ne deriva che il campo elettrostatico, essendo conservativo, è anche *irrotazionale*, cioè ha sempre rotore nullo. La relazione precedente, valida per il campo elettrostatico in ogni punto dello spazio, può essere dimostrata scrivendo esplicitamente le componenti del rotore e sostituendo alle componenti del campo le derivata del potenziale.
