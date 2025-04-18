import { signInConstant } from '@pages/SignIn/constant';
import { TFunction } from 'i18next';
import { capitalizeFirstLetter } from 'src/common/untils/capitalizeFirstLetter';
import { z as formValidation } from 'zod';

const signInSchema = (t: TFunction) =>
  formValidation.object({
    [signInConstant.usernameField]: formValidation
      .string()
      .min(3, t('validation.minLength', { length: 3, field: capitalizeFirstLetter(t('login.username')) }))
      .max(20, t('validation.maxLength', { length: 20 })),
    [signInConstant.passwordField]: formValidation
      .string()
      .min(
        6,
        t('validation.minLength', {
          length: 6,
          field: capitalizeFirstLetter(t(`login.${signInConstant.passwordField}`)),
        }),
      )
      .max(
        100,
        t('validation.maxLength', {
          length: 100,
          field: capitalizeFirstLetter(t(`login.${signInConstant.passwordField}`)),
        }),
      )
      .regex(
        /[A-Z]/,
        t('validation.regex.uppercase', {
          field: capitalizeFirstLetter(t(`login.${signInConstant.passwordField}`)),
        }),
      )
      .regex(
        /[0-9]/,
        t('validation.regex.number', {
          field: capitalizeFirstLetter(t(`login.${signInConstant.passwordField}`)),
        }),
      )
      .regex(
        /[^A-Za-z0-9]/,
        t('validation.regex.special_character', {
          field: capitalizeFirstLetter(t(`login.${signInConstant.passwordField}`)),
        }),
      ),
  });

export { signInSchema };
