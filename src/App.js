import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ExploreIcon from "@material-ui/icons/Explore";
import getLocationWeather from "./getLocationWeather";



function App() {
  const classes = useStyles();

  const [state, setstate] = useState({
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    ],
    base: "",
    main: {
      feels_like: 0,
      temp: 0,
      pressure: 0,
      hummidity: 0,
      temp_min: 0,
      temp_max: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
    clouds: {
      all: 0,
    },
    sys: {
      country: "",
      id: 0,
      message: 0,
      sunrise: 0,
      sunset: 0,
      type: 0,
    },
    dt: 0,
    timezone: 0,
    id: 0,
    name: "London",
    cod: 0,
  });

  React.useEffect(() => {
    const getWeather = async () => {
      const result = await getLocationWeather("espoo");
      setstate(result.data);
    };
    getWeather();
  }, []);

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item className={classes.wrapper}>
          <WbSunnyIcon className={classes.icon} />
          <Typography component="h3" variant="h5">
            Weather data {state.main.temp}
          </Typography>
        </Grid>
        <Grid item className={classes.wrapper}>
          <ExploreIcon className={classes.icon} />
          <Typography component="h3" variant="h5">
            City {state.name}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EEE5E9",
    height: "100vh",
    width: "100wh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    height: 170,
    width: 100,
    color: "#2B303A",
    fontSize: "50pt",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(3),
  },
}));
