
import './App.css'
import { Footer } from './Footer'
import { Header } from './Header'
import { TeamCard } from './TeamCard'

function App() {
 

  return (
    <>
    <Header />
    <main className="main">
    {/* Nel corpo della pagina, richiama il componente TeamCard per almeno 3 volte.

Passa a ciascuna card un oggetto con le seguenti proprietà: name, role, bio, imageUrl e isPresent. */}

<TeamCard props={{name: "Mario Rossi", role: "Sviluppatore", bio: "Esperto in React e Node.js", imageUrl: "https://randomuser.me/api/portraits/men/1.jpg", isPresent: true}} />
<TeamCard props={{name: "Luisa Bianchi", role: "Designer", bio: "Specializzata in UI/UX", imageUrl: "https://randomuser.me/api/portraits/women/2.jpg", isPresent: false}} />
<TeamCard props={{name: "Giovanni Verdi", role: "Project Manager", bio: "Gestisce progetti con metodologia Agile", imageUrl: "https://randomuser.me/api/portraits/men/3.jpg", isPresent: true}} />  
    
    </main>
    
    <Footer />
      
    </>
  )
}

export default App
