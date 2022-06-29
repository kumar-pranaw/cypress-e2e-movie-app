class SearchPage {

    searchForaMovie(searchName: string) {
        cy.get('movies-page').shadow().find('#search').type(searchName);
    }

    getMoviesList() {
      return cy.get('movies-page').shadow().find('#results > ul > movie-list-item');
    }
}

export default SearchPage;