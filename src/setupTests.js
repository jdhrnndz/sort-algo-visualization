import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import isSorted from './utils/isSorted';

const { window } = new JSDOM();

global.document = window.document;
global.window = window;

configure({ adapter: new Adapter() });

expect.extend({
  toBeSorted(received) {
    const pass = isSorted(received);

    if (pass) {
      return {
        message: () => `expected ${JSON.stringify(received)} not to be sorted`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${JSON.stringify(received)} to be sorted`,
        pass: false,
      };
    }
  },
});
