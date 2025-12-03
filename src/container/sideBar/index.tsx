import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"

const Sidebar = () => (
  <aside>

    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Juan Jorge</Titulo>
      <Paragrafo tipo="Secundario" fontSize={16}>
        Juan-J0rge
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor FullStack
      </Descricao>
      <BotaoTema>
        Trocar Tema
      </BotaoTema>
    </SidebarContainer>



  </aside>
)

export default Sidebar
