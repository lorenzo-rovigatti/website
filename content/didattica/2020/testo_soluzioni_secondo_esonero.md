+++
title = "Secondo Esonero"
date = 2020-12-23T16:18:43+02:00
draft = false
+++

## Primo esercizio

Un selettore di velocità in cui sono presenti un campo elettrico e un campo magnetico di moduli $E_s = 1.92 \times 10^4$ V/m e $B_s = 2 \times 10^{-4}$ T è posto all'ingresso di una regione (colorata in grigio in figura) in cui è presente un campo magnetico $\vec{B}$ uscente dal foglio e di modulo $B = 1$ T. Un fascio di particelle di eguale massa $m$ ma carica diversa attraversa il selettore di velocità, entra nella regione di campo con energia cinetica $U_k = 7.69 \times 10^{-12}$ J e si divide in due. I due sotto-fasci colpiscono le pareti della regione di campo nei punti $A_1$ e $A_2$. Quest'ultimo punto dista $d_2 = \sqrt{2}$ m dal punto di entrata. Inoltre, le particelle del fascio di sinistra impiegano un tempo $t_1$ per arrivare in $A_1$, mentre quelle del fascio di destra impiegano un tempo $t_2 = \frac{3}{2} t_1$.

{{< figure src="../images/secondo_esonero_esercizio_1.png"  width="400px">}}

**Nota Bene**: le distanze tra il punto di entrata e lo spigolo $S$ e tra quest'ultimo e il punto $A_2$ sono uguali. Inoltre, il valore numerico di $t_1$ non è necessario per svolgere l'esercizio.

1.  Determinare il valore (compreso di segno) della carica dei due tipi di particelle, $q_1$ e $q_2$ **(10 punti)**.
    * La velocità di entrambi i tipi di particelle è la stessa ed è pari a $v = E_s / B_s = 9.6 \times 10^7$ m/s. Poiché $U_k = \frac{1}{2} m v^2$ possiamo ricavarci anche la massa, che vale $m = 2Uk / v^2 = 1.67 \times 10^{-27}$ Kg. Poiché $t_1 = \pi m / |q_1| B$ e $t_2 = 3 \pi m / 2 |q_2| B$, ma $t_2 = \frac{3}{2} t_1$, ne deduciamo che $|q_1| = |q_2|$.  I segni si trovano invece considerando le traiettorie: si deve avere $q_1 > 0$ e $q_2 < 0$. Inoltre, se $r_2 = mv / |q_2| B$ è il raggio di curvatura della traiettoria delle particelle che colpiscono $A_2$, geometricamente si trova che $d_2 = \sqrt{2} r_2$ e quindi che $r_2 = 1$ m. Utilizzando questo valore si trova
    $$
    |q_2| = \frac{mv}{r_2 B} = 1.60 \times 10^{-19} \, {\rm C}
    $$
3. La regione di spazio in cui è presente il campo viene riempita di un materiale di permeabilità magnetica relativa $k_m$. In queste condizioni il fascio di destra colpisce lo spigolo $S$. Determinare il valore di $k_m$ **(6 punti)**.
    * Se chiamiamo $r$ il nuovo raggio di curvatura e $d$ la distanza tra il punto di entrata e lo spigolo $S$, nelle condizioni descritte si avrà $d = 2r = 2 mv/q_2k_m B$. Utilizzando le relazioni dei punti precedenti sappiamo anche che $d$ è anche il raggio di curvatura della traiettoria in assenza del materiale magnetico, cioè $d = mv / |q_2| B$. Eguagliando queste due relazioni troviamo
    $$
    k_m = 2.
    $$

---

## Secondo esercizio

Un spira conduttrice di resistenza R = $1\, \Omega$ avente la forma di un triangolo rettangolo isoscele di lato $l = 1$ m, giace sul piano xy e si muove lungo l'asse x con velocità **costante** $v = 0.1$ m/s, come mostrato in figura. All'istante $t_0 = 0$ entra in una zona di spazio in cui è presente un campo magnetico $B = 1$ T, uniforme e ortogonale al piano della spira.

{{< figure src="../images/secondo_esonero_esercizio_2.png"  width="600px">}}

**Nota Bene:** l'area di un triangolo è $ab / 2$, dove $a$ e $b$ sono la base e l'altezza, ma nel caso di un triangolo rettangolo isoscele come quello in figura si ha sempre $a = b$.


1. Determinare l'espressione del flusso del campo magnetico che attraversa la spira in funzione del tempo **(6 punti)**.
    * Se la punta della spira ha posizione $x(t)$, allora l'area della spira che si trova all'interno della regione di campo vale $\Sigma(t) = x(t)^2 / 2$, e quindi, se scegliamo di calcolare il flusso sul percorso che coincide con la spira e ha normale parallela al campo si trova
    $$
    \Phi(\vec{B}) = \frac{x(t)^2 B}{2} = \frac{B(vt)^2}{2} = \frac{Bv^2t^2}{2}
    $$
2. Determinare verso e intensità della corrente che fluisce nella spira in funzione del tempo **(4 punti)**.
    * La corrente si trova applicando la legge di Faraday:
    $$
    i(t) = - \frac{1}{R} \frac{d \Phi(\vec{B})}{dt} = - \frac{Bv^2t}{R}
    $$
    dove il segno meno indica che la corrente scorre in verso orario.
3. Calcolare il tempo $t_f$ necessario affinché la spira entri completamente nella regione di campo e la carica totale che fluisce attraverso la spira nell'intervallo di tempo $t_f - t_0$ **(6 punti)**.
    * Poiché la spira si muove a velocità costante e ha lato ha lunghezza $l$ si trova subito $t_f = l / v = 10$ s. La carica si può trovare utilizzando, ad esempio, la legge di Felici:
    $$
    q_f = \frac{\Phi_1 - \Phi_2}{R} = -\frac{\Phi_2}{R} = -\frac{l^2B}{2R} = -0.5 \, {\rm C}.
	$$
	