import FormVagas from './components/FormVagas'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FormVagas />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
