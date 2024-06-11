const images = import.meta.glob("../assets/projects/**/*", { eager: true });

const projects = [
  {
    id: 1,
    name: "Alutec",
    description: [
      "Alutec is a leading aluminum company specializing in window and door installations.",
      "The primary goal was to modernize the brand’s image while maintaining its strong reputation for quality and reliability.",
      "The challenge was to create a fresh and contemporary look that would resonate with both existing and new customers. I achieved this by designing a sleek and minimalist logo that incorporates elements symbolizing strength and precision, essential qualities of aluminum. The new color palette features shades of blue and gray, conveying professionalism and trustworthiness, while the typography was chosen to be clean and easily readable, enhancing brand recognition.",
      "The updated brand identity successfully rejuvenates Alutec’s market presence, making the company stand out in a competitive industry. The redesign has been well-received leading to a stronger brand image and increased customer engagement.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Alutec"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Alutec") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "alutec",
  },
  {
    id: 2,
    name: "Trezor Hair Products",
    description: [
      "For Trezor, a brand specializing in premium hair products, I developed a fun and bold packaging design that captures the vibrant and dynamic essence of their products.",
      "The objective was to create a design that not only stands out on the shelves but also conveys the energetic and playful spirit of Trezor.",
      "One of the main challenges was to create a visually striking design without overwhelming the consumer. I achieved this by incorporating bright colors and dynamic patterns, ensuring the packaging was both eye-catching and cohesive. The design elements work together to create a sense of excitement and energy, appealing directly to Trezor’s youthful and trendy target audience.",
      "The final packaging design successfully enhances Trezor’s brand identity, making their hair products instantly recognizable and appealing to a wider audience. The outcome has been met with enthusiastic responses, contributing to increased brand visibility and sales.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Trezor"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Trezor") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "trezor",
  },
  {
    id: 3,
    name: "Glight",
    description: [
      "Glight is a full-service event production company specializing in bespoke event lighting solutions. They enlisted me to revamp their brand identity to better reflect their innovative and dynamic approach. The objective was to create a cohesive brand image that would capture the essence of their custom lighting solutions and their commitment to excellence.",
      "The primary challenge was to convey the vibrancy and creativity of Glight’s services while maintaining a professional and polished look. I approached this by designing a logo with custom made typography that highlights the company’s name. The color scheme features a mix of bright, dynamic colors and sophisticated tones, reflecting both the creativity and the high standards of the company. Additionally, I developed a comprehensive brand identity that includes sleek typography and modern design elements, ensuring consistency across all marketing materials.",
      "The new branding successfully encapsulates Glight’s unique offerings, making the company more recognizable and memorable in the event production industry. The updated brand identity has been enthusiastically received, enhancing Glight’s market presence and helping to attract a broader client base.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Glight"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Glight") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "glight",
  },
  {
    id: 4,
    name: "Superbrew Coffee Packaging Design",
    description: [
      "Superbrew is a specialty coffee company. I developed a minimalist packaging design that reflects the brand’s commitment to quality and simplicity. The goal was to create a clean, modern look that would stand out on the shelves while emphasizing the premium nature of Superbrew’s coffee products.",
      "The primary challenge was to convey the rich, robust character of the coffee within a minimalist design framework. I achieved this by using a sleek, uncluttered layout with a black and white color palette, accented by subtle a hint of earthy tone to evoke the natural origins of the coffee beans. The design features clean lines and ample white space, allowing the product name and essential information to take center stage without distraction.",
      "The minimalist approach not only enhances the aesthetic appeal but also aligns with contemporary consumer preferences for simplicity and elegance. The final packaging design has successfully resonated with Superbrew’s target audience, contributing to increased brand recognition and customer loyalty.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Superbrew"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Superbrew") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "superbrew",
  },
  {
    id: 5,
    name: "Ladose Coffee Roasters",
    description: [
      "For I designed both the logo and the packaging, utilizing bright colors and a minimalistic approach to create an eye-catching and contemporary look. The goal was to develop a brand identity that stands out on the shelves while conveying the lively and dynamic nature of Ladose’s coffee.",
      "The primary challenge was to balance minimalism with a bold, engaging visual appeal. I achieved this by incorporating bright blue and orange hues into the design, creating a striking contrast that draws attention. For the packaging, I maintained a sleek layout with ample white space, allowing the vibrant colors and essential product details to shine without overwhelming the viewer.",
      "This approach successfully captures the energetic spirit of Ladose while maintaining a sophisticated and modern aesthetic.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Ladose"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Ladose") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "ladose",
  },
  {
    id: 6,
    name: "Soundstream",
    description: [
      "Soundstream is a cutting-edge digital platform designed for artists to share and showcase their work. For this project, I crafted a distinctive abstract logo that embodies the dynamic and innovative spirit of the platform. In addition to the logo, I developed a clean typography system that enhances readability and maintains a sleek, professional appearance. The brand identity is anchored in a black and white color scheme, creating a timeless and sophisticated aesthetic. This minimalist approach not only highlights the artwork but also ensures a consistent and cohesive visual experience across all digital and print materials. The result is a powerful and elegant brand identity that resonates with artists and audiences alike.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Soundstream"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Soundstream") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "soundstream",
  },
  {
    id: 7,
    name: "Kouparanidis Construction",
    description: [
      "Kouparanidis, a leading construction company, tasked me with creating an elegant and sophisticated logo that would embody their strength and reliability. The objective was to develop a distinctive visual identity that stands out in the construction industry, emphasizing the company’s professionalism and trustworthiness.",
      "The centerpiece of the design is a refined letter 'K', crafted to reflect both the elegance and robustness of Kouparanidis. The main color of the brand is terracotta, symbolizing stability and earthiness, complemented by black and grey tones that add depth and a modern touch. The combination of these colors creates a striking yet harmonious visual appeal, reinforcing the company’s commitment to quality and excellence.",
      "The result is a logo that effectively communicates the core values of Kouparanidis and enhances its brand presence. The elegant design has been positively received, contributing to stronger brand recognition and helping Kouparanidis stand out in a competitive market.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Kouparanidis"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Kouparanidis") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "kouparanidis",
  },
  {
    id: 8,
    name: "Aron Architecture",
    description: [
      "For Aron Architecture Studio, I designed a distinctive and flexible logo that captures the innovative spirit of the firm. The goal was to create a unique visual identity that stands out in the architecture industry while maintaining a clean and minimalistic aesthetic.",
      "The centerpiece of the design is a versatile letter 'A', which changes its width as a dynamic visual element. This flexibility symbolizes Aron's adaptive and forward-thinking approach to architecture. The main color chosen for the brand is a sophisticated blue tone, conveying trust, stability, and professionalism. The minimalist design ensures that the logo is both modern and timeless, resonating with Aron's commitment to cutting-edge architectural solutions.",
      "The resulting logo and brand identity effectively communicate the core values of Aron Architecture Studio, enhancing its presence and recognition in the market. The design has been well-received, contributing to a stronger brand image.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Aron"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Aron") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "aron-architecture",
  },
  {
    id: 9,
    name: "Christoforos Haritos",
    description: [
      "For Christoforos Haritos, a distinguished plastic surgeon, I designed an elegant and sophisticated logo that embodies the precision and artistry of his practice. The goal was to create a refined visual identity that stands out in the medical field, emphasizing professionalism and elegance.",
      "The logo features a combination of the letters 'C' and 'H', seamlessly integrated to reflect the surgeon’s name with grace and subtlety. The chosen color palette includes black and white for a timeless and professional look, with copper accents to add a touch of warmth and luxury. This combination enhances the brand’s elegance, making it both modern and inviting.",
      "The resulting logo and brand identity effectively communicate the high standards and expertise of Christoforos Haritos, elevating his presence in the competitive field of plastic surgery.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Haritos"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Haritos") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "christoforos-haritos",
  },
  {
    id: 10,
    name: "Gardy",
    description: [
      "For Gardy, a dedicated lawn care company, I developed a fresh and inviting brand identity that captures the essence of their expertise in creating and maintaining beautiful lawns. The primary goal was to design a visual identity that stands out in the landscaping industry while conveying the brand’s commitment to quality and care.",
      "The logo and overall design feature a color palette dominated by green, symbolizing growth, vitality, and the lush landscapes that Gardy nurtures. The minimalist approach ensures a clean and modern look, allowing the brand to appear both professional and approachable.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Gardy"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Gardy") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "gardy",
  },
  {
    id: 11,
    name: "CafeKafe",
    description: [
      "For Cafekafe, a specialty coffee company, I crafted an elegant and luxurious brand identity that reflects their commitment to high-quality coffee and sophisticated service. The goal was to design a visual identity that stands out in the competitive coffee industry.",
      "The branding features a refined logo and a cohesive color palette, utilizing rich, deep tones that evoke a sense of luxury and warmth. The design elements, including stylish typography and sophisticated patterns, were carefully selected to enhance the premium feel of the brand. The overall aesthetic is clean and polished, ensuring that the brand conveys an image of excellence and attention to detail.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("CafeKafe"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("CafeKafe") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "cafekafe",
  },
  {
    id: 12,
    name: "One Medical",
    description: [
      "For One Medical, a comprehensive clinic in Athens offering a wide range of medical services, I developed a professional and approachable brand identity. The objective was to create a visual identity that stands out in the healthcare industry while conveying trust, reliability, and the high standard of care provided by the clinic.",
      "The branding features a modern logo that combines clean lines with a subtle medical cross, symbolizing health and well-being. The color palette includes calming blues, evoking a sense of tranquility and trustworthiness. The overall design is minimal yet impactful, ensuring clarity and professionalism across all branding materials.",
      "This cohesive brand identity successfully communicates One Medical's dedication to providing excellent medical care.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("On"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("On") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "one-medical",
  },
  {
    id: 13,
    name: "Bersek",
    description: [
      "For Bersek, a premium protein supplement brand, I created a striking packaging design that emphasizes strength and purity. The objective was to develop a bold and modern visual identity that stands out on the shelves while conveying the high quality of the product.",
      "The design employs a sleek black and white color palette, symbolizing power, simplicity, and cleanliness. The minimalist approach ensures that the packaging is both elegant and impactful, with clean lines and strong typography that highlight the brand name and key product information. The contrast between black and white creates a visually arresting look that appeals to fitness enthusiasts and athletes seeking a reliable protein supplement.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Bershek"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Bershek") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "bersek",
  },
  {
    id: 14,
    name: "Carkeys",
    description: [
      "For Carkeys, an auto repair shop specializing in electronic systems, immobilizers, and car computer circuits, I developed a modern and tech-savvy brand identity. The goal was to create a visual identity that reflects the shop’s expertise and advanced technical capabilities, setting it apart in the automotive repair industry.",
      "The overall design is clean and professional, ensuring that the brand communicates reliability and expertise. This cohesive brand identity successfully highlights Carkeys’ specialization in complex automotive electronic systems, enhancing its presence in the market.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Carkeys"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Carkeys") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "carkeys",
  },
  {
    id: 15,
    name: "Dr. Niki Agathokleous",
    description: [
      "For Dr. Niki Agathokleous, a dedicated gynecologist, I developed a clean and professional brand identity that reflects the care and expertise of her practice. The goal was to create a visual identity that stands out in the medical field while conveying a sense of trust, compassion, and professionalism.",
      "The design features a modern logo with subtle medical elements, ensuring a clear and approachable look. The color theme revolves around green tones, symbolizing health, renewal, and tranquility. This color choice helps create a calming and reassuring atmosphere, which is essential in a medical setting. The overall design ensures consistency and coherence across all branding materials.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Niki"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Niki") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "dr-niki-agathokleous",
  },
  {
    id: 16,
    name: "eFillers",
    description: [
      "For eFillers, a provider of medical products to plastic surgeons, I developed a brand identity that emphasizes cleanliness, precision, and sophistication. The objective was to create a visual identity that reflects the high standards and professionalism of the products, appealing to a discerning medical audience.",
      "The branding features a clean and minimalist design, utilizing shades of grey to convey a sense of neutrality and elegance. The typography is modern and uncluttered, enhancing readability and ensuring a professional appearance. Aesthetic photography plays a key role in the branding layout, showcasing the products in a sophisticated and clinical context, which underscores the quality and effectiveness of the medical solutions provided by eFillers.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("efillers"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("efillers") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "efillers",
  },
  {
    id: 17,
    name: "Sur La Terre",
    description: [
      "For Sur La Terre, a brand specializing in herbal teas, I designed a logo and packaging that reflect the natural and earthy essence of their products. The logo features a clean, geometrical design that symbolizes harmony and balance, aligning with the calming properties of herbal tea. The color palette consists of earth tones, evoking a connection to nature and the earth. These colors enhance the natural appeal and authenticity of the product.",
      "The packaging design complements the logo with its minimalist yet elegant approach, incorporating subtle patterns and textures inspired by nature. This cohesive design effectively communicates the purity and quality of Sur La Terre's herbal teas, making them appealing to health-conscious consumers.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("SurLaTerre"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("SurLaTerre") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "sur-la-terre",
  },
  {
    id: 18,
    name: "Aroma Coffee Roasters",
    description: [
      "For Aroma, a distinguished coffee brand, I developed a simple yet effective packaging design that highlights the quality and richness of their coffee. The goal was to create a design that is both aesthetically pleasing and functional, ensuring that it stands out on the shelves and appeals to coffee enthusiasts.",
      "The packaging features a clean and minimalist layout, with a focus on clarity and simplicity. The design incorporates subtle elements that evoke the rich aroma and flavor of the coffee, using a balanced combination of typography.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Aroma"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Aroma") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "aroma-coffee-roasters",
  },
  {
    id: 19,
    name: "Fotis Dimopoulos",
    description: [
      "For Fotis Dimopoulos, a dentist, I designed a brand identity that combines a fun and playful look with a professional, medical essence. The goal was to create a welcoming and approachable visual identity that appeals to patients of all ages while maintaining a sense of professionalism.",
      "The logo is inspired by the Greek letter '∆', the initial of Dr. Dimopoulos's last name, creatively combined with a smile to symbolize dental care and happiness. This clever integration of elements creates a memorable and friendly logo that stands out in the dental field. The color palette is bright and cheerful, adding to the playful and inviting atmosphere, while still maintaining a clean and professional aesthetic.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Fotis"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Fotis") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "fotis-dimopoulos",
  },
  {
    id: 20,
    name: "Qube Construction",
    description: [
      "For Qube Construction, I created a strong and contemporary brand identity that reflects the company's expertise and modern approach to construction. The goal was to develop a visual identity that stands out in the industry while conveying reliability and innovation.",
      "The color theme revolves around black, grey, and yellow, combining the professionalism and stability of black and grey with the energy and optimism of yellow. The clean and bold typeface used in the branding enhances readability and creates a striking visual impact. The design elements are minimalist yet powerful, ensuring that the brand exudes confidence and competence.",
    ],
    images: Object.keys(images)
      .filter((key) => key.includes("Qube"))
      .map((key) => images[key].default),
    coverImage: Object.keys(images)
      .filter((key) => key.includes("Qube") && key.includes("Cover"))
      .map((key) => images[key].default)[0],
    link: "qube-construction",
  },
];

export const featuredProjectsData = projects.slice(0, 4);
export default projects;
