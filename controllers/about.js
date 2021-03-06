'use strict';

// import all required modules
const logger = require('../utils/logger');

// create dashboard object
const about = {

  // index method - responsible for creating and rendering the view
  index(request, response) {

    // display confirmation message in log
    logger.info('about rendering');

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'About App Board',
    };

    // render the dashboard view and pass through the data
    response.render('about', viewData);
  },
};

// export the dashboard module
module.exports = about;
