import { P } from './styles'

export type Props = {
  //sim, tem q ser children sapoxa, pra poder pegar
  children: string;
  tipo?: string;
}

const Paragrafo = ({children, tipo='principal'}: Props) => <P tipo={tipo}>{children}</P>
export default Paragrafo
