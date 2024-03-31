import { Button } from '@/components/atoms/button';
import { Typography } from './components/atoms/typography';

function App() {
  return (
    <div data-testid="app-wrapper">
      <h1 className="cv-bg-slate-600">Hello, world!</h1>
      <Button id="btnJunas" type="button" className="cv-w-full">
        Click me
      </Button>
      <Typography />
    </div>
  );
}

export default App;
