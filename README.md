
  # Off the arts

  # ** include react routing and required nav component **
  
  - an artist can sign up
  <!-- multiple error rendering -->
  - an artist should be able to login and remain logged in
  <!-- artist can login, not persisting -->
  - an artist should be able to logout
  <!-- change login button to say logout and add functionality -->
  - an artist should be able to delete profile and all associated paintings


  - an artist can delete painting
  - an artist can update painting info

  - an artist can view all paintings in their collection

  # backend done -collector can view all museums 
  # backend done -collector can view one museum
  # backend done -collector can add museum to list

- Add a painting form (only if signed in)
  - an artist adds name and description through text input box
  - an artist adds museum through dropdown selction
  - painting is added to an artist collection

  - In paintings page: user can filter paintings by title (search bar), artists (last name a-f, g-m, n-s, t-z), museum (search bar), or in my collection (toggle) (if signed in)

 ** alphabetical pagination -- fetch request

 ** fetches within ruby, within seed file... pull data and loop through, API that has museums and/or paintings

 ** building instances w/o needed belongs_to

 ** db:rollback db:drop

  - In my collection page: collector  can filter paintings by title (search bar), artists (last name a-f, g-m, n-s, t-z), museum (search bar)

  # Models: https://dbdiagram.io/d/644693086b319470511aa29a
  1. Museums= has_many :paintings, has_many :artists, through: :paintings
  2. Artists= has_many :paintings, has_many :museums, through :paintings
  3. Paintings= belongs_to :museum, belongs_to :artist (joins table)


## Museum add button at bottom of museum, with single input box for name
## --> collector is created with user signup?

# Validations
- Museum : must have name and be unique
- Artist: must have unqiue username, and name, and password
- Painting: must have title, artist, museum, and img_url

Use controller validations to alter back end json response to front end. The response should pass your object if the creation, update, or deletion succeeds. However, the response should pass error messages to the front end and display them if the action fails. HINT: Utilize record.errors.

Properly update front end state upon successful response from a POST, PATCH, or DELETE request. That is to say, you should NOT rely on another GET request or redirect to update front end state of your application.

# Frontend Routes
 - Homepage with blurb about site and sign up option, App houses nav bar ----> Homepage / Museums / Paintings / My Collection (My collection only shows up if user is signed in)

Implement authentication/authorization, including password protection. A user must be able to:
sign up with a new user account,
log in to the site with a secure password and stay logged in via user ID in the session hash, and
log out of the site.
Use the React hook useContext to persist your logged in user object in front end state and avoid props drilling.

# Notes

- user (someone who isn't signed in), should not be able to add/remove/update paintings, or view anything specific to 'their' collection (i.e. my collection page, not in my collection filter, etc...)
- from flatiron: a user should only be able to edit and delete resources if they are logged in and the creator of that resource. For example, if we consider the example described below with models of User, DogHouse, and Review, I would only be able to edit or delete the reviews that I created. This protection should occur in the back end of the project. Simply altering the front end to hide the edit & delete buttons is insufficient in terms of security.