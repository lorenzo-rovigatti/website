+++
title = "Esercitazione 06/12/2018"
date = 2018-12-04T12:24:21+02:00
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

[Esercizio 53](#esercizio-53) -- [Esercizio 54](#esercizio-54) -- [Esercizio 55](#esercizio-55)

## Esercizio 53

### Testo

Una particella di carica $q = 50$ mC e massa $m = 20$ g entra al tempo $t = 0$ in una regione molto grande dove è presente un campo magnetico di intensità $B = 0.25$ T ortogonale alla sua velocità iniziale, di modulo $v = 8$ m/s.

1. Calcolare la distanza a cui la particella riesce dalla regione col campo magnetico.
2. Calcolare il tempo che la particella trascorre nella regione col campo magnetico.
3. Calcolare l'intensità e la direzione del campo elettrico che bisogna applicare per far sì che che la traiettoria della particella rimanga perpendicolare al campo.
4. Calcolare a che tempo bisognerebbe spegnere il campo magnetico per ottenere un angolo di $\theta = 30^\circ$ tra le velocità di entrata e di uscita.

### Soluzione

1. Poiché la traiettoria presa dalla particella è una circonferenza di raggio $r = mv / qB$, la distanza è data dal suo diametro, cioè:
$$
d = 2 r = \frac{2 m v}{qb} = 26 \, {\rm m}
$$

2. Il tempo trascorso nella regione col campo sarà metà del periodo del moto circolare uniforme, che vale $T = 2 \pi m / qB$, cioè:
$$
t = \frac{T}{2} = \frac{\pi m}{q B} = 5 \, {\rm s}
$$

3. La direzione del campo elettrostatico deve essere perpendicolare al campo magnetico, così da contrastare la forza di Lorentz. L'intensità si trova equagliando il modulo delle forze che ne risulterebbero, cioè:
$$
q E = q v B
$$
e quindi
$$
E = v B = 2 \, {\rm \frac{V}{m}}
$$

4. In un moto circolare uniforme la velocità angolare è costante ed è uguale all'angolo percorso nell'unità di tempo. Nel caso specifico di campo magnetico uniforme la velocità angolare vale

$$
\omega = qB / m
$$

e quindi si ha che, in funzione del tempo $t$, l'angolo vale

$$
\theta = \omega t
$$

da cui si ottiene

$$
t = \frac{\theta}{\omega} = \frac{\theta m}{q B}
$$

che, per $\theta = 30^\circ$, dà $t = 0.84$ s.

---

## Esercizio 54

### Testo

Sei lunghi fili complanari percorsi da una corrente $i = 1$ A sono disposti in modo tale da delimitare una regione esagonale di lato $l = 10$ cm. Il verso delle correnti porta a percorrere l'esagono in senso orario. Determinare verso e intensità della componente di $\vec{B}$ perpendicolare al piano nel centro dell'esagono.

### Soluzione

Usando la regola della mano destra (o della vite) si trova che i campi generati singolarmente dai fili nel centro dell'esagono sono sempre entranti nel piano. Per ragioni di simmetria le intensità dei campi nel centro saranno tutte uguali e, in particolare, saranno dati dalla legge di Biot-Savart, $B_s = \frac{\mu_0 i}{2 \pi r}$, dove $r$ è la distanza dal centro. Questa si può calcolare disegnando il sistema e notando che 

$$
r = \frac{l}{2} \frac{1}{\tan(\theta)}
$$

dove $\theta = \pi / 6$ è metà dell'angolo che sottende ogni lato e che, in un esagono, vale $60^\circ = \pi / 3$. Sostituendo nella relazione precedente si trova

$$
B = 6 B_s = 6\frac{\mu_0 i}{2 \pi r} = 12\frac{\mu_0 i}{2 \pi l} \tan\left( \frac{\pi}{6} \right) = 13.86 \, {\rm \mu T}
$$

---

## Esercizio 55

### Testo

Un filo rettilineo indefinito di raggio molto piccolo è disposto lungo l'asse di una guaina (cioè di un guscio cilindrico) di ferro, anch'essa indefinita, di raggio interno $R_1= 1$ cm e raggio esterno $R_2 = 2$ cm. Il filo è percorso da una corrente $i = 10$ A e la permeabilità relativa del ferro vale $\kappa_m = 10^3$. 

1. Discutere qualitativamente le funzioni $H(r )$, $B(r )$ ed $M(r )$, dove $r$ è la distanza dal filo.
2. Determinare $H(r )$, $B(r )$ ed $M(r )$.

### Soluzione

1. Poiché $\vec{H}$ è definito a partire dal campo magnetico calcolato nel vuoto, $\vec{B}_0$, non può avere discontinuità in presenza di diversi materiali. Il campo magnetico $\vec{B}$, d'altro canto, varrà $\vec{B}_0$ nel vuoto e $\kappa_m \vec{B}_0$ all'interno della guaina, e quindi subirà una discontinuità lungo le sue due superfici. $\vec{M}$, d'altro canto, può essere diverso da zero solo all'interno di un materiale che non sia il vuoto quindi, in questo caso, solo all'interno della guaina.

2. Data la simmetria cilindrica del problema, le linee di campo saranno sempre circonferenze centrate sul filo. Usando la legge di Ampère in un punto qualsiasi si trova
$$
\oint \vec{H} \cdot d\vec{s} = H 2 \pi r = i
$$
e quindi
$$
H = \frac{i}{2 \pi r} = \frac{1.59}{r} \, {\frac{A}{m}}
$$
In generale per il campo magnetico vale $\vec{B} = \mu \vec{H}$. Fuori dalla guaina ($r < R_1$, $r > R_2$) si avrà
$$
B = \frac{\mu_0 i}{2 \pi r} = \frac{2 \times 10^{-6}}{r} \, {\rm T},
$$
mentre all'interno ($R_1 < r < R_2$) varrà
$$
B = \kappa_m \frac{\mu_0 i}{2 \pi r} = \frac{2 \times 10^{-3}}{r} \, {\rm T}.
$$
La magnetizzazione è diversa da zero solo all'interno della guaina ($R_1 < r < R_2$) in cui vale
$$
M = \chi_m H = (\kappa_m - 1) H = \frac{1.59 \times 10^3}{r} \, {\frac{A}{m}}
$$
