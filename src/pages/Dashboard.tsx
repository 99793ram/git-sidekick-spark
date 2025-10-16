import Navigation from "@/components/Navigation";
import DocumentScanner from "@/components/DocumentScanner";
import StatsCard from "@/components/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, FileText, Receipt, Truck } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - 2 cols */}
          <div className="space-y-8 lg:col-span-2">
            {/* Authorization Key */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle>Your Authorization Key</CardTitle>
                </div>
                <CardDescription>
                  Use this key to access our document scanning services. Keep it safe.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Verify Your Session</p>
                  <p className="text-sm text-muted-foreground">
                    For security, you must verify your session to view your authorization key.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Input placeholder="6-Digit Code" className="flex-1" />
                  <Button>Verify</Button>
                </div>
                <Button variant="link" className="h-auto p-0 text-sm">
                  Send Verification Code
                </Button>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              <StatsCard label="USED" value={0} />
              <StatsCard label="REMAINING" value={7} color="text-blue-600" />
              <StatsCard label="TOTAL" value={7} color="text-emerald-600" />
            </div>

            {/* Recent Scans */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Scans</CardTitle>
                <CardDescription>Your recent document scanning activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Resume Scans</p>
                      <p className="text-sm text-muted-foreground">Last used today</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <Receipt className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Invoice Scans</p>
                      <p className="text-sm text-muted-foreground">Never used</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">0</span>
                </div>
                
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">Challan Scans</p>
                      <p className="text-sm text-muted-foreground">Never used</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-orange-600">0</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - 1 col */}
          <div className="space-y-8">
            <DocumentScanner />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
