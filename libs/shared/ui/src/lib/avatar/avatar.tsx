export interface AvatarProps {
  userInitials?: string;
}

export function Avatar({
  userInitials,
  children,
}: React.PropsWithChildren<AvatarProps>) {
  return (
    userInitials !== undefined && (
      <div className="dropdown dropdown-end">
        <div tabIndex={0}>
          <div className="btn btn-ghost btn-circle">
            <div className="avatar placeholder">
              <div className="rounded-full w-12">
                <span data-testid="user-initials">{userInitials}</span>
              </div>
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          {children}
        </ul>
      </div>
    )
  );
}

export default Avatar;
