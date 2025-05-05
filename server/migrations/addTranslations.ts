import { db } from "../db";
import { 
  stories, 
  categories, 
  testimonials 
} from "@shared/schema";
import { eq } from "drizzle-orm";

// Função para traduzir título
function translateTitle(title: string): string {
  // Mapear títulos específicos
  const titleMap: Record<string, string> = {
    "As Asas da Amizade": "The Wings of Friendship",
    "O Jardim da Paz": "The Garden of Peace",
    "A Estrela Sábia": "The Wise Star",
    "O Coelho Generoso": "The Generous Rabbit",
    "Anjinhos da Guarda": "Guardian Angels",
    "A Jornada da Alma": "The Journey of the Soul",
    "O Milagre do Perdão": "The Miracle of Forgiveness",
    "A Mensagem do Coração": "The Message from the Heart",
    "A Árvore Amiga": "The Friendly Tree",
    "O Pote de Sabedoria": "The Pot of Wisdom",
    // Adicione mais mapeamentos conforme necessário
  };

  // Verificar se o título está no mapeamento
  if (titleMap[title]) {
    return titleMap[title];
  }

  // Se não estiver no mapeamento, fazer substituições básicas
  return title
    .replace(/^A\s+/g, "The ")
    .replace(/^O\s+/g, "The ")
    .replace(/^As\s+/g, "The ")
    .replace(/^Os\s+/g, "The ");
}

// Função para traduzir faixa etária
function translateAgeRange(ageRange: string): string {
  return ageRange
    .replace(/anos/g, "years old")
    .replace(/ano/g, "year old");
}

// Traduções completas para estórias específicas
const storyContentTranslations: Record<string, { 
  content: string, 
  excerpt: string 
}> = {
  "As Asas da Amizade": {
    excerpt: "A bird and a butterfly discover the true meaning of friendship despite their differences.",
    content: `Once upon a time, there was a small bird named Pip who lived in a large tree in the middle of the forest. Pip was very curious and loved to observe all the other animals in the forest.

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

And so, with their wings - one of feathers and the other colorful - Pip and Lila spread the message that love and friendship can unite even the most different beings.`
  },
  "O Jardim da Paz": {
    excerpt: "A girl discovers a magical garden where plants grow with thoughts of peace and harmony.",
    content: `In the center of a small town, there was an abandoned plot of land that nobody visited. People hurried by, always too busy to notice that sad, empty space.

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

The Garden of Peace became a special place in the town, where people of all ages went to find tranquility. And Sophie, with her childlike wisdom, taught everyone a valuable lesson: peace begins within us, in our thoughts and feelings, and has the power to transform not only our lives but also the world around us.`
  },
  "A Estrela Sábia": {
    excerpt: "A small star helps a boy find answers to his big questions about life.",
    content: `Every night, before going to sleep, Peter would look out his bedroom window and talk to the stars. He was only 8 years old, but his head was full of questions about life, the universe, and the why of everything.

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

And sometimes, on special nights, he still looked up at the sky and saw the Wise Star shining brightly, reminding him that wisdom isn't just about having answers, but about keeping a heart open to wonder and love.`
  },
  "O Coelho Generoso": {
    excerpt: "A little rabbit learns about the value of sharing.",
    content: `In the enchanted forest, there lived a little rabbit named Tico. He had a very comfortable burrow and a garden with the most delicious carrots, lettuces, and cabbages ever seen. Tico was very skilled at growing vegetables, and his garden was the most beautiful in the forest.

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

And so, the little rabbit who was once known as "Tico, the selfish," came to be affectionately called "Tico, the generous," and his heart never felt empty again.`
  },
  "Anjinhos da Guarda": {
    excerpt: "How angels protect us every day.",
    content: `Have you ever wondered if there's someone special watching over you all the time? Someone who is always there, even when you can't see them? This is the story of Guardian Angels.

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

So next time you feel a sudden warmth in your heart, an unexpected peace, or as if someone is watching over you with love, remember: it's probably your Guardian Angel, your eternal friend, saying hello.`
  },
  "A Jornada da Alma": {
    excerpt: "A beautiful explanation of how our soul learns and grows through multiple experiences.",
    content: `In Grandpa John's backyard, there was a very, very old tree. It was a majestic oak, with strong branches that extended like welcoming arms and leaves that danced gently with the breeze. Everyone called it "The Friendly Tree."

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

And sometimes, when he placed his ear against the tree trunk, he could almost hear it telling stories of all the souls that, like his, are on their eternal journey of discovery and love.`
  }
};

// Função para traduzir resumos
function translateExcerpt(excerpt: string): string {
  // Mapear resumos específicos
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

  // Verificar se o resumo está no mapeamento
  if (excerptMap[excerpt]) {
    return excerptMap[excerpt];
  }

  // Se não estiver no mapeamento, fazer substituições básicas
  return excerpt;
}

// Função para traduzir categorias
function translateCategory(name: string): string {
  const categoryMap: Record<string, string> = {
    "Amor": "Love",
    "Paz": "Peace",
    "Sabedoria": "Wisdom",
    "Natureza": "Nature",
    "Família": "Family",
    "Amizade": "Friendship",
    "Bondade": "Kindness",
    "Compaixão": "Compassion",
    // Adicione mais mapeamentos conforme necessário
  };

  return categoryMap[name] || name;
}

// Função para traduzir testemunhos
function translateTestimonial(content: string): string {
  // Esta é uma função simplificada. Para um projeto real, 
  // você precisaria de traduções mais elaboradas.
  return content
    .replace(/Steloos/g, "Steloos")
    .replace(/meu filho/g, "my son")
    .replace(/minha filha/g, "my daughter")
    .replace(/estórias/g, "stories")
    .replace(/valores/g, "values")
    .replace(/amor/g, "love")
    .replace(/paz/g, "peace");
}

// Função principal para migrar traduções
export async function migrateTranslations() {
  console.log("Iniciando migração de traduções...");

  // Traduzir categorias
  const allCategories = await db.select().from(categories);
  for (const category of allCategories) {
    await db.update(categories)
      .set({ 
        nameEn: translateCategory(category.name),
        descriptionEn: category.description ? translateCategory(category.description) : null
      })
      .where(eq(categories.id, category.id));
  }
  console.log(`Traduzidas ${allCategories.length} categorias.`);

  // Traduzir estórias
  const allStories = await db.select().from(stories);
  for (const story of allStories) {
    // Verificar se temos uma tradução completa para esta estória
    const fullTranslation = storyContentTranslations[story.title];
    
    await db.update(stories)
      .set({ 
        titleEn: translateTitle(story.title),
        excerptEn: fullTranslation ? 
          fullTranslation.excerpt : 
          translateExcerpt(story.excerpt),
        contentEn: fullTranslation ? 
          fullTranslation.content : 
          "Translation pending. Please check back later.",
        ageRangeEn: translateAgeRange(story.ageRange)
      })
      .where(eq(stories.id, story.id));
  }
  console.log(`Traduzidas ${allStories.length} estórias.`);

  // Traduzir testemunhos
  const allTestimonials = await db.select().from(testimonials);
  for (const testimonial of allTestimonials) {
    await db.update(testimonials)
      .set({ 
        nameEn: testimonial.name.replace(/Ana/g, "Anne")
          .replace(/João/g, "John")
          .replace(/Maria/g, "Mary")
          .replace(/José/g, "Joseph")
          .replace(/Carlos/g, "Charles")
          .replace(/Pedro/g, "Peter"),
        relationEn: testimonial.relation
          .replace(/Mãe/g, "Mother")
          .replace(/Pai/g, "Father")
          .replace(/anos/g, "years old")
          .replace(/ano/g, "year old")
          .replace(/da/g, "of")
          .replace(/do/g, "of"),
        contentEn: translateTestimonial(testimonial.content)
      })
      .where(eq(testimonials.id, testimonial.id));
  }
  console.log(`Traduzidos ${allTestimonials.length} testemunhos.`);

  console.log("Migração de traduções concluída!");
}

// Executar a função principal se este arquivo for executado diretamente
if (require.main === module) {
  migrateTranslations()
    .then(() => {
      console.log("Script de migração finalizado com sucesso!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Erro durante a migração:", error);
      process.exit(1);
    });
}