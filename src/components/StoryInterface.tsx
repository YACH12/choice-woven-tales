import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { storyData, type StoryPath } from "@/data/storyData";
import { BookOpen, RotateCcw, Save, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const StoryInterface = () => {
  const [currentStepId, setCurrentStepId] = useState("start");
  const [storyPath, setStoryPath] = useState<StoryPath[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentStep = storyData[currentStepId];

  useEffect(() => {
    if (currentStep?.isEnding) {
      setIsComplete(true);
    }
  }, [currentStep]);

  const handleChoice = (choiceId: string, choiceText: string, nextStepId: string) => {
    if (isAnimating) return;
    
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

  const saveStory = () => {
    const savedStories = JSON.parse(localStorage.getItem("savedStories") || "[]");
    const newStory = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      path: storyPath,
      finalStep: currentStep,
      title: `Adventure #${savedStories.length + 1}`
    };
    
    savedStories.push(newStory);
    localStorage.setItem("savedStories", JSON.stringify(savedStories));
    
    toast({
      title: "Story Saved!",
      description: "Your adventure has been preserved for future reading.",
    });
  };

  if (isComplete) {
    return <CompletedStory 
      storyPath={storyPath} 
      finalStep={currentStep} 
      onStartOver={startOver}
      onSaveStory={saveStory}
    />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-story via-story-parchment to-story p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-story-text">Tale Weaver</h1>
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <p className="text-story-text/70 text-lg">Your choices shape the story</p>
          <div className="mt-4 flex items-center justify-center gap-2">
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
  storyPath: StoryPath[];
  finalStep: any;
  onStartOver: () => void;
  onSaveStory: () => void;
}

const CompletedStory = ({ storyPath, finalStep, onStartOver, onSaveStory }: CompletedStoryProps) => {
  return (
    <div className="min-h-screen bg-gradient-book p-4">
      <div className="max-w-4xl mx-auto">
        {/* Book Header */}
        <div className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-10 h-10 text-primary" />
            <h1 className="text-5xl font-bold text-story-text">Your Story</h1>
          </div>
          <p className="text-story-text/70 text-xl">A tale of choices and consequences</p>
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
                const step = storyData[path.stepId];
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
            Start New Adventure
          </Button>
          <Button variant="book" size="story" onClick={onSaveStory}>
            <Save className="w-5 h-5" />
            Save Story
          </Button>
        </div>
      </div>
    </div>
  );
};