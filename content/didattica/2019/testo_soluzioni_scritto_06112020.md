+++
title = "Scritto del 06/11/2020"
date = 2020-11-08T08:11:43+02:00
draft = false
+++

## Elettricità

Il condensatore in figura ha armature di area $\Sigma = 100$ cm$^2$ ed è diviso in due parti di spessore $h = 1$ cm da una lastra metallica (colorata in nero). La parte superiore è riempita per metà da un materiale dielettrico di costante dielettrica relativa $\kappa = 3$ (in grigio in figura).

{{< figure src="../images/scritto_06112020_esercizio_1.png" width="300px">}}

**Nota Bene:** non è necessario conoscere lo spessore della lastra metallica.

1. Determinare la capacità del dielettrico **(10 punti)**.
   * Il condensatore in figura è equivalente ad un condensatore di capacità $C_v = \epsilon_0 \Sigma / h$ posto in serie al parallelo di due condensatori aventi capacità $C_1 = \epsilon_0 \Sigma / 2h$ e $C_2 = k \epsilon_0 \Sigma / 2h$, quindi la capacità totale vale
     $$
     C = \frac{C_v (C_1 + C_2)}{C_v + C_1 + C_2} = \frac{\epsilon_0 \Sigma}{h} \frac{\kappa + 1}{3 + \kappa} = 5.9 \times 10^{-12} \, {\rm F}
     $$
2. Se $\Delta V = V(a) - V(b) = 10$ V, calcolare l'energia elettrostatica immagazzinata nel condensatore **(6 punti)**.
   * L'energia immagazzinata è $U_e = \frac{1}{2} C \Delta V^2 = 2.95 \times 10^{-10}$ J.

---

## Magnetismo

Un fascio di protoni ($q = 1.602 \times 10^{-19}$ C, $m = 1.67 \times 10^{-27}$ Kg) aventi energia cinetica $U_k = 1.2 \times 10^{-19}$ J entra in un solenoide di base quadrata in cui scorre una corrente $i = 1$ A. Si trova che, in queste condizioni, il raggio della traiettoria vale $r = 10$ cm.

{{< figure src="../images/scritto_06112020_esercizio_2.png" width="300px">}}

1. Calcolare la densità di spire $n$ del solenoide **(10 punti)**.
   * Il campo nel solenoide vale $B_0 = \mu_0 n i$, la velocità è data da $v = \sqrt{2 U_k / m}$ , mentre il legame tra le altre quantità è $r = mv / qB_0$, quindi
     $$
     n = \frac{mv}{q\mu_0ir} = \frac{\sqrt{2mU_k}}{q\mu_0 i r} = 1000 \, {\rm m}^{-1}
     $$
2. Il solenoide viene riempito completamente di un materiale di permeabilità magnetica relativa $k_m = 2$. Calcolare il tempo che il fascio di protoni trascorre all'interno del solenoide in questa nuova configurazione **(6 punti)**.
   * Il campo diventa $B = k_m \mu_0 n i = 2.5 \times 10^{-3}$ T, quindi il fascio si muove con una diversa velocità angolare $\omega = qB / m$. Il tempo richiesto è quello che il fascio impiega a percorrere metà circonferenza, cioè a spazzare un angolo di $\pi$, quindi
     $$
     t = \frac{\pi}{\omega} = \frac{\pi m}{qB} = 1.3 \times 10^{-5} \, {\rm s}
     $$
