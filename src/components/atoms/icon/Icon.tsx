import React from 'react';
// eslint-disable-next-line import/order
import { CODICONS, SETI_ICONS } from '@/constants/icons';

// export interface IIconProps {
// }
// {}: IIconProps

function IconComponent() {
  return (
    <>
      <div className="cv-flex cv-flex-col">
        <h2 className="cv-px-16 cv-pt-16 cv-font-inter cv-text-[48px] cv-font-bold cv-not-italic cv-leading-[64px] cv-tracking-[-0.96px]">
          Codicons
        </h2>
        <div className="cv-grid cv-grid-cols-10 cv-gap-3 cv-p-16">
          {CODICONS.sort().map((icon: string) => {
            return (
              <div key={icon} className="cv-flex cv-flex-col">
                <i className={`codicon codicon-${icon} !cv-text-[48px]`} />
                <label htmlFor={icon} className="cv-py-3 cv-text-center">
                  {icon}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cv-flex cv-flex-col">
        <h2 className="cv-px-16 cv-pt-16 cv-font-inter cv-text-[48px] cv-font-bold cv-not-italic cv-leading-[64px] cv-tracking-[-0.96px]">
          Seti Icons
        </h2>
        <div className="cv-grid cv-grid-cols-10 cv-gap-3 cv-p-16">
          {Object.entries(SETI_ICONS).map((icon) => {
            const [key, value] = icon;
            const iconKey = Object.entries(value)[0][0];

            return (
              <div key={`${iconKey}-${key}`} className="cv-flex cv-flex-col">
                <i
                  className={`seti-icon seti-icon-${iconKey} !cv-text-[48px]`}
                />
                <label htmlFor={iconKey} className="cv-py-3 cv-text-center">
                  {iconKey}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const Icon = React.memo(IconComponent);

// eslint-disable-next-line import/prefer-default-export
export { Icon };
