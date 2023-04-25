
  # The Art of Collection

  # ** include react routing and required nav component **
  
  - a user can become a collector by signing up
  - a collector should be able to login and remain logged in
  - a collector should be able to logout


  - collector can delete painting
  - collector can update painting name, museum, or artist

  - collector can view all paintings in their collection
  - collector can view one specific painting in their collection

  - collector can view all paintings from all museums
  - collector can view all paintings from one museum
  - collector can view one specific painting from a museum

  - collector can add a painting from a museum to their collection, or see that a painting is already in their collection

- Add a painting form (only if signed in)
  - collector adds name and artist through text input box
  - collector adds museum through dropdown selction
  - painting is added to collectors collection

  - In paintings page: user/collector can filter paintings by title (search bar), artists (last name a-f, g-m, n-s, t-z), museum (search bar), or not in my collection (toggle) (if signed in)

  - In my collection page: collector  can filter paintings by title (search bar), artists (last name a-f, g-m, n-s, t-z), museum (search bar)

  # Models: https://dbdiagram.io/d/644693086b319470511aa29a
  1. Museums= has_many :paintings, has_many :collectors, through: :paintings
  2. Collectors= has_many :paintings, has_many :museums, through: :paintings
  3. Paintings= belongs_to :museum, belongs_to :collector (joins table)


## Museum add button at bottom of museum, with single input box for name
## --> collector is created with user signup?

# Validations
- Museum : must have name and be unique
- Collector: must have unqiue username
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