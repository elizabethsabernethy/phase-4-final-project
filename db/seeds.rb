# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

museum1 = Museum.create({name: "Louvre"})
museum2 = Museum.create({name: "Smithsonian"})
museum3 = Museum.create({name: "Art Place"})

artist1 = Artist.create({name: "Sam Jones", username: "pippy_longbrush", password_digest: "Art_1s_L1FE!"})

painting1 = Painting.create({title: "Here I Am", img_url: "https://secure.img1-cg.wfcdn.com/im/56011033/resize-h445%5Ecompr-r85/1359/135958822/Vermillion+Landscape+I+by+Katrina+Pete+-+Wrapped+Canvas+Painting.jpg", description: "Super good painting of pretty stuff", artist_id: 1, museum_id: 2})

painting1 = Painting.create({title: "Flowery Fields", img_url: "https://secure.img1-cg.wfcdn.com/im/56011033/resize-h445%5Ecompr-r85/1359/135958822/Vermillion+Landscape+I+by+Katrina+Pete+-+Wrapped+Canvas+Painting.jpg", description: "The best painting of things", artist_id: 1, museum_id: 3})