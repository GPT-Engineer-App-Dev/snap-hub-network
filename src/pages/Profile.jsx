import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <img src="/placeholder.svg" alt="Profile" className="mx-auto object-cover w-32 h-32 rounded-full" />
        <h2 className="text-2xl mt-4">Username</h2>
        <p className="text-gray-600">This is the user's bio.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <img src="/placeholder.svg" alt="Photo" className="mx-auto object-cover w-full h-48" />
        <img src="/placeholder.svg" alt="Photo" className="mx-auto object-cover w-full h-48" />
        <img src="/placeholder.svg" alt="Photo" className="mx-auto object-cover w-full h-48" />
        {/* Add more photos as needed */}
      </div>
    </div>
  );
};

export default Profile;