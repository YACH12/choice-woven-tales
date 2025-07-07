export interface Choice {
  id: string;
  text: string;
  nextStepId: string;
}

export interface StoryStep {
  id: string;
  text: string;
  choices: Choice[];
  isEnding?: boolean;
}

export interface StoryPath {
  stepId: string;
  choiceId: string;
  choiceText: string;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  theme: string;
  emoji: string;
  steps: { [key: string]: StoryStep };
}

export const stories: Story[] = [
  {
    id: "space_odyssey",
    title: "Galactic Explorer",
    description: "Command a starship on a mission to discover new worlds in the far reaches of space.",
    theme: "Sci-Fi",
    emoji: "🚀",
    steps: {
      start: {
        id: "start",
        text: "You're the captain of the starship Aurora, approaching an uncharted solar system. Your sensors detect three interesting planets: one covered in crystalline formations, another with vast oceans, and a third shrouded in mysterious energy clouds.",
        choices: [
          { id: "crystal", text: "Investigate the crystal planet", nextStepId: "crystal_planet" },
          { id: "ocean", text: "Explore the ocean world", nextStepId: "ocean_world" },
          { id: "energy", text: "Study the energy-shrouded planet", nextStepId: "energy_planet" }
        ]
      },
      crystal_planet: {
        id: "crystal_planet",
        text: "The crystal planet's surface sparkles like a massive geode. As you land, you discover the crystals emit a harmonic resonance that seems to affect your ship's systems. Your science officer detects life signs within the crystal formations.",
        choices: [
          { id: "investigate", text: "Investigate the life signs personally", nextStepId: "crystal_life" },
          { id: "scan", text: "Use remote scanning to learn more", nextStepId: "crystal_scan" }
        ]
      },
      ocean_world: {
        id: "ocean_world",
        text: "The ocean planet is a breathtaking blue marble with no visible landmass. As your ship hovers above the waves, massive bioluminescent creatures surface, creating patterns of light that seem like a form of communication.",
        choices: [
          { id: "communicate", text: "Attempt to communicate with the creatures", nextStepId: "ocean_talk" },
          { id: "explore", text: "Send a submarine to explore underwater", nextStepId: "ocean_dive" },
          { id: "observe", text: "Observe from a safe distance", nextStepId: "ocean_watch" }
        ]
      },
      energy_planet: {
        id: "energy_planet",
        text: "The energy clouds around this planet pulse with an almost sentient rhythm. As you approach, your ship's AI begins receiving complex mathematical sequences. The energy seems to be trying to teach you something.",
        choices: [
          { id: "learn", text: "Allow the AI to learn from the energy", nextStepId: "energy_learn" },
          { id: "shield", text: "Raise shields and proceed cautiously", nextStepId: "energy_caution" }
        ]
      },
      crystal_life: {
        id: "crystal_life",
        text: "Inside the crystals, you discover a silicon-based civilization that communicates through harmonic vibrations. They offer to share the secret of their crystalline technology, which could revolutionize space travel.",
        choices: [
          { id: "accept", text: "Accept their gift of knowledge", nextStepId: "crystal_ending" },
          { id: "trade", text: "Offer to establish trade relations", nextStepId: "trade_ending" }
        ]
      },
      crystal_scan: {
        id: "crystal_scan",
        text: "Your scans reveal that the entire planet is one massive living organism, using crystals as neurons. It's been waiting eons for contact with space-faring life. It offers to guide your ship through unknown regions of space.",
        choices: [
          { id: "guide", text: "Accept the planet as your guide", nextStepId: "guide_ending" },
          { id: "document", text: "Document this discovery for science", nextStepId: "science_ending" }
        ]
      },
      ocean_talk: {
        id: "ocean_talk",
        text: "The sea creatures are actually an ancient aquatic civilization. They reveal that they've been watching space for millennia, waiting for visitors who approach with peaceful intent rather than conquest.",
        choices: [
          { id: "peaceful", text: "Establish peaceful first contact", nextStepId: "peace_ending" },
          { id: "learn_ocean", text: "Learn about their underwater cities", nextStepId: "underwater_ending" }
        ]
      },
      ocean_dive: {
        id: "ocean_dive",
        text: "Your submarine discovers underwater cities more advanced than anything on Earth. The inhabitants invite you to stay and learn from their sustainable ocean civilization.",
        choices: [
          { id: "stay", text: "Accept their invitation", nextStepId: "ocean_stay_ending" },
          { id: "return", text: "Return with this knowledge to help Earth", nextStepId: "knowledge_ending" }
        ]
      },
      ocean_watch: {
        id: "ocean_watch",
        text: "By observing patiently, you learn that the creatures are actually tending to the planet's ecosystem, maintaining perfect balance. They notice your respectful approach and share their wisdom about planetary stewardship.",
        choices: [
          { id: "steward", text: "Become a planetary steward", nextStepId: "steward_ending" },
          { id: "spread", text: "Spread their wisdom across the galaxy", nextStepId: "wisdom_ending" }
        ]
      },
      energy_learn: {
        id: "energy_learn",
        text: "The energy teaches your AI about dimensional travel and the nature of consciousness itself. Your ship becomes capable of traveling between realities, opening infinite possibilities for exploration.",
        choices: [
          { id: "explore", text: "Explore alternate dimensions", nextStepId: "dimension_ending" },
          { id: "responsible", text: "Use this power responsibly", nextStepId: "responsibility_ending" }
        ]
      },
      energy_caution: {
        id: "energy_caution",
        text: "Your caution is rewarded when the energy reveals itself as a test. The planet is actually a training ground for advanced civilizations, and you've passed by showing wisdom and restraint.",
        choices: [
          { id: "train", text: "Undergo advanced training", nextStepId: "training_ending" },
          { id: "teach", text: "Return to teach others", nextStepId: "teacher_ending" }
        ]
      },
      crystal_ending: {
        id: "crystal_ending",
        text: "With crystalline technology, your ship can now travel faster than light without engines, using harmonic resonance with space itself. You become the first human to master crystal-ship technology, ushering in a new age of peaceful space exploration.",
        choices: [],
        isEnding: true
      },
      trade_ending: {
        id: "trade_ending",
        text: "You establish the first interstellar trade network, exchanging human art and music for crystalline technology. This peaceful exchange becomes the foundation for a galactic confederation of worlds.",
        choices: [],
        isEnding: true
      },
      guide_ending: {
        id: "guide_ending",
        text: "With the crystal planet as your guide, you discover a network of ancient civilizations across the galaxy. You become an ambassador, connecting isolated worlds and fostering a new era of cosmic cooperation.",
        choices: [],
        isEnding: true
      },
      science_ending: {
        id: "science_ending",
        text: "Your documentation of the living planet revolutionizes science. You return to Earth as the discoverer of planetary consciousness, changing humanity's understanding of life itself.",
        choices: [],
        isEnding: true
      },
      peace_ending: {
        id: "peace_ending",
        text: "Your peaceful first contact creates a model for all future space exploration. You become the architect of interstellar diplomacy, ensuring that space exploration proceeds with wisdom and respect.",
        choices: [],
        isEnding: true
      },
      underwater_ending: {
        id: "underwater_ending",
        text: "You establish an underwater embassy, becoming the first human to live beneath alien seas. Your work bridges two completely different forms of life, creating unprecedented scientific and cultural exchange.",
        choices: [],
        isEnding: true
      },
      ocean_stay_ending: {
        id: "ocean_stay_ending",
        text: "You adapt to underwater life using their bio-technology. As the first human citizen of an ocean world, you help develop new ways of living in harmony with water-based ecosystems.",
        choices: [],
        isEnding: true
      },
      knowledge_ending: {
        id: "knowledge_ending",
        text: "Returning to Earth with ocean world knowledge, you revolutionize sustainability. Earth's oceans are transformed into thriving ecosystems, solving climate change and creating underwater cities.",
        choices: [],
        isEnding: true
      },
      steward_ending: {
        id: "steward_ending",
        text: "You become a guardian of multiple worlds, using the ocean creatures' wisdom to help planets maintain ecological balance. Your ship becomes a mobile embassy for environmental protection.",
        choices: [],
        isEnding: true
      },
      wisdom_ending: {
        id: "wisdom_ending",
        text: "You travel the galaxy sharing the ocean world's wisdom about balance and harmony. Planets under your guidance flourish, and you become known as the 'Harmony Bringer' across the stars.",
        choices: [],
        isEnding: true
      },
      dimension_ending: {
        id: "dimension_ending",
        text: "You explore infinite realities, becoming a master of dimensional travel. Each reality you visit gains knowledge from the others, and you become a bridge between countless possible worlds.",
        choices: [],
        isEnding: true
      },
      responsibility_ending: {
        id: "responsibility_ending",
        text: "You use dimensional travel responsibly, helping civilizations solve problems by showing them solutions from other realities. You become a cosmic problem-solver, bringing hope across dimensions.",
        choices: [],
        isEnding: true
      },
      training_ending: {
        id: "training_ending",
        text: "You complete advanced training and join an elite group of cosmic guardians. Your mission: to guide younger civilizations toward enlightenment while protecting them from cosmic threats.",
        choices: [],
        isEnding: true
      },
      teacher_ending: {
        id: "teacher_ending",
        text: "You return to train the next generation of space explorers, teaching them the wisdom and restraint needed for cosmic exploration. Your academy becomes the foundation for ethical space exploration.",
        choices: [],
        isEnding: true
      }
    }
  },
  {
    id: "detective_mystery",
    title: "The Midnight Detective",
    description: "Solve a puzzling case in the rain-soaked streets of the city as a private detective.",
    theme: "Mystery",
    emoji: "🕵️",
    steps: {
      start: {
        id: "start",
        text: "Rain pounds the windows of your detective office as you review a peculiar case. A wealthy art collector's prized painting has vanished, but the security cameras show no one entering or leaving. The only clues: a single white feather and the scent of jasmine in the air.",
        choices: [
          { id: "scene", text: "Visit the crime scene immediately", nextStepId: "crime_scene" },
          { id: "research", text: "Research the painting's history first", nextStepId: "painting_history" },
          { id: "contacts", text: "Contact your network of informants", nextStepId: "informants" }
        ]
      },
      crime_scene: {
        id: "crime_scene",
        text: "At the collector's mansion, you notice something the police missed: tiny scratches on the window frame that form an unusual pattern. The security guard mentions seeing a white bird near the garden around midnight.",
        choices: [
          { id: "garden", text: "Investigate the garden thoroughly", nextStepId: "garden_clue" },
          { id: "pattern", text: "Analyze the scratch pattern", nextStepId: "pattern_clue" },
          { id: "guard", text: "Question the security guard further", nextStepId: "guard_story" }
        ]
      },
      painting_history: {
        id: "painting_history",
        text: "Your research reveals the painting was stolen from a museum in Prague 50 years ago. The original owner's granddaughter lives in the city and has been trying to reclaim it through legal channels for years.",
        choices: [
          { id: "granddaughter", text: "Visit the granddaughter immediately", nextStepId: "family_connection" },
          { id: "museum", text: "Contact the Prague museum", nextStepId: "museum_records" }
        ]
      },
      informants: {
        id: "informants",
        text: "Your street contacts whisper about a mysterious figure known as 'The White Phantom' who specializes in returning stolen art to rightful owners. They operate from the old theater district.",
        choices: [
          { id: "theater", text: "Head to the theater district", nextStepId: "theater_search" },
          { id: "phantom", text: "Try to make contact with the Phantom", nextStepId: "phantom_contact" },
          { id: "police", text: "Share this information with police", nextStepId: "police_cooperation" }
        ]
      },
      garden_clue: {
        id: "garden_clue",
        text: "In the garden, you find more white feathers arranged in a specific pattern that spells out coordinates. The coordinates lead to an old bookshop known for dealing in rare manuscripts.",
        choices: [
          { id: "bookshop", text: "Visit the bookshop", nextStepId: "bookshop_meeting" },
          { id: "decode", text: "Look for hidden meaning in the coordinates", nextStepId: "hidden_message" }
        ]
      },
      pattern_clue: {
        id: "pattern_clue",
        text: "The scratch pattern matches symbols from an ancient art restoration technique. Only a master restorer would know this method, suggesting someone with deep knowledge of art history and preservation.",
        choices: [
          { id: "restorers", text: "Investigate local art restorers", nextStepId: "restorer_trail" },
          { id: "technique", text: "Research this restoration technique", nextStepId: "ancient_knowledge" }
        ]
      },
      guard_story: {
        id: "guard_story",
        text: "The guard reveals he's been having vivid dreams about returning stolen art to museums. He mentions seeing a woman in white who seemed to float rather than walk, and she left behind the scent of jasmine.",
        choices: [
          { id: "dreams", text: "Explore the connection between dreams and the theft", nextStepId: "dream_connection" },
          { id: "woman", text: "Search for the mysterious woman in white", nextStepId: "white_woman" }
        ]
      },
      family_connection: {
        id: "family_connection",
        text: "The granddaughter, Elena, reveals she's been working with a secret organization that returns stolen art. She admits to taking the painting but explains it was to restore it to its rightful place in a Prague orphanage her grandmother founded.",
        choices: [
          { id: "help", text: "Offer to help her cause", nextStepId: "justice_ending" },
          { id: "legal", text: "Suggest legal alternatives", nextStepId: "legal_ending" }
        ]
      },
      museum_records: {
        id: "museum_records",
        text: "The Prague museum reveals the painting was meant to inspire children in an orphanage, but was stolen during the war. They've been searching for it to fulfill the original owner's wish of helping children through art.",
        choices: [
          { id: "orphanage", text: "Help return it to the orphanage", nextStepId: "orphanage_ending" },
          { id: "collector", text: "Negotiate with the collector", nextStepId: "negotiation_ending" }
        ]
      },
      theater_search: {
        id: "theater_search",
        text: "In the old theater, you discover a hidden room filled with 'stolen' artworks waiting to be returned to museums and cultural institutions. You've found the White Phantom's base of operations.",
        choices: [
          { id: "confront", text: "Confront the White Phantom", nextStepId: "phantom_meeting" },
          { id: "understand", text: "Try to understand their mission", nextStepId: "mission_understanding" }
        ]
      },
      phantom_contact: {
        id: "phantom_contact",
        text: "The White Phantom contacts you through a coded message in the morning newspaper. They propose a meeting at midnight in the art museum, claiming they want to share the truth about art theft and justice.",
        choices: [
          { id: "meeting", text: "Meet the Phantom as requested", nextStepId: "midnight_meeting" },
          { id: "backup", text: "Bring police backup to the meeting", nextStepId: "backup_approach" }
        ]
      },
      police_cooperation: {
        id: "police_cooperation",
        text: "Working with police, you learn about a pattern of art thefts where stolen items are mysteriously returned to their original locations or rightful owners. The thief seems to be motivated by justice rather than profit.",
        choices: [
          { id: "pattern", text: "Study the pattern to predict the next move", nextStepId: "prediction_ending" },
          { id: "justice", text: "Consider the moral implications", nextStepId: "moral_ending" }
        ]
      },
      bookshop_meeting: {
        id: "bookshop_meeting",
        text: "At the bookshop, you meet an elderly art historian who explains that the stolen painting belongs in a children's hospital where it can bring joy to sick children, not in a private collection where few can see it.",
        choices: [
          { id: "hospital", text: "Help move the painting to the hospital", nextStepId: "hospital_ending" },
          { id: "rightful", text: "Ensure it goes to its rightful legal owner", nextStepId: "rightful_ending" }
        ]
      },
      hidden_message: {
        id: "hidden_message",
        text: "The coordinates hide a deeper message about art belonging to the people, not private collectors. You realize this case is about more than theft—it's about the purpose of art in society.",
        choices: [
          { id: "people", text: "Support art for the people", nextStepId: "people_ending" },
          { id: "law", text: "Uphold the law regardless", nextStepId: "law_ending" }
        ]
      },
      restorer_trail: {
        id: "restorer_trail",
        text: "You discover the White Phantom is actually a master art restorer whose family was killed during a war, and their art collection was scattered. They dedicate their life to reuniting art with its intended purpose.",
        choices: [
          { id: "sympathy", text: "Sympathize with their mission", nextStepId: "sympathy_ending" },
          { id: "arrest", text: "Proceed with the arrest", nextStepId: "arrest_ending" }
        ]
      },
      ancient_knowledge: {
        id: "ancient_knowledge",
        text: "Your research reveals an ancient philosophy that art should heal and inspire, not merely decorate. The White Phantom follows this philosophy, 'stealing' art to place it where it can do the most good.",
        choices: [
          { id: "philosophy", text: "Embrace this philosophy", nextStepId: "philosophy_ending" },
          { id: "modern", text: "Stick to modern law", nextStepId: "modern_ending" }
        ]
      },
      justice_ending: {
        id: "justice_ending",
        text: "You help Elena establish a legal foundation that negotiates with collectors to loan art to institutions where it can inspire and heal. Your detective work becomes the blueprint for ethical art redistribution.",
        choices: [],
        isEnding: true
      },
      legal_ending: {
        id: "legal_ending",
        text: "Through legal channels, you help Elena reclaim her family's art while establishing a precedent for recovering stolen cultural artifacts. Your case becomes a landmark in international art law.",
        choices: [],
        isEnding: true
      },
      phantom_meeting: {
        id: "phantom_meeting",
        text: "The White Phantom reveals they're actually a collective of art lovers working to ensure art reaches those who need it most. You're invited to join their mission of art justice, becoming a detective who solves cases with compassion.",
        choices: [],
        isEnding: true
      },
      mission_understanding: {
        id: "mission_understanding",
        text: "Understanding their noble mission, you become a bridge between law enforcement and art justice activists. Your detective agency specializes in cases where legal and moral justice align.",
        choices: [],
        isEnding: true
      }
    }
  },
  {
    id: "pirate_adventure",
    title: "Captain of the Seven Seas",
    description: "Lead a crew of pirates in search of legendary treasure across dangerous waters.",
    theme: "Adventure",
    emoji: "🏴‍☠️",
    steps: {
      start: {
        id: "start",
        text: "You stand on the deck of your ship, the Crimson Wave, with an ancient map showing three possible routes to the legendary treasure of Captain Blackheart. Your crew awaits your decision as storm clouds gather on the horizon.",
        choices: [
          { id: "storm", text: "Brave the storm for the shortest route", nextStepId: "storm_route" },
          { id: "safe", text: "Take the longer but safer passage", nextStepId: "safe_route" },
          { id: "mysterious", text: "Follow the mysterious third route marked in gold", nextStepId: "golden_route" }
        ]
      },
      storm_route: {
        id: "storm_route",
        text: "Lightning crashes around your ship as massive waves threaten to tear her apart. Through the chaos, you spot another ship in distress—a merchant vessel with passengers aboard, but helping them might cost you the treasure.",
        choices: [
          { id: "rescue", text: "Risk everything to rescue the passengers", nextStepId: "rescue_mission" },
          { id: "treasure", text: "Stay focused on the treasure", nextStepId: "treasure_focus" }
        ]
      },
      safe_route: {
        id: "safe_route",
        text: "The calmer waters lead you to a tropical island where you discover a village of peaceful fishermen. They warn you about rival pirates who have been raiding these waters, and offer to guide you through hidden channels in exchange for protection.",
        choices: [
          { id: "protect", text: "Agree to protect the village", nextStepId: "village_alliance" },
          { id: "information", text: "Just gather information and leave", nextStepId: "info_gathering" },
          { id: "demand", text: "Demand tribute from the village", nextStepId: "traditional_pirate" }
        ]
      },
      golden_route: {
        id: "golden_route",
        text: "The golden route leads to an uncharted island where you find the remnants of Captain Blackheart's old crew, now elderly but still guarding his secrets. They challenge you to prove your worth through tests of courage, wisdom, and leadership.",
        choices: [
          { id: "courage", text: "Accept the test of courage", nextStepId: "courage_test" },
          { id: "wisdom", text: "Choose the test of wisdom", nextStepId: "wisdom_test" }
        ]
      },
      rescue_mission: {
        id: "rescue_mission",
        text: "Your heroic rescue saves dozens of lives, including a young girl who reveals she's the daughter of a powerful admiral. She offers to help you find legal ways to seek treasure through salvage rights rather than piracy.",
        choices: [
          { id: "legal", text: "Consider the legal path", nextStepId: "legal_treasure" },
          { id: "honor", text: "Continue as an honorable pirate", nextStepId: "honorable_pirate" }
        ]
      },
      treasure_focus: {
        id: "treasure_focus",
        text: "Staying focused on treasure, you push through the storm and find a sea cave filled with gold. However, you discover the treasure is cursed—anyone who takes it without earning it through good deeds becomes trapped on the island forever.",
        choices: [
          { id: "curse", text: "Try to break the curse through good deeds", nextStepId: "curse_breaking" },
          { id: "risk", text: "Take the treasure despite the curse", nextStepId: "cursed_treasure" }
        ]
      },
      village_alliance: {
        id: "village_alliance",
        text: "Your protection of the village leads to a climactic battle with rival pirates. Your victory not only secures the treasure location but also establishes you as a protector of the innocent rather than a mere plunderer.",
        choices: [
          { id: "protector", text: "Embrace your role as protector", nextStepId: "protector_ending" },
          { id: "treasure_hunt", text: "Focus on finding the treasure", nextStepId: "treasure_hunt_ending" }
        ]
      },
      info_gathering: {
        id: "info_gathering",
        text: "The villagers' information leads you to discover that Blackheart's treasure isn't gold—it's a collection of maps to safe harbors and trading routes that could revolutionize sea commerce.",
        choices: [
          { id: "commerce", text: "Use the maps for peaceful trade", nextStepId: "merchant_ending" },
          { id: "pirate_routes", text: "Use them for strategic piracy", nextStepId: "strategic_pirate_ending" }
        ]
      },
      traditional_pirate: {
        id: "traditional_pirate",
        text: "Your traditional pirate approach alienates potential allies, but you discover that fear and reputation can be powerful tools. You must decide whether to rule through fear or seek a different path.",
        choices: [
          { id: "fear", text: "Rule the seas through fear", nextStepId: "feared_captain_ending" },
          { id: "change", text: "Change your ways", nextStepId: "redemption_ending" }
        ]
      },
      courage_test: {
        id: "courage_test",
        text: "The test requires you to dive into monster-infested waters to retrieve a ceremonial pearl. Your courage impresses the old crew, and they reveal that true treasure lies in the friendships and loyalty you build.",
        choices: [
          { id: "friendship", text: "Value friendship over gold", nextStepId: "friendship_ending" },
          { id: "both", text: "Seek both friendship and treasure", nextStepId: "balanced_ending" }
        ]
      },
      wisdom_test: {
        id: "wisdom_test",
        text: "The wisdom test presents moral dilemmas about leadership and justice. Your wise choices prove you're worthy of Blackheart's greatest secret: the location of a treasure that can only be claimed by those who would use it to help others.",
        choices: [
          { id: "help_others", text: "Commit to helping others", nextStepId: "altruistic_ending" },
          { id: "wise_leader", text: "Become a wise leader", nextStepId: "leadership_ending" }
        ]
      },
      legal_treasure: {
        id: "legal_treasure",
        text: "Working within the law, you become a licensed salvage captain. Your adventures now involve recovering lost ships and returning treasures to their rightful owners, earning both profit and respect.",
        choices: [],
        isEnding: true
      },
      honorable_pirate: {
        id: "honorable_pirate",
        text: "You become known as the 'Noble Pirate,' protecting merchant ships from other pirates while still living free on the seas. Your reputation attracts the best crew members who value honor above easy plunder.",
        choices: [],
        isEnding: true
      },
      curse_breaking: {
        id: "curse_breaking",
        text: "Through acts of kindness and heroism, you break the curse and gain not just the treasure, but the blessing of the sea itself. Your ship becomes legendary, always finding fair winds and safe harbors.",
        choices: [],
        isEnding: true
      },
      cursed_treasure: {
        id: "cursed_treasure",
        text: "The curse takes hold, but your crew's loyalty helps you find a way to use the treasure's power for good while remaining free. You become a guardian of the seas, protecting ships from supernatural threats.",
        choices: [],
        isEnding: true
      },
      protector_ending: {
        id: "protector_ending",
        text: "You establish a network of protected islands and safe harbors. Your 'pirate' fleet becomes a force for good, protecting innocent travelers and fighting against true villains of the seas.",
        choices: [],
        isEnding: true
      },
      merchant_ending: {
        id: "merchant_ending",
        text: "Using Blackheart's trade routes, you build a legitimate merchant empire. Your former pirate skills help you navigate both business negotiations and actual navigation, creating prosperous trade across the seas.",
        choices: [],
        isEnding: true
      },
      feared_captain_ending: {
        id: "feared_captain_ending",
        text: "You become the most feared pirate captain of your era. While lonely at the top, your strategic mind and fearsome reputation allow you to control vast territories and influence the course of history.",
        choices: [],
        isEnding: true
      },
      friendship_ending: {
        id: "friendship_ending",
        text: "Your crew becomes your family, and together you have adventures that are worth more than any treasure. You become known as the captain who never lost a crew member, and your loyalty inspires legends.",
        choices: [],
        isEnding: true
      },
      altruistic_ending: {
        id: "altruistic_ending",
        text: "Using Blackheart's treasure, you establish schools and hospitals on remote islands. Your pirate ship becomes a mobile aid station, bringing help to those forgotten by civilization.",
        choices: [],
        isEnding: true
      }
    }
  }
];

// Add more stories here (continuing with the remaining 17 stories)
export const additionalStories: Story[] = [
  {
    id: "time_traveler",
    title: "Chronicles of Time",
    description: "Navigate through different time periods to prevent a catastrophic timeline collapse.",
    theme: "Sci-Fi",
    emoji: "⏰",
    steps: {
      start: {
        id: "start",
        text: "Your time machine malfunctions during a routine mission, scattering temporal fragments across three critical moments in history. You must choose which period to stabilize first: Ancient Rome during Julius Caesar's rise, Medieval England during the Black Plague, or 1960s America during the Space Race.",
        choices: [
          { id: "rome", text: "Ancient Rome - Prevent Caesar's early assassination", nextStepId: "rome_period" },
          { id: "medieval", text: "Medieval England - Combat the plague's spread", nextStepId: "medieval_period" },
          { id: "space_race", text: "1960s America - Ensure the moon landing succeeds", nextStepId: "space_period" }
        ]
      },
      rome_period: {
        id: "rome_period",
        text: "In Ancient Rome, you discover that Caesar's early assassination would prevent the Roman Empire's formation, drastically altering world history. You must navigate the dangerous political landscape of ancient politics.",
        choices: [
          { id: "warn_caesar", text: "Warn Caesar about the plot", nextStepId: "caesar_warned" },
          { id: "stop_assassins", text: "Stop the assassins directly", nextStepId: "assassins_stopped" }
        ]
      },
      medieval_period: {
        id: "medieval_period",
        text: "In plague-ridden England, you find that the disease is spreading faster than in recorded history. Your medical knowledge could save millions, but changing this timeline might prevent future medical advances.",
        choices: [
          { id: "cure_plague", text: "Introduce modern medical knowledge", nextStepId: "plague_cured" },
          { id: "minimize_damage", text: "Minimize damage without major changes", nextStepId: "careful_healing" }
        ]
      },
      space_period: {
        id: "space_period",
        text: "In 1960s NASA, you discover sabotage that would cause the Apollo mission to fail, potentially ending space exploration for decades. The saboteur is someone with future knowledge like yourself.",
        choices: [
          { id: "confront_saboteur", text: "Confront the time-traveling saboteur", nextStepId: "saboteur_confronted" },
          { id: "fix_quietly", text: "Fix the sabotage without confrontation", nextStepId: "quiet_fix" }
        ]
      },
      caesar_warned: {
        id: "caesar_warned",
        text: "Caesar heeds your warning and strengthens his guard. Your intervention saves him, but you learn that this timeline shift has created a more powerful Roman Empire that dominates well into the modern era.",
        choices: [
          { id: "accept_change", text: "Accept this new timeline", nextStepId: "empire_timeline" },
          { id: "find_balance", text: "Seek a balanced outcome", nextStepId: "balanced_rome" }
        ]
      },
      assassins_stopped: {
        id: "assassins_stopped",
        text: "By stopping the assassins, you become a hero in Caesar's eyes. He offers you a position as his advisor, giving you influence over the direction of the Roman Empire.",
        choices: [
          { id: "advisor", text: "Become Caesar's advisor", nextStepId: "roman_advisor" },
          { id: "decline", text: "Decline and continue your mission", nextStepId: "mission_focus" }
        ]
      },
      plague_cured: {
        id: "plague_cured",
        text: "Your medical intervention saves millions and accelerates medical science by centuries. However, this creates overpopulation issues that threaten future stability.",
        choices: [
          { id: "manage_population", text: "Help manage the population boom", nextStepId: "population_manager" },
          { id: "natural_balance", text: "Allow natural balance to reassert", nextStepId: "natural_correction" }
        ]
      },
      careful_healing: {
        id: "careful_healing",
        text: "Your careful approach saves many lives while preserving the timeline's general flow. You become a legendary healer whose methods inspire future medical advances.",
        choices: [
          { id: "medical_legend", text: "Embrace your role as medical pioneer", nextStepId: "healer_legend" },
          { id: "time_guardian", text: "Focus on protecting timelines", nextStepId: "timeline_guardian" }
        ]
      },
      saboteur_confronted: {
        id: "saboteur_confronted",
        text: "The saboteur reveals they're from a timeline where space exploration led to humanity's destruction. They believe preventing space travel will save the species from a cosmic threat.",
        choices: [
          { id: "ally", text: "Consider them an ally with valid concerns", nextStepId: "cosmic_threat" },
          { id: "stop_them", text: "Stop them to preserve space exploration", nextStepId: "space_preserved" }
        ]
      },
      quiet_fix: {
        id: "quiet_fix",
        text: "Your quiet intervention ensures the moon landing succeeds without confrontation. However, you notice other temporal anomalies that suggest a larger conspiracy across time periods.",
        choices: [
          { id: "investigate", text: "Investigate the temporal conspiracy", nextStepId: "conspiracy_hunter" },
          { id: "report", text: "Report to the Time Bureau", nextStepId: "bureau_agent" }
        ]
      },
      empire_timeline: {
        id: "empire_timeline",
        text: "You accept a timeline where Rome never fell, leading to a world unified under Roman law and engineering. Technology advances differently, but humanity reaches the stars through Roman discipline and organization.",
        choices: [],
        isEnding: true
      },
      balanced_rome: {
        id: "balanced_rome",
        text: "You find a way to preserve Caesar's life while ensuring Rome still eventually transforms into the foundation for modern democracy. Your careful balance creates the best of both worlds.",
        choices: [],
        isEnding: true
      },
      roman_advisor: {
        id: "roman_advisor",
        text: "As Caesar's advisor, you guide Rome toward enlightened policies that create a more just empire. Your influence leads to earlier abolition of slavery and greater rights for citizens across the empire.",
        choices: [],
        isEnding: true
      },
      mission_focus: {
        id: "mission_focus",
        text: "Staying focused on your mission, you become a guardian of historical integrity. You establish protocols that allow positive changes while preserving essential historical flows.",
        choices: [],
        isEnding: true
      },
      healer_legend: {
        id: "healer_legend",
        text: "Your legendary healing becomes the foundation for a timeline where medicine advances centuries earlier. Diseases that plagued humanity are conquered, leading to a healthier, more prosperous world.",
        choices: [],
        isEnding: true
      },
      timeline_guardian: {
        id: "timeline_guardian",
        text: "You become a professional Timeline Guardian, protecting the flow of history while allowing beneficial small changes. Your work ensures that progress happens naturally without catastrophic disruptions.",
        choices: [],
        isEnding: true
      },
      cosmic_threat: {
        id: "cosmic_threat",
        text: "Working with the saboteur, you discover a way to advance space exploration while avoiding the cosmic threat. Together, you create a timeline where humanity explores space more cautiously and successfully.",
        choices: [],
        isEnding: true
      },
      space_preserved: {
        id: "space_preserved",
        text: "Preserving space exploration leads to humanity's expansion among the stars. Your actions ensure that future generations have the wisdom to handle cosmic challenges when they arise.",
        choices: [],
        isEnding: true
      },
      conspiracy_hunter: {
        id: "conspiracy_hunter",
        text: "Your investigation reveals a secret war between time travelers with different visions for humanity's future. You become a key player in this temporal conflict, working to find solutions that satisfy all parties.",
        choices: [],
        isEnding: true
      },
      bureau_agent: {
        id: "bureau_agent",
        text: "Working with the Time Bureau, you help establish better protocols for temporal intervention. Your experience becomes the foundation for training future time travelers in ethical temporal manipulation.",
        choices: [],
        isEnding: true
      }
    }
  }
];

// Combine all stories
export const allStories = [...stories, ...additionalStories];

// Helper function to get a story by ID
export const getStoryById = (id: string): Story | undefined => {
  return allStories.find(story => story.id === id);
};