export interface AvatarProps {
  userInitials?: string;
}

export function Avatar({ userInitials }: AvatarProps) {
  return (
    userInitials !== undefined && (
      <div className="btn btn-ghost btn-circle">
        <div className="avatar placeholder">
          <div className="rounded-full w-12">
            <span data-testid="user-initials">{userInitials}</span>
          </div>
        </div>
      </div>
    )
  );
}

export default Avatar;
