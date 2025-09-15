import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  Download,
  Calendar,
  DollarSign,
  Target,
  AlertTriangle,
  Brain
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

const monthlyTrends = [
  { month: 'Jan', income: 4500, expenses: 2400, savings: 2100, predicted: 2200 },
  { month: 'Feb', income: 4500, expenses: 2800, savings: 1700, predicted: 2300 },
  { month: 'Mar', income: 4800, expenses: 2200, savings: 2600, predicted: 2400 },
  { month: 'Apr', income: 4500, expenses: 3100, savings: 1400, predicted: 2500 },
  { month: 'May', income: 4700, expenses: 2700, savings: 2000, predicted: 2600 },
  { month: 'Jun', income: 4600, expenses: 2500, savings: 2100, predicted: 2700 },
  { month: 'Jul', income: 4600, expenses: 0, savings: 0, predicted: 2800 },
  { month: 'Aug', income: 4600, expenses: 0, savings: 0, predicted: 2900 },
];

const categorySpending = [
  { category: 'Food', amount: 800, budget: 900, variance: -11.1 },
  { category: 'Transportation', amount: 400, budget: 350, variance: 14.3 },
  { category: 'Entertainment', amount: 300, budget: 400, variance: -25.0 },
  { category: 'Utilities', amount: 200, budget: 220, variance: -9.1 },
  { category: 'Shopping', amount: 600, budget: 500, variance: 20.0 },
  { category: 'Healthcare', amount: 150, budget: 200, variance: -25.0 },
];

const spendingPatterns = [
  { name: 'Weekdays', value: 65, color: 'hsl(var(--primary))' },
  { name: 'Weekends', value: 35, color: 'hsl(var(--secondary))' },
];

const predictiveInsights = [
  {
    type: 'warning',
    title: 'Budget Overspend Alert',
    description: 'Transportation spending is 14% over budget this month',
    action: 'Consider carpooling or using public transport',
    confidence: 87
  },
  {
    type: 'success', 
    title: 'Savings Opportunity',
    description: 'Entertainment spending is 25% under budget',
    action: 'You could allocate $100 more to your vacation fund',
    confidence: 95
  },
  {
    type: 'info',
    title: 'Seasonal Pattern Detected',
    description: 'Food spending typically increases 15% in summer months',
    action: 'Consider adjusting your July budget accordingly',
    confidence: 78
  },
];

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Insights</h1>
          <p className="text-muted-foreground">AI-powered financial analytics and predictions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Range
          </Button>
          <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Financial Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Monthly Income</CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">$4,583</div>
                <p className="text-xs text-success">+2.3% vs last quarter</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Monthly Expenses</CardTitle>
                <TrendingDown className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">$2,625</div>
                <p className="text-xs text-success">-5.1% vs last quarter</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
                <Target className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">42.7%</div>
                <p className="text-xs text-success">Above recommended 20%</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Budget Efficiency</CardTitle>
                <BarChart3 className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">87.2%</div>
                <p className="text-xs text-muted-foreground">Room for optimization</p>
              </CardContent>
            </Card>
          </div>

          {/* Income vs Expenses Trend */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Income vs Expenses Trend</CardTitle>
              <CardDescription>6-month financial overview with savings analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={monthlyTrends}>
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
                  <Area 
                    type="monotone" 
                    dataKey="income" 
                    stackId="1" 
                    stroke="hsl(var(--success))" 
                    fill="hsl(var(--success))" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="expenses" 
                    stackId="2" 
                    stroke="hsl(var(--destructive))" 
                    fill="hsl(var(--destructive))" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="savings" 
                    stackId="3" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Analysis */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Budget vs Actual Spending</CardTitle>
              <CardDescription>Category-wise performance analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categorySpending}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }} 
                  />
                  <Bar dataKey="budget" fill="hsl(var(--muted))" opacity={0.6} />
                  <Bar dataKey="amount" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Predictive Spending Analysis
              </CardTitle>
              <CardDescription>AI-powered predictions for future spending trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyTrends}>
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
                    dataKey="expenses" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                    name="Actual Expenses"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="hsl(var(--warning))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 3 }}
                    name="Predicted Expenses"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-card border-0 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Next Month Prediction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">$2,800</div>
                <p className="text-sm text-muted-foreground mb-4">Predicted expenses for July</p>
                <Badge className="bg-success text-success-foreground">95% Confidence</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
              <CardHeader>
                <CardTitle className="text-lg">Savings Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success mb-2">$1,800</div>
                <p className="text-sm text-muted-foreground mb-4">Projected monthly savings</p>
                <Badge className="bg-primary text-primary-foreground">88% Confidence</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20">
              <CardHeader>
                <CardTitle className="text-lg">Goal Achievement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning mb-2">Oct 2024</div>
                <p className="text-sm text-muted-foreground mb-4">Emergency fund completion</p>
                <Badge className="bg-secondary text-secondary-foreground">82% Confidence</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Spending Patterns</CardTitle>
                <CardDescription>Weekday vs Weekend spending behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={spendingPatterns}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {spendingPatterns.map((entry, index) => (
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
                  </RechartsPieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  {spendingPatterns.map((pattern, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: pattern.color }}
                        />
                        {pattern.name}
                      </div>
                      <span className="font-medium">{pattern.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Monthly Trends</CardTitle>
                <CardDescription>Seasonal spending patterns detected</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-medium text-primary mb-2">Summer Pattern</h4>
                  <p className="text-sm text-muted-foreground">
                    Entertainment spending increases 22% during June-August
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-warning/5 border border-warning/20">
                  <h4 className="font-medium text-warning mb-2">Holiday Pattern</h4>
                  <p className="text-sm text-muted-foreground">
                    Shopping expenses typically spike 35% in November-December
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                  <h4 className="font-medium text-success mb-2">Tax Season</h4>
                  <p className="text-sm text-muted-foreground">
                    Savings rate improves 15% after tax refunds in March-April
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card className="shadow-financial border border-primary/20 bg-gradient-to-r from-primary/5 to-primary-light/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Brain className="w-5 h-5" />
                AI-Powered Financial Insights
              </CardTitle>
              <CardDescription>
                Personalized recommendations based on your spending patterns and financial goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {predictiveInsights.map((insight, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        insight.type === 'warning' ? 'bg-warning/10 text-warning' :
                        insight.type === 'success' ? 'bg-success/10 text-success' :
                        'bg-primary/10 text-primary'
                      }`}>
                        {insight.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> :
                         insight.type === 'success' ? <TrendingUp className="w-5 h-5" /> :
                         <BarChart3 className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{insight.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {insight.confidence}% confidence
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {insight.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-primary">Recommendation:</span>
                          <span className="text-xs text-muted-foreground">{insight.action}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;