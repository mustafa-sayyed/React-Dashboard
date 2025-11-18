import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, type ChangeEvent, type FormEvent } from "react";

const AddBooks: React.FC = () => {
  const [bookFile, setBookFile] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData();
    formData.append("Name", "Mustafa");
    if (bookFile !== null && coverImage !== null) {
      formData.append("book", bookFile);
      formData.append("coverImage", coverImage);
    }
  };

  return (
    <div className="flex min-h-screen justify-center mt-10 w-full p-4">
      <div className="w-full max-w-md">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4">
          <Input
            title="Choose Book File"
            onChange={(e) => setBookFile(e.target.files[0] ?? null)}
            type="file"
            name="bookFile"
          />
          <Input
            title="Book Cover Image"
            onChange={(e) => setCoverImage(e.target.files[0] ?? null)}
            type="file"
            name="converImage"
          />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
