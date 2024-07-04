import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const UploadPhoto = () => {
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the photo, caption, and tags to localStorage or a backend service
    const newPhoto = { photo, caption, tags };
    const existingPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    localStorage.setItem("photos", JSON.stringify([...existingPhotos, newPhoto]));
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Upload a New Photo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="photo">Photo</Label>
          <Input type="file" id="photo" name="photo" onChange={handlePhotoChange} />
        </div>
        <div className="mb-4">
          <Label htmlFor="caption">Caption</Label>
          <Input type="text" id="caption" name="caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
        </div>
        <div className="mb-4">
          <Label htmlFor="tags">Tags</Label>
          <Input type="text" id="tags" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} />
        </div>
        <Button type="submit">Upload</Button>
      </form>
      {photo && (
        <div className="mt-4">
          <h3 className="text-lg mb-2">Preview</h3>
          <img src={photo} alt="Preview" className="mx-auto object-cover w-full h-64" />
        </div>
      )}
    </div>
  );
};

export default UploadPhoto;