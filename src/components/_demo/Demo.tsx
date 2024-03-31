import { Button } from '@/components/atoms/button';
import '@/index.css';

function Demo() {
  return (
    <div data-testid="app-wrapper">
      <h1 className="cv-bg-slate-600">Hello, world!</h1>
      <Button id="btnJunas" type="button" className="cv-w-full">
        Click me
      </Button>
    </div>
  );
}

// export default Demo;

// eslint-disable-next-line import/prefer-default-export
export { Demo };
