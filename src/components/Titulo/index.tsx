import { Titulo as TituloEstilo } from './styles'

export type Props = {
  //sim, tem q ser children sapoxa, pra poder pegar
  children: string;
  fontSize?: number;
}

const Titulo = (referencia: Props) => <TituloEstilo fontSize={referencia.fontSize}>{referencia.children}</TituloEstilo>
export default Titulo
