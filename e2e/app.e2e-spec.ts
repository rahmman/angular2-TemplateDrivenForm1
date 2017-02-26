import { TempDrivenFormPage } from './app.po';

describe('temp-driven-form App', function() {
  let page: TempDrivenFormPage;

  beforeEach(() => {
    page = new TempDrivenFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
