import utility from '../utils/utility';
import Resize from '../component/Resize';
const jsonPath = require('../config.json');


// To preload JSON, set App as async
const App = async () => {
  const config = await utility.JSONLoader(jsonPath);
  console.log(config);
  
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
