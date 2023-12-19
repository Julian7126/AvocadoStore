"use client"

import React from 'react';
import Image from 'next/image';
import styles from './Description.module.css';

interface DescriptionProps {
  image: string;
}


const PLACEHOLDER_IMAGE = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfAB8DASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAABAYCAwX/xAAeEAACAwACAwEAAAAAAAAAAAABAgADBAUTEiExgf/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAcEQACAgIDAAAAAAAAAAAAAAAAAgEREiIDEyH/2gAMAwEAAhEDEQA/AERqyIXirJIk7kAEI41QXE0I1qDmT2wk0HrmLvQq8cOodX5Frl1Ask01axLuKBtGgEfZfx2gBx7i8+gmXY7yGEasILK3ZA9jUOr7F3lrQzyK628Jn67Sze4i7SRaMT//2Q==";

const Description: React.FC<DescriptionProps> = ({ image }) => {
  return (

    <section className={styles.Description}>
        <div className={styles.Description__imageContainer}>

      <Image  className={styles.Description__img} fill placeholder="blur" blurDataURL={PLACEHOLDER_IMAGE} src={"/description.jpeg"} alt="Description Image" />

        </div>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  );
}

export default Description;
