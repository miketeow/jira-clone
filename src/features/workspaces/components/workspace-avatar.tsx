import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface WorkspaceAvatarProps {
  image?: string;
  name: string;
  classname?: string;
}

export const WorkspaceAvatar = ({
  image,
  name,
  classname,
}: WorkspaceAvatarProps) => {
  if (image) {
    return (
      <div
        className={cn("relative size-10 overflow-hidden rounded-md", classname)}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <Avatar className={cn("size-10 rounded-md", classname)}>
      <AvatarFallback className="rounded-md bg-blue-600 text-lg font-semibold uppercase text-white">
        {name[0]}
      </AvatarFallback>
    </Avatar>
  );
};
