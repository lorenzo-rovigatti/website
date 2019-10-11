+++
title = "Lezione del 10/10/2019"
date = 2019-10-09T09:47:43+02:00
draft = false
+++

## Prima equazione di Maxwell
<small>MNV: paragrafo 3.4</small>

Possiamo riscrivere il teorema di Gauss in forma locale utilizzando il teorema della divergenza:

$$
\oint\_\Sigma \vec{E} \cdot \hat{n} dS = \int\_\tau \vec{\nabla} \cdot \vec{E} d\tau = \frac{1}{\epsilon_0} \int\_\tau \rho d\tau
$$

Notiamo che ora sia a sinistra che a destra abbiamo un integrale sul volume. Possiamo quindi eguagliare gli argomenti dell'integrale, trovando

$$
\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\epsilon_0}
$$

Questa è la prima legge di Maxwell. Il prodotto scalare tra l'operatore gradiente ed un campo vettoriale è detto *divergenza*, e quindi la prima legge di Maxwell si può enunciare dicendo che "la divergenza del campo elettrico in ogni punto dello spazio è uguale alla densità di carica in quel punto, diviso per la costante dielettrica del vuoto".

Utilizzando la definizione di potenziale la prima equazione di Maxwell può essere riscritta, ottenendo l'equazione di Poisson:

$$
\vec{\nabla} \cdot (-\vec{\nabla} V) = -\nabla^2 V = \frac{\rho}{\epsilon_0}
$$
o, equivalentemente, $\nabla^2 V = -\frac{\rho}{\epsilon_0}$.

## Conduttori
<small>MNV: paragrafo 4.1</small>

I conduttori sono materiali in cui sono presenti alcune cariche libere, che quindi possono reagire alla presenza di un campo elettrico muovendosi. 
In presenza di un campo elettrostatico, c'è un *transiente* durante il quale queste cariche si muovono. Alla fine di questa fase, quando il sistema raggiunge il cosiddetto *equilibrio*, si ottiene una distribuzione di carica fissa. Valgono allora le seguenti proprietà (su scale macroscopiche):

1. La distribuzione delle cariche è tale per cui $\vec{E} = 0$ all'interno del conduttore. Se così non fosse, ci sarebbero zone del campo in cui $\vec{E} \neq 0$, il che genererebbe moti di cariche che contravverrebbero all'ipotesi di equilibrio. 
2. Il fatto che $\vec{E} = 0$ in ogni punto interno al conduttore implica come tutte le cariche libere siano distribuite sulla superficie. Questo risultato si dimostra applicando il teorema di Gauss. Prendiamo una superficie $\Sigma$ interna al conduttore. Il flusso del campo attraverso $\Sigma$ vale
$$
\oint\_{\Sigma} \vec{E} \cdot \hat{n} d\Sigma = 0
$$
perché $\vec{E} = 0$. D'altro canto, per il teorema di Gauss questo implica che la carica totale interna alla superficia sia $0$. Questo risultato, data l'arbitrarietà nella scelta di $\Sigma$, implica come le cariche libere possano disporsi *unicamente* sulla superficie del conduttore.
3. Il fatto che il campo sia nullo implica che, all'interno del conduttore, il potenziale è costante. Questo risultato si dimostra calcolando il potenziale tra due punti interni al conduttore e ricordando che $\vec{E} = 0$:
$$
V(P_2) - V(P_1) = -\int\_{P_1}^{P_2} \vec{E} \cdot d\vec{s} = 0
$$
che significa $V(P_2) = V(P_1) = V_0$.
**Nota Bene:** questo risultato implica che il potenziale in un conduttore è costante, non nullo!
4. Il campo vicino alla superficie di un conduttore è normale alla superficie e ha modulo $E = \frac{\sigma}{\epsilon_0}$, con $\sigma$ densità superficiale di carica. Per ottenere questo risultato utilizziamo il teorema di Gauss. Se siamo sufficientemente vicini, qualunque superficie ci sembrerà planare. Applichiamo allora il teorema di Gauss ad un cilindretto di raggio $R$ e basi appena dentro e appena fuori dal conduttore. Il flusso del campo sarà nullo attraverso la superficie laterale (che abbiamo preso di spessore infinitesimo). Sarà però nullo anche attraverso la base interna del conduttore, perché all'interno si ha $\vec{E} = 0$. Resta quindi solamente il contributo dato dalla base esterna, che vale $E \pi R^2$. Secondo il teorema di Gauss, questo flusso è uguale alla carica contenuta all'interno del cilindro, che vale $q = \sigma \pi R^2$, per cui il campo vale
$$
\vec{E} = \frac{\sigma}{\epsilon_0}\hat{n}.
$$
Questo risultato è noto come teorema di Coulomb, da non confondersi né con la legge di Coulomb né con il teorema di Gauss!

Come si distribuisce la carica sulla superficie di un conduttore? Facciamo degli esempi pratici

* Prendiamo una sfera conduttrice, lontana da qualunque altra carica, e carichiamola con carica $q$. Come detto, la carica si concentrerà solo sulla superficie. La densità superficiale di carica deve essere la stessa su tutta la superficie. Se così non fosse,  si genererebbe un campo elettrostatico all'interno del conduttore: se la sfera viene caricata positivamente sulla superficie si troveranno solo cariche positive e viceversa.
* Prendiamo un conduttore posto in un campo esterno $\vec{E}(x, y, z)$. Nel momento in cui il campo viene acceso, all'interno del conduttore il campo vale $\vec{E}(x, y, z)$, e quindi i portatori di carica (quasi sempre elettroni) "migrano" per effetto del campo (fase transiente). All'equilibrio, la distribuzione di cariche sarà tale per cui il campo generato all'interno del conduttore varrà esattamente $\vec{E}_i(x, y, z) = -\vec{E}(x, y, z)$, così da annullare il campo esterno. Il campo $\vec{E}_i$ si chiama *campo indotto*, e la distribuzione di carica all'equilbrio si chiama *carica elettrica indotta*. Questo fenomeno è chiamato *induzione elettrostatica*. **Nota Bene:** la carica *totale* sul conduttore non cambia: sommando (integrando...) la densità di carica indotta si ottiene sempre zero! Ad esempio, mettiamo un conduttore in una regione di spazio in cui è presente un campo uniforme $\vec{E}$, ad esempio tra due piani indefiniti di carica opposta.
	* Se il conduttore è anch'esso un piano, sulla faccia di fronte al piano carico negativamente si accumulerà una carica positiva di densità $\sigma$, mentre sulla faccia di fronte al piano carico positivamente si accumulerà una cativa negativa di densità $-\sigma$. Possiamo verificare che questa combinazione fa sì che all'interno del conduttore si abbia $\vec{E} = 0$.
	* Se il conduttore ha una forma più complicata (ad esempio una sfera), la distribuzione di cariche sarà anch'essa più complicata, ma sempre tale che si abbia $\vec{E} = 0$.
* Se si mettono in contatto (tramite, ad esempio, un filo conduttore) due o più oggetti conduttori si ottiene un *unico corpo conduttore*: il campo è nullo ovunque (lo sarebbe stato anche se i conduttori non fossero stati collegati) e, in aggiunta, tutti i conduttori hanno anche lo stesso potenziale. 

## Conduttori cavi, induzione completa e gabbia di Faraday
<small>MNV: paragrafo 4.2</small>

Consideriamo un conduttore carico cavo, cioè un conduttore che abbia al suo interno una cavità vuota. Se applichiamo il teorema di Gauss all'interno del conduttore, troviamo subito che $\vec{E} = 0$ ovunque, *anche nella cavità*, e quindi la carica totale interna è nulla. Possiamo anche dimostrare che non solo non c'è carica netta, ma che non ci sono parti della superficie interna caricate positivamente e negativamente in modo tale da dare una carica netta nulla. Se così non fosse, all'interno della cavità ci sarebbe un campo $\vec{E} \neq 0$, e la differenza di potenziale $\Delta V\_{AB}$ calcolata tra due punti $A$ e $B$ della superficie su di un percorso passante nella cavità sarebbe anch'essa diversa da 0. Se però calcolassimo la differenza di potenziale tra $B$ ed $A$ su di un percorso che passa esclusivamente all'interno del conduttore troveremmo $\Delta V\_{BA} = 0$. Questo è impossibile, perché la circuitazione del campo (cioè $\oint \vec{E} \cdot d\vec{s} = \Delta V\_{AB} + \Delta V\_{BA}$), è sempre nulla perché il campo elettrostatico è conservativo! Risulta quindi che:

* Il campo è nullo ovunque, anche all'interno della cavità
* Il potenziale è costante ovunque, anche all'interno della cavità

Prendiamo un conduttore $\mathcal{C}$ cavo privo di carica, e introduciamo un oggetto (conduttore o non) di carica $q$ all'interno della cavità. Per effetto dell'induzione, 

1. la superficie interna di $\mathcal{C}$ acquisirà una carica $-q$ 
2. quella esterna una carica $q$. 

Il primo punto si dimostra applicando il teorema di Gauss ad una superficie interna a $\mathcal{C}$ che racchiuda completamente la cavità. Poiché in ogni punto della superficie si ha $\vec{E} = 0$ (siamo all'interno di un conduttore!), anche il suo flusso sarà nullo e quindi, per il teorema, la carica contenuta sarà anch'essa nulla: la superficie interna del conduttore deve per forza di cose annullare il contributo dato dalla carica posta all'interno della cavità. In questo caso il fenomeno d'induzione è detto *d'induzione completa*: tutte le linee di forza che partono dalla carica nella cavità finiscono sulla superficie interna di $\mathcal{C}$ e quindi non c'è *dispersione*.

Il secondo punto si dimostra ricordando che il conduttore era neutro all'inizio, e quindi deve restare neutro. L'unico modo per mantenere la neutralità è che la superficie più esterna sia caricata con una carica $q$. 

Le cariche della superficie interna si dispongono in modo tale da far sì che il campo dovuto al corpo nella cavità non si estenda all'interno del conduttore. Questo spazio tra le due superfici di $\mathcal{C}$ agisce quindi da *schermo elettrostatico*: le informazioni sulle distribuzioni di carica delle diverse superfici non passano dall'esterno all'interno e viceversa. 

Questo effetto di schermo (che è perfetto in elettrostatica ma parziale in presenza di campi elettromagnetici generici) è utilizzato in moltissime applicazioni, spesso sotto il nome di *gabbia di Faraday*:

* Per ridurre il rumore di misure in laboratorio
* Nei cavi coassiali per schermare il segnale
* Gli ascensori agiscono spesso da gabbie di Faraday, limitando fortemente il segnale dei telefono
* Automobili ed aeroplani sono gabbie di Faraday, proteggendo i passeggeri dai fulmini!
* [Per fare video fantastici](https://www.youtube.com/watch?v=pjw5gbkRTaY)

## Condensatori
<small>MNV: paragrafo 4.3</small>

Prendiamo un conduttore sferico cavo di raggio $R_1$ posto al centro di un conduttore sferico cavo di raggio $R_2$. Il conduttore interno possiede una carica $q$, e quindi il conduttore esterno avrà carica $-q$ sulla superficie interna e $q$ su quella esterna. Sistemi dove si ha induzione completa (o quasi completa, nel senso che specificheremo più avanti) tra due conduttori vengono chiamati *condensatori* o *capacitori*. Il sistema di cui ci stiamo occupando è detto *condensatore sferico*. I due conduttori sono detti *armature* del condensatore. Si definisce *capacità del condensatore* la quantità $C = q / \Delta V$, dove $\Delta V$ è la differenza di potenziale tra l'armatura positiva e quella negativa. Per calcolarla nel caso di un condensatore sferico calcoliamo prima di tutto il campo all'interno della cavità. Utilizzando il teorema di Gauss si trova subito che:

$$
E(r ) = \frac{q}{4\pi\epsilon_0 r^2}
$$

I due conduttori sono quindi ad una differenza di potenziale data da:

$$
\Delta V = V_1 - V_2 = -\int\_{R_2}^{R_1} E(r ) dr = \frac{q}{4\pi\epsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2}\right)
$$

e quindi la capacità vale:

$$
C = \frac{4\pi\epsilon_0 R_1 R_2}{R_2 - R_1}
$$

La capacità di un condensatore ci dice quanta carica si deposita sulle armature quando queste sono poste ad una differenza di potenziale di $1$ V. L'unità di misura è il Farad F. Si ha 1 F = 1 C / V. Di solito si usano sottomultipli (millifarad, microfarad, nanofarad, picofarad).

Calcoliamo la capacità di altri due condensatori molto comuni:

1. Due cilindri conduttori coassiali di raggi $R_1$ e $R_2$ costituiscono un condensatore cilindrico. Poniamo che $\lambda = q / d$ sia la densità di carica lineare. Abbiamo visto durante un'esercitazione che la differenza di potenziale tra le due armature generata dal cilindro più interno vale $\Delta V = \frac{\lambda}{2\pi\epsilon_0} \log{ \left( \frac{R_2}{R_1} \right)} = \frac{q}{2\pi\epsilon_0d}\log{\left( \frac{R_2}{R_1} \right)}$. La capacità di un condensatore cilindrico di lunghezza $d$ è quindi:
$$
C = \frac{2\pi\epsilon_0 d}{\log\left( \frac{R_2}{R_1} \right)}
$$
2. Due piani paralleli carichi (con densità di carica $\sigma_1 = -\sigma_2$ opposta) distanti $h$ costituiscono le armature di un condensatore piano. La differenza di potenziale tra le due armature vale $\Delta V = \frac{\sigma}{\epsilon_0}h = \frac{qh}{\Sigma \epsilon_0}$, dove $\Sigma$ è la superficie dei piani. La capacità vale quindi:
$$
C = \frac{\Sigma \epsilon_0}{h}
$$

In entrambi i casi appena discussi abbiamo (ovviamente) considerato armature di grandezza finita, ma abbiamo utilizzato le espressioni del campo e del potenziale ricavate per sistemi infiniti. In realtà l'approssimazione che abbiamo fatto è tanto più valida quanto le dimensioni dei conduttori sono grandi rispetto ad $h$. È interessante comunque considerare i cosiddetti *effetti di bordo*, almeno da un punto di vista qualitativo. Consideriamo un condensatore piano e calcoliamo la circuitazione del campo attraverso un percorso che passi sia per l'interno che per l'esterno del volume compreso tra le armature (vedi figura 4.21 del MNV). Se utilizzassimo l'espressione del campo valido per piani infiniti troveremmo che la circuitazione del campo è diversa da zero: mentre la parte interna al condensatore contribuisce all'integrale, quella esterna è nulla (perché il campo esterno, nell'approssimazione discussa sopra, è 0). Questo ovviamente non è possibile. In realtà il campo vicino ai bordi si deforma e non è più uniforme: si parla di *dispersione del campo*. Le linee di campo vicino ai bordi sono in qualche modo simili a quelle generate da dipoli (vedi figura 4.22). 

## Collegamento di condensatori
<small>MNV: paragrafo 4.4</small>

I condensatori sono importantissimi in elettrotecnica, e sono utilizzati in praticamente qualunque circuito elettrico, dove sono indicati col simbolo:

{{< figure src="../images/capacitor.png" width="200px">}}

I condensatori possono essere connessi tra di loro o con altri elementi per formare un *circuito*. I due modi di connessione più semplici sono:

* Connessione in parallelo: la differenza di potenziale ai capi dei condensatori (o degli elementi di circuito) è la stessa;
* Connessione in serie: la differenza di potenziale tra la prima e l'ultima armatura è fissa, cioè ogni elemento è connesso solamente a quello che lo segue.

Calcoliamo la capacità equivalente di due condensatori collegati in queste due configurazioni.

### Condensatori in parallelo

I due condensatori hanno capacità $C_1$ e $C_2$ e hanno entrambi la stessa differenza di potenziale $\Delta V$. Si ha quindi

\begin{align}
q_1 & = C_1 \Delta V\\\\\\
q_2 & = C_2 \Delta V
\end{align}

La carica totale del sistema è quindi $q = (C_1 + C_2) \Delta V = C\_{\rm eq} \Delta V$: la capacità equivalente di un sistema di condensatori in parallelo è data dalla somma delle singole capacità ed è sempre maggiore di quella di ciascun componente.

### Condensatori in serie

In questo caso abbiamo due condensatori di capacità $C_1$ e $C_2$. Il sistema è quindi composto da tre conduttori, $A$, $B$ e $C$. Se l'armatura di $A$ è caricata con $q$, questa carica sarà anche sull'armatura inferiore di $B$. L'armatura superiore di $B$ e quella di $C$ hanno invece carica $-q$. La differenza di potenziale tra $A$ e $C$ è $\Delta V = V_C - V_A$. La differenza di potenziale tra il primo e il secondo conduttore è $V_B - V_A = q / C_1$, mentre quella tra il secondo e il terzo vale $V_C - V_B = q / C_2$. Si ha quindi:

$$
\Delta V = V_C - V_A = V_C - V_B + V_B - V_A = q \left( \frac{1}{C_1} + \frac{1}{C_2} \right) = \frac{q}{C\_{\rm eq}}
$$

L'inverso della capacità equivalente di un sistema di condensatori in serie è dato dalla somma degli inversi delle singole capacità. La capacità equivalente è quindi sempre minore di quella di ciascun componente.
