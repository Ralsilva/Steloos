'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import EnglishLayout from '../../../en/layout'

// Story data
const stories = {
  1: {
    title: "The Little Star that Lit the Way",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "5 min",
    content: [
      "Once upon a time, there was a little star named Lumi. She lived in the sky with thousands of other stars, but she always felt a little different. While other stars shined together in constellations, Lumi preferred to shine alone, observing the world below.",
      "Every night, Lumi watched a small village where a girl named Sophie lived. Sophie was afraid of the dark and always looked out her window before going to sleep, searching for Lumi in the sky. The little star shined with all her might so Sophie could see her and feel safe.",
      "One day, a big storm covered the sky with dark clouds. Lumi knew Sophie would be afraid because she wouldn't be able to see her star friend. Determined to help, Lumi decided to do something no star had ever done before: descend to Earth.",
      "She descended as a small ray of light through the clouds and landed on Sophie's windowsill. The girl was amazed to see her star friend so close! Lumi explained that she had come down to ensure Sophie wouldn't be afraid during the storm.",
      "\"But now you're not in the sky with the other stars anymore,\" said Sophie, concerned.",
      "\"Sometimes we need to leave our comfort zone to help those we love,\" replied Lumi with a bright smile.",
      "Sophie learned that true love means being present when someone needs you, even if it means stepping out of your comfort zone. And Lumi discovered that her true purpose was to light the way for those she loved.",
      "After the storm passed, Lumi returned to the sky, but whenever Sophie looked up, the little star would twinkle in a special way, like a secret code between friends. And Sophie was never afraid of the dark again, because she knew that true love always finds a way to shine, even on the darkest nights."
    ],
    moral: "True love means being present for those we love, even when it requires sacrifices. Just as Lumi left the sky to comfort Sophie, we should be willing to step out of our comfort zone to help others.",
    color: "#F59E0B"
  },
  12: {
    title: "The Heart of the Forest",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "6 min",
    content: [
      "In the center of the world's oldest forest grew a tree unlike any other. While other trees grew upward toward the sky, competing for sunlight, this tree, called Heart, grew in all directions, extending its branches as if wanting to embrace the entire forest.",
      "The animals loved the Heart of the Forest. Its branches were perfect for nests, its roots created safe shelters, and its shade offered rest on hot days. But what made Heart truly special was something invisible to the eye.",
      "It was said that the tree could feel the love of all beings in the forest and, in some mysterious way, connected them all. When an animal was sad or injured, Heart seemed to know, and its leaves whispered songs of comfort that only that animal could understand.",
      "One day, men with loud machines came to the forest. They began cutting down trees one after another. The animals, frightened, fled to the center of the forest, seeking refuge near Heart.",
      "\"What will we do?\" asked a small squirrel trembling with fear. \"They will destroy our home!\"",
      "The old bear, who had lived longer than any other animal in the forest, spoke in a deep voice: \"Over the years, Heart has protected us and loved us. Now, we must protect it.\"",
      "So the animals gathered and, together, created a plan. It wasn't a plan of attack or violence, but a plan born from the love they felt for the forest and for Heart.",
      "When the men approached the center of the forest, they found something extraordinary. Hundreds of animals were gathered around the great tree, not fleeing or attacking, but simply present, looking at the men with eyes that showed no fear, only a deep connection with that place.",
      "The leader of the men, a gray-haired gentleman, felt something strange as he looked at the scene. It was as if he could feel the love flowing between the animals and the tree. He remembered when he was a child and played in this same forest, feeling part of something greater.",
      "\"Stop the machines,\" he ordered, to the surprise of his companions. \"This part of the forest will remain untouched.\"",
      "In the years that followed, the Heart of the Forest continued to grow and love. The men, inspired by what they had witnessed, created a nature reserve to protect the entire forest. And most surprisingly: many began to visit Heart, sitting under its branches to feel the same connection that the animals felt.",
      "The love of the Heart of the Forest, which was previously shared only among the animals, now touched human hearts as well, reminding everyone that true love knows no barriers between species or life forms – it simply flows, connects, and transforms."
    ],
    moral: "True love transcends differences and has the power to unite beings of all kinds in a deep connection with nature and with each other. When we act from love, we can protect what is precious and inspire positive changes even in the most distant hearts.",
    color: "#F59E0B"
  },
  18: {
    title: "The Girl and the Injured Bird",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "5 min",
    content: [
      "In a small house at the edge of a wood lived a girl named Lily. She had a gentle heart and loved watching the birds that visited her garden every morning.",
      "On a rainy autumn day, Lily found a small bird fallen beneath her bedroom window. Its blue feathers were soaked, and one of its wings appeared injured. With great care, Lily gathered it in her hands.",
      "\"Don't be afraid, little one,\" she whispered. \"I'll take care of you until you can fly again.\"",
      "Lily prepared a cozy box with soft cloths and placed the bird inside. She researched in her books about how to care for injured birds and followed all the instructions with dedication. She gave it water and seeds, and even learned to make a special mixture for sick birds.",
      "In the first few days, the bird, which Lily named Blue, was frightened and tried to hide when she approached. But Lily was patient. She spoke to him softly, told stories, and even sang lullabies when she put him to sleep.",
      "Gradually, Blue began to trust Lily. He no longer shrank away when she came near and even began to sing in response to her songs. The injured wing was healing, and his feathers regained their intense blue shine.",
      "Lily's mother observed her daughter's dedication to the little bird and one day commented: \"You really love this bird, don't you?\"",
      "Lily thought for a moment. \"Yes, I do love him. And I think that's why he's getting better so quickly.\"",
      "\"How so?\" asked her mother, curious.",
      "\"Well, I read in one of my books that animals can feel our feelings. If we feel fear, they feel fear. If we feel love, they feel love. I think Blue knows that I love him and want him to get well, and that's helping him heal.\"",
      "Her mother smiled, impressed by her daughter's wisdom.",
      "Finally, the day came when Blue was completely recovered. His wings were strong, and he flew around Lily's house with confidence. Lily knew it was time to let him go, though her heart ached at the thought.",
      "On a sunny morning, Lily took Blue to the garden. With tears in her eyes but a smile on her face, she opened her hands. \"You're free now, Blue. Fly and be happy.\"",
      "To her surprise, Blue didn't fly away immediately. He stayed in Lily's hands, looking at her as if wanting to memorize her face. Then, he gave a little hop, landed on her shoulder, and sang the most beautiful melody Lily had ever heard.",
      "Only then did Blue spread his wings and fly into the blue sky. But he didn't go away forever. Every morning, Blue returned to Lily's garden, sometimes bringing a blue feather or a small flower, as if they were gifts to thank her for the love he had received."
    ],
    moral: "Love and compassion have a healing power that transcends words and even species. When we care for someone with true love, we create bonds that remain even when paths separate. And sometimes, the greatest act of love is giving freedom to those we love.",
    color: "#F59E0B"
  },
  25: {
    title: "The Special Gift",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "4 min",
    content: [
      "Grandma Mary's birthday was approaching, and her grandson Matthew, just seven years old, wanted to give her a very special present. He knew that Grandma didn't need more things – her house was already full of objects accumulated throughout her eighty years of life.",
      "\"What can I give Grandma that's really special?\" Matthew asked his mother as they walked through the mall.",
      "\"The best gifts aren't always things we can buy,\" his mother replied with a gentle smile. \"Think about what Grandma really values.\"",
      "Matthew thought hard. He knew that Grandma loved his childhood stories, always asked him to sing for her, and her eyes sparkled when he showed her his drawings. That's when he had a brilliant idea.",
      "For an entire week, Matthew worked secretly in his room. He cut colored papers, drew, wrote in his childish handwriting, and even recorded small audio clips on his mother's borrowed cell phone.",
      "On the birthday day, while everyone gave Grandma Mary presents wrapped in shiny paper – a new shawl, a perfume, a book – Matthew handed her a simple shoebox decorated with paper hearts.",
      "\"What do we have here?\" asked Grandma with curiosity, carefully opening the box.",
      "Inside was a handmade \"coupon\" for each day of the following month. \"Coupon for a bedtime story,\" said one. \"Coupon for a walk in the park,\" said another. \"Coupon for a special drawing,\" \"Coupon for a song,\" and so on.",
      "Along with the coupons was a small notebook where Matthew had written, with his mother's help: \"Dear Grandma, this is a special month of love just for you. Each day has a moment just for us. With love, Matthew.\"",
      "Grandma Mary's eyes filled with tears. She hugged her grandson tightly and whispered: \"In all my eighty years, I've never received such a precious gift.\"",
      "During the following month, Grandma Mary used one coupon each day. She and Matthew read stories together, made cookies, planted flowers in the garden, and shared many laughs and hugs.",
      "When the last coupon was used, Grandma Mary said to Matthew: \"You know, dear, the presents we buy eventually break or are forgotten. But the memories we created together this month will live forever in my heart. This was truly a gift of love.\"",
      "Matthew smiled, understanding for the first time that love isn't in the things we give, but in the time we share and the memories we create together."
    ],
    moral: "The most valuable gifts aren't those that cost the most money, but those given with love and attention. The time we dedicate to the people we love creates precious memories that last much longer than any material object.",
    color: "#F59E0B"
  },
  33: {
    title: "The Love Letter",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "5 min",
    content: [
      "In the small town of Serene Valley lived an elderly man named Anthony. At 85 years old, he was known for his impeccable routine: every morning, at exactly 9 o'clock, he walked to the mailbox in the central square, deposited a letter, and returned home.",
      "The townspeople had observed this ritual for years, but no one knew who the letters were for. Some speculated it was for a distant son, others thought it was for a war buddy. The mailman, who respected everyone's privacy, only confirmed that the letters were always addressed to the same person: Helen.",
      "Clara, a young journalist who had recently moved to town, was intrigued by this story. After weeks of observing Mr. Anthony in his routine, she finally gathered the courage to approach him.",
      "\"Good morning, Mr. Anthony,\" she said gently, as he sat on a bench in the square after depositing his letter. \"I'm Clara, new to town. I hope I'm not being intrusive, but I couldn't help but notice your dedication to sending letters every day.\"",
      "Mr. Anthony smiled, his eyes gaining a youthful sparkle. \"It's not intrusion when there's genuine interest,\" he replied. \"Sit down if you'd like to hear a love story that has lasted 63 years.\"",
      "Clara sat down, and Mr. Anthony began to tell his story. Helen was his wife, with whom he had been married for 50 years before she passed away. In their first year of marriage, when Anthony traveled for work for two weeks, he wrote a letter to Helen every day.",
      "\"When I returned,\" he recounted, \"Helen told me that those letters were the greatest gift she had ever received. Not because of the grand romantic gestures I described, but because every word showed that, even from a distance, my thoughts were with her.\"",
      "Years later, when Helen was diagnosed with a degenerative disease that would gradually affect her memory, Anthony made a promise: he would write to her every day, so she would never forget their love.",
      "\"In the last years of her life,\" he continued with a choked voice, \"Helen sometimes couldn't remember my name or where we were. But when I read my letters to her, her eyes would sparkle with recognition. It was as if the words reached a part of her that the disease couldn't touch.\"",
      "Clara had tears in her eyes. \"And now, Mr. Anthony? Where do these letters go?\"",
      "\"To the same place as always,\" he replied with a serene smile. \"To Helen. I promised to write every day, and a promise of love doesn't end when the person departs. Each letter is a conversation with her, telling her about my day, about the small joys I find, about how I still see her in the stars, in the garden flowers, in the sunset.\"",
      "\"Does the mailman know?\" asked Clara, moved.",
      "\"Yes,\" Anthony replied. \"At first, he tried to gently explain that the letters couldn't be delivered. But when he understood their meaning to me, he began to keep them with care. On my 80th birthday, he surprised me: he had bound all the letters from recent years into a book. 'Your love story deserves to be preserved,' he said.\"",
      "Clara understood at that moment that she was witnessing love in its purest and most enduring form. It wasn't just about remembering someone who had departed, but about keeping alive a connection that transcended time and space.",
      "\"You know, Clara,\" concluded Mr. Anthony, \"many people think that love is about grand gestures or intense emotions. But true love is like writing a letter every day – it's constant, patient, and finds beauty in simple things. It's a choice we make with each dawn, even when the recipient can no longer respond.\""
    ],
    moral: "True love transcends time, distance, and even death. It's not just about intense feelings, but about a daily commitment to keep alive the connection with those we love, through small gestures of remembrance and dedication. Promises made out of love have a value that goes beyond physical circumstances.",
    color: "#F59E0B"
  },
  2: {
    title: "The Lake of Tranquility",
    category: "Peace",
    categoryLink: "/en/categories/peace",
    readTime: "6 min",
    content: [
      "In the heart of the forest, there was a special lake known as the Lake of Tranquility. Its waters were so calm and crystal clear that they perfectly reflected the sky above, creating the illusion that the sky and earth met at this magical place.",
      "The forest animals visited the lake when they felt agitated or worried. There was something in the waters that calmed their hearts and brought peace to their minds.",
      "One day, a young deer named Swift arrived running to the lake. He was known as the most restless animal in the forest, always running from one place to another, never stopping to rest.",
      "\"Why does everyone come to this lake?\" asked Swift, still pacing back and forth on the shore. \"It's just water! I don't see anything special.\"",
      "An old turtle resting nearby smiled gently. \"The secret of the lake is not in the water, but in how you observe it,\" she said. \"Sit down and look calmly.\"",
      "Swift rolled his eyes but decided to try. He sat by the lake and forced himself to stay still, looking at the water. At first, all he saw was his own agitated reflection.",
      "But gradually, as his breathing slowed down, the water also calmed. The reflection became clearer, and Swift began to notice things he had never seen before: the small ripples created by a fish swimming, the delicate landing of a dragonfly on the surface, the clouds moving slowly in the reflection of the sky.",
      "\"I can see it!\" exclaimed Swift, but this time his voice was soft. \"The lake shows everything clearly when I'm calm.\"",
      "The turtle smiled. \"Peace is not the absence of movement, but the presence of harmony. The lake teaches us that when we calm our minds, we can see the world more clearly.\"",
      "From that day on, Swift visited the lake regularly. He still ran through the forest, but now he knew how to find peace within himself when he needed it. And when other animals seemed agitated, he guided them to the Lake of Tranquility, where they could rediscover the harmony in their hearts."
    ],
    moral: "True peace doesn't come from changing the world around us, but from finding tranquility within ourselves. When we calm our minds, we can see life more clearly and find harmony even in challenging situations.",
    color: "#3B82F6"
  },
  3: {
    title: "The Little Hope Sower",
    category: "Protection",
    categoryLink: "/en/categories/protection",
    readTime: "4 min",
    content: [
      "In a small village surrounded by mountains, lived a boy named Thomas. The village was going through hard times – it hadn't rained for months, the crops were drying up, and people were beginning to lose hope.",
      "Thomas was only eight years old, but he possessed something that many adults had lost: an unwavering faith. Every night, before going to sleep, he looked out his window at the starry sky and talked to the stars, believing that his words would be heard.",
      "One day, while walking through the village, Thomas found a small bag of seeds forgotten on the ground. Instead of ignoring it, he had an idea. He began to visit each house in the village, giving some seeds to each family.",
      "\"What should we do with these?\" people asked, confused. \"The land is dry. Nothing will grow.\"",
      "\"Plant them,\" Thomas replied with a confident smile. \"Believe that the rain will come.\"",
      "People laughed, but something in the boy's conviction touched them. Some families, just to please the little one, planted the seeds in their dry gardens.",
      "Thomas continued his journey, visiting each house, sharing not only seeds but also stories of hope and words of encouragement. \"Faith is like a seed,\" he would say. \"Even though it may seem small and insignificant, when planted in the heart, it can grow and transform everything around it.\"",
      "Gradually, something began to change in the village. It wasn't the rain – not yet – but the spirit of the people. They began to gather again, to share what little they had, to help each other. Thomas's little faith was contagious.",
      "And then, on a starry night, as Thomas was having his usual conversation with the stars, the first drops of rain began to fall. The rain continued for days, gentle and steady, bringing life back to the parched land.",
      "The seeds that had been planted began to sprout, transforming the village into a garden of renewed hope. People looked in wonder at the small plants emerging from the earth, reminding them that even in the darkest moments, faith can light the way."
    ],
    moral: "True faith is not just believing in something we cannot see, but acting as if we could already see it. Like seeds planted in dry soil, our faith can flourish even in the most difficult circumstances, inspiring others and transforming entire communities.",
    color: "#8B5CF6"
  },
  4: {
    title: "The Wise Owl",
    category: "Wisdom",
    categoryLink: "/en/categories/wisdom",
    readTime: "7 min",
    content: [
      "At the top of the oldest tree in the forest lived an owl named Olivia. She was known by all the animals as the wisest in the forest. Animals from all corners came to her seeking advice and solutions to their problems.",
      "Olivia had large, golden eyes that seemed to see not only what was before her but also what was hidden in the heart of each animal. She spoke little, but when she did, her words were like seeds of wisdom that, once planted, grew and blossomed in the minds of those who heard them.",
      "One day, three young animals – a squirrel, a fox, and a rabbit – decided to discover the secret of the owl's wisdom. They wanted to know how she had become so wise and hoped to quickly learn her secrets.",
      "When they arrived at Olivia's tree, they found the old owl silently observing the sunset.",
      "\"Olivia,\" said the impatient squirrel, \"we've come to learn the secret of your wisdom. We want to be as wise as you, and we want to learn now!\"",
      "The owl smiled gently. \"Wisdom is not something I can simply give you like a wrapped gift. But I can show you the way. Come back tomorrow at dawn, and each of you will bring something you consider valuable.\"",
      "The next day, the three young animals returned. The squirrel brought the largest nut he could find. The fox brought a beautiful colored feather. The rabbit brought a shiny stone he had found near the river.",
      "Olivia looked at the three gifts and said, \"Now, I want each of you to tell me not what you brought, but what you observed on the way here.\"",
      "The three were confused. They had been so focused on finding something valuable that they had hardly paid attention to the path.",
      "\"I... I saw some wildflowers beginning to bloom near the stream,\" said the rabbit hesitantly.",
      "\"I noticed that the ants are building a new anthill near the big rock,\" added the fox.",
      "\"And I realized that the old oak in the clearing is starting to give new shoots where it was struck by lightning in the last storm,\" completed the squirrel.",
      "Olivia nodded with approval. \"Wisdom begins with observation. It's not in great deeds or valuable things we accumulate, but in the attention we give to the world around us. True wisdom is in seeing the extraordinary in the ordinary, in learning from each experience, in listening more than speaking, and in understanding that knowledge without compassion is like a tree without roots.\"",
      "The three young animals began to understand. There was no shortcut to wisdom – it came from experience, patient observation, and deep reflection.",
      "\"Return to your homes,\" continued Olivia, \"and for a week, observe everything around you as if you were seeing it for the first time. Listen not just with your ears, but with your hearts. And then, return to share what you've learned.\"",
      "And so began the journey of the three young animals in search of wisdom – not as a quick achievement, but as a way of life, guided by the attentive eyes and compassionate heart of the wise old owl."
    ],
    moral: "True wisdom doesn't come from accumulating knowledge, but from observing with attention, reflecting deeply, and applying with compassion what we learn. It's a continuous path that requires patience, humility, and the willingness to see the world with ever-new eyes.",
    color: "#9333EA"
  },
  5: {
    title: "The Magic Hug",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "4 min",
    content: [
      "Once upon a time, there was a girl named Clara who had the most special hug in the world. Whenever someone was sad, Clara knew exactly how to help: with a hug full of love.",
      "At school, when her friend Peter fell in the playground and started crying, Clara ran to him and hugged him tight. As if by magic, Peter felt a nice warmth in his heart and soon stopped crying.",
      "\"How do you do that?\" asked Peter, surprised.",
      "Clara smiled. \"It's my magical hug. Mom says that when we hug someone from the heart, our love passes to the other person.\"",
      "The news about Clara's magical hug spread quickly throughout the school. Whenever a child got hurt or felt sad, everyone would say: \"Let's find Clara for a magical hug!\"",
      "One day, Clara's teacher, Ms. Beatrice, came to school very downcast. Her pet kitten had fallen ill, and she was worried.",
      "Clara observed her teacher and noticed the sadness in her eyes. Without saying anything, she approached Ms. Beatrice and hugged her with all the love in her heart.",
      "Ms. Beatrice felt a comforting warmth that started with the hug and spread throughout her body. Her eyes welled up, but this time, from emotion.",
      "\"Thank you, Clara,\" said Ms. Beatrice. \"Your hug really is magical.\"",
      "Clara smiled. \"It's not magic, teacher. It's love. My grandmother says that love is the most powerful energy that exists in the universe.\"",
      "That night, when Clara got home, she found her mother in the kitchen. \"Mom, why do people say my hug is magical?\"",
      "Clara's mother smiled and knelt down to be at her daughter's height. \"Clara, when we hug someone with true love, our hearts connect. And when hearts connect, they exchange a special energy that makes us feel better. Some call this magic, but in reality, it's the power of love.\"",
      "Clara thought for a moment. \"So anyone can give a magical hug?\"",
      "\"Yes, my love. Anyone who hugs with a heart full of love. The magic isn't in the hug, but in the love we put into it.\"",
      "From that day on, Clara began teaching her friends how to give magical hugs. \"It's simple,\" she would say. \"When you hug someone, think of all the love in your heart and wish for that love to reach the person.\"",
      "Gradually, the entire school learned how to give magical hugs. And as if by enchantment, that place became happier, more welcoming, more full of love.",
      "And that's how Clara discovered that the true power of magic wasn't in her arms, but in the love she shared with each hug. And this love, when multiplied, could transform not just one heart, but the entire world."
    ],
    moral: "Love expressed through simple gestures like a sincere hug has the power to heal, transform, and connect. Never underestimate the impact that a genuine act of affection can have on someone's life – sometimes, it's exactly the magic that person needs.",
    color: "#F59E0B"
  },
  6: {
    title: "The Boy Who Helped Everyone",
    category: "Kindness",
    categoryLink: "/en/categories/kindness",
    readTime: "6 min",
    content: [
      "In a small village at the foot of a green mountain, lived a boy named Peter. He wasn't the strongest, nor the fastest, nor the smartest in the village, but he possessed something that made him special: a heart full of kindness and a constant willingness to help others.",
      "Every day, Peter woke up with the sunrise and asked himself: \"Who can I help today?\" And so began his daily journey, looking for ways to make people's lives a little better.",
      "He helped Mrs. Mary carry her groceries from the market to her house at the top of the hill. He helped Mr. Joseph feed his animals when the old farmer felt back pain. He read stories to the younger children under the shade of the big tree in the square. He swept the leaves from the school garden without anyone asking.",
      "Often, his friends didn't understand why Peter cared so much.",
      "\"Why are you always helping others?\" asked his friend Luke one day. \"You don't even get anything in return.\"",
      "Peter smiled. \"I do get something,\" he replied. \"I get the joy of seeing people happy.\"",
      "Luke shook his head, still not fully understanding.",
      "One day, a strong storm hit the village. The stream overflowed, trees fell, and some houses were damaged. The entire village was in chaos.",
      "Without hesitation, Peter went out to help. He helped build sandbag barriers, brought food to families who couldn't leave their homes, and comforted frightened children by telling funny stories to distract them from the noise of the storm.",
      "For three days, Peter worked tirelessly, sleeping only a few hours each night. He was exhausted, but he kept smiling and encouraging everyone around him.",
      "When the storm finally passed and the village began to recover, something incredible happened. Without planning, all the residents gathered in the central square. When Peter arrived, he was greeted with applause and hugs.",
      "\"You've always been there for all of us,\" said Mrs. Mary with tears in her eyes. \"Now we want to give back.\"",
      "The residents had organized themselves to rebuild Peter's house, which had been damaged by a falling tree. Not only that, but each family had prepared something special – a cake, a handmade blanket, a carved chair, a colorful drawing.",
      "Luke approached Peter. \"Now I understand,\" he said. \"When you help others, you're not just improving their lives, but creating a community where everyone cares for each other.\"",
      "Peter smiled, with tears of gratitude in his eyes. He had never helped expecting to receive something in return, but he discovered that kindness has its own way of coming back to us – multiplied in many hands and hearts."
    ],
    moral: "True kindness doesn't expect reward, but creates connections that strengthen the entire community. When we help others with a sincere heart, we not only transform their lives but also build a world where everyone cares for each other.",
    color: "#10B981"
  },
  8: {
    title: "The Most Valuable Gift",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "4 min",
    content: [
      "Mama Bear's birthday was approaching, and little Bruno Bear wanted to give her the most special gift in the world. After all, Mama Bear was the best mother in the entire forest!",
      "Bruno saved all the coins he earned by helping other animals: sweeping leaves for Mrs. Squirrel, organizing nuts for Mr. Beaver, and delivering letters for the Rabbit Postman. But when he counted his little coins, he realized it wasn't enough to buy the beautiful flower necklace he had seen at Mr. Badger's store.",
      "Sad and disappointed, Bruno walked to the lake to think. There he met his friend, the Wise Owl, who quickly noticed his sadness.",
      "\"What happened, little Bruno? Why such a sad face?\" asked Owl.",
      "Bruno explained his dilemma: he wanted to give a special gift to his mother, but didn't have enough money.",
      "Owl adjusted his glasses and said in his calm, wise voice: \"Bruno, the most valuable gift isn't always the one that costs the most money. Often, it's the one that comes from the heart.\"",
      "\"From the heart? But how can I give a gift that comes from the heart?\" asked Bruno, confused.",
      "\"Think about what you do well, and what would make your mother happy. Sometimes, giving our time, our talent, or our effort is worth much more than any object we could buy.\"",
      "Bruno reflected on Owl's words. What did he know how to do well? What would make his mother happy?",
      "Then, an idea shone in his mind. Bruno thanked Owl and ran home, full of enthusiasm. In the following days, whenever Mama Bear went out to look for honey or fruits, Bruno secretly worked on his special gift.",
      "On the birthday, Bruno woke up early, before his mother. He prepared a simple breakfast with fresh fruits he had picked himself and placed a flower beside the plate. When Mama Bear entered the kitchen, Bruno sang \"Happy Birthday\" with all his heart.",
      "\"Mom, I couldn't buy an expensive gift, but I made something special for you,\" said Bruno, a little nervous.",
      "He took his mother to the living room, where he had assembled a small \"book\" made of large leaves, sewn together with plant fibers. On each page, Bruno had drawn a special memory they shared: the day he learned to fish, the time he got sick and she took care of him all night, the stories she told before bedtime, the warm hugs when he was sad.",
      "On the last page, Bruno had written in his childish handwriting: \"Thank you, Mom, for all your love. I love you to the moon and back!\"",
      "Mama Bear flipped through the book with tears in her eyes. When she reached the last page, she hugged Bruno with so much love that he felt his heart warmed.",
      "\"Bruno, this is the most valuable gift I have ever received in my entire life,\" she said, emotional. \"Because it came from your heart and shows me that you value the moments we spend together. No necklace or purchased gift could make me as happy as this memory book.\"",
      "That day, Bruno learned that the most valuable gifts are those that come from the heart, made with love and care. It's not the price or size that matters, but the feeling and thought behind them.",
      "And whenever Mama Bear had a difficult day, she would look at the memory book made by Bruno, and her heart would fill again with joy and gratitude for the most valuable gift of all: her son's love."
    ],
    moral: "The most valuable gifts aren't those that cost the most money, but those made with love and dedication. When we give something that comes from the heart, we're sharing a part of ourselves, and that's what truly matters.",
    color: "#F59E0B"
  },
  10: {
    title: "The Love of All Mothers",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "6 min",
    content: [
      "In the big oak tree that stood in the center of the city park, a small family of squirrels had just grown larger. Mama Squirrel had given birth to three little ones: Caco, Tico, and Nina. They were tiny, hairless, with eyes still closed.",
      "Every morning, Thomas and his mother walked through the park on their way to school. Thomas was 8 years old and loved observing animals. He was the first to notice the squirrel family.",
      "\"Look, mom! Baby squirrels!\" he exclaimed, pointing to the nest made of leaves and twigs in the tree trunk.",
      "Thomas's mother smiled. \"Yes, dear. It's a new family. Let's watch from a distance so we don't scare them.\"",
      "Day after day, Thomas and his mother observed the squirrel family. They saw when the babies started to develop fur, when they opened their eyes for the first time, when they began to venture outside the nest.",
      "\"Mom, Mama Squirrel never leaves her babies, have you noticed?\" Thomas commented one day.",
      "\"Yes, son. She's protecting her babies. A mother's love is like that, in all species.\"",
      "Thomas became thoughtful. He started paying more attention to the other mothers in the park – not just humans, but those of all species.",
      "He saw a mother duck leading a row of ducklings across the pond, always alert to any danger. He saw a cat carefully carrying her kitten by the neck to a safer place. He observed birds tirelessly bringing food to their chicks in the nest.",
      "One day, Thomas decided to make a special project for school about \"The Love of Mothers in Nature.\" With the help of his own mother, he photographed the different mothers in the park caring for their babies.",
      "On the morning Thomas was going to present his project, something sad happened. As they passed the oak tree, he and his mother saw that one of the baby squirrels – little Caco – had fallen from the nest and was on the ground, crying for help.",
      "\"Mom, we have to help him!\" exclaimed Thomas, worried.",
      "\"Wait, Thomas. Let's see what Mama Squirrel will do.\"",
      "They hid behind a bush and watched. Mama Squirrel quickly came down from the oak, gently grabbed Caco with her mouth, and began climbing back up. But it was a difficult climb with the extra weight.",
      "Suddenly, something amazing happened. Other adult squirrels appeared and formed a sort of living ladder on the tree trunk. Mama Squirrel used this ladder to climb more easily with Caco to the nest, where the other babies were waiting.",
      "Thomas was amazed. \"Did you see that, mom? They work together like a family! Like... like us!\"",
      "Thomas's mother hugged him tenderly. \"Yes, dear. Maternal and family love is present throughout nature. It's one of the strongest bonds that exist.\"",
      "That day at school, Thomas presented his project with enthusiasm, including the exciting story of Caco's rescue. His classmates and teacher were delighted.",
      "\"What I learned,\" concluded Thomas, \"is that it doesn't matter if we're people, squirrels, ducks, or cats. A mother's love for her children is always special and powerful. It's the love that cares, protects, and teaches. It's the love that makes us grow strong and secure.\"",
      "When he returned home that day, Thomas gave his mother an extra long hug.",
      "\"Why such a special hug?\" she asked, smiling.",
      "\"Because you're my Human Mama, and your love for me is as special as Mama Squirrel's love for her babies.\"",
      "Thomas's mother felt tears of emotion in her eyes.",
      "\"And I also learned,\" continued Thomas, \"that just as squirrels help each other, we humans also need to care for one another. Because love isn't just from mother to child. It's from everyone to everyone.\"",
      "And at that moment, looking at the big oak tree where the squirrel family rested safely, Thomas felt that he had understood one of the greatest truths of life: love, in all its forms, is what unites all creatures in the world."
    ],
    moral: "Maternal love is a universal force that transcends species and connects all living beings. It teaches us about protection, care, and the importance of community. When we recognize this love in all its forms, we learn to value and respect all relationships in nature.",
    color: "#F59E0B"
  },
  15: {
    title: "Grandma's Heart",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "5 min",
    content: [
      "Miguel missed his grandma Tereza very much. Since she had moved to another city, they only saw each other during vacations and on some holidays. For a 7-year-old boy, the wait seemed endless.",
      "\"Mom, why did grandma have to go live so far away?\" asked Miguel one night, as his mother tucked him in for bed.",
      "\"Because grandma needed to be closer to the hospital where she gets her treatment, remember? But even far away, she loves you very much,\" replied his mother, kissing his forehead.",
      "\"But how does her love reach me if we are so far apart?\" questioned Miguel, his eyes full of curiosity.",
      "His mother thought for a moment and had an idea. The next day, she bought two small heart-shaped photo frames and placed a photo of Miguel in one and a photo of grandma Tereza in the other.",
      "\"Miguel, I have a special gift for you,\" she said, handing him the photo frame with grandma's picture. \"This is grandma's heart. When you miss her, hold it close to your chest and close your eyes. Her love will reach you.\"",
      "The other photo frame, with Miguel's picture, was sent by mail to grandma Tereza, along with a letter explaining the idea.",
      "A week later, the phone rang. It was grandma Tereza, emotional.",
      "\"Miguel, I received your heart! Now every night before going to sleep, I hold it very close to my chest and feel as if you were here with me.\"",
      "From that day on, Miguel started a ritual. Every night, he would take the heart-shaped photo frame with grandma's picture and hug it tightly. He closed his eyes and imagined grandma doing the same with his photo.",
      "One night, while performing his ritual, Miguel had a strange sensation. He felt a nice warmth in his chest, as if he were being hugged. He opened his eyes, surprised, but there was no one in the room besides him.",
      "\"Mom! Mom!\" he called, excited. \"I felt grandma's hug! I was holding her heart and felt as if she were hugging me!\"",
      "His mother smiled. \"Love is like that, Miguel. It knows no distance. When we truly love someone, that love creates a connection that nothing can break. Not even distance.\"",
      "A few weeks later, during a video call, grandma Tereza told an incredible story.",
      "\"Miguel, you won't believe it, but on Tuesday night, while I was holding your heart, I felt as if you were hugging me. It was so real that I looked around to see if you had entered my room!\"",
      "Miguel was astonished. Tuesday night was exactly when he felt grandma's hug!",
      "\"Grandma, I felt your hug that night too! How is that possible?\"",
      "Grandma Tereza smiled with shining eyes. \"It's the magic of love, my dear. True love is the most powerful force in the universe. It can cross any distance and overcome any obstacle.\"",
      "Miguel learned a precious lesson that day. Love is not limited by space or time. When we love someone with all our heart, we are always connected, no matter where we are.",
      "And so, the distance between Miguel and grandma Tereza didn't seem so great anymore. Every night, with the heart-shaped photo frames, they met in the most special place of all: in the infinite space of love."
    ],
    moral: "True love transcends physical distances and creates connections that cannot be broken. When we love someone deeply, that connection remains strong, no matter how far apart we are from each other.",
    color: "#F59E0B"
  },
  40: {
    title: "Love in Colors",
    category: "Love",
    categoryLink: "/en/categories/love",
    readTime: "5 min",
    content: [
      "Luana lived in a world where everything was gray. It wasn't that colors didn't exist, but people were so busy and worried that they simply didn't notice them anymore. They walked hurriedly, with their eyes fixed on the ground, without smiling, without talking.",
      "But Luana was different. She was only 6 years old and could still see the colors that no one else seemed to see. The red of roses, the blue of the sky, the green of trees – everything was vivid and bright to her eyes.",
      "One day, Luana's teacher asked the students to draw a picture about love. While the other children drew hearts and families, Luana had a different idea. She drew colorful spots that spread from one person to another, like waves of light.",
      "\"What is that, Luana?\" asked the teacher, intrigued by the unusual drawing.",
      "\"This is what love looks like, teacher. When we love someone, colors come out of our heart and touch the other person, making them happier and more colorful too.\"",
      "The teacher smiled, enchanted by the girl's imagination.",
      "Inspired by her own drawing, Luana decided to bring more colors to the world. The next day, she brought to school small colored paper hearts that she had made with her mother's help. On each heart, she wrote simple messages: \"You are special\", \"Your smile is beautiful\", \"Thank you for being you\".",
      "During recess, Luana began to hand out the hearts to people – children, teachers, school staff. At first, everyone was surprised by the unexpected gesture. But soon, something magical began to happen.",
      "With each heart delivered, Luana could see a small wave of color radiating from the person who received it. It was exactly like in her drawing! A serious-faced man who worked in the cafeteria received a purple heart saying \"Your food is the best in the world\". His face immediately lit up in a smile, and Luana could see the purple spreading around him.",
      "The math teacher, always so strict, received a green heart with the message \"Thank you for teaching us difficult things in a cool way\". Her eyes filled with tears, and a bright green aura appeared around her.",
      "Without realizing it, Luana was transforming the school. People started smiling more, thanking for small kindnesses, looking each other in the eyes when they talked. And most extraordinary: some of them began to make their own hearts to distribute.",
      "A week later, the entire school was different. The walls, once so gray, were now covered with colorful hearts with messages of love and gratitude. People walked more slowly, smiled more, talked more.",
      "The principal, impressed with the transformation, called Luana to her office.",
      "\"Luana, do you realize what you did? You brought color to our school.\"",
      "Luana smiled. \"It wasn't me, principal. It was love. It was always here, it just needed to be remembered.\"",
      "Luana's initiative didn't stop at school. The students took the idea to their homes, their neighborhoods, to the entire city. Gradually, that gray world was transformed into a rainbow of colors and smiles.",
      "And all this began with a simple act of love – a small colored paper heart and kind words that reminded people of how good it was to love and be loved.",
      "Because, as Luana discovered, love is the greatest magic that exists: it has the power to color the entire world, one person at a time."
    ],
    moral: "Love has the power to transform the world around us, bringing color and joy to lives that have become gray. Small gestures of kindness and words of affirmation can create waves of positive change that spread far beyond what we imagine.",
    color: "#F59E0B"
  },
  41: {
    title: "The Invisible Shields",
    category: "Protection",
    categoryLink: "/en/categories/protection",
    readTime: "6 min",
    content: [
      "When Nina was four years old, her father told her about the invisible shields. They were returning from the park, where Nina had fallen off the swing and hurt her knee. After cleaning the wound and putting on a colorful bandage, her father hugged her tightly and said:",
      "\"Did you know that we all have invisible shields that protect us?\"",
      "Nina wiped away her tears, immediately interested. \"Shields like the knights have?\"",
      "\"Yes, but much better,\" replied her father. \"Because ours are made of love, and love is the strongest material in the universe.\"",
      "Nina looked at her own arms, trying to see this shield.",
      "\"We can't see it with our eyes,\" explained her father, smiling. \"But we can feel it with our hearts.\"",
      "That night, before going to sleep, Nina asked her father to tell her more about the invisible shields. Sitting on the edge of the bed, he explained:",
      "\"Every time someone loves you, your shield gets stronger. When mom kisses you in the morning, when grandma calls just to say she misses you, when your friend shares his snack with you... each gesture of love adds a layer to your shield.\"",
      "\"And what is this shield for?\" asked Nina, snuggling into her favorite blanket.",
      "\"It protects you from the bad things in the world: from fears, from sadness, from loneliness. Not that it prevents you from feeling these things – because feeling is part of being human. But the shield gives you strength to deal with them, to know that, even in difficult moments, you are never alone.\"",
      "Nina thought about this for a moment. \"Do I have a strong shield, Daddy?\"",
      "\"The strongest I've ever seen,\" he assured her, kissing her forehead. \"It's made of all the love that mom and I feel for you, of the love of your grandparents, your uncles and aunts, your friends...\"",
      "The idea of invisible shields fascinated Nina. In the days that followed, she began to notice the moments when her shield was strengthened: when her mother combed her hair with care; when her father made up crazy stories just to make her laugh; when her best friend, Julia, held her hand on the first day of school.",
      "But the great test of the invisible shields came when Nina was six years old. Her family needed to move to another city because of her father's job. Nina was devastated. She would have to leave her school, her friends, her home, everything she knew and loved.",
      "The night before the move, lying in her nearly empty room, Nina cried softly. Her shield seemed weak and full of cracks.",
      "Her mother entered the room, as if she had sensed her daughter's broken heart. She sat on the edge of the bed and turned on a small star light that projected constellations on the ceiling.",
      "\"Do you remember the invisible shields that dad told you about?\"",
      "Nina nodded, wiping away her tears.",
      "\"There's something very special about them: they are flexible and travel with you, no matter where you go.\" Her mother took Nina's hand and placed it on her heart. \"Because the love that forms your shield is always here, stored inside you.\"",
      "\"But I'll miss Julia, grandma, everyone...\"",
      "\"Yes, you will. And that shows how strong your shield is, because we only miss those we truly love.\" Her mother opened her palm, revealing a small medallion. \"I brought something for you.\"",
      "The medallion was silver, with a star engraved on it. When Nina opened it, she found a tiny photo of her family inside.",
      "\"Whenever you feel afraid or lonely in the new city, hold this medallion and remember that you are protected by our love, no matter the distance.\"",
      "Nina slept with the medallion clutched in her hand. The next morning, before leaving, she asked to visit Julia one last time.",
      "Instead of just saying goodbye, Nina explained to her friend about the invisible shields. \"Even from afar, our friendship love will strengthen my shield, and yours too,\" she said, with wisdom beyond her years.",
      "The two friends exchanged drawings: Julia gave Nina a drawing of them as superheroes with shining shields, and Nina gave Julia a drawing of two hearts connected by a dotted line, representing the distance that could not separate them.",
      "The first days in the new city were difficult. Everything was strange, and Nina felt a void in her chest that not even the medallion seemed to completely fill. But, gradually, unexpected things began to happen.",
      "A girl named Laura invited her to play in the park. Her new teacher noticed her talent for drawing and asked her to make an illustration for the cover of the school newspaper. An elderly neighbor, Mr. Robert, showed her how to make paper boats to float in the small lake near home.",
      "Each new smile, each kindness, each connection, no matter how small, added a layer to Nina's shield. And, surprisingly, she realized that her shield wasn't just recovering... it was becoming stronger than ever.",
      "One day, while talking to Julia via video call, Nina had a big realization:",
      "\"You know what I discovered, Ju? The invisible shields aren't just to protect us. They can also protect others. Every time we are kind to someone, we help strengthen that person's shield.\"",
      "\"How so?\" asked Julia, curious.",
      "\"Remember Laura, the new girl I told you about? She was very lonely at school, even more than me. When I invited her to play, I saw her face change, as if a light had lit up inside her. I think I helped fix a crack in her shield.\"",
      "As she grew up, Nina never forgot about the invisible shields. In her teens, when she faced bullying, it was the shield that gave her strength to stay true to herself. In college, away from home for the first time, it was the shield that reminded her that she was never really alone.",
      "And when, years later, Nina became a mother, one of the first stories she told her son was about the invisible shields. Sitting on the edge of his bed, with the same star medallion now hanging from her neck, she explained:",
      "\"Every time someone loves you, your shield gets stronger. And the amazing thing is, every time you love someone, that person's shield also gets stronger. That's how we change the world, one shield at a time.\"",
      "Because Nina had understood what her father had tried to teach her so many years ago: that love is not only the strongest material in the universe, but also the most enduring. That it crosses distances, overcomes obstacles, heals wounds and, most importantly, multiplies every time it is shared.",
      "And that, Nina concluded, was the true power of the invisible shields."
    ],
    moral: "The love we receive from others strengthens and protects us, creating an invisible shield that helps us face life's challenges. More importantly, when we share love and kindness, we help strengthen the shields of those around us, creating a network of protection that benefits everyone.",
    color: "#3B82F6"
  }
};

export default function StoryPage() {
  const params = useParams();
  const id = params.id as string;
  const [story, setStory] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    if (stories[id]) {
      // @ts-ignore
      setStory(stories[id]);
    }
  }, [id]);

  if (!story) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 font-heading text-[#333333]">Story not found</h1>
          <p className="mb-8">The story you are looking for is not available.</p>
          <Link
            href="/en/stories"
            className="bg-[#6366F1] text-white px-6 py-3 rounded-md hover:bg-[#4F46E5] transition-colors"
          >
            Back to stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back navigation */}
        <div className="mb-6">
          <Link
            href="/en/stories"
            className="text-[#6366F1] hover:text-[#4F46E5] flex items-center"
          >
            ← Back to stories
          </Link>
        </div>

        {/* Story header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 font-heading text-[#333333]">{story.title}</h1>
          <div className="flex items-center text-sm text-[#666666] mb-4">
            <span className="mr-4">Category:
              <Link href={story.categoryLink} className="text-[#F59E0B] ml-1 hover:underline">
                {story.category}
              </Link>
            </span>
            <span>{story.readTime} read</span>
          </div>
        </div>

        {/* Story image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] h-64 w-full"></div>
        </div>

        {/* Story content */}
        <div className="prose max-w-none mb-8">
          {story.content.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Story moral */}
        <div className="bg-[#FFF8F5] border-l-4 border-[#FF9D5C] p-4 mb-8">
          <h3 className="font-semibold text-[#333333] mb-2">Moral of the Story:</h3>
          <p className="text-[#666666]">
            {story.moral}
          </p>
        </div>

        {/* Share */}
        <div className="mb-8">
          <h3 className="font-semibold text-[#333333] mb-2">Share this story:</h3>
          <div className="flex space-x-4">
            <button className="bg-[#1877F2] text-white px-4 py-2 rounded-md">Facebook</button>
            <button className="bg-[#1DA1F2] text-white px-4 py-2 rounded-md">Twitter</button>
            <button className="bg-[#25D366] text-white px-4 py-2 rounded-md">WhatsApp</button>
          </div>
        </div>

        {/* More stories */}
        <div>
          <h3 className="font-semibold text-[#333333] mb-4 text-xl">More stories you might like:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.keys(stories)
              .filter(key => key !== id)
              .slice(0, 3)
              .map((key) => (
                <div key={key} className="story-card">
                  <div className="story-card-image" style={{ backgroundColor: stories[key].color }}></div>
                  <div className="story-card-content">
                    <h3 className="font-semibold mb-2">{stories[key].title}</h3>
                    <Link
                      href={`/en/stories/${key}`}
                      className="read-more"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
