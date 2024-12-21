import Navigation from "./assets/components/Navigation/Navigation"
import './App.css'
import ContactHeader from "./assets/components/ContactHeader/ContactHeader"
import ContactForm from "./assets/components/ContactForm/ContactForm"

const App = () => {
  return (
    <div>
      <Navigation />
      <main className="main_container">
      <ContactHeader />
      <ContactForm />
      </main>
    </div>
  )
}

export default App