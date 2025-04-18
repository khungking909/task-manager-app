import { FormProps } from '@components/Atom/Form/type';

const Form = ({ action, children, ...props }: FormProps) => {
  return (
    <form action={action} {...props}>
      {children}
    </form>
  );
};

export { Form };
