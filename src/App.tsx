import { Button } from '@/components/atoms/button';

function App() {
  return (
    <div className="dark" data-testid="app-wrapper">
      <h1 className="cv-bg-slate-600">Hello, world!</h1>
      <Button id="btnJunas" type="button" className="cv-w-full">
        Click me
      </Button>
    </div>
  );
}

export default App;
