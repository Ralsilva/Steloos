import { Category, Story, Testimonial } from "@shared/schema";
import { 
  childrenReadingImages, 
  natureAndAnimalsImages, 
  peacefulIllustrationImages, 
  ageRanges, 
  excerpts 
} from "@/lib/data";

// Initial categories
export const initialCategories: Category[] = [
  {
    id: "amor",
    name: "Amor",
    description: "Histórias sobre amor, carinho e afeto"
  },
  {
    id: "paz",
    name: "Paz",
    description: "Histórias sobre paz interior e harmonia"
  },
  {
    id: "sabedoria",
    name: "Sabedoria",
    description: "Histórias sobre sabedoria e conhecimento"
  },
  {
    id: "bondade",
    name: "Bondade",
    description: "Histórias sobre bondade e generosidade"
  },
  {
    id: "protecao",
    name: "Proteção",
    description: "Histórias sobre cuidado e proteção"
  },
  {
    id: "natureza",
    name: "Natureza",
    description: "Histórias sobre respeito à natureza"
  },
  {
    id: "familia",
    name: "Família",
    description: "Histórias sobre o valor da família"
  },
  {
    id: "amizade",
    name: "Amizade",
    description: "Histórias sobre amizade verdadeira"
  }
];

// Initial stories
export const initialStories: Omit<Story, "id">[] = [
  {
    title: "As Asas da Amizade",
    excerpt: "Um pássaro e uma borboleta descobrem o verdadeiro significado da amizade apesar de suas diferenças.",
    content: `Era uma vez um pequeno pássaro chamado Piu que vivia em uma grande árvore no meio da floresta. Piu era muito curioso e adorava observar todos os outros animais da floresta.

Um dia, enquanto voava entre as flores, Piu encontrou uma linda borboleta chamada Lila. Suas asas eram coloridas com tons de roxo e azul que brilhavam ao sol.

"Olá!", disse Piu, pousando em uma flor próxima. "Eu nunca vi asas tão bonitas como as suas!"

Lila ficou um pouco tímida, mas sorriu. "Obrigada! Suas penas também são muito bonitas."

A partir daquele dia, Piu e Lila começaram a se encontrar todos os dias. Embora fossem muito diferentes - um pássaro e uma borboleta - eles descobriram que tinham muitas coisas em comum. Ambos amavam voar entre as flores, sentir o vento nas asas e observar o pôr do sol.

Um dia, uma forte tempestade atingiu a floresta. Lila, com suas asas delicadas, não conseguia voar contra o vento forte. Ela se abrigou embaixo de uma folha, mas a chuva estava ficando cada vez mais forte.

Piu, preocupado com sua amiga, voou corajosamente contra o vento e a chuva. Quando encontrou Lila, usou suas asas para protegê-la da chuva.

"Por que você arriscou suas asas para me salvar?", perguntou Lila, surpresa.

Piu respondeu com simplicidade: "Porque você é minha amiga, e amigos cuidam uns dos outros, não importa quão diferentes sejamos."

Lila sentiu seu coração se encher de gratidão e amor. Ela entendeu que a verdadeira amizade vai além das diferenças e está presente nos pequenos gestos de cuidado e carinho.

Quando a tempestade passou, Piu e Lila voaram juntos novamente, mais unidos do que nunca. Eles compartilharam sua história com todos os animais da floresta, ensinando a todos que a amizade verdadeira não vê diferenças, apenas o amor que existe no coração de cada um.

E assim, com suas asas - uma de penas e outra colorida - Piu e Lila espalharam a mensagem de que o amor e a amizade podem unir até os seres mais diferentes.`,
    imageUrl: natureAndAnimalsImages[3],
    categoryId: "amizade",
    categoryName: "Amizade",
    ageRange: ageRanges[1], // 4-8 anos
    featured: true,
    createdAt: new Date("2023-05-15")
  },
  {
    title: "O Jardim da Paz",
    excerpt: "Uma menina descobre um jardim mágico onde as plantas crescem com pensamentos de paz e harmonia.",
    content: `No centro de uma pequena cidade, havia um terreno abandonado que ninguém visitava. As pessoas passavam apressadas, sempre com muita pressa para notar aquele espaço triste e vazio.

Mas Sofia, uma menina de 7 anos, tinha olhos que enxergavam além do que os adultos podiam ver. Um dia, enquanto caminhava para a escola com sua mãe, ela sentiu uma energia especial vindo daquele lugar.

"Mamãe, posso ir ver aquele terreno vazio?", perguntou Sofia.

A mãe, surpresa com o interesse da filha por um lugar tão abandonado, concordou com um pouco de hesitação.

Ao entrar no terreno, Sofia sentiu uma brisa suave e ouviu um sussurro: "Bem-vinda ao Jardim da Paz."

Sofia olhou ao redor, confusa. Não havia jardim algum, apenas terra seca e algumas pedras. "Que jardim?", ela perguntou.

A voz, gentil como a brisa, respondeu: "O jardim que existe em seus pensamentos e em seu coração. O jardim que pode florescer com seus sentimentos de paz."

Intrigada, Sofia sentou-se no chão e fechou os olhos. Ela começou a imaginar um lindo jardim com flores coloridas, árvores frondosas e um pequeno lago de águas cristalinas. Em sua mente, ela encheu o jardim com pensamentos de paz, harmonia e amor.

Quando abriu os olhos, Sofia ficou maravilhada. Uma pequena flor branca havia nascido exatamente onde ela estava sentada.

"É um milagre!", exclamou.

"Não é um milagre", disse a voz. "É o poder dos seus pensamentos de paz. Cada pensamento de amor e harmonia que você tem é como uma semente que pode florescer e transformar o mundo ao seu redor."

A partir daquele dia, Sofia visitava o terreno todos os dias após a escola. Em cada visita, ela se sentava, fechava os olhos e enchia sua mente com pensamentos de paz. E a cada dia, mais flores nasciam.

Outras crianças da vizinhança, curiosas com o que Sofia fazia, começaram a se juntar a ela. Sofia ensinou a elas sobre o Jardim da Paz e como seus pensamentos positivos podiam fazer flores crescerem.

Em poucos meses, o terreno abandonado se transformou em um lindo jardim, cheio de flores, árvores e até mesmo um pequeno lago, exatamente como Sofia havia imaginado. As pessoas da cidade, que antes passavam apressadas, agora paravam para admirar o jardim e sentir a paz que emanava dele.

O Jardim da Paz se tornou um lugar especial na cidade, onde pessoas de todas as idades iam para encontrar tranquilidade. E Sofia, com sua sabedoria infantil, ensinou a todos uma lição valiosa: a paz começa dentro de nós, em nossos pensamentos e sentimentos, e tem o poder de transformar não apenas nossas vidas, mas também o mundo ao nosso redor.`,
    imageUrl: peacefulIllustrationImages[0],
    categoryId: "paz",
    categoryName: "Paz",
    ageRange: ageRanges[2], // 5-9 anos
    featured: true,
    createdAt: new Date("2023-06-20")
  },
  {
    title: "A Estrela Sábia",
    excerpt: "Uma pequena estrela ajuda um menino a encontrar respostas para suas grandes perguntas sobre a vida.",
    content: `Todas as noites, antes de dormir, Pedro olhava pela janela do seu quarto e conversava com as estrelas. Ele tinha apenas 8 anos, mas sua cabeça estava cheia de perguntas sobre a vida, o universo e o porquê de todas as coisas.

Entre todas as estrelas do céu, havia uma que brilhava mais forte quando Pedro falava. Era uma estrela pequena, mas seu brilho era intenso e acolhedor. Pedro não sabia, mas aquela era a Estrela Sábia, uma estrela muito especial que tinha vivido por milhões de anos e guardava toda a sabedoria do universo.

Uma noite, enquanto Pedro observava o céu, ele fez uma pergunta que estava em seu coração há muito tempo:

"Por que existem coisas tristes no mundo? Por que as pessoas sofrem?"

Nesse momento, a Estrela Sábia brilhou tão forte que iluminou todo o quarto de Pedro. E então, para sua surpresa, ele ouviu uma voz suave:

"Olá, Pedro. Eu sou a Estrela Sábia, e estou ouvindo suas perguntas há muito tempo."

Pedro arregalou os olhos, maravilhado. "Você pode falar?", perguntou ele, espantado.

"Para aqueles que realmente querem ouvir, sim", respondeu a estrela. "E você, Pedro, tem um coração que busca entender."

"Então, você pode me dizer por que existem coisas tristes no mundo?", perguntou Pedro novamente.

A Estrela Sábia brilhou suavemente enquanto respondia:

"Imagine que a vida é como um livro com muitos capítulos. Alguns capítulos são alegres e divertidos, outros são tristes e desafiadores. Mas cada capítulo é importante para a história completa."

"As experiências difíceis nos ensinam coisas que não poderíamos aprender de outra forma. Elas nos ensinam sobre a compaixão, a coragem e a esperança. Quando sentimos dor, aprendemos a valorizar a alegria. Quando enfrentamos desafios, descobrimos nossa força interior."

Pedro pensou por um momento. "Mas ainda assim, é difícil quando as coisas são tristes."

"Sim, é verdade", concordou a Estrela Sábia. "Mas lembre-se: mesmo nas noites mais escuras, as estrelas continuam brilhando. Mesmo nos momentos mais difíceis, ainda há beleza e bondade no mundo."

"E o mais importante, Pedro: você nunca está sozinho. Assim como as estrelas estão conectadas no céu, todos os seres estão conectados por um laço invisível de amor."

Pedro sentiu seu coração se encher de uma paz que ele nunca havia sentido antes. Era como se as palavras da Estrela Sábia tivessem acendido uma pequena luz dentro dele.

A partir daquela noite, Pedro conversou com a Estrela Sábia muitas vezes. Ela respondeu a todas as suas perguntas com sabedoria e amor. E Pedro começou a enxergar o mundo com novos olhos - olhos que viam além da superfície, que enxergavam a beleza mesmo nos momentos difíceis, e que reconheciam o amor que conecta todas as coisas.

À medida que crescia, Pedro compartilhava a sabedoria da estrela com todos ao seu redor. E assim, uma pequena estrela no céu iluminou não apenas um quarto, mas muitos corações, espalhando luz e sabedoria pelo mundo.`,
    imageUrl: peacefulIllustrationImages[2],
    categoryId: "sabedoria",
    categoryName: "Sabedoria",
    ageRange: ageRanges[3], // 6-10 anos
    featured: true,
    createdAt: new Date("2023-07-10")
  },
  {
    title: "O Coelho Generoso",
    excerpt: "Um coelhinho aprende sobre o valor de compartilhar.",
    content: `Na floresta encantada, vivia um coelhinho chamado Tico. Ele tinha uma toca muito confortável e uma horta com as mais deliciosas cenouras, alfaces e couves que já se viu. Tico era muito habilidoso em cultivar vegetais, e sua horta era a mais bonita da floresta.

Mas Tico tinha um pequeno problema: ele não gostava de compartilhar. Quando os outros animais passavam perto de sua horta e admiravam seus vegetais, Tico rapidamente escondia tudo o que podia e dizia que não tinha o suficiente nem para ele mesmo.

Um dia, uma grande seca atingiu a floresta. O riacho secou, as plantas murcharam, e todos os animais começaram a passar fome. Todos, exceto Tico, que tinha um pequeno poço em sua toca e conseguia manter sua horta verde e produtiva.

Os animais da floresta, famintos e sedentos, foram até a toca de Tico pedir ajuda.

"Por favor, Tico", disse o Esquilo Zico, "meus filhotes estão com fome. Você poderia nos dar algumas de suas cenouras?"

"Minha família está com sede", disse a Coruja Olívia. "Poderíamos beber um pouco da água do seu poço?"

Mas Tico, como sempre, negou ajuda. "Não tenho o suficiente nem para mim", disse ele, fechando a porta de sua toca.

Naquela noite, Tico teve um sonho estranho. Ele sonhou que estava perdido em uma floresta desconhecida, com muita fome e sede. Ele bateu na porta de várias tocas, pedindo ajuda, mas todos os animais diziam exatamente o que ele sempre dizia: "Não tenho o suficiente nem para mim."

Tico acordou assustado e com o coração apertado. Pela primeira vez, ele entendeu como os outros animais se sentiam quando ele negava ajuda.

Na manhã seguinte, Tico saiu cedo de sua toca e começou a colher todos os vegetais que podia carregar. Ele encheu uma grande cesta com cenouras, alfaces, couves e muitos outros vegetais. Então, foi até o centro da floresta, onde os animais costumavam se reunir.

"Amigos", disse Tico, com a voz trêmula, "eu trouxe vegetais da minha horta para compartilhar com todos. E a partir de hoje, meu poço está aberto para qualquer animal que esteja com sede."

Os animais ficaram surpresos com a mudança de Tico, mas muito felizes. Eles agradeceram e compartilharam os vegetais entre si, garantindo que cada família recebesse uma parte.

Para surpresa de Tico, muitos animais ofereceram ajuda em troca. O Esquilo Zico ofereceu-se para ajudar a proteger a horta dos insetos. A Coruja Olívia ofereceu-se para vigiar durante a noite. E assim, muitos animais se uniram para ajudar Tico.

Com o tempo, a horta de Tico ficou ainda mais bonita e produtiva do que antes, graças à ajuda de todos. E o mais importante: Tico descobriu que a verdadeira felicidade não está em ter muitas coisas para si, mas em compartilhar o que temos com os outros.

E assim, o coelhinho que antes era conhecido como "Tico, o egoísta", passou a ser chamado carinhosamente de "Tico, o generoso", e seu coração nunca mais se sentiu vazio.`,
    imageUrl: natureAndAnimalsImages[0],
    categoryId: "bondade",
    categoryName: "Bondade",
    ageRange: ageRanges[0], // 3-5 anos
    featured: false,
    createdAt: new Date("2023-08-05")
  },
  {
    title: "Anjinhos da Guarda",
    excerpt: "Como os anjos nos protegem todos os dias.",
    content: `Você já se perguntou se tem alguém especial olhando por você o tempo todo? Alguém que está sempre lá, mesmo quando você não pode ver? Esta é a história dos Anjinhos da Guarda.

Todo menino e toda menina, desde o momento em que nasce, recebe um amigo muito especial: um Anjinho da Guarda. Esse anjinho tem uma missão muito importante: cuidar, proteger e guiar seu pequeno amigo humano em todos os momentos da vida.

Os Anjinhos da Guarda são muito especiais. Eles têm asas macias e brilhantes, mas ninguém consegue vê-las com os olhos comuns. Somente com os olhos do coração podemos sentir sua presença amorosa.

Quando Luísa nasceu, seu Anjinho da Guarda, chamado Luz, estava lá no hospital, sorrindo com amor. Desde aquele dia, Luz nunca deixou o lado de Luísa.

Quando Luísa dava seus primeiros passos, Luz estava lá, com as mãos estendidas, pronto para amparar se ela caísse. Quando Luísa foi para a escola pela primeira vez, Luz sentou-se ao seu lado, acalmando seu coração nervoso.

Um dia, Luísa estava andando de bicicleta quando perdeu o controle em uma descida. Justo quando parecia que ia cair, ela sentiu como se mãos invisíveis a segurassem, ajudando-a a recuperar o equilíbrio. Era Luz, seu fiel Anjinho da Guarda, protegendo-a.

À noite, antes de dormir, Luísa sentia uma paz inexplicável. Era Luz, sentado ao lado de sua cama, cantando canções de amor que só o coração podia ouvir, espantando os medos e trazendo sonhos doces.

Mas os Anjinhos da Guarda não estão lá apenas para nos proteger de perigos físicos. Eles também nos ajudam a fazer escolhas certas e a ser pessoas melhores.

Quando Luísa ficou com raiva de seu amiguinho que quebrou seu brinquedo favorito, Luz sussurrou em seu coração: "Perdoar é um ato de amor. Todos cometemos erros." E Luísa sentiu seu coração se acalmar, conseguindo perdoar seu amigo.

Os Anjinhos da Guarda trabalham junto com Deus para nos manter seguros e nos lembrar de Seu amor infinito. Eles são um presente especial que nos mostra que nunca estamos sozinhos, que sempre somos amados e protegidos.

Então, da próxima vez que você sentir uma brisa suave em seu rosto, ouvir um sussurro gentil em seu coração, ou simplesmente sentir uma paz inexplicável, lembre-se: pode ser seu Anjinho da Guarda, lembrando você de que é amado e nunca está sozinho.

E antes de dormir, você pode conversar com seu Anjinho da Guarda, agradecer por sua proteção durante o dia e pedir que continue a guiá-lo com amor e sabedoria.

Porque os Anjinhos da Guarda estão sempre lá, com suas asas de luz, prontos para abraçar, proteger e amar, em todos os momentos, em todos os lugares.`,
    imageUrl: peacefulIllustrationImages[3],
    categoryId: "protecao",
    categoryName: "Proteção",
    ageRange: ageRanges[2], // 5-9 anos
    featured: false,
    createdAt: new Date("2023-09-12")
  },
  {
    title: "A Árvore Amiga",
    excerpt: "Uma história sobre respeitar e amar a natureza.",
    content: `No quintal da casa do Vovô João, havia uma árvore muito, muito antiga. Era um carvalho majestoso, com galhos fortes que se estendiam como braços acolhedores e folhas que dançavam suavemente com a brisa. Todos a chamavam de "A Árvore Amiga".

Miguel, um menino de 6 anos, adorava passar as férias na casa do Vovô João. E seu lugar favorito era, sem dúvida, debaixo da Árvore Amiga. Ali, ele lia seus livros, brincava com seus brinquedos e, muitas vezes, simplesmente se sentava para ouvir o suave farfalhar das folhas.

Um dia, Vovô João encontrou Miguel abraçado ao tronco da árvore, com o ouvido encostado na casca rugosa.

"O que você está fazendo, Miguel?", perguntou o Vovô, curioso.

"Estou ouvindo a árvore, Vovô", respondeu Miguel com os olhos brilhando. "Ela conta histórias."

Vovô João sorriu. Ele também costumava ouvir a árvore quando era criança. Sentou-se ao lado do neto e começou a contar a história da Árvore Amiga.

"Esta árvore, Miguel, foi plantada pelo meu avô, seu tataravô, há mais de cem anos. Ele a plantou quando nasceu meu pai, seu bisavô. E desde então, ela tem sido amiga de nossa família. Ela nos dá sombra nos dias quentes, abrigo para os pássaros, e beleza em todas as estações."

Miguel olhou para cima, admirando os galhos fortes e as folhas verdejantes. "Ela é muito especial, não é, Vovô?"

"Sim, Miguel, muito especial. As árvores são seres maravilhosos. Elas purificam o ar que respiramos, fornecem casas para muitos animais, e nos dão frutos e madeira. Mas, acima de tudo, elas nos ensinam sobre paciência, força e generosidade."

"Como assim, Vovô?"

"Bem, as árvores crescem lentamente, ano após ano, mostrando que coisas boas levam tempo. Elas resistem a tempestades e invernos rigorosos, mostrando força e resiliência. E elas dão generosamente - sombra, frutos, abrigo - sem pedir nada em troca."

Miguel ficou pensativo. "Então devemos cuidar bem das árvores, não é?"

"Exatamente, meu neto. Devemos respeitar e proteger todas as árvores, todas as plantas, todos os seres da natureza. Eles são nossos amigos e parceiros neste planeta."

Naquela noite, antes de dormir, Miguel decidiu escrever uma carta para a Árvore Amiga:

"Querida Árvore Amiga,

Obrigado por ser tão legal comigo e com minha família. Prometo sempre cuidar de você e de todas as outras árvores e plantas. Você é muito importante e eu te amo muito.

Com carinho, Miguel."

Na manhã seguinte, Miguel, com a ajuda do Vovô João, pendurou a carta em um galho da árvore. E embora a árvore não pudesse responder com palavras, Miguel sentiu que ela sorriu com suas folhas dançando na brisa matinal.

A partir daquele dia, Miguel se tornou um defensor da natureza. Ele aprendeu a plantar sementes, a cuidar de plantas e a respeitar todos os seres vivos. E sempre que alguém perguntava por que ele amava tanto as plantas, ele contava a história da Árvore Amiga, que ensinou a ele o valor de respeitar e amar a natureza.`,
    imageUrl: natureAndAnimalsImages[2],
    categoryId: "natureza",
    categoryName: "Natureza",
    ageRange: ageRanges[1], // 4-8 anos
    featured: false,
    createdAt: new Date("2023-10-18")
  },
  {
    title: "A Família dos Corações Unidos",
    excerpt: "Uma história sobre o amor e união familiar.",
    content: `Em uma pequena casa colorida, no topo de uma colina verde, vivia a Família dos Corações Unidos. Não era uma família como as outras, pois seus membros não tinham o mesmo sangue ou sobrenome. Mas tinham algo muito mais importante: um amor que os unia como uma verdadeira família.

A família era formada por Dona Clara, uma senhora de cabelos brancos e sorriso gentil; Pedro, um menino de 10 anos que Dona Clara havia adotado; Luna, uma gatinha cinza que Pedro havia encontrado abandonada; e Seu Francisco, o vizinho idoso que, após perder sua esposa, passou a almoçar com eles todos os dias.

Cada um deles tinha uma história diferente, um passado único, mas juntos formavam um lar cheio de amor e respeito.

Dona Clara sempre dizia: "Uma família não é feita apenas por quem nasce junto, mas por quem escolhe caminhar junto pela vida."

Um dia, uma forte tempestade atingiu a pequena cidade. O vento uivava, a chuva caía com força, e as luzes piscavam ameaçando apagar. Pedro, que sempre teve medo de tempestades, se encolheu no sofá, abraçando Luna com força.

Dona Clara percebeu o medo no olhar de Pedro e teve uma ideia. "Vamos fazer uma cabana especial", disse ela. Com alguns lençóis, almofadas e cadeiras, eles construíram uma cabana aconchegante na sala. Seu Francisco ajudou, trazendo suas lanternas a pilha, e logo todos estavam dentro da cabana, iluminados pelo brilho suave das lanternas.

"Quando eu era pequena como você, Pedro", começou Dona Clara, "minha avó me ensinou que uma família é como uma cabana em meio à tempestade. Ela nos protege, nos dá calor e segurança quando o mundo lá fora parece assustador."

"Mas nossa cabana é feita só de lençóis", disse Pedro, ainda um pouco assustado com os trovões.

Seu Francisco sorriu. "A cabana que vemos é feita de lençóis, sim. Mas a verdadeira cabana, aquela que realmente nos protege, é feita de amor, respeito e cuidado um pelo outro. É invisível aos olhos, mas muito forte."

Enquanto a tempestade rugia lá fora, dentro da cabana, a Família dos Corações Unidos se sentia segura e quente. Eles contaram histórias, riram juntos e até Luna parecia sorrir, ronronando baixinho no colo de Pedro.

Quando a tempestade finalmente passou e as luzes voltaram, eles saíram da cabana e olharam pela janela. Um lindo arco-íris se estendia no céu, como uma ponte colorida entre as nuvens.

"Veja, Pedro", disse Dona Clara. "Depois da tempestade, sempre vem o arco-íris. É uma promessa de que tudo ficará bem novamente."

Pedro olhou para Dona Clara, para Seu Francisco e para Luna, e sentiu seu coração transbordando de amor. "Acho que entendi", disse ele. "Nossa família é como esse arco-íris. Somos todos diferentes, como as cores, mas juntos formamos algo bonito e especial."

Dona Clara abraçou Pedro com lágrimas nos olhos. "Exatamente, meu querido. Cada um de nós tem sua própria cor, sua própria história, mas juntos formamos algo muito mais bonito do que seríamos separados."

A partir daquele dia, sempre que havia uma tempestade, a Família dos Corações Unidos construía sua cabana especial. E mesmo quando o céu estava limpo, eles sabiam que a verdadeira cabana - aquela feita de amor, respeito e cuidado - estava sempre lá, protegendo-os e unindo seus corações.

Porque, no final das contas, família não é apenas quem tem o mesmo sangue ou sobrenome. Família são aqueles que, não importa a tempestade, escolhem ficar juntos, construindo dia após dia uma cabana de amor que nenhum vento pode derrubar.`,
    imageUrl: childrenReadingImages[3],
    categoryId: "familia",
    categoryName: "Família",
    ageRange: ageRanges[2], // 5-9 anos
    featured: false,
    createdAt: new Date("2023-11-04")
  },
  {
    title: "O Presente Mais Valioso",
    excerpt: "Uma história sobre o verdadeiro significado de dar e receber.",
    content: `Estava chegando o aniversário da Mamãe Ursa, e o pequeno Urso Bruno queria dar a ela o presente mais especial do mundo. Afinal, Mamãe Ursa era a melhor mãe de toda a floresta!

Bruno guardou todas as moedas que ganhou ajudando os outros animais: varrendo as folhas para a Senhora Esquilo, organizando as nozes do Senhor Castor, e entregando cartas para o Coelho Carteiro. Mas quando contou suas moedinhas, percebeu que não era o suficiente para comprar o lindo colar de flores que tinha visto na loja do Senhor Texugo.

Triste e desapontado, Bruno caminhou até o lago para pensar. Lá encontrou seu amigo, o Sábio Corujão, que logo notou sua tristeza.

"O que aconteceu, pequeno Bruno? Por que essa cara tão triste?", perguntou Corujão.

Bruno explicou seu dilema: queria dar um presente especial para sua mãe, mas não tinha dinheiro suficiente.

Corujão ajustou seus óculos e disse com sua voz calma e sábia: "Bruno, o presente mais valioso nem sempre é aquele que custa mais dinheiro. Muitas vezes, é aquele que vem do coração."

"Do coração? Mas como posso dar um presente que vem do coração?", perguntou Bruno, confuso.

"Pense no que você sabe fazer bem, e no que faria sua mãe feliz. Às vezes, dar nosso tempo, nosso talento ou nosso esforço vale muito mais do que qualquer objeto que poderíamos comprar."

Bruno refletiu sobre as palavras do Corujão. O que ele sabia fazer bem? O que faria sua mãe feliz?

Então, uma ideia brilhou em sua mente. Bruno agradeceu ao Corujão e correu para casa, cheio de entusiasmo. Nos dias seguintes, sempre que Mamãe Ursa saía para procurar mel ou frutas, Bruno trabalhava secretamente em seu presente especial.

No dia do aniversário, Bruno acordou cedo, antes de sua mãe. Preparou um café da manhã simples com frutas frescas que ele mesmo havia colhido e colocou uma flor ao lado do prato. Quando Mamãe Ursa entrou na cozinha, Bruno cantou "Parabéns" com todo seu coração.

"Mãe, não pude comprar um presente caro, mas fiz algo especial para você", disse Bruno, um pouco nervoso.

Ele levou sua mãe até a sala, onde havia montado um pequeno 'livro' feito de folhas grandes, costuradas com fibras de plantas. Em cada página, Bruno havia desenhado uma memória especial que eles compartilharam: o dia em que aprendeu a pescar, a vez em que ficou doente e ela cuidou dele a noite toda, as histórias que ela contava antes de dormir, os abraços calorosos quando ele estava triste.

Na última página, Bruno havia escrito com sua letra infantil: "Obrigado, mamãe, por todo o seu amor. Eu te amo até a lua e de volta!"

Mamãe Ursa folheou o livro com lágrimas nos olhos. Quando chegou à última página, abraçou Bruno com tanto amor que ele sentiu seu coração aquecido.

"Bruno, este é o presente mais valioso que já recebi em toda a minha vida", disse ela, emocionada. "Porque veio do seu coração e me mostra que você valoriza os momentos que passamos juntos. Nenhum colar ou presente comprado poderia me fazer tão feliz quanto este livro de memórias."

Naquele dia, Bruno aprendeu que os presentes mais valiosos são aqueles que vêm do coração, feitos com amor e carinho. Não é o preço ou o tamanho que importa, mas o sentimento e o pensamento por trás deles.

E sempre que Mamãe Ursa tinha um dia difícil, ela olhava para o livro de memórias feito por Bruno, e seu coração se enchia novamente de alegria e gratidão pelo presente mais valioso de todos: o amor de seu filho.`,
    imageUrl: childrenReadingImages[2],
    categoryId: "amor",
    categoryName: "Amor",
    ageRange: ageRanges[0], // 3-5 anos
    featured: false,
    createdAt: new Date("2023-12-15")
  }
];

// Initial testimonials
export const initialTestimonials: Omit<Testimonial, "id">[] = [
  {
    name: "Ana Paula",
    relation: "Mãe da Mariana, 6 anos",
    content: "Minha filha adora as estórias do STELOOS! Elas ensinam valores importantes de uma forma que ela entende e gosta."
  },
  {
    name: "Roberto",
    relation: "Pai do Pedro, 5 anos",
    content: "As histórias são perfeitas para a hora de dormir. Meu filho sempre pede por mais uma! Adoro como elas passam mensagens positivas."
  },
  {
    name: "Juliana",
    relation: "Professora e mãe",
    content: "Como educadora, recomendo STELOOS para todas as famílias. As estórias são educativas e as ilustrações são lindas!"
  }
];
