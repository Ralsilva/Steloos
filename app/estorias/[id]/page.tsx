'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import PortugueseLayout from '../../components/PortugueseLayout'

// Dados das estórias
const estorias = {
  1: {
    title: "A Estrelinha que Iluminava o Caminho",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "5 min",
    content: [
      "Era uma vez uma pequena estrela chamada Lumi. Ela vivia no céu junto com milhares de outras estrelas, mas sempre se sentiu um pouco diferente. Enquanto as outras estrelas brilhavam juntas em constelações, Lumi preferia brilhar sozinha, observando o mundo abaixo.",
      "Todas as noites, Lumi observava uma pequena vila onde vivia uma menina chamada Sofia. Sofia tinha medo do escuro e sempre olhava pela janela antes de dormir, procurando por Lumi no céu. A pequena estrela brilhava com toda sua força para que Sofia pudesse vê-la e se sentir segura.",
      "Um dia, uma grande tempestade cobriu o céu com nuvens escuras. Lumi sabia que Sofia estaria com medo, pois não conseguiria ver sua estrela amiga. Determinada a ajudar, Lumi decidiu fazer algo que nenhuma estrela jamais havia feito: descer até a Terra.",
      "Ela desceu como um pequeno raio de luz através das nuvens e pousou no peitoril da janela de Sofia. A menina ficou maravilhada ao ver sua amiga estrela tão perto! Lumi explicou que havia descido para garantir que Sofia não tivesse medo durante a tempestade.",
      "\"Mas agora você não está mais no céu com as outras estrelas\", disse Sofia preocupada.",
      "\"Às vezes precisamos deixar nosso lugar de conforto para ajudar quem amamos\", respondeu Lumi com um sorriso brilhante.",
      "Sofia aprendeu que o amor verdadeiro significa estar presente quando alguém precisa, mesmo que isso signifique sair da nossa zona de conforto. E Lumi descobriu que seu verdadeiro propósito era iluminar o caminho daqueles que amava.",
      "Depois que a tempestade passou, Lumi voltou para o céu, mas sempre que Sofia olhava para cima, a pequena estrela piscava de um jeito especial, como um código secreto entre amigas. E Sofia nunca mais teve medo do escuro, pois sabia que o amor verdadeiro sempre encontra um caminho para brilhar, mesmo nas noites mais escuras."
    ],
    moral: "O amor verdadeiro significa estar presente para aqueles que amamos, mesmo quando isso exige sacrifícios. Assim como Lumi deixou o céu para confortar Sofia, devemos estar dispostos a sair de nossa zona de conforto para ajudar os outros.",
    color: "#F59E0B"
  },
  12: {
    title: "O Coração da Floresta",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "6 min",
    content: [
      "No centro da floresta mais antiga do mundo, crescia uma árvore diferente de todas as outras. Enquanto as demais árvores cresciam em direção ao céu, competindo por luz solar, esta árvore, chamada Coração, crescia em todas as direções, estendendo seus galhos como se quisesse abraçar toda a floresta.",
      "Os animais adoravam o Coração da Floresta. Seus galhos eram perfeitos para ninhos, suas raízes criavam abrigos seguros, e sua sombra oferecia descanso nos dias quentes. Mas o que tornava o Coração verdadeiramente especial era algo invisível aos olhos.",
      "Dizia-se que a árvore podia sentir o amor de todos os seres da floresta e, de alguma forma misteriosa, conectava todos eles. Quando um animal estava triste ou ferido, o Coração parecia saber, e suas folhas sussurravam canções de conforto que só aquele animal podia entender.",
      "Um dia, chegaram à floresta homens com grandes máquinas barulhentas. Eles começaram a derrubar árvores uma após a outra. Os animais, assustados, fugiram para o centro da floresta, buscando refúgio junto ao Coração.",
      "\"O que faremos?\", perguntou um pequeno esquilo tremendo de medo. \"Eles vão destruir nossa casa!\"",
      "O velho urso, que havia vivido mais tempo que qualquer outro animal da floresta, falou com voz grave: \"Ao longo dos anos, o Coração nos protegeu e nos amou. Agora, devemos protegê-lo.\"",
      "Assim, os animais se reuniram e, juntos, criaram um plano. Não era um plano de ataque ou violência, mas um plano nascido do amor que sentiam pela floresta e pelo Coração.",
      "Quando os homens se aproximaram do centro da floresta, encontraram algo extraordinário. Centenas de animais estavam reunidos em torno da grande árvore, não fugindo ou atacando, mas simplesmente presentes, olhando para os homens com olhos que não mostravam medo, apenas uma profunda conexão com aquele lugar.",
      "O líder dos homens, um senhor de cabelos grisalhos, sentiu algo estranho ao olhar para a cena. Era como se pudesse sentir o amor que fluía entre os animais e a árvore. Lembrou-se de quando era criança e brincava nesta mesma floresta, sentindo-se parte de algo maior.",
      "\"Parem as máquinas\", ordenou ele, para surpresa de seus companheiros. \"Esta parte da floresta permanecerá intocada.\"",
      "Nos anos que se seguiram, o Coração da Floresta continuou a crescer e a amar. Os homens, inspirados pelo que haviam testemunhado, criaram uma reserva natural para proteger toda a floresta. E o mais surpreendente: muitos começaram a visitar o Coração, sentando-se sob seus galhos para sentir a mesma conexão que os animais sentiam.",
      "O amor do Coração da Floresta, que antes era compartilhado apenas entre os animais, agora tocava também os corações humanos, lembrando a todos que o amor verdadeiro não conhece barreiras entre espécies ou formas de vida – ele simplesmente flui, conecta e transforma."
    ],
    moral: "O amor verdadeiro transcende diferenças e tem o poder de unir seres de todos os tipos em uma conexão profunda com a natureza e entre si. Quando agimos a partir do amor, podemos proteger o que é precioso e inspirar mudanças positivas mesmo nos corações mais distantes.",
    color: "#F59E0B"
  },
  18: {
    title: "A Menina e o Pássaro Ferido",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "5 min",
    content: [
      "Numa pequena casa à beira de um bosque, vivia uma menina chamada Lia. Ela tinha um coração gentil e adorava observar os pássaros que visitavam o jardim de sua casa todas as manhãs.",
      "Um dia chuvoso de outono, Lia encontrou um pequeno pássaro caído sob a janela de seu quarto. Suas penas azuis estavam encharcadas, e uma de suas asas parecia machucada. Com muito cuidado, Lia o recolheu em suas mãos.",
      "\"Não tenha medo, pequenino\", sussurrou ela. \"Vou cuidar de você até que possa voar novamente.\"",
      "Lia preparou uma caixinha aconchegante com panos macios e colocou o pássaro dentro. Pesquisou em seus livros sobre como cuidar de pássaros feridos e seguiu todas as instruções com dedicação. Deu-lhe água e sementes, e até aprendeu a fazer uma mistura especial para pássaros doentes.",
      "Nos primeiros dias, o pássaro, que Lia chamou de Azul, estava assustado e tentava se esconder quando ela se aproximava. Mas Lia era paciente. Falava com ele suavemente, contava histórias e até cantava canções de ninar quando o colocava para dormir.",
      "Aos poucos, Azul começou a confiar em Lia. Ele não mais se encolhia quando ela chegava perto e até começou a cantar em resposta às suas canções. A asa ferida estava sarando, e suas penas recuperavam o brilho intenso de azul.",
      "A mãe de Lia observava a dedicação da filha com o passarinho e um dia comentou: \"Você realmente ama esse pássaro, não é?\"",
      "Lia pensou por um momento. \"Sim, eu o amo. E acho que é por isso que ele está melhorando tão rápido.\"",
      "\"Como assim?\", perguntou a mãe, curiosa.",
      "\"Bem, li em um dos meus livros que os animais podem sentir nossos sentimentos. Se sentimos medo, eles sentem medo. Se sentimos amor, eles sentem amor. Acho que Azul sabe que o amo e quero que ele fique bem, e isso está ajudando-o a se curar.\"",
      "A mãe sorriu, impressionada com a sabedoria da filha.",
      "Finalmente, chegou o dia em que Azul estava completamente recuperado. Suas asas estavam fortes, e ele voava pela casa de Lia com confiança. Lia sabia que era hora de deixá-lo partir, embora seu coração se apertasse ao pensar nisso.",
      "Numa manhã ensolarada, Lia levou Azul para o jardim. Com lágrimas nos olhos, mas um sorriso no rosto, ela abriu as mãos. \"Você está livre agora, Azul. Voe e seja feliz.\"",
      "Para sua surpresa, Azul não voou imediatamente. Ele ficou nas mãos de Lia, olhando para ela como se quisesse memorizar seu rosto. Então, deu um pequeno salto, pousou no ombro dela e cantou a mais bela melodia que Lia já havia ouvido.",
      "Só então Azul abriu suas asas e voou para o céu azul. Mas ele não foi embora para sempre. Todas as manhãs, Azul voltava ao jardim de Lia, trazendo às vezes uma pena azul ou uma pequena flor, como se fossem presentes para agradecer pelo amor que havia recebido."
    ],
    moral: "O amor e a compaixão têm um poder curativo que transcende palavras e até mesmo espécies. Quando cuidamos de alguém com amor verdadeiro, criamos laços que permanecem mesmo quando os caminhos se separam. E às vezes, o maior ato de amor é dar liberdade a quem amamos.",
    color: "#F59E0B"
  },
  25: {
    title: "O Presente Especial",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "4 min",
    content: [
      "O aniversário da vovó Maria estava chegando, e seu neto Mateus, de apenas sete anos, queria dar-lhe um presente muito especial. Ele sabia que a vovó não precisava de mais coisas – sua casa já estava cheia de objetos acumulados ao longo de seus oitenta anos de vida.",
      "\"O que posso dar para a vovó que seja realmente especial?\", perguntou Mateus à sua mãe enquanto caminhavam pelo shopping.",
      "\"Os melhores presentes nem sempre são coisas que podemos comprar\", respondeu a mãe com um sorriso gentil. \"Pense no que a vovó realmente valoriza.\"",
      "Mateus pensou muito. Ele sabia que a vovó adorava suas histórias da infância, sempre pedia que ele cantasse para ela, e seus olhos brilhavam quando ele mostrava seus desenhos. Foi então que teve uma ideia brilhante.",
      "Durante uma semana inteira, Mateus trabalhou secretamente em seu quarto. Recortou papéis coloridos, desenhou, escreveu com sua letra infantil, e até gravou pequenos áudios no celular emprestado de sua mãe.",
      "No dia do aniversário, enquanto todos davam à vovó Maria presentes embrulhados em papel brilhante – um xale novo, um perfume, um livro – Mateus entregou-lhe uma simples caixa de sapatos decorada com corações de papel.",
      "\"O que temos aqui?\", perguntou a vovó com curiosidade, abrindo cuidadosamente a caixa.",
      "Dentro havia um \"cupom\" feito à mão para cada dia do mês seguinte. \"Cupom para uma história antes de dormir\", dizia um. \"Cupom para um passeio no parque\", dizia outro. \"Cupom para um desenho especial\", \"Cupom para uma canção\", e assim por diante.",
      "Junto aos cupons, havia um pequeno caderno onde Mateus havia escrito, com a ajuda de sua mãe: \"Querida Vovó, este é um mês de amor especial só para você. Cada dia tem um momento só nosso. Com amor, Mateus.\"",
      "Os olhos da vovó Maria se encheram de lágrimas. Ela abraçou o neto com força e sussurrou: \"Em todos os meus oitenta anos, nunca recebi um presente tão precioso.\"",
      "Durante o mês seguinte, vovó Maria usou um cupom a cada dia. Ela e Mateus leram histórias juntos, fizeram biscoitos, plantaram flores no jardim, e compartilharam muitas risadas e abraços.",
      "Quando o último cupom foi usado, vovó Maria disse a Mateus: \"Sabe, querido, os presentes que compramos eventualmente quebram ou são esquecidos. Mas as memórias que criamos juntos este mês viverão para sempre em meu coração. Este foi verdadeiramente um presente de amor.\"",
      "Mateus sorriu, compreendendo pela primeira vez que o amor não está nas coisas que damos, mas no tempo que compartilhamos e nas memórias que criamos juntos."
    ],
    moral: "Os presentes mais valiosos não são aqueles que custam mais dinheiro, mas aqueles que são dados com amor e atenção. O tempo que dedicamos às pessoas que amamos cria memórias preciosas que duram muito mais que qualquer objeto material.",
    color: "#F59E0B"
  },
  33: {
    title: "A Carta de Amor",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "5 min",
    content: [
      "Na pequena cidade de Vale Sereno, vivia um senhor chamado Antônio. Aos 85 anos, ele era conhecido por sua rotina impecável: todas as manhãs, exatamente às 9 horas, caminhava até a caixa de correio da praça central, depositava uma carta e voltava para casa.",
      "As pessoas da cidade observavam aquele ritual há anos, mas ninguém sabia para quem eram as cartas. Alguns especulavam que era para um filho distante, outros achavam que era para um amigo de guerra. O carteiro, que respeitava a privacidade de todos, apenas confirmava que as cartas eram sempre endereçadas à mesma pessoa: Helena.",
      "Clara, uma jovem jornalista que havia se mudado recentemente para a cidade, ficou intrigada com aquela história. Após semanas observando o senhor Antônio em sua rotina, ela finalmente criou coragem para abordá-lo.",
      "\"Bom dia, senhor Antônio\", disse ela gentilmente, enquanto ele se sentava em um banco da praça após depositar sua carta. \"Sou Clara, nova na cidade. Espero não estar sendo intrometida, mas não pude deixar de notar sua dedicação em enviar cartas todos os dias.\"",
      "O senhor Antônio sorriu, seus olhos ganhando um brilho jovial. \"Não é intromissão quando há genuíno interesse\", respondeu ele. \"Sente-se, se quiser ouvir uma história de amor que já dura 63 anos.\"",
      "Clara sentou-se, e o senhor Antônio começou a contar sua história. Helena era sua esposa, com quem havia sido casado por 50 anos antes de ela falecer. No primeiro ano de casamento, quando Antônio viajou a trabalho por duas semanas, escreveu uma carta para Helena todos os dias.",
      "\"Quando voltei\", contou ele, \"Helena me disse que aquelas cartas foram o maior presente que já havia recebido. Não pelos grandes gestos românticos que eu descrevia, mas porque cada palavra mostrava que, mesmo distante, meus pensamentos estavam com ela.\"",
      "Anos depois, quando Helena foi diagnosticada com uma doença degenerativa que afetaria gradualmente sua memória, Antônio fez uma promessa: escreveria para ela todos os dias, para que nunca esquecesse do amor deles.",
      "\"Nos últimos anos de sua vida\", continuou ele com a voz embargada, \"Helena às vezes não se lembrava do meu nome ou de onde estávamos. Mas quando eu lia minhas cartas para ela, seus olhos brilhavam com reconhecimento. Era como se as palavras alcançassem uma parte dela que a doença não podia tocar.\"",
      "Clara tinha lágrimas nos olhos. \"E agora, senhor Antônio? Para onde vão essas cartas?\"",
      "\"Para o mesmo lugar de sempre\", respondeu ele com um sorriso sereno. \"Para Helena. Prometi escrever todos os dias, e uma promessa de amor não termina quando a pessoa parte. Cada carta é uma conversa com ela, contando sobre meu dia, sobre as pequenas alegrias que encontro, sobre como ainda a vejo nas estrelas, nas flores do jardim, no pôr do sol.\"",
      "\"O carteiro sabe?\", perguntou Clara, emocionada.",
      "\"Sim\", respondeu Antônio. \"No início, ele tentou me explicar gentilmente que as cartas não poderiam ser entregues. Mas quando entendeu o significado delas para mim, passou a guardá-las com cuidado. No meu aniversário de 80 anos, ele me surpreendeu: havia encadernado todas as cartas dos últimos anos em um livro. 'Sua história de amor merece ser preservada', disse ele.\"",
      "Clara entendeu naquele momento que estava diante do amor em sua forma mais pura e duradoura. Não era apenas sobre lembrar de alguém que partiu, mas sobre manter viva uma conexão que transcendia o tempo e o espaço.",
      "\"Sabe, Clara\", concluiu o senhor Antônio, \"muitas pessoas pensam que o amor é sobre grandes gestos ou emoções intensas. Mas o verdadeiro amor é como escrever uma carta todos os dias – é constante, paciente, e encontra beleza nas coisas simples. É uma escolha que fazemos a cada amanhecer, mesmo quando o destinatário não pode mais responder.\""
    ],
    moral: "O amor verdadeiro transcende o tempo, a distância e até mesmo a morte. Não se trata apenas de sentimentos intensos, mas de um compromisso diário de manter viva a conexão com quem amamos, através de pequenos gestos de lembrança e dedicação. As promessas feitas por amor têm um valor que vai além das circunstâncias físicas.",
    color: "#F59E0B"
  },
  2: {
    title: "O Lago da Tranquilidade",
    category: "Paz",
    categoryLink: "/categorias/paz",
    readTime: "6 min",
    content: [
      "No coração da floresta, existia um lago especial conhecido como o Lago da Tranquilidade. Suas águas eram tão calmas e cristalinas que refletiam perfeitamente o céu acima, criando a ilusão de que o céu e a terra se encontravam naquele lugar mágico.",
      "Os animais da floresta visitavam o lago quando se sentiam agitados ou preocupados. Havia algo nas águas que acalmava seus corações e trazia paz às suas mentes.",
      "Um dia, um jovem cervo chamado Rápido chegou correndo ao lago. Ele era conhecido por ser o animal mais agitado da floresta, sempre correndo de um lado para o outro, nunca parando para descansar.",
      "\"Por que todos vêm a este lago?\", perguntou Rápido, ainda andando de um lado para outro na margem. \"É apenas água! Não vejo nada de especial.\"",
      "Uma velha tartaruga que descansava próxima sorriu gentilmente. \"O segredo do lago não está na água, mas em como você a observa\", disse ela. \"Sente-se e olhe com calma.\"",
      "Rápido revirou os olhos, mas decidiu tentar. Ele se sentou à beira do lago e forçou-se a ficar parado, olhando para a água. No início, tudo o que via era seu próprio reflexo agitado.",
      "Mas aos poucos, conforme sua respiração desacelerava, a água também se acalmava. O reflexo ficava mais claro, e Rápido começou a notar coisas que nunca havia visto antes: as pequenas ondulações criadas por um peixe nadando, o delicado pouso de uma libélula na superfície, as nuvens que se moviam lentamente no reflexo do céu.",
      "\"Estou vendo!\", exclamou Rápido, mas desta vez sua voz era suave. \"O lago mostra tudo com clareza quando estou calmo.\"",
      "A tartaruga sorriu. \"A paz não é a ausência de movimento, mas a presença de harmonia. O lago nos ensina que quando acalmamos nossa mente, podemos ver o mundo com mais clareza.\"",
      "A partir daquele dia, Rápido visitava o lago regularmente. Ele ainda corria pela floresta, mas agora sabia como encontrar a paz dentro de si mesmo quando precisava. E quando outros animais pareciam agitados, ele os guiava até o Lago da Tranquilidade, onde podiam redescobrir a harmonia em seus corações."
    ],
    moral: "A verdadeira paz não vem de mudar o mundo ao nosso redor, mas de encontrar a tranquilidade dentro de nós mesmos. Quando acalmamos nossa mente, podemos ver a vida com mais clareza e encontrar harmonia mesmo em situações desafiadoras.",
    color: "#3B82F6"
  },
  8: {
    title: "O Presente Mais Valioso",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "4 min",
    content: [
      "Estava chegando o aniversário da Mamãe Ursa, e o pequeno Urso Bruno queria dar a ela o presente mais especial do mundo. Afinal, Mamãe Ursa era a melhor mãe de toda a floresta!",
      "Bruno guardou todas as moedas que ganhou ajudando os outros animais: varrendo as folhas para a Senhora Esquilo, organizando as nozes do Senhor Castor, e entregando cartas para o Coelho Carteiro. Mas quando contou suas moedinhas, percebeu que não era o suficiente para comprar o lindo colar de flores que tinha visto na loja do Senhor Texugo.",
      "Triste e desapontado, Bruno caminhou até o lago para pensar. Lá encontrou seu amigo, o Sábio Corujão, que logo notou sua tristeza.",
      "\"O que aconteceu, pequeno Bruno? Por que essa cara tão triste?\", perguntou Corujão.",
      "Bruno explicou seu dilema: queria dar um presente especial para sua mãe, mas não tinha dinheiro suficiente.",
      "Corujão ajustou seus óculos e disse com sua voz calma e sábia: \"Bruno, o presente mais valioso nem sempre é aquele que custa mais dinheiro. Muitas vezes, é aquele que vem do coração.\"",
      "\"Do coração? Mas como posso dar um presente que vem do coração?\", perguntou Bruno, confuso.",
      "\"Pense no que você sabe fazer bem, e no que faria sua mãe feliz. Às vezes, dar nosso tempo, nosso talento ou nosso esforço vale muito mais do que qualquer objeto que poderíamos comprar.\"",
      "Bruno refletiu sobre as palavras do Corujão. O que ele sabia fazer bem? O que faria sua mãe feliz?",
      "Então, uma ideia brilhou em sua mente. Bruno agradeceu ao Corujão e correu para casa, cheio de entusiasmo. Nos dias seguintes, sempre que Mamãe Ursa saía para procurar mel ou frutas, Bruno trabalhava secretamente em seu presente especial.",
      "No dia do aniversário, Bruno acordou cedo, antes de sua mãe. Preparou um café da manhã simples com frutas frescas que ele mesmo havia colhido e colocou uma flor ao lado do prato. Quando Mamãe Ursa entrou na cozinha, Bruno cantou \"Parabéns\" com todo seu coração.",
      "\"Mãe, não pude comprar um presente caro, mas fiz algo especial para você\", disse Bruno, um pouco nervoso.",
      "Ele levou sua mãe até a sala, onde havia montado um pequeno 'livro' feito de folhas grandes, costuradas com fibras de plantas. Em cada página, Bruno havia desenhado uma memória especial que eles compartilharam: o dia em que aprendeu a pescar, a vez em que ficou doente e ela cuidou dele a noite toda, as histórias que ela contava antes de dormir, os abraços calorosos quando ele estava triste.",
      "Na última página, Bruno havia escrito com sua letra infantil: \"Obrigado, mamãe, por todo o seu amor. Eu te amo até a lua e de volta!\"",
      "Mamãe Ursa folheou o livro com lágrimas nos olhos. Quando chegou à última página, abraçou Bruno com tanto amor que ele sentiu seu coração aquecido.",
      "\"Bruno, este é o presente mais valioso que já recebi em toda a minha vida\", disse ela, emocionada. \"Porque veio do seu coração e me mostra que você valoriza os momentos que passamos juntos. Nenhum colar ou presente comprado poderia me fazer tão feliz quanto este livro de memórias.\"",
      "Naquele dia, Bruno aprendeu que os presentes mais valiosos são aqueles que vêm do coração, feitos com amor e carinho. Não é o preço ou o tamanho que importa, mas o sentimento e o pensamento por trás deles.",
      "E sempre que Mamãe Ursa tinha um dia difícil, ela olhava para o livro de memórias feito por Bruno, e seu coração se enchia novamente de alegria e gratidão pelo presente mais valioso de todos: o amor de seu filho."
    ],
    moral: "Os presentes mais valiosos não são aqueles que custam mais dinheiro, mas aqueles que são feitos com amor e dedicação. Quando damos algo que vem do coração, estamos compartilhando uma parte de nós mesmos, e isso é o que realmente importa.",
    color: "#F59E0B"
  },
  10: {
    title: "O Amor de Todas as Mães",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "6 min",
    content: [
      "No grande carvalho que ficava no centro do parque da cidade, uma pequena família de esquilos tinha acabado de aumentar. Mamãe Esquilo havia dado à luz três filhotinhos: Caco, Tico e Nina. Eles eram pequeninos, sem pelo, com olhinhos ainda fechados.",
      "Todo dia, pela manhã, Tomás e sua mãe caminhavam pelo parque a caminho da escola. Tomás tinha 8 anos e adorava observar os animais. Foi ele quem primeiro notou a família de esquilos.",
      "\"Olha, mamãe! Bebês esquilos!\", exclamou, apontando para o ninho feito de folhas e gravetos no tronco da árvore.",
      "A mãe de Tomás sorriu. \"Sim, querido. É uma família nova. Vamos observar de longe para não assustá-los.\"",
      "Dia após dia, Tomás e sua mãe observavam a família de esquilos. Viram quando os filhotes começaram a desenvolver pelo, quando abriram os olhinhos pela primeira vez, quando começaram a se aventurar para fora do ninho.",
      "\"Mamãe, a Mamãe Esquilo nunca sai de perto dos filhotes, você percebeu?\", comentou Tomás um dia.",
      "\"Sim, filho. Ela está protegendo seus bebês. O amor de mãe é assim, em todas as espécies.\"",
      "Tomás ficou pensativo. Ele começou a prestar mais atenção nas outras mães do parque – não só as humanas, mas as de todas as espécies.",
      "Ele viu uma mamãe pato liderando uma fileira de patinhos pela lagoa, sempre atenta a qualquer perigo. Viu uma gata cuidadosamente carregando seu filhote pelo pescoço para um lugar mais seguro. Observou pássaros incansavelmente levando comida para seus filhotes no ninho.",
      "Um dia, Tomás decidiu fazer um projeto especial para a escola sobre \"O Amor das Mães na Natureza\". Com a ajuda de sua própria mãe, ele fotografou as diferentes mães do parque cuidando de seus filhotes.",
      "Na manhã em que Tomás iria apresentar seu projeto, algo triste aconteceu. Ao passarem pelo carvalho, ele e sua mãe viram que um dos filhotes de esquilo – o pequeno Caco – havia caído do ninho e estava no chão, chorando por ajuda.",
      "\"Mamãe, temos que ajudá-lo!\", exclamou Tomás, preocupado.",
      "\"Espere, Tomás. Vamos ver o que a mamãe esquilo vai fazer.\"",
      "Eles se esconderam atrás de um arbusto e observaram. Mamãe Esquilo desceu rapidamente do carvalho, agarrou Caco gentilmente com a boca e começou a subir de volta. Mas era uma subida difícil com o peso extra.",
      "De repente, algo incrível aconteceu. Outros esquilos adultos apareceram e formaram uma espécie de escada viva no tronco da árvore. Mamãe Esquilo utilizou essa escada para subir mais facilmente com Caco até o ninho, onde os outros filhotes esperavam.",
      "Tomás ficou maravilhado. \"Você viu isso, mamãe? Eles trabalham juntos como uma família! Como... como nós!\"",
      "A mãe de Tomás abraçou-o com ternura. \"Sim, querido. O amor maternal e familiar está presente em toda a natureza. É um dos laços mais fortes que existem.\"",
      "Naquele dia, na escola, Tomás apresentou seu projeto com entusiasmo, incluindo a emocionante história do resgate de Caco. Seus colegas e professora ficaram encantados.",
      "\"O que aprendi\", concluiu Tomás, \"é que não importa se somos pessoas, esquilos, patos ou gatos. O amor de uma mãe por seus filhos é sempre especial e poderoso. É o amor que cuida, protege e ensina. É o amor que nos faz crescer fortes e seguros.\"",
      "Ao voltar para casa naquele dia, Tomás deu um abraço extra longo em sua mãe.",
      "\"Por que esse abraço tão especial?\", ela perguntou, sorrindo.",
      "\"Porque você é minha Mamãe Humana, e seu amor por mim é tão especial quanto o da Mamãe Esquilo pelos filhotes dela.\"",
      "A mãe de Tomás sentiu lágrimas de emoção nos olhos.",
      "\"E eu também aprendi\", continuou Tomás, \"que assim como os esquilos se ajudam, nós humanos também precisamos cuidar uns dos outros. Porque o amor não é só de mãe para filho. É de todos para todos.\"",
      "E naquele momento, olhando para o grande carvalho onde a família de esquilos descansava em segurança, Tomás sentiu que havia entendido uma das maiores verdades da vida: o amor, em todas as suas formas, é o que une todas as criaturas do mundo."
    ],
    moral: "O amor maternal é uma força universal que transcende espécies e conecta todos os seres vivos. Ele nos ensina sobre proteção, cuidado e a importância da comunidade. Quando reconhecemos esse amor em todas as suas formas, aprendemos a valorizar e respeitar todas as relações na natureza.",
    color: "#F59E0B"
  },
  9: {
    title: "A Árvore da Paz",
    category: "Paz",
    categoryLink: "/categorias/paz",
    readTime: "5 min",
    content: [
      "No centro de uma vila que vivia em constante conflito, crescia uma árvore muito antiga. Ninguém sabia exatamente quando ela havia sido plantada, mas todos a chamavam de Árvore da Paz.",
      "A lenda dizia que, há muitos anos, dois líderes de tribos inimigas haviam se encontrado sob aquela árvore para discutir um tratado de paz. Durante a discussão, uma tempestade começou, forçando-os a permanecer juntos sob a proteção dos galhos da árvore por três dias e três noites.",
      "Quando a tempestade finalmente passou, os dois líderes haviam se tornado amigos. Eles plantaram sementes ao redor da árvore para simbolizar o crescimento da paz entre seus povos.",
      "Com o passar dos anos, a vila cresceu ao redor da árvore, mas os habitantes foram esquecendo a lição de paz. Disputas por terras, água e outros recursos tornaram-se comuns. As pessoas discutiam por qualquer motivo, e a harmonia que uma vez existiu parecia perdida para sempre.",
      "Uma menina chamada Maia, que tinha apenas dez anos, era diferente dos outros habitantes. Ela gostava de sentar-se sob a Árvore da Paz e ler livros ou simplesmente observar as folhas balançando com o vento.",
      "Um dia, enquanto estava sentada sob a árvore, Maia notou algo estranho: sempre que duas pessoas com raiva se aproximavam da árvore, suas vozes se acalmavam, e elas pareciam menos irritadas. Era como se a árvore emitisse uma energia invisível que acalmava os corações agitados.",
      "Intrigada, Maia começou a convidar pessoas que estavam brigando para conversarem sob a árvore. \"Venham resolver isso sob a Árvore da Paz\", dizia ela. \"Vocês vão se sentir melhor lá.\"",
      "No início, as pessoas riam da sugestão da menina, mas aos poucos, algumas começaram a aceitar. Para sua surpresa, descobriram que era mais fácil conversar calmamente e encontrar soluções quando estavam sob os galhos da velha árvore.",
      "A notícia se espalhou, e logo a Árvore da Paz tornou-se o local oficial para resolução de conflitos na vila. As pessoas redescobriam a antiga lenda e compreendiam que a paz não era apenas a ausência de conflito, mas a presença de compreensão e respeito mútuo.",
      "Maia cresceu e se tornou a guardiã da Árvore da Paz, ensinando às novas gerações que, assim como uma árvore precisa de raízes fortes para crescer, a paz precisa de compreensão, paciência e diálogo para florescer."
    ],
    moral: "A paz verdadeira não é imposta, mas cultivada através do diálogo, compreensão e respeito mútuo. Assim como uma árvore, ela precisa de cuidados constantes para crescer e florescer, beneficiando a todos com sua sombra protetora.",
    color: "#3B82F6"
  },
  14: {
    title: "O Jardim Silencioso",
    category: "Paz",
    categoryLink: "/categorias/paz",
    readTime: "6 min",
    content: [
      "Na agitada cidade de Ruídopolis, onde buzinas, sirenes e o barulho constante das máquinas preenchiam o ar, existia um lugar diferente de todos os outros: o Jardim Silencioso.",
      "Escondido entre prédios altos, protegido por um muro coberto de hera, o jardim era um oásis de tranquilidade. Dizia-se que qualquer pessoa que entrasse ali, por mais agitada ou estressada que estivesse, encontraria paz interior.",
      "O guardião do jardim era um senhor idoso chamado Theo. Ele cuidava das plantas com dedicação e recebia os visitantes com um sorriso gentil, mas nunca falava. Na entrada do jardim, havia apenas uma placa com os dizeres: \"Deixe o ruído do mundo lá fora. Aqui dentro, escute o silêncio.\"",
      "Lucas era um menino de doze anos que vivia em Ruídopolis. Ele era conhecido por ser inquieto e barulhento, sempre falando alto, correndo e incapaz de ficar parado por mais de alguns minutos. Seus professores frequentemente reclamavam que ele não conseguia se concentrar, e seus pais estavam preocupados com seu comportamento agitado.",
      "Um dia, a professora de Lucas propôs uma tarefa incomum: cada aluno deveria visitar o Jardim Silencioso e depois escrever sobre a experiência. Lucas achou a ideia entediante, mas não tinha escolha.",
      "Quando chegou ao jardim, foi recebido pelo silencioso sorriso de Theo, que apontou para a placa na entrada. Lucas revirou os olhos, mas entrou mesmo assim.",
      "Os primeiros minutos foram agonizantes para o menino. O silêncio parecia ensurdecedor, e ele sentia uma necessidade quase física de fazer barulho. Mas, seguindo as regras, conteve-se e começou a caminhar pelos caminhos de pedra do jardim.",
      "Aos poucos, algo estranho começou a acontecer. Lucas percebeu que, no silêncio, podia ouvir coisas que nunca havia notado antes: o suave zumbido das abelhas, o delicado farfalhar das folhas ao vento, o canto distante dos pássaros. Era como se um mundo inteiro de sons sutis existisse por baixo do barulho ao qual estava acostumado.",
      "Sentando-se perto de um pequeno lago, Lucas observou seu reflexo na água. Pela primeira vez em muito tempo, sua mente não estava correndo em mil direções diferentes. Havia uma clareza em seus pensamentos que ele nunca havia experimentado antes.",
      "Quando finalmente deixou o jardim, horas depois, Lucas estava diferente. Não era uma mudança que se podia ver, mas algo que se sentia. Theo sorriu, como se soubesse exatamente o que o menino havia descoberto.",
      "Em sua redação, Lucas escreveu: \"O Jardim Silencioso me ensinou que a paz não é a ausência de som, mas a presença de harmonia. No silêncio, encontrei não o vazio, mas uma plenitude que nunca havia experimentado antes.\"",
      "A partir daquele dia, Lucas começou a visitar o jardim regularmente. Ele ainda era energético e cheio de vida, mas havia encontrado um equilíbrio que antes lhe faltava. E quando a vida ficava muito barulhenta, ele fechava os olhos e encontrava o Jardim Silencioso dentro de si mesmo."
    ],
    moral: "A verdadeira paz não está na ausência de ruído externo, mas na capacidade de encontrar silêncio interior mesmo em meio ao caos. Quando aprendemos a aquietar nossa mente, descobrimos uma clareza e harmonia que nos permite enfrentar os desafios da vida com serenidade.",
    color: "#3B82F6"
  },
  15: {
    title: "O Coração da Vovó",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "5 min",
    content: [
      "Miguel sentia muita saudade da vovó Tereza. Desde que ela se mudou para outra cidade, eles só se viam nas férias e em alguns feriados. Para um menino de 7 anos, a espera parecia interminável.",
      "\"Mamãe, por que a vovó teve que ir morar tão longe?\", perguntou Miguel uma noite, enquanto sua mãe o cobria para dormir.",
      "\"Porque a vovó precisava ficar mais perto do hospital onde ela faz o tratamento dela, lembra? Mas mesmo longe, ela te ama muito\", respondeu a mãe, beijando sua testa.",
      "\"Mas como o amor dela chega até mim se estamos tão distantes?\", questionou Miguel, com os olhos cheios de curiosidade.",
      "A mãe pensou por um momento e teve uma ideia. No dia seguinte, ela comprou dois pequenos porta-retratos em forma de coração e colocou uma foto de Miguel em um e uma foto da vovó Tereza no outro.",
      "\"Miguel, tenho um presente especial para você\", disse ela, entregando o porta-retrato com a foto da vovó. \"Este é o coração da vovó. Quando você sentir saudade, segure-o perto do seu peito e feche os olhos. O amor dela vai te alcançar.\"",
      "O outro porta-retrato, com a foto de Miguel, foi enviado pelo correio para vovó Tereza, junto com uma carta explicando a ideia.",
      "Uma semana depois, o telefone tocou. Era a vovó Tereza, emocionada.",
      "\"Miguel, recebi seu coração! Agora toda noite antes de dormir, eu o seguro bem pertinho do meu peito e sinto como se você estivesse aqui comigo.\"",
      "A partir daquele dia, Miguel começou um ritual. Todas as noites, ele pegava o porta-retrato em formato de coração com a foto da vovó e o abraçava forte. Fechava os olhos e imaginava a vovó fazendo o mesmo com a foto dele.",
      "Uma noite, enquanto fazia seu ritual, Miguel teve uma sensação estranha. Ele sentiu um calor gostoso no peito, como se estivesse sendo abraçado. Ele abriu os olhos, surpreso, mas não havia ninguém no quarto além dele.",
      "\"Mamãe! Mamãe!\", chamou ele, excitado. \"Eu senti o abraço da vovó! Estava segurando o coração dela e senti como se ela estivesse me abraçando!\"",
      "A mãe sorriu. \"O amor é assim, Miguel. Ele não conhece distância. Quando amamos alguém de verdade, esse amor cria uma conexão que nada pode romper. Nem mesmo a distância.\"",
      "Algumas semanas depois, durante uma videoconferência, vovó Tereza contou uma história incrível.",
      "\"Miguel, você não vai acreditar, mas na terça-feira à noite, enquanto eu segurava seu coração, senti como se você estivesse me abraçando. Foi tão real que olhei ao redor para ver se você tinha entrado no meu quarto!\"",
      "Miguel ficou boquiaberto. Terça-feira à noite foi exatamente quando ele sentiu o abraço da vovó!",
      "\"Vovó, eu também senti seu abraço naquela noite! Como isso é possível?\"",
      "Vovó Tereza sorriu com os olhos brilhando. \"É a magia do amor, meu querido. O amor verdadeiro é a força mais poderosa do universo. Ele pode cruzar qualquer distância e superar qualquer obstáculo.\"",
      "Miguel aprendeu uma lição preciosa naquele dia. O amor não está limitado pelo espaço ou pelo tempo. Quando amamos alguém com todo o coração, estamos sempre conectados, não importa onde estejamos.",
      "E assim, a distância entre Miguel e vovó Tereza não parecia mais tão grande. Todas as noites, com os corações em forma de porta-retrato, eles se encontravam no lugar mais especial de todos: no infinito espaço do amor."
    ],
    moral: "O amor verdadeiro transcende distâncias físicas e cria conexões que não podem ser rompidas. Quando amamos alguém profundamente, essa conexão permanece forte, não importa quão longe estejamos uns dos outros.",
    color: "#F59E0B"
  },
  21: {
    title: "As Nuvens Pacificadoras",
    category: "Paz",
    categoryLink: "/categorias/paz",
    readTime: "4 min",
    content: [
      "Havia duas vilas vizinhas, Altovale e Baixovale, separadas apenas por um pequeno rio. Por gerações, as duas vilas viveram em harmonia, compartilhando recursos e celebrando festivais juntas. Mas tudo mudou quando uma disputa sobre os direitos de pesca no rio dividiu os moradores.",
      "O que começou como um pequeno desentendimento cresceu até se tornar um conflito amargo. Os habitantes de Altovale e Baixovale deixaram de se falar, ergueram cercas e proibiram seus filhos de brincar com as crianças da outra vila.",
      "Em Altovale vivia uma menina chamada Lara, que tinha um dom especial: ela conseguia ver formas nas nuvens que ninguém mais percebia. Enquanto outros viam apenas algodão branco flutuando no céu, Lara enxergava histórias completas se desenrolando acima dela.",
      "Um dia, enquanto observava o céu, Lara notou algo extraordinário. As nuvens estavam formando a imagem de duas mãos se unindo em um aperto. Era tão claro e perfeito que ela não podia acreditar que ninguém mais estava vendo.",
      "\"Olhem!\", gritou ela para os adultos que passavam. \"As nuvens estão nos dizendo para fazer as pazes!\"",
      "Os adultos sorriram educadamente, mas ninguém deu importância à imaginação da menina. Determinada a fazer alguém ver o que ela via, Lara correu até a ponte que cruzava o rio, o único lugar onde as pessoas das duas vilas ainda se encontravam, mesmo que evitassem olhar umas para as outras.",
      "Lá, ela encontrou um menino de Baixovale chamado Teo, que também estava olhando para o céu com admiração.",
      "\"Você consegue ver?\", perguntou Lara, apontando para cima.",
      "\"As mãos se unindo? Sim!\", respondeu Teo, surpreso por encontrar alguém que compartilhava sua visão.",
      "Os dois ficaram lado a lado, observando as nuvens mudarem de forma. Agora elas mostravam pessoas dançando em círculo, depois uma grande mesa com pessoas de ambos os lados compartilhando uma refeição.",
      "\"É como se as nuvens estivessem nos lembrando de como era antes\", disse Teo.",
      "\"Ou nos mostrando como poderia ser novamente\", completou Lara.",
      "Inspirados pelas imagens no céu, Lara e Teo decidiram agir. Eles convidaram outras crianças para observar as nuvens com eles. Logo, um grupo de crianças de ambas as vilas se reunia diariamente na ponte, apontando para o céu e compartilhando o que viam.",
      "Os adultos, curiosos sobre o que estava atraindo tantas crianças para a ponte, começaram a parar para ver o que estava acontecendo. Ao verem seus filhos brincando juntos, rindo e compartilhando histórias sobre as formas das nuvens, algo começou a mudar em seus corações.",
      "\"Talvez tenhamos algo a aprender com as nuvens\", disse um dos anciãos de Altovale, observando como elas fluíam livremente pelo céu, sem se importar com fronteiras ou disputas.",
      "Pouco a pouco, inspirados pela amizade das crianças e pelas mensagens pacíficas que elas viam nas nuvens, os adultos começaram a conversar novamente. A disputa sobre o rio, que agora parecia tão pequena quanto uma nuvem distante, foi resolvida com um acordo que beneficiava ambas as vilas."
    ],
    moral: "Às vezes, precisamos olhar além de nossas diferenças e disputas para encontrar a paz. Como as nuvens que mudam constantemente, devemos ser flexíveis e abertos a novas perspectivas. E frequentemente, são as crianças que nos mostram o caminho para a reconciliação, com sua capacidade de ver beleza e possibilidades onde os adultos enxergam apenas problemas.",
    color: "#3B82F6"
  },
  27: {
    title: "A Melodia da Paz",
    category: "Paz",
    categoryLink: "/categorias/paz",
    readTime: "5 min",
    content: [
      "Em uma pequena vila nas montanhas, vivia um velho músico chamado Mestre Antônio. Ele possuía um violino muito especial, feito de uma madeira rara que, segundo a lenda, havia crescido no local exato onde dois antigos inimigos fizeram as pazes após anos de conflito.",
      "O som daquele violino era diferente de qualquer outro. Quando Mestre Antônio tocava, as pessoas sentiam uma calma inexplicável, como se todas as preocupações e tristezas fossem temporariamente suspensas. Chamavam aquela música de \"A Melodia da Paz\".",
      "Por muitos anos, Mestre Antônio tocou seu violino em festas, casamentos e momentos difíceis da vila. Sempre que havia um desentendimento ou conflito, as pessoas pediam que ele tocasse, e de alguma forma, a música ajudava a acalmar os ânimos e encontrar soluções.",
      "Quando Mestre Antônio ficou muito idoso, começou a procurar alguém para quem pudesse passar seu precioso violino e ensinar a Melodia da Paz. Muitos jovens talentosos da vila queriam ser escolhidos, mas o velho músico não se decidia.",
      "\"Não é apenas técnica que procuro\", explicava ele. \"A pessoa que tocar este violino precisa compreender o verdadeiro significado da paz.\"",
      "Na vila vivia uma menina chamada Clara. Ela não era considerada talentosa em música – na verdade, nunca havia tocado um instrumento. O que a distinguia era sua capacidade de resolver conflitos entre as outras crianças. Quando havia uma briga, Clara sempre encontrava uma forma de fazer ambos os lados se entenderem.",
      "Um dia, enquanto Mestre Antônio observava as crianças brincando na praça, viu Clara intervir em uma discussão acalorada entre dois meninos que queriam o mesmo brinquedo. Em vez de decidir quem estava certo, ela propôs uma brincadeira onde ambos poderiam participar juntos, transformando a competição em cooperação.",
      "Naquele momento, o velho músico soube que havia encontrado sua sucessora.",
      "\"Clara\", chamou ele, \"gostaria de aprender a tocar violino?\"",
      "A menina ficou surpresa com o convite, mas aceitou curiosa. Nas semanas seguintes, Mestre Antônio ensinou-lhe os fundamentos do instrumento. Clara não aprendia tão rápido quanto outros alunos mais talentosos, mas havia algo especial em sua forma de tocar – uma gentileza e atenção que refletiam sua personalidade.",
      "Quando chegou o momento de ensinar a Melodia da Paz, Mestre Antônio explicou: \"Esta não é apenas uma sequência de notas. É uma expressão do equilíbrio entre ouvir e falar, entre ceder e manter-se firme, entre compreender e ser compreendido. É como a conversa que você criou entre aqueles dois meninos que brigavam.\"",
      "Clara entendeu perfeitamente. Quando tocou a melodia pela primeira vez, mesmo com algumas notas imperfeitas, a essência estava lá – aquela sensação de calma e clareza que definia a música de Mestre Antônio.",
      "Anos depois, quando o velho músico faleceu, Clara assumiu seu papel na vila. Embora nunca tenha se tornado uma virtuose, sua Melodia da Paz carregava algo que transcendia a técnica musical – a compreensão profunda de que a verdadeira harmonia vem do equilíbrio entre diferentes vozes, assim como uma bela música nasce do equilíbrio entre diferentes notas."
    ],
    moral: "A paz verdadeira não é a simples ausência de conflito, mas a harmonia que surge quando diferentes partes encontram um equilíbrio. Como uma bela melodia que combina notas diferentes em uma composição harmoniosa, a paz requer compreensão, equilíbrio e a capacidade de valorizar as diferenças em vez de eliminá-las.",
    color: "#3B82F6"
  },
  36: {
    title: "O Pequeno Mediador",
    category: "Paz",
    categoryLink: "/categorias/paz",
    readTime: "6 min",
    content: [
      "Na Escola Bosque Verde, havia duas turmas do quinto ano que não se davam bem. A turma A e a turma B competiam em tudo: quem tinha as melhores notas, quem ganhava nos esportes, quem fazia os melhores projetos de ciências. O que começou como uma rivalidade saudável havia se transformado em algo mais sério, com provocações, apelidos maldosos e até pequenos conflitos no pátio.",
      "Os professores estavam preocupados, mas não sabiam como resolver a situação. Tentaram conversas, atividades conjuntas e até ameaças de punição, mas nada parecia funcionar por muito tempo.",
      "Em meio a esse clima tenso, havia um menino chamado Miguel. Ele era novo na escola, tendo chegado no meio do ano letivo, e por um erro administrativo, seu nome aparecia nas listas das duas turmas. Assim, ele frequentava algumas aulas com a turma A e outras com a turma B.",
      "No início, Miguel se sentiu deslocado. Os colegas da turma A desconfiavam dele por passar tempo com a turma B, e vice-versa. Mas aos poucos, essa posição única lhe deu uma perspectiva especial.",
      "\"Vocês sabem que são muito mais parecidos do que diferentes, não é?\", comentou ele um dia, durante um trabalho em grupo na turma A. \"Na turma B, eles também adoram quadrinhos e se preocupam com a prova de matemática.\"",
      "Os colegas ficaram surpresos. A imagem que tinham da outra turma era de um grupo arrogante e competitivo, não de crianças com os mesmos interesses e preocupações que eles.",
      "Miguel começou a fazer pequenos comentários assim em ambas as turmas, não de forma forçada ou como quem está dando uma lição, mas naturalmente, como parte das conversas. \"Sabe quem também desenha super bem? A Júlia da turma B.\" Ou: \"Isso me lembra uma piada que o Pedro da turma A contou ontem.\"",
      "Aos poucos, a curiosidade começou a substituir a hostilidade. As crianças faziam perguntas a Miguel sobre a outra turma, e ele respondia honestamente, sem exageros ou distorções.",
      "Um dia, durante a aula de ciências, a professora anunciou um grande projeto que exigiria pesquisa na biblioteca. Haveria apenas um horário disponível para o quinto ano, o que significava que as duas turmas teriam que compartilhar o espaço.",
      "Prevendo problemas, a professora pediu a Miguel que ajudasse a organizar os grupos de trabalho. Com sua experiência em ambas as turmas, ele sugeriu algo ousado: grupos mistos, com alunos das turmas A e B trabalhando juntos.",
      "Houve resistência inicial, claro. Mas Miguel havia preparado o terreno bem. Ele formou os grupos considerando interesses comuns e habilidades complementares que havia observado. \"Ana e Luísa, vocês duas são ótimas em encontrar informações em livros. E Carlos e Marcos, vocês são bons em organizar as ideias visualmente.\"",
      "Para surpresa dos professores, a sessão na biblioteca correu sem problemas. Focados na tarefa e descobrindo interesses comuns, os alunos começaram a ver além dos rótulos de \"turma A\" e \"turma B\".",
      "O projeto de ciências foi um sucesso, com todos os grupos apresentando trabalhos excelentes. Mais importante, algo havia mudado no ambiente da escola. A rivalidade não desapareceu completamente – ainda havia competição nos esportes e debates acalorados – mas agora era mais respeitosa, mais como um desafio entre amigos do que uma batalha entre inimigos.",
      "Miguel nunca se autodenominou mediador ou pacificador. Ele simplesmente usou sua posição única para construir pontes onde antes havia muros, mostrando a cada lado que o \"outro\" não era tão diferente ou assustador quanto imaginavam."
    ],
    moral: "A paz muitas vezes começa com a compreensão de que aqueles que vemos como diferentes ou opostos a nós compartilham muitas de nossas mesmas esperanças, medos e sonhos. Um verdadeiro mediador não impõe soluções, mas ajuda cada lado a ver a humanidade do outro, construindo pontes de entendimento que permitem que as pessoas encontrem seu próprio caminho para a harmonia.",
    color: "#3B82F6"
  },
  40: {
    title: "Amor em Cores",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "5 min",
    content: [
      "Luana vivia em um mundo onde tudo era cinza. Não era que as cores não existissem, mas as pessoas estavam tão ocupadas e preocupadas que simplesmente não as notavam mais. Elas caminhavam apressadas, com os olhos fixos no chão, sem sorrir, sem conversar.",
      "Mas Luana era diferente. Ela tinha apenas 6 anos e ainda conseguia ver as cores que ninguém mais parecia enxergar. O vermelho das rosas, o azul do céu, o verde das árvores – tudo era vívido e brilhante aos seus olhos.",
      "Um dia, a professora de Luana pediu que os alunos fizessem um desenho sobre o amor. Enquanto as outras crianças desenhavam corações e famílias, Luana teve uma ideia diferente. Ela desenhou manchas coloridas que se espalhavam de uma pessoa para outra, como ondas de luz.",
      "\"O que é isso, Luana?\", perguntou a professora, intrigada com o desenho incomum.",
      "\"É como o amor se parece, professora. Quando amamos alguém, cores saem do nosso coração e tocam a outra pessoa, fazendo-a mais feliz e colorida também.\"",
      "A professora sorriu, encantada com a imaginação da menina.",
      "Inspirada por seu próprio desenho, Luana decidiu levar mais cores para o mundo. No dia seguinte, ela levou para a escola pequenos corações de papel colorido que havia feito com a ajuda de sua mãe. Em cada coração, ela escreveu mensagens simples: \"Você é especial\", \"Seu sorriso é bonito\", \"Obrigada por ser você\".",
      "Durante o recreio, Luana começou a entregar os corações para as pessoas – crianças, professores, funcionários da escola. A princípio, todos ficaram surpresos com o gesto inesperado. Mas logo, algo mágico começou a acontecer.",
      "A cada coração entregue, Luana podia ver uma pequena onda de cor irradiando da pessoa que o recebia. Era exatamente como em seu desenho! Um homem de expressão séria que trabalhava na cantina recebeu um coração roxo dizendo \"Sua comida é a melhor do mundo\". Seu rosto imediatamente se iluminou em um sorriso, e Luana pôde ver o roxo se espalhando ao seu redor.",
      "A professora de matemática, sempre tão rígida, recebeu um coração verde com a mensagem \"Obrigada por nos ensinar coisas difíceis de um jeito legal\". Seus olhos se encheram de lágrimas, e uma aura verde brilhante apareceu ao seu redor.",
      "Sem perceber, Luana estava transformando a escola. As pessoas começaram a sorrir mais, a agradecer por pequenas gentilezas, a se olhar nos olhos quando conversavam. E o mais extraordinário: algumas delas começaram a fazer seus próprios corações para distribuir.",
      "Uma semana depois, a escola inteira estava diferente. As paredes, antes tão cinzentas, agora estavam cobertas de corações coloridos com mensagens de amor e gratidão. As pessoas caminhavam mais devagar, sorriam mais, conversavam mais.",
      "A diretora, impressionada com a transformação, chamou Luana em sua sala.",
      "\"Luana, você percebe o que fez? Você trouxe cor para nossa escola.\"",
      "Luana sorriu. \"Não fui eu, diretora. Foi o amor. Ele sempre esteve aqui, só precisava ser lembrado.\"",
      "A iniciativa de Luana não parou na escola. Os alunos levaram a ideia para suas casas, seus bairros, para toda a cidade. Aos poucos, aquele mundo cinzento foi se transformando em um arco-íris de cores e sorrisos.",
      "E tudo isso começou com um simples ato de amor – um pequeno coração de papel colorido e palavras gentis que lembraram as pessoas de como era bom amar e ser amado.",
      "Porque, como Luana descobriu, o amor é a maior magia que existe: ele tem o poder de colorir o mundo inteiro, uma pessoa de cada vez."
    ],
    moral: "O amor tem o poder de transformar o mundo ao nosso redor, trazendo cor e alegria para vidas que se tornaram cinzentas. Pequenos gestos de gentileza e palavras de afirmação podem criar ondas de mudança positiva que se espalham muito além do que imaginamos.",
    color: "#F59E0B"
  },
  41: {
    title: "Os Escudos Invisíveis",
    category: "Proteção",
    categoryLink: "/categorias/protecao",
    readTime: "6 min",
    content: [
      "Quando Nina tinha quatro anos, seu pai lhe contou sobre os escudos invisíveis. Eles estavam voltando do parque, onde Nina havia caído do balanço e machucado o joelho. Depois de limpar o ferimento e colocar um band-aid colorido, seu pai a abraçou forte e disse:",
      "\"Sabia que todos nós temos escudos invisíveis que nos protegem?\"",
      "Nina enxugou as lágrimas, imediatamente interessada. \"Escudos como os dos cavaleiros?\"",
      "\"Sim, mas muito melhor\", respondeu seu pai. \"Porque os nossos são feitos de amor, e o amor é o material mais forte que existe no universo.\"",
      "Nina olhou para os próprios braços, tentando ver esse tal escudo.",
      "\"Não podemos vê-lo com os olhos\", explicou o pai, sorrindo. \"Mas podemos senti-lo com o coração.\"",
      "Naquela noite, antes de dormir, Nina pediu para o pai lhe contar mais sobre os escudos invisíveis. Sentado na beirada da cama, ele explicou:",
      "\"Cada vez que alguém te ama, seu escudo fica mais forte. Quando a mamãe te beija de manhã, quando a vovó te liga só para dizer que está com saudade, quando seu amiguinho divide o lanche com você... cada gesto de amor adiciona uma camada ao seu escudo.\"",
      "\"E para que serve esse escudo?\", perguntou Nina, aconchegando-se em seu cobertor favorito.",
      "\"Ele te protege das coisas ruins do mundo: dos medos, da tristeza, da solidão. Não que ele impeça você de sentir essas coisas – porque sentir é parte de ser humano. Mas o escudo te dá força para lidar com elas, para saber que, mesmo nos momentos difíceis, você nunca está sozinha.\"",
      "Nina pensou sobre isso por um momento. \"Eu tenho um escudo forte, papai?\"",
      "\"O mais forte que já vi\", garantiu ele, beijando sua testa. \"É feito de todo o amor que a mamãe e eu sentimos por você, do amor dos seus avós, dos seus tios, dos seus amigos...\"",
      "A ideia dos escudos invisíveis fascinou Nina. Nos dias que se seguiram, ela começou a notar os momentos em que seu escudo era fortalecido: quando sua mãe penteava seus cabelos com carinho; quando seu pai inventava histórias malucas só para fazê-la rir; quando sua melhor amiga, Júlia, segurava sua mão no primeiro dia de aula.",
      "Mas o grande teste dos escudos invisíveis veio quando Nina tinha seis anos. Sua família precisou se mudar para outra cidade por causa do trabalho do pai. Nina estava devastada. Ela teria que deixar sua escola, seus amigos, sua casa, tudo o que conhecia e amava.",
      "Na noite antes da mudança, deitada em seu quarto já quase vazio, Nina chorou baixinho. Seu escudo parecia fraco e cheio de rachaduras.",
      "Sua mãe entrou no quarto, como se tivesse sentido o coração partido da filha. Sentou-se à beira da cama e acendeu uma pequena luz de estrelas que projetava constelações no teto.",
      "\"Você se lembra dos escudos invisíveis que o papai te contou?\"",
      "Nina assentiu, enxugando as lágrimas.",
      "\"Tem uma coisa muito especial sobre eles: eles são flexíveis e viajam com você, não importa onde vá.\" A mãe pegou a mão de Nina e a colocou sobre seu coração. \"Porque o amor que forma seu escudo está sempre aqui, guardado dentro de você.\"",
      "\"Mas vou sentir falta da Júlia, da vovó, de todo mundo...\"",
      "\"Sim, vai. E isso mostra o quanto seu escudo é forte, porque só sentimos falta de quem amamos de verdade.\" A mãe abriu a palma da mão, revelando um pequeno medalhão. \"Trouxe algo para você.\"",
      "O medalhão era prateado, com uma estrela gravada. Quando Nina o abriu, encontrou uma minúscula foto de sua família dentro.",
      "\"Sempre que sentir medo ou solidão na nova cidade, segure este medalhão e lembre-se de que está protegida pelo nosso amor, não importa a distância.\"",
      "Nina dormiu com o medalhão apertado na mão. Na manhã seguinte, antes de partir, ela pediu para visitar Júlia uma última vez.",
      "Em vez de apenas dizer adeus, Nina explicou à amiga sobre os escudos invisíveis. \"Mesmo longe, nosso amor de amizade vai fortalecer meu escudo, e o seu também\", disse ela, com uma sabedoria além dos seus anos.",
      "As duas amigas trocaram desenhos: Júlia deu a Nina um desenho delas duas como super-heroínas com escudos brilhantes, e Nina deu a Júlia um desenho de dois corações unidos por uma linha pontilhada, que representava a distância que não poderia separá-las.",
      "Os primeiros dias na nova cidade foram difíceis. Tudo era estranho, e Nina sentia um vazio no peito que nem mesmo o medalhão parecia preencher completamente. Mas, aos poucos, coisas inesperadas começaram a acontecer.",
      "Uma menina chamada Lara a convidou para brincar no parque. Sua nova professora notou seu talento para desenhar e pediu que ela fizesse uma ilustração para a capa do jornal da escola. Um vizinho idoso, Senhor Roberto, lhe mostrou como fazer barquinhos de papel para flutuar no pequeno lago perto de casa.",
      "Cada novo sorriso, cada gentileza, cada conexão, por menor que fosse, adicionava uma camada ao escudo de Nina. E, surpreendentemente, ela percebeu que seu escudo não estava se recuperando... estava ficando mais forte do que nunca.",
      "Um dia, enquanto falava com Júlia por videochamada, Nina teve uma grande realização:",
      "\"Sabe o que descobri, Jú? Os escudos invisíveis não são só para nos proteger. Eles também podem proteger os outros. Cada vez que somos gentis com alguém, ajudamos a fortalecer o escudo dessa pessoa.\"",
      "\"Como assim?\", perguntou Júlia, curiosa.",
      "\"Lembra da Lara, a menina nova que te falei? Ela estava muito sozinha na escola, mais até do que eu. Quando a convidei para brincar, vi seu rosto mudar, como se uma luz tivesse acendido dentro dela. Acho que ajudei a consertar uma rachadura no escudo dela.\"",
      "Enquanto crescia, Nina nunca se esqueceu dos escudos invisíveis. Na adolescência, quando enfrentou bullying, foi o escudo que lhe deu força para manter-se fiel a si mesma. Na faculdade, longe de casa pela primeira vez, era o escudo que a lembrava de que nunca estava realmente sozinha.",
      "E quando, anos mais tarde, Nina se tornou mãe, uma das primeiras histórias que contou a seu filho foi sobre os escudos invisíveis. Sentada na beirada da cama dele, com o mesmo medalhão de estrela agora pendurado em seu pescoço, ela explicou:",
      "\"Cada vez que alguém te ama, seu escudo fica mais forte. E o incrível é que, cada vez que você ama alguém, o escudo dessa pessoa também fica mais forte. É assim que mudamos o mundo, um escudo de cada vez.\"",
      "Porque Nina havia compreendido o que seu pai tentara lhe ensinar tantos anos atrás: que o amor não é apenas o material mais forte do universo, mas também o mais duradouro. Que atravessa distâncias, supera obstáculos, cura feridas e, mais importante, se multiplica cada vez que é compartilhado.",
      "E esse, concluiu Nina, era o verdadeiro poder dos escudos invisíveis."
    ],
    moral: "O amor que recebemos dos outros nos fortalece e protege, criando um escudo invisível que nos ajuda a enfrentar os desafios da vida. Mais importante ainda, quando compartilhamos amor e gentileza, ajudamos a fortalecer os escudos daqueles ao nosso redor, criando uma rede de proteção que beneficia a todos.",
    color: "#3B82F6"
  },
  3: {
    title: "O Pequeno Semeador de Esperança",
    category: "Proteção",
    categoryLink: "/categorias/protecao",
    readTime: "4 min",
    content: [
      "Em uma pequena vila cercada por montanhas, vivia um menino chamado Tiago. A vila estava passando por tempos difíceis – não chovia há meses, as plantações estavam secando e as pessoas começavam a perder a esperança.",
      "Tiago tinha apenas oito anos, mas possuía algo que muitos adultos haviam perdido: uma fé inabalável. Todas as noites, antes de dormir, ele olhava pela janela para o céu estrelado e conversava com as estrelas, acreditando que suas palavras seriam ouvidas.",
      "Um dia, enquanto caminhava pela vila, Tiago encontrou um pequeno saco de sementes esquecido no chão. Em vez de ignorá-lo, ele teve uma ideia. Começou a visitar cada casa da vila, dando algumas sementes para cada família.",
      "\"O que devemos fazer com isso?\", perguntavam as pessoas confusas. \"A terra está seca. Nada crescerá.\"",
      "\"Plantem-nas\", respondia Tiago com um sorriso confiante. \"Acreditem que a chuva virá.\"",
      "As pessoas riam, mas algo na convicção do menino as tocava. Algumas famílias, apenas para agradar o pequeno, plantaram as sementes em seus jardins secos.",
      "Tiago continuou sua jornada, visitando cada casa, compartilhando não apenas sementes, mas também histórias de esperança e palavras de encorajamento. \"A fé é como uma semente\", dizia ele. \"Mesmo que pareça pequena e insignificante, quando plantada no coração, pode crescer e transformar tudo ao redor.\"",
      "Aos poucos, algo começou a mudar na vila. Não era a chuva – ainda não – mas o espírito das pessoas. Elas começaram a se reunir novamente, a compartilhar o pouco que tinham, a ajudar umas às outras. A fé do pequeno Tiago era contagiante.",
      "E então, numa noite estrelada, enquanto Tiago fazia sua conversa habitual com as estrelas, as primeiras gotas de chuva começaram a cair. A chuva continuou por dias, gentil e constante, trazendo vida de volta à terra ressequida.",
      "As sementes que haviam sido plantadas começaram a brotar, transformando a vila em um jardim de esperança renovada. As pessoas olhavam maravilhadas para as pequenas plantas que emergiam da terra, lembrando-as de que mesmo nos momentos mais escuros, a fé pode iluminar o caminho."
    ],
    moral: "A fé verdadeira não é apenas acreditar em algo que não podemos ver, mas agir como se já pudéssemos vê-lo. Como as sementes plantadas em terra seca, nossa fé pode florescer mesmo nas circunstâncias mais difíceis, inspirando outros e transformando comunidades inteiras.",
    color: "#8B5CF6"
  },
  4: {
    title: "A Coruja Sábia",
    category: "Sabedoria",
    categoryLink: "/categorias/sabedoria",
    readTime: "7 min",
    content: [
      "No topo da árvore mais antiga da floresta vivia uma coruja chamada Olívia. Ela era conhecida por todos os animais como a mais sábia da floresta. Animais de todos os cantos vinham até ela em busca de conselhos e soluções para seus problemas.",
      "Olívia tinha olhos grandes e dourados que pareciam enxergar não apenas o que estava diante dela, mas também o que estava escondido no coração de cada animal. Ela falava pouco, mas quando falava, suas palavras eram como sementes de sabedoria que, uma vez plantadas, cresciam e floresciam na mente de quem as ouvia.",
      "Um dia, três jovens animais – um esquilo, uma raposa e um coelho – decidiram descobrir o segredo da sabedoria da coruja. Eles queriam saber como ela havia se tornado tão sábia e esperavam aprender rapidamente seus segredos.",
      "Quando chegaram à árvore de Olívia, encontraram a velha coruja observando silenciosamente o pôr do sol.",
      "\"Olívia\", disse o esquilo impaciente, \"viemos aprender o segredo da sua sabedoria. Queremos ser tão sábios quanto você, e queremos aprender agora!\"",
      "A coruja sorriu gentilmente. \"A sabedoria não é algo que posso simplesmente dar a vocês como um presente embrulhado. Mas posso mostrar o caminho. Voltem amanhã ao amanhecer, e cada um trará algo que considere valioso.\"",
      "No dia seguinte, os três jovens animais retornaram. O esquilo trouxe a maior noz que conseguiu encontrar. A raposa trouxe uma bela pena colorida. O coelho trouxe uma pedra brilhante que havia encontrado perto do rio.",
      "Olívia olhou para os três presentes e disse: \"Agora, quero que cada um de vocês me conte não o que trouxe, mas o que observou no caminho até aqui.\"",
      "Os três ficaram confusos. Eles estavam tão focados em encontrar algo valioso que mal haviam prestado atenção ao caminho.",
      "\"Eu... eu vi algumas flores silvestres começando a desabrochar perto do riacho\", disse o coelho hesitante.",
      "\"Notei que as formigas estão construindo um novo formigueiro perto da pedra grande\", acrescentou a raposa.",
      "\"E eu percebi que o velho carvalho na clareira está começando a dar novos brotos onde foi atingido pelo raio na última tempestade\", completou o esquilo.",
      "Olívia assentiu com aprovação. \"A sabedoria começa com a observação. Não está nos grandes feitos ou nas coisas valiosas que acumulamos, mas na atenção que damos ao mundo ao nosso redor. A verdadeira sabedoria está em ver o extraordinário no ordinário, em aprender com cada experiência, em ouvir mais do que falar, e em compreender que o conhecimento sem compaixão é como uma árvore sem raízes.\"",
      "Os três jovens animais começaram a entender. Não havia um atalho para a sabedoria – ela vinha da experiência, da observação paciente e da reflexão profunda.",
      "\"Voltem para suas casas\", continuou Olívia, \"e durante uma semana, observem tudo ao seu redor como se estivessem vendo pela primeira vez. Escutem não apenas com seus ouvidos, mas com seus corações. E então, retornem para compartilharmos o que aprenderam.\"",
      "E assim começou a jornada dos três jovens animais em busca da sabedoria – não como uma conquista rápida, mas como um caminho de vida, guiado pelos olhos atentos e o coração compassivo da velha coruja sábia."
    ],
    moral: "A verdadeira sabedoria não vem de acumular conhecimento, mas de observar com atenção, refletir com profundidade e aplicar com compaixão o que aprendemos. É um caminho contínuo que requer paciência, humildade e a disposição de ver o mundo com olhos sempre novos.",
    color: "#9333EA"
  },
  5: {
    title: "O Abraço Mágico",
    category: "Amor",
    categoryLink: "/categorias/amor",
    readTime: "4 min",
    content: [
      "Era uma vez uma menina chamada Clara que tinha o abraço mais especial do mundo. Sempre que alguém estava triste, Clara sabia exatamente como ajudar: com um abraço cheio de amor.",
      "Na escola, quando seu amigo Pedro caiu no pátio e começou a chorar, Clara correu até ele e o abraçou forte. Como por mágica, Pedro sentiu um calorzinho gostoso no coração e logo parou de chorar.",
      "\"Como você faz isso?\", perguntou Pedro, surpreso.",
      "Clara sorriu. \"É o meu abraço mágico. Mamãe diz que quando abraçamos alguém de coração, nosso amor passa para a outra pessoa.\"",
      "A notícia sobre o abraço mágico de Clara se espalhou rapidamente pela escola. Sempre que alguma criança se machucava ou ficava triste, todos diziam: \"Vamos procurar a Clara para ganhar um abraço mágico!\"",
      "Um dia, a professora de Clara, Dona Beatriz, chegou à escola muito abatida. Seu gatinho de estimação havia adoecido, e ela estava preocupada.",
      "Clara observou sua professora e percebeu a tristeza em seus olhos. Sem dizer nada, ela se aproximou de Dona Beatriz e a abraçou com todo o carinho que tinha no coração.",
      "Dona Beatriz sentiu um calor reconfortante que começou no abraço e se espalhou por todo seu corpo. Seus olhos marejaram, mas dessa vez, por emoção.",
      "\"Obrigada, Clara\", disse Dona Beatriz. \"Seu abraço realmente é mágico.\"",
      "Clara sorriu. \"Não é mágica, professora. É amor. Minha avó diz que o amor é a energia mais poderosa que existe no universo.\"",
      "Naquela noite, quando Clara chegou em casa, encontrou sua mãe na cozinha. \"Mamãe, por que será que as pessoas dizem que meu abraço é mágico?\"",
      "A mãe de Clara sorriu e se ajoelhou para ficar na altura da filha. \"Clara, quando abraçamos alguém com amor verdadeiro, nossos corações se conectam. E quando os corações se conectam, eles trocam uma energia especial que nos faz sentir melhor. Alguns chamam isso de mágica, mas na verdade, é o poder do amor.\"",
      "Clara pensou por um momento. \"Então qualquer pessoa pode dar um abraço mágico?\"",
      "\"Sim, meu amor. Qualquer pessoa que abrace com o coração cheio de amor. A mágica não está no abraço, mas no amor que colocamos nele.\"",
      "A partir daquele dia, Clara começou a ensinar seus amigos como dar abraços mágicos. \"É simples\", ela dizia. \"Quando você abraçar alguém, pense em todo o amor que tem no coração e deseje que esse amor chegue até a pessoa.\"",
      "Aos poucos, a escola inteira aprendeu a dar abraços mágicos. E como por encanto, aquele lugar se tornou mais feliz, mais acolhedor, mais cheio de amor.",
      "E foi assim que Clara descobriu que o verdadeiro poder da mágica não estava em seus braços, mas no amor que ela compartilhava com cada abraço. E esse amor, quando multiplicado, podia transformar não apenas um coração, mas o mundo inteiro."
    ],
    moral: "O amor expressado através de gestos simples como um abraço sincero tem o poder de curar, transformar e conectar. Nunca subestime o impacto que um ato genuíno de carinho pode ter na vida de alguém – às vezes, é exatamente a magia que aquela pessoa precisa.",
    color: "#F59E0B"
  },
  6: {
    title: "O Menino que Ajudava a Todos",
    category: "Bondade",
    categoryLink: "/categorias/bondade",
    readTime: "6 min",
    content: [
      "Em uma pequena vila ao pé de uma montanha verde, vivia um menino chamado Pedro. Ele não era o mais forte, nem o mais rápido, nem o mais inteligente da vila, mas possuía algo que o tornava especial: um coração cheio de bondade e uma disposição constante para ajudar os outros.",
      "Todos os dias, Pedro acordava com o nascer do sol e se perguntava: \"Quem posso ajudar hoje?\" E assim começava sua jornada diária, procurando maneiras de tornar a vida das pessoas um pouco melhor.",
      "Ele ajudava a Sra. Maria a carregar suas compras do mercado até sua casa no topo da colina. Ajudava o Sr. José a alimentar seus animais quando o velho fazendeiro sentia dores nas costas. Lia histórias para as crianças mais novas sob a sombra da grande árvore na praça. Varria as folhas do jardim da escola sem que ninguém pedisse.",
      "Muitas vezes, seus amigos não entendiam por que Pedro se importava tanto.",
      "\"Por que você sempre está ajudando os outros?\", perguntou seu amigo Lucas um dia. \"Você nem recebe nada em troca.\"",
      "Pedro sorriu. \"Eu recebo sim\", respondeu ele. \"Recebo a alegria de ver as pessoas felizes.\"",
      "Lucas balançou a cabeça, ainda sem entender completamente.",
      "Um dia, uma forte tempestade atingiu a vila. O riacho transbordou, árvores caíram e algumas casas foram danificadas. A vila inteira estava em caos.",
      "Sem hesitar, Pedro saiu para ajudar. Ele ajudou a construir barreiras de sacos de areia, levou comida para famílias que não podiam sair de casa, e confortou crianças assustadas contando histórias engraçadas para distraí-las do barulho da tempestade.",
      "Por três dias, Pedro trabalhou incansavelmente, dormindo apenas algumas horas por noite. Ele estava exausto, mas continuava sorrindo e encorajando todos ao seu redor.",
      "Quando a tempestade finalmente passou e a vila começou a se recuperar, algo incrível aconteceu. Sem combinar, todos os moradores se reuniram na praça central. Quando Pedro chegou, foi recebido com aplausos e abraços.",
      "\"Você sempre esteve lá para todos nós\", disse a Sra. Maria com lágrimas nos olhos. \"Agora queremos retribuir.\"",
      "Os moradores haviam se organizado para reconstruir a casa de Pedro, que havia sido danificada pela queda de uma árvore. Não apenas isso, mas cada família havia preparado algo especial – um bolo, uma manta feita à mão, uma cadeira entalhada, um desenho colorido.",
      "Lucas se aproximou de Pedro. \"Agora eu entendo\", disse ele. \"Quando você ajuda os outros, não está apenas melhorando a vida deles, mas criando uma comunidade onde todos se importam uns com os outros.\"",
      "Pedro sorriu, com lágrimas de gratidão nos olhos. Ele nunca havia ajudado esperando receber algo em troca, mas descobriu que a bondade tem uma maneira própria de voltar para nós – multiplicada em muitas mãos e corações."
    ],
    moral: "A verdadeira bondade não espera recompensa, mas cria conexões que fortalecem toda a comunidade. Quando ajudamos os outros com um coração sincero, não apenas transformamos suas vidas, mas também construímos um mundo onde todos se importam uns com os outros.",
    color: "#10B981"
  }
};

export default function EstoriaPage() {
  const params = useParams();
  const id = params.id as string;
  const [estoria, setEstoria] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    if (estorias[id]) {
      // @ts-ignore
      setEstoria(estorias[id]);
    }
  }, [id]);

  if (!estoria) {
    return (
      <PortugueseLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 font-heading text-[#333333]">Estória não encontrada</h1>
            <p className="mb-8">A estória que você está procurando não está disponível.</p>
            <a
              href="/estorias"
              className="bg-[#6366F1] text-white px-6 py-3 rounded-md hover:bg-[#4F46E5] transition-colors"
            >
              Voltar para estórias
            </a>
          </div>
        </div>
      </PortugueseLayout>
    );
  }

  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navegação de volta */}
          <div className="mb-6">
            <Link
              href="/estorias"
              className="text-[#6366F1] hover:text-[#4F46E5] flex items-center"
            >
              ← Voltar para estórias
            </Link>
          </div>

          {/* Cabeçalho da estória */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 font-heading text-[#333333]">{estoria.title}</h1>
            <div className="flex items-center text-sm text-[#666666] mb-4">
              <span className="mr-4">Categoria:
                <Link href={estoria.categoryLink} className="text-[#F59E0B] ml-1 hover:underline">
                  {estoria.category}
                </Link>
              </span>
              <span>{estoria.readTime} de leitura</span>
            </div>
          </div>

          {/* Imagem da estória */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-md">
            <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] h-64 w-full"></div>
          </div>

          {/* Conteúdo da estória */}
          <div className="prose max-w-none mb-8">
            {estoria.content.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Moral da estória */}
          <div className="bg-[#FFF8F5] border-l-4 border-[#FF9D5C] p-4 mb-8">
            <h3 className="font-semibold text-[#333333] mb-2">Moral da Estória:</h3>
            <p className="text-[#666666]">
              {estoria.moral}
            </p>
          </div>

          {/* Compartilhar */}
          <div className="mb-8">
            <h3 className="font-semibold text-[#333333] mb-2">Compartilhar esta estória:</h3>
            <div className="flex space-x-4">
              <button className="bg-[#1877F2] text-white px-4 py-2 rounded-md">Facebook</button>
              <button className="bg-[#1DA1F2] text-white px-4 py-2 rounded-md">Twitter</button>
              <button className="bg-[#25D366] text-white px-4 py-2 rounded-md">WhatsApp</button>
            </div>
          </div>

          {/* Mais estórias */}
          <div>
            <h3 className="font-semibold text-[#333333] mb-4 text-xl">Mais estórias que você pode gostar:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(estorias)
                .filter(key => key !== id)
                .slice(0, 3)
                .map((key) => (
                  <div key={key} className="story-card">
                    <div className="story-card-image" style={{ backgroundColor: estorias[key].color }}></div>
                    <div className="story-card-content">
                      <h3 className="font-semibold mb-2">{estorias[key].title}</h3>
                      <Link
                        href={`/estorias/${key}`}
                        className="read-more"
                      >
                        Ler mais →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PortugueseLayout>
  )
}
