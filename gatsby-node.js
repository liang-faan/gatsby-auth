// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/*"
  
      // Update the page.
      createPage(page)
    }

    // if(page.path.match(/^\/404\/$/)){
    //     console.log("page not found"+page.path);
    //     page.matchPath="/404"
    //     createPage(page)
    // }

  }