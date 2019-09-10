+++
title = "Scritto del 10/09/2019"
date = 2019-09-10T12:16:43+02:00
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

## Elettricità

Una carica $q_1 = 10^{-9}$ C è posta ad una distanza $h = 1$ m da un'altra carica $q_2$. Nel punto $A$ posto a distanza $\frac{2}{3} h$ da $q_1$ e $\frac{1}{3} h$ da $q_2$ (vedi disegno) si misura una differenza di potenziale (rispetto all'infinito) $\Delta V = 0$ ed è posta una carica $q_0 = -10^{-9}$ C.

{{< figure src="../images_scritto_10092019/esercizio_1.png" alt="1" width="300px">}}

1. Determinare il valore di $q_2$ **(5 punti)**.
	* La differenza di potenziale a cui si trova il punto $A$ è data da:
$$
\Delta V = \frac{1}{4\pi \epsilon_0} \left( \frac{3 q_1}{2 h} + \frac{3 q_2}{h} \right) = 0
$$
e quindi
$$
q_2 = - \frac{q_1}{2} = - 0.5 \times 10^{-9} \, {\rm C}
$$
2. Data questa configurazione di cariche, determinare la forza elettrostatica che agisce su $q_0$ **(5 punti)**.
	* La forza è diretta lungo $\hat{y}$ e il suo modulo è dato da $F = q_0E$, dove
$$
E = \frac{1}{4 \pi \epsilon_0} \left( -\frac{9 q_1}{4 h^2} + \frac{9 q_2}{h^2} \right) = \frac{1}{4 \pi \epsilon_0} \left( -\frac{9 q_1}{4 h^2} - \frac{9 q_1}{2 h^2} \right) = - \frac{1}{4 \pi \epsilon_0} \frac{27 q_1}{4 h^2} = -60.7 \, {\rm V/m}
$$
e quindi $F = 6.07 \times 10^{-8} \, {\rm N}$.
3. La carica $q_0$ viene spostata nel punto $B$, posto a distanza $h$ da $A$ (vedi disegno). Determinare la differenza di potenziale tra il punto $A$ ed il punto $B$ **(6 punti)**.
	* Il punto $B$ dista $r_1 = \sqrt{h^2 + \frac{4}{9}h^2} = 1.2$ m da $q_1$ e $r_2 = \sqrt{h^2 + \frac{1}{9}h^2} = 1.05$ m da $q_2$. Poiché $V_A = 0$ (cfr. testo dell'esercizio) si trova
	
$$
\Delta V_{AB} = V_B = \frac{1}{4 \pi \epsilon_0} \left( \frac{q_1}{r_1} + \frac{q_2}{r_2} \right) = 3.2 \, {\rm V}
$$

---

## Magnetismo

In una spira rettangolare di massa $m$ e lati $a = 3$ cm e $b = 4$ cm scorre una corrente $|i| = 1$ A. La parte inferiore della spira è immersa in un campo magnetico $B = 10^{-2}$ T diretto lungo $-\hat{z}$ che fa sì che la spira resti sospesa in aria con i lati più lunghi paralleli al terreno. All'inizio il filo in alto non è percorso da nessuna corrente. **Nota bene:** la forza di gravità è diretta lungo $-\hat{y}$.

{{< figure src="../images_scritto_10092019/esercizio_2.png" alt="1" width="400px">}}

1. Determinare il verso in cui scorre la corrente nella spira **(5 punti)**.
	* La forza magnetica deve essere tale da opporsi alla forza peso. Utilizzando la regola della mano destra si trova che se la corrente scorresse in verso antiorario la forza magnetica risultante sarebbe diretta verso l'alto, opponendosi quindi alla forza peso.
2. Calcolare la massa $m$ della spira **(6 punti)**.
	* Poiché il sistema è in equilibrio, la forza magnetica e quella peso devono avere lo stesso modulo e verso opposto. La forza magnetica è diretta verso l'alto e ha modulo $ibB$, quindi si trova
$$
m = \frac{ibB}{g} = 4.1 \times 10^{-2} \, {\rm g}
$$
3. Il campo magnetico viene spento. Che verso deve avere la corrente che scorre nel filo in alto per far sì che la spira rimanga sospesa **(5 punti)**?
	* Il campo magnetico generato dal filo sarà più forte sul lato della spira ad esso più vicino, in cui la corrente scorre da destra verso sinistra. Per far sì che la forza magnetica agente su questo lato si opponga alla forse di gravità, il campo magnetico generato dal filo deve essere uscente dal foglio. Utilizzando la regola della mano destra si trova che un tale campo viene generato se la corrente nel filo scorre verso $-\hat{x}$.
