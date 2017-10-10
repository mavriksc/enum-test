import { EnumTestPage } from './app.po';

describe('enum-test App', () => {
  let page: EnumTestPage;

  beforeEach(() => {
    page = new EnumTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
