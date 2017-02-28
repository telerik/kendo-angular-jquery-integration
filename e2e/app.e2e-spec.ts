import { K1K2IntegrationPage } from './app.po';

describe('k1-k2-integration App', () => {
  let page: K1K2IntegrationPage;

  beforeEach(() => {
    page = new K1K2IntegrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
