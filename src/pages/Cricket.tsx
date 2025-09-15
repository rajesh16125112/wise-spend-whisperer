import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Cricket = () => {
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);
  const [balls, setBalls] = useState(0);
  const [lastShot, setLastShot] = useState('');
  const [isGameActive, setIsGameActive] = useState(false);

  const handleShot = (runs: number, shotType: string) => {
    if (!isGameActive) return;
    
    setScore(prev => prev + runs);
    setLastShot(shotType);
    
    // Increment ball count
    setBalls(prev => {
      const newBalls = prev + 1;
      if (newBalls === 6) {
        setOvers(prevOvers => prevOvers + 1);
        return 0;
      }
      return newBalls;
    });
  };

  const handleWicket = () => {
    if (!isGameActive) return;
    
    setWickets(prev => prev + 1);
    setLastShot('OUT!');
    
    setBalls(prev => {
      const newBalls = prev + 1;
      if (newBalls === 6) {
        setOvers(prevOvers => prevOvers + 1);
        return 0;
      }
      return newBalls;
    });

    if (wickets >= 9) {
      setIsGameActive(false);
    }
  };

  const startNewGame = () => {
    setScore(0);
    setWickets(0);
    setOvers(0);
    setBalls(0);
    setLastShot('');
    setIsGameActive(true);
  };

  const formatOvers = () => {
    return `${overs}.${balls}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Cricket Stadium Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-radial from-green-200 via-green-100 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4 animate-fade-in">
            🏏 Cricket Champions
          </h1>
          <p className="text-xl text-muted-foreground">
            Experience the thrill of cricket in your browser
          </p>
        </header>

        {/* Game Arena */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Scoreboard */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <CardTitle className="text-2xl text-center text-primary">
                  🏆 SCOREBOARD
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-6 text-center mb-8">
                  <div className="bg-gradient-to-b from-primary/10 to-primary/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">RUNS</h3>
                    <p className="text-4xl font-bold text-primary">{score}</p>
                  </div>
                  <div className="bg-gradient-to-b from-destructive/10 to-destructive/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">WICKETS</h3>
                    <p className="text-4xl font-bold text-destructive">{wickets}</p>
                  </div>
                  <div className="bg-gradient-to-b from-secondary/10 to-secondary/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">OVERS</h3>
                    <p className="text-4xl font-bold text-secondary-foreground">{formatOvers()}</p>
                  </div>
                </div>

                {/* Last Shot Display */}
                {lastShot && (
                  <div className="text-center mb-6">
                    <Badge variant="outline" className="text-lg px-4 py-2 animate-scale-in">
                      Last: {lastShot}
                    </Badge>
                  </div>
                )}

                {/* Cricket Field Visualization */}
                <div className="relative w-full h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-xl border-4 border-green-300 overflow-hidden">
                  <div className="absolute inset-4 border-2 border-white rounded-lg opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brown-200 rounded-full border-4 border-white"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-8 bg-yellow-400"></div>
                  
                  {/* Fielders */}
                  <div className="absolute top-4 left-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-12 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-12 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Game Controls */}
          <div className="space-y-6">
            {/* Game Status */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">
                  {!isGameActive ? '🎮 Game Status' : '🔥 Live Game'}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {!isGameActive ? (
                  <Button 
                    onClick={startNewGame}
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold py-4 animate-pulse"
                  >
                    🚀 Start New Game
                  </Button>
                ) : (
                  <Badge variant="default" className="text-lg px-4 py-2 bg-green-500">
                    🟢 Game Active
                  </Badge>
                )}
              </CardContent>
            </Card>

            {/* Batting Controls */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">🏏 Batting Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    onClick={() => handleShot(1, '1 Run')}
                    disabled={!isGameActive}
                    variant="outline"
                    className="hover-scale"
                  >
                    1️⃣ Single
                  </Button>
                  <Button 
                    onClick={() => handleShot(2, '2 Runs')}
                    disabled={!isGameActive}
                    variant="outline"
                    className="hover-scale"
                  >
                    2️⃣ Double
                  </Button>
                  <Button 
                    onClick={() => handleShot(3, '3 Runs')}
                    disabled={!isGameActive}
                    variant="outline"
                    className="hover-scale"
                  >
                    3️⃣ Triple
                  </Button>
                  <Button 
                    onClick={() => handleShot(4, 'FOUR!')}
                    disabled={!isGameActive}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover-scale"
                  >
                    4️⃣ FOUR!
                  </Button>
                </div>
                
                <Button 
                  onClick={() => handleShot(6, 'SIX!!!')}
                  disabled={!isGameActive}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 hover-scale"
                >
                  6️⃣ MAXIMUM SIX!!!
                </Button>
                
                <Button 
                  onClick={handleWicket}
                  disabled={!isGameActive}
                  variant="destructive"
                  className="w-full hover-scale"
                >
                  ❌ WICKET!
                </Button>
              </CardContent>
            </Card>

            {/* Game Stats */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">📊 Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Run Rate:</span>
                    <span className="font-bold">
                      {overs > 0 ? (score / (overs + balls/6)).toFixed(2) : '0.00'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Balls Faced:</span>
                    <span className="font-bold">{overs * 6 + balls}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wickets Left:</span>
                    <span className="font-bold">{10 - wickets}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Game Rules */}
        <Card className="mt-8 bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center">📚 How to Play</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl">🎯</div>
                <h3 className="font-semibold">Objective</h3>
                <p className="text-sm text-muted-foreground">Score as many runs as possible before losing 10 wickets</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🏏</div>
                <h3 className="font-semibold">Controls</h3>
                <p className="text-sm text-muted-foreground">Choose your shots wisely - bigger shots have higher risk!</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🏆</div>
                <h3 className="font-semibold">Victory</h3>
                <p className="text-sm text-muted-foreground">Aim for the highest score and become the Cricket Champion!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cricket;