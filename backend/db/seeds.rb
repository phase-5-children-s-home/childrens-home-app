# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroying Data..."

HomeDetail.destroy_all

puts "Database erased, waiting to seed  new data ✅"

puts "🏕 Seeding new Data..."

HomeDetail.create(name: "Cottolengo Centre", description: "Cottolengo Centre is a  home for the abandoned and HIV positive children. This centre serves the abandoned and neglected. It was founded by the local fathers and sisters of  Saint Giussepe Cottolengo.", image_url: "https://cottolengokenya.org/wp-content/uploads/2022/03/Heritage-of-Bl.-Maria-Carola-Cecchin.png", address: "123 kinembe rd", email: "cottolengos@gmail.com", phone_number: "570-340-6089", location: "Mombasa")
HomeDetail.create(name: "Imani Children’s Home", description: "Imani Children’s home caters for over 350 orphaned, abandoned, neglected children by giving them basic needs and equipping them to be able members of the society.", image_url: "https://theflowerhub.net/wp-content/uploads/2021/07/WhatsApp-Image-2021-06-30-at-12.28.58-PM-8.jpeg", address: "PW98+58X, Nairobi", email: "imanihome@gmail.com", phone_number: "0716630900",  location: "Nairobi")
HomeDetail.create(name: "Rehema Home", description: "Rehema (mercy in Swahili) rescues orphaned and abandoned children in Nairobi, gives them a home and a family. Currently, there are over a hundred kids at Rehema, half of whom are HIV positive.", image_url: "https://images.squarespace-cdn.com/content/v1/557332e4e4b0601c9ccb9a6e/1440638693391-89K441KTXZ2IBA93L1RD/image-asset.jpeg?format=500w", address: "Mukima Drive", email: "info@rehemahome.org", phone_number: "0722853265", location: "Mombasa")
HomeDetail.create(name: "Mully Children’s Home", description: "Since 1989, Mully Children’s Home has rehabilitated and cared for over 12, 000 children and currently has over 3,000 children in Ndalani, Yatta, Kitale, Kilifi, Lodwar and Dar-es-Salaam in Tanzania.", image_url: "https://www.facebook.com/photo/?fbid=413974477435231&set=a.413974427435236", address: "Wood Gardens, Off Wood Avenue", email: "mcf@mullychildrensfamily.org", phone_number: "0733333121")
HomeDetail.create(name: "Maji Mazuri Children’s Centre", description: "Maji Mazuri cares for orphans, vulnerable children,  mentally and physically children by giving them a home and a family. You can partner with them by volunteering or donating towards the centre.", image_url: "https://www.movingmountainstrust.org/media/660328/a-big-ecd-jambo-from-some-of-the-children-who-attend-the-nursery-daily_7514636406_o.jpg?width=490.67300658376007&height=500", address: "45603 – 00100 G.P.O", email: "info@majimazuri.org", phone_number: "0716179304", location: "Kisumu")
HomeDetail.create(name: "Angels Centre", description: "Angels Centre takes in little children of age 2 years and under who have been neglected or orphaned. The centre allows the public to volunteer and donate.", image_url: "http://4.bp.blogspot.com/-TqrYyv5sgHU/VF0ZQO4-rII/AAAAAAAAE3M/nmE4mqB4Cdc/s1600/tfh%2Bweb.jpg", address: "465-01 kibiko rd", email: "angelscentre125@gmail.com", phone_number: "0712218121", location: "Central")
HomeDetail.create(name: "Slum Child Foundation", description: "The foundation supports children living in the slum by paying for their school fees, providing them with books, sanitary hygiene, exposure trips and rehabilitating them from drug use.", image_url: "https://slumchildfoundation.org/wp-content/uploads/2022/03/IMG_0124.jpg", address: "Engyo Plaza, First floor Door Four, Along Kamunde road", email: "slumchildfoundation@gmail.com", phone_number: "0725794820", location: "Nairobi")
HomeDetail.create(name: "New Life Home Trusts", description: "At New Life Home trusts, you can choose to volunteer, adopt a child, donate to New Life or choose to be a corporate social responsibility partner.", image_url: "https://newlifehometrust.org.uk/wp-content/uploads/2017/08/New-NLHT-logo-white1.png", address: "107, Teignmouth,TQ14 4BQ", email: "admin@newlifehometrust.org.uk", phone_number: "+254722406 064", location: "Central")
HomeDetail.create(name: "Nyumbani Children’s Home", description: "Nyumbani Children’s homes takes in children affected by HIV/AIDS. It serves the vulnerable children, the elderly and families affected by HIV/AIDS by various outreaches", image_url: "https://i1.wp.com/www.nyumbani.org/wp-content/uploads/2015/07/home_aids_village3.jpg", address: "710-01 kingwiti rd", email: "info@nyumbani.org", phone_number: "(202) 422-5024", location: "Kisumu")
HomeDetail.create(name: "Shelter of Hope Centre Kenya", description: "This is a non-profit organization registered under the societies act. They seek to help women and children with specialized empowerment strategies for women", image_url: "https://i2.wp.com/www.nyumbani.org/wp-content/uploads/2015/07/NyumbaniBoyDenimFood.png?w=403&ssl=1", address: "Buru Buru Business Complex,2nd Flr, Rm 32", email: "info@shelterofhopekenya.com", phone_number: "0725830020", location: "Nairobi")





# 10.times do 
#     Review.create!(
#         amount: Faker::Number.between(from: 1, to: 5)
#     )
# end


puts "✅ Done seeding!"

