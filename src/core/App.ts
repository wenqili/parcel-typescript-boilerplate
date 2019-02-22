import utility from '../utils/utility';
import Resize from '../component/Resize';

const App = () => {
  utility.log('index');
  Resize.init();
  const update = () => {
    run();
  };

  const run = () => {
    utility.log('function');
  };

  update();
};

export default App;
