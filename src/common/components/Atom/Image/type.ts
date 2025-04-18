export interface ImageTypes {
  readonly src: string;
  readonly alt?: string;
  readonly className?: string;
  readonly borderRadius?: number | string | ResponseType;
  readonly aspectRatio?: string;
  readonly objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}
