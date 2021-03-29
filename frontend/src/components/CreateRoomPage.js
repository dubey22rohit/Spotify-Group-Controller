import React, { useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

const CreateRoomPage = (props) => {
  let defaultVotes = 2;
  const [votesToSkip, setVotesToSkip] = useState(defaultVotes);
  const [guestCanPause, setGuestCanPause] = useState(true);

  const handleVotesChanged = (e) => {
    const result = e.target.value;
    setVotesToSkip(result);
  };
  const handleGuestCanPauseChange = (e) => {
    const result = e.target.value === "true" ? true : false;
    setGuestCanPause(result);
  };
  const handleRoomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
      }),
    };
    fetch("/api/create-room", requestOptions)
      .then((res) => res.json())
      .then((data) => props.history.push("/room/" + data.code));
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create A Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>
            <div align="center">Guest Control of Playback State</div>
            <RadioGroup
              row
              defaultValue="true"
              onChange={handleGuestCanPauseChange}
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormHelperText>
        </FormControl>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required
              type="number"
              onChange={handleVotesChanged}
              defaultValue={defaultVotes}
              inputProps={{
                min: 1,
                style : { textAlign : "center"}
              }}
             
            />
            <FormHelperText>
              <div align="center">Votes Required to skip</div>
            </FormHelperText>
          </FormControl>
          <Grid item xs={12} align="center">
            <Button
              color="primary"
              variant="contained"
              onClick={handleRoomButtonPressed}
            >
              Create A Room
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/">
              Back
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CreateRoomPage;
