import User from '../models/user';
import moment from 'moment';

// Hardcode the days for the sake of simplicity
// Same for the times
const created = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];
const updated = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const index = (req, res, next) => {
  // Find all movies and return json response
  User.find().lean().exec((err, users) => res.json(
    // Iterate through each user
    { users: users.map(user => ({
      ...user,     // and append
      userId,
      email,
      password,
      male,
      female,
      dateOfBirth,
      firstName,
      lastName,
      created,
      updated,
      height,
      weight,
      goal
    }))}
  ));
};
