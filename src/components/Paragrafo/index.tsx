import { P } from './styles'

export type Props = {
  //sim, tem q ser children sapoxa, pra poder pegar
  children: string;
  tipo?: string;
  fontSize?: number;
}

const Paragrafo = ({children, tipo='principal', fontSize}: Props) =>
   <P fontSize={fontSize} tipo={tipo}>{children}</P>
export default Paragrafo
