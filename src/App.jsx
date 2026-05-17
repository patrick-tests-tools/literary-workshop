import { useState } from "react";

const G = "#d4b778";
const DIM = "#5a5040";
const MID = "#c8c0b0";
const DARK = "#0e0c0a";
const BORDER = "rgba(255,255,255,0.08)";

// ─── LESSONS DATA ─────────────────────────────────────────────────────────────

const LESSONS = {
  paragraph: [
    {
      id: "p1",
      title: "The Paragraph as Unit of Attention",
      subtitle: "What a paragraph actually is",
      body: `A paragraph is not a formatting block. It is not a visual rest for the eye. It is a container for one movement of attention — a single gesture of the mind that begins somewhere and arrives somewhere different.

Every paragraph makes a promise in its opening sentence and either fulfils or complicates that promise by its last. When you break to a new paragraph, you signal: the attention has moved. Something has shifted — in focus, in register, in time, in emotional temperature.

The most common weakness in apprentice literary fiction is the paragraph that begins and ends in the same place. Sentences accumulate without going anywhere. The paragraph sits rather than moves.`,
      principle: "A paragraph should arrive somewhere different from where it started — in understanding, in emotional register, or in what the reader now knows.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `One evening he was dining in the gardens, and the lady in the béret came up slowly to take the next table. Her expression, her gait, her dress, and the way she did her hair told him that she was a lady, that she was married, that she was in Yalta for the first time and alone, and that she was dull there. The stories told of the immorality in such places as Yalta are to a great extent untrue; he despised them, and knew that such stories were for the most part made up by persons who would themselves have been glad to sin if they had been able; but when the lady sat down at the next table three paces from him, he remembered these tales of easy conquests, of trips to the mountains, and the tempting thought of a swift, fleeting love affair, a romance with an unknown woman, whose name he did not know, suddenly took possession of him.`,
        analysis: `Watch the movement. The paragraph opens with a man observing a woman: cool, cataloguing, almost clinical. By the last sentence he has been overtaken — the careful observer has become a man seized by desire. The paragraph begins in detachment and ends in possession. Notice also how Chekhov refuses to announce this shift: he lets the paragraph perform it.`
      }
    },
    {
      id: "p2",
      title: "General to Particular",
      subtitle: "The deepening paragraph",
      body: `The most reliable paragraph shape in literary fiction moves from a general claim to particular evidence. It states something true about the world or the character, then proves it through the concrete and specific.

This is not a rule. It is a pressure system. The general opening creates expectation; the particular details satisfy and deepen it. The reader feels the paragraph doing something — landing, earning its claim.

The opposite also works: particular details accumulating toward a general truth. But what almost never works is the paragraph that stays general throughout — abstract emotion, stated feeling, unearned observation. Without the particular, there is nothing to hold onto.`,
      principle: "Move from claim to evidence, or from detail to meaning. Never stay at one altitude for the whole paragraph.",
      example: {
        source: "Katherine Mansfield, 'The Garden Party'",
        text: `And after all the weather was ideal. They could not have had a more perfect day for a garden-party if they had ordered it. Windless, warm, the sky without a cloud. Only the blue was veiled with a haze of light gold, as it is sometimes in early summer. The gardener had been up since dawn, mowing the lawns and sweeping them, until the grass and the dark flat rosettes where the daisy plants had been seemed to shine. As for the roses, you could not help feeling they understood that roses are the only flowers that impress people at garden-parties; the only flowers that everybody is certain of knowing. Hundreds, yes, literally hundreds, had come out in a single night; the green bushes bowed down as though they had been visited by archangels.`,
        analysis: `The paragraph opens with a claim — ideal weather — then earns it through accumulation: windless, warm, cloudless, a haze of light gold. But Mansfield doesn't stop at weather. The paragraph deepens into the roses, and here the movement becomes something else: the consciousness of the family bleeding into the description. The roses "understood." The green bushes bowed "as though visited by archangels." The particular details have become charged with class and vanity. The paragraph ends further from where it began than you noticed.`
      }
    },
    {
      id: "p3",
      title: "Suggestion Over Explanation",
      subtitle: "What the paragraph must not say",
      body: `The most damaging habit in apprentice literary fiction is explaining what the prose has already shown. The paragraph shows a character unable to meet someone's eyes, trembling hands, a voice that goes flat — and then adds: "He was terrified."

That last sentence undoes the work. The reader has already felt the terror. Naming it breaks the spell and signals that the writer doesn't trust the reader.

Literary fiction operates through implication. The reader participates — assembles the emotion from the details you give them. When you name the emotion, you take that participation away. The reader becomes passive. The prose becomes explanation rather than experience.

The principle: if the paragraph is doing its job, the emotional label is unnecessary. If you find yourself writing "he felt," "she realised," "it seemed to him" — stop, and ask what concrete detail would do that work instead.`,
      principle: "Name the object, the gesture, the room. Let the reader name the feeling.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `There was a water-melon on the table. Gurov cut himself a slice and began eating it without haste. There followed at least half an hour of silence. Anna Sergeyevna was touching; there was about her the purity of a good, simple woman who had seen little of life.`,
        analysis: `Anna has just given herself to Gurov for the first time. She is devastated. He cuts a slice of watermelon and eats it without haste. Chekhov does not write that Gurov felt nothing, that he was callous and unmoved. He gives us the watermelon. The unhurried eating. The half hour of silence. The reader assembles the cruelty from these details — and feels it more keenly because they assembled it themselves. The final sentence on Anna is tender, not ironic. The irony lives between the two observations, in the silence the paragraph refuses to fill.`
      }
    },
    {
      id: "p4",
      title: "Rhythm and Breath",
      subtitle: "How a paragraph sounds",
      body: `Paragraphs have rhythm. The alternation of long and short sentences creates pace: long sentences immerse, short sentences isolate. A paragraph that never varies its sentence length becomes monotonous regardless of its content.

Short sentences hit. They land and stop. They create weight, finality, shock. Long sentences — with their accumulating clauses, their insistence on adding and modifying and turning back on themselves before they finally release you — create momentum and the feeling of a mind in motion, following a thought wherever it goes.

The most common apprentice mistake is the paragraph where every sentence is the same length. The prose moves at a single speed. Nothing accelerates or slows. Nothing hits.

Read your paragraphs aloud. Where do you run out of breath? Where does it feel mechanical? The paragraph's music is inseparable from its meaning.`,
      principle: "Vary sentence length deliberately. Short sentences create weight. Long sentences create immersion. Never stay at one speed.",
      example: {
        source: "Katherine Mansfield, 'At the Bay'",
        text: `A heavy dew had fallen. The grass was blue. Big drops hung on the bushes and just did not fall; the silvery, fluffy toi-toi was limp on its long stalks, and all the marigolds and the pinks in the bungalow gardens were bowed to the earth with wetness. Drenched were the cold fuchsias, round pearls of dew lay on the flat nasturtium leaves. It looked as though the sea had beaten up softly in the darkness, as though one immense wave had come rippling, rippling — how far?`,
        analysis: `Short. Short. Then long, accumulating, listing. Then inverted syntax for compression. Then a long sentence that ripples — that literally performs rippling through its rhythm — and breaks off into a question. Mansfield is composing sound. The short sentences at the start feel like drops of dew: small, discrete, complete. The long sentence feels like water spreading. The final question opens out into silence. This is prose that knows what rhythm is for.`
      }
    },
    {
      id: "p5",
      title: "The Step-by-Step Paragraph",
      subtitle: "Build one element at a time",
      body: `The hardest lesson in paragraph craft is that you cannot fix everything at once. Most writers, when they revise, try to improve everything simultaneously — the rhythm, the detail, the suggestion, the movement. The paragraph becomes a negotiation between too many competing demands, and it collapses into compromise.

The better approach: write the paragraph through one lens at a time. First pass: what is this paragraph's movement? Where does it begin, where does it need to arrive? Second pass: have you explained anything that could be shown? Cut the emotional labels. Third pass: read it aloud. Where does the rhythm break?

The Write section contains a Step by Step exercise that walks you through a paragraph one element at a time — not as a mechanical process, but as a way of learning to hear what a paragraph actually needs.`,
      principle: "Revise through one lens at a time. The writer who tries to fix everything at once usually fixes nothing.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `He was under forty, but he had a daughter already twelve years old, and two sons at school. He had been married young, when he was a student in his second year, and by now his wife seemed half as old again as he. She was a tall, erect woman with dark eyebrows, staid and dignified and, as she said of herself, intellectual. She read a great deal, used phonetic spelling, called her husband, not Dmitri, but Dimitri, and he secretly considered her unintelligent, narrow, inelegant, was afraid of her, and did not like to be at home.`,
        analysis: `Notice the cascade. Each sentence arrives out of the previous one. The daughter, the sons, the wife — factual, accumulating. Then the wife's self-description, then Gurov's private reality — and this is where the paragraph completes its movement, arriving at the secret interior: "was afraid of her, and did not like to be at home." Seven words at the end of a long sentence. The paragraph has moved from biographical fact to the hidden emotional core of a marriage. And notice: Chekhov never writes "he was unhappy."`
      }
    }
  ],
  sentence: [
    {
      id: "s1",
      title: "The Sentence as Commitment",
      subtitle: "Every sentence does a job or it doesn't belong",
      body: `Every sentence in literary fiction must earn its place. The question is not "Is this sentence well-written?" but "What is this sentence doing that could not be done without it?"

A sentence can advance action. It can deepen character. It can shift atmosphere. It can land a piece of information. It can create rhythm. But it must do at least one of these things — and the best sentences do two or three simultaneously.

The sentences that don't earn their place are easy to spot in revision: they feel like throat-clearing. They restate what the previous sentence already said. They describe something the reader has already inferred. They hold the paragraph in place when the paragraph needs to move.

Chekhov's advice was ruthless: cut the first and last paragraphs, where writers tend to warm up and cool down. The same principle applies to sentences within a paragraph.`,
      principle: "A sentence that only does one job is a candidate for cutting. A sentence that does nothing is already dead.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `She glanced at him and turned pale, then glanced again with horror, unable to believe her eyes, and tightly gripped the fan and the lorgnette in her hands, evidently struggling with herself not to faint.`,
        analysis: `Count what this single sentence does: it shows recognition (the glance), shock (turned pale), disbelief (glanced again with horror), physical response to emotional extremity (gripped the fan), and inner effort (struggling not to faint). Five things in one sentence. None of them named as an emotion — all rendered as physical event. Every element earns its place because every element adds something the others don't.`
      }
    },
    {
      id: "s2",
      title: "Sentence Length and Meaning",
      subtitle: "The length of a sentence is not neutral",
      body: `In literary fiction, how long a sentence is carries meaning. A short sentence creates emphasis, finality, isolation. It says: this is where the paragraph stops and thinks. A long sentence creates immersion, momentum, the feeling of consciousness following a thread it cannot quite let go of.

The mistake is treating sentence length as a stylistic preference rather than a semantic choice. When you write a long sentence, you are asking the reader to stay inside something — an emotion, a thought, a scene — without releasing them. When you write a short sentence, you are releasing them, letting them feel the impact of what just happened.

The most powerful use of the short sentence is after a long one. The long sentence creates pressure; the short sentence detonates it.`,
      principle: "Sentence length creates emotional pacing. The short sentence after a long one is one of prose fiction's most reliable instruments.",
      example: {
        source: "Katherine Mansfield, 'The Garden Party'",
        text: `It was just growing dusky as Laura shut their garden gates. A big dog ran by like a shadow. The road gleamed white, and down below in the hollow the little cottages were in deep shade. How quiet it seemed after the afternoon. Here she was going down the hill to somewhere where a man lay dead, and she couldn't realize it. Why couldn't she?`,
        analysis: `Mansfield moves between short declarative sentences and longer ones with precision. "A big dog ran by like a shadow." Complete. Simple. Isolating. Then a longer sentence establishing the shift from the party's world to the workers' world. Then "How quiet it seemed after the afternoon" — short, a beat of consciousness. Then the long sentence of unreality. Then the shortest, most devastating: "Why couldn't she?" Three words. The question hanging. The short sentence performs Laura's incomprehension, her inability to complete a thought.`
      }
    },
    {
      id: "s3",
      title: "The Detail That Does Two Jobs",
      subtitle: "Chekhov's principle of the multifunctional detail",
      body: `Chekhov's famous principle — if there's a gun on the wall in Act One, it must fire in Act Three — is often misread as a rule about plot. It is really a principle about economy. Every element in a story must justify its presence by doing more than one thing.

Applied to the sentence: every detail should simultaneously show character AND advance atmosphere OR carry thematic weight. A detail that only describes — that is only accurate — is a detail that isn't working hard enough.

The object that a character notices reveals what they are. The room that a character moves through reveals their relationship to the world. The weather that a character registers reveals their emotional state. Ask of every detail: what else is this doing beyond what it appears to be doing?`,
      principle: "A detail that only describes is a detail at rest. Make it work. What does it reveal? What does it charge?",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `A young man with small side-whiskers, tall and stooping, came in with Anna Sergeyevna and sat down beside her; he bent his head at every step and seemed to be continually bowing. Most likely this was the husband whom at Yalta, in a rush of bitter feeling, she had called a flunkey. And there really was in his long figure, his side-whiskers, and the small bald patch on his head, something of the flunkey's obsequiousness; his smile was sugary, and in his buttonhole there was some badge of distinction like the number on a waiter.`,
        analysis: `Every detail here is doing two jobs. The stooping, the continual bowing: physically accurate AND character revelation — servility, smallness. The small bald patch: physical detail AND tone, slightly comic and diminishing. The sugary smile: character AND class. The badge like a waiter's number: the most devastating, because it takes the one marker of his distinction and turns it into its opposite — servility made official. Nothing is decorative.`
      }
    },
    {
      id: "s4",
      title: "Syntax as Feeling",
      subtitle: "How the shape of a sentence carries emotion",
      body: `The syntax of a sentence — the order in which its elements arrive — is not neutral. The same information arranged differently creates different feelings in the reader.

"She was afraid" is a statement. "Fear moved through her" is an event. "Something that might have been fear, or might have been excitement, or both, moved through her and would not settle" is a consciousness in process — uncertain, unresolved, unable to land.

The syntax of the third version performs the feeling it describes. This is what literary prose can do that no other form can: make the shape of a sentence be the shape of an experience.

Watch for sentences where you have stated an emotion in the most direct possible form. Ask: could the syntax perform this instead? Could the shape of the sentence be the shape of the feeling?`,
      principle: "Let the structure of the sentence enact what it describes. Syntax is emotion made grammatical.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `And he kept walking up and down the street by the fence, waiting for the chance. He saw a beggar go in at the gate and dogs fly at him; then an hour later he heard a piano, and the sounds were faint and indistinct. Probably it was Anna Sergeyevna playing. The front door suddenly opened, and an old woman came out, followed by the familiar white Pomeranian. Gurov was on the point of calling to the dog, but his heart began beating violently, and in his excitement he could not remember the dog's name.`,
        analysis: `The syntax performs the waiting. Short observations accumulate: a beggar, dogs, an hour passing, piano sounds, a door. The sentences are brief and disconnected, like a man who cannot settle his attention. Then the Pomeranian — and the sentence changes register entirely. The loss of the dog's name — this tiny, absurd, devastating detail — is the emotional climax. The syntax of the sentence builds to it without announcing it.`
      }
    }
  ],
  scene: [
    {
      id: "sc1",
      title: "What Makes a Scene a Scene",
      subtitle: "The difference between scene and passage",
      body: `A scene has an engine: a want, an obstacle, and a change in state. Without all three, what you have is a passage — observation, atmosphere, description — which may be beautiful but does not carry story.

Literary fiction needs both scenes and passages. Passages of pure atmosphere, of memory, of lyric observation, do important work: they charge what surrounds them, modulate pace, create the texture of a consciousness. But they cannot substitute for scenes. Scenes carry the story. Passages earn their place by making scenes more resonant.

The test of a scene: by its end, has something changed? Not necessarily something visible. A character's understanding, the power between two people, the reader's knowledge, the emotional weather — any of these constitute change. A scene that ends in the same emotional state it began is a missed opportunity.`,
      principle: "A scene needs a want, an obstacle, and a change in state. Without change, it is a passage.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `Gurov, who was sitting in the stalls, too, went up to her and said in a trembling voice, with a forced smile: "Good-evening." She glanced at him and turned pale, then glanced again with horror, unable to believe her eyes, and tightly gripped the fan and the lorgnette in her hands, evidently struggling with herself not to faint.`,
        analysis: `The want: Gurov wants to see her, to reconnect. The obstacle: the theatre, the husband, the public space, her terror. The change: everything. From their affair being a summer memory, it becomes present again — undeniably, disruptively real. The scene is four sentences. It has all three elements. It changes the story.`
      }
    },
    {
      id: "sc2",
      title: "Arrival and Orientation",
      subtitle: "How to begin a scene",
      body: `Scenes begin at instability. Not before it. One of the most reliable mistakes in apprentice fiction is starting scenes too early — before the pressure has arrived, in the establishing shots, the warming up of the characters.

Begin close to the tension. Trust the reader to orient themselves in the scene's first few beats rather than providing a full orientation before anything happens.

Orientation happens through action and detail, not through explanation. The room, the weather, the social arrangement of bodies — all of this can be established through what characters do and notice, rather than through authorial description. If your scene begins with two paragraphs of setting before a character does anything, you have probably started too early.`,
      principle: "Begin close to pressure. Establish orientation through action and detail, not prior to it.",
      example: {
        source: "Katherine Mansfield, 'The Garden Party'",
        text: `Four men in their shirt-sleeves stood grouped together on the garden path. They carried staves covered with rolls of canvas, and they had big tool-bags slung on their backs. They looked impressive. Laura wished now that she was not holding that piece of bread-and-butter, but there was nowhere to put it, and she couldn't possibly throw it away. She blushed and tried to look severe and even a little bit short-sighted as she came up to them.`,
        analysis: `We are inside the scene immediately. The workmen are there, the canvas and tool-bags establishing class and purpose. Then Laura — and immediately her discomfort, the absurd bread-and-butter she cannot put down, her attempt at an authority she doesn't feel. All orientation is accomplished through action and embarrassment. We know the scene's pressure (class anxiety, the performance of authority) before it is named, because it is being enacted.`
      }
    },
    {
      id: "sc3",
      title: "Pressure in the Scene",
      subtitle: "How scenes escalate",
      body: `A scene without escalating pressure is a scene that dies in the middle. The pressure doesn't need to be dramatic — raised voices, revelations, crises. In literary fiction, pressure is often entirely internal: silence that becomes unbearable, politeness that becomes hostile, attraction that becomes visible, shame that deepens.

The writer's job is to ensure that whatever the scene's pressure is, it increases rather than holds steady. A scene that begins tense and ends at the same tension level has not been working hard enough.

Escalation in literary fiction is often achieved through small accumulations: a pause that extends, a word that gets repeated, a question that doesn't get answered, an observation the character cannot quite let go of. The pressure builds through accretion rather than event.`,
      principle: "Pressure must increase within a scene. Small accumulations work better than manufactured drama.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `But in this case there was still the diffidence, the angularity of inexperienced youth, an awkward feeling; and there was a sense of consternation as though some one had suddenly knocked at the door. The attitude of Anna Sergeyevna — "the lady with the dog" — to what had happened was somehow peculiar, very grave, as though it were her fall — so it seemed, and it was strange and inappropriate. Her face dropped and faded, and on both sides of it her long hair hung down mournfully; she mused in a dejected attitude like "the woman who was a sinner" in an old-fashioned picture. "It's wrong," she said. "You will be the first to despise me now." There was a water-melon on the table.`,
        analysis: `The pressure in this scene is the widening gap between Anna's experience and Gurov's. Each sentence increases it: her gravity, her sense of fall, her dejected attitude, her self-accusation. The pressure builds through observation — through Gurov watching, and through the reader watching Gurov watch. Then: "There was a water-melon on the table." The sentence breaks the escalation with something so mundane it is shocking. The pressure has reached its peak through contrast.`
      }
    },
    {
      id: "sc4",
      title: "The Scene's Ending",
      subtitle: "Where to stop",
      body: `Strong scenes end on image, implication, gesture, or silence. They do not end on summary. They do not tell the reader what the scene meant. They trust the reader to carry the meaning forward.

The temptation at the end of a scene is to land the emotion — to write the sentence that names what has happened, that makes the significance explicit. Resist this. The scene has already done the work. The final sentence that names the meaning undoes it.

The best endings in literary fiction stop slightly before the reader expects them to. They end in the middle of the feeling rather than after it. They leave something unfinished — not as a coy withholding, but because emotional experience is never finished, never fully resolved, and prose that pretends otherwise is lying.`,
      principle: "End on image, gesture, or implication. Stop before you explain what the scene meant.",
      example: {
        source: "Katherine Mansfield, 'The Garden Party'",
        text: `It was growing dusky as Laura shut their garden gates. A big dog ran by like a shadow. The road gleamed white, and down below in the hollow the little cottages were in deep shade. How quiet it seemed after the afternoon. Here she was going down the hill to somewhere where a man lay dead, and she couldn't realize it. Why couldn't she? She stopped a minute. And it seemed to her that kisses, voices, tinkling spoons, laughter, the smell of crushed grass were somehow inside her. She had no room for anything else. How strange!`,
        analysis: `Mansfield ends not with a statement about class or death or Laura's moral inadequacy, but with an image of the party's residue living inside Laura as she walks toward a dead man. "Kisses, voices, tinkling spoons, laughter, the smell of crushed grass" — the party is not behind her. It is in her body. "She had no room for anything else." Not an accusation. Not a judgment. An observation that holds both the terrible and the true. Then "How strange!" — Laura's voice, childlike and insufficient, which is the point.`
      }
    }
  ],
  story: [
    {
      id: "st1",
      title: "What Makes a Story a Story",
      subtitle: "Time, pressure, and desire",
      body: `A story begins when somebody wants something, something threatens that desire, and time begins pressing on the situation. Without all three, prose becomes static.

Without pressure, prose is observation. Without desire, scenes lose movement — characters become recipients of events rather than agents in them. Without time, writing becomes analysis: the pressure that characters actually feel is the pressure of time, the narrowing of options, the approach of the irreversible.

Literary fiction differs from genre fiction in where it locates its drama. Genre fiction dramatises external events. Literary fiction dramatises what happens inside a person under the pressure of external events. The external events are the occasion; the internal events are the story.`,
      principle: "Story requires time, pressure, and desire. Remove any one of them and you have something else — essay, impression, anecdote.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `It was said that a new person had appeared on the sea-front: a lady with a little dog. Dmitri Dmitritch Gurov, who had by then been a fortnight at Yalta, and so was fairly at home there, had begun to take an interest in new arrivals.`,
        analysis: `Two sentences. Time: Gurov has been in Yalta a fortnight — he is settled, bored, available. Desire: he has "begun to take an interest in new arrivals." Pressure: it is implicit — the unnamed restlessness of a man who has run out of distractions. Chekhov establishes all three in the opening. The story can begin because all its conditions are in place.`
      }
    },
    {
      id: "st2",
      title: "Literary Fiction Is About Loss",
      subtitle: "The deepest engine",
      body: `The deepest engine of most literary fiction is loss — or the fear of loss, or the refusal to accept it, or the slow adjustment to it. Stories move because something that was once possible is becoming impossible. Something that was once held is slipping away.

This is not pessimism. It is the structure of time. Every story exists in time, and time takes things away. The question a literary story poses is not usually "Will they get what they want?" but "How will they cope with not getting it — or with getting it and discovering it is not what they wanted?"

The character who cannot accept loss becomes the engine of the middle of a story: their avoidance, their self-deception, their insistence on a version of reality that the evidence is disproving — this is where literary fiction lives.`,
      principle: "Ask of any story: what is being lost? If you cannot answer, the story may not yet have found its engine.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `And in his home it was impossible to talk of his love, and he had no one outside; he could not talk to his tenants nor to any one at the bank. And what had he to talk of? Had he been in love, then? Had there been anything beautiful, poetical, or edifying or simply interesting in his relations with Anna Sergeyevna? And there was nothing for him but to talk vaguely of love, of woman, and no one guessed what it meant.`,
        analysis: `What Gurov is losing — has already lost — is the possibility of being known. His love for Anna is real; his life gives him nowhere to put it. He cannot speak it to his wife, his colleagues, his friends. The loss is not of Anna herself but of the version of himself that she makes possible. The paragraph enacts the loss through negatives — cannot, no one, nothing.`
      }
    },
    {
      id: "st3",
      title: "The Middle Must Be Fat",
      subtitle: "Where stories fail",
      body: `Most weak literary fiction fails in the middle. The opening is strong — the character is established, the tension implied, the world evoked. The ending is strong — a moment of recognition, an image that resonates. But the middle is thin. Things happen without escalating pressure. Scenes accumulate without deepening the situation.

The middle must be fat. Feed it loss, shame, misunderstanding, avoidance, failed communication, the wrong choice made for the right reason, the right choice made too late. Do not rescue characters from difficulty. Do not resolve pressure before it has built to its natural breaking point.

The writer's instinct to help their characters, to ease their pain, to move them toward resolution before the story has earned it — this is the most common cause of thin middles.`,
      principle: "The middle is where the story earns its ending. Do not rescue characters early. Let pressure accumulate until it breaks.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `One evening, coming out of the doctors' club with an official with whom he had been playing cards, he could not resist saying: "If only you knew what a fascinating woman I made the acquaintance of in Yalta!" The official got into his sledge and was driving away, but turned suddenly and shouted: "Dmitri Dmitritch!" "What?" "You were right this evening: the sturgeon was a bit too strong!"`,
        analysis: `Gurov tries to speak his love — the one true thing in his life — and is answered with a comment about fish. The middle of the story is built from these collisions: the interior enormity of Gurov's feeling against the complete indifference of the world he inhabits. This is pressure accumulated through repetition of failure. Each attempt to speak is met with incomprehension. The middle is fat because Chekhov is merciless about how long this isolation lasts.`
      }
    },
    {
      id: "st4",
      title: "The Ending That Doesn't End",
      subtitle: "Openness as form",
      body: `The great literary story endings are not conclusions. They do not resolve. They arrive at a point of clarity that is also a point of irresolution — the character understands something fully for the first time, and what they understand is that they are trapped, or changed, or unable to return.

Chekhov's endings refuse closure. The Lady with the Dog ends not with Gurov and Anna together but with them sitting in a hotel room, understanding that "the most complicated and difficult part was only just beginning." The story ends by opening. The ending is the recognition of the problem, not its solution.

This is not a refusal of meaning. It is a different model of meaning — one that says: life does not resolve into neat conclusions, and fiction that pretends it does is being dishonest about what life is.`,
      principle: "An ending that resolves everything has often resolved too much. The strongest endings open as much as they close.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `And it seemed to them that in a little while the solution would be found, and then a new and splendid life would begin; and it was clear to both of them that they had still a long, long road before them, and that the most complicated and difficult part was only just beginning.`,
        analysis: `This is one of the great endings in short fiction. It gives the reader exactly what has been withheld — the recognition of love, the acknowledgement of its reality — and simultaneously refuses to resolve it. "The most complicated and difficult part was only just beginning." The story ends by naming what it cannot show us: the whole of their lives. The ellipsis is the form. The opening is the meaning.`
      }
    }
  ],
  voice: [
    {
      id: "v1",
      title: "Narrative Distance",
      subtitle: "How close the narrator sits to the character",
      body: `Narrative distance is the space between the narrator and the character's consciousness. At maximum distance, the narrator observes from outside — reporting behaviour, describing surfaces, offering no access to inner life. At minimum distance, the narrator has dissolved into the character's mind: we hear thought in the character's own rhythms, see the world through their distortions, feel their emotions without being told what they are.

Literary fiction moves along this spectrum, often within a single paragraph. The writer who understands distance can zoom in to make the reader feel something intensely, then pull back to let irony operate — to show the gap between what the character believes and what is true.

The most dangerous position is an unexamined one. When writers don't think about distance, they drift: slipping into the character's head for one sentence, pulling back to authorial observation in the next, without purpose. The reader feels the inconsistency as instability rather than technique.

Distance is not the same as point of view. Third person can be extremely close. First person can be surprisingly distant — a narrator who doesn't understand their own story is a narrator at a remove from themselves.`,
      principle: "Know at every moment how close you are to your character's consciousness — and move deliberately, not by accident.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `He was under forty, but he had a daughter already twelve years old, and two sons at school. He had been married young, when he was a student in his second year, and by now his wife seemed half as old again as he. She was a tall, erect woman with dark eyebrows, staid and dignified and, as she said of herself, intellectual. She read a great deal, used phonetic spelling, called her husband, not Dmitri, but Dimitri, and he secretly considered her unintelligent, narrow, inelegant, was afraid of her, and did not like to be at home.`,
        analysis: `Watch the shift in distance. The opening sentences are far back — biographical fact delivered neutrally: ages, a daughter, two sons, a marriage. Then the wife's self-description: "as she said of herself, intellectual." The narrator has stepped back further still, quoting her own word to mark it as hers, not theirs. Then the pivot: "he secretly considered her unintelligent, narrow, inelegant." Suddenly we are inside Gurov's private judgment. The distance has collapsed in a single clause. Then: "was afraid of her, and did not like to be at home." Back to flat statement, but now charged — because we know the fear is secret, is his, is what he cannot say aloud. Chekhov moves the distance without announcing it, and the movement creates the irony.`
      }
    },
    {
      id: "v2",
      title: "Free Indirect Discourse",
      subtitle: "The technique that defines literary fiction",
      body: `Free indirect discourse is the mode in which the narrator speaks in the character's voice without quotation marks, without "she thought" or "he felt." It is third person in grammar, first person in feeling. The narrator and character occupy the same sentence.

It is the defining technique of literary fiction because it allows the writer to do something no other form can: to show a character's inner life from the inside, while retaining the narrator's capacity for irony. The narrator can present a character's delusion in the character's own terms, without endorsing it. The reader simultaneously inhabits and watches.

The tell is in diction and syntax. Free indirect discourse uses the character's vocabulary, their sentence rhythms, their emotional logic — not the narrator's. When Jane Austen writes "It was a truth universally acknowledged," the irony comes from the gap between the grandiose diction ("universally acknowledged") and the smallness of what follows. The narrative voice has adopted the language of the world it is describing — and in doing so, exposed it.

Learning to write free indirect discourse means learning to hear the difference between your voice and your character's voice — and then deliberately blurring that line.`,
      principle: "Free indirect discourse lets you inhabit a character's consciousness while keeping the narrator's ironic distance. The technique lives in diction: use the character's words, not yours.",
      example: {
        source: "Katherine Mansfield, 'The Garden Party'",
        text: `And after all the weather was ideal. They could not have had a more perfect day for a garden-party if they had ordered it. Windless, warm, the sky without a cloud. Only the blue was veiled with a haze of light gold, as it is sometimes in early summer. The gardener had been up since dawn, mowing the lawns and sweeping them, until the grass and the dark flat rosettes where the daisy plants had been seemed to shine. As for the roses, you could not help feeling they understood that roses are the only flowers that impress people at garden-parties; the only flowers that everybody is certain of knowing.`,
        analysis: `"And after all the weather was ideal." The "and after all" is not the narrator's — it is the family's. It is the voice of people who had worried, who had contingency plans, who now feel vindicated. "They could not have had a more perfect day for a garden-party if they had ordered it" — again, the family's logic, their transactional relationship with nature. "The only flowers that everybody is certain of knowing" — whose snobbery is this? The roses', allegedly. But it is the family's. Mansfield has slipped the family's class consciousness into the narrator's description of flowers. That is free indirect discourse at its most precise: the narrator wearing the character's values like a mask, and the reader watching the mask.`
      }
    },
    {
      id: "v3",
      title: "Diction as Character",
      subtitle: "The words a character notices reveal who they are",
      body: `Voice is not only about syntax and rhythm. It is about which words appear — and which don't. Every consciousness has a vocabulary, and that vocabulary is a portrait.

A character who notices the "efficient" layout of a room is different from one who notices the "cold" layout of the same room. A character who thinks in legal terms — clauses, obligations, precedent — inhabits a different world from one who thinks in textures and colours. The words your character reaches for are not neutral; they reveal how they have been shaped, what they have been trained to notice, what they cannot see.

This is why ventriloquism is the core skill of literary fiction. The writer must think in the character's vocabulary, not their own. Every time a word from the writer's own habitual register sneaks in — a word the character would never use, would never even think — the illusion breaks. The reader feels the author behind the page.

The discipline: when you are in close third person or first person, go through your draft and mark every word that belongs to you, not to them. Replace it with their word. If they don't have a word for something — if their vocabulary has a gap — that gap is information.`,
      principle: "The words a character reaches for are a portrait. Write in their vocabulary, not yours — and treat the gaps in their vocabulary as meaning.",
      example: {
        source: "Carver, 'Cathedral'",
        text: `This blind man, an old friend of my wife's, he was on his way to spend the night. His wife had died. So he was visiting the dead wife's relatives in Connecticut. He called my wife from his in-laws'. Arrangements were made. He would come by train, a five-hour trip, and my wife would meet him at the station. She hadn't seen him since she worked for him one summer in Seattle ten years ago. But she and the blind man had kept in touch. They made tapes and mailed them back and forth.`,
        analysis: `"This blind man" — not "Robert" or "him." The narrator won't give the man his name yet; he is a category, a problem, a thing the narrator has not yet agreed to see as a person. "Arrangements were made" — passive, as if the narrator had no part in it and wants no part in it. "His wife had died. So he was visiting the dead wife's relatives." The logic is functional, even bureaucratic — no sympathy in the syntax. "They made tapes and mailed them back and forth" — the narrator cannot quite conceive of the intimacy this represents. Every word choice is the narrator's limitation on the page. Carver never tells us the narrator is closed off and quietly threatened. He just lets him speak.`
      }
    },
    {
      id: "v4",
      title: "Register and Rupture",
      subtitle: "When the voice shifts, something is happening",
      body: `Every narrative voice has a register — a consistent level of diction, formality, and emotional temperature. Literary prose earns a great deal of its power from ruptures in that register: moments when the voice suddenly drops into the colloquial, or rises into the elevated, or breaks into something raw and unguarded. The rupture signals: something has changed. The character cannot maintain their usual relation to language.

A narrator who speaks in careful, controlled sentences and then produces a fragment — a sentence that just stops — has broken under some pressure. A character whose narration has been sardonic and defended and who suddenly uses a word of naked tenderness has revealed something they didn't intend to.

The writer controls this. Register is not an accident of style; it is a tool. The question to ask of any passage is: what register is this voice in, and what would it mean to break from it here? The moment of rupture is often the moment of maximum emotional truth.

Avoid the mistake of writing at a single register throughout. Prose that never shifts feels airless, controlled in the wrong way — the writer's control rather than the character's, which are different things.`,
      principle: "Establish a register, then break it deliberately. The rupture is where the emotional truth lives.",
      example: {
        source: "Didion, 'The Year of Magical Thinking'",
        text: `Life changes fast. Life changes in the instant. You sit down to dinner and life as you have known it ends. The question of self-pity.`,
        analysis: `The opening sentences are stripped, declarative, almost clinical — a voice that has learned to speak about catastrophe in short statements because longer ones would break. "Life changes fast." Three words. "Life changes in the instant." Four. "You sit down to dinner and life as you have known it ends." This is the rupture — a longer sentence, but still controlled, passive almost. And then: "The question of self-pity." A fragment. Not even a question. The voice has stumbled. The syntactic break performs the mental break. In four sentences Didion establishes the register (controlled grief, short declarative) and ruptures it (the fragment that isn't a sentence). The reader feels the rupture as the narrator's loss of footing. Everything in the book flows from that stumble.`
      }
    },
    {
      id: "v5",
      title: "The Unreliable Voice",
      subtitle: "When the narrator doesn't know their own story",
      body: `The most powerful voices in literary fiction are often the ones that don't fully understand what they are saying. The narrator who insists they are fine while every detail they describe reveals otherwise. The narrator whose loyalty to one interpretation of events makes them blind to another. The narrator who is telling you one story while living a different one.

This is not the same as the cheap "unreliable narrator" trick where the reader is meant to feel clever for catching the narrator out. That is a plot device. What literary fiction does is more interesting: it presents a consciousness that is genuinely limited in the way all consciousnesses are limited — by desire, by fear, by the stories we need to believe about ourselves. The reader doesn't catch the narrator; they simply see more than the narrator can.

The technique requires the writer to hold two levels simultaneously: what the narrator thinks is happening, and what is actually happening. The gap between those two levels is where the story lives. Every detail the narrator includes, every detail they omit, every judgment they make and don't question — all of it is evidence for the reader to read against the narrator's grain.

This is difficult. It requires the writer to fully inhabit a limited consciousness while remaining aware of its limits from outside.`,
      principle: "The gap between what a narrator believes and what is true is where literary fiction does its deepest work. Hold both levels — the character's version and the real one — simultaneously.",
      example: {
        source: "Carver, 'Cathedral'",
        text: `I wasn't enthusiastic about his visit. He was no one I knew. And his being blind bothered me. My idea of blindness came from the movies. In the movies, the blind moved slowly and never laughed. Sometimes they were led by seeing-eye dogs. A blind man in my house was not something I looked forward to.`,
        analysis: `The narrator is telling us he is not prejudiced — just realistic, just working from what he knows. He is explaining himself to us, which is already a signal: people who are comfortable with their feelings don't explain them. "My idea of blindness came from the movies" — he says this without embarrassment, as though it is a reasonable source. "In the movies, the blind moved slowly and never laughed" — the narrator has no idea how much this reveals. He is not a bad man by his own account; he is a man who has not examined himself. Carver gives us full access to that non-examination. The reader sees the limitation; the narrator presents it as information.`
      }
    }
  ],
  dialogue: [
    {
      id: "d1",
      title: "What Dialogue Is Actually For",
      subtitle: "Not information — pressure",
      body: `Dialogue in literary fiction is not a delivery mechanism for information. That is its least interesting function. Characters can exchange facts in dialogue, but if the exchange of facts is all that is happening, the scene is working below its capacity.

Dialogue is for pressure. Two people talking are two people wanting things, and the conversation is the field where those wants collide, deflect, accommodate, or refuse each other. Every line of dialogue is a move — an approach, a withdrawal, a test, an avoidance. The reader should be able to feel what is at stake in the exchange even when the subject of conversation is entirely neutral.

The test: cover up the dialogue tags and action beats, read only what the characters say to each other, and ask — can you feel the relationship? The power between them, the history, the thing neither of them is saying? If the answer is no — if the dialogue could belong to any two people — it is not working.

The common mistake is to write dialogue that is too sensible. Real conversation, and fictional conversation that works, is full of non-sequiturs, deflections, half-answers, questions answered with questions. People in conversation are almost never trying to have the conversation they are nominally having.`,
      principle: "Dialogue is pressure, not information. Every line is a move. What does this character want from the other person right now — and are they asking for it directly or sideways?",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `"Let us go away from here," she said. "Let us go away from here." "Where?" "Where you will — anywhere." They went and spent two hours standing on the platform at Oreanda. Not far from them there was a steamer making toward the landing with the lights extinguished in the early dawn, and they watched it with very little being said.`,
        analysis: `"Where you will — anywhere." This is not vagueness — it is total willingness, surrender, the opposite of the life she has been living. The conversation is three lines and it contains an entire emotional history: the desperation of a woman who has given herself over and doesn't know where it leads. Chekhov doesn't have them discuss this. He has them say almost nothing — and then stand for two hours watching a steamer in silence. What they are not saying fills the scene. The "very little being said" is the subject of the passage.`
      }
    },
    {
      id: "d2",
      title: "Subtext in Dialogue",
      subtitle: "The conversation beneath the conversation",
      body: `Subtext is the conversation that is actually happening underneath the conversation that appears to be happening. Two characters arguing about who forgot to pay a bill may actually be fighting about who is failing whom in the marriage. Two characters discussing a piece of furniture may actually be negotiating the end of a relationship. The surface subject is not the real subject.

This is not a trick or a writerly affectation. It is how people actually talk when something is at stake and they are not ready — or not able — to say it directly. The oblique approach, the displacement onto an adjacent subject, the sudden change of topic that is not really a change at all: these are the moves people make when the real conversation is too dangerous or too painful to have.

The writer's job is to write the surface conversation with precision — the actual words, the actual subject — while ensuring the reader can feel the real subject pressing through. The surface must be plausible; the subtext must be legible. If the surface is too thin, the subtext becomes obvious and loses its power. If the surface is too thick, the subtext disappears.

The technique: know, for every scene with dialogue, what the characters cannot say. Then write the scene in which they don't say it.`,
      principle: "Know what your characters cannot say. Then write the scene in which they don't say it — but in which the reader feels it at every line.",
      example: {
        source: "Carver, 'What We Talk About When We Talk About Love'",
        text: `"The real love," Mel said. "I mean to tell you this happened to me. I was going to tell you." "You can see how much I loved her now," Terri said. "Go on with your story," I said to Mel. "What happened?" Laura said. Mel picked up his glass of gin and swallowed some. He looked at us for a moment and then went on. "What that man in the story did —" Mel said, "— he tried to kill her." Terri said. "He did," Mel said. "Terri's right." "How do you know she didn't love him?" Terri said.`,
        analysis: `On the surface: an anecdote about a former relationship, a question about love. Underneath: Terri defending her abusive ex-husband Ed as a man who loved her, Mel unable to accept that love and violence can coexist in the same person, both of them talking about their own marriage through the story of strangers. "How do you know she didn't love him?" is not a question about the woman in the anecdote. It is a demand that Mel recognise something about Terri herself. No one names this. The conversation stays on the surface of other people's lives. The subtext lives in who speaks when, and what they choose to defend.`
      }
    },
    {
      id: "d3",
      title: "Speech Patterns as Character",
      subtitle: "How people talk is who they are",
      body: `Every character should speak differently — not through dialect or quirk, but through the underlying logic of how they use language. One character deflects with questions. Another reasserts the same point in different words when they feel threatened. One trails off; another is relentlessly complete. One reaches for abstraction when emotion gets close; another becomes suddenly concrete and practical.

These patterns are not decoration. They are characterisation by other means — and often more reliable characterisation than direct description, because the reader assembles it themselves from evidence rather than being told.

The discipline is harder than it sounds. Writers have their own speech patterns, their own habitual verbal moves, and those patterns bleed into every character if left unchecked. The character who is not you will talk like you unless you actively resist it. Resistance means knowing, before you write a scene, how each character in it uses language — what they reach for, what they avoid, what their sentences do when they are under pressure.

Interruption, sentence length, the ratio of questions to statements, the tendency to qualify or to assert — all of these are signature. Make each character's signature distinct enough that a reader could identify who is speaking without a tag.`,
      principle: "Each character's relationship to language is a portrait of their relationship to the world. Make every voice distinct enough to stand without a tag.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `"It's wrong," she said. "You will be the first to despise me now." There was a water-melon on the table. Gurov cut himself a slice and began eating it without haste. There followed at least half an hour of silence. Anna Sergeyevna was touching; there was about her the purity of a good, simple woman who had seen little of life. The solitary candle burning on the table threw a faint light on her face, yet it was clear that she was very unhappy.`,
        analysis: `Anna's two sentences reveal everything: she reaches immediately for guilt and pre-emptive shame, she assumes the worst of him, she narrates her own fall. "You will be the first to despise me now" — she is already constructing the story of her ruin, handing Gurov the role of judge. It is the speech pattern of someone who has internalised exactly the values that will condemn her. Gurov says nothing. He eats watermelon. The contrast between her verbal self-accusation and his physical indifference is the scene's entire emotional argument, and it is carried entirely by what one character says and what the other does not.`
      }
    },
    {
      id: "d4",
      title: "Action Beats and the Body in Dialogue",
      subtitle: "What the body does while people talk",
      body: `Dialogue does not happen in a vacuum. Characters have bodies that are doing things while they speak — and what the body does is not neutral. The gesture, the object handled, the physical movement or stillness: these are part of the dialogue even when they have nothing to do with the words.

The action beat — the brief physical action that accompanies or interrupts speech — does several things. It grounds the scene in physical reality, prevents the dialogue from floating free of the world. It provides rhythm: a pause, a breath, a shift in pace. And it carries emotional information that the dialogue itself cannot carry, or is refusing to carry.

A character who speaks warmly while turning away from the person they are speaking to. A character who goes very still when asked a difficult question. A character who begins performing a routine task — making coffee, folding a newspaper — at precisely the moment the conversation becomes dangerous. The body speaks what the voice cannot.

The mistake is using action beats only as punctuation — "he said, picking up his glass" — without asking what the action means. Every action beat should be chosen because it adds something: a layer of emotion, a piece of character, a counterpoint to what is being said.`,
      principle: "What the body does during dialogue carries emotional information the words cannot or will not carry. Choose every action beat for what it adds, not for how it breaks up the dialogue.",
      example: {
        source: "Carver, 'Cathedral'",
        text: `My wife finally took her eyes off the blind man and looked at me. I had the feeling she didn't like what she saw. I shrugged. I've never met, or personally known, anyone who was blind. This blind man was late forties, a heavy-set, balding man with stooped shoulders, as if he carried a great weight there. He wore brown slacks, brown shoes, a light brown shirt, a tie, a sports coat. Spiffy. He also had a full beard. But he didn't use a cane and he wore no dark glasses. I'd always thought dark glasses were a must for the blind. Part of me wished he had a pair.`,
        analysis: `"My wife finally took her eyes off the blind man and looked at me. I had the feeling she didn't like what she saw. I shrugged." The shrug is the action beat — and it is devastating. It is the narrator's total response to being seen clearly by his wife: he shrugs. It contains everything about this marriage, this man's defended refusal to be accountable. Then his narration moves immediately to cataloguing Robert's appearance in careful, almost hostile detail. The physical inventory is itself an action — the narrator studying, measuring, refusing to feel. The body's retreat into observation is the scene's emotional argument.`
      }
    },
    {
      id: "d5",
      title: "Silence and the Unfinished Line",
      subtitle: "What dialogue refuses to complete",
      body: `The most powerful moment in a dialogue scene is often the moment the dialogue stops — or the moment a sentence begins and doesn't finish. Silence in fiction is not the absence of writing; it is a presence. The reader fills it. What the reader fills it with is determined entirely by what came immediately before.

The unfinished line — the sentence that trails into a dash or an ellipsis, the question that is asked and not answered, the response that addresses something other than what was asked — creates pressure by refusing release. The reader leans forward. The character has approached something and turned away, or has been interrupted by the event or object or silence that the writer places in the gap.

Dialogue that always finishes its sentences, always answers its questions, always completes its exchanges is dialogue that has been tidied into false coherence. Real conversation breaks off. People talk past each other. Questions go unanswered not because of rudeness but because the person asked cannot find, or will not find, or does not have the language for, the answer.

The formal technique: after a line of dialogue that approaches something true, put silence. Not explanation. Not another line that explains the silence. Just the gap — rendered in physical action, in description, in the next scene beginning — and let the reader hear it.`,
      principle: "Silence after dialogue is not absence — it is presence. Place it after the line that approaches the truth, and let the reader fill it.",
      example: {
        source: "Chekhov, 'The Lady with the Dog'",
        text: `One evening he was coming out of the doctors' club with an official with whom he had been playing cards, he could not resist saying: "If only you knew what a fascinating woman I made the acquaintance of in Yalta!" The official got into his sledge and was driving away, but turned suddenly and shouted: "Dmitri Dmitritch!" "What?" "You were right this evening: the sturgeon was a bit too strong!"`,
        analysis: `Gurov makes the only attempt in the story to speak his love to another person. He is answered with a comment about fish. But notice what Chekhov does with the structure: Gurov's opening — "If only you knew" — is itself an incomplete line. It is not a confession; it is the approach to a confession, the sentence before the sentence that would matter. And then the official drives away, and turns back, and the response is about sturgeon. The silence between what Gurov wanted to say and what was heard is the entirety of his isolation. Chekhov doesn't fill it. He just shows us what it sounds like when no one is listening.`
      }
    }
  ]
};

// ─── STEP-BY-STEP PARAGRAPH EXERCISE ─────────────────────────────────────────

const PARA_STEPS = [
  {
    id: "step1",
    title: "Find the Movement",
    instruction: "Write the opening sentence of your paragraph and the closing sentence. Where does it begin? Where does it need to arrive? Don't fill in the middle yet. Just establish the two poles.",
    prompt: "Write your opening sentence and your closing sentence. Nothing in between.",
    hint: "The opening makes a promise. The closing fulfils or complicates it. If both sentences say the same thing, you haven't found the movement yet."
  },
  {
    id: "step2",
    title: "Add the Particulars",
    instruction: "Now fill in the middle — but only with concrete, specific details. No emotions named. No abstract observations. Only what can be seen, heard, touched, or physically registered. Objects, gestures, sounds, the arrangement of bodies in a room.",
    prompt: "Write the full paragraph now. Concrete details only in the middle. No named feelings.",
    hint: "If you find yourself writing 'she felt' or 'he realised' — stop. Find the physical equivalent. What does she do? What does he notice? What is in the room?"
  },
  {
    id: "step3",
    title: "Read It Aloud — Rhythm",
    instruction: "Read the paragraph aloud. Mark any place where you ran out of breath, where it felt mechanical, where it sped up when it should have slowed. Now vary two sentences: make one longer and one shorter.",
    prompt: "Rewrite the paragraph with at least one deliberately long sentence and one deliberately short one.",
    hint: "Short sentences create weight and finality. Long sentences create immersion. Where does your paragraph need to accelerate? Where does it need to land?"
  },
  {
    id: "step4",
    title: "Cut What Explains",
    instruction: "Read through and find anything that names an emotion directly, or explains what a detail means, or summarises what the paragraph has already shown. Cut it. If cutting it makes the paragraph feel incomplete, add a detail — not an explanation.",
    prompt: "Paste the revised paragraph with all explanation removed.",
    hint: "The reader should feel the emotion without being told what it is. If you've cut too much and the paragraph feels empty, you need more concrete detail — not more explanation."
  },
  {
    id: "step5",
    title: "The Final Check",
    instruction: "Read the paragraph one more time. Ask three questions: (1) Does it arrive somewhere different from where it began? (2) Is the emotion implied rather than stated? (3) Could any sentence be cut without losing something real? If yes, yes, no — the paragraph is working.",
    prompt: "Write your final version. Then note: what did you learn from this paragraph that you will carry into the next one?",
    hint: "Good paragraphs teach you something about your own prose. What habit were you most tempted to fall back on? What did you resist?"
  }
];

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const THEORY_CARDS = [
  { id: "t1", category: "Act Structure", front: "What does Act 1 establish in literary fiction?", back: "The character's ordinary emotional world, the central lack/desire, the governing tension, the emotional atmosphere, and what will eventually have to change. The protagonist usually has avoidance patterns, contradictions, and blind spots." },
  { id: "t2", category: "Act Structure", front: "What is the Act 1 turning point?", back: "The moment the protagonist can no longer remain psychologically or situationally static. The central tension becomes unavoidable — could be beginning an affair, returning home, receiving news, or simply failing to leave." },
  { id: "t3", category: "Act Structure", front: "What are the three deepening layers of Act 2?", back: "External (consequences, entanglement), Internal (emotional pressure), and Thematic (clarity about what the story is 'really about'). All three deepen simultaneously." },
  { id: "t4", category: "Act Structure", front: "What happens at the midpoint of literary fiction?", back: "The character gains partial awareness — not full understanding, but they begin seeing what they want, what they fear, or what the real conflict is. Or they commit more deeply to denial. The midpoint often changes the meaning of the story." },
  { id: "t5", category: "Act Structure", front: "How does Act 2 typically end?", back: "The character's existing way of operating collapses. Their emotional strategy stops working. Illusions fail, relationships fracture, avoidance becomes impossible." },
  { id: "t6", category: "Act Structure", front: "What is Act 3 really asking?", back: "Has the character changed? Or were they incapable of changing? The protagonist is forced into truth, choice, self-recognition, surrender, transformation, or tragedy." },
  { id: "t7", category: "Diagnostic", front: "What is the dominant question for each act?", back: "Act 1: 'What's wrong?' — Act 2: 'What now?' — Act 3: 'What must be faced?'" },
  { id: "t8", category: "Diagnostic", front: "What is the character state in each act?", back: "Act 1: Unaware / Avoiding — Act 2: Struggling / Repeating — Act 3: Confronting / Transforming" },
  { id: "t9", category: "Core Principle", front: "What is the key difference between commercial and literary fiction structure?", back: "Commercial fiction structures around plot events. Literary fiction structures around psychological or relational change. Both still move through stability → disruption → escalation → crisis → transformation." },
  { id: "t10", category: "Core Principle", front: "What is the most useful question to mark act transitions?", back: "Not 'What act am I in?' but: 'What has fundamentally changed in the character's relationship to the central tension?'" },
  { id: "t11", category: "Core Principle", front: "What is the 'identity pressure' lens for story structure?", back: "Every story is about pressure applied to identity: (1) character begins with a stable self-concept, (2) story destabilises it, (3) pressure exposes contradictions, (4) ending resolves or destroys that identity." },
  { id: "t12", category: "Paragraph Craft", front: "What makes a paragraph earn its place in a scene?", back: "A paragraph earns its place by doing at least two of: advancing action, deepening character, shifting atmosphere, or landing a new piece of information. A paragraph that only describes setting without charge is dead weight." },
  { id: "t13", category: "Paragraph Craft", front: "How should a paragraph change from its first sentence to its last?", back: "The paragraph should arrive somewhere different from where it began. Even in description, there is movement — in understanding, in emotional register, or in what the reader now knows." },
  { id: "t14", category: "Paragraph Craft", front: "What is paragraph rhythm in a scene?", back: "The alternation of long and short paragraphs creates pace. Short paragraphs accelerate and isolate. Long paragraphs immerse. A scene with no variation is monotonous regardless of content." },
  { id: "t15", category: "Scene Structure", front: "What is the difference between a scene and a passage?", back: "A scene has an engine — a want, an obstacle, a change in state. A passage is observation without pressure. Literary fiction needs both, but scenes carry the story. A passage earns its place by charging what surrounds it." },
  { id: "t16", category: "Scene Structure", front: "What must change by the end of a scene?", back: "Something must shift: the power between characters, a character's understanding, the emotional weather, or what the reader knows. A scene that ends in the same state it began is a missed opportunity." },
  { id: "t17", category: "Sentence Craft", front: "What makes a sentence in literary fiction 'earn' its length?", back: "A long sentence earns its length through rhythm, accumulation of precise detail, or mimicking the way thought/emotion actually moves. It should never be long because the writer was unsure where to stop." },
  { id: "t18", category: "Sentence Craft", front: "What is Chekhov's principle about detail?", back: "Every detail must do more than one job — it must simultaneously show character, advance atmosphere, and carry thematic weight. If a gun appears in Act 1, it must fire. Cut anything that only does one job." },
];

const SEED_PROMPTS = [
  { id: "w1", level: "Paragraph", focus: "subtext", title: "The Avoidance", instruction: "Write a paragraph (4–6 sentences) in which two characters talk about something completely unimportant while the real subject hangs unspoken between them. We should feel the real subject without it being named.", criteria: ["Is the real subject invisible but felt?", "Does the dialogue/action feel natural?", "Is there pressure building underneath?"] },
  { id: "w2", level: "Paragraph", focus: "rhythm", title: "Arrival Scene", instruction: "Write a short paragraph (3–5 sentences) of a character arriving somewhere they've been before. The place should feel different now — but never tell us why. Use only what they notice.", criteria: ["Does the place feel charged without explanation?", "Does each sentence move the paragraph somewhere?", "Are there any adjectives doing work that concrete nouns should do?"] },
  { id: "w3", level: "Paragraph", focus: "interiority", title: "The Half-Thought", instruction: "Write a paragraph in which a character almost understands something about themselves — but the thought slips away or gets redirected. Show the approach and the retreat without naming either.", criteria: ["Does the character get close to insight?", "Is the pullback believable?", "Do we understand more than the character does?"] },
  { id: "w4", level: "Paragraph", focus: "detail", title: "The Weight of an Object", instruction: "Write a paragraph built around a single ordinary object. The object must carry the scene's emotional weight. Do not name the emotion — let the object do the work.", criteria: ["Does the object carry the emotion?", "Is the emotion implied rather than stated?", "Could any word be cut?"] },
  { id: "w5", level: "Scene", focus: "subtext", title: "The Act 1 Opening", instruction: "Write an opening scene (80–120 words). Establish the character's ordinary world AND plant the first hint of what will destabilise it — without announcing either.", criteria: ["Do we feel the ordinary world?", "Is there a hint of tension or lack?", "Does the character's emotional position emerge?", "Is there forward pull?"] },
  { id: "w6", level: "Scene", focus: "rhythm", title: "The Compressed History", instruction: "Write a short scene (100–150 words) that implies a long history between two people without stating it. Give us the relationship's whole arc through what's not said and what's done habitually.", criteria: ["Does the relationship history feel implied, not explained?", "Is there tension under the surface?", "Does each paragraph move?"] },
];

const GROQ_MODELS = [
  { id: "llama-3.3-70b-versatile", label: "Llama 3.3 70B (best quality)" },
  { id: "llama-3.1-8b-instant", label: "Llama 3.1 8B (fastest)" },
  { id: "qwen-qwq-32b", label: "Qwen QwQ 32B (strong reasoning)" },
];

const FOCUS_OPTIONS = ["random", "rhythm", "subtext", "interiority", "detail", "based on history"];

const GENERATE_EXERCISE_SYSTEM = `You are a literary fiction writing teacher in the tradition of Chekhov and Carver. Generate a single paragraph-level writing exercise.

Respond ONLY with a JSON object, no markdown, no preamble:
{
  "title": "short evocative title",
  "level": "Paragraph" or "Scene",
  "focus": one of: "rhythm", "subtext", "interiority", "detail",
  "instruction": "precise 2-3 sentence instruction for what to write",
  "criteria": ["3-4 short evaluation criteria as questions"]
}

The exercise must target paragraph structure. Make the constraint specific and craft-focused.`;

const FEEDBACK_SYSTEM = `You are a literary fiction editor. Your feedback is objective, precise, and unsentimental.

Score the submission out of 100 with a breakdown across four dimensions (25 points each):
- IMPLICATION (25): emotion shown vs stated; subtext vs explanation
- MOVEMENT (25): does the paragraph/scene arrive somewhere different from where it started?
- DETAIL (25): specificity, necessity, multi-functionality of each detail
- RHYTHM (25): sentence variation, cadence, control of pace

Respond ONLY with a JSON object, no markdown:
{
  "total": <number 0-100>,
  "scores": { "implication": <0-25>, "movement": <0-25>, "detail": <0-25>, "rhythm": <0-25> },
  "working": "1-2 specific things that work, quoted from the text",
  "central_issue": "one core craft problem, named precisely",
  "rewrite": "rewrite the weakest sentence to demonstrate the fix",
  "question": "one diagnostic question for the writer"
}

Be direct. Quote from the text. Total under 300 words across all fields.`;

const SCENE_ANALYSIS_SYSTEM = `You are a literary fiction editor specialising in paragraph and scene structure.

Respond ONLY with a JSON object, no markdown:
{
  "paragraphs": [
    {
      "index": 1,
      "text": "first ~15 words of paragraph...",
      "function": "what this paragraph does structurally (one phrase)",
      "strength": "what works",
      "weakness": "what doesn't, or null if strong",
      "movement": "where does it begin vs end emotionally/informationally?"
    }
  ],
  "scene": {
    "total": <0-100>,
    "scores": { "implication": <0-25>, "movement": <0-25>, "detail": <0-25>, "rhythm": <0-25> },
    "engine": "what is driving this scene (want/obstacle/change)?",
    "what_changes": "what has shifted by the end, or 'nothing — this is a passage not a scene'",
    "central_issue": "the single most important structural problem",
    "next_paragraph": "a specific suggestion for what the next paragraph should do"
  }
}`;

const ANALYSIS_SYSTEM = `You are a literary fiction editor. Score out of 100 (25 pts each: implication, movement, detail, rhythm).

Respond ONLY with JSON, no markdown:
{
  "total": <0-100>,
  "scores": { "implication": <0-25>, "movement": <0-25>, "detail": <0-25>, "rhythm": <0-25> },
  "rhythm": "analysis",
  "implication": "analysis",
  "detail": "analysis",
  "movement": "analysis"
}`;

const STEP_FEEDBACK_SYSTEM = `You are a literary fiction editor giving feedback on a single step in a paragraph-building exercise. Be specific, brief, and focused only on the step's goal. Quote from their text. Under 150 words.

Respond ONLY with JSON:
{
  "score": <0-10>,
  "working": "what is working in relation to this step's goal",
  "issue": "the one thing to fix or notice",
  "next": "one concrete suggestion to carry into the next step"
}`;

// ─── API ──────────────────────────────────────────────────────────────────────

async function callGroq(apiKey, model, systemPrompt, userMessage) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
    body: JSON.stringify({
      model, max_tokens: 1200,
      messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userMessage }],
    }),
  });
  if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err?.error?.message || `Groq error ${res.status}`); }
  return (await res.json()).choices?.[0]?.message?.content || "";
}

function parseJSON(raw) { return JSON.parse(raw.replace(/```json|```/g, "").trim()); }

// ─── UI HELPERS ───────────────────────────────────────────────────────────────

const btn = (active) => ({
  background: active ? "rgba(212,183,120,0.12)" : "none",
  border: `1px solid ${active ? "rgba(212,183,120,0.3)" : "transparent"}`,
  color: active ? G : DIM, padding: "6px 16px", borderRadius: 2, cursor: "pointer",
  fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", transition: "all 0.2s",
});

function ScoreBar({ label, score, max = 25 }) {
  const pct = Math.round((score / max) * 100);
  const color = pct >= 80 ? "#4ade80" : pct >= 55 ? G : "#f87171";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
      <div style={{ width: 100, fontSize: 11, letterSpacing: 1, color: DIM, textTransform: "uppercase", flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, height: 4, background: "#1a1810", borderRadius: 2 }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 2, transition: "width 0.8s ease" }} />
      </div>
      <div style={{ width: 36, textAlign: "right", fontSize: 12, color, fontFamily: "'Raleway', sans-serif" }}>{score}/{max}</div>
    </div>
  );
}

function ScoreCard({ scores, total }) {
  const color = total >= 80 ? "#4ade80" : total >= 55 ? G : "#f87171";
  return (
    <div style={{ background: "rgba(0,0,0,0.4)", border: `1px solid ${BORDER}`, borderRadius: 3, padding: "20px 24px", marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 40, color, lineHeight: 1 }}>{total}</div>
        <div style={{ fontSize: 14, color: DIM }}>/100</div>
      </div>
      <ScoreBar label="Implication" score={scores.implication} />
      <ScoreBar label="Movement" score={scores.movement} />
      <ScoreBar label="Detail" score={scores.detail} />
      <ScoreBar label="Rhythm" score={scores.rhythm} />
    </div>
  );
}

function FeedbackBlock({ data }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ScoreCard scores={data.scores} total={data.total} />
      {[["What's Working", data.working], ["Central Issue", data.central_issue], ["Rewrite", data.rewrite], ["Question to Sit With", data.question]].map(([label, content]) => content && (
        <div key={label} style={{ borderLeft: `2px solid ${label === "Central Issue" ? "#f87171" : label === "What's Working" ? "#4ade80" : G}`, paddingLeft: 16 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.8, color: "#b0a898" }}>{content}</div>
        </div>
      ))}
    </div>
  );
}

// ─── LESSON READER ────────────────────────────────────────────────────────────

const LESSON_TRACKS = [
  { id: "paragraph", label: "Paragraph", icon: "¶" },
  { id: "sentence", label: "Sentence", icon: "—" },
  { id: "scene", label: "Scene", icon: "◎" },
  { id: "story", label: "Story", icon: "∞" },
];

function LessonReader({ onXp }) {
  const [track, setTrack] = useState("paragraph");
  const [lessonIdx, setLessonIdx] = useState(0);
  const [showExample, setShowExample] = useState(false);

  const lessons = LESSONS[track];
  const lesson = lessons[lessonIdx];

  const handleTrack = (t) => { setTrack(t); setLessonIdx(0); setShowExample(false); };
  const handleNext = () => { if (lessonIdx < lessons.length - 1) { setLessonIdx(i => i + 1); setShowExample(false); onXp(8, null); } };
  const handlePrev = () => { if (lessonIdx > 0) { setLessonIdx(i => i - 1); setShowExample(false); } };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 2, borderBottom: `1px solid ${BORDER}` }}>
        {LESSON_TRACKS.map(t => (
          <button key={t.id} onClick={() => handleTrack(t.id)}
            style={{ background: "none", border: "none", borderBottom: `2px solid ${track === t.id ? G : "transparent"}`, color: track === t.id ? G : DIM, padding: "8px 14px", cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: -1, display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ opacity: 0.6 }}>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {lessons.map((_, i) => (
          <div key={i} onClick={() => { setLessonIdx(i); setShowExample(false); }}
            style={{ width: i === lessonIdx ? 20 : 6, height: 6, borderRadius: 3, background: i === lessonIdx ? G : i < lessonIdx ? "#3a3020" : "#1a1810", cursor: "pointer", transition: "all 0.3s" }} />
        ))}
        <span style={{ marginLeft: 8, fontSize: 10, color: "#4a4438", letterSpacing: 1 }}>{lessonIdx + 1} / {lessons.length}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 6 }}>{LESSON_TRACKS.find(t => t.id === track)?.label} · Lesson {lessonIdx + 1}</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8", lineHeight: 1.3, marginBottom: 4 }}>{lesson.title}</div>
          <div style={{ fontSize: 13, color: DIM }}>{lesson.subtitle}</div>
        </div>

        <div style={{ fontSize: 15, fontFamily: "'Lora', serif", lineHeight: 1.85, color: MID, whiteSpace: "pre-line" }}>{lesson.body}</div>

        <div style={{ background: "rgba(212,183,120,0.06)", border: `1px solid rgba(212,183,120,0.2)`, borderLeft: `3px solid ${G}`, borderRadius: "0 3px 3px 0", padding: "16px 20px" }}>
          <div style={{ fontSize: 9, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 8 }}>Core Principle</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.7, color: "#e0d4b0", fontStyle: "italic" }}>{lesson.principle}</div>
        </div>

        <div>
          <button onClick={() => setShowExample(e => !e)}
            style={{ background: showExample ? "rgba(212,183,120,0.08)" : "none", border: `1px solid ${showExample ? "rgba(212,183,120,0.25)" : BORDER}`, color: showExample ? G : DIM, padding: "10px 20px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", width: "100%", textAlign: "left" }}>
            {showExample ? "▲ Hide Example" : `▼ See It In Practice — ${lesson.example.source}`}
          </button>
          {showExample && (
            <div style={{ borderLeft: `2px solid ${BORDER}`, marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase" }}>{lesson.example.source}</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 15, lineHeight: 1.9, color: "#c8c0a8", fontStyle: "italic", background: "rgba(0,0,0,0.25)", padding: "18px 20px", borderRadius: 3 }}>{lesson.example.text}</div>
              <div style={{ borderLeft: `2px solid rgba(212,183,120,0.3)`, paddingLeft: 16 }}>
                <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Analysis</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.8, color: "#9a9080" }}>{lesson.example.analysis}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 8, borderTop: `1px solid ${BORDER}` }}>
        <button onClick={handlePrev} disabled={lessonIdx === 0}
          style={{ background: "none", border: `1px solid ${lessonIdx === 0 ? "transparent" : BORDER}`, color: lessonIdx === 0 ? "#2a2520" : DIM, padding: "8px 20px", borderRadius: 2, cursor: lessonIdx === 0 ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
          ← Prev
        </button>
        <button onClick={handleNext} disabled={lessonIdx === lessons.length - 1}
          style={{ background: lessonIdx < lessons.length - 1 ? "#3a2e18" : "none", border: `1px solid ${lessonIdx < lessons.length - 1 ? "rgba(212,183,120,0.3)" : "transparent"}`, color: lessonIdx < lessons.length - 1 ? G : "#2a2520", padding: "8px 20px", borderRadius: 2, cursor: lessonIdx < lessons.length - 1 ? "pointer" : "not-allowed", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
          Next →
        </button>
      </div>
    </div>
  );
}

// ─── STEP PARAGRAPH EXERCISE ──────────────────────────────────────────────────

function StepParaExercise({ apiKey, model, onXp }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [drafts, setDrafts] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const step = PARA_STEPS[stepIdx];
  const draft = drafts[step.id] || "";
  const feedback = feedbacks[step.id];
  const setDraft = (val) => setDrafts(d => ({ ...d, [step.id]: val }));

  const getFeedback = async () => {
    if (!draft.trim() || draft.trim().length < 10) return;
    if (!apiKey) { setError("Add your Groq API key in Settings first."); return; }
    setLoading(true); setError(null);
    try {
      const raw = await callGroq(apiKey, model, STEP_FEEDBACK_SYSTEM, `Step: "${step.title}"\nGoal: ${step.instruction}\n\nSubmission:\n\n${draft}`);
      const data = parseJSON(raw);
      setFeedbacks(f => ({ ...f, [step.id]: data }));
      onXp(data.score ? data.score * 2 : 10, null);
    } catch (e) { setError(e.message || "Feedback failed."); }
    setLoading(false);
  };

  const wc = draft.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ fontSize: 14, color: DIM, lineHeight: 1.7 }}>
        Build a paragraph one element at a time. Work through all five steps with the same paragraph — each step focuses on a single craft principle.
      </div>

      <div style={{ display: "flex", gap: 0 }}>
        {PARA_STEPS.map((s, i) => (
          <div key={s.id} onClick={() => setStepIdx(i)}
            style={{ flex: 1, padding: "8px 0", textAlign: "center", cursor: "pointer", borderBottom: `2px solid ${i === stepIdx ? G : feedbacks[s.id] ? "#3a3020" : "#1a1810"}`, transition: "border-color 0.2s" }}>
            <div style={{ fontSize: 10, color: i === stepIdx ? G : feedbacks[s.id] ? "#6a5a30" : "#2a2520", letterSpacing: 1 }}>{i + 1}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "rgba(0,0,0,0.3)", border: `1px solid ${BORDER}`, borderRadius: 3, padding: "20px" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 8 }}>Step {stepIdx + 1} of {PARA_STEPS.length}</div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 18, color: "#e0d8c8", marginBottom: 12 }}>{step.title}</div>
        <div style={{ fontSize: 14, color: MID, lineHeight: 1.75, marginBottom: 16 }}>{step.instruction}</div>
        <div style={{ background: "rgba(212,183,120,0.05)", border: "1px solid rgba(212,183,120,0.15)", borderRadius: 3, padding: "12px 16px", fontSize: 12, color: "#7a6a48", fontStyle: "italic", lineHeight: 1.6 }}>{step.hint}</div>
      </div>

      {stepIdx > 0 && drafts[PARA_STEPS[stepIdx - 1].id] && (
        <div style={{ borderLeft: `2px solid #2a2520`, paddingLeft: 16 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#3a3028", textTransform: "uppercase", marginBottom: 6 }}>Your previous draft</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: "#4a4438", lineHeight: 1.7, fontStyle: "italic" }}>{drafts[PARA_STEPS[stepIdx - 1].id]}</div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase" }}>{step.prompt}</div>
        <textarea value={draft} onChange={e => setDraft(e.target.value)} rows={6}
          style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 3, color: "#e0d8cc", fontFamily: "'Lora', serif", fontSize: 16, lineHeight: 1.8, padding: "16px", resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
          <button onClick={getFeedback} disabled={loading || draft.trim().length < 10}
            style={{ background: loading ? "#2a2520" : "#3a2e18", color: loading ? "#4a4438" : G, border: `1px solid rgba(212,183,120,${loading ? 0.1 : 0.3})`, padding: "10px 24px", borderRadius: 2, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
            {loading ? "Reading…" : "Get Feedback"}
          </button>
          {feedback && stepIdx < PARA_STEPS.length - 1 && (
            <button onClick={() => setStepIdx(i => i + 1)}
              style={{ background: "rgba(212,183,120,0.08)", color: G, border: `1px solid rgba(212,183,120,0.2)`, padding: "10px 20px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
              Next Step →
            </button>
          )}
          <span style={{ marginLeft: "auto", fontSize: 11, color: "#4a4438" }}>{wc} words</span>
        </div>
      </div>

      {error && <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 3, padding: "14px 18px", fontSize: 13, color: "#f87171" }}>{error}</div>}

      {feedback && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 28, color: feedback.score >= 8 ? "#4ade80" : feedback.score >= 5 ? G : "#f87171" }}>{feedback.score}</div>
            <div style={{ fontSize: 11, color: DIM }}>/10 for this step</div>
          </div>
          {[["Working", feedback.working, "#4ade80"], ["Issue", feedback.issue, "#f87171"], ["Carry forward", feedback.next, G]].map(([label, content, color]) => content && (
            <div key={label} style={{ borderLeft: `2px solid ${color}`, paddingLeft: 16 }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.7, color: "#b0a898" }}>{content}</div>
            </div>
          ))}
        </div>
      )}

      {stepIdx === PARA_STEPS.length - 1 && feedback && (
        <div style={{ background: "rgba(212,183,120,0.06)", border: `1px solid rgba(212,183,120,0.2)`, borderRadius: 3, padding: "20px", textAlign: "center" }}>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 16, color: G, marginBottom: 8 }}>Paragraph complete.</div>
          <div style={{ fontSize: 13, color: DIM, lineHeight: 1.7 }}>You've worked through all five elements. Start again with a new paragraph.</div>
          <button onClick={() => { setStepIdx(0); setDrafts({}); setFeedbacks({}); }}
            style={{ marginTop: 16, background: "none", border: `1px solid ${BORDER}`, color: DIM, padding: "8px 20px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
            Start New Paragraph
          </button>
        </div>
      )}
    </div>
  );
}

// ─── SETTINGS ────────────────────────────────────────────────────────────────

function Settings({ apiKey, setApiKey, model, setModel, onDone }) {
  const [draft, setDraft] = useState(apiKey);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div>
        <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Setup</div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8", marginBottom: 12 }}>Connect Groq</div>
        <div style={{ fontSize: 14, color: DIM, lineHeight: 1.75 }}>Free API key at <a href="https://console.groq.com" style={{ color: G }}>console.groq.com</a> — no credit card needed.</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={{ fontSize: 11, letterSpacing: 2, color: DIM, textTransform: "uppercase" }}>Groq API Key</label>
        <input type="password" value={draft} onChange={e => setDraft(e.target.value)} placeholder="gsk_..."
          style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 3, color: "#e0d8cc", fontFamily: "'Lora', serif", fontSize: 16, padding: "12px 16px", outline: "none", width: "100%", boxSizing: "border-box" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={{ fontSize: 11, letterSpacing: 2, color: DIM, textTransform: "uppercase" }}>Model</label>
        <select value={model} onChange={e => setModel(e.target.value)}
          style={{ background: "#1a1510", border: `1px solid ${BORDER}`, borderRadius: 3, color: MID, fontFamily: "'Lora', serif", fontSize: 16, padding: "12px 16px", outline: "none", width: "100%" }}>
          {GROQ_MODELS.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
        </select>
      </div>
      <button onClick={() => { setApiKey(draft); onDone(); }} disabled={!draft.trim()}
        style={{ background: draft.trim() ? "#3a2e18" : "#1a1510", color: draft.trim() ? G : "#3a3028", border: `1px solid ${draft.trim() ? "rgba(212,183,120,0.3)" : "transparent"}`, padding: "12px 28px", borderRadius: 2, cursor: draft.trim() ? "pointer" : "not-allowed", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", alignSelf: "flex-start" }}>
        Save & Start →
      </button>
    </div>
  );
}

function FlashCard({ card, onResult, onSkip }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <div onClick={() => setFlipped(f => !f)}
        style={{ width: "100%", minHeight: 200, background: flipped ? "rgba(212,183,120,0.10)" : "rgba(255,255,255,0.04)", border: `1px solid ${flipped ? "rgba(212,183,120,0.4)" : BORDER}`, borderRadius: 4, padding: "36px 32px", cursor: "pointer", transition: "all 0.3s ease", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 16 }}>{card.category} — {flipped ? "Answer" : "Question"}</div>
        <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 17, lineHeight: 1.7, color: flipped ? "#f0ead8" : MID }}>{flipped ? card.back : card.front}</div>
        {!flipped && <div style={{ marginTop: 20, fontSize: 11, color: "#6a6355", letterSpacing: 1 }}>CLICK TO REVEAL</div>}
      </div>
      {flipped && (
        <div style={{ display: "flex", gap: 12 }}>
          {[["Got it ✓", "#2a6b3a", "#4ade80"], ["Almost", "#4a4020", G], ["Again ✗", "#5a2020", "#f87171"]].map(([label, bg, color]) => (
            <button key={label} onClick={() => onResult(label)}
              style={{ background: bg, color, border: `1px solid ${color}40`, padding: "8px 20px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase" }}>{label}</button>
          ))}
        </div>
      )}
      <button onClick={onSkip} style={{ background: "none", border: "none", color: "#4a4438", cursor: "pointer", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>Skip →</button>
    </div>
  );
}

function Exercise({ prompt, apiKey, model, onXp, history, onAddToScene }) {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = async () => {
    if (!text.trim() || text.trim().length < 20) return;
    if (!apiKey) { setError("Add your Groq API key in Settings first."); return; }
    setLoading(true); setError(null); setFeedback(null);
    try {
      const historyCtx = history.length > 0 ? `\n\nWriter's recent struggle areas: ${history.slice(-3).map(h => h.central_issue).filter(Boolean).join("; ")}` : "";
      const raw = await callGroq(apiKey, model, FEEDBACK_SYSTEM, `Exercise: "${prompt.title}"\nInstruction: ${prompt.instruction}\nCriteria: ${prompt.criteria.join("; ")}${historyCtx}\n\nSubmission:\n\n${text}`);
      const data = parseJSON(raw);
      setFeedback(data);
      onXp(data.total ? Math.round(data.total / 2) : 10, data);
    } catch (e) { setError(e.message || "Something went wrong."); }
    setLoading(false);
  };

  const wc = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ borderLeft: `2px solid ${G}`, paddingLeft: 20 }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 6 }}>{prompt.level} · {prompt.focus}</div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 16, lineHeight: 1.75, color: MID }}>{prompt.instruction}</div>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {prompt.criteria.map(c => <span key={c} style={{ fontSize: 10, color: "#6a6050", border: "1px solid #2a2520", padding: "3px 10px", borderRadius: 20 }}>{c}</span>)}
      </div>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Write here…" rows={7}
        style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 3, color: "#e0d8cc", fontFamily: "'Lora', serif", fontSize: 16, lineHeight: 1.8, padding: "16px", resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <button onClick={submit} disabled={loading || text.trim().length < 20}
          style={{ background: loading ? "#2a2520" : "#3a2e18", color: loading ? "#4a4438" : G, border: `1px solid rgba(212,183,120,${loading ? 0.1 : 0.3})`, padding: "10px 24px", borderRadius: 2, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
          {loading ? "Reading…" : "Get Feedback"}
        </button>
        {feedback && onAddToScene && (
          <button onClick={() => onAddToScene(text)}
            style={{ background: "rgba(212,183,120,0.06)", color: G, border: `1px solid rgba(212,183,120,0.2)`, padding: "10px 20px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
            + Add to Scene
          </button>
        )}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#4a4438" }}>{wc} words</span>
      </div>
      {error && <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 3, padding: "14px 18px", fontSize: 13, color: "#f87171", lineHeight: 1.6 }}>{error}</div>}
      {feedback && (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 12 }}>Editor's Notes</div>
          <FeedbackBlock data={feedback} />
        </div>
      )}
    </div>
  );
}

function GenerateExercise({ apiKey, model, history, onXp, onAddToScene }) {
  const [focus, setFocus] = useState("random");
  const [generated, setGenerated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = async () => {
    if (!apiKey) { setError("Add your Groq API key in Settings first."); return; }
    setLoading(true); setError(null); setGenerated(null);
    try {
      const historyCtx = history.length > 0 && focus === "based on history"
        ? `The writer has struggled with: ${history.slice(-5).map(h => h.central_issue).filter(Boolean).join("; ")}. Target their weakest area.`
        : focus === "random" ? "Choose any focus — rhythm, subtext, interiority, or detail." : `Focus specifically on: ${focus}.`;
      const raw = await callGroq(apiKey, model, GENERATE_EXERCISE_SYSTEM, historyCtx);
      const data = parseJSON(raw);
      setGenerated({ ...data, id: `gen-${Date.now()}` });
    } catch (e) { setError(e.message || "Generation failed."); }
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: DIM, textTransform: "uppercase" }}>Generate Exercise</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {FOCUS_OPTIONS.map(f => (
            <button key={f} onClick={() => setFocus(f)}
              style={{ background: focus === f ? "rgba(212,183,120,0.12)" : "none", border: `1px solid ${focus === f ? "rgba(212,183,120,0.3)" : BORDER}`, color: focus === f ? G : DIM, padding: "6px 14px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase" }}>
              {f}
            </button>
          ))}
        </div>
        <button onClick={generate} disabled={loading}
          style={{ background: loading ? "#1a1510" : "#3a2e18", color: loading ? DIM : G, border: `1px solid rgba(212,183,120,${loading ? 0.1 : 0.3})`, padding: "10px 24px", borderRadius: 2, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", alignSelf: "flex-start" }}>
          {loading ? "Generating…" : "Generate →"}
        </button>
      </div>
      {error && <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 3, padding: "14px 18px", fontSize: 13, color: "#f87171" }}>{error}</div>}
      {generated && (
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24 }}>
          <Exercise key={generated.id} prompt={generated} apiKey={apiKey} model={model} onXp={onXp} history={history} onAddToScene={onAddToScene} />
        </div>
      )}
    </div>
  );
}

function SceneBuilder({ apiKey, model, onXp, sceneBuffer, setSceneBuffer }) {
  const [text, setText] = useState(sceneBuffer || "");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyse = async () => {
    if (!text.trim() || text.trim().length < 40) return;
    if (!apiKey) { setError("Add your Groq API key in Settings first."); return; }
    setLoading(true); setError(null); setAnalysis(null);
    try {
      const raw = await callGroq(apiKey, model, SCENE_ANALYSIS_SYSTEM, `Analyse this scene:\n\n${text}`);
      const data = parseJSON(raw);
      setAnalysis(data);
      onXp(data.scene?.total ? Math.round(data.scene.total / 2) : 10, data.scene);
    } catch (e) { setError(e.message || "Analysis failed."); }
    setLoading(false);
  };

  const wc = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ fontSize: 14, color: DIM, lineHeight: 1.7 }}>Write or paste your scene. The AI breaks it into paragraphs, analyses each one's structural function, and scores the whole.{sceneBuffer && <span style={{ color: G }}> Exercise paragraphs have been added.</span>}</div>
      <textarea value={text} onChange={e => { setText(e.target.value); setSceneBuffer(e.target.value); }} placeholder="Write or paste your scene here…" rows={12}
        style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 3, color: "#e0d8cc", fontFamily: "'Lora', serif", fontSize: 16, lineHeight: 1.85, padding: "16px", resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={analyse} disabled={loading || text.trim().length < 40}
          style={{ background: loading ? "#2a2520" : "#3a2e18", color: loading ? "#4a4438" : G, border: `1px solid rgba(212,183,120,${loading ? 0.1 : 0.3})`, padding: "10px 24px", borderRadius: 2, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
          {loading ? "Analysing…" : "Analyse Scene"}
        </button>
        {text && <button onClick={() => { setText(""); setSceneBuffer(""); setAnalysis(null); }} style={{ background: "none", border: `1px solid #2a2520`, color: DIM, padding: "10px 16px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>Clear</button>}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#4a4438" }}>{wc} words</span>
      </div>
      {error && <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 3, padding: "14px 18px", fontSize: 13, color: "#f87171" }}>{error}</div>}
      {analysis && (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 16 }}>Paragraph Breakdown</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {analysis.paragraphs?.map((p, i) => (
                <div key={i} style={{ background: "rgba(0,0,0,0.25)", border: `1px solid ${p.weakness ? "rgba(248,113,113,0.15)" : "rgba(74,222,128,0.1)"}`, borderRadius: 3, padding: "16px 20px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                    <div style={{ fontSize: 10, color: G, letterSpacing: 2, textTransform: "uppercase" }}>¶{p.index}</div>
                    <div style={{ fontSize: 11, color: DIM, fontStyle: "italic" }}>{p.function}</div>
                  </div>
                  <div style={{ fontSize: 13, color: "#7a7060", fontStyle: "italic", marginBottom: 10 }}>"{p.text}…"</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ fontSize: 13, color: "#4ade80", lineHeight: 1.6 }}>↑ {p.strength}</div>
                    {p.weakness && <div style={{ fontSize: 13, color: "#f87171", lineHeight: 1.6 }}>↓ {p.weakness}</div>}
                    <div style={{ fontSize: 12, color: DIM, lineHeight: 1.6, borderTop: `1px solid ${BORDER}`, paddingTop: 6, marginTop: 2 }}>Movement: {p.movement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 16 }}>Scene Assessment</div>
            <ScoreCard scores={analysis.scene.scores} total={analysis.scene.total} />
            {[["Engine", analysis.scene.engine], ["What Changes", analysis.scene.what_changes], ["Central Issue", analysis.scene.central_issue], ["Next Paragraph Should…", analysis.scene.next_paragraph]].map(([label, content]) => content && (
              <div key={label} style={{ borderLeft: `2px solid ${label === "Central Issue" ? "#f87171" : G}`, paddingLeft: 16, marginBottom: 14 }}>
                <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.8, color: "#b0a898" }}>{content}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Analysis({ apiKey, model, onXp }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyse = async () => {
    if (!text.trim() || text.trim().length < 20) return;
    if (!apiKey) { setError("Add your Groq API key in Settings first."); return; }
    setLoading(true); setError(null); setResult(null);
    try {
      const raw = await callGroq(apiKey, model, ANALYSIS_SYSTEM, `Analyse this:\n\n${text}`);
      const data = parseJSON(raw);
      setResult(data);
      onXp(data.total ? Math.round(data.total / 2) : 10, null);
    } catch (e) { setError(e.message || "Analysis failed."); }
    setLoading(false);
  };

  const wc = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ fontSize: 14, color: DIM, lineHeight: 1.7 }}>Paste a paragraph or passage from your own work for close structural analysis.</div>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your prose here…" rows={9}
        style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 3, color: "#e0d8cc", fontFamily: "'Lora', serif", fontSize: 16, lineHeight: 1.8, padding: "16px", resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={analyse} disabled={loading || text.trim().length < 20}
          style={{ background: loading ? "#2a2520" : "#3a2e18", color: loading ? "#4a4438" : G, border: `1px solid rgba(212,183,120,${loading ? 0.1 : 0.3})`, padding: "10px 24px", borderRadius: 2, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
          {loading ? "Reading…" : "Analyse Prose"}
        </button>
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#4a4438" }}>{wc} words</span>
      </div>
      {error && <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 3, padding: "14px 18px", fontSize: 13, color: "#f87171" }}>{error}</div>}
      {result && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <ScoreCard scores={result.scores} total={result.total} />
          {[["Rhythm", result.rhythm], ["Implication", result.implication], ["Detail", result.detail], ["Movement", result.movement]].map(([label, content]) => content && (
            <div key={label} style={{ borderLeft: `2px solid ${G}`, paddingLeft: 16 }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.8, color: "#b0a898" }}>{content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [mode, setMode] = useState("home");
  const [apiKey, setApiKey] = useState(() => { try { return localStorage.getItem("groq_key") || ""; } catch { return ""; } });
  const [model, setModel] = useState(() => { try { return localStorage.getItem("groq_model") || GROQ_MODELS[0].id; } catch { return GROQ_MODELS[0].id; } });
  const [cardIdx, setCardIdx] = useState(0);
  const [promptIdx, setPromptIdx] = useState(0);
  const [xp, setXp] = useState(() => { try { return parseInt(localStorage.getItem("lf_xp") || "0"); } catch { return 0; } });
  const [history, setHistory] = useState([]);
  const [sceneBuffer, setSceneBuffer] = useState("");
  const [cardStats, setCardStats] = useState({ got: 0 });
  const [exerciseTab, setExerciseTab] = useState("seed");

  const saveKey = (k) => { setApiKey(k); try { localStorage.setItem("groq_key", k); } catch {} };
  const saveModel = (m) => { setModel(m); try { localStorage.setItem("groq_model", m); } catch {} };
  const addXp = (n, feedbackData) => {
    const nx = xp + n; setXp(nx);
    try { localStorage.setItem("lf_xp", String(nx)); } catch {}
    if (feedbackData?.central_issue) setHistory(h => [...h.slice(-9), feedbackData]);
  };
  const addToScene = (text) => { setSceneBuffer(prev => prev ? prev + "\n\n" + text : text); setMode("scene"); };
  const handleCard = (result) => {
    if (result === "Got it ✓") { setCardStats(s => ({ got: s.got + 1 })); addXp(15, null); }
    if (result === "Almost") addXp(5, null);
    setCardIdx(i => (i + 1) % THEORY_CARDS.length);
  };

  const level = Math.floor(xp / 100) + 1;
  const levelXp = xp % 100;

  const nav = [
    { id: "home", label: "Home" },
    { id: "lessons", label: "Lessons" },
    { id: "theory", label: "Cards" },
    { id: "exercises", label: "Write" },
    { id: "scene", label: "Scene" },
    { id: "analysis", label: "Analyse" },
    { id: "settings", label: "⚙" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: DARK, color: MID, fontFamily: "'Crimson Text', Georgia, serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Raleway:wght@300;400;600&display=swap');
        * { box-sizing: border-box; }
        html, body { height: 100%; overscroll-behavior: none; }
        body { padding-top: env(safe-area-inset-top); padding-bottom: env(safe-area-inset-bottom); }
        @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        textarea::placeholder { color: #3a3530; }
        textarea { -webkit-appearance: none; font-size: 16px !important; }
        input { -webkit-appearance: none; font-size: 16px !important; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0e0c0a; } ::-webkit-scrollbar-thumb { background: #2a2520; }
        select option { background: #1a1510; }
      `}</style>

      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: 9, letterSpacing: 5, color: "#5a5040", textTransform: "uppercase" }}>The Workshop</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 15, color: G, marginTop: 1 }}>Literary Fiction Practice</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 2, color: "#4a4438", textTransform: "uppercase" }}>Lv {level}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
              <div style={{ width: 60, height: 3, background: "#1a1810", borderRadius: 2 }}>
                <div style={{ width: `${levelXp}%`, height: "100%", background: G, borderRadius: 2, transition: "width 0.5s" }} />
              </div>
              <span style={{ fontSize: 9, color: "#6a5a38" }}>{xp} XP</span>
            </div>
          </div>
          <nav style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {nav.map(n => <button key={n.id} onClick={() => setMode(n.id)} style={btn(mode === n.id)}>{n.label}</button>)}
          </nav>
        </div>
      </div>

      {!apiKey && mode !== "settings" && (
        <div style={{ background: "rgba(212,183,120,0.08)", borderBottom: "1px solid rgba(212,183,120,0.2)", padding: "10px 20px", fontSize: 13, color: G, display: "flex", alignItems: "center", gap: 12 }}>
          <span>Add your free Groq API key to enable AI feedback.</span>
          <button onClick={() => setMode("settings")} style={{ background: "none", border: `1px solid ${G}`, color: G, padding: "4px 12px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>Set Up →</button>
        </div>
      )}

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "36px 20px", animation: "fadeIn 0.4s ease" }}>

        {mode === "settings" && <Settings apiKey={apiKey} setApiKey={saveKey} model={model} setModel={saveModel} onDone={() => setMode("home")} />}

        {mode === "home" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 14 }}>Daily Practice</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 24, color: "#e8dfc8", lineHeight: 1.4, marginBottom: 10 }}>Write every day.<br />See every sentence.</div>
              <div style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.75 }}>Craft lessons grounded in Chekhov and Mansfield. Paragraph exercises with scored AI feedback. A scene builder that chains your work into a whole.</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { id: "lessons", icon: "◈", title: "Craft Lessons", sub: "16 lessons across paragraph, sentence, scene, and story — grounded in real literary examples." },
                { id: "theory", icon: "▣", title: "Theory Cards", sub: `${THEORY_CARDS.length} flashcards on structure, act theory, and craft principles.` },
                { id: "exercises", icon: "✦", title: "Write", sub: "Seed prompts, AI-generated exercises, and step-by-step paragraph building." },
                { id: "scene", icon: "◎", title: "Scene Builder", sub: "Write freely. AI breaks into paragraphs and analyses structure.", full: true },
                { id: "analysis", icon: "⊙", title: "Prose Autopsy", sub: "Paste your own work for scored structural analysis." },
              ].map(card => (
                <div key={card.id} onClick={() => setMode(card.id)}
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 3, padding: "20px 18px", cursor: "pointer", gridColumn: card.full ? "1 / -1" : "auto" }}>
                  <div style={{ fontSize: 16, color: G, marginBottom: 8 }}>{card.icon}</div>
                  <div style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#d0c8b8", marginBottom: 4 }}>{card.title}</div>
                  <div style={{ fontSize: 12, color: DIM, lineHeight: 1.6 }}>{card.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20 }}>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.85, color: "#5a5040", fontStyle: "italic", borderLeft: "1px solid #2a2520", paddingLeft: 16 }}>
                "Don't tell me the moon is shining; show me the glint of light on broken glass."
                <div style={{ marginTop: 6, fontStyle: "normal", fontSize: 11, color: "#3a3530", letterSpacing: 1 }}>— Anton Chekhov</div>
              </div>
            </div>
          </div>
        )}

        {mode === "lessons" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Craft Lessons</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8", marginBottom: 4 }}>Theory & Practice</div>
              <div style={{ fontSize: 13, color: DIM, lineHeight: 1.7 }}>Each lesson teaches one principle, then shows it at work in Chekhov or Mansfield.</div>
            </div>
            <LessonReader onXp={addXp} />
          </div>
        )}

        {mode === "theory" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Theory</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8" }}>Structure Flashcards</div>
              </div>
              <div style={{ textAlign: "right", fontSize: 11, color: "#4a4438" }}>
                <div>{cardIdx + 1} / {THEORY_CARDS.length}</div>
                <div style={{ marginTop: 4, color: "#4ade8080" }}>✓ {cardStats.got}</div>
              </div>
            </div>
            <FlashCard card={THEORY_CARDS[cardIdx]} onResult={handleCard} onSkip={() => setCardIdx(i => (i + 1) % THEORY_CARDS.length)} />
            <div style={{ display: "flex", gap: 2 }}>
              {THEORY_CARDS.map((_, i) => (
                <div key={i} onClick={() => setCardIdx(i)}
                  style={{ flex: 1, height: 3, borderRadius: 2, cursor: "pointer", background: i === cardIdx ? G : i < cardIdx ? "#3a3020" : "#1a1810", transition: "background 0.2s" }} />
              ))}
            </div>
          </div>
        )}

        {mode === "exercises" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Write</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8" }}>Paragraph Practice</div>
            </div>
            <div style={{ display: "flex", gap: 2, borderBottom: `1px solid ${BORDER}` }}>
              {[["seed", "Seed Prompts"], ["generate", "Generate New"], ["stepbystep", "Step by Step"]].map(([id, label]) => (
                <button key={id} onClick={() => setExerciseTab(id)}
                  style={{ background: "none", border: "none", borderBottom: `2px solid ${exerciseTab === id ? G : "transparent"}`, color: exerciseTab === id ? G : DIM, padding: "8px 16px", cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: -1 }}>
                  {label}
                </button>
              ))}
            </div>
            {exerciseTab === "seed" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {SEED_PROMPTS.map((p, i) => (
                    <button key={p.id} onClick={() => setPromptIdx(i)}
                      style={{ background: i === promptIdx ? "rgba(212,183,120,0.10)" : "none", border: `1px solid ${i === promptIdx ? "rgba(212,183,120,0.3)" : BORDER}`, color: i === promptIdx ? G : "#4a4438", padding: "4px 12px", borderRadius: 2, cursor: "pointer", fontFamily: "inherit", fontSize: 11 }}>
                      {p.title}
                    </button>
                  ))}
                </div>
                <Exercise key={SEED_PROMPTS[promptIdx].id} prompt={SEED_PROMPTS[promptIdx]} apiKey={apiKey} model={model} onXp={addXp} history={history} onAddToScene={addToScene} />
              </div>
            )}
            {exerciseTab === "generate" && <GenerateExercise apiKey={apiKey} model={model} history={history} onXp={addXp} onAddToScene={addToScene} />}
            {exerciseTab === "stepbystep" && <StepParaExercise apiKey={apiKey} model={model} onXp={addXp} />}
          </div>
        )}

        {mode === "scene" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Scene Builder</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8", marginBottom: 4 }}>Build & Analyse a Scene</div>
            </div>
            <SceneBuilder apiKey={apiKey} model={model} onXp={addXp} sceneBuffer={sceneBuffer} setSceneBuffer={setSceneBuffer} />
          </div>
        )}

        {mode === "analysis" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Prose Autopsy</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8", marginBottom: 4 }}>Analyse Your Own Writing</div>
            </div>
            <Analysis apiKey={apiKey} model={model} onXp={addXp} />
          </div>
        )}

      </div>
    </div>
  );
}
