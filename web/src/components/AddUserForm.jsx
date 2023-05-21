import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";

export function AddUserForm() {
  const [username, setUsername] = useState("");

  function handleNameChange(e) {
    setUsername(e.target.value);
  }

  function handleButtonClick() {
    const url = "https://czujnikwiatru.pythonanywhere.com/api/users";

    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    });

    window.location.reload();
  }

  return (
    <Grid container item direction="column" ml={20}>
      <Grid item>
        <TextField onChange={handleNameChange} value={username} size="small" />
      </Grid>
      <Grid item mt={1}>
        <Button
          onClick={handleButtonClick}
          sx={{ width: 222.4 }}
          variant="contained"
        >
          Add user
        </Button>
      </Grid>
    </Grid>
  );
}
