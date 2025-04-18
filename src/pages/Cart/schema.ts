import { TFunction } from 'i18next';
import { z as couponValidation } from 'zod';

const couponSchema = (t: TFunction) =>
  couponValidation.object({
    code: couponValidation
      .string()
      .trim()
      .min(1, t('validation.required', { field: t('carts.coupon_code') })),
  });

export { couponSchema };
