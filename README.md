# Steps taken

I used the OpenWeatherMap API and added a selector with an event listener to get information depending on the selected city. I stored the necessary data in a useState variable and rendered it in the JSX. Then I used Bulma to style it.

# What could be improved

- At the moment, there is only a console.log if there is no connection to the API. It would be better to do it in a more visual way.
- Add loading.
- To improve the accuracy with the city location, it would be beneficial to use the geocoder API available in OpenWeatherMap.
- Add more information and functionalities.

# Instructions for installation

```
git clone https://github.com/FerAlvarez11/weather-forecast.git

npm install

npm run start
```
