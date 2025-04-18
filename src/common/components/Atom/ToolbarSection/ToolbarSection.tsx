import { FiveColumns } from '@components/Atom/Icon/icons/FiveColumns';
import { FourColumns } from '@components/Atom/Icon/icons/FourColumns';
import { HamburgerColumns } from '@components/Atom/Icon/icons/HamburgerColumns';
import { ThreeColumns } from '@components/Atom/Icon/icons/ThreeColumns';
import { TwoColumns } from '@components/Atom/Icon/icons/TwoColumns';
import useScreenSize from '@hooks/useScreenSize';
import { useMemo } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import toolbarSectionModuleClass from './ToolbarSection.module.scss';
import { ToolbarSectionProps } from './type';

const LIST_ICON = [
  { Icon: FiveColumns, id: 5 },
  { Icon: FourColumns, id: 4 },
  { Icon: ThreeColumns, id: 3 },
  { Icon: TwoColumns, id: 2 },
  { Icon: HamburgerColumns, id: 1 },
];

const ToolbarSection = ({ selected = 1, total = 5, onClickItem }: ToolbarSectionProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  const listRender = useMemo(() => {
    return LIST_ICON.filter((item) => item.id <= total);
  }, [total]);

  const onClickToolbarItem = (id: number) => {
    if (onClickItem) {
      onClickItem(id);
    }
  };

  return (
    <div className={toolbarSectionModuleClass.toobar__section}>
      {listRender.map((item, index) => {
        if (item.id <= total) {
          return (
            <item.Icon
              key={item.id}
              box
              boxSize={isMobile ? 'medium' : 'large'}
              onClick={() => onClickToolbarItem(item.id)}
              className={arrayToString([
                toolbarSectionModuleClass.toobar__section__item,
                index === Setting.DIGIT_0 ? toolbarSectionModuleClass.first__item : '',
                index === total - Setting.DIGIT_1 ? toolbarSectionModuleClass.last__item : '',
              ])}
              boxColor={selected === item.id ? 'warning' : 'gray'}
            />
          );
        }
      })}
    </div>
  );
};

export { ToolbarSection };
