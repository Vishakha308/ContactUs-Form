import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div className='container'>
      <Navigation/>
      <main className='mainContainer'>
        <ContactHeader/>
        <ContactForm/>
      </main>
    </div>
  )
}

export default App;  