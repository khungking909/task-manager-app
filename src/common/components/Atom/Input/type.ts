export interface InputProps {
  readonly placeholder?: string;
  readonly prefix?: React.ReactNode;
  readonly suffix?: React.ReactNode;
  readonly variant?: 'rounded' | 'underline' | 'default' | 'pill';
  readonly disabled?: boolean;
  readonly outline?: boolean;
  readonly errorMessage?: string;
  readonly dropdown?: React.ReactNode;
  readonly bgColor?: 'transparent' | 'white' | 'gray' | 'black';
  readonly fullWidth?: boolean;
  readonly defaultValue?: string;
  readonly value?: string;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readonly onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readonly onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  readonly onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  readonly onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  readonly onEnter?: () => void;
  readonly onClear?: () => void;
  readonly type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'search';
  readonly autoComplete?: string;
  readonly onClickSuffix?: () => void;
  readonly onClickPrefix?: () => void;
}
