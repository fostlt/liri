import React from "react";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "../../../api/users";
import { Tasks } from "../../../api/tasks";
import "../../../api/tasks";
import "../../../api/users";
import {
  Card,
  CardMedia,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";

const FocusCard = props => {
  const { classes, user, userId, tasks, values, task } = props;
  console.log(props);
  const onSubmit = value => {};

  return (
    <div className={classes.mainContainer}>
      {/* Fitness Card */}
      <Button
        color="primary"
        onClick={() => {
          let task = "Do at least 10 pull-ups.";
          // const fullday = false
          Meteor.call("task.addTask", task);
          let taskTwo = "Run for at least 30 minutes.";
          // const fullday = false
          Meteor.call("task.addTask", taskTwo);

          let taskThree = "Do stuff";
          Meteor.call("task.addTask", taskThree);
        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Fitness</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="fitness.png"
          />
          <Typography variant="body2" className={classes.text} component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>

      {/* Health Card */}
      <Button
        color="primary"
        onClick={() => {
          let task = "Drink eight glasses of water";
          // const fullday = false
          Meteor.call("task.addTask", task);
          let taskTwo = "I don't know what to write";
          // const fullday = false
          Meteor.call("task.addTask", taskTwo);

          let taskThree = "I need to add proper info here";
          Meteor.call("task.addTask", taskThree);
        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Health</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="/health.png"
          />
          <Typography variant="body2" className={classes.text} component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>

      {/* Productivity Card */}
      <Button
        color="primary"
        onClick={() => {
          let task = "Placeholder";
          Meteor.call("task.addTask", task);
          let taskTwo = "Placeholder";
          Meteor.call("task.addTask", taskTwo);
          let taskThree = "Placeholder";
          Meteor.call("task.addTask", taskThree);
        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Productivity</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="/wait.png"
          />
          <Typography variant="body2" className={classes.text} component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("user");
  Meteor.subscribe("tasks");
  return {
    user: Users.find({}).fetch(),
    userId: Meteor.userId(),
    tasks: Tasks.find({}).fetch()
  };
})(withStyles(styles)(FocusCard));
