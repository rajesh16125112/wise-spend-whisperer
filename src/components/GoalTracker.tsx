import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Target, 
  Plus, 
  TrendingUp, 
  Calendar,
  DollarSign,
  Edit,
  Trash2,
  CheckCircle
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    description: "Build 6 months of living expenses",
    target: 10000,
    current: 6500,
    deadline: "2024-12-31",
    category: "Security",
    priority: "high",
    monthlyContribution: 400,
    progress: [
      { month: 'Jan', amount: 5000 },
      { month: 'Feb', amount: 5400 },
      { month: 'Mar', amount: 5800 },
      { month: 'Apr', amount: 6200 },
      { month: 'May', amount: 6500 },
    ]
  },
  {
    id: 2,
    name: "Vacation Fund",
    description: "European trip for summer 2024",
    target: 3000,
    current: 1200,
    deadline: "2024-07-01",
    category: "Lifestyle",
    priority: "medium",
    monthlyContribution: 300,
    progress: [
      { month: 'Jan', amount: 600 },
      { month: 'Feb', amount: 900 },
      { month: 'Mar', amount: 1200 },
    ]
  },
  {
    id: 3,
    name: "New Car",
    description: "Down payment for electric vehicle",
    target: 20000,
    current: 8500,
    deadline: "2025-06-01",
    category: "Transportation",
    priority: "low",
    monthlyContribution: 500,
    progress: [
      { month: 'Jan', amount: 7000 },
      { month: 'Feb', amount: 7500 },
      { month: 'Mar', amount: 8000 },
      { month: 'Apr', amount: 8500 },
    ]
  },
  {
    id: 4,
    name: "Investment Portfolio",
    description: "Build diversified investment portfolio",
    target: 50000,
    current: 15000,
    deadline: "2026-12-31",
    category: "Investment",
    priority: "high",
    monthlyContribution: 800,
    progress: [
      { month: 'Jan', amount: 13000 },
      { month: 'Feb', amount: 13800 },
      { month: 'Mar', amount: 14600 },
      { month: 'Apr', amount: 15000 },
    ]
  },
];

const GoalTracker = () => {
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: "",
    description: "",
    target: "",
    deadline: "",
    category: "",
    monthlyContribution: ""
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getProgressPercentage = (current: number, target: number) => {
    return Math.round((current / target) * 100);
  };

  const getTimeRemaining = (deadline: string) => {
    const now = new Date();
    const end = new Date(deadline);
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Due today";
    if (diffDays === 1) return "1 day left";
    if (diffDays < 30) return `${diffDays} days left`;
    if (diffDays < 365) return `${Math.round(diffDays / 30)} months left`;
    return `${Math.round(diffDays / 365)} years left`;
  };

  const handleAddGoal = () => {
    console.log("Adding goal:", newGoal);
    setIsAddingGoal(false);
    setNewGoal({
      name: "",
      description: "",
      target: "",
      deadline: "",
      category: "",
      monthlyContribution: ""
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Goal Tracker</h1>
          <p className="text-muted-foreground">Track and achieve your financial milestones</p>
        </div>
        <Dialog open={isAddingGoal} onOpenChange={setIsAddingGoal}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add Goal
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Goal</DialogTitle>
              <DialogDescription>
                Set up a new financial goal to track your progress
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goal-name">Goal Name</Label>
                <Input
                  id="goal-name"
                  placeholder="e.g., Emergency Fund"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-description">Description</Label>
                <Input
                  id="goal-description"
                  placeholder="Brief description of your goal"
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="goal-target">Target Amount ($)</Label>
                  <Input
                    id="goal-target"
                    type="number"
                    placeholder="10000"
                    value={newGoal.target}
                    onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal-contribution">Monthly Contribution ($)</Label>
                  <Input
                    id="goal-contribution"
                    type="number"
                    placeholder="500"
                    value={newGoal.monthlyContribution}
                    onChange={(e) => setNewGoal({...newGoal, monthlyContribution: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-deadline">Target Date</Label>
                <Input
                  id="goal-deadline"
                  type="date"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={handleAddGoal} className="flex-1">
                  Create Goal
                </Button>
                <Button variant="outline" onClick={() => setIsAddingGoal(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Goals List */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-lg">Your Goals</CardTitle>
              <CardDescription>Track all your financial objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {goals.map((goal) => (
                <div 
                  key={goal.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    selectedGoal.id === goal.id 
                      ? 'border-primary bg-primary/5 shadow-md' 
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedGoal(goal)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{goal.name}</h3>
                      <Badge className={getPriorityColor(goal.priority)}>
                        {goal.priority}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>${goal.current.toLocaleString()}</span>
                        <span className="text-muted-foreground">${goal.target.toLocaleString()}</span>
                      </div>
                      <Progress value={getProgressPercentage(goal.current, goal.target)} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {getProgressPercentage(goal.current, goal.target)}% complete
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{goal.category}</span>
                      <span>{getTimeRemaining(goal.deadline)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Goal Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    {selectedGoal.name}
                  </CardTitle>
                  <CardDescription>{selectedGoal.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-card to-muted/20 border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-2xl font-bold text-primary">
                          ${selectedGoal.current.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">Current Amount</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-muted/20 border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8 text-secondary" />
                      <div>
                        <p className="text-2xl font-bold text-secondary">
                          ${(selectedGoal.target - selectedGoal.current).toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">Remaining</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-muted/20 border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-8 h-8 text-warning" />
                      <div>
                        <p className="text-2xl font-bold text-warning">
                          {Math.ceil((selectedGoal.target - selectedGoal.current) / selectedGoal.monthlyContribution)}
                        </p>
                        <p className="text-xs text-muted-foreground">Months to Goal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Chart */}
              <Card className="border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Progress Tracking</CardTitle>
                  <CardDescription>Monthly progress towards your goal</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={selectedGoal.progress}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)"
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="amount" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Goal Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-0 bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-success" />
                      <div>
                        <p className="font-medium text-success">On Track</p>
                        <p className="text-sm text-muted-foreground">
                          You're making great progress towards this goal
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium text-primary">
                          ${selectedGoal.monthlyContribution}/month
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Current contribution rate
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GoalTracker;