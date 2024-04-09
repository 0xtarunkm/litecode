import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Description from './description';
import CodeEditor from './editor';
import Output from './Output';

export default function Workspace({ problem }: { problem: any }) {
  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
        <ResizablePanel defaultSize={50}>
          <div className="h-[calc(100vh-55px)] overflow-y-auto text-sm">
            <Description desc={problem?.description} />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical" className="h-full">
            <ResizablePanel defaultSize={75}>
              <div className="h-[calc(100vh-10px)]">
                <CodeEditor />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <div className="h-[calc(100vh-10px]">
                <Output />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
