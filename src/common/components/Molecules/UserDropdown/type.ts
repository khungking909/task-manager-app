export interface UserDropdownProps {
  readonly name: string;
  readonly email: string;
  readonly avatar: string;
  readonly onLogout?: () => void;
}
