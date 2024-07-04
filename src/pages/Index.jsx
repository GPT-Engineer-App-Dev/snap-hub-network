import React from "react";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Home</h1>
      <div className="space-y-6">
        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-4">
            <img src="/placeholder.svg" alt="User" className="mx-auto object-cover w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h2 className="text-xl">Username</h2>
              <p className="text-gray-600">This is a caption for the photo.</p>
            </div>
          </div>
          <img src="/placeholder.svg" alt="Photo" className="mx-auto object-cover w-full h-64" />
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Like
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg mb-2">Comments</h3>
            <div className="space-y-2">
              <div className="border rounded-lg p-2">
                <p className="text-gray-600"><strong>User1:</strong> Nice photo!</p>
              </div>
              <div className="border rounded-lg p-2">
                <p className="text-gray-600"><strong>User2:</strong> Great shot!</p>
              </div>
              {/* Add more comments as needed */}
            </div>
          </div>
        </div>
        {/* Add more photo posts as needed */}
      </div>
    </div>
  );
};

export default Index;