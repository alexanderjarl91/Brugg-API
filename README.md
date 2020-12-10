# BRUGG API :beer: v 0.1.0


## Description

Using Node.js and the Express framework, this RESTful API delivers data about breweries in Iceland. This API is hosted on Heroku and was created for a school project.

https://brugg-api.herokuapp.com/

> :warning: **This is an outdated version of the API**: A new Brugg API is in development at another repo for the time being: https://github.com/alexanderjarl91/strapi-brugg/


## Authentication

There is no authentication needed right now to consume this API. Just fetch from the given endpoint directly.

###### Authentication in the form of an API key will be implemented in the near future so if your application suddently doesn't have access to the data, thats probably why.

## Responses

All responses return data in JSON format.

#### Example:

```
[
    { "name":"Kaldi"
      "location":"Ársskógssandur"
    }
]
```

## Endpoints;

BRUGG API has two endpoints;

### /breweries

```
https://brugg-api.herokuapp.com/breweries
```

This endpoint lists breweries in Iceland with information about location, contact information, their logo and their catalog of beers. The data accessable from this endpoint is hosted on Googles Firebase and is fetched/updated once every 24 hours.

### /beers

```
https://brugg-api.herokuapp.com/beer
```

This endpoint has the entire catalog of all beers in listed breweries. This data is hosted locally with the API.

#

Contact xxx@xxx.com to get your brewery listed. This API is available to anyone for non-commercial purposes for the time being.
