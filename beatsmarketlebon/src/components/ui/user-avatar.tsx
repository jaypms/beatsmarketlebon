import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
  name: string
  imageUrl?: string | null
  className?: string
}

export function UserAvatar({ name, imageUrl, className }: UserAvatarProps) {
  const getInitials = (fullName: string) => {
    const names = fullName.trim().split(" ")
    const initials = names.map((n) => n[0].toUpperCase())
    return initials.slice(0, 2).join("")
  }

  return (
    <Avatar className={className}>
      {imageUrl ? (
        <AvatarImage src={imageUrl} alt={name} />
      ) : (
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      )}
    </Avatar>
  )
}
