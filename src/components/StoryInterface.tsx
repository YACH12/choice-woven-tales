import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { allStories, getStoryById, type StoryPath, type Story } from "@/data/storyData";
import { BookOpen, RotateCcw, Save, Sparkles, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const StoryInterface = () => {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [currentStepId, setCurrentStepId] = useState("start");
  const [storyPath, setStoryPath] = useState<StoryPath[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const selectedStory = selectedStoryId ? getStoryById(selectedStoryId) : null;
  const currentStep = selectedStory?.steps[currentStepId];

  useEffect(() => {
    if (currentStep?.isEnding) {
      setIsComplete(true);
    }
  }, [currentStep]);

  const handleStorySelect = (storyId: string) => {
    setSelectedStoryId(storyId);
    setCurrentStepId("start");
    setStoryPath([]);
    setIsComplete(false);
    setIsAnimating(false);
  };

  const handleChoice = (choiceId: string, choiceText: string, nextStepId: string) => {
    if (isAnimating || !selectedStory) return;
    
    setIsAnimating(true);
    
    const newPath: StoryPath = {
      stepId: currentStepId,
      choiceId,
      choiceText
    };
    
    setStoryPath(prev => [...prev, newPath]);
    
    setTimeout(() => {
      setCurrentStepId(nextStepId);
      setIsAnimating(false);
    }, 400);
  };

  const startOver = () => {
    setCurrentStepId("start");
    setStoryPath([]);
    setIsComplete(false);
    setIsAnimating(false);
    toast({
      title: "New Journey Begins",
      description: "Your story has been reset. Ready for a new adventure?",
    });
  };

  const goBackToSelection = () => {
    setSelectedStoryId(null);
    setCurrentStepId("start");
    setStoryPath([]);
    setIsComplete(false);
    setIsAnimating(false);
  };

  const saveStory = () => {
    if (!selectedStory) return;
    
    const savedStories = JSON.parse(localStorage.getItem("savedStories") || "[]");
    const newStory = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      storyTitle: selectedStory.title,
      path: storyPath,
      finalStep: currentStep,
      title: `${selectedStory.title} - Adventure #${savedStories.length + 1}`
    };
    
    savedStories.push(newStory);
    localStorage.setItem("savedStories", JSON.stringify(savedStories));
    
    toast({
      title: "Story Saved!",
      description: "Your adventure has been preserved for future reading.",
    });
  };

  // Story Selection Screen
  if (!selectedStoryId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-story via-story-parchment to-story p-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
              <h1 className="text-5xl font-bold text-story-text">Tale Weaver</h1>
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <p className="text-story-text/70 text-xl mb-4">Choose Your Adventure</p>
            <p className="text-story-text/60 text-lg">20 unique stories await your choices</p>
          </div>

          {/* Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {allStories.map((story) => (
              <Card
                key={story.id}
                className="p-6 bg-story-parchment border-border shadow-story hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                onClick={() => handleStorySelect(story.id)}
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-3">{story.emoji}</div>
                  <h3 className="text-xl font-bold text-story-text group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {story.theme}
                  </div>
                  <p className="text-story-text/70 text-sm leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-story-text/60">
              Each story features multiple branching paths with unique endings.
              <br />
              Your choices determine the outcome of your adventure.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Story Complete Screen
  if (isComplete && selectedStory && currentStep) {
    return <CompletedStory 
      story={selectedStory}
      storyPath={storyPath} 
      finalStep={currentStep} 
      onStartOver={startOver}
      onSaveStory={saveStory}
      onBackToSelection={goBackToSelection}
    />;
  }

  // Active Story Screen
  if (!currentStep || !selectedStory) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-story via-story-parchment to-story p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Button
              variant="story"
              size="sm"
              onClick={goBackToSelection}
              className="absolute left-4 top-4"
            >
              <ArrowLeft className="w-4 h-4" />
              All Stories
            </Button>
            <div className="text-2xl">{selectedStory.emoji}</div>
            <h1 className="text-3xl font-bold text-story-text">{selectedStory.title}</h1>
          </div>
          <p className="text-story-text/70 text-lg mb-4">{selectedStory.description}</p>
          <div className="flex items-center justify-center gap-2">
            <div className="text-sm text-story-text/60">
              Step {storyPath.length + 1} of 7
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i <= storyPath.length ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Story Content */}
        <Card className={`p-8 mb-8 bg-story-parchment border-border shadow-story transition-all duration-500 ${
          isAnimating ? "opacity-50 transform translate-y-2" : "opacity-100"
        }`}>
          <div className="prose prose-lg max-w-none">
            <p className="text-story-text leading-relaxed text-xl font-light">
              {currentStep.text}
            </p>
          </div>
        </Card>

        {/* Choices */}
        {currentStep.choices.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-story-text text-center mb-6">
              What do you choose?
            </h3>
            <div className="grid gap-4">
              {currentStep.choices.map((choice) => (
                <Button
                  key={choice.id}
                  variant="choice"
                  size="choice"
                  onClick={() => handleChoice(choice.id, choice.text, choice.nextStepId)}
                  disabled={isAnimating}
                  className="text-left justify-start h-auto py-4 px-6 whitespace-normal"
                >
                  <span className="text-base leading-relaxed">{choice.text}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="mt-12 flex justify-center gap-4">
          <Button variant="story" size="story" onClick={startOver}>
            <RotateCcw className="w-4 h-4" />
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
};

interface CompletedStoryProps {
  story: Story;
  storyPath: StoryPath[];
  finalStep: any;
  onStartOver: () => void;
  onSaveStory: () => void;
  onBackToSelection: () => void;
}

const CompletedStory = ({ story, storyPath, finalStep, onStartOver, onSaveStory, onBackToSelection }: CompletedStoryProps) => {
  return (
    <div className="min-h-screen bg-gradient-book p-4">
      <div className="max-w-4xl mx-auto">
        {/* Book Header */}
        <div className="text-center mb-12 pt-8">
          <Button
            variant="story"
            size="sm"
            onClick={onBackToSelection}
            className="absolute left-4 top-4"
          >
            <ArrowLeft className="w-4 h-4" />
            All Stories
          </Button>
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-story-text">{story.title}</h1>
            <div className="text-3xl">{story.emoji}</div>
          </div>
          <p className="text-story-text/70 text-xl">Your completed adventure</p>
        </div>

        {/* Story Book */}
        <Card className="p-12 mb-8 bg-story-parchment border-border shadow-book">
          <div className="space-y-8">
            {/* Story Path */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-story-text border-b border-border pb-2">
                Your Journey
              </h2>
              {storyPath.map((path, index) => {
                const step = story.steps[path.stepId];
                return (
                  <div key={index} className="space-y-3">
                    <div className="text-story-text/90 leading-relaxed">
                      {step.text}
                    </div>
                    <div className="pl-6 border-l-4 border-primary/30">
                      <p className="text-primary font-medium italic">
                        → {path.choiceText}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Final Ending */}
            <div className="space-y-4 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-story-text">The End</h2>
              <p className="text-story-text leading-relaxed text-lg">
                {finalStep.text}
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 pb-12">
          <Button variant="story" size="story" onClick={onStartOver}>
            <RotateCcw className="w-5 h-5" />
            Replay Story
          </Button>
          <Button variant="book" size="story" onClick={onSaveStory}>
            <Save className="w-5 h-5" />
            Save Story
          </Button>
          <Button variant="choice" size="story" onClick={onBackToSelection}>
            <Sparkles className="w-5 h-5" />
            Try Another Story
          </Button>
        </div>
      </div>
    </div>
  );
};