import Projetos from './container/projeto'
import Sidebar from './container/sideBar'
import Sobre from './container/sobre'
import EstiloGLobal, { Container } from './Styles'


function App() {
  return (

    <>
      <EstiloGLobal></EstiloGLobal>

      <Container>
        <Sidebar/>
        <main>
          <Sobre/>
          <Projetos/>
        </main>
      </Container>


    </>
  )
}

export default App
