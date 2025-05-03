import { Story } from "@shared/schema";
import { 
  childrenReadingImages, 
  natureAndAnimalsImages, 
  peacefulIllustrationImages, 
  ageRanges
} from "@/lib/data";

// Estórias adicionais - Parte 2: Sabedoria e Bondade
export const additionalStoriesParte2: Omit<Story, "id">[] = [
  // CATEGORIA: SABEDORIA (4 estórias)
  {
    title: "O Pote de Sabedoria",
    excerpt: "Uma estória sobre como a verdadeira sabedoria vem da humildade e da partilha.",
    content: `Há muito tempo, em uma aldeia à beira de um grande rio, vivia um ancião chamado Samuel. Ele era conhecido por sua incrível sabedoria. Pessoas de todas as partes viajavam longas distâncias para consultá-lo sobre seus problemas e ouvir seus conselhos.

Um jovem chamado Pedro vivia na mesma aldeia e observava admirado como todos respeitavam Samuel. "Eu também quero ser sábio como ele", pensava Pedro todos os dias. "Quero que as pessoas me respeitem e venham me pedir conselhos."

Determinado, Pedro foi até a cabana de Samuel.

"Mestre Samuel", disse ele, "quero ser sábio como você. Como posso conseguir toda a sabedoria que você tem?"

Samuel olhou para o jovem com um sorriso gentil. "A sabedoria não é algo que se consegue de uma vez só, como quem enche um copo d'água. Mas vou te contar um segredo."

O velho se aproximou e sussurrou: "Existe um pote mágico escondido no topo daquela montanha. Dizem que quem encontrar esse pote e trouxer para a aldeia receberá toda a sabedoria do mundo."

Os olhos de Pedro brilharam de excitação. Sem perder tempo, ele preparou uma bolsa com água e comida e partiu para a montanha. A subida era íngreme e difícil, mas Pedro estava determinado. Depois de dois dias de caminhada, ele finalmente chegou ao topo.

Lá, em uma pequena caverna, estava um pote de barro simples, mas com estranhos símbolos gravados em volta. "É este! O pote da sabedoria!", exclamou Pedro, pegando-o cuidadosamente.

Para sua surpresa, o pote era muito pesado, como se estivesse cheio. Pedro amarrou-o firmemente em suas costas e começou a descida.

O caminho de volta era ainda mais difícil. Pedro tinha que equilibrar-se nas pedras escorregadias, segurando-se em raízes e galhos para não cair, tudo isso com o pesado pote nas costas.

Em um trecho particularmente difícil, Pedro escorregou e quase caiu. Segurando-se no último momento em um galho, ele conseguiu equilibrar-se, mas notou algo estranho: o peso do pote parecia mudar dependendo de como ele o carregava.

"Que estranho", pensou Pedro. "Se eu o carrego nas costas, ele pesa como chumbo. Mas se eu o seguro à minha frente, o peso parece menor."

Experimentando, Pedro percebeu que quando carregava o pote com humildade, respeitando seu peso e adaptando seus movimentos, a jornada ficava mais fácil. Mas quando tentava dominar o pote, forçando-o a se ajustar a seu ritmo, o peso parecia aumentar e o caminho ficava mais perigoso.

Pedro começou a pensar que talvez este fosse o primeiro ensinamento do pote da sabedoria: a sabedoria requer humildade e respeito.

Chegando próximo à aldeia, Pedro parou à beira do rio para descansar. Olhando para seu reflexo na água, ele viu uma expressão de orgulho em seu rosto. "Quando chegar com este pote, todos me respeitarão. Eu serei o mais sábio da aldeia, até mais que o próprio Samuel!"

Nesse momento, o pote em suas mãos pareceu pesar uma tonelada, quase arrastando-o para dentro do rio. Pedro lutou para mantê-lo firme, mas o peso era grande demais.

"O que está acontecendo?", gritou ele, confuso.

Uma voz calma soou atrás dele: "O pote está te ensinando outra lição."

Era Samuel, que havia seguido Pedro durante toda a jornada, observando à distância.

"A verdadeira sabedoria não é algo que se guarda só para si", disse o velho. "Quanto mais você quiser mantê-la só para você, mais pesada ela se torna."

Pedro olhou para o pote em suas mãos. "Então, o que devo fazer?"

"Abra-o", sugeriu Samuel.

Com cuidado, Pedro removeu a tampa do pote. Para sua surpresa, não havia nada dentro dele – apenas um espelho no fundo que refletia seu próprio rosto. Confuso, ele olhou para Samuel.

"A maior sabedoria de todas", explicou Samuel, "é saber que a verdadeira sabedoria não vem de objetos mágicos ou de aprender todas as respostas. Ela vem de olhar para dentro de si mesmo com honestidade, de aprender com cada experiência, e principalmente, de compartilhar o que aprendemos com os outros."

Pedro finalmente entendeu. O pote não continha sabedoria – a jornada para encontrá-lo é que era a verdadeira lição.

"É por isso que você é tão sábio", disse Pedro a Samuel. "Você não guarda seu conhecimento só para si. Você o compartilha com todos que precisam."

Samuel sorriu. "E é por isso que você está no caminho da sabedoria agora. Você aprendeu a lição mais importante: que a verdadeira sabedoria vem da humildade e da partilha."

A partir daquele dia, Pedro passou a estudar com Samuel, não mais buscando sabedoria para impressionar os outros, mas para ajudar sua comunidade. E anos mais tarde, quando Samuel partiu deste mundo, foi Pedro quem continuou seu legado, compartilhando não apenas o conhecimento, mas também a história do pote da sabedoria e suas valiosas lições.`,
    imageUrl: childrenReadingImages[0],
    categoryId: "sabedoria",
    categoryName: "Sabedoria",
    ageRange: ageRanges[3], // 6-10 anos
    featured: false,
    createdAt: new Date("2024-01-10")
  },
  {
    title: "A Menina das Perguntas",
    excerpt: "Como uma criança curiosa descobriu que a sabedoria começa com boas perguntas.",
    content: `Todo mundo na pequena vila de Vale Verde conhecia Sofia, a menina das perguntas. Desde que aprendeu a falar, Sofia fazia perguntas sobre tudo. Por que o céu é azul? Como os pássaros sabem para onde voar no inverno? Por que as pessoas ficam tristes às vezes?

Os adultos costumavam ficar exaustos com suas intermináveis perguntas. "Essa menina nunca se cansa de perguntar?", suspiravam. Alguns tentavam responder, outros desviavam o assunto, e muitos simplesmente diziam: "Porque sim, Sofia. Agora vá brincar."

Mas havia uma pessoa na vila que nunca se cansava das perguntas de Sofia: Dona Helena, a bibliotecária. Dona Helena era uma senhora de cabelos brancos e olhos brilhantes que administrava a pequena biblioteca da vila havia mais de quarenta anos.

"Não existe pergunta tola, Sofia", ela sempre dizia. "Só existem pessoas tolas que param de perguntar."

Sofia passava horas na biblioteca, folheando livros e fazendo ainda mais perguntas. Um dia, enquanto lia sobre as estrelas, Sofia perguntou:

"Dona Helena, como posso ser sábia como você?"

A bibliotecária sorriu. "Você acha que sou sábia?"

"Todo mundo diz isso", respondeu Sofia. "Dizem que você sabe um pouco sobre tudo."

Dona Helena fechou o livro que estava organizando e sentou-se ao lado de Sofia. "Bem, vou te contar um segredo sobre a sabedoria. Ela não começa com respostas. Começa com perguntas."

Sofia franziu a testa, confusa. "Mas as pessoas sempre reclamam das minhas perguntas. Dizem que falo demais e que deveria aceitar as coisas como são."

"As pessoas têm medo das perguntas", explicou Dona Helena. "Perguntas nos fazem pensar, e pensar às vezes nos leva a lugares desconfortáveis. Mas é exatamente aí que a sabedoria nasce."

"Então eu estou no caminho certo?", perguntou Sofia, seus olhos brilhando de esperança.

"Você está dando os primeiros passos", respondeu Dona Helena. "Mas lembre-se: a sabedoria não está apenas em fazer perguntas, mas também em ouvir as respostas – mesmo aquelas que não vêm em palavras."

Sofia não entendeu bem o que Dona Helena queria dizer com "respostas que não vêm em palavras", mas guardou aquela conversa no coração.

Naquela primavera, a vila de Vale Verde enfrentou uma seca terrível. Os poços começaram a secar, as plantações murchavam, e os animais sofriam com a falta de água. Os moradores da vila realizavam reuniões diárias na praça central para discutir o problema, mas ninguém conseguia encontrar uma solução.

Sofia acompanhava as reuniões em silêncio, absorvendo todas as informações. À noite, ela ia para a biblioteca e pesquisava sobre secas, água e sobrevivência.

"Por que não tentamos isso?", "E se fizéssemos aquilo?", ela perguntava durante as reuniões. Mas os adultos estavam tão preocupados e estressados que nem prestavam atenção nas ideias de uma criança de 10 anos.

Uma tarde, enquanto observava formigas em seu quintal, Sofia notou algo curioso: as formigas estavam carregando pequenas gotas de água. Ela seguiu a trilha de formigas e descobriu que elas iam e vinham de um ponto específico na encosta da montanha que ficava nos arredores da vila.

Sofia correu até a biblioteca. "Dona Helena! Acho que as formigas encontraram água!"

A bibliotecária ouviu atentamente enquanto Sofia explicava sua observação. "As formigas são sábias à sua maneira", comentou Dona Helena. "Elas nos oferecem uma resposta que não vem em palavras."

Juntas, Sofia e Dona Helena seguiram a trilha de formigas até a encosta da montanha. Lá, escondida entre as rochas, havia uma pequena nascente – tão pequena que os adultos haviam passado por ela sem notar, mas suficiente para as formigas... e talvez para a vila, se fosse corretamente canalizada.

Com a ajuda de Dona Helena, Sofia apresentou sua descoberta na reunião da vila naquela noite. A princípio, os adultos ficaram céticos. "Como uma menina encontrou algo que nenhum de nós conseguiu?", murmuravam.

"Talvez", disse Dona Helena, "porque ela nunca parou de fazer perguntas. E porque ela aprendeu a ouvir as respostas que vêm de lugares inesperados."

Os engenheiros da vila investigaram a nascente e descobriram que ela era alimentada por um lençol freático subterrâneo. Com trabalho e engenhosidade, conseguiram expandir a nascente e criar um sistema de distribuição de água que salvou a vila da seca.

Sofia tornou-se uma heroína local. O prefeito até organizou uma pequena cerimônia em sua homenagem, onde lhe entregou um certificado de "Jovem Sábia de Vale Verde".

Depois da cerimônia, Sofia correu para mostrar o certificado a Dona Helena.

"Estou orgulhosa de você", disse a bibliotecária. "Mas lembre-se: este é apenas o começo da sua jornada."

"Ainda tenho muito a aprender", concordou Sofia.

"E muito a ensinar também", acrescentou Dona Helena. "A verdadeira sabedoria não é guardada, mas compartilhada. Você ajudou a vila não apenas encontrando a água, mas mostrando a todos o valor de fazer perguntas e escutar com atenção."

Naquele dia, Sofia compreendeu que a sabedoria não era um destino, mas uma jornada contínua – uma jornada que começava com uma pergunta simples e nunca realmente terminava. E ela estava apenas começando.`,
    imageUrl: childrenReadingImages[1],
    categoryId: "sabedoria",
    categoryName: "Sabedoria",
    ageRange: ageRanges[2], // 5-9 anos
    featured: true,
    createdAt: new Date("2024-01-20")
  },
  {
    title: "A Árvore das Lições",
    excerpt: "Uma árvore centenária que ensina valiosas lições de vida a quem sabe escutar.",
    content: `No centro do parque mais antigo da cidade, erguia-se uma imponente árvore centenária. Seu tronco era tão largo que seriam necessárias dez crianças de mãos dadas para abraçá-lo por completo. Seus galhos se estendiam para todos os lados como braços acolhedores, e suas raízes profundas criavam padrões fascinantes no chão ao redor.

As pessoas chamavam-na de "a Árvore das Lições", porque havia uma lenda de que ela podia ensinar coisas valiosas para quem soubesse realmente escutar. A maioria dos adultos ria dessa história, considerando-a apenas uma fábula infantil. Mas as crianças... ah, as crianças acreditavam.

Entre elas estava Leo, um menino de 8 anos, pensativo e observador. Enquanto as outras crianças corriam e brincavam no parque, Leo gostava de sentar-se encostado no tronco da grande árvore, fechando os olhos e sentindo a brisa suave que balançava suas folhas.

Um dia, enquanto estava ali sentado, Leo teve uma sensação estranha. Foi como se a árvore estivesse vibrando suavemente, produzindo um som que não era bem um som, mas mais como um sentimento que se formava em sua mente.

"Paciência," dizia o sentimento. "Minha primeira lição é sobre paciência."

Leo abriu os olhos, assustado. Olhou ao redor, mas estava sozinho. Seria possível que a lenda fosse verdadeira? Que a árvore estivesse realmente falando com ele?

Intrigado, Leo voltou no dia seguinte. E no próximo. E no outro. Cada vez que se sentava junto à árvore, ele aprendia uma nova lição:

"Para crescer forte, você precisa de raízes profundas," ensinou a árvore no segundo dia. "Sua família, seus amigos, sua história – estas são suas raízes. Cuide delas."

"Flexibilidade é tão importante quanto força," foi a lição do terceiro dia. "Observe como meus galhos se dobram com o vento forte, mas raramente quebram. Aprenda a se adaptar às tempestades da vida."

"Cada estação tem seu propósito," a árvore explicou no quarto dia. "Na primavera, cresço. No verão, floresço. No outono, deixo ir. No inverno, descanso. Todas são necessárias."

As lições continuaram, dia após dia. Leo não contou a ninguém sobre suas conversas com a árvore – era seu segredo especial. Mas as pessoas começaram a notar mudanças nele.

Quando sua irmã mais nova quebrou seu brinquedo favorito, em vez de gritar e chorar como faria antes, Leo respirou fundo e disse: "Está tudo bem. Acidentes acontecem." (A lição da árvore sobre perdão.)

Quando enfrentou um problema difícil na escola, em vez de desistir frustrado, ele persistiu calmamente até encontrar a solução. (A lição da árvore sobre perseverança.)

Quando um novo aluno, tímido e solitário, chegou à sua classe, foi Leo quem se aproximou primeiro para oferecer amizade. (A lição da árvore sobre compaixão.)

A mãe de Leo, observando essas mudanças, perguntou-lhe um dia: "Algo especial aconteceu, filho? Você parece... diferente. Mais sábio, de alguma forma."

Leo sorriu. "Tenho um professor muito especial," respondeu ele simplesmente.

Curiosa, a mãe decidiu seguir Leo discretamente em uma de suas visitas ao parque. Ela observou de longe enquanto o filho se sentava junto à grande árvore, fechava os olhos e parecia mergulhar em profundo silêncio.

Depois de algum tempo, Leo abriu os olhos, sorriu, deu um tapinha carinhoso no tronco da árvore e se levantou para ir embora. Foi quando notou sua mãe.

"O que você está fazendo aqui?", perguntou, surpreso.

"Queria conhecer seu professor especial," respondeu ela, aproximando-se. "É a árvore, não é?"

Leo hesitou, temendo que sua mãe risse dele. Mas havia compreensão nos olhos dela.

"A Árvore das Lições," disse Leo finalmente. "Ela fala comigo. Não com palavras, mas... você sabe."

Em vez de rir ou duvidar, a mãe de Leo sentou-se ao lado da árvore e fechou os olhos. Por vários minutos, ficou ali em silêncio.

Quando finalmente abriu os olhos, havia lágrimas neles. "Eu costumava ouvir também," disse ela suavemente. "Quando era criança, como você. Mas em algum momento... parei de escutar."

A partir daquele dia, mãe e filho passaram a visitar a árvore juntos. Às vezes conversavam sobre as lições que recebiam; outras vezes, apenas compartilhavam o silêncio sagrado debaixo dos galhos protetores.

Aos poucos, outras pessoas começaram a notar a árvore de maneira diferente. Uma senhora idosa descobriu que sentar-se ali aliviava sua solidão. Um homem de negócios sempre ocupado aprendeu a fazer pausas para contemplar a natureza. Um grupo de crianças começou a se reunir regularmente ao redor da árvore para ler histórias e compartilhar ideias.

A Árvore das Lições continuou a ensinar a todos que abriam seus corações para escutar. E Leo, que foi o primeiro de sua geração a redescobrir a antiga magia, cresceu para se tornar um contador de histórias que nunca deixava de incluir, em cada conto que narrava, uma pequena semente de sabedoria – assim como a árvore havia plantado nele.

Porque a verdadeira sabedoria, como a própria árvore havia ensinado, não está em saber todas as respostas, mas em estar aberto a todas as lições que a vida tem a oferecer – mesmo aquelas que vêm das fontes mais inesperadas, como uma antiga árvore no centro de um parque movimentado.`,
    imageUrl: natureAndAnimalsImages[1],
    categoryId: "sabedoria",
    categoryName: "Sabedoria",
    ageRange: ageRanges[2], // 5-9 anos
    featured: false,
    createdAt: new Date("2024-01-30")
  },
  {
    title: "O Conselho dos Anciãos Animais",
    excerpt: "Como os animais mais velhos da floresta ensinam sabedoria a um filhote impaciente.",
    content: `Na Grande Floresta Antiga, havia uma tradição sagrada: uma vez por ano, sob a luz da lua cheia do solstício de verão, os animais mais velhos e sábios de cada espécie se reuniam no Círculo de Pedra para o Conselho dos Anciãos. Nessa reunião, compartilhavam suas sabedorias e decidiam como manter o equilíbrio e a harmonia da floresta para o ano seguinte.

Ravi, um jovem lobo de apenas dois invernos, não entendia a importância desse conselho. "Por que precisamos ouvir esses animais velhos e lentos?", reclamava ele para sua irmã Luna. "Somos mais rápidos, mais fortes e temos mais energia. Deveríamos ser nós a tomar as decisões!"

Luna, embora apenas um ano mais velha que Ravi, era muito mais paciente e respeitosa. "Os anciãos caminharam por esta floresta muito mais tempo que nós", ela explicou. "Suas patas conhecem cada trilha, seus olhos viram muitas estações mudarem, seus corações sentiram mais alegrias e dores do que podemos imaginar."

Ravi bufou, não convencido. "Quero ver essa 'grande sabedoria' com meus próprios olhos", declarou.

Foi assim que, na noite do solstício, Ravi decidiu se esconder perto do Círculo de Pedra para espionar o Conselho dos Anciãos. Luna tentou dissuadi-lo, mas ele estava determinado.

Escondido atrás de um arbusto florido, Ravi observou os anciãos chegando um a um: a velha tartaruga, movendo-se lentamente mas com propósito; o majestoso urso com pelo grisalho ao redor do focinho; a coruja de olhos opacos pela idade, mas ainda penetrantes; a raposa com cauda rala, mas olhar astuto; o veado de galhos imponentes e cicatrizes de muitas batalhas; e finalmente, a loba Naya, bisavó de Ravi, mancando ligeiramente, mas com porte digno.

"Eles parecem tão fracos", pensou Ravi. "Como podem proteger a floresta assim?"

A reunião começou com um momento de silêncio, enquanto a luz da lua banhava o círculo. Então, um a um, os anciãos começaram a falar.

A tartaruga falou sobre paciência: "Aprendi em meus 150 anos que os problemas que parecem montanhas hoje frequentemente são apenas pedregulhos amanhã. A pressa raramente nos leva ao lugar certo."

O urso falou sobre força: "A verdadeira força não está em vencer lutas, mas em saber quais lutas evitar. Em minha juventude, lutei contra todos que cruzavam meu caminho. Agora sei que a maior força está em saber quando abaixar a cabeça e quando erguê-la."

A coruja compartilhou sobre visão: "Meus olhos não são tão aguçados quanto antes, mas agora enxergo o que realmente importa. Vejo padrões onde outros veem apenas eventos aleatórios. Vejo conexões onde outros veem apenas separação."

A raposa falou de astúcia: "Ser astuto não é enganar os outros, como pensei em minha juventude. É encontrar soluções criativas que beneficiem a todos, mesmo quando o caminho parece bloqueado."

O veado compartilhou sobre sobrevivência: "Estas cicatrizes não são marcas de fraqueza, mas mapas da minha jornada. Cada uma me ensinou algo que permitiu que eu estivesse aqui hoje, para compartilhar com vocês."

Por fim, falou Naya, a loba anciã: "A maior lição que aprendi é que nenhum lobo é forte sozinho. Nosso poder vem da alcateia, da comunidade, do cuidado mútuo. Quando jovem, corria mais rápido que todos. Agora mal posso percorrer o território em um dia. Mas a sabedoria que ganhei vale mais que a velocidade que perdi."

Ravi estava hipnotizado. Nunca havia escutado palavras tão profundas. Cada ancião falava não com arrogância, mas com a humildade de quem aprendeu através de erros e desafios.

Então, algo inesperado aconteceu. Um trovão soou ao longe, e um cheiro estranho e ameaçador encheu o ar. "Fogo!", alertou a coruja. "Vem do lado oeste, e o vento o empurra para cá!"

O pânico quase tomou conta dos animais jovens que serviam o conselho, mas os anciãos permaneceram calmos.

"O riacho norte secou no último verão", disse um jovem coelho, tremendo.

"E o vale sul está bloqueado pelo desmoronamento da última tempestade", adicionou uma jovem gazela.

Os anciãos se entreolharam, e então, para surpresa de Ravi, começaram a compartilhar conhecimentos que pareciam ter sido feitos exatamente para este momento:

A tartaruga falou: "Há um túnel antigo sob a colina leste. Foi feito pelos ancestrais dos texugos. Poucos o conhecem agora, mas ele leva a uma clareira segura além do alcance do fogo."

O urso adicionou: "O túnel teria desabado há muito tempo, mas as raízes da Grande Árvore o mantêm firme. Eu mesmo o usei quando era apenas um filhote, durante o último grande incêndio."

A coruja, a raposa e o veado, cada um contribuiu com um pedaço vital de conhecimento: como organizar a evacuação, quais plantas poderiam ajudar com queimaduras, onde encontrar água limpa do outro lado.

E Naya, a loba anciã, assumiu naturalmente a liderança, designando tarefas com uma autoridade calma que fez até os animais mais assustados se acalmarem e obedecerem.

Ravi observou tudo com um novo respeito nascendo em seu coração. Quando os primeiros animais começaram a se dirigir para o túnel salvador, ele não pôde mais se conter. Saiu de seu esconderijo e correu até Naya.

"Bisavó", disse ele, "deixe-me ajudar. Sou rápido, posso levar mensagens e ajudar os mais lentos."

Naya olhou para seu bisneto, reconhecendo-o imediatamente apesar da escuridão. Um leve sorriso apareceu em seu focinho. "Sabia que você estava escondido ali, jovem Ravi. Venha, temos muito a fazer."

Naquela noite, enquanto ajudava a guiar os animais da floresta para a segurança, Ravi aprendeu mais sobre coragem, liderança e comunidade do que em toda sua vida. E quando, horas depois, todos estavam a salvo na clareira além do túnel, ele se aproximou humildemente dos anciãos.

"Peço desculpas por minha arrogância", disse ele. "Achei que sabedoria era apenas conhecimento, mas vi hoje que é muito mais: é conhecimento temperado pela experiência, guiado pelo coração, e oferecido com humildade. Um dia, espero ser digno de sentar no Conselho dos Anciãos."

A velha tartaruga sorriu. "Você acabou de dar o primeiro passo nessa direção, jovem lobo. A verdadeira sabedoria começa quando reconhecemos o quanto ainda temos a aprender."

E assim, sob as estrelas, cercado pelos animais da floresta que agora o olhavam com novo respeito, Ravi entendeu que a força da juventude e a sabedoria da velhice não são opostas, mas complementares. Juntas, formam o círculo perfeito da vida, onde cada fase tem seu valor e sua beleza.`,
    imageUrl: natureAndAnimalsImages[2],
    categoryId: "sabedoria",
    categoryName: "Sabedoria",
    ageRange: ageRanges[3], // 6-10 anos
    featured: false,
    createdAt: new Date("2024-02-10")
  },

  // CATEGORIA: BONDADE (4 estórias)
  {
    title: "As Sementes da Bondade",
    excerpt: "Como pequenos atos de bondade podem crescer e transformar um bairro inteiro.",
    content: `Na Rua das Acácias, em um pequeno bairro da cidade, vivia uma menina chamada Beatriz. Ela tinha apenas 9 anos, mas seu coração era enorme, cheio de bondade e compaixão. Beatriz tinha um sonho: transformar seu bairro, que andava tão cinzento e onde as pessoas mal se cumprimentavam, em um lugar mais alegre e acolhedor.

"Mas como uma criança tão pequena poderia fazer uma mudança tão grande?", pensava ela, olhando pela janela de seu quarto as pessoas passando apressadas, sem sorrisos ou conversas.

Um dia, enquanto ajudava seu avô no pequeno jardim dos fundos, Beatriz teve uma ideia. Seu avô, Senhor José, estava plantando sementes de girassol.

"Vovô, quanto tempo essas sementes demoram para virar flores grandes?", perguntou Beatriz.

"Bem, minha querida, um girassol leva cerca de três meses para crescer completamente. Mas a mágica começa muito antes, quando a primeira folhinha verde rompe o solo", respondeu o avô, com um sorriso gentil.

"É incrível como algo tão pequeno pode se transformar em algo tão grande e bonito, não é?", refletiu Beatriz.

Foi então que a ideia brilhou em sua mente: "E se a bondade fosse como sementes? Pequenas no início, mas com potencial para crescer e florescer?"

No dia seguinte, Beatriz começou seu projeto secreto: plantar "sementes de bondade" pelo bairro. Sua primeira semente foi ajudar a Senhora Carmem, uma vizinha idosa que morava sozinha, a carregar as compras do mercado até em casa.

"Obrigada, querida", disse a Senhora Carmem, surpresa com o gesto inesperado. "Faz tanto tempo que ninguém me oferece ajuda."

"É um prazer", respondeu Beatriz com um sorriso radiante. "Posso ajudar a senhora mais vezes, se quiser."

A segunda semente foi deixar um pequeno buquê de flores silvestres, que Beatriz colheu no campo próximo à escola, na porta do Senhor Antônio, um viúvo que sempre parecia tão triste quando caminhava pelo bairro.

Uma bilhetinho anônimo dizia apenas: "Um dia bonito para uma pessoa especial."

Beatriz observou de longe quando o Senhor Antônio encontrou as flores. Por um momento, o rosto dele se iluminou com um sorriso – o primeiro que ela via naquele rosto em muito tempo.

As sementes continuaram sendo plantadas: limpar o lixo do pequeno parque do bairro junto com alguns amigos que ela convenceu a participar; fazer cartões de "melhoras" para o garoto da casa ao lado que havia quebrado a perna; organizar uma pequena biblioteca comunitária usando livros que ninguém mais lia...

Cada ato era como uma pequena semente plantada com carinho no solo árido do bairro. E assim como seu avô havia dito, a mágica começou a acontecer muito antes das flores desabrocharem.

A Senhora Carmem, tocada pela gentileza de Beatriz, começou a fazer bolos para compartilhar com os vizinhos – algo que não fazia há anos, desde que seus filhos se mudaram para longe. O Senhor Antônio, inspirado pelo buquê anônimo, começou a cuidar do jardim na frente de sua casa, transformando-o em um pequeno oásis de beleza que todos admiravam ao passar.

Os amigos que ajudaram a limpar o parque começaram a se encontrar lá regularmente para brincar, trazendo vida e alegria ao espaço antes abandonado. A pequena biblioteca comunitária logo se transformou em um ponto de encontro onde as pessoas não apenas trocavam livros, mas também histórias e sorrisos.

Três meses depois, o bairro estava diferente. Havia mais sorrisos, mais "bom dia", mais flores nos jardins, mais crianças brincando nas calçadas. As pessoas começaram a se conhecer pelo nome, a se importar umas com as outras, a oferecer ajuda antes mesmo de serem solicitadas.

Foi quando os girassóis plantados por Beatriz e seu avô finalmente floresceram, altos e majestosos, virando-se juntos para o sol.

"Vovô, olhe!", exclamou Beatriz, maravilhada. "Os girassóis! Eles são como o nosso bairro agora – cheios de vida e cor!"

O Senhor José sorriu, seus olhos brilhando com orgulho e sabedoria. "Você notou algo especial sobre os girassóis, Beatriz?"

A menina observou atentamente. "Eles estão todos virados para a mesma direção."

"Sim, todos seguem o sol", explicou o avô. "E sabe o que mais? Cada flor contém centenas de novas sementes, prontas para gerar ainda mais beleza."

Foi então que Beatriz entendeu a verdadeira magia das suas "sementes de bondade". Cada pequeno ato gentil não apenas transformava a pessoa que o recebia, mas inspirava essa pessoa a plantar suas próprias sementes, criando um ciclo contínuo de bondade que se espalhava como os raios do sol.

Naquela noite, enquanto olhava pela janela do seu quarto, Beatriz não via mais um bairro cinzento e triste, mas um jardim florescente de sorrisos, acenos, conversas e comunidade. E tudo havia começado com pequenas sementes – sementes de bondade plantadas por uma menina que acreditava no poder das pequenas ações.

"Nunca subestime o poder de um pequeno ato de bondade", sussurrou ela para si mesma, enquanto adormecia. "Pois como as sementes de girassol, eles têm o poder de seguir o sol e transformar o mundo ao seu redor."`,
    imageUrl: natureAndAnimalsImages[3],
    categoryId: "bondade",
    categoryName: "Bondade",
    ageRange: ageRanges[2], // 5-9 anos
    featured: true,
    createdAt: new Date("2024-02-20")
  },
  {
    title: "O Cesto de Bondade",
    excerpt: "Uma estória sobre como a bondade, quando compartilhada, nunca se esgota.",
    content: `Na pequena vila de Três Riachos, vivia uma família muito especial: os Silvas. O que tornava os Silvas especiais não eram riquezas materiais ou talentos extraordinários, mas sim um objeto simples que passava de geração em geração: um cesto de vime trançado à mão, conhecido como o Cesto de Bondade.

Mariana Silva, uma menina de 7 anos, ouvia fascinada a história desse cesto, contada por sua avó.

"O Cesto de Bondade pertenceu à minha avó, que o recebeu de sua mãe, e assim por diante", explicava a avó de Mariana. "Ele tem um poder especial: nunca fica vazio quando usado para compartilhar bondade."

"Como assim, vovó?", perguntou Mariana, abraçando seu ursinho de pelúcia.

"Bem, o cesto funciona assim: você coloca algo nele – comida, um presente, uma carta gentil – e leva para alguém que precisa de bondade. Quando você entrega, algo mágico acontece."

"O quê, vovó? O que acontece?", os olhos de Mariana brilhavam de curiosidade.

A avó sorriu com ternura. "Você sentirá seu coração mais cheio do que antes, mesmo tendo dado algo. E, de alguma forma, sempre aparecerá algo novo para colocar no cesto. É como se a bondade nunca se esgotasse."

Mariana não estava certa se acreditava nessa magia, mas como amava sua avó, decidiu tentar. No dia seguinte, ela pediu para usar o Cesto de Bondade.

Era um domingo de outono, com folhas douradas cobrindo as ruas da vila. Mariana colocou no cesto alguns biscoitos caseiros que havia ajudado sua mãe a fazer. Seu plano era levar para o Senhor Eduardo, um idoso que morava sozinho no final da rua.

"Boa sorte", disse sua avó, enquanto Mariana partia em sua pequena missão. "Lembre-se: a verdadeira magia do cesto está no seu coração."

O Senhor Eduardo ficou genuinamente surpreso quando abriu a porta e viu a pequena Mariana com o cesto.

"Bom dia, Senhor Eduardo! Trouxe alguns biscoitos para o senhor", disse Mariana, estendendo o cesto.

O rosto enrugado do velho se iluminou com um sorriso. "Que gentileza, pequena! Por favor, entre um pouco. Acabo de fazer chá."

Mariana nunca havia entrado na casa do Senhor Eduardo antes. Para sua surpresa, as paredes estavam cobertas com lindas pinturas de paisagens.

"O senhor que pintou tudo isso?", perguntou ela, maravilhada.

"Sim, pintar é minha alegria. Ou era... meus olhos não são mais o que eram, e minhas mãos tremem demais agora", respondeu ele com um suspiro.

Enquanto compartilhavam biscoitos e chá, o Senhor Eduardo contou histórias de quando era um artista viajante, pintando paisagens por todo o país. Mariana ouvia encantada.

Ao se despedir, o Senhor Eduardo insistiu: "Espere, tenho algo para você." Ele foi até um armário e voltou com um pequeno estojo de tintas aquarela, quase novo. "Ganhei isto no meu aniversário, mas nunca usei. Seria um desperdício deixá-lo aqui. Você gostaria de tê-lo?"

Mariana ficou radiante. "Sério? Eu adoraria! Obrigada, Senhor Eduardo!"

No caminho de volta para casa, Mariana percebeu algo: ela havia saído com um cesto cheio de biscoitos e estava voltando com um lindo conjunto de tintas aquarela. Mais importante, seu coração transbordava de felicidade por ter feito o Senhor Eduardo sorrir.

"Vovó, funcionou!", exclamou ela ao chegar em casa. "O Cesto de Bondade realmente é mágico!"

A avó sorriu. "A magia está apenas começando, querida."

Nos dias seguintes, Mariana usou suas novas tintas para criar pequenos cartões coloridos. Colocou-os no Cesto de Bondade e os distribuiu pela vizinhança: para a professora que andava cansada, para o menino novo na escola que parecia solitário, para a florista que sempre tinha um sorriso para todos.

Cada vez que dava um cartão, algo inesperado acontecia: a professora lhe emprestou um livro maravilhoso sobre arte; o menino novo revelou-se um excelente jogador de damas e a ensinou alguns truques; a florista lhe deu uma pequena muda de planta para cuidar.

Mas o mais importante era como Mariana se sentia: cada ato de bondade parecia encher seu coração com ainda mais capacidade de amar e cuidar.

Semanas depois, a vila de Três Riachos viu algo extraordinário: uma exposição de arte na praça central. De um lado, as majestosas pinturas do Senhor Eduardo. De outro, os pequenos mas vibrantes cartões de Mariana. O título da exposição? "Bondade em Cores: Duas Gerações, Um Coração".

Foi um enorme sucesso. As pessoas da vila não apenas admiraram a arte, mas também começaram a compartilhar suas próprias histórias de bondade. Alguém trouxe sopa para um vizinho doente. Outro consertou a cerca de uma senhora idosa. Uma família abriu sua casa para celebrar o aniversário de uma criança cujos pais não podiam pagar uma festa.

Era como se o espírito do Cesto de Bondade tivesse se espalhado pela vila inteira.

Na noite do último dia da exposição, enquanto Mariana ajudava a recolher os cartões, sua avó se aproximou com o cesto já vazio.

"Vovó, eu entendi o verdadeiro poder do Cesto de Bondade", disse Mariana, pensativa. "Não é o cesto em si que é mágico, é o que ele representa."

"E o que ele representa, minha querida?", perguntou a avó, curiosa para ouvir a sabedoria da neta.

"Ele nos lembra que a bondade nunca se esgota quando a compartilhamos. Na verdade, ela cresce! É como... como as tintas do Senhor Eduardo. Quanto mais cores ele misturava, mais tonalidades lindas ele criava. A bondade funciona assim também."

A avó abraçou Mariana, seus olhos brilhando com orgulho e emoção. "Você entendeu perfeitamente, minha querida. E um dia, quando tiver seus próprios filhos, você passará o Cesto de Bondade adiante, junto com esta sabedoria tão preciosa."

Mariana abraçou o cesto vazio, que de alguma forma, nunca parecia realmente vazio. Porque mesmo quando não havia nada tangível dentro dele, estava sempre cheio de possibilidades, de chances de espalhar alegria, de oportunidades para fazer a diferença na vida de alguém.

E isso, percebeu Mariana, era a maior magia de todas.`,
    imageUrl: peacefulIllustrationImages[3],
    categoryId: "bondade",
    categoryName: "Bondade",
    ageRange: ageRanges[1], // 4-8 anos
    featured: false,
    createdAt: new Date("2024-03-01")
  },
  {
    title: "O Menino que Colecionava Sorrisos",
    excerpt: "Um garoto descobre que espalhar bondade traz a maior coleção de todas: sorrisos.",
    content: `Guilherme era um colecionador nato. Aos 8 anos, já tinha várias coleções: figurinhas de animais, pedras coloridas, tampinhas de garrafas, conchas da praia, e até mesmo folhas de diferentes formatos e cores. Em seu quarto, várias prateleiras e caixas organizadas guardavam seus tesouros, cada um com uma etiqueta especial.

"Gui, você precisa parar de acumular tantas coisas!", dizia sua mãe, preocupada com a quantidade de objetos que o filho guardava.

Mas Guilherme não conseguia evitar. Para ele, cada item de suas coleções contava uma história, guardava uma memória, representava um momento especial.

Um dia, na sala de espera do consultório do dentista, Guilherme notou uma menina mais nova, de uns 5 anos, que parecia muito assustada. Ela segurava a mão da mãe com força e seus olhos estavam cheios de lágrimas.

Sem pensar muito, Guilherme pegou uma de suas figurinhas de animais – um filhote de panda que era um de seus favoritos – e se aproximou da menina.

"Oi, eu sou o Guilherme. Qual é o seu nome?", perguntou ele com gentileza.

"Sofia", respondeu a menina, entre soluços.

"Sofia, você gosta de pandas? Tenho essa figurinha aqui, e ela é especial. Sabia que os pandas são muito corajosos, mesmo parecendo fofos e peludinhos? Eles enfrentam florestas enormes e sobem em árvores altas!"

Os olhos de Sofia se arregalaram de interesse, momentaneamente esquecendo seu medo.

"Verdade?", perguntou ela.

"Sim! E quer saber um segredo? Se você segurar esta figurinha enquanto estiver no dentista, o panda vai emprestar um pouco da coragem dele para você."

Sofia pegou a figurinha com cuidado, olhando-a com admiração. Então, algo mágico aconteceu: um sorriso iluminou o rostinho antes temeroso. Era um sorriso genuíno, que começava nos lábios e chegava até os olhos, transformando completamente sua expressão.

Algo mexeu dentro do peito de Guilherme. Aquele sorriso... era diferente de qualquer coisa que ele já havia colecionado. Não era algo que pudesse colocar em uma prateleira ou guardar em uma caixa, mas de alguma forma, ele sentiu que acabara de adicionar algo muito precioso à sua coleção.

"Obrigada, Guilherme", disse a mãe de Sofia. "Você não imagina como isso ajudou."

Quando Sofia foi chamada para entrar no consultório, ela estava visivelmente mais calma, segurando a figurinha do panda como um talismã.

Na volta para casa, Guilherme ficou pensativo. Ele havia dado uma de suas figurinhas favoritas, mas em troca, ganhou algo muito mais valioso – aquele sorriso de Sofia havia ficado gravado em sua memória, e pensar nele o fazia sentir-se bem, como se tivesse uma luz quentinha dentro do peito.

"E se eu pudesse colecionar mais sorrisos?", pensou ele.

No dia seguinte, na escola, Guilherme procurou maneiras de conquistar novos sorrisos para sua coleção invisível. Ofereceu ajuda a um colega que tinha dificuldade em matemática. Compartilhou seu lanche com uma menina que havia esquecido o dela em casa. Incluiu no jogo de futebol um garoto novo que estava sozinho no canto do pátio.

A cada pequeno ato de bondade, Guilherme "colecionava" um novo sorriso. Não eram objetos físicos que pudesse guardar em caixas, mas memórias preciosas que aqueciam seu coração.

Quando sua mãe notou a mudança – menos tempo organizando coleções físicas e mais tempo interagindo com os outros – ela ficou curiosa.

"Gui, você parece diferente ultimamente. Mais... feliz. O que aconteceu?"

Guilherme pensou por um momento antes de responder.

"Mamãe, eu comecei uma nova coleção. A mais importante de todas."

"Oh? E o que você está colecionando agora?", perguntou ela, preparando-se para ouvir sobre algum novo objeto que o filho tinha decidido juntar.

"Sorrisos", respondeu Guilherme simplesmente. "Estou colecionando sorrisos."

Confusa, mas intrigada, a mãe pediu que ele explicasse melhor.

Guilherme contou sobre Sofia no dentista e como percebeu que fazer alguém sorrir trazia uma alegria que nenhum objeto de coleção jamais poderia proporcionar.

"É como se cada sorriso que eu ajudo a criar acendesse uma luzinha dentro de mim", explicou ele. "E o melhor, mamãe: não preciso de mais prateleiras ou caixas para esta coleção! Ela fica guardada aqui." E apontou para seu coração.

A mãe de Guilherme sentiu seus olhos encherem-se de lágrimas de orgulho. Seu pequeno colecionador estava crescendo e descobrindo uma das maiores verdades da vida: que a felicidade verdadeira vem não do que acumulamos, mas do que compartilhamos.

Nos dias e semanas que se seguiram, a "coleção de sorrisos" de Guilherme continuou a crescer. Ele não abandonou totalmente suas outras coleções, mas agora elas tinham um novo propósito: serviam como ferramentas para criar conexões e compartilhar alegria.

Suas pedras coloridas viraram presentes para amigos que estavam tristes. Suas conchas da praia transformaram-se em peças de um jogo que ele inventou para brincar com os colegas no recreio. Suas figurinhas agora eram frequentemente compartilhadas, especialmente com crianças mais novas que precisavam de um pouco de coragem, como Sofia.

E quanto mais Guilherme dava, mais seu coração parecia capaz de receber – não apenas sorrisos, mas amizades verdadeiras, experiências significativas e uma compreensão profunda de que a bondade é o tesouro mais valioso que alguém pode colecionar.

Um dia, Guilherme pegou um caderno vazio e escreveu na capa: "Minha Coleção de Sorrisos". Dentro, começou a desenhar os rostos sorridentes das pessoas que ele havia ajudado, junto com pequenas notas sobre cada situação.

Esse se tornou seu item de coleção mais precioso – não pelos desenhos em si, mas pelas memórias de bondade que cada página representava, e pela pessoa em que ele estava se tornando: alguém que entendia que a verdadeira riqueza está no bem que fazemos aos outros.

E assim, o menino que colecionava objetos descobriu o maior tesouro de todos: um coração cheio de bondade, capaz de iluminar o mundo ao seu redor, um sorriso de cada vez.`,
    imageUrl: childrenReadingImages[0],
    categoryId: "bondade",
    categoryName: "Bondade",
    ageRange: ageRanges[2], // 5-9 anos
    featured: false,
    createdAt: new Date("2024-03-10")
  },
  {
    title: "A Receita da Vovó Beatriz",
    excerpt: "Como uma avó ensina que o ingrediente secreto da vida é a bondade.",
    content: `Na pequena cidade de Santo Antônio do Sul, todos conheciam a Vovó Beatriz e seus deliciosos doces. Seu café, localizado na praça central, era o lugar mais aconchegante da cidade. As pessoas iam lá não apenas pelas sobremesas incríveis, mas também pelo sorriso caloroso e pelas palavras gentis que Vovó Beatriz oferecia junto com cada fatia de bolo ou xícara de chocolate quente.

Helena, sua neta de 10 anos, adorava passar os finais de semana ajudando no café. Ela observava com admiração como sua avó tratava cada cliente como se fosse o mais especial do mundo.

"Vovó, como você consegue ser tão legal com todo mundo, o tempo todo?", perguntou Helena em uma tarde tranquila, enquanto limpavam as mesas após o movimento do almoço.

Vovó Beatriz sorriu, seus olhos brilhando por trás dos óculos de armação colorida.

"Ah, minha querida, é como fazer um bolo. Você precisa da receita certa e praticar todos os dias."

"Receita para ser legal?", Helena franziu o cenho, intrigada. "Tipo, com ingredientes e tudo mais?"

"Exatamente!", respondeu Vovó Beatriz, animada. "E sabe qual é o ingrediente principal?"

Helena pensou por um momento. "Amor?"

"Quase isso. É a bondade intencional. Ser bondoso de propósito, mesmo quando não estamos com vontade."

Vendo que sua neta estava interessada, Vovó Beatriz puxou duas cadeiras.

"Deixe-me te contar um segredo: nem sempre foi fácil para mim ser bondosa. Quando era jovem, um pouco mais velha que você, eu era bastante mal-humorada e impaciente."

Helena arregalou os olhos, incrédula. Sua avó, a pessoa mais doce que conhecia, mal-humorada?

"O que mudou?", perguntou ela.

"Tudo mudou quando encontrei a receita da bondade", respondeu Vovó Beatriz com um sorriso misterioso. "Quer conhecê-la?"

Helena assentiu entusiasmada.

"Bem, vamos lá: Receita de Bondade da Vovó Beatriz. Ingredientes: uma xícara cheia de atenção aos outros, duas colheres de sopa de palavras gentis, uma colher de chá de paciência (pode adicionar mais se necessário), um punhado de pequenos gestos inesperados, e o ingrediente secreto: praticar diariamente, mesmo quando não temos vontade."

Helena riu. "Vovó, isso não é uma receita de verdade!"

"Ah, mas é sim! E tão importante quanto qualquer receita de bolo. Vamos testar? Amanhã, vamos juntas praticar cada ingrediente."

No dia seguinte, Helena chegou ao café determinada a experimentar a "receita" da avó. Vovó Beatriz já estava de avental, preparando as primeiras fornadas do dia.

"Pronta para nossa experiência de bondade?", perguntou ela, com um brilho travesso nos olhos.

O primeiro cliente da manhã foi o Senhor Augusto, um homem idoso, sempre mal-humorado, que reclamava de tudo. Helena geralmente tentava evitá-lo.

"Perfeito para nosso primeiro ingrediente: atenção aos outros", sussurrou Vovó Beatriz. "Observe como ele caminha, Helena. Nota alguma coisa?"

Helena observou atentamente. "Ele parece estar mancando mais que o normal."

"Exatamente! Agora, vamos praticar o segundo ingrediente: palavras gentis."

Quando o Senhor Augusto se aproximou do balcão, antes que ele pudesse começar sua reclamação habitual, Vovó Beatriz sorriu genuinamente.

"Bom dia, Senhor Augusto! Helena e eu estávamos comentando como o senhor é pontual, sempre o primeiro a chegar. Seu joelho está incomodando mais hoje? Preparamos uma cadeira especial para o senhor, com uma almofada extra."

A expressão do homem mudou completamente. Seu rosto, normalmente fechado em uma carranca, suavizou-se. "Sim, a chuva de ontem piorou minha artrite. Obrigado por notar."

Enquanto o dia avançava, Helena e sua avó praticaram cada "ingrediente" da receita. Para a cliente que sempre parecia estressada com os três filhos pequenos, ofereceram uma mesa mais reservada e levaram giz de cera e papel para as crianças desenharem. Para o adolescente tímido que estudava sozinho nos fundos, levaram um chocolate quente por conta da casa.

Helena notou como pequenos gestos transformavam o ambiente. O café, que já era acolhedor, parecia agora irradiar uma energia especial. As pessoas sorriam mais, conversavam entre si, deixavam gorjetas generosas, e muitas diziam "voltarei amanhã" ao sair.

No final da tarde, quando fechavam o café, Helena ajudava a limpar a cozinha, pensativa.

"Vovó, percebi algo hoje. Quando somos bondosos com as pessoas, elas ficam felizes, mas nós também ficamos. É como... como se a bondade voltasse para nós de alguma forma."

Vovó Beatriz abraçou a neta com orgulho. "Isso mesmo, meu amor. É o segredo da receita que poucos percebem: a bondade que oferecemos aos outros alimenta nossa própria alma. É um ciclo perfeito."

"Mas tem uma coisa que não entendi", continuou Helena. "Por que você diz que precisamos praticar mesmo quando não temos vontade? Parece que você sempre tem vontade de ser bondosa."

A avó riu suavemente. "Ah, minha querida, há dias em que acordo cansada, preocupada ou triste, como todo mundo. Nestes dias, ser bondosa exige mais esforço. Mas descobri que, curiosamente, são os dias em que mais preciso praticar a bondade. Porque ao dar o que sinto que me falta, acabo encontrando exatamente o que estava procurando."

Nos meses seguintes, Helena praticou diligentemente a "receita da bondade" não apenas no café, mas na escola, em casa, e em todos os lugares. Como sua avó previu, alguns dias eram mais difíceis que outros. Havia dias em que ela não queria compartilhar seu lanche com a colega que sempre esquecia o dela, ou dias em que era difícil sorrir para o vizinho rabugento.

Mas ela persistiu, e algo extraordinário começou a acontecer. A bondade que Helena espalhava voltava para ela de formas inesperadas: novas amizades, confiança dos professores, um sentimento de paz interior que ela nunca havia experimentado antes.

Um dia, enquanto ajudava um grupo de crianças mais novas com a lição de casa na biblioteca, Helena percebeu uma delas observando-a com admiração.

"Como você consegue ser tão legal com todo mundo, o tempo todo?", perguntou a menina.

Helena sorriu, reconhecendo imediatamente sua própria pergunta de meses atrás. Com os olhos brilhando como os de sua avó, ela respondeu:

"É como fazer um bolo. Você precisa da receita certa e praticar todos os dias. Quer conhecer a receita?"

E assim, a Receita da Bondade da Vovó Beatriz foi passada adiante, provando que, como os melhores segredos culinários, a bondade é feita para ser compartilhada, espalhada, e saboreada por todos.`,
    imageUrl: childrenReadingImages[1],
    categoryId: "bondade",
    categoryName: "Bondade",
    ageRange: ageRanges[3], // 6-10 anos
    featured: false,
    createdAt: new Date("2024-03-20")
  }
];