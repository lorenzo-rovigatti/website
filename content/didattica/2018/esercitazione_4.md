+++
title = "Esercitazione_4"
date = 2018-10-10T13:50:02+02:00
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

[Esercizio 13](#esercizio-13) -- [Esercizio 14](#esercizio-14) -- [Esercizio 15](#esercizio-15) -- [Esercizio 16](#esercizio-16)  -- [Esercizio 17](#esercizio-17) -- [Esercizio 18](#esercizio-18)

## Esercizio 13
<small>Esempio 2.6 del MNV</small>

### Testo

1. Calcolare il potenziale elettrostatico generato da una carica $q$ uniformemente distribuita su di un anello sottile di raggio $R$ in un generico punto $\vec{P} = (x_0, 0, 0)$ del suo asse.
2. Verificare che l'espressione di $E_x$ calcolata a partire dal potenziale coincide con quella calcolata esplicitamente.

### Soluzione

1. La densità di carica lineare vale $\lambda = \frac{q}{2\pi R}$ e si ha $dq = \lambda dl$. Ogni elementino di carica genera un potenziale in $\vec{P}$ pari a
$$
dV = \frac{dq}{4\pi\epsilon_0}\frac{1}{\sqrt{R^2 + x_0^2}} = \frac{\lambda dl}{4\pi\epsilon_0} \frac{1}{\sqrt{R^2 + x_0^2}}
$$
Per ottenere il potenziale totale integriamo su tutto l'anello:
$$
V = \frac{\lambda}{4\pi\epsilon_0} \frac{1}{\sqrt{R^2 + x_0^2}} \int_0^{2\pi R} dl = \frac{q}{4\pi\epsilon_0}\frac{1}{\sqrt{R^2 + x_0^2}}
$$
**Nota Bene:** questa espressione è valida *unicamente* sull'asse dell'anello (perché?)

2. Possiamo scrivere $E_x$ come derivata del potenziale elettrostatico:
$$
E_x = -\frac{\partial V}{\partial x} = \frac{q}{4\pi\epsilon_0}\frac{x_0}{\left( R^2 + x_0^2 \right)^{3 /2}}
$$
Questa espressione coincide con quella calcolata esplicitamente.

---

## Esercizio 14
<small>Esempio 2.4 del MNV</small>

### Testo

Una particella di carica $q_0$ viene posta in una regione di spazio in cui agisce un campo elettrostatico uniforme di modulo $E$ diretto lungo $\hat{y}$. La velocità iniziale della particella è ortogonale al campo e ha modulo $v$ e direzione $\hat{x}$. 

1. Qual è l'angolo $\theta$ formato dalla velocità $\vec{v}(t)$ rispetto alla traiettoria iniziale dopo che la particella si è mossa lungo $\hat{x}$ per una lunghezza $l$. Discutere il segno di $\theta$.
2. Calcolare l'angolo per $q_0/m = 1.76 \times 10^{11}$ C/Kg, $l = 10$ cm, $v = 3 \times 10^7$ m/s ed $E = 10^4$ V/m.
3. Calcolare di quanto la particella del punto precedente si è spostata lungo l'asse $\hat{y}$.
4. Dimostrare che la differenza di energia cinetica tra lo stato iniziale e quello finale è pari alla differenza di energia potenziale cambiata di segno.

### Soluzione

1. Per trovare l'angolo troviamo prima di tutto la traiettoria. Poiché il campo è uniforme e agisce lungo $\hat{y}$, il moto sarà uniforme lungo $\hat{x}$ e uniformemente accelerato lungo $\hat{y}$. Avremo quindi:
\begin{align}
v_x(t) & = v\\\\\\
v_y(t) & = at = \frac{q_0E}{m} t\\\\\\
x(t) & = vt\\\\\\
y(t) & = \frac{1}{2}a t^2 = \frac{1}{2}\frac{q_0E}{m} t^2
\end{align}
Invertendo la prima di queste relazioni si trova $t = x / v$, e quindi $y(x) = \frac{1}{2}\frac{q_0E}{m} \frac{x^2}{v^2}$. La tangente dell'angolo $\theta$ di questa traiettoria è, per definizione, la sua derivata $\frac{dy}{dx}$. Calcolata per $x = l$ si ottiene:
$$
\tan{(\theta)} = \frac{q_0E}{m} \frac{l}{v^2}
$$
Se $E$ è diretto lungo $\hat{y}$, $\theta$ ha lo stesso segno di $q_0$ (e viceversa).
2. Sostituendo i valori si ottiene $\tan{(\theta)} = 0.195$ e quindi $\theta = 0.193$ radianti ($11^\circ$)
3. Dobbiamo trovare quanto vale lo spostamente lungo $\hat{y}$ quando $x = l$, cioè calcolare $y(l) = h = 0.0098$ m, cioè $h = 0.98$ cm.
4. Se poniamo a zero il potenziale in $y(0) = 0$, l'energia totale iniziale è semplicemente $U_e^{(i)} = \frac{1}{2}mv^2$. L'energia finale, invece, vale:
$$
U_e^{(f)} = \frac{1}{2}mv^2 + \frac{1}{2}mv_y^2 - q_0Eh
$$
dove l'ultimo contributo è semplicemente la differenza di potenziale tra $y = 0$ e $y = h$, cioè $\Delta V = -\int_0^h E dy$. Se risolviamo per $v_y$ e sostituiamo l'espressione per $h$ calcolata al punto precedente, troviamo
$$
v_y = \frac{q_0E}{m}\frac{L}{v}
$$
cioè lo stesso valore che si trova utilizzando la relazione $v_y(t) = at$ che abbiamo trovato in precedenza. Si trova quindi che $\Delta U_k = q_0Eh$, cioè $\Delta U_k = -\Delta U_e$.

---

## Esercizio 15

### Testo

Un dipolo elettrico di momento di dipolo $\vec{p}$ e momento di inerzia $I$ è immerso in un campo elettrico uniforme $\vec{E}$. Il dipolo è inizialmente fermo in una posizione in cui $\vec{p}$ forma un angolo $\theta$ con $\vec{E}$. Al tempo $t = 0$ il dipolo viene lasciato libero di ruotare.

1. Calcolare la velocità angolare $\omega$ del dipolo quando l'angolo formato col campo vale $0$.
2. Il dipolo viene bloccato nell'istante in cui è allineato col campo ($\theta = 0$). Qual è la sua energia elettrostatica se si pone  un altro dipolo di momento $\vec{p}$ (avente cioè la stessa orientazione e lo stesso valore del momento di dipolo) ad una distanza $x$ lungo la direzione data dai momenti di dipolo.
3. Di quanto cambierebbe l'energia potenziale del punto precedente se il secondo dipolo venisse ruotato di $\pi/2$ (cioè di $180^\circ$?)

### Soluzione

1. L'energia potenziale di un dipolo in un campo vale $U_e = -\vec{p} \cdot \vec{E}$, mentre l'energia cinetica di un corpo che ruota è data $U_k = \frac{1}{2} I \omega^2$. Scriviamo l'espressione dell'energia totale iniziale e finale ed imponiamo che il suo valore si conservi:
$$
-p E \cos{(\theta)} = -pE + \frac{1}{2} I \omega^2
$$
da cui si ottiene:
$$
\omega = \sqrt{\frac{2pE(1 - \cos{(\theta))}}{I}}
$$
2. L'energia elettrostatica del dipolo è $U_e = -\vec{p} \cdot (\vec{E} + \vec{E}_d)$, dove $\vec{E}$ è il campo uniforme e $\vec{E}_d$ è il campo generato dal secondo dipolo. Poiché i due dipoli sono paralleli e disposti uno dietro l'altro, il campo generato dal secondo dipolo nel punto in cui si trova il primo vale:
$$
\vec{E}_d = \frac{\vec{p}}{2\pi\epsilon_0} \frac{1}{r^3}
$$
E quindi l'energia potenziale totale è data da
$$
U_e = -Ep - \frac{p^2}{2\pi\epsilon_0} \frac{1}{r^3}
$$
3. In questo caso il campo generato dal secondo dipolo nel punto in cui si trova il primo avrebbe lo stesso modulo ma verso opposto, cioè:
$$
\vec{E}_d = -\frac{\vec{p}}{2\pi\epsilon_0} \frac{1}{r^3}
$$
E quindi l'energia varrebbe:
$$
U_e = -Ep + \frac{p^2}{2\pi\epsilon_0} \frac{1}{r^3}
$$
Poiché il secondo contributo è positivo (perché?), l'energia potenziale è più alta!

---

## Esercizio 16
<small>Esempio 3.4 del MNV</small>

### Testo

Utilizzare il teorema di Gauss per calcolare il campo elettrostatico generato da un piano indefinito caricato uniformemente con densità superficiale di carica $\sigma$.

### Soluzione

La superficie che scegliamo è un cilindro di raggio $R$ e lunghezza $2x$ centrato sul piano e avente l'asse di simmetria ortogonale al piano. Per simmetria il campo deve essere diretto lungo l'asse del cilindro, e quindi il flusso attraverso i bordi del cilindro è nullo ($\vec{E} \cdot \hat{n} = 0$). Resta da calcolare il flusso lungo le due basi. Poiché i due contributi devono essere uguali per simmetria (provate a ruotare tutto il sistema di $180^\circ$, cosa cambia?), possiamo direttamente scrivere:

$$
2 \pi R^2 E(x) = \frac{1}{\epsilon_0} \int\_{\tau(r )} dq
$$
Poiché abbiamo a che fare con una densità superficiale costante, la carica totale non è altro che la densità per la superficie, e quindi $2 \pi R^2 E(x) = \frac{\sigma}{\epsilon_0} \pi R^2$. Risolvendo per il campo (e notando che questo non dipende da $x$), si trova

$$
E = \frac{\sigma}{2\epsilon_0}
$$

---

## Esercizio 17
<small>Esempi 3.1 e 3.2 del MNV</small>

### Testo

Calcolare (e disegnare) il campo elettrostatico generato in *tutto* lo spazio da una sfera di raggio $R$ caricata con carica $q$ distribuita

1. con densità superficiale di carica $\sigma$;
2. uniformemente con densità di carica $\rho$;
3. con densità di carica $\rho(r ) = Ar^2$.
4. Quanto vale la costante $A$ definita al punto precedente?

### Soluzione

L'esercizio si risolve utilizzando il teorema di Gauss. Poiché in tutte e tre i casi abbiamo a che fare con distribuzioni di simmetria sferica, applichiamo il teorema su superfici sferiche di raggio $r$ e concentriche alla sfera carica. Poiché la simmetria è radiale, il campo calcolato è sempre parallelo alla normale delle superfici ed ha sempre lo stesso modulo su ogni punto. Possiamo quindi riscrivere l'integrale del flusso come:

$$
\oint\_{\Sigma(r )} \vec{E} \cdot \hat{n} dS = \oint\_{\Sigma(r )} E(r ) dS = 4\pi r^2 E(r )
$$

Applichiamo il teorema di Gauss:

$$
4\pi r^2 E(r ) = \frac{1}{\epsilon_0} \int\_{\tau(r )} dq
$$

Dove $\tau(r )$ indica il volume racchiuso dalla superficie sferica (e cioè una sfera di raggio $r$). Per risolvere l'esercizio dobbiamo calcolare l'integrale a destra per le diverse distribuzioni e per tutte le distanze

1. Nel caso di densità superficiale, abbiamo
\begin{align}
4\pi r^2 E(r ) & = 0 & \mathrm{per}\quad r < R\\\\\\
4\pi r^2 E(r ) & = \frac{q}{\epsilon_0} & \mathrm{per}\quad r \geq R
\end{align}
Perché se $r < R$ le superfici sferiche non contengono alcuna carica, mentre per $r \geq R$ le superfici sferiche contengono *tutta* la carica $q$. Invertendo le relazioni appena scritte si trova
\begin{align}
E(r ) & = 0 & \mathrm{per}\quad r < R\\\\\\
E(r ) & = \frac{q}{4\pi \epsilon_0 r^2} & \mathrm{per}\quad r \geq R
\end{align}
**Nota Bene:** La seconda relazione (cioè l'espressione del campo per $r \geq R$), è valida qualunque sia la distribuzione di carica, purché abbia simmetria sferica.
2. Dobbiamo calcolare come varia il campo all'interno della sfera (perché all'esterno l'espressione è la stessa di quella di un campo generato da una carica puntiforme). L'espressione per l'integrale del flusso attraverso una superficie sferica di raggio $r$ non cambia. Cambia invece il membro di destra, per il quale si ha (per $r < R$)
$$
\frac{1}{\epsilon_0} \int\_{\tau(r )} dq = \frac{1}{\epsilon_0} 4 \pi \int_0^r \rho r'^2 dr' = \frac{1}{\epsilon_0} \frac{4}{3}\pi r^3 \rho
$$
Sostituendo il membro di sinistra calcolato prima si trova (per $r < R$)
$$
E(r ) = \frac{\rho r}{3 \epsilon_0}
$$
3. Ripetiamo la stessa procedura, con la differenza che ora $\rho$ non è costante ma dipende da $r$ e quindi non si può tirare fuori dall'integrale:
$$
\frac{1}{\epsilon_0} \int\_{\tau(r )} dq = \frac{1}{\epsilon_0} 4 \pi \int_0^r Ar'^2 r'^2 dr' = \frac{1}{\epsilon_0} \frac{4}{5}\pi r^5 A
$$
e quindi
$$
E(r ) = \frac{A r^3}{5 \epsilon_0}
$$
4. Poiché il problema ci dice che la carica totale della sfera è $q$, la costante $A$ deve essere fissato. Data una densità di carica qualunque, sappiamo che la carica totale è data dall'integrale di questa densità su tutto il corpo carico. In questo caso:
$$
q = 4\pi \int_0^R Ar^2 r^2 dr = 4\pi \int_0^R Ar^4 dr = \frac{4}{5}\pi A R^5
$$
e quindi
$$
A = \frac{5q}{4\pi R^5}
$$

---

## Esercizio 18
<small>Esempio 3.3 del MNV</small>

### Testo

Utilizzare il teorema di Gauss per calcolare 

1. il campo elettrostatico generato da un cilindro indefinito di raggio $R$ caricato uniformemente con densità di carica $\rho$ in ogni punto dello spazio.
2. La differenza di potenziale tra due punti distanti dal centro del cilindro, rispettivamente, $r_1 > R$ e $r_2 > R$.

### Soluzione

1. Il campo ha sicuramente direzione radiale, cioè $\vec{E}(r ) = E(r ) \hat{r}$. Per calcolare il modulo $E(r )$ applichiamo il teorema di Gauss ad un cilindro di raggio $r$ ed altezza $h$ coassiale al cilindro carico. Poiché il campo è radiale, il suo flusso attraverso le basi del cilindro è nullo. Calcoliamo il flusso attraverso la superficie laterale:
$$
\oint\_{\Sigma} \vec{E} \cdot \hat{n} d\Sigma = E(r ) \oint\_{\Sigma} d\Sigma = E(r ) 2 \pi r h
$$
La carica totale contenuta all'interno della superficie è data da:
$$
\int\_{\tau} \rho d\tau = \rho \pi R^2 h
$$
Applicando il teorema di Gauss si trova:
$$
E(r ) = \frac{\rho \pi R^2}{2 \pi \epsilon_0 r} = \frac{\lambda}{2 \pi \epsilon_0 r}
$$
avendo definito la densità di carica *lineare* $\lambda = \rho \pi R^2$. Questa espressione è valida anche per fili *sottili* caricati con la stessa densità di carica $\lambda$.

2. La differenza di potenziale si calcola utilizzando la definizione di potenziale:
$$
\Delta V = - \int\_{r_1}^{r_2} E dr = - \frac{\lambda}{2 \pi \epsilon_0 } \int\_{r_1}^{r_2} \frac{1}{r}dr = -\frac{\lambda}{2 \pi \epsilon_0} \log{\left ( \frac{r_2}{r_1} \right)}
$$
