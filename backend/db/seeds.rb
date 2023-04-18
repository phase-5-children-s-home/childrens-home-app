# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🏕 Seeding Data..."

HomeDetail.create(name: "Cottolengo Centre", description: "Cottolengo Centre is a  home for the abandoned and HIV positive children. This centre serves the abandoned and neglected. It was founded by the local fathers and sisters of  Saint Giussepe Cottolengo.", image_url: "http://asec-sldi.org/contentAsset/image/66927b97-d678-4545-9fd9-cdac98b34f32/binaryImage2/filter/Resize,Jpeg/jpeg_q/65/resize_w/825/v/5e3336bf-6ab2-4aa6-bb3a-afee5b106432/", address: "", email: "cottolengos@gmail.com", phone_number: "570-340-6089", location: "")
HomeDetail.create(name: "Imani Children’s Home", description: "Imani Children’s home caters for over 350 orphaned, abandoned, neglected children by giving them basic needs and equipping them to be able members of the society.", image_url: "http://", address: "", email: "", phone_number: "0716630900", location: "")
HomeDetail.create(name: "Rehema Home", description: "Rehema (mercy in Swahili) rescues orphaned and abandoned children in Nairobi, gives them a home and a family. Currently, there are over a hundred kids at Rehema, half of whom are HIV positive.", image_url: "http://", address: "", email: "", phone_number: "0722853265", location: "")
HomeDetail.create(name: "Mully Children’s Home", description: "Since 1989, Mully Children’s Home has rehabilitated and cared for over 12, 000 children and currently has over 3,000 children in Ndalani, Yatta, Kitale, Kilifi, Lodwar and Dar-es-Salaam in Tanzania.", image_url: "http://", address: "", email: "mcf@mullychildrensfamily.org", phone_number: "+254733333121", location: "")
HomeDetail.create(name: "Maji Mazuri Children’s Centre", description: "Maji Mazuri cares for orphans, vulnerable children,  mentally and physically children by giving them a home and a family. You can partner with them by volunteering or donating towards the centre.", image_url: "http://", address: "", email: "", phone_number: "0716179304", location: "")
HomeDetai.create(name: "Angels Centre", description: "Angels Centre takes in little children of age 2 years and under who have been neglected or orphaned. The centre allows the public to volunteer and donate.", image_url: "http://", address: "", email: "", phone_number: "0712218121", location: "")
HomeDetail.create(name: "Slum Child Foundation", description: "The foundation supports children living in the slum by paying for their school fees, providing them with books, sanitary hygiene, exposure trips and rehabilitating them from drug use.", image_url: "http://", address: "", email: "", phone_number: "+254 725 794 820", location: "")
HomeDetail.create(name: "New Life Home Trusts", description: "At New Life Home trusts, you can choose to volunteer, adopt a child, donate to New Life or choose to be a corporate social responsibility partner.", image_url: "http://", address: "", email: "", phone_number: "+254722406 064", location: "")
HomeDetail.create(name: "Nyumbani Children’s Home", description: "Nyumbani Children’s homes takes in children affected by HIV/AIDS. It serves the vulnerable children, the elderly and families affected by HIV/AIDS by various outreaches", image_url: "http://", address: "", email: "info@nyumbani.org", phone_number: "(202) 422-5024", location: "")
HomeDetail.create(name: "Shelter of Hope Centre Kenya", description: "This is a non-profit organization registered under the societies act. They seek to help women and children with specialized empowerment strategies for women", image_url: "http://", address: "", email: "", phone_number: "0725830020", location: "")





10.times do 
    Review.create!(
        amount: Faker::Number.between(from: 1, to: 5)
    )
end


puts "✅ Done seeding!"

