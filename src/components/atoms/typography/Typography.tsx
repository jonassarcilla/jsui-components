import React from 'react';
// eslint-disable-next-line import/order
import TYPOGRAPHY from '@/constants/typography';

// export interface ITypographyProps {}
// {}: ITypographyProps
function TypographyComponent() {
  return (
    <div className="cv-flex cv-flex-col cv-bg-[#3E3E3F] cv-p-16">
      <h2 className="cv-cv-font-inter cv-text-[48px] cv-font-bold cv-not-italic leading-[64px] tracking-[-0.96px] cv-text-[#ffffff]">
        Typography
      </h2>
      <div className="cv-flex cv-cv-grow cv-flex-col cv-py-16">
        <ul className="cv-text-[#ffffff]">
          {Object.entries(TYPOGRAPHY).map((item) => {
            const itemId = item[0];
            const { title, description, useCase } = item[1];

            const isHTML = /<\/?[a-z][\s\S]*>/i.test(title);

            return (
              <li
                key={itemId}
                className="cv-flex h-[40px] cv-flex-row cv-items-center cv-gap-x-4 cv-py-8"
              >
                {isHTML ? (
                  <div
                    className={`cv-w-[350px] cv-flex-none ${itemId}`}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                ) : (
                  <div className={`cv-w-[350px] cv-flex-none ${itemId}`}>
                    {title}
                  </div>
                )}
                <div className="cv-tracker-[-0.06px] cv-w-[213px] cv-flex-none cv-items-center cv-font-inter cv-text-[12px] cv-font-normal cv-not-italic cv-leading-normal">
                  {description}
                </div>
                <div className="cv-tracker-[-0.06px] cv-grow cv-font-inter cv-text-[12px] cv-font-normal cv-not-italic cv-leading-normal">
                  {useCase}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// export default React.memo(Typography);
const Typography = React.memo(TypographyComponent);

// eslint-disable-next-line import/prefer-default-export
export { Typography };
