// eslint-disable-next-line @cspell/spellchecker
/* eslint-disable sonarjs/no-duplicate-string */
import { Input } from '@components/Atom';
import { Box } from '@components/Atom/Box';
import { Button } from '@components/Atom/Button';
import { Form } from '@components/Atom/Form';
import { Close } from '@components/Atom/Icon/icons/Close';
import { Typography } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { FieldValues, useForm } from 'react-hook-form';
import { useProject } from 'src/app/zustand/projects/project.selector';
import { useToast } from 'src/app/zustand/toast/toast.selector';
import { getIsMobile } from 'src/common/untils/isMobile';
import { taskTemplateConstant } from 'src/templates/Task/constant';
import { AddTaskPopupProps } from 'src/templates/Task/type';
import { v4 as id } from 'uuid';

const AddTaskPopup = ({ projectId, onClose }: AddTaskPopupProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const { addTask } = useProject();
  const { showToast } = useToast();

  const handleSubmitForm = (data: FieldValues) => {
    if (!data['task-name']) {
      showToast({
        position: 'top-right',
        type: 'error',
        title: 'Error',
        message: 'Task name is required',
        duration: 3000,
      });

      return;
    }

    if (!data['task-description']) {
      showToast({
        position: 'top-right',
        type: 'error',
        title: 'Error',
        message: 'Task description is required',
        duration: 3000,
      });

      return;
    }

    addTask(projectId, {
      id: id(),
      name: data['task-name'],
      description: data['task-description'],
      status: 'todo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    onClose();

    showToast({
      position: 'top-right',
      type: 'success',
      title: 'Success',
      message: 'Project added successfully',
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
              {taskTemplateConstant.addTaskTitle}
            </Typography>
            <Close size="xLarge" onClick={onClose} />
          </Box>
          <Typography fontSize="xs" color="gray">
            {taskTemplateConstant.addTaskDescription}
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
                placeholder="Task name"
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
                {taskTemplateConstant.addTaskDescription}
              </Typography>
              <Input
                placeholder="Task description"
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
                {taskTemplateConstant.addTaskButton}
              </Button>
            </Box>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default AddTaskPopup;
