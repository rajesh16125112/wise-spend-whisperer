import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  Filter, 
  Receipt, 
  Bot,
  Calendar,
  DollarSign,
  Tag
} from "lucide-react";

const categories = [
  { id: 'food', name: 'Food & Dining', color: 'bg-primary' },
  { id: 'transportation', name: 'Transportation', color: 'bg-secondary' },
  { id: 'entertainment', name: 'Entertainment', color: 'bg-warning' },
  { id: 'utilities', name: 'Utilities', color: 'bg-muted-foreground' },
  { id: 'shopping', name: 'Shopping', color: 'bg-destructive' },
  { id: 'healthcare', name: 'Healthcare', color: 'bg-primary-light' },
  { id: 'education', name: 'Education', color: 'bg-secondary-light' },
];

const mockTransactions = [
  {
    id: 1,
    description: "Whole Foods Market",
    amount: 89.32,
    category: "food",
    date: "2024-01-15",
    aiSuggested: true,
    confidence: 95
  },
  {
    id: 2,
    description: "Uber Ride",
    amount: 24.50,
    category: "transportation",
    date: "2024-01-15",
    aiSuggested: true,
    confidence: 98
  },
  {
    id: 3,
    description: "Netflix",
    amount: 15.99,
    category: "entertainment",
    date: "2024-01-14",
    aiSuggested: true,
    confidence: 100
  },
  {
    id: 4,
    description: "Target Store",
    amount: 67.84,
    category: "shopping",
    date: "2024-01-14",
    aiSuggested: false,
    confidence: null
  },
];

const ExpenseTracker = () => {
  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: "",
    category: "",
    date: new Date().toISOString().split('T')[0]
  });

  const handleAddExpense = () => {
    console.log("Adding expense:", newExpense);
    // Reset form
    setNewExpense({
      description: "",
      amount: "",
      category: "",
      date: new Date().toISOString().split('T')[0]
    });
  };

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Expense Tracker</h1>
          <p className="text-muted-foreground">AI-powered expense categorization and tracking</p>
        </div>
      </div>

      <Tabs defaultValue="add" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="add">Add Expense</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="add">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                Add New Expense
              </CardTitle>
              <CardDescription>
                Add expenses manually or let AI categorize them automatically
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      placeholder="e.g., Coffee at Starbucks"
                      value={newExpense.description}
                      onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount ($)</Label>
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={newExpense.amount}
                      onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={newExpense.category} onValueChange={(value) => setNewExpense({...newExpense, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${category.color}`} />
                              {category.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newExpense.date}
                      onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                    />
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-primary/5 to-primary-light/5 border border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary text-lg">
                      <Bot className="w-5 h-5" />
                      AI Categorization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-card border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-success" />
                          <span className="font-medium text-sm">Smart Detection</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          AI automatically categorizes expenses based on merchant names and spending patterns
                        </p>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-card border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-warning" />
                          <span className="font-medium text-sm">Learning Mode</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          The system learns from your corrections to improve future categorization
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-card border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="font-medium text-sm">Confidence Score</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Each categorization comes with a confidence score for transparency
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={handleAddExpense}
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Expense
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Bot className="w-4 h-4 mr-2" />
                  Auto-Categorize
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Manage and review your expense history</CardDescription>
              <div className="flex gap-3 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search transactions..." className="pl-10" />
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockTransactions.map((transaction) => {
                  const categoryInfo = getCategoryInfo(transaction.category);
                  return (
                    <div key={transaction.id} className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3">
                            <Receipt className="w-5 h-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <div className="flex items-center gap-3 mt-1">
                                <div className="flex items-center gap-2">
                                  <div className={`w-3 h-3 rounded-full ${categoryInfo.color}`} />
                                  <span className="text-sm text-muted-foreground">{categoryInfo.name}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{transaction.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          {transaction.aiSuggested && (
                            <Badge variant="outline" className="border-primary text-primary">
                              <Bot className="w-3 h-3 mr-1" />
                              AI: {transaction.confidence}%
                            </Badge>
                          )}
                          <span className="font-semibold text-destructive">${transaction.amount.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
              <CardDescription>Manage and customize your expense categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <Card key={category.id} className="border border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full ${category.color}`} />
                        <div className="flex-1">
                          <h3 className="font-medium">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 20) + 5} transactions this month
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${Math.floor(Math.random() * 800) + 200}</p>
                          <p className="text-xs text-muted-foreground">total</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExpenseTracker;