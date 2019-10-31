+++
title = "Lezione del 06/11/2019"
date = 2019-10-30T14:19:34+01:00
draft = false
+++

## Momenti meccanici su circuiti piani
<small>MNV: paragrafo 6.5 (senza la parte sulle piccole oscillazioni)</small>

Riassumendo, circuiti chiusi immersi in un campo magnetico $\vec{B}$ uniforme non sono sottoposti ad alcuna forza, e quindi il loro centro di massa (se erano inizialmente fermi) non si muoverà. D'altro canto, l'interazione magnetica può generare un momento delle forze e quindi indurre una rotazione. Studiamo il caso semplice di una spira rettangolare di lati $a$ e $b$ e percorsa da corrente $i$. Poiché la spira è un oggetto planare, la sua normale $\hat{n}$ è costante su tutta la superficie. 

**Nota Bene:** La normale alla spira è definita utilizzando la regola della vite (o della mano destra) applicata al verso della corrente: la normale è diretta verso di noi se stiamo guardando il circuito dalla direzione per cui la corrente scorre in senso *antiorario*.

Poniamo la spira in una regione di spazio in cui è presente un campo magnetico uniforme $\vec{B}$. Orientiamo la spira in maniera che abbia due dei lati ortogonali a $\vec{B}$. L'orientamento della spira in questa configurazione è determinato dall'angolo $\theta$ che gli altri due lati formano con $\vec{B}$, che può essere calcolato a partire dalla normale:

$$
\vec{B} \cdot \hat{n} = B \cos{ \theta}
$$

Se chiamiamo $1$ e $2$ i lati mantenuti ortogonali a $\vec{B}$ e $3$ e $4$ gli altri, disegnando il circuito troviamo subito che le forze di origine magnetica agenti su questi ultimi hanno stesso modulo e direzione ma verso opposto. Dal disegno si vede come queste forze siano dirette in modo tale da non poter originare alcun momento.

Similmente, le forze agenti su $1$ e $2$ sono ancora uguali in modulo e direzione e opposte in verso, ma se $\theta > 0$ costituiscono una *coppia di forze* di braccio $b \sin{(\theta)}$. Il modulo del momento meccanico vale quindi

$$
M = b F \sin{ \theta } = i a b B \sin{ \theta } = i \Sigma B \sin{ \theta }
$$

dove abbiamo utilizzato l'espressione della forza agente su di un segmento rettilineo percorso da corrente $i$ derivata precedentemente e $\Sigma = ab$. La relazione precedente si può scrivere vettorialmente una volta definito il *momento magnetico* della spira:

$$
\vec{m} = i \Sigma \hat{n}
$$

che ha verso dato dalla normale della superficie planare e modulo $i\Sigma$. Il momento meccanico in forma vettoriale diventa così

$$
\vec{M} = \vec{m} \times \vec{B}.
$$

Questa relazione, dedotta per una spira, vale in realtà per ogni circuito piano, cioè per ogni circuito per cui è possibile definire un momento magnetico $\vec{m} = i \Sigma \hat{n}$.

Il momento meccanico generato tenderà sempre a ruotare il circuito in modo tale da allineare $\vec{B}$ ed $\hat{n}$. Questo si può visualizzare disegnando le quantità vettoriali in gioco usando un punto di vista per cui $\vec{M}$ esce dal foglio. Quando $\vec{B}$ e $\hat{n}$ sono allineati si ha $\vec{M} = 0$ (in condizioni di equilibrio stabile), mentre il momento meccanico è massimo quando $\theta = \frac{\pi}{2}$ (equilibrio instabile). Questo ricorda il comportamento di un dipolo elettrico in un campo elettrico uniforme, per il quale vale infatti un'espressione analoga, $\vec{M} = \vec{p} \times \vec{E}$.

Analogamente a quanto fatto per i dipoli elettrici, si può associare un'energia potenziale ad un dipolo magnetico in un campo $\vec{B}$:

$$
U_e = - \vec{m} \cdot \vec{B} = -m B \cos{ \theta }
$$

che è minima in condizioni di equilibrio stabile ($\theta = 0$) e massima in condizioni di equilibrio instabile ($\theta = \pi$). La relazione tra momento meccanico ed energia potenziale si può scrivere come:

$$
M = -\frac{dU_e}{d\theta} = - m B \sin{ \theta }
$$

In generale, il moto rotatorio del sistema sarà dato da

$$
\frac{d \vec{L}}{dt} = \vec{M}
$$

dove $\vec{L}$ è il momento angolare del sistema. Lungo l'asse di rotazione questa equazione si può riscrivere come

$$
M = I \alpha = I \frac{d^2 \theta}{dt}
$$

dove $I$ è il momento di inerzia della spira rispetto all'asse di rotazione e $\alpha$ è l'accelerazione angolare.

**Nota Bene:** le unità di misura del momento di dipolo magnetico, data la sua definizione, sono 
$$
[m] = A m^2 = \frac{J}{T}
$$

### Due esempi

#### Il galvanometro
<small>MNV: esempio 6.3</small>

{{< figure src="../images/galvanometro.png" alt="Il galvanometro" width="300px">}}

Un galvanometro (vedi figura sopra) è costituito da una bobina (composta da $N$ spire di superficie $\Sigma$) avvolta intorno ad un cilindro di ferro e solidale ad una molla. La molla è, a sua volta, solidale con un ago che si muove lungo una scala graduata. Il sistema bobina $+$ cilindro $+$ molla è posta tra due poli che generano un campo magnetico $\vec{B}$ che può essere considerato uniforme (grazie alla presenza del cilindro). La molla oppone resistenza alla rotazione generando un momento meccanico 

$$
M = k \theta
$$

dove $k$ è una costante del sistema e $\theta$ è l'angolo definito precedentemente. Quando viene fatta scorrere una corrente all'interno della bobina, questa tenderà a ruotare a causa del momento meccanico generato dalle coppie di forze agenti sulle diverse spire. Utilizzando la formula ricavata precedentemente,

$$
M = N i \Sigma B.
$$

All'equilibrio, i due momenti torcenti si equivalgono, quindi

$$
k \theta = N i \Sigma B
$$

da cui si ottiene

$$
i = \frac{k \theta}{N \Sigma B}.
$$

Misurando $\theta$ (e dopo aver tarato opportunamente la scala graduata) è possibile risalire al valore di $i$.

#### Motore elettrico in corrente continua

{{< figure src="../images/electric_motor.gif" alt="Il motore elettrico in corrente continua" width="300px">}}

Un motore a corrente continua è composto da 

* uno statore, che genera un campo magnetico. Nei motori più piccoli il campo magnetico è generato dai due poli di un magnete permamente, mentre nei motori più grandi è generato da *correnti di eccitazione* che scorrono in apposite spire poste intorno al rotore;
* un rotore, che è la parte del motore che ruota e su cui sono avvolte le spire del circuito che, essendo solidali al rotore, inducono la rotazione per effetto della forza magnetica;
* un collettore che, collegato ad un generatore, fa sì che scorra corrente nelle spire del rotore.

Le spire sul rotore si collegano al generatore tramite contatti "striscianti" detti spazzole. Quando si chiude il collegamento e passa corrente nelle spire, queste avvertiranno un momento meccanico che tenderà a far ruotare il rotore, attivando così il motore. 

Prendiamo l'esempio di un'unica spira. Se le connessioni coi poli del generatore fossero tali per cui la corrente scorre sempre nello stesso verso durante tutta la rotazione, la spira tenderebbe ad oscillare intorno alla posizione di equilibrio, e non a ruotare. Per far sì che, come in figura, la spira tenda a ruotare sempre nella stessa direzione, la polarità del collegamento tra la spira (o le spire) ed il collettore si inverte ogni mezzo giro. Così facendo anche la direzione della corrente si inverte, e questo porta ad avere un sistema in cui il momento meccanico generato tenderà a far ruotare la spira (e quindi il rotore ad essa solidale) in una direzione specifica. 
