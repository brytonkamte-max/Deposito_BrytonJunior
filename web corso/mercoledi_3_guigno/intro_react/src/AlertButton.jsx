import { AlertButton } from './AlertButton';

export default function App() {
const handleAlert = () => {
alert("Azione rilevata dal componente principale!");
};

return (
<div className="control-panel">
{/* Passiamo il riferimento alla funzione handleAlert */}
<AlertButton label="Avvia Processo" onAction={handleAlert} />
</div>
);
}