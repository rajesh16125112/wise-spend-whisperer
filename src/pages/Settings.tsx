import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Bell, 
  Shield, 
  Database,
  Bot,
  CreditCard,
  Download,
  Upload,
  Trash2
} from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your personal information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Financial Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Primary Currency</Label>
                    <Input id="currency" placeholder="USD" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input id="timezone" placeholder="EST (UTC-5)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome">Monthly Income</Label>
                    <Input id="monthlyIncome" type="number" placeholder="5000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budgetMethod">Budget Method</Label>
                    <Input id="budgetMethod" placeholder="50/30/20 Rule" />
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose what notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Budget Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when you approach budget limits
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Goal Milestones</Label>
                    <p className="text-sm text-muted-foreground">
                      Notifications for goal progress and achievements
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">
                      Weekly summary of your financial activity
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">AI Insights</Label>
                    <p className="text-sm text-muted-foreground">
                      AI-powered financial insights and recommendations
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Transaction Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Notifications for large or unusual transactions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                AI Configuration
              </CardTitle>
              <CardDescription>Customize your AI assistant behavior and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Auto-Categorization</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically categorize expenses using AI
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Predictive Analytics</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable AI-powered spending predictions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Smart Recommendations</Label>
                    <p className="text-sm text-muted-foreground">
                      Get personalized financial advice from AI
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Learning Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow AI to learn from your corrections
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">AI Model Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Categorization Model</span>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Accuracy: 96.7% | Last updated: 2 days ago
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Prediction Model</span>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Accuracy: 89.3% | Last updated: 1 week ago
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Data Management
              </CardTitle>
              <CardDescription>Import, export, and manage your financial data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-border">
                  <h3 className="font-medium mb-2">Data Export</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download your financial data in various formats
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Download className="w-4 h-4 mr-2" />
                      Export CSV
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Download className="w-4 h-4 mr-2" />
                      Export PDF
                    </Button>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-border">
                  <h3 className="font-medium mb-2">Data Import</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Import transactions from bank statements or other apps
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Upload className="w-4 h-4 mr-2" />
                    Import Data
                  </Button>
                </div>

                <div className="p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                  <h3 className="font-medium mb-2 text-destructive">Danger Zone</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete all your financial data. This action cannot be undone.
                  </p>
                  <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete All Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security and privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-border">
                  <h3 className="font-medium mb-2">Password</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Change your account password
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Change Password
                  </Button>
                </div>

                <div className="p-4 rounded-lg border border-border">
                  <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add an extra layer of security to your account
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2FA Status</span>
                    <Badge className="bg-warning text-warning-foreground">Not Enabled</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-border">
                  <h3 className="font-medium mb-2">Privacy Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Data Analytics</Label>
                        <p className="text-xs text-muted-foreground">
                          Share anonymized data to improve AI models
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Marketing Communications</Label>
                        <p className="text-xs text-muted-foreground">
                          Receive product updates and financial tips
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;