// Este script atualiza as traduções para inglês das estórias 38 e 39
import { Pool } from '@neondatabase/serverless';
import ws from 'ws';

// Configuração da conexão com o banco de dados
import * as neonConfig from '@neondatabase/serverless';
neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function updateTranslations() {
  try {
    console.log('Iniciando atualização das traduções das estórias 38 e 39...');

    // Atualizando estória 38 - título e resumo
    await pool.query(`
      UPDATE stories 
      SET 
        title_en = 'The Club of Unlikely Heroes',
        excerpt_en = 'Four very different children discover that together they form an unbeatable team.'
      WHERE id = 38
    `);
    console.log('Título e resumo da estória 38 atualizados com sucesso.');

    // Atualizando estória 39 - título e resumo
    await pool.query(`
      UPDATE stories 
      SET 
        title_en = 'The Boy on the Other Side of the Wall',
        excerpt_en = 'How a girl''s curiosity transforms a barrier into a bridge for a special friendship.'
      WHERE id = 39
    `);
    console.log('Título e resumo da estória 39 atualizados com sucesso.');

    // Atualizando conteúdo da estória 38
    const content38 = `At Monteiro Lobato Municipal School, at the back of the yard, there was a small treehouse that no one had used for years. It was a bit worn by time, with some loose boards and a creaking ladder, but it was still a great hiding place – at least that is what Tommy thought when he was looking for a place to read his comics in peace, away from the teasing of the older boys.

Tommy was 10 years old, wore glasses with red frames, was skinny and shy, and loved superhero stories more than anything else in the world. The problem was that, in real life, he felt the opposite of a hero. He was the last to be chosen for physical education teams, stuttered when he had to speak in public, and regularly lost his lunch to the sixth-grade bullies.

That Tuesday, after being left out of yet another soccer game at recess, Tommy had discovered the treehouse and decided it would be his secret refuge. To his surprise, climbing up the creaking steps, he discovered the place was already occupied.

Sitting in the corner, surrounded by tools and small metal pieces, was Emily – the new girl in his class, known for her exceptional intelligence and crazy inventions. She had curly black hair tied in a messy ponytail and wore a jumpsuit full of pockets where she kept screwdrivers, screws, and other trinkets.

"Hi," she said, not taking her eyes off the small gadget she was working on. "If you came here to be alone, you are too late. This is my laboratory."

Tommy was about to go down and look for another place when they heard footsteps on the ladder. A head of red hair appeared through the opening – it was Jake, the boy who had moved from Texas at the beginning of the year and spoke with a different accent that everyone at school found funny. Jake was athletic and strong, unlike Tommy, but he also suffered from teasing because of his accent.

"Sorry," he said, already backing away. "I did not know there was anyone here."

"Wait!" called Emily, finally looking up from her project. "Since the three of us are here, I think this place is big enough for us to share. After all, I bet we all came for the same reason: to escape those idiots from sixth grade."

Jake and Tommy exchanged glances and then nodded, recognizing the truth in Emily's words.

Soon the three were settled in the small house. Emily returned to her project (a kind of miniature catapult), Jake took out a notebook from his backpack where he wrote stories about the farm where he used to live, and Tommy opened his latest "Defenders of the Galaxy" comic. The silence was comfortable, as if the three had found a rare moment of peace in their usually difficult school days.

The moment was interrupted by sobs coming from the ladder. The three looked at each other, surprised, and went to the entrance of the house. There, sitting at the top of the ladder, with her knees pulled against her chest, was Lily – a quiet girl who always wore too-colorful clothes and had a habit of talking about things no one else seemed to notice, like the shape of clouds or the pattern on the school corridor tiles.

"Can I stay here with you? Just for today?" she asked between sobs. "Ashley and her friends took my diary and read it to everyone. There were... there were private things in it."

Without hesitation, Jake extended his hand to help her in. Emily quickly made room for her to sit, and Tommy offered a packet of cookies he kept in his backpack.

That is how what they would later call the "Club of Unlikely Heroes" was born – four completely different children, united by the shared experience of not fitting in, of being left out, of being teased for being different.`;

    await pool.query(`
      UPDATE stories 
      SET content_en = $1
      WHERE id = 38
    `, [content38]);
    console.log('Conteúdo (parte 1) da estória 38 atualizado com sucesso.');

    // Continuação do conteúdo da estória 38
    const content38Part2 = `In the following weeks, they met regularly in the treehouse. Emily fixed the loose boards and ladder steps. Jake brought old pillows from his house to make the place more comfortable. Tommy hung some of his superhero posters on the walls, and Lily decorated the place with plants and colorful origami that she made herself.

Gradually, between shared snacks and conversations ranging from comics to stars, from crazy inventions to farm stories, they began to realize something extraordinary: each of them had special skills.

Nina was a science and technology genius, able to fix anything and create impressive gadgets from scrap. Lucas had unusual physical strength for his age and incredible reflexes, a legacy of years helping with farm work. Theo, despite his shyness, had a photographic memory and an incredible ability to notice details that others missed. And Maia, with her unique way of seeing the world, had an almost supernatural intuition and limitless creativity.

"You know what?" said Theo one day, after hearing Lucas tell how he had managed to save a newborn calf on the farm. "The four of us together are like a superhero team. Each with a different superpower."

Nina laughed, but her eyes sparkled. "Like The Avengers, but the weird kid version from school?"

"Exactly!" exclaimed Theo, excited that she had understood the reference. "We could be the Club of Unlikely Heroes!"

The name stuck. They even created a secret oath and a symbol – a shield designed by Maia that combined elements representing each of them: a magnifying glass (Theo), a gear (Nina), a lightning bolt (Lucas), and a star (Maia).

But the Club of Unlikely Heroes did not remain just in play and imagination. Soon they began to realize that, together, they could face real problems.

It all started when they heard that the school library would be closed due to lack of use, and the space would be transformed into a regular classroom. Theo, who considered the library his second safe place at school, was devastated.

"We have to do something," he told his friends in the treehouse. "The library cannot end!"

"But what can four kids do?" asked Lucas, pessimistic.

Nina frowned, thoughtful. "If the whole problem is that nobody uses the library, then the solution is simple: we need to make people use the library!"

That is how the "Renaissance Project" was born (name suggested by Maia, who loved the idea of giving new life to something almost dead). Each of the four unlikely heroes used their special skills for the mission:

Nina created a system of colored lights that transformed reading into a more immersive experience, in addition to fixing the library old computer, making it usable again. Lucas used his strength to reorganize shelves and move furniture, creating a more welcoming and functional space. Theo, with his encyclopedic knowledge of books, created thematic reading guides for different ages and interests. And Maia transformed the atmosphere of the library with her artistic decorations and made colorful posters announcing "The New Library: An Adventure in Every Book."`;

    await pool.query(`
      UPDATE stories 
      SET content_en = content_en || E'\n\n' || $1
      WHERE id = 38
    `, [content38Part2]);
    console.log('Conteúdo (parte 2) da estória 38 atualizado com sucesso.');

    // Continuação do conteúdo da estória 38
    const content38Part3 = `In just two weeks, the library had transformed. And when they organized an "Afternoon of Stories and Sciences," with demonstrations of simple experiments based on books (Nina idea), narration of folk tales from the countryside (by Lucas), a literary treasure hunt (planned by Theo), and a craft corner inspired by book characters (coordinated by Maia), the success was so great that the principal completely gave up on the idea of closing the space.

That was just the beginning. In the following months, the Club of Unlikely Heroes faced various "villains" and "threats": from the problem of trash in the schoolyard (solved with trash cans decorated by Maia and a recycling system created by Nina) to the more complicated case of bullying against younger students.

The latter required a more subtle approach. Lucas, with his imposing physical presence, began to discreetly accompany younger students during the most problematic hours. Theo created an "Anti-Bullying Patrol" that reported incidents anonymously. Nina installed small surveillance cameras (made from recycled parts) at strategic points in the school. And Maia had the idea of creating the "Friendship Bench" – a place in the yard where any child who was feeling lonely could sit, signaling they would like company.

The most surprising thing was how, throughout these missions, each of them began to change. Theo was gradually overcoming his shyness. Nina learned to work in a team and explain her complicated ideas in a way everyone could understand. Lucas stopped caring about jokes about his accent, realizing how his strength and practical knowledge were valuable. And Maia found people who not only tolerated her different way of seeing the world but valued her for it.

A year after the formation of the club, the treehouse had transformed. It was no longer just a simple hiding place, but the official headquarters of a team that had earned the respect of the entire school. The walls, once bare and peeling, now proudly displayed the "trophies" of their successful missions: reports from the school newspaper about their initiatives, thank-you letters, photos, drawings, and, of course, the symbol of the Club of Unlikely Heroes painted in a place of honor.

One day, while celebrating the success of their latest mission (the creation of a school garden, Lucas idea), Theo said thoughtfully:

"You know, in comics, heroes always have a tragic origin story. Some terrible event that transformed them. But our story is different. We were normal kids, each with our problems and abilities, and we transformed into heroes not because of a tragedy, but because we found each other."

"And that makes us better heroes," completed Maia, with a smile. "Because we do not need superpowers or cosmic events. We just need friendship and the courage to be who we are."

"Unlikely heroes," said Lucas, raising his juice glass in a toast.

"The best kinds of heroes," agreed Nina, joining the toast.

And there, in that simple treehouse, four children who had once been excluded and teased for being different discovered the greatest truth of all: that sometimes, the true superpowers are not in super strength or the ability to fly, but in the courage to be authentic and in the strength we find when we join others who accept us exactly as we are.

The Club of Unlikely Heroes would continue their adventures for the following years, changing their school, their community, and, most importantly, themselves – proving that, sometimes, the most extraordinary heroes are those that no one would expect to be heroes.`;

    await pool.query(`
      UPDATE stories 
      SET content_en = content_en || E'\n\n' || $1
      WHERE id = 38
    `, [content38Part3]);
    console.log('Conteúdo (parte 3) da estória 38 atualizado com sucesso.');

    // Conteúdo da estória 39
    const content39 = `Sofia lived in a beautiful house with a large backyard, but what caught her attention the most was the high brick wall that separated her house from the neighbor's. It was an old wall, partially covered by a climbing vine with purple flowers, and it was almost two meters high – too high for an eight-year-old girl to peek over to see what was on the other side.

The mystery of what existed beyond the wall intrigued Sofia. Sometimes, she heard sounds coming from there: laughter, the noise of running footsteps, and occasionally, the sound of a bouncing ball. Everything indicated that there was a child living on the other side, but the family had moved in recently, and Sofia had not yet seen the new neighbors.

"Mom, who lives on the other side of the wall?" she asked one afternoon, while helping her mother water the plants.

"A new family," replied her mother. "I think they have a son about your age. Why don't you go to the front, knock on the door, and introduce yourself?"

Sofia shook her head. She was a naturally shy girl. The idea of knocking on strangers' doors made her nervous. But her curiosity about the boy on the other side of the wall remained.

On a sunny Saturday, while playing alone in the backyard, Sofia had an idea. She dragged a small wooden stool to the wall, climbed on it, and, stretching as much as she could, managed to grab the edge of the wall with her hands. With a great effort, she pulled herself up and rested her chin on the edge, finally able to see the other side.

The neighbor's yard was very different from hers. While Sofia's garden was meticulously cared for, with well-defined flower beds and ornamental plants, the yard beyond the wall seemed wilder, more adventurous. There was a small vegetable garden in one corner, a doghouse (although Sofia didn't see any dog), and, to her surprise, an amazing treehouse built in an old oak tree.

Sitting under the tree, focused on something that Sofia couldn't see, was a boy with dark, curly hair. He wore glasses and seemed very focused on a book or notebook in his lap.

"Hi!" Sofia called, without thinking.

The boy jumped in surprise and looked around, confused.

"Up here! On the wall!" Sofia called again.

The boy finally saw her and frowned. He didn't smile or wave back.

"What are you doing?" he asked in a suspicious tone.

"I just wanted to see who lived on the other side," Sofia answered honestly. "I'm Sofia. What's your name?"

"Miguel," he answered, still not smiling. "Are you spying?"

"No!" protested Sofia. "I was just curious. I hear sounds coming from here and wanted to know who my neighbor was."

Miguel continued to look at her with suspicion. Then, to Sofia's surprise, he closed his book, got up, and walked to a part of the yard she couldn't see. When he returned, he brought a small ladder, which he leaned against the wall.

"If you want to see so badly, you can come down here," he said, still serious. "It's easier than hanging there."

Sofia hesitated. Her parents had always told her not to go to unknown places without permission. But this was just the neighbor's yard, and she would be able to climb back if she needed to.

"Wait, I'll ask my mother for permission," decided Sofia, climbing down from the stool and running inside the house.

Her mother was in the kitchen preparing lunch. When Sofia explained that she had met the neighbor boy and he had invited her to play, her mother smiled.

"It's good that you made a new friend! But please don't jump over the wall. Let's do this properly. Let's go to their house through the front door and introduce ourselves properly."

A few minutes later, Sofia and her mother were at the neighbor's door. A woman with a gentle smile answered, and soon Sofia was formally introduced to Miguel and his parents. After a conversation between the adults, Sofia received permission to play in Miguel's yard, as long as she returned for lunch.

Now, officially on the "other side of the wall," Sofia could better see what Miguel was doing. It wasn't a regular book in his lap, but a stamp album – an impressive collection for someone his age.

"You collect stamps?" asked Sofia, curious.

Miguel nodded, looking a bit more relaxed now. "My grandfather started this collection, and when he... when he went to heaven last year, he left it to me. I continue collecting."

Sofia noticed how his voice faltered when mentioning his grandfather and understood that it was special to him.

"May I see it?" she asked gently.

Miguel looked at her for a moment, as if assessing whether he could trust her with something so precious. Finally, he extended the album.

Sofia flipped through the pages carefully, admiring the small colored pieces of paper from countries all over the world. Miguel, gradually, began to explain where each stamp came from, the stories his grandfather told him about them, the meanings of the designs.`;

    await pool.query(`
      UPDATE stories 
      SET content_en = $1
      WHERE id = 39
    `, [content39]);
    console.log('Conteúdo (parte 1) da estória 39 atualizado com sucesso.');

    // Continuação do conteúdo da estória 39
    const content39Part2 = `"This one is from Brazil, it shows Christ the Redeemer," he explained, pointing to a blue stamp. "And this one is from Japan, with Mount Fuji."

Sofia was genuinely fascinated. "It's like traveling around the world without leaving here!"

For the first time, Miguel smiled. "That's exactly what my grandfather used to say!"

In the following days, Sofia and Miguel developed a routine. Sometimes, she would go to his house; other times, he would come to hers. They discovered that, despite their different personalities – Sofia was outgoing and talkative, while Miguel was quieter and more reflective – they had a lot in common: both loved adventure books, liked to draw, and had an insatiable curiosity about the world.

Miguel showed Sofia his treehouse, which his father and grandfather had built together before his grandfather got sick. It was a special place, full of books, maps, and, of course, his precious stamp album. Sofia, in turn, shared with Miguel her talent for inventing stories and her knowledge about garden plants, which she had learned by helping her mother.

One day, while they were lying on the grass in Sofia's yard, looking at the clouds and imagining shapes in them, Miguel said suddenly:

"You know, when we moved here, I didn't want to make new friends. I was angry that we had left our old house, where I had memories of my grandfather."

Sofia looked at him, surprised by the confession.

"On the first day you appeared on the wall, I was irritated," he continued. "I thought you were just a nosy girl. But now..."

"Now what?" asked Sofia when he stopped.

"Now I'm happy that you were brave enough to climb that wall. I think I needed a friend, but I didn't know how to find one."

Sofia smiled, feeling a warmth in her chest. "I'm happy too. I always wanted to have a neighbor friend to play with."

In the following weeks, their parents noticed the blossoming friendship and had an idea: why not create a gate in the wall that separated the two yards? It would be safer than the children climbing the wall or going around the block every time.

So, on a special Saturday, Sofia's and Miguel's parents worked together to open a passage in the old brick wall. They installed a beautiful wooden gate, painted half blue (Sofia's favorite color) and half green (Miguel's favorite color).

In the small "inauguration" ceremony, as Miguel's father called it, the two families gathered, and the children cut a colorful ribbon stretched across the entrance of the new gate together.

"Now," said Sofia's mother, "you can come and go whenever you want, as long as you let us know beforehand, of course."

Sofia and Miguel exchanged happy looks. The wall, which was once a mysterious barrier, now had a door – a perfect symbol for the friendship they had built.`;

    await pool.query(`
      UPDATE stories 
      SET content_en = content_en || E'\n\n' || $1
      WHERE id = 39
    `, [content39Part2]);
    console.log('Conteúdo (parte 2) da estória 39 atualizado com sucesso.');

    // Continuação do conteúdo da estória 39
    const content39Part3 = `Years passed. Sofia and Miguel grew up, changed, entered adolescence, but their friendship remained strong. The small gate in the wall witnessed countless conversations, laughter, occasional arguments (after all, what friendship doesn't have its difficult moments?), consolations in times of sadness, celebrations in moments of joy.

When they turned fifteen, on a nostalgic afternoon, they sat in the old treehouse (now a bit tight for their teenage bodies) and recalled how it all began.

"You know what I realized?" said Sofia, looking at the wall and its gate, visible from up there. "Many people see walls as barriers that separate. But for us, that wall was the reason we met. It was the wall that made me curious, that made me seek what was on the other side."

Miguel smiled, adjusting the glasses he still wore, though the model had changed over the years. "It's a good lesson, isn't it? Sometimes, the obstacles in our path aren't really obstacles – they're just invitations to explore, to discover, to connect."

Sofia agreed, thoughtful. "And the best thing is that we didn't completely tear down the wall. It's still there, marking our individual spaces, our separate lives. But now it has a door, a connection."

"As a good friendship should be," concluded Miguel. "Maintaining who we are individually, but creating a passage to share our lives."

And there, in the treehouse that had witnessed the beginning of their journey together, Sofia and Miguel silently renewed the pact of friendship that had begun with a curious girl, a lonely boy, and a wall that, against all expectations, ended up uniting them instead of separating them.`;

    await pool.query(`
      UPDATE stories 
      SET content_en = content_en || E'\n\n' || $1
      WHERE id = 39
    `, [content39Part3]);
    console.log('Conteúdo (parte 3) da estória 39 atualizado com sucesso.');

    console.log('Todas as traduções atualizadas com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar traduções:', error);
  } finally {
    await pool.end();
  }
}

updateTranslations().catch(console.error);