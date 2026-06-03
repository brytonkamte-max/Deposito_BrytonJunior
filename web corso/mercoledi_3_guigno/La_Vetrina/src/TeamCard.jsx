    // Questo componente rappresenta la scheda di un singolo membro del team. Deve ricevere tutto dall'esterno tramite le props
import { useState } from "react";
    export function TeamCard({ props}) {


// Se isPresent è true, il bottone deve mostrare il testo "Disponibile" e la card deve avere uno stile normale (es. un bordo verde o un badge luminoso).

const styleConfig = {
backgroundColor: props.isPresent ? '#ffebeb' : '#ebefff',
color: props.isPresent ? '#d32f2f' : '#1976d2',
padding: '20px',
borderRadius: '8px',
border: `2px solid ${props.isPresent ? '#23c436' : '#1976d2'}`,


// Se isPresent è false, il bottone deve mostrare il testo "Assente / In Riunione" e la card deve cambiare stile (es. l'immagine diventa in bianco e nero, lo sfondo diventa grigio o l'opacità si abbassa).
//grayscale per rendere l'immagine in bianco e nero, opacity per abbassare l'opacità della card
filter: props.isPresent ? 'none' : 'grayscale(100%)',
opacity: props.isPresent ? 1 : 0.5

};

// Istanziamo uno stato booleano impostato inizialmente a false
const [isPresent, setIsPresent] = useState(false);

const toggleSwitch = () => {
// Invochiamo il setter passando il valore opposto
setIsPresent(!isPresent);
};

return (

<div style={styleConfig}>
<img src={props.imageUrl} alt={`${props.name}`} style={{ width: '100px', borderRadius: '50%' }} />
<h2>{props.name}</h2>
<h4>{props.role}</h4>
<p>{props.bio}</p>
{/* // Il bottone deve essere disabilitato se isPresent è false e quando premudto deve cambiare il valore di isPresent (da true a false o viceversa) e aggiornare lo stile della card di conseguenza usando useState */}
<button onClick={toggleSwitch}>
{isPresent ? 'Disponibile' : 'Assente / In Riunione'}
</button>
</div>
);}