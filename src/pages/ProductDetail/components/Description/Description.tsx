import { Box } from '@components/Atom/Box';
import { Typography } from '@components/Atom/Typography';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from 'src/app/apis/productApi';
import descriptionModuleClass from './Description.module.scss';

export function Description() {
  const params = useParams<{ slug: string }>();
  const { data: productData } = useGetProductByIdQuery(params.slug ?? '');
  const { t } = useTranslation();

  return (
    <>
      <Box
        pb={{
          xs: 12,
          sm: 16,
        }}
      >
        <Typography fontSize="2xl" fontWeight="semibold">
          {t('products.description')}
        </Typography>
      </Box>
      <ReactQuill
        className={descriptionModuleClass['description']}
        theme="snow"
        value={productData?.description}
        readOnly={true}
        modules={{
          toolbar: false,
        }}
      />
    </>
  );
}
