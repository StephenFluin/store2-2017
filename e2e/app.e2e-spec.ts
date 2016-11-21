import { Angularstore2Page } from './app.po';

describe('angularstore2 App', function() {
  let page: Angularstore2Page;

  beforeEach(() => {
    page = new Angularstore2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
