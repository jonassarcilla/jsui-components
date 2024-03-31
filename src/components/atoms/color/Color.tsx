import React from 'react';
// eslint-disable-next-line import/order
import { ACCENTS, BASECOLOR } from '@/constants/colors';
import useColor from './Color.hooks';

// export interface IColorProps {}
// {}: IColorProps

interface IColorItemProps {
  category: string;
  colorKey: string;
  colorValue: string;
}

function ColorItem({ category, colorKey, colorValue }: IColorItemProps) {
  const { colorItemRef, colorHex } = useColor(colorValue);

  return (
    <div className="cv-flex cv-flex-col cv-gap-8">
      <div
        ref={colorItemRef}
        className="cv-h-[128px] cv-w-[128px]"
        style={{
          backgroundColor: colorValue,
        }}
      />
      <div className="cv-flex cv-flex-col cv-gap-4">
        <h3 className="cv-text-[24px] cv-font-[700] cv-capitalize cv-leading-8 cv-tracking-[-0.12px] cv-text-[#ffffff] cv-opacity-80">
          {category !== 'seti' ? `${category} ${colorKey}` : `${colorKey}`}
        </h3>
        <p className="cv-text-[20px] cv-font-[700] cv-uppercase cv-leading-[32px] cv-tracking-[-0.1px] cv-text-[#ffffff] cv-opacity-80">
          {colorHex}
        </p>
      </div>
    </div>
  );
}

function Color() {
  return (
    <>
      {Object.entries(BASECOLOR).map((item) => {
        const category = item[0];
        const colorPalletes = item[1];
        return (
          <div className="cv-flex cv-flex-col cv-bg-[#3E3E3F]">
            <h3 className="cv-px-12 cv-pt-10 cv-text-[24px] cv-font-[700] cv-capitalize cv-leading-8 cv-tracking-[-0.12px] cv-text-[#ffffff]">
              {category}
            </h3>
            <div className="cv-grid-cols cv-grid cv-h-full cv-justify-items-center cv-gap-16 cv-bg-[#3E3E3F] cv-p-16 sm:cv-grid-cols-2 md:cv-grid-cols-4 lg:cv-grid-cols-6 xl:cv-grid-cols-8 2xl:cv-grid-cols-10">
              {Object.entries(colorPalletes)
                .sort()
                .map(([key, value]: [string, string]) => {
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  if (key === 'DEFAULT') return <></>;

                  return (
                    <ColorItem
                      category={category}
                      key={key}
                      colorKey={key}
                      colorValue={value}
                    />
                  );
                })}
            </div>
          </div>
        );
      })}
      {Object.entries(ACCENTS).map((item) => {
        const category = item[0];
        const colorPalletes = item[1];
        return (
          <div className="cv-flex cv-flex-col cv-bg-[#3E3E3F]">
            <h3 className="cv-px-12 cv-pt-10 cv-text-[24px] cv-font-[700] cv-capitalize cv-leading-8 cv-tracking-[-0.12px] cv-text-[#ffffff]">
              {category}
            </h3>
            <div className="cv-grid-cols cv-grid cv-h-full cv-justify-items-center cv-gap-16 cv-bg-[#3E3E3F] cv-p-16 sm:cv-grid-cols-2 md:cv-grid-cols-4 lg:cv-grid-cols-6 xl:cv-grid-cols-8 2xl:cv-grid-cols-10">
              {Object.entries(colorPalletes)
                .sort()
                .map(([key, value]: [string, string]) => {
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  if (key === 'DEFAULT') return <></>;

                  return (
                    <ColorItem
                      category={category}
                      key={key}
                      colorKey={key}
                      colorValue={value}
                    />
                  );
                })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default React.memo(Color);
