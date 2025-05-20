// import React from 'react';


// const videos = [
//   {
//     title: "Father's Emotional Speech",
//     embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
//   },
//   {
//     title: 'A Magical Destination Wedding',
//     embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
//   },
//   {
//     title: 'Emotional Family Review',
//     embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
//   },
//   {
//     title: 'Destination Wedding Couple Review',
//     embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_4',
//   },
// ];

// export default function ClientReviews() {
//   return (
//     <section className="bg-[#fcf4ec] px-4 sm:px-6 lg:px-16 py-16">
//       <div className="text-center mb-12">
//         <h4 className="text-purple-600 font-semibold text-lg mb-2">CLIENTS ABOUT US</h4>
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//           Look at What our Client says About Melodia
//         </h2>
//         <p className="text-gray-700 max-w-3xl mx-auto">
//           Watch real and genuine client review videos of Melodia Event Management—recorded live at the event venue—highlighting their satisfaction with Melodia’s event planning, venue décor, and post-event services after a successful and unforgettable celebration.
//         </p>
//         <div className="mt-4 flex justify-center">
//           <span className="h-1 w-24 bg-purple-500 rounded-full"></span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {videos.map((video, index) => (
//           <div
//             key={index}
//             className="rounded-xl overflow-hidden shadow-md aspect-[9/16] sm:aspect-[10/16]"
//           >
//             <iframe
//               className="w-full h-full"
//               src={video.embedUrl}
//               title={video.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from 'react';

const videos = [
  {
    title: "Father's Emotional Speech",
    embedUrl: 'https://www.youtube.com/embed/Z1BCujX3pw8',
  },
  {
    title: 'A Magical Destination Wedding',
    embedUrl: 'https://www.youtube.com/embed/Z1BCujX3pw8',
  },
  {
    title: 'Emotional Family Review',
    embedUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
  },
  {
    title: 'Destination Wedding Couple Review',
    embedUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
];

export default function ClientReviews() {
  return (
    <div className="bg-[#fcf4ec] px-4 sm:px-6 lg:px-16 py-16">
      <div className="text-center mb-12">
        <h4 className="text-purple-600 font-semibold text-lg mb-2">CLIENTS ABOUT US</h4>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Look at What our Client says About JS
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Watch real and genuine client review videos of JS Event Management—recorded live at the event venue—highlighting their satisfaction with Melodia’s event planning, venue décor, and post-event services after a successful and unforgettable celebration.
        </p>
        <div className="mt-4 flex justify-center">
          <span className="h-1 w-24 bg-purple-500 rounded-full"></span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6  lg:px-40">
        {videos.map((video, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md aspect-[9/16] ">
            <iframe
              className="w-full h-full"
              src={video.embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
