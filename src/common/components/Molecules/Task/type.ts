export interface TaskProps {
  readonly name: string;
  readonly description: string;
  readonly status: 'todo' | 'in-progress' | 'done';
  readonly onClickEdit?: () => void;
  readonly onClickDelete?: () => void;
}
