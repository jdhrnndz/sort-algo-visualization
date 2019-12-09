import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
const { window } = new JSDOM();

global.document = window.document;
global.window = window;

configure({ adapter: new Adapter() });
