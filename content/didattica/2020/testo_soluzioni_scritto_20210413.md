+++
title = "Scritto del 13/04/2021"
date = 2021-04-14T16:18:43+02:00
draft = false

+++

## Elettricità

I condensatori in figura hanno valori $C_1 = 4$ nF, $C_2 = 3$ nF, $C_3 = 2$ nF, $C_4 = 3$ nF, $C_5 = 2$ nF, mentre $\Delta V = 5$ V.

{{< figure src="../images/scritto_20210413_esercizio_1.png"  width="500px">}}

1. Determinare il circuito equivalente **(5 punti)**.
   * Il circuito si riduce ad un unico condensatore equivalente posto ad una d.d.p. $\Delta V$. Il ramo di sinistra ha capacità equivalente
   $$
   C\_{\rm eq}^{s} = \frac{(C_1 + C_2)C_3}{C_1 + C_2 + C_3} = 1.56 \, {\rm nF}
   $$
   mentre per quello di destra si ha
   $$
   C\_{\rm eq}^{d} = C_4 + C_5 = 5 \, {\rm nF}
   $$
   e quindi la capacità equivalente totale vale
   $$
   C\_{\rm eq} = C\_{\rm eq}^{s} + C\_{\rm eq}^{d} = 6.56 \, {\rm nF}
   $$
2. Determinare la differenza di potenziale tra i punti $A$ e $B$ **(6 punti)**.
   * La d.d.p. richiesta è quella ai capi del parallelo di $C_1$ e $C_2$, che hanno capacità equivalente $C\_{\rm eq}^{a} = C_1 + C_2 = 7$ nF.
Per trovarla è quindi sufficiente calcolare la carica $q^a$ presente sulle sue armature e dividerla per la capacità. Poiché $C\_{\rm eq}^a$ e $C_3$ sono connessi in serie, $q^a$ è la quantità di carica presente sul condensatore equivalente $C\_{\rm eq}^{s}$. Si trova quindi
   $$
   q^a = C\_{\rm eq}^{s} \Delta V = 7.8 \times 10^{-9}\, {\rm C},
   $$
   e quindi
   $$
   \Delta V\_{AB} = \frac{q^a}{C\_{\rm eq}^{a}} = \frac{C\_{\rm eq}^{s} \Delta V}{C\_{\rm eq}^{a}} = 1.11 \, {\rm V}
   $$
3. $C_3$ viene riempito completamente con un materiale dielettrico con $\kappa = 4$. Calcolare la carica immagazzinata da $C_3$ e la differenza di potenziale a cui è posto **(5 punti)**.
   * Aggiungendo il dielettrico varia la capacità del condensatore, che varrà $C_3^n = 8$ nF, e di conseguenza anche la capacità del ramo di sinistra, che vale
$$
C\_{\rm eq}^{s} = \frac{(C_1 + C_2)C_3^n}{C_1 + C_2 + C_3^n} = 3.73 \, {\rm nF}.
$$
Poiché il ramo si trova ad una d.d.p. $\Delta V$ la carica su $C_3$ vale
$$
q = C\_{\rm eq}^s \Delta V = 1.86 \times 10^{-8} C
$$
e quindi la d.d.p. ai suoi capi è
$$
\Delta V_3 = \frac{q}{C_3^n} = 2.33 \, {\rm V}
$$

## Magnetismo

In una spira rettangolare di massa $m$ e lati $a = 4$ cm e $b = 3$ cm scorre una corrente $|i| = 10$ A. La parte inferiore della spira è immersa in un campo magnetico $B = 10^{-2}$ T diretto lungo $-\hat{z}$ che fa sì che la spira resti sospesa in aria sul piano $xy$ (vedi figura). All'inizio il filo in alto non è percorso da **nessuna** corrente. **Nota bene:** la forza di gravità è diretta lungo $-\hat{y}$.

{{< figure src="../images/scritto_20210413_esercizio_2.png"  width="500px">}}

1. Determinare il verso in cui scorre la corrente nella spira **(5 punti)**.
	* La forza magnetica deve essere tale da opporsi alla forza peso. Affinché ciò avvenga la corrente deve scorrere in verso antiorario, come si può mostrare utilizzando la regola della mano destra.
2. Calcolare la massa $m$ della spira **(7 punti)**.
	* Poiché il sistema è in equilibrio, la forza magnetica e quella peso devono avere lo stesso modulo e verso opposto. La forza magnetica è diretta verso l'alto e ha modulo $ibB$, quindi si trova
$$
m = \frac{ibB}{g} = 0.31 \, {\rm g}
$$
3. Il campo magnetico viene **spento**. Che verso deve avere la corrente che scorre nel filo in alto per far sì che la spira rimanga sospesa **(4 punti)**?
	* Il campo magnetico generato dal filo sarà più forte sul lato della spira ad esso più vicino, in cui la corrente scorre da destra verso sinistra. Per far sì che la forza magnetica agente su questo lato si opponga alla forse di gravità, il campo magnetico generato dal filo deve essere uscente dal foglio. Utilizzando la regola della mano destra si trova che un tale campo viene generato se la corrente nel filo scorre verso $-\hat{x}$.
     