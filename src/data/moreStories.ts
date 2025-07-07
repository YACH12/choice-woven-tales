import { Story } from "./storyData";

export const moreStories: Story[] = [
  {
    id: "haunted_mansion",
    title: "The Haunted Manor",
    description: "Inherit a mysterious mansion with supernatural secrets waiting to be uncovered.",
    theme: "Horror",
    emoji: "🏚️",
    steps: {
      start: {
        id: "start",
        text: "You've inherited your great-aunt's Victorian mansion. As you arrive on a stormy night, you notice three areas of interest: the locked basement with strange sounds, the library with books that seem to move on their own, and the attic where you hear footsteps despite no one being there.",
        choices: [
          { id: "basement", text: "Investigate the mysterious basement", nextStepId: "basement_discovery" },
          { id: "library", text: "Explore the haunted library", nextStepId: "library_secrets" },
          { id: "attic", text: "Check out the footsteps in the attic", nextStepId: "attic_encounter" }
        ]
      },
      basement_discovery: {
        id: "basement_discovery",
        text: "In the basement, you find a hidden laboratory where your great-aunt was researching communication with spirits. Her equipment still hums with energy, and you realize the 'hauntings' might be breakthrough scientific discoveries.",
        choices: [
          { id: "continue_research", text: "Continue her scientific research", nextStepId: "scientist_ending" },
          { id: "help_spirits", text: "Use the equipment to help trapped spirits", nextStepId: "spirit_helper_ending" }
        ]
      },
      library_secrets: {
        id: "library_secrets",
        text: "The library contains books that chronicle the lives of people who lived in the house. You discover that the 'ghosts' are actually memories preserved in the house itself, and you can experience their stories firsthand.",
        choices: [
          { id: "experience_memories", text: "Experience the preserved memories", nextStepId: "memory_keeper_ending" },
          { id: "preserve_stories", text: "Become a keeper of these stories", nextStepId: "historian_ending" }
        ]
      },
      attic_encounter: {
        id: "attic_encounter",
        text: "In the attic, you meet the spirit of your great-aunt who explains that the house is a waystation for lost souls. She needs someone to take over her role of helping spirits find peace before moving on.",
        choices: [
          { id: "take_over", text: "Accept the role of spiritual guide", nextStepId: "guide_ending" },
          { id: "modern_approach", text: "Find a modern solution to help spirits", nextStepId: "innovation_ending" }
        ]
      },
      scientist_ending: {
        id: "scientist_ending",
        text: "Your research revolutionizes science by proving life after death and establishing communication with other dimensions. You become the founder of a new field of paranormal science.",
        choices: [],
        isEnding: true
      },
      spirit_helper_ending: {
        id: "spirit_helper_ending",
        text: "You help dozens of trapped spirits find peace, and the mansion becomes a sanctuary for those seeking closure. You're known as the person who bridges the world of the living and the dead.",
        choices: [],
        isEnding: true
      },
      memory_keeper_ending: {
        id: "memory_keeper_ending",
        text: "You become a guardian of preserved memories, helping families connect with their ancestral stories and healing generational trauma through understanding the past.",
        choices: [],
        isEnding: true
      },
      historian_ending: {
        id: "historian_ending",
        text: "You transform the mansion into a unique museum where visitors can experience historical events through preserved memories, revolutionizing how we learn about the past.",
        choices: [],
        isEnding: true
      },
      guide_ending: {
        id: "guide_ending",
        text: "As a spiritual guide, you help hundreds of souls find peace while protecting the living from malevolent spirits. Your mansion becomes a beacon of hope between worlds.",
        choices: [],
        isEnding: true
      },
      innovation_ending: {
        id: "innovation_ending",
        text: "You combine technology with spiritual wisdom to create modern solutions for helping spirits, establishing a new profession of 'digital medium' that helps people worldwide.",
        choices: [],
        isEnding: true
      }
    }
  },
  {
    id: "dragon_trainer",
    title: "The Dragon Whisperer",
    description: "Discover you have the rare gift of communicating with dragons in a world where they're feared.",
    theme: "Fantasy",
    emoji: "🐉",
    steps: {
      start: {
        id: "start",
        text: "You discover a wounded dragon in the mountains and realize you can understand its thoughts. The dragon tells you of three urgent problems: dragon eggs being stolen by poachers, an ancient dragon going mad from loneliness, and a young dragon terrorizing villages out of fear.",
        choices: [
          { id: "eggs", text: "Stop the poachers stealing dragon eggs", nextStepId: "poacher_mission" },
          { id: "ancient", text: "Help the lonely ancient dragon", nextStepId: "ancient_dragon" },
          { id: "young", text: "Calm the frightened young dragon", nextStepId: "young_dragon" }
        ]
      },
      poacher_mission: {
        id: "poacher_mission",
        text: "You track down the poachers and discover they're selling eggs to people who want to raise dragons as weapons. You must decide whether to stop them through force or find a peaceful solution.",
        choices: [
          { id: "peaceful", text: "Find a peaceful solution", nextStepId: "conservation_ending" },
          { id: "dragon_alliance", text: "Unite dragons against the threat", nextStepId: "dragon_alliance_ending" }
        ]
      },
      ancient_dragon: {
        id: "ancient_dragon",
        text: "The ancient dragon has been alone for centuries and is losing its connection to reality. It needs companionship and purpose to regain its sanity and wisdom.",
        choices: [
          { id: "companion", text: "Become the dragon's companion", nextStepId: "companion_ending" },
          { id: "bridge_species", text: "Help bridge dragons and humans", nextStepId: "bridge_ending" }
        ]
      },
      young_dragon: {
        id: "young_dragon",
        text: "The young dragon is afraid of humans after being attacked by hunters. It's lashing out in fear, not malice, and needs to learn that not all humans are enemies.",
        choices: [
          { id: "teach_trust", text: "Teach the dragon to trust again", nextStepId: "trust_ending" },
          { id: "safe_haven", text: "Create a safe haven for dragons", nextStepId: "sanctuary_ending" }
        ]
      },
      conservation_ending: {
        id: "conservation_ending",
        text: "Your peaceful approach leads to the creation of dragon conservation laws and protected habitats. You become the world's first official Dragon Conservation Officer.",
        choices: [],
        isEnding: true
      },
      dragon_alliance_ending: {
        id: "dragon_alliance_ending",
        text: "United with dragons, you form an alliance that protects both species. Dragons help humans with natural disasters while humans protect dragon territories.",
        choices: [],
        isEnding: true
      },
      companion_ending: {
        id: "companion_ending",
        text: "As companion to the ancient dragon, you gain centuries of wisdom and become a bridge between dragon and human knowledge, helping both species grow.",
        choices: [],
        isEnding: true
      },
      bridge_ending: {
        id: "bridge_ending",
        text: "You establish the first human-dragon diplomatic relations, creating a new era where both species work together for mutual benefit and understanding.",
        choices: [],
        isEnding: true
      },
      trust_ending: {
        id: "trust_ending",
        text: "Teaching dragons to trust humans again, you become known as the Dragon Whisperer who can calm any dragon and resolve conflicts between species.",
        choices: [],
        isEnding: true
      },
      sanctuary_ending: {
        id: "sanctuary_ending",
        text: "Your dragon sanctuary becomes a model for human-dragon coexistence, where young dragons learn to live peacefully alongside humans while maintaining their wild nature.",
        choices: [],
        isEnding: true
      }
    }
  }
];