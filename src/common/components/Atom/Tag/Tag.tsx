import { arrayToString } from 'src/common/untils/arrayToString';
import tagModuleClass from './Tag.module.scss';
import { TagProps } from './type';

const Tag = ({ roundness = 'default', children, color, ...props }: TagProps) => {
  return (
    <div
      className={arrayToString([
        tagModuleClass.tag,
        tagModuleClass[roundness],
        tagModuleClass[`color__${color}`],
      ])}
      {...props}
    >
      <h6 className={tagModuleClass.content}>{children}</h6>
    </div>
  );
};

export { Tag };
