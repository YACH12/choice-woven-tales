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

export const storyData: { [key: string]: StoryStep } = {
  start: {
    id: "start",
    text: "You stand at the edge of an ancient forest as twilight descends. The trees whisper secrets in a language you almost understand, and a mysterious path winds deeper into the shadows. Your heart races with anticipation.",
    choices: [
      { id: "forest", text: "Follow the mysterious path into the forest", nextStepId: "forest_path" },
      { id: "village", text: "Turn back toward the distant village lights", nextStepId: "village_path" },
      { id: "wait", text: "Wait and listen to the whispers", nextStepId: "listen_path" }
    ]
  },
  
  forest_path: {
    id: "forest_path",
    text: "The path leads you through towering oaks whose branches form a natural cathedral above. Moonlight filters through the leaves, creating shifting patterns on the forest floor. Suddenly, you hear a soft melody drifting from somewhere ahead.",
    choices: [
      { id: "melody", text: "Follow the enchanting melody", nextStepId: "melody_path" },
      { id: "careful", text: "Proceed cautiously, staying alert", nextStepId: "careful_path" }
    ]
  },

  village_path: {
    id: "village_path",
    text: "As you walk toward the village, an old traveler approaches on the road. His eyes twinkle with knowledge, and he carries a lantern that glows with an unusual blue light. 'Going to the village?' he asks with a knowing smile.",
    choices: [
      { id: "join", text: "Accept his offer to travel together", nextStepId: "traveler_path" },
      { id: "polite", text: "Politely decline and continue alone", nextStepId: "alone_path" },
      { id: "curious", text: "Ask about his mysterious lantern", nextStepId: "lantern_path" }
    ]
  },

  listen_path: {
    id: "listen_path",
    text: "You close your eyes and let the forest's whispers wash over you. Gradually, the sounds begin to make sense - they're telling you about a hidden treasure buried beneath the oldest tree, but also warning of a guardian that protects it.",
    choices: [
      { id: "treasure", text: "Search for the ancient tree and its treasure", nextStepId: "treasure_path" },
      { id: "heed", text: "Heed the warning and leave the treasure alone", nextStepId: "wisdom_path" }
    ]
  },

  melody_path: {
    id: "melody_path",
    text: "The melody leads you to a moonlit clearing where ethereal figures dance in a circle. They beckon you to join their eternal celebration, their eyes glowing with otherworldly joy. The music is hypnotically beautiful.",
    choices: [
      { id: "dance", text: "Join the mystical dance", nextStepId: "dance_ending" },
      { id: "observe", text: "Watch from the shadows", nextStepId: "observer_ending" }
    ]
  },

  careful_path: {
    id: "careful_path",
    text: "Your caution serves you well as you notice strange markings on the trees - warnings carved by previous travelers. Following these signs, you discover a hidden grove where a wise hermit tends to magical herbs that glow softly in the darkness.",
    choices: [
      { id: "hermit", text: "Approach the hermit for wisdom", nextStepId: "hermit_ending" },
      { id: "herbs", text: "Ask about the magical herbs", nextStepId: "herb_ending" }
    ]
  },

  traveler_path: {
    id: "traveler_path",
    text: "The traveler shares fascinating stories of distant lands as you walk together. His lantern's blue light reveals hidden messages written along the roadside - clues to an ancient puzzle that spans the entire region.",
    choices: [
      { id: "puzzle", text: "Work together to solve the ancient puzzle", nextStepId: "puzzle_ending" },
      { id: "stories", text: "Ask him to tell you more stories", nextStepId: "story_ending" }
    ]
  },

  alone_path: {
    id: "alone_path",
    text: "Walking alone, you notice things you might have missed with company - shooting stars that seem to respond to your wishes, and a family of foxes that appears to be leading you toward something important.",
    choices: [
      { id: "stars", text: "Make a wish on the shooting stars", nextStepId: "wish_ending" },
      { id: "foxes", text: "Follow the mysterious foxes", nextStepId: "fox_ending" }
    ]
  },

  lantern_path: {
    id: "lantern_path",
    text: "The traveler explains that his lantern contains the light of truth, showing things as they really are. He offers to let you look through it, warning that some truths are difficult to bear.",
    choices: [
      { id: "truth", text: "Look through the lantern of truth", nextStepId: "truth_ending" },
      { id: "decline", text: "Thank him but decline the offer", nextStepId: "mystery_ending" }
    ]
  },

  treasure_path: {
    id: "treasure_path",
    text: "You find the ancient tree, its trunk so massive that ten people couldn't wrap their arms around it. As you begin to dig, a majestic dragon emerges from the shadows, but rather than attacking, it speaks to you in an ancient tongue.",
    choices: [
      { id: "communicate", text: "Try to communicate with the dragon", nextStepId: "dragon_ending" },
      { id: "respect", text: "Show respect and back away slowly", nextStepId: "respect_ending" }
    ]
  },

  wisdom_path: {
    id: "wisdom_path",
    text: "Choosing wisdom over greed, you turn away from the treasure. As you do, the forest itself seems to approve - flowers bloom in your footsteps, and a gentle breeze guides you to a hidden spring with waters that grant clarity of mind.",
    choices: [
      { id: "drink", text: "Drink from the spring of clarity", nextStepId: "clarity_ending" },
      { id: "share", text: "Bottle the water to share with others", nextStepId: "sharing_ending" }
    ]
  },

  // Ending nodes
  dance_ending: {
    id: "dance_ending",
    text: "You join the eternal dance, and as you move with the mystical beings, you understand that you've become part of something magnificent. Time loses meaning as you dance under the stars, your spirit forever intertwined with the magic of the forest. You have found your place in the eternal celebration of nature's mysteries.",
    choices: [],
    isEnding: true
  },

  observer_ending: {
    id: "observer_ending",
    text: "From the shadows, you witness something extraordinary. The dancers are not just celebrating - they're weaving the very fabric of dreams that will visit sleeping minds across the world. You become the keeper of this secret, forever changed by the knowledge that magic works in the world through such beautiful, hidden moments.",
    choices: [],
    isEnding: true
  },

  hermit_ending: {
    id: "hermit_ending",
    text: "The hermit shares ancient wisdom about the balance between all living things. Under his guidance, you learn to hear the songs of trees and speak with woodland creatures. You decide to stay and become his apprentice, dedicating your life to protecting the forest's ancient secrets.",
    choices: [],
    isEnding: true
  },

  herb_ending: {
    id: "herb_ending",
    text: "The hermit teaches you about the magical properties of each herb - some that heal, others that grant visions, and a few that can bridge the gap between dreams and reality. You gather a collection to take back to the world, becoming a healer who brings forest magic to those who need it most.",
    choices: [],
    isEnding: true
  },

  puzzle_ending: {
    id: "puzzle_ending",
    text: "Together, you and the traveler solve the ancient puzzle, which opens a hidden door in the hillside. Inside, you discover a library containing the collected wisdom of ages. You become guardians of this knowledge, ensuring it's shared with those who will use it to make the world better.",
    choices: [],
    isEnding: true
  },

  story_ending: {
    id: "story_ending",
    text: "The traveler's stories are actually prophecies, and you realize you're living in one of them right now. He reveals that he's been waiting for you specifically, and offers to teach you the art of story-telling that can influence the course of destiny itself. You become a weaver of fates.",
    choices: [],
    isEnding: true
  },

  wish_ending: {
    id: "wish_ending",
    text: "Your wish on the shooting stars comes true in the most unexpected way - you gain the ability to grant wishes for others. You return to the world as a guardian angel of sorts, secretly helping people achieve their deepest dreams while remaining humble about your newfound power.",
    choices: [],
    isEnding: true
  },

  fox_ending: {
    id: "fox_ending",
    text: "The foxes lead you to their ancient den, where you discover you can understand all animal languages. They welcome you as a bridge between the human and animal worlds. You become an advocate for wildlife, using your unique gift to create harmony between civilization and nature.",
    choices: [],
    isEnding: true
  },

  truth_ending: {
    id: "truth_ending",
    text: "Through the lantern of truth, you see the world as it truly is - a place where every act of kindness creates ripples of light, and every living being is connected by invisible threads of compassion. This revelation transforms you into a teacher who helps others see beyond surface appearances to the beauty that lies within.",
    choices: [],
    isEnding: true
  },

  mystery_ending: {
    id: "mystery_ending",
    text: "By choosing to preserve the mystery, you gain something even more valuable than truth - the wisdom to know that some questions are more beautiful than their answers. You become a philosopher who helps others appreciate the magic in uncertainty and the beauty in life's unanswered questions.",
    choices: [],
    isEnding: true
  },

  dragon_ending: {
    id: "dragon_ending",
    text: "The dragon is actually the ancient guardian of wisdom itself. Impressed by your courage to communicate rather than flee, it shares knowledge that has been protected for millennia. You become the first human in centuries to be entrusted with dragon wisdom, using it to bring peace between different worlds.",
    choices: [],
    isEnding: true
  },

  respect_ending: {
    id: "respect_ending",
    text: "Your respect for the guardian moves the dragon deeply. As a reward for your humility, it grants you a single scale that will protect you from harm and guide you toward making choices that serve the greater good. You return to the world as a humble hero, using your protection to help others.",
    choices: [],
    isEnding: true
  },

  clarity_ending: {
    id: "clarity_ending",
    text: "The spring's waters grant you perfect clarity of mind and purpose. You can now see through deception, understand complex problems instantly, and always know the right path forward. You use this gift to become a wise leader who helps solve conflicts and guides communities toward prosperity.",
    choices: [],
    isEnding: true
  },

  sharing_ending: {
    id: "sharing_ending",
    text: "Your choice to share the magical water with others multiplies its power. Each person who drinks from it gains a measure of clarity, and together you form a network of wise individuals working to heal the world. Your story becomes one of community, cooperation, and shared wisdom.",
    choices: [],
    isEnding: true
  }
};