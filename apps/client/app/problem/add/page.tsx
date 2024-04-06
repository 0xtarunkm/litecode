'use client';

import { CornerDownLeft, ScreenShareIcon } from 'lucide-react';

import Editor from '@monaco-editor/react';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function Dashboard() {
  return (
    <div className="grid h-screen w-full">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Add Problem</h1>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <ScreenShareIcon className="size-3.5" />
            Preview
          </Button>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto px-4 my-1 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative hidden flex-col items-start gap-8 md:flex"
            x-chunk="dashboard-03-chunk-0"
          >
            <form className="grid w-full items-start gap-6">
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Problem Information
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Title" />
                  <Label htmlFor="model">Languages</Label>
                  <Select>
                    <SelectTrigger
                      id="model"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="explorer">
                        <div className="flex items-start gap-3">
                          <p>Javascript</p>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          {/* will support other languages soon */}
                          <p>
                            CPP{' '}
                            <span className="text-sm">(will support soon)</span>
                          </p>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Test Cases
                </legend>
                <div className="grid gap-3">
                  <Editor
                    height={`calc(100vh - 30rem)`}
                    width={`100%`}
                    defaultLanguage="javascript"
                    defaultValue={`// Write your testcase file here.`}
                    className="min-h-[28.5rem] resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 mb-2">
            <Editor
              height={`calc(100vh - 30rem)`}
              width={`100%`}
              defaultLanguage="javascript"
              defaultValue={`// Write your boilerplate code here.`}
              className="min-h-[20.5rem] resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div className="flex-1" />
            <form
              className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              x-chunk="dashboard-03-chunk-1"
            >
              <Label htmlFor="message" className="sr-only">
                Description
              </Label>
              <Editor
                height={`calc(100vh - 30rem)`}
                width={`100%`}
                defaultLanguage="markdown"
                defaultValue="## Provide the problem description here in markdown format."
                className="min-h-[20.5rem] resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <Button type="submit" size="sm" className="ml-auto gap-1.5">
                  Add Problem
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
