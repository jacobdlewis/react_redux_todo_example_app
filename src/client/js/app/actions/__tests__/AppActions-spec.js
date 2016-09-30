import expect from 'expect';
import * as Constants from '../../constants';
import * as Actions from '../AppActions';

describe('App Actions', () => {
  let payload;

  beforeEach(() => {
    payload = {
      data: {
        code: 'MOCK_CODE',
        msg: 'MOCK_MSG',
      }
    };
  });

  it('should be an onInit action', () => {
    const expected = {
      type: Constants.APP_ON_INIT,
      payload
    };

    expect(Actions.onInit(payload)).toEqual(expected);
  });

  it('should be a onResize action', () => {
    const expected = {
      type: Constants.APP_ON_RESIZE
    };

    expect(Actions.onResize()).toEqual(expected);
  });

  it('should be an onError action', () => {
    const expected = {
      type: Constants.APP_ON_ERROR,
      payload
    };

    expect(Actions.onError(payload)).toEqual(expected);
  });

  it('should be a navToggle action', () => {
    const expected = {
      type: Constants.APP_NAV_TOGGLE
    };

    expect(Actions.navToggle()).toEqual(expected);
  });
});
