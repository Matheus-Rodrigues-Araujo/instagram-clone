"use client";
import Image from "next/image";
import { IUserSuggestion } from "@/interfaces/IUserSuggestion";
import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
export const UserSuggestionCard = ({ user }: IUserSuggestion) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="flex items-center justify-around">
      {loading ? (
        <Skeleton
          width={40}
          className=" h-10 rounded-full mr-2 product-image"
          style={{ borderRadius: "2em" }}
        />
      ) : (
        <Image
          src={user.profileImage}
          alt="User profile"
          className="object-cover h-14 w-14 rounded-full"
        />
      )}
      <div className="flex flex-col">
        {loading ? (
          <Skeleton
            width={80}
            height={10}
            className=" h-10 rounded-full mr-2 product-image"
            style={{ borderRadius: "2em" }}
          />
        ) : (
          <h4 className="text-white font-medium">{user.username}</h4>
        )}
        {loading ? (
          <Skeleton
            width={120}
            height={10}
            className=" h-10 rounded-full mr-2 product-image"
            style={{ borderRadius: "2em" }}
          />
        ) : (
          <p className="text-customLighterPink text-thin text-sm">
            New on Momentz
          </p>
        )}
      </div>
      {loading ? (
        <Skeleton
          width={40}
          height={20}
          className=" h-10 rounded-full mr-2 product-image"
          style={{ borderRadius: "2em" }}
        />
      ) : (
        <button className="text-customLightBlue text-semibold hover:text-customLighterBlue">
          Follow
        </button>
      )}
    </div>
  );
};
