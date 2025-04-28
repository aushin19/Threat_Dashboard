
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { ThreatDetectionPanel } from '@/components/dashboard/ThreatDetectionPanel';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LayoutDashboard,
  Shield,
  AlertCircle,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';

const Index = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Scans"
            value="2,543"
            description="Apr 1 - Apr 28, 2025"
            icon={<LayoutDashboard size={20} />}
            trend={{ value: 12, positive: true }}
          />
          <StatCard
            title="Threats Detected"
            value="45"
            description="Apr 1 - Apr 28, 2025"
            icon={<AlertCircle size={20} />}
            trend={{ value: 5, positive: false }}
          />
          <StatCard
            title="Protection Score"
            value="97%"
            description="System security rating"
            icon={<Shield size={20} />}
            trend={{ value: 2, positive: true }}
          />
          <StatCard
            title="Resolved Issues"
            value="38"
            description="Apr 1 - Apr 28, 2025"
            icon={<CheckCircle size={20} />}
            trend={{ value: 15, positive: true }}
          />
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <ThreatDetectionPanel />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="backdrop-blur-sm bg-card/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Recent Alerts</CardTitle>
              <CardDescription>
                Most recent security alerts in your system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 border border-border rounded-lg">
                    <div className="h-10 w-10 bg-danger bg-opacity-20 rounded-full flex items-center justify-center text-danger">
                      <AlertCircle size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Unauthorized access attempt</h4>
                      <p className="text-xs text-muted-foreground">3 minutes ago</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">View all alerts</Button>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-sm bg-card/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">System Status</CardTitle>
              <CardDescription>
                Current health and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">CPU Usage</span>
                  <span className="text-sm font-medium">24%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="bg-danger h-full" style={{ width: '24%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Memory Usage</span>
                  <span className="text-sm font-medium">67%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="bg-danger h-full" style={{ width: '67%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Disk Space</span>
                  <span className="text-sm font-medium">46%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="bg-danger h-full" style={{ width: '46%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Network Load</span>
                  <span className="text-sm font-medium">32%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="bg-danger h-full" style={{ width: '32%' }}></div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">View detailed report</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
