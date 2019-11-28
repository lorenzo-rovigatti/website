+++
title = "Lezione del 10/12/2019"
date = 2019-11-28T07:19:34+01:00
draft = false
+++

## Induzione mutua
<small>MNV: paragrafo 8.6</small>

## Legge di Ampère-Maxwell
<small>MNV: paragrafo 8.7</small>

Consideriamo un circuito $RC$ che si sta caricando. Calcoliamo la circuitazione di $\vec{B}$ lungo una linea che concatena il filo del circuito in un punto qualsiasi vicino al condensatore. È chiaro che applicando la legge di Ampère si ottiene immediatamente

$$
\oint \vec{B} \cdot d\vec{s} = \mu_0 i_c
$$

dove $i_c$ è la corrente (di conduzione) che scorre nel filo. Abbiamo visto come la legge di Ampère lungo un percorso $\mathcal{C}$ si possa scrivere in termini di densità di corrente:

$$
\oint\_{\mathcal{C}} \vec{B} \cdot d\vec{s} = \mu_0 \int\_{\Sigma} \vec{j}_c \cdot \hat{n} d\Sigma
$$

perché $i$ si può sempre scrivere come flusso di $\vec{j}_c$. In questo caso $\Sigma$ è una qualsiasi superficie che ha $\mathcal{C}$ come contorno. Se utilizziamo la relazione precedente prendendo come $\Sigma$ una superficie che è intersecata dal filo, l'integrale sulla destra si calcola immediatamente ed ha risultato $\mu_0 i_c$. Consideriamo invece il caso di una superficie che passa tra le due pareti del condensatore senza intersecare il filo. In questo caso la densità di corrente di conduzione è chiaramente nulla, ma il valore dell'integrale *non può* dipendere dalla superficie che scegliamo.

Questo apparente paradosso si risolve con il concetto di *corrente di spostamento*, che abbiamo introdotto nella parte relativa ai circuiti. Effettivamente durante la carica (o la scarica) di un condensatore, su un'armatura si verifica una variazione di carica per unità di tempo $dq / dt$ uguale in modulo ma opposta in segno a quella che si verifica sull'altra armatura. Questa variazione è a tutti gli effetti modellizzabile come una corrente $i_s$ (non di conduzione) legata alla variazione del flusso del campo elettrico. Si trova infatti che vale

$$
i_s = \epsilon_0 \frac{d\Phi(\vec{E})}{dt}
$$

dove $\Phi(\vec{E})$ è il flusso attraverso una superficie che passa tra le armature del condensatore. La corrente totale è data dalla somma di quella di conduzione di quella di spostamento, cioè si ha

$$
i = i_c + i_s = i_c + \epsilon_0 \frac{d\Phi(\vec{E})}{dt}
$$

e quindi l'espressione del teorema di Ampère nel caso generale diventa

$$
\oint \vec{B} \cdot d\vec{s} = \mu_0 \left( i_c + \epsilon_0 \frac{d\Phi(\vec{E})}{dt} \right).
$$

Questa legge, detta di Ampère-Maxwell, è analoga alla legge di Faraday, nel senso che lega la variazione del campo elettrico alla presenza di un campo magnetico. Questo si può vedere applicando la legge di Ampère-Maxwell ad un percorso che non concatena corrente di conduzione:

$$
\oint \vec{B} \cdot d\vec{s} = \mu_0 \epsilon_0 \frac{d\Phi(\vec{E})}{dt} = \frac{1}{c^2} \frac{d\Phi(\vec{E})}{dt},
$$

dove abbiamo notato che $\epsilon_0 \mu_0 = \frac{1}{c^2}$, dove $c$ è la velocità della luce. Questa relazione è formalmente identica alla legge di Faraday, che lega la circuitazione del campo elettrico alla variazione di flusso di campo magnetico:

$$
\oint \vec{E} \cdot d\vec{s} = - \frac{d\Phi(\vec{B})}{dt}.
$$

**Nota Bene:** il termine *corrente di spostamento*, coniato da Maxwell, è improprio. La presenza di una corrente di spostamento, infatti, non è collegata ad un vero e proprio moto di cariche.

## Le equazioni di Maxwell

Le leggi di Faraday e di Ampère-Maxwell introducono delle dipendenze "incrociate" tra i campi, accoppiandoli e trasformandoli in due aspetti dello stesso fenomeno.

Tutta la fenomenologia dell'elettromagnetismo che abbiamo studiato fino ad ora può essere ottenuta considerando quattro equazioni fondamentali che collegano le derivate spaziali e temporali dei campi tra di loro e alle sorgenti di campo (cariche e correnti). Queste equazioni possono essere espresse sia in forma integrale che in forma *differenziale* (cioè locale).

### Forma integrale
<small>MNV: paragrafo 8.8</small>

Le quattro equazioni in forma integrale sono

\begin{align}
\oint \vec{E} \cdot \hat{n} d\Sigma = \frac{Q}{\epsilon_0} \qquad & \oint \vec{E} \cdot d\vec{s} = - \frac{d\Phi(\vec{B})}{dt}\\\\\\
\oint \vec{B} \cdot \hat{n} d\Sigma = 0 \qquad & \oint \vec{B} \cdot d\vec{s} = \mu_0 \left(i + \epsilon_0 \frac{d\Phi(\vec{E})}{dt}\right).
\end{align}

Da queste relazioni si deducono tutte le altre che abbiamo studiato fino ad ora. Abbiamo già discusso il significato di ogni equazione. Ricordiamo che 

1. la prima equazione lega il campo elettrico alle sue sorgenti (le cariche);
2. la seconda equazione lega il campo elettrico alle variazioni di campo magnetico;
3. la terza equazione afferma che non esistono monopoli magnetici;
4. la quarta equazione lega il campo magnetico alle sue sorgenti (le correnti) e alla variazione di campo elettrico.

Queste equazioni diventano particolarmente simmetriche se $Q = 0$ e $i = 0$:

\begin{align}
\oint \vec{E} \cdot \hat{n} d\Sigma = 0 \qquad & \oint \vec{E} \cdot d\vec{s} = - \frac{d\Phi(\vec{B})}{dt}\\\\\\
\oint \vec{B} \cdot \hat{n} d\Sigma = 0 \qquad & \oint \vec{B} \cdot d\vec{s} = \frac{1}{c^2} \frac{d\Phi(\vec{E})}{dt}.
\end{align}

Equazioni in questa forma hanno una soluzione banale ($\vec{B} = 0$ e $\vec{E} = 0$) e una in cui i campi sono sempre variabili sia nel tempo che nello spazio. Quest'ultima soluzione è legata alla propagazione del campo elettromagnetico, cioè al fenomeno delle *onde elettromagnetiche*. 

### Forma differenziale
<small>MNV: paragrafo 8.9</small>

Le equazioni di Faraday e di Ampère-Maxwell possono essere riscritte in forma *locale* utilizzando il teorema di Stokes. Si ha infatti che

$$
\oint \vec{E} \cdot d\vec{s} = \int\_{\Sigma} \vec{\nabla} \times \vec{E} \cdot \hat{n} d\Sigma = - \frac{\partial}{\partial t} \int\_{\Sigma} \vec{B} \cdot \hat{n} d\Sigma = - \int\_{\Sigma} \frac{\partial \vec{B}}{\partial t} \cdot \hat{n} d\Sigma.
$$

Poiché questa relazione è vera per qualunque $\Sigma$, si deve avere

$$
\vec{\nabla} \times \vec{E} = -  \frac{\partial \vec{B}}{\partial t}.
$$

In maniera del tutto analoga si trova 

$$
\oint \vec{B} \cdot d\vec{s} = \int\_{\Sigma} \vec{\nabla} \times \vec{B} \cdot \hat{n} d\Sigma = \mu_0 \int\_{\Sigma} \vec{j} \cdot \hat{n} d\Sigma + \epsilon_0 \mu_0 \int\_{\Sigma} \frac{\partial \vec{E}}{\partial t} \cdot \hat{n} d\Sigma
$$

e quindi

$$
\vec{\nabla} \times \vec{B} = \mu_0 \left( \vec{j} + \epsilon_0 \frac{\partial \vec{E}}{\partial t} \right).
$$

Mettendo insieme le quattro equazioni otteniamo le seguenti *equazioni di Maxwell per il campo elettromagnetico*:

\begin{align}
\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\epsilon_0} \qquad & \vec{\nabla} \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}\\\\\\
\vec{\nabla} \cdot \vec{B} = 0 \qquad & \vec{\nabla} \times \vec{B} = \mu_0 \left( \vec{j} + \epsilon_0 \frac{\partial \vec{E}}{\partial t} \right).
\end{align}

Questa è la forma più comoda dal punto di vista pratico, poiché queste relazioni hanno valore *locale*, cioè sono vere *punto per punto*. Queste equazioni possono essere risolte analiticamente in alcuni casi semplici, mentre in generale è necessario o ricorrere ad approssimazioni oppure risolverle *numericamente*, cioè con l'ausilio del computer.