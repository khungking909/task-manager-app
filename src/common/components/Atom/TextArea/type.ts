export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  readonly label?: string;
  readonly placeholder?: string;
  readonly disable?: boolean;
  readonly errorMessage?: string;
  readonly variant?: 'contained' | 'line';
}
