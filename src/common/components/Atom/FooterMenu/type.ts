export interface FooterMenuItem {
  readonly name: string;
  readonly url: string;
}

export interface FooterMenuProps {
  readonly items: FooterMenuItem[];
  readonly title: string;
}
