import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  CreditCard, 
  PiggyBank,
  AlertTriangle,
  BarChart3,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const spendingData = [
  { month: 'Jan', spending: 2400, budget: 3000, income: 4500 },
  { month: 'Feb', spending: 2800, budget: 3000, income: 4500 },
  { month: 'Mar', spending: 2200, budget: 3000, income: 4800 },
  { month: 'Apr', spending: 3100, budget: 3000, income: 4500 },
  { month: 'May', spending: 2700, budget: 3000, income: 4700 },
  { month: 'Jun', spending: 2500, budget: 3000, income: 4600 },
];

const categoryData = [
  { name: 'Food', value: 800, color: 'hsl(var(--primary))' },
  { name: 'Transportation', value: 400, color: 'hsl(var(--secondary))' },
  { name: 'Entertainment', value: 300, color: 'hsl(var(--warning))' },
  { name: 'Utilities', value: 200, color: 'hsl(var(--muted-foreground))' },
  { name: 'Shopping', value: 600, color: 'hsl(var(--destructive))' },
];

const goals = [
  { id: 1, name: 'Emergency Fund', target: 10000, current: 6500, progress: 65 },
  { id: 2, name: 'Vacation', target: 3000, current: 1200, progress: 40 },
  { id: 3, name: 'New Car', target: 20000, current: 8500, progress: 42.5 },
];

const recentTransactions = [
  { id: 1, description: 'Grocery Store', amount: -89.32, category: 'Food', date: '2024-01-15', type: 'expense' },
  { id: 2, description: 'Salary Deposit', amount: 4500, category: 'Income', date: '2024-01-14', type: 'income' },
  { id: 3, description: 'Gas Station', amount: -45.20, category: 'Transportation', date: '2024-01-14', type: 'expense' },
  { id: 4, description: 'Netflix Subscription', amount: -15.99, category: 'Entertainment', date: '2024-01-13', type: 'expense' },
];

const Dashboard = () => {
  const totalBalance = 15420.50;
  const monthlyIncome = 4600;
  const monthlyExpenses = 2500;
  const budgetRemaining = 500;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financial Dashboard</h1>
          <p className="text-muted-foreground">AI-powered insights for your financial future</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
          <TrendingUp className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-card to-muted/20 shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${totalBalance.toLocaleString()}</div>
            <div className="flex items-center text-xs text-success">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-muted/20 shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">${monthlyIncome.toLocaleString()}</div>
            <div className="flex items-center text-xs text-success">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +5.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-muted/20 shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            <CreditCard className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">${monthlyExpenses.toLocaleString()}</div>
            <div className="flex items-center text-xs text-destructive">
              <ArrowDownLeft className="w-3 h-3 mr-1" />
              -3.1% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-muted/20 shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Remaining</CardTitle>
            <PiggyBank className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">${budgetRemaining.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              83% of budget used
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-card border-0">
          <CardHeader>
            <CardTitle>Spending Trends</CardTitle>
            <CardDescription>Monthly spending vs budget analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={spendingData}>
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
                  dataKey="spending" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="budget" 
                  stroke="hsl(var(--destructive))" 
                  strokeDasharray="5 5"
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle>Expense Categories</CardTitle>
            <CardDescription>Current month breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    {category.name}
                  </div>
                  <span className="font-medium">${category.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goals and Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Financial Goals
            </CardTitle>
            <CardDescription>Track your progress towards financial milestones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{goal.name}</span>
                  <span className="text-sm text-muted-foreground">
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <div className="text-xs text-muted-foreground text-right">
                  {goal.progress}% complete
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest account activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.type === 'income' ? 'bg-success' : 'bg-destructive'
                    }`} />
                    <div>
                      <p className="font-medium text-sm">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium text-sm ${
                      transaction.type === 'income' ? 'text-success' : 'text-destructive'
                    }`}>
                      {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="shadow-financial border border-primary/20 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <BarChart3 className="w-5 h-5" />
            AI Financial Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="font-medium text-sm">Budget Alert</span>
              </div>
              <p className="text-sm text-muted-foreground">
                You're 83% through your monthly budget with 8 days remaining. Consider reducing discretionary spending.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="font-medium text-sm">Savings Opportunity</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on your spending patterns, you could save an additional $200/month by optimizing subscriptions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;