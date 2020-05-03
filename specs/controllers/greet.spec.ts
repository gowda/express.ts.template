import sinon from 'sinon';
import { Response, Request } from 'express';
import { index } from '../../src/controllers/greet';

describe('greet controller', () => {
  describe('#index', () => {
    it('renders "greet" template', () => {
      const mockRender = sinon.fake();
      const mockResponse: Partial<Response> = {
        render: mockRender
      };
      const mockRequest: Partial<Request> = {};

      index(mockRequest as Request, mockResponse as Response);

      return sinon.assert.calledWith(mockRender, 'greet');
    });
  });
});
