

// import React from 'react';

// const videos = [
//   {
//     title: "Father's Emotional Speech",
//     embedUrl: 'https://www.youtube.com/embed/rG5OkoAj3H8',
//   },
//   {
//     title: 'A Magical Destination Wedding',
//     embedUrl: "https://www.youtube.com/embed/qxh0tSNKAY8",
//   },
//   {
//     title: 'Emotional Family Review',
//     embedUrl: "https://www.youtube.com/embed/SESYNjFgaU4",
//   },
//   {
//     title: 'Destination Wedding Couple Review',
//     embedUrl:"https://www.youtube.com/embed/IXW0Mq3IUeo" ,
//   },
// ];

// export default function HomeClientreviews() {
//   return (
//     <div className=" px-4 sm:px-6 lg:px-16 py-16">
//       <div className="text-center mb-12">
//         <h4 className="text-yellow-600 font-semibold text-lg mb-2">CLIENTS ABOUT US</h4>
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//           Look at What our Client says About JS
//         </h2>
//         <p className="text-gray-700 max-w-3xl mx-auto">
//           Watch real and genuine client review videos of JS Event Management—recorded live at the event venue—highlighting their satisfaction with Melodia’s event planning, venue décor, and post-event services after a successful and unforgettable celebration.
//         </p>
//         <div className="mt-4 flex justify-center">
        
//         </div>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6  lg:px-20">
//         {videos.map((video, index) => (
//           <div key={index} className="rounded-xl overflow-hidden shadow-md aspect-square ">
//             <iframe
//               className="w-full h-full"
//               src={video.embedUrl}
//               title={video.title}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from 'react';

const videos = [
  {
    title: "Father's Emotional Speech",
    embedUrl: 'https://www.youtube.com/embed/rG5OkoAj3H8',
  },
  {
    title: 'A Magical Destination Wedding',
    embedUrl: "https://www.youtube.com/embed/qxh0tSNKAY8",
  },
  {
    title: 'Emotional Family Review',
    embedUrl: "https://www.youtube.com/embed/SESYNjFgaU4",
  },
];

export default function HomeClientreviews() {
  return (
    <div className="px-4 sm:px-6 lg:px-16 py-16">
      <div className="text-center mb-12 overflow-hidden">
        <h4 className="text-yellow-600 font-semibold text-lg mb-2">CLIENTS ABOUT US</h4>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Look at What our Client says About JS
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Watch real and genuine client review videos of JS Event Management—recorded live at the event venue—highlighting their satisfaction with Melodia’s event planning, venue décor, and post-event services after a successful and unforgettable celebration.
        </p>
        <div className="mt-4 flex justify-center">
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20">
        {videos.map((video, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md aspect-square">
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
