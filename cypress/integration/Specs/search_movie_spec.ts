import { SearchModel } from "../../models/SearchModel";
import SearchPage from "../../PageObjects/Search";

describe('Search Movie', () => {
  let model : SearchModel;
   const searchPage = new SearchPage();

    beforeEach(() => {
        cy.visit('http://localhost:8080/')
        cy.fixture('example').then(data => {
          model = data;
      });
      })

      it('Validate doing a Search works as expected', () => {
         searchPage.searchForaMovie(model.name);
         let movieLength = searchPage.getMoviesList();
         movieLength.then(x=> {
          expect(x.length).to.be.greaterThan(0);
         })
      });
})