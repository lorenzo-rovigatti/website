+++
title = "Scritto del 15/06/2021"
date = 2021-05-16T10:18:43+02:00
draft = false

+++

## Elettricità

Tre piani isolanti paralleli sono disposti come in figura (a): i due piani a sinistra sono carichi positivamente con densità di carica superficiale $\sigma = 10^{-7} \,{\rm C / m^2}$, mentre quello più a destra è carico negativamente con densità di carica superficiale $-\sigma$. La distanza tra il secondo e il terzo piano è uguale a $d = 10$ cm. Il punto $A$ è posto sulla superficie del piano di mezzo, il punto $B$ è disposto a metà tra il secondo e il terzo piano mentre il punto $C$ è posto sulla superficie del piano più a destra.

{{< figure src="../images/scritto_20210615_esercizio_1.png"  width="500px">}}

1. Calcolare la differenza di potenziale tra i punti $A$ e $C$ **(5 punti)**.
   * In ogni punto dello spazio il campo è la somma dei campi generati dai diversi piani. Tra $A$ e $C$ i campi generati da tutti i piani sono equiversi (verso destra), quindi il modulo del campo totale è
     $$
     E = \frac{3 \sigma}{2 \epsilon_0} = 1.7 \times 10^4 \, {\rm V/m}.
     $$
     Ricordando che $\Delta V = E d$ si trova
     $$
     \Delta V = \frac{3 \sigma d}{2 \epsilon_0} = 1.7 \times 10^{3} \, {\rm V}
     $$
2. Una particella di carica $q = 10^{-9}$ C e massa $m = 1$ g viene posta in B al tempo $t = 0$ e poi lasciata libera di muoversi. Quale piano va a colpire? Dopo quanto tempo? **(6 punti)**.
   * Poiché la carica è positiva tenderà a muoversi verso destra e quindi colpirà il piano negativo dopo aver percorso una distanza $d / 2$. Poiché parte da ferma, questa condizione si può scrivere
     $$
     \frac{1}{2} a t^2 = \frac{1}{2} \frac{qE}{m}t^2 = d / 2
     $$
     da cui ricaviamo
     $$
     t = \sqrt{\frac{dm}{qE}} = 2.42 \, {\rm s}
     $$
3. ll sistema viene modificato inserendo tra $A$ e $B$ una lastra di materiale conduttore come in figura (b). Determinare, motivando la risposta, se (ed, eventualmente, come) varia il tempo calcolato al punto precedente **(5 punti)**.
   * Poiché il conduttore non è posto sulla traiettoria della particella e al suo esterno non genera alcun campo elettrico aggiuntivo (poiché le due superfici hanno la stessa carica ma di segno opposto), il comportamento della particella non varia in alcuna maniera.

## Magnetismo

Un solenoide di sezione rettangolare (lati $a = 10$ cm e $b = 2a$) ha una densità di spire $n = 100 \,{\rm m^{-1}}$ in cui scorre una corrente $i = 1$ A ed è riempito da un materiale di permeabilità magnetica relativa $\mu_r = 2$. Una particella di carica $q = - 1.602 \times 10^{-19}$ C e massa $m = 9.11 \times 10^{-31}$ Kg entra nel solenoide a metà del lato lungo con velocità perpendicolare al lato stesso (vedi figura), ed esce dallo spigolo in basso a destra (indicato con $A$ in figura).

{{< figure src="../images/scritto_20210615_esercizio_2.png"  width="500px">}}

**Nota Bene:** la figura a destra contiene un *esempio* di angolo di uscita per mostrare esplicitamente la definizione di $\theta$.

1. Determinare il verso in cui scorre la corrente nelle spire del solenoide e l'intensità del campo magnetico al suo interno **(4 punti)**.
   * Poiché la carica della particella è negativa, affinché la forza di Lorentz abbia direzione $-\vec{y}$ il campo deve essere entrante, e quindi la corrente che lo genera deve scorrere in verso orario (guardando il sistema dalla direzione indicata in figura). Il modulo del campo è invece dato da $B = \mu n i = 2.5 \times 10^{-4}$ T.
2. Calcolare la velocità d'entrata della particella **(7 punti)**.
   * Chiamando $r$ il raggio della traiettoria e utilizzando la usuale costruzione geometrica basata su triangoli rettangoli si trova
     $$
     r^2 = a^2 + (r - a)^2
     $$
     da cui ricaviamo $r = a = 10$ cm. Poiché $r = mv / qB$ si trova
     $$
     v = \frac{rqB}{m} = \frac{rq\mu ni}{m} = 4.42 \times 10^6 \, {\rm m/s}
     $$
3. Determinare l'angolo $\theta$ che la traiettoria di uscita della particella forma con l'asse $x$ **(5 punti)**.
   * Ricordiamo che l'angolo che la traiettoria forma con l'asse $x$ è uguale all'angolo spazzato dalla traiettoria rispetto al centro della circonferenza. L'angolo richiesto si può trovare da considerazioni geometriche notando che, poiché $R = a$, il centro della traiettoria è lo spigolo in basso a sinistra e quindi l'angolo non può che essere di $90^\circ$. Si trova lo stesso risultato se si considera che l'angolo spazzato dalla traiettoria si può calcolare, applicando la trigonometria, tramite la relazione $r \sin\theta = a$ e quindi $\sin \theta = a / r = 1$, cioè $\theta = 90^\circ$.