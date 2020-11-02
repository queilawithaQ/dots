import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listTags} from './list-tags';
import * as MOCK from './list-tags.mock';

describe('tag', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const URL = '/tags';
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onGet(URL).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  beforeEach(() => {
    mock.resetHistory();
  });
  describe('list-tags', () => {
    it('should be a fn', () => {
      expect(typeof listTags).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listTags(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listTags = listTags(context);
      const response = await _listTags({page: PAGE, per_page: PER_PAGE});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(PAGE);
      expect(request.params.per_page).toBe(PER_PAGE);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.tags).toBeDefined();
      const {tags} = response.data;
      const [tag] = tags;
      expect(typeof tag.name).toBe('string');
      expect(typeof tag.resources.count).toBe('number');
      expect(typeof tag.resources.droplets.count).toBe('number');
      expect(typeof tag.resources.droplets.last_tagged_uri).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listTags = listTags(context);
      const response = await _listTags({});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
