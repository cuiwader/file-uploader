import { UploaderClientPage } from './app.po';

describe('uploader-client App', function() {
  let page: UploaderClientPage;

  beforeEach(() => {
    page = new UploaderClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
