// eslint-disable-next-line @cspell/spellchecker
/* eslint-disable sonarjs/no-duplicate-string */
import { Input, Tag } from '@components/Atom';
import { Box } from '@components/Atom/Box';
import { Button } from '@components/Atom/Button';
import { Form } from '@components/Atom/Form';
import { Close } from '@components/Atom/Icon/icons/Close';
import { Typography } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useProject } from 'src/app/zustand/projects/project.selector';
import { Task } from 'src/app/zustand/projects/type';
import { useToast } from 'src/app/zustand/toast/toast.selector';
import { getIsMobile } from 'src/common/untils/isMobile';
import { taskTemplateConstant } from 'src/templates/Task/constant';
import { EditTaskPopupProps } from 'src/templates/Task/type';
import { v4 as id } from 'uuid';

enum STATUS_VALUE {
  TODO = 'todo',
  INPROGRESS = 'in-progress',
  DONE = 'done',
}
const EditTaskPopup = ({ projectId, onClose, task }: EditTaskPopupProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const { updateTask } = useProject();
  const [activeStatus, setActiveStatus] = useState<string>(task?.status || 'todo');
  const { showToast } = useToast();

  const handleSubmitForm = (data: FieldValues) => {
    updateTask(projectId, task?.id || '', {
      id: id(),
      name: data['task-name'],
      description: data['task-description'],
      status: activeStatus as Task['status'],
      createdAt: task?.createdAt || '',
      updatedAt: new Date().toISOString(),
    });

    onClose();

    showToast({
      position: 'top-right',
      type: 'success',
      title: 'Success',
      message: 'Task edit successfully',
      duration: 3000,
    });
  };

  return (
    <Box
      p={{
        sm: '16px',
        md: '24px 16px',
        lg: '24px',
      }}
      width={isMobile ? 'calc(100vw - 32px)' : '45vw'}
      overflow="auto"
      maxHeight={'calc(100vh - 32px)'}
      backgroundColor={'#ffffff'}
    >
      <Box display="flex" flexDirection="column" gap="16px">
        <Box
          display="flex"
          flexDirection="column"
          gap={{
            sm: '4px',
            md: '6px',
          }}
        >
          <Box display="flex" alignItems="center" gap="8px" justifyContent="space-between">
            <Typography fontWeight="semibold" fontSize="xl">
              {taskTemplateConstant.editTaskTitle}
            </Typography>
            <Close size="xLarge" onClick={onClose} />
          </Box>
          <Typography fontSize="xs" color="gray">
            {taskTemplateConstant.editTaskDescription}
          </Typography>
        </Box>
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <Box
            display="flex"
            flexDirection="column"
            gap={{
              sm: 12,
              md: 16,
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              gap={{
                sm: '8px',
                md: '12px',
              }}
            >
              <Typography fontSize="sm" fontWeight="semibold">
                {taskTemplateConstant.taskName}
              </Typography>
              <Input
                placeholder={'Task name'}
                defaultValue={task?.name}
                variant="rounded"
                outline
                {...register('task-name', {
                  required: 'Task name is required',
                  minLength: {
                    value: 3,
                    message: 'Task name must be at least 3 characters',
                  },
                })}
                errorMessage={errors['task-name']?.message as string | undefined}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={{
                sm: '8px',
                md: '12px',
              }}
            >
              <Typography fontSize="sm" fontWeight="semibold">
                {taskTemplateConstant.taskDescription}
              </Typography>
              <Input
                placeholder={'Task description'}
                defaultValue={task?.description}
                variant="rounded"
                outline
                {...register('task-description', {
                  required: 'Task description is required',
                  minLength: {
                    value: 3,
                    message: 'Task description must be at least 3 characters',
                  },
                })}
                errorMessage={errors['task-description']?.message as string | undefined}
              />
            </Box>
            <Box display="flex" gap={isMobile ? '8px' : '12px'} alignItems="center">
              {!isMobile && <Typography fontWeight="semibold">{taskTemplateConstant.status}</Typography>}
              <Box
                border={
                  activeStatus === STATUS_VALUE.TODO
                    ? {
                        style: 'solid',
                        width: '1px',
                      }
                    : {
                        style: 'none',
                      }
                }
                borderRadius="20px"
                p="2px"
                display="flex"
                gap="8px"
                transition={'border .3s ease-in-out'}
                onClick={() => setActiveStatus(STATUS_VALUE.TODO)}
              >
                <Tag roundness="status" color={activeStatus === STATUS_VALUE.TODO ? 'dark' : 'info'}>
                  {taskTemplateConstant.todo}
                </Tag>
              </Box>
              <Box
                border={
                  activeStatus === STATUS_VALUE.INPROGRESS
                    ? {
                        style: 'solid',
                        width: '1px',
                      }
                    : {
                        style: 'none',
                      }
                }
                borderRadius="20px"
                p="2px"
                display="flex"
                gap="8px"
                transition={'border .3s ease'}
                onClick={() => setActiveStatus(STATUS_VALUE.INPROGRESS)}
              >
                <Tag roundness="status" color={activeStatus === STATUS_VALUE.INPROGRESS ? 'dark' : 'warning'}>
                  {taskTemplateConstant.inProgress}
                </Tag>
              </Box>
              <Box
                border={
                  activeStatus === STATUS_VALUE.DONE
                    ? {
                        style: 'solid',
                        width: '1px',
                      }
                    : {
                        style: 'none',
                      }
                }
                borderRadius="20px"
                p="2px"
                display="flex"
                gap="8px"
                transition={'border .3s ease-in-out'}
                onClick={() => setActiveStatus(STATUS_VALUE.DONE)}
              >
                <Tag roundness="status" color={activeStatus === STATUS_VALUE.DONE ? 'dark' : 'success'}>
                  {taskTemplateConstant.done}
                </Tag>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={{
                sm: 6,
                md: 8,
              }}
              flexWrap="wrap"
              justifyContent={'flex-end'}
            >
              <Button color="dark" size="small" roundness="rounded" type="submit">
                {taskTemplateConstant.editTaskButton}
              </Button>
            </Box>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default EditTaskPopup;
