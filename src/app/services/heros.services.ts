import { Injectable } from "@angular/core";

@Injectable()
export class HerosService {
    
    private personajes:any[] = [
        {
        "name": "Rick Sanchez",
        "description": "Un científico alcohólico y excéntrico que es el abuelo de Morty. Rick es conocido por su inteligencia, su uso de portales para viajar entre dimensiones y su falta de moral.",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "extra": "Es el co-creador de la pistola de portales, un dispositivo que permite viajar entre dimensiones."
        },
        {
        "name": "Morty Smith",
        "description": "Un adolescente tímido y de buen corazón que a menudo se ve arrastrado a las aventuras de su abuelo Rick. Morty a menudo actúa como la voz de la razón.",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "extra": "Tiene una aplastante atracción por su compañera de clase, Jessica."
        },
        {
        "name": "Summer Smith",
        "description": "La hermana mayor de Morty. Summer es una adolescente típica, preocupada por su popularidad, pero también se convierte en una aventurera dispuesta en varias ocasiones.",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "extra": "En varios episodios, demuestra ser tan capaz y valiente como su abuelo Rick."
        },
        {
        "name": "Beth Smith",
        "description": "La madre de Morty y Summer, y la hija de Rick. Beth es una cirujana de caballos que lidia con las ausencias de Rick y los problemas de su matrimonio con Jerry.",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "extra": "En la serie, se cuestiona si ella es una Beth clon o la original, lo cual es un tema recurrente."
        },
        {
        "name": "Jerry Smith",
        "description": "El padre de Morty y Summer, y el yerno de Rick. Jerry es inseguro, con frecuencia desempleado, y a menudo el blanco de las burlas de Rick.",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "extra": "Tiene una relación amor-odio con Rick, a quien considera una mala influencia para su familia."
        },
        {
        "name": "Mr. Meeseeks",
        "description": "Una criatura azul que existe solo para cumplir una tarea específica para la cual ha sido llamado. Una vez que cumple su objetivo, desaparece.",
        "image": "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
        "extra": "Tiene una existencia corta y está desesperado por cumplir su tarea rápidamente para dejar de existir."
        },
        {
        "name": "Birdperson",
        "description": "Un amigo cercano de Rick que es un guerrero ave-humano de otra dimensión. Es serio y leal a Rick.",
        "image": "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
        "extra": "Es resucitado como un cyborg llamado Phoenixperson."
        },
        {
        "name": "Squanchy",
        "description": "Un amigo de Rick que es una criatura felina antropomórfica que usa la palabra 'squanch' en casi todas sus oraciones.",
        "image": "https://rickandmortyapi.com/api/character/avatar/331.jpeg",
        "extra": "Puede volverse gigante y súper fuerte al beber un líquido especial."
        },
        {
        "name": "Evil Morty",
        "description": "Una versión alternativa de Morty que es extremadamente inteligente y malvada. Conocido por usar un parche ocular.",
        "image": "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
        "extra": "Se convierte en el presidente de la Ciudadela de Ricks."
        },
        {
            "name": "Crocubot",
            "description": "Crocubot es un híbrido de cocodrilo y robot. Formaba parte del equipo conocido como los 'Vindicators'.",
            "image": "https://rickandmortyapi.com/api/character/avatar/81.jpeg",
            "extra": "Location: Worldender's lair"
        },
        {
            "name": "Cronenberg Rick",
            "description": "Cronenberg Rick es una versión mutada de Rick, proveniente de la Tierra Cronenberg. Resulta de un experimento fallido que transformó a los humanos en monstruos Cronenberg.",
            "image": "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
            "extra": "Location: Earth (C-137)"
        },
        {
            "name": "Cronenberg Morty",
            "description": "Cronenberg Morty es una versión mutada de Morty, proveniente de la Tierra Cronenberg. Al igual que Cronenberg Rick, Morty también fue transformado en un monstruo debido al mismo experimento fallido.",
            "image": "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
            "extra": "Location: Earth (C-137)"
        },
        {
            "name": "Cult Leader Morty",
            "description": "Cult Leader Morty es una versión de Morty que lidera un culto en un planeta desconocido. Es conocido por su carisma y habilidades de liderazgo.",
            "image": "https://rickandmortyapi.com/api/character/avatar/84.jpeg",
            "extra": "Location: Hideout Planet"
        },
        {
            "name": "Cyclops Morty",
            "description": "Cyclops Morty es una versión de Morty con un solo ojo, originaria de la Ciudadela de Ricks. Es un personaje destacado en varias historias dentro de la Ciudadela.",
            "image": "https://rickandmortyapi.com/api/character/avatar/85.jpeg",
            "extra": "Location: Citadel of Ricks"
        },
        {
            "name": "Cyclops Rick",
            "description": "Cyclops Rick es una versión de Rick con un solo ojo. Es un personaje importante dentro de la Ciudadela de Ricks y ha tenido varios encuentros con otros Ricks y Mortys.",
            "image": "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
            "extra": "Location: Citadel of Ricks"
        },
        {
            "name": "Cynthia (Zigerion)",
            "description": "Cynthia es una alienígena de la especie Zigerion. Es conocida por ser parte de la base de los Zigerion, una raza alienígena con intenciones hostiles.",
            "image": "https://rickandmortyapi.com/api/character/avatar/87.jpeg",
            "extra": "Location: Zigerion's Base"
        },
        {
            "name": "Cynthia (Human)",
            "description": "Cynthia es una humana del planeta Tierra (Dimensión de Reemplazo). Ha aparecido en múltiples episodios, mostrando su adaptabilidad en diversas situaciones.",
            "image": "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
            "extra": "Location: Earth (Replacement Dimension)"
        },
        {
            "name": "Dale",
            "description": "Dale es una criatura mitológica gigante de la ciudad de los Gigantes. Su tamaño y fuerza lo hacen destacar entre otros personajes.",
            "image": "https://rickandmortyapi.com/api/character/avatar/89.jpeg",
            "extra": "Location: Giant's Town"
        },
        {
            "name": "Daron Jefferson",
            "description": "Daron Jefferson es un alienígena con pezones en forma de cono. Proviene del planeta de Unity y ha sido controlado por la entidad Unity en varias ocasiones.",
            "image": "https://rickandmortyapi.com/api/character/avatar/90.jpeg",
            "extra": "Location: Unity's Planet"
        },
        {
            "name": "David Letterman",
            "description": "David Letterman es una versión del famoso presentador de televisión, proveniente de la Tierra (C-500A). Ha aparecido en episodios que parodian su estilo de entrevistas.",
            "image": "https://rickandmortyapi.com/api/character/avatar/91.jpeg",
            "extra": "Location: Earth (C-500A)"
        },
        {
            "name": "Davin",
            "description": "Davin es un humano de la Tierra (C-137). Fue una víctima de los múltiples experimentos de Rick, lo que llevó a su eventual fallecimiento.",
            "image": "https://rickandmortyapi.com/api/character/avatar/92.jpeg",
            "extra": "Location: Earth (C-137)"
        },
        {
            "name": "Diablo Verde",
            "description": "Diablo Verde es una criatura mitológica demoníaca de Dorian 5. Es conocido por su apariencia temible y sus habilidades demoníacas.",
            "image": "https://rickandmortyapi.com/api/character/avatar/93.jpeg",
            "extra": "Location: Dorian 5"
        },
        {
            "name": "Diane Sanchez",
            "description": "Diane Sanchez es la fallecida esposa de Rick Sanchez de la Tierra (C-137). Aparece en varios recuerdos de Rick y es una figura clave en su pasado.",
            "image": "https://rickandmortyapi.com/api/character/avatar/94.jpeg",
            "extra": "Location: Rick's Memories"
        },
        {
            "name": "Dipper and Mabel Mortys",
            "description": "Dipper y Mabel Mortys son una versión alternativa de Morty que hacen referencia a los personajes de la serie 'Gravity Falls'. Son habitantes de la Ciudadela de Ricks.",
            "image": "https://rickandmortyapi.com/api/character/avatar/95.jpeg",
            "extra": "Location: Citadel of Ricks"
        },
        {
            "name": "Tuberculosis",
            "description": "Tuberculosis es una enfermedad personificada que habita en el Parque de Anatomía. Es una de las muchas enfermedades peligrosas presentes en el parque.",
            "image": "https://rickandmortyapi.com/api/character/avatar/96.jpeg",
            "extra": "Location: Anatomy Park"
        },
        {
            "name": "Gonorrhea",
            "description": "Gonorrhea es una enfermedad personificada en el Parque de Anatomía. Representa la peligrosa enfermedad de transmisión sexual en forma física.",
            "image": "https://rickandmortyapi.com/api/character/avatar/97.jpeg",
            "extra": "Location: Anatomy Park"
        },
        {
            "name": "Hepatitis A",
            "description": "Hepatitis A es una enfermedad personificada en el Parque de Anatomía. Representa la infección viral que afecta el hígado en forma física.",
            "image": "https://rickandmortyapi.com/api/character/avatar/98.jpeg",
            "extra": "Location: Anatomy Park"
        },
        {
            "name": "Hepatitis C",
            "description": "Hepatitis C es una enfermedad personificada en el Parque de Anatomía. Representa la infección viral crónica que afecta el hígado en forma física.",
            "image": "https://rickandmortyapi.com/api/character/avatar/99.jpeg",
            "extra": "Location: Anatomy Park"
        },
        {
            "name": "Bubonic Plague",
            "description": "Bubonic Plague es una enfermedad personificada en el Parque de Anatomía. Representa la plaga mortal que causó la peste negra en forma física.",
            "image": "https://rickandmortyapi.com/api/character/avatar/100.jpeg",
            "extra": "Location: Anatomy Park"
        },
        {
            "name": "Woman Rick",
            "description": "Woman Rick es una versión femenina de Rick que pertenece a la especie alienígena y es conocida por su apariencia única como 'Chair'. Aunque su origen y ubicación actual son desconocidos, ha aparecido en varios episodios del universo de Rick and Morty.",
            "image": "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
            "extra": "Woman Rick es uno de los muchos Ricks alternativos que existen en el multiverso, destacándose por su género y apariencia inusual."
          },
          {
            "name": "Worldender",
            "description": "Worldender es un alienígena masculino conocido por su aspecto imponente y su papel como villano. Desafortunadamente, está muerto y su última ubicación conocida fue su guarida. Ha aparecido en múltiples episodios, dejando una marca significativa en la serie.",
            "image": "https://rickandmortyapi.com/api/character/avatar/382.jpeg",
            "extra": "Worldender fue el líder de un grupo de supervillanos antes de ser asesinado por el equipo de héroes conocido como los Vindicators."
          },
          {
            "name": "Yaarb",
            "description": "Yaarb es un alienígena masculino cuya ubicación conocida es el Hospital St. Gloopy Noops. Aunque su origen es desconocido, ha aparecido en varios episodios de la serie.",
            "image": "https://rickandmortyapi.com/api/character/avatar/383.jpeg",
            "extra": "Yaarb es un personaje secundario que hace su aparición en el hospital alienígena, destacándose por su apariencia única y sus interacciones con otros personajes."
          },
          {
            "name": "Yellow Headed Doctor",
            "description": "Yellow Headed Doctor es un alienígena masculino cuya ubicación conocida es el Hospital St. Gloopy Noops. Aunque su origen es desconocido, ha aparecido en varios episodios de la serie.",
            "image": "https://rickandmortyapi.com/api/character/avatar/384.jpeg",
            "extra": "Yellow Headed Doctor es conocido por su cabeza amarilla distintiva y su papel en el hospital alienígena, proporcionando cuidados médicos a otros personajes."
          },
          {
            "name": "Yellow Shirt Rick",
            "description": "Yellow Shirt Rick es una versión alternativa de Rick que pertenece a la especie humana. Su última ubicación conocida es la Ciudadela de los Ricks. Su estado actual es desconocido.",
            "image": "https://rickandmortyapi.com/api/character/avatar/385.jpeg",
            "extra": "Yellow Shirt Rick es uno de los muchos Ricks que residen en la Ciudadela, diferenciándose por su camisa amarilla distintiva."
          },
          {
            "name": "Zarbadar Gloonch",
            "description": "Zarbadar Gloonch es una alienígena femenina de la especie Drumbloxian. Su última ubicación conocida es Nuptia 4. Desafortunadamente, está muerta.",
            "image": "https://rickandmortyapi.com/api/character/avatar/386.jpeg",
            "extra": "Zarbadar Gloonch pertenecía a una especie única conocida como Drumbloxian y tuvo múltiples apariciones en la serie antes de su muerte."
          },
          {
            "name": "Zarbadar's Mytholog",
            "description": "Zarbadar's Mytholog es una criatura mitológica femenina de la especie Mytholog. Su origen y ubicación actual son Nuptia 4. Su estado actual es desconocido.",
            "image": "https://rickandmortyapi.com/api/character/avatar/387.jpeg",
            "extra": "Zarbadar's Mytholog es una criatura mitológica que aparece en el planeta Nuptia 4, destacándose por sus habilidades y misterioso origen."
          },
          {
            "name": "Zeep Xanflorp",
            "description": "Zeep Xanflorp es un humanoide masculino de la especie Microverse inhabitant. Su origen y ubicación actual son el Microverse de la batería de Rick. Está vivo.",
            "image": "https://rickandmortyapi.com/api/character/avatar/388.jpeg",
            "extra": "Zeep Xanflorp es un científico brillante que reside en el Microverse de la batería de Rick, conocido por su inteligencia y rivalidad con Rick."
          },
          {
            "name": "Zeta Alpha Rick",
            "description": "Zeta Alpha Rick es una versión alternativa de Rick que pertenece a la especie humana. Su última ubicación conocida fue en los recuerdos de Rick. Desafortunadamente, está muerto.",
            "image": "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
            "extra": "Zeta Alpha Rick es una versión trágica de Rick que aparece en los recuerdos de Rick, mostrando diferentes aspectos de su vida y personalidad."
          },
          {
            "name": "Zick Zack",
            "description": "Zick Zack es un alienígena masculino de la especie Floop Floopian. Su última ubicación conocida es la Tierra (Dimensión de Reemplazo). Desafortunadamente, está muerto.",
            "image": "https://rickandmortyapi.com/api/character/avatar/390.jpeg",
            "extra": "Zick Zack es un alienígena de la especie Floop Floopian que tuvo un papel menor en la serie antes de su muerte."
          },
          {
            "name": "Uncle Steve",
            "description": "Uncle Steve es un alienígena masculino de la especie Parásito. Su última ubicación conocida es la Tierra (Dimensión de Reemplazo). Desafortunadamente, está muerto.",
            "image": "https://rickandmortyapi.com/api/character/avatar/391.jpeg",
            "extra": "Uncle Steve es un parásito alienígena que implanta falsos recuerdos en la mente de las personas, haciéndoles creer que siempre ha sido parte de sus vidas."
          },
          {
            "name": "Bearded Morty",
            "description": "Bearded Morty es una versión alternativa de Morty que pertenece a la especie humana. Su última ubicación conocida es la Ciudadela de los Ricks. Está vivo.",
            "image": "https://rickandmortyapi.com/api/character/avatar/392.jpeg",
            "extra": "Bearded Morty es un Morty alternativo que se distingue por su barba, un rasgo inusual entre los Mortys."
          },
          {
            "name": "Roy",
            "description": "Roy es un humano masculino que pertenece al juego 'Roy: Una Vida Bien Vivida'. Su origen y ubicación actual son dentro del juego. Está vivo.",
            "image": "https://rickandmortyapi.com/api/character/avatar/393.jpeg",
            "extra": "Roy es el protagonista de un juego de realidad virtual en Blips and Chitz, donde los jugadores viven una vida entera en solo unos minutos."
          },
          {
            "name": "Davin",
            "description": "Davin es un masculino de la especie Cronenberg. Su origen y ubicación actual son la Tierra (C-137). Desafortunadamente, está muerto.",
            "image": "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
            "extra": "Davin se transformó en un Cronenberg durante uno de los experimentos de Rick que salió mal en la Tierra (C-137)."
          },
          {
            "name": "Greebybobe",
            "description": "Greebybobe es un alienígena cuyo género es desconocido y pertenece a la especie Greebybobe. Su última ubicación conocida es la guarida de Worldender. Está vivo.",
            "image": "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
            "extra": "Greebybobe es un alienígena que ha aparecido en varios episodios, conocido por su apariencia única y enigmática."
          },
          {
            "name": "Scary Teacher",
            "description": "Scary Teacher es una criatura mitológica masculina de la especie Monstruo. Su origen y ubicación actual son el sueño de Mr. Goldenfold. Está vivo.",
            "image": "https://rickandmortyapi.com/api/character/avatar/396.jpeg",
            "extra": "Scary Teacher es una criatura aterradora que aparece en los sueños de Mr. Goldenfold, destacándose por su apariencia monstruosa."
          },
          {
            "name": "Fido",
            "description": "Fido es un perro masculino que pertenece a la especie Animal. Su origen y ubicación actual son el sueño de Snuffles. Está vivo.",
            "image": "https://rickandmortyapi.com/api/character/avatar/397.jpeg",
            "extra": "Fido es un perro que aparece en el sueño de Snuffles, representando una versión mejorada e inteligente de los perros."
          },
          {
            "name": "Accountant dog",
            "description": "Accountant dog es un perro masculino que pertenece a la especie Animal. Su origen y ubicación actual son el sueño de Snuffles. Está vivo.",
            "image": "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
            "extra": "Accountant dog es un perro que trabaja como contador en el sueño de Snuffles, representando una version mejorada e inteligente de los perros."
        },{
            "name": "Albert Einstein",
            "description": "En el universo de Rick and Morty, Albert Einstein es retratado como una figura histórica que también forma parte del universo alternativo, mostrando un toque humorístico en su aparición.",
            "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
            "extra": ""
        },
    ]

    constructor(){
        console.log("HerosService");
    }

    getHeros(){
        return this.personajes;
    }
  
    buscarPersonajes(termino:string){
      let personajesM:any[] = [];
      termino = termino.toLowerCase();

      for(let personaje of this.personajes){
        let nombre = personaje.name.toLowerCase();
        if ( nombre.indexOf(termino) >= 0){
          personajesM.push(personaje);
        }
      }
      return personajesM;

    }
}