
import React,{createContext,useEffect,useState} from "react";
import axios from 'axios';



export const Store=createContext();
const ContextApi=(props)=>{
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchdata =async()=>{
      try{
        const response = await axios.get('https://react-bg.onrender.com/api/blog');
        setData(response.data);
      }
      catch(err){
        console.log("error in fetch",err)
      }
    }
    fetchdata();

  },[])



//     const [data]=useState([
//       // Bollywood data...
//       {
//         id:1,
//         Title:"Gadar 2",
//         Category:"Bollywood",
//         image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/617f7444-525e-4d9d-8cd6-11987e43ce86_1-sixteen_nine.jpg?VersionId=Rj0w2RAz3_O4kUSaNrRJeYcUqYUWrkWV&size=690:388",
//         Description:"When Tara Singh goes missing during a skirmish and is believed to be captured in Pakistan, his son Jeete sets out to rescue him and enters a labyrinth from which they both must escape at all costs.Gadar 2 was theatrically released on 11 August 2023 and became a commercial success, grossing over ₹681.35 crore (US$85 million) worldwide against a production budget of ₹60 crore (US$7.5 million). It is the third highest-grossing Indian film of 2023 as well as the second highest-grossing Hindi film of all time."

//       },
//           {
//         id:2,
//         Title:"Jawan",
//         Category:"Bollywood",
//         image:"https://www.livemint.com/lm-img/img/2023/07/11/600x338/Jawan_1689069088718_1689069098009.jpg",
//         Description:"Shah Rukh Khan's Jawan has created a buzz with its thrilling Prevue which was released recently and showcased King Khan is never-seen-before avatar. The film is set to be released on 7 September and is expected to become another blockbuster.Jawan was theatrically released on 7 September 2023 in standard, IMAX, 4DX and other premium formats in Hindi along with dubbed versions of Tamil and Telugu languages. Initially, the film was slated for release on June 2, 2023. However, in May 2023, it was reported that the film is delayed to August 2023."
//       },
//       { id:3,
//         Title:"Padmavat",
//         Category:"Bollywood",
//        image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2018/01/padmaavat-movie-review-2.jpg",
//        Description:"Based on the epic poem of the same Title by Malik Muhammad Jayasi, it stars Deepika Padukone as Rani Padmavati, a Rajput queen known for her beauty, wife of Maharawal Ratan Singh, played by Shahid Kapoor. Sultan Alauddin Khalji, played by Ranveer Singh, hears of her beauty and attacks her kingdom to enslave her.Padmaavat is a 2018 Indian Hindi-language historical drama film directed by Sanjay Leela Bhansali. Based on the epic poem of the same name by Malik Muhammad Jayasi, it stars Deepika Padukone as Rani Padmavati, a Rajput queen known for her beauty, wife of Maharawal Ratan Singh, played by Shahid Kapoor."
//     },
   
//     {
//         id:4,
//         Title:"Lagan",
//         Category:"Bollywood",
//         image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/06/reunion-special-chale-chalo-lagaan-once-upon-to-mark-20-years-of-film-001.jpg",
//         Description:" The farmers of Champaner village in the Central India Agency depend on monsoon rains for their livelihood. A delayed start to the monsoon has them worried and they head to the ruling British cantonment, to ask the King of Champaner, Puran Singh for an exemption from the year's land tax (Lagaan).Lagaan: Once Upon a Time in India ( transl. Land tax) is a 2001 Indian Hindi-language epic musical sports drama film written and directed by Ashutosh Gowariker. The film was produced by Aamir Khan, who stars alongside debutant Gracy Singh and British actors Rachel Shelley and Paul Blackthorne."
//     },
//     {
//         id:5,
//         Title:"Baghban",
//         Category:"Bollywood",
//         image:"https://www.meinstyn.com/wp-content/uploads/2016/12/Baghban-Movie-Poster-Salman-Khan-Amitabh-Bachchan-Hema-Malini-Full-HD-Desktop-Wallpaper-1019x550.jpg",
//         Description:"It tells the story of an elderly couple, Raj (Amitabh Bachchan) and Pooja (Hema Malini), who have been married for 40 years. After Raj retires, they reunite with their four sons (Aman Verma, Samir Soni, Saahil Chadha, and Nasir Khan) to discuss who will support them.It tells the story of an elderly couple, Raj (Amitabh Bachchan) and Pooja (Hema Malini), who have been married for 40 years. After Raj retires, they reunite with their four sons (Aman Verma, Samir Soni, Saahil Chadha, and Nasir Khan) to discuss who will support them."

//     },
//     {
//         id:6,
//         Title:"Kashmir Files",
//         Category:"Bollywood",
//         image:"https://gumlet.assettype.com/iglobalnews%2F2022-03%2Fd7e1a267-b349-43cd-a403-da0f06d04b74%2F22_03_iEnt_Reviews_Kashmir_1.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=768",
//         Description:"The Kashmir Files is a 2022 Indian Hindi-language drama film written and directed by Vivek Agnihotri. The film presents a fictional storyline centered around the 1990 exodus of Kashmiri Hindus from Indian-administered Kashmir. It explores the harrowing events and struggles faced by the Kashmiri Pandit community during that period."

//       },
//       {
//         id:7,
//         Title:"Ek Tha Tiger",
//         Category:"Bollywood",
//        image:"https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/53197603.jpg",
//        Description:"Ek Tha Tiger is an action-packed Bollywood film that follows the story of India's top spy, Tiger, and his love, Zoya. They both navigate the dark world of intelligence and espionage, where their love is forbidden. The film combines thrilling action sequences with a compelling love story"

//        },
//          {
//         id:8,
//         Title:"Vivah",
//         Category:"Bollywood",
//         image:"https://e0.pxfuel.com/wallpapers/99/211/desktop-wallpaper-vivah-vivah-shahid-kapoor-amrita-rao.jpg",
//         Description:"Vivah is a 2006 Indian romantic drama film written and directed by Sooraj R. Barjatya. Starring Amrita Rao and Shahid Kapoor, the film is produced and distributed by Rajshri Productions. Vivah tells the heartwarming story of two individuals and their journey from engagement to marriage and the challenges they face along the way."
//       },
//       {
//         id: 9,
//         Title: "Bahubali: The Beginning",
//         Category: "Bollywood",
//        image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/07/5-years-of-s-s-rajamoulis-baahubali-the-beginning-the-film-that-gave-rise-to-an-all-time-blockbuster-001.jpg",
//        Description: "Bahubali: The Beginning is an epic historical action film directed by S. S. Rajamouli. The story revolves around Shiva, who learns about his royal heritage and embarks on a quest to reclaim his kingdom. The film is known for its grandeur and visual effects.."
//     },
//     {
//         id: 10,
//         Title: "Kabhi Khushi Kabhie Gham",
//         Category: "Bollywood",
//       image: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2017/12/0fd0fb63a60e921e3ea7c72b5a89830e-ls-xl-1513333759.jpg",
//       Description: "Kabhi Khushi Kabhie Gham is a family drama film directed by Karan Johar. It revolves around the wealthy Raichand family and explores the relationships and conflicts within the family members. The film features an ensemble cast and themes of love, family, and reconciliation"
//     },
//     {
//         id: 11,
//         Title: "Gully Boy",
//         Category: "Bollywood",
//         image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/gully-boy-movie-review_0.jpeg?size=690:388",
//         Description: "Gully Boy is a musical drama film that showcases the journey of a young rapper from the streets of Mumbai. It stars Ranveer Singh as the aspiring rapper and Alia Bhatt as his love interest. The film delves into the world of underground rap music in India and the struggles faced by the protagonist as he seeks to make a name for himself in the music industry."
//     },
//     {
//         id: 12,
//         Title: "Koi Mil Gaya",
//         Category: "Bollywood",
//         image: "https://images.cnbctv18.com/wp-content/uploads/2023/08/Koi-Mil-Gaya-poster-1019x573.jpg?impolicy=website&width=617&height=264",
//         Description: "Koi Mil Gaya is a science fiction film that tells the story of Rohit, a mentally challenged young man who befriends an extraterrestrial being. Hrithik Roshan plays the lead role in the film. The story revolves around the bond between Rohit and the alien, who possesses special powers, and their journey to protect each other from various challenges."
//     },
//     {
//         id: 13,
//         Title: "Kuch Kuch Hota Hai",
//         Category: "Bollywood",
//         image: "https://i0.wp.com/urbanasian.com/wp-content/uploads/2018/10/Kuch-Kuch-Hota-Hai.jpeg?resize=768%2C465&ssl=1",
//         Description: "Kuch Kuch Hota Hai is a romantic drama film directed by Karan Johar. The film explores the love triangle between Rahul, Tina, and Anjali, played by Shah Rukh Khan, Rani Mukerji, and Kajol, respectively. The story follows their intertwining destinies, friendships, and the power of love that transcends time."
//     },
//     {
//         id: 14,
//         Title: "PK",
//         Category: "Bollywood",
//         image: "https://moviekoop.com/Images/Cover_Photos/PK.jpg",
//         Description: " PK is a satirical comedy-drama film that explores the journey of an alien named PK, played by Aamir Khan, who arrives on Earth and questions religious and social norms. The film takes a humorous yet thought-provoking approach to tackle various societal issues, superstitions, and beliefs. PK's innocent and inquisitive nature leads to a series of comical and insightful encounters as he tries to understand human behavior."
//     },
//     {
//         id: 15,
//         Title: "Dilwale Dulhania Le Jayenge",
//         Category: "Bollywood",
//         image: "https://www.thestatesman.com/wp-content/uploads/2022/11/Screenshot-2022-11-01-110525.jpg",
//         Description: "Dilwale Dulhania Le Jayenge, often abbreviated as DDLJ, is a classic romantic film that has captured the hearts of audiences for decades. Directed by Aditya Chopra, the film stars Shah Rukh Khan as Raj and Kajol as Simran. The story follows the love story of Raj and Simran as they embark on a journey across Europe. However, their love faces numerous obstacles, including Simran's arranged marriage.DDLJ is celebrated for its iconic train scene, memorable dialogues, and timeless music. It redefined romance in Bollywood and remains one of the most beloved and enduring films in Indian cinema. The film's message of love, tradition, and family values continues to resonate with audiences worldwide, making it an enduring classic in the world of Indian cinema."
//     },


//   //  Hollywood data...
    
//     {
//           id: 16,
//         Category: "Hollywood",
//           Title: "The Shawshank Redemption",
//           image: "https://mcdn.wallpapersafari.com/medium/0/25/8A1viP.jpg",
//           Description: "The Shawshank Redemption is a classic Hollywood film based on Stephen King's novella. Directed by Frank Darabont, the film tells the story of Andy Dufresne, a banker who is wrongly convicted of murder and sentenced to Shawshank State Penitentiary. The film explores themes of hope, friendship, and the human spirit as Andy forms a bond with fellow inmate Red and attempts to escape from prison."
//         },
//         {
//           id: 17,
//           Category: "Hollywood",
//           Title: "The Godfather",
//           image: "https://images.moneycontrol.com/static-mcnews/2020/07/THE-GODFATHER-770x433.jpg?impolicy=website&width=770&height=431",
//           Description: "The Godfather is a legendary crime drama film directed by Francis Ford Coppola. It is based on Mario Puzo's novel and follows the story of the powerful Italian-American Mafia family, the Corleones. The film stars Marlon Brando, Al Pacino, and James Caan. The Godfather is known for its iconic performances, intricate storytelling, and its portrayal of the mafia's complex world."
//         },
//         {
//           id: 18,
//           Category: "Hollywood",
//           Title: "Pulp Fiction",
//           image: "https://cdn.shopify.com/s/files/1/0037/8008/3782/files/Pulp_Fiction_Banner_with_Reflection_1024x1024.png?v=1637690776",
//           Description: "Pulp Fiction, directed by Quentin Tarantino, is a critically acclaimed crime film known for its nonlinear narrative and unique storytelling style. The film weaves together multiple interconnected stories involving hitmen, gangsters, and other eccentric characters. With a star-studded cast, including John Travolta, Samuel L. Jackson, Uma Thurman, and Bruce Willis, Pulp Fiction is celebrated for its sharp dialogue and memorable scenes."
//         },
//         {
//           id: 19,
//           Category: "Hollywood",
//           Title: "The Dark Knight",
//           image: "https://images4.alphacoders.com/573/thumbbig-57394.webp",
//           Description: "The Dark Knight is the second installment in Christopher Nolan's Batman trilogy. The film features Christian Bale as Batman and Heath Ledger's iconic portrayal of the Joker. The story explores the battle between Batman and the Joker as Gotham City faces chaos and moral dilemmas. The Dark Knight is renowned for Ledger's posthumous Academy Award-winning performance and its exploration of the darker side of superhero storytelling."
//         },
//         {
//           id: 20,
//           Category: "Hollywood",
//           Title: "Schindler's List",
//           image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GWXxksXY1kTMVqyk_-bacQ.png",
//           Description: "Schindler's List, directed by Steven Spielberg, is a powerful and emotionally impactful historical drama. The film is based on the true story of Oskar Schindler, a German businessman who saved the lives of over a thousand Polish-Jewish refugees during the Holocaust. It is a harrowing depiction of one man's efforts to make a difference in the face of unimaginable suffering."
//         },
//         {
//           id: 21,
//           Category: "Hollywood",
//           Title: "Forrest Gump",
//           image: "https://cinemadetective.com/wp-content/uploads/2020/05/forrest-gump.jpg",
//           Description:"Forrest Gump is a heartwarming and inspirational film directed by Robert Zemeckis. It tells the life story of Forrest Gump, portrayed by Tom Hanks, a man with low intelligence but a good heart. Despite his challenges, Forrest becomes involved in several pivotal moments in American history. The film explores themes of love, destiny, and the simple joys of life. It is celebrated for its memorable quotes and iconic scenes."
//         }, 
//         {
//           id: 22,
//           Category: "Hollywood",
//           Title: "Inception",
//           image: "https://images3.alphacoders.com/610/thumbbig-610318.webp",
//           Description: "Inception, directed by Christopher Nolan, is a mind-bending science fiction thriller. The film explores the concept of entering and manipulating dreams through a process known as inception. Dom Cobb, played by Leonardo DiCaprio, is a skilled thief who specializes in the art of entering people's dreams to steal their secrets. The film takes the audience on a visually stunning and psychologically complex journey through layers of dreams within dreams."
//         },
//         {
//           id: 23,
//           Category: "Hollywood",
//           Title: "The Matrix",
//           image: "https://cdn.vox-cdn.com/thumbor/hw5ag2xnbJkmOPi0-g7cvNH7QJw=/0x0:2764x4096/1820x1024/filters:focal(1157x2163:1599x2605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70296586/matrixposters.0.jpeg",
//           Description: "The Matrix, directed by the Wachowskis, is a groundbreaking science fiction film known for its innovative visual effects and philosophical themes. The story follows Neo, portrayed by Keanu Reeves, who discovers that the reality he knows is a simulated computer program created by intelligent machines. Neo joins a group of rebels in their fight against the machines, leading to a mind-bending exploration of the nature of reality and freedom."
//         },
//         {
//           id: 24,
//           Category: "Hollywood",
//           Title: "The Lord of the Rings: The Return of the King",
//           image: "https://webdevolutions.blob.core.windows.net/cms/assets/lord_of_the_ring_trilogy_fc41c807b6.png",
//           Description: "The Lord of the Rings: The Return of the King is the epic conclusion to Peter Jackson's film adaptation of J.R.R. Tolkien's fantasy masterpiece. The film follows the final stages of the quest to destroy the One Ring and features epic battles, complex characters, and a richly realized fantasy world. It won multiple Academy Awards, including Best Picture, and is celebrated for its storytelling and visual effects."
//         },
//         {
//           id: 25,
//           Category:"Hollywood",
//           Title:"Star Wars: Episode IV - A New Hope",
//           image:"https://e1.pxfuel.com/desktop-wallpaper/471/1019/desktop-wallpaper-star-wars-episode-iv-a-new-hope-movie-hq-star-wars-star-wars-episode-iv-a-new-hope.jpg",
//           Description: " Star Wars: Episode IV - A New Hope, directed by George Lucas, is the original film that launched the iconic Star Wars franchise. It introduces audiences to a galaxy far, far away, where young Luke Skywalker joins forces with Jedi Knights and rebels to battle the evil Galactic Empire. The film is a space opera adventure filled with memorable characters like Darth Vader, Princess Leia, and Han Solo."
//         },
//         {
//           id: 26,
//           Category: "Hollywood",
//           Title: "Avatar",
//           image: "https://static.toiimg.com/thumb/msid-96546364,imgsize-94840,width-400,resizemode-4/96546364.jpg",
//           Description: "Avatar, directed by James Cameron, is a groundbreaking science fiction film set on the lush and alien world of Pandora. The story follows Jake Sully, portrayed by Sam Worthington, as he becomes an avatar and becomes part of the indigenous Na'vi people's struggle against human colonization. The film is known for its groundbreaking use of 3D technology and visual effects, as well as its environmental and anti-imperialism themes."
//         },
//         {
//           id: 27,
//           Category: "Hollywood",
//           Title: "Jurassic Park",
//           image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/jurassic-park-movies-in-order.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
//           Description: "Jurassic Park, directed by Steven Spielberg, is a classic science fiction adventure film that brings dinosaurs back to life through genetic engineering. A group of people visits a dinosaur theme park, but things take a terrifying turn when the dinosaurs escape and wreak havoc. The film is known for its groundbreaking visual effects and suspenseful storytelling."
//         },
//         {
//           id: 28,
//           Category: "Hollywood",
//           Title: "Gladiator",
//           image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/russell-crowe-gladiator.png?q=50&fit=contain&w=1140&h=&dpr=1.5",
//           Description: "Gladiator, directed by Ridley Scott, is a historical epic that tells the story of Maximus Decimus Meridius, portrayed by Russell Crowe, a former Roman general who seeks revenge against the corrupt emperor who murdered his family and sent him into slavery. The film is known for its epic battles, memorable characters, and Crowe's powerful performance."
//         },
//         {
//           id: 29,
//           Category: "Hollywood",
//           Title: "Eternal Sunshine of the Spotless Mind",
//           image: "https://images2.alphacoders.com/700/thumbbig-700619.webp",
//           Description:"Eternal Sunshine of the Spotless Mind, directed by Michel Gondry, is a unique romantic science fiction film. It explores the concept of erasing memories of a failed relationship through a medical procedure. Joel and Clementine, played by Jim Carrey and Kate Winslet, undergo the procedure, but as their memories are erased, they realize the depth of their love. The film is a poignant and imaginative exploration of love and memory."
//         },
//         {
//           id: 30,
//           Category: "Hollywood",
//           Title: "Forrest Gump",
//           image: "https://cinemadetective.com/wp-content/uploads/2020/05/forrest-gump.jpg",
//           Description: " Forrest Gump is a heartwarming and inspirational film directed by Robert Zemeckis. It tells the life story of Forrest Gump, portrayed by Tom Hanks, a man with low intelligence but a good heart. Despite his challenges, Forrest becomes involved in several pivotal moments in American history. The film explores themes of love, destiny, and the simple joys of life. It is celebrated for its memorable quotes and iconic scenes."
//         },

//       // Food data...
    
//           {
//             id: 31,
//             Category: "Food",
//             Title: "Margherita Pizza",
//             image: "https://static.toiimg.com/thumb/56868564.cms?imgsize=1948751&width=509&height=340",
//             Description: "Margherita Pizza is a classic Italian pizza known for its simplicity and deliciousness. It features a thin crust topped with ripe tomatoes, fresh mozzarella cheese, fragrant basil leaves, and a drizzle of olive oil. This pizza is a celebration of the flavors of Italy and is loved by pizza enthusiasts worldwide."

//           },
//           {
//             id: 32,
//             Category:  "Food",
//             Title: "Masala Dosa",
//             image: "https://media-cdn2.greatbritishchefs.com/media/cqfbszpf/pali-hill0064-selects.whqc_768x512q80.webp",
//             Description: "Masala Dosa is a popular South Indian dish cherished for its crispy, paper-thin rice crepe filled with a spiced potato filling. It's typically served with coconut chutney and sambar, a flavorful lentil soup. Masala Dosa is a delightful combination of textures and flavors, making it a beloved breakfast or snack option."
//           },
//           {
//             id: 33,
//             Category:  "Food",
//             Title: "Classic Burger",
//             image: "https://olo-images-live.imgix.net/1a/1ae3d77e75214fe3bba884fdec09872d.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=d8c3fa6b69f3b12430be6e37b6dbbf12",
//             Description: "The Classic Burger is an all-time favorite American fast-food staple. It consists of a juicy beef patty, fresh lettuce, tomato slices, pickles, onions, cheese, and condiments like ketchup and mustard, all sandwiched between a soft bun. It's the epitome of comfort food and a go-to choice for burger enthusiasts."

//           },
//           {
//             id: 34,
//             Category:  "Food",
//             Title: "Guacamole & Chips",
//             image: "https://recipecontent.fooby.ch/11662_3-2_1560-1040.jpg",
//             Description: "Guacamole & Chips is a beloved Mexican appetizer. Guacamole is a creamy dip made from ripe avocados, onions, tomatoes, cilantro, lime juice, and spices. It's best enjoyed with crispy tortilla chips for a delightful combination of textures and flavors. This snack is perfect for sharing and adds a touch of freshness to any gathering."

//           },
//           {
//             id: 35,
//             Category:  "Food",
//             Title: "vada pav",
//             image: "https://www.nehascookbook.com/wp-content/uploads/2022/09/Ahemdabad-style-vada-pav-WS-768x432.jpg.webp",
//             Description: "Vada Pav is a popular street food from Mumbai, India. It features a spicy potato fritter (vada) served in a soft bun (pav) along with chutneys. The vada is made from mashed potatoes seasoned with aromatic spices and deep-fried to perfection. Vada Pav is a flavorful and satisfying snack that's enjoyed by people of all ages."

//           },
//           {
//             id: 36,
//             Category:  "Food",
//             Title: "Greek Salad",
//             image: "https://hips.hearstapps.com/hmg-prod/images/greek-salad-1621025497.jpg?crop=0.830xw:0.554xh;0.0357xw,0.213xh&resize=1200:*",
//             Description: "Greek Salad is a refreshing and healthy Mediterranean dish. It consists of crisp cucumbers, ripe tomatoes, red onions, Kalamata olives, and creamy feta cheese, all tossed in a zesty dressing made with olive oil and Greek herbs. This salad is known for its vibrant colors and bold flavors, making it a delightful side dish or light meal."

//           },
//           {
//             id: 37,
//             Category:  "Food",
//             Title: "Pad Thai",
//             image: "https://aaronandclaire.com/wp-content/uploads/2022/08/PADTHAI-1024x576.jpg",
//             Description: "Pad Thai is a popular Thai stir-fried noodle dish that balances sweet, sour, salty, and spicy flavors. It typically includes rice noodles, tofu or shrimp, bean sprouts, peanuts, and lime. The dish is coated in a tangy tamarind-based sauce and is garnished with fresh herbs. Pad Thai is a harmonious fusion of textures and tastes."

//           },
//           {
//             id: 38,
//             Category:  "Food",
//             Title: "Croissant",
//             image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/405px-2018_01_Croissant_IMG_0685.JPG",
//             Description: "The Croissant is a beloved French pastry known for its flaky, buttery layers and crescent shape. Made from a yeast-leavened dough and ample butter, croissants are baked to a golden brown perfection. They can be enjoyed plain, with jam, or filled with various sweet or savory fillings. Croissants are a staple of French bakeries and a delightful treat for breakfast or anytime."

//           },
//           {
//             id: 39,
//             Category:  "Food",
//             Title: "Roasted Vegetable Platter",
//             image: "https://greenkitchenstories.com/wp-content/uploads/2018/03/Grain_platter_1-800x533.jpg",
//             Description: "The Roasted Vegetable Platter is a hearty and wholesome dish that celebrates the flavors of fresh, seasonal vegetables. Vegetables like bell peppers, zucchini, carrots, and eggplant are roasted to bring out their natural sweetness and smoky flavors. They are often served with a drizzle of olive oil, herbs, and sometimes accompanied by grains or dips. This platter is a colorful and nutritious choice for a satisfying meal."

//           },
//           {
//             id: 40,
//             Category:  "Food",
//             Title: "Grilled Salmon",
//             image: "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2021/08/How-to-Grill-Salmon.960.jpg",
//             Description: "Grilled Salmon is a delectable seafood dish loved for its flaky and tender texture. Fresh salmon fillets are seasoned with herbs and spices, then grilled to perfection. The result is a flavorful and healthy meal that's rich in omega-3 fatty acids. Grilled salmon pairs well with a variety of side dishes, making it a popular choice for those seeking a nutritious and delicious dinner."

//           },
//           {
//             id: 41,
//             Category:  "Food",
//             Title: "Pav Bhaji",
//             image: "https://i0.wp.com/s3.ap-south-1.amazonaws.com/images.salonyscookbook.com/pav-bhaji-recipe/pav-bhaji-recipe13.jpg?w=1200",
//             Description: "Pav Bhaji is a beloved street food from India, particularly Mumbai. It consists of a flavorful and spicy vegetable curry (bhaji) made from a medley of mashed vegetables, and it's served with soft buttered rolls (pav). The bhaji is cooked with aromatic spices and is often garnished with chopped onions, cilantro, and a squeeze of lime. Pav Bhaji is a delicious and satisfying snack or meal option."

//           },
//           {
//             id: 42,
//             Category:  "Food",
//             Title: "Dragon Roll",
//             image: "https://www.foodandwine.com/thmb/7P_lAS3wdjWqine4I-3a550HN9s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dragon-Roll-FT-RECIPE0223-5e3d0283beee4921980ad7b5597d85a9.jpg",
//             Description: "The Dragon Roll is a visually stunning sushi roll that combines the flavors of Japanese cuisine with artistic presentation. It typically features eel, cucumber, and avocado, all rolled in seaweed and rice. The roll is topped with thin slices of avocado to resemble dragon scales and is often garnished with eel sauce and tobiko (fish roe). The Dragon Roll is a favorite among sushi enthusiasts for its taste and elegant appearance."
//           },
//           {
//             id: 43,
//             Category:  "Food",
//             Title: "Ribs Platter",
//             image: "https://st4.depositphotos.com/6848604/24228/i/450/depositphotos_242286232-stock-photo-grilled-barbecue-pork-ribs-spices.jpg",
//             Description: "The Ribs Platter is a carnivore's delight, featuring succulent and tender grilled or barbecued pork ribs. The ribs are marinated or coated in a flavorful barbecue sauce or spice rub, then slow-cooked until they are fall-off-the-bone delicious. This dish is often accompanied by coleslaw, cornbread, or other classic BBQ sides. The Ribs Platter is a beloved choice for those who savor smoky and savory flavors."
//           },
//           {
//             id: 44,
//             Category:  "Food",
//             Title: "Chocolate Fondue",
//             image: "https://www.foodandwine.com/thmb/G6-afh-Tis8u9vZccQj-KabAq-U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spiced-chocolate-fondue-FT-RECIPE0422-27f2b7b454e54bb8bdd4214c66deaa6f.jpg",
//             Description: "Chocolate Fondue is a delightful dessert experience that involves dipping various treats into a pot of warm, melted chocolate. The chocolate is often flavored with a hint of liqueur or spices, enhancing the richness of the dessert. Common dippers include strawberries, marshmallows, banana slices, and cubes of pound cake. Chocolate Fondue is a fun and indulgent dessert option for social gatherings and celebrations."
//           },
//           {
//             id: 45,
//             Category:  "Food",
//             Title: "Quinoa Salad",
//             image: "https://www.eatwell101.com/wp-content/uploads/2021/02/Healthy-Chickpea-Quinoa-Salad-recipe-1.jpg",
//             Description: "Quinoa Salad is a nutritious and wholesome dish that combines cooked quinoa with fresh vegetables, herbs, and a flavorful dressing. It's a protein-packed salad often featuring ingredients like chickpeas, cucumbers, cherry tomatoes, and feta cheese. Quinoa Salad is known for its light and refreshing quality, making it an excellent choice for a healthy and satisfying meal or side dish."
//           },
//         //  Technology...
//         {
//           id: 46,
//           Category: "technology",
//           Title: "DJI Mini 2",
//           image: "https://sm.pcmag.com/t/pcmag_me/review/d/dji-mini-2/dji-mini-2-se_p3hk.1920.jpg",
//           Description: "The DJI Mini 2 is a compact and powerful drone designed for aerial photography and videography enthusiasts. It offers 4K video recording, impressive stabilization, and a range of intelligent flight modes. With its lightweight and foldable design, it's easy to take this drone on adventures and capture stunning aerial shots."
//         },
//         {
//           id: 47,
//           Category: "Technolgy",
//           Title: "Amazon Echo Dot",
//           image: "https://5.imimg.com/data5/LP/JM/MY-23727919/amazon-echo-dot-3rd-generation-smart-speaker-1000x1000.jpg",
//           Description: "The Amazon Echo Dot is a smart speaker powered by Amazon's virtual assistant, Alexa. It allows you to control smart devices, play music, set alarms, and answer questions using voice commands. The compact and stylish design of the Echo Dot makes it a versatile addition to any smart home setup."
//         },
//             {
//               id: 48,
//               Title: "Virtual Reality Experiences",
//               Category: "technology",
//               image: "https://3dcoil.grupopremo.com/wp-content/uploads/2017/09/Fotolia_147130183_Subscription_Monthly_M.jpg",
//               Description: "Virtual Reality (VR) Experiences offer immersive and interactive digital environments that transport users to virtual worlds. Whether for gaming, training, or simulations, VR has revolutionized various industries. Users can wear VR headsets and explore 3D environments, enhancing entertainment and learning experiences."
//             },
//             {
//               id: 49,
//               Title: "Home Automation Solutions",
//               Category: "technology",
//               image: "https://dcdh7ea8gkhvt.cloudfront.net/blog/wp-content/uploads/2020/09/home-automation.webp",
//               Description: "Home Automation Solutions provide homeowners with the ability to control and automate various aspects of their homes, including lighting, security, climate, and entertainment systems. With smart devices and centralized control hubs, you can enhance convenience, energy efficiency, and security in your home."
//             },
//             {
//               id: 50,
//               Title: "High-Performance Gaming PCs",
//               Category: "technology",
//               image: "https://www.lenovo.com/in/en/wri-tech-blog-images-india/High-performance-desktop-Big-img.jpg",
//               Description: "High-Performance Gaming PCs are specially designed computers optimized for gaming. They feature powerful processors, high-end graphics cards, and ample RAM to deliver smooth and immersive gaming experiences. Whether for casual gamers or eSports enthusiasts, these PCs provide the performance needed to run the latest games at their best."
//             },
//             {
//               id: 51,
//               Title: "Wearable Technology",
//               Category: "technology",
//               image: "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/05/wearable_technology_healthcare_blog_mobisoft_infotech.png",
//               Description: "Wearable Technology includes devices like smartwatches, fitness trackers, and augmented reality glasses that you can wear on your body. These devices often sync with smartphones and offer features such as fitness tracking, notifications, and health monitoring. Wearables have become popular for their convenience and ability to enhance daily life."
//             },
//             {
//               id: 52,
//               Title: "Advanced Camera Systems",
//               Category: "technology",
//               image: "https://www.passionateinmarketing.com/wp-content/uploads/2023/09/EZVIZ-C1C-B-1-1-768x432.jpg",
//               Description: "Advanced Camera Systems encompass a range of cutting-edge camera technologies used in photography and surveillance. They include high-resolution sensors, advanced autofocus systems, and image stabilization features. These cameras are used for professional photography, security, and capturing high-quality visuals in various industries."
//             },
//             {
//               id: 53,
//               Title: "Drone Exploration",
//               Category: "technology",
//               image: "https://img.freepik.com/premium-photo/mini-drone-aerial-exploration_670382-39883.jpg?w=1060",
//               Description: "Drone Exploration involves the use of unmanned aerial vehicles (drones) to explore and capture aerial views of landscapes, structures, and more. Drones equipped with cameras and GPS technology provide a new perspective for photography, videography, and surveying. They are used in fields like agriculture, filmmaking, and environmental monitoring."
//             },
//             {
//               id: 54,
//               Title: "Smart Home Security",
//               Category: "technology",
//               image: "https://www.rambus.com/wp-content/uploads/2017/12/Smart-Home-Threats-and-Countermeasures.png",
//               Description: "Smart Home Security systems use technology to protect homes and provide peace of mind. These systems include features such as surveillance cameras, doorbell cameras, motion detectors, and smartphone apps for remote monitoring. Smart Home Security enhances safety and allows homeowners to monitor their property from anywhere."

//             },
//             {
//               id: 55,
//               Title: "Artificial Intelligence (AI)",
//               Category: "technology",
//               image: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=2048x2048&w=is&k=20&c=-dkoxqirWcLDhkIjVgkLfRXdNHqCJdPKswM7tkjTcN0=",
//               Description: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that can perform tasks that typically require human intelligence. AI technologies include machine learning, natural language processing, and computer vision. AI is used in various applications, from virtual assistants like Siri to autonomous vehicles and medical diagnostics."
//             },
//             {
//               id: 56,
//               Title: "Augmented Reality (AR)",
//               Category: "technology",
//               image: "https://www.investopedia.com/thmb/xEccYNdVMyTMMiNIhtuBgKuAfjk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/augmented-reality.asp_sourcefile-e00b4d086d1a41dda39cfa2e9f7aa11b.jpg",
//               Description: "Augmented Reality (AR) is a technology that overlays digital information, such as graphics, videos, or 3D models, onto the real world. AR is experienced through devices like smartphones, AR glasses, or headsets. It has applications in gaming, education, training, and various industries where virtual elements enhance real-world experiences."
//             },
//             {
//               id: 57,
//               Title: "Sustainable Energy Solutions",
//               Category: "technology",
//               image: "https://images.ctfassets.net/obrdg975qq3x/2ToAQ14V86YS5aGvxV6EJW/195242a760d2ed697bdd2327d8f6c616/blog_post_graphic_electricity_supply__1_.png?w=700",
//               Description: "Sustainable Energy Solutions focus on renewable and environmentally friendly sources of energy. This includes solar power, wind energy, hydropower, and more. These solutions aim to reduce the carbon footprint and combat climate change by providing cleaner and sustainable alternatives to traditional fossil fuels."
//             },
//             {
//               id: 58,
//               Title: "3D Printing Innovation",
//               Category: "technology",
//               image: "https://2.bp.blogspot.com/-alopQTqJvs4/V_wrFlTpM-I/AAAAAAAAB0U/XaBF5H6pDS0Ty6D4kAs0_y_z8G66L9U7gCLcB/s400/3d%2Bprinting.jpg",
//               Description: "3D Printing Innovation is a groundbreaking technology that allows the creation of three-dimensional objects from digital designs. It has applications in manufacturing, healthcare, aerospace, and more. 3D printing enables rapid prototyping, customization, and the production of complex geometries with precision."
//             },
//             {
//               id: 59,
//               Title: "Blockchain Revolution",
//               Category: "technology",
//               image: "https://governmentbusiness.co.uk/sites/default/files/styles/large/public/adobestock_447222256.jpg?itok=Dh6foi3o",
//               Description: "The Blockchain Revolution represents a paradigm shift in digital transactions and data management. Blockchain is a distributed ledger technology that ensures transparency, security, and decentralization. It has transformed industries like finance, supply chain, and healthcare by providing trust and eliminating intermediaries in transactions."
//             },
//             {
//               id: 60,
//               Title: "Space Exploration Technologies",
//               Category: "technology",
//               image: "https://149466865.v2.pressablecdn.com/wp-content/uploads/2018/02/NASA-space-exploration-technologies.jpg",
//               Description: "Space Exploration Technologies encompass a wide range of innovations and missions aimed at exploring outer space. This includes robotic spacecraft, satellites, space telescopes, and ambitious plans for human missions to celestial bodies like Mars. These technologies advance our understanding of the cosmos and push the boundaries of human exploration."
//             },
//           // Fitness


//               {
//                 id: 61,
//                 Title: "Fitness Tracker",
//                 Category: "Fitness",
//                 image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2023_25/3612032/230621-fitness-tracker-bd-2x1.jpg",
//                 Description: "A Fitness Tracker is a wearable device that helps you monitor and track your physical activity, such as steps taken, heart rate, sleep quality, and more. It provides valuable data to help you achieve your fitness goals and lead a healthier lifestyle."
//               },
//               {
//                 id: 62,
//                 Title: "Home Gym Equipment",
//                 Category: "Fitness",
//                 image: "https://www.nicepng.com/png/full/371-3718072_essential-home-gym-equipment-life-fitness-optima-series.png",
//                 Description: "Build your home gym with our high-quality fitness equipment. Stay fit and work out in the comfort of your own space. Whether you're into strength training or cardio workouts, having home gym equipment allows you to exercise conveniently and consistently."
//               },
//               {
//                 id: 63,
//                 Title: "Yoga Mats and Accessories",
//                 Category: "Fitness",
//                 image: "https://media.istockphoto.com/id/1136580822/photo/flat-lay-fitness-background-with-blank-space-for-a-text.jpg?s=612x612&w=0&k=20&c=1K7jViKn8jUF0OkOD3QjAfxq-2h-eu57vhg4ygaAL8c=",
//                 Description: "Yoga Mats and Accessories are essential for your yoga practice. A comfortable and non-slip yoga mat provides the foundation for various yoga poses and meditation. Yoga accessories like blocks, straps, and bolsters enhance your practice, making it more accessible and enjoyable."
//               },
//               {
//                 id: 64,
//                 Title: "Fitness Apparel",
//                 Category: "Fitness",
//                 image: "https://e7.pngegg.com/pngimages/355/635/png-clipart-sports-brand-logo-thumbnail.png",
//                 Description: "Fitness Apparel includes workout clothing designed for optimal performance and comfort. Whether you're hitting the gym or going for a run, wearing the right fitness apparel can boost your confidence and help you stay cool and dry during your workouts."
//               },
//               {
//                 id: 65,
//                 Title: "Protein Supplements",
//                 Category: "Fitness",
//                 image: "https://images.freekaamaal.com/post_images/1608716783.jpg",
//                 Description: "Protein Supplements are popular among fitness enthusiasts and athletes. They provide an easy and convenient way to increase your protein intake, which is essential for muscle recovery and growth. Protein supplements come in various forms, including powders, bars, and shakes."
//               },
//               {
//                 id: 66,
//                 Title: "Indoor Cycling Bikes",
//                 Category: "Fitness",
//                 image: "https://www.verywellfit.com/thmb/5rvQi24aVN8NxU5iUNrWPvL_RBk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/What-are-the-Different-Types-of-Indoor-Exercise-Bikes-Primary-a039c556b9914f9c96db5c07ccdf804f.png",
//                 Description: "Indoor Cycling Bikes provide an excellent cardio workout in the comfort of your home. These stationary bikes offer adjustable resistance levels and various training programs to help you burn calories and improve your cardiovascular fitness."
//               },
//               {
//                 id: 67,
//                 Title: "Personal Training Sessions",
//                 Category: "Fitness",
//                 image: "https://images.squarespace-cdn.com/content/v1/5ede457a2188e55de5de09a7/1591889835496-GPGGP2ZIRL0V41HKKOGH/The+Benefits+Of+Personal+Training+At+Home.jpg?format=1500w",
//                 Description: "Personal Training Sessions with a certified fitness trainer can help you achieve your fitness goals more effectively. Personalized workouts, guidance, and motivation from a professional can lead to better results and a healthier lifestyle."
//               },
//               {
//                 id: 68,
//                 Title: "Fitness Classes",
//                 Category: "Fitness",
//                 image: "https://res.cloudinary.com/dt84tw7zr/image/fetch/f_auto,g_auto,q_auto/https://www.gameplan-a.com/wp-content/uploads/fly-images/11787/Fitness_Class_Strenghtening_Focus-640x9999.jpg",
//                 Description: "Fitness Classes offer structured group workouts led by experienced instructors. These classes cater to various fitness levels and preferences, from high-intensity interval training (HIIT) to yoga and dance. Joining fitness classes can add variety and motivation to your exercise routine."
//               },
//               {
//                 id: 69,
//                 Title: "Nutrition Coaching",
//                 Category: "Fitness",
//                 image: "https://images.ctfassets.net/psi7gc0m4mjv/63371897-0837-430e-a2c2-766286f7a43b/193d3735477a2dacd41ddd1bc384054b/issa_nutritioncoachingtasks_blogheader.jpg",
//                 Description: "Nutrition Coaching provides personalized dietary guidance to help you make healthier food choices and reach your fitness and wellness goals. Proper nutrition is a fundamental aspect of a successful fitness journey."
//               },
//               {
//                 id: 70,
//                 Title: "Fitness Apps",
//                 Category: "Fitness",
//                 image: "https://techexactly.com/wp-content/uploads/2019/02/banner.jpg.webp",
//                 Description: "Fitness Apps are mobile applications that offer workout routines, tracking tools, nutrition advice, and fitness challenges. They provide a convenient way to plan and monitor your fitness activities using your smartphone or tablet."
//               },
//               {
//                 id: 71,
//                 Title: "Yoga",
//                 Category: "Fitness",
//                 image: "https://image.myupchar.com/5247/webp/yoga-in-hindi.webp",
//                 Description: "Yoga is a holistic fitness practice that combines physical postures, breath control, meditation, and mindfulness. It promotes flexibility, strength, relaxation, and mental well-being. Regular yoga practice can contribute to physical and mental health."
//               },
//               {
//                 id: 72,
//                 Title: "Fitness Recovery Tools",
//                 Category: "Fitness",
//                 image: "https://menshealth.com.au/wp-content/uploads/2021/11/recovery-1.jpg",
//                 Description: "Fitness Recovery Tools include foam rollers, massage guns, and stretching aids designed to help your muscles recover after intense workouts. These tools can reduce muscle soreness and improve flexibility."
//               },
//               {
//                 id: 73,
//                 Title: "Fitness Supplements",
//                 Category: "Fitness",
//                 image: "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1673609774.webp",
//                 Description: "Fitness Supplements encompass a wide range of products that support your"



//               },
//               {
//                 id: 74,
//                 Title: "CrossFit Equipment",
//                 Category: "Fitness",
//                 image: "https://www.garagegymreviews.com/wp-content/uploads/Best-CrossFit-Equipment-for-Home-Gym.png",
//                 Description: "CrossFit Equipment is designed for high-intensity functional fitness workouts. It includes items like kettlebells, barbells, bumper plates, and pull-up bars. CrossFit is known for its varied and challenging workouts that target strength, endurance, and agility."
//               },
//               {
//                 id: 75,
//                 Title: "Fitness DVDs",
//                 Category: "Fitness",
//                 image: "https://www.winxdvd.com/seo-img/dvd-ripper/insanity-dvd-rip.jpg",
//                 Description: "Fitness DVDs offer structured workout programs that you can follow at home. These DVDs provide guided exercise routines led by fitness experts, making it easy to get started on your fitness journey."
//               },

//               // Home....
//               {
//                 id: 76,
//                 Title: "Bahubali: The Beginning",
//                 Category: "Home",
//                image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/07/5-years-of-s-s-rajamoulis-baahubali-the-beginning-the-film-that-gave-rise-to-an-all-time-blockbuster-001.jpg",
//                Description: "Bahubali: The Beginning is an epic historical action film directed by S. S. Rajamouli. The story revolves around Shiva, who learns about his royal heritage and embarks on a quest to reclaim his kingdom. The film is known for its grandeur and visual effects.."
//             },
           
//             {
//               id: 77,
//               Title: "Smart Home Security",
//               Category: "Home",
//               image: "https://crystalheatingandcooling.ca/wp-content/uploads/2021/06/Crystal-smart-home-security-system-1200x480.jpeg",
//               Description: "Protect your home with our smart home security solutions. Monitor your property remotely and receive instant alerts for peace of mind. Our cutting-edge devices and systems provide 24/7 security, ensuring your loved ones and valuables are safe at all times."
//             },
//             {
//               id: 78,
//               Category: "Home",
//               Title: "Inception",
//               image: "https://images3.alphacoders.com/610/thumbbig-610318.webp",
//               Description: "\"Inception\" is a science fiction heist thriller film directed by Christopher Nolan. Dom Cobb, played by Leonardo DiCaprio, is a thief who specializes in stealing information by entering the subconscious minds of his targets."
//             },
//             {
//                 id: 79,
//                 Title: "Kabhi Khushi Kabhie Gham",
//                 Category: "Home",
//                 image: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2017/12/0fd0fb63a60e921e3ea7c72b5a89830e-ls-xl-1513333759.jpg",
//                 Description: "Kabhi Khushi Kabhie Gham is a family drama film directed by Karan Johar. It tells the story of the rich Raichand family and the relationships and conflicts within. Join this emotional journey of love, family, and reconciliation that spans generations."
//               },
//             {
//               id: 80,
//               Title: "Indoor Cycling Bikes",
//               Category: "Home",
//               image: "https://www.verywellfit.com/thmb/5rvQi24aVN8NxU5iUNrWPvL_RBk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/What-are-the-Different-Types-of-Indoor-Exercise-Bikes-Primary-a039c556b9914f9c96db5c07ccdf804f.png",
//               Description: "Enjoy indoor cycling with our state-of-the-art bikes. Burn calories, improve cardio, and stay active year-round. Our indoor cycling bikes offer adjustable resistance levels, comfortable seating, and engaging workouts to keep you motivated on your fitness journey."
//             },
         
//             {
//               id: 81,
//               Category:  "Home",
//               Title: "Ribs Platter",
//               image: "https://st4.depositphotos.com/6848604/24228/i/450/depositphotos_242286232-stock-photo-grilled-barbecue-pork-ribs-spices.jpg",
//               Description: "Get messy with our Ribs Platter. Tender, fall-off-the-bone ribs smothered in tangy barbecue sauce. Whether you're dining in with family or hosting a backyard BBQ, our delectable ribs are sure to satisfy your cravings and leave you wanting more."
//             },
        
         
//             {
//               id: 82,
//               Title: "Personal Training Sessions",
//               Category: "Home",
//               image: "https://images.squarespace-cdn.com/content/v1/5ede457a2188e55de5de09a7/1591889835496-GPGGP2ZIRL0V41HKKOGH/The+Benefits+Of+Personal+Training+At+Home.jpg?format=1500w",
//               Description: "Achieve your fitness goals with personalized training sessions. Work one-on-one with certified trainers in the comfort of your home. Our trainers will create custom workouts, provide guidance, and help you maximize your potential. Elevate your fitness journey with our tailored training programs."
//             },
//             {
//               id: 83,
//               Title: "Augmented Reality (AR)",
//               Category: "Home",
//              image: "https://www.investopedia.com/thmb/xEccYNdVMyTMMiNIhtuBgKuAfjk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/augmented-reality.asp_sourcefile-e00b4d086d1a41dda39cfa2e9f7aa11b.jpg",
//               Description: "Experience the blend of reality and virtual worlds with augmented reality technology. Explore interactive and immersive environments."
//             },

//             {
//               id: 84,
//               Title: "Fitness Classes",
//               Category: "Home",
//               image: "https://res.cloudinary.com/dt84tw7zr/image/fetch/f_auto,g_auto,q_auto/https://www.gameplan-a.com/wp-content/uploads/fly-images/11787/Fitness_Class_Strenghtening_Focus-640x9999.jpg",
//               Description: "Join our fitness classes led by certified trainers. Stay motivated, get in shape, and meet like-minded individuals."
//             },

       
//             {
//               id: 85,
//               Title: "Artificial Intelligence (AI)",
//               Category: "Home",
//              image: "https://www.codingdojo.com/blog/wp-content/uploads/ai-v2-img3.jpg",
//               Description: "Harness the power of artificial intelligence. Our AI technology is revolutionizing industries, from healthcare to finance."
//             },
            
//             {
//               id: 86,
//               Category:  "Home",
//               Title: "Dragon Roll",
//               image: "https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0293-II.jpg",
//               Description: "Experience the allure of our Dragon Roll. Eel, avocado, and cucumber topped with tobiko and eel sauce."
//             },
//             {
//               id: 87,
//               Title: "3D Printing Innovation",
//               Category: "Home",
//               image: "https://2.bp.blogspot.com/-alopQTqJvs4/V_wrFlTpM-I/AAAAAAAAB0U/XaBF5H6pDS0Ty6D4kAs0_y_z8G66L9U7gCLcB/s400/3d%2Bprinting.jpg",
//               Description: "Unlock endless possibilities with 3D printing innovation. Create prototypes, custom products, and artistic creations with precision."
//             },
//             {
//               id: 88,
//               Category:  "Home",
//               Title: "Ribs Platter",
//               image: "https://st4.depositphotos.com/6848604/24228/i/450/depositphotos_242286232-stock-photo-grilled-barbecue-pork-ribs-spices.jpg",
//               Description: "Get messy with our Ribs Platter. Tender, fall-off-the-bone ribs smothered in tangy barbecue sauce."
//             }


//   ]
             
// )


    return(
        <>
        <Store.Provider value={[data]}>
           {props.children}

        </Store.Provider>
        </>
    )
}

export default ContextApi


