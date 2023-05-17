import OutpatientTab from "./OutpatientTab.jsx";

import Container from "../UI/Container/Container.jsx";
import Eyebrow from "../UI/Eyebrow/Eyebrow.jsx";

const OutpatientSurgery = (ç) => {
  return (
    <section>
      <Container>
        <Eyebrow
          eyebrowText="Амбулаторная Хирургия"
          titleText="Полноценное хирургическое лечение за 1 день."
          paragraphText="Современный уровень развития хирургии позволяет выполнять широкий
              спектр оперативных вмешательств без госпитализации, в «стационаре
              одного дня», то есть амбулаторно."
        />
        <OutpatientTab />
      </Container>
    </section>
  );
};
export default OutpatientSurgery;
