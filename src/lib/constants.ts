export const DEFAULT_COLOR = '#262626';
/** Default color list for text color and text highlight */
export const COLORS_LIST = [
  '#000000',
  '#262626',
  '#595959',
  '#8C8C8C',
  '#BFBFBF',
  '#D9D9D9',
  '#E9E9E9',
  '#F5F5F5',
  '#FAFAFA',
  '#FFFFFF',
  '#F5222D',
  '#FA541C',
  '#FA8C16',
  '#FADB14',
  '#52C41A',
  '#13C2C2',
  '#1890FF',
  '#2F54EB',
  '#722ED1',
  '#EB2F96',
  '#FFE8E6',
  '#FFECE0',
  '#FFEFD1',
  '#FCFCCA',
  '#E4F7D2',
  '#D3F5F0',
  '#D4EEFC',
  '#DEE8FC',
  '#EFE1FA',
  '#FAE1EB',
  '#FFA39E',
  '#FFBB96',
  '#FFD591',
  '#FFFB8F',
  '#B7EB8F',
  '#87E8DE',
  '#91D5FF',
  '#ADC6FF',
  '#D3ADF7',
  '#FFADD2',
  '#FF4D4F',
  '#FF7A45',
  '#FFA940',
  '#FFEC3D',
  '#73D13D',
  '#36CFC9',
  '#40A9FF',
  '#597EF7',
  '#9254DE',
  '#F759AB',
  '#CF1322',
  '#D4380D',
  '#D46B08',
  '#D4B106',
  '#389E0D',
  '#08979C',
  '#096DD9',
  '#1D39C4',
  '#531DAB',
  '#C41D7F',
  '#820014',
  '#871400',
  '#873800',
  '#614700',
  '#135200',
  '#00474F',
  '#003A8C',
  '#061178',
  '#22075E',
  '#780650',
] as const;

/** Default font size value */
export const DEFAULT_FONT_SIZE_VALUE = 'Defaut' as const;

/** Default font size list */
export const DEFAULT_FONT_SIZE_LIST = [
  '10px',
  '11px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '22px',
  '24px',
  '26px',
  '28px',
  '36px',
  '48px',
  '72px',
] as const;

export const ALLOWED_LOGO_ALIGNMENT = ['left', 'center', 'right'] as const;

export const ALLOWED_BUTTON_BORDER_RADIUS = [
  'sharp',
  'smooth',
  'round',
] as const;

export const ALLOWED_BUTTON_VARIANT = ['filled', 'outline'] as const;

export const DEFAULT_BUTTON_SIZE_VALUE = 'md' as const;

export const DEFAULT_BUTTON_SIZE_LIST = ['sm', 'md', 'lg', 'xl'] as const;
export const SIZE_STYLES = {
  sm: { padding: '0.25rem 0.5rem', fontSize: '0.75rem' },
  md: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
  lg: { padding: '1rem 2rem', fontSize: '1rem' },
  xl: { padding: '1.25rem 2.5rem', fontSize: '1.25rem' },
};
