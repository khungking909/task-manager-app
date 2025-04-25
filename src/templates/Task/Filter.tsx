import { Tag } from '@components/Atom';
import { Carousel } from '@components/Organism';
import useScreenSize from '@hooks/useScreenSize';
import { useEffect, useState } from 'react';
import { getIsMobile } from 'src/common/untils/isMobile';
import { taskTemplateConstant } from 'src/templates/Task/constant';
import { FilterProps } from 'src/templates/Task/type';

export default function Filter({ onFilterChange }: FilterProps) {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  return (
    <Carousel slidesPerView="auto" spaceBetween={16} elementCenter={!isMobile}>
      <Tag
        color={filter === 'all' ? 'info' : 'gray-100'}
        onClick={() => setFilter('all')}
        roundness="rounded"
      >
        {taskTemplateConstant.all}
      </Tag>
      <Tag
        color={filter === 'todo' ? 'info' : 'gray-100'}
        roundness="rounded"
        onClick={() => setFilter('todo')}
      >
        {taskTemplateConstant.todo}
      </Tag>
      <Tag
        roundness="rounded"
        color={filter === 'in-progress' ? 'info' : 'gray-100'}
        onClick={() => setFilter('in-progress')}
      >
        {taskTemplateConstant.inProgress}
      </Tag>
      <Tag
        roundness="rounded"
        color={filter === 'done' ? 'info' : 'gray-100'}
        onClick={() => setFilter('done')}
      >
        {taskTemplateConstant.done}
      </Tag>
    </Carousel>
  );
}
