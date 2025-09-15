import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { LucideInstagram } from "lucide-react";

const photographers = [
  {
    name: "Onkar Naik",
    city: "Mumbai",
    image: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/8f25372d3751149f374f2e8976dd3d93/talent/image/46313fece8b34bf2cb35828455ed6a72/7/8/7802409-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T125257Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=9d8cdc231ecae91b90e4c6494b2dbf73a02b189de6c506770233098e08114a8c", // replace with actual image,
    instagram : true,
  },
  {
    name: "Adhiraj Chakrabarti",
    city: "New York",
    image: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/8f25372d3751149f374f2e8976dd3d93/talent/image/b20881c83f2835683995fa763a5aca5c/6/4/6480628-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T125257Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=3c341735563af5e383a7bcffb04bfa9d17e97eadccfd0e98d49fab7e73c90e5e",
    instagram: true,
  },
  {
    name: "Tibi Clenci",
    city: "Bucharest",
    image: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/8f25372d3751149f374f2e8976dd3d93/talent/image/2bab11479ed718dd0a801cd875924a75/7/9/7908149-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T125258Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=b15aa20faf9e752e366c2ba60eefd5f2e18f7b12745380f091fa774e58c7bc3c", // replace with actual image
    instagram: true,
  },
  {
    name: "Pulkit Mishra",
    city: "Mumbai",
    image: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/8f25372d3751149f374f2e8976dd3d93/talent/image/00a4285af3704cbe0a002a97dc0a2e7a/7/7/7712025-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T125300Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=5e65c0802b4e8f0c3928df2046ed787827256177d9a950cc06313f0a791b689b",
    instagram: true,
  },
  {
    name: "Onkar Naik",
    city: "Mumbai",
    image: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/8f25372d3751149f374f2e8976dd3d93/talent/image/2bab11479ed718dd0a801cd875924a75/7/9/7908149-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T125258Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=b15aa20faf9e752e366c2ba60eefd5f2e18f7b12745380f091fa774e58c7bc3c", // replace with actual image
  },
  {
    name: "Adhiraj Chakrabarti",
    city: "New York",
    image: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/8f25372d3751149f374f2e8976dd3d93/talent/image/2bab11479ed718dd0a801cd875924a75/7/9/7908149-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T125258Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=b15aa20faf9e752e366c2ba60eefd5f2e18f7b12745380f091fa774e58c7bc3c", // replace with actual image
    instagram: true,
  },
  {
    name: "Tibi Clenci",
    city: "Bucharest",
    image: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/8f25372d3751149f374f2e8976dd3d93/talent/image/2bab11479ed718dd0a801cd875924a75/7/9/7908149-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T125258Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=b15aa20faf9e752e366c2ba60eefd5f2e18f7b12745380f091fa774e58c7bc3c", // replace with actual image
    instagram: true,
  },
  {
    name: "Pulkit Mishra",
    city: "Mumbai",
    image: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/8f25372d3751149f374f2e8976dd3d93/talent/image/2bab11479ed718dd0a801cd875924a75/7/9/7908149-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T125258Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=b15aa20faf9e752e366c2ba60eefd5f2e18f7b12745380f091fa774e58c7bc3c", // replace with actual image
    instagram: true,
  },
];

const Photographers = () => {
return (
    <div className="pt-28 px-6 max-w-7xl mx-auto">
            <Navbar></Navbar>
        {/* Heading */}
        <h2 className="text-3xl font-light text-gray-700 mb-4">Photographers</h2>
        <div className="h-[1px] bg-black/60 w-full mb-4"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {photographers.map((p, idx) => (
                <div key={idx} className="flex flex-col">
                    <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="mt-3">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg text-gray-900">
                                {p.name}
                            </h3>
                            {p.instagram && (
                                <span className="text-sm">
                                    <LucideInstagram></LucideInstagram>
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-orange-500">{p.city}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default Photographers;
