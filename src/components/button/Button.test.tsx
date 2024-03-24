import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Click Me</Button>);

    expect(container.firstChild).toHaveClass('cv-bg-violet-500');
    expect(container.firstChild).toHaveClass('cv-text-white');
    expect(container.firstChild).toHaveClass('cv-rounded-md');
    expect(container.firstChild).toHaveClass('cv-px-4');
  });

  it('renders correctly with left icon', () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>}>Click Me</Button>
    );

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('👈');
  });

  it('renders correctly with right icon', () => {
    const { container } = render(
      <Button rightIcon={<span>👉</span>}>Click Me</Button>
    );

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('👉');
  });

  it('renders correctly with both icons', () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>} rightIcon={<span>👉</span>} />
    );

    expect(container).toHaveTextContent('👈');
    expect(container).toHaveTextContent('👉');
  });

  it('renders correctly with label', () => {
    const { container } = render(<Button label="Click Me" />);

    expect(container).toHaveTextContent('Click Me');
  });

  it('renders correctly with label and left icon', () => {
    const { container } = render(
      <Button
        label="Click Me"
        leftIcon={<span>👈</span>}
        rightIcon={<span>👉</span>}
      />
    );

    expect(container).toHaveTextContent('Click Me');
    expect(container).toHaveTextContent('👈');
    expect(container).toHaveTextContent('👉');
  });

  it('render correctly with size prop', () => {
    const { container } = render(<Button size="default" />);

    const { container: containerSmall } = render(<Button size="small" />);

    const { container: containerLarge } = render(<Button size="large" />);

    const { container: containerXXL } = render(<Button size="xxl" />);

    expect(container.firstChild).toHaveClass('cv-text-base');
    expect(containerSmall.firstChild).toHaveClass('cv-text-sm');
    expect(containerLarge.firstChild).toHaveClass('cv-text-lg');
    expect(containerXXL.firstChild).toHaveClass('cv-text-2xl');
  });

  it('render correctly with rounded prop', () => {
    const { container } = render(<Button rounded="full" />);

    const { container: containerLg } = render(<Button rounded="lg" />);

    const { container: containerNone } = render(<Button rounded="none" />);

    const { container: containerXL } = render(<Button rounded="xl" />);

    const { container: containerXXL } = render(<Button rounded="xxl" />);

    const { container: containerDefault } = render(
      <Button rounded="default" />
    );

    const { container: containerSM } = render(<Button rounded="sm" />);

    expect(container).toMatchSnapshot();
    expect(containerLg).toMatchSnapshot();
    expect(containerNone).toMatchSnapshot();
    expect(containerXL).toMatchSnapshot();
    expect(containerXXL).toMatchSnapshot();
    expect(containerDefault).toMatchSnapshot();
    expect(containerSM).toMatchSnapshot();

    expect(container.firstChild).toHaveClass('cv-rounded-full');
    expect(containerLg.firstChild).toHaveClass('cv-rounded-lg');
    expect(containerNone.firstChild).toHaveClass('cv-rounded-none');
    expect(containerXL.firstChild).toHaveClass('cv-rounded-xl');
    expect(containerXXL.firstChild).toHaveClass('cv-rounded-2xl');
    expect(containerDefault.firstChild).toHaveClass('cv-rounded-md');
    expect(containerSM.firstChild).toHaveClass('cv-rounded-sm');
  });

  it('render correctly with buttonType prop', () => {
    const { container: containerPrimary } = render(
      <Button buttonType="primary" />
    );

    const { container } = render(<Button buttonType="secondary" />);

    const { container: containerWarning } = render(
      <Button buttonType="warning" />
    );

    const { container: containerOutline } = render(
      <Button buttonType="outline" />
    );

    const { container: containerDisabled } = render(
      <Button buttonType="disabled" />
    );

    const { container: containerError } = render(<Button buttonType="error" />);

    expect(container).toMatchSnapshot();
    expect(containerPrimary).toMatchSnapshot();
    expect(containerWarning).toMatchSnapshot();
    expect(containerOutline).toMatchSnapshot();
    expect(containerDisabled).toMatchSnapshot();
    expect(containerError).toMatchSnapshot();

    expect(containerPrimary.firstChild).toHaveClass(
      'cv-bg-violet-500 cv-text-white cv-border-violet-500 hover:cv-bg-violet-600'
    );
    expect(container.firstChild).toHaveClass(
      'cv-bg-gray-200 cv-text-gray-600 cv-border-gray-200 hover:cv-bg-gray-300'
    );
    expect(containerOutline.firstChild).toHaveClass(
      'cv-bg-white cv-text-gray-600 hover:cv-bg-gray-100 cv-border hover:cv-border-gray-100 cv-border-gray-300 hover:cv-shadow-md'
    );
    expect(containerWarning.firstChild).toHaveClass(
      'cv-bg-yellow-500 cv-text-white cv-border-yellow-500 hover:cv-bg-yellow-600'
    );

    expect(containerDisabled.firstChild).toHaveClass(
      'cv-bg-black cv-text-white cv-border-black cv-cursor-not-allowed'
    );

    expect(containerError.firstChild).toHaveClass(
      'cv-bg-red-500 cv-text-white cv-border-red-500 hover:cv-bg-red-600'
    );
  });
});

describe('Button - 1', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Click Me</Button>);

    expect(container.firstChild).toHaveClass('cv-bg-violet-500');
    expect(container.firstChild).toHaveClass('cv-text-white');
    expect(container.firstChild).toHaveClass('cv-rounded-md');
    expect(container.firstChild).toHaveClass('cv-px-4');
  });

  it('renders correctly with left icon', () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>}>Click Me</Button>
    );

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('👈');
  });

  it('renders correctly with right icon', () => {
    const { container } = render(
      <Button rightIcon={<span>👉</span>}>Click Me</Button>
    );

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('👉');
  });

  it('renders correctly with both icons', () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>} rightIcon={<span>👉</span>} />
    );

    expect(container).toHaveTextContent('👈');
    expect(container).toHaveTextContent('👉');
  });

  it('renders correctly with label', () => {
    const { container } = render(<Button label="Click Me" />);

    expect(container).toHaveTextContent('Click Me');
  });

  it('renders correctly with label and left icon', () => {
    const { container } = render(
      <Button
        label="Click Me"
        leftIcon={<span>👈</span>}
        rightIcon={<span>👉</span>}
      />
    );

    expect(container).toHaveTextContent('Click Me');
    expect(container).toHaveTextContent('👈');
    expect(container).toHaveTextContent('👉');
  });

  it('render correctly with size prop', () => {
    const { container } = render(<Button size="default" />);

    const { container: containerSmall } = render(<Button size="small" />);

    const { container: containerLarge } = render(<Button size="large" />);

    const { container: containerXXL } = render(<Button size="xxl" />);

    expect(container.firstChild).toHaveClass('cv-text-base');
    expect(containerSmall.firstChild).toHaveClass('cv-text-sm');
    expect(containerLarge.firstChild).toHaveClass('cv-text-lg');
    expect(containerXXL.firstChild).toHaveClass('cv-text-2xl');
  });

  it('render correctly with rounded prop', () => {
    const { container } = render(<Button rounded="full" />);

    const { container: containerLg } = render(<Button rounded="lg" />);

    const { container: containerNone } = render(<Button rounded="none" />);

    const { container: containerXL } = render(<Button rounded="xl" />);

    const { container: containerXXL } = render(<Button rounded="xxl" />);

    const { container: containerDefault } = render(
      <Button rounded="default" />
    );

    const { container: containerSM } = render(<Button rounded="sm" />);

    expect(container).toMatchSnapshot();
    expect(containerLg).toMatchSnapshot();
    expect(containerNone).toMatchSnapshot();
    expect(containerXL).toMatchSnapshot();
    expect(containerXXL).toMatchSnapshot();
    expect(containerDefault).toMatchSnapshot();
    expect(containerSM).toMatchSnapshot();

    expect(container.firstChild).toHaveClass('cv-rounded-full');
    expect(containerLg.firstChild).toHaveClass('cv-rounded-lg');
    expect(containerNone.firstChild).toHaveClass('cv-rounded-none');
    expect(containerXL.firstChild).toHaveClass('cv-rounded-xl');
    expect(containerXXL.firstChild).toHaveClass('cv-rounded-2xl');
    expect(containerDefault.firstChild).toHaveClass('cv-rounded-md');
    expect(containerSM.firstChild).toHaveClass('cv-rounded-sm');
  });

  it('render correctly with buttonType prop', () => {
    const { container: containerPrimary } = render(
      <Button buttonType="primary" />
    );

    const { container } = render(<Button buttonType="secondary" />);

    const { container: containerWarning } = render(
      <Button buttonType="warning" />
    );

    const { container: containerOutline } = render(
      <Button buttonType="outline" />
    );

    const { container: containerDisabled } = render(
      <Button buttonType="disabled" />
    );

    const { container: containerError } = render(<Button buttonType="error" />);

    expect(container).toMatchSnapshot();
    expect(containerPrimary).toMatchSnapshot();
    expect(containerWarning).toMatchSnapshot();
    expect(containerOutline).toMatchSnapshot();
    expect(containerDisabled).toMatchSnapshot();
    expect(containerError).toMatchSnapshot();

    expect(containerPrimary.firstChild).toHaveClass(
      'cv-bg-violet-500 cv-text-white cv-border-violet-500 hover:cv-bg-violet-600'
    );
    expect(container.firstChild).toHaveClass(
      'cv-bg-gray-200 cv-text-gray-600 cv-border-gray-200 hover:cv-bg-gray-300'
    );
    expect(containerOutline.firstChild).toHaveClass(
      'cv-bg-white cv-text-gray-600 hover:cv-bg-gray-100 cv-border hover:cv-border-gray-100 cv-border-gray-300 hover:cv-shadow-md'
    );
    expect(containerWarning.firstChild).toHaveClass(
      'cv-bg-yellow-500 cv-text-white cv-border-yellow-500 hover:cv-bg-yellow-600'
    );

    expect(containerDisabled.firstChild).toHaveClass(
      'cv-bg-black cv-text-white cv-border-black cv-cursor-not-allowed'
    );

    expect(containerError.firstChild).toHaveClass(
      'cv-bg-red-500 cv-text-white cv-border-red-500 hover:cv-bg-red-600'
    );
  });
});
