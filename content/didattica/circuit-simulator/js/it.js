var i18n = {
error1: 'Attenzione, un errore del browser ha impedito l\'avvio. Raccomandiamo di usare una versione aggiornata di Firefox o Chrome',
Ground_connection: 'Messa a terra',
Node_label: 'Etichetta nodo',
Voltage_source: 'Generatore di tensione',
Current_source: 'Generatore di corrente',
Resistor: 'Resistenza',
Capacitor: 'Condensatore',
Inductor: 'Induttore',
Op_Amp: 'Op Amp',
Diode: 'Diodo',
NFet: 'NFet',
PFet: 'PFet',
Voltage_probe: 'Misuratore di tensione',
Current_probe: 'Misuratore di corrente',
drag_onto_diagram: ': trascina o premi per aggiungere',
Help: 'Aiuto: apri la pagina di aiuto',
Grid: 'Griglia: mostra/nascondi la griglia',
Link_tip: 'Link: condividi link del circuito',
Cut: 'Taglia i componenti selezionati',
Copy:'Copia i componenti selezionati',
Paste:'Incolla sullo schema',
Delete:'Cancella i componenti selezionati',
Rotate:'Ruota i componenti selezionati',
Save_netlist: 'Salva la netlist',
Open_netlist: 'Apri una netlist',
Select_netlist: 'Seleziona una netlist',
Perform_DC_Analysis: 'Esegui un\'analisi DC',
DC_Analysis: 'Analisi DC',
Perform_AC_Analysis: 'Esegui un\'analisi AC Small-Signal',
Perform_Transient_Analysis: 'Esegui un\'analisi del transiente',
Transient_Analysis: 'Analisi del transiente',
Edit_Properties: 'Modifica le proprietà',
Link: 'Link',
Sharable_Link: 'Link da condividere',

points_per_decade: 'Numero di punti per ogni decade',
Starting_frequency: 'Frequenza iniziale (Hz)',
Ending_frequency: 'Frequenza finale (Hz)',	
source_for_ac: 'Nome del generatore di tensione o corrente per AC',
AC_Analysis_add_a_voltage_probe: 'Analisi AC: aggiungi un misuratore di tensione al diagramma!',
AC_Analysis: 'Analisi AC',
Zero_ac_response: 'Nessuna risposta AC, -infinito sulla scala DB.',
Near_zero_ac_response: 'Risposta AC quasi nulla, rimuovere ',
probe: ' il misuratore',

// Alerts and warnings from the circuit simulator
Alert: 'Attenzione',
ckt_alert1: 'Attenzione!!! Il circuito ha un un generatore di tensione in loop o un generatore di corrente in cortocircuito, rimuovere il generatore o il filo che sta causando il cortocircuito.',
ckt_alert2: 'Attenzione!!! Il simulatore potrebbe generare risultati privi di senso o addirittura nessun risultato se applicato a circuiti illegali.',
ckt_warning1: 'Attenzione: due elementi del circuito hanno lo stesso nome ',
ckt_alert3: 'Per favore aggiungi almeno una messa a terra (simbolo col triangolo)',
ckt_alert4: 'Il metodo di Newton fallisce, sicuro che i generatori abbiano una connessione conduttiva alla terra?',
ckt_alert5: 'Il metodo di Newton fallisce, potrebbe essere il tuo circuito o il nostro simulatore.',
ckt_alert6: 'L\'analisi DC fallisce, provo un\'analisi transiente da zero.',
ckt_alert7: 'L\'analisi AC si riferisce ad un generatore sconosciuto ',
ckt_alert8: 'L\'analisi AC fallisce, generatore sconosciuto',	

ckt_error1: 'Le righe di M non corrispondono a b or le colonna non corrispondono ad x.',
ckt_error2: 'La riga o le colonne di A sono troppo grandi per B',
ckt_error3: 'La riga o le colonne di A sono troppo grandi per C',
ckt_error4: 'scalea and scaleb devono essere scalari o array',
ckt_error5: 'Le righe o le colonne sono > delle righe o delle colonne di dest',
ckt_error6: 'Le righe o le colonne sono > delle colonne o delle righe di dest',	    	    

log_Frequency: 'log(Frequenza in Hz)',
degrees: 'gradi',
AC_Phase: 'Fase AC',
AC_Magnitude: 'Ampiezza AC',

Minimum_number_of_timepoints: 'Numero minimo di intervalli di tempo',
Stop_time_seconds: 'Tempo di stop (secondi)',
tstop_lbl: 'tempo di stop',
Transient_Analysis_add_a_probe: 'Analisi transiete: aggiungi un misuratore al diagramma!',

//Use creating phrasing to get this right: 
// alert('The ' + color + ' probe is connected to node ' + '"' + label + '"' + ' which is not an actual circuit node');
The: 'Il misuratore ',
probe_is_connected_to_node: ' è connessa al nodo ',
which_is_not_an_actual_circuit_node: ' anche se quest\'ultimo non è un nodo del circuito',

Voltage: 'Tensione',
Current: 'Corrente',
Time: 'Tempo',
Node_has_two_conflicting_labels: 'Il nodo ha due nomi diversi: ',

DC_value: 'Valore DC',

impulse: 'impulso',
Height: 'Altezza',
Width: 'Larghezza (secondi)',

step: 'step',
Initial_value: 'Valore iniziale',
Plateau_value: 'Valore del plateau',
Delay_until_step: 'Intervallo di tempo prima dello step (secondi)',
Rise_time: 'Rise time (secondi)',

square: 'quadra',
Frequency: 'Frequenza (Hz)',
Duty_cycle: 'Duty cycle (%)',

triangle: 'triangolare',

pwl: 'pwl',
pwl_repeating: 'pwl (repeating)',
Comma_separated_list: 'Lista separata da virgole di tempi e valori (alternati)',

pulse: 'Impulso',
Delay_until_pulse: 'Intervallo di tempo prima dell\'impulso (secondi)',
Time_for_first_transition: 'Tempo per la prima transizione (secondi)',
Time_for_second_transition: 'Tempo per la seconda transizione (secondi)',
Pulse_width: 'Larghezza dell\impulso (secondi)',
Period: 'Periodo (secondi)',

sin: 'sinusoidale',
Offset_value: 'Valore di offset',
Amplitude: 'Ampiezza',
Delay_until_sin_starts: 'Intervallo di tempo prima dell\'inizio della sinusoide (secondi)',
Phase_offset_degrees: 'Offset della fase (gradi)',

Circuit_Sandbox_Help: 'AIUTO PER IL CIRCUIT SANDBOX',
name: 'Nome',
value: 'Valore',
label: 'Nome',
r: 'R',
c: 'C',
l: 'L',
color: 'Colore',
offset: 'Offset',
area: 'Area',
type: 'Tipo',
normal: 'normale',
ideal: 'ideale',
WL: 'W/L',
A: 'A',
Plot_color: 'Colore del grafico',
Plot_offset: 'Offset del grafico',
dc: 'dc',
impulse: 'impulso',
step: 'step',
square: 'quadra',
triangle: 'triangolare',
pulse: 'impulso',

red: 'rosso',
green: 'verde',
blue: 'blu',
cyan: 'azzurro',
magenta: 'magenta',
yellow: 'giallo',
orange: 'arancione',
black: 'nero',
xaxis: 'asse x',

last_line: 'ultima riga, senza virgola'
};

var strSHelp = "AIUTO PER IL CIRCUIT SANDBOX\n\n";		//embedded Help 
var strAddC = "Aggiungi un componente: seleziona un componente dalla lista e premi sullo schema per aggiungerlo.\n\n";
var strAddW = "Aggiungi un filo: i fili partono dai punti di connessione (indicati con dei cerchi vuoti). Tocca una connessione per creare un filo, trascinalo fino a dove vuoi e poi rilascialo.\n\n";
var strSel  = "Seleziona: disegna un rettangolo per selezionare i componenti. \n(desktop:) Usa shift+click per aggiungere componenti alla selezione.\n\n";
var strMove = "Sposta: tocca e trascina per spostare il componente in una nuova posizione.\n\n";
var strDel  = "Cancella: tocca per selezionare, poi premi sull\'icona X o il pulsante BACKSPACE.\n\n";
var strRot  = "Ruota/Rifletti: clicca per selezionare, poi clicca sull'icona della rotazione o premi la lettera \"r\" per ruotare di 90 gradi. Ripeti l'operazione per effettuare più rotazioni e riflessioni (8 in totale).\n\n";
var strProp = "Proprietà: tocca due volte un componente per cambiarne le proprietà (resistenza, tensione, etc.).\n\n";
var strNum  = "I numeri possono essere inseriti utilizzando la notazione ingegneristica:\n\
T\t10^12     m\t10^-3    \n\
G\t10^9       u\t10^-6   \n\
M\t10^6       n\t10^-9   \n\
k \t10^3       p\t10^-12 \n\
                    f\t10^-15";
