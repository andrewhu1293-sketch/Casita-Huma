// Casita Huma content. Andrew edits this file: coupons, questions, answers.
// Every text has an English (en) and Spanish (es) version.
window.CONTENT = {
  // Trivia: "a" is the index of the correct option. All answers are PLACEHOLDERS until Andrew fills them in.
  triviaRule: { ask: 5, need: 3 },
  loveRule: { ask: 5, need: 3 },

  coupons: [
    // tier: free | cheap | special
    { id: "breakfast", tier: "free", duck: "bellboy", en: "Breakfast in bed", es: "Desayuno en la cama" },
    { id: "massage30", tier: "free", duck: "sunbed", en: "A 30-minute massage", es: "Un masaje de 30 minutos" },
    { id: "movienight", tier: "free", duck: "richwoman", en: "Movie night: you pick everything", es: "Noche de peli: tú eliges todo" },
    { id: "favmeal", tier: "free", duck: "farmer", en: "I cook your favorite meal", es: "Cocino tu comida favorita" },
    { id: "mealbyme", tier: "free", duck: "digger", en: "A meal cooked by me", es: "Una comida hecha por mí" },
    { id: "sunset", tier: "free", duck: "traveler", en: "Sunset walk, phones off", es: "Paseo al atardecer, sin celulares" },
    { id: "nochores", tier: "free", duck: "donotdisturb", en: "A zero-chores day", es: "Un día sin quehaceres" },
    { id: "argument", tier: "free", duck: "concierge", en: "You win one argument", es: "Ganas una discusión" },
    { id: "yesday", tier: "free", duck: "lobbyboy", en: "A yes day, and we agree on the rules together before it starts", es: "Un día del sí, y acordamos las reglas juntos antes de empezar" },
    { id: "stars", tier: "free", duck: "scarecrow", en: "Stargazing night", es: "Noche de ver estrellas" },
    { id: "surprisehome", tier: "free", duck: "bellboy", en: "A surprise day at home that I plan", es: "Un día sorpresa en casa que yo planeo" },
    { id: "bath", tier: "free", duck: "peach", en: "A long bath that I set up", es: "Un baño largo que yo preparo" },
    { id: "learn", tier: "free", duck: "founder", en: "I learn something you love", es: "Aprendo algo que te encanta" },
    { id: "spahome", tier: "free", duck: "richman", en: "Spa night at home", es: "Noche de spa en casa" },
    { id: "datebook", tier: "free", duck: "suitcasekid", en: "You pick our next date from the date book", es: "Eliges nuestra próxima cita del libro de citas" },
    { id: "hike", tier: "free", duck: "sprayer", en: "A hike or nature walk somewhere new", es: "Una caminata en la naturaleza en un lugar nuevo" },
    { id: "scratches", tier: "free", duck: "rabbit", en: "Back scratches and head rubs on demand for a day", es: "Rascaditas de espalda y cabeza a pedido por un día" },
    { id: "secondchance", tier: "free", duck: "pig", en: "Second chance: try another game the same week after failing", es: "Segunda oportunidad: juega otra vez la misma semana después de perder", effect: "extraTry" },
    { id: "cooktogether", tier: "free", duck: "gardener", en: "Cooking together", es: "Cocinamos juntos" },
    { id: "besitos", tier: "free", duck: "beetroot", en: "50 besitos deliciosos", es: "50 besitos deliciosos" },
    { id: "dishes", tier: "free", duck: "potato", en: "3 days of me washing all the dishes", es: "3 días lavo todos los platos" },

    { id: "dessert", tier: "cheap", duck: "orange", en: "Your favorite dessert, delivered", es: "Tu postre favorito, a domicilio" },
    { id: "flowers", tier: "cheap", duck: "gardener", en: "Flowers for no reason", es: "Flores porque sí" },
    { id: "outing", tier: "cheap", duck: "suitcasekid", en: "A cheap outing you pick: bowling, mini golf or arcade", es: "Una salida barata que tú eliges: boliche, mini golf o arcade" },
    { id: "sunrise", tier: "cheap", duck: "ricesack", en: "Sunrise breakfast picnic", es: "Picnic de desayuno al amanecer" },
    { id: "craft", tier: "cheap", duck: "scarecrow", en: "Craft or painting night", es: "Noche de manualidades o pintura" },
    { id: "icecream", tier: "cheap", duck: "peach", en: "I treat you to ice cream", es: "Te invito un helado" },
    { id: "lunch", tier: "cheap", duck: "richman", en: "Lunch is on me", es: "El almuerzo lo pago yo" },

    { id: "fancydinner", tier: "special", duck: "richwoman", en: "A fancy dinner you pick", es: "Una cena elegante que tú eliges" },
    { id: "getaway", tier: "special", duck: "traveler", en: "A weekend getaway or day trip", es: "Una escapada de fin de semana o paseo de un día" },
    { id: "gift50", tier: "special", duck: "bellboy", en: "A gift you want (up to $50)", es: "Un regalo que quieras (hasta $50)" },
    { id: "tickets", tier: "special", duck: "lobbyboy", en: "Concert or event tickets", es: "Entradas para un concierto o evento" },
    { id: "spa", tier: "special", duck: "sunbed", en: "A spa or massage appointment", es: "Una cita de spa o masaje" }
  ],

  // Placeholder answers: option 0 is the correct one until Andrew writes the real ones.
  trivia: [
    ["What's my favorite food?", "¿Cuál es mi comida favorita?"],
    ["What's my comfort movie or show?", "¿Cuál es mi peli o serie favorita para relajarme?"],
    ["What was my dream job as a kid?", "¿Cuál era mi trabajo soñado de niño?"],
    ["What's my biggest fear?", "¿Cuál es mi mayor miedo?"],
    ["Which Duckoo is my favorite?", "¿Cuál es mi Duckoo favorito?"],
    ["What's my go-to drink order?", "¿Qué bebida pido siempre?"],
    ["What song do I always end up singing?", "¿Qué canción siempre termino cantando?"],
    ["What's the food I hate the most?", "¿Qué comida odio más?"],
    ["Which country do I want to visit most?", "¿Qué país quiero visitar más?"],
    ["What's my most embarrassing memory?", "¿Cuál es mi recuerdo más vergonzoso?"],
    ["What's my favorite thing about myself?", "¿Qué es lo que más me gusta de mí?"],
    ["What do I do when I'm stressed?", "¿Qué hago cuando estoy estresado?"],
    ["What's my hidden talent?", "¿Cuál es mi talento escondido?"],
    ["Who in my family am I closest to?", "¿Con quién de mi familia soy más cercano?"],
    ["What was my first impression of you?", "¿Cuál fue mi primera impresión de ti?"],
    ["Where did we have our first date?", "¿Dónde fue nuestra primera cita?"],
    ["What did I order on our first date?", "¿Qué pedí en nuestra primera cita?"],
    ["Who said \"I love you\" first, and where?", "¿Quién dijo \"te amo\" primero, y dónde?"],
    ["What's my favorite photo of us?", "¿Cuál es mi foto favorita de nosotros?"],
    ["What's the moment I knew I liked you?", "¿En qué momento supe que me gustabas?"]
  ].map(([en, es]) => ({
    en, es, a: 0,
    opts: [
      { en: "The right answer (Andrew fills this in)", es: "La respuesta correcta (Andrew la escribe)" },
      { en: "Wrong answer one", es: "Respuesta incorrecta uno" },
      { en: "Wrong answer two", es: "Respuesta incorrecta dos" },
      { en: "Wrong answer three", es: "Respuesta incorrecta tres" }
    ]
  })),

  loveOptions: {
    words: { en: "Tell me something sweet", es: "Decirme algo bonito" },
    time: { en: "Spend time with me, just us", es: "Pasar tiempo conmigo, solo nosotros" },
    touch: { en: "A long hug and cuddles", es: "Un abrazo largo y apapachos" },
    gifts: { en: "A little surprise or treat", es: "Una sorpresita o un detalle" },
    acts: { en: "Do something for me, like food or chores", es: "Hacer algo por mí, como comida o quehaceres" }
  },
  // "a" is Andrew's real pick (placeholder for now).
  love: [
    ["I had a terrible day at work.", "Tuve un día horrible en el trabajo.", "touch"],
    ["It's my birthday.", "Es mi cumpleaños.", "time"],
    ["I'm sick in bed.", "Estoy enfermo en cama.", "acts"],
    ["I just got good news.", "Acabo de recibir buenas noticias.", "words"],
    ["We're apart for a week.", "Estamos separados una semana.", "words"],
    ["I'm nervous before something big.", "Estoy nervioso antes de algo importante.", "words"],
    ["I'm mad at someone else.", "Estoy enojado con otra persona.", "time"],
    ["We had a small fight and made up.", "Tuvimos una pelea pequeña y nos reconciliamos.", "touch"],
    ["It's a lazy Sunday.", "Es un domingo flojo.", "time"],
    ["I'm really tired after a long week.", "Estoy muy cansado después de una semana larga.", "acts"],
    ["I'm feeling insecure about myself.", "Me siento inseguro de mí mismo.", "words"],
    ["I did something I'm proud of.", "Hice algo de lo que estoy orgulloso.", "words"],
    ["I'm hungry and grumpy.", "Tengo hambre y estoy de malas.", "acts"],
    ["I miss my family.", "Extraño a mi familia.", "touch"],
    ["We're at a party with lots of people.", "Estamos en una fiesta con mucha gente.", "time"],
    ["I didn't sleep well.", "No dormí bien.", "acts"],
    ["I'm stressed about money.", "Estoy estresado por el dinero.", "acts"],
    ["It's our anniversary.", "Es nuestro aniversario.", "gifts"],
    ["I'm sad and don't know why.", "Estoy triste y no sé por qué.", "touch"],
    ["I'm in a really good mood.", "Estoy de muy buen humor.", "time"]
  ].map(([en, es, a]) => ({ en, es, a })),

  // "hint" is what Andrew would say; Claude compares her answer with it. Placeholders for now.
  finish: [
    ["I feel most loved when you…", "Me siento más amado cuando tú…"],
    ["My favorite memory of us is…", "Mi recuerdo favorito de nosotros es…"],
    ["The first thing I noticed about you was…", "Lo primero que noté de ti fue…"],
    ["One day I want us to…", "Algún día quiero que nosotros…"],
    ["You make me laugh the most when…", "Me haces reír más cuando…"],
    ["My favorite thing you cook is…", "Lo que más me gusta que cocinas es…"],
    ["The place I'd most like to go with you is…", "El lugar al que más me gustaría ir contigo es…"],
    ["I'm most proud of you for…", "Lo que más me enorgullece de ti es…"],
    ["When I'm sad, I wish you would…", "Cuando estoy triste, me gustaría que tú…"],
    ["The song that reminds me of you is…", "La canción que me recuerda a ti es…"],
    ["My favorite thing about our home is…", "Lo que más me gusta de nuestra casa es…"],
    ["The best gift you ever gave me was…", "El mejor regalo que me has dado fue…"],
    ["When we're old, I want us to…", "Cuando seamos viejitos, quiero que…"],
    ["The thing I love most about your family is…", "Lo que más quiero de tu familia es…"],
    ["I knew you were special when…", "Supe que eras especial cuando…"],
    ["Our perfect weekend is…", "Nuestro fin de semana perfecto es…"],
    ["My favorite way to spend time with you is…", "Mi forma favorita de pasar tiempo contigo es…"],
    ["If I could relive one day with you, it would be…", "Si pudiera revivir un día contigo, sería…"],
    ["You're the only person who…", "Eres la única persona que…"],
    ["I fall for you a little more every time you…", "Me enamoro un poquito más de ti cada vez que…"]
  ].map(([en, es]) => ({ en, es, hint: "" })),

  deep: [
    ["What's something you've never told me?", "¿Qué es algo que nunca me has contado?"],
    ["When did you feel closest to me?", "¿Cuándo te sentiste más cerca de mí?"],
    ["What's a dream you've given up on?", "¿Qué sueño dejaste ir?"],
    ["What do you think we'll be like in 10 years?", "¿Cómo crees que seremos en 10 años?"],
    ["What's a fear you have about us?", "¿Qué miedo tienes sobre nosotros?"],
    ["What's something about your childhood that still shapes you?", "¿Qué algo de tu infancia todavía te marca?"],
    ["What's one thing you want me to understand better about you?", "¿Qué quieres que entienda mejor de ti?"],
    ["When have you felt most alone?", "¿Cuándo te has sentido más sola?"],
    ["What does a perfect life look like to you?", "¿Cómo se ve para ti una vida perfecta?"],
    ["What's something you've forgiven but not forgotten?", "¿Qué has perdonado pero no olvidado?"],
    ["What's a moment you were proud of us?", "¿En qué momento te sentiste orgullosa de nosotros?"],
    ["What do you need more of from me?", "¿Qué necesitas más de mí?"],
    ["What's something you want to change about yourself?", "¿Qué te gustaría cambiar de ti?"],
    ["What family tradition do you want us to keep or create?", "¿Qué tradición familiar quieres que guardemos o creemos?"],
    ["What was the hardest moment in our relationship, and what did you learn?", "¿Cuál fue el momento más difícil de nuestra relación y qué aprendiste?"],
    ["What makes you feel safe?", "¿Qué te hace sentir segura?"],
    ["What's a promise you'd like to make me?", "¿Qué promesa te gustaría hacerme?"],
    ["If you could tell your younger self one thing, what would it be?", "Si pudieras decirle algo a tu yo más joven, ¿qué sería?"],
    ["What's your biggest regret?", "¿Cuál es tu mayor arrepentimiento?"],
    ["What does home mean to you?", "¿Qué significa hogar para ti?"]
  ].map(([en, es]) => ({ en, es })),

  // Wait and Win: special-pool coupons only.
  specialDays: [
    { id: "herbday", month: 1, day: 7, duck: "richwoman", en: "Your birthday", es: "Tu cumpleaños" },
    { id: "valentine", month: 2, day: 14, duck: "peach", en: "Valentine's Day", es: "Día de San Valentín" }
  ],
  herSideGoal: { deep: 3, coupons: 10, bigcoupons: 7, trivia: 10, love: 8, finish: 8 }
  ,
  // Therapy chapter: quick reminders based on Fight Right (John & Julie Gottman). Paraphrased, not quotes.
  fightRight: [
    { title:{en:"Before we start",es:"Antes de empezar"}, items:[
      {en:"Start soft: \"I feel ___ about ___, and I need ___.\"", es:"Empieza suave: \"Me siento ___ por ___ y necesito ___.\""},
      {en:"Talk about the situation, not about who the other person is.", es:"Habla de la situación, no de cómo es la otra persona."},
      {en:"The first three minutes usually decide how the talk goes.", es:"Los primeros tres minutos casi siempre deciden cómo va la plática."},
      {en:"It's us against the problem, not me against you.", es:"Somos nosotros contra el problema, no tú contra mí."}
    ]},
    { title:{en:"While we talk",es:"Mientras hablamos"}, items:[
      {en:"Understand first, solve later.", es:"Primero entender, después resolver."},
      {en:"Listen to understand, not to answer back.", es:"Escuchar para entender, no para contestar."},
      {en:"Ask: \"What does this mean to you?\" There's usually a dream or a fear behind it.", es:"Pregunta: \"¿Qué significa esto para ti?\" Casi siempre hay un sueño o un miedo detrás."},
      {en:"Accept influence: \"You have a point.\"", es:"Acepta influencia: \"Tienes razón en eso.\""},
      {en:"Watch for the four horsemen: criticism, contempt, defensiveness, stonewalling.", es:"Cuidado con los cuatro jinetes: crítica, desprecio, ponerse a la defensiva y cerrarse.",
       note:{en:"Antidotes: gentle start-up, appreciation, owning my part, calming down.", es:"Antídotos: empezar suave, aprecio, asumir mi parte, calmarme."}}
    ]},
    { title:{en:"When we're flooded",es:"Cuando nos desbordamos"}, items:[
      {en:"If my heart is racing, I can't hear you. Let's take a break of at least 20 minutes.", es:"Si el corazón me late muy rápido, no te puedo escuchar. Pausa de al menos 20 minutos."},
      {en:"Say when we'll come back. A break is not leaving.", es:"Decimos cuándo regresamos. Una pausa no es irse."},
      {en:"During the break, calm down. Don't rehearse the argument.", es:"En la pausa nos calmamos. No ensayamos la discusión."}
    ]},
    { title:{en:"Repair and after",es:"Reparar y después"}, items:[
      {en:"Repair attempts count: a joke, a touch, \"Can we start over?\"", es:"Los intentos de reparar cuentan: una broma, un abrazo, \"¿Empezamos de nuevo?\""},
      {en:"Most couple problems are forever problems. The goal is to talk about them kindly, not to win.", es:"La mayoría de los problemas de pareja son para siempre. La meta es hablarlos con cariño, no ganar."},
      {en:"After a fight, once we're calm: what did each of us feel, and what did we need?", es:"Después de pelear, ya tranquilos: ¿qué sintió cada uno y qué necesitaba?"}
    ]}
  ]
};

