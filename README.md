# BRUGG API :beer:

#

## Description

Using Node.js and the Express framework, this RESTful API delivers data about breweries in Iceland. Contact xxx@xxx.com to get your brewery listed on the API. This API is available to anyone for non-commercial purposes for the time being.

#

## Endpoints;

BRUGG API has two endpoints;

/api/breweries lists breweries in Iceland with information about location, contact information, their logo and their catalog of beers. The data accessable from this endpoint is hosted on Googles Firebase and is fetched/updated once every 24 hours.

/api/beers has the entire catalog of all beers in listed breweries. This data is hosted locally with the API.
