import { Box, Tag, TagProps, Typography } from '@components/Atom';
import { Edit } from '@components/Atom/Icon/icons/Edit';
import { Trash } from '@components/Atom/Icon/icons/Trash';
import { TaskProps } from '@components/Molecules/Task/type';
import useScreenSize from '@hooks/useScreenSize';
import { useMemo } from 'react';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';

const Task = ({ name, description, status, onClickEdit, onClickDelete }: TaskProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  const colorTagAndValue = useMemo(() => {
    switch (status) {
      case 'in-progress':
        return {
          color: 'warning',
          value: 'In Progress',
        };
      case 'done':
        return {
          color: 'success',
          value: 'Done',
        };
      default:
        return {
          color: 'info',
          value: 'Todo',
        };
    }
  }, [status]);

  return (
    <Box
      p={isMobile ? Setting.DIGIT_16 : Setting.DIGIT_24}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={status === 'done' ? '#81ecec' : '#ffffff'}
      borderRadius={10}
      gap={isMobile ? Setting.DIGIT_12 : Setting.DIGIT_16}
    >
      <Box display="flex" flexDirection="column" gap={isMobile ? Setting.DIGIT_12 : Setting.DIGIT_16}>
        <Typography fontSize="sm" color="gray">
          {name}
        </Typography>
        <Typography fontWeight="semibold" color={status === 'done' ? '#2d3436' : '#000000'}>
          {description}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        flexGrow={1}
        gap={isMobile ? Setting.DIGIT_12 : Setting.DIGIT_16}
        width={'50%'}
      >
        <Box display="flex" gap={isMobile ? Setting.DIGIT_8 : Setting.DIGIT_10} alignItems="center">
          <Edit size={'xLarge'} onClick={onClickEdit} />
          <Trash color="danger" size={'xLarge'} onClick={onClickDelete} />
        </Box>
        <Tag roundness="status" color={colorTagAndValue.color as TagProps['color']}>
          {colorTagAndValue.value}
        </Tag>
      </Box>
    </Box>
  );
};

export { Task };
