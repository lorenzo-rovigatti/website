+++
title = "Scritto del 26/01/2021"
date = 2021-01-26T16:18:43+02:00
draft = false

+++

## Primo esercizio

Il circuito in figura è composto da un generatore $\mathcal{E} = 10$ V e da quattro elementi circuitali indicati con <img src="../images/uno.png" style="display:inline;margin:0" />, <img src="../images/due.png" style="display:inline;margin:0" />, <img src="../images/tre.png" style="display:inline;margin:0" /> e <img src="../images/quattro.png" style="display:inline;margin:0" />. La lista degli elementi circuitali che fanno parte del circuito è mostrata in figura a sinistra, e si ha $R_1 = R_2 = 1\, \Omega$, $R_3 = 3\, \Omega$ e $C = 1$ nF.

{{< figure src="../images/scritto_20210211_esercizio_1.png"  width="500px">}}

Indicare (giustificando la risposta) per quale combinazione degli elementi circuitali a regime

1. la carica immagazzinata dal condensatore è massima **(6 punti)**.
   * Se il condensatore viene messo in posizione <img src="../images/quattro.png" style="display:inline;margin:0" /> non scorre corrente nel circuito e quindi la d.d.p. ai suoi capi sarà pari a $\mathcal{E}$. Poiché in questo circuito questa è la massima d.d.p., in queste condizioni si avrà anche la carica massima immagazzinata, che varrà $q = C \mathcal{E}$.
2. La corrente che scorre in <img src="../images/due.png" style="display:inline;margin:0" /> è massima **(10 punti)**.
   * Il condensatore deve trovarsi in uno dei rami in parallelo oppure nel circuito non scorre corrente. Se si trova in <img src="../images/due.png" style="display:inline;margin:0" /> lì non scorrerà alcuna corrente, quindi deve trovarsi in <img src="../images/uno.png" style="display:inline;margin:0" /> o in <img src="../images/tre.png" style="display:inline;margin:0" />. Poiché due delle resistenze sono uguali, i rami in parallelo possono contenere due resistenze da $1 \, \Omega$ oppure una da $1 \, \Omega$ e una da $3 \Omega$. Nel primo caso il circuito $RC$ equivalente è $3.5 \, \Omega$, mentre nel secondo caso è $7/4 \, \Omega$. Applicando la legge di Ohm troviamo che nei due casi scorrono correnti da 2.86 A e 5.7 A. Analizziamo in dettaglio le due varianti. Nel primo caso nel parallelo la corrente si divide in due perché i due rami hanno la stessa resistenza, quindi in <img src="../images/due.png" style="display:inline;margin:0" /> scorre una corrente 1.43 A. Nel secondo caso la d.d.p. ai capi del parallelo è $\Delta V_p = \mathcal{E} - R_4 i = 4.3$ V, e la corrente che scorre nei due rami si trova applicando la legge di Ohm. Così facendo troviamo che nel ramo di resistenza minore scorre una corrente $\Delta V_p / R_1 = 4.3$ A, mentre in quella di resistenza maggiore scorre $\Delta V_p / R_3 = 1.4$ A. La configurazione richiesta ha quindi $R_1$ (o $R_2$) in <img src="../images/due.png" style="display:inline;margin:0" />, $R_3$ in <img src="../images/tre.png" style="display:inline;margin:0" /> e $R_2$ (o $R_1$) in <img src="../images/quattro.png" style="display:inline;margin:0" />.

## Secondo esercizio

Una particella di massa $m = 1.68 \times 10^{-27}$ Kg e carica $q = 1.602 \times 10^{-19}$ C si muove all'interno di un solenoide indefinito con velocità $\vec{v}$. Al tempo $t = 0$ nel solenoide viene fatta scorrere una corrente che genera un campo magnetico uniforme $\vec{B}_v$ di direzione e verso tali per cui $\vec{v}$ forma un angolo $\theta = 30^\circ$ con il piano ortogonale al campo (vedi figura). La particella comincia quindi a percorrere un moto elicoidale di velocità angolare $\omega = 9.69 \times 10^{7} \, {\rm s}^{-1}$ e passo $p = 3.28 \times 10^{-2}$ m. Una volta percorsa una distanza $d = 1$ m lungo la direzione del campo la particella entra in una regione di spazio in cui è presente anche un materiale di costante magnetica relativa $\kappa_m = 10$ (in grigio in figura).

{{< figure src="../images/scritto_20210211_esercizio_2.png"  width="500px">}}

**Nota Bene:** gli esercizi vanno risolti nell'approssimazione in cui il campo magnetico è costante e uniforme in entrambe le regioni.

1. Determinare i raggi di curvatura $r_v$ e $r_p$ della traiettoria percorsa dalla particella quando questa si trova nella regione vuota e nella regione piena **(5 punti)**.

   * Per calcolare i raggi di curvatura serve conoscere il valore del modulo del campo e della componente ortogonale al campo della velocità. Il campo si può trovare dalla relazione $\omega = qB_v / m$, da cui si ricava:
     $$
     B_v = \frac{\omega m}{q} = 1\, {\rm T}.
     $$
     Il valore del modulo del campo nella regione piena è quindi $B_p = \kappa_m B_v = 10$ T. Considerando che la componente della velocità ortogonale al piano (e quindi parallela al campo) è $v_o = v \sin \theta$, per il passo dell'elica vale la relazione $p = 2 \pi v \sin \theta / \omega$, da cui si trova:
     $$
     v = \frac{p \omega}{2 \pi \sin \theta} = 10^6 \, {\rm m/s}.
     $$
     Ricordando che $r = mv_p / qB$, dove $v_p = v \cos\theta$ è la componente della velocità ortogonale al campo, si trova:
     $$
     r_v = \frac{mv \cos \theta}{qB_v} = 9.03 \times 10^{-3} \, {\rm m}
     $$

     $$
     r_p = \frac{mv \cos \theta}{qB_p} = 9.03 \times 10^{-4} \, {\rm m}.
     $$

     

2. Calcolare il numero di circonferenze complete percorse dalla particella dal momento in cui è stato acceso il campo a quello in cui è entrata nella regione di campo piena di materiale **(6 punti)**.

   * Per definizione il tempo impiegato dalla particella per percorrere una circonferenza è
     $$
     T = \frac{2 \pi}{\omega} = 6.48 \times 10^{-8} \, {\rm s}
     $$
     mentre il tempo che impiega la particella per attraversare la regione vuota è dato dallo spostamento diviso la velocità:
     $$
     \Delta t = \frac{d}{v \sin \theta} = 2 \times 10^{-6} \, {\rm s}.
     $$
     Il rapporto tra questi due tempi è uguale al numero di circonferenze compiute dalla particella:
     $$
     \frac{\Delta t}{T} = 30.9
     $$
     La cui parte intera è il numero di circonferenze complete, $N_c = 30$.

3. Calcolare il modulo delle componenti della velocità ortogonale e parallela al campo nella regione piena di materiale **(5 punti)**.

   * Poiché il campo magnetico nella regione piena ha la stessa direzione e lo stesso verso di $\vec{B}_v$ e la forza di Lorentz non fa lavoro, le componenti restano inviariate, quindi si ha:
     $$
     v_o = v \cos\theta = 8.66 \times 10^{5} \, {\rm m/s}
     $$

     $$
     v_p = v \cos\theta = 5 \times 10^{5} \, {\rm m/s}
     $$

     