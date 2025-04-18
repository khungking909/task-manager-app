import { Image } from '@components/Atom/Image';
import { arrayToString } from 'src/common/untils/arrayToString';
import avatarModuleClass from './Avatar.module.scss';
import { AvatarProps } from './type';

const Avatar = ({ image, alt, size = 'medium' }: AvatarProps) => {
  return (
    <div className={arrayToString([avatarModuleClass['avatar'], avatarModuleClass[`size__${size}`]])}>
      <Image src={image} alt={alt} />
    </div>
  );
};

export { Avatar };
