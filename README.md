# Flight Search (flight-search)

## Exercise Instructions

### Purpose
This exercise will test your capacity for putting together a small
VueJS SPA. The skeleton has been set up so that you can fill in the details.

### Structure
The app is a flight search app which allows the user to select/enter search
criteria and search for flights.  It should handle the following features:
- A simple responsive form to accept user input in the src/components/FlightSearch.vue (see src/data/flightRequestSample.json). 
- Fires a "flight-search-request" event with the search request parameters when the form is submitted
- Forwards the user to the flight result page to show the results provided in src/data/flightResults.json.  The results do not need to be filtered.

### NOTES
Feel free to use optional layout frameworks such as boostrap or vuetify

Feel free to use 3rd party libraries which you are used to working with

A test skeleton has been provided for the component.

The data files and flightRequest sample to help with the construction are in:
/src/data

You will need to have npm and yarn installed on your machine in order
to develop with this project, see Project Setup below

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
