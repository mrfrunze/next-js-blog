"use client"; 

import Image from "next/image";

const PostImageClient = ({ imageUrl, fallbackImage, alt }) => {

  return (
    <Image 
      src={imageUrl || fallbackImage} 
      alt={alt} 
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: 'cover'}}
    />
  );
};

export default PostImageClient;
