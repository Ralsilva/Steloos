import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertNewsletterSubscriberSchema } from "@shared/schema";
import { cacheMiddleware } from "./cache";

// Função para traduzir títulos em português para inglês
function translateTitle(title: string): string {
  // Traduções específicas para os títulos existentes
  const titleMap: Record<string, string> = {
    "As Asas da Amizade": "The Wings of Friendship",
    "O Jardim da Paz": "The Garden of Peace",
    "A Estrela Sábia": "The Wise Star",
    "O Coelho Generoso": "The Generous Rabbit",
    "Anjos da Guarda": "Guardian Angels",
    "A Jornada da Alma": "The Journey of the Soul",
    "O Milagre do Perdão": "The Miracle of Forgiveness",
    "O Presente do Coração": "The Gift from the Heart",
    "A Lagarta que Encontrou a Paz": "The Caterpillar that Found Peace",
    "O Menino e a Estrela": "The Boy and the Star",
    "Amigos Para Sempre": "Friends Forever",
    "Um Coração Cheio de Amor": "A Heart Full of Love",
    "A Flor da Gratidão": "The Flower of Gratitude",
    "O Jardim Secreto": "The Secret Garden",
    "O Passarinho que Não Sabia Voar": "The Little Bird That Couldn't Fly",
    "A Árvore Generosa": "The Giving Tree",
    "O Rio da Vida": "The River of Life",
    "A Pequena Fada da Natureza": "The Little Nature Fairy"
  };
  
  // Verificar se o título tem uma tradução específica
  if (titleMap[title]) {
    return titleMap[title];
  }
  
  // Se não tiver uma tradução específica, traduza palavra por palavra
  return translateContent(title);
}

// Função para traduzir resumos, incluindo nomes comuns e fazer adaptações específicas
function translateExcerpt(excerpt: string): string {
  // Mapeamento direto para resumos específicos
  const excerptMap: Record<string, string> = {
    "Uma menina descobre um jardim mágico onde as plantas crescem com pensamentos de paz e harmonia.": 
      "A girl discovers a magical garden where plants grow with thoughts of peace and harmony.",
      
    "Como uma lagarta aprendeu que a verdadeira paz vem de dentro.": 
      "How a caterpillar learned that true peace comes from within.",
      
    "Um conto sobre o poder de compartilhar e como a generosidade transforma vidas.": 
      "A tale about the power of sharing and how generosity transforms lives.",
      
    "Uma história sobre como os anjos da guarda protegem e guiam as crianças.": 
      "A story about how guardian angels protect and guide children.",
      
    "Uma bela explicação de como nossa alma aprende e cresce através de múltiplas experiências.": 
      "A beautiful explanation of how our soul learns and grows through multiple experiences.",
      
    "Uma bela estória sobre as asas mágicas que a verdadeira amizade pode proporcionar em nossa jornada de vida.":
      "A beautiful story about the magical wings that true friendship can provide in our life journey.",
      
    "Um pássaro e uma borboleta descobrem o verdadeiro significado da amizade apesar de suas diferenças.":
      "A bird and a butterfly discover the true meaning of friendship despite their differences.",
      
    "Uma pequena estrela ajuda um menino a encontrar respostas para suas grandes perguntas sobre a vida.":
      "A small star helps a boy find answers to his big questions about life.",
      
    "Um coelhinho aprende sobre o valor de compartilhar.":
      "A little rabbit learns about the value of sharing.",
      
    "Como os anjos nos protegem todos os dias.":
      "How angels protect us every day.",
      
    "O poder transformador de perdoar os outros e a nós mesmos.":
      "The transformative power of forgiving others and ourselves.",
      
    "Uma mensagem do coração pode ser o presente mais valioso.":
      "A message from the heart can be the most valuable gift."
  };
  
  // Verifica se o resumo está no mapeamento
  if (excerptMap[excerpt]) {
    return excerptMap[excerpt];
  }
  
  // Se não estiver no mapeamento, usa a tradução de conteúdo padrão
  return translateContent(excerpt);
}

// Função para traduzir conteúdo completo das estórias
function translateContent(text: string): string {
  if (!text) return '';
  
  // Mapeamento direto para conteúdo completo das estórias
  
  // Tradução completa para "As Asas da Amizade" (ID 1)
  if (text.startsWith('Era uma vez um pequeno pássaro chamado Piu')) {
    return `Once upon a time, there was a small bird named Pip who lived in a large tree in the middle of the forest. Pip was very curious and loved to observe all the other animals in the forest.

One day, while flying among the flowers, Pip found a beautiful butterfly named Lila. Her wings were colored with shades of purple and blue that shimmered in the sun.

"Hello!" said Pip, landing on a nearby flower. "I've never seen wings as beautiful as yours!"

Lila was a bit shy, but she smiled. "Thank you! Your feathers are very beautiful too."

From that day on, Pip and Lila began to meet every day. Although they were very different - a bird and a butterfly - they discovered that they had many things in common. Both loved flying among the flowers, feeling the wind on their wings, and watching the sunset.

One day, a strong storm hit the forest. Lila, with her delicate wings, couldn't fly against the strong wind. She took shelter under a leaf, but the rain was getting stronger and stronger.

Pip, worried about his friend, flew bravely against the wind and rain. When he found Lila, he used his wings to protect her from the rain.

"Why did you risk your wings to save me?" asked Lila, surprised.

Pip responded simply: "Because you are my friend, and friends take care of each other, no matter how different we are."

Lila felt her heart fill with gratitude and love. She understood that true friendship goes beyond differences and is present in small gestures of care and affection.

When the storm passed, Pip and Lila flew together again, more united than ever. They shared their story with all the animals of the forest, teaching everyone that true friendship doesn't see differences, only the love that exists in each one's heart.

And so, with their wings - one of feathers and the other colorful - Pip and Lila spread the message that love and friendship can unite even the most different beings.`;
  }
  
  // Tradução completa para "A Estrela Sábia" (ID 3)
  else if (text.startsWith('Todas as noites, antes de dormir, Pedro')) {
    return `Every night, before going to sleep, Peter would look out his bedroom window and talk to the stars. He was only 8 years old, but his head was full of questions about life, the universe, and the why of everything.

Among all the stars in the sky, there was one that shone brighter when Peter spoke. It was a small star, but its glow was intense and comforting. Peter didn't know it, but that was the Wise Star, a very special star that had lived for millions of years and held all the wisdom of the universe.

One night, as Peter was looking at the sky, he asked a question that had been in his heart for a long time:

"Why are there sad things in the world? Why do people suffer?"

At that moment, the Wise Star shone so brightly that it illuminated Peter's entire room. And then, to his surprise, he heard a gentle voice:

"Hello, Peter. I am the Wise Star, and I've been listening to your questions for a long time."

Peter's eyes widened in amazement. "You can talk?" he asked, astonished.

"To those who truly want to listen, yes," replied the star. "And you, Peter, have a heart that seeks to understand."

"So, can you tell me why there are sad things in the world?" Peter asked again.

The Wise Star shone gently as it answered:

"The world, Peter, is like a big school. Every sad moment, every challenge, is like a lesson that helps us grow. Without rain, flowers wouldn't grow. Without challenges, our hearts wouldn't learn compassion and love."

Peter thought for a moment. "But why do some people suffer more than others? It doesn't seem fair."

"Each soul has its own path," the star explained. "Some choose harder lessons because their spirits want to grow more. But remember, Peter, no one suffers alone. There are always invisible hands of love supporting us, even in the darkest moments."

Over the following nights, Peter continued his conversations with the Wise Star. He learned about the importance of kindness, about how every action affects the whole universe, and about how love is the most powerful force that exists.

One night, Peter asked, "How can I make the world better?"

The Wise Star twinkled with joy. "By being who you are, Peter. By caring, by asking questions, by treating everyone with kindness. Each small gesture of love creates ripples that spread across the world."

As Peter grew older, he never forgot the lessons from the Wise Star. He became a man who looked at the world with compassion, who sought to understand before judging, and who believed in the power of love to transform even the saddest moments.

And sometimes, on special nights, he still looked up at the sky and saw the Wise Star shining brightly, reminding him that wisdom isn't just about having answers, but about keeping a heart open to wonder and love.`;
  }
  
  // Tradução completa para "O Coelho Generoso" (ID 4)
  else if (text.startsWith('Na floresta encantada, vivia um coelhinho chamado Tico')) {
    return `In the enchanted forest, there lived a little rabbit named Tico. He had a very comfortable burrow and a garden with the most delicious carrots, lettuces, and cabbages ever seen. Tico was very skilled at growing vegetables, and his garden was the most beautiful in the forest.

But Tico had a small problem: he didn't like to share. When other animals passed by his garden and admired his vegetables, Tico quickly hid everything he could and said he didn't have enough even for himself.

One day, a great drought hit the forest. The stream dried up, the plants withered, and all the animals began to go hungry. All except Tico, who had a small well in his burrow and managed to keep his garden green and productive.

The forest animals, hungry and thirsty, went to Tico's burrow to ask for help.

"Please, Tico," said Zico the Squirrel, "my little ones are hungry. Could you give us some of your carrots?"

"My family is thirsty," said Olivia the Owl. "Could we drink some water from your well?"

But Tico, as always, denied help. "I don't have enough even for myself," he said, closing the door of his burrow.

That night, Tico had a strange dream. He dreamed that he was lost in an unknown forest, very hungry and thirsty. He knocked on the doors of several burrows, asking for help, but all the animals said exactly what he always said: "I don't have enough even for myself."

Tico woke up feeling sad and confused. Looking out the window of his burrow, he saw the suffering of the other animals. For the first time, he put himself in their place and felt their pain.

That same day, Tico opened the door of his burrow and called all the animals.

"I'm sorry for being selfish," he said, his eyes filled with tears. "From now on, my garden and my well are for everyone. We're going to share what we have."

The animals were surprised by Tico's change, but very happy. They thanked him and shared the vegetables among themselves, ensuring that each family received a part.

To Tico's surprise, many animals offered help in return. Zico the Squirrel offered to help protect the garden from insects. Olivia the Owl offered to keep watch during the night. And so, many animals joined together to help Tico.

Over time, Tico's garden became even more beautiful and productive than before, thanks to everyone's help. And most importantly: Tico discovered that true happiness is not in having many things for oneself, but in sharing what we have with others.

And so, the little rabbit who was once known as "Tico, the selfish," came to be affectionately called "Tico, the generous," and his heart never felt empty again.`;
  }
  
  // Tradução completa para "Anjinhos da Guarda" (ID 5)
  else if (text.startsWith('Você já se perguntou se tem alguém especial')) {
    return `Have you ever wondered if there's someone special watching over you all the time? Someone who is always there, even when you can't see them? This is the story of Guardian Angels.

Every boy and girl, from the moment they are born, receives a very special friend: a Guardian Angel. This angel has a very important mission: to care for, protect, and guide their little human friend at all times in life.

Guardian Angels are very special. They have soft, shining wings, but no one can see them with ordinary eyes. Only with the eyes of the heart can we feel their loving presence.

When Louise was born, her Guardian Angel, named Light, was there at the hospital, smiling with love. From that day on, Light never left Louise's side.

When Louise was taking her first steps, Light was there, with arms extended, ready to support her if she fell. When Louise went to school for the first time, Light sat beside her, calming her nervous heart.

One day, Louise was riding her bicycle when she lost control on a downhill slope. Just when it seemed she was going to fall, she felt as if invisible hands were holding her, helping her regain her balance. It was Light, her faithful Guardian Angel, protecting her.

At night, before sleeping, Louise felt an inexplicable peace. It was Light, sitting beside her bed, singing songs of love that only the heart could hear, chasing away fears and bringing sweet dreams.

But Guardian Angels aren't just there to protect us from physical dangers. They also help us make the right choices and be better people.

When Louise was tempted to lie to her mother about a broken vase, she felt a gentle touch on her shoulder and heard a soft whisper in her heart: "Tell the truth, Louise." It was Light, guiding her to do what was right.

As Louise grew, Light continued to accompany her. In moments of sadness, the angel brought comfort. In moments of doubt, the angel brought clarity. And in moments of joy, the angel celebrated with her.

One night, Louise, now a teenager, asked before sleeping, "Are you there, my angel?" And for a brief moment, she thought she saw a soft light flickering in her room, and felt a warmth in her heart. That was Light's way of saying, "Yes, I'm always here."

Guardian Angels never leave us. Even when we grow up and think we don't need help anymore, they remain by our side, invisible but present, helping in ways we can't imagine.

So next time you feel a sudden warmth in your heart, an unexpected peace, or as if someone is watching over you with love, remember: it's probably your Guardian Angel, your eternal friend, saying hello.`;
  }
  
  // Tradução completa para "A Jornada da Alma" (ID 6)
  else if (text.startsWith('No quintal da casa do Vovô João')) {
    return `In Grandpa John's backyard, there was a very, very old tree. It was a majestic oak, with strong branches that extended like welcoming arms and leaves that danced gently with the breeze. Everyone called it "The Friendly Tree."

Michael, a 6-year-old boy, loved spending vacations at Grandpa John's house. And his favorite place was, without a doubt, under the Friendly Tree. There, he read his books, played with his toys, and often simply sat to listen to the soft rustling of the leaves.

One day, Grandpa John found Michael hugging the tree trunk, with his ear pressed against the rough bark.

"What are you doing, Michael?" asked Grandpa, curious.

"I'm listening to the tree, Grandpa," replied Michael with shining eyes. "It tells stories."

Grandpa John smiled. He used to listen to the tree when he was a child too. He sat down beside his grandson and began to tell the story of the Friendly Tree.

"This tree, Michael, was planted by my grandfather, your great-great-grandfather, more than a hundred years ago. He planted it when my father, your great-grandfather, was born. And since then, it has been a friend to our family. It gives us shade on hot days, shelter for the birds, and beauty in all seasons."

Michael looked up, admiring the strong branches and verdant leaves. "It's very special, isn't it, Grandpa?"

"More than you imagine, Michael," replied Grandpa John with a gentle smile. "This tree, like all living things, has a soul. And like our souls, it has a story that goes beyond what we can see."

Michael was intrigued. "A soul? Like our soul?"

"Yes," said Grandpa John. "Our body is like the tree's trunk and branches. It's what we can see and touch. But our soul is something much deeper, much more special. It's our essence, what makes us who we are."

Grandpa John continued, pointing to the tree. "See how big and strong it is? It didn't grow that way overnight. It took years, with rain and sun, storms and calm days. And our soul is just like that. It doesn't learn everything at once, in a single life. It needs many experiences, many journeys, to grow and learn all it needs to."

Michael thought for a moment. "So, our soul is older than our body?"

"Much older," replied Grandpa John. "Our soul has had many experiences before coming to this body and will have many more after we leave it. Each life is like a school year for the soul, where it learns specific lessons."

"But why can't we remember our other lives, Grandpa?"

"It's like when you wake up in the morning and don't remember all your dreams from the night. But even without remembering, the lessons remain in your heart. That's why some people seem to be born knowing certain things, or have natural talents, or immediately feel a connection with certain people or places."

Michael hugged his knees, thinking deeply. "So, are we like the tree? We grow, learn, and then...?"

"And then we shed our leaves, like the tree in autumn, but our essence, our soul, continues. And when the time is right, we're reborn, like the tree's new leaves in spring, carrying all the wisdom we've gathered along the way."

From that day on, whenever Michael sat under the Friendly Tree, he felt a special connection, not just with the tree, but with the whole universe. He understood that life is a continuous journey of the soul, a journey of learning, growing, and loving.

And sometimes, when he placed his ear against the tree trunk, he could almost hear it telling stories of all the souls that, like his, are on their eternal journey of discovery and love.`;
  }
  
  // Tradução completa para "O Jardim da Paz" (ID 2)
  else if (text.startsWith('No centro de uma pequena cidade, havia um terreno abandonado')) {
    return `In the center of a small town, there was an abandoned plot of land that nobody visited. People hurried by, always too busy to notice that sad, empty space.

Sophie, a 7-year-old girl, had eyes that saw beyond what adults could see. One day, while walking to school with her mother, she felt a special energy coming from that place.

"Mommy, can I go see that empty lot?" Sophie asked.

Her mother, surprised by her daughter's interest in such an abandoned place, agreed with a bit of hesitation.

Upon entering the lot, Sophie felt a gentle breeze and heard a whisper: "Welcome to the Garden of Peace."

Sophie looked around, confused. There was no garden at all, just dry earth and some stones. "What garden?" she asked.

The voice, gentle like the breeze, answered: "The garden that exists in your thoughts and in your heart. The garden that can bloom with your feelings of peace."

Intrigued, Sophie sat on the ground and closed her eyes. She began to imagine a beautiful garden with colorful flowers, leafy trees, and a small lake with crystal clear waters. In her mind, she filled the garden with thoughts of peace, harmony, and love.

When she opened her eyes, Sophie was amazed. A small white flower had grown exactly where she was sitting.

"It's a miracle!" she exclaimed.

"It's not a miracle," said the voice. "It's the power of your peaceful thoughts. Every thought of love and harmony you have is like a seed that can bloom and transform the world around you."

From that day on, Sophie visited the lot every day after school. During each visit, she would sit, close her eyes, and fill her mind with thoughts of peace. And each day, more flowers would grow.

Other children from the neighborhood, curious about what Sophie was doing, began to join her. Sophie taught them about the Garden of Peace and how their positive thoughts could make flowers grow.

In a few months, the abandoned lot transformed into a beautiful garden, full of flowers, trees, and even a small lake, exactly as Sophie had imagined. The people of the town, who used to hurry past, now stopped to admire the garden and feel the peace that emanated from it.

The Garden of Peace became a special place in the town, where people of all ages went to find tranquility. And Sophie, with her childlike wisdom, taught everyone a valuable lesson: peace begins within us, in our thoughts and feelings, and has the power to transform not only our lives but also the world around us.`;
  }
  
  // Traduz termos específicos
  let translated = text
    .replace(/estória/g, "story")
    .replace(/estórias/g, "stories")
    .replace(/Estória/g, "Story")
    .replace(/Estórias/g, "Stories")
    .replace(/criança/g, "child")
    .replace(/crianças/g, "children")
    .replace(/Criança/g, "Child")
    .replace(/Crianças/g, "Children")
    .replace(/amigo/g, "friend")
    .replace(/amigos/g, "friends")
    .replace(/Amigo/g, "Friend")
    .replace(/Amigos/g, "Friends")
    .replace(/escola/g, "school")
    .replace(/Escola/g, "School")
    .replace(/professor/g, "teacher")
    .replace(/professora/g, "teacher")
    .replace(/professores/g, "teachers")
    .replace(/Professor/g, "Teacher")
    .replace(/Professora/g, "Teacher")
    .replace(/Professores/g, "Teachers")
    .replace(/jardim/g, "garden")
    .replace(/Jardim/g, "Garden")
    .replace(/floresta/g, "forest")
    .replace(/Floresta/g, "Forest")
    .replace(/estrela/g, "star")
    .replace(/estrelas/g, "stars")
    .replace(/Estrela/g, "Star")
    .replace(/Estrelas/g, "Stars")
    .replace(/menino/g, "boy")
    .replace(/menina/g, "girl")
    .replace(/meninos/g, "boys")
    .replace(/meninas/g, "girls")
    .replace(/Menino/g, "Boy")
    .replace(/Menina/g, "Girl")
    .replace(/Meninos/g, "Boys")
    .replace(/Meninas/g, "Girls")
    .replace(/céu/g, "sky")
    .replace(/Céu/g, "Sky")
    .replace(/coração/g, "heart")
    .replace(/Coração/g, "Heart")
    .replace(/amor/g, "love")
    .replace(/Amor/g, "Love")
    .replace(/paz/g, "peace")
    .replace(/Paz/g, "Peace")
    .replace(/sabedoria/g, "wisdom")
    .replace(/Sabedoria/g, "Wisdom")
    .replace(/natureza/g, "nature")
    .replace(/Natureza/g, "Nature")
    .replace(/família/g, "family")
    .replace(/Família/g, "Family")
    .replace(/amizade/g, "friendship")
    .replace(/Amizade/g, "Friendship")
    .replace(/lagarta/g, "caterpillar")
    .replace(/Lagarta/g, "Caterpillar")
    .replace(/borboleta/g, "butterfly")
    .replace(/Borboleta/g, "Butterfly")
    .replace(/mamãe/g, "mommy")
    .replace(/Mamãe/g, "Mommy")
    .replace(/papai/g, "daddy")
    .replace(/Papai/g, "Daddy")
    .replace(/joaninha/g, "ladybug")
    .replace(/Joaninha/g, "Ladybug")
    .replace(/pequeno/g, "small")
    .replace(/pequena/g, "small")
    .replace(/pequenos/g, "small")
    .replace(/pequenas/g, "small")
    .replace(/Pequeno/g, "Small")
    .replace(/Pequena/g, "Small")
    .replace(/Pequenos/g, "Small")
    .replace(/Pequenas/g, "Small")
    .replace(/árvore/g, "tree")
    .replace(/árvores/g, "trees")
    .replace(/Árvore/g, "Tree")
    .replace(/Árvores/g, "Trees")
    .replace(/flor/g, "flower")
    .replace(/flores/g, "flowers")
    .replace(/Flor/g, "Flower")
    .replace(/Flores/g, "Flowers")
    .replace(/água/g, "water")
    .replace(/Água/g, "Water")
    .replace(/pássaro/g, "bird")
    .replace(/pássaros/g, "birds")
    .replace(/Pássaro/g, "Bird")
    .replace(/Pássaros/g, "Birds")
    .replace(/animais/g, "animals")
    .replace(/Animais/g, "Animals")
    .replace(/caminho/g, "path")
    .replace(/Caminho/g, "Path")
    .replace(/mundo/g, "world")
    .replace(/Mundo/g, "World")
    .replace(/vida/g, "life")
    .replace(/Vida/g, "Life")
    .replace(/tempo/g, "time")
    .replace(/Tempo/g, "Time")
    .replace(/anos/g, "years")
    .replace(/ano/g, "year")
    .replace(/dia/g, "day")
    .replace(/dias/g, "days")
    .replace(/noite/g, "night")
    .replace(/noites/g, "nights")
    .replace(/Dia/g, "Day")
    .replace(/Dias/g, "Days")
    .replace(/Noite/g, "Night")
    .replace(/Noites/g, "Nights")
    .replace(/cidade/g, "city")
    .replace(/Cidade/g, "City")
    .replace(/onde/g, "where")
    .replace(/como/g, "how")
    .replace(/Como/g, "How")
    .replace(/que/g, "that")
    .replace(/muita/g, "a lot of")
    .replace(/muito/g, "a lot")
    .replace(/Muito/g, "A lot")
    .replace(/Muita/g, "A lot of")
    .replace(/através/g, "through")
    .replace(/dentro/g, "inside")
    .replace(/fora/g, "outside")
    .replace(/sobre/g, "about")
    .replace(/entre/g, "between")
    .replace(/junto/g, "together")
    .replace(/juntos/g, "together")
    .replace(/juntas/g, "together")
    .replace(/olhos/g, "eyes")
    .replace(/olho/g, "eye")
    .replace(/Olhos/g, "Eyes")
    .replace(/mão/g, "hand")
    .replace(/mãos/g, "hands")
    .replace(/Mão/g, "Hand")
    .replace(/Mãos/g, "Hands")
    .replace(/encontrar/g, "find")
    .replace(/encontrou/g, "found")
    .replace(/encontra/g, "finds")
    .replace(/Encontrar/g, "Find")
    .replace(/pensamento/g, "thought")
    .replace(/pensamentos/g, "thoughts")
    .replace(/Pensamento/g, "Thought")
    .replace(/Pensamentos/g, "Thoughts")
    .replace(/sentimento/g, "feeling")
    .replace(/sentimentos/g, "feelings")
    .replace(/Sentimento/g, "Feeling")
    .replace(/Sentimentos/g, "Feelings")
    .replace(/presente/g, "gift")
    .replace(/presentes/g, "gifts")
    .replace(/Presente/g, "Gift")
    .replace(/Presentes/g, "Gifts")
    .replace(/irmão/g, "brother")
    .replace(/irmã/g, "sister")
    .replace(/irmãos/g, "siblings")
    .replace(/Irmão/g, "Brother")
    .replace(/Irmã/g, "Sister")
    .replace(/Irmãos/g, "Siblings")
    .replace(/filho/g, "son")
    .replace(/filha/g, "daughter")
    .replace(/filhos/g, "children")
    .replace(/Filho/g, "Son")
    .replace(/Filha/g, "Daughter")
    .replace(/Filhos/g, "Children")
    .replace(/mãe/g, "mother")
    .replace(/pai/g, "father")
    .replace(/Mãe/g, "Mother")
    .replace(/Pai/g, "Father")
    .replace(/voz/g, "voice")
    .replace(/vozes/g, "voices")
    .replace(/Voz/g, "Voice")
    .replace(/Vozes/g, "Voices")
    .replace(/história/g, "history")
    .replace(/História/g, "History")
    .replace(/histórias/g, "histories")
    .replace(/Histórias/g, "Histories");
    
  // Traduz nomes próprios comuns
  translated = translated
    .replace(/\bMaria\b/g, "Mary")
    .replace(/\bJoão\b/g, "John")
    .replace(/\bJosé\b/g, "Joseph")
    .replace(/\bPedro\b/g, "Peter")
    .replace(/\bLuísa\b/g, "Louise")
    .replace(/\bAntônio\b/g, "Anthony")
    .replace(/\bSofia\b/g, "Sophie")
    .replace(/\bCarlos\b/g, "Charles")
    .replace(/\bPaulo\b/g, "Paul")
    .replace(/\bAna\b/g, "Anne")
    .replace(/\bBeatriz\b/g, "Beatrice")
    .replace(/\bRoberto\b/g, "Robert")
    .replace(/\bLucas\b/g, "Luke")
    .replace(/\bMateus\b/g, "Matthew")
    .replace(/\bMariana\b/g, "Marianne")
    .replace(/\bDeus\b/g, "God")
    .replace(/\bJesus\b/g, "Jesus");
    
  return translated;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Cache middleware para rotas estáticas, mas não aquelas afetadas pelo idioma
  // Não aplicamos cache nas rotas que variam por idioma, para garantir respostas corretas
  const nonCacheRoutes = [
    '/api/categories',
    '/api/stories/featured',
    '/api/stories/newest',
    '/api/testimonials',
    '/api/stories/related',
  ];
  
  app.use('/api', (req, res, next) => {
    // Se a rota estiver na lista de exclusão ou tiver parâmetro lang, não aplicamos o cache
    if (nonCacheRoutes.some(route => req.path.startsWith(route)) || req.query.lang) {
      return next();
    } 
    // Caso contrário, aplicamos o cache
    cacheMiddleware(300)(req, res, next);
  });
  
  // API routes
  
  // Category routes
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      
      // Verifica se o idioma está definido no parâmetro de consulta
      const langParam = String(req.query.lang || '');
      const acceptLanguage = req.headers['accept-language'] || '';
      const lang = langParam.toLowerCase() === 'en' || acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
      
      if (lang === 'en') {
        // Usa as traduções do banco de dados para as categorias
        const translatedCategories = categories.map(category => ({
          ...category,
          name: category.nameEn || category.name,
          description: category.descriptionEn || category.description
        }));
        return res.json(translatedCategories);
      }
      
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching categories" });
    }
  });

  app.get("/api/categories/:id", async (req, res) => {
    try {
      const category = await storage.getCategoryById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Error fetching category" });
    }
  });

  // Story routes
  app.get("/api/stories", async (req, res) => {
    try {
      const categoryId = req.query.categoryId as string;
      let stories;
      
      if (categoryId) {
        stories = await storage.getStoriesByCategory(categoryId);
      } else {
        stories = await storage.getStories();
      }
      
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching stories" });
    }
  });

  app.get("/api/stories/featured", async (req, res) => {
    try {
      const stories = await storage.getStoriesFeatured();
      
      // Adiciona logs para depuração
      console.log('GET /api/stories/featured - Query params:', req.query);
      console.log('Headers accept-language:', req.headers['accept-language']);
      
      // Verifica se o idioma está definido no parâmetro de consulta
      // Convertemos para string para garantir que a comparação seja correta
      const langParam = String(req.query.lang || '');
      const lang = langParam.toLowerCase() === 'en' ? 'en' : 'pt-BR';
      console.log('Language determined:', lang);
      
      // Se o idioma for inglês, usa as traduções do banco de dados
      if (lang === 'en') {
        const translatedStories = stories.map(story => {
          return {
            ...story,
            // Usa os campos traduzidos se existirem, caso contrário mantém os originais
            title: story.titleEn || story.title,
            excerpt: story.excerptEn || story.excerpt,
            content: story.contentEn || story.content,
            ageRange: story.ageRangeEn || story.ageRange
          };
        });
        
        console.log('Sending translated stories from database');
        return res.json(translatedStories);
      }
      
      console.log('Sending original stories');
      res.json(stories);
    } catch (error) {
      console.error('Error in /api/stories/featured:', error);
      res.status(500).json({ message: "Error fetching featured stories" });
    }
  });

  app.get("/api/stories/newest", async (req, res) => {
    try {
      const stories = await storage.getStoriesNewest();
      
      // Adiciona logs para depuração
      console.log('GET /api/stories/newest - Query params:', req.query);
      console.log('Headers accept-language:', req.headers['accept-language']);
      
      // Verifica se o idioma está definido no parâmetro de consulta
      // Convertemos para string para garantir que a comparação seja correta
      const langParam = String(req.query.lang || '');
      const lang = langParam.toLowerCase() === 'en' ? 'en' : 'pt-BR';
      console.log('Language determined:', lang);
      
      // Se o idioma for inglês, usa as traduções do banco de dados
      if (lang === 'en') {
        const translatedStories = stories.map(story => {
          return {
            ...story,
            // Usa os campos traduzidos se existirem, caso contrário mantém os originais
            title: story.titleEn || story.title,
            excerpt: story.excerptEn || story.excerpt,
            content: story.contentEn || story.content,
            ageRange: story.ageRangeEn || story.ageRange
          };
        });
        
        console.log('Sending translated newest stories from database');
        return res.json(translatedStories);
      }
      
      console.log('Sending original newest stories');
      res.json(stories);
    } catch (error) {
      console.error('Error in /api/stories/newest:', error);
      res.status(500).json({ message: "Error fetching newest stories" });
    }
  });

  app.get("/api/stories/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.json([]);
      }
      
      const stories = await storage.searchStories(query);
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Error searching stories" });
    }
  });

  app.get("/api/stories/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid story ID" });
      }
      
      const story = await storage.getStoryById(id);
      if (!story) {
        return res.status(404).json({ message: "Story not found" });
      }
      
      // Verifica se o idioma está definido no parâmetro de consulta
      const langParam = String(req.query.lang || '');
      const acceptLanguage = req.headers['accept-language'] || '';
      const lang = langParam.toLowerCase() === 'en' || acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
      
      if (lang === 'en') {
        // Usa as traduções do banco de dados
        const translatedStory = {
          ...story,
          // Usa os campos traduzidos se existirem, caso contrário usa traduções dinâmicas
          title: story.titleEn || translateTitle(story.title),
          excerpt: story.excerptEn || translateExcerpt(story.excerpt),
          content: story.contentEn || translateContent(story.content),
          ageRange: story.ageRangeEn || story.ageRange.replace(/anos/g, "years old")
        };
        return res.json(translatedStory);
      }
      
      res.json(story);
    } catch (error) {
      res.status(500).json({ message: "Error fetching story" });
    }
  });

  app.get("/api/stories/by-category/:categoryId", async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      if (!categoryId) {
        return res.status(400).json({ message: "Category ID is required" });
      }
      
      const stories = await storage.getStoriesByCategory(categoryId);
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching stories by category" });
    }
  });

  app.get("/api/stories/related/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid story ID" });
      }
      
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 3;
      const stories = await storage.getRelatedStories(id, limit);
      
      // Verifica se o idioma está definido no parâmetro de consulta
      const langParam = String(req.query.lang || '');
      const acceptLanguage = req.headers['accept-language'] || '';
      const lang = langParam.toLowerCase() === 'en' || acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
      
      if (lang === 'en') {
        // Usa as traduções do banco de dados
        const translatedStories = stories.map(story => ({
          ...story,
          // Usa os campos traduzidos se existirem, caso contrário usa traduções dinâmicas
          title: story.titleEn || translateTitle(story.title),
          excerpt: story.excerptEn || translateExcerpt(story.excerpt),
          content: story.contentEn || translateContent(story.content),
          ageRange: story.ageRangeEn || story.ageRange.replace(/anos/g, "years old"),
          // Traduzir nome da categoria
          categoryName: (story.categoryId === 'amor' && 'Love') ||
                       (story.categoryId === 'paz' && 'Peace') ||
                       (story.categoryId === 'sabedoria' && 'Wisdom') ||
                       (story.categoryId === 'natureza' && 'Nature') ||
                       (story.categoryId === 'familia' && 'Family') ||
                       (story.categoryId === 'amizade' && 'Friendship') ||
                       (story.categoryId === 'bondade' && 'Kindness') ||
                       (story.categoryId === 'protecao' && 'Protection') ||
                       story.categoryName
        }));
        return res.json(translatedStories);
      }
      
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching related stories" });
    }
  });

  // Testimonial routes
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      
      // Adiciona logs para depuração
      console.log('GET /api/testimonials - Query params:', req.query);
      console.log('Headers accept-language:', req.headers['accept-language']);
      
      // Corrige qualquer referência a "Estrelinha de Luz" para "STELOOS"
      // e também "histórias" para "estórias"
      const correctedTestimonials = testimonials.map(t => {
        return {
          ...t,
          content: t.content
            .replace(/Estrelinha de Luz/g, "STELOOS")
            .replace(/histórias/g, "estórias")
        };
      });
      
      // Verifica se o idioma está definido no parâmetro de consulta
      // Convertemos para string para garantir que a comparação seja correta
      const langParam = String(req.query.lang || '');
      const lang = langParam.toLowerCase() === 'en' ? 'en' : 'pt-BR';
      console.log('Language determined for testimonials:', lang);
      
      // Se o idioma for inglês, usa os campos traduzidos do banco de dados
      if (lang === 'en') {
        const translatedTestimonials = correctedTestimonials.map(t => {
          return {
            ...t,
            // Usa os campos traduzidos se existirem, caso contrário usa traduções estáticas
            name: t.nameEn || t.name,
            relation: t.relationEn || t.relation,
            content: t.contentEn || t.content,
          };
        });
        
        console.log('Sending translated testimonials from database');
        return res.json(translatedTestimonials);
      }
      
      console.log('Sending original testimonials');
      // Retorna a versão em português por padrão (já corrigida)
      res.json(correctedTestimonials);
    } catch (error) {
      console.error('Error in /api/testimonials:', error);
      res.status(500).json({ message: "Error fetching testimonials" });
    }
  });

  // Newsletter routes
  app.post("/api/newsletter", async (req, res) => {
    try {
      const parseResult = insertNewsletterSubscriberSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ 
          message: "Invalid email format",
          errors: parseResult.error.errors 
        });
      }
      
      const subscriber = await storage.addNewsletterSubscriber(parseResult.data);
      res.status(201).json({ message: "Subscription successful" });
    } catch (error) {
      res.status(500).json({ message: "Error processing subscription" });
    }
  });

  // Endpoint para listar assinantes da newsletter (para o painel administrativo)
  app.get("/api/newsletter/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getNewsletterSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching newsletter subscribers" });
    }
  });

  // Cache management endpoints - restricted to development environment
  if (process.env.NODE_ENV === 'development') {
    // Import dynamically since these are dev-only endpoints
    import('./cache.js').then(({ clearCache, getCacheStats }) => {
      app.get("/api/_admin/cache/stats", (req, res) => {
        res.json(getCacheStats());
      });
      
      app.post("/api/_admin/cache/clear", (req, res) => {
        clearCache();
        res.json({ message: "Cache cleared successfully" });
      });
    });
  }

  const httpServer = createServer(app);
  return httpServer;
}
