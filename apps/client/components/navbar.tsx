'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { BeakerIcon } from '@heroicons/react/24/solid';
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  PlusCircleIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const session = useSession();

  return (
    <div className="px-3 py-1 flex items-center justify-between">
      {/* left section */}
      <div className="flex items-center">
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <BeakerIcon className="h-6 w-6 text-blue-500 mr-3" />
                <p className="text-sm">Top Interview Questions</p>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open Drawer</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <ArrowLeftCircle className="h-4 w-4 text-blue-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Prev Question</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <ArrowRightCircle className="h-4 w-4 text-blue-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Next Question</p>
            </TooltipContent>
          </Tooltip>
        </div>
        {session.data && (
          <div className="ml-10">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <PlusCircleIcon className="h-5 w-5 mr-3 text-blue-500" />
                  <p>Add</p>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add Question</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}
      </div>

      {/* Right section */}
      <div>
        {session.data ? (
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage
                src={`${session.data?.user?.image}`}
                alt="@shadcn"
                height={20}
                width={20}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button variant="outline" onClick={() => signOut()}>
              Sign Out
            </Button>
          </div>
        ) : (
          <div>
            <Button
              variant="outline"
              onClick={async () => {
                await signIn('github');
              }}
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
