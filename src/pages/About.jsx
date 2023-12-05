import NavBar from '../components/NavBar';

function About() {
  return (
    <div>
      <NavBar />

      {/* <div //className="overflow-hidden bg-local bg-center bg-cover"></div> */}
      <section class="">
        <div class="h-[100vh] py-4 mx-auto lg:pt-[10vh] md:px-6 font-poppins dark:bg-gray-800">
          <div class="flex flex-wrap mx-[5rem]">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="balikpapankota.jpeg"
                alt=""
                class="z-40 object-cover h-100 rounded-3xl"
              />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 class="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
                About Us
              </h2>
              <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400 text-justify">
                Explore Balikpapan Welcome to Explore Balikpapan, a digital hub
                dedicated to showcasing the beauty and richness of our beloved
                city, Balikpapan. As a passionate team in the realm of local
                tourism, we are committed to providing unforgettable experiences
                for visitors and offering local residents profound insights into
                the wonders that surround us. Explore Balikpapan was born from
                the desire to connect people with the unique attractions of
                Balikpapan, ranging from the natural beauty to cultural heritage
                and the delightful local cuisine. We pledge to deliver accurate,
                inspirational, and useful information for anyone looking to
                explore the charms of this city. Through our content, we invite
                you to feel the warmth of the Balikpapan community, explore
                amazing tourist destinations, and discover intriguing stories
                behind every corner of the city. Together, let's build a
                closer-knit community and enrich the tourism experience in
                Balikpapan. Thank you for joining us on this journey. Let's
                explore and enjoy the beauty of Balikpapan together with Explore
                Balikpapan!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
