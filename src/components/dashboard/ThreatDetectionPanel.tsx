
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import CodeSnippet from './CodeSnippet';
import algos from "@/utils/algo.json"

type ThreatAlgorithm = {
  id: string;
  name: string;
  status: 'active' | 'inactive';
};

export function ThreatDetectionPanel() {
  const [algoData, setAlgoData] = useState(algos)

  // useEffect(() => {
  //   const fetchAlgoData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/algo");
  //       const data = await res.json();
  //       setAlgoData(data.data);
  //     } catch (error) {

  //     }
  //   }

  //   fetchAlgoData();
  // }, [])

  const algorithms: ThreatAlgorithm[] = algoData;

  const handleShowCode = (id: String) => {
    const codeSnippet = algoData.find(models => models.id === id).code_snippet;
    return codeSnippet
  }

  return (
    <Card className="w-full backdrop-blur-sm bg-card/30">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-danger">
          AI/ML-based threats
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">AI/ML algorithms management</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Sensor ID</label>
              <div className="relative">
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-danger focus:ring-offset-2">
                  <option value="all">All</option>
                  <option value="1">Sensor 1</option>
                  <option value="2">Sensor 2</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">General search</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search algorithms..."
                  className="pl-8 w-full focus:border-danger focus:ring-danger"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 px-4 text-muted-foreground"></th>
                  <th className="py-3 px-4 text-muted-foreground">ALGORITHM</th>
                  <th className="py-3 px-4 text-muted-foreground text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {algorithms.map((algorithm) => (
                  <tr key={algorithm.id} className="border-b border-border">
                    <td className="py-3 px-4">
                      <div className="h-5 w-5 text-muted-foreground flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4L3 19H21L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">{algorithm.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center space-x-2">
                        {/* <Button onClick={()=>handleShowCode(algorithm.id)} variant="outline" size="sm">Show Code</Button> */}
                        <CodeSnippet code={handleShowCode(algorithm.id)}/>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
