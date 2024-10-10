import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ColorPicker } from './ColorPicker';

interface Props {
  tooltip?: string;
  disabled?: boolean;
  action?: (color: string | undefined) => void;
}
export const TextHighlight = ({ tooltip, disabled = false, action }: Props) => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined
  );
  const onChange = (color: string | undefined) => {
    setSelectedColor(color);
    action?.(color);
  };

  const toggleColor = () => {
    action?.(selectedColor);
  };

  return (
    <div className="flex items-center h-[32px] hover:bg-muted rounded-md">
      <svg
        onClick={toggleColor}
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'size-[34px] p-2',
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
        )}
        width="18px"
        height="18px"
        viewBox="0 0 256 256"
        version="1.1"
      >
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g transform="translate(0.000000, 0.500000)">
            <g transform="translate(39.000000, 17.353553)">
              <path
                d="M11,201.146447 L167,201.146447 C173.075132,201.146447 178,206.071314 178,212.146447 C178,218.221579 173.075132,223.146447 167,223.146447 L11,223.146447 C4.92486775,223.146447 7.43989126e-16,218.221579 0,212.146447 C-7.43989126e-16,206.071314 4.92486775,201.146447 11,201.146447 Z"
                fill={selectedColor || 'currentColor'}
                fillRule="evenodd"
              ></path>
              <path
                d="M72.3425855,16.8295583 C75.799482,7.50883712 86.1577877,2.75526801 95.4785089,6.21216449 C100.284516,7.99463061 104.096358,11.7387855 105.968745,16.4968188 L106.112518,16.8745422 L159.385152,161.694068 C161.291848,166.877345 158.635655,172.624903 153.452378,174.531599 C148.358469,176.405421 142.719567,173.872338 140.716873,168.864661 L140.614848,168.598825 L89.211,28.86 L37.3759214,168.623816 C35.4885354,173.712715 29.8981043,176.351047 24.7909589,174.617647 L24.5226307,174.522368 C19.4337312,172.634982 16.7953993,167.044551 18.5287999,161.937406 L18.6240786,161.669077 L72.3425855,16.8295583 Z"
                fill="currentColor"
                fillRule="nonzero"
              ></path>
              <path
                d="M121,103.146447 C126.522847,103.146447 131,107.623599 131,113.146447 C131,118.575687 126.673329,122.994378 121.279905,123.142605 L121,123.146447 L55,123.146447 C49.4771525,123.146447 45,118.669294 45,113.146447 C45,107.717207 49.3266708,103.298515 54.7200952,103.150288 L55,103.146447 L121,103.146447 Z"
                fill="currentColor"
                fillRule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <ColorPicker
        modelValue={selectedColor}
        onChange={onChange}
        disabled={disabled}
      >
        <svg
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'w-3 h-[32px] rounded-l-none hover:bg-muted-foreground/20',
            disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
          )}
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M36 19L24 31L12 19z"
          ></path>
        </svg>
      </ColorPicker>
    </div>
  );
};
