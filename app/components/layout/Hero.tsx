import * as React from "react";

interface SportCardProps {
  imageSrc: string;
  title: string;
  totalEvents: number;
  sport: string;
}

const SportCard: React.FC<SportCardProps> = ({ imageSrc, title, totalEvents, sport }) => (
  <div className="flex flex-col flex-1 items-center px-2.5 py-3 font-semibold bg-white shadow-sm">
    <img loading="lazy" src={imageSrc} alt={title} className="aspect-[0.56] w-[218px]" />
    <div className="mt-5 text-lg text-black">{title}</div>
    <div className="flex flex-col self-stretch px-6 py-3.5 mt-4 bg-gray-50 rounded-md max-md:px-5">
      <div className="text-xs text-gray-600">Total Events Sport</div>
      <div className="mt-1.5 text-sm text-black">
        {totalEvents} Events {sport}
      </div>
    </div>
  </div>
);

interface AdvertisementCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const AdvertisementCard: React.FC<AdvertisementCardProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col flex-1 px-2.5 pt-3 pb-20 text-black bg-white shadow-sm">
    <img loading="lazy" src={imageSrc} alt={title} className="self-center aspect-square w-[218px]" />
    <div className="mt-8 text-xl font-semibold">{title}</div>
    <div className="mt-6 mr-5 text-sm font-medium max-md:mr-2.5 max-md:ml-2">{description}</div>
  </div>
);

interface SpotlightCardProps {
  imageSrc: string;
  title: string;
  date: string;
  location: string;
  collection: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ imageSrc, title, date, location, collection }) => (
  <div className="flex flex-col px-4 pt-4 pb-2.5 text-sm font-medium text-center text-black bg-white shadow-lg">
    <img loading="lazy" src={imageSrc} alt={title} className="w-full aspect-[0.56]" />
    <div className="shrink-0 mt-10 h-px border border-dashed bg-zinc-400 border-zinc-400" />
    <div className="self-center mt-7 text-lg font-semibold">{title}</div>
    <div className="self-center mt-2.5">{date}</div>
    <div className="mt-4 text-gray-600">{location}</div>
    <div className="justify-center px-9 py-3 mt-3 text-white bg-neutral-900 max-md:px-5">{collection}</div>
  </div>
);

const MyComponent: React.FC = () => {
  const sportCardsData = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/60b98f933cca2986a7ac55dab0363cc39ea25d57d1a17cd806db085b1639bc3f?apiKey=1b283404da5d4d61b46c54a88cc0a8cc&",
      title: "Sacramento Rivers Cats",
      totalEvents: 48,
      sport: "Baseball",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/13505eb1eb5befee3dcc525b506d72410fa0291e6b04772f825e3401226ec337?apiKey=1b283404da5d4d61b46c54a88cc0a8cc&",
      title: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d15fbb379e70dddf8fb382c40e674786180a157cf57783fc5c68f9b4855ee0e?apiKey=1b283404da5d4d61b46c54a88cc0a8cc&",
      title: "New Jersey Devils",
      totalEvents: 15,
      sport: "Ice Hockey",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/13505eb1eb5befee3dcc525b506d72410fa0291e6b04772f825e3401226ec337?apiKey=1b283404da5d4d61b46c54a88cc0a8cc&",
      title: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
    },
  ];

  const advertisementCardData = {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3b4b635e8f5fa6fe0cd98b185c7f3f29fc036947e2743fb6b336c7a0fd5d501?apiKey=1b283404da5d4d61b46c54a88cc0a8cc&",
    title: "Advertisement title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  const spotlightCardsData = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/43c61e75855f3a8862f03472a2bee228fae66dced967493f951db72abbbbb4f9?apiKey=1b283404da5d4d61b46c54a88cc0a8cc&",
      title: "Las Vegas Aviators",
      date: "OCT 15 | SUN | 4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Take Flight Collection",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/419abc89a5aebdf69ea828adcba7fb8b29ed92f0a941dcb6238ae13d9147ed07?apiKey=1b283404da5d4d61b46c54a88cc0a8cc&",
      title: "Sacramento River Cats",
      date: "OCT 15 | SUN | 4:30 PM",
      location: "Sutter Health Park, Sacramento, California",
      collection: "Oranage Collection",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/43c61e75855f3a8862f03472a2bee228fae66dced967493f951db72abbbbb4f9?apiKey=1b283404da5d4d61b46c54a88cc0a8cc&",
      title: "Las Vegas Aviators",
      date: "OCT 15 | SUN | 4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Take Flight Collection",
    },
  ];

  return (
    <div className="flex flex-col items-center px-20 pt-10 pb-16 bg-white max-md:px-5">
      <div className="flex flex-col w-full bg-neutral-100 max-w-[1246px] max-md:max-w-full">
        <div className="justify-center self-start py-1 text-2xl font-semibold whitespace-nowrap bg-neutral-100 text-stone-900">
          Sports
        </div>
        <div className="shrink-0 h-px bg-blue-500 border border-blue-500 border-solid max-md:max-w-full" />
        <div className="flex gap-3.5 mt-12 max-md:flex-wrap max-md:mt-10">
          {sportCardsData.map((card, index) => (
            <SportCard key={index} {...card} />
          ))}
          <AdvertisementCard {...advertisementCardData} />
        </div>
        <button className="justify-center self-center px-8 py-5 mt-9 text-sm font-semibold text-white bg-blue-500 rounded-md max-md:px-5">
          See More
        </button>
      </div>
      <section className="flex justify-center items-center p-16 mt-20 w-full bg-neutral-100 max-w-[1246px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center px-px pt-4 w-full max-w-[1086px] max-md:max-w-full">
          <h2 className="text-5xl font-medium text-black max-md:max-w-full max-md:text-4xl">Collection Spotlight</h2>
          <p className="mt-12 text-sm font-medium text-center text-black max-md:mt-10 max-md:max-w-full">
            Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events
            for an unforgettable experience. Grab yours today!
          </p>
          <div className="flex gap-5 justify-between self-stretch mt-7 max-md:flex-wrap max-md:max-w-full">
            
            {spotlightCardsData.map((card, index) => (
              <SpotlightCard key={index} {...card} />
            ))}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;