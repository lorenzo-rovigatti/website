## Esercizio 7

### Testo

Tre cariche $q$ sono poste su tre vertici di un quadrato di lato $L$.

1. Qual è l'energia elettrostatica del sistema?
2. Calcolare l'espressione del lavoro $W$ necessario per portare una carica $q_0$ sul quarto vertice del quadrato. Discuterne il segno.
3. Calcolare $W$ per $q = 2\cdot 10^{-7}$ C, $q_0 = -10^{-8}$ C e $L = 5$ cm.

### Soluzione

1. L'energia totale ha tre contributi, $U_e = U_e^{1,2} + U_e^{1,3} + U_e^{2,3}$. Ognuno di questi tre contributi ha la forma:
$$
U_e^{i,j} = \frac{q_i q_j}{4\pi \epsilon_0} \frac{1}{r\_{ij}}
$$
Delle tre distanze tra le cariche, due valgono $L$ e una vale $\sqrt{2}L$, quindi si ha:
$$
U_e = \frac{q^2}{2\pi \epsilon_0} \frac{1}{L} + \frac{q^2}{4\pi \epsilon_0} \frac{1}{\sqrt{2}L}
$$
2. Per calcolare il lavoro usiamo $W = -\Delta U_e = -q_0\Delta V$. L'energia iniziale è $U_e^i = 0$, perché la carica $q_0$ è inizialmente "all'infinito". L'energia finale invece vale:
$$
U_e^f = \frac{q_0 q}{2\pi \epsilon_0} \frac{1}{L} + \frac{q_0 q}{4\pi \epsilon_0} \frac{1}{\sqrt{2}L}
$$
E quindi il lavoro vale:
$$
W = -\left( \frac{q_0 q}{2\pi \epsilon_0} \frac{1}{L} + \frac{q_0 q}{4\pi \epsilon_0} \frac{1}{\sqrt{2}L} \right)
$$
Notiamo che $W$ è negativo se $q$ e $q_0$ hanno lo stesso segno e positivo altrimenti: se le cariche hanno lo stesso segno l'energia potenziale del sistema *aumenta* e quindi dobbiamo fare lavoro *contro* la forza elettrostatica (e viceversa).
3. Sostituiamo i numeri nell'equazione precedente e troviamo
$$
W = 9.732 \times 10^{-4}\,\mathrm{J}
$$
**Nota Bene:** il lavoro ha le stesse unità di misura dell'energia (perché?) e quindi si misura in Joule (J).