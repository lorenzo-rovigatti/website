+++
title = "Lezione 21/10/2020"
date = 2019-10-13T16:00:44+02:00
draft = false
+++

## Energia e densità di energia del campo elettrostatico
<small>MNV: paragrafo 4.5</small>

Il processo di carica di un condensatore consiste nello spostare cariche da un'armatura ad un'altra, e quindi richiede una quantità di lavoro che dipende dalla carica $q$ e dalla capacità $C$ (o, equivalentemente, dalla differenza di potenziale $\Delta V = q / C$). Durante la fase di carica, se il condensatore è posto ad una differenza di potenziale $\Delta V$, il lavoro infinitesimo da compiere per spostare $dq$ da un'armatura all'altra è:

$$
dW\_{\rm ext} = \Delta V dq = \frac{q}{C} dq.
$$

Il lavoro complessivo necessario per caricare il condensatore con $q$ è:

$$
W\_{\rm ext} = \int_0^q \frac{q'}{C}dq' = \frac{1}{2} \frac{q^2}{C} = U_e
$$

L'ultima uguaglianza deriva dal fatto che, per definizione, in un sistema conservativo il lavoro compiuto per "assemblare" un sistema è pari alla sua energia potenziale. Utilizzando le relazione che intercorrono tra $q$, $C$ e $\Delta V$, l'energia elettrostatica si può scrivere in maniera equivalente:

$$
U_e = \frac{1}{2} \frac{q^2}{C} = \frac{1}{2} q \Delta V = \frac{1}{2} C \Delta V^2
$$

Se consideriamo un condensatore piano, possiamo esprimere la stessa relazione in funzione non delle sorgenti del campo elettrostatico (cioè le cariche) ma del campo stesso. In questo caso specifico, infatti, si ha che $E = V / h$ e $C = \epsilon_0 \Sigma / h$. D'altro canto, $\frac{1}{2} \frac{q^2}{C} = \frac{1}{2} C \Delta V^2$, e quindi

$$
U_e = \frac{1}{2} C \Delta V^2 = \frac{1}{2} \frac{\epsilon_0 \Sigma}{h} E^2 h^2 = \frac{1}{2} \epsilon_0 E^2 \Sigma h \equiv \frac{1}{2} \epsilon_0 E^2 \tau
$$

Dove abbiamo definito $\tau = \Sigma h$ volume del condensatore. In questo caso specifico l'energia è quindi proporzionale al volume in cui è presente il campo elettrostatico. Ne consegue che possiamo definire la quantità *densità di energia elettrostatica* (di unità di misura J / m$^3$),

$$
u_e = \frac{U_e}{\tau} = \frac{1}{2}\epsilon_0 E^2
$$

Anche se derivata nel caso molto specifico di campo uniforme, si può dimostrare come la relazione precedente abbia carattere generale. Nell'elenco che segue forniamo solo alcune ipotesi e giustificazioni *a posteriori* che suggeriscono questa generalità:

* Il concetto di densità di energia richiede che $u_e$ ed $E$ siano distribuiti in maniera simile: dove uno è zero lo è anche l'altra.
* La relazione precedente non dipende in alcun modo dalla geometria del sistema, ma solo dal valore del campo e dalle proprietà del mezzo (in questo caso il vuoto, caratterizzato da $\epsilon_0$).
* Se supponiamo che il campo sia uniforme all'interno di un volumetto infinitesimo $\delta \tau$, la relazione che lega $u_e$ a $U_e$ si può generalizzare:
$$
U_e = \int\_\tau u_e d\tau
$$

**Nota Bene:** Quest'ultima relazione è così generale da essere valida per qualunque campo elettrico. Mostriamolo in un caso particolare un po' più complicato: l'energia elettrostatica di un condensatore sferico. Il campo tra le armature vale:

$$
E(r ) = \frac{q}{4\pi\epsilon_0 r^2}
$$

E quindi:

$$
U_e = \frac{1}{2} \epsilon_0  4 \pi \int\_{R_1}^{R_2} E^2(r ) r^2 dr = \frac{q^2}{8 \pi \epsilon_0} \int\_{R_1}^{R_2} \frac{dr}{r^2} = \frac{q^2}{8 \pi \epsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2} \right)
$$

Si ottiene lo stesso risultato se ricordiamo che $U_e = \frac{1}{2} \frac{q^2}{C}$, dove $C = 4 \pi \epsilon_0 \frac{R_1 R_2}{R_1 - R_2}$ è la capacità di un condensatore sferico.

L'energia elettrostatica può essere utilizzata per calcolare le forze agenti in un sistema di cariche. Il lavoro della forza è infatti legato (tramite un segno meno) alla differenza di energia elettrostatica. Per esempio, la forza che agisce lungo la direzione $\hat{x}$ può essere calcolata tenendo conto del fatto che

$$
dW = F_x dx = - dU_e
$$

Per cui si ha:

$$
F_x = -\frac{dU_e}{dx}
$$

Vediamo, ad esempio, la forza che agisce tra le due armature di un condensatore piano. L'energia elettrostatica è:

$$
U_e = \frac{1}{2} \frac{q^2}{C} = \frac{1}{2} \frac{q^2h}{\epsilon_0 \Sigma}
$$

e quindi la forza (che ha direzione normale alle armature per simmetria, come il campo) sarà data da:

$$
F = -\frac{dU_e}{dh} = -\frac{q^2}{2\epsilon_0 \Sigma} = -\frac{\sigma^2 \Sigma}{2 \epsilon_0}
$$

La forza è negativa: tenderà ad avvicinare le armature. 

**Nota Bene:** per calcolare la forza come derivata dell'energia, quest'ultima deve essere espressa come funzione di quantità che *non variano* al variare di $x$. Ad esempio, se avessimo derivato l'espressione $U_e = \frac{1}{2} C \Delta V^2 = \frac{1}{2} \frac{\epsilon_0 \Sigma}{h} \Delta V^2$ per $h$ avremmo ottenuto il risultato sbagliato, perché variando $h$ cambia anche $\Delta V$!

## Dielettrici
<small>MNV: paragrafo 4.6</small>

Si trova sperimentalmente che la differenza di potenziale tra le armature di un condensatore riempito con un materiale qualsiasi diminuisce. Prendamo il caso semplice di un condensatore piano di capacità $C_0$, posto ad una differenza di potenziale $\Delta V_0$ e le cui armature distano $h$. Inseriamo una lastra di spessore $s$ parallelamente alle armature.

* Se il materiale è conduttore (e l'oggetto non tocca le armature) si ha il fenomeno di induzione completa: sulle superfici della lastra appaiono le densità di carica $\sigma$ e $-\sigma$, il campo all'interno della lastra si annulla e quindi la differenza di potenziale tra le armature  vale $\Delta V = (h - s) \Delta V_0$. 
* Se il materiale è *isolante*, si trova sperimentalmente una riduzione del potenziale *minore* che in presenza di un conduttore. Si trova anche che è possibile riempire completamente il volume tra le armature senza che ci sia passaggio di corrente (da cui il nome di isolante). Misurando la differenza di potenziale in questo caso, si trova che, per la classe di materiali detti *dielettrici*, vale $\Delta V_0 / \Delta V \equiv \kappa > 1$. $\kappa$ è detta *costante dielettrica relativa del dielettrico* ed è una proprietà del materiale: non dipende dalla forma delle armature, dalle loro dimensioni o da quanto sono caricate. **Nota Bene:** $\kappa$ è definita come rapporto di d.d.p., e come tale non ha associata alcune unità di misura: è un numero adimensionale. In altri libri il simbolo per questa quantità è $\epsilon_r$.

Gli isolanti **non hanno cariche libere**, e sono quindi fondamentalmente diversi dai conduttori. 
Il campo tra le armature, nell'ipotesi che resti uniforme, è ridotto dello stesso fattore:

$$
E = \frac{V}{h} = \frac{V_0}{\kappa h} = \frac{E_0}{\kappa} = \frac{\sigma_0}{\kappa \epsilon_0}
$$

Aggiungere la lastra dielettrica genera una variazione del campo di:

$$
E_0 - E = \frac{\sigma_0}{\epsilon_0} - \frac{\sigma_0}{\kappa \epsilon_0} = \frac{k - 1}{k} \frac{\sigma_0}{\epsilon_0} \equiv \frac{\chi}{\chi +1} \frac{\sigma_0}{\epsilon_0}
$$

con $\chi = \kappa - 1$ chiamata *suscettività elettrica del dielettrico*. 

Il campo tra le armature (cioè il campo all'interno del dielettrico) può essere riscritto come differenza,

$$
E = \frac{\sigma_0}{\epsilon_0} - \frac{\kappa - 1}{\kappa} \frac{\sigma_0}{\epsilon_0} \equiv \frac{\sigma_0}{\epsilon_0} - \frac{\sigma_p}{\epsilon_0}
$$

dove $\sigma_p = \frac{\kappa - 1}{\kappa}\sigma_0$. Il campo nel dielettrico può quindi essere descritto come il campo dovuto ad una sovrapposizione di due densità di carica. La prima è quella delle armature. La seconda ha segno opposto, è minore in modulo (determinato da $\kappa$) e la immaginiamo depositata sulle superfici del dielettrico. Da questa definizione segue che le superfici del dielettrico sono cariche con carica:

$$
q_p = \frac{\kappa - 1}{\kappa} q_0 < q_0
$$

La capacità del sistema condensatore$+$dielettrico è anch'essa variata e vale:

$$
C = \frac{q_0}{\Delta V} = \kappa \frac{q_0}{\Delta V_0} = \kappa C_0
$$

Più la costante dielettrica relativa è maggiore, più la capacità è grande! 

Nei materiali amorfi (cioè non cristallini) le proprietà dielettriche sono determinate da due valori: la costante dielettrica relativa e la rigidità dielettrica, cioè il valore massimo del campo oltre il quale l'isolante viene danneggiato irreparabilmente. L'aria ha $\kappa \simeq 1$, mentre l'acqua ha $\kappa \simeq 80$. 

## Polarizzazione dei dielettrici
<small>MNV: paragrafo 4.7</small>

Se un materiale non ha cariche libere, l'unica maniera in cui può reagire alla presenza di un campo elettrico è polarizzarsi: 

* Le nuvole elettroniche e i nuclei degli atomi tenderanno a spostarsi, rispettivamente, in direzione contraria e concorde al campo. Ogni atomo quindi acquisterà un momento di dipolo $\vec{p}_a = Ze \vec{x}$, dove $Ze$ è la carica atomica e $\vec{x}$ il vettore che separa il centro della carica negativa elettronica da quello del nucleo. Questo meccanismo è detto *polarizzazione elettronica*.
* In alcuni liquidi e gas, le molecole posseggono un momento di dipolo intrinseco (l'acqua ad esempio). In questi casi si può osservare anche la cosiddetta *polarizzazione per orientamento*: in presenza di un campo elettrico le molecole tenderanno ad orientarsi lungo la direzione del campo. In questo caso il momento di dipolo di ogli atomo/molecola è costante, ma l'allineamento medio col campo (e quindi il momento di dipolo *macroscopico*) è soltanto parziale perché disturbato dall'agitazione termica.

Il momento di dipolo medio $\langle \vec{p} \rangle$ di ogni atomo o molecola (indotto o intrinseco) è molto piccolo e parallelo al campo elettrostatico esterno $\vec{E}$, ma il numero enorme di atomi di cui i materiali sono composti fa sì che il campo totale generato assuma grandezza macroscopica. Se questo numero è $N$, il momento di dipolo totale è $N \langle \vec{p} \rangle$, e il momento di dipolo per unità di volume sarà

$$
\vec{P} = \frac{N}{\tau} \langle \vec{p} \rangle \equiv n \langle \vec{p} \rangle
$$

dove $n$ è il numero di atomi o molecole per unità di volume e $\vec{P}$ è detto *vettore polarizzazione* e, come $\langle \vec{p} \rangle$, è parallelo ad $\vec{E}$.

Consideriamo un dielettrico solido: è lecito immaginare che, in presenza di un campo uniforme come quello generato da due armature piane, anche $\vec{P}$ sia uniforme (cioè supponiamo che il dielettrico sia *polarizzato uniformemente*), cioè abbia lo stesso valore ovunque nella lastra. Immaginiamo l'effetto del campo esterno: tutti gli atomi si polarizzano, con gli elettroni e i nuclei che si spostano lungo la direzione del campo. Per atomi o molecole nel centro del materiale questo spostamento non determina una vera e propria comparsa di una densità di carica, perché la distanza tra i centri della nuvola elettronica e del nucleo di atomi o molecole polarizzate è minuscola rispetta alle scale macroscopiche, e quindi la carica, localmente, si compensa, risultando ovunque nulla. Di converso, le regioni superficiali inferiore e superiore risulteranno cariche poiché nessuna compensazione è possibile. Dato che queste regioni hanno uno spessore comparabile con la taglia atomica, la densità di carica si può considerare a tutti gli effetti superficiale. Questa densità di carica, che ha segno opposto a quella dell'armatura che ha di fronte, è ciò che genera il campo che si contrappone al campo esterno e che abbiamo chiamato $\sigma_p$. Infatti, se prendiamo un parallelepipedo infinitesimo di materiale, il suo momento di dipolo indotto varrà $\vec{p} = \vec{P} d\tau = P d\Sigma d\vec{h}$ avendo scelto $d\vec{h}$ parallelo a $\vec{P}$. Possiamo immaginare che questo momento di dipolo sia generato da due cariche $q_p = \pm P d\Sigma$ poste a distanza $d\vec{h}$ e distribuite sulle superfici con densità $\pm \sigma_p = \pm q_p / d\Sigma = \pm P$.

**Nota Bene:** la densità di carica $\sigma_p$ è dovuta a spostamenti microscopici locali e non alla presenza di cariche libere, come invece accade nei conduttori.

La relazione $\sigma_p = P$ può essere generalizzata a superfici non parallele al campo $\vec{E}$ considerando, invece della superficie del volumetto la sua sezione, che vale $d\Sigma \cos{\theta}$, dove $\theta$ è l'angolo tra la normale alla superficie e il vettore polarizzazione. Si ottiene:

$$
\sigma_p = \vec{P} \cdot \hat{n}
$$

Con questa formula otteniamo automaticamente che una superficie sia caricata positivamente e l'altra negativamente (provare per credere, considerando l'orientazione del campo costante e ricordando che la normale ad una superficie punta sempre verso l'esterno).

I dielettrici che considereremo sono detti *lineari*, perché la relazione che lega il vettore polarizzazione del campo si scrive:

$$
\vec{P} = \epsilon_0 (\kappa - 1) \vec{E} = \epsilon_0 \chi \vec{E}
$$

## Legge di Gauss in presenza di dielettrici
<small>MNV: paragrafo 4.8</small>

In presenza di dielettrici, il fenomeno della polarizzazione fa sì che appaiano delle cariche indotte sulle superfici dei dielettrici. Consideriamo un condensatore piano riempito con un dielettrico e applichiamo il teorema di Gauss ad una superficie che includa una parte di una sola armatura. Si avrà che

$$
\Phi(\vec{E}) = \oint \vec{E} \cdot \hat{n} d\Sigma = \frac{q + q_p}{\epsilon_0}
$$

perché il teorema di Gauss ci dice che dobbiamo considerare *tutte* le cariche presenti all'interno della superficie. Utilizziamo la relazione che lega $\vec{P}$ ed $\vec{E}$:

$$
\oint (\epsilon_0 \kappa \vec{E} - \vec{P}) \cdot \hat{n} d\Sigma = q + q_p
$$

Notiamo che $\kappa \vec{E} = \vec{E}_0$ è il campo che si avrebbe se non ci fosse il dielettrico. Poiché $\epsilon_0 \Phi (\vec{E}_0) = q$, si deve avere

$$
-\oint \vec{P} \cdot \hat{n} d\Sigma = q_p
$$

Sottraendo questa quantità da $\epsilon_0 \Phi(\vec{E})$ si ottiene

$$
\oint (\epsilon_0\vec{E} + \vec{P}) \cdot \hat{n} d\Sigma = q
$$

che può essere riscritta definendo il *vettore di induzione dielettrica* $\vec{D} = \epsilon_0 \vec{E} + \vec{P}$:

$$
\oint \vec{D} \cdot \hat{n} d\Sigma = q.
$$

Questa relazione è nota come *legge di Gauss per l'induzione dielettrica* e può essere riscritta in forma locale tramite il teorema della divergenza come visto in precedenza:

$$
\vec{\nabla} \cdot \vec{D} = \rho
$$

Possiamo utilizzare le relazioni che legano $\vec{D}$, $\vec{P}$, ed $\vec{E}$ per trovare il rapporto tra il vettore di induzione dielettrica e il campo:

$$
\vec{D} = \epsilon_0 \vec{E} + \vec{P} = \epsilon_0 \vec{E} + \epsilon_0 (\kappa - 1) \vec{E} = \epsilon_0 \kappa \vec{E} \equiv \epsilon \vec{E}
$$

dove $\epsilon$ è detta *costante dielettrica assoluta*. Ovviamente, per $\kappa = 1$ (relazione strettamente valida solamente nel vuoto) $\epsilon = \epsilon_0$.

Con questa definizione si trova, ad esempio, 

* che $\vec{D} = \sigma_0 \hat{n}$ all'interno di un dielettrico posto in un condensatore piano. Per vederlo basta utilizzare la relazione $E = \frac{\sigma_0}{\epsilon_0} - \frac{k - 1}{k}\frac{\sigma_0}{\epsilon_0}$ e moltiplicarla per $\epsilon$;
* che la densità di energia elettrostatica del campo ha un'espressione equivalente a quella nel vuoto, $u_e = \frac{1}{2}\epsilon E^2 = \frac{1}{2}\frac{D^2}{\epsilon}$
