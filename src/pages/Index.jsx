import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setPhotos(storedPhotos);
  }, []);

  const handleLike = (index) => {
    const updatedPhotos = [...photos];
    if (!updatedPhotos[index].likes) {
      updatedPhotos[index].likes = 0;
    }
    updatedPhotos[index].likes += 1;
    localStorage.setItem("photos", JSON.stringify(updatedPhotos));
    setPhotos(updatedPhotos);
  };

  const handleUnlike = (index) => {
    const updatedPhotos = [...photos];
    if (updatedPhotos[index].likes > 0) {
      updatedPhotos[index].likes -= 1;
      localStorage.setItem("photos", JSON.stringify(updatedPhotos));
      setPhotos(updatedPhotos);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Home</h1>
      <div className="space-y-6">
        {photos.map((photo, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="User" className="mx-auto object-cover w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h2 className="text-xl">Username</h2>
                <p className="text-gray-600">{photo.caption}</p>
              </div>
            </div>
            <img src={photo.photo} alt="Photo" className="mx-auto object-cover w-full h-64" />
            <div className="mt-4 flex items-center space-x-4">
              <Button onClick={() => handleLike(index)} variant="outline">
                Like
              </Button>
              <Button onClick={() => handleUnlike(index)} variant="outline">
                Unlike
              </Button>
              <span>{photo.likes || 0} Likes</span>
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
        ))}
      </div>
    </div>
  );
};

export default Index;