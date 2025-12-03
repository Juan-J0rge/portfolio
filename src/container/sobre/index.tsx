import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";

import { GithubSec } from "./styles";

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={20}>Sobre mim</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </Paragrafo>

      <GithubSec>
        <img
          src="https://github-readme-stats-salesp07.vercel.app/api?username=Juan-J0rge&show_icons=true&theme=dracula"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=Juan-J0rge&layout=compact&theme=dracula"
          alt="Top Languages"
        />
      </GithubSec>
    </section>
  );
};

export default Sobre
