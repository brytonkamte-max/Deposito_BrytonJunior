
import './App.css'
import { ProfileCard } from './ProfileCard';
import { Welcome } from './Welcome'
import { ProductDisplay } from './ProductDisplay';
// import { AlertButton } from './AlertButton';
import { Avatar } from './Avatar';
import { LightSwitch } from './LightSwitch';



function App() {
 
  const userData = { firstName: "Anna", lastName: "Rossi", role: "Developer" };
const userSkills = ["React", "JavaScript", "CSS"];


// const handleAlert = () => {
// alert("Azione rilevata dal componente principale!");
// };


  return (
   <div>
{/* Nome è una stringa statica, messageCount è un numero passato tra graffe */}
<Welcome name="Mario" messageCount={5} />
<Welcome name="Luigi" messageCount={0} />

{/* Esempio con oggetto e array */}
<ProfileCard user={userData} skills={userSkills} />

{/* Esempio con componenti annidati */}
<ProductDisplay name="Laptop" price={1200} />
<ProductDisplay name="Smartphone" price={800} />

{/* Bottone con alert */ }

{/* Passiamo il riferimento alla funzione handleAlert */}
{/* <AlertButton label="Avvia Processo" onAction={handleAlert} /> */}


{/* Altri componenti o contenuti possono essere aggiunti qui */ }
<Avatar imageUrl="https://example.com/user-avatar.png" size={80} isRound={false} />

{/* La variabile di memoria*/}
<LightSwitch />


</div>
  )
}







export default App
