

// { name: "icici", url: "/icici" },
// { name: "hdfc", url: "/hdfc" },
// { name: "google", url: "/google" },
// { name: "mrf", url: "/mrf" },
// { name: "hal", url: "/hal" },
// { name: "itc", url: "/itc" },
// { name: "mandm", url: "/mandm" },
// { name: "sbi", url: "/sbi" },
// { name: "tcs", url: "/tcs" },
// { name: "titan", url: "/titan" },
 const sharedata = [
    {
        id: "1",

        image: "./icici.png",
        shareName: "ICICI",
        description: "ICICI Bank Limited, founded in 1994, is an Indian multinational banking and financial services company headquartered in Mumbai, Maharashtra. It offers a wide range of banking products and financial services to corporate and retail customers through its vast network of branches and ATMs across India and abroad. ICICI Bank's services include retail banking, corporate banking, investment banking, insurance, and asset management. It is one of the largest private sector banks in India and is known for its innovative banking solutions and customer-centric approach. ICICI Bank has a strong presence in India and operates in 17 other countries, serving millions of customers worldwide. The bank is committed to leveraging technology to provide convenient and efficient banking services while contributing to the economic growth and development of the country.",
        gainLoss: "0",
    },
    {
        id: "2",
        image: "./hdfc.png",
        shareName: "HDFC",
        description: "HDFC is one of India's leading housing finance companies, providing a range of financial services including home loans, banking, and insurance. It is known for its customer-centric approach and strong market presence in the housing finance sector.",
        gainLoss: "1",
    },
    {
        id: "3",
        image: "./google.png",
        shareName: "Google",
        description: "Google LLC, founded by Larry Page and Sergey Brin in 1998, is an American multinational technology company headquartered in Mountain View, California. Initially known for its search engine, Google has since expanded its offerings to include a wide range of products and services. Its core products include the Google search engine, Gmail, Google Maps, Google Drive, and the Android operating system. Google is also a major player in the advertising industry through its Google Ads platform. Additionally, the company has ventured into hardware with products like Pixel smartphones, Chromecast, and Google Nest smart home devices. Beyond this, Google is at the forefront of innovation in artificial intelligence, autonomous vehicles, and other emerging technologies through its research and development arm, Google X. With a mission to organize the world's information and make it universally accessible and useful, Google continues to be a dominant force in the global technology landscape.",
        gainLoss: "1",
    },
    {
        id: "4",
        image: "./hal.png",
        shareName: "HAL",
        description: "HAL is a government-owned aerospace and defense company in India. It designs, manufactures, and repairs aircraft, helicopters, and their engines. HAL plays a crucial role in India's defense sector and is involved in various prestigious projects.", 
        gainLoss: "0",
    },
    {
        id: "5",
        image: "./apple1.webp",
        shareName: "APPLE",
        description: "Apple Inc. is a global technology company known for its innovative consumer electronics, software, and online services. Founded by Steve Jobs, Steve Wozniak, and Ronald Wayne, Apple designs and sells products such as the iPhone, iPad, Mac computers, Apple Watch, and Apple TV. The company also offers a range of services, including the App Store, Apple Music, iCloud, and Apple Pay. Apple's commitment to design excellence and user experience has made it one of the most valuable and influential companies in the world.",     
        gainLoss: "0",
    },
    {
        id: "6",
        image: "./amazon.png",
        shareName: "AMAZON",
        Description: "Amazon.com, Inc. is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence. Founded by Jeff Bezos, Amazon started as an online bookstore and expanded to offer a vast array of products and services, including Amazon Prime, Amazon Web Services (AWS), and Alexa. Amazon is known for its customer-centric approach, rapid delivery services, and innovation in areas such as logistics, entertainment, and smart home technology. It is one of the world's largest online marketplaces and a leader in cloud computing." ,
        gainLoss: "0",
    },
    // {
    //     id: "5",
    //     image: "./mrf.png",
    //     shareName: "MRF",
    //     high: "1152.5",
    //     low: "1116.2",
    //     week: "1144.3",
    //     description: "Amazon.com, Inc., founded by Jeff Bezos in 1994, is a multinational technology company based in Seattle, Washington. It started as an online marketplace for books but has since diversified into various sectors including e-commerce, cloud computing, digital streaming, and artificial intelligence. Amazon's primary offerings include its e-commerce platform, Amazon Prime subscription service, Amazon Web Services (AWS) cloud computing platform, and digital streaming service Amazon Prime Video. Known for its customer-centric approach and continuous innovation, Amazon has grown into one of the world's largest and most influential companies, redefining multiple industries and services.",
    //     gainLoss: "0"
    // },
   
    // {
    //     id: "6",
    //     image: "./itc.png",
    //     shareName: "ITC",
    //     high: "1152.5",
    //     low: "1116.2",
    //     week: "1144.3",
    //     description: "Amazon.com, Inc., founded by Jeff Bezos in 1994, is a multinational technology company based in Seattle, Washington. It started as an online marketplace for books but has since diversified into various sectors including e-commerce, cloud computing, digital streaming, and artificial intelligence. Amazon's primary offerings include its e-commerce platform, Amazon Prime subscription service, Amazon Web Services (AWS) cloud computing platform, and digital streaming service Amazon Prime Video. Known for its customer-centric approach and continuous innovation, Amazon has grown into one of the world's largest and most influential companies, redefining multiple industries and services.",
    //     gainLoss: "0"
    // },
    // {
    //     id: "7",
    //     image: "./mandm.png",
    //     shareName: "M&M",
    //     high: "1152.5",
    //     low: "1116.2",
    //     week: "1144.3",
    //     description: "Amazon.com, Inc., founded by Jeff Bezos in 1994, is a multinational technology company based in Seattle, Washington. It started as an online marketplace for books but has since diversified into various sectors including e-commerce, cloud computing, digital streaming, and artificial intelligence. Amazon's primary offerings include its e-commerce platform, Amazon Prime subscription service, Amazon Web Services (AWS) cloud computing platform, and digital streaming service Amazon Prime Video. Known for its customer-centric approach and continuous innovation, Amazon has grown into one of the world's largest and most influential companies, redefining multiple industries and services.",
    //     gainLoss: "0"
    // },
  
    // {
    //     id: "8",

    //     image: "./sbi.png",
    //     shareName: "SBI",
    //     high: "819.5",
    //     low: "715.2",
    //     week: "819.3",
    //     gainLoss: "1",
    //     description: " SBI is the largest public sector bank in India and a major player in the country's banking and financial services sector. It offers a wide range of banking products and services to individuals, businesses, and corporates, both in India and internationally.", gainLoss: "1",
    // },
    // {
    //     id: "9",
    //     image: "./tcs.png",
    //     shareName: "TCS",
    //     high: "1152.5",
    //     low: "1116.2",
    //     week: "1144.3",
    //     description: "Amazon.com, Inc., founded by Jeff Bezos in 1994, is a multinational technology company based in Seattle, Washington. It started as an online marketplace for books but has since diversified into various sectors including e-commerce, cloud computing, digital streaming, and artificial intelligence. Amazon's primary offerings include its e-commerce platform, Amazon Prime subscription service, Amazon Web Services (AWS) cloud computing platform, and digital streaming service Amazon Prime Video. Known for its customer-centric approach and continuous innovation, Amazon has grown into one of the world's largest and most influential companies, redefining multiple industries and services.",
    //     gainLoss: "0"
    // },
    // {
    //     id: "10",

    //     image: "./titan.png",
    //     shareName: "TiTan",
    //     high: "3308.5",
    //     low: "3230.2",
    //     week: "3307.3",
    //     description: "Titan Company Limited is a leading Indian consumer goods company that specializes in watches, jewelry, eyewear, and other lifestyle products. It is known for its innovative designs and strong brand presence in the Indian market.",
    //     gainLoss: "1",
    // },
];

export default sharedata